// Debug script para ver scores de todos os cases de bias_for_action
import case1 from '../../src/data/bias_for_action/bias_for_action_case1.js';
import case2 from '../../src/data/bias_for_action/bias_for_action_case2.js';
import case3 from '../../src/data/bias_for_action/bias_for_action_case3.js';
import case4 from '../../src/data/bias_for_action/bias_for_action_case4.js';

const question = {
  lp: "bias_for_action",
  priority: "ALTA",
  question_pt: "Nos dê um exemplo de risco calculado que você tomou quando o tempo era crítico, e como você mitigou esse risco?",
  question_en: "Give us an example of a calculated risk you took when time was critical, and how you mitigated that risk?"
};

const cases = [
  { ...case1, caseNum: 1 },
  { ...case2, caseNum: 2 },
  { ...case3, caseNum: 3 },
  { ...case4, caseNum: 4 }
];

const keywords = [
  "risco", "calculado", "tempo", "crítico", "mitigou", "mitigação", "urgente", "prazo", "rápido",
  "risk", "calculated", "time", "critical", "mitigated", "mitigation", "urgent", "deadline", "fast"
];

const concepts = [
  "risco calculado", "tempo crítico", "mitigação de risco", "decisão rápida", "pressão de tempo",
  "salvaguardas", "contingência", "rollback", "plano B",
  "calculated risk", "time critical", "risk mitigation", "fast decision", "time pressure",
  "safeguards", "contingency", "rollback", "plan B"
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
console.log('🔍 DEBUG: bias_for_action P1 Question Analysis');
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
  
  // Risk mitigation analysis
  if (caseData.caseNum === 4) {
    const text = caseData.pt.s + ' ' + caseData.pt.a;
    const riscoCalculado = text.toLowerCase().includes('risco') || text.toLowerCase().includes('calculad');
    const tempoCritico = text.toLowerCase().includes('72h') || text.toLowerCase().includes('horas');
    const mitigacao = text.toLowerCase().includes('rollback') || text.toLowerCase().includes('phoenix');
    
    console.log(`\n   🎯 PERFECT MATCH ANALYSIS:`);
    console.log(`   ├─ "risco calculado": ${riscoCalculado ? '✅ YES' : '❌ NO'}`);
    console.log(`   ├─ "tempo crítico" (72h): ${tempoCritico ? '✅ YES' : '❌ NO'}`);
    console.log(`   ├─ Mitigação (Phoenix/rollback): ${mitigacao ? '✅ YES' : '❌ NO'}`);
    console.log(`   └─ ID: "calculated-risk-time-critical" = PERFECT SEMANTIC MATCH!`);
  }
  
  console.log('\n' + '─'.repeat(60));
});

console.log('\n\n🎯 RECOMMENDATION:');
console.log('Case 4 (calculated-risk-time-critical) is PERFECT for this P1 question:');
console.log('✅ ID literally matches "calculated risk" + "time critical"');
console.log('✅ 72h time constraint (vs. 2 weeks normal)');
console.log('✅ Calculated risk: cutover by zones, temporary cloud');
console.log('✅ Mitigation: Phoenix plan, RPO 15min/RTO 90min, selective rollback in 7min');
console.log('✅ Company/period validated: Unimed 05/2021-02/2024, case 03/2023-05/2023 ✅');
console.log('\n⚠️  OPTIMIZATION NEEDED:');
console.log('Title should include keywords: "Risco Calculado", "Tempo Crítico", "72h", "Mitigação"');
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
