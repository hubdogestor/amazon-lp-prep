#!/usr/bin/env node

/**
 * Reclassificação Automática de Cases
 * 
 * Estratégia:
 * 1. TOP CASES: Cases que respondem à primeira pergunta típica (index 0) de cada LP
 * 2. GOOD CASES: Outros cases de qualidade que não são top
 * 
 * Critérios para GOOD CASE:
 * - Score >= 50 em alguma pergunta típica
 * - Tem métricas quantitativas (números, %, R$)
 * - Tem conteúdo completo (S.T.A.R.L + 10 FUPs)
 * - Não é genérico (menciona empresa, período, contexto específico)
 */

const fs = require('fs');
const path = require('path');

// Carregar mapeamento do JSON
const mappingJSONPath = path.join(__dirname, '../../perguntas-cases/dados/mapeamento-perguntas-cases-COMPLETO.json');
const mappingArray = JSON.parse(fs.readFileSync(mappingJSONPath, 'utf-8'));

// Converter array para objeto agrupado por LP e índice de pergunta
const questionsToCasesMapping = {};
const questionIndexByLP = {};

mappingArray.forEach(item => {
  if (!questionsToCasesMapping[item.lp]) {
    questionsToCasesMapping[item.lp] = {};
    questionIndexByLP[item.lp] = 0;
  }
  
  const qIdx = questionIndexByLP[item.lp]++;
  
  if (item.has_case === 'sim') {
    questionsToCasesMapping[item.lp][qIdx] = {
      case_id: item.case_id,
      score: item.score
    };
  }
});

// LPs disponíveis
const LPS = [
  'customer_obsession',
  'ownership',
  'invent_and_simplify',
  'are_right_a_lot',
  'learn_and_be_curious',
  'hire_and_develop_the_best',
  'insist_on_highest_standards',
  'bias_for_action',
  'frugality',
  'earn_trust',
  'dive_deep',
  'broad_responsibility',
  'deliver_results',
  'think_big',
  'best_employer',
  'disagree_and_commit'
];

// Função para ler um case
function readCase(lpId, caseFileName) {
  const casePath = path.join(__dirname, `../../src/data/${lpId}/${caseFileName}`);
  if (!fs.existsSync(casePath)) return null;
  
  let content = fs.readFileSync(casePath, 'utf-8');
  // Extrair objeto do case
  const match = content.match(/const\s+\w+\s*=\s*({[\s\S]*?});?\s*(?:export|$)/);
  if (!match) return null;
  
  try {
    // Eval para converter string JS em objeto
    const caseObj = eval(`(${match[1]})`);
    return caseObj;
  } catch (err) {
    console.error(`❌ Erro ao ler ${caseFileName}:`, err.message);
    return null;
  }
}

// Função para verificar qualidade de um case
function analyzeCaseQuality(caseObj) {
  const issues = [];
  const strengths = [];
  
  // 1. Verificar completude do STAR(L)
  const starSections = ['s', 't', 'a', 'r', 'l'];
  const pt = caseObj.pt || {};
  const missingPT = starSections.filter(s => !pt[s] || pt[s].length < 50);
  
  if (missingPT.length === 0) {
    strengths.push('STAR(L) completo em PT');
  } else {
    issues.push(`STAR(L) PT incompleto: ${missingPT.join(', ')}`);
  }
  
  // 2. Verificar FUPs
  const fups = caseObj.fups || [];
  if (fups.length >= 10) {
    strengths.push(`${fups.length} FUPs`);
  } else {
    issues.push(`Apenas ${fups.length} FUPs (esperado: 10)`);
  }
  
  // 3. Verificar métricas quantitativas
  const fullText = JSON.stringify(pt);
  const hasMetrics = /\d+%|\d+x|R\$\s*\d+|USD\s*\d+|\d+\s*dias?|\d+\s*meses?/i.test(fullText);
  if (hasMetrics) {
    strengths.push('Contém métricas quantitativas');
  } else {
    issues.push('Sem métricas quantitativas claras');
  }
  
  // 4. Verificar especificidade (empresa + período)
  if (caseObj.company && caseObj.period) {
    strengths.push(`Contexto: ${caseObj.company} (${caseObj.period})`);
  } else {
    issues.push('Sem empresa ou período definido');
  }
  
  // 5. Verificar tamanho (não muito curto, não muito longo)
  const totalLength = starSections.reduce((sum, s) => sum + (pt[s]?.length || 0), 0);
  if (totalLength >= 1000 && totalLength <= 5000) {
    strengths.push(`Tamanho adequado: ${totalLength} chars`);
  } else if (totalLength < 1000) {
    issues.push(`Texto curto: ${totalLength} chars`);
  } else {
    issues.push(`Texto longo: ${totalLength} chars`);
  }
  
  // 6. Verificar ratio EU:NÓS
  const euCount = (fullText.match(/\beu\b/gi) || []).length;
  const nosCount = (fullText.match(/\bnós\b/gi) || []).length;
  const ratio = nosCount > 0 ? euCount / nosCount : euCount;
  
  if (ratio >= 2) {
    strengths.push(`Ratio EU:NÓS = ${ratio.toFixed(1)}:1`);
  } else {
    issues.push(`Ratio EU:NÓS = ${ratio.toFixed(1)}:1 (baixo)`);
  }
  
  // Score final
  const qualityScore = (strengths.length / (strengths.length + issues.length)) * 100;
  
  return { qualityScore, strengths, issues };
}

