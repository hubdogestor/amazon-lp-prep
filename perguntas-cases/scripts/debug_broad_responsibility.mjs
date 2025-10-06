// Debug script para ver scores de todos os cases de broad_responsibility
import case1 from '../../src/data/broad_responsibility/broad_responsibility_case1.js';
import case2 from '../../src/data/broad_responsibility/broad_responsibility_case2.js';
import case3 from '../../src/data/broad_responsibility/broad_responsibility_case3.js';

const question = {
  lp: "broad_responsibility",
  priority: "ALTA",
  question_pt: "Me fale sobre como você considera impacto mais amplo das suas decisões",
  question_en: "Tell me about how you consider broader impact of your decisions"
};

const cases = [
  { ...case1, caseNum: 1 },
  { ...case2, caseNum: 2 },
  { ...case3, caseNum: 3 }
];

const keywords = [
  "impacto", "amplo", "decisão", "considerar", "responsabilidade", "consequências", "sociedade", "comunidade",
  "impact", "broader", "decision", "consider", "responsibility", "consequences", "society", "community"
];

const concepts = [
  "impacto amplo", "impacto mais amplo", "responsabilidade social", "stakeholders beyond", "consequências não intencionais",
  "segunda ordem", "futuras gerações", "ecossistema", "integridade do sistema",
  "broader impact", "wider impact", "social responsibility", "beyond obvious stakeholders", "unintended consequences",
  "second order", "future generations", "ecosystem", "system integrity"
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
console.log('🔍 DEBUG: broad_responsibility P1 Question Analysis');
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
  
  // Broader impact analysis
  const text = (caseData.pt.s + ' ' + caseData.pt.t + ' ' + caseData.pt.l).toLowerCase();
  const impactoAmplo = text.includes('impacto amplo') || text.includes('impacto mais amplo') || text.includes('broader impact');
  const responsabilidadeSocial = text.includes('responsabilidade social') || text.includes('responsabilidade com') || text.includes('social responsibility');
  const consequencias = text.includes('consequências') || text.includes('efeitos secundários') || text.includes('unintended consequences');
  const escala = text.includes('escala') && (text.includes('responsabilidade') || text.includes('responsibility'));
  
  console.log(`\n   🎯 BROADER IMPACT INDICATORS:`);
  console.log(`   ├─ "impacto amplo/mais amplo": ${impactoAmplo ? '✅ YES' : '❌ NO'}`);
  console.log(`   ├─ "responsabilidade social/com sociedade": ${responsabilidadeSocial ? '✅ YES' : '❌ NO'}`);
  console.log(`   ├─ "consequências não intencionais": ${consequencias ? '✅ YES' : '❌ NO'}`);
  console.log(`   └─ "escala + responsabilidade": ${escala ? '✅ YES' : '❌ NO'}`);
  
  console.log('\n' + '─'.repeat(60));
});

console.log('\n\n🎯 RECOMMENDATION:');
console.log('All 3 cases show "broader impact" thinking:');
console.log('\nCase 1 (unimed-lgpd-compliance):');
console.log('  ✅ 600k+ customers, health data (most sensitive)');
console.log('  ✅ "responsabilidade sobre efeitos secundários cresce exponencialmente"');
console.log('  ✅ Future generations protection, trust guardian');
console.log('  ✅ Standards for 12 future products');
console.log('\nCase 2 (hsbc-fatca-aml-migration):');
console.log('  ✅ "Quanto maior a escala, maior a responsabilidade com o ecossistema"');
console.log('  ✅ Global financial system integrity, international economic stability');
console.log('  ✅ Billion-dollar operations, 12 countries benefited');
console.log('  ✅ Line of defense for system integrity');
console.log('\nCase 3 (sicredi-responsible-ai-policy):');
console.log('  ✅ "Responsabilidade sobre consequências não intencionais"');
console.log('  ✅ 120k+ members, freelance workers equity, minorities');
console.log('  ✅ Ethical impact review, social responsibility');
console.log('  ✅ Framework requested by 3 cooperatives');
console.log('\n⚠️  ALL are at score 50-60 range. Need title optimization for ≥65!');
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
