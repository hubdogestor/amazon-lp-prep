// Sistema de Análise de Cases STAR(L) para Amazon Leadership Principles
// Baseado na base de conhecimento fornecida pelo usuário

export class CaseAnalyzer {
  constructor() {
    this.knowledgeBase = this.initializeKnowledgeBase();
  }

  initializeKnowledgeBase() {
    return {
      // Critérios de avaliação STAR(L)
      starCriteria: {
        situation: {
          required: ['contexto empresarial', 'período/data', 'cenário específico', 'stakeholders envolvidos'],
          quality: ['detalhamento adequado', 'relevância para o LP', 'complexidade apropriada'],
          redFlags: ['muito vago', 'sem contexto temporal', 'irrelevante para o cargo']
        },
        task: {
          required: ['responsabilidade individual', 'escopo claro', 'objetivos mensuráveis'],
          quality: ['ownership explícito', 'desafio apropriado', 'alinhamento com LP'],
          redFlags: ['responsabilidade difusa', 'sem ownership', 'muito simples']
        },
        action: {
          required: ['ações específicas do candidato', 'processo de tomada de decisão', 'execução detalhada'],
          quality: ['foco no "eu fiz"', 'dados que apoiaram decisões', 'liderança demonstrada'],
          redFlags: ['uso de "nós"', 'ações vagas', 'sem processo de decisão']
        },
        result: {
          required: ['métricas quantificadas', 'impacto mensurável', 'resultados específicos'],
          quality: ['números concretos', 'impacto de longo prazo', 'benefícios claros'],
          redFlags: ['sem métricas', 'resultados vagos', 'impacto não mensurável']
        },
        learning: {
          required: ['lições aprendidas', 'aplicação futura', 'crescimento pessoal'],
          quality: ['insights profundos', 'aplicação prática', 'humildade e autocrítica'],
          redFlags: ['aprendizado superficial', 'sem aplicação', 'falta de autocrítica']
        }
      },

      // Princípios de Leadership da Amazon
      leadershipPrinciples: {
        'customer_obsession': {
          keywords: ['cliente', 'customer', 'experiência', 'satisfação', 'feedback', 'necessidades'],
          focus: 'Demonstrar obsessão genuína pelo cliente, trabalhando backwards das necessidades'
        },
        'ownership': {
          keywords: ['responsabilidade', 'ownership', 'longo prazo', 'além do escopo', 'iniciativa'],
          focus: 'Mostrar pensamento de dono, responsabilidade ampla e visão de longo prazo'
        },
        'invent_and_simplify': {
          keywords: ['inovação', 'simplificação', 'criatividade', 'otimização', 'eficiência'],
          focus: 'Evidenciar inovação que simplifica processos ou resolve problemas complexos'
        },
        'are_right_a_lot': {
          keywords: ['decisão', 'julgamento', 'dados', 'análise', 'perspectivas diversas'],
          focus: 'Demonstrar bom julgamento, uso de dados e busca por perspectivas diversas'
        },
        'learn_and_be_curious': {
          keywords: ['aprendizado', 'curiosidade', 'desenvolvimento', 'conhecimento', 'exploração'],
          focus: 'Mostrar sede de aprendizado contínuo e curiosidade para explorar novas possibilidades'
        },
        'hire_and_develop_the_best': {
          keywords: ['contratação', 'desenvolvimento', 'mentoria', 'coaching', 'talento'],
          focus: 'Evidenciar capacidade de identificar, contratar e desenvolver talentos'
        },
        'insist_on_the_highest_standards': {
          keywords: ['qualidade', 'padrões', 'excelência', 'melhoria contínua', 'bar raising'],
          focus: 'Demonstrar insistência em padrões elevados e melhoria contínua'
        },
        'think_big': {
          keywords: ['visão', 'ambição', 'escala', 'transformação', 'impacto'],
          focus: 'Mostrar pensamento ambicioso e capacidade de criar visões inspiradoras'
        },
        'bias_for_action': {
          keywords: ['ação', 'velocidade', 'decisão rápida', 'risco calculado', 'execução'],
          focus: 'Evidenciar capacidade de agir rapidamente com informações limitadas'
        },
        'frugality': {
          keywords: ['recursos', 'eficiência', 'otimização', 'custo', 'resourcefulness'],
          focus: 'Demonstrar capacidade de fazer mais com menos recursos'
        },
        'earn_trust': {
          keywords: ['confiança', 'transparência', 'honestidade', 'feedback', 'relacionamento'],
          focus: 'Mostrar como constrói confiança através de transparência e integridade'
        },
        'dive_deep': {
          keywords: ['análise', 'detalhes', 'investigação', 'causa raiz', 'dados'],
          focus: 'Evidenciar capacidade de mergulhar em detalhes para resolver problemas'
        },
        'have_backbone_disagree_and_commit': {
          keywords: ['discordância', 'convicção', 'compromisso', 'desafio', 'decisão'],
          focus: 'Demonstrar coragem para discordar respeitosamente e comprometer-se com decisões'
        },
        'deliver_results': {
          keywords: ['entrega', 'resultados', 'execução', 'superação', 'obstáculos'],
          focus: 'Mostrar foco em entregar resultados de qualidade apesar dos obstáculos'
        },
        'strive_to_be_earths_best_employer': {
          keywords: ['ambiente de trabalho', 'desenvolvimento', 'diversidade', 'segurança', 'crescimento'],
          focus: 'Evidenciar contribuição para criar ambiente de trabalho excepcional'
        },
        'success_and_scale_bring_broad_responsibility': {
          keywords: ['responsabilidade', 'impacto', 'sustentabilidade', 'comunidade', 'ética'],
          focus: 'Demonstrar consciência do impacto amplo das ações e responsabilidade social'
        }
      },

      // Dicas específicas da base de conhecimento
      amazonTips: {
        storytelling: [
          'Usar formato de transcrição de palco (5 minutos de duração)',
          'Incluir hook de abertura e transições explícitas',
          'Incorporar mic-drop no aprendizado (L)',
          'Focar em "eu fiz" ao invés de "nós fizemos"',
          'Incluir métricas e dados concretos',
          'Demonstrar pensamento de longo prazo',
          'Mostrar obsessão pelo cliente em todos os cases'
        ],
        followUpQuestions: [
          'Perguntas sobre métricas e validação de resultados',
          'Questionamentos sobre feedback negativo e iteração',
          'Exploração de trade-offs e decisões difíceis',
          'Análise de colaboração com stakeholders diversos',
          'Investigação de escalabilidade e impacto de longo prazo',
          'Discussão sobre priorização e gestão de recursos',
          'Avaliação de riscos identificados e mitigação',
          'Análise de dados que guiaram decisões',
          'Reflexão sobre o que mudaria se fizesse novamente',
          'Impacto em outros projetos ou pessoas'
        ]
      },

      // Histórico profissional do Leonardo para validação temporal
      professionalHistory: {
        '2009-2015': 'Huawei',
        '2015-2016': 'HSBC', 
        '2016-2018': 'Bradesco e Banco Digital Next',
        '2018-2021': 'Sicredi e Banco Digital Woop',
        '2021-2024': 'Unimed',
        '2024-2025': 'SEFAZ/RS'
      }
    };
  }

