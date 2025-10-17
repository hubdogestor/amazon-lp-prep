// scripts/check-new-lps-cases.mjs
// Verifica quais cases estão disponíveis para os 4 novos LPs

import consolidatedPrinciples from '../src/data/consolidatedPrinciples.js';

const newLps = ['program_management', 'stakeholder_management', 'prioritizing_and_influence', 'deal_with_ambiguity'];

console.log('📊 Cases disponíveis para os novos LPs:\n');

newLps.forEach(lpId => {
  const lp = consolidatedPrinciples.find(p => p.id === lpId);

  if (lp) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`${lpId.toUpperCase()}`);
    console.log(`${'='.repeat(80)}`);
    console.log(`Total de cases: ${lp.cases?.length || 0}\n`);

    if (lp.cases && lp.cases.length > 0) {
      lp.cases.forEach((c, idx) => {
        console.log(`${idx + 1}. ${c.id}`);
        if (c.pt?.situation) {
          const preview = c.pt.situation.substring(0, 100);
          console.log(`   Situação: ${preview}${c.pt.situation.length > 100 ? '...' : ''}`);
        }
      });
    } else {
      console.log('⚠️  Nenhum case encontrado para este LP!');
    }
  } else {
    console.log(`\n❌ LP não encontrado: ${lpId}`);
  }
});

console.log('\n\n✅ Análise concluída!');
