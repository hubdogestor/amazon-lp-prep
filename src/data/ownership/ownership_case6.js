// Case 6 - ownership
const case_6 = {
  id: "long-term-tradeoff",
  title: "Assumi Trade-off: Menos Escopo Agora por Maior Robustez",
  title_pt: "Assumi Trade-off: Menos Escopo Agora por Maior Robustez",
  title_en: "Took the Trade-off: Less Scope Now for Greater Robustness",
  company: "Bradesco Next",
  period: "07/2017-12/2017",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `"Vamos lançar todas as 14 features — marketing já prometeu para 1,2 milhão de clientes." A frase do CPO na reunião executiva ignorava dados brutais: 680 ms de latência (+45% em um mês), 27 incidentes P1 empilhados, chargebacks crescendo 19% ao mês, e alerta do NOC de que 8K TPS derrubaria o core legado a 92% de CPU, comprometendo 3,5 milhões de transações/dia. Stakes brutais: lançar tudo sem hardening = R$ 24M em perdas potenciais (multas + chargebacks + churn massivo); cortar escopo = enfrentar CPO furioso, marketing com promessas públicas e talvez meu cargo. Dilema de ownership: proteger 1,2 milhão de clientes com decisão impopular ou ceder à pressão e arriscar colapso na Black Friday.`,
    t: `Diante dessa crise iminente que ameaçava a estabilidade da plataforma na data mais crítica do ano, eu decidi assumir ownership total do core — além do meu escopo formal de integrações — e tomar a decisão impopular de cortar 9 de 14 features para proteger 1,2 milhão de clientes. Meu escopo formal cobria integrações com parceiros, mas assumi responsabilidade total pelo core. Estabeleci metas claras: manter disponibilidade acima de 99,9%, reduzir chargebacks em pelo menos 15% e liberar a release em duas ondas somente quando os controles críticos passassem em testes de carga. Avisei o CEO que cortaria a primeira onda para cinco features essenciais e entregaria o restante quando os gates estivessem verdes.`,
    a: `Eu construí modelo de risco baseado em dados e formei tiger team multifuncional para negociar trade-off transparente com evidências concretas. Primeiro, formei tiger team com SRE, Risco e Produto em 48 horas. Segundo, modelei cenários financeiros mostrando perda potencial de R$ 24M em multas, chargebacks e churn se lançássemos tudo sem reforço. Terceiro, orquestrei testes de carga com Locust até 12K TPS e provei que aos 7.600 TPS o core travava por limite de pooling. Quarto, reescrevi o plano em duas fases: fase um com cinco features críticas (PIX recorrente, limites dinâmicos, antifraude adaptativo, SLA de disputa, painel de cashback) e fase dois pós-hardening. Quinto, implantei mecanismos de resiliência: circuit breaker, 96 alertas Prometheus, feature flags por segmento e game days duas vezes por semana. Sexto, negociei com marketing e compliance uma campanha trust-first baseada nas cinco features e roadmap público ancorado em marcos de estabilidade. Sétimo, enfrentei resistência do CPO no comitê executivo mostrando heatmap com nove métricas críticas (CPU, latência p95, chargeback ratio, SLA antifraude) e votei pelo gate até que os riscos ficassem aceitáveis; o CEO apoiou ao ver o modelo risco versus NPS. Oitavo, sentei no call center e reuni os cinco maiores merchants (iFood, Magazine Luiza, Rappi, Uber, B2W) para explicar o plano, ajustar feature flags e garantir SLA dedicado durante o pico.`,
    r: `Eu transformei uma decisão impopular em dividendos de longo prazo que protegeram 1,2 milhão de clientes. Estabilizei o core em 28 dias mantendo apenas cinco features: disponibilidade subiu de 99,2% para 99,97%, latência p95 caiu para 320 ms (-53%), incidentes P1 reduziram de 27 para 4 por mês e chargebacks baixaram 18%. Garanti que a Black Friday processasse 3,8 milhões de transações por dia sem degradação, elevei o NPS pós-evento de 61 para 79 e reduzi reclamações no BACEN em 42%. Liberei a fase dois 45 dias depois com zero incidentes críticos e instituí Postmortem Council semanal para manter o aprendizado vivo. O trade-off de cortar escopo gerou dividendos de longo prazo: nos 18 meses seguintes, a plataforma manteve disponibilidade média de 99,96% (vs. 99,1% em plataformas concorrentes), reduziu MTTR de 47 para 8 minutos e permitiu escalar de 8K para 24K TPS sem reescrever core. O framework de resiliência que criei foi adotado por 12 squads e preveniu 8 incidentes críticos ao detectar degradação antes de impactar clientes. O CFO calculou que evitamos R$ 67M em perdas potenciais ao longo de 2 anos.`,
    l: `Aprendi que ownership às vezes significa dizer não quando dados mostram que clientes pagariam o preço — liderar com evidências e mecanismos permanentes preserva confiança de longo prazo muito além de features incrementais. Três princípios guiam minha abordagem desde então: (1) Robustez de longo prazo > features de curto prazo: clientes preferem cinco funcionalidades estáveis a 14 instáveis, (2) Mecanismos de resiliência são investimento, não custo: circuit breaker + game days + Postmortem Council geraram ROI de 28:1 ao prevenir incidentes, (3) Trade-off transparente com dados constrói confiança: ao mostrar heatmap de risco ao CEO e merchants, transformei resistência em advocacy. Esse modelo foi replicado em PIX Phase 2 (cortei 6 de 11 features, entreguei 3 dias antes do deadline BACEN com 99,98% disponibilidade) e Open Finance (adiamos 4 integrações, zeramos incidentes P1 em homologação BCB). Transformei esse checklist no meu padrão: nunca commito deadline sem load test, risk model e gates objetivos. Assumir trade-off difícil no curto prazo me rendeu reputação de "entrega com qualidade" e foi citado pelo CEO como exemplo de "ownership que protege o cliente".`
  },
  en: {
    s: `"Let's ship all 14 features — marketing already promised to 1.2 million customers." The CPO's phrase in executive meeting ignored brutal data: 680 ms latency (+45% in one month), 27 P1 incidents stacked, chargebacks growing 19% monthly, and NOC warning that 8K TPS would crash legacy core at 92% CPU, compromising 3.5M transactions/day. Brutal stakes: ship everything without hardening = R$24M in potential losses (fines + chargebacks + massive churn); cut scope = face furious CPO, marketing with public promises, and maybe my job. Ownership dilemma: protect 1.2M customers with unpopular decision or yield to pressure and risk Black Friday collapse.`,
    t: `Faced with that imminent crisis threatening platform stability on the year's most critical date, I decided to take total ownership of the core — beyond my formal integrations scope — and make the unpopular decision to cut 9 of 14 features to protect 1.2M customers. My formal remit covered partner integrations, but I took total responsibility for the core. I set clear goals: maintain availability above 99.9%, reduce chargebacks by at least 15%, and release in two waves only after critical controls passed load testing. I told the CEO I would cut the first wave to five essential features and deliver the rest when gates were green.`,
    a: `I built data-driven risk model and formed cross-functional tiger team to negotiate transparent trade-off with concrete evidence. First, I formed tiger team with SRE, Risk, and Product in 48 hours. Second, I modeled financial scenarios showing potential R$24M loss in fines, chargebacks, and churn if we launched everything without hardening. Third, I orchestrated Locust load tests up to 12K TPS and proved the core stalled at 7,600 TPS due to pooling limits. Fourth, I rewrote the plan in two phases: phase one with five critical features (recurring PIX, dynamic limits, adaptive antifraud, dispute SLA, cashback dashboard) and phase two post-hardening. Fifth, I implemented resilience mechanisms: circuit breaker, 96 Prometheus alerts, segment-based feature flags, and twice-weekly game days. Sixth, I negotiated trust-first campaign with marketing and compliance based on five features and public roadmap anchored on stability milestones. Seventh, I faced CPO resistance in executive committee showing heatmap with nine critical metrics (CPU, p95 latency, chargeback ratio, antifraud SLA) and voted for gate until risks became acceptable; CEO supported after seeing risk versus NPS model. Eighth, I sat in call center and met top five merchants (iFood, Magazine Luiza, Rappi, Uber, B2W) to explain plan, adjust feature flags, and guarantee dedicated SLA during peak.`,
    r: `I transformed an unpopular decision into long-term dividends that protected 1.2M customers. I stabilized the core in 28 days keeping only five features: availability rose from 99.2% to 99.97%, p95 latency dropped to 320 ms (-53%), P1 incidents reduced from 27 to 4 per month, and chargebacks decreased 18%. I ensured Black Friday processed 3.8 million transactions per day without degradation, lifted post-event NPS from 61 to 79, and reduced BACEN complaints by 42%. I released phase two 45 days later with zero critical incidents and instituted weekly Postmortem Council to keep learning alive. The scope-cutting trade-off generated long-term dividends: over next 18 months, platform maintained 99.96% average availability (vs. 99.1% for competing platforms), reduced MTTR from 47 to 8 minutes, and enabled scaling from 8K to 24K TPS without core rewrite. The resilience framework I created was adopted by 12 squads and prevented 8 critical incidents by detecting degradation before customer impact. CFO calculated we avoided R$67M in potential losses over 2 years.`,
    l: `I learned that ownership sometimes means saying no when data shows customers would pay the price — leading with evidence and permanent mechanisms preserves long-term trust far beyond incremental features. Three principles guide my approach since then: (1) Long-term robustness > short-term features: customers prefer five stable functions over 14 unstable ones, (2) Resilience mechanisms are investment, not cost: circuit breaker + game days + Postmortem Council generated 28:1 ROI by preventing incidents, (3) Transparent trade-off with data builds trust: by showing risk heatmap to CEO and merchants, I transformed resistance into advocacy. This model was replicated in PIX Phase 2 (cut 6 of 11 features, delivered 3 days before BACEN deadline with 99.98% availability) and Open Finance (deferred 4 integrations, zeroed P1 incidents in BCB approval). I transformed this checklist into my standard: never commit deadline without load test, risk model, and objective gates. Taking difficult short-term trade-off earned me reputation for "quality delivery" and was cited by CEO as example of "ownership that protects the customer".`
  },
  fups: [
    {
      "q": "Como calculou o risco financeiro de R$ 24M ao manter o escopo completo?",
      "a": "Modelei perda por SLA quebrado (R$ 8,5M), chargebacks adicionais (R$ 11M) e multa potencial do BACEN (R$ 4,5M). Usei histórico de 18 incidentes e curvas de churn para projetar o impacto e apresentei ao CFO e CEO antes de votar pelo gate.",
      "q_en": "How did you calculate the R$24M financial risk for keeping full scope?",
      "a_en": "I modeled SLA penalties (R$8.5M), incremental chargebacks (R$11M), and potential BACEN fine (R$4.5M). I used history of 18 incidents and churn curves to project impact and presented to CFO and CEO before gate vote."
    },
    {
      "q": "Quais experimentos de carga sustentaram sua decisão?",
      "a": "Rodei 42 cenários no Locust simulando picos de 6K a 12K TPS com mix real de transações. Identifiquei gargalo em pooling e falha de timeout no antifraude, documentei em laudos anexados ao comitê e usei para priorizar correções.",
      "q_en": "Which load experiments supported your decision?",
      "a_en": "I ran 42 Locust scenarios from 6K to 12K TPS with real transaction mixes. I identified pooling bottleneck and antifraud timeout failure, documented in reports attached to committee and used to prioritize fixes."
    },
    {
      "q": "Como alinhou merchants estratégicos à decisão de adiar features?",
      "a": "Mapeei os 20 maiores merchants por volume, discuti o plano em reuniões individuais e configurei feature flags para liberar funcionalidades críticas somente quando estáveis. Ofereci playbooks de contingência e canais diretos com SRE durante o pico.",
      "q_en": "How did you align strategic merchants to the feature deferral decision?",
      "a_en": "I mapped top 20 merchants by volume, discussed plan in individual meetings, and configured feature flags to release critical functionalities only when stable. I offered contingency playbooks and direct channels with SRE during peak."
    },
    {
      "q": "Qual foi o maior desafio na implementação dos mecanismos de resiliência?",
      "a": "Integrar circuit breaker com sistema legado sem quebrar fluxos existentes. Criei camada intermediária que monitora latência e taxa de erro, ativa proteção gradual (throttling → circuit breaker → fallback) e mantém logs detalhados para postmortem. Testei com 1% do tráfego antes do rollout.",
      "q_en": "What was the biggest challenge in implementing resilience mechanisms?",
      "a_en": "Integrating circuit breaker with legacy system without breaking existing flows. I created intermediate layer that monitors latency and error rate, activates gradual protection (throttling → circuit breaker → fallback), and maintains detailed logs for postmortem. Tested with 1% traffic before rollout."
    },
    {
      "q": "Como você mediu o impacto real nos clientes durante a Black Friday?",
      "a": "NPS pós-evento (61→79), tempo de resolução de problemas (47→8 min MTTR), taxa de sucesso de transações (99,2%→99,97%), satisfação com transparência (comunicação proativa durante picos), e zero reclamações de merchants sobre indisponibilidade.",
      "q_en": "How did you measure real customer impact during Black Friday?",
      "a_en": "Post-event NPS (61→79), problem resolution time (47→8 min MTTR), transaction success rate (99.2%→99.97%), transparency satisfaction (proactive communication during peaks), and zero merchant complaints about unavailability."
    },
    {
      "q": "Que resistência você enfrentou do CPO e como superou?",
      "a": "CPO via corte de escopo como 'falta de ambição' e 'promessas quebradas'. Mostrei heatmap de risco com 9 métricas críticas, modelei impacto financeiro de R$ 24M e trouxe merchants para validar priorização. CEO apoiou quando viu que trade-off protegia receita de longo prazo.",
      "q_en": "What resistance did you face from CPO and how did you overcome it?",
      "a_en": "CPO saw scope cut as 'lack of ambition' and 'broken promises'. I showed risk heatmap with 9 critical metrics, modeled R$24M financial impact, and brought merchants to validate prioritization. CEO supported when he saw trade-off protected long-term revenue."
    },
    {
      "q": "Como você garantiu sustentabilidade dos mecanismos após a Black Friday?",
      "a": "Instituí Postmortem Council semanal, treinei 12 squads em circuit breaker e game days, automatizei 96 alertas Prometheus e criei runbook de 67 páginas. Mais importante: provei ROI de 28:1 que tornou mecanismos indispensáveis para liderança.",
      "q_en": "How did you ensure mechanism sustainability after Black Friday?",
      "a_en": "I instituted weekly Postmortem Council, trained 12 squads in circuit breaker and game days, automated 96 Prometheus alerts, and created 67-page runbook. Most importantly: I proved 28:1 ROI that made mechanisms indispensable to leadership."
    },
    {
      "q": "Qual foi o ROI real dos mecanismos de resiliência?",
      "a": "ROI de 28:1 em 18 meses: evitei R$ 67M em perdas (chargebacks + multas + churn), economizei 2.340 horas de incident response (R$ 1,2M em produtividade), reduzi MTTR em 82% e mantive disponibilidade 0,86% acima da concorrência. Investimento: R$ 2,4M (ferramentas + treinamento).",
      "q_en": "What was the real ROI of resilience mechanisms?",
      "a_en": "28:1 ROI over 18 months: avoided R$67M in losses (chargebacks + fines + churn), saved 2,340 incident response hours (R$1.2M in productivity), reduced MTTR by 82%, and maintained availability 0.86% above competition. Investment: R$2.4M (tools + training)."
    },
    {
      "q": "Como você lidou com a pressão de marketing sobre promessas públicas?",
      "a": "Negociei campanha trust-first focada nas 5 features estáveis vs. 14 instáveis, criei roadmap público com marcos de estabilidade e ofereci transparência radical (status page em tempo real). Marketing descobriu que clientes preferiam confiabilidade a features quebradas.",
      "q_en": "How did you handle marketing pressure about public promises?",
      "a_en": "I negotiated trust-first campaign focused on 5 stable features vs. 14 unstable ones, created public roadmap with stability milestones, and offered radical transparency (real-time status page). Marketing discovered customers preferred reliability over broken features."
    },
    {
      "q": "Que aprendizado dessa experiência você aplicou em outros contextos?",
      "a": "O template de trade-off baseado em dados: (1) Load test obrigatório antes de deadline, (2) Risk model financeiro com cenários, (3) Gates objetivos para release, (4) Transparência com stakeholders. Apliquei em PIX Phase 2 e Open Finance com sucesso similar.",
      "q_en": "What learning from this experience did you apply in other contexts?",
      "a_en": "The data-driven trade-off template: (1) Mandatory load test before deadline, (2) Financial risk model with scenarios, (3) Objective gates for release, (4) Transparency with stakeholders. I applied to PIX Phase 2 and Open Finance with similar success."
    }
  ]
};

export default case_6;
