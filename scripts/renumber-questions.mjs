// scripts/renumber-questions.mjs
// Script para renumerar os IDs das perguntas de Q0 para Q1 (começar em 1 ao invés de 0)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAPPING_FILE = path.join(__dirname, '..', 'src', 'data', 'questionsToCasesMapping.js');

console.log('🔄 Renumerando IDs das perguntas no mapeamento...\n');

// Lê o arquivo atual
const content = fs.readFileSync(MAPPING_FILE, 'utf8');

// Extrai o objeto questionsToCasesMapping
const startMarker = 'export const questionsToCasesMapping = ';
const endMarker = ';\n\nexport default questionsToCasesMapping;';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('❌ Não foi possível encontrar o objeto questionsToCasesMapping no arquivo');
  process.exit(1);
}

const jsonStr = content.substring(startIdx + startMarker.length, endIdx);
const mapping = JSON.parse(jsonStr);

console.log('📊 Princípios encontrados:', Object.keys(mapping).length);

// Transforma o mapeamento: incrementa todos os índices em +1
const newMapping = {};

for (const [principleId, questions] of Object.entries(mapping)) {
  newMapping[principleId] = {};

  // Encontra o maior índice para este princípio
  const indices = Object.keys(questions).map(k => parseInt(k)).sort((a, b) => a - b);
  const maxIndex = indices[indices.length - 1];

  console.log(`  ${principleId}: ${indices.length} perguntas (0-${maxIndex})`);

  // Renumera de trás para frente para evitar sobrescrever
  for (let i = maxIndex; i >= 0; i--) {
    if (questions[i.toString()]) {
      newMapping[principleId][(i + 1).toString()] = questions[i.toString()];
    }
  }
}

// Gera o novo conteúdo do arquivo
const newJsonStr = JSON.stringify(newMapping, null, 2);
const newContent = content.substring(0, startIdx) +
  startMarker +
  newJsonStr +
  endMarker +
  content.substring(endIdx + endMarker.length);

// Faz backup do arquivo original
const backupFile = MAPPING_FILE + '.backup';
fs.writeFileSync(backupFile, content, 'utf8');
console.log(`\n✅ Backup salvo em: ${backupFile}`);

// Escreve o novo arquivo
fs.writeFileSync(MAPPING_FILE, newContent, 'utf8');
console.log(`✅ Arquivo atualizado: ${MAPPING_FILE}`);

console.log('\n📊 Resumo das alterações:');
for (const [principleId, questions] of Object.entries(newMapping)) {
  const oldIndices = Object.keys(mapping[principleId] || {}).map(k => parseInt(k)).sort((a, b) => a - b);
  const newIndices = Object.keys(questions).map(k => parseInt(k)).sort((a, b) => a - b);

  if (oldIndices.length > 0 && newIndices.length > 0) {
    console.log(`  ${principleId}: Q${oldIndices[0]}-Q${oldIndices[oldIndices.length - 1]} → Q${newIndices[0]}-Q${newIndices[newIndices.length - 1]}`);
  }
}

console.log('\n✅ Renumeração concluída com sucesso!');
