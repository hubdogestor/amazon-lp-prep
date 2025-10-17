import { questionsToCasesMapping } from '../src/data/questionsToCasesMapping.js';
import typicalQuestions from '../src/data/typicalQuestions.js';

console.log('🔍 VALIDAÇÃO COMPLETA DE TODOS OS LPs\n');
console.log('='.repeat(80));

const allLps = Object.keys(typicalQuestions);
let totalQuestions = 0;
let totalMapped = 0;
let totalProblems = 0;
const problems = [];

allLps.forEach(lpId => {
  const questions = typicalQuestions[lpId];
  const mapping = questionsToCasesMapping[lpId];

  if (!questions || !questions.pt) {
    console.log(`\n❌ ${lpId}: Sem perguntas definidas`);
    return;
  }

  const questionCount = questions.pt.length;
  totalQuestions += questionCount;

  console.log(`\n📌 ${lpId.toUpperCase()}`);
  console.log(`   Perguntas totais: ${questionCount}`);

  if (!mapping) {
    console.log(`   ❌ SEM MAPEAMENTO!`);
    totalProblems += questionCount;
    problems.push({ lpId, issue: 'Sem mapeamento' });
    return;
  }

  let mappedCount = 0;
  const missingQuestions = [];

  for (let i = 1; i <= questionCount; i++) {
    const qMapping = mapping[i.toString()];

    if (!qMapping) {
      missingQuestions.push(`Q${i}`);
      totalProblems++;
      problems.push({
        lpId,
        question: i,
        questionText: questions.pt[i-1].substring(0, 80),
        issue: 'Sem mapeamento'
      });
    } else if (!qMapping.options || qMapping.options.length === 0) {
      missingQuestions.push(`Q${i}`);
      totalProblems++;
      problems.push({
        lpId,
        question: i,
        questionText: questions.pt[i-1].substring(0, 80),
        issue: 'Sem cases'
      });
    } else {
      mappedCount++;
      totalMapped++;
    }
  }

  if (missingQuestions.length > 0) {
    console.log(`   ⚠️  Problemas: ${missingQuestions.join(', ')}`);
  } else {
    console.log(`   ✅ Mapeadas: ${mappedCount}/${questionCount} (100%)`);
  }
});

console.log('\n' + '='.repeat(80));
console.log('📊 RESUMO FINAL:\n');
console.log(`Total de perguntas: ${totalQuestions}`);
console.log(`Perguntas mapeadas: ${totalMapped}`);
console.log(`Perguntas com problemas: ${totalProblems}`);

if (totalProblems > 0) {
  console.log('\n❌ PROBLEMAS ENCONTRADOS:\n');
  problems.forEach(p => {
    console.log(`${p.lpId} Q${p.question}: ${p.issue}`);
    if (p.questionText) {
      console.log(`   "${p.questionText}..."`);
    }
  });
} else {
  console.log('\n✅ NENHUM PROBLEMA ENCONTRADO - 100% DE COBERTURA!');
}
