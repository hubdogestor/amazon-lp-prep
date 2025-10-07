// DEBUG FINAL: Ver estrutura real de typicalQuestions
import typicalQuestions from './src/data/typicalQuestions.js';
import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';

console.log('\n🔍 DEBUG FINAL: typicalQuestions structure\n');

const principleId = 'ownership';
const questions = typicalQuestions[principleId];

console.log(`1️⃣ typicalQuestions['ownership'] existe: ${!!questions}`);
console.log(`2️⃣ É um objeto: ${typeof questions === 'object'}`);
console.log(`3️⃣ Tem 'pt': ${!!questions.pt}`);
console.log(`4️⃣ 'pt' é array: ${Array.isArray(questions.pt)}`);
console.log(`5️⃣ Tamanho do array PT: ${questions.pt.length}`);
console.log(`6️⃣ Tamanho do array EN: ${questions.en.length}`);

console.log('\n7️⃣ Mapeamentos para sefaz-pmo-creation:');
const mapping = questionsToCasesMapping['ownership'];
Object.entries(mapping).forEach(([qNum, m]) => {
  if (m.case_id === 'sefaz-pmo-creation') {
    const idx = parseInt(qNum);
    const textPT = questions.pt[idx];
    const textEN = questions.en[idx];
    console.log(`   Q${qNum}:`);
    console.log(`     PT[${idx}]: ${textPT ? '✅ ' + textPT.substring(0, 60) : '❌ UNDEFINED'}`);
    console.log(`     EN[${idx}]: ${textEN ? '✅ ' + textEN.substring(0, 60) : '❌ UNDEFINED'}`);
  }
});
