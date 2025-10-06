#!/usr/bin/env node
/**
 * map_questions_to_cases.cjs
 * 
 * Mapeia TODAS as 171 perguntas do typicalQuestions.js para os cases existentes.
 * Gera mapeamento-perguntas-cases.csv completo com análise criteriosa.
 * 
 * Estratégia:
 * 1. Lê typicalQuestions.js (171 perguntas PT)
 * 2. Carrega todos os 80 cases
 * 3. Para cada pergunta, analisa semanticamente qual case melhor responde
 * 4. Gera CSV com: pergunta | tem_case? | case_id | case_title | reasoning
 * 5. Identifica gaps (perguntas sem case adequado)
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURAÇÃO
// ============================================================================

const DATA_DIR = path.join(__dirname, '..', '..', 'src', 'data');
const OUTPUT_CSV = path.join(__dirname, '..', 'dados', 'mapeamento-perguntas-cases-COMPLETO.csv');
const OUTPUT_JSON = path.join(__dirname, '..', 'dados', 'mapeamento-perguntas-cases-COMPLETO.json');
const OUTPUT_GAPS = path.join(__dirname, '..', 'relatorios', 'gaps-perguntas-sem-cases.md');

// Mapeamento de LPs: nome em typicalQuestions.js → pasta em src/data
const LP_FOLDER_MAP = {
  'customer_obsession': 'customer_obsession',
  'ownership': 'ownership',
  'invent_simplify': 'invent_and_simplify',
  'are_right_a_lot': 'are_right_a_lot',
  'learn_and_be_curious': 'learn_and_be_curious',
  'hire_and_develop_the_best': 'hire_and_develop_the_best',
  'insist_on_highest_standards': 'insist_on_highest_standards',
  'think_big': 'think_big',
  'bias_for_action': 'bias_for_action',
  'frugality': 'frugality',
  'earn_trust': 'earn_trust',
  'dive_deep': 'dive_deep',
  'disagree_and_commit': 'disagree_and_commit',
  'deliver_results': 'deliver_results',
  'best_employer': 'best_employer',
  'broad_responsibility': 'broad_responsibility'
};

// ============================================================================
// 1. CARREGAR PERGUNTAS DO typicalQuestions.js
// ============================================================================

function loadTypicalQuestions() {
  console.log('\n📖 Carregando typicalQuestions.js...');
  const filePath = path.join(__dirname, '..', '..', 'src', 'data', 'typicalQuestions.js');
  
  // Ler arquivo e extrair objeto (parsing manual simples)
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Usar eval em contexto controlado para extrair o objeto
  const typicalQuestions = (() => {
    const exportMatch = content.match(/const typicalQuestions = ({[\s\S]*?});[\s\S]*export default/);
    if (!exportMatch) throw new Error('Não encontrou typicalQuestions object');
    return eval('(' + exportMatch[1] + ')');
  })();
  
  console.log(`   ✓ Carregado ${Object.keys(typicalQuestions).length} LPs`);
  
  // Transformar em array plano: { lp, question_pt, question_en }
  const questions = [];
  for (const [lpKey, data] of Object.entries(typicalQuestions)) {
    const ptQuestions = data.pt || [];
    const enQuestions = data.en || [];
    
    for (let i = 0; i < ptQuestions.length; i++) {
      questions.push({
        lp: lpKey,
        question_pt: ptQuestions[i],
        question_en: enQuestions[i] || '',
        priority: i === 0 ? 'ALTA' : 'NORMAL' // Primeira pergunta = prioridade alta
      });
    }
  }
  
  console.log(`   ✓ Total de ${questions.length} perguntas extraídas\n`);
  return questions;
}

// ============================================================================
// 2. CARREGAR TODOS OS CASES
// ============================================================================

function loadAllCases() {
  console.log('📦 Carregando todos os cases...');
  const casesByLP = {};
  
  for (const [lpKey, folderName] of Object.entries(LP_FOLDER_MAP)) {
    const lpDir = path.join(DATA_DIR, folderName);
    if (!fs.existsSync(lpDir)) {
      console.log(`   ⚠️  Pasta não encontrada: ${folderName}`);
      casesByLP[lpKey] = [];
      continue;
    }
    
    const files = fs.readdirSync(lpDir).filter(f => f.endsWith('.js'));
    const cases = [];
    
    for (const file of files) {
      try {
        const filePath = path.join(lpDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Extrair case object (parsing simplificado)
        const caseMatch = content.match(/const \w+ = ({[\s\S]*?});[\s\S]*export default/);
        if (!caseMatch) continue;
        
        const caseObj = eval('(' + caseMatch[1] + ')');
        
        cases.push({
          id: caseObj.id,
          title_pt: caseObj.title_pt || caseObj.title,
          title_en: caseObj.title_en || '',
          company: caseObj.company,
          period: caseObj.period,
          isTopCase: caseObj.isTopCase || false,
          pt: caseObj.pt,
          en: caseObj.en,
          filePath: path.relative(__dirname, filePath)
        });
      } catch (err) {
        console.log(`   ⚠️  Erro ao ler ${file}: ${err.message}`);
      }
    }
    
    casesByLP[lpKey] = cases;
    console.log(`   ✓ ${lpKey}: ${cases.length} cases`);
  }
  
  const totalCases = Object.values(casesByLP).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`\n   ✓ Total: ${totalCases} cases carregados\n`);
  
  return casesByLP;
}

// ============================================================================
// 3. ANÁLISE SEMÂNTICA: MAPEAR PERGUNTA → CASE
// ============================================================================

/**
 * Analisa se um case responde bem uma pergunta específica.
 * Retorna score 0-100 e reasoning.
 */
