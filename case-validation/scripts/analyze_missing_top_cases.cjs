#!/usr/bin/env node

/**
 * Análise Especial: LPs sem Top Case
 * 
 * Analisa invent_and_simplify e deliver_results para identificar:
 * 1. Por que não têm pergunta #0 mapeada
 * 2. Qual case seria o melhor candidato a Top Case
 * 3. Propor atualização do mapeamento
 */

const fs = require('fs');
const path = require('path');

// Carregar mapeamento do JSON
const mappingJSONPath = path.join(__dirname, '../../perguntas-cases/dados/mapeamento-perguntas-cases-COMPLETO.json');
const mappingArray = JSON.parse(fs.readFileSync(mappingJSONPath, 'utf-8'));

// LPs problemáticos
const MISSING_LPS = ['invent_and_simplify', 'deliver_results'];

// Função para ler um case file
function readCase(lpId, caseFileName) {
  const filePath = path.join(__dirname, `../../src/data/${lpId}/${caseFileName}`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extrair o objeto case usando regex
    const match = content.match(/const\s+\w+\s*=\s*({[\s\S]*?});?\s*(?:export|$)/);
    
    if (!match) {
      console.warn(`⚠️  Não consegui parsear: ${caseFileName}`);
      return null;
    }

    const caseObj = eval(`(${match[1]})`);
    return caseObj;
  } catch (err) {
    console.warn(`⚠️  Erro ao ler ${caseFileName}:`, err.message);
    return null;
  }
}

// Função para analisar qualidade do case
function analyzeCaseQuality(caseObj) {
  const strengths = [];
  const issues = [];

  // 1. STAR(L) completo em PT
  const pt = caseObj.pt || {};
  const hasCompleteStar = pt.s && pt.t && pt.a && pt.r && pt.l &&
    pt.s.length > 50 && pt.t.length > 50 && pt.a.length > 50 && pt.r.length > 50 && pt.l.length > 50;
  
  if (hasCompleteStar) {
    strengths.push('STAR(L) completo em PT');
  } else {
    issues.push('STAR(L) incompleto ou muito curto');
  }

  // 2. FUPs completos (10 esperados)
  const fups = caseObj.fups || [];
  if (fups.length === 10) {
    strengths.push('10 FUPs completos');
  } else {
    issues.push(`Apenas ${fups.length} FUPs (esperado: 10)`);
  }

  // 3. Métricas quantitativas
  const fullText = JSON.stringify(pt);
  const hasMetrics = /\d+%|\d+x|R\$\s*\d+|USD\s*\d+|\d+\s*dias?|\d+\s*meses?/i.test(fullText);
  
  if (hasMetrics) {
    strengths.push('Métricas quantitativas presentes');
  } else {
    issues.push('Faltam métricas quantitativas');
  }

  // 4. Contexto específico (empresa + período)
  const hasCompany = caseObj.company && caseObj.company.length > 2;
  const hasPeriod = caseObj.period && caseObj.period.length > 5;
  
  if (hasCompany && hasPeriod) {
    strengths.push(`Contexto específico: ${caseObj.company}, ${caseObj.period}`);
  } else {
    issues.push('Falta contexto específico (empresa/período)');
  }

  // 5. Tamanho adequado (não muito curto, não muito longo)
  const totalLength = (pt.s || '').length + (pt.t || '').length + (pt.a || '').length + (pt.r || '').length + (pt.l || '').length;
  if (totalLength >= 1000 && totalLength <= 5000) {
    strengths.push('Tamanho adequado');
  } else if (totalLength < 1000) {
    issues.push('Case muito curto');
  } else {
    issues.push('Case muito longo');
  }

  // 6. Ratio EU:NÓS (ownership)
  const euCount = (fullText.match(/\beu\b/gi) || []).length;
  const nosCount = (fullText.match(/\bnós\b/gi) || []).length;
  const ratio = nosCount > 0 ? euCount / nosCount : euCount;
  
  if (ratio >= 2) {
    strengths.push(`Ratio EU:NÓS = ${ratio.toFixed(1)}:1 (ownership forte)`);
  } else if (ratio >= 1) {
    strengths.push(`Ratio EU:NÓS = ${ratio.toFixed(1)}:1 (adequado)`);
  } else {
    issues.push(`Ratio EU:NÓS = ${ratio.toFixed(1)}:1 (muito baixo)`);
  }

  const qualityScore = (strengths.length / (strengths.length + issues.length)) * 100;

  return {
    qualityScore: Math.round(qualityScore),
    strengths,
    issues
  };
}

