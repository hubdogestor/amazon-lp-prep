#!/usr/bin/env node

/**
 * 🤖 SEMANTIC ANALYZER - AI-POWERED CASE ANALYSIS
 * Análise semântica programática baseada nos critérios do LP Harmony AI
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const CACHE_FILE = path.join(__dirname, '.lp-harmony-cache.json');

// Critérios de avaliação
const CRITERIA = {
  RELEVANCE: {
    PERFECT: 30,      // Conceito central do case = pergunta
    EXCELLENT: 26,    // Conceito central fortemente relacionado
    GOOD: 22,         // Conceito presente mas não central
    PARTIAL: 18,      // Conceito mencionado mas secundário
    TANGENTIAL: 12,   // Conceito indireto
    NONE: 0          // Não responde
  },
  DEPTH: {
    COMPLETE: 30,     // STAR-L completo + métricas + aprendizados profundos
    STRONG: 26,       // STAR-L completo + métricas
    GOOD: 22,         // STAR bom mas Learning superficial
    BASIC: 18,        // STAR presente mas genérico
    INCOMPLETE: 12,   // STAR incompleto
    NONE: 0          // Não fornece resposta adequada
  },
  EVIDENCE: {
    COMPREHENSIVE: 30, // Métricas concretas + impacto quantificado + comparações
    STRONG: 26,       // Métricas concretas + impacto quantificado
    GOOD: 22,         // Algumas métricas + impacto descrito
    BASIC: 18,        // Métricas vagas ou impacto não quantificado
    MINIMAL: 12,      // Pouquíssimas evidências
    NONE: 0          // Sem evidências
  }
};

/**
 * Análise semântica programática
 */
class SemanticAnalyzer {
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

  /**
   * Analisa relevância conceitual entre pergunta e case
   */
  analyzeRelevance(question, caseData) {
    const questionText = question.toLowerCase();
    const caseTitle = caseData.title_pt?.toLowerCase() || '';
    const caseSituation = caseData.pt?.s?.toLowerCase() || '';
    const caseTask = caseData.pt?.t?.toLowerCase() || '';
    const caseAction = caseData.pt?.a?.toLowerCase() || '';
    const caseResult = caseData.pt?.r?.toLowerCase() || '';
    const caseLearning = caseData.pt?.l?.toLowerCase() || '';

    const caseContent = [caseTitle, caseSituation, caseTask, caseAction, caseResult, caseLearning].join(' ');

    // Palavras-chave relacionadas ao Best Employer
    const employerKeywords = [
      'equipe', 'time', 'pessoa', 'empregado', 'colaborador', 'talento', 'desenvolvimento',
      'crescimento', 'feedback', 'performance', 'sucessão', 'liderança', 'carreira',
      'bem-estar', 'engajamento', 'cultura', 'ambiente', 'trabalho', 'profissional'
    ];

    // Verificar se a pergunta contém conceitos de Best Employer
    const hasEmployerConcept = employerKeywords.some(keyword =>
      questionText.includes(keyword) || caseContent.includes(keyword)
    );

    if (!hasEmployerConcept) return CRITERIA.RELEVANCE.NONE;

    // Análise de centralidade
    const employerMentions = employerKeywords.filter(keyword =>
      caseContent.includes(keyword)
    ).length;

    // Se o conceito é central no case (mencionado em título ou seções principais)
    if (caseTitle.includes('feedback') || caseTitle.includes('equipe') || caseTitle.includes('desenvolvimento')) {
      return CRITERIA.RELEVANCE.PERFECT;
    }

    // Se mencionado em múltiplas seções
    if (employerMentions >= 3) {
      return CRITERIA.RELEVANCE.EXCELLENT;
    }

    // Se mencionado em algumas seções
    if (employerMentions >= 2) {
      return CRITERIA.RELEVANCE.GOOD;
    }

    // Se mencionado mas não central
    if (employerMentions >= 1) {
      return CRITERIA.RELEVANCE.PARTIAL;
    }

    return CRITERIA.RELEVANCE.TANGENTIAL;
  }

