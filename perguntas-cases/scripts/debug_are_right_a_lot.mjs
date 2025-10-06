// Debug script para ver scores de todos os cases de are_right_a_lot
import case1 from '../../src/data/are_right_a_lot/are_right_a_lot_case1.js';
import case2 from '../../src/data/are_right_a_lot/are_right_a_lot_case2.js';
import case3 from '../../src/data/are_right_a_lot/are_right_a_lot_case3.js';

const question = {
  lp: "are_right_a_lot",
  priority: "ALTA",
  question_pt: "Conte sobre uma situação onde você tomou uma decisão difícil com input de diferentes stakeholders",
  question_en: "Tell me about a situation where you made a difficult decision with input from different stakeholders"
};

const cases = [
  { ...case1, caseNum: 1 },
  { ...case2, caseNum: 2 },
  { ...case3, caseNum: 3 }
];

const keywords = [
  "decisão", "stakeholder", "difícil", "input", "conflito", "equilibrar", "negociar",
  "decision", "difficult", "conflicting", "balance", "negotiate", "stakeholder"
];

const concepts = [
  "múltiplos stakeholders", "decisão complexa", "inputs conflitantes", "equilibrar interesses",
  "negociação", "alinhamento", "consenso", "aprovação",
  "multiple stakeholders", "complex decision", "conflicting inputs", "balance interests",
  "negotiation", "alignment", "consensus", "approval"
];

function calculateScore(caseData, question) {
  const baseScore = 40;
  let score = baseScore;
  
  const titleLower = caseData.title_pt?.toLowerCase() || '';
  const textLower = (
    caseData.pt?.s + ' ' + 
    caseData.pt?.t + ' ' + 
    caseData.pt?.a + ' ' + 
    caseData.pt?.r
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
console.log('🔍 DEBUG: are_right_a_lot P1 Question Analysis');
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
  
  // Stakeholder analysis for case1
  if (caseData.caseNum === 1) {
    const text = caseData.pt.s + ' ' + caseData.pt.a;
    const stakeholderCount = (text.match(/stakeholder/gi) || []).length;
    const oitoStakeholders = text.includes('oito') || text.includes('eight');
    
    console.log(`\n   🎯 STAKEHOLDER ANALYSIS:`);
    console.log(`   ├─ "stakeholder" mentions: ${stakeholderCount}`);
    console.log(`   ├─ "oito stakeholders": ${oitoStakeholders ? '✅ YES' : '❌ NO'}`);
    console.log(`   └─ Stakeholders listed: marketing, risco, canais, ops, digital, TI, jurídico, regionais (8 total)`);
  }
  
  console.log('\n' + '─'.repeat(60));
});

console.log('\n\n🎯 RECOMMENDATION:');
console.log('Case 1 (sicredi-mobile-first-strategy) is PERFECT for this P1 question:');
console.log('✅ 8 different stakeholders with conflicting inputs');
console.log('✅ Difficult decision (hype vs stability vs hybrid)');
console.log('✅ "Data Gate" mechanism for decision with all stakeholders');
console.log('✅ Executive committee approval');
console.log('\n⚠️  ISSUES TO FIX:');
console.log('1. Company: "Sicredi Digital" → "Sicredi" (per CV)');
console.log('2. Date in SITUATION: "janeiro de 2024" → "janeiro de 2020" (timeline error)');
console.log('3. Title: Add keywords "Decisão Difícil", "Múltiplos Stakeholders" for score boost');
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
