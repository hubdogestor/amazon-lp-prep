#!/usr/bin/env node

/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║            LP HARMONY ANALYZER v2.0                           ║
 * ║  Ferramenta de Análise e Rebalanceamento de LPs              ║
 * ╚═══════════════════════════════════════════════════════════════╝
 *
 * Uso:
 *   node scripts/lp-harmony.mjs analyze ownership
 *   node scripts/lp-harmony.mjs rebalance ownership
 *   node scripts/lp-harmony.mjs analyze-all
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// ═══════════════════════════════════════════════════════════════
// CONFIGURAÇÕES
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  SCORE_BASE_MAX: 90,        // Score base: 0-90 pontos
  BONUS_FUPS_MAX: 10,        // Bônus FUPs: 0-10 pontos
  BONUS_VERSATILIDADE_MAX: 3, // Bônus versatilidade: -5 a +3

  // Limiares de classificação
  TOPCASE_THRESHOLD: 95,     // 95-100 = TopCase
  GOODCASE_THRESHOLD: 90,    // 90-94 = GoodCase
  ACCEPTABLE_THRESHOLD: 80,  // 80-89 = Acceptable

  // Regra de primary cases
  MAX_PRIMARY_QUESTIONS: 4,

  // FUPs obrigatórias
  MANDATORY_FUPS: [
    "Qual foi seu maior erro ou falha",
    "O que você faria diferente",
    "Qual foi o obstáculo mais difícil",
    "Quais foram os principais riscos",
    "Que dados você usou",
    "Como você usou o aprendizado"
  ]
};

// ═══════════════════════════════════════════════════════════════
// CLASSE PRINCIPAL
// ═══════════════════════════════════════════════════════════════

class LPHarmonyAnalyzer {
  constructor(principleId) {
    this.principleId = principleId;
    this.cases = [];
    this.questions = [];
    this.currentMapping = {};
    this.newMapping = {};
    this.analysis = {
      ties: [],
      saturatedCases: [],
      gaps: [],
      suggestions: [],
      scores: {},
      rebalancing: []
    };
  }

  // ═══════════════════════════════════════════════════════════════
  // 1. CARREGAMENTO DE DADOS
  // ═══════════════════════════════════════════════════════════════

