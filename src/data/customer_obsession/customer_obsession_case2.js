// Case 2 -    s: `Quando o Bradesco decidiu lançar o Next para bater de frente com Nubank e Banco Inter, eu recebi o diagnóstico: NPS 35, churn de 22% nos primeiros 30 dias, onboarding digital com 42% de abandono. O board queria "paridade de features" e ignorava a voz do cliente, os squads reclamavam que abrir espaço para sessões atrapalharia sprints e o financeiro ameaçou cortar budget se o time-to-market caísse. Eu entendi que, se não mudássemos a cultura, seríamos apenas mais um app roxo.` ,
    t: `O desafio crítico que enfrentei foi transformar uma cultura obcecada por features em uma cultura obcecada pelo cliente — e fazer isso em 6 meses sem comprometer velocidade. Eu assumi ownership end-to-end e me comprometi com o CEO do Next a alcançar NPS >=60 em seis meses, reduzir abandono para <20%, churn para <12% e manter o burn rate. Eu também prometi que eu mesmo colocaria o cliente na mesa do board todo mês para quebrar a resistência interna.` ,
    a: `Minha abordagem foi criar mecanismos permanentes de customer obsession em paralelo com execução ágil — quatro frentes simultâneas:

(1) Voz do cliente sem filtro: eu conduzi 40 shadowings (loja, call center, app) e 120 entrevistas em profundidade. Levei ao board o painel "day-one journey" com áudios de clientes — inclusive de um que tentou seis vezes abrir conta. O choque convenceu diretores a me dar carta branca para mudar o roadmap.
    (2) Ritual de Sessão com o Cliente: eu desenhei o formato (cinco clientes por sprint, 90 minutos, matriz de insights) e facilitei as dez primeiras sessões. Na segunda sessão eu provei que upload de documento derrubava 38% dos clientes; parei uma feature de cashback já em desenvolvimento havia oito semanas e priorizei OCR + pré-preenchimento, reduzindo abandono para 12% em duas releases. Os PMs que resistiam passaram a pedir vaga nas sessões.
    (3) Backlog guiado por dados: eu criei o Customer Validation Score (0-5) obrigatório para cada épico e devolvia itens com score <3. Combinei com RICE realista (reach real, impacto em NPS, confiança, esforço). Em 90 dias, 68% do backlog foi repriorizado e o lead time caiu de 11 para 6 semanas.
    (4) Comunidade Ágil @ InovaBra: eu fundei a comunidade interna, trouxe ex-Nubank/Amazon para talks, rodei workshops mensais e amarrei OKRs a KPIs de cliente (NPS, CSAT, Effort). Em três meses, 220 pessoas foram treinadas e sprint reviews passaram a abrir com métrica de cliente, não com burn down chart.
    Paralelamente, eu implantei feedback loop contínuo: NPS transacional pós-feature, heatmaps, recordings e comitê mensal com lojistas para discutir dados de conversão reais.` ,ustomer_obsession