function analyzeCaseForQuestion(question, caseData) {
  const q = question.question_pt.toLowerCase();
  const titlePt = (caseData.title_pt || '').toLowerCase();
  const situation = (caseData.pt?.situation || '').toLowerCase();
  const task = (caseData.pt?.task || '').toLowerCase();
  const action = (caseData.pt?.action || '').toLowerCase();
  const result = (caseData.pt?.result || '').toLowerCase();
  const fullCase = [titlePt, situation, task, action, result].join(' ');
  
  let score = 0;
  const reasons = [];
  
  // BASELINE: Todo case do mesmo LP começa com 40 pontos (é um case relevante por definição)
  score = 40;
  reasons.push(`Case do LP correto (${question.lp})`);
  
  // KEYWORDS principais na pergunta
  const keywords = extractKeywords(q);
  
  // Pontuação por match de keywords (mais generoso)
  let keywordMatches = 0;
  for (const kw of keywords) {
    if (fullCase.includes(kw)) {
      keywordMatches++;
    }
  }
  
  if (keywordMatches >= 3) {
    score += 30;
    reasons.push(`${keywordMatches} keywords-chave presentes`);
  } else if (keywordMatches >= 2) {
    score += 20;
    reasons.push(`${keywordMatches} keywords presentes`);
  } else if (keywordMatches === 1) {
    score += 10;
    reasons.push(`1 keyword presente`);
  }
  
  // Contexto específico (mais pontos)
  const contextScore = analyzeContext(q, caseData);
  score += contextScore.score;
  if (contextScore.reason) reasons.push(contextScore.reason);
  
  // Análise semântica profunda de conceitos
  const conceptScore = analyzeConceptMatch(q, caseData, fullCase);
  score += conceptScore.score;
  if (conceptScore.reason) reasons.push(conceptScore.reason);
  
  // Bonus: title muito alinhado
  if (titlePt.length > 20 && hasSemanticOverlap(q, titlePt, 0.3)) {
    score += 10;
    reasons.push('Título muito alinhado com pergunta');
  }
  
  // Penalidades menores
  if (caseData.period && caseData.period.includes('2009-2012')) {
    score -= 5;
    reasons.push('Case de 2009-2012');
  }
  
  return {
    score: Math.min(100, Math.max(0, score)),
    reasons: reasons.join('; ')
  };
}

/**
 * Extrai keywords relevantes de uma pergunta
 */