  /**
   * Analisa profundidade da resposta (STAR-L)
   */
  analyzeDepth(caseData) {
    const sections = {
      s: caseData.pt?.s || '',
      t: caseData.pt?.t || '',
      a: caseData.pt?.a || '',
      r: caseData.pt?.r || '',
      l: caseData.pt?.l || ''
    };

    // Verificar completude das seções STAR-L
    const hasS = sections.s.length > 50;
    const hasT = sections.t.length > 50;
    const hasA = sections.a.length > 100;
    const hasR = sections.r.length > 100;
    const hasL = sections.l.length > 50;

    const starComplete = hasS && hasT && hasA && hasR;
    const learningPresent = hasL;

    // Verificar presença de métricas
    const hasMetrics = /\d+%|\d+\s*%|R\$\s*\d|reduziu|subiu|aumentou|diminuiu|de\s+\d+\s+para\s+\d+/i.test(
      [sections.a, sections.r].join(' ')
    );

    // Verificar aprendizados profundos
    const hasDeepLearning = sections.l.length > 100 && (
      sections.l.includes('aprendi') ||
      sections.l.includes('descobri') ||
      sections.l.includes('entendi') ||
      sections.l.includes('lição')
    );

    if (starComplete && learningPresent && hasMetrics && hasDeepLearning) {
      return CRITERIA.DEPTH.COMPLETE;
    }

    if (starComplete && hasMetrics) {
      return CRITERIA.DEPTH.STRONG;
    }

    if (starComplete) {
      return CRITERIA.DEPTH.GOOD;
    }

    if (hasS && hasT && hasA) {
      return CRITERIA.DEPTH.BASIC;
    }

    if (hasS || hasT || hasA) {
      return CRITERIA.DEPTH.INCOMPLETE;
    }

    return CRITERIA.DEPTH.NONE;
  }

  /**
   * Analisa evidências e métricas
   */
  analyzeEvidence(caseData) {
    const content = [
      caseData.pt?.a || '',
      caseData.pt?.r || '',
      caseData.pt?.l || ''
    ].join(' ');

    // Padrões de métricas concretas
    const concreteMetrics = [
      /\b\d{1,3}%\b/g,  // Percentuais
      /R\$\s*\d[\d.,]*/g,  // Valores em reais
      /\b\d+\s*(?:pessoas?|usuários?|clientes?|equipes?)\b/gi,  // Contagens
      /\bde\s+\d+\s+para\s+\d+/gi,  // Comparações antes/depois
      /\baumentou\s+\d+%/gi,  // Aumentos percentuais
      /\breduziu\s+\d+%/gi,  // Reduções percentuais
      /\b\d+\s*(?:dias?|meses?|anos?)\b/gi  // Períodos de tempo
    ];

    let concreteCount = 0;
    concreteMetrics.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) concreteCount += matches.length;
    });

    // Verificar comparações antes/depois
    const hasComparisons = /de\s+\d+\s+para\s+\d+|subiu\s+de\s+|caiu\s+de\s+|aumentou\s+\d+%|diminuiu\s+\d+%/gi.test(content);

    // Verificar impacto quantificado
    const hasQuantifiedImpact = /\d+%|\d+\s*(?:reais?|pessoas?|clientes?)/gi.test(content);

    if (concreteCount >= 3 && hasComparisons && hasQuantifiedImpact) {
      return CRITERIA.EVIDENCE.COMPREHENSIVE;
    }

    if (concreteCount >= 2 && hasQuantifiedImpact) {
      return CRITERIA.EVIDENCE.STRONG;
    }

    if (concreteCount >= 1 || hasQuantifiedImpact) {
      return CRITERIA.EVIDENCE.GOOD;
    }

    if (concreteCount === 0 && hasQuantifiedImpact) {
      return CRITERIA.EVIDENCE.BASIC;
    }

    if (concreteCount === 0) {
      return CRITERIA.EVIDENCE.MINIMAL;
    }

    return CRITERIA.EVIDENCE.NONE;
  }

  /**
   * Analisa uma combinação pergunta × case
   */
  analyzeCombination(question, caseData, cacheKey) {
    const relevance = this.analyzeRelevance(question, caseData);
    const depth = this.analyzeDepth(caseData);
    const evidence = this.analyzeEvidence(caseData);

    const scoreBase = relevance + depth + evidence;

    // Gerar reasoning baseado na análise
    let reasoning = '';

    if (relevance >= CRITERIA.RELEVANCE.EXCELLENT) {
      reasoning += 'Conceito central de desenvolvimento de equipe/liderança alinhado perfeitamente. ';
    } else if (relevance >= CRITERIA.RELEVANCE.GOOD) {
      reasoning += 'Conceito de desenvolvimento profissional presente mas não central. ';
    } else {
      reasoning += 'Conceito de desenvolvimento não é central no case. ';
    }

    if (depth >= CRITERIA.DEPTH.STRONG) {
      reasoning += 'STAR-L completo com métricas concretas. ';
    } else if (depth >= CRITERIA.DEPTH.GOOD) {
      reasoning += 'STAR estruturado mas métricas limitadas. ';
    } else {
      reasoning += 'STAR incompleto ou superficial. ';
    }

    if (evidence >= CRITERIA.EVIDENCE.STRONG) {
      reasoning += 'Evidências quantitativas robustas com comparações.';
    } else if (evidence >= CRITERIA.EVIDENCE.GOOD) {
      reasoning += 'Algumas métricas presentes.';
    } else {
      reasoning += 'Falta evidências quantitativas.';
    }

    return {
      cacheKey,
      relevance,
      depth,
      evidence,
      scoreBase,
      reasoning: reasoning.trim()
    };
  }

  /**
   * Processa todas as combinações para um LP
   */
  processLP(lpData) {
    const { principleId, cases, questions } = lpData;
    const results = [];

    console.log(`\n🤖 ANALISANDO ${principleId.toUpperCase()}`);
    console.log(`📊 ${cases.length} cases × ${questions.length} perguntas = ${cases.length * questions.length} combinações\n`);

    for (const question of questions) {
      for (const caseData of cases) {
        const cacheKey = `${principleId}__Q${question.index}__${caseData.id}`;

        // Pular se já analisado
        if (this.cache[cacheKey]) {
          console.log(`⏭️  ${cacheKey} - Já analisado`);
          continue;
        }

        console.log(`🔍 Analisando: ${cacheKey}`);

        const analysis = this.analyzeCombination(question.q_pt, caseData, cacheKey);
        results.push(analysis);

        // Salvar no cache
        this.cache[cacheKey] = {
          ...analysis,
          analyzedAt: new Date().toISOString(),
          version: '3.0'
        };
      }
    }

    this.saveCache();
    console.log(`\n✅ Análise completa! ${results.length} combinações processadas.`);

    return results;
  }
}

