#!/usr/bin/env node
// Debug específico para learn_and_be_curious P1

import case1 from '../../src/data/learn_and_be_curious/learn_and_be_curious_case1.js';
import case2 from '../../src/data/learn_and_be_curious/learn_and_be_curious_case2.js';
import case3 from '../../src/data/learn_and_be_curious/learn_and_be_curious_case3.js';
import case4 from '../../src/data/learn_and_be_curious/learn_and_be_curious_case4.js';
import case5 from '../../src/data/learn_and_be_curious/learn_and_be_curious_case5.js';

const question = "Como você se mantém atualizado na sua área de expertise e como explora novas áreas de conhecimento?";
const q = question.toLowerCase();

const cases = [case1, case2, case3, case4, case5];

console.log('🔍 Debugging score para pergunta P1:\n');
console.log(`Pergunta: "${question}"\n`);

cases.forEach((c, idx) => {
  const full = [
    c.title_pt || '',
    c.pt?.s || c.pt?.situation || '',
    c.pt?.t || c.pt?.task || '',
    c.pt?.a || c.pt?.action || '',
    c.pt?.r || c.pt?.result || '',
    c.pt?.l || c.pt?.learning || ''
  ].join(' ').toLowerCase();
  
  let score = 40; // Base score
  const reasons = [];
  
  // Concept match: aprender/conhecimento
  const qTerms = ['aprender', 'estudar', 'conhecimento', 'mantém', 'atualizado', 'explora'];
  const cTerms = ['aprendi', 'estudo', 'conhecimento', 'aprendizado', 'atualização', 'atualizado', 'explora'];
  
  const qMatches = qTerms.filter(t => q.includes(t));
  const cMatches = cTerms.filter(t => full.includes(t));
  
  if (qMatches.length > 0 && cMatches.length > 0) {
    const conceptScore = Math.min(30, qMatches.length * cMatches.length * 5);
    score += conceptScore;
    reasons.push(`Concept match: q=${qMatches.length}, c=${cMatches.length}, score=+${conceptScore}`);
  }
  
  // Title overlap
  const title = (c.title_pt || '').toLowerCase();
  const titleWords = title.split(/\W+/).filter(w => w.length > 3);
  const qWords = q.split(/\W+/).filter(w => w.length > 3);
  const titleOverlap = titleWords.filter(w => qWords.includes(w)).length;
  
  if (titleOverlap >= 2) {
    score += 10;
    reasons.push(`Title overlap: ${titleOverlap} words`);
  }
  
  console.log(`Case ${idx + 1}: ${c.id}`);
  console.log(`  Title: ${c.title_pt}`);
  console.log(`  Score: ${score}`);
  console.log(`  Q matches: ${qMatches.join(', ')}`);
  console.log(`  C matches: ${cMatches.join(', ')}`);
  console.log(`  Reasons: ${reasons.join('; ')}`);
  console.log();
});
