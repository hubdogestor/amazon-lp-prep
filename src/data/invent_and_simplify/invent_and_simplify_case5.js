const case_5 = {
  id: "sefarz-pix-reconciliation-automation",
  title: "Automacao de conciliacao PIX municipal inventada em 45 dias eliminou risco fiscal",
  title_pt: "Automacao de conciliacao PIX municipal inventada em 45 dias eliminou risco fiscal",
  title_en: "Invented PIX municipal reconciliation automation in 45 days eliminating fiscal risk",
  company: "SEFAZ RS",
  period: "08/2024-01/2025",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `"Não conseguimos fechar a prestação de contas. Os repasses estão suspensos." A ligação desesperada do prefeito de Canoas resumia a crise: 184 municípios gaúchos com tesourarias digitais quebradas. A conciliação PIX levava 72 horas, congelando R$ 847M em repasses federais e atrasando verbas para escolas, postos de saúde e merenda escolar. Cada hora de atraso significava crianças sem aula e famílias sem atendimento médico.`,
    t: `Diante dessa crise que paralisava serviços essenciais em todo o estado, assumi ownership total da automação da conciliação PIX municipal. Minha missão era clara: reduzir o tempo para menos de 6 horas, elevar o NPS acima de 50 e fazer isso sem orçamento adicional — apenas com inteligência e simplicidade.`,
    a: `Eu inventei uma solução radical que transformou caos em ordem. Primeiro, criei o indicador "horas sem lastro" — medindo tempo que recursos ficavam sem comprovação contábil — que revelou o verdadeiro custo da ineficiência. Segundo, desenvolvi um motor de conciliação em Python com 320 regras heurísticas que nenhum fornecedor havia tentado, processando transações em tempo quase real. Terceiro, quando a procuradoria resistiu à automação acima de R$ 200k, conduzi um piloto com 12 cidades que provou 99,1% de acurácia, assumindo pessoalmente a responsabilidade pelas exceções.`,
    r: `A invenção desbloqueou o estado. Em 45 dias, o tempo de conciliação despencou para menos de 5 horas (-93%), o NPS saltou para 61 e eliminamos 93% do retrabalho manual. Mais importante: liberamos R$ 27M em repasses educacionais, evitamos R$ 4,6M em multas federais e restauramos a confiança de 146 prefeitos. A solução foi tão eficaz que virou referência nacional, sendo replicada em outros estados.`,
    l: `Aprendi que inovar no setor público é sobre transformar urgência social em soluções técnicas elegantes. O indicador "horas sem lastro" virou meu padrão para medir impacto real de automações. Hoje, em pagamentos, aplico o mesmo princípio: meço tempo que transações ficam "sem lastro" (pendentes de conciliação) para justificar investimentos em automação que aceleram a experiência do lojista.`
  },
  en: {
    s: `"We can't close our accounts. Federal transfers are suspended." The desperate call from Canoas' mayor summarized the crisis: 184 municipalities in Rio Grande do Sul with broken digital treasuries. PIX reconciliation took 72 hours, freezing R$847M in federal transfers and delaying funds for schools, health centers, and school meals. Each hour of delay meant children without classes and families without medical care.`,
    t: `Faced with this crisis paralyzing essential services across the state, I took total ownership of automating municipal PIX reconciliation. My mission was clear: reduce time to under 6 hours, raise NPS above 50, and do it without additional budget — only with intelligence and simplicity.`,
    a: `I invented a radical solution that transformed chaos into order. First, I created the "hours without backing" indicator — measuring time resources stayed without accounting proof — which revealed the true cost of inefficiency. Second, I developed a Python reconciliation engine with 320 heuristic rules that no vendor had attempted, processing transactions in near real-time. Third, when the attorney's office resisted automation above R$200k, I conducted a pilot with 12 cities proving 99.1% accuracy, personally assuming responsibility for exceptions.`,
    r: `The invention unlocked the state. In 45 days, reconciliation time plummeted to under 5 hours (-93%), NPS jumped to 61, and we eliminated 93% of manual rework. More importantly: we freed R$27M in educational transfers, avoided R$4.6M in federal fines, and restored trust from 146 mayors. The solution was so effective it became a national reference, being replicated in other states.`,
    l: `I learned that innovating in the public sector is about transforming social urgency into elegant technical solutions. The "hours without backing" indicator became my standard for measuring real automation impact. Today, in payments, I apply the same principle: I measure time transactions stay "without backing" (pending reconciliation) to justify automation investments that accelerate merchant experience.`
  },
  fups: [
    {
      q: "Como voce ouviu a voz do cliente municipal?",
      a: "Eu visitei dez cidades em uma semana, fiz entrevistas com secretarios, prefeitos e contadores e converti as dores em historias de usuario priorizadas por risco fiscal.",
      q_en: "How did you capture the municipal customer's voice?",
      a_en: "I visited ten cities in a week, interviewed secretaries, mayors, and accountants, and turned their pains into user stories prioritized by fiscal risk."
    },
    {
      q: "Que conflito juridico voce enfrentou?",
      a: "A procuradoria queria manter aprovacao manual acima de R$ 200 mil; eu provei com piloto de 12 cidades que o erro seria menor que 1% e assumi responsabilidade pessoal pelas excecoes.",
      q_en: "What legal conflict did you face?",
      a_en: "The attorney's office wanted manual approval above R$ 200k; I proved with a 12-city pilot that error would stay below 1% and took personal responsibility for exceptions."
    },
    {
      q: "Quais metricas de cliente voce usou?",
      a: "Eu acompanhei NPS, horas sem lastro, tempo de resposta da central e share de municipios com conciliacao em 6 horas, enviando boletim diario.",
      q_en: "Which customer metrics did you use?",
      a_en: "I tracked NPS, hours without backing, call center response time, and share of municipalities with 6-hour reconciliation, sending daily reports."
    },
    {
      q: "Como voce garantiu acuracia de 99,1%?",
      a: "Eu criei 320 regras heuristicas baseadas em padroes reais, testei com 180 mil transacoes historicas e implementei machine learning para detectar anomalias.",
      q_en: "How did you ensure 99.1% accuracy?",
      a_en: "I created 320 heuristic rules based on real patterns, tested with 180k historical transactions, and implemented machine learning for anomaly detection."
    },
    {
      q: "Qual foi o maior desafio tecnico?",
      a: "Integrar 184 sistemas diferentes sem padrao; eu criei camada de normalizacao que traduzia qualquer formato para o motor de conciliacao.",
      q_en: "What was the biggest technical challenge?",
      a_en: "Integrating 184 different systems without standards; I created a normalization layer that translated any format to the reconciliation engine."
    },
    {
      q: "Como voce mediu o impacto social?",
      a: "Eu trackeei dias de atraso em repasses educacionais, numero de escolas afetadas e tempo medio para liberacao de verbas emergenciais.",
      q_en: "How did you measure social impact?",
      a_en: "I tracked days of delay in educational transfers, number of affected schools, and average time for emergency fund releases."
    },
    {
      q: "Que resistencia voce enfrentou dos municipios?",
      a: "Prefeitos temiam perder controle; eu criei dashboard transparente onde eles viam cada transacao em tempo real, aumentando confianca.",
      q_en: "What resistance did you face from municipalities?",
      a_en: "Mayors feared losing control; I created a transparent dashboard where they could see every transaction in real-time, increasing trust."
    },
    {
      q: "Como voce garantiu sustentabilidade da solucao?",
      a: "Eu treinei 45 servidores, documentei todos os processos e criei alertas automaticos para qualquer desvio acima de 0,5%.",
      q_en: "How did you ensure solution sustainability?",
      a_en: "I trained 45 civil servants, documented all processes, and created automatic alerts for any deviation above 0.5%."
    },
    {
      q: "Qual aprendizado voce levou para pagamentos?",
      a: "O conceito de conciliacao em tempo real e regras heuristicas; hoje uso para acelerar settlement entre adquirentes e lojistas.",
      q_en: "What learning did you take to payments?",
      a_en: "Real-time reconciliation concept and heuristic rules; today I use it to accelerate settlement between acquirers and merchants."
    },
    {
      q: "Como voce celebrou o sucesso com os municipios?",
      a: "Eu organizei webinar com 146 prefeitos compartilhando resultados e criando rede de boas praticas que continua ativa ate hoje.",
      q_en: "How did you celebrate success with municipalities?",
      a_en: "I organized a webinar with 146 mayors sharing results and creating a best practices network that remains active today."
    }
  ]
};

export default case_5;
