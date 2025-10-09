// Case 1 - are_right_a_lot (VERSÃO CINEMA)
const case_1 = {
  "id": "sicredi-mobile-first-strategy",
  "title": "Equilibrei oito stakeholders conflitantes e redesenhei roadmap mobile com aprovação unânime",
  "title_pt": "Equilibrei oito stakeholders conflitantes e redesenhei roadmap mobile com aprovação unânime",
  "title_en": "Balanced eight conflicting stakeholders and redesigned mobile roadmap with unanimous approval",
  "company": "Sicredi",
  "period": "01/2020-05/2021",
  "isTopCase": true,
  "isGoodCase": false,
  "pt": {
    "s": "\"Precisamos de um super app com feed social em 90 dias. Os concorrentes estão viralizando e estamos ficando para trás.\" Marketing já havia mostrado mockups ao CEO quando, simultaneamente, risco alertou: \"48% das reclamações vêm de falhas em autenticação. Lançamento prematuro vai destruir NPS.\" Era janeiro de 2020, eu atuava como Product Strategist no Sicredi, e em três dias recebi oito pedidos conflitantes: marketing queria viralização, risco exigia estabilidade, duas superintendências regionais demandavam funcionalidades para agronegócio, canais físicos temiam canibalização, operações alertava sobre capacidade, TI pedia mais tempo, jurídico questionava compliance, e banco digital pressionava por paridade com Nubank. Cada stakeholder defendia sua própria verdade e esperava que eu tomasse seu lado. A pressão era brutal: 6,4 milhões de cooperados esperando inovação, mas qualquer erro custaria milhões.",
    "t": "Meu escopo como Product Strategist cobria roadmap digital, mas assumi ownership total da decisão. O desafio crítico era separar opinião de fato e construir um roadmap que preservasse resultado financeiro e experiência do cooperado sem alienar stakeholders-chave. Tracei três metas: (1) rodar análise multi-fonte em 10 dias mostrando impacto real de estabilidade vs feed social, (2) construir business case equilibrando NPS, margem e custos de risco, (3) negociar plano sequenciado com acordo formal de todos os patrocinadores.",
    "a": "Minha abordagem foi construir uma decisão baseada em fatos que sobrevivesse ao escrutínio de todos os lados. Coletei 18 meses de dados: NPS, funil de autenticação, ARPU e churn. Modelei o custo de cada ponto de falha — cada 0,1% de erro em autenticação destruía R$ 6,3M em margem anual. Criei o mecanismo 'Data Gate': matriz de benefícios vs risco, e convidei os oito stakeholders para sessão de decisão em tempo real. Comecei afirmando: 'Eu não vou votar antes de mostrarmos os fatos.' Apresentei três cenários: (1) Hype - feed em 90 dias, (2) Estabilidade - hardening de autenticação e pagamentos, (3) Híbrido - priorizar estabilidade + dois recursos de personalização para agronegócio. O CFO validou os números, marketing reconheceu que feed sem estabilidade aumentaria churn, e o presidente regional pediu garantia de release agro em 120 dias. O comitê aprovou o plano híbrido com condição: manter margem e entregar NPS acima de 65. Montei task force com TI, risco e marketing, criei sensores de latência em tempo real, defini SLA de 300ms para login e 30 minutos para reversão de falhas. Eu mesmo escrevi especificações de API para integrar dados agrícolas e negociei com jurídico para atualizar termos de uso em 15 dias.",
    "r": "Em seis sprints, reduzi erros de autenticação de 1,8% para 0,4%, NPS subiu de 54 para 71, e economizamos R$ 19M em perdas evitadas. O módulo agro entrou no ar em 104 dias, gerou aumento de 22% no ticket médio das cooperativas do Centro-Oeste e cortou em 37% as ligações sobre créditos rurais. Quando lançamos o feed social em setembro, com estabilidade garantida, engajamento cresceu 24% sem impacto negativo em margem. O CEO registrou em ata que eu havia 'contestado com fatos, equilibrado interesses e entregue conforme combinado.' Mais importante: criei um modelo de decisão multi-stakeholder que foi replicado em outras iniciativas estratégicas.",
    "l": "Aprendi que 'are right a lot' não significa vencer discussões, mas construir um ponto de vista que aguenta stress de todos os lados. Quando chego com dados, experimentos e planos contingenciais, consigo alinhar oito stakeholders e ainda entregar roadmap que gera resultado. Dados vencem política, sempre. Transformei essa experiência em playbook de decisão que apliquei depois para priorizar Open Finance, reduzindo discussão política em 70%."
  },
  "en": {
    "s": "\"We need a super app with social feed in 90 days. Competitors are going viral and we're falling behind.\" Marketing had already shown mockups to the CEO when, simultaneously, risk alerted: \"48% of complaints stem from authentication failures. Premature launch will destroy NPS.\" It was January 2020, I was Product Strategist at Sicredi, and within three days I received eight conflicting requests: marketing wanted viralization, risk demanded stability, two regional superintendents required agribusiness features, physical channels feared cannibalization, operations warned about capacity, IT asked for more time, legal questioned compliance, and digital bank pushed for Nubank parity. Each stakeholder defended their own truth and expected me to take their side. The pressure was brutal: 6.4 million members expecting innovation, but any mistake would cost millions.",
    "t": "My scope as Product Strategist covered digital roadmap, but I took total ownership of the decision. The critical challenge was separating opinion from fact and building a roadmap that preserved financial output and member experience without alienating key stakeholders. I set three goals: (1) run multi-source analysis in 10 days showing real impact of stability vs social feed, (2) build business case balancing NPS, margin, and risk costs, (3) negotiate sequenced plan with formal agreement from all sponsors.",
    "a": "My approach was building a fact-based decision that would survive scrutiny from all sides. I collected 18 months of data: NPS, authentication funnel, ARPU, and churn. I modeled the cost of each failure point — every 0.1% authentication error destroyed BRL 6.3M in annual margin. I created the 'Data Gate' mechanism: benefit vs risk matrix, and invited the eight stakeholders to a live decision session. I opened with 'I won't vote before we see the facts.' I presented three scenarios: (1) Hype - feed in 90 days, (2) Stability - authentication and payments hardening, (3) Hybrid - prioritize stability + two agribusiness personalization features. The CFO validated numbers, marketing admitted feed without stability would increase churn, and regional chairman requested agro release guarantee within 120 days. The committee approved the hybrid plan with conditions: maintain margin and deliver NPS above 65. I formed task force with IT, risk, and marketing, deployed real-time latency sensors, set 300ms login SLA and 30-minute failure recovery target. I personally wrote API specs to integrate agricultural data and negotiated updated terms of use with legal in 15 days.",
    "r": "Within six sprints, authentication errors dropped from 1.8% to 0.4%, NPS climbed from 54 to 71, and we avoided BRL 19M in losses. The agro module launched in 104 days, generated 22% increase in Midwest cooperatives' average ticket and cut rural credit calls by 37%. When we shipped the social feed in September with guaranteed stability, engagement grew 24% without negative margin impact. The CEO recorded in minutes that I had 'challenged with facts, balanced interests, and delivered as agreed.' Most importantly: I created a multi-stakeholder decision model replicated in other strategic initiatives.",
    "l": "I learned that 'are right a lot' isn't about winning arguments, but building a viewpoint that withstands pressure from all sides. When I arrive with data, experiments, and contingency plans, I can align eight stakeholders and still deliver a roadmap that generates results. Data beats politics, always. I transformed this experience into a decision playbook later applied to prioritize Open Finance, reducing political discussion by 70%."
  },
  "fups": [
    {
      "q": "Quais fontes de dados você usou para calcular o custo dos erros?",
      "a": "Cruzei logs de autenticação, reclamações de ouvidoria, dados do BACEN, margens por segmento e análise de churn em 18 meses. Usei Monte Carlo para simular cenários.",
      "q_en": "Which data sources did you use to price the failures?",
      "a_en": "I combined auth logs, ombudsman complaints, Central Bank records, segment margins, and churn analysis across 18 months. Used Monte Carlo for scenario simulation."
    },
    {
      "q": "Como você priorizou os oito stakeholders conflitantes?",
      "a": "Classifiquei por impacto em margem e NPS, montei matriz RACI detalhada e amarrei cada decisão a um patrocinador específico com accountability.",
      "q_en": "How did you prioritize the eight conflicting stakeholders?",
      "a_en": "I ranked them by margin and NPS impact, built detailed RACI matrix, and tied each decision to a specific sponsor with accountability."
    },
    {
      "q": "Que experimentos você rodou antes de levar ao comitê?",
      "a": "Pilotei hardening em 10% da base, medi redução de erros em 36 horas, e simulei três cenários com impacto financeiro projetado.",
      "q_en": "Which experiments did you run before the committee?",
      "a_en": "I piloted hardening in 10% of the base, measured error reduction within 36 hours, and simulated three scenarios with projected financial impact."
    },
    {
      "q": "Como garantiu entrega do módulo agro sem atrasar o feed?",
      "a": "Criei squad dedicada com co-liderança de cooperativa, sincronizei releases e usei feature flags para ativar módulo sem travar front principal.",
      "q_en": "How did you deliver the agro module without delaying the feed?",
      "a_en": "I formed dedicated squad with cooperative co-leadership, synchronized releases, and used feature flags to activate module without blocking main UI."
    },
    {
      "q": "Quais indicadores você monitorou em produção?",
      "a": "Erro de login, latência de API, NPS semanal, churn mensal, ARPU, ticket médio agro, volume de ligações e custo de risco por transação.",
      "q_en": "Which indicators did you track in production?",
      "a_en": "Login error, API latency, weekly NPS, monthly churn, ARPU, agro average ticket, call volume, and risk cost per transaction."
    },
    {
      "q": "Como você envolveu os times regionais na execução?",
      "a": "Convidei líderes regionais para backlog grooming semanal, dei acesso ao dashboard em tempo real e criei canal direto de feedback.",
      "q_en": "How did you involve regional teams in execution?",
      "a_en": "I invited regional leaders to weekly backlog grooming, gave real-time dashboard access, and created direct feedback channel."
    },
    {
      "q": "Qual foi o maior desafio com jurídico?",
      "a": "Atualizar termos para uso de dados agrícolas sem impactar compliance. Resolvi com nota técnica conjunta e revisão acelerada em 15 dias.",
      "q_en": "What was the biggest challenge with legal?",
      "a_en": "Updating terms for agricultural data usage without impacting compliance. Solved with joint technical note and accelerated review in 15 days."
    },
    {
      "q": "Como você reportou progresso ao CEO durante execução?",
      "a": "Carta semanal com variações de NPS, margem, backlog burndown, próxima entrega e riscos identificados. Transparência total.",
      "q_en": "How did you report progress to CEO during execution?",
      "a_en": "Weekly letter with NPS variations, margin, backlog burndown, next delivery, and identified risks. Total transparency."
    },
    {
      "q": "Que plano B você manteve preparado?",
      "a": "Documentei rollback em 30 minutos, lista de hotfixes para dez principais fluxos e squad de plantão 24/7 nas primeiras duas semanas.",
      "q_en": "What backup plan did you keep ready?",
      "a_en": "I documented 30-minute rollback, hotfix list for top ten flows, and 24/7 on-call squad for the first two weeks."
    },
    {
      "q": "Como você reutilizou esse playbook depois?",
      "a": "Apliquei a mesma metodologia 'Data Gate' para priorizar Open Finance em 2025, reduzindo discussão política em 70% e acelerando decisão.",
      "q_en": "How did you reuse this playbook later?",
      "a_en": "I applied the same 'Data Gate' methodology to prioritize Open Finance in 2025, reducing political discussion by 70% and accelerating decision."
    }
  ]
};

export default case_1;