  async analyzeCase(caseData) {
    const analysis = {
      id: caseData.id,
      title: caseData.title,
      company: caseData.company,
      period: caseData.period,
      scores: {},
      improvements: [],
      warnings: [],
      enhancedContent: {},
      updatedFUPs: []
    };

    // Análise STAR(L)
    analysis.scores.star = this.analyzeSTAR(caseData);
    
    // Análise de alinhamento com LP
    analysis.scores.lpAlignment = this.analyzeLPAlignment(caseData);
    
    // Análise de storytelling
    analysis.scores.storytelling = this.analyzeStorytelling(caseData);
    
    // Validação temporal
    analysis.temporalValidation = this.validateTemporal(caseData);
    
    // Geração de melhorias
    analysis.improvements = this.generateImprovements(caseData, analysis.scores);
    
    // Aprimoramento do conteúdo
    analysis.enhancedContent = this.enhanceContent(caseData, analysis.improvements);
    
    // Atualização das FUPs
    analysis.updatedFUPs = this.updateFollowUpQuestions(caseData, analysis);

    return analysis;
  }

  analyzeSTAR(caseData) {
    const scores = {};
    const sections = ['s', 't', 'a', 'r', 'l'];
    
    sections.forEach(section => {
      const content = caseData.pt[section] || '';
      const criteria = this.knowledgeBase.starCriteria[section === 's' ? 'situation' : 
                       section === 't' ? 'task' : 
                       section === 'a' ? 'action' : 
                       section === 'r' ? 'result' : 'learning'];
      
      scores[section] = this.evaluateSection(content, criteria);
    });
    
    return scores;
  }

