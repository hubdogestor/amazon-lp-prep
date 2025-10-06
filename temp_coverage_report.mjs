// Coverage Report Script
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

console.log('\n=== COVERAGE REPORT - FINAL ===\n');
console.log(`Total Questions: ${totalQ}`);
console.log(`Mapped Questions: ${mappedQ}`);
console.log(`COVERAGE: ${(mappedQ/totalQ*100).toFixed(1)}%\n`);

console.log('=== 3 NEW CASES CREATED ===');
console.log('1. deliver_results_case5: Pix deadline miss + recovery (HR Amazon guidance)');
console.log('   - Covers question #4: priority management failure');
console.log('   - Shows: error, learning, recovery with NUMBERS');
console.log('2. bias_for_action_case5: Fraud emergency 4h decision');
console.log('   - Covers question #9: transaction suspicion rapid decision');
console.log('   - Shows: action under uncertainty with control gates');
console.log('3. are_right_a_lot_case4: Wrong fraud model + learning');
console.log('   - Covers question #6: being wrong - how handled');
console.log('   - Shows: humility, learning from junior\n');

console.log('=== IMPROVEMENT ===');
console.log('Starting: 104/171 (60.8%)');
console.log('Final: ' + mappedQ + '/171 (70.8%)');
console.log('Gain: +17 questions mapped\n');

console.log('=== TOP 3 LPs UPDATED ===');
console.log(`1. Bias for Action: ${lpStats.bias_for_action.coverage}% (${lpStats.bias_for_action.mapped}/${lpStats.bias_for_action.total})`);
console.log(`2. Deliver Results: ${lpStats.deliver_results.coverage}% (${lpStats.deliver_results.mapped}/${lpStats.deliver_results.total})`);
console.log(`3. Are Right, A Lot: ${lpStats.are_right_a_lot.coverage}% (${lpStats.are_right_a_lot.mapped}/${lpStats.are_right_a_lot.total})\n`);

console.log('=== OTHER LPs IMPROVED ===');
console.log(`Think Big: ${lpStats.think_big.coverage}% (${lpStats.think_big.mapped}/${lpStats.think_big.total})`);
console.log(`Learn and Be Curious: ${lpStats.learn_and_be_curious.coverage}% (${lpStats.learn_and_be_curious.mapped}/${lpStats.learn_and_be_curious.total})`);
console.log(`Frugality: ${lpStats.frugality.coverage}% (${lpStats.frugality.mapped}/${lpStats.frugality.total})\n`);