  async loadData() {
    console.log(`\n📂 Carregando dados para LP: ${this.principleId}...`);

    // Carregar cases
    const casesDir = path.join(ROOT_DIR, 'src', 'data', this.principleId);
    if (!fs.existsSync(casesDir)) {
      throw new Error(`Diretório não encontrado: ${casesDir}`);
    }

    const caseFiles = fs.readdirSync(casesDir)
      .filter(f => f.startsWith(`${this.principleId}_case`) && f.endsWith('.js'));

    for (const file of caseFiles) {
      const filePath = path.join(casesDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Extrair o objeto do case (hack simples para evitar import dinâmico)
      const caseMatch = content.match(/const\s+\w+\s*=\s*(\{[\s\S]*?\n\};)/);
      if (caseMatch) {
        try {
          const caseObj = eval(`(${caseMatch[1].replace(/\};$/, '}')})`);
          this.cases.push({ ...caseObj, _filePath: filePath });
        } catch (e) {
          console.warn(`⚠️  Erro ao parsear ${file}: ${e.message}`);
        }
      }
    }

    // Carregar perguntas
    const questionsPath = path.join(ROOT_DIR, 'src', 'data', 'typicalQuestions.js');
    const questionsContent = fs.readFileSync(questionsPath, 'utf-8');
    const questionsMatch = questionsContent.match(/const\s+typicalQuestions\s*=\s*(\{[\s\S]*?\n\};)/);

    if (questionsMatch) {
      const allQuestions = eval(`(${questionsMatch[1].replace(/\};$/, '}')})`);
      const principleData = allQuestions[this.principleId];

      if (principleData) {
        // Converter array pt para formato de objetos
        this.questions = (principleData.pt || []).map((q_pt, idx) => ({
          q_pt,
          q_en: (principleData.en || [])[idx] || q_pt
        }));
      }
    }

    // Carregar mapping atual
    const mappingPath = path.join(ROOT_DIR, 'src', 'data', 'questionsToCasesMapping.js');
    const mappingContent = fs.readFileSync(mappingPath, 'utf-8');
    const mappingMatch = mappingContent.match(/export\s+const\s+questionsToCasesMapping\s*=\s*(\{[\s\S]*?\n\};)/);

    if (mappingMatch) {
      const allMappings = eval(`(${mappingMatch[1].replace(/\};$/, '}')})`);
      this.currentMapping = allMappings[this.principleId] || {};
    }

    console.log(`✅ Carregados: ${this.cases.length} cases, ${this.questions.length} perguntas`);
  }

  // ═══════════════════════════════════════════════════════════════
  // 2. ANÁLISE DE FIT (SCORE_BASE: 0-90 pontos)
  // ═══════════════════════════════════════════════════════════════

  analyzeRelevance(caseData, question) {
    /**
     * A. RELEVÂNCIA CONCEITUAL (0-30 pontos)
     * Avalia se o case responde PERFEITAMENTE a pergunta
     */
    const questionLower = question.q_pt.toLowerCase();
    const caseTitleLower = caseData.title_pt.toLowerCase();
    const caseStory = `${caseData.pt.s} ${caseData.pt.t} ${caseData.pt.a}`.toLowerCase();

    // Extrair palavras-chave da pergunta
    const keywords = this.extractKeywords(questionLower);

    // Contar matches de keywords no case
    let keywordMatches = 0;
    let titleMatch = false;

    for (const keyword of keywords) {
      if (caseStory.includes(keyword)) keywordMatches++;
      if (caseTitleLower.includes(keyword)) {
        titleMatch = true;
        keywordMatches += 2; // Peso extra para título
      }
    }

    const matchRatio = keywordMatches / keywords.length;

    if (matchRatio >= 0.8 && titleMatch) return 30; // Perfeito
    if (matchRatio >= 0.7) return 26; // Muito bom
    if (matchRatio >= 0.5) return 22; // Bom
    if (matchRatio >= 0.3) return 18; // Parcial
    if (matchRatio >= 0.15) return 12; // Tangencial
    return 0; // Não responde
  }

  analyzeProfundidade(caseData, question) {
    /**
     * B. PROFUNDIDADE DA RESPOSTA (0-30 pontos)
     * Avalia completude do STAR-L e qualidade dos exemplos
     */
    const { s, t, a, r, l } = caseData.pt;

    let score = 0;

    // Verificar completude do STAR
    if (s.length >= 300) score += 6; else if (s.length >= 150) score += 4;
    if (t.length >= 300) score += 6; else if (t.length >= 150) score += 4;
    if (a.length >= 500) score += 8; else if (a.length >= 300) score += 5;
    if (r.length >= 400) score += 6; else if (r.length >= 200) score += 4;

    // Learning profundo é crucial
    if (l.length >= 300) score += 4;
    else if (l.length >= 200) score += 2;
    else if (l.length < 100) score -= 3; // Penalidade

    return Math.min(30, Math.max(0, score));
  }

  analyzeEvidencias(caseData, question) {
    /**
     * C. EVIDÊNCIAS E MÉTRICAS (0-30 pontos)
     * Avalia presença de dados concretos e métricas
     */
    const fullText = `${caseData.pt.s} ${caseData.pt.t} ${caseData.pt.a} ${caseData.pt.r}`;

    let score = 0;

    // Detectar números e métricas
    const numberMatches = fullText.match(/\d+[.,]?\d*\s*(%|milhões?|mil|dias?|horas?|semanas?|meses?|anos?|R\$)/gi);
    const numberCount = numberMatches ? numberMatches.length : 0;

    if (numberCount >= 10) score += 15; // Muitas métricas
    else if (numberCount >= 7) score += 12;
    else if (numberCount >= 5) score += 9;
    else if (numberCount >= 3) score += 6;
    else if (numberCount >= 1) score += 3;

    // Detectar comparações (antes/depois)
    const comparisons = fullText.match(/(de\s+\d+.*?para\s+\d+|reduz|aument|cresc|caiu|subiu)/gi);
    if (comparisons && comparisons.length >= 3) score += 10;
    else if (comparisons && comparisons.length >= 1) score += 5;

    // Detectar impacto quantificado
    const impactWords = ['economizou', 'gerou', 'reduziu', 'aumentou', 'salvou', 'preservou'];
    const hasImpact = impactWords.some(word => fullText.toLowerCase().includes(word));
    if (hasImpact && numberCount >= 3) score += 5;

    return Math.min(30, score);
  }

  calculateScoreBase(caseData, question) {
    const relevance = this.analyzeRelevance(caseData, question);
    const depth = this.analyzeProfundidade(caseData, question);
    const evidence = this.analyzeEvidencias(caseData, question);

    const total = relevance + depth + evidence;

    return {
      total: Math.min(CONFIG.SCORE_BASE_MAX, total),
      breakdown: { relevance, depth, evidence }
    };
  }

  // ═══════════════════════════════════════════════════════════════
  // 3. ANÁLISE DE FUPS (BONUS: 0-10 pontos)
  // ═══════════════════════════════════════════════════════════════

  analyzeFUPsQuality(caseData, question) {
    const fups = caseData.fups || [];
    const totalFUPs = fups.length;

    if (totalFUPs === 0) return 0;

    let relevantCount = 0;
    let detailedCount = 0;
    const questionKeywords = this.extractKeywords(question.q_pt.toLowerCase());

    for (const fup of fups) {
      const fupQuestion = fup.q.toLowerCase();
      const fupAnswer = fup.a.toLowerCase();

      // 1. Verificar relevância para a pergunta
      const relevanceScore = this.calculateFUPRelevance(fupQuestion, fupAnswer, questionKeywords);
      if (relevanceScore >= 2) relevantCount++;

      // 2. Verificar profundidade da resposta
      if (fupAnswer.length >= 150) {
        detailedCount++;
      } else if (fupAnswer.length >= 80) {
        detailedCount += 0.5;
      }
    }

    // Calcular bônus
    if (totalFUPs >= 14 && relevantCount >= 10 && detailedCount >= 12) return 10;
    if (totalFUPs >= 12 && relevantCount >= 8 && detailedCount >= 10) return 8;
    if (totalFUPs >= 10 && relevantCount >= 6 && detailedCount >= 8) return 6;
    if (totalFUPs >= 8 && relevantCount >= 4 && detailedCount >= 6) return 4;
    if (totalFUPs >= 6) return 2;
    return 0;
  }

  calculateFUPRelevance(fupQuestion, fupAnswer, questionKeywords) {
    // Verificar se FUP aborda conceitos da pergunta principal
    let matches = 0;
    for (const keyword of questionKeywords) {
      if (fupQuestion.includes(keyword) || fupAnswer.includes(keyword)) {
        matches++;
      }
    }

    const ratio = matches / Math.max(1, questionKeywords.length);
    if (ratio >= 0.4) return 3; // Diretamente relacionada
    if (ratio >= 0.2) return 2; // Adiciona contexto útil
    if (ratio >= 0.1) return 1; // Genérica mas relacionada
    return 0;
  }

  // ═══════════════════════════════════════════════════════════════
  // 4. ANÁLISE DE VERSATILIDADE (BONUS: -5 a +3 pontos)
  // ═══════════════════════════════════════════════════════════════

  calculateVersatilityBonus(caseData) {
    // Contar quantas perguntas esse case responde no LP
    const questionsAnswered = this.countQuestionsAnsweredByCase(caseData.id);

    if (questionsAnswered >= 11) return -5; // Canivete suíço
    if (questionsAnswered >= 9) return -2;  // Genérico demais
    if (questionsAnswered >= 7) return 0;   // Neutro
    if (questionsAnswered >= 5) return 1;   // Bom equilíbrio
    if (questionsAnswered >= 2) return 3;   // Especialista focado
    return 0;
  }

  countQuestionsAnsweredByCase(caseId) {
    let count = 0;
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      const scoreData = this.calculateFinalScore(
        this.cases.find(c => c.id === caseId),
        question,
        i + 1
      );
      if (scoreData.final >= CONFIG.ACCEPTABLE_THRESHOLD) {
        count++;
      }
    }
    return count;
  }

