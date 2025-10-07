// DEBUG: Testar getCaseQuestions localmente
import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';
import { typicalQuestions } from './src/data/principlesData.js';

console.log('\n🔍 DEBUG: Testando getCaseQuestions para Ownership\n');

const caseId = 'sefaz-pmo-creation';
const principleId = 'ownership';

console.log('1️⃣ Buscando principleMapping...');
const principleMapping = questionsToCasesMapping[principleId];
console.log(`   ✅ principleMapping existe: ${!!principleMapping}`);

console.log('\n2️⃣ Buscando questions...');
const questions = typicalQuestions[principleId];
console.log(`   ✅ questions existe: ${!!questions}`);
console.log(`   📝 questions.pt existe: ${!!questions?.pt}`);
console.log(`   📝 questions.en existe: ${!!questions?.en}`);

console.log('\n3️⃣ Procurando mapeamentos para o case...');
const questionNumbers = [];
Object.entries(principleMapping).forEach(([qNum, mapping]) => {
  if (mapping && mapping.case_id === caseId) {
    questionNumbers.push(parseInt(qNum));
    console.log(`   ✅ Encontrado: Q${qNum} (score: ${mapping.score})`);
  }
});

console.log(`\n4️⃣ Total encontrado: ${questionNumbers.length} questões`);

console.log('\n5️⃣ Verificando textos das questões (PT):');
questionNumbers.forEach(num => {
  const text = questions.pt[num];
  console.log(`   Q${num}: ${text ? '✅ EXISTE' : '❌ UNDEFINED'}`);
  if (text) {
    console.log(`        "${text.substring(0, 60)}..."`);
  }
});

console.log('\n6️⃣ Verificando textos das questões (EN):');
questionNumbers.forEach(num => {
  const text = questions.en[num];
  console.log(`   Q${num}: ${text ? '✅ EXISTE' : '❌ UNDEFINED'}`);
  if (text) {
    console.log(`        "${text.substring(0, 60)}..."`);
  }
});