// Função principal
function main() {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.log('Uso: node semantic-analyzer.mjs <principle_id>');
    console.log('Exemplo: node semantic-analyzer.mjs best_employer');
    process.exit(1);
  }

  const principleId = args[0];
  const analyzer = new SemanticAnalyzer();

  // Carregar dados do LP
  const lpData = analyzer.loadLPData(principleId);
  if (!lpData) {
    console.error(`❌ LP ${principleId} não encontrado`);
    process.exit(1);
  }

  // Processar análise
  analyzer.processLP(lpData);
}

// Método para carregar dados do LP
SemanticAnalyzer.prototype.loadLPData = function(principleId) {
  try {
    // const lpPath = path.join(ROOT_DIR, 'src', 'data', principleId, 'index.js'); // Removido - não usado

    // Extrair dados (simplificado)
    const dataDir = path.join(ROOT_DIR, 'src', 'data', principleId);
    const cases = [];
    const caseFiles = fs.readdirSync(dataDir).filter(f => f.startsWith(`${principleId}_case`) && f.endsWith('.js'));

    for (const file of caseFiles) {
      const filePath = path.join(dataDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const caseMatch = fileContent.match(/const\s+\w+\s*=\s*(\{[\s\S]*?\n\};)/);

      if (caseMatch) {
        const caseObj = eval(`(${caseMatch[1].replace(/\};$/, '}')})`);
        cases.push(caseObj);
      }
    }

    // Carregar perguntas
    const questionsPath = path.join(ROOT_DIR, 'src', 'data', 'typicalQuestions.js');
    const questionsContent = fs.readFileSync(questionsPath, 'utf-8');
    const questionsMatch = questionsContent.match(/const\s+typicalQuestions\s*=\s*(\{[\s\S]*?\n\};)/);

    let questions = [];
    if (questionsMatch) {
      const allQuestions = eval(`(${questionsMatch[1].replace(/\};$/, '}')})`);
      const principleData = allQuestions[principleId];

      if (principleData) {
        questions = (principleData.pt || []).map((q_pt, idx) => ({
          q_pt,
          q_en: (principleData.en || [])[idx] || q_pt,
          index: idx + 1
        }));
      }
    }

    return {
      principleId,
      cases,
      questions
    };

  } catch (error) {
    console.error(`Erro ao carregar dados do LP ${principleId}:`, error.message);
    return null;
  }
};

// Executar se chamado diretamente
main();

export default SemanticAnalyzer;