// Case 4 - ownership
const case_4 = {
  id: "hsbc-payment-reconciliation",
  title: "Reconciliei US$47M de Pagamentos na Reta Final do Cutover",
  title_pt: "Reconciliei US$47M de Pagamentos na Reta Final do Cutover",
  title_en: "Reconciled US$47M in Payments Ahead of Cutover",
  company: "HSBC",
  period: "03/2017-05/2017",
  isTopCase: true,
  pt: {
    s: `Eu tinha criado uma rotina de auditoria paralela para o programa Banquo e, a 21 dias do cutover para o Bradesco, ela apontou 2.847 pagamentos internacionais nao reconciliados somando US$ 47M. O Bacen vinha multando bancos em ate 0,5% dos ativos por falhas similares, e 18 clientes priority reclamaram de atrasos superiores a 48h. Cada diretor queria empurrar a correção para depois do fechamento para nao travar o cronograma.`,
    t: `Mesmo sendo PMO e nao dono da operacao, eu avisei o CEO que assumiria a reconciliacao ponta a ponta. Eu me comprometi a zerar o backlog antes do cutover, proteger clientes priority com comunicacao diaria e sair com carta formal do Bacen validando os controles.`,
    a: `Em 36 horas eu montei uma tiger team com Operacoes, Compliance, TI, Correspondentes e Controladoria e estabeleci cadencia de guerra (daily 20 minutos, review 18h, reporte executivo a cada 48h). (1) Eu mergulhei em 300 transacoes amostrais, escrevi cinco scripts SQL cruzando SAP, SWIFT, core banking e extratos de correspondentes, classificando tres padrôes criticos (erro de cambio, campos SWIFT truncados, divergencia de timestamp). (2) Eu segmentei o backlog em ondas de risco (A/B/C), criei runbook com SLA claro (A = 12h, B = 24h, C = 48h) e automatizei 80% dos casos com RPA shadowed por cinco dias. (3) Eu instalei war room com painel no Grafana exibindo MTTR, valor pendente e volume por pais; qualquer anomalia acima de US$ 250k gerava alerta para meu celular. (4) Quando o diretor de Compliance barrou o deploy alegando risco regulatorio, eu voei a Brasilia, apresentei a resolucao 4.557, adicionei dupla aprovacao em funcoes segregadas e sai com carta de nao oposicao em 24h. (5) Para blindar clientes priority, eu abri linha dedicada 24/7, enviei status diarios e ofereci waiver de tarifas para 12 empresas sensiveis; o NPS desse grupo caiu apenas 2 pontos (vs queda projetada de 18).`,
    r: `Em 38 dias eu zerei o backlog: 2.276 casos (80%) resolvidos automaticamente, 427 (15%) com playbook manual e 144 (5%) escalados a correspondentes com SLA de 48h. Liberei US$ 47M para conciliacao, evitei multa estimada em R$ 12M e garanti que o cutover ocorresse na data original. Nenhum cliente priority cancelou contrato e o Bradesco incorporou meu runbook ao playbook definitivo. O CFO registrou em ata que eu fui o owner do resultado.`,
    l: `Eu aprendi que ownership em migracao critica e colocar o cliente e o regulador na mesma mesa antes da crise explodir. Dados irrefutaveis, cadencia de guerra e mecanismos permanentes (scripts, paines, carta do Bacen) transformaram um risco existencial em processo repetivel que sigo aplicando.`,
  },
  en: {
    s: `I had built a parallel audit routine for the Banquo program and, 21 days before cutover to Bradesco, it surfaced 2,847 unreconciled international payments totaling US$47M. BACEN had been fining banks up to 0.5% of assets for similar gaps, and 18 priority clients were already complaining about delays beyond 48 hours. Every director wanted to push the fix past closing so the timeline would stay untouched.`,
    t: `Although I was the PMO and not the ops owner, I told the CEO I would take full end-to-end ownership. I committed to zero the backlog before cutover, shield priority clients with daily communication, and walk away with a BACEN letter validating our controls.`,
    a: `Within 36 hours I stood up a tiger team across Operations, Compliance, IT, Correspondent Banking, and Finance with a war cadence (20-minute daily, 6 p.m. review, 48-hour executive report). (1) I dived into 300 sample transactions, wrote five SQL scripts crossing SAP, SWIFT, core banking, and correspondent statements, and classified three critical patterns (FX deltas, truncated SWIFT fields, timestamp drift). (2) I segmented the backlog by risk tier (A/B/C), defined SLAs (A = 12h, B = 24h, C = 48h), and automated 80% of cases with an RPA that ran in shadow mode for five days. (3) I launched a Grafana dashboard showing MTTR, exposure, and volume by country; any anomaly above US$250K pinged my phone. (4) When the compliance director blocked deployment citing regulatory risk, I flew to Brasilia, presented resolution 4.557, added dual approval on segregated duties, and walked out with BACEN's no-objection letter in 24 hours. (5) To keep priority clients safe I opened a 24/7 hotline, sent daily status updates, and offered fee waivers to 12 critical companies; that kept their NPS drop to two points versus an 18-point forecast.`,
    r: `In 38 days the backlog hit zero: 2,276 cases (80%) cleared automatically, 427 (15%) via manual playbook, and 144 (5%) escalated to correspondents within 48 hours. I released US$47M, avoided a R$12M fine, and kept cutover on the original date. No priority client churned, Bradesco embedded my runbook into its cutover playbook, and the CFO recorded me as the owner of the outcome.`,
    l: `I learned that migration ownership means putting the customer and the regulator in the room before the crisis explodes. Hard data, war-room cadence, and permanent mechanisms (scripts, dashboards, BACEN letter) turned an existential risk into a repeatable process I still deploy.`,
  },
  fups: [
    {
      q: "Como voce calculou o risco financeiro para convencer o board?",
      a: "Eu projetei multa potencial (0,5% dos ativos), custo de retrabalho (10 FTEs por seis meses) e risco de churn de clientes priority para demonstrar R$ 12M evitados se zerasse o backlog.",
      q_en: "How did you quantify financial risk for the board?",
      a_en: "I modeled the potential 0.5% asset fine, six months of 10 FTE rework, and priority-client churn to show R$12M avoided by clearing the backlog." 
    },
    {
      q: "Quais indicadores voce monitorou diariamente?",
      a: "Eu acompanhei pagamentos pendentes por risco, tempo medio de reconciliacao, valor travado, NPS priority e incidentes escalados; qualquer desvio acionava o comite.",
      q_en: "Which indicators did you track daily?",
      a_en: "I tracked pending payments by risk, average reconciliation time, blocked value, priority-client NPS, and escalated incidents; any deviation triggered the committee." 
    },
    {
      q: "Como voce garantiu que o RPA nao criasse erros novos?",
      a: "Eu mantive shadow mode por cinco dias, comparei 200 registros manual vs automatizado e so promovi apos 100% de aderencia.",
      q_en: "How did you make sure the RPA didn't introduce new errors?",
      a_en: "I ran a five-day shadow mode, compared 200 manual versus automated records, and only promoted after 100% alignment." 
    },
    {
      q: "Que acoes voce tomou para as excecoes de alto valor?",
      a: "Eu criei squad manual dedicado com compliance e correspondentes, defini playbook de 10 passos e reportei cada caso ao CFO ate a liquidacao.",
      q_en: "What did you do with high-value exceptions?",
      a_en: "I formed a manual squad with compliance and correspondents, wrote a 10-step playbook, and reported every case to the CFO until it cleared." 
    },
    {
      q: "Como voce alinhou Bradesco e HSBC em um unico processo?",
      a: "Eu assinei MOU para reter dois especialistas Bradesco por 60 dias, criei canal unico de decisao e mantive voto de desempate sob minha responsabilidade.",
      q_en: "How did you align Bradesco and HSBC in one process?",
      a_en: "I signed an MOU to retain two Bradesco SMEs for 60 days, opened a single decision channel, and held tie-breaker authority myself." 
    },
    {
      q: "Qual estrategia usou com a area de Compliance?",
      a: "Eu transformei a discussao em fato regulatorio: apresentei resolucao, carta do Bacen e matriz de controle. Isso converteu resistencia em apoio.",
      q_en: "What strategy did you use with Compliance?",
      a_en: "I shifted the debate to regulatory facts: resolution excerpts, BACEN correspondence, and the control matrix, which turned resistance into support." 
    },
    {
      q: "Como voce protegeu a experiencia dos clientes priority?",
      a: "Eu implementei comunicacao diaria, ofereci waiver de tarifas e disponibilizei gerente dedicado; o NPS caiu apenas 2 pontos no grupo top 20.",
      q_en: "How did you protect the priority-client experience?",
      a_en: "I pushed daily updates, granted fee waivers, and assigned a dedicated manager; priority-client NPS dropped only two points among the top 20." 
    },
    {
      q: "Que mecanismos ficaram rodando apos o cutover?",
      a: "Eu deixei script horario de reconciliacao, dashboard em tempo real, checklist de cutover assinado por ambos os bancos e carta do Bacen arquivada.",
      q_en: "Which mechanisms stayed in place after cutover?",
      a_en: "I left an hourly reconciliation script, a real-time dashboard, a dual-signed cutover checklist, and the BACEN letter on file." 
    },
    {
      q: "Como voce engajou stakeholders quando surgiram novos casos?",
      a: "Eu defini RACI com SLAs (12h/24h/48h), cadencia de atualizacao e grupo executivo no WhatsApp para desbloqueio imediato.",
      q_en: "How did you keep stakeholders engaged when new cases appeared?",
      a_en: "I set a RACI with 12h/24h/48h SLAs, a fixed update cadence, and an executive WhatsApp group for instant unblock." 
    },
    {
      q: "Que aprendizado voce reaplicou depois?",
      a: "Eu repliquei a rotina em reconciliacao de cartoes na America Latina e limpei backlog de US$ 18M em 30 dias, reforcando o modelo de ownership.",
      q_en: "What learning did you reuse later?",
      a_en: "I reused the routine in Latin America card reconciliation and cleared a US$18M backlog in 30 days, reinforcing the ownership model." 
    }
  ]
};

export default case_4;
