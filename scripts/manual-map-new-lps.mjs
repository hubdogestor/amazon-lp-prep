// scripts/manual-map-new-lps.mjs
// Mapeia manualmente os 4 novos LPs para os cases disponíveis

import { questionsToCasesMapping } from '../src/data/questionsToCasesMapping.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🗺️  Criando mapeamentos manuais para os novos LPs...\n');

// Mapeamentos manuais baseados na análise das perguntas e dos cases disponíveis
const newMappings = {
  // Program Management - 2 cases: hsbc-migration-leadership, sefaz-pmo-creation
  // HSBC Migration: programa complexo, migração de grande escala, múltiplos times
  // SEFAZ PMO: criação de PMO, governança, métricas, riscos
  "program_management": {
    "1": { "options": [{ "caseId": "hsbc-migration-leadership", "score": 98 }, { "caseId": "sefaz-pmo-creation", "score": 95 }] },  // programa complexo
    "2": { "options": [{ "caseId": "hsbc-migration-leadership", "score": 95 }, { "caseId": "sefaz-pmo-creation", "score": 92 }] },  // múltiplos projetos
    "3": { "options": [{ "caseId": "hsbc-migration-leadership", "score": 92 }, { "caseId": "sefaz-pmo-creation", "score": 88 }] },  // ajustar roadmap
    "4": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 95 }, { "caseId": "hsbc-migration-leadership", "score": 90 }] },  // stakeholders conflitantes
    "5": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 92 }, { "caseId": "hsbc-migration-leadership", "score": 88 }] },  // escalar problema
    "6": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 98 }, { "caseId": "hsbc-migration-leadership", "score": 85 }] },  // medir sucesso
    "7": { "options": [{ "caseId": "hsbc-migration-leadership", "score": 90 }, { "caseId": "sefaz-pmo-creation", "score": 85 }] },  // cancelar/pivotar
    "8": { "options": [{ "caseId": "hsbc-migration-leadership", "score": 98 }, { "caseId": "sefaz-pmo-creation", "score": 90 }] },  // dependências entre times
    "9": { "options": [{ "caseId": "hsbc-migration-leadership", "score": 95 }, { "caseId": "sefaz-pmo-creation", "score": 88 }] },  // recuperar programa
    "10": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 95 }, { "caseId": "hsbc-migration-leadership", "score": 90 }] }, // governança vs agilidade
    "11": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 92 }, { "caseId": "hsbc-migration-leadership", "score": 88 }] }, // comunicar más notícias
    "12": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 98 }, { "caseId": "hsbc-migration-leadership", "score": 92 }] }, // identificar riscos
    "13": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 95 }, { "caseId": "hsbc-migration-leadership", "score": 90 }] }  // comunicar progresso
  },

  // Stakeholder Management - 2 cases: huawei-global-rollout, unimed-ebitda-growth
  // Huawei: rollout global, coordenação internacional, múltiplos stakeholders
  // Unimed: crescimento EBITDA, influência executiva, mudança organizacional
  "stakeholder_management": {
    "1": { "options": [{ "caseId": "unimed-ebitda-growth", "score": 98 }, { "caseId": "huawei-global-rollout", "score": 92 }] },  // influenciar seniores
    "2": { "options": [{ "caseId": "unimed-ebitda-growth", "score": 95 }, { "caseId": "huawei-global-rollout", "score": 90 }] },  // gerenciar expectativas
    "3": { "options": [{ "caseId": "unimed-ebitda-growth", "score": 92 }, { "caseId": "huawei-global-rollout", "score": 88 }] },  // consenso visões opostas
    "4": { "options": [{ "caseId": "huawei-global-rollout", "score": 98 }, { "caseId": "unimed-ebitda-growth", "score": 90 }] },  // identificar stakeholders
    "5": { "options": [{ "caseId": "unimed-ebitda-growth", "score": 95 }, { "caseId": "huawei-global-rollout", "score": 88 }] },  // dizer não
    "6": { "options": [{ "caseId": "huawei-global-rollout", "score": 95 }, { "caseId": "unimed-ebitda-growth", "score": 90 }] },  // stakeholders longo prazo
    "7": { "options": [{ "caseId": "unimed-ebitda-growth", "score": 92 }, { "caseId": "huawei-global-rollout", "score": 88 }] },  // reconstruir confiança
    "8": { "options": [{ "caseId": "huawei-global-rollout", "score": 98 }, { "caseId": "unimed-ebitda-growth", "score": 92 }] },  // adaptar comunicação
    "9": { "options": [{ "caseId": "unimed-ebitda-growth", "score": 95 }, { "caseId": "huawei-global-rollout", "score": 90 }] },  // conflito entre áreas
    "10": { "options": [{ "caseId": "huawei-global-rollout", "score": 92 }, { "caseId": "unimed-ebitda-growth", "score": 88 }] }, // informar sem sobrecarregar
    "11": { "options": [{ "caseId": "unimed-ebitda-growth", "score": 98 }, { "caseId": "huawei-global-rollout", "score": 90 }] }, // negociar trade-offs
    "12": { "options": [{ "caseId": "unimed-ebitda-growth", "score": 95 }, { "caseId": "huawei-global-rollout", "score": 88 }] }  // resistência a mudanças
  },

  // Prioritizing and Influence - 2 cases: sicredi-woop-segment-prioritization, bradesco-covid-reprioritization
  // Sicredi Woop: priorização de segmentos, decisão estratégica, dados vs intuição
  // Bradesco COVID: repriorização de crise, mudança rápida, impacto de negócio
  "prioritizing_and_influence": {
    "1": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 98 }, { "caseId": "bradesco-covid-reprioritization", "score": 92 }] },  // decisão difícil priorização
    "2": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 95 }, { "caseId": "bradesco-covid-reprioritization", "score": 90 }] },  // o que NÃO fazer
    "3": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 98 }, { "caseId": "bradesco-covid-reprioritization", "score": 88 }] },  // influenciar decisão estratégica
    "4": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 98 }, { "caseId": "bradesco-covid-reprioritization", "score": 85 }] },  // dados vs intuição
    "5": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 95 }, { "caseId": "bradesco-covid-reprioritization", "score": 90 }] },  // defender priorização
    "6": { "options": [{ "caseId": "bradesco-covid-reprioritization", "score": 95 }, { "caseId": "sicredi-woop-segment-prioritization", "score": 90 }] },  // curto vs longo prazo
    "7": { "options": [{ "caseId": "bradesco-covid-reprioritization", "score": 98 }, { "caseId": "sicredi-woop-segment-prioritization", "score": 92 }] },  // mudar priorização
    "8": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 92 }, { "caseId": "bradesco-covid-reprioritization", "score": 90 }] },  // transparência decisões
    "9": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 95 }, { "caseId": "bradesco-covid-reprioritization", "score": 88 }] },  // decisão técnica impacto
    "10": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 92 }, { "caseId": "bradesco-covid-reprioritization", "score": 88 }] }, // pressão priorizar errado
    "11": { "options": [{ "caseId": "bradesco-covid-reprioritization", "score": 98 }, { "caseId": "sicredi-woop-segment-prioritization", "score": 90 }] }, // repriorizar crise
    "12": { "options": [{ "caseId": "sicredi-woop-segment-prioritization", "score": 95 }, { "caseId": "bradesco-covid-reprioritization", "score": 90 }] }  // medir impacto
  },

  // Deal with Ambiguity - 2 cases: bradesco-open-banking-vision, sefaz-pmo-creation
  // Bradesco Open Banking: visão incerta, mercado novo, experimentação
  // SEFAZ PMO: criar do zero, estruturar processos, ambiguidade organizacional
  "deal_with_ambiguity": {
    "1": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 98 }, { "caseId": "sefaz-pmo-creation", "score": 90 }] },  // decisões informação incompleta
    "2": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 98 }, { "caseId": "sefaz-pmo-creation", "score": 92 }] },  // estruturar sem precedentes
    "3": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 95 }, { "caseId": "sefaz-pmo-creation", "score": 90 }] },  // liderar sem escopo claro
    "4": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 92 }, { "caseId": "sefaz-pmo-creation", "score": 88 }] },  // quando agir vs dados
    "5": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 95 }, { "caseId": "bradesco-open-banking-vision", "score": 88 }] },  // ambiguidade organizacional
    "6": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 92 }, { "caseId": "sefaz-pmo-creation", "score": 90 }] },  // time focado incerteza
    "7": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 98 }, { "caseId": "bradesco-open-banking-vision", "score": 90 }] },  // criar do zero
    "8": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 95 }, { "caseId": "sefaz-pmo-creation", "score": 88 }] },  // mudanças direção
    "9": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 92 }, { "caseId": "sefaz-pmo-creation", "score": 90 }] },  // trade-offs sem orientação
    "10": { "options": [{ "caseId": "sefaz-pmo-creation", "score": 95 }, { "caseId": "bradesco-open-banking-vision", "score": 88 }] }, // comunicar sem objetivos claros
    "11": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 98 }, { "caseId": "sefaz-pmo-creation", "score": 85 }] }, // experimentar e iterar
    "12": { "options": [{ "caseId": "bradesco-open-banking-vision", "score": 95 }, { "caseId": "sefaz-pmo-creation", "score": 92 }] }  // planejamento vs execução
  }
};

