import fs from 'fs';
const data = JSON.parse(fs.readFileSync('./case-validation/reports/case-reclassification.json', 'utf-8'));

console.log('📊 RESUMO DA RECLASSIFICAÇÃO:\n');
console.log('✅ TOP CASES:', data.topCases.length);
console.log('✨ GOOD CASES:', data.goodCases.length);
console.log('📄 REGULAR CASES:', data.regularCases.length);
console.log('\n🎯 GOOD CASES por LP:');

Object.entries(data.summary).forEach(([lp, info]) => {
  if (info.goodCases && info.goodCases.length > 0) {
    console.log(`  ${lp}: ${info.goodCases.length} case(s)`);
  }
});

console.log('\n📋 TOP CASES (14):');
data.topCases.forEach((tc, i) => {
  console.log(`  ${i+1}. ${tc.lpId}: ${tc.caseId} (score: ${tc.score})`);
});
