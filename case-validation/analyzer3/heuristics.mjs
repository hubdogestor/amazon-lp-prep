import { STARL_KEYS } from './utils/schema.mjs';

const CUSTOMER_TERMS = [
  'cliente', 'clientes', 'customer', 'customers', 'member', 'members', 'paciente', 'pacientes',
  'consumidor', 'consumidores', 'seller', 'sellers', 'usu�rio', 'usu�rios', 'user', 'users',
  'merchant', 'merchants', 'partner', 'parceiro', 'parceiros'
];

const CONFLICT_TERMS = [
  'conflito', 'discord', 'resist', 'obje��o', 'pushback', 'press�o', 'escalon', 'alinhamento dif�cil',
  'desacordo', 'debate', 'backbone', 'disagree', 'tenho convic��o', 'bypass', 'challenge', 'tens�o'
];

const MECHANISM_TERMS = [
  'processo', 'mecanismo', 'framework', 'ritual', 'cad�ncia', 'dashboard', 'automati', 'automatiz',
  'sistema', 'pipeline', 'governan�a', 'governanca', 'okr', 'kpi', 'war room', 'runbook', 'playbook'
];

const HOOK_TERMS = ['crise', 'colapso', 'perda', 'queda', 'multas', 'risco', 'amea�a', 'amea�ado', 'urgente'];
const TRANSITION_TERMS = ['primeiro', 'depois', 'em seguida', 'com isso', 'portanto', 'assim', 'logo', 'por fim'];
const MICDROP_TERMS = ['aprendi', 'lesson', 'aprendizado', 'desde ent�o', 'desde entao', 'isso mudou', 'passei a'];

const FINANCIAL_REGEX = /(receita|revenue|lucro|profit|ebitda|roi|margem|cash|custo|saving|economia|capex|opex|payback)/i;
const CUSTOMER_METRIC_REGEX = /(nps|csat|churn|reten[c�][a�]o|satisfa[c�][a�]o|feedback|exp[�e]riencia|complaint|sla de atendimento|net promoter)/i;
const OPERATIONAL_REGEX = /(sla|lead time|tempo de ciclo|throughput|bug|defeito|erro|lat[�e]ncia|tempo de resposta|tempo m�dio|mttr|mtbf)/i;

function normalize(value) {
  return (value || '')
    .toString()
    .normalize('NFD')
    .replace(/[^\p{L}\p{N}\s%\$.,-]/gu, ' ')
    .toLowerCase();
}

function allText(c) {
  const starlPT = STARL_KEYS.map(key => c.pt?.[key] || '').join('\n');
  const starlEN = STARL_KEYS.map(key => c.en?.[key] || '').join('\n');
  return normalize(`${starlPT}\n${starlEN}`);
}

function countOccurrences(text, terms) {
  return terms.reduce((accumulator, term) => {
    const regex = new RegExp(term, 'g');
    const matches = text.match(regex);
    return accumulator + (matches ? matches.length : 0);
  }, 0);
}

function detectMetrics(text) {
  const metricPattern = /(?:R\$|US\$|\$)\s?\d[\d.,]*|\d[\d.,]*\s?(?:%|pontos|pts|pp|dias?|semanas?|mes(?:es)?|anos?|clientes|usu[a�]rios|tickets|casos|equipes|lojas|squads|k|milhoes|milh�es|bilhoes|bilh�es)/gi;
  const matches = text.match(metricPattern) || [];
  if (process.env.DEBUG_METRICS === '1') {
    console.log('metrics debug', matches.length);
  }
  const categories = {
    financial: FINANCIAL_REGEX.test(text),
    customer: CUSTOMER_METRIC_REGEX.test(text),
    operational: OPERATIONAL_REGEX.test(text)
  };
  return { count: matches.length, categories };
}

function computeEuNosRatio(text) {
  const eu = (text.match(/\beu\b/g) || []).length + (text.match(/\bi\b/g) || []).length;
  const nos = (text.match(/\bn[o�]s\b/g) || []).length + (text.match(/\bwe\b/g) || []).length;
  const total = eu + nos;
  if (total === 0) return { ratio: 1, counts: { eu, nos } };
  return { ratio: eu / total, counts: { eu, nos } };
}

function computeRecency(period) {
  if (!period || typeof period !== 'string') {
    return { monthsAgo: null, status: 'unknown' };
  }

  if (/present|atual|now|current/i.test(period)) {
    return { monthsAgo: 0, status: 'current' };
  }

  const matches = Array.from(period.matchAll(/(\d{1,2})\/(\d{4})/g)).map(match => ({
    month: Number(match[1]),
    year: Number(match[2])
  }));

  let targetDate;
  if (matches.length) {
    const latest = matches.sort((a, b) => (a.year === b.year ? a.month - b.month : a.year - b.year)).at(-1);
    targetDate = new Date(latest.year, (latest.month || 12) - 1, 1);
  } else {
    const yearMatches = period.match(/(19|20)\d{2}/g);
    if (!yearMatches) {
      return { monthsAgo: null, status: 'unknown' };
    }
    const latestYear = Math.max(...yearMatches.map(Number));
    targetDate = new Date(latestYear, 11, 1);
  }

  const now = new Date();
  const monthsAgo = (now.getFullYear() - targetDate.getFullYear()) * 12 + (now.getMonth() - targetDate.getMonth());

  let status = 'fresh';
  if (monthsAgo > 108) status = 'stale';
  else if (monthsAgo > 84) status = 'aging';
  else if (monthsAgo > 60) status = 'needs-refresh';

  return { monthsAgo, status };
}