  evaluateSection(content, criteria) {
    let score = 0;
    const feedback = [];
    
    // Verifica elementos obrigatórios
    criteria.required.forEach(requirement => {
      if (this.containsElement(content, requirement)) {
        score += 20;
      } else {
        feedback.push(`Faltando: ${requirement}`);
      }
    });
    
    // Verifica qualidade
    criteria.quality.forEach(quality => {
      if (this.containsElement(content, quality)) {
        score += 10;
      }
    });
    
    // Penaliza red flags
    criteria.redFlags.forEach(redFlag => {
      if (this.containsElement(content, redFlag)) {
        score -= 15;
        feedback.push(`Red flag: ${redFlag}`);
      }
    });
    
    return {
      score: Math.max(0, Math.min(100, score)),
      feedback: feedback
    };
  }

  containsElement(content, element) {
    // Implementação simplificada - em produção seria mais sofisticada
    const keywords = element.toLowerCase().split(' ');
    const contentLower = content.toLowerCase();
    
    return keywords.some(keyword => contentLower.includes(keyword));
  }

  analyzeLPAlignment(caseData) {
    // Identifica qual LP o case representa
    const lpId = this.identifyLeadershipPrinciple(caseData);
    const lpData = this.knowledgeBase.leadershipPrinciples[lpId];
    
    if (!lpData) return { score: 0, alignment: 'unknown' };
    
    let alignmentScore = 0;
    const content = Object.values(caseData.pt).join(' ').toLowerCase();
    
    // Verifica presença de keywords do LP
    lpData.keywords.forEach(keyword => {
      if (content.includes(keyword.toLowerCase())) {
        alignmentScore += 10;
      }
    });
    
    return {
      score: Math.min(100, alignmentScore),
      principle: lpId,
      focus: lpData.focus
    };
  }

  identifyLeadershipPrinciple(caseData) {
    // Extrai do ID ou título do case
    const id = caseData.id || '';
    
    if (id.includes('customer')) return 'customer_obsession';
    if (id.includes('ownership')) return 'ownership';
    if (id.includes('invent') || id.includes('simplify')) return 'invent_and_simplify';
    if (id.includes('right')) return 'are_right_a_lot';
    if (id.includes('learn') || id.includes('curious')) return 'learn_and_be_curious';
    if (id.includes('hire') || id.includes('develop')) return 'hire_and_develop_the_best';
    if (id.includes('standards')) return 'insist_on_the_highest_standards';
    if (id.includes('think_big')) return 'think_big';
    if (id.includes('bias') || id.includes('action')) return 'bias_for_action';
    if (id.includes('frugality')) return 'frugality';
    if (id.includes('trust')) return 'earn_trust';
    if (id.includes('dive') || id.includes('deep')) return 'dive_deep';
    if (id.includes('backbone') || id.includes('disagree')) return 'have_backbone_disagree_and_commit';
    if (id.includes('deliver') || id.includes('results')) return 'deliver_results';
    if (id.includes('employer')) return 'strive_to_be_earths_best_employer';
    if (id.includes('responsibility')) return 'success_and_scale_bring_broad_responsibility';
    
    return 'unknown';
  }