function extractKeywords(question) {
  const keywords = [];
  
  // Termos técnicos/domínio
  const domainTerms = [
    'pagamento', 'payment', 'pix', 'fraude', 'fraud', 'chargeback', 'reconciliação',
    'migração', 'migration', 'compliance', 'kyc', 'automação', 'automation',
    'ia', 'ai', 'inteligência artificial', 'machine learning', 'pmo', 'ebitda',
    'churn', 'receita', 'revenue', 'custo', 'cost', 'inovação', 'innovation',
    'simplificação', 'simplification', 'otimização', 'optimization', 'six sigma',
    'processo', 'process', 'api', 'integração', 'integration', 'dados', 'data',
    'análise', 'analysis', 'decisão', 'decision', 'risco', 'risk', 'cliente', 'customer',
    'time', 'team', 'equipe', 'conflito', 'conflict', 'feedback', 'prazo', 'deadline',
    // ✅ ADICIONADO: Vocabulário de broad_responsibility
    'impacto', 'amplo', 'impact', 'broader', 'responsabilidade', 'responsibility',
    'social', 'sociedade', 'society', 'comunidade', 'community', 'stakeholders',
    'consequências', 'consequences', 'futuras gerações', 'future generations',
    'ecossistema', 'ecosystem', 'segunda ordem', 'second order'
  ];
  
  for (const term of domainTerms) {
    if (question.includes(term)) {
      keywords.push(term);
    }
  }
  
  // Verbos de ação
  const actionVerbs = [
    'simplificou', 'otimizou', 'automatizou', 'reduziu', 'aumentou', 'criou',
    'implementou', 'liderou', 'desenvolveu', 'resolveu', 'identificou', 'melhorou',
    // ✅ ADICIONADO: Verbos relacionados a impacto/responsabilidade
    'considerar', 'considerou', 'consider', 'avaliou', 'evaluated', 'mitigou', 'mitigated'
  ];
  
  for (const verb of actionVerbs) {
    if (question.includes(verb)) {
      keywords.push(verb);
    }
  }
  
  return keywords;
}

/**
 * Análise contextual profunda
 */
