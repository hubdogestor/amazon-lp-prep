#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const [, , lp] = process.argv;
if (!lp) {
  console.error('Usage: node scripts/rebalance_lp.mjs <lp> [--fupBonus=3] [--threshold=0.15] [--N=4]');
  process.exit(1);
}

const args = process.argv.slice(3);
const params = { fupBonus: 3, threshold: 0.15, N: 4 };
args.forEach(a => {
  if (a.startsWith('--fupBonus=')) params.fupBonus = Number(a.split('=')[1]);
  if (a.startsWith('--threshold=')) params.threshold = Number(a.split('=')[1]);
  if (a.startsWith('--N=')) params.N = Number(a.split('=')[1]);
});

const root = path.resolve(process.cwd());
const mappingPath = path.join(root, 'src', 'data', 'questionsToCasesMapping.js');
const lpFile = mappingPath;
if (!fs.existsSync(lpFile)) {
  console.error('Mapping file not found:', lpFile);
  process.exit(1);
}

const mapping = (await import('file://' + mappingPath)).default;
const lpMapping = mapping[lp];
if (!lpMapping) {
  console.error('LP not found in mapping:', lp);
  process.exit(1);
}

// load typicalQuestions
const typicalPath = path.join(process.cwd(), 'src', 'data', 'typicalQuestions.js');
const typical = (await import('file://' + typicalPath)).default;
const questions = typical[lp];

// helper normalize
function normalize(text) {
  return (text||'').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean).filter(t => t.length>2);
}

function jaccard(a,b){
  const sa=new Set(a), sb=new Set(b);
  const inter=[...sa].filter(x=>sb.has(x)).length;
  const uni=new Set([...sa,...sb]).size;
  return uni===0?0:inter/uni;
}

// collect FUPs for cases - naive: find case files under src/data/** matching caseId
function collectFups(caseId){
  // fallback: read program folders for specific LP
  const candidatePaths = [];
  function walk(p){
    const items = fs.readdirSync(p);
    items.forEach(it=>{
      const fp = path.join(p,it);
      if (fs.statSync(fp).isDirectory()) return walk(fp);
      if (it.endsWith('.js')) candidatePaths.push(fp);
    });
  }
  walk(path.join(root,'src','data'));
  for(const fp of candidatePaths){
    const txt = fs.readFileSync(fp,'utf8');
    if (txt.includes(`id: "${caseId}"`) || txt.includes(`id: '${caseId}'`) || txt.includes(`id: ${caseId}`)){
      // crude parse to find fups array
      const m = txt.match(/fups:\s*\[([\s\S]*?)\]/m);
      if (m){
        const fupsText = m[1];
        const qMatches = [...fupsText.matchAll(/q:\s*"([\s\S]*?)"/g)];
        const qEnMatches = [...fupsText.matchAll(/q_en:\s*"([\s\S]*?)"/g)];
        const qs = qMatches.map(x=>x[1]);
        const qsEn = qEnMatches.map(x=>x[1]);
        return qs.concat(qsEn);
      }
    }
  }
  return [];
}

const casesFupsCache = {};

const proposed = {};
const capCounts = {};

for (const qIdx of Object.keys(lpMapping)){
  const q = questions && questions[qIdx] ? (questions[qIdx].pt || questions[qIdx]) : null;
  const qText = q && (q.s || q) || q || '';
  const qTokens = normalize(qText);
  const opts = lpMapping[qIdx].options || [];
  let best = null;
  for(const opt of opts){
    if (opt.score < 80) continue; // skip low base
    const caseId = opt.caseId;
    if (!casesFupsCache[caseId]) casesFupsCache[caseId] = collectFups(caseId).map(normalize);
    const fupSets = casesFupsCache[caseId];
    let simSum = 0;
    for(const fupsTokens of fupSets){
      const sim = jaccard(qTokens, fupsTokens);
      if (sim >= params.threshold) simSum += sim;
    }
    const effective = opt.score + params.fupBonus * simSum;
    if (!best || effective > best.effective) best = { caseId, base: opt.score, simSum, effective };
  }
  proposed[qIdx] = best || null;
  if (best){
    capCounts[best.caseId] = (capCounts[best.caseId]||0) + 1;
  }
}

// apply cap N greedily
const sortedByEffective = Object.entries(proposed).filter(([,v])=>v).sort((a,b)=>b[1].effective - a[1].effective);
const finalPrimaries = {};
const counts = {};
for(const [qIdx,entry] of sortedByEffective){
  const c = entry.caseId;
  counts[c] = counts[c]||0;
  if (counts[c] >= params.N) {
    // find next candidate
    const opts = lpMapping[qIdx].options || [];
    let alt = null;
    for(const opt of opts){
      if (opt.score < 80) continue;
      const cid = opt.caseId;
      if ((counts[cid]||0) < params.N){
        alt = { caseId: cid, base: opt.score, simSum: 0, effective: opt.score };
        break;
      }
    }
    if (alt) { finalPrimaries[qIdx] = alt; counts[alt.caseId] = (counts[alt.caseId]||0)+1; }
    else finalPrimaries[qIdx] = entry; // fallback
  } else {
    finalPrimaries[qIdx] = entry; counts[c]++;
  }
}

const out = { params, proposedPrimaries: finalPrimaries, counts };
const outPath = path.join(root, `rebalance-suggestion-${lp}.json`);
fs.writeFileSync(outPath, JSON.stringify(out,null,2), 'utf8');
console.log('Wrote', outPath);
