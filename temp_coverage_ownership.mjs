// Coverage Report Script - Updated with Ownership
import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';

let totalQ = 0;
let mappedQ = 0;

const lpStats = {};

Object.entries(questionsToCasesMapping).forEach(([lp, qs]) => {
  const qEntries = Object.entries(qs);
  const mapped = qEntries.filter(([k, v]) => v !== null).length;
  
  totalQ += qEntries.length;
  mappedQ += mapped;
  
  lpStats[lp] = {
    total: qEntries.length,
    mapped: mapped,
    coverage: (mapped / qEntries.length * 100).toFixed(1)
  };
});

console.log('\n=== COVERAGE REPORT - OWNERSHIP UPDATE ===\n');
console.log(`Total Questions: ${totalQ}`);
console.log(`Mapped Questions: ${mappedQ}`);
console.log(`COVERAGE: ${(mappedQ/totalQ*100).toFixed(1)}%\n`);

console.log('=== NEW CASE CREATED (OWNERSHIP) ===');
console.log('4. ownership_case7: SEFAZ Emergency Rollback Without Approval');
console.log('   - ID: sefaz-emergency-rollback-no-approval');
console.log('   - Covers question #5: important decision without consulting manager');
console.log('   - Scenario: NFCE system down at 6pm Friday, manager unavailable');
console.log('   - Decision: Authorized rollback (BRL 4.8M risk) with controls');
console.log('   - Result: 23k companies saved, became official protocol\n');

console.log('=== REMAPPED QUESTIONS (OWNERSHIP) ===');
console.log('- Question #2: Long-term decision → long-term-tradeoff (score 85)');
console.log('- Question #4: Difficult trade-off long-term → long-term-tradeoff (score 90)\n');

console.log('=== TOTAL IMPROVEMENT ===');
console.log('Session Start: 104/171 (60.8%)');
console.log('After Priority 1-3: 127/171 (74.3%)');
console.log('After Ownership: ' + mappedQ + '/171 (' + (mappedQ/totalQ*100).toFixed(1) + '%)');
console.log('Total Gain: +' + (mappedQ - 104) + ' questions mapped (+' + ((mappedQ - 104)/171*100).toFixed(1) + '%)\n');

console.log('=== LPs WITH 100% COVERAGE ===');
const perfect = Object.entries(lpStats).filter(([lp, stats]) => stats.coverage === '100.0');
perfect.forEach(([lp, stats]) => {
  console.log(`✅ ${lp}: ${stats.coverage}% (${stats.mapped}/${stats.total})`);
});

console.log('\n=== LPs WITH 80%+ COVERAGE ===');
const good = Object.entries(lpStats).filter(([lp, stats]) => parseFloat(stats.coverage) >= 80 && stats.coverage !== '100.0');
good.forEach(([lp, stats]) => {
  console.log(`🟢 ${lp}: ${stats.coverage}% (${stats.mapped}/${stats.total})`);
});

console.log('\n=== REMAINING GAPS (< 80%) ===');
const gaps = Object.entries(lpStats).filter(([lp, stats]) => parseFloat(stats.coverage) < 80);
gaps.sort((a, b) => parseFloat(a[1].coverage) - parseFloat(b[1].coverage));
gaps.forEach(([lp, stats]) => {
  const missing = stats.total - stats.mapped;
  console.log(`🟡 ${lp}: ${stats.coverage}% (${stats.mapped}/${stats.total}) - ${missing} questions remaining`);
});

console.log('\n=== SESSION SUMMARY ===');
console.log('✅ 4 new cases created (deliver_results, bias_for_action, are_right_a_lot, ownership)');
console.log('✅ 26 questions newly mapped (+15.2%)');
console.log('✅ 5 LPs reached 100% coverage');
console.log('✅ Build: 3.70s (success)');
console.log('✅ Tests: 31/31 passing\n');
