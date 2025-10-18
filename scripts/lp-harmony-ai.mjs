#!/usr/bin/env node

/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║     LP HARMONY ANALYZER v3.0 - AI-POWERED EDITION            ║
 * ║  Análise Semântica de LPs usando Claude AI                   ║
 * ╚═══════════════════════════════════════════════════════════════╝
 *
 * Uso:
 *   node scripts/lp-harmony-ai.mjs batch1
 *   node scripts/lp-harmony-ai.mjs batch2
 *   node scripts/lp-harmony-ai.mjs analyze ownership
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const CACHE_FILE = path.join(__dirname, '.lp-harmony-cache.json');

// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÕES
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  SCORE_BASE_MAX: 90,
  BONUS_FUPS_MAX: 10,
  BONUS_VERSATILIDADE_MAX: 3,

  TOPCASE_THRESHOLD: 95,
  GOODCASE_THRESHOLD: 90,
  ACCEPTABLE_THRESHOLD: 80,

  MAX_PRIMARY_QUESTIONS: 4,

  MANDATORY_FUPS: [
    "Qual foi seu maior erro ou falha",
    "O que você faria diferente",
    "Qual foi o obstáculo mais difícil",
    "Quais foram os principais riscos",
    "Que dados você usou",
    "Como você usou o aprendizado"
  ]
};

// Batches pré-definidos
const BATCHES = {
  batch1: ['customer_obsession', 'program_management', 'ownership'],
  batch2: ['dive_deep', 'invent_simplify'],
  batch3: ['earn_trust', 'deliver_results', 'stakeholder_management'],
  batch4: ['learn_and_be_curious', 'bias_for_action', 'prioritizing_and_influence'],
  batch5: ['deal_with_ambiguity', 'disagree_and_commit', 'insist_on_highest_standards']
};

// ═══════════════════════════════════════════════════════════════
// CLASSE PRINCIPAL
// ═══════════════════════════════════════════════════════════════

class LPHarmonyAI {
  constructor() {
    this.cache = this.loadCache();
  }

  loadCache() {
    if (fs.existsSync(CACHE_FILE)) {
      try {
        return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      } catch (e) {
        console.warn('⚠️  Cache corrompido, criando novo...');
        return {};
      }
    }
    return {};
  }

