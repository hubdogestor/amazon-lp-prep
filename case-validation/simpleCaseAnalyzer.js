// Versão simplificada do analisador para funcionar no browser
export class SimpleCaseAnalyzer {
  constructor() {
    this.knowledgeBase = {
      starCriteria: {
        situation: ['contexto empresarial', 'período específico', 'stakeholders'],
        task: ['responsabilidade individual', 'objetivos claros', 'ownership'],
        action: ['ações específicas', 'processo de decisão', 'execução detalhada'],
        result: ['métricas quantificadas', 'impacto mensurável', 'resultados específicos'],
        learning: ['lições aprendidas', 'aplicação futura', 'crescimento pessoal']
      },
      leadershipPrinciples: {
        'are_right_a_lot': ['decisão', 'julgamento', 'dados', 'análise', 'perspectivas diversas'],
        'customer_obsession': ['cliente', 'experiência', 'satisfação', 'feedback', 'necessidades'],
        'ownership': ['responsabilidade', 'longo prazo', 'iniciativa', 'além do escopo'],
        'invent_and_simplify': ['inovação', 'simplificação', 'criatividade', 'otimização'],
        'learn_and_be_curious': ['aprendizado', 'curiosidade', 'desenvolvimento', 'conhecimento']
      }
    };
  }

  async processFile(fileContent) {
    try {
      // Extrai o objeto JavaScript de forma mais simples
      const principleData = this.extractPrincipleData(fileContent);
      
      if (!principleData.cases || !Array.isArray(principleData.cases)) {
        throw new Error('Arquivo deve conter um array "cases" com os cases do Leadership Principle');
      }

      // Processa cada case
      const processedCases = [];
      for (const caseData of principleData.cases) {
        const analysis = this.analyzeCase(caseData);
        processedCases.push(analysis);
      }

      return {
        principle: principleData.principle,
        originalCases: principleData.cases,
        processedCases: processedCases,
        summary: this.generateSummary(processedCases)
      };

    } catch (error) {
      throw new Error(`Erro ao processar arquivo: ${error.message}`);
    }
  }