  analyzeStorytelling(caseData) {
    const content = caseData.pt;
    let score = 100;
    const feedback = [];
    
    // Verifica estrutura de 5 parágrafos
    Object.keys(content).forEach(section => {
      const text = content[section];
      if (!text || text.length < 100) {
        score -= 10;
        feedback.push(`Seção ${section.toUpperCase()} muito curta`);
      }
    });
    
    // Verifica uso de "eu" vs "nós"
    const fullText = Object.values(content).join(' ');
    const weCount = (fullText.match(/\bnós\b/gi) || []).length;
    const iCount = (fullText.match(/\beu\b/gi) || []).length;
    
    if (weCount > iCount) {
      score -= 20;
      feedback.push('Muito uso de "nós" - focar mais no "eu fiz"');
    }
    
    // Verifica presença de métricas
    const hasMetrics = /\d+%|\d+\$|\d+k|\d+M|\d+ dias|\d+ meses/.test(fullText);
    if (!hasMetrics) {
      score -= 15;
      feedback.push('Faltam métricas quantificadas');
    }
    
    return {
      score: Math.max(0, score),
      feedback: feedback
    };
  }

  validateTemporal(caseData) {
    const period = caseData.period;
    const company = caseData.company;
    
    // Verifica se o período e empresa estão alinhados com o histórico
    for (const [periodRange, expectedCompany] of Object.entries(this.knowledgeBase.professionalHistory)) {
      if (period && period.includes(periodRange.split('-')[0])) {
        if (company && !company.toLowerCase().includes(expectedCompany.toLowerCase())) {
          return {
            valid: false,
            warning: `Período ${period} não alinha com empresa ${company}. Esperado: ${expectedCompany}`
          };
        }
      }
    }
    
    return { valid: true };
  }

  generateImprovements(caseData, scores) {
    const improvements = [];
    
    // Melhorias baseadas nos scores STAR
    Object.entries(scores.star).forEach(([section, data]) => {
      if (data.score < 70) {
        improvements.push({
          section: section.toUpperCase(),
          type: 'star_improvement',
          description: `Aprimorar seção ${section.toUpperCase()}: ${data.feedback.join(', ')}`,
          priority: 'high'
        });
      }
    });
    
    // Melhorias de storytelling
    if (scores.storytelling.score < 80) {
      improvements.push({
        section: 'storytelling',
        type: 'storytelling_improvement', 
        description: 'Otimizar narrativa para formato de transcrição de palco',
        priority: 'medium'
      });
    }
    
    // Melhorias de alinhamento com LP
    if (scores.lpAlignment.score < 70) {
      improvements.push({
        section: 'lp_alignment',
        type: 'lp_improvement',
        description: `Fortalecer alinhamento com ${scores.lpAlignment.principle}`,
        priority: 'high'
      });
    }
    
    return improvements;
  }

  enhanceContent(caseData, improvements) {
    const enhanced = JSON.parse(JSON.stringify(caseData));
    
    // Aplica melhorias específicas baseadas na análise
    improvements.forEach(improvement => {
      switch (improvement.type) {
        case 'star_improvement':
          enhanced.pt[improvement.section.toLowerCase()] = this.enhanceSTARSection(
            enhanced.pt[improvement.section.toLowerCase()], 
            improvement.section.toLowerCase()
          );
          break;
        case 'storytelling_improvement':
          enhanced = this.enhanceStorytelling(enhanced);
          break;
        case 'lp_improvement':
          enhanced = this.enhanceLPAlignment(enhanced, improvement);
          break;
      }
    });
    
    return enhanced;
  }

  enhanceSTARSection(content, section) {
    // Implementação simplificada - em produção seria mais sofisticada
    const enhancements = {
      s: 'Contexto empresarial detalhado com período específico e stakeholders envolvidos.',
      t: 'Responsabilidade individual clara com objetivos mensuráveis e escopo definido.',
      a: 'Ações específicas que EU executei, processo de tomada de decisão e dados que apoiaram.',
      r: 'Resultados quantificados com métricas específicas e impacto mensurável.',
      l: 'Lições aprendidas profundas com aplicação futura e crescimento demonstrado.'
    };
    
    return content + '\n\n[ENHANCED] ' + enhancements[section];
  }