  saveCache() {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(this.cache, null, 2), 'utf-8');
  }

  // ═══════════════════════════════════════════════════════════════
  // CARREGAMENTO DE DADOS
  // ═══════════════════════════════════════════════════════════════

  loadLP(principleId) {
    console.log(`\n📂 Carregando ${principleId}...`);

    const data = {
      principleId,
      cases: [],
      questions: [],
      currentMapping: {}
    };

    // Carregar cases
    const casesDir = path.join(ROOT_DIR, 'src', 'data', principleId);
    if (!fs.existsSync(casesDir)) {
      console.warn(`⚠️  Diretório não encontrado: ${casesDir}`);
      return data;
    }

    const caseFiles = fs.readdirSync(casesDir)
      .filter(f => f.startsWith(`${principleId}_case`) && f.endsWith('.js'));

    for (const file of caseFiles) {
      const filePath = path.join(casesDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const caseMatch = content.match(/const\s+\w+\s*=\s*(\{[\s\S]*?\n\};)/);

      if (caseMatch) {
        try {
          const caseObj = eval(`(${caseMatch[1].replace(/\};$/, '}')})`);
          data.cases.push({ ...caseObj, _filePath: filePath });
        } catch (e) {
          console.warn(`⚠️  Erro ao parsear ${file}`);
        }
      }
    }

    // Carregar perguntas
    const questionsPath = path.join(ROOT_DIR, 'src', 'data', 'typicalQuestions.js');
    const questionsContent = fs.readFileSync(questionsPath, 'utf-8');
    const questionsMatch = questionsContent.match(/const\s+typicalQuestions\s*=\s*(\{[\s\S]*?\n\};)/);

    if (questionsMatch) {
      const allQuestions = eval(`(${questionsMatch[1].replace(/\};$/, '}')})`);
      const principleData = allQuestions[principleId];

      if (principleData) {
        data.questions = (principleData.pt || []).map((q_pt, idx) => ({
          q_pt,
          q_en: (principleData.en || [])[idx] || q_pt,
          index: idx + 1
        }));
      }
    }

    // Carregar mapping atual
    const mappingPath = path.join(ROOT_DIR, 'src', 'data', 'questionsToCasesMapping.js');
    const mappingContent = fs.readFileSync(mappingPath, 'utf-8');
    const mappingMatch = mappingContent.match(/export\s+const\s+questionsToCasesMapping\s*=\s*(\{[\s\S]*?\n\};)/);

    if (mappingMatch) {
      const allMappings = eval(`(${mappingMatch[1].replace(/\};$/, '}')})`);
      data.currentMapping = allMappings[principleId] || {};
    }

    console.log(`✅ ${data.cases.length} cases, ${data.questions.length} perguntas`);
    return data;
  }

  // ═══════════════════════════════════════════════════════════════
  // PREPARAÇÃO PARA ANÁLISE AI
  // ═══════════════════════════════════════════════════════════════

  prepareAIAnalysis(lpData) {
    const { principleId, cases, questions } = lpData;
    const combinations = [];

    for (const question of questions) {
      for (const caseData of cases) {
        const cacheKey = `${principleId}__Q${question.index}__${caseData.id}`;

        // Verificar se já está no cache
        if (this.cache[cacheKey]) {
          continue; // Pular análises já feitas
        }

        combinations.push({
          cacheKey,
          principleId,
          questionIndex: question.index,
          questionText: question.q_pt,
          caseId: caseData.id,
          caseTitle: caseData.title_pt,
          caseSummary: {
            situation: caseData.pt.s?.substring(0, 300) + '...',
            task: caseData.pt.t?.substring(0, 200) + '...',
            action: caseData.pt.a?.substring(0, 400) + '...',
            result: caseData.pt.r?.substring(0, 300) + '...',
            learning: caseData.pt.l?.substring(0, 200) + '...'
          },
          fullCase: caseData
        });
      }
    }

    return combinations;
  }

  // ═══════════════════════════════════════════════════════════════
  // PROMPT PARA CLAUDE (AI)
  // ═══════════════════════════════════════════════════════════════

  generateAIPrompt(combinations, principleId) {
    const prompt = `
# 🎯 TAREFA: Análise Semântica de Cases para Leadership Principle

Você é um especialista em Leadership Principles da Amazon e vai analisar a qualidade do fit entre perguntas e cases de entrevista comportamental.

## 📋 LEADERSHIP PRINCIPLE: ${principleId.toUpperCase().replace(/_/g, ' ')}

## 🎯 CRITÉRIOS DE AVALIAÇÃO

Para cada combinação Question × Case, você deve avaliar 3 componentes:

### A. RELEVÂNCIA CONCEITUAL (0-30 pontos)
- **30 pontos**: Case responde PERFEITAMENTE a pergunta (conceito central do case = pergunta)
- **26 pontos**: Case responde MUITO BEM (conceito central fortemente relacionado)
- **22 pontos**: Case responde BEM (conceito presente mas não é central)
- **18 pontos**: Case responde PARCIALMENTE (conceito mencionado mas secundário)
- **12 pontos**: Case responde TANGENCIALMENTE (conceito indireto)
- **0 pontos**: Case NÃO responde a pergunta

### B. PROFUNDIDADE DA RESPOSTA (0-30 pontos)
- **30 pontos**: STAR-L completo com exemplos concretos + métricas + aprendizados profundos
- **26 pontos**: STAR-L completo com bons exemplos + algumas métricas
- **22 pontos**: STAR bom mas Learning superficial ou métricas vagas
- **18 pontos**: STAR presente mas genérico, faltam detalhes
- **12 pontos**: STAR incompleto ou muito superficial
- **0 pontos**: Não fornece resposta adequada

### C. EVIDÊNCIAS E MÉTRICAS (0-30 pontos)
- **30 pontos**: Métricas CONCRETAS + impacto quantificado + comparações (antes/depois)
- **26 pontos**: Métricas concretas + impacto quantificado
- **22 pontos**: Algumas métricas + impacto descrito
- **18 pontos**: Métricas vagas ou impacto não quantificado
- **12 pontos**: Pouquíssimas evidências numéricas
- **0 pontos**: Sem evidências ou métricas

## 📊 FORMATO DE RESPOSTA

Para cada combinação, retorne EXATAMENTE neste formato JSON:

\`\`\`json
{
  "cacheKey": "<cacheKey fornecido>",
  "relevance": <0-30>,
  "depth": <0-30>,
  "evidence": <0-30>,
  "scoreBase": <soma dos 3>,
  "reasoning": "<1-2 frases explicando a avaliação>"
}
\`\`\`

## 🎯 COMBINAÇÕES PARA ANÁLISE

${combinations.map((c, idx) => `
---
### COMBINAÇÃO ${idx + 1}/${combinations.length}

**CacheKey**: \`${c.cacheKey}\`

**Pergunta Q${c.questionIndex}**: "${c.questionText}"

**Case**: ${c.caseId}
**Título**: ${c.caseTitle}

**STAR-L Resumido**:
- **S**: ${c.caseSummary.situation}
- **T**: ${c.caseSummary.task}
- **A**: ${c.caseSummary.action}
- **R**: ${c.caseSummary.result}
- **L**: ${c.caseSummary.learning}
`).join('\n')}

