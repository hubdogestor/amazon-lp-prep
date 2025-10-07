// TESTE: Verificar se os mapeamentos estão carregando corretamente
import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';

console.log('\n🔍 TESTE: Verificando mapeamentos de Ownership\n');

const ownershipMapping = questionsToCasesMapping['ownership'];

// Verificar os 3 cases adaptados
const casesToCheck = [
  'sefaz-pmo-creation',
  'bradesco-international-payments'
];

casesToCheck.forEach(caseId => {
  const questions = [];
  Object.entries(ownershipMapping).forEach(([qNum, mapping]) => {
    if (mapping.case_id === caseId) {
      questions.push(qNum);
    }
  });
  
  console.log(`✅ ${caseId}: ${questions.length} questões → Q${questions.join(', Q')}`);
});

console.log('\n📊 Resumo:');
console.log('- sefaz-pmo-creation deve ter 4 questões (Q0, Q1, Q2, Q8)');
console.log('- bradesco-international-payments deve ter 3 questões (Q4, Q6, Q9)\n');
