import { STARL_KEYS } from './utils/schema.mjs';
import { LP_KEYWORDS } from './refinement_v3_2/lp-keywords.mjs';

// --- Termos e Expressões Chave ---

const HOOK_URGENCY_TERMS = ['crise', 'colapso', 'perda', 'queda', 'multa', 'risco', 'ameaça', 'urgente', 'impacto negativo', 'problema crítico'];
const HOOK_STAKES_REGEX = /(R\$|US\$|\$)\s?\d[\d.,]*\s?(milh[oõ]es|bilh[oõ]es|k)|nps de \d+|queda de \d+%|perda de \d+|afetando \d+ clientes/;
const HOOK_CONFLICT_TERMS = ['conselho', 'board', 'diretoria', 'c-level', 'ceo', 'cto', 'cfo', 'ameaçou', 'exigiu', 'demandou'];

const TRANSITION_STARTERS = {
  t: ['diante desse cenário', 'com essa missão', 'o desafio era', 'minha tarefa era', 'o desafio crítico', 'a missão que recebi', 'the challenge was', 'my task was', 'the critical challenge', 'faced with this'],
  a: ['para resolver isso', 'para atacar o problema', 'minha abordagem foi', 'minha estratégia foi', 'eu ataquei em', 'to solve this', 'my approach was', 'my strategy was', 'para cumprir esse compromisso', 'para entregar esse resultado'],
  r: ['como resultado', 'o impacto foi', 'as a result', 'the impact was', 'esse esforço entregou', 'o impacto mensurável foi', 'os resultados foram', 'esse esforço coordenado resultou', 'this coordinated effort resulted'],
  l: ['aprendi que', 'retrospectivamente', 'a lição que ficou', 'a principal lição', 'esse caso me ensinou', 'i learned that', 'in retrospect', 'this case taught me', 'the main lesson'],
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
  const s_text = rawCase.pt?.s || '';
  const s_norm = normalize(s_text);
  const l_norm = normalize(rawCase.pt?.l || '');
  let details = {};

  // 1. Hook (Vale 10 pontos)
  const hasUrgency = hasTerm(s_norm, HOOK_URGENCY_TERMS);
  const hasStakes = HOOK_STAKES_REGEX.test(s_text);
  const hasConflict = hasTerm(s_norm, HOOK_CONFLICT_TERMS);
  const s_length = s_text.length;

  let hookScore = 0;
  if (hasUrgency) hookScore += 3;
  if (hasStakes) hookScore += 4;
  if (hasConflict) hookScore += 2;
  if (s_length > 150 && hookScore > 0) hookScore += 1;
  if (hasStakes && hookScore < 5) hookScore = 5;
  
  details.hookScore = Math.min(hookScore, 10);

  // 2. Transições (Vale 10 pontos)
  let transitionCount = 0;
  if (hasTerm(rawCase.pt?.t, TRANSITION_STARTERS.t)) transitionCount++;
  if (hasTerm(rawCase.pt?.a, TRANSITION_STARTERS.a)) transitionCount++;
  if (hasTerm(rawCase.pt?.r, TRANSITION_STARTERS.r)) transitionCount++;
  if (hasTerm(rawCase.pt?.l, TRANSITION_STARTERS.l)) transitionCount++;
  
  const transitionScore = Math.min(transitionCount * 2.5, 10);
  details.transitionCount = transitionCount;

  // 3. Mic-Drop (Vale 5 pontos)
  const hasLearning = hasTerm(l_norm, ['aprendi', 'lição', 'aprendizado']);
  const hasMechanism = hasTerm(l_norm, MIC_DROP_MECHANISM_TERMS);
  const hasReplication = hasTerm(l_norm, MIC_DROP_REPLICATION_TERMS);
  
  let micDropScore = 0;
  if (hasLearning && hasMechanism && hasReplication) {
    micDropScore = 5;
  } else if (hasLearning && hasMechanism) {
    micDropScore = 3;
  } else if (hasLearning) {
    micDropScore = 1;
  }
  details.micDropScore = micDropScore;

  // Score final é a soma das partes
  const finalScore = details.hookScore + transitionScore + details.micDropScore;

  return { score: Math.round(finalScore), details };
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

function scoreAmazonAspects(text, rawCombined) {
  let score = 0;
  const details = {
    customerSignals: countOccurrences(text, CUSTOMER_TERMS),
    mechanismSignals: countOccurrences(text, MECHANISM_TERMS),
    conflictSignals: countOccurrences(text, CONFLICT_TERMS),
  };

  // Customer Obsession (5 pontos)
  let customerScore = 0;
  if (details.customerSignals > 0) {
    customerScore = 1; // Base point
    customerScore += Math.min(details.customerSignals - 1, 2); // Up to 2 more points for frequency
  }
  // A specific customer metric is a very strong signal.
  if (CUSTOMER_METRIC_REGEX.test(rawCombined)) {
    customerScore = Math.max(customerScore, 3) + 2; // Guarantee at least 3, then add 2 for a max of 5
  }
  score += Math.min(customerScore, 5);

  // Mechanisms (5 pontos)
  score += Math.min(details.mechanismSignals * 1.5, 5);
  // Conflict (5 pontos)
  score += Math.min(details.conflictSignals * 2.5, 5);

  return { score: Math.round(score), details };
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
  const amazonAspects = scoreAmazonAspects(unifiedText, rawCombined);
  const contribution = scoreIndividualContribution(unifiedText);
  const structure = scoreStructure(lintResult);

  // --- Cálculo do Score Final Ponderado ---
  let totalScore = 0;
  totalScore += narrative.score * 1.25; // 25% -> 25 pts
  totalScore += metrics.score;          // 20% -> 20 pts
  totalScore += lpContent.score;        // 20% -> 20 pts
  totalScore += amazonAspects.score * 1.25; // 15% -> 15 pts (12 * 1.25 = 15)
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





















