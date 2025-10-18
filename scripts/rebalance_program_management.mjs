import fs from 'fs';
import { questionsToCasesMapping } from '../src/data/questionsToCasesMapping.js';
import program from '../src/data/program_management/index.js';
import typicalQuestions from '../src/data/typicalQuestions.js';

const N = 4; // cap per case
const fupBonus = 3.0; // points multiplier for similarity sum
const similarityThreshold = 0.15; // minimal similarity to count a fup as contributing

function normalize(text){
  if(!text) return '';
  return text
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, '') // diacritics removal placeholder
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(w=>w.length>2)
}

function jaccard(a,b){
  const sa = new Set(a);
  const sb = new Set(b);
  const inter = [...sa].filter(x=>sb.has(x));
  const uni = new Set([...sa,...sb]);
  if(uni.size===0) return 0;
  return inter.length/uni.size;
}

// Build a simple map of cases by id
const cases = {};
for(const c of program.cases){
  cases[c.id]=c;
}

const pmQuestions_pt = typicalQuestions.program_management.pt;
const pmQuestions_en = typicalQuestions.program_management.en;

// For each question index in mapping, compute effective scores
const pmMapping = questionsToCasesMapping.program_management;

// prepare fup tokenization for each case
const caseFups = {};
for(const c of program.cases){
  const fups = c.fups || [];
  caseFups[c.id] = fups.map(f => ({
    pt: normalize(f.q || f.q_pt || f.q_pt || ''),
    en: normalize(f.q_en || '')
  }));
}

function computeEffectiveScore(caseId, questionIndex){
  // original score from mapping
  const opts = pmMapping[questionIndex].options;
  const opt = opts.find(o=>o.caseId===caseId);
  if(!opt) return null;
  const base = opt.score;
  // question tokens
  const q_pt = normalize(pmQuestions_pt[parseInt(questionIndex)-1] || '');
  const q_en = normalize(pmQuestions_en[parseInt(questionIndex)-1] || '');
  // scan fups
  const fups = caseFups[caseId] || [];
  let simSum = 0;
  for(const f of fups){
    const sim_pt = jaccard(q_pt, f.pt);
    const sim_en = jaccard(q_en, f.en);
    const sim = Math.max(sim_pt, sim_en);
    if(sim >= similarityThreshold){
      simSum += sim; // accumulate similarity
    }
  }
  const effective = base + fupBonus * simSum;
  return {base, simSum, effective};
}

// compute effective scores table
const effectiveTable = {};
for(const q of Object.keys(pmMapping)){
  effectiveTable[q] = pmMapping[q].options.map(o=>{
    const r = computeEffectiveScore(o.caseId, q);
    return { caseId: o.caseId, base: o.score, simSum: r ? r.simSum : 0, effective: r ? r.effective : o.score };
  }).sort((a,b)=>b.effective - a.effective);
}

// Greedy assignment with cap N, using effective scores
const capCounts = {};
for(const c of Object.keys(cases)) capCounts[c]=0;
const proposedPrimaries = {};
for(const q of Object.keys(effectiveTable).sort((a,b)=>parseInt(a)-parseInt(b))){
  const opts = effectiveTable[q];
  // pick highest effective score whose cap not reached and base>=80
  let chosen = null;
  for(const o of opts){
    if(o.base < 80) continue; // skip low-quality
    if(capCounts[o.caseId] < N){ chosen = o; break; }
  }
  // if none found (rare), pick highest regardless of cap
  if(!chosen){ chosen = opts[0]; }
  proposedPrimaries[q]=chosen;
  capCounts[chosen.caseId] = (capCounts[chosen.caseId]||0)+1;
}

// Print summary
console.log('FUP-aware rebalance proposal (N='+N+', fupBonus='+fupBonus+', threshold='+similarityThreshold+')');
console.log('\nCase fup counts:');
for(const c of Object.keys(caseFups)){
  console.log(`- ${c}: ${caseFups[c].length} fups`);
}
console.log('\nProposed primaries:');
for(const q of Object.keys(proposedPrimaries).sort((a,b)=>parseInt(a)-parseInt(b))){
  const p = proposedPrimaries[q];
  console.log(`Q${q}: ${p.caseId} (base=${p.base}, simSum=${p.simSum.toFixed(2)}, effective=${p.effective.toFixed(2)})`);
}

console.log('\nFinal primary distribution count:');
for(const [cid,ct] of Object.entries(capCounts)){
  if(ct>0) console.log(`${cid}: ${ct}`);
}

// Also produce a small JSON suggestion to disk
const suggestion = { params: {N,fupBonus,similarityThreshold}, proposedPrimaries, capCounts };
fs.writeFileSync('rebalance-suggestion-program_management.json', JSON.stringify(suggestion, null, 2));
console.log('\nSaved detailed suggestion to rebalance-suggestion-program_management.json');