  enhanceStorytelling(caseData) {
    // Adiciona elementos de storytelling
    const enhanced = JSON.parse(JSON.stringify(caseData));
    
    // Adiciona hook de abertura na situação
    if (enhanced.pt.s && !enhanced.pt.s.includes('hook')) {
      enhanced.pt.s = '[HOOK] ' + enhanced.pt.s;
    }
    
    // Adiciona transições entre seções
    const transitions = {
      t: '[TRANSIÇÃO] Diante desse cenário, minha responsabilidade específica era...',
      a: '[TRANSIÇÃO] Para abordar esse desafio, tomei as seguintes ações estratégicas...',
      r: '[TRANSIÇÃO] Os resultados dessa abordagem foram significativos...',
      l: '[MIC-DROP] O que aprendi com essa experiência transformou minha forma de...'
    };
    
    Object.keys(transitions).forEach(section => {
      if (enhanced.pt[section]) {
        enhanced.pt[section] = transitions[section] + ' ' + enhanced.pt[section];
      }
    });
    
    return enhanced;
  }

  enhanceLPAlignment(caseData, improvement) {
    // Fortalece alinhamento com Leadership Principle específico
    const enhanced = JSON.parse(JSON.stringify(caseData));
    const lpData = this.knowledgeBase.leadershipPrinciples[improvement.section];
    
    if (lpData) {
      // Adiciona keywords relevantes ao conteúdo
      enhanced.pt.l += `\n\n[LP ENHANCEMENT] Este case demonstra ${lpData.focus}`;
    }
    
    return enhanced;
  }

  updateFollowUpQuestions(caseData, analysis) {
    const currentFUPs = caseData.fups || [];
    const updatedFUPs = [];
    
    // Mantém FUPs existentes que são de alta qualidade
    currentFUPs.forEach((fup, index) => {
      if (this.evaluateFUPQuality(fup) > 70) {
        updatedFUPs.push(fup);
      }
    });
    
    // Adiciona novas FUPs baseadas na análise
    const newFUPs = this.generateNewFUPs(caseData, analysis);
    updatedFUPs.push(...newFUPs);
    
    // Garante exatamente 10 FUPs
    while (updatedFUPs.length < 10) {
      updatedFUPs.push(this.generateGenericFUP(updatedFUPs.length + 1));
    }
    
    return updatedFUPs.slice(0, 10);
  }

  evaluateFUPQuality(fup) {
    // Avalia qualidade da FUP baseada em critérios
    let score = 50;
    
    if (fup.q.includes('métrica') || fup.q.includes('dado')) score += 20;
    if (fup.q.includes('feedback') || fup.q.includes('desafio')) score += 15;
    if (fup.q.includes('trade-off') || fup.q.includes('decisão')) score += 15;
    if (fup.a.length > 100) score += 10;
    
    return score;
  }

  generateNewFUPs(caseData, analysis) {
    const newFUPs = [];
    const lpPrinciple = analysis.scores.lpAlignment.principle;
    
    // FUPs específicas baseadas no LP
    const lpSpecificFUPs = {
      'are_right_a_lot': [
        {
          q: 'Quais dados específicos você coletou para validar sua hipótese antes de tomar a decisão?',
          a: 'Resposta baseada em dados concretos e processo de validação sistemático.',
          q_en: 'What specific data did you collect to validate your hypothesis before making the decision?',
          a_en: 'Answer based on concrete data and systematic validation process.'
        }
      ],
      'customer_obsession': [
        {
          q: 'Como você mediu o impacto real dessa iniciativa na experiência do cliente?',
          a: 'Resposta com métricas de satisfação, NPS, ou outras métricas de experiência do cliente.',
          q_en: 'How did you measure the real impact of this initiative on customer experience?',
          a_en: 'Answer with satisfaction metrics, NPS, or other customer experience metrics.'
        }
      ]
    };
    
    if (lpSpecificFUPs[lpPrinciple]) {
      newFUPs.push(...lpSpecificFUPs[lpPrinciple]);
    }
    
    return newFUPs;
  }

