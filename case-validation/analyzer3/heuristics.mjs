import { STARL_KEYS } from './utils/schema.mjs';
import { LP_KEYWORDS } from './refinement_v3_2/lp-keywords.mjs';

// --- Termos e Expressões Chave ---

const HOOK_URGENCY_TERMS = ['crise', 'colapso', 'perda', 'queda', 'multa', 'risco', 'ameaça', 'urgente', 'impacto negativo', 'problema crítico'];
const HOOK_STAKES_REGEX = /(R\$|US\$|\$)\s?\d[\d.,]*\s?(milh[oõ]es|bilh[oõ]es|k)|nps de \d+|queda de \d+%|perda de \d+|afetando \d+ clientes/;
const HOOK_CONFLICT_TERMS = ['conselho', 'board', 'diretoria', 'c-level', 'ceo', 'cto', 'cfo', 'ameaçou', 'exigiu', 'demandou'];

const TRANSITION_STARTERS = {
  t: ['diante desse cenário', 'com essa missão', 'o desafio era', 'minha tarefa era', 'the challenge was', 'my task was'],
  a: ['para resolver isso', 'para atacar o problema', 'minha abordagem foi', 'to solve this', 'my approach was', 'para cumprir esse compromisso'],
  r: ['como resultado', 'o impacto foi', 'as a result', 'the impact was', 'esse esforço entregou'],
  l: ['aprendi que', 'retrospectivamente', 'a lição que ficou', 'i learned that', 'in retrospect', 'this case taught me'],
};

const MIC_DROP_MECHANISM_TERMS = ['ritual', 'playbook', 'framework', 'processo', 'mecanismo', 'modelo', 'sistema', 'automação'];
const MIC_DROP_REPLICATION_TERMS = ['replicado', 'adotado', 'escalado para', 'virou padrão', 'se tornou o novo', 'replicated', 'adopted', 'scaled to'];

const CUSTOMER_TERMS = ['cliente', 'usuário', 'consumidor', 'customer', 'user', 'nps', 'csat', 'churn', 'retenção', 'satisfação', 'experiência do cliente', 'cx'];
const CONFLICT_TERMS = ['conflito', 'resistência', 'objeção', 'pushback', 'pressão', 'escalar', 'desacordo', 'debate', 'trade-off', 'tive que convencer'];
const MECHANISM_TERMS = MIC_DROP_MECHANISM_TERMS; // Reutilizando a lista

const METRIC_REGEX = /(?:R\$|US\$|\$)\s?\d[\d.,]*|\d[\d.,]*\s?(?:%|pontos|pts|pp|dias?|semanas?|mes(?:es)?|anos?|clientes|usu[aá]rios|tickets|casos|equipes|lojas|squads|k|milh[oõ]es|bilh[oõ]es)/gi;
const FINANCIAL_REGEX = /(receita|revenue|lucro|profit|ebitda|roi|margem|custo|saving|economia|capex|opex|payback)/i;
const CUSTOMER_METRIC_REGEX = /(nps|csat|churn|reten[cç][aã]o|satisfa[cç][aã]o|feedback|exp[ée]riencia|net promoter)/i;
const OPERATIONAL_REGEX = /(sla|lead time|tempo de ciclo|throughput|bug|defeito|erro|lat[êe]ncia|tempo de resposta|mttr|mtbf)/i;


// --- Funções de Normalização e Contagem ---

