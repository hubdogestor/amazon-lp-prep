// scripts/auto-map-new-lps.mjs
// Cria mapeamentos automáticos para os 4 novos LPs baseado em análise de palavras-chave

import consolidatedPrinciples from '../src/data/consolidatedPrinciples.js';
import typicalQuestions from '../src/data/typicalQuestions.js';
import { questionsToCasesMapping } from '../src/data/questionsToCasesMapping.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newLps = ['program_management', 'stakeholder_management', 'prioritizing_and_influence', 'deal_with_ambiguity'];

// Função para normalizar texto (remover acentos, lowercase, etc)
function normalize(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Função para calcular score de relevância entre uma pergunta e um case
function calculateRelevance(question, caseData) {
  const questionText = normalize(question);
  const caseTexts = [
    normalize(caseData.pt?.situation || ''),
    normalize(caseData.pt?.task || ''),
    normalize(caseData.pt?.action || ''),
    normalize(caseData.pt?.result || ''),
    normalize(caseData.en?.situation || ''),
    normalize(caseData.en?.task || ''),
    normalize(caseData.en?.action || ''),
    normalize(caseData.en?.result || '')
  ].join(' ');

  // Extrai palavras-chave da pergunta (palavras com 4+ letras)
  const keywords = questionText
    .split(/\s+/)
    .filter(word => word.length >= 4)
    .filter(word => !['voce', 'você', 'sobre', 'quando', 'como', 'conte', 'fale', 'descreva', 'qual', 'quais', 'onde', 'para', 'with', 'about', 'when', 'what', 'where', 'tell', 'describe'].includes(word));

  // Conta quantas palavras-chave aparecem no case
  let matches = 0;
  let totalWords = keywords.length;

  keywords.forEach(keyword => {
    if (caseTexts.includes(keyword)) {
      matches++;
    }
  });

  // Score base
  const baseScore = totalWords > 0 ? (matches / totalWords) * 100 : 0;

  return Math.round(baseScore);
}

console.log('🤖 Criando mapeamentos automáticos para os novos LPs...\n');

const newMappings = {};

newLps.forEach(lpId => {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`${lpId.toUpperCase()}`);
  console.log('='.repeat(80));

  const lp = consolidatedPrinciples.find(p => p.id === lpId);
  const questions = typicalQuestions[lpId];

  if (!lp || !questions || !lp.cases || lp.cases.length === 0) {
    console.log('⚠️  Dados insuficientes para criar mapeamento');
    return;
  }

  newMappings[lpId] = {};

  const ptQuestions = questions.pt || [];
  const enQuestions = questions.en || [];

  ptQuestions.forEach((ptQuestion, idx) => {
    const questionNumber = idx + 1; // Começando em Q1
    const enQuestion = enQuestions[idx] || ptQuestion;

    console.log(`\nQ${questionNumber}: ${ptQuestion.substring(0, 80)}${ptQuestion.length > 80 ? '...' : ''}`);

    // Calcula relevância para cada case
    const caseScores = lp.cases.map(caseData => ({
      caseId: caseData.id,
      score: calculateRelevance(ptQuestion, caseData) + calculateRelevance(enQuestion, caseData),
      caseData
    }));

    // Ordena por score
    caseScores.sort((a, b) => b.score - a.score);

    // Adiciona os 2 melhores cases (ou todos os disponíveis)
    const topCases = caseScores.slice(0, 2).filter(c => c.score > 0);

    if (topCases.length > 0) {
      newMappings[lpId][questionNumber] = {
        options: topCases.map(c => ({
          caseId: c.caseId,
          score: Math.max(75, Math.min(98, 75 + c.score / 2)) // Normaliza entre 75-98
        }))
      };

      topCases.forEach(c => {
        console.log(`   ✓ ${c.caseId} (score: ${c.score} → normalized: ${Math.max(75, Math.min(98, 75 + c.score / 2))})`);
      });
    } else {
      console.log(`   ⚠️  Nenhum case relevante encontrado`);
    }
  });

  console.log(`\n✅ Mapeamento completo: ${Object.keys(newMappings[lpId]).length}/${ptQuestions.length} perguntas`);
});

// Mescla com o mapeamento existente
const finalMapping = { ...questionsToCasesMapping, ...newMappings };

// Gera o arquivo atualizado
const MAPPING_FILE = path.join(__dirname, '..', 'src', 'data', 'questionsToCasesMapping.js');
const newContent = `// src/data/questionsToCasesMapping.js
// Normalized question-to-case mapping. Primary option is listed first, followed by fallbacks.
// Source data converted from legacy format via scripts/convertQuestionsMapping.mjs on 2025-10-12.
// New LPs auto-mapped via scripts/auto-map-new-lps.mjs on ${new Date().toISOString().split('T')[0]}.

export const questionsToCasesMapping = ${JSON.stringify(finalMapping, null, 2)};

export default questionsToCasesMapping;
`;

// Faz backup
const backupFile = MAPPING_FILE + '.backup-before-auto-map';
fs.writeFileSync(backupFile, fs.readFileSync(MAPPING_FILE, 'utf8'), 'utf8');
console.log(`\n✅ Backup salvo em: ${backupFile}`);

// Escreve o novo arquivo
fs.writeFileSync(MAPPING_FILE, newContent, 'utf8');
console.log(`✅ Arquivo atualizado: ${MAPPING_FILE}`);

console.log('\n✨ Mapeamento automático concluído!');
console.log('\n💡 Dica: Revise os mapeamentos e ajuste os scores conforme necessário.');
