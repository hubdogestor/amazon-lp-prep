// Debug script para ver scores de todos os cases de best_employer
import case1 from '../../src/data/best_employer/best_employer_case1.js';
import case2 from '../../src/data/best_employer/best_employer_case2.js';
import case3 from '../../src/data/best_employer/best_employer_case3.js';

const question = {
  lp: "best_employer",
  priority: "ALTA",
  question_pt: "Conte sobre como você cria um ambiente de trabalho melhor",
  question_en: "Tell me about how you create a better work environment"
};

const cases = [
  { ...case1, caseNum: 1 },
  { ...case2, caseNum: 2 },
  { ...case3, caseNum: 3 }
];

const keywords = [
  "ambiente", "trabalho", "melhor", "criar", "clima", "cultura", "bem-estar", "eNPS", "satisfação",
  "environment", "work", "better", "create", "climate", "culture", "well-being", "eNPS", "satisfaction"
];

const concepts = [
  "ambiente de trabalho", "trabalho melhor", "clima organizacional", "cultura organizacional",
  "bem-estar da equipe", "satisfação do time", "melhor empregador", "engajamento",
  "work environment", "better workplace", "organizational climate", "organizational culture",
  "team well-being", "team satisfaction", "best employer", "engagement"
];

function calculateScore(caseData, question) {
  const baseScore = 40;
  let score = baseScore;
  
  const titleLower = caseData.title_pt?.toLowerCase() || '';
  const textLower = (
    caseData.pt?.s + ' ' + 
    caseData.pt?.t + ' ' + 
    caseData.pt?.a + ' ' + 
    caseData.pt?.r + ' ' +
    caseData.pt?.l
  ).toLowerCase();
  
  // Keywords (até +30)
  let keywordCount = 0;
  keywords.forEach(kw => {
    if (titleLower.includes(kw.toLowerCase()) || textLower.includes(kw.toLowerCase())) {
      keywordCount++;
    }
  });
  const keywordBonus = Math.min(30, keywordCount * 3);
  score += keywordBonus;
  
  // Concepts (até +30)
  let conceptCount = 0;
  concepts.forEach(concept => {
    if (textLower.includes(concept.toLowerCase())) {
      conceptCount++;
    }
  });
  const conceptBonus = Math.min(30, conceptCount * 5);
  score += conceptBonus;
  
  // Title overlap bonus (+10)
  const questionWords = question.question_pt.toLowerCase().split(' ').filter(w => w.length > 3);
  const titleWords = titleLower.split(' ').filter(w => w.length > 3);
  const overlapCount = questionWords.filter(qw => titleWords.includes(qw)).length;
  if (overlapCount >= 3) {
    score += 10;
  }
  
  return {
    score,
    breakdown: {
      base: baseScore,
      keywords: keywordBonus,
      keywordCount,
      concepts: conceptBonus,
      conceptCount,
      titleOverlap: overlapCount >= 3 ? 10 : 0,
      overlapCount
    }
  };
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🔍 DEBUG: best_employer P1 Question Analysis');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('📝 Question (P1 - ALTA):');
console.log(`   PT: "${question.question_pt}"`);
console.log(`   EN: "${question.question_en}"\n`);

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

cases.forEach(caseData => {
  const result = calculateScore(caseData, question);
  
  console.log(`\n📊 Case ${caseData.caseNum}: ${caseData.id}`);
  console.log(`   Title: "${caseData.title_pt}"`);
  console.log(`   Company: ${caseData.company} (${caseData.period})`);
  console.log(`   TopCase: ${caseData.isTopCase ? '⭐ YES' : 'NO'}`);
  console.log(`\n   ✅ SCORE: ${result.score}/100`);
  console.log(`   ├─ Base: ${result.breakdown.base}`);
  console.log(`   ├─ Keywords: +${result.breakdown.keywords} (${result.breakdown.keywordCount} matches)`);
  console.log(`   ├─ Concepts: +${result.breakdown.concepts} (${result.breakdown.conceptCount} matches)`);
  console.log(`   └─ Title overlap: +${result.breakdown.titleOverlap} (${result.breakdown.overlapCount} words)`);
  
  // Better work environment analysis
  const text = (caseData.pt.s + ' ' + caseData.pt.t + ' ' + caseData.pt.l).toLowerCase();
  const ambienteTrabalho = text.includes('ambiente de trabalho') || text.includes('melhor local') || text.includes('work environment');
  const enps = text.includes('enps') || text.includes('clima') || text.includes('engagement');
  const desenvolvimento = text.includes('desenvolvimento') || text.includes('crescimento') || text.includes('carreira') || text.includes('growth');
  const bemEstar = text.includes('bem-estar') || text.includes('satisfação') || text.includes('pertencimento') || text.includes('well-being');
  
  console.log(`\n   🎯 BETTER WORK ENVIRONMENT INDICATORS:`);
  console.log(`   ├─ "ambiente de trabalho/melhor local": ${ambienteTrabalho ? '✅ YES' : '❌ NO'}`);
  console.log(`   ├─ "eNPS/clima/engajamento": ${enps ? '✅ YES' : '❌ NO'}`);
  console.log(`   ├─ "desenvolvimento/carreira/crescimento": ${desenvolvimento ? '✅ YES' : '❌ NO'}`);
  console.log(`   └─ "bem-estar/satisfação/pertencimento": ${bemEstar ? '✅ YES' : '❌ NO'}`);
  
  console.log('\n' + '─'.repeat(60));
});

console.log('\n\n🎯 RECOMMENDATION:');
console.log('\nCase 1 (bradesco-agile-community-creation):');
console.log('  ✅ eNPS +27 points (18% → 6% churn)');
console.log('  ✅ 18 promotions, R$6.4M saved');
console.log('  ✅ "ser o melhor empregador" explicit');
console.log('  ✅ Growth Engine + Career Canvas co-created');
console.log('\nCase 3 (sefaz-reverse-mentoring-program):');
console.log('  ✅ eNPS 48 → 82 (massive improvement!)');
console.log('  ✅ Transfer requests -57%, 19 new leaders');
console.log('  ✅ "criar o melhor local para trabalhar" explicit');
console.log('  ✅ DuoLab mechanism uniting generations');
console.log('\n⚠️  Case 3 currently mapped with score 50. Optimize title for ≥60!');
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