// Função principal
async function reclassifyCases() {
  console.log('🔄 RECLASSIFICAÇÃO DE CASES\n');
  console.log('════════════════════════════════════════════════════════════════\n');
  
  const results = {
    topCases: [],
    goodCases: [],
    regularCases: [],
    summary: {}
  };
  
  // Para cada LP
  for (const lpId of LPS) {
    console.log(`\n📊 Analisando ${lpId}...`);
    console.log('─'.repeat(60));
    
    // 1. Identificar TOP CASE (pergunta #0)
    const mapping = questionsToCasesMapping[lpId];
    if (!mapping || !mapping['0']) {
      console.log(`⚠️  Sem mapeamento para pergunta #0`);
      results.summary[lpId] = { topCase: null, goodCases: [], regularCases: [] };
      continue;
    }
    
    const topCaseId = mapping['0'].case_id;
    const topCaseScore = mapping['0'].score;
    
    console.log(`\n✅ TOP CASE (pergunta #0, score: ${topCaseScore}):`);
    console.log(`   → ${topCaseId}`);
    
    results.topCases.push({ lpId, caseId: topCaseId, score: topCaseScore });
    
    // 2. Listar todos os cases do LP
    const lpDir = path.join(__dirname, `../../src/data/${lpId}`);
    if (!fs.existsSync(lpDir)) {
      console.log(`⚠️  Diretório não existe: ${lpDir}`);
      continue;
    }
    
    const files = fs.readdirSync(lpDir).filter(f => f.includes('_case') && f.endsWith('.js') && !f.includes('config'));
    
    console.log(`\n🔍 Analisando ${files.length} cases restantes...`);
    
    const lpGoodCases = [];
    const lpRegularCases = [];
    
    // 3. Analisar cada case
    for (const file of files) {
      const caseObj = readCase(lpId, file);
      if (!caseObj) continue;
      
      const caseId = caseObj.id;
      
      // Pular se já é TOP CASE
      if (caseId === topCaseId) {
        results.summary[lpId] = results.summary[lpId] || {};
        results.summary[lpId].topCase = { id: caseId, file };
        continue;
      }
      
      // Analisar qualidade
      const analysis = analyzeCaseQuality(caseObj);
      
      // Verificar score nas perguntas típicas
      let maxScore = 0;
      let questionsWithScore = 0;
      
      for (const [qIdx, data] of Object.entries(mapping)) {
        if (data && data.case_id === caseId) {
          maxScore = Math.max(maxScore, data.score);
          questionsWithScore++;
        }
      }
      
      // Decisão: GOOD CASE ou REGULAR
      const isGood = (
        analysis.qualityScore >= 70 &&  // Qualidade >= 70%
        maxScore >= 50 &&                // Score >= 50 em alguma pergunta
        questionsWithScore >= 1          // Responde pelo menos 1 pergunta
      );
      
      const caseInfo = {
        id: caseId,
        file,
        title: caseObj.title_pt || caseObj.title,
        qualityScore: Math.round(analysis.qualityScore),
        maxScore,
        questionsWithScore,
        isTopCase: caseObj.isTopCase || false,
        strengths: analysis.strengths,
        issues: analysis.issues
      };
      
      if (isGood) {
        lpGoodCases.push(caseInfo);
        results.goodCases.push({ lpId, ...caseInfo });
        console.log(`\n   ✨ GOOD CASE: ${caseId}`);
        console.log(`      Título: ${caseInfo.title.substring(0, 60)}...`);
        console.log(`      Qualidade: ${caseInfo.qualityScore}% | Score max: ${maxScore} | Perguntas: ${questionsWithScore}`);
        console.log(`      ✅ ${analysis.strengths.slice(0, 3).join(' • ')}`);
      } else {
        lpRegularCases.push(caseInfo);
        results.regularCases.push({ lpId, ...caseInfo });
        console.log(`\n   📄 Regular: ${caseId}`);
        console.log(`      Qualidade: ${caseInfo.qualityScore}% | Score max: ${maxScore} | Perguntas: ${questionsWithScore}`);
        if (analysis.issues.length > 0) {
          console.log(`      ⚠️  ${analysis.issues.slice(0, 2).join(' • ')}`);
        }
      }
    }
    
    results.summary[lpId] = {
      topCase: results.summary[lpId]?.topCase || null,
      goodCases: lpGoodCases,
      regularCases: lpRegularCases
    };
  }
  
  // Resumo Final
  console.log('\n\n════════════════════════════════════════════════════════════════');
  console.log('📊 RESUMO FINAL');
  console.log('════════════════════════════════════════════════════════════════\n');
  
  console.log(`✅ TOP CASES: ${results.topCases.length} (1 por LP)`);
  console.log(`✨ GOOD CASES: ${results.goodCases.length}`);
  console.log(`📄 REGULAR CASES: ${results.regularCases.length}`);
  
  console.log('\n\n📋 DETALHAMENTO POR LP:');
  console.log('─'.repeat(60));
  
  for (const lpId of LPS) {
    const data = results.summary[lpId];
    if (!data) continue;
    
    const topCount = data.topCase ? 1 : 0;
    const goodCount = data.goodCases.length;
    const regularCount = data.regularCases.length;
    
    console.log(`\n${lpId}:`);
    console.log(`  ✅ Top: ${topCount} | ✨ Good: ${goodCount} | 📄 Regular: ${regularCount}`);
    
    if (data.goodCases.length > 0) {
      console.log(`  Good cases:`);
      data.goodCases.forEach(c => {
        console.log(`    • ${c.id} (Q: ${c.qualityScore}%, S: ${c.maxScore})`);
      });
    }
  }
  
  // Salvar resultado em JSON
  const outputPath = path.join(__dirname, '../reports/case-reclassification.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n\n💾 Resultado salvo em: ${outputPath}`);
  
  // Gerar script de atualização
  generateUpdateScript(results);
  
  return results;
}

// Gerar script para aplicar mudanças
function generateUpdateScript(results) {
  let script = '#!/usr/bin/env node\n\n';
  script += '/**\n';
  script += ' * Script de Atualização de Cases\n';
  script += ' * Aplica classificação: isTopCase e isGoodCase\n';
  script += ' */\n\n';
  script += 'const fs = require("fs");\n';
  script += 'const path = require("path");\n\n';
  script += 'const updates = [\n';
  
  // Top Cases
  for (const item of results.topCases) {
    const summary = results.summary[item.lpId];
    if (!summary?.topCase) continue;
    
    script += `  { lpId: "${item.lpId}", file: "${summary.topCase.file}", isTopCase: true, isGoodCase: false },\n`;
  }
  
  // Good Cases
  for (const item of results.goodCases) {
    script += `  { lpId: "${item.lpId}", file: "${item.file}", isTopCase: false, isGoodCase: true },\n`;
  }
  
  // Regular Cases
  for (const item of results.regularCases) {
    script += `  { lpId: "${item.lpId}", file: "${item.file}", isTopCase: false, isGoodCase: false },\n`;
  }
  
  script += '];\n\n';
  script += 'console.log("🔄 Atualizando cases...");\n\n';
  script += 'for (const update of updates) {\n';
  script += '  const filePath = path.join(__dirname, `../../src/data/${update.lpId}/${update.file}`);\n';
  script += '  if (!fs.existsSync(filePath)) continue;\n\n';
  script += '  let content = fs.readFileSync(filePath, "utf-8");\n\n';
  script += '  // Atualizar isTopCase\n';
  script += '  content = content.replace(/isTopCase:\\s*(true|false)/g, `isTopCase: ${update.isTopCase}`);\n\n';
  script += '  // Adicionar ou atualizar isGoodCase\n';
  script += '  if (/isGoodCase:\\s*(true|false)/.test(content)) {\n';
  script += '    content = content.replace(/isGoodCase:\\s*(true|false)/g, `isGoodCase: ${update.isGoodCase}`);\n';
  script += '  } else {\n';
  script += '    content = content.replace(/isTopCase:\\s*(true|false)/g, `isTopCase: ${update.isTopCase},\\n  isGoodCase: ${update.isGoodCase}`);\n';
  script += '  }\n\n';
  script += '  fs.writeFileSync(filePath, content);\n';
  script += '  console.log(`✅ ${update.lpId}/${update.file}`);\n';
  script += '}\n\n';
  script += 'console.log("\\n✅ Atualização concluída!");\n';
  
  const scriptPath = path.join(__dirname, 'apply_case_reclassification.cjs');
  fs.writeFileSync(scriptPath, script);
  fs.chmodSync(scriptPath, '755');
  
  console.log(`\n📝 Script de atualização gerado: ${scriptPath}`);
  console.log(`   Execute: node ${scriptPath}`);
}

// Executar
reclassifyCases().catch(err => {
  console.error('❌ Erro:', err);
  process.exit(1);
});
