#!/usr/bin/env node
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('mapeamento-perguntas-cases-COMPLETO.json', 'utf-8'));

const byLP = {};
data.forEach(r => {
  if (!byLP[r.lp]) byLP[r.lp] = { total: 0, com: 0, sem: 0, alta: 0, scores: [] };
  byLP[r.lp].total++;
  if (r.has_case === 'sim') {
    byLP[r.lp].com++;
    byLP[r.lp].scores.push(r.score);
  } else {
    byLP[r.lp].sem++;
  }
  if (r.priority === 'ALTA') byLP[r.lp].alta++;
});

console.log('\n📊 ESTATÍSTICAS DETALHADAS POR LP\n');
console.log('='.repeat(90));
console.log('LP'.padEnd(32) + '| Cobertura | % | Score Médio | Gaps | P1 Coberta?');
console.log('='.repeat(90));

Object.entries(byLP)
  .sort((a, b) => (b[1].com / b[1].total) - (a[1].com / a[1].total))
  .forEach(([lp, stats]) => {
    const pct = (stats.com / stats.total * 100).toFixed(1);
    const avg = stats.scores.length > 0 
      ? (stats.scores.reduce((a, b) => a + b) / stats.scores.length).toFixed(1) 
      : '0.0';
    
    const status = stats.com === stats.total ? '✅' : 
                   pct >= 60 ? '✅' : 
                   pct >= 40 ? '⚠️ ' : '❌';
    
    const p1Status = data.find(r => r.lp === lp && r.priority === 'ALTA')?.has_case === 'sim' ? '✅' : '❌';
    
    console.log(
      `${lp.padEnd(30)} | ${String(stats.com).padStart(2)}/${String(stats.total).padStart(2)}      | ${String(pct).padStart(5)}% | ${String(avg).padStart(11)} | ${String(stats.sem).padStart(4)} | ${p1Status}`
    );
  });

console.log('='.repeat(90));
console.log(`\n📈 RESUMO GERAL:`);
console.log(`   Total de perguntas: ${data.length}`);
console.log(`   Com case adequado: ${data.filter(r => r.has_case === 'sim').length} (${(data.filter(r => r.has_case === 'sim').length / data.length * 100).toFixed(1)}%)`);
console.log(`   Sem case adequado: ${data.filter(r => r.has_case === 'não').length} (${(data.filter(r => r.has_case === 'não').length / data.length * 100).toFixed(1)}%)`);

const p1Covered = data.filter(r => r.priority === 'ALTA' && r.has_case === 'sim').length;
const p1Total = data.filter(r => r.priority === 'ALTA').length;
console.log(`   Perguntas #1 cobertas: ${p1Covered}/${p1Total} (${(p1Covered / p1Total * 100).toFixed(1)}%)`);

const allScores = data.filter(r => r.has_case === 'sim').map(r => r.score);
const avgScore = allScores.reduce((a, b) => a + b) / allScores.length;
console.log(`   Score médio dos matches: ${avgScore.toFixed(1)}/100`);

console.log('\n');
