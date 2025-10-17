// Encontra casos onde o caseId no mapeamento não existe nos cases reais
import { questionsToCasesMapping } from '../src/data/questionsToCasesMapping.js';
import consolidatedPrinciples from '../src/data/consolidatedPrinciples.js';

console.log('🔍 PROCURANDO CASE IDs INVÁLIDOS NO MAPEAMENTO\n');

// Cria um Set com todos os case IDs válidos
const validCaseIds = new Set();
consolidatedPrinciples.forEach(principle => {
  if (principle.cases && Array.isArray(principle.cases)) {
    principle.cases.forEach(caseData => {
      validCaseIds.add(caseData.id);
    });
  }
});

console.log(`✅ ${validCaseIds.size} cases válidos encontrados\n`);
console.log('='.repeat(80));

// Verifica todos os mapeamentos
const invalidMappings = [];

Object.entries(questionsToCasesMapping).forEach(([lpId, questions]) => {
  Object.entries(questions).forEach(([questionNumber, data]) => {
    if (data.options && Array.isArray(data.options)) {
      data.options.forEach((option, optionIdx) => {
        if (!validCaseIds.has(option.caseId)) {
          invalidMappings.push({
            lpId,
            questionNumber: parseInt(questionNumber),
            optionIdx,
            invalidCaseId: option.caseId,
            score: option.score
          });
        }
      });
    }
  });
});

if (invalidMappings.length > 0) {
  console.log(`\n❌ ${invalidMappings.length} MAPEAMENTOS COM CASE IDs INVÁLIDOS:\n`);

  invalidMappings.forEach(m => {
    console.log(`${m.lpId} Q${m.questionNumber} → "${m.invalidCaseId}" (score: ${m.score})`);

    // Tenta encontrar cases similares
    const similar = [];
    validCaseIds.forEach(validId => {
      if (validId.includes('sla') || m.invalidCaseId.includes(validId.substring(0, 10))) {
        similar.push(validId);
      }
    });

    if (similar.length > 0) {
      console.log(`   Possíveis correções: ${similar.join(', ')}`);
    }
    console.log('');
  });
} else {
  console.log('\n✅ Todos os case IDs no mapeamento são válidos!');
}

console.log('\n' + '='.repeat(80));
console.log('📋 LISTA DE TODOS OS CASE IDs VÁLIDOS (para referência):\n');

const sortedCases = Array.from(validCaseIds).sort();
sortedCases.forEach((caseId, idx) => {
  console.log(`${(idx + 1).toString().padStart(3, ' ')}. ${caseId}`);
});

console.log('\n✅ Análise concluída');