function analyzeContext(question, caseData) {
  let score = 0;
  let reason = '';
  
  const q = question.toLowerCase();
  const title = (caseData.title_pt || '').toLowerCase();
  const fullCase = [
    title,
    caseData.pt?.situation || '',
    caseData.pt?.task || '',
    caseData.pt?.action || '',
    caseData.pt?.result || ''
  ].join(' ').toLowerCase();
  
  // Pagamentos/Fraude
  if ((q.includes('pagamento') || q.includes('transação') || 
       q.includes('fraude') || q.includes('chargeback') || q.includes('pix')) &&
      (title.includes('pagamento') || title.includes('fraud') ||
       title.includes('pix') || title.includes('transação'))) {
    score += 25;
    reason = 'Contexto de pagamentos/fraude alinhado';
  }
  
  // Inovação/Simplificação
  if ((q.includes('inovação') || q.includes('simplific') || 
       q.includes('criativ') || q.includes('inventei')) &&
      (title.includes('simplific') || title.includes('inovação') ||
       title.includes('automation') || title.includes('inventei'))) {
    score += 25;
    reason = 'Contexto de inovação/simplificação alinhado';
  }
  
  // Dados/Análise
  if ((q.includes('dados') || q.includes('análise') || 
       q.includes('investigar') || q.includes('causa raiz')) &&
      (title.includes('análise') || title.includes('churn') ||
       title.includes('audit') || title.includes('dados'))) {
    score += 25;
    reason = 'Contexto de análise de dados alinhado';
  }
  
  // Liderança/Equipe
  if ((q.includes('equipe') || q.includes('time') || 
       q.includes('lider') || q.includes('desenvolv') || q.includes('mentor')) &&
      (title.includes('liderança') || title.includes('lider') ||
       title.includes('pmo') || fullCase.includes('equipe'))) {
    score += 20;
    reason = 'Contexto de liderança/equipe alinhado';
  }
  
  // Resultados/Impacto/Métricas
  if ((q.includes('resultado') || q.includes('entrega') || 
       q.includes('prazo') || q.includes('meta') || q.includes('impacto')) &&
      (caseData.pt?.result?.includes('%') || 
       caseData.pt?.result?.toLowerCase().includes('redução') ||
       caseData.pt?.result?.toLowerCase().includes('aumento'))) {
    score += 15;
    reason = 'Case tem métricas fortes de resultado';
  }
  
  // Cliente/NPS/Experiência
  if ((q.includes('cliente') || q.includes('nps') || q.includes('experiência') ||
       q.includes('satisfação')) &&
      (title.includes('cliente') || title.includes('nps') || 
       fullCase.includes('experiência'))) {
    score += 25;
    reason = 'Foco em cliente/experiência alinhado';
  }
  
  // Migração/Projeto Grande
  if ((q.includes('migração') || q.includes('projeto') || q.includes('grande escala')) &&
      (title.includes('migração') || title.includes('milhões') || 
       title.includes('bilhões'))) {
    score += 20;
    reason = 'Projeto de grande escala';
  }
  
  // Conflito/Discordância/Feedback
  if ((q.includes('conflito') || q.includes('discord') || q.includes('feedback') ||
       q.includes('erro') || q.includes('desacordo')) &&
      (fullCase.includes('conflito') || fullCase.includes('feedback') ||
       fullCase.includes('discordar'))) {
    score += 20;
    reason = 'Contexto de conflito/feedback alinhado';
  }
  
  // Custo/Frugalidade
  if ((q.includes('custo') || q.includes('econom') || q.includes('menos') ||
       q.includes('otimiz') || q.includes('reduz')) &&
      (title.includes('reduz') || title.includes('custo') || 
       title.includes('otimiz') || fullCase.includes('economia'))) {
    score += 20;
    reason = 'Foco em redução de custos/otimização';
  }
  
  // Risco/Decisão sob incerteza
  if ((q.includes('risco') || q.includes('incerteza') || q.includes('informação limitada')) &&
      (fullCase.includes('risco') || fullCase.includes('decisão') ||
       fullCase.includes('urgência'))) {
    score += 15;
    reason = 'Contexto de decisão sob risco/incerteza';
  }
  
  // Impacto Amplo / Responsabilidade Social (broad_responsibility)
  if ((q.includes('impacto') && (q.includes('amplo') || q.includes('mais amplo'))) ||
      q.includes('responsabilidade social') || 
      q.includes('consequências não intencionais') ||
      q.includes('futuras gerações') || 
      q.includes('sociedade') || q.includes('comunidade') ||
      q.includes('stakeholders') ||
      (q.includes('broader') && q.includes('impact'))) {
    
    if (fullCase.includes('impacto amplo') || 
        fullCase.includes('responsabilidade social') ||
        fullCase.includes('sociedade') || fullCase.includes('comunidade') ||
        fullCase.includes('stakeholders') || 
        fullCase.includes('consequências') ||
        fullCase.includes('secondary') || fullCase.includes('secundário') ||
        fullCase.includes('broader impact') ||
        fullCase.includes('social responsibility')) {
      score += 25;
      reason = 'Contexto de impacto amplo/responsabilidade social alinhado';
    }
  }
  
  return { score, reason };
}

/**
 * Encontra o melhor case para uma pergunta
 */
function findBestCaseForQuestion(question, allCases) {
  const lpKey = question.lp;
  const casesForLP = allCases[lpKey] || [];
  
  if (casesForLP.length === 0) {
    return {
      has_case: false,
      case_id: '',
      case_title: '',
      score: 0,
      reasoning: 'Nenhum case disponível para este LP'
    };
  }
  
  // Analisa todos os cases do LP
  const scored = casesForLP.map(c => {
    const analysis = analyzeCaseForQuestion(question, c);
    return {
      case: c,
      score: analysis.score,
      reasons: analysis.reasons
    };
  });
  
  // Ordena por score (descendente) e, em caso de empate, prefere isTopCase=true
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    // Tie-breaking: isTopCase=true ganha
    if (a.case.isTopCase && !b.case.isTopCase) return -1;
    if (!a.case.isTopCase && b.case.isTopCase) return 1;
    return 0;
  });
  
  const best = scored[0];
  
  // Novo threshold mais realista: score >= 45 para considerar match válido
  // (40 baseline + pelo menos 5 pontos de contexto/keywords)
  const hasValidMatch = best.score >= 45;
  
  return {
    has_case: hasValidMatch,
    case_id: hasValidMatch ? best.case.id : '',
    case_title: hasValidMatch ? best.case.title_pt : '',
    score: best.score,
    reasoning: hasValidMatch 
      ? best.reasons 
      : `Nenhum case adequado. Melhor disponível: "${best.case.title_pt}" (score ${best.score}/100). ${best.reasons}`
  };
}

