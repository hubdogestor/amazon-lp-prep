#!/usr/bin/env node
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('mapeamento-perguntas-cases-COMPLETO.json', 'utf-8'));

const cases = {};
data.filter(r => r.has_case === 'sim').forEach(r => {
  if (!cases[r.case_id]) {
    cases[r.case_id] = {
      id: r.case_id,
      title: r.case_title,
      lp: r.lp,
      count: 0,
      avgScore: 0,
      scores: []
    };
  }
  cases[r.case_id].count++;
  cases[r.case_id].scores.push(r.score);
});

Object.values(cases).forEach(c => {
  c.avgScore = (c.scores.reduce((a, b) => a + b) / c.scores.length).toFixed(1);
});

const top = Object.values(cases).sort((a, b) => b.count - a.count);

console.log('\n🏆 CASES MAIS VERSÁTEIS (respondem mais perguntas)\n');
console.log('='.repeat(110));
console.log('Rank | Perguntas | Score | LP'.padEnd(50) + ' | Case Title');
console.log('='.repeat(110));

top.forEach((c, i) => {
  const lp = c.lp.replace(/_/g, ' ').substring(0, 25).padEnd(25);
  console.log(
    `${String(i + 1).padStart(2)}   | ${String(c.count).padStart(9)} | ${String(c.avgScore).padStart(5)} | ${lp} | ${c.title.substring(0, 60)}`
  );
});

console.log('='.repeat(110));
console.log(`\n📊 RESUMO:`);
console.log(`   Total de cases únicos usados: ${top.length}`);
console.log(`   Case mais versátil: "${top[0].title}" (${top[0].count} perguntas)`);
console.log(`   Score médio geral: ${(top.reduce((sum, c) => sum + parseFloat(c.avgScore), 0) / top.length).toFixed(1)}/100`);
console.log('\n');
