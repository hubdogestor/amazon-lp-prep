// Script para verificar se todas as perguntas típicas têm mapeamento válido
import typicalQuestions from './src/data/typicalQuestions.js';
import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';
import allPrinciples from './src/data/consolidatedPrinciples.js';

console.log('\n🔍 VERIFICANDO MAPEAMENTO DE PERGUNTAS TÍPICAS\n');

const errors = [];
const warnings = [];
let totalQuestions = 0;
let mappedQuestions = 0;

// Criar mapa de todos os cases por ID
const allCasesByIdMap = {};
allPrinciples.forEach(principle => {
  principle.cases.forEach(caseItem => {
    allCasesByIdMap[caseItem.id] = {
      ...caseItem,
      principle: principle.id
    };
  });
});

console.log(`📦 Total de cases carregados: ${Object.keys(allCasesByIdMap).length}\n`);

// Verificar cada princípio
Object.keys(typicalQuestions).forEach(principleId => {
  const questions = typicalQuestions[principleId].pt;
  const mappings = questionsToCasesMapping[principleId];

  console.log(`\n━━━ ${principleId.toUpperCase()} ━━━`);
  console.log(`📝 Perguntas: ${questions.length}`);

  questions.forEach((question, index) => {
    totalQuestions++;
    const questionKey = String(index);

    // Verificar se existe mapeamento principal
    const mapping = mappings?.[questionKey];

    if (!mapping) {
      warnings.push({
        principle: principleId,
        questionIndex: index,
        question: question.substring(0, 80) + '...',
        issue: 'Sem mapeamento'
      });
      console.log(`  ⚠️  Q${index}: SEM MAPEAMENTO - ${question.substring(0, 60)}...`);
      return;
    }

    mappedQuestions++;

    // Verificar se o case existe
    const caseExists = allCasesByIdMap[mapping.case_id];

    if (!caseExists) {
      errors.push({
        principle: principleId,
        questionIndex: index,
        question: question.substring(0, 80) + '...',
        caseId: mapping.case_id,
        issue: 'Case não encontrado'
      });
      console.log(`  ❌ Q${index}: CASE NÃO ENCONTRADO - "${mapping.case_id}"`);
    } else {
      console.log(`  ✅ Q${index}: ${mapping.case_id} (score: ${mapping.score})`);
    }
  });
});

// Resumo final
console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 RESUMO DA VERIFICAÇÃO');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log(`Total de perguntas: ${totalQuestions}`);
console.log(`Perguntas com mapeamento: ${mappedQuestions} (${Math.round(mappedQuestions/totalQuestions*100)}%)`);
console.log(`Perguntas sem mapeamento: ${warnings.length}`);
console.log(`Erros (case não encontrado): ${errors.length}\n`);

if (warnings.length > 0) {
  console.log('⚠️  AVISOS - Perguntas sem mapeamento:\n');
  warnings.forEach(w => {
    console.log(`  ${w.principle} Q${w.questionIndex}: ${w.question}`);
  });
  console.log('');
}

if (errors.length > 0) {
  console.log('❌ ERROS - Cases não encontrados:\n');
  errors.forEach(e => {
    console.log(`  ${e.principle} Q${e.questionIndex}: Case "${e.caseId}" não existe`);
    console.log(`     Pergunta: ${e.question}\n`);
  });
  process.exit(1);
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ PERFEITO! Todos os mapeamentos estão corretos!\n');
} else if (errors.length === 0) {
  console.log(`✅ OK! Nenhum erro crítico, apenas ${warnings.length} perguntas sem mapeamento.\n`);
}
