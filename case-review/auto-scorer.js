/**
 * AUTO-SCORER
 *
 * Calcula scoring automático para cada case baseado em:
 * - Ratio EU:NÓS
 * - Contagem de métricas
 * - Word count
 * - FUPs count
 * - PT/EN parity
 *
 * Gera: reports/02-scoring-summary.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INVENTORY_FILE = path.join(__dirname, 'reports', '01-inventory.json');
const OUTPUT_FILE = path.join(__dirname, 'reports', '02-scoring-summary.json');

/**
 * Calcula ratio EU:NÓS
 */
function calculateEuNosRatio(text) {
  if (!text) return 0;

  // Padrões EU (PT e EN)
  const euPatterns = /\b(eu|i)\b/gi;
  const nosPatterns = /\b(nós|we|nos)\b/gi;

  const euCount = (text.match(euPatterns) || []).length;
  const nosCount = (text.match(nosPatterns) || []).length;

  if (nosCount === 0) return euCount > 0 ? 10 : 0; // Ratio muito alto se não tem "nós"
  return euCount / nosCount;
}

/**
 * Detecta métricas no texto
 */
function detectMetrics(text) {
  if (!text) return [];

  const metrics = [];

  // Padrão 1: Números com % (ex: 35%, +107%)
  const percentMatches = text.matchAll(/([+-]?\d+[.,]?\d*)\s*%/g);
  for (const match of percentMatches) {
    metrics.push({ type: 'percentage', value: match[1], context: match[0] });
  }

  // Padrão 2: Valores monetários (R$, USD, BRL, $)
  const moneyMatches = text.matchAll(/(R\$|USD|BRL|\$|€)\s*([0-9.,]+[KMB]?)/gi);
  for (const match of moneyMatches) {
    metrics.push({ type: 'currency', value: match[2], context: match[0] });
  }

  // Padrão 3: Números com unidades (dias, horas, meses, etc)
  const unitMatches = text.matchAll(/(\d+[.,]?\d*)\s*(dias?|hours?|horas?|meses?|months?|semanas?|weeks?|anos?|years?|min|minutos?|minutes?)/gi);
  for (const match of unitMatches) {
    metrics.push({ type: 'time_unit', value: match[1], unit: match[2], context: match[0] });
  }

  // Padrão 4: Setas/transições (28 → 58, de X para Y)
  const transitionMatches = text.matchAll(/(\d+[.,]?\d*)\s*(→|->|para|to)\s*(\d+[.,]?\d*)/gi);
  for (const match of transitionMatches) {
    metrics.push({ type: 'transition', from: match[1], to: match[3], context: match[0] });
  }

  // Padrão 5: NPS, CSAT, KPIs (siglas comuns)
  const kpiMatches = text.matchAll(/(NPS|CSAT|KPI|SLA|FCR|MAU|ARR|MRR|CAC|LTV|ROI|EBITDA|OPEX|CAPEX)\s*[:\s]*(\d+[.,]?\d*)/gi);
  for (const match of kpiMatches) {
    metrics.push({ type: 'kpi', kpi: match[1], value: match[2], context: match[0] });
  }

  return metrics;
}

/**
 * Classifica métrica como genérica ou específica
 */
function classifyMetric(metric) {
  // Métricas específicas têm valores numéricos explícitos
  if (metric.type === 'transition') return 'specific'; // de X para Y
  if (metric.type === 'kpi') return 'specific'; // NPS 28
  if (metric.type === 'percentage' && parseFloat(metric.value.replace(',', '.')) > 0) return 'specific';
  if (metric.type === 'currency') return 'specific';
  if (metric.type === 'time_unit') return 'specific';

  return 'generic';
}

/**
 * Detecta termos genéricos (red flags)
 */
function detectGenericTerms(text) {
  if (!text) return [];

  const genericPatterns = [
    /melhoria significativa/gi,
    /aumento expressivo/gi,
    /redução considerável/gi,
    /muito/gi,
    /bastante/gi,
    /significantemente/gi,
    /consideravelmente/gi
  ];

  const found = [];
  for (const pattern of genericPatterns) {
    const matches = text.match(pattern);
    if (matches) {
      found.push(...matches);
    }
  }

  return found;
}