  // ═══════════════════════════════════════════════════════════════
  // 5. PENALIDADES
  // ═══════════════════════════════════════════════════════════════

  calculatePenalties(caseData) {
    let penalties = 0;

    // A. Learning fraco
    const learningLength = caseData.pt.l?.length || 0;
    if (learningLength < 100) penalties += 5;
    else if (learningLength < 200) penalties += 3;

    // B. STAR incompleto
    if ((caseData.pt.s?.length || 0) < 150) penalties += 2;
    if ((caseData.pt.t?.length || 0) < 150) penalties += 2;
    if ((caseData.pt.a?.length || 0) < 300) penalties += 3;
    if ((caseData.pt.r?.length || 0) < 200) penalties += 2;

    // C. FUPs obrigatórias ausentes
    const fups = caseData.fups || [];
    const fupQuestions = fups.map(f => f.q.toLowerCase());

    for (const mandatoryFup of CONFIG.MANDATORY_FUPS) {
      const found = fupQuestions.some(fq => fq.includes(mandatoryFup.toLowerCase()));
      if (!found) penalties += 2;
    }

    return penalties;
  }

  // ═══════════════════════════════════════════════════════════════
  // 6. SCORE FINAL
  // ═══════════════════════════════════════════════════════════════

  calculateFinalScore(caseData, question, questionIndex) {
    const scoreBase = this.calculateScoreBase(caseData, question);
    const bonusFUPs = this.analyzeFUPsQuality(caseData, question);
    const bonusVersatility = this.calculateVersatilityBonus(caseData);
    const penalties = this.calculatePenalties(caseData);

    const final = Math.max(0, Math.min(100,
      scoreBase.total + bonusFUPs + bonusVersatility - penalties
    ));

    return {
      final,
      components: {
        base: scoreBase.total,
        baseBreakdown: scoreBase.breakdown,
        bonusFUPs,
        bonusVersatility,
        penalties
      }
    };
  }

