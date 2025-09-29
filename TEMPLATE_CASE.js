const template_principle = {
  "id": "template_principle",
  "name": "Nome do Princípio em Português",
  "cases": [
    {
      "title": "Título do Case em Português (Empresa/Projeto)",
      "pt": {
        "s": "Situação: Descreva o contexto, o problema ou desafio inicial que você enfrentou. Seja específico sobre o cenário, stakeholders envolvidos e a complexidade da situação.",
        "t": "Tarefa: Explique qual era sua responsabilidade específica, seu papel e o que você precisava entregar ou resolver. Deixe claro qual era sua missão.",
        "a": "Ação: Detalhe as ações concretas que VOCÊ tomou para resolver o problema. Use verbos na primeira pessoa (eu implementei, eu liderei, eu criei). Seja específico sobre metodologias, ferramentas e processos.",
        "r": "Resultado: Apresente os resultados quantitativos e qualitativos. Inclua métricas específicas, percentuais, valores financeiros quando possível. Mencione '(com baseline, meta e período documentados em relatório executivo)' quando aplicável.",
        "l": "Aprendizado: Reflita sobre o que você aprendeu com a experiência e como isso moldou sua abordagem futura. Termine com: 'Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início.'"
      },
      "en": {
        "s": "Situation: Describe the context, problem, or initial challenge you faced. Be specific about the scenario, stakeholders involved, and the complexity of the situation.",
        "t": "Task: Explain what your specific responsibility was, your role, and what you needed to deliver or solve. Make clear what your mission was.",
        "a": "Action: Detail the concrete actions that YOU took to solve the problem. Use first-person verbs (I implemented, I led, I created). Be specific about methodologies, tools, and processes.",
        "r": "Result: Present quantitative and qualitative results. Include specific metrics, percentages, financial values when possible.",
        "l": "Learning: Reflect on what you learned from the experience and how it shaped your future approach."
      },
      "fup": [
        {
          "q": "Primeira pergunta de follow-up em português?",
          "a": "Resposta detalhada em português, com contexto específico e dados concretos quando possível.",
          "q_en": "First follow-up question in English?",
          "a_en": "Detailed answer in English, with specific context and concrete data when possible."
        },
        {
          "q": "Segunda pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Second follow-up question in English?",
          "a_en": "Detailed answer in English."
        },
        {
          "q": "Terceira pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Third follow-up question in English?",
          "a_en": "Detailed answer in English."
        },
        {
          "q": "Quarta pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Fourth follow-up question in English?",
          "a_en": "Detailed answer in English."
        },
        {
          "q": "Quinta pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Fifth follow-up question in English?",
          "a_en": "Detailed answer in English."
        },
        {
          "q": "Sexta pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Sixth follow-up question in English?",
          "a_en": "Detailed answer in English."
        },
        {
          "q": "Sétima pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Seventh follow-up question in English?",
          "a_en": "Detailed answer in English."
        },
        {
          "q": "Oitava pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Eighth follow-up question in English?",
          "a_en": "Detailed answer in English."
        },
        {
          "q": "Nona pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Ninth follow-up question in English?",
          "a_en": "Detailed answer in English."
        },
        {
          "q": "Décima pergunta de follow-up em português?",
          "a": "Resposta detalhada em português.",
          "q_en": "Tenth follow-up question in English?",
          "a_en": "Detailed answer in English."
        }
      ]
    },
    {
      "title": "Segundo Case (se houver) - Título em Português",
      "pt": {
        "s": "Situação do segundo case...",
        "t": "Tarefa do segundo case...",
        "a": "Ação do segundo case...",
        "r": "Resultado do segundo case...",
        "l": "Aprendizado do segundo case..."
      },
      "en": {
        "s": "Situation of the second case...",
        "t": "Task of the second case...",
        "a": "Action of the second case...",
        "r": "Result of the second case...",
        "l": "Learning of the second case..."
      },
      "fup": [
        {
          "q": "Primeira FUP do segundo case?",
          "a": "Resposta em português.",
          "q_en": "First FUP of second case?",
          "a_en": "Answer in English."
        }
        // ... continuar com as 10 FUPs do segundo case
      ]
    }
  ]
};

export default template_principle;

/*
INSTRUÇÕES DE USO:
1. Copie este template
2. Substitua "template_principle" pelo nome real do princípio (ex: "customer_obsession")
3. Substitua "Nome do Princípio em Português" pelo nome correto
4. Preencha todos os campos STAR-L (s, t, a, r, l) em PT e EN
5. Crie 10 FUPs por case, sempre com q, a, q_en, a_en
6. Mantenha a estrutura JSON exata (vírgulas, chaves, aspas)
7. Teste com npm run build antes de usar

CAMPOS OBRIGATÓRIOS:
- id: snake_case do princípio
- name: nome em português  
- title: título do case
- pt/en: versões STAR-L completas
- fup: array com exatamente q, a, q_en, a_en para cada pergunta

DICAS:
- FUPs devem ser específicas e técnicas
- Respostas devem ter dados concretos quando possível
- Mantenha consistência entre PT e EN
- Use aspas duplas para JSON
- Termine cada case com vírgula, exceto o último
*/