/**
 * Carrega case completo
 */
async function loadFullCase(filePath) {
  try {
    const fileUrl = pathToFileURL(path.join(__dirname, '..', filePath)).href;
    const module = await import(fileUrl + '?cb=' + Date.now());
    const caseObj = module.default || Object.values(module)[0];

    // Normaliza formato pt/en
    if (caseObj.pt && !caseObj.s) {
      return {
        ...caseObj,
        s: caseObj.pt?.s,
        t: caseObj.pt?.t,
        a: caseObj.pt?.a,
        r: caseObj.pt?.r,
        l: caseObj.pt?.l,
        s_en: caseObj.en?.s,
        t_en: caseObj.en?.t,
        a_en: caseObj.en?.a,
        r_en: caseObj.en?.r,
        l_en: caseObj.en?.l
      };
    }

    return caseObj;
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Calcula score automático de um case
 */
async function scoreCase(caseInfo) {
  console.log(`\n📊 Scoring: ${caseInfo.id}`);

  // Carrega case completo
  const fullCase = await loadFullCase(caseInfo.file_path);
  if (!fullCase) {
    return null;
  }

  // Concatena todo texto PT
  const fullTextPT = [fullCase.s, fullCase.t, fullCase.a, fullCase.r, fullCase.l].filter(Boolean).join(' ');
  const fullTextEN = [fullCase.s_en, fullCase.t_en, fullCase.a_en, fullCase.r_en, fullCase.l_en].filter(Boolean).join(' ');

  // 1. Ratio EU:NÓS
  const euNosRatio = calculateEuNosRatio(fullTextPT);

  // 2. Métricas
  const metrics = detectMetrics(fullTextPT);
  const specificMetrics = metrics.filter(m => classifyMetric(m) === 'specific');
  const genericTerms = detectGenericTerms(fullTextPT);

  // 3. Contagens
  const wordCountPT = fullTextPT.split(/\s+/).length;
  const wordCountEN = fullTextEN.split(/\s+/).length;
  const fupCount = fullCase.fups ? fullCase.fups.length : 0;

  // 4. Scores parciais (0-100 scale)
  const scores = {
    // Contribuição Individual (15 pts)
    eu_nos_ratio_score: calculateRatioScore(euNosRatio), // 0-15

    // Métricas e Dados (20 pts)
    metrics_score: calculateMetricsScore(specificMetrics.length, genericTerms.length), // 0-20

    // FUPs
    fup_completeness: fupCount >= 10 ? 10 : fupCount, // 0-10

    // Word count (indicador de profundidade)
    word_count_adequacy: wordCountPT >= 400 ? 10 : (wordCountPT / 400) * 10 // 0-10
  };

  // Score total automatizado (máx 55 pts de 100)
  const autoScore = Object.values(scores).reduce((a, b) => a + b, 0);

  // Flags
  const flags = [];
  if (euNosRatio < 3) flags.push(`⚠️ Ratio EU:NÓS baixo (${euNosRatio.toFixed(1)}:1)`);
  if (specificMetrics.length < 8) flags.push(`⚠️ Poucas métricas específicas (${specificMetrics.length})`);
  if (genericTerms.length > 0) flags.push(`⚠️ ${genericTerms.length} termos genéricos detectados`);
  if (fupCount < 10) flags.push(`⚠️ Menos de 10 FUPs (${fupCount})`);
  if (wordCountPT < 400) flags.push(`⚠️ Text curto (${wordCountPT} palavras)`);

  if (flags.length === 0) flags.push('✅ Métricas automáticas OK');

  console.log(`   EU:NÓS ratio: ${euNosRatio.toFixed(1)}:1`);
  console.log(`   Métricas específicas: ${specificMetrics.length}`);
  console.log(`   FUPs: ${fupCount}`);
  console.log(`   Auto-score: ${autoScore.toFixed(1)}/55`);

  return {
    case_id: caseInfo.id,
    lp: caseInfo.lp,
    title_pt: caseInfo.title_pt,
    company: caseInfo.company,
    auto_calculated: {
      eu_nos_ratio: parseFloat(euNosRatio.toFixed(2)),
      metrics_count: metrics.length,
      specific_metrics_count: specificMetrics.length,
      generic_terms_count: genericTerms.length,
      word_count_pt: wordCountPT,
      word_count_en: wordCountEN,
      fup_count: fupCount
    },
    scores: {
      eu_nos_ratio_score: parseFloat(scores.eu_nos_ratio_score.toFixed(1)),
      metrics_score: parseFloat(scores.metrics_score.toFixed(1)),
      fup_completeness: scores.fup_completeness,
      word_count_adequacy: parseFloat(scores.word_count_adequacy.toFixed(1)),
      auto_score_total: parseFloat(autoScore.toFixed(1))
    },
    flags: flags,
    metrics_sample: specificMetrics.slice(0, 5), // Amostra das primeiras 5 métricas
    needs_manual_review: flags.length > 2
  };
}

/**
 * Calcula score de ratio (0-15)
 */
function calculateRatioScore(ratio) {
  if (ratio >= 4) return 15; // Excelente
  if (ratio >= 3) return 12; // Bom
  if (ratio >= 2.5) return 9; // Aceitável
  if (ratio >= 2) return 6; // Fraco
  return 3; // Muito fraco
}

/**
 * Calcula score de métricas (0-20)
 */
function calculateMetricsScore(specificCount, genericCount) {
  let score = 0;

  // Quantidade de métricas específicas
  if (specificCount >= 8) score += 15;
  else if (specificCount >= 6) score += 12;
  else if (specificCount >= 4) score += 9;
  else score += (specificCount / 8) * 15;

  // Penalidade por termos genéricos
  const penalty = Math.min(genericCount * 1, 5); // Máx -5 pts
  score -= penalty;

  return Math.max(score, 0);
}

/**
 * Main
 */
async function main() {
  console.log('🚀 Auto-Scoring 71 cases...\n');

  // Carrega inventário
  const inventory = JSON.parse(fs.readFileSync(INVENTORY_FILE, 'utf8'));

  const scoringSummary = {
    generated_at: new Date().toISOString(),
    total_cases: inventory.total_cases,
    cases_scored: []
  };

  // Scores cada case
  for (const lp of inventory.leadership_principles) {
    console.log(`\n📂 ${lp.name} (${lp.case_count} cases)`);

    for (const caseInfo of lp.cases) {
      const score = await scoreCase(caseInfo);
      if (score) {
        scoringSummary.cases_scored.push(score);
      }
    }
  }

  // Estatísticas gerais
  const autoScores = scoringSummary.cases_scored.map(c => c.scores.auto_score_total);
  const avgScore = autoScores.reduce((a, b) => a + b, 0) / autoScores.length;
  const maxScore = Math.max(...autoScores);
  const minScore = Math.min(...autoScores);

  scoringSummary.statistics = {
    avg_auto_score: parseFloat(avgScore.toFixed(1)),
    max_auto_score: parseFloat(maxScore.toFixed(1)),
    min_auto_score: parseFloat(minScore.toFixed(1)),
    cases_needing_review: scoringSummary.cases_scored.filter(c => c.needs_manual_review).length
  };

  // Salva
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(scoringSummary, null, 2), 'utf8');

  console.log(`\n\n✅ Scoring completed: ${OUTPUT_FILE}`);
  console.log(`\n📈 Statistics:`);
  console.log(`   Average auto-score: ${avgScore.toFixed(1)}/55`);
  console.log(`   Best: ${maxScore.toFixed(1)}/55`);
  console.log(`   Worst: ${minScore.toFixed(1)}/55`);
  console.log(`   Cases needing manual review: ${scoringSummary.statistics.cases_needing_review}`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
