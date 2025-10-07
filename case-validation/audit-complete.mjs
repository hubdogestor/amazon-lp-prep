#!/usr/bin/env node

/**
 * AUDITORIA COMPLETA DE MAPEAMENTOS
 * 
 * Identifica:
 * 1. Cases sem nenhum mapeamento (0 questões)
 * 2. Cases com mapeamentos insuficientes (<3 questões)
 * 3. TOP CASES sem cobertura adequada
 * 4. Estatísticas por LP
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho base do projeto
const BASE_PATH = path.resolve(__dirname, '..');
const DATA_PATH = path.join(BASE_PATH, 'src', 'data');

// LPs para auditar
const LPS = [
  { id: 'customer_obsession', folder: 'customer_obsession', name: 'Customer Obsession' },
  { id: 'ownership', folder: 'ownership', name: 'Ownership' },
  { id: 'invent_and_simplify', folder: 'invent_and_simplify', name: 'Invent and Simplify' },
  { id: 'are_right_a_lot', folder: 'are_right_a_lot', name: 'Are Right, A Lot' },
  { id: 'learn_and_be_curious', folder: 'learn_and_be_curious', name: 'Learn and Be Curious' },
  { id: 'hire_and_develop_the_best', folder: 'hire_and_develop_the_best', name: 'Hire and Develop the Best' },
  { id: 'insist_on_the_highest_standards', folder: 'insist_on_the_highest_standards', name: 'Insist on the Highest Standards' },
  { id: 'think_big', folder: 'think_big', name: 'Think Big' },
  { id: 'bias_for_action', folder: 'bias_for_action', name: 'Bias for Action' },
  { id: 'frugality', folder: 'frugality', name: 'Frugality' },
  { id: 'earn_trust', folder: 'earn_trust', name: 'Earn Trust' },
  { id: 'dive_deep', folder: 'dive_deep', name: 'Dive Deep' },
  { id: 'have_backbone_disagree_and_commit', folder: 'have_backbone_disagree_and_commit', name: 'Have Backbone; Disagree and Commit' },
  { id: 'deliver_results', folder: 'deliver_results', name: 'Deliver Results' },
  { id: 'strive_to_be_earths_best_employer', folder: 'strive_to_be_earths_best_employer', name: 'Strive to be Earth\'s Best Employer' }
];

// Carregar mapping
const mappingPath = path.join(DATA_PATH, 'questionsToCasesMapping.js');
const mappingContent = fs.readFileSync(mappingPath, 'utf-8');

// Extrair o objeto de mapeamento (parse manual simples)
const mappingMatch = mappingContent.match(/export\s+const\s+questionsToCasesMapping\s*=\s*({[\s\S]+?});/);
if (!mappingMatch) {
  console.error('❌ Não foi possível extrair questionsToCasesMapping');
  process.exit(1);
}

// Converter para JSON válido e fazer parse
const jsonString = mappingMatch[1]
  .replace(/\/\/.*$/gm, '')  // Remove comentários
  .replace(/,(\s*[}\]])/g, '$1')  // Remove vírgulas finais
  .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?\s*:/g, '"$2":');  // Adiciona aspas nas chaves

const mapping = JSON.parse(jsonString);

console.log('\n' + '═'.repeat(80));
console.log('  📊 AUDITORIA COMPLETA DE MAPEAMENTOS - 7 TOP CASES');
console.log('═'.repeat(80));

// Estatísticas globais
const stats = {
  totalCases: 0,
  totalMapped: 0,
  totalUnmapped: 0,
  topCasesUnmapped: [],
  insufficientMapping: [],  // <3 questões
  wellMapped: [],  // ≥3 questões
  byLP: {}
};

// Iterar por cada LP
for (const lp of LPS) {
  const lpFolder = path.join(DATA_PATH, lp.folder);
  
  if (!fs.existsSync(lpFolder)) {
    console.log(`⚠️  Pasta não encontrada: ${lp.folder}`);
    continue;
  }

  // Ler todos os arquivos .js da pasta
  const files = fs.readdirSync(lpFolder).filter(f => f.endsWith('.js'));
  
  stats.byLP[lp.id] = {
    name: lp.name,
    totalCases: files.length,
    unmapped: [],
    insufficient: [],
    wellMapped: []
  };

  for (const file of files) {
    const caseId = file.replace('.js', '');
    const filePath = path.join(lpFolder, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Verificar se é TOP CASE
    const isTopCase = content.includes('isTopCase: true');
    
    stats.totalCases++;

    // Contar quantas vezes esse case_id aparece no mapping do LP
    const lpMapping = mapping[lp.id] || {};
    const mappingCount = Object.values(lpMapping).filter(m => m.case_id === caseId).length;

    if (mappingCount === 0) {
      stats.totalUnmapped++;
      stats.byLP[lp.id].unmapped.push({ caseId, isTopCase });
      
      if (isTopCase) {
        stats.topCasesUnmapped.push({ lp: lp.name, caseId });
      }
    } else if (mappingCount < 3) {
      stats.insufficientMapping.push({ lp: lp.name, caseId, count: mappingCount, isTopCase });
      stats.byLP[lp.id].insufficient.push({ caseId, count: mappingCount, isTopCase });
    } else {
      stats.totalMapped++;
      stats.byLP[lp.id].wellMapped.push({ caseId, count: mappingCount, isTopCase });
      stats.wellMapped.push({ lp: lp.name, caseId, count: mappingCount, isTopCase });
    }
  }
}

// RELATÓRIO RESUMIDO
console.log('\n📈 ESTATÍSTICAS GLOBAIS:');
console.log(`   Total de cases:        ${stats.totalCases}`);
console.log(`   Bem mapeados (≥3 Q):   ${stats.totalMapped} (${Math.round(stats.totalMapped / stats.totalCases * 100)}%)`);
console.log(`   Insuficientes (<3 Q):  ${stats.insufficientMapping.length} (${Math.round(stats.insufficientMapping.length / stats.totalCases * 100)}%)`);
console.log(`   Não mapeados (0 Q):    ${stats.totalUnmapped} (${Math.round(stats.totalUnmapped / stats.totalCases * 100)}%)`);

// TOP CASES NÃO MAPEADOS
if (stats.topCasesUnmapped.length > 0) {
  console.log('\n🔴 TOP CASES SEM MAPEAMENTO:');
  stats.topCasesUnmapped.forEach(tc => {
    console.log(`   ⚠️  ${tc.lp} → ${tc.caseId}`);
  });
} else {
  console.log('\n✅ Todos os TOP CASES estão mapeados!');
}

// CASES COM MAPEAMENTO INSUFICIENTE
if (stats.insufficientMapping.length > 0) {
  console.log('\n⚠️  CASES COM MAPEAMENTO INSUFICIENTE (<3 questões):');
  stats.insufficientMapping.forEach(c => {
    const badge = c.isTopCase ? '🔴' : '  ';
    console.log(`   ${badge} ${c.lp.padEnd(35)} → ${c.caseId.padEnd(40)} (${c.count}Q)`);
  });
}

// PRIORIZAÇÃO POR LP (LPs com mais cases não mapeados)
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
  console.log(`   ${priority}  ${lp.name.padEnd(40)} → ${lp.unmapped} não mapeados + ${lp.insufficient} insuficientes = ${lp.total}`);
});

// DETALHAMENTO POR LP
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
    console.log(`   \n   ❌ NÃO MAPEADOS (${lpStats.unmapped.length}):`);
    lpStats.unmapped.forEach(c => {
      const badge = c.isTopCase ? '🔴 TOP' : '     ';
      console.log(`      ${badge}  ${c.caseId}`);
    });
  }

  if (lpStats.insufficient.length > 0) {
    console.log(`   \n   ⚠️  INSUFICIENTES (${lpStats.insufficient.length}):`);
    lpStats.insufficient.forEach(c => {
      const badge = c.isTopCase ? '🔴 TOP' : '     ';
      console.log(`      ${badge}  ${c.caseId.padEnd(45)} (${c.count}Q)`);
    });
  }
}

console.log('\n' + '═'.repeat(80));
console.log('✅ Auditoria concluída!');
console.log('═'.repeat(80) + '\n');

// Exportar JSON para processamento posterior
const reportPath = path.join(__dirname, 'reports', 'audit-complete.json');
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(stats, null, 2));
console.log(`📄 Relatório JSON salvo em: ${reportPath}\n`);
