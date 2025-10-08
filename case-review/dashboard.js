/**
 * DASHBOARD
 *
 * Mostra visão geral do status da revisão de cases
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCORING_FILE = path.join(__dirname, 'reports', '02-scoring-summary.json');
const PRIORIZATION_FILE = path.join(__dirname, 'reports', '03-priorization.json');

function main() {
  console.clear();
  console.log('═'.repeat(80));
  console.log('  📊 DASHBOARD - Amazon LP Cases Review');
  console.log('═'.repeat(80));
  console.log('');

  const scoring = JSON.parse(fs.readFileSync(SCORING_FILE, 'utf8'));
  const priorization = JSON.parse(fs.readFileSync(PRIORIZATION_FILE, 'utf8'));

  // Status geral
  console.log('📈 STATUS GERAL\n');
  console.log(`  Total de cases: ${scoring.total_cases}`);
  console.log(`  Auto-score médio: ${scoring.statistics.avg_auto_score}/55 (${((scoring.statistics.avg_auto_score / 55) * 100).toFixed(1)}%)`);
  console.log(`  Melhor score: ${scoring.statistics.max_auto_score}/55`);
  console.log(`  Pior score: ${scoring.statistics.min_auto_score}/55`);
  console.log('');

  // Distribuição
  console.log('📊 DISTRIBUIÇÃO POR PRIORIDADE\n');
  console.log(`  🟢 Grupo A (≥85 pts):  ${priorization.distribution.group_a} cases (${((priorization.distribution.group_a / scoring.total_cases) * 100).toFixed(1)}%)`);
  console.log(`  🟡 Grupo B (75-84 pts): ${priorization.distribution.group_b} cases (${((priorization.distribution.group_b / scoring.total_cases) * 100).toFixed(1)}%)`);
  console.log(`  🔴 Grupo C (<75 pts):   ${priorization.distribution.group_c} cases (${((priorization.distribution.group_c / scoring.total_cases) * 100).toFixed(1)}%)`);
  console.log('');

  // Gráfico de barras
  console.log('  Visualização:');
  const totalWidth = 60;
  const groupAWidth = Math.round((priorization.distribution.group_a / scoring.total_cases) * totalWidth);
  const groupBWidth = Math.round((priorization.distribution.group_b / scoring.total_cases) * totalWidth);
  const groupCWidth = Math.round((priorization.distribution.group_c / scoring.total_cases) * totalWidth);

  console.log(`  [${'█'.repeat(groupAWidth)}${'░'.repeat(groupBWidth)}${'▓'.repeat(groupCWidth)}${' '.repeat(Math.max(0, totalWidth - groupAWidth - groupBWidth - groupCWidth))}]`);
  console.log(`   ${'🟢'.padEnd(groupAWidth)}${'🟡'.padEnd(groupBWidth)}${'🔴'.padEnd(groupCWidth)}`);
  console.log('');

  // Esforço
  console.log('⏱️  ESFORÇO ESTIMADO\n');
  console.log(`  🔴 Alta prioridade:   ${priorization.effort_estimate.high_priority_total.toFixed(1)}h`);
  console.log(`  🟡 Média prioridade:  ${priorization.effort_estimate.medium_priority_total.toFixed(1)}h`);
  console.log(`  🟢 Baixa prioridade:  ${priorization.effort_estimate.low_priority_total.toFixed(1)}h`);
  console.log(`  ─────────────────────────────`);
  console.log(`  📦 Total:             ${priorization.effort_estimate.grand_total.toFixed(1)}h (~${(priorization.effort_estimate.grand_total / 8).toFixed(1)} dias)`);
  console.log('');

  // Top 5 críticos
  console.log('🚨 TOP 5 CASES CRÍTICOS\n');
  priorization.groups.high_priority.slice(0, 5).forEach((c, i) => {
    console.log(`  ${i + 1}. ${c.case_id}`);
    console.log(`     LP: ${c.lp}`);
    console.log(`     Score: ${c.projected_score}/100`);
    console.log(`     Esforço: ${c.estimated_effort_hours}h`);
    if (c.top_flags && c.top_flags[0]) {
      console.log(`     Gap: ${c.top_flags[0]}`);
    }
    console.log('');
  });

  // Roadmap
  console.log('🎯 ROADMAP SUGERIDO\n');
  console.log(`  Sprint 1 (Quick Wins):  12.5h → 100% cases ≥75 pts`);
  console.log(`  Sprint 2 (Hooks):        7.5h → 100% hooks ≥médio`);
  console.log(`  Sprint 3 (Métricas):     5.4h → 95% cases ≥85 pts`);
  console.log(`  Sprint 4 (Polimento):   26.8h → 100% cases ≥90 pts (opcional)`);
  console.log('');

  // Próximos passos
  console.log('📋 PRÓXIMOS PASSOS\n');
  console.log(`  1. Ler: reports/MASTER-PLAN.md`);
  console.log(`  2. Revisar: recommendations/high-priority/`);
  console.log(`  3. Executar: Sprint 1 (12.5h)`);
  console.log(`  4. Validar: node auto-scorer.js`);
  console.log('');

  console.log('═'.repeat(80));
  console.log('  💡 Dica: Rode "node dashboard.js" a qualquer momento para ver status');
  console.log('═'.repeat(80));
  console.log('');
}

main();
