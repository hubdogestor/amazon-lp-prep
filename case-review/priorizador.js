/**
 * PRIORIZADOR
 *
 * Classifica cases em 3 grupos baseado em auto-score:
 * - Grupo A (≥85 pts projetados): Excelentes
 * - Grupo B (75-84 pts): Bons
 * - Grupo C (<75 pts): Precisam refinamento
 *
 * Gera: reports/03-priorization.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCORING_FILE = path.join(__dirname, 'reports', '02-scoring-summary.json');
const OUTPUT_FILE = path.join(__dirname, 'reports', '03-priorization.json');

/**
 * Projeta score total (auto-score é máx 55 de 100)
 * Assume score médio de 40 pts para dimensões manuais
 */
function projectTotalScore(autoScore) {
  // Auto-score: 55 pts máx (EU:NÓS 15 + Métricas 20 + FUPs 10 + Word count 10)
  // Manual: 45 pts (STAR 20 + LP Content 25)
  // Projeção conservadora: assume 80% do manual (36 pts)
  const manualEstimate = 36;
  return autoScore + manualEstimate;
}

/**
 * Classifica case
 */
function classifyCase(caseData) {
  const projectedScore = projectTotalScore(caseData.scores.auto_score_total);

  let priority, group;

  if (projectedScore >= 85) {
    priority = 'low';
    group = 'A';
  } else if (projectedScore >= 75) {
    priority = 'medium';
    group = 'B';
  } else {
    priority = 'high';
    group = 'C';
  }

  return {
    ...caseData,
    projected_total_score: parseFloat(projectedScore.toFixed(1)),
    priority,
    group
  };
}

/**
 * Main
 */
function main() {
  console.log('🎯 Prioritizing 71 cases...\n');

  const scoringSummary = JSON.parse(fs.readFileSync(SCORING_FILE, 'utf8'));

  // Classifica todos os cases
  const classified = scoringSummary.cases_scored.map(classifyCase);

  // Agrupa por prioridade
  const groupA = classified.filter(c => c.group === 'A');
  const groupB = classified.filter(c => c.group === 'B');
  const groupC = classified.filter(c => c.group === 'C');

  // Ordena cada grupo por score (menor primeiro nos críticos)
  groupC.sort((a, b) => a.projected_total_score - b.projected_total_score);
  groupB.sort((a, b) => a.projected_total_score - b.projected_total_score);
  groupA.sort((a, b) => b.projected_total_score - a.projected_total_score);

  const priorization = {
    generated_at: new Date().toISOString(),
    total_cases: classified.length,
    distribution: {
      group_a: groupA.length,
      group_b: groupB.length,
      group_c: groupC.length
    },
    groups: {
      high_priority: groupC.map(c => ({
        case_id: c.case_id,
        lp: c.lp,
        title_pt: c.title_pt,
        company: c.company,
        auto_score: c.scores.auto_score_total,
        projected_score: c.projected_total_score,
        top_flags: c.flags.slice(0, 3),
        estimated_effort_hours: estimateEffort(c)
      })),
      medium_priority: groupB.map(c => ({
        case_id: c.case_id,
        lp: c.lp,
        title_pt: c.title_pt,
        company: c.company,
        auto_score: c.scores.auto_score_total,
        projected_score: c.projected_total_score,
        top_flags: c.flags.slice(0, 2),
        estimated_effort_hours: estimateEffort(c)
      })),
      low_priority: groupA.map(c => ({
        case_id: c.case_id,
        lp: c.lp,
        title_pt: c.title_pt,
        company: c.company,
        auto_score: c.scores.auto_score_total,
        projected_score: c.projected_total_score,
        estimated_effort_hours: estimateEffort(c)
      }))
    },
    effort_estimate: {
      high_priority_total: groupC.reduce((sum, c) => sum + estimateEffort(c), 0),
      medium_priority_total: groupB.reduce((sum, c) => sum + estimateEffort(c), 0),
      low_priority_total: groupA.reduce((sum, c) => sum + estimateEffort(c), 0),
      grand_total: classified.reduce((sum, c) => sum + estimateEffort(c), 0)
    }
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(priorization, null, 2), 'utf8');

  console.log(`✅ Priorization completed: ${OUTPUT_FILE}\n`);
  console.log(`📊 Distribution:`);
  console.log(`   🟢 Group A (≥85 pts, Low Priority):    ${groupA.length} cases - ${priorization.effort_estimate.low_priority_total.toFixed(1)}h`);
  console.log(`   🟡 Group B (75-84 pts, Medium Priority): ${groupB.length} cases - ${priorization.effort_estimate.medium_priority_total.toFixed(1)}h`);
  console.log(`   🔴 Group C (<75 pts, High Priority):   ${groupC.length} cases - ${priorization.effort_estimate.high_priority_total.toFixed(1)}h`);
  console.log(`\n⏱️  Total estimated effort: ${priorization.effort_estimate.grand_total.toFixed(1)} hours\n`);

  if (groupC.length > 0) {
    console.log(`\n🔴 Top 5 cases needing urgent review:`);
    groupC.slice(0, 5).forEach((c, i) => {
      console.log(`   ${i + 1}. ${c.case_id} (${c.projected_total_score} pts) - ${c.lp}`);
      console.log(`      ${c.flags[0]}`);
    });
  }

  console.log('\n');
}

/**
 * Estima esforço em horas baseado no gap de score
 */
function estimateEffort(caseData) {
  const gap = 85 - caseData.projected_total_score;

  if (gap <= 0) return 0.5; // Polimento apenas
  if (gap <= 10) return 1.5; // Ajustes médios
  if (gap <= 20) return 2.5; // Revisão moderada
  return 3.5; // Revisão profunda
}

main();
