#!/usr/bin/env node

/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║     COVERAGE REPORT GENERATOR                                 ║
 * ║  Gera relatórios de cobertura de perguntas e cases           ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// ═══════════════════════════════════════════════════════════════
// CARREGAMENTO DE DADOS
// ═══════════════════════════════════════════════════════════════

function loadQuestions() {
  const questionsPath = path.join(ROOT_DIR, 'src', 'data', 'typicalQuestions.js');
  const content = fs.readFileSync(questionsPath, 'utf-8');
  const match = content.match(/const\s+typicalQuestions\s*=\s*(\{[\s\S]*?\n\};)/);

  if (match) {
    return eval(`(${match[1].replace(/\};$/, '}')})`);
  }
  return {};
}

function loadMapping() {
  const mappingPath = path.join(ROOT_DIR, 'src', 'data', 'questionsToCasesMapping.js');
  const content = fs.readFileSync(mappingPath, 'utf-8');
  const match = content.match(/export\s+const\s+questionsToCasesMapping\s*=\s*(\{[\s\S]*?\n\};)/);

  if (match) {
    return eval(`(${match[1].replace(/\};$/, '}')})`);
  }
  return {};
}

function loadAllCases() {
  const dataDir = path.join(ROOT_DIR, 'src', 'data');
  const allCases = {};

  const lpDirs = fs.readdirSync(dataDir).filter(f => {
    const fullPath = path.join(dataDir, f);
    return fs.statSync(fullPath).isDirectory();
  });

  for (const lpDir of lpDirs) {
    const lpPath = path.join(dataDir, lpDir);
    const caseFiles = fs.readdirSync(lpPath).filter(f =>
      f.startsWith(`${lpDir}_case`) && f.endsWith('.js')
    );

    for (const file of caseFiles) {
      const filePath = path.join(lpPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const caseMatch = content.match(/const\s+\w+\s*=\s*(\{[\s\S]*?\n\};)/);

      if (caseMatch) {
        try {
          const caseObj = eval(`(${caseMatch[1].replace(/\};$/, '}')})`);
          allCases[caseObj.id] = {
            ...caseObj,
            lp: lpDir,
            file: file
          };
        } catch (e) {
          console.warn(`⚠️  Erro ao parsear ${file}`);
        }
      }
    }
  }

  return allCases;
}

// ═══════════════════════════════════════════════════════════════
// GERAÇÃO DE RELATÓRIOS
// ═══════════════════════════════════════════════════════════════

function generateQuestionsCoverageReport() {
  const questions = loadQuestions();
  const mapping = loadMapping();
  const allCases = loadAllCases();

  let report = '';
  report += '\n╔═══════════════════════════════════════════════════════════════╗\n';
  report += '║     RELATÓRIO DE COBERTURA - PERGUNTAS × CASES                ║\n';
  report += '╚═══════════════════════════════════════════════════════════════╝\n\n';

  // Lista dos LPs nos batches 1-5
  const lps = [
    'customer_obsession', 'program_management', 'ownership',
    'dive_deep', 'invent_and_simplify',
    'earn_trust', 'deliver_results', 'stakeholder_management',
    'learn_and_be_curious', 'bias_for_action', 'prioritizing_and_influence',
    'deal_with_ambiguity', 'disagree_and_commit', 'insist_on_highest_standards'
  ];

  let totalQuestions = 0;
  let coveredQuestions = 0;
  let totalMappings = 0;

  for (const lpId of lps) {
    const lpQuestions = questions[lpId];
    const lpMapping = mapping[lpId];

    if (!lpQuestions || !lpMapping) {
      console.warn(`⚠️  LP ${lpId} não encontrado`);
      continue;
    }

    const lpName = lpId.toUpperCase().replace(/_/g, ' ');
    report += '\n' + '═'.repeat(70) + '\n';
    report += `  ${lpName}\n`;
    report += '═'.repeat(70) + '\n\n';

    const questionsPt = lpQuestions.pt || [];

    for (let i = 0; i < questionsPt.length; i++) {
      const qNum = i + 1;
      const questionText = questionsPt[i];
      const qMapping = lpMapping[qNum];

      totalQuestions++;

      report += `Q${qNum}: ${questionText}\n`;

      if (qMapping && qMapping.options && qMapping.options.length > 0) {
        coveredQuestions++;
        totalMappings += qMapping.options.length;

        report += `   ✅ ${qMapping.options.length} case(s):\n`;

        for (const opt of qMapping.options) {
          const caseData = allCases[opt.caseId];
          const caseTitle = caseData ? (caseData.title_pt || caseData.title || opt.caseId) : opt.caseId;
          report += `      • ${opt.caseId} (score: ${opt.score})\n`;
          report += `        "${caseTitle.substring(0, 80)}${caseTitle.length > 80 ? '...' : ''}"\n`;
        }
      } else {
        report += `   ❌ SEM COBERTURA\n`;
      }

      report += '\n';
    }
  }

  report += '\n' + '═'.repeat(70) + '\n';
  report += '  RESUMO GERAL\n';
  report += '═'.repeat(70) + '\n\n';
  report += `Total de perguntas: ${totalQuestions}\n`;
  report += `Perguntas cobertas: ${coveredQuestions} (${((coveredQuestions/totalQuestions)*100).toFixed(1)}%)\n`;
  report += `Total de mapeamentos: ${totalMappings}\n`;
  report += `Média de cases por pergunta: ${(totalMappings/totalQuestions).toFixed(1)}\n\n`;

  return report;
}

function generateUnmappedCasesReport() {
  const mapping = loadMapping();
  const allCases = loadAllCases();

  let report = '';
  report += '\n╔═══════════════════════════════════════════════════════════════╗\n';
  report += '║     RELATÓRIO - CASES NÃO VINCULADOS A PERGUNTAS             ║\n';
  report += '╚═══════════════════════════════════════════════════════════════╝\n\n';

  // Coletar todos os caseIds que estão mapeados
  const mappedCaseIds = new Set();
  for (const lpMapping of Object.values(mapping)) {
    for (const qMapping of Object.values(lpMapping)) {
      if (qMapping.options) {
        for (const opt of qMapping.options) {
          mappedCaseIds.add(opt.caseId);
        }
      }
    }
  }

  // Lista dos LPs nos batches 1-5
  const lps = [
    'customer_obsession', 'program_management', 'ownership',
    'dive_deep', 'invent_and_simplify',
    'earn_trust', 'deliver_results', 'stakeholder_management',
    'learn_and_be_curious', 'bias_for_action', 'prioritizing_and_influence',
    'deal_with_ambiguity', 'disagree_and_commit', 'insist_on_highest_standards'
  ];

  let unmappedCount = 0;

  for (const lpId of lps) {
    const lpName = lpId.toUpperCase().replace(/_/g, ' ');
    const lpCases = Object.values(allCases).filter(c => c.lp === lpId);
    const unmappedInLP = lpCases.filter(c => !mappedCaseIds.has(c.id));

    if (unmappedInLP.length > 0) {
      report += '\n' + '═'.repeat(70) + '\n';
      report += `  ${lpName}\n`;
      report += '═'.repeat(70) + '\n\n';

      for (const caseData of unmappedInLP) {
        unmappedCount++;
        const title = caseData.title_pt || caseData.title || caseData.id;
        report += `❌ ${caseData.id}\n`;
        report += `   "${title}"\n`;
        report += `   Arquivo: ${caseData.file}\n\n`;
      }
    }
  }

  report += '\n' + '═'.repeat(70) + '\n';
  report += '  RESUMO\n';
  report += '═'.repeat(70) + '\n\n';
  report += `Total de cases não vinculados: ${unmappedCount}\n`;
  report += `Total de cases nos batches 1-5: ${Object.keys(allCases).filter(id => lps.includes(allCases[id].lp)).length}\n`;
  report += `Cases vinculados: ${mappedCaseIds.size}\n`;
  report += `Taxa de utilização: ${((mappedCaseIds.size / Object.keys(allCases).filter(id => lps.includes(allCases[id].lp)).length) * 100).toFixed(1)}%\n\n`;

  return report;
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

function main() {
  console.log('\n📊 Gerando relatórios de cobertura...\n');

  // Relatório 1: Perguntas × Cases
  const report1 = generateQuestionsCoverageReport();
  const report1Path = path.join(ROOT_DIR, 'COVERAGE_REPORT_QUESTIONS.txt');
  fs.writeFileSync(report1Path, report1, 'utf-8');
  console.log(`✅ Relatório 1 salvo: ${report1Path}`);

  // Relatório 2: Cases não vinculados
  const report2 = generateUnmappedCasesReport();
  const report2Path = path.join(ROOT_DIR, 'COVERAGE_REPORT_UNMAPPED_CASES.txt');
  fs.writeFileSync(report2Path, report2, 'utf-8');
  console.log(`✅ Relatório 2 salvo: ${report2Path}`);

  console.log('\n✅ Relatórios gerados com sucesso!\n');
}

main();
