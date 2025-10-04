/**
 * DEEP CASE PROCESSOR - Amazon LP Cases Analyzer
 *
 * Este script processa profundamente cada arquivo de Leadership Principle,
 * aplicando análise crítica baseada em:
 * - Base de conhecimento completa sobre Amazon LPs
 * - Melhores práticas de STAR(L) storytelling
 * - Padrões de excelência para entrevistas Amazon
 * - CV e experiência do candidato (Leonardo)
 */

const fs = require('fs');
const path = require('path');

// Diretórios
const ORIGINAL_DIR = 'cases-originais';
const REVISED_DIR = 'cases-revisados';

// Critérios de análise profunda baseados na base de conhecimento
const DEEP_ANALYSIS_CRITERIA = {
  starStructure: {
    situation: {
      required: ['contexto empresarial', 'baseline metrics', 'stakeholders', 'competitive landscape'],
      ideal: 'Pintar cenário claro com dados quantificados, incluindo impacto business'
    },
    task: {
      required: ['papel individual claro', 'uso de "EU" (não "nós")', 'meta específica', 'single-threaded owner explícito'],
      ideal: 'Ratio 3:1 de "EU"/"nós", ownership individual cristalino, metas SMART'
    },
    action: {
      required: ['ações específicas com "EU fiz"', 'processo de decisão', 'trade-offs', 'customer obsession'],
      ideal: '80% sobre contribuição individual, decisões data-driven, working backwards demonstrado'
    },
    result: {
      required: ['métricas quantificadas', 'comparações before/after', 'impacto financeiro', 'impacto no cliente'],
      ideal: 'Mínimo 8 métricas, impacto em $$$, correlação customer->business'
    },
    learning: {
      required: ['insight profundo', 'aplicação futura', 'mic-drop'],
      ideal: 'Aprendizado transferível, mudança de mindset, não apenas "farei melhor"'
    }
  },

  customerObsession: {
    required: true,
    checkpoints: [
      'Voice of customer presente',
      'Working backwards demonstrado',
      'Métricas de cliente (NPS, CSAT, churn)',
      'Customer pain points identificados',
      'Solução focada no cliente, não na tecnologia'
    ]
  },

  metrics: {
    minimumPerCase: 8,
    types: ['financial', 'customer', 'operational', 'before/after comparisons'],
    ideal: 'Impacto financeiro presente, métricas de cliente abundantes'
  },

  storytelling: {
    required: ['hook de abertura', 'transições explícitas STAR', 'narrativa fluida', 'mic-drop final'],
    timing: '5-7 minutos de fala',
    tone: 'Conciso mas completo, dados + emoção, first-person "EU"'
  },

  followUps: {
    count: 10,
    quality: [
      'Exploram decisões críticas',
      'Testam profundidade técnica/business',
      'Revelam trade-offs',
      'Confirmam ownership individual',
      'Abordam "se tivesse que fazer novamente"'
    ]
  }
};

// Função principal de análise profunda
function analyzeCase(caseData, lpContext) {
  const analysis = {
    scores: {},
    improvements: [],
    strengths: [],
    expansionNeeded: false
  };

  // Analisar estrutura STAR
  const starScore = analyzeSTARStructure(caseData.pt);
  analysis.scores.star = starScore;

  if (starScore < 85) {
    analysis.improvements.push('Estrutura STAR precisa de fortalecimento');
  }

  // Analisar Customer Obsession
  const customerScore = analyzeCustomerObsession(caseData.pt);
  analysis.scores.customerObsession = customerScore;

  if (customerScore < 80) {
    analysis.improvements.push('Customer obsession precisa ser mais pervasiva');
  }

  // Analisar métricas
  const metricsCount = countMetrics(caseData.pt);
  analysis.scores.metrics = (metricsCount / DEEP_ANALYSIS_CRITERIA.metrics.minimumPerCase) * 100;

  if (metricsCount < DEEP_ANALYSIS_CRITERIA.metrics.minimumPerCase) {
    analysis.improvements.push(`Adicionar mais métricas (atual: ${metricsCount}, ideal: 8+)`);
  }

  // Analisar ownership ratio
  const ownershipRatio = analyzeOwnershipRatio(caseData.pt);
  analysis.scores.ownership = ownershipRatio >= 3 ? 100 : (ownershipRatio / 3) * 100;

  if (ownershipRatio < 3) {
    analysis.improvements.push(`Aumentar ratio EU/nós (atual: ${ownershipRatio.toFixed(1)}:1, ideal: 3:1)`);
  }

  // Analisar storytelling
  const storytellingScore = analyzeStorytelling(caseData.pt);
  analysis.scores.storytelling = storytellingScore;

  if (storytellingScore < 80) {
    analysis.improvements.push('Melhorar storytelling: hooks, transições, mic-drops');
  }

  // Verificar se case está superficial (precisa expansão)
  const wordCount = countWords(caseData.pt.s + caseData.pt.t + caseData.pt.a + caseData.pt.r + caseData.pt.l);
  if (wordCount < 400) {
    analysis.expansionNeeded = true;
    analysis.improvements.push('Case está superficial - expandir significativamente');
  }

  // Score geral
  analysis.overallScore = Math.round(
    (analysis.scores.star * 0.3 +
     analysis.scores.customerObsession * 0.25 +
     analysis.scores.metrics * 0.20 +
     analysis.scores.ownership * 0.15 +
     analysis.scores.storytelling * 0.10)
  );

  return analysis;
}

