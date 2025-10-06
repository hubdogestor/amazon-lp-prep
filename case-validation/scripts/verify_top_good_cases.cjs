#!/usr/bin/env node

/**
 * Verificação Rápida: Status dos Top Cases e Good Cases
 */

const fs = require('fs');
const path = require('path');

const LPS = [
  'customer_obsession',
  'ownership',
  'invent_and_simplify',
  'are_right_a_lot',
  'learn_and_be_curious',
  'hire_and_develop_the_best',
  'insist_on_highest_standards',
  'bias_for_action',
  'frugality',
  'earn_trust',
  'dive_deep',
  'deliver_results',
  'broad_responsibility',
  'think_big',
  'best_employer',
  'disagree_and_commit'
];

function readCase(lpId, caseFileName) {
  const filePath = path.join(__dirname, `../../src/data/${lpId}/${caseFileName}`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/const\s+\w+\s*=\s*({[\s\S]*?});?\s*(?:export|$)/);
    
    if (!match) {
      return null;
    }

    const caseObj = eval(`(${match[1]})`);
    return caseObj;
  } catch (err) {
    return null;
  }
}

console.log('📊 VERIFICAÇÃO RÁPIDA: TOP CASES & GOOD CASES\n');
console.log('='.repeat(80));

let totalTopCases = 0;
let totalGoodCases = 0;
let lpsWithoutTopCase = [];

LPS.forEach(lpId => {
  const lpDir = path.join(__dirname, `../../src/data/${lpId}`);
  
  if (!fs.existsSync(lpDir)) {
    console.log(`\n❌ ${lpId}: Diretório não encontrado`);
    return;
  }

  const files = fs.readdirSync(lpDir).filter(f => 
    f.includes('_case') && 
    f.endsWith('.js') && 
    !f.includes('config')
  );

  const topCases = [];
  const goodCases = [];

  files.forEach(file => {
    const caseObj = readCase(lpId, file);
    
    if (!caseObj) {
      return;
    }

    if (caseObj.isTopCase) {
      topCases.push({ id: caseObj.id, title: caseObj.title || caseObj.title_pt });
    }
    
    if (caseObj.isGoodCase && !caseObj.isTopCase) {
      goodCases.push({ id: caseObj.id, title: caseObj.title || caseObj.title_pt });
    }
  });

  totalTopCases += topCases.length;
  totalGoodCases += goodCases.length;

  // Display
  console.log(`\n📂 ${lpId.toUpperCase()}`);
  
  if (topCases.length === 0) {
    console.log('  ❌ SEM TOP CASE');
    lpsWithoutTopCase.push(lpId);
  } else if (topCases.length === 1) {
    console.log(`  ⭐ TOP CASE: ${topCases[0].id}`);
    console.log(`     "${topCases[0].title.substring(0, 60)}..."`);
  } else {
    console.log(`  ⚠️  MÚLTIPLOS TOP CASES (${topCases.length}):`);
    topCases.forEach(tc => {
      console.log(`     - ${tc.id}`);
    });
  }

  if (goodCases.length > 0) {
    console.log(`  👍 GOOD CASES (${goodCases.length}):`);
    goodCases.forEach(gc => {
      console.log(`     - ${gc.id}`);
      console.log(`       "${gc.title.substring(0, 55)}..."`);
    });
  }
});

console.log('\n' + '='.repeat(80));
console.log('📊 RESUMO FINAL:\n');
console.log(`  ⭐ TOP CASES: ${totalTopCases}/16 LPs`);
console.log(`  👍 GOOD CASES: ${totalGoodCases}`);

if (lpsWithoutTopCase.length > 0) {
  console.log(`\n  ❌ LPs sem Top Case (${lpsWithoutTopCase.length}):`);
  lpsWithoutTopCase.forEach(lp => console.log(`     - ${lp}`));
} else {
  console.log(`\n  ✅ TODOS os 16 LPs têm Top Case!`);
}

console.log('\n' + '='.repeat(80));

if (totalTopCases === 16 && lpsWithoutTopCase.length === 0) {
  console.log('\n🎉 SUCESSO! Todos os LPs estão cobertos com Top Cases.');
} else if (totalTopCases > 16) {
  console.log('\n⚠️  ATENÇÃO: Há mais de 16 Top Cases (deve haver exatamente 1 por LP).');
} else {
  console.log('\n⚠️  ATENÇÃO: Alguns LPs ainda não têm Top Case.');
}