/**
 * Análise de overlap semântico entre conceitos
 */
function analyzeConceptMatch(question, caseData, fullCase) {
  let score = 0;
  let reason = '';
  
  const q = question.toLowerCase();
  
  // Conceitos amplos que indicam forte alinhamento
  const concepts = [
    { q: ['assumiu', 'responsabilidade', 'além', 'escopo'], c: ['liderança', 'ownership', 'além'], weight: 15 },
    { q: ['cliente', 'primeiro', 'experiência'], c: ['cliente', 'nps', 'satisfação'], weight: 15 },
    { q: ['inovação', 'inventei', 'criativo'], c: ['inventei', 'inovação', 'simplific'], weight: 15 },
    { q: ['dados', 'análise', 'investigação'], c: ['dados', 'análise', 'churn', 'audit'], weight: 15 },
    { q: ['resultado', 'entrega', 'meta'], c: ['reduzi', 'aumentei', 'alcançamos', '%'], weight: 15 },
    { q: ['feedback', 'erro', 'aprendi'], c: ['feedback', 'erro', 'corrig'], weight: 15 },
    { q: ['conflito', 'discord', 'desacordo'], c: ['conflito', 'discord', 'desacord'], weight: 15 },
    { q: ['rápido', 'urgência', 'pressão'], c: ['urgência', 'rápido', 'emergência'], weight: 12 },
    { q: ['longo prazo', 'decisão estratégica'], c: ['longo prazo', 'futuro', 'estratégia'], weight: 12 },
    { q: ['aprender', 'estudar', 'conhecimento'], c: ['aprendi', 'estudo', 'conhecimento'], weight: 10 },
    // ✅ ADICIONADO: Conceitos de broad_responsibility
    { q: ['impacto', 'amplo', 'mais amplo', 'broader'], 
      c: ['impacto amplo', 'impacto mais amplo', 'responsabilidade social', 'broader impact'], 
      weight: 20 },
    { q: ['consequências', 'não intencionais', 'segunda ordem', 'unintended'], 
      c: ['consequências', 'não intencionais', 'impacto secundário', 'segunda ordem', 'efeitos colaterais'], 
      weight: 18 },
    { q: ['sociedade', 'comunidade', 'stakeholders', 'social'], 
      c: ['sociedade', 'comunidade', 'stakeholders', 'social', 'cooperados', 'membros'], 
      weight: 15 }
  ];
  
  for (const concept of concepts) {
    const qMatches = concept.q.filter(term => q.includes(term)).length;
    const cMatches = concept.c.filter(term => fullCase.includes(term)).length;
    
    if (qMatches > 0 && cMatches > 0) {
      const conceptScore = Math.min(concept.weight, qMatches * cMatches * 5);
      score += conceptScore;
      reason += (reason ? '; ' : '') + `Conceito alinhado (+${conceptScore})`;
    }
  }
  
  return { score: Math.min(30, score), reason };
}

/**
 * Verifica overlap semântico básico entre strings
 */
function hasSemanticOverlap(str1, str2, threshold = 0.3) {
  const words1 = str1.toLowerCase().split(/\W+/).filter(w => w.length > 3);
  const words2 = str2.toLowerCase().split(/\W+/).filter(w => w.length > 3);
  
  const set1 = new Set(words1);
  const set2 = new Set(words2);
  
  let overlap = 0;
  for (const word of set1) {
    if (set2.has(word)) overlap++;
  }
  
  return overlap / Math.min(set1.size, set2.size) >= threshold;
}

// ============================================================================
// 4. PROCESSAR TODAS AS PERGUNTAS
// ============================================================================

