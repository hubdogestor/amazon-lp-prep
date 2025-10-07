import { questionsToCasesMapping } from './src/data/questionsToCasesMapping.js';
import * as fs from 'fs';
import * as path from 'path';

// Lista completa de LPs e suas pastas
const LPS = [
  { id: 'customer_obsession', folder: 'customer_obsession', name: 'Customer Obsession' },
  { id: 'ownership', folder: 'ownership', name: 'Ownership' },
  { id: 'invent_simplify', folder: 'invent_and_simplify', name: 'Invent & Simplify' },
  { id: 'learn_curious', folder: 'learn_and_be_curious', name: 'Learn & Be Curious' },
  { id: 'hire_develop', folder: 'hire_and_develop_the_best', name: 'Hire & Develop the Best' },
  { id: 'insist_highest_standards', folder: 'insist_on_the_highest_standards', name: 'Insist on Highest Standards' },
  { id: 'think_big', folder: 'think_big', name: 'Think Big' },
  { id: 'bias_action', folder: 'bias_for_action', name: 'Bias for Action' },
  { id: 'frugality', folder: 'frugality', name: 'Frugality' },
  { id: 'earn_trust', folder: 'earn_trust', name: 'Earn Trust' },
  { id: 'dive_deep', folder: 'dive_deep', name: 'Dive Deep' },
  { id: 'backbone', folder: 'have_backbone_disagree_and_commit', name: 'Have Backbone; Disagree and Commit' },
  { id: 'deliver_results', folder: 'deliver_results', name: 'Deliver Results' },
  { id: 'strive_to_be_earths_best_employer', folder: 'strive_to_be_earths_best_employer', name: 'Strive to Be Earth\'s Best Employer' },
  { id: 'success_and_scale', folder: 'success_and_scale_bring_broad_responsibility', name: 'Success and Scale Bring Broad Responsibility' }
];

console.log('\n🔍 AUDITORIA COMPLETA: Mapeamento de TODOS os Cases\n');
console.log('='.repeat(80));

let totalCases = 0;
let totalMapped = 0;
let totalUnmapped = 0;

for (const lp of LPS) {
  const folderPath = path.join('src', 'data', lp.folder);
  
  if (!fs.existsSync(folderPath)) {
    console.log(`\n⚠️  ${lp.name}: Pasta não encontrada`);
    continue;
  }

  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.js'));
  const lpMapping = questionsToCasesMapping[lp.id] || {};
  
  // Extrair todos os case IDs mapeados para esta LP
  const mappedCaseIds = new Set();
  Object.values(lpMapping).forEach(mapping => {
    mappedCaseIds.add(mapping.case_id);
  });

  // Ler todos os cases da pasta
  const cases = [];
  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(folderPath, file), 'utf-8');
      const idMatch = content.match(/id:\s*["']([^"']+)["']/);
      const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
      const isTopCaseMatch = content.match(/isTopCase:\s*(true|false)/);
      
      if (idMatch) {
        cases.push({
          id: idMatch[1],
          title: titleMatch ? titleMatch[1].substring(0, 80) : 'N/A',
          isTopCase: isTopCaseMatch && isTopCaseMatch[1] === 'true',
          file: file
        });
      }
    } catch (err) {
      console.log(`   ❌ Erro ao ler ${file}`);
    }
  }

  totalCases += cases.length;

  // Separar mapped vs unmapped
  const mapped = cases.filter(c => mappedCaseIds.has(c.id));
  const unmapped = cases.filter(c => !mappedCaseIds.has(c.id));

  totalMapped += mapped.length;
  totalUnmapped += unmapped.length;

  console.log(`\n📋 ${lp.name.toUpperCase()}`);
  console.log(`   Total: ${cases.length} cases | Mapeados: ${mapped.length} | SEM mapeamento: ${unmapped.length}`);

  if (unmapped.length > 0) {
    console.log(`\n   ⚠️  CASES SEM MAPEAMENTO (${unmapped.length}):\n`);
    unmapped.forEach(c => {
      const badge = c.isTopCase ? '🔴 TOP CASE' : '⚪';
      console.log(`   ${badge} ${c.id}`);
      console.log(`      "${c.title}..."`);
    });
  }

  if (mapped.length > 0) {
    console.log(`\n   ✅ Cases mapeados (${mapped.length}):\n`);
    mapped.forEach(c => {
      const questionsCount = Object.values(lpMapping).filter(m => m.case_id === c.id).length;
      const badge = c.isTopCase ? '🔴 TOP' : '✅';
      console.log(`   ${badge} ${c.id} → ${questionsCount} questões`);
    });
  }
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 RESUMO GERAL:`);
console.log(`   Total de cases: ${totalCases}`);
console.log(`   Mapeados: ${totalMapped} (${Math.round(totalMapped/totalCases*100)}%)`);
console.log(`   SEM mapeamento: ${totalUnmapped} (${Math.round(totalUnmapped/totalCases*100)}%)`);
console.log(`\n❌ CRÍTICO: ${totalUnmapped} cases não respondem a NENHUMA pergunta!\n`);