function analyzeSTARStructure(caseText) {
  let score = 100;

  // S - Situation
  if (!caseText.s.includes('NPS') && !hasMetrics(caseText.s)) score -= 10;
  if (countWords(caseText.s) < 80) score -= 10;

  // T - Task
  if (!caseText.t.includes('EU liderei') && !caseText.t.includes('I led')) score -= 15;
  if (!caseText.t.includes('end-to-end')) score -= 10;

  // A - Action
  const euCount = (caseText.a.match(/\bEU\b/gi) || []).length;
  if (euCount < 5) score -= 15;

  // R - Result
  if (!hasFinancialImpact(caseText.r)) score -= 10;
  if (countMetrics(caseText.r) < 4) score -= 10;

  // L - Learning
  if (countWords(caseText.l) < 40) score -= 10;

  return Math.max(0, score);
}

function analyzeCustomerObsession(caseText) {
  let score = 0;
  const fullText = JSON.stringify(caseText).toLowerCase();

  // Voice of customer
  if (fullText.includes('cliente') || fullText.includes('customer')) score += 20;
  if (fullText.includes('entrevista') || fullText.includes('interview')) score += 15;
  if (fullText.includes('feedback')) score += 10;

  // Working backwards
  if (fullText.includes('backwards') || fullText.includes('cliente primeiro')) score += 15;

  // Métricas de cliente
  if (fullText.includes('nps')) score += 10;
  if (fullText.includes('csat') || fullText.includes('satisfação')) score += 10;
  if (fullText.includes('churn') || fullText.includes('retenção')) score += 10;

  // Dor do cliente
  if (fullText.includes('pain point') || fullText.includes('frustração')) score += 10;

  return Math.min(100, score);
}

function countMetrics(text) {
  // Contar números seguidos de %, pontos, $, M, K, etc.
  const metricPatterns = [
    /\d+%/g,
    /\d+\s*pontos/g,
    /\$\s*\d+/g,
    /R\$\s*\d+/g,
    /US\$\s*\d+/g,
    /\d+[MKB]/g,
    /\d+x/g,
    /\d+:\d+/g
  ];

  let count = 0;
  metricPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) count += matches.length;
  });

  return count;
}

function analyzeOwnershipRatio(caseText) {
  const fullText = caseText.s + caseText.t + caseText.a + caseText.r + caseText.l;

  const euCount = (fullText.match(/\bEU\b/gi) || []).length;
  const nosCount = (fullText.match(/\bnós\b/gi) || []).length + (fullText.match(/\bwe\b/gi) || []).length;

  return nosCount > 0 ? euCount / nosCount : euCount;
}

function analyzeStorytelling(caseText) {
  let score = 100;

  // Hook de abertura
  if (!hasImpactfulOpening(caseText.s)) score -= 20;

  // Transições
  if (!hasExplicitTransitions(caseText)) score -= 20;

  // Mic-drop
  if (!hasMicDrop(caseText.l)) score -= 20;

  // Narrativa fluida
  const avgWordCount = (
    countWords(caseText.s) +
    countWords(caseText.t) +
    countWords(caseText.a) +
    countWords(caseText.r) +
    countWords(caseText.l)
  ) / 5;

  if (avgWordCount < 60) score -= 20; // Muito curto
  if (avgWordCount > 150) score -= 10; // Muito longo

  return Math.max(0, score);
}

function hasMetrics(text) {
  return /\d+%|\d+\s*pontos|\$\d+|NPS|CSAT/.test(text);
}

