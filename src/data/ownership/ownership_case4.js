// Case 4 - ownership
const case_4 = {
  id: "hsbc-payment-reconciliation",
  title: "Reconciliei US$ 47M de Pagamentos na Reta Final do Cutover",
  title_pt: "Reconciliei US$ 47M de Pagamentos na Reta Final do Cutover",
  title_en: "Reconciled US$ 47M in Payments Ahead of Cutover",
  company: "HSBC",
  period: "03/2016-05/2016",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `"2.847 pagamentos não reconciliados. US$ 47M travados. BACEN pode multar em 0,5% dos ativos — isso é R$ 12M." Minha rotina de auditoria paralela detectou o problema 21 dias antes do cutover Banquo→Bradesco, e todos os diretores queriam empurrar a correção para depois do fechamento para não travar o cronograma. Stakes brutais: 18 clientes priority reclamando de atrasos >48h, multa potencial de R$ 12M do BACEN, e deadline rígido de cutover que não podia ser adiado sob nenhuma circunstância. Alguém precisava assumir ownership de uma reconciliação que não era responsabilidade formal de ninguém — e eu decidi que seria eu.`,
    t: `Diante dessa crise que ameaçava tanto a integridade do cutover quanto a conformidade regulatória, eu decidi assumir ownership total da reconciliação, mesmo sendo PMO e não ops owner. O desafio crítico que enfrentei foi zerar US$ 47M em pagamentos não reconciliados em 38 dias sem atrasar o cutover, proteger 18 clientes priority e sair com carta do BACEN validando controles. Avisei o CEO que assumiria a reconciliação ponta a ponta, me comprometendo a zerar o backlog antes do cutover e manter clientes priority protegidos com comunicação diária.`,
    a: `Eu montei uma tiger team multifuncional em 36h com cadência de guerra e automatizei 80% dos casos críticos. Primeiro, criei tiger team com Operações, Compliance, TI, Correspondentes e Controladoria, estabelecendo cadência de guerra (daily 20 minutos, review 18h, reporte executivo a cada 48h). Segundo, mergulhei em 300 transações amostrais, escrevi cinco scripts SQL cruzando SAP, SWIFT, core banking e extratos de correspondentes, classificando três padrões críticos (erro de câmbio, campos SWIFT truncados, divergência de timestamp). Terceiro, segmentei o backlog em ondas de risco (A/B/C), criei runbook com SLA claro (A = 12h, B = 24h, C = 48h) e automatizei 80% dos casos com RPA shadowed por cinco dias. Quarto, instalei war room com painel no Grafana exibindo MTTR, valor pendente e volume por país; qualquer anomalia acima de US$ 250k gerava alerta para meu celular. Quinto, quando o diretor de Compliance barrou o deploy alegando risco regulatório, voei a Brasília, apresentei a resolução 4.557, adicionei dupla aprovação em funções segregadas e saí com carta de não oposição em 24h. Sexto, para blindar clientes priority, abri linha dedicada 24/7, enviei status diários e ofereci waiver de tarifas para 12 empresas sensíveis; o NPS desse grupo caiu apenas 2 pontos (vs queda projetada de 18).`,
    r: `Eu transformei um risco existencial em processo replicável que protegeu clientes e garantiu o cutover. Em 38 dias zerei o backlog: 2.276 casos (80%) resolvidos automaticamente, 427 (15%) com playbook manual e 144 (5%) escalados a correspondentes com SLA de 48h. Liberei US$ 47M para conciliação, evitei multa estimada em R$ 12M e garanti que o cutover ocorresse na data original. Nenhum cliente priority cancelou contrato e o Bradesco incorporou meu runbook ao playbook definitivo. O mecanismo que criei continuou rodando após o cutover: script horário de reconciliação automatizada reduziu incidentes de pagamento em 73% nos seis meses seguintes (de 42 casos/mês para 11), tempo médio de resolução caiu de 4,3 dias para 1,2 dia e NPS de clientes corporativos subiu de 67 para 81. O CFO registrou em ata que eu fui o owner do resultado e o mecanismo foi replicado em três outras integrações do Bradesco com redução média de 68% no tempo de reconciliação.`,
    l: `Aprendi que ownership em migração crítica é colocar cliente e regulador na mesma mesa antes da crise explodir — mecanismos permanentes (automação 80%+, dashboard, playbook transferível) são mais importantes que heróis. Meu framework de ownership para reconciliação tem três princípios: (1) Mecanismo deve rodar sem intervenção humana (automação 80%+), (2) Dashboard deve alertar antes do problema virar incidente (threshold <US$ 250k) e (3) Playbook deve ser transferível (documentei 127 procedimentos que sobrevivem à minha saída). Esse modelo foi replicado em reconciliação de cartões na América Latina (US$ 18M em 30 dias) e em PIX no Sicredi (zerou backlog de 14k transações em 21 dias), provando que mecanismos são mais importantes que heróis.`
  },
  en: {
    s: `"2,847 unreconciled payments. US$47M stuck. BACEN can fine 0.5% of assets — that's R$12M." My parallel audit routine detected the problem 21 days before Banquo→Bradesco cutover, and all directors wanted to push the fix past closing so the timeline would stay untouched. Brutal stakes: 18 priority clients complaining about delays >48h, potential R$12M BACEN fine, and rigid cutover deadline that couldn't be delayed under any circumstances. Someone needed to take ownership of a reconciliation that was nobody's formal responsibility — and I decided it would be me.`,
    t: `Faced with that crisis threatening both cutover integrity and regulatory compliance, I decided to take total ownership of reconciliation, even being PMO and not ops owner. The critical challenge I faced was zeroing US$47M in unreconciled payments in 38 days without delaying cutover, protecting 18 priority clients, and walking away with BACEN letter validating controls. I told the CEO I would take end-to-end reconciliation ownership, committing to zero the backlog before cutover and keep priority clients protected with daily communication.`,
    a: `I stood up a multifunctional tiger team in 36h with war cadence and automated 80% of critical cases. First, I created tiger team with Operations, Compliance, IT, Correspondents, and Finance, establishing war cadence (20-minute daily, 6 PM review, 48-hour executive report). Second, I dove into 300 sample transactions, wrote five SQL scripts crossing SAP, SWIFT, core banking, and correspondent statements, classifying three critical patterns (FX deltas, truncated SWIFT fields, timestamp drift). Third, I segmented backlog by risk tier (A/B/C), created runbook with clear SLA (A = 12h, B = 24h, C = 48h), and automated 80% of cases with RPA shadowed for five days. Fourth, I launched war room with Grafana dashboard showing MTTR, pending value, and volume by country; any anomaly above US$250K pinged my phone. Fifth, when Compliance director blocked deployment citing regulatory risk, I flew to Brasília, presented resolution 4.557, added dual approval on segregated duties, and walked out with no-objection letter in 24 hours. Sixth, to shield priority clients, I opened 24/7 dedicated line, sent daily status updates, and offered fee waivers to 12 critical companies; their NPS dropped only 2 points (vs projected 18-point drop).`,
    r: `I transformed an existential risk into replicable process that protected clients and ensured cutover. In 38 days I zeroed the backlog: 2,276 cases (80%) resolved automatically, 427 (15%) via manual playbook, and 144 (5%) escalated to correspondents within 48-hour SLA. I released US$47M for reconciliation, avoided estimated R$12M fine, and ensured cutover occurred on original date. No priority client churned and Bradesco embedded my runbook into definitive playbook. The mechanism I created kept running post-cutover: hourly automated reconciliation script reduced payment incidents by 73% over next six months (from 42 cases/month to 11), average resolution time dropped from 4.3 days to 1.2 days, and corporate client NPS rose from 67 to 81. CFO recorded me as owner of the outcome and mechanism was replicated across three other Bradesco integrations with average 68% reduction in reconciliation time.`,
    l: `I learned that ownership in critical migration is putting customer and regulator in the room before crisis explodes — permanent mechanisms (80%+ automation, dashboard, transferable playbook) matter more than heroes. My ownership framework for reconciliation has three principles: (1) Mechanism must run without human intervention (80%+ automation), (2) Dashboard must alert before problem becomes incident (threshold <US$250K), and (3) Playbook must be transferable (I documented 127 procedures that survive my departure). This model was replicated in Latin America card reconciliation (US$18M in 30 days) and Sicredi PIX (cleared 14K transaction backlog in 21 days), proving mechanisms matter more than heroes.`
  },
  fups: [
    {
      "q": "Como você calculou o risco financeiro para convencer o board?",
      "a": "Projetei multa potencial (0,5% dos ativos = R$ 12M), custo de retrabalho (10 FTEs por seis meses = R$ 1,8M) e risco de churn de clientes priority (receita anual de R$ 23M). Total de R$ 36,8M em risco vs. R$ 120k de investimento na solução.",
      "q_en": "How did you quantify financial risk for the board?",
      "a_en": "I modeled potential fine (0.5% of assets = R$12M), rework cost (10 FTEs for six months = R$1.8M), and priority client churn risk (R$23M annual revenue). Total R$36.8M at risk vs. R$120K solution investment."
    },
    {
      "q": "Qual foi o maior desafio técnico na automação da reconciliação?",
      "a": "Sincronizar timestamps entre 4 sistemas (SAP, SWIFT, core banking, correspondentes) com fusos horários diferentes. Criei camada de normalização que converte tudo para UTC+0 e aplica regras de matching baseadas em janela de 15 minutos, resolvendo 80% dos casos automaticamente.",
      "q_en": "What was the biggest technical challenge in reconciliation automation?",
      "a_en": "Synchronizing timestamps across 4 systems (SAP, SWIFT, core banking, correspondents) with different time zones. I created normalization layer that converts everything to UTC+0 and applies matching rules based on 15-minute window, resolving 80% of cases automatically."
    },
    {
      "q": "Como você garantiu que o RPA não criaria novos riscos operacionais?",
      "a": "Rodei em shadow mode por 5 dias, comparando resultados com reconciliação manual. Implementei dupla aprovação para casos >US$ 50k, log completo de auditoria e kill switch que reverte para processo manual em caso de anomalia. Zero falsos positivos nos testes.",
      "q_en": "How did you ensure RPA wouldn't create new operational risks?",
      "a_en": "I ran it in shadow mode for 5 days, comparing results with manual reconciliation. I implemented dual approval for cases >US$50K, complete audit log, and kill switch that reverts to manual process in case of anomaly. Zero false positives in testing."
    },
    {
      "q": "Como você mediu o impacto real nos clientes priority?",
      "a": "NPS dos 18 clientes priority (caiu apenas 2 pontos vs. projeção de 18), tempo de resolução de problemas (4,3→1,2 dias), taxa de cancelamento (0% vs. projeção de 15%), e satisfação com comunicação (linha 24/7 teve 94% de aprovação).",
      "q_en": "How did you measure real impact on priority clients?",
      "a_en": "NPS of 18 priority clients (dropped only 2 points vs. projected 18), problem resolution time (4.3→1.2 days), cancellation rate (0% vs. projected 15%), and communication satisfaction (24/7 line had 94% approval)."
    },
    {
      "q": "Que resistência você enfrentou da equipe de Operações?",
      "a": "Operações temia que automação eliminasse empregos e criasse dependência técnica. Mostrei que RPA liberaria equipe para análise de exceções de maior valor e criei programa de treinamento. Resultado: 3 promoções internas e zero demissões.",
      "q_en": "What resistance did you face from the Operations team?",
      "a_en": "Operations feared automation would eliminate jobs and create technical dependency. I showed RPA would free team for higher-value exception analysis and created training program. Result: 3 internal promotions and zero layoffs."
    },
    {
      "q": "Como você conseguiu carta de não oposição do BACEN em 24 horas?",
      "a": "Preparei dossiê técnico com resolução 4.557, fluxo detalhado dos controles, matriz de segregação de funções e evidências de testes. Mais importante: mostrei que solução reduzia risco operacional vs. processo manual. BACEN aprovou porque viu robustez dos controles.",
      "q_en": "How did you get BACEN no-objection letter in 24 hours?",
      "a_en": "I prepared technical dossier with resolution 4.557, detailed control flow, segregation of duties matrix, and test evidence. Most importantly: I showed solution reduced operational risk vs. manual process. BACEN approved because they saw control robustness."
    },
    {
      "q": "Como você garantiu sustentabilidade da solução após o cutover?",
      "a": "Documentei 127 procedimentos, treinei 6 pessoas-chave em operação do RPA, criei dashboard de monitoramento e estabeleci ritual de review semanal. Mais importante: Bradesco incorporou meu runbook ao playbook oficial, garantindo continuidade institucional.",
      "q_en": "How did you ensure solution sustainability after cutover?",
      "a_en": "I documented 127 procedures, trained 6 key people in RPA operation, created monitoring dashboard, and established weekly review ritual. Most importantly: Bradesco incorporated my runbook into official playbook, ensuring institutional continuity."
    },
    {
      "q": "Qual foi o ROI real da reconciliação automatizada?",
      "a": "ROI de 1.240% no primeiro ano: evitei R$ 12M em multas, economizei R$ 1,8M em retrabalho, retive R$ 23M em receita de clientes priority e liberei 340 horas/mês da equipe (R$ 680k em produtividade). Investimento total: R$ 120k.",
      "q_en": "What was the real ROI of automated reconciliation?",
      "a_en": "1,240% ROI in first year: avoided R$12M in fines, saved R$1.8M in rework, retained R$23M in priority client revenue, and freed 340 hours/month from team (R$680K in productivity). Total investment: R$120K."
    },
    {
      "q": "Como você lidou com a pressão do deadline de cutover?",
      "a": "Transparência radical: dashboard em tempo real com progresso, daily de 20min focado em bloqueadores, escalação imediata de qualquer impedimento >4h. Mais importante: comuniquei riscos reais sem sugar-coating, mantendo expectativas alinhadas com realidade.",
      "q_en": "How did you handle cutover deadline pressure?",
      "a_en": "Radical transparency: real-time dashboard with progress, 20-min dailies focused on blockers, immediate escalation of any impediment >4h. Most importantly: I communicated real risks without sugar-coating, keeping expectations aligned with reality."
    },
    {
      "q": "Que aprendizado dessa experiência você aplicou em outros contextos?",
      "a": "O framework de ownership para reconciliação: (1) Automação 80%+, (2) Dashboard com alertas preventivos, (3) Playbook transferível. Apliquei isso em PIX no Sicredi (14k transações em 21 dias) e cartões na América Latina (US$ 18M em 30 dias) com sucesso similar.",
      "q_en": "What learning from this experience did you apply in other contexts?",
      "a_en": "The ownership framework for reconciliation: (1) 80%+ automation, (2) Dashboard with preventive alerts, (3) Transferable playbook. I applied this to PIX at Sicredi (14K transactions in 21 days) and cards in Latin America (US$18M in 30 days) with similar success."
    }
  ]
};

export default case_4;
