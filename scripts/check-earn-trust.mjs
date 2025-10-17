import { questionsToCasesMapping } from '../src/data/questionsToCasesMapping.js';
import typicalQuestions from '../src/data/typicalQuestions.js';

const earnTrust = questionsToCasesMapping.earn_trust;
const questions = typicalQuestions.earn_trust;

console.log('🔍 Verificando Earn Trust:\n');
console.log(`Total de perguntas: ${questions.pt.length}`);
console.log(`Total de mapeamentos: ${Object.keys(earnTrust).length}\n`);

for (let i = 1; i <= questions.pt.length; i++) {
  const mapping = earnTrust[i.toString()];
  console.log(`Q${i}: ${questions.pt[i-1].substring(0, 70)}...`);

  if (!mapping) {
    console.log(`  ❌ SEM MAPEAMENTO!\n`);
  } else if (!mapping.options || mapping.options.length === 0) {
    console.log(`  ⚠️  Mapeamento existe mas SEM CASES!\n`);
  } else {
    console.log(`  ✓ ${mapping.options.length} case(s): ${mapping.options.map(o => o.caseId).join(', ')}\n`);
  }
}
