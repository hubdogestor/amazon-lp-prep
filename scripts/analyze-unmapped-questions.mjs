// scripts/analyze-unmapped-questions.mjs
// Analisa quais perguntas NÃO possuem case vinculado

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { questionsToCasesMapping } from '../src/data/questionsToCasesMapping.js';
import typicalQuestions from '../src/data/typicalQuestions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📊 Analisando perguntas sem cases vinculados...\n');

const mapping = questionsToCasesMapping;
const questions = typicalQuestions;

// Analisa
const report = {};
let totalQuestions = 0;
let totalMapped = 0;
let totalUnmapped = 0;

for (const [principleId, principleQuestions] of Object.entries(questions)) {
  const ptQuestions = principleQuestions.pt || [];
  const enQuestions = principleQuestions.en || [];
  const questionCount = ptQuestions.length;

  totalQuestions += questionCount;

  const principleMapping = mapping[principleId] || {};
  const unmapped = [];
  const mapped = [];

  // Verifica cada pergunta (agora usando base-1)
  for (let i = 0; i < questionCount; i++) {
    const questionNumber = i + 1; // Agora a primeira pergunta é Q1
    const hasMapping = principleMapping[String(questionNumber)] !== undefined;

    if (hasMapping) {
      const options = principleMapping[String(questionNumber)].options || [];
      const hasCase = options.length > 0;

      if (hasCase) {
        mapped.push({
          number: questionNumber,
          pt: ptQuestions[i],
          en: enQuestions[i] || ptQuestions[i],
          caseCount: options.length,
          topScore: Math.max(...options.map(o => o.score || 0))
        });
        totalMapped++;
      } else {
        unmapped.push({
          number: questionNumber,
          pt: ptQuestions[i],
          en: enQuestions[i] || ptQuestions[i],
          reason: 'Mapping exists but no cases'
        });
        totalUnmapped++;
      }
    } else {
      unmapped.push({
        number: questionNumber,
        pt: ptQuestions[i],
        en: enQuestions[i] || ptQuestions[i],
        reason: 'No mapping entry'
      });
      totalUnmapped++;
    }
  }

  report[principleId] = {
    total: questionCount,
    mapped: mapped.length,
    unmapped: unmapped.length,
    unmappedQuestions: unmapped,
    mappedQuestions: mapped
  };
}

// Gera relatório
console.log('=' . repeat(80));
console.log('RESUMO GERAL');
console.log('='.repeat(80));
console.log(`Total de perguntas: ${totalQuestions}`);
console.log(`Perguntas com cases: ${totalMapped} (${(totalMapped / totalQuestions * 100).toFixed(1)}%)`);
console.log(`Perguntas SEM cases: ${totalUnmapped} (${(totalUnmapped / totalQuestions * 100).toFixed(1)}%)`);
console.log('');

console.log('=' . repeat(80));
console.log('DETALHES POR PRINCÍPIO');
console.log('='.repeat(80));

for (const [principleId, data] of Object.entries(report)) {
  const coverage = data.total > 0 ? (data.mapped / data.total * 100).toFixed(1) : '0.0';

  console.log(`\n📌 ${principleId.toUpperCase()}`);
  console.log(`   Total: ${data.total} | Mapeadas: ${data.mapped} | Sem case: ${data.unmapped} | Cobertura: ${coverage}%`);

  if (data.unmapped > 0) {
    console.log(`\n   ⚠️  PERGUNTAS SEM CASE:`);
    data.unmappedQuestions.forEach(q => {
      const preview = q.pt.substring(0, 80);
      console.log(`      Q${q.number}: ${preview}${q.pt.length > 80 ? '...' : ''}`);
      console.log(`            Razão: ${q.reason}`);
    });
  }
}

// Salva relatório em arquivo
const reportFile = path.join(__dirname, '..', 'unmapped-questions-report.txt');
let reportText = '';

reportText += '='.repeat(80) + '\n';
reportText += 'RELATÓRIO DE PERGUNTAS SEM CASES VINCULADOS\n';
reportText += `Gerado em: ${new Date().toLocaleString('pt-BR')}\n`;
reportText += '='.repeat(80) + '\n\n';

reportText += 'RESUMO GERAL\n';
reportText += '='.repeat(80) + '\n';
reportText += `Total de perguntas: ${totalQuestions}\n`;
reportText += `Perguntas com cases: ${totalMapped} (${(totalMapped / totalQuestions * 100).toFixed(1)}%)\n`;
reportText += `Perguntas SEM cases: ${totalUnmapped} (${(totalUnmapped / totalQuestions * 100).toFixed(1)}%)\n\n`;

reportText += 'DETALHES POR PRINCÍPIO\n';
reportText += '='.repeat(80) + '\n';

for (const [principleId, data] of Object.entries(report)) {
  const coverage = data.total > 0 ? (data.mapped / data.total * 100).toFixed(1) : '0.0';

  reportText += `\n${principleId.toUpperCase()}\n`;
  reportText += `Total: ${data.total} | Mapeadas: ${data.mapped} | Sem case: ${data.unmapped} | Cobertura: ${coverage}%\n`;

  if (data.unmapped > 0) {
    reportText += `\nPERGUNTAS SEM CASE:\n`;
    data.unmappedQuestions.forEach(q => {
      reportText += `  Q${q.number}: ${q.pt}\n`;
      reportText += `         EN: ${q.en}\n`;
      reportText += `         Razão: ${q.reason}\n\n`;
    });
  }

  reportText += '\n' + '-'.repeat(80) + '\n';
}

fs.writeFileSync(reportFile, reportText, 'utf8');
console.log(`\n✅ Relatório salvo em: ${reportFile}`);
console.log('\n✨ Análise concluída!');