function hasTerm(text, terms) {
  return terms.some(term => text.includes(term));
}

function transitionsScore(text) {
  return TRANSITION_TERMS.filter(term => text.includes(term)).length;
}

function buildParitySnapshot(c) {
  const stats = {};
  for (const key of STARL_KEYS) {
    const ptLen = (c.pt?.[key] || '').trim().length;
    const enLen = (c.en?.[key] || '').trim().length;
    const longer = Math.max(ptLen, enLen) || 1;
    stats[key] = {
      ptLen,
      enLen,
      deltaPct: Math.abs(ptLen - enLen) / longer
    };
  }
  return stats;
}

export function analyzeHeuristics(rawCase = {}) {
  const textPT = STARL_KEYS.map(key => rawCase.pt?.[key] || '').join("\n");
  const textEN = STARL_KEYS.map(key => rawCase.en?.[key] || '').join("\n");
  const rawCombined = `${textPT}\n${textEN}`;
  const unifiedText = normalize(rawCombined);

  const metrics = detectMetrics(rawCombined);
  const customerSignals = countOccurrences(unifiedText, CUSTOMER_TERMS);
  const conflictSignals = countOccurrences(unifiedText, CONFLICT_TERMS) > 0;
  const mechanismSignals = countOccurrences(unifiedText, MECHANISM_TERMS);
  const hookSignals = hasTerm(normalize(rawCase.pt?.s || ''), HOOK_TERMS) || /\d+%|R\$|US\$|\$/.test(rawCase.pt?.s || '');
  const transitionSignals = transitionsScore(normalize(textPT));
  const micDropSignals = hasTerm(normalize(rawCase.pt?.l || ''), MICDROP_TERMS);
  const ratioInfo = computeEuNosRatio(normalize(textPT));
  const recency = computeRecency(rawCase.period);
  const parity = buildParitySnapshot(rawCase);

  const dealbreakers = [];
  const warnings = [];
  const positives = [];

  if (customerSignals === 0) dealbreakers.push('Aus�ncia de Customer Obsession');
  else if (customerSignals < 3) warnings.push('Customer Obsession fraca (poucos sinais)');
  else positives.push(`Customer Obsession forte (${customerSignals} men��es relevantes)`);

  if (metrics.count < 8) {
    dealbreakers.push(`Menos de 8 m�tricas (${metrics.count})`);
  } else {
    positives.push(`M�tricas robustas (${metrics.count})`);
  }

  if (!metrics.categories.financial) warnings.push('Sem m�tricas financeiras claras');
  if (!metrics.categories.customer) warnings.push('Sem m�tricas de cliente expl�citas');
  if (!metrics.categories.operational) warnings.push('Sem m�tricas operacionais expl�citas');

  if (ratioInfo.ratio < 0.67) {
    dealbreakers.push(`Ratio EU:N�S abaixo de 2:1 (${formatRatio(ratioInfo.counts.eu, ratioInfo.counts.nos)})`);
  } else if (ratioInfo.ratio < 0.75) {
    warnings.push(`Ratio EU:N�S abaixo da meta 3:1 (${formatRatio(ratioInfo.counts.eu, ratioInfo.counts.nos)})`);
  } else {
    positives.push(`Ratio EU:N�S saud�vel (${formatRatio(ratioInfo.counts.eu, ratioInfo.counts.nos)})`);
  }

  if (!conflictSignals) warnings.push('Sem conflito/resist�ncia vis�vel');
  else positives.push('Conflito/endurecimento presente');

  if (mechanismSignals === 0) warnings.push('Mecanismos/processos n�o evidenciados');
  else positives.push('Mecanismos/repeatability destacados');

  if (!hookSignals) warnings.push('Hook inicial pode ser mais contundente');
  if (transitionSignals < 2) warnings.push('Transi��es STAR(L) pouco claras');
  if (!micDropSignals) warnings.push('Mic-drop/aprendizado forte n�o identificado');

  if (recency.status === 'stale') dealbreakers.push('Case muito antigo (>9 anos)');
  else if (recency.status === 'aging') warnings.push('Case antigo (>7 anos)');

  for (const [key, snapshot] of Object.entries(parity)) {
    if (snapshot.deltaPct > 0.35) {
      warnings.push(`Paridade PT/EN desequilibrada em ${key}`);
    }
  }

  let score = 50;
  score += Math.min(metrics.count, 12) * 3;
  score += Math.min(customerSignals, 6) * 2;
  score += mechanismSignals > 2 ? 6 : mechanismSignals > 0 ? 3 : 0;
  score += conflictSignals ? 6 : 0;
  score += hookSignals ? 3 : 0;
  score += micDropSignals ? 3 : 0;
  score += Math.min(transitionSignals, 4) * 1.5;

  score -= warnings.length * 5;
  score -= dealbreakers.length * 40;

  score = Math.max(0, Math.min(100, Math.round(score)));

  const status = dealbreakers.length > 0 ? 'KO' : score >= 85 ? 'Ready' : score >= 70 ? 'Needs-Polish' : 'Needs-Rewrite';

  return {
    score,
    status,
    dealbreakers,
    warnings,
    positives,
    metricsCount: metrics.count,
    metricCategories: metrics.categories,
    customerSignals,
    conflictSignals,
    mechanismSignals,
    ratio: ratioInfo,
    recency,
    parity,
    hookSignals,
    transitionSignals,
    micDropSignals
  };
}function formatRatio(eu, nos) {
  if (nos === 0) return `${eu}:0`;
  return `${eu}:${nos}`;
}





















