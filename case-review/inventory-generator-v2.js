/**
 * INVENTORY GENERATOR V2
 *
 * Carrega todos os 68 cases usando import dinâmico
 * Gera: reports/01-inventory.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapeamento de LPs para pastas
const LP_FOLDERS = {
  'Customer Obsession': 'customer_obsession',
  'Ownership': 'ownership',
  'Invent and Simplify': 'invent_and_simplify',
  'Are Right, A Lot': 'are_right_a_lot',
  'Learn and Be Curious': 'learn_and_be_curious',
  'Hire and Develop the Best': 'hire_and_develop_the_best',
  'Insist on the Highest Standards': 'insist_on_highest_standards',
  'Think Big': 'think_big',
  'Bias for Action': 'bias_for_action',
  'Frugality': 'frugality',
  'Earn Trust': 'earn_trust',
  'Dive Deep': 'dive_deep',
  'Have Backbone; Disagree and Commit': 'disagree_and_commit',
  'Deliver Results': 'deliver_results',
  'Strive to be Earth\'s Best Employer': 'best_employer',
  'Success and Scale Bring Broad Responsibility': 'broad_responsibility'
};

// Prioridades dos LPs
const LP_PRIORITIES = {
  'Invent and Simplify': 1,
  'Ownership': 2,
  'Dive Deep': 3,
  'Deliver Results': 4,
  'Earn Trust': 5,
  'Customer Obsession': 6,
  'Learn and Be Curious': 7,
  'Insist on the Highest Standards': 8,
  'Are Right, A Lot': 9,
  'Bias for Action': 10,
  'Think Big': 11,
  'Have Backbone; Disagree and Commit': 12,
  'Hire and Develop the Best': 13,
  'Frugality': 14,
  'Success and Scale Bring Broad Responsibility': 15,
  'Strive to be Earth\'s Best Employer': 16
};

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const OUTPUT_FILE = path.join(__dirname, 'reports', '01-inventory.json');

/**
 * Conta palavras
 */
function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

/**
 * Extrai metadados
 */
function extractMetadata(caseObj) {
  const sections = ['s', 't', 'a', 'r', 'l'];
  const sectionsPresent = sections.filter(sec => caseObj[sec]);

  const ptText = sections.map(sec => caseObj[sec] || '').join(' ');
  const enText = sections.map(sec => caseObj[sec + '_en'] || '').join(' ');

  return {
    word_count_pt: countWords(ptText),
    word_count_en: countWords(enText),
    fup_count: caseObj.fups ? caseObj.fups.length : 0,
    has_learning: !!caseObj.l,
    sections_present: sectionsPresent,
    has_all_sections: sectionsPresent.length === 5
  };
}

/**
 * Normaliza case (formato pt/en ou direto)
 */
function normalizeCase(caseObj) {
  if (caseObj.pt && !caseObj.s) {
    return {
      id: caseObj.id,
      title: caseObj.title,
      title_pt: caseObj.title_pt,
      title_en: caseObj.title_en,
      company: caseObj.company,
      period: caseObj.period,
      role: caseObj.role,
      isTopCase: caseObj.isTopCase,
      s: caseObj.pt?.s,
      t: caseObj.pt?.t,
      a: caseObj.pt?.a,
      r: caseObj.pt?.r,
      l: caseObj.pt?.l,
      s_en: caseObj.en?.s,
      t_en: caseObj.en?.t,
      a_en: caseObj.en?.a,
      r_en: caseObj.en?.r,
      l_en: caseObj.en?.l,
      fups: caseObj.fups
    };
  }
  return caseObj;
}

/**
 * Carrega case usando import dinâmico
 */
async function loadCaseFromFile(filePath) {
  try {
    // Pula index.js e config.js
    if (filePath.includes('index.js') || filePath.includes('_config.js')) {
      return null;
    }

    // Import dinâmico
    const fileUrl = pathToFileURL(filePath).href;
    const module = await import(fileUrl + '?cachebust=' + Date.now());

    // Extrai default export ou primeira exportação
    const caseObj = module.default || Object.values(module)[0];

    if (!caseObj || !caseObj.id) {
      return null;
    }

    return normalizeCase(caseObj);
  } catch (error) {
    // Silencioso - muitos arquivos não são cases válidos
    return null;
  }
}

/**
 * Carrega todos os cases de um LP
 */
async function loadCasesFromLP(lpName, folderName) {
  const lpDir = path.join(DATA_DIR, folderName);

  if (!fs.existsSync(lpDir)) {
    return [];
  }

  const files = fs.readdirSync(lpDir).filter(f => f.endsWith('.js'));
  const cases = [];

  for (const file of files) {
    const filePath = path.join(lpDir, file);
    const caseObj = await loadCaseFromFile(filePath);

    if (caseObj) {
      cases.push({
        id: caseObj.id,
        lp: lpName,
        lp_priority: LP_PRIORITIES[lpName],
        file_path: path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/'),
        title_pt: caseObj.title_pt || caseObj.title,
        title_en: caseObj.title_en || caseObj.title,
        company: caseObj.company,
        period: caseObj.period,
        role: caseObj.role,
        isTopCase: caseObj.isTopCase || false,
        metadata: extractMetadata(caseObj)
      });
    }
  }

  return cases;
}

/**
 * Gera inventário
 */
async function generateInventory() {
  console.log('🚀 Generating inventory of cases...\n');

  const inventory = {
    generated_at: new Date().toISOString(),
    total_cases: 0,
    leadership_principles: []
  };

  for (const [lpName, folderName] of Object.entries(LP_FOLDERS)) {
    console.log(`📂 Loading ${lpName}...`);
    const cases = await loadCasesFromLP(lpName, folderName);

    if (cases.length > 0) {
      inventory.leadership_principles.push({
        name: lpName,
        priority: LP_PRIORITIES[lpName],
        folder: folderName,
        case_count: cases.length,
        cases: cases
      });

      inventory.total_cases += cases.length;
      console.log(`   ✅ Loaded ${cases.length} cases`);
    } else {
      console.log(`   ⚠️  No cases found`);
    }
  }

  // Ordena por prioridade
  inventory.leadership_principles.sort((a, b) => a.priority - b.priority);

  // Salva JSON
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(inventory, null, 2), 'utf8');

  console.log(`\n✅ Inventory generated: ${OUTPUT_FILE}`);
  console.log(`📊 Total cases: ${inventory.total_cases}`);

  // Sumário
  console.log('\n📋 Summary by LP:');
  inventory.leadership_principles.forEach(lp => {
    console.log(`   ${lp.priority.toString().padStart(2)}. ${lp.name.padEnd(45)} ${lp.case_count} cases`);
  });

  return inventory;
}

// Executa
generateInventory()
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
