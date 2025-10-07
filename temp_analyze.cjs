// Ler o arquivo e extrair o objeto questionsToCasesMapping
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'questionsToCasesMapping.js');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Extrair o objeto usando regex
const match = fileContent.match(/export const questionsToCasesMapping = ({[\s\S]*?});/);
if (!match) {
  console.error('Erro ao extrair questionsToCasesMapping');
  process.exit(1);
}

const m = eval(`(${match[1]})`);

const lps = [
  'customer_obsession',
  'ownership',
  'invent_and_simplify',
  'are_right_a_lot',
  'learn_and_be_curious',
  'hire_and_develop_the_best',
  'insist_on_highest_standards',
  'think_big',
  'bias_for_action',
  'frugality',
  'earn_trust',
  'dive_deep',
  'disagree_and_commit',
  'deliver_results',
  'best_employer',
  'broad_responsibility'
];

const results = [];

lps.forEach(lp => {
  const questions = m[lp];
  const values = Object.values(questions);
  const scores = values.filter(q => q && q.score).map(q => q.score);
  const nulls = values.filter(q => q === null).length;
  const mean = scores.length > 0 ? (scores.reduce((a,b) => a+b, 0) / scores.length).toFixed(1) : 0;
  const critical = scores.filter(s => s < 60).length;
  const weak = scores.filter(s => s >= 60 && s < 80).length;
  const total = Object.keys(questions).length;
  
  results.push({
    lp,
    mean: parseFloat(mean),
    critical,
    weak,
    nulls,
    total,
    mapped: total - nulls,
    gap: 87.5 - parseFloat(mean)
  });
});

// Ordenar por score (menor = maior urgência)
results.sort((a, b) => a.mean - b.mean);

console.log('=== 16 LPs PRIORIZADOS (menor score = maior urgência) ===\n');

results.forEach((r, idx) => {
  const status = r.mean >= 87.5 ? '✅' : r.mean >= 80 ? '⚠️' : '❌';
  const priority = (idx + 1).toString().padStart(2);
  const gapStr = r.gap >= 0 ? '+' + r.gap.toFixed(1) : r.gap.toFixed(1);
  
  console.log(
    `P${priority}: ${status} ${r.lp.padEnd(30)} | ` +
    `${r.mean.toString().padStart(5)} | ` +
    `Gap:${gapStr.padStart(6)} | ` +
    `Crit:${r.critical} Weak:${r.weak} Null:${r.nulls}/${r.total}`
  );
});

const done = results.filter(r => r.mean >= 87.5).length;
const pending = 16 - done;
const avgScore = (results.reduce((a,r) => a + r.mean, 0) / 16).toFixed(1);

console.log(`\n=== RESUMO ===`);
console.log(`✅ Concluídos: ${done}/16 (${((done/16)*100).toFixed(1)}%)`);
console.log(`⏳ Pendentes: ${pending}/16 (${((pending/16)*100).toFixed(1)}%)`);
console.log(`📊 Média Geral: ${avgScore}`);
console.log(`🎯 Meta Individual: 87.5 por LP`);
