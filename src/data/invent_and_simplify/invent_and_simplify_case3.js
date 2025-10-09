const case_3 = {
  id: "unimed-ai-authorization",
  title: "Inventei IA de Autorizacao Medica que Simplificou Processo de 5 Dias para 9 Horas (82% Automacao)",
  title_pt: "Inventei IA de Autorizacao Medica que Simplificou Processo de 5 Dias para 9 Horas (82% Automacao)",
  title_en: "Invented Medical Authorization AI that Simplified 5-Day Process to 9 Hours (82% Automation)",
  company: "Unimed",
  period: "01/2023-10/2023",
  isTopCase: true,
  isGoodCase: true, // Updated from false
  pt: {
    s: `Um Process Cycle Time de 5.1 dias para autorizações médicas estava quebrando a experiência do cliente, o motor de qualquer flywheel de crescimento. Pacientes oncológicos perdiam a janela clínica, o NPS despencou para 19 e nossos maiores hospitais parceiros ameaçaram sair, o que encolheria nossa 'seleção' de serviços e impactaria o 'tráfego' de novos beneficiários. A dor do cliente era clara.`,
    t: `Eu me posicionei como a ponte entre a dor do cliente e a decisão de negócio. Minha missão era tomar uma decisão acionável: inventar uma solução para cortar o Process Cycle Time para menos de 12 horas e atingir um Automation Rate de 80%, transformando nosso gargalo operacional em uma vantagem competitiva que giraria o flywheel.`,
    a: `Eu inventei uma solução e a simplifiquei em três frentes. Primeiro, para ser a ponte com o negócio, criei o indicador 'tempo de angústia', traduzindo a latência do sistema em dor do cliente. Segundo, usei meu julgamento para guiar a IA, removendo 11 variáveis que geravam viés e reescrevendo regras de cobertura. Terceiro, quando o comitê de auditoria resistiu, eu não mostrei apenas dados; enquadrei a questão como uma decisão de negócio entre um processo antigo e uma inovação que melhoraria a experiência do cliente e reduziria nosso Custo Operacional por Transação. O 'Painel de Confiança' que criei foi a ponte final, dando transparência e construindo confiança com o time médico.`,
    r: `A invenção girou o flywheel. Atingimos um Automation Rate de 82% e o Process Cycle Time caiu 90% para 9 horas. Essa excelência operacional reduziu nossos custos, economizando R$2,4M anuais. Mais importante, o Customer Satisfaction (NPS) disparou para 67, nossos parceiros renovaram os contratos e protegemos nossa 'seleção', fundamental para atrair novo 'tráfego' de beneficiários.`,
    l: `Aprendi que inventar com simplicidade é ser a ponte que traduz a dor do cliente em decisões de negócio acionáveis. O 'tempo de angústia' virou meu mecanismo para justificar tecnologia de alto impacto. Hoje, em pagamentos, uso a mesma lógica: meço o 'tempo de angústia' do lojista no onboarding para justificar investimentos em automação que melhoram nosso Payment Success Rate (PSR) e reduzem o atrito, provando que é possível inovar e simplificar até em ambientes altamente regulados.`
  },
  en: {
    s: `A 5.1-day Process Cycle Time for medical authorizations was breaking the customer experience, the engine of any growth flywheel. Oncology patients were missing their clinical window, NPS had plummeted to 19, and our largest partner hospitals threatened to leave, which would shrink our 'selection' of services and impact the 'traffic' of new beneficiaries. The customer pain was clear.`,
    t: `I positioned myself as the bridge between the customer's pain and the business decision. My mission was to make an actionable decision: invent a solution to cut the Process Cycle Time to under 12 hours and achieve an 80% Automation Rate, turning our operational bottleneck into a competitive advantage that would spin the flywheel.`,
    a: `I invented a solution and simplified it on three fronts. First, to be the bridge to the business, I created the 'distress time' indicator, translating system latency into customer pain. Second, I used my judgment to guide the AI, removing 11 variables that created bias and rewriting coverage rules. Third, when the audit committee resisted, I didn't just show data; I framed it as a business decision between an old process and an innovation that would improve the customer experience and lower our Operational Cost per Transaction. The 'Confidence Panel' I created was the final bridge, providing transparency and building trust with the medical team.`,
    r: `The invention spun the flywheel. We achieved an 82% Automation Rate, and the Process Cycle Time dropped 90% to 9 hours. This operational excellence reduced our costs, saving R$2.4M annually. Most importantly, Customer Satisfaction (NPS) soared to 67, our partners renewed their contracts, and we protected our 'selection,' which is key to attracting new 'traffic' of beneficiaries.`,
    l: `I learned that inventing with simplicity means being the bridge that translates customer pain into actionable business decisions. The 'distress time' became my mechanism to justify high-impact tech. Today, in payments, I use the same logic: I measure the merchant's 'distress time' during onboarding to justify investments in automation that improve our Payment Success Rate (PSR) and reduce friction, proving that you can innovate and simplify even in highly regulated environments.`
  },
  fups: [
    {
      q: "Como voce selecionou os 58 atributos do modelo?",
      a: "Eu fiz feature store com base em 12 entrevistas com auditores e testei 94 variaveis; mantive as 58 com ganho de informacao acima de 0,02 e que tinham correlacao clinica validada pelo board.",
      q_en: "How did you select the 58 model attributes?",
      a_en: "I built the feature store from 12 auditor interviews and tested 94 variables; I kept the 58 with information gain above 0.02 and clinically validated by the board."
    },
    {
      q: "Qual foi o maior sinal de customer obsession na execucao?",
      a: "Eu fiz todas as dailies abrindo com depoimentos dos pacientes, publiquei o indicador de angustia na intranet e acompanhei pessoalmente cada caso onco ate a alta.",
      q_en: "What was the strongest customer-obsession signal during execution?",
      a_en: "I opened every daily standup with patient recordings, published the distress indicator on the intranet, and personally followed each oncology case until discharge."
    },
    {
      q: "Como voce tratou o risco de viés algoritmico?",
      a: "Eu rodei fairness metrics por genero e faixa etaria, cortei 11 variaveis de renda e ajustei pesos ate reduzir a diferenca de aprovacao para menos de 2 p.p. entre grupos.",
      q_en: "How did you deal with algorithmic bias risk?",
      a_en: "I ran fairness metrics by gender and age, removed 11 income-related variables, and tuned weights until approval gap stayed below 2 p.p. across groups."
    },
    {
      q: "Como voce mediu impacto financeiro alem da economia de FTE?",
      a: "Eu cruzei base de sinistralidade e provei queda de 5,6% em reembolsos emergenciais e aumento de 2,1% em receita de planos premium devido a renovacoes antecipadas.",
      q_en: "How did you measure financial impact beyond FTE savings?",
      a_en: "I connected claims data and proved a 5.6% drop in emergency reimbursements plus a 2.1% premium-plan revenue uplift from early renewals."
    },
    {
      q: "Qual conflito voce teve com o conselho medico e como resolveu?",
      a: "Eles queriam voto de minerva em cada negativa automatica; eu propus limite dinamico por CID e defendi pessoalmente cada caso acima de R$ 8k em reuniao semanal.",
      q_en: "What conflict did you face with the medical board and how did you resolve it?",
      a_en: "They wanted veto power on every automatic denial; I proposed a dynamic threshold per ICD and personally defended each case above R$ 8k in the weekly meeting."
    },
    {
      q: "Como voce garantiu explainability para reguladores?",
      a: "Eu integrei o Painel de Confianca com logs que mostram pesos do modelo, gerei relatórios mensais para ANS e capturei assinatura digital de todos os ajustes.",
      q_en: "How did you guarantee explainability to regulators?",
      a_en: "I integrated the Confidence Panel with model-weight logs, produced monthly reports for the regulator, and captured digital signatures for every adjustment."
    },
    {
      q: "Que testes voce fez antes de escalar para 82%?",
      a: "Eu conduzi piloto de 30 dias com duas linhas de cuidado, acompanhei retrospectivas diarias e so expandi quando o falso positivo ficou abaixo de 1,5%.",
      q_en: "What tests did you run before scaling to 82%?",
      a_en: "I ran a 30-day pilot covering two care lines, tracked daily retrospectives, and only expanded once false positives stayed under 1.5%."
    },
    {
      q: "Como voce manteve o ratio EU:NOS acima de 3:1?",
      a: "Eu centralizei aprovacoes, mantive meu nome em cada decisao critica e registrei no painel quem aprovou, reforcando que as escolhas chave eram minhas.",
      q_en: "How did you keep the I:we ratio above 3:1?",
      a_en: "I centralized approvals, kept my name on every critical decision, and logged ownership in the panel to reinforce that the decisive calls were mine."
    },
    {
      q: "Qual proximo mecanismo voce ativou com o aprendizado?",
      a: "Eu criei squad para reembolso odontologico usando o mesmo painel e o indicador de angustia, reduzindo SLA de 6 dias para 26 horas em 45 dias.",
      q_en: "Which next mechanism did you activate using the learning?",
      a_en: "I launched a squad for dental reimbursements using the same panel and distress indicator, cutting SLA from 6 days to 26 hours within 45 days."
    },
    {
      q: "Como isso se conecta a pagamentos e fintech?",
      a: "Eu levo o conceito de explainability e do indicador de angustia para underwriting de sellers, deixando claro pro cliente por que a IA aprovou ou nao e devolvendo resposta em menos de 2 horas.",
      q_en: "How does this connect to payments and fintech?",
      a_en: "I bring the explainability concept and the distress indicator to seller underwriting, making it clear why AI approved or not and returning decisions in under two hours."
    }
  ]
};

export default case_3;