// Mescla com o mapeamento existente
const finalMapping = { ...questionsToCasesMapping, ...newMappings };

// Gera o arquivo atualizado
const MAPPING_FILE = path.join(__dirname, '..', 'src', 'data', 'questionsToCasesMapping.js');
const newContent = `// src/data/questionsToCasesMapping.js
// Normalized question-to-case mapping. Primary option is listed first, followed by fallbacks.
// Source data converted from legacy format via scripts/convertQuestionsMapping.mjs on 2025-10-12.
// New LPs manually mapped via scripts/manual-map-new-lps.mjs on ${new Date().toISOString().split('T')[0]}.

export const questionsToCasesMapping = ${JSON.stringify(finalMapping, null, 2)};

export default questionsToCasesMapping;
`;

// Faz backup
const backupFile = MAPPING_FILE + '.backup-before-manual-map';
fs.writeFileSync(backupFile, fs.readFileSync(MAPPING_FILE, 'utf8'), 'utf8');
console.log(`✅ Backup salvo em: ${backupFile}`);

// Escreve o novo arquivo
fs.writeFileSync(MAPPING_FILE, newContent, 'utf8');
console.log(`✅ Arquivo atualizado: ${MAPPING_FILE}`);

// Estatísticas
console.log('\n📊 Resumo dos Mapeamentos:');
for (const [lpId, questions] of Object.entries(newMappings)) {
  console.log(`  ${lpId}: ${Object.keys(questions).length} perguntas mapeadas`);
}

console.log('\n✨ Mapeamento manual concluído com sucesso!');
