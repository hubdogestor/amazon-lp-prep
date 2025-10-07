// Verificar TODOS os 5 cases adaptados
import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';

const casesToCheck = [
  { id: 'unimed-open-innovation', lp: 'invent_simplify', name: 'Unimed Open Innovation' },
  { id: 'sefarz-pix-reconciliation-automation', lp: 'invent_simplify', name: 'SEFAZ PIX Reconciliation' },
  { id: 'sefaz-pmo-creation', lp: 'ownership', name: 'SEFAZ PMO Creation' },
  { id: 'bradesco-international-payments', lp: 'ownership', name: 'Bradesco International Payments' },
  { id: 'sicredi-frictionless-checkout', lp: 'customer_obsession', name: 'Sicredi Frictionless Checkout' }
];

console.log('\n🔍 VERIFICAÇÃO COMPLETA: 5 Cases Adaptados\n');

let hasIssues = false;

casesToCheck.forEach(({id, lp, name}) => {
  const mapping = questionsToCasesMapping[lp];
  const questions = [];
  
  Object.entries(mapping).forEach(([qNum, m]) => {
    if (m.case_id === id) {
      questions.push(qNum);
    }
  });
  
  const status = questions.length > 0 ? '✅' : '❌';
  const color = questions.length > 0 ? '' : ' (SEM MAPEAMENTO!)';
  
  console.log(`${status} ${name}`);
  console.log(`   LP: ${lp}`);
  console.log(`   Case ID: ${id}`);
  console.log(`   Questões: ${questions.length > 0 ? `${questions.length} → Q${questions.join(', Q')}` : '0 (NENHUMA!)'}${color}`);
  console.log('');
  
  if (questions.length === 0) hasIssues = true;
});

if (hasIssues) {
  console.log('🚨 PROBLEMA ENCONTRADO: Alguns cases não têm mapeamentos!');
  process.exit(1);
} else {
  console.log('✅ TODOS OS 5 CASES ESTÃO MAPEADOS!');
  process.exit(0);
}
