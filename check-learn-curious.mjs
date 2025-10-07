import fs from 'fs';

const audit = JSON.parse(fs.readFileSync('./case-validation/reports/audit-final.json', 'utf-8'));
const lbc = audit.byLP.learn_and_be_curious;

console.log('\n📊 Learn & Be Curious - Cases needing work:');
console.log('\n❌ UNMAPPED (0Q):');
lbc.unmapped.forEach(c => {
  console.log(`  - ${c.caseId} (${c.file})`);
});

console.log('\n⚠️  INSUFFICIENT (<3Q):');
lbc.insufficient.forEach(c => {
  console.log(`  - ${c.caseId}: ${c.count}Q (${c.file})`);
});

console.log('\n✅ WELL-MAPPED (≥3Q):');
lbc.wellMapped.forEach(c => {
  console.log(`  - ${c.caseId}: ${c.count}Q${c.isTopCase ? ' 🌟 TOP CASE' : ''}`);
});
