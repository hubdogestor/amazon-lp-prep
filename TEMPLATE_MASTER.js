// Amazon Leadership Principle: Template Case
// Data structure template for study cases and follow-up questions

const template_case_data = {
  principle: {
    title: "Nome do Princípio",
    title_en: "Principle Name in English", 
    description: "Descrição completa do princípio de liderança em português, explicando o conceito e sua aplicação prática.",
    description_en: "Complete description of the leadership principle in English, explaining the concept and its practical application.",
    icon: "⭐"
  },
  cases: [
    {
      "title": "Título do Caso - Empresa (MM/AAAA-MM/AAAA)",
      "pt": {
        "s": "Situação: Contexto do problema ou desafio enfrentado. Descreva a situação inicial, o ambiente organizacional e os stakeholders envolvidos.",
        "t": "Tarefa: Qual era sua responsabilidade específica? O que você precisava entregar ou resolver? Seja específico sobre seu papel e accountability.",
        "a": "Ação: Descreva detalhadamente as ações que você tomou. Use verbos na primeira pessoa e seja específico sobre o que VOCÊ fez, não a equipe. Inclua metodologias, ferramentas e processos utilizados.",
        "r": "Resultado: Resultados quantificados e impacto gerado. Inclua métricas específicas, percentuais, valores financeiros e timeline. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Lições: O que você aprendeu com essa experiência? Como isso moldou sua abordagem futura? Inclua retrospectiva sobre o que faria diferente. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "Situation: Context of the problem or challenge faced. Describe the initial situation, organizational environment and stakeholders involved.",
        "t": "Task: What was your specific responsibility? What did you need to deliver or solve? Be specific about your role and accountability.",
        "a": "Action: Describe in detail the actions you took. Use first-person verbs and be specific about what YOU did, not the team. Include methodologies, tools and processes used.",
        "r": "Result: Quantified results and impact generated. Include specific metrics, percentages, financial values and timeline.",
        "l": "Learning: What did you learn from this experience? How did this shape your future approach? Include retrospective on what you would do differently. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fups": [
        {
          "q": "Pergunta de follow-up em português?",
          "q_en": "Follow-up question in English?",
          "a": "Resposta detalhada em português com contexto específico, números concretos e aprendizados. Seja específico sobre metodologias, ferramentas e resultados quantificados.",
          "a_en": "Detailed answer in English with specific context, concrete numbers and learnings. Be specific about methodologies, tools and quantified results."
        },
        {
          "q": "Segunda pergunta de follow-up?",
          "q_en": "Second follow-up question?",
          "a": "Segunda resposta com mais detalhes técnicos e operacionais. Inclua exemplos concretos e métricas específicas.",
          "a_en": "Second answer with more technical and operational details. Include concrete examples and specific metrics."
        }
        // Adicione mais 8 FUPs para completar 10 por caso
        // Total recomendado: 20 FUPs por princípio (2 casos x 10 FUPs cada)
      ]
    },
    {
      "title": "Segundo Caso - Outra Empresa (MM/AAAA-MM/AAAA)",
      "pt": {
        "s": "Situação do segundo caso...",
        "t": "Tarefa do segundo caso...",
        "a": "Ações do segundo caso...",
        "r": "Resultados do segundo caso...",
        "l": "Lições do segundo caso..."
      },
      "en": {
        "s": "Second case situation...",
        "t": "Second case task...",
        "a": "Second case actions...",
        "r": "Second case results...",
        "l": "Second case learnings..."
      },
      "fups": [
        // 10 FUPs para o segundo caso
      ]
    }
  ]
};

export default template_case_data;