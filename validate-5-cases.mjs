// Script para validar campos obrigatórios nos 5 cases adaptados
import consolidatedPrinciples from './src/data/consolidatedPrinciples.js';

const targetIds = [
  'unimed-open-innovation',
  'sefarz-pix-reconciliation-automation',
  'sefaz-pmo-creation',
  'bradesco-international-payments',
  'sicredi-frictionless-checkout'
];

const requiredFields = ['id', 'title', 'title_pt', 'title_en', 'company', 'period'];
const requiredLangFields = ['s', 't', 'a', 'r', 'l'];

let hasErrors = false;

consolidatedPrinciples.forEach(lp => {
  lp.cases.forEach(c => {
    if (targetIds.includes(c.id)) {
      console.log(`\n🔍 Validando: ${c.id}`);
      
      // Validar campos obrigatórios
      requiredFields.forEach(field => {
        if (!c[field]) {
          console.error(`  ❌ Campo "${field}" está VAZIO ou UNDEFINED!`);
          hasErrors = true;
        } else {
          console.log(`  ✅ ${field}: "${c[field].substring(0, 50)}..."`);
        }
      });
      
      // Validar campos de linguagem PT
      if (c.pt) {
        requiredLangFields.forEach(field => {
          if (!c.pt[field]) {
            console.error(`  ❌ Campo "pt.${field}" está VAZIO ou UNDEFINED!`);
            hasErrors = true;
          } else {
            console.log(`  ✅ pt.${field}: ${c.pt[field].length} caracteres`);
          }
        });
      } else {
        console.error(`  ❌ Objeto "pt" está VAZIO ou UNDEFINED!`);
        hasErrors = true;
      }
      
      // Validar campos de linguagem EN
      if (c.en) {
        requiredLangFields.forEach(field => {
          if (!c.en[field]) {
            console.error(`  ❌ Campo "en.${field}" está VAZIO ou UNDEFINED!`);
            hasErrors = true;
          } else {
            console.log(`  ✅ en.${field}: ${c.en[field].length} caracteres`);
          }
        });
      } else {
        console.error(`  ❌ Objeto "en" está VAZIO ou UNDEFINED!`);
        hasErrors = true;
      }
      
      // Validar FUPs
      if (c.fups && c.fups.length === 10) {
        console.log(`  ✅ fups: 10 FUPs presentes`);
      } else {
        console.error(`  ❌ fups: ${c.fups ? c.fups.length : 0} FUPs (esperado: 10)`);
        hasErrors = true;
      }
    }
  });
});

if (hasErrors) {
  console.error(`\n🚨 ERROS ENCONTRADOS!`);
  process.exit(1);
} else {
  console.log(`\n✅ TODOS OS 5 CASES ESTÃO VÁLIDOS!`);
  process.exit(0);
}
