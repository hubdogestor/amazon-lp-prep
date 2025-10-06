const fs = require('fs');

const data = JSON.parse(
  fs.readFileSync('perguntas-cases/dados/mapeamento-perguntas-cases-COMPLETO.json', 'utf8')
);

const stats = {};
data.forEach(d => {
  if (!stats[d.lp]) {
    stats[d.lp] = { total: 0, withCase: 0 };
  }
  stats[d.lp].total++;
  if (d.has_case === 'sim') {
    stats[d.lp].withCase++;
  }
});

console.log('\n📊 COBERTURA DE PERGUNTAS TÍPICAS → CASES\n');
console.log('═'.repeat(80));

const sorted = Object.entries(stats).sort((a, b) => 
  (b[1].withCase/b[1].total) - (a[1].withCase/a[1].total)
);

sorted.forEach(([lp, s]) => {
  const pct = (s.withCase/s.total*100).toFixed(1);
  const barLength = Math.floor(s.withCase/s.total*40);
  const bar = '█'.repeat(barLength) + '░'.repeat(40 - barLength);
  
  console.log(`${lp.padEnd(32)} ${s.withCase.toString().padStart(2)}/${s.total.toString().padEnd(2)} (${pct.padStart(5)}%) ${bar}`);
});

console.log('═'.repeat(80));

const totalWithCase = Object.values(stats).reduce((a,b)=>a+b.withCase,0);
const totalQuestions = Object.values(stats).reduce((a,b)=>a+b.total,0);
const totalPct = (totalWithCase/totalQuestions*100).toFixed(1);

console.log(`${'TOTAL'.padEnd(32)} ${totalWithCase}/${totalQuestions} (${totalPct}%)\n`);

// Identify LPs with low coverage
console.log('⚠️  LPs COM BAIXA COBERTURA (<50%):');
sorted.filter(([, s]) => s.withCase/s.total < 0.5).forEach(([lp, s]) => {
  const pct = (s.withCase/s.total*100).toFixed(1);
  const gap = s.total - s.withCase;
  console.log(`   • ${lp}: ${pct}% (faltam ${gap} cases)`);
});

console.log('\n✅ LPs COM BOA COBERTURA (≥70%):');
sorted.filter(([, s]) => s.withCase/s.total >= 0.7).forEach(([lp, s]) => {
  const pct = (s.withCase/s.total*100).toFixed(1);
  console.log(`   • ${lp}: ${pct}%`);
});

console.log('\n');