  generateGenericFUP(index) {
    const genericFUPs = [
      {
        q: 'Qual foi o maior obstáculo que você enfrentou durante a execução e como o superou?',
        a: 'Resposta detalhada sobre desafios específicos e estratégias de superação.',
        q_en: 'What was the biggest obstacle you faced during execution and how did you overcome it?',
        a_en: 'Detailed answer about specific challenges and overcoming strategies.'
      },
      {
        q: 'Se você pudesse refazer esse projeto hoje, o que faria diferente?',
        a: 'Resposta reflexiva sobre aprendizados e melhorias identificadas.',
        q_en: 'If you could redo this project today, what would you do differently?',
        a_en: 'Reflective answer about learnings and identified improvements.'
      }
    ];
    
    return genericFUPs[index % genericFUPs.length];
  }

  async processFile(fileContent) {
    try {
      // Remove comentários
      const cleanContent = fileContent.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
      
      // Extrai o objeto principal usando uma abordagem mais robusta
      let principleData;
      
      // Tenta diferentes padrões de export
      const patterns = [
        /const\s+(\w+)\s*=\s*({[\s\S]*?});\s*export\s+default\s+\1/,
        /const\s+(\w+)\s*=\s*({[\s\S]*?});\s*$/m,
        /export\s+default\s+({[\s\S]*?});?\s*$/
      ];
      
      let objectString = null;
      for (const pattern of patterns) {
        const match = cleanContent.match(pattern);
        if (match) {
          objectString = match[match.length - 1]; // Pega o último grupo capturado
          break;
        }
      }
      
      if (!objectString) {
        throw new Error('Formato de arquivo inválido. Não foi possível extrair o objeto de dados.');
      }
      
      // Avalia o objeto JavaScript de forma mais segura
      principleData = this.safeEval(objectString);
      
      if (!principleData.cases || !Array.isArray(principleData.cases)) {
        throw new Error('Arquivo deve conter um array "cases" com os cases do Leadership Principle');
      }
      
      // Processa cada case
      const processedCases = [];
      for (const caseData of principleData.cases) {
        const analysis = await this.analyzeCase(caseData);
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

  safeEval(objectString) {
    // Implementação simplificada - em produção usaria um parser mais seguro
    try {
      // Usa Function constructor para avaliar o objeto de forma mais segura
      const func = new Function('return (' + objectString + ')');
      return func();
    } catch (error) {
      throw new Error('Erro ao interpretar conteúdo do arquivo JavaScript: ' + error.message);
    }
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
    
    output += `const ${principle.title_en.toLowerCase().replace(/[^a-z]/g, '_')} = {\n`;
    output += `  principle: ${JSON.stringify(principle, null, 2)},\n`;
    output += `  id: "${principle.title_en.toLowerCase().replace(/[^a-z]/g, '_')}",\n`;
    output += `  name: "${principle.title}",\n`;
    output += `  cases: [\n`;
    
    processedCases.forEach((analysis, index) => {
      output += `    {\n`;
      output += `      id: "${analysis.id}",\n`;
      output += `      title: "${analysis.title}",\n`;
      output += `      title_pt: "${analysis.title}",\n`;
      output += `      title_en: "${analysis.enhancedContent.title_en || analysis.title}",\n`;
      output += `      company: "${analysis.company}",\n`;
      output += `      period: "${analysis.period}",\n`;
      output += `      isTopCase: ${analysis.enhancedContent.isTopCase || false},\n`;
      output += `      pt: ${JSON.stringify(analysis.enhancedContent.pt, null, 6)},\n`;
      output += `      en: ${JSON.stringify(analysis.enhancedContent.en, null, 6)},\n`;
      output += `      fups: ${JSON.stringify(analysis.updatedFUPs, null, 6)}\n`;
      output += `    }${index < processedCases.length - 1 ? ',' : ''}\n`;
    });
    
    output += `  ]\n`;
    output += `};\n\n`;
    output += `export default ${principle.title_en.toLowerCase().replace(/[^a-z]/g, '_')};`;
    
    return output;
  }
}

export default CaseAnalyzer;