---

## ⚠️ IMPORTANTE

1. Retorne APENAS um array JSON com todas as análises
2. Use o formato exato especificado
3. Seja RIGOROSO na avaliação - apenas casos excepcionais devem ter 30/30
4. O scoreBase deve ser a SOMA exata de relevance + depth + evidence
5. Não invente informações - se o case não menciona algo, penalize

## 📝 EXEMPLO DE RESPOSTA

\`\`\`json
[
  {
    "cacheKey": "ownership__Q1__hsbc-migration-leadership",
    "relevance": 30,
    "depth": 28,
    "evidence": 30,
    "scoreBase": 88,
    "reasoning": "Conceito central (assumir migração além do escopo) alinha perfeitamente com a pergunta. STAR-L completo com métricas concretas (400 servidores, R$47M, -67% latência)."
  }
]
\`\`\`

Agora analise as ${combinations.length} combinações acima e retorne o array JSON.
`;

    return prompt;
  }

  // ═══════════════════════════════════════════════════════════════
  // PROCESSAMENTO DE RESPOSTA AI
  // ═══════════════════════════════════════════════════════════════

  parseAIResponse(response) {
    // Extrair JSON da resposta
    const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/);
    if (!jsonMatch) {
      throw new Error('Resposta AI não contém JSON válido');
    }

    try {
      const analyses = JSON.parse(jsonMatch[1]);
      return analyses;
    } catch (e) {
      throw new Error(`Erro ao parsear JSON: ${e.message}`);
    }
  }

  updateCacheWithAIAnalyses(analyses) {
    for (const analysis of analyses) {
      this.cache[analysis.cacheKey] = {
        ...analysis,
        analyzedAt: new Date().toISOString(),
        version: '3.0'
      };
    }
    this.saveCache();
  }

  // ═══════════════════════════════════════════════════════════════
  // CÁLCULO DE SCORE FINAL (com bônus/penalidades)
  // ═══════════════════════════════════════════════════════════════

  calculateFinalScore(cacheKey, caseData, questionIndex, lpData) {
    const aiAnalysis = this.cache[cacheKey];
    if (!aiAnalysis) {
      return null; // Ainda não analisado
    }

    const scoreBase = aiAnalysis.scoreBase;

    // Bonus FUPs
    const bonusFUPs = this.calculateFUPsBonus(caseData, lpData.questions[questionIndex - 1]);

    // Bonus Versatilidade (baseado no mapping atual)
    const bonusVersatility = this.calculateVersatilityBonus(caseData.id, lpData.currentMapping);

    // Penalidades
    const penalties = this.calculatePenalties(caseData);

    const final = Math.max(0, Math.min(100, scoreBase + bonusFUPs + bonusVersatility - penalties));

    return {
      final,
      components: {
        base: scoreBase,
        baseBreakdown: {
          relevance: aiAnalysis.relevance,
          depth: aiAnalysis.depth,
          evidence: aiAnalysis.evidence
        },
        bonusFUPs,
        bonusVersatility,
        penalties
      },
      reasoning: aiAnalysis.reasoning
    };
  }

  calculateFUPsBonus(caseData, question) {
    const fups = caseData.fups || [];
    const totalFUPs = fups.length;

    if (totalFUPs === 0) return 0;

    // Contar FUPs relevantes (heurística simples)
    const questionText = typeof question === 'string' ? question : (question.q_pt || question);
    const questionWords = questionText.toLowerCase().split(/\s+/).filter(w => w.length > 4);

    let relevantCount = 0;
    let detailedCount = 0;

    for (const fup of fups) {
      const fupAnswer = fup.a || '';

      // FUP detalhada?
      if (fupAnswer.length >= 150) detailedCount++;
      else if (fupAnswer.length >= 80) detailedCount += 0.5;

      // FUP relevante? (menciona conceitos da pergunta)
      const matches = questionWords.filter(w =>
        fupAnswer.toLowerCase().includes(w)
      ).length;

      if (matches >= 2) relevantCount++;
    }

    // Calcular bônus
    if (totalFUPs >= 14 && relevantCount >= 10 && detailedCount >= 12) return 10;
    if (totalFUPs >= 12 && relevantCount >= 8 && detailedCount >= 10) return 8;
    if (totalFUPs >= 10 && relevantCount >= 6 && detailedCount >= 8) return 6;
    if (totalFUPs >= 8 && relevantCount >= 4 && detailedCount >= 6) return 4;
    if (totalFUPs >= 6) return 2;
    return 0;
  }

  calculateVersatilityBonus(caseId, currentMapping) {
    // Contar quantas perguntas esse case responde no mapping atual
    let count = 0;
    for (const [qIndex, data] of Object.entries(currentMapping)) {
      const hasCase = data.options?.some(opt =>
        opt.caseId === caseId && opt.score >= CONFIG.ACCEPTABLE_THRESHOLD
      );
      if (hasCase) count++;
    }

    if (count >= 11) return -5;
    if (count >= 9) return -2;
    if (count >= 7) return 0;
    if (count >= 5) return 1;
    if (count >= 2) return 3;
    return 0;
  }

  calculatePenalties(caseData) {
    let penalties = 0;

    // Learning fraco
    const learningLength = caseData.pt?.l?.length || 0;
    if (learningLength < 100) penalties += 5;
    else if (learningLength < 200) penalties += 3;

    // STAR incompleto
    if ((caseData.pt?.s?.length || 0) < 150) penalties += 2;
    if ((caseData.pt?.t?.length || 0) < 150) penalties += 2;
    if ((caseData.pt?.a?.length || 0) < 300) penalties += 3;
    if ((caseData.pt?.r?.length || 0) < 200) penalties += 2;

    // FUPs obrigatórias ausentes
    const fups = caseData.fups || [];
    const fupQuestions = fups.map(f => f.q.toLowerCase());

    for (const mandatoryFup of CONFIG.MANDATORY_FUPS) {
      const found = fupQuestions.some(fq => fq.includes(mandatoryFup.toLowerCase()));
      if (!found) penalties += 2;
    }

    return penalties;
  }

  // ═══════════════════════════════════════════════════════════════
  // GERAÇÃO DE NOVO MAPPING
  // ═══════════════════════════════════════════════════════════════

  generateNewMapping(lpData) {
    const newMapping = {};

    for (const question of lpData.questions) {
      newMapping[question.index] = { options: [] };

      for (const caseData of lpData.cases) {
        const cacheKey = `${lpData.principleId}__Q${question.index}__${caseData.id}`;
        const scoreData = this.calculateFinalScore(cacheKey, caseData, question.index, lpData);

        if (scoreData && scoreData.final >= CONFIG.ACCEPTABLE_THRESHOLD) {
          newMapping[question.index].options.push({
            caseId: caseData.id,
            score: Math.round(scoreData.final),
            _components: scoreData.components,
            _reasoning: scoreData.reasoning
          });
        }
      }

      // Ordenar por score (decrescente)
      newMapping[question.index].options.sort((a, b) => b.score - a.score);
    }

    return newMapping;
  }

  // ═══════════════════════════════════════════════════════════════
  // ATUALIZAÇÃO DE ARQUIVOS
  // ═══════════════════════════════════════════════════════════════

  updateFiles(lpData, newMapping) {
    console.log(`\n📝 Atualizando arquivos para ${lpData.principleId}...`);

    // 1. Atualizar flags nos cases
    const caseScores = {};
    for (const [qIndex, data] of Object.entries(newMapping)) {
      for (const opt of data.options) {
        if (!caseScores[opt.caseId]) {
          caseScores[opt.caseId] = [];
        }
        caseScores[opt.caseId].push(opt.score);
      }
    }

    for (const caseData of lpData.cases) {
      const scores = caseScores[caseData.id] || [];
      const maxScore = Math.max(...scores, 0);

      let newIsTopCase = false;
      let newIsGoodCase = false;

      if (maxScore >= CONFIG.TOPCASE_THRESHOLD) {
        newIsTopCase = true;
        newIsGoodCase = true;
      } else if (maxScore >= CONFIG.GOODCASE_THRESHOLD) {
        newIsGoodCase = true;
      }

      if (caseData.isTopCase !== newIsTopCase || caseData.isGoodCase !== newIsGoodCase) {
        this.updateCaseFile(caseData, newIsTopCase, newIsGoodCase);
        console.log(`  ✅ ${caseData.id}: isTopCase=${newIsTopCase}, isGoodCase=${newIsGoodCase}`);
      }
    }

    // 2. Atualizar questionsToCasesMapping.js
    this.updateMappingFile(lpData.principleId, newMapping);

    console.log(`✅ Arquivos atualizados!`);
  }

  updateCaseFile(caseData, newIsTopCase, newIsGoodCase) {
    const filePath = caseData._filePath;
    let content = fs.readFileSync(filePath, 'utf-8');

    content = content.replace(/isTopCase:\s*(true|false)/, `isTopCase: ${newIsTopCase}`);
    content = content.replace(/isGoodCase:\s*(true|false)/, `isGoodCase: ${newIsGoodCase}`);

    fs.writeFileSync(filePath, content, 'utf-8');
  }

  updateMappingFile(principleId, newMapping) {
    const mappingPath = path.join(ROOT_DIR, 'src', 'data', 'questionsToCasesMapping.js');
    let content = fs.readFileSync(mappingPath, 'utf-8');

    // Limpar componentes internos
    const cleanMapping = {};
    for (const [qIndex, data] of Object.entries(newMapping)) {
      cleanMapping[qIndex] = {
        options: data.options.map(({ caseId, score }) => ({ caseId, score }))
      };
    }

    // Substituir seção do LP
    const lpRegex = new RegExp(
      `"${principleId}":\\s*\\{[\\s\\S]*?\\n  \\}(?=,\\n  "|\\n\\};)`,
      'g'
    );

    const newLPSection = `"${principleId}": ${JSON.stringify(cleanMapping, null, 2)
      .split('\n')
      .map((line, idx) => idx === 0 ? line : '  ' + line)
      .join('\n')}`;

    content = content.replace(lpRegex, newLPSection);
    fs.writeFileSync(mappingPath, content, 'utf-8');
  }

  // ═══════════════════════════════════════════════════════════════
  // RELATÓRIO
  // ═══════════════════════════════════════════════════════════════

  printReport(lpData, newMapping) {
    console.log('\n' + '═'.repeat(70));
    console.log(`  ${lpData.principleId.toUpperCase().replace(/_/g, ' ')}`);
    console.log('═'.repeat(70));

    const totalQuestions = lpData.questions.length;
    const coveredQuestions = Object.values(newMapping).filter(d => d.options.length > 0).length;

    let topCount = 0, goodCount = 0, acceptableCount = 0;
    for (const data of Object.values(newMapping)) {
      for (const opt of data.options) {
        if (opt.score >= CONFIG.TOPCASE_THRESHOLD) topCount++;
        else if (opt.score >= CONFIG.GOODCASE_THRESHOLD) goodCount++;
        else acceptableCount++;
      }
    }

    console.log(`\n📊 Cobertura: ${coveredQuestions}/${totalQuestions} perguntas (${((coveredQuestions/totalQuestions)*100).toFixed(0)}%)`);
    console.log(`\n🎯 Distribuição:`);
    console.log(`   TopCase (95-100):   ${topCount} mapeamentos`);
    console.log(`   GoodCase (90-94):   ${goodCount} mapeamentos`);
    console.log(`   Acceptable (80-89): ${acceptableCount} mapeamentos`);
  }
}

