// Script para validar se todos os case_ids no mapeamento existem nos dados
import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';
import consolidatedPrinciples from './src/data/consolidatedPrinciples.js';

// Coletar todos os case IDs dos dados
const allCaseIds = new Set();
consolidatedPrinciples.forEach(lp => {
  lp.cases.forEach(c => {
    allCaseIds.add(c.id);
  });
});

console.log(`\n✅ Total de cases nos dados: ${allCaseIds.size}\n`);

// Coletar todos os case IDs referenciados no mapeamento
const mappedCaseIds = new Set();
const missingCaseIds = new Set();

Object.keys(questionsToCasesMapping).forEach(lpKey => {
  const lpMapping = questionsToCasesMapping[lpKey];
  Object.keys(lpMapping).forEach(qKey => {
    const caseId = lpMapping[qKey].case_id;
    mappedCaseIds.add(caseId);
    
    if (!allCaseIds.has(caseId)) {
      missingCaseIds.add(caseId);
      console.error(`❌ ERRO: Case "${caseId}" referenciado em ${lpKey}.Q${qKey} NÃO EXISTE!`);
    }
  });
});

console.log(`\n✅ Total de cases únicos mapeados: ${mappedCaseIds.size}`);

if (missingCaseIds.size > 0) {
  console.error(`\n🚨 ENCONTRADOS ${missingCaseIds.size} CASE IDs INVÁLIDOS:\n`);
  missingCaseIds.forEach(id => console.error(`   - ${id}`));
  process.exit(1);
} else {
  console.log(`\n✅ TODOS OS CASE IDs DO MAPEAMENTO SÃO VÁLIDOS!`);
  process.exit(0);
}
