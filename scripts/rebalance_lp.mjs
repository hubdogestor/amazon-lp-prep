#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const [, , lp] = process.argv;
if (!lp) {
  console.error('Usage: node scripts/rebalance_lp.mjs <lp> [--fupBonus=3] [--threshold=0.15] [--N=4]');
  process.exit(1);
}

const args = process.argv.slice(3);
const params = { fupBonus: 3, threshold: 0.15, N: 4, method: 'jaccard' };
args.forEach(a => {
  if (a.startsWith('--fupBonus=')) params.fupBonus = Number(a.split('=')[1]);
  if (a.startsWith('--threshold=')) params.threshold = Number(a.split('=')[1]);
  if (a.startsWith('--N=')) params.N = Number(a.split('=')[1]);
  if (a.startsWith('--method=')) params.method = a.split('=')[1];
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

// Simple TF-IDF + cosine similarity (local, no external deps)
function buildTfIdf(docs){
  const df = {};
  const tfs = docs.map(doc=>{
    const tf = {};
    doc.forEach(t=> tf[t]=(tf[t]||0)+1);
    Object.keys(tf).forEach(k=> df[k]=(df[k]||0)+1);
    return tf;
  });
  const N = docs.length;
  const idf = {};
  Object.keys(df).forEach(k=> idf[k]=Math.log((N+1)/(df[k]+1)) + 1);
  const vecs = tfs.map(tf=>{
    const vec = {};
    Object.keys(tf).forEach(k=> vec[k]=(tf[k]||0)*idf[k]);
    return vec;
  });
  return {idf,vecs};
}

function cosine(vecA, vecB){
  let num = 0, na=0, nb=0;
  const keys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
  for(const k of keys){
    const a = vecA[k]||0; const b = vecB[k]||0;
    num += a*b; na += a*a; nb += b*b;
  }
  if (na===0 || nb===0) return 0;
  return num / (Math.sqrt(na)*Math.sqrt(nb));
}

// collect FUPs for cases - naive: find case files under src/data/** matching caseId
async function collectFups(caseId){
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
    // quick filename or content check before trying to import
    const filename = path.basename(fp);
    let likely = false;
    if (filename.includes(caseId) || filename.toLowerCase().includes(caseId.replace(/-/g,''))) likely = true;
    const txt = fs.readFileSync(fp,'utf8');
    if (!likely && !(txt.includes(`id: "${caseId}"`) || txt.includes(`id: '${caseId}'`) || txt.includes(`id: ${caseId}`))) continue;

    // Prefer structured import: many case files export default case_x with `fups` property
    try{
      const mod = await import('file://' + fp);
      const data = mod && (mod.default || mod);
      if (data && Array.isArray(data.fups) && data.fups.length>0){
        const qs = [];
        for(const f of data.fups){
          if (f && f.q) qs.push(f.q);
          if (f && f.q_en) qs.push(f.q_en);
        }
        if (qs.length) return qs;
      }
    } catch(e){
      // fall back to regex parsing if import fails (e.g., syntax differences)
    }

    // fallback: crude regex parse to find fups array
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
  return [];
}

const casesFupsCache = {};

const proposed = {};
const capCounts = {};

// switch to async flow so we can await imports when extracting FUPs
(async function main(){
  for (const qIdx of Object.keys(lpMapping)){
    const q = questions && questions[qIdx] ? (questions[qIdx].pt || questions[qIdx]) : null;
    const qText = q && (q.s || q) || q || '';
    const qTokens = normalize(qText);
    const opts = lpMapping[qIdx].options || [];
    let best = null;
    for(const opt of opts){
      if (opt.score < 80) continue; // skip low base
      const caseId = opt.caseId;
      if (!casesFupsCache[caseId]){
        const raw = await collectFups(caseId);
        casesFupsCache[caseId] = raw.map(normalize);
      }
      const fupSets = casesFupsCache[caseId];
      let simSum = 0;
      if (params.method === 'tfidf'){
        // build docs: first doc is question tokens, rest are fup tokens
        const docs = [qTokens].concat(fupSets.length?fupSets:[[]]);
  const {vecs} = buildTfIdf(docs);
        const qVec = vecs[0] || {};
        for(let i=1;i<vecs.length;i++){
          const sim = cosine(qVec, vecs[i]);
          if (sim >= params.threshold) simSum += sim;
        }
      } else {
        for(const fupsTokens of fupSets){
          const sim = jaccard(qTokens, fupsTokens);
          if (sim >= params.threshold) simSum += sim;
        }
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
})();

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