// ═══════════════════════════════════════════════════════════════
// CLI
// ═══════════════════════════════════════════════════════════════

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║     LP HARMONY ANALYZER v3.0 - AI-POWERED EDITION            ║
╚═══════════════════════════════════════════════════════════════╝

Uso:
  node scripts/lp-harmony-ai.mjs batch1
  node scripts/lp-harmony-ai.mjs batch2
  node scripts/lp-harmony-ai.mjs batch3
  node scripts/lp-harmony-ai.mjs batch4
  node scripts/lp-harmony-ai.mjs batch5
  node scripts/lp-harmony-ai.mjs analyze <principle_id>

Batches:
  batch1: Customer Obsession, Program Management, Ownership
  batch2: Dive Deep, Invent and Simplify
  batch3: Earn Trust, Deliver Results, Stakeholder Management
  batch4: Learn and Be Curious, Bias for Action, Prioritizing & Influence
  batch5: Deal with Ambiguity, Have Backbone, Insist on Highest Standards

Exemplo:
  node scripts/lp-harmony-ai.mjs batch1
    `);
    process.exit(0);
  }

  const analyzer = new LPHarmonyAI();

  // Determinar LPs para analisar
  let principles = [];
  if (command.startsWith('batch')) {
    const batchKey = command;
    if (!BATCHES[batchKey]) {
      console.error(`❌ Batch inválido. Use: batch1, batch2, batch3, batch4 ou batch5`);
      process.exit(1);
    }
    principles = BATCHES[batchKey];
    console.log(`\n🎯 BATCH: ${batchKey.toUpperCase()}`);
    console.log(`📋 LPs: ${principles.join(', ')}\n`);
  } else if (command === 'analyze') {
    const principleId = args[1];
    if (!principleId) {
      console.error('❌ Especifique o principle_id');
      process.exit(1);
    }
    principles = [principleId];
  } else {
    console.error('❌ Comando inválido');
    process.exit(1);
  }

  // Processar cada LP
  for (const principleId of principles) {
    console.log('\n' + '═'.repeat(70));
    console.log(`  PROCESSANDO: ${principleId.toUpperCase().replace(/_/g, ' ')}`);
    console.log('═'.repeat(70));

    try {
      const lpData = analyzer.loadLP(principleId);

      if (lpData.cases.length === 0 || lpData.questions.length === 0) {
        console.log(`⚠️  Pulando ${principleId} (sem cases ou perguntas)`);
        continue;
      }

      const combinations = analyzer.prepareAIAnalysis(lpData);

      if (combinations.length === 0) {
        console.log(`✅ Todas as ${lpData.cases.length * lpData.questions.length} combinações já estão no cache!`);
      } else {
        console.log(`\n🤖 AGUARDANDO ANÁLISE AI...`);
        console.log(`📊 ${combinations.length} combinações precisam ser analisadas\n`);

        const prompt = analyzer.generateAIPrompt(combinations, principleId);

        // Salvar prompt em arquivo
        const promptFile = path.join(__dirname, `.prompt-${principleId}.txt`);
        fs.writeFileSync(promptFile, prompt, 'utf-8');

        console.log('─'.repeat(70));
        console.log(`✅ PROMPT SALVO EM: ${promptFile}`);
        console.log('─'.repeat(70));
        console.log('\n📋 PRÓXIMOS PASSOS:\n');
        console.log(`1. Abra o arquivo: ${promptFile}`);
        console.log(`2. Copie TODO o conteúdo`);
        console.log(`3. Cole no Claude para análise`);
        console.log(`4. Copie a resposta JSON do Claude`);
        console.log(`5. Salve no cache: ${CACHE_FILE}`);
        console.log(`6. Execute novamente: node scripts/lp-harmony-ai.mjs ${command}\n`);
        console.log('─'.repeat(70));

        console.log('\n⏸️  PAUSADO: Aguardando que você complete os passos acima');
        console.log('(Ctrl+C para sair)\n');

        process.exit(0);
      }

      // Gerar novo mapping
      const newMapping = analyzer.generateNewMapping(lpData);

      // Atualizar arquivos
      analyzer.updateFiles(lpData, newMapping);

      // Relatório
      analyzer.printReport(lpData, newMapping);

    } catch (error) {
      console.error(`❌ Erro ao processar ${principleId}: ${error.message}`);
    }
  }

  console.log('\n✅ Processamento concluído!\n');
}

main();