// Função para analisar um LP sem top case
function analyzeMissingLP(lpId) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`📊 ANALISANDO: ${lpId.toUpperCase()}`);
  console.log(`${'='.repeat(80)}\n`);

  // 1. Verificar mapeamento atual
  const lpMappings = mappingArray.filter(item => item.lp === lpId);
  
  console.log(`📋 Perguntas Típicas Mapeadas: ${lpMappings.length}`);
  
  // Verificar se existe pergunta #0
  const hasQuestion0 = lpMappings.some(item => item.question_pt && item.question_pt.includes('primeira pergunta') || lpMappings[0]);
  
  if (!hasQuestion0) {
    console.log(`⚠️  PROBLEMA: Não há pergunta #0 (primeira pergunta típica) mapeada`);
  }
  
  console.log(`\n📝 Perguntas Mapeadas:`);
  lpMappings.slice(0, 5).forEach((item, idx) => {
    console.log(`  ${idx}. "${item.question_pt.substring(0, 80)}..."`);
    console.log(`     Case: ${item.case_id || 'N/A'} (Score: ${item.score || 0}, Has Case: ${item.has_case})`);
  });

  // 2. Listar todos os cases deste LP
  const lpDir = path.join(__dirname, `../../src/data/${lpId}`);
  
  if (!fs.existsSync(lpDir)) {
    console.log(`\n❌ Diretório não encontrado: ${lpDir}`);
    return;
  }

  const files = fs.readdirSync(lpDir).filter(f => 
    f.includes('_case') && 
    f.endsWith('.js') && 
    !f.includes('config')
  );

  console.log(`\n📁 Cases Encontrados: ${files.length}`);

  // 3. Analisar cada case
  const casesAnalysis = [];

  files.forEach((file, idx) => {
    const caseObj = readCase(lpId, file);
    
    if (!caseObj) {
      return;
    }

    // Análise de qualidade
    const quality = analyzeCaseQuality(caseObj);

    // Verificar se está mapeado
    const mappedTo = lpMappings.filter(m => m.case_id === caseObj.id);
    const scores = mappedTo.map(m => m.score || 0);
    const maxScore = scores.length > 0 ? Math.max(...scores) : 0;
    const questionsAnswered = mappedTo.length;

    casesAnalysis.push({
      file,
      id: caseObj.id,
      title: caseObj.title || caseObj.title_pt,
      qualityScore: quality.qualityScore,
      strengths: quality.strengths,
      issues: quality.issues,
      maxScore,
      questionsAnswered,
      isTopCase: caseObj.isTopCase || false,
      isGoodCase: caseObj.isGoodCase || false
    });

    console.log(`\n  ${idx + 1}. ${file}`);
    console.log(`     ID: ${caseObj.id}`);
    console.log(`     Título: ${(caseObj.title || caseObj.title_pt).substring(0, 60)}...`);
    console.log(`     Qualidade: ${quality.qualityScore}%`);
    console.log(`     Score máximo: ${maxScore} (responde ${questionsAnswered} pergunta(s))`);
    console.log(`     Flags: isTopCase=${caseObj.isTopCase || false}, isGoodCase=${caseObj.isGoodCase || false}`);
    
    if (quality.qualityScore >= 70 && maxScore >= 50) {
      console.log(`     ✨ CANDIDATO A TOP CASE (alta qualidade + bom score)`);
    } else if (quality.qualityScore >= 70) {
      console.log(`     ✅ Boa qualidade (mas score baixo: ${maxScore})`);
    } else {
      console.log(`     ⚠️  Qualidade abaixo do ideal (${quality.issues.join(', ')})`);
    }
  });

  // 4. Recomendar TOP CASE
  console.log(`\n${'='.repeat(80)}`);
  console.log(`🎯 RECOMENDAÇÃO PARA TOP CASE`);
  console.log(`${'='.repeat(80)}\n`);

  // Ordenar por qualidade + score
  const bestCandidates = casesAnalysis
    .sort((a, b) => {
      // Priorizar: qualidade + score
      const scoreA = a.qualityScore * 0.6 + a.maxScore * 0.4;
      const scoreB = b.qualityScore * 0.6 + b.maxScore * 0.4;
      return scoreB - scoreA;
    })
    .slice(0, 3);

  console.log(`Top 3 Candidatos (por qualidade + score):`);
  bestCandidates.forEach((c, idx) => {
    const combined = (c.qualityScore * 0.6 + c.maxScore * 0.4).toFixed(1);
    console.log(`\n  ${idx + 1}. ${c.id}`);
    console.log(`     Título: ${c.title.substring(0, 60)}...`);
    console.log(`     Score Combinado: ${combined} (Q:${c.qualityScore}% × 0.6 + S:${c.maxScore} × 0.4)`);
    console.log(`     Responde: ${c.questionsAnswered} pergunta(s)`);
    console.log(`     Strengths: ${c.strengths.slice(0, 3).join('; ')}`);
    
    if (c.issues.length > 0) {
      console.log(`     Issues: ${c.issues.join('; ')}`);
    }
  });

  // Recomendação final
  const winner = bestCandidates[0];
  console.log(`\n🏆 RECOMENDAÇÃO FINAL: ${winner.id}`);
  console.log(`   "${winner.title}"`);
  console.log(`   Score: ${(winner.qualityScore * 0.6 + winner.maxScore * 0.4).toFixed(1)}`);
  console.log(`   Ação: Marcar como isTopCase=true e mapear como pergunta #0`);

  return {
    lpId,
    recommendedTopCase: winner.id,
    title: winner.title,
    qualityScore: winner.qualityScore,
    maxScore: winner.maxScore,
    allCases: casesAnalysis
  };
}

// ============================================================================
// MAIN
// ============================================================================

console.log('🔍 ANÁLISE ESPECIAL: LPs SEM TOP CASE');
console.log('='.repeat(80));

const results = {};

MISSING_LPS.forEach(lpId => {
  const result = analyzeMissingLP(lpId);
  results[lpId] = result;
});

// Salvar recomendações
const outputPath = path.join(__dirname, '../reports/missing-top-cases-analysis.json');
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

console.log(`\n\n${'='.repeat(80)}`);
console.log('✅ ANÁLISE CONCLUÍDA');
console.log(`${'='.repeat(80)}`);
console.log(`\n📄 Relatório salvo em: ${outputPath}`);
console.log(`\n📋 RESUMO:`);

MISSING_LPS.forEach(lpId => {
  const r = results[lpId];
  console.log(`\n  ${lpId}:`);
  console.log(`    🏆 Top Case Recomendado: ${r.recommendedTopCase}`);
  console.log(`    📊 Qualidade: ${r.qualityScore}% | Score: ${r.maxScore}`);
  console.log(`    📝 "${r.title.substring(0, 60)}..."`);
});

console.log(`\n💡 PRÓXIMO PASSO: Atualizar mapeamento e marcar esses cases como isTopCase=true`);