  // ═══════════════════════════════════════════════════════════════
  // 7. ANÁLISE COMPLETA
  // ═══════════════════════════════════════════════════════════════

  async analyze() {
    console.log('\n🔍 Iniciando análise completa...\n');

    // Calcular scores para todas as combinações
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      const questionIndex = i + 1;

      this.newMapping[questionIndex] = { options: [] };

      for (const caseData of this.cases) {
        const scoreData = this.calculateFinalScore(caseData, question, questionIndex);

        if (scoreData.final >= CONFIG.ACCEPTABLE_THRESHOLD) {
          this.newMapping[questionIndex].options.push({
            caseId: caseData.id,
            score: Math.round(scoreData.final),
            _components: scoreData.components
          });

          // Armazenar para análise
          if (!this.analysis.scores[caseData.id]) {
            this.analysis.scores[caseData.id] = [];
          }
          this.analysis.scores[caseData.id].push({
            questionIndex,
            score: scoreData.final,
            components: scoreData.components
          });
        }
      }

      // Ordenar por score (decrescente)
      this.newMapping[questionIndex].options.sort((a, b) => b.score - a.score);
    }

    // Executar análises
    this.detectTies();
    this.detectSaturatedCases();
    this.detectGaps();
    this.applyPrimaryQuestionLimit();