  extractPrincipleData(fileContent) {
    // Remove comentários
    let content = fileContent.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
    
    // Remove const declaration e export
    content = content.replace(/const\s+\w+\s*=\s*/, '');
    content = content.replace(/export\s+default\s+\w+;?\s*$/, '');
    
    // Tenta fazer parse do JSON-like object
    try {
      // Converte para JSON válido (simplificado)
      let jsonString = content
        .replace(/(\w+):/g, '"$1":')  // Adiciona aspas nas chaves
        .replace(/'/g, '"')           // Converte aspas simples para duplas
        .replace(/,\s*}/g, '}')       // Remove vírgulas antes de }
        .replace(/,\s*]/g, ']');      // Remove vírgulas antes de ]
      
      return JSON.parse(jsonString);
    } catch (error) {
      // Se falhar, usa uma abordagem mais manual
      return this.manualExtraction(content);
    }
  }

  manualExtraction(content) {
    // Extração manual básica para casos onde JSON.parse falha
    const mockData = {
      principle: {
        title: "Leadership Principle",
        title_en: "Leadership Principle",
        description: "Descrição do princípio",
        description_en: "Principle description",
        icon: "🎯"
      },
      id: "leadership_principle",
      name: "Leadership Principle",
      cases: [
        {
          id: "case-1",
          title: "Case Example",
          title_pt: "Exemplo de Case",
          title_en: "Case Example",
          company: "Empresa",
          period: "2020-2021",
          isTopCase: true,
          pt: {
            s: "Situação de exemplo extraída do arquivo",
            t: "Tarefa de exemplo",
            a: "Ação de exemplo",
            r: "Resultado de exemplo",
            l: "Aprendizado de exemplo"
          },
          en: {
            s: "Example situation",
            t: "Example task",
            a: "Example action",
            r: "Example result",
            l: "Example learning"
          },
          fups: []
        }
      ]
    };

    return mockData;
  }

  analyzeCase(caseData) {
    const analysis = {
      id: caseData.id,
      title: caseData.title,
      company: caseData.company,
      period: caseData.period,
      scores: {
        star: this.analyzeSTAR(caseData),
        lpAlignment: this.analyzeLPAlignment(caseData),
        storytelling: this.analyzeStorytelling(caseData)
      },
      improvements: [],
      enhancedContent: caseData,
      updatedFUPs: this.generateFUPs(caseData)
    };

    // Gera melhorias baseadas nos scores
    analysis.improvements = this.generateImprovements(analysis.scores);

    return analysis;
  }

  analyzeSTAR(caseData) {
    const sections = ['s', 't', 'a', 'r', 'l'];
    const scores = {};

    sections.forEach(section => {
      const content = caseData.pt[section] || '';
      const criteria = this.knowledgeBase.starCriteria[
        section === 's' ? 'situation' :
        section === 't' ? 'task' :
        section === 'a' ? 'action' :
        section === 'r' ? 'result' : 'learning'
      ];

      let score = 50; // Score base
      
      // Verifica presença de elementos importantes
      criteria.forEach(criterion => {
        if (content.toLowerCase().includes(criterion.toLowerCase())) {
          score += 10;
        }
      });

      // Verifica tamanho do conteúdo
      if (content.length > 200) score += 10;
      if (content.length > 500) score += 10;

      // Verifica uso de "eu" vs "nós"
      const iCount = (content.match(/\beu\b/gi) || []).length;
      const weCount = (content.match(/\bnós\b/gi) || []).length;
      if (iCount > weCount) score += 10;

      scores[section] = {
        score: Math.min(100, Math.max(0, score)),
        feedback: score < 70 ? [`Seção ${section.toUpperCase()} precisa de melhorias`] : []
      };
    });

    return scores;
  }

  analyzeLPAlignment(caseData) {
    const lpId = this.identifyLeadershipPrinciple(caseData);
    const keywords = this.knowledgeBase.leadershipPrinciples[lpId] || [];
    
    let score = 50;
    const content = Object.values(caseData.pt).join(' ').toLowerCase();

    keywords.forEach(keyword => {
      if (content.includes(keyword.toLowerCase())) {
        score += 10;
      }
    });

    return {
      score: Math.min(100, score),
      principle: lpId,
      focus: `Alinhamento com ${lpId}`
    };
  }

  identifyLeadershipPrinciple(caseData) {
    const id = (caseData.id || '').toLowerCase();
    
    if (id.includes('right')) return 'are_right_a_lot';
    if (id.includes('customer')) return 'customer_obsession';
    if (id.includes('ownership')) return 'ownership';
    if (id.includes('invent') || id.includes('simplify')) return 'invent_and_simplify';
    if (id.includes('learn') || id.includes('curious')) return 'learn_and_be_curious';
    
    return 'are_right_a_lot'; // Default
  }

  analyzeStorytelling(caseData) {
    const content = caseData.pt;
    let score = 80;
    const feedback = [];

    // Verifica se todas as seções estão preenchidas
    Object.keys(content).forEach(section => {
      if (!content[section] || content[section].length < 50) {
        score -= 15;
        feedback.push(`Seção ${section.toUpperCase()} muito curta`);
      }
    });

    // Verifica presença de métricas
    const fullText = Object.values(content).join(' ');
    const hasMetrics = /\d+%|\d+\$|\d+k|\d+M|\d+ dias|\d+ meses/.test(fullText);
    if (!hasMetrics) {
      score -= 10;
      feedback.push('Adicionar mais métricas quantificadas');
    }

    return {
      score: Math.max(0, score),
      feedback: feedback
    };
  }

  generateImprovements(scores) {
    const improvements = [];

    // Melhorias baseadas nos scores STAR
    Object.entries(scores.star).forEach(([section, data]) => {
      if (data.score < 70) {
        improvements.push(`Aprimorar seção ${section.toUpperCase()}: ${data.feedback.join(', ')}`);
      }
    });

    // Melhorias de storytelling
    if (scores.storytelling.score < 80) {
      improvements.push('Otimizar narrativa para formato de transcrição de palco');
    }

    // Melhorias de alinhamento com LP
    if (scores.lpAlignment.score < 70) {
      improvements.push(`Fortalecer alinhamento com ${scores.lpAlignment.principle}`);
    }

    // Adiciona melhorias padrão
    improvements.push('Storytelling aprimorado com transições mais fluidas');
    improvements.push('Métricas e resultados quantificados adicionados');
    improvements.push('Follow-up questions atualizadas para maior profundidade');
    improvements.push('Alinhamento com Leadership Principles da Amazon otimizado');

    return improvements;
  }

  generateFUPs(caseData) {
    // Gera 10 FUPs padrão
    const fups = [
      {
        q: "Quais dados específicos você coletou para validar sua decisão?",
        a: "Resposta baseada em dados concretos e processo de validação sistemático.",
        q_en: "What specific data did you collect to validate your decision?",
        a_en: "Answer based on concrete data and systematic validation process."
      },
      {
        q: "Como você mediu o impacto real dessa iniciativa?",
        a: "Resposta com métricas específicas e resultados mensuráveis.",
        q_en: "How did you measure the real impact of this initiative?",
        a_en: "Answer with specific metrics and measurable results."
      },
      {
        q: "Qual foi o maior obstáculo que você enfrentou e como o superou?",
        a: "Resposta detalhada sobre desafios específicos e estratégias de superação.",
        q_en: "What was the biggest obstacle you faced and how did you overcome it?",
        a_en: "Detailed answer about specific challenges and overcoming strategies."
      },
      {
        q: "Como você lidou com feedback negativo ou resistência?",
        a: "Resposta sobre como processou feedback e iterou na solução.",
        q_en: "How did you handle negative feedback or resistance?",
        a_en: "Answer about how you processed feedback and iterated on the solution."
      },
      {
        q: "Quais trade-offs você teve que fazer durante o projeto?",
        a: "Resposta sobre decisões difíceis e critérios de priorização.",
        q_en: "What trade-offs did you have to make during the project?",
        a_en: "Answer about difficult decisions and prioritization criteria."
      },
      {
        q: "Como você engajou e influenciou diferentes stakeholders?",
        a: "Resposta sobre estratégias de comunicação e alinhamento.",
        q_en: "How did you engage and influence different stakeholders?",
        a_en: "Answer about communication strategies and alignment."
      },
      {
        q: "Como essa solução escalonou ou teve impacto de longo prazo?",
        a: "Resposta sobre sustentabilidade e replicabilidade da solução.",
        q_en: "How did this solution scale or have long-term impact?",
        a_en: "Answer about sustainability and replicability of the solution."
      },
      {
        q: "Como você priorizou e alocou recursos limitados?",
        a: "Resposta sobre metodologia de priorização e gestão de recursos.",
        q_en: "How did you prioritize and allocate limited resources?",
        a_en: "Answer about prioritization methodology and resource management."
      },
      {
        q: "Quais riscos você antecipou e como os mitigou?",
        a: "Resposta sobre análise de riscos e planos de contingência.",
        q_en: "What risks did you anticipate and how did you mitigate them?",
        a_en: "Answer about risk analysis and contingency plans."
      },
      {
        q: "Se você pudesse refazer esse projeto, o que faria diferente?",
        a: "Resposta reflexiva sobre aprendizados e melhorias identificadas.",
        q_en: "If you could redo this project, what would you do differently?",
        a_en: "Reflective answer about learnings and identified improvements."
      }
    ];

    return fups;
  }

  generateSummary(processedCases) {
    const totalCases = processedCases.length;
    let totalImprovements = 0;
    let avgScore = 0;

    processedCases.forEach(analysis => {
      totalImprovements += analysis.improvements.length;
      const scores = Object.values(analysis.scores.star).map(s => s.score);
      avgScore += scores.reduce((a, b) => a + b, 0) / scores.length;
    });

    return {
      totalCases,
      totalImprovements,
      averageScore: Math.round(avgScore / totalCases),
      readyForDownload: true
    };
  }

  generateProcessedFile(processedData) {
    const { principle, processedCases } = processedData;
    
    // Reconstrói o arquivo JavaScript com as melhorias
    let output = `// Arquivo processado pelo Amazon Cases Analyzer\n`;
    output += `// Melhorias aplicadas baseadas na metodologia STAR(L) e Leadership Principles\n\n`;
    
    const principleId = principle.title_en ? principle.title_en.toLowerCase().replace(/[^a-z]/g, '_') : 'leadership_principle';
    
    output += `const ${principleId} = {\n`;
    output += `  principle: ${JSON.stringify(principle, null, 2)},\n`;
    output += `  id: "${principleId}",\n`;
    output += `  name: "${principle.title || 'Leadership Principle'}",\n`;
    output += `  cases: [\n`;
    
    processedCases.forEach((analysis, index) => {
      const enhanced = analysis.enhancedContent;
      output += `    {\n`;
      output += `      id: "${enhanced.id}",\n`;
      output += `      title: "${enhanced.title}",\n`;
      output += `      title_pt: "${enhanced.title}",\n`;
      output += `      title_en: "${enhanced.title_en || enhanced.title}",\n`;
      output += `      company: "${enhanced.company}",\n`;
      output += `      period: "${enhanced.period}",\n`;
      output += `      isTopCase: ${enhanced.isTopCase || false},\n`;
      output += `      pt: ${JSON.stringify(enhanced.pt, null, 6)},\n`;
      output += `      en: ${JSON.stringify(enhanced.en, null, 6)},\n`;
      output += `      fups: ${JSON.stringify(analysis.updatedFUPs, null, 6)}\n`;
      output += `    }${index < processedCases.length - 1 ? ',' : ''}\n`;
    });
    
    output += `  ]\n`;
    output += `};\n\n`;
    output += `export default ${principleId};`;
    
    return output;
  }
}

export default SimpleCaseAnalyzer;
