import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';

const bfa = questionsToCasesMapping.bias_for_action;
const counts = {};

Object.entries(bfa).forEach(([key, value]) => {
  counts[value.case_id] = (counts[value.case_id] || 0) + 1;
});

console.log('\n📊 Bias for Action mappings per case:');
Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([id, count]) => {
    console.log(`  ${id}: ${count}Q`);
  });

console.log(`\n📈 Total mappings: ${Object.keys(bfa).length}`);
console.log(`📈 Unique cases: ${Object.keys(counts).length}`);