    return this.analysis;
  }

  // ═══════════════════════════════════════════════════════════════
  // 8. DETECÇÃO DE EMPATES
  // ═══════════════════════════════════════════════════════════════

  detectTies() {
    for (const [qIndex, data] of Object.entries(this.newMapping)) {
      const options = data.options;
      if (options.length < 2) continue;

      const topScore = options[0].score;
      const tiedCases = options.filter(opt => opt.score === topScore);

      if (tiedCases.length > 1) {
        // Aplicar critérios de desempate
        const sorted = this.sortByTiebreaker(tiedCases);

        this.analysis.ties.push({
          questionIndex: qIndex,
          score: topScore,
          cases: sorted.map(c => c.caseId),
          winner: sorted[0].caseId
        });
      }
    }
  }

  sortByTiebreaker(tiedCases) {
    return tiedCases.sort((a, b) => {
      const caseA = this.cases.find(c => c.id === a.caseId);
      const caseB = this.cases.find(c => c.id === b.caseId);

      // 1º - Especialização (menor número de perguntas = melhor)
      const questionsA = this.countQuestionsAnsweredByCase(a.caseId);
      const questionsB = this.countQuestionsAnsweredByCase(b.caseId);
      if (questionsA !== questionsB) return questionsA - questionsB; // MENOR vence

      // 2º - Score médio no LP
      const avgA = this.calculateAverageScore(a.caseId);
      const avgB = this.calculateAverageScore(b.caseId);
      if (Math.abs(avgA - avgB) > 0.5) return avgB - avgA; // MAIOR vence

      // 3º - isTopCase flag
      if (caseA.isTopCase !== caseB.isTopCase) {
        return caseA.isTopCase ? -1 : 1;
      }

      // 4º - isGoodCase flag
      if (caseA.isGoodCase !== caseB.isGoodCase) {
        return caseA.isGoodCase ? -1 : 1;
      }

      // 5º - Maior número de FUPs
      const fupsA = caseA.fups?.length || 0;
      const fupsB = caseB.fups?.length || 0;
      return fupsB - fupsA;
    });
  }

  calculateAverageScore(caseId) {
    const scores = this.analysis.scores[caseId] || [];
    if (scores.length === 0) return 0;
    const sum = scores.reduce((acc, s) => acc + s.score, 0);
    return sum / scores.length;
  }

  // ═══════════════════════════════════════════════════════════════
  // 9. DETECÇÃO DE CASES SATURADOS
  // ═══════════════════════════════════════════════════════════════

  detectSaturatedCases() {
    for (const caseData of this.cases) {
      const count = this.countQuestionsAnsweredByCase(caseData.id);

      if (count >= 9) {
        this.analysis.saturatedCases.push({
          caseId: caseData.id,
          questionsAnswered: count,
          totalQuestions: this.questions.length,
          severity: count >= 11 ? 'CRITICAL' : 'WARNING'
        });
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // 10. DETECÇÃO DE GAPS
  // ═══════════════════════════════════════════════════════════════

  detectGaps() {
    for (const [qIndex, data] of Object.entries(this.newMapping)) {
      const options = data.options;

      if (options.length === 0) {
        this.analysis.gaps.push({
          questionIndex: qIndex,
          severity: 'CRITICAL',
          message: 'Nenhum case responde essa pergunta'
        });
      } else if (options.length === 1) {
        this.analysis.gaps.push({
          questionIndex: qIndex,
          severity: 'WARNING',
          caseId: options[0].caseId,
          score: options[0].score,
          message: 'Apenas 1 case responde (baixa redundância)'
        });
      } else if (options[0].score < 85) {
        this.analysis.gaps.push({
          questionIndex: qIndex,
          severity: 'WARNING',
          caseId: options[0].caseId,
          score: options[0].score,
          message: 'Melhor score abaixo de 85 (cobertura fraca)'
        });
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // 11. REGRA DE MÁXIMO 4 PRIMARY QUESTIONS
  // ═══════════════════════════════════════════════════════════════

  applyPrimaryQuestionLimit() {
    const primaryCount = {};

    // Contar primaries atuais
    for (const [qIndex, data] of Object.entries(this.newMapping)) {
      if (data.options.length > 0) {
        const primaryCase = data.options[0].caseId;
        primaryCount[primaryCase] = (primaryCount[primaryCase] || 0) + 1;
      }
    }

    // Rebalancear cases que excedem limite
    for (const [caseId, count] of Object.entries(primaryCount)) {
      if (count > CONFIG.MAX_PRIMARY_QUESTIONS) {
        const questionsWherePrimary = Object.entries(this.newMapping)
          .filter(([_, data]) => data.options[0]?.caseId === caseId)
          .map(([qIndex, data]) => ({
            qIndex: parseInt(qIndex),
            score: data.options[0].score,
            secondBest: data.options[1] || null
          }))
          .sort((a, b) => b.score - a.score); // Ordenar por score desc

        // Manter top 4, promover segundo lugar nos demais
        for (let i = CONFIG.MAX_PRIMARY_QUESTIONS; i < questionsWherePrimary.length; i++) {
          const item = questionsWherePrimary[i];

          if (item.secondBest) {
            this.analysis.rebalancing.push({
              questionIndex: item.qIndex,
              previousPrimary: caseId,
              previousScore: item.score,
              newPrimary: item.secondBest.caseId,
              newScore: item.secondBest.score,
              reason: `${caseId} já é primary em ${CONFIG.MAX_PRIMARY_QUESTIONS}+ perguntas`
            });

            // Aplicar rebalanceamento
            const options = this.newMapping[item.qIndex].options;
            const idx = options.findIndex(o => o.caseId === caseId);
            if (idx !== -1) {
              // Reduzir score do case saturado para forçar segundo lugar
              options[idx].score = item.secondBest.score - 1;
              options.sort((a, b) => b.score - a.score);
            }
          }
        }
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // 12. ATUALIZAÇÃO DE ARQUIVOS
  // ═══════════════════════════════════════════════════════════════

  async updateFiles() {
    console.log('\n📝 Atualizando arquivos...\n');

    // 1. Atualizar flags nos cases
    for (const caseData of this.cases) {
      const scores = this.analysis.scores[caseData.id] || [];
      const maxScore = Math.max(...scores.map(s => s.score), 0);

      let newIsTopCase = false;
      let newIsGoodCase = false;

      if (maxScore >= CONFIG.TOPCASE_THRESHOLD) {
        newIsTopCase = true;
        newIsGoodCase = true;
      } else if (maxScore >= CONFIG.GOODCASE_THRESHOLD) {
        newIsGoodCase = true;
      }

      // Atualizar arquivo do case
      if (caseData.isTopCase !== newIsTopCase || caseData.isGoodCase !== newIsGoodCase) {
        this.updateCaseFile(caseData, newIsTopCase, newIsGoodCase);
        console.log(`  ✅ ${caseData.id}: isTopCase=${newIsTopCase}, isGoodCase=${newIsGoodCase}`);
      }
    }

    // 2. Atualizar questionsToCasesMapping.js
    this.updateMappingFile();

    console.log('\n✅ Arquivos atualizados com sucesso!\n');
  }

  updateCaseFile(caseData, newIsTopCase, newIsGoodCase) {
    const filePath = caseData._filePath;
    let content = fs.readFileSync(filePath, 'utf-8');

    // Substituir isTopCase
    content = content.replace(
      /isTopCase:\s*(true|false)/,
      `isTopCase: ${newIsTopCase}`
    );

    // Substituir isGoodCase
    content = content.replace(
      /isGoodCase:\s*(true|false)/,
      `isGoodCase: ${newIsGoodCase}`
    );

    fs.writeFileSync(filePath, content, 'utf-8');
  }

  updateMappingFile() {
    const mappingPath = path.join(ROOT_DIR, 'src', 'data', 'questionsToCasesMapping.js');
    let content = fs.readFileSync(mappingPath, 'utf-8');

    // Limpar componentes internos (_components)
    const cleanMapping = {};
    for (const [qIndex, data] of Object.entries(this.newMapping)) {
      cleanMapping[qIndex] = {
        options: data.options.map(({ caseId, score }) => ({ caseId, score }))
      };
    }

    // Encontrar e substituir seção do LP
    const lpRegex = new RegExp(
      `"${this.principleId}":\\s*\\{[\\s\\S]*?\\n  \\}(?=,\\n  "|\\n\\};)`,
      'g'
    );

    const newLPSection = `"${this.principleId}": ${JSON.stringify(cleanMapping, null, 2)
      .split('\n')
      .map((line, idx) => idx === 0 ? line : '  ' + line)
      .join('\n')}`;

    content = content.replace(lpRegex, newLPSection);

    fs.writeFileSync(mappingPath, content, 'utf-8');
    console.log(`  ✅ Atualizado questionsToCasesMapping.js (${this.principleId})`);
  }

  // ═══════════════════════════════════════════════════════════════
  // 13. RELATÓRIO
  // ═══════════════════════════════════════════════════════════════

  printReport() {
    const { ties, saturatedCases, gaps, rebalancing, scores } = this.analysis;

    console.log('\n╔═══════════════════════════════════════════════════════════════╗');
    console.log(`║  LP HARMONY ANALYZER - ${this.principleId.toUpperCase().padEnd(42)} ║`);
    console.log('╚═══════════════════════════════════════════════════════════════╝\n');

    // Estatísticas gerais
    console.log('📊 ESTATÍSTICAS GERAIS');
    console.log('━'.repeat(65));
    console.log(`Total de Perguntas: ${this.questions.length}`);
    console.log(`Total de Cases: ${this.cases.length}`);

    const coveredQuestions = Object.values(this.newMapping).filter(d => d.options.length > 0).length;
    const coverage = this.questions.length > 0
      ? ((coveredQuestions / this.questions.length) * 100).toFixed(1)
      : '0.0';
    console.log(`Taxa de Cobertura: ${coverage}% (${coveredQuestions}/${this.questions.length} perguntas cobertas)\n`);

    // Distribuição de scores
    console.log('🎯 DISTRIBUIÇÃO DE SCORES');
    console.log('━'.repeat(65));
    let topCaseCount = 0, goodCaseCount = 0, acceptableCount = 0;

    for (const data of Object.values(this.newMapping)) {
      for (const opt of data.options) {
        if (opt.score >= CONFIG.TOPCASE_THRESHOLD) topCaseCount++;
        else if (opt.score >= CONFIG.GOODCASE_THRESHOLD) goodCaseCount++;
        else if (opt.score >= CONFIG.ACCEPTABLE_THRESHOLD) acceptableCount++;
      }
    }

    const total = topCaseCount + goodCaseCount + acceptableCount;
    if (total > 0) {
      console.log(`TopCase (95-100):    ${topCaseCount} mapeamentos (${((topCaseCount/total)*100).toFixed(0)}%)`);
      console.log(`GoodCase (90-94):    ${goodCaseCount} mapeamentos (${((goodCaseCount/total)*100).toFixed(0)}%)`);
      console.log(`Acceptable (80-89):  ${acceptableCount} mapeamentos (${((acceptableCount/total)*100).toFixed(0)}%)\n`);
    } else {
      console.log(`Nenhum mapeamento encontrado (0 cases com score ≥80)\n`);
    }

    // Alertas de saturação
    if (saturatedCases.length > 0) {
      console.log('⚠️  ALERTAS DE SATURAÇÃO (Cases Canivete Suíço)');
      console.log('━'.repeat(65));
      for (const item of saturatedCases) {
        const icon = item.severity === 'CRITICAL' ? '❌' : '⚠️ ';
        console.log(`${icon} ${item.caseId} responde ${item.questionsAnswered}/${item.totalQuestions} perguntas`);

        if (item.questionsAnswered >= 9) {
          console.log(`   → SUGESTÃO: Reduzir para 6-8 perguntas (remover scores mais baixos)\n`);
        }
      }
    }

    // Empates
    if (ties.length > 0) {
      console.log('🔄 EMPATES DETECTADOS E RESOLVIDOS');
      console.log('━'.repeat(65));
      for (const tie of ties) {
        console.log(`Q${tie.questionIndex}: ${tie.cases.length} cases empatados com score ${tie.score}`);
        tie.cases.forEach((caseId, idx) => {
          const icon = idx === 0 ? '🥇' : `  ${idx + 1}º`;
          const questionsCount = this.countQuestionsAnsweredByCase(caseId);
          const fupsCount = this.cases.find(c => c.id === caseId)?.fups?.length || 0;
          console.log(`  ${icon} ${caseId} (especialização: ${questionsCount}Q, FUPs: ${fupsCount})`);
        });
        console.log(`  ✅ Vencedor: ${tie.winner}\n`);
      }
    }

    // Rebalanceamento
    if (rebalancing.length > 0) {
      console.log('🔀 REBALANCEAMENTO APLICADO (Regra de Máximo 4 Primary Questions)');
      console.log('━'.repeat(65));
      for (const item of rebalancing) {
        console.log(`Q${item.questionIndex}:`);
        console.log(`  ❌ Primary anterior: ${item.previousPrimary} (score ${item.previousScore})`);
        console.log(`  ✅ Nova primary: ${item.newPrimary} (score ${item.newScore})`);
        console.log(`  📝 Motivo: ${item.reason}\n`);
      }
    }

    // Gaps
    if (gaps.length > 0) {
      console.log('⚠️  GAPS E COBERTURAS FRACAS');
      console.log('━'.repeat(65));
      for (const gap of gaps) {
        const icon = gap.severity === 'CRITICAL' ? '❌' : '⚠️ ';
        console.log(`${icon} Q${gap.questionIndex}: ${gap.message}`);
        if (gap.caseId) {
          console.log(`   Case: ${gap.caseId} (score ${gap.score})`);
        }
        console.log();
      }
    }

    // Score de harmonia
    const harmonyScore = this.calculateHarmonyScore();
    console.log('✨ SCORE DE HARMONIA GERAL');
    console.log('━'.repeat(65));
    console.log(`${harmonyScore}/100 pontos`);

    if (harmonyScore >= 90) console.log('🎉 Excelente! LP muito bem balanceado.\n');
    else if (harmonyScore >= 75) console.log('✅ Bom! Alguns ajustes recomendados.\n');
    else if (harmonyScore >= 60) console.log('⚠️  Razoável. Rebalanceamento necessário.\n');
    else console.log('❌ Crítico. Rebalanceamento urgente necessário.\n');
  }

  calculateHarmonyScore() {
    let score = 100;

    // Penalizar gaps críticos
    const criticalGaps = this.analysis.gaps.filter(g => g.severity === 'CRITICAL').length;
    score -= criticalGaps * 15;

    // Penalizar gaps de warning
    const warningGaps = this.analysis.gaps.filter(g => g.severity === 'WARNING').length;
    score -= warningGaps * 5;

    // Penalizar saturação crítica
    const criticalSaturation = this.analysis.saturatedCases.filter(s => s.severity === 'CRITICAL').length;
    score -= criticalSaturation * 10;

    // Penalizar saturação warning
    const warningSaturation = this.analysis.saturatedCases.filter(s => s.severity === 'WARNING').length;
    score -= warningSaturation * 5;

    // Bonificar boa distribuição
    if (this.questions.length > 0) {
      const avgCasesPerQuestion = Object.values(this.newMapping)
        .map(d => d.options.length)
        .reduce((a, b) => a + b, 0) / this.questions.length;

      if (avgCasesPerQuestion >= 3) score += 5;
    }

    return Math.max(0, Math.min(100, score));
  }

  // ═══════════════════════════════════════════════════════════════
  // HELPERS
  // ═══════════════════════════════════════════════════════════════

  extractKeywords(text) {
    // Remover stopwords e extrair keywords relevantes
    const stopwords = ['a', 'o', 'de', 'da', 'do', 'em', 'um', 'uma', 'para', 'com', 'que', 'você', 'foi', 'uma', 'vez', 'sobre', 'quando', 'como'];

    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopwords.includes(word))
      .slice(0, 10); // Top 10 keywords
  }
}

// ═══════════════════════════════════════════════════════════════
// CLI
// ═══════════════════════════════════════════════════════════════

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const principleId = args[1];

  if (!command) {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║            LP HARMONY ANALYZER v2.0 - HELP                    ║
╚═══════════════════════════════════════════════════════════════╝

Uso:
  node scripts/lp-harmony.mjs analyze <principle_id>
  node scripts/lp-harmony.mjs rebalance <principle_id>
  node scripts/lp-harmony.mjs analyze-all

Exemplos:
  node scripts/lp-harmony.mjs analyze ownership
  node scripts/lp-harmony.mjs rebalance customer_obsession
  node scripts/lp-harmony.mjs analyze-all

Comandos:
  analyze     - Analisa o LP mas NÃO atualiza arquivos
  rebalance   - Analisa E atualiza arquivos automaticamente
  analyze-all - Analisa todos os LPs (sem atualizar)
    `);
    process.exit(0);
  }

  if (command === 'analyze-all') {
    const allLPs = [
      'customer_obsession', 'ownership', 'invent_simplify',
      'are_right_a_lot', 'learn_be_curious', 'hire_develop_best',
      'insist_highest_standards', 'think_big', 'bias_for_action',
      'frugality', 'earn_trust', 'dive_deep',
      'have_backbone', 'deliver_results', 'strive_to_be_earths_best_employer',
      'success_and_scale_bring_broad_responsibility'
    ];

    for (const lp of allLPs) {
      try {
        console.log(`\n${'='.repeat(65)}`);
        console.log(`Analisando: ${lp}`);
        console.log('='.repeat(65));

        const analyzer = new LPHarmonyAnalyzer(lp);
        await analyzer.loadData();
        await analyzer.analyze();
        analyzer.printReport();
      } catch (error) {
        console.error(`❌ Erro ao analisar ${lp}: ${error.message}`);
      }
    }
    return;
  }

  if (!principleId) {
    console.error('❌ Erro: Você precisa especificar o principle_id');
    console.log('Exemplo: node scripts/lp-harmony.mjs analyze ownership');
    process.exit(1);
  }

  try {
    const analyzer = new LPHarmonyAnalyzer(principleId);
    await analyzer.loadData();
    await analyzer.analyze();
    analyzer.printReport();

    if (command === 'rebalance') {
      await analyzer.updateFiles();
      console.log('✅ Rebalanceamento concluído com sucesso!');
    } else {
      console.log('ℹ️  Modo somente leitura. Use "rebalance" para atualizar arquivos.');
    }

  } catch (error) {
    console.error(`❌ Erro: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