const case_2 = {
  id: "bradesco-next-customer-ritual",
  title: "Liderei o Ritual de Voz do Cliente que Levou o NPS do Next de 35 para 62",
  title_pt: "Liderei o Ritual de Voz do Cliente que Levou o NPS do Next de 35 para 62",
  title_en: "Led the Voice-of-Customer Ritual that Lifted Next's NPS from 35 to 62",
  company: "Bradesco Next",
  period: "01/2017-12/2017",
  isTopCase: true,
  isGoodCase: false,
  pt: {
    s: `Quando o Bradesco decidiu lançar o Next para bater de frente com Nubank e Banco Inter, eu recebi o diagnóstico: NPS 35, churn de 22% nos primeiros 30 dias, onboarding digital com 42% de abandono. O board queria "paridade de features" e ignorava a voz do cliente, os squads reclamavam que abrir espaço para sessões atrapalharia sprints e o financeiro ameaçou cortar budget se o time-to-market caísse. Eu entendi que, se não mudassemos a cultura, seríamos apenas mais um app roxo.` ,
    t: `Eu assumi ownership end-to-end e me comprometi com o CEO do Next a alcançar NPS >=60 em seis meses, reduzir abandono para <20%, churn para <12% e manter o burn rate. Eu também prometi que eu mesmo colocaria o cliente na mesa do board todo mês para quebrar a resistência interna.` ,
    a: `Eu executei em quatro frentes principais:
    (1) Voz do cliente sem filtro: eu conduzi 40 shadowings (loja, call center, app) e 120 entrevistas em profundidade. Levei ao board o painel "day-one journey" com áudios de clientes — inclusive de um que tentou seis vezes abrir conta. O choque convenceu diretores a me dar carta branca para mudar o roadmap.
    (2) Ritual de Sessão com o Cliente: eu desenhei o formato (cinco clientes por sprint, 90 minutos, matriz de insights) e facilitei as dez primeiras sessões. Na segunda sessão eu provei que upload de documento derrubava 38% dos clientes; parei uma feature de cashback já em desenvolvimento havia oito semanas e priorizei OCR + pré-preenchimento, reduzindo abandono para 12% em duas releases. Os PMs que resistiam passaram a pedir vaga nas sessões.
    (3) Backlog guiado por dados: eu criei o Customer Validation Score (0-5) obrigatório para cada épico e devolvia itens com score <3. Combinei com RICE realista (reach real, impacto em NPS, confiança, esforço). Em 90 dias, 68% do backlog foi repriorizado e o lead time caiu de 11 para 6 semanas.
    (4) Comunidade Ágil @ InovaBra: eu fundei a comunidade interna, trouxe ex-Nubank/Amazon para talks, rodei workshops mensais e amarrei OKRs a KPIs de cliente (NPS, CSAT, Effort). Em três meses, 220 pessoas foram treinadas e sprint reviews passaram a abrir com métrica de cliente, não com burn down chart.
    Paralelamente, eu implantei feedback loop contínuo: NPS transacional pós-feature, heatmaps, recordings e comitê mensal com lojistas para discutir dados de conversão reais.` ,
    r: `Em seis meses entreguei NPS 35 -> 62 (+27), churn 22% -> 9,8% (-12,2 p.p.), abandono 42% -> 15%, tempo de abertura 16 -> 4 minutos, ticket de cross-sell +32%, lead time 11 -> 6 semanas, FCR digital 48% -> 79%. 94% dos clientes permaneceram após 12 meses (benchmark 87%). A decisão de parar cashback em desenvolvimento (8 semanas, R$ 680k investido) gerou controvérsia, mas os dados provaram: ROI projetado cashback era 1.8:1 vs. OCR 9.2:1, e pain point upload afetava 38% vs. cashback beneficiaria 12%. Recuperei as 12 semanas de eng para entregar 3 features críticas de pain point. O programa virou referência cultural no Bradesco; cartões e seguros adotaram o ritual em 2018. Recebi o prêmio interno "Cliente em 1° Lugar" e passei a apoiar outras verticais como evangelista de customer obsession.` ,
    l: `Eu aprendi que customer obsession em banco só acontece quando eu coloco a dor do cliente na frente de quem decide e amarro cada investimento a uma métrica de satisfação. Três princípios guiam minhas decisões desde então: (1) Sunk cost é falácia: parar cashback 8 semanas em dev foi difícil, mas ROI cliente (9.2:1) > ROI feature (1.8:1) sempre vence, (2) Pain point severity > feature novelty: 38% dos clientes batendo na parede vs. 12% querendo cashback define prioridade, (3) Decisão reversível com dados: mantive feature flag cashback, testei com 2% usuários após OCR, confirmei baixo uptake (7%), arquivei definitivo. Esse framework de trade-off cliente vs. velocidade foi replicado em 5 produtos Bradesco (cartões +12 NPS, seguros +8 NPS, crédito +15 NPS, investimentos +10 NPS, consignado +6 NPS) com média de 67% reprioritização backlog e -38% lead time. Hoje não aceito backlog sem evidência real e mantenho rituais com clientes como requisito de governança.`
  },
  en: {
    s: `When Bradesco launched Next to fight Nubank and Inter, I inherited NPS 35, 22% churn in the first 30 days, and 42% abandonment in digital onboarding. The board pushed for "feature parity", squads complained that customer sessions would slow sprints, and Finance threatened to cut budget if time-to-market slipped. I knew that without a cultural reset we'd become just another purple icon.` ,
    t: `I took end-to-end ownership and committed to the Next CEO that I would deliver NPS >=60 in six months, drop abandonment below 20%, churn below 12%, and hold burn rate steady. I also promised to bring the customer's voice to the board table every month to break internal resistance.` ,
    a: `I executed across four fronts:
    (1) Unfiltered customer voice: I ran 40 shadowings (stores, call center, app) and 120 deep interviews. I presented the "day-one journey" panel with real audio—including a customer who tried six times to open an account—and the board granted freedom to reshape the roadmap.
    (2) Customer Session ritual: I designed the format (five customers per sprint, 90 minutes, insight matrix) and facilitated the first ten sessions. By session two I proved document upload killed 38% of prospects; I stopped a cashback feature eight weeks into development and prioritized OCR + pre-fill, cutting abandonment to 12% in two releases. Skeptical PMs started fighting for seats.
    (3) Data-driven backlog: I created a mandatory Customer Validation Score (0-5) for every epic and sent anything below three back for more evidence. I paired it with honest RICE (real reach, NPS impact, confidence, effort). Within 90 days 68% of the backlog was reprioritized and lead time fell from eleven to six weeks.
    (4) Agile Community @ InovaBra: I founded the internal community, brought ex-Nubank/Amazon speakers, ran monthly workshops, and forced customer KPIs (NPS, CSAT, Effort) into every OKR. In three months 220 people had been trained and sprint reviews began with customer metrics instead of burn-down charts.
    I also installed continuous feedback loops: post-feature transactional NPS, heatmaps, session recordings, and a monthly conversion council with merchants.` ,
    r: `Six months post-launch I delivered NPS 35 -> 62 (+27), churn 22% -> 9.8% (-12.2 p.p.), abandonment 42% -> 15%, account opening 16 -> 4 minutes, cross-sell ticket +32%, lead time 11 -> 6 weeks, and digital FCR 48% -> 79%. We retained 94% of customers after 12 months (benchmark 87%). The decision to stop cashback mid-development (8 weeks, R$680k invested) sparked controversy, but data proved it: projected cashback ROI 1.8:1 vs. OCR 9.2:1, and upload pain point affected 38% vs. cashback benefiting 12%. I recovered the 12 eng weeks to deliver 3 critical pain-point features. The program became the cultural blueprint for Bradesco; cards and insurance adopted it in 2018. I received the "Cliente em 1° Lugar" award and now coach other verticals on customer obsession.` ,
    l: `I learned that customer obsession in banking only happens when I put the customer's pain in front of decision-makers and tie every investment to satisfaction metrics. Three principles guide my decisions since then: (1) Sunk cost is fallacy: stopping cashback 8 weeks into dev was hard, but customer ROI (9.2:1) > feature ROI (1.8:1) always wins, (2) Pain point severity > feature novelty: 38% customers hitting wall vs. 12% wanting cashback defines priority, (3) Reversible decision with data: kept cashback feature flag, tested with 2% users after OCR, confirmed low uptake (7%), archived permanently. This customer vs. velocity trade-off framework was replicated across 5 Bradesco products (cards +12 NPS, insurance +8 NPS, credit +15 NPS, investments +10 NPS, payroll loans +6 NPS) with average 67% backlog reprioritization and -38% lead time. Today I reject backlog items without real evidence and keep fixed customer rituals as a governance requirement.`
  },
  fups: [
    {
      "q": "Como você estruturou as 120 entrevistas para garantir profundidade e diversidade?",
      "a": "Cruzei risco, NPS, ticket médio e canal de aquisição; usei roteiro semi-estruturado cobrindo onboarding, uso diário e suporte.",
      "q_en": "How did you structure the 120 interviews to keep depth and diversity?",
      "a_en": "I blended risk, NPS tier, average ticket, and acquisition channel, then ran semi-structured guides covering onboarding, daily use, and support." 
    },
    {
      "q": "Qual métrica provou que cancelar a feature de cashback era a decisão certa?",
      "a": "Apresentei heatmap do funil, NPS transacional de 24 pontos naquele fluxo e 12 semanas de desenvolvimento devolvidas ao roadmap.",
      "q_en": "Which metric proved canceling the cashback feature was the right call?",
      "a_en": "I showed the funnel heatmap, a 24-point transactional NPS, and the 12 development weeks released back to the roadmap." 
    },
    {
      "q": "Como funcionava o Customer Validation Score no dia a dia?",
      "a": "Cada épico precisava de cinco evidências de cliente e estimativa de impacto no NPS; score <3 bloqueava a execução até coletarmos mais dados.",
      "q_en": "How did the Customer Validation Score work day to day?",
      "a_en": "Each epic demanded five customer evidence points and an NPS impact estimate; anything under three was blocked until we gathered more data." 
    },
    {
      "q": "Quais indicadores você monitorava após cada lançamento?",
      "a": "NPS transacional, tempo de tarefa, erros por etapa, adoção e churn da jornada. Compartilhei dashboard diário com squad e diretoria.",
      "q_en": "Which indicators did you monitor after each release?",
      "a_en": "Transactional NPS, task time, errors per step, adoption, and journey churn. I shared a daily dashboard with the squad and leadership." 
    },
    {
      "q": "Como mediu o impacto da Comunidade Ágil no time-to-market?",
      "a": "Comparei lead time antes/depois (11 -> 6 semanas) e contabilizei 23 features ajustadas por insights de cliente.",
      "q_en": "How did you measure the Agile Community's impact on time-to-market?",
      "a_en": "I compared lead time before/after (11 -> 6 weeks) and counted 23 features reshaped by customer insight." 
    },
    {
      "q": "Como convenceu marketing a aceitar lançamentos incrementais?",
      "a": "Mostrei que cohorts liberados em ondas tinham adoção 30% maior. Entreguei métricas semanais e deixei o diretor escolher a próxima leva.",
      "q_en": "How did you convince marketing to accept incremental launches?",
      "a_en": "I showed staggered cohorts delivered 30% higher adoption. I delivered weekly metrics and let the CMO choose the next cohort." 
    },
    {
      "q": "Como integrou squads técnicos à voz do cliente?",
      "a": "Todo engenheiro precisava assistir a uma sessão por trimestre e o PR merge só era liberado após revisão das evidências de cliente no ticket.",
      "q_en": "How did you embed technical squads into the customer voice?",
      "a_en": "Every engineer watched one session per quarter and PR merges only happened after reviewing the customer evidence in the ticket." 
    },
    {
      "q": "Como evitou aumento de custos enquanto melhorava experiência?",
      "a": "Eliminei features sem impacto, renegociei vendors caros por APIs e amarrei novos investimentos a ROI + NPS documentados.",
      "q_en": "How did you avoid cost increases while improving experience?",
      "a_en": "I killed low-impact features, replaced expensive vendors with APIs, and tied new investments to documented ROI plus NPS gains." 
    },
    {
      "q": "Que resultado sensibilizou o CFO a colocar NPS no bônus?",
      "a": "Mostrei correlação +0,72 entre NPS e receita recorrente e simulei perda de R$ 45M sem promoters. Ele pediu a inclusão imediata.",
      "q_en": "Which result convinced the CFO to add NPS to bonuses?",
      "a_en": "I presented a +0.72 correlation between NPS and recurring revenue and simulated a R$45M loss without promoters. He asked to include NPS immediately." 
    },
    {
      "q": "Que lição levou para outros produtos do Bradesco?",
      "a": "Levei Customer Validation Score + sessões com clientes para cartões e seguros; ambos registraram ganhos de dois dígitos de NPS em 2018.",
      "q_en": "What lesson did you take to other Bradesco products?",
      "a_en": "I exported the Customer Validation Score plus customer sessions to cards and insurance; both delivered double-digit NPS gains in 2018." 
    }
  ]
};

export default case_2;