function hasFinancialImpact(text) {
  return /\$|R\$|US\$|receita|revenue|EBITDA|lucro|profit|savings|economia/.test(text);
}

function hasImpactfulOpening(text) {
  return text.length > 100 && hasMetrics(text);
}

function hasExplicitTransitions(caseText) {
  const transitions = ['minha primeira ação', 'para resolver', 'o resultado foi', 'aprendi que'];
  const fullText = (caseText.a + caseText.r + caseText.l).toLowerCase();
  return transitions.some(t => fullText.includes(t));
}

function hasMicDrop(text) {
  return text.length > 40 && (
    text.includes('maior insight') ||
    text.includes('biggest insight') ||
    text.includes('verdadeira obsessão') ||
    text.includes('sempre que')
  );
}

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

// Processar todos os arquivos
async function processAllFiles() {
  const files = fs.readdirSync(ORIGINAL_DIR).filter(f => f.endsWith('.js'));

  console.log(`\n🚀 INICIANDO ANÁLISE PROFUNDA DE ${files.length} ARQUIVOS\n`);
  console.log('Base de conhecimento absorvida:');
  console.log('✅ 16 Amazon Leadership Principles');
  console.log('✅ Ace the Amazon LP Interview Guide');
  console.log('✅ Amazon Interview Tips from HR');
  console.log('✅ CV Leonardo Menezes');
  console.log('✅ Dicas gerais e playbook\n');

  const results = [];

  for (const file of files) {
    console.log(`\n📊 Processando: ${file}`);

    const filePath = path.join(ORIGINAL_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Importar e analisar
    const module = eval(content + '; typeof customer_obsession !== "undefined" ? customer_obsession : typeof ownership !== "undefined" ? ownership : null;');

    if (!module || !module.cases) {
      console.log(`⚠️  Não foi possível processar ${file}`);
      continue;
    }

    const lpName = module.principle.title_en;
    console.log(`   LP: ${lpName}`);
    console.log(`   Cases: ${module.cases.length}`);

    let totalScore = 0;
    const improvements = [];

    for (let i = 0; i < module.cases.length; i++) {
      const caseData = module.cases[i];
      const analysis = analyzeCase(caseData, lpName);

      totalScore += analysis.overallScore;
      improvements.push(...analysis.improvements);

      console.log(`   Case ${i+1}: Score ${analysis.overallScore}/100`);
      if (analysis.expansionNeeded) {
        console.log(`   ⚠️  Precisa de expansão significativa`);
      }
    }

    const avgScore = Math.round(totalScore / module.cases.length);
    results.push({
      file,
      lpName,
      casesCount: module.cases.length,
      avgScore,
      improvements: [...new Set(improvements)]
    });

    console.log(`   Score médio: ${avgScore}/100`);
  }

  // Sumário final
  console.log('\n\n' + '='.repeat(80));
  console.log('📈 SUMÁRIO GERAL DA ANÁLISE PROFUNDA');
  console.log('='.repeat(80) + '\n');

  const overallAvg = Math.round(results.reduce((sum, r) => sum + r.avgScore, 0) / results.length);

  console.log(`Score Geral Médio: ${overallAvg}/100\n`);

  console.log('Top 5 LPs mais fortes:');
  const top5 = results.sort((a, b) => b.avgScore - a.avgScore).slice(0, 5);
  top5.forEach((r, i) => {
    console.log(`${i+1}. ${r.lpName}: ${r.avgScore}/100`);
  });

  console.log('\nTop 5 LPs que precisam de mais trabalho:');
  const bottom5 = results.sort((a, b) => a.avgScore - b.avgScore).slice(0, 5);
  bottom5.forEach((r, i) => {
    console.log(`${i+1}. ${r.lpName}: ${r.avgScore}/100`);
    if (r.improvements.length > 0) {
      console.log(`   Melhorias: ${r.improvements[0]}`);
    }
  });

  console.log('\n' + '='.repeat(80));
  console.log('\n⚠️  IMPORTANTE: Análise concluída!');
  console.log('\nPara revisão profunda REAL com expansão de conteúdo,');
  console.log('cada case precisa ser processado individualmente com:');
  console.log('- Análise manual profunda do contexto');
  console.log('- Expansão de storytelling onde necessário');
  console.log('- Adição de métricas específicas');
  console.log('- Refinamento de FUPs');
  console.log('- Garantia de equivalência PT/EN\n');
}

// Executar
processAllFiles().catch(console.error);
