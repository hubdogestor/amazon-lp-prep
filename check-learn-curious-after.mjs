#!/usr/bin/env node
import fs from 'fs';

const auditPath = './case-validation/reports/audit-final.json';
const audit = JSON.parse(fs.readFileSync(auditPath, 'utf-8'));

console.log('\n📊 LEARN & BE CURIOUS - STATUS AFTER MAPPING\n');

const learnCurious = audit.detailedByLP.find(lp => lp.lpName === 'Learn and Be Curious');

if (learnCurious) {
  console.log(`Total cases: ${learnCurious.total}`);
  console.log(`✅ Bem mapeados (≥3Q): ${learnCurious.wellMapped} (${Math.round(learnCurious.wellMapped / learnCurious.total * 100)}%)`);
  console.log(`⚠️  Insuficientes (<3Q): ${learnCurious.insufficient}`);
  console.log(`❌ Não mapeados (0Q): ${learnCurious.unmapped}`);
  
  console.log('\n📋 Breakdown:\n');
  
  if (learnCurious.unmappedCases && learnCurious.unmappedCases.length > 0) {
    console.log('❌ UNMAPPED:');
    learnCurious.unmappedCases.forEach(c => console.log(`   - ${c}`));
  }
  
  if (learnCurious.insufficientCases && learnCurious.insufficientCases.length > 0) {
    console.log('⚠️  INSUFFICIENT:');
    learnCurious.insufficientCases.forEach(c => console.log(`   - ${c.id} (${c.count}Q)`));
  }
  
  if (learnCurious.wellMappedCases && learnCurious.wellMappedCases.length > 0) {
    console.log('✅ WELL MAPPED:');
    learnCurious.wellMappedCases.forEach(c => console.log(`   - ${c.id} (${c.count}Q)${c.isTopCase ? ' 🌟 TOP CASE' : ''}`));
  }
} else {
  console.log('❌ LP not found in audit');
}
