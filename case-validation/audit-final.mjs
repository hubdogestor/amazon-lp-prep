#!/usr/bin/env node

/**
 * AUDITORIA CORRETA - Extrai IDs reais dos arquivos e compara com mapeamento
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_PATH = path.resolve(__dirname, '..');
const DATA_PATH = path.join(BASE_PATH, 'src', 'data');

// LPs para auditar (apenas as que existem)
const LPS = [
  { id: 'customer_obsession', folder: 'customer_obsession', name: 'Customer Obsession' },
  { id: 'ownership', folder: 'ownership', name: 'Ownership' },
  { id: 'invent_simplify', folder: 'invent_and_simplify', name: 'Invent and Simplify' },
  { id: 'are_right_a_lot', folder: 'are_right_a_lot', name: 'Are Right, A Lot' },
  { id: 'learn_and_be_curious', folder: 'learn_and_be_curious', name: 'Learn and Be Curious' },
  { id: 'hire_and_develop_the_best', folder: 'hire_and_develop_the_best', name: 'Hire and Develop the Best' },
  { id: 'insist_on_highest_standards', folder: 'insist_on_highest_standards', name: 'Insist on the Highest Standards' },
  { id: 'think_big', folder: 'think_big', name: 'Think Big' },
  { id: 'bias_for_action', folder: 'bias_for_action', name: 'Bias for Action' },
  { id: 'frugality', folder: 'frugality', name: 'Frugality' },
  { id: 'earn_trust', folder: 'earn_trust', name: 'Earn Trust' },
  { id: 'dive_deep', folder: 'dive_deep', name: 'Dive Deep' },
  { id: 'disagree_and_commit', folder: 'disagree_and_commit', name: 'Have Backbone; Disagree and Commit' },
  { id: 'deliver_results', folder: 'deliver_results', name: 'Deliver Results' },
  { id: 'best_employer', folder: 'best_employer', name: 'Strive to be Earth\'s Best Employer' }
];

// Carregar mapping (importar diretamente)
const mappingFilePath = path.join(DATA_PATH, 'questionsToCasesMapping.js');
const mappingModule = await import(`file:///${mappingFilePath.replace(/\\/g, '/')}`);
const mapping = mappingModule.questionsToCasesMapping;

console.log('\n' + '═'.repeat(80));
console.log('  📊 AUDITORIA CORRETA - BASEADA EM IDs REAIS DOS CASES');
console.log('═'.repeat(80));

const stats = {
  totalCases: 0,
  totalMapped: 0,
  totalUnmapped: 0,
  insufficientMapping: [],
  wellMapped: [],
  topCasesUnmapped: [],
  byLP: {}
};

// Processar cada LP
for (const lp of LPS) {
  const lpFolder = path.join(DATA_PATH, lp.folder);
  
  if (!fs.existsSync(lpFolder)) {
    continue;
  }

  // Ler apenas arquivos _case*.js (ignora index.js, config.js)
  const files = fs.readdirSync(lpFolder)
    .filter(f => f.endsWith('.js') && f.includes('case') && !f.includes('config'));

  stats.byLP[lp.id] = {
    name: lp.name,
    totalCases: files.length,
    unmapped: [],
    insufficient: [],
    wellMapped: []
  };

  for (const file of files) {
    const filePath = path.join(lpFolder, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extrair o ID real do case
    const idMatch = content.match(/id:\s*["']([^"']+)["']/);
    if (!idMatch) {
      console.warn(`⚠️  Não foi possível extrair ID de ${file}`);
      continue;
    }
    
    const caseId = idMatch[1];
    const isTopCase = content.includes('isTopCase: true');
    
    stats.totalCases++;

    // Contar quantas vezes esse case_id aparece no mapping do LP
    const lpMapping = mapping[lp.id] || {};
    const mappingCount = Object.values(lpMapping).filter(m => m.case_id === caseId).length;

    if (mappingCount === 0) {
      stats.totalUnmapped++;
      stats.byLP[lp.id].unmapped.push({ caseId, isTopCase, file });
      
      if (isTopCase) {
        stats.topCasesUnmapped.push({ lp: lp.name, caseId, file });
      }
    } else if (mappingCount < 3) {
      stats.insufficientMapping.push({ lp: lp.name, caseId, count: mappingCount, isTopCase, file });
      stats.byLP[lp.id].insufficient.push({ caseId, count: mappingCount, isTopCase, file });
    } else {
      stats.totalMapped++;
      stats.byLP[lp.id].wellMapped.push({ caseId, count: mappingCount, isTopCase, file });
      stats.wellMapped.push({ lp: lp.name, caseId, count: mappingCount, isTopCase, file });
    }
  }
}

// ESTATÍSTICAS GLOBAIS
console.log('\n📈 ESTATÍSTICAS GLOBAIS:');
console.log(`   Total de cases:        ${stats.totalCases}`);
console.log(`   Bem mapeados (≥3 Q):   ${stats.totalMapped} (${Math.round(stats.totalMapped / stats.totalCases * 100)}%)`);
console.log(`   Insuficientes (<3 Q):  ${stats.insufficientMapping.length} (${Math.round(stats.insufficientMapping.length / stats.totalCases * 100)}%)`);
console.log(`   Não mapeados (0 Q):    ${stats.totalUnmapped} (${Math.round(stats.totalUnmapped / stats.totalCases * 100)}%)`);

// TOP CASES
const topCasesTotal = stats.wellMapped.filter(c => c.isTopCase).length + 
                       stats.insufficientMapping.filter(c => c.isTopCase).length + 
                       stats.topCasesUnmapped.length;
const topCasesMapped = stats.wellMapped.filter(c => c.isTopCase).length;

console.log(`\n🔴 TOP CASES:`)
console.log(`   Total:                 ${topCasesTotal}`);
console.log(`   Bem mapeados (≥3 Q):   ${topCasesMapped} (${Math.round(topCasesMapped / topCasesTotal * 100)}%)`);
console.log(`   Insuficientes (<3 Q):  ${stats.insufficientMapping.filter(c => c.isTopCase).length}`);
console.log(`   Não mapeados (0 Q):    ${stats.topCasesUnmapped.length}`);

if (stats.topCasesUnmapped.length > 0) {
  console.log(`\n   ❌ TOP CASES SEM MAPEAMENTO:`);
  stats.topCasesUnmapped.forEach(tc => {
    console.log(`      • ${tc.lp.padEnd(35)} → ${tc.caseId}`);
  });
}

// CASES COM MAPEAMENTO INSUFICIENTE (<3 Q)
if (stats.insufficientMapping.length > 0) {
  console.log('\n⚠️  CASES COM MAPEAMENTO INSUFICIENTE (<3 questões):');
  
  const insuffTopCases = stats.insufficientMapping.filter(c => c.isTopCase);
  const insuffRegular = stats.insufficientMapping.filter(c => !c.isTopCase);
  
  if (insuffTopCases.length > 0) {
    console.log(`\n   🔴 TOP CASES (${insuffTopCases.length}):`);
    insuffTopCases.forEach(c => {
      console.log(`      • ${c.lp.padEnd(35)} → ${c.caseId.padEnd(40)} (${c.count}Q)`);
    });
  }
  
  if (insuffRegular.length > 0) {
    console.log(`\n   REGULAR (${insuffRegular.length}):`);
    insuffRegular.forEach(c => {
      console.log(`      • ${c.lp.padEnd(35)} → ${c.caseId.padEnd(40)} (${c.count}Q)`);
    });
  }
}

// PRIORIZAÇÃO POR LP
console.log('\n📋 PRIORIZAÇÃO POR LP (não mapeados + insuficientes):');
const lpPriority = Object.values(stats.byLP)
  .map(lp => ({
    name: lp.name,
    unmapped: lp.unmapped.length,
    insufficient: lp.insufficient.length,
    total: lp.unmapped.length + lp.insufficient.length
  }))
  .filter(lp => lp.total > 0)
  .sort((a, b) => b.total - a.total);

lpPriority.forEach((lp, idx) => {
  const priority = idx < 3 ? '🔴 HIGH' : idx < 6 ? '🟡 MED' : '🟢 LOW';
  console.log(`   ${priority}  ${lp.name.padEnd(40)} → ${lp.unmapped} unmapped + ${lp.insufficient} insufficient = ${lp.total}`);
});

// DETALHAMENTO POR LP (apenas LPs com problemas)
console.log('\n' + '─'.repeat(80));
console.log('📂 DETALHAMENTO POR LP:');
console.log('─'.repeat(80));

for (const lp of LPS) {
  const lpStats = stats.byLP[lp.id];
  
  if (!lpStats || (lpStats.unmapped.length === 0 && lpStats.insufficient.length === 0)) {
    continue;
  }

  console.log(`\n🔹 ${lpStats.name.toUpperCase()}`);
  console.log(`   Total: ${lpStats.totalCases} cases | Bem mapeados: ${lpStats.wellMapped.length} | Insuficientes: ${lpStats.insufficient.length} | Não mapeados: ${lpStats.unmapped.length}`);
  
  if (lpStats.unmapped.length > 0) {
    console.log(`\n   ❌ NÃO MAPEADOS (${lpStats.unmapped.length}):`);
    lpStats.unmapped.forEach(c => {
      const badge = c.isTopCase ? '🔴 TOP' : '     ';
      console.log(`      ${badge}  ${c.caseId}`);
    });
  }

  if (lpStats.insufficient.length > 0) {
    console.log(`\n   ⚠️  INSUFICIENTES (${lpStats.insufficient.length}):`);
    lpStats.insufficient.forEach(c => {
      const badge = c.isTopCase ? '🔴 TOP' : '     ';
      console.log(`      ${badge}  ${c.caseId.padEnd(45)} (${c.count}Q)`);
    });
  }
}

console.log('\n' + '═'.repeat(80));
console.log('✅ Auditoria concluída!');
console.log('═'.repeat(80) + '\n');

// Salvar relatório JSON
const reportPath = path.join(__dirname, 'reports', 'audit-final.json');
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(stats, null, 2));
console.log(`📄 Relatório JSON: ${reportPath}\n`);