function normalize(text) {
  return (text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function countOccurrences(text, terms) {
  const normalizedText = normalize(text);
  return terms.reduce((acc, term) => {
    const regex = new RegExp(`\\b${normalize(term)}\\b`, 'g');
    return acc + (normalizedText.match(regex) || []).length;
  }, 0);
}

function hasTerm(text, terms) {
  const normalizedText = normalize(text);
  return terms.some(term => normalizedText.includes(normalize(term)));
}

// --- Funções de Pontuação por Dimensão (Lógica v3.2) ---

function scoreNarrativeQuality(rawCase) {
  const s_norm = normalize(rawCase.pt?.s || '');
  const l_norm = normalize(rawCase.pt?.l || '');
  let score = 0;

  // 1. Hook (10 pontos)
  const hasUrgency = HOOK_URGENCY_TERMS.some(term => s_norm.includes(term));
  const hasStakes = HOOK_STAKES_REGEX.test(rawCase.pt?.s || '');
  const hasConflict = HOOK_CONFLICT_TERMS.some(term => s_norm.includes(term));
  
  let hookScore = 0;
  if (hasUrgency) hookScore += 4;
  if (hasStakes) hookScore += 4;
  if (hasConflict) hookScore += 2;
  score += hookScore;

  // 2. Transições (10 pontos)
  let transitionCount = 0;
  if (hasTerm(rawCase.pt?.t, TRANSITION_STARTERS.t)) transitionCount++;
  if (hasTerm(rawCase.pt?.a, TRANSITION_STARTERS.a)) transitionCount++;
  if (hasTerm(rawCase.pt?.r, TRANSITION_STARTERS.r)) transitionCount++;
  if (hasTerm(rawCase.pt?.l, TRANSITION_STARTERS.l)) transitionCount++;
  score += Math.min(transitionCount * 2.5, 10);

  // 3. Mic-Drop (5 pontos)
  const hasLearning = hasTerm(l_norm, ['aprendi', 'lição', 'aprendizado']);
  const hasMechanism = hasTerm(l_norm, MIC_DROP_MECHANISM_TERMS);
  const hasReplication = hasTerm(l_norm, MIC_DROP_REPLICATION_TERMS);
  
  if (hasLearning && hasMechanism && hasReplication) {
    score += 5;
  } else if (hasLearning && hasMechanism) {
    score += 3;
  } else if (hasLearning) {
    score += 1;
  }

  return { score: Math.round(score), details: { hookScore, transitionCount } };
}

function scoreMetrics(rawCombined) {
  const matches = rawCombined.match(METRIC_REGEX) || [];
  const count = matches.length;
  
  // 1. Contagem de Métricas (15 pontos) - logarítmico
  let countScore = 0;
  if (count >= 12) countScore = 15;
  else if (count >= 8) countScore = 12;
  else if (count >= 5) countScore = 7;
  else countScore = 0;

  // 2. Categorias de Métricas (5 pontos)
  let categoryScore = 0;
  if (FINANCIAL_REGEX.test(rawCombined)) categoryScore += 2;
  if (CUSTOMER_METRIC_REGEX.test(rawCombined)) categoryScore += 2;
  if (OPERATIONAL_REGEX.test(rawCombined)) categoryScore += 1;

  return { score: countScore + categoryScore, details: { count, hasFinancial: FINANCIAL_REGEX.test(rawCombined), hasCustomer: CUSTOMER_METRIC_REGEX.test(rawCombined), hasOperational: OPERATIONAL_REGEX.test(rawCombined) } };
}

function scoreLpContent(text, lpId) {
  const keywords = LP_KEYWORDS[lpId];
  if (!keywords) return { score: 0, details: { strongCount: 0, mediumCount: 0 } };

  const strongCount = countOccurrences(text, keywords.strong);
  const mediumCount = countOccurrences(text, keywords.medium);
  
  // Pontuação: 2 pontos por termo forte, 1 por termo médio, com teto.
  const score = Math.min(strongCount * 2 + mediumCount * 1, 20);
  
  return { score, details: { strongCount, mediumCount } };
}

function scoreAmazonAspects(text) {
  let score = 0;
  const customerSignals = countOccurrences(text, CUSTOMER_TERMS);
  const mechanismSignals = countOccurrences(text, MECHANISM_TERMS);
  const conflictSignals = countOccurrences(text, CONFLICT_TERMS);

  // Customer Obsession (5 pontos)
  score += Math.min(customerSignals * 1.5, 5);
  // Mechanisms (5 pontos)
  score += Math.min(mechanismSignals * 1.5, 5);
  // Conflict (5 pontos)
  score += Math.min(conflictSignals * 2.5, 5);

  return { score: Math.round(score), details: { customerSignals, mechanismSignals, conflictSignals } };
}

function scoreIndividualContribution(text) {
  const eu = (text.match(/\beu\b/g) || []).length + (text.match(/\bi\b/g) || []).length;
  const nos = (text.match(/\bn[oó]s\b/g) || []).length + (text.match(/\bwe\b/g) || []).length;
  const ratio = nos > 0 ? eu / nos : eu > 0 ? eu : 0;

  let score = 0;
  if (ratio >= 3) score = 10;
  else if (ratio >= 2) score = 5;
  else score = 0;

  return { score, details: { ratio, eu, nos } };
}

function scoreStructure(lintResult) {
  if (!lintResult.ok) return { score: 0 };
  
  let score = 10;
  // Penaliza por warnings de paridade
  const parityWarnings = lintResult.warnings.filter(w => w.includes('PT/EN')).length;
  score -= parityWarnings * 2.5;
  
  return { score: Math.max(0, score) };
}


// --- Função Principal de Análise ---

export function analyzeHeuristics(rawCase = {}, lintResult = { ok: true, issues: [], warnings: [] }) {
  const textPT = STARL_KEYS.map(key => rawCase.pt?.[key] || '').join("\n");
  const textEN = STARL_KEYS.map(key => rawCase.en?.[key] || '').join("\n");
  const rawCombined = `${textPT}\n${textEN}`;
  const unifiedText = normalize(rawCombined);
  const lpId = rawCase.lp_id || "";

  // --- Coleta de Pontuações ---
  const narrative = scoreNarrativeQuality(rawCase);
  const metrics = scoreMetrics(rawCombined);
  const lpContent = scoreLpContent(unifiedText, lpId);
  const amazonAspects = scoreAmazonAspects(unifiedText);
  const contribution = scoreIndividualContribution(unifiedText);
  const structure = scoreStructure(lintResult);

  // --- Cálculo do Score Final Ponderado ---
  let totalScore = 0;
  totalScore += narrative.score * 1.25; // 25% -> 25 pts
  totalScore += metrics.score;          // 20% -> 20 pts
  totalScore += lpContent.score;        // 20% -> 20 pts
  totalScore += amazonAspects.score * (2/3) * 1.5; // 15% -> 15 pts
  totalScore += contribution.score;     // 10% -> 10 pts
  totalScore += structure.score;        // 10% -> 10 pts

  // --- Geração de Dealbreakers e Warnings ---
  const dealbreakers = [...lintResult.issues];
  const warnings = [...lintResult.warnings];
  const positives = [];

  if (metrics.details.count < 5) {
    dealbreakers.push(`Métricas insuficientes: ${metrics.details.count} (mínimo 5)`);
  } else if (metrics.details.count < 8) {
    warnings.push(`Número de métricas baixo: ${metrics.details.count} (ideal 8+)`);
  } else {
    positives.push(`Métricas robustas (${metrics.details.count})`);
  }

  if (amazonAspects.details.customerSignals === 0) {
    dealbreakers.push('Ausência total de sinais de Customer Obsession');
  } else if (amazonAspects.details.customerSignals < 3) {
    warnings.push('Sinais de Customer Obsession fracos');
  }

  if (contribution.details.ratio < 2) {
    dealbreakers.push(`Ratio EU:NÓS crítico: ${contribution.details.ratio.toFixed(1)}:1 (mínimo 2:1)`);
  } else if (contribution.details.ratio < 3) {
    warnings.push(`Ratio EU:NÓS abaixo do ideal: ${contribution.details.ratio.toFixed(1)}:1 (ideal 3:1)`);
  } else {
    positives.push(`Ratio EU:NÓS saudável (${contribution.details.ratio.toFixed(1)}:1)`);
  }

  if (narrative.details.hookScore < 4) warnings.push('Hook inicial fraco (sem urgência ou stakes claros)');
  if (narrative.details.transitionCount < 2) warnings.push('Faltam transições narrativas entre seções STARL');
  if (amazonAspects.details.conflictSignals === 0) warnings.push('Nenhum sinal de conflito ou superação de resistência');
  if (amazonAspects.details.mechanismSignals === 0) warnings.push('Nenhum mecanismo ou processo replicável mencionado');

  // --- Determinação do Status Final ---
  const finalScore = Math.max(0, Math.min(100, Math.round(totalScore)));
  let status = 'Unknown';
  if (dealbreakers.length > 0) {
    status = 'KO';
  } else if (finalScore >= 85) {
    status = 'Ready';
  } else if (finalScore >= 70) {
    status = 'Needs-Polish';
  } else {
    status = 'Needs-Rewrite';
  }

  return {
    score: finalScore,
    status,
    dealbreakers,
    warnings,
    positives,
    breakdown: {
      narrative: narrative.score,
      metrics: metrics.score,
      lpContent: lpContent.score,
      amazonAspects: amazonAspects.score,
      contribution: contribution.score,
      structure: structure.score,
    },
    details: {
      metrics: metrics.details,
      contribution: contribution.details,
      amazonAspects: amazonAspects.details,
      lpContent: lpContent.details,
    }
  };
}





















