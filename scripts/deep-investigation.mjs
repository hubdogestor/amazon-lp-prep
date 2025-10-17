// Investigação profunda: perguntas sem cases e cases sem perguntas
import { questionsToCasesMapping } from '../src/data/questionsToCasesMapping.js';
import typicalQuestions from '../src/data/typicalQuestions.js';
import consolidatedPrinciples from '../src/data/consolidatedPrinciples.js';

console.log('🔍 INVESTIGAÇÃO PROFUNDA\n');
console.log('='.repeat(80));

// Parte 1: Perguntas típicas analisadas índice por índice
console.log('\n📌 PARTE 1: VERIFICAÇÃO PERGUNTA POR PERGUNTA\n');

const allLps = Object.keys(typicalQuestions);
const problemQuestions = [];

allLps.forEach(lpId => {
  const questions = typicalQuestions[lpId];
  const mapping = questionsToCasesMapping[lpId];

  if (!questions || !questions.pt) return;

  const questionCount = questions.pt.length;

  for (let arrayIdx = 0; arrayIdx < questionCount; arrayIdx++) {
    const questionNumber = arrayIdx + 1; // Q1, Q2, Q3...
    const qMapping = mapping?.[questionNumber.toString()];

    if (!qMapping || !qMapping.options || qMapping.options.length === 0) {
      problemQuestions.push({
        lpId,
        arrayIdx,
        questionNumber,
        questionText: questions.pt[arrayIdx]
      });
    }
  }
});

if (problemQuestions.length > 0) {
  console.log('❌ PERGUNTAS SEM CASES:');
  problemQuestions.forEach(p => {
    console.log(`\n${p.lpId} - Array Index ${p.arrayIdx} → Q${p.questionNumber}`);
    console.log(`   "${p.questionText.substring(0, 80)}..."`);
  });
} else {
  console.log('✅ Todas as perguntas têm cases mapeados');
}

// Parte 2: Cases sem perguntas mapeadas
console.log('\n\n' + '='.repeat(80));
console.log('📌 PARTE 2: CASES SEM PERGUNTAS MAPEADAS\n');

const allCases = new Map();
consolidatedPrinciples.forEach(principle => {
  if (principle.cases && Array.isArray(principle.cases)) {
    principle.cases.forEach(caseData => {
      if (!allCases.has(caseData.id)) {
        allCases.set(caseData.id, {
          caseId: caseData.id,
          principles: [principle.id],
          mappedTo: []
        });
      } else {
        allCases.get(caseData.id).principles.push(principle.id);
      }
    });
  }
});

// Varre todos os mapeamentos para ver quais cases são usados
Object.entries(questionsToCasesMapping).forEach(([lpId, questions]) => {
  Object.entries(questions).forEach(([questionNumber, data]) => {
    if (data.options && Array.isArray(data.options)) {
      data.options.forEach(option => {
        if (allCases.has(option.caseId)) {
          allCases.get(option.caseId).mappedTo.push({
            lpId,
            questionNumber: parseInt(questionNumber)
          });
        }
      });
    }
  });
});

const orphanCases = [];
allCases.forEach((caseInfo, caseId) => {
  if (caseInfo.mappedTo.length === 0) {
    orphanCases.push(caseInfo);
  }
});

if (orphanCases.length > 0) {
  console.log(`❌ ${orphanCases.length} CASES SEM PERGUNTAS MAPEADAS:\n`);
  orphanCases.forEach(c => {
    console.log(`   ${c.caseId}`);
    console.log(`      Princípios: ${c.principles.join(', ')}`);
  });
} else {
  console.log('✅ Todos os cases têm perguntas mapeadas');
}

// Parte 3: Estatísticas por LP
console.log('\n\n' + '='.repeat(80));
console.log('📌 PARTE 3: ESTATÍSTICAS DETALHADAS POR LP\n');

allLps.forEach(lpId => {
  const questions = typicalQuestions[lpId];
  const mapping = questionsToCasesMapping[lpId];

  if (!questions || !questions.pt) return;

  const questionCount = questions.pt.length;
  const mappingCount = mapping ? Object.keys(mapping).length : 0;

  let mappedCount = 0;
  const missingIndexes = [];

  for (let i = 1; i <= questionCount; i++) {
    const qMapping = mapping?.[i.toString()];
    if (qMapping && qMapping.options && qMapping.options.length > 0) {
      mappedCount++;
    } else {
      missingIndexes.push(i);
    }
  }

  const status = mappedCount === questionCount ? '✅' : '❌';
  console.log(`${status} ${lpId}: ${mappedCount}/${questionCount} perguntas`);

  if (missingIndexes.length > 0) {
    console.log(`   Faltando: Q${missingIndexes.join(', Q')}`);
  }
});

console.log('\n' + '='.repeat(80));
console.log('✅ Investigação concluída\n');