function processAllQuestions(questions, allCases) {
  console.log('🔍 Analisando 171 perguntas...\n');
  
  const results = [];
  let withCase = 0;
  let withoutCase = 0;
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const match = findBestCaseForQuestion(q, allCases);
    
    if (match.has_case) withCase++;
    else withoutCase++;
    
    results.push({
      lp: q.lp,
      priority: q.priority,
      question_pt: q.question_pt,
      question_en: q.question_en,
      has_case: match.has_case ? 'sim' : 'não',
      case_id: match.case_id,
      case_title: match.case_title,
      score: match.score,
      reasoning: match.reasoning
    });
    
    // Progress
    if ((i + 1) % 20 === 0) {
      console.log(`   Processadas ${i + 1}/${questions.length} perguntas...`);
    }
  }
  
  console.log(`\n✅ Análise completa!`);
  console.log(`   • Com case adequado: ${withCase} (${(withCase/questions.length*100).toFixed(1)}%)`);
  console.log(`   • Sem case adequado: ${withoutCase} (${(withoutCase/questions.length*100).toFixed(1)}%)\n`);
  
  return results;
}

// ============================================================================
// 5. GERAR OUTPUTS
// ============================================================================

function generateCSV(results) {
  console.log('📄 Gerando CSV...');
  
  const lines = [
    'LP,Prioridade,Pergunta (PT),Pergunta (EN),Tem Case?,Case ID,Case Title,Score,Reasoning'
  ];
  
  for (const r of results) {
    const line = [
      r.lp,
      r.priority,
      `"${r.question_pt.replace(/"/g, '""')}"`,
      `"${r.question_en.replace(/"/g, '""')}"`,
      r.has_case,
      r.case_id,
      `"${r.case_title.replace(/"/g, '""')}"`,
      r.score,
      `"${r.reasoning.replace(/"/g, '""')}"`
    ].join(',');
    
    lines.push(line);
  }
  
  fs.writeFileSync(OUTPUT_CSV, lines.join('\n'), 'utf-8');
  console.log(`   ✓ ${OUTPUT_CSV}`);
}

function generateJSON(results) {
  console.log('📄 Gerando JSON...');
  
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`   ✓ ${OUTPUT_JSON}`);
}

function generateGapsReport(results) {
  console.log('📄 Gerando relatório de gaps...');
  
  const gaps = results.filter(r => r.has_case === 'não');
  
  const lines = [
    '# Gaps: Perguntas Sem Cases Adequados',
    '',
    `**Total de gaps**: ${gaps.length} perguntas (${(gaps.length/results.length*100).toFixed(1)}%)`,
    '',
    '---',
    ''
  ];
  
  // Agrupar por LP
  const gapsByLP = {};
  for (const g of gaps) {
    if (!gapsByLP[g.lp]) gapsByLP[g.lp] = [];
    gapsByLP[g.lp].push(g);
  }
  
  for (const [lp, lpGaps] of Object.entries(gapsByLP).sort()) {
    lines.push(`## ${lp.toUpperCase().replace(/_/g, ' ')}`);
    lines.push('');
    lines.push(`**${lpGaps.length} gaps**`);
    lines.push('');
    
    for (const g of lpGaps) {
      lines.push(`### ${g.priority === 'ALTA' ? '🔴' : '🟡'} ${g.question_pt}`);
      lines.push('');
      lines.push(`- **EN**: ${g.question_en}`);
      lines.push(`- **Score**: ${g.score}/100`);
      lines.push(`- **Reasoning**: ${g.reasoning}`);
      lines.push('');
    }
    
    lines.push('---');
    lines.push('');
  }
  
  fs.writeFileSync(OUTPUT_GAPS, lines.join('\n'), 'utf-8');
  console.log(`   ✓ ${OUTPUT_GAPS}`);
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  console.log('='.repeat(80));
  console.log('🎯 MAPEAMENTO COMPLETO: 171 PERGUNTAS → CASES');
  console.log('='.repeat(80));
  
  try {
    const questions = loadTypicalQuestions();
    const allCases = loadAllCases();
    const results = processAllQuestions(questions, allCases);
    
    generateCSV(results);
    generateJSON(results);
    generateGapsReport(results);
    
    console.log('\n' + '='.repeat(80));
    console.log('✅ CONCLUÍDO!');
    console.log('='.repeat(80));
    console.log('\nArquivos gerados:');
    console.log(`  1. ${OUTPUT_CSV}`);
    console.log(`  2. ${OUTPUT_JSON}`);
    console.log(`  3. ${OUTPUT_GAPS}`);
    console.log('');
    
  } catch (err) {
    console.error('\n❌ ERRO:', err.message);
    console.error(err.stack);
    process.exit(1);
  }
}

main();
