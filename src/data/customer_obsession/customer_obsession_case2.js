// Case 2   pt: {
    s: `"Bradesco Next vai ser o Nubank roxo." A provocação do diretor de produtos caiu como soco na primeira reunião de roadmap, janeiro de 2017. Ele estava certo — e eu sabia disso. Tínhamos acabado de lançar para bater de frente com Nubank e Banco Inter, mas os números eram brutais: NPS travado em 35 (Nubank estava em 87), churn de 22% nos primeiros 30 dias, 42% de abandono no onboarding digital. Pior: o board empurrava "paridade de features" feito mantra, ignorando sistematicamente a voz do cliente; os squads reclamavam que abrir espaço para sessões com usuários "atrapalharia sprints"; o financeiro ameaçava cortar budget se o time-to-market caísse um milímetro. Estávamos construindo um app roxo com alma de banco tradicional — e os clientes estavam fugindo. Se eu não virasse essa cultura de dentro pra fora, o Next seria só mais um fracasso de transformação digital arquivado na gaveta do board em 18 meses.`,customer_obsession
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
    s: "O desafio começou quando quando o Bradesco decidiu lançar o Next para bater de frente com Nubank e Banco Inter, eu recebi o diagnóstico: NPS 35, churn de 22% nos primeiros 30 dias, onboarding digital com 42% de abandono. O board queria \"paridade de features\" e ignorava a voz do cliente, os squads reclamavam que abrir espaço para sessões atrapalharia sprints e o financeiro ameaçou cortar budget se o time-to-market caísse. Eu entendi que, se não mudassemos a cultura, seríamos apenas mais um app roxo.",
    t: "O desafio crítico que enfrentei foi transformar uma cultura obcecada por features em uma cultura obcecada pelo cliente — e fazer isso em 6 meses sem comprometer velocidade. Eu assumi ownership end-to-end e me comprometi com o CEO do Next a alcançar NPS >=60 em seis meses, reduzir abandono para <20%, churn para <12% e manter o burn rate. Eu também prometi que eu mesmo colocaria o cliente na mesa do board todo mês para quebrar a resistência interna.",
    a: "Minha abordagem foi criar mecanismos permanentes de customer obsession em paralelo com execução ágil — executei em quatro frentes principais:\n\n(1) Voz do cliente sem filtro: eu conduzi 40 shadowings (loja, call center, app) e 120 entrevistas em profundidade. Levei ao board o painel \"day-one journey\" com áudios de clientes — inclusive de um que tentou seis vezes abrir conta. O choque convenceu diretores a me dar carta branca para mudar o roadmap.\n    (2) Ritual de Sessão com o Cliente: eu desenhei o formato (cinco clientes por sprint, 90 minutos, matriz de insights) e facilitei as dez primeiras sessões. Na segunda sessão eu provei que upload de documento derrubava 38% dos clientes; parei uma feature de cashback já em desenvolvimento havia oito semanas e priorizei OCR + pré-preenchimento, reduzindo abandono para 12% em duas releases. Os PMs que resistiam passaram a pedir vaga nas sessões.\n    (3) Backlog guiado por dados: eu criei o Customer Validation Score (0-5) obrigatório para cada épico e devolvia itens com score <3. Combinei com RICE realista (reach real, impacto em NPS, confiança, esforço). Em 90 dias, 68% do backlog foi repriorizado e o lead time caiu de 11 para 6 semanas.\n    (4) Comunidade Ágil @ InovaBra: eu fundei a comunidade interna, trouxe ex-Nubank/Amazon para talks, rodei workshops mensais e amarrei OKRs a KPIs de cliente (NPS, CSAT, Effort). Em três meses, 220 pessoas foram treinadas e sprint reviews passaram a abrir com métrica de cliente, não com burn down chart.\n    Paralelamente, eu implantei feedback loop contínuo: NPS transacional pós-feature, heatmaps, recordings e comitê mensal com lojistas para discutir dados de conversão reais.",
    r: "O impacto mensurável para os clientes — e para a cultura do Bradesco Next — superou todas as expectativas iniciais.\n\nEm seis meses entreguei NPS 35 -> 62 (+27), churn 22% -> 9,8% (-12,2 p.p.), abandono 42% -> 15%, tempo de abertura 16 -> 4 minutos, ticket de cross-sell +32%, lead time 11 -> 6 semanas, FCR digital 48% -> 79%. 94% dos clientes permaneceram após 12 meses (benchmark 87%). A decisão de parar cashback em desenvolvimento (8 semanas, R$ 680k investido) gerou controvérsia, mas os dados provaram: ROI projetado cashback era 1.8:1 vs. OCR 9.2:1, e pain point upload afetava 38% vs. cashback beneficiaria 12%. Recuperei as 12 semanas de eng para entregar 3 features críticas de pain point. O programa virou referência cultural no Bradesco; cartões e seguros adotaram o ritual em 2018. Recebi o prêmio interno \"Cliente em 1° Lugar\" e passei a apoiar outras verticais como evangelista de customer obsession.",
    l: "A lição principal desse caso transformou como eu lidero produtos em instituições financeiras: customer obsession em banco só acontece quando você coloca a dor do cliente na frente de quem decide e amarra cada investimento a uma métrica de satisfação.\n\nEu aprendi que customer obsession em banco só acontece quando eu coloco a dor do cliente na frente de quem decide e amarro cada investimento a uma métrica de satisfação. Três princípios guiam minhas decisões desde então: (1) Sunk cost é falácia: parar cashback 8 semanas em dev foi difícil, mas ROI cliente (9.2:1) > ROI feature (1.8:1) sempre vence, (2) Pain point severity > feature novelty: 38% dos clientes batendo na parede vs. 12% querendo cashback define prioridade, (3) Decisão reversível com dados: mantive feature flag cashback, testei com 2% usuários após OCR, confirmei baixo uptake (7%), arquivei definitivo. Esse framework de trade-off cliente vs. velocidade foi replicado em 5 produtos Bradesco (cartões +12 NPS, seguros +8 NPS, crédito +15 NPS, investimentos +10 NPS, consignado +6 NPS) com média de 67% reprioritização backlog e -38% lead time. Hoje não aceito backlog sem evidência real e mantenho rituais com clientes como requisito de governança."
  },
  en: {
    s: "The challenge began when when Bradesco launched Next to fight Nubank and Inter, I inherited NPS 35, 22% churn in the first 30 days, and 42% abandonment in digital onboarding. The board pushed for \"feature parity\", squads complained that customer sessions would slow sprints, and Finance threatened to cut budget if time-to-market slipped. I knew that without a cultural reset we'd become just another purple icon.",
    t: "The critical challenge I faced was transforming a feature-obsessed culture into a customer-obsessed one — and doing it in 6 months without compromising velocity. I took end-to-end ownership and committed to the Next CEO that I would deliver NPS >=60 in six months, drop abandonment below 20%, churn below 12%, and hold burn rate steady. I also promised to bring the customer's voice to the board table every month to break internal resistance.",
    a: "My approach was to create permanent customer obsession mechanisms in parallel with agile execution — I executed across four fronts:\n\n(1) Unfiltered customer voice: I ran 40 shadowings (stores, call center, app) and 120 deep interviews. I presented the \"day-one journey\" panel with real audio—including a customer who tried six times to open an account—and the board granted freedom to reshape the roadmap.\n    (2) Customer Session ritual: I designed the format (five customers per sprint, 90 minutes, insight matrix) and facilitated the first ten sessions. By session two I proved document upload killed 38% of prospects; I stopped a cashback feature eight weeks into development and prioritized OCR + pre-fill, cutting abandonment to 12% in two releases. Skeptical PMs started fighting for seats.\n    (3) Data-driven backlog: I created a mandatory Customer Validation Score (0-5) for every epic and sent anything below three back for more evidence. I paired it with honest RICE (real reach, NPS impact, confidence, effort). Within 90 days 68% of the backlog was reprioritized and lead time fell from eleven to six weeks.\n    (4) Agile Community @ InovaBra: I founded the internal community, brought ex-Nubank/Amazon speakers, ran monthly workshops, and forced customer KPIs (NPS, CSAT, Effort) into every OKR. In three months 220 people had been trained and sprint reviews began with customer metrics instead of burn-down charts.\n    I also installed continuous feedback loops: post-feature transactional NPS, heatmaps, session recordings, and a monthly conversion council with merchants.",
    r: "The measurable impact for customers — and for Bradesco Next's culture — exceeded all initial expectations.\n\nSix months post-launch I delivered NPS 35 -> 62 (+27), churn 22% -> 9.8% (-12.2 p.p.), abandonment 42% -> 15%, account opening 16 -> 4 minutes, cross-sell ticket +32%, lead time 11 -> 6 weeks, and digital FCR 48% -> 79%. We retained 94% of customers after 12 months (benchmark 87%). The decision to stop cashback mid-development (8 weeks, R$680k invested) sparked controversy, but data proved it: projected cashback ROI 1.8:1 vs. OCR 9.2:1, and upload pain point affected 38% vs. cashback benefiting 12%. I recovered the 12 eng weeks to deliver 3 critical pain-point features. The program became the cultural blueprint for Bradesco; cards and insurance adopted it in 2018. I received the \"Cliente em 1° Lugar\" award and now coach other verticals on customer obsession.",
    l: "The main lesson from this case transformed how I lead products in financial institutions: customer obsession in banking only happens when you put customer pain in front of decision-makers and tie every investment to satisfaction metrics.\n\nI learned that customer obsession in banking only happens when I put the customer's pain in front of decision-makers and tie every investment to satisfaction metrics. Three principles guide my decisions since then: (1) Sunk cost is fallacy: stopping cashback 8 weeks into dev was hard, but customer ROI (9.2:1) > feature ROI (1.8:1) always wins, (2) Pain point severity > feature novelty: 38% customers hitting wall vs. 12% wanting cashback defines priority, (3) Reversible decision with data: kept cashback feature flag, tested with 2% users after OCR, confirmed low uptake (7%), archived permanently. This customer vs. velocity trade-off framework was replicated across 5 Bradesco products (cards +12 NPS, insurance +8 NPS, credit +15 NPS, investments +10 NPS, payroll loans +6 NPS) with average 67% backlog reprioritization and -38% lead time. Today I reject backlog items without real evidence and keep fixed customer rituals as a governance requirement."
  },
  fups: [
    {
      q: "Como você estruturou as 120 entrevistas para garantir profundidade e diversidade?",
      a: "Cruzei risco, NPS, ticket médio e canal de aquisição; usei roteiro semi-estruturado cobrindo onboarding, uso diário e suporte.",
      q_en: "How did you structure the 120 interviews to keep depth and diversity?",
      a_en: "I blended risk, NPS tier, average ticket, and acquisition channel, then ran semi-structured guides covering onboarding, daily use, and support."
    },
    {
      q: "Qual foi a reação inicial dos PMs quando você parou o desenvolvimento do cashback?",
      a: "Houve resistência forte. Apresentei ROI comparativo (1.8:1 vs 9.2:1), dados de pain point (38% vs 12%) e ofereci feature flag para validar hipótese. Depois do sucesso do OCR, viraram aliados.",
      q_en: "What was the initial PM reaction when you stopped cashback development?",
      a_en: "Strong resistance. I presented comparative ROI (1.8:1 vs 9.2:1), pain point data (38% vs 12%), and offered feature flag to validate hypothesis. After OCR success, they became allies."
    },
    {
      q: "Como você mediu o ROI de 9.2:1 do OCR comparado ao 1.8:1 do cashback?",
      a: "OCR: custo R$ 120k, reduziu 26 p.p. abandono = +R$ 1.1M MRR. Cashback: custo R$ 680k (8 semanas dev + budget), impacto projetado +R$ 1.2M mas só 12% base elegível.",
      q_en: "How did you measure OCR's 9.2:1 ROI versus cashback's 1.8:1?",
      a_en: "OCR: R$120k cost, reduced 26 p.p. abandonment = +R$1.1M MRR. Cashback: R$680k cost (8 weeks dev + budget), projected +R$1.2M but only 12% eligible base."
    },
    {
      q: "Que métricas você usou no Customer Validation Score?",
      a: "Cinco dimensões: problema validado (entrevistas), solução testada (protótipo), viabilidade técnica, impacto no NPS e esforço. Score <3 voltava para descoberta.",
      q_en: "Which metrics did you use in the Customer Validation Score?",
      a_en: "Five dimensions: validated problem (interviews), tested solution (prototype), technical feasibility, NPS impact, and effort. Score <3 went back to discovery."
    },
    {
      q: "Como você convenceu o board a dar carta branca para mudar roadmap?",
      a: "Levei áudios reais de clientes, incluindo um que tentou 6 vezes abrir conta. Mostrei mapa de jornada day-one com 42% abandono. O impacto emocional + dados gerou urgência para mudança.",
      q_en: "How did you convince the board to give freedom to change roadmap?",
      a_en: "I brought real customer audio, including one who tried 6 times to open account. Showed day-one journey map with 42% abandonment. Emotional impact + data created urgency for change."
    },
    {
      q: "Qual foi o formato exato das sessões de cliente que funcionou?",
      a: "90 minutos, 5 clientes por sprint, matriz de insights (problema-solução-hipótese), gravação para squad inteiro, action items com owner. PMs facilitavam por rotação.",
      q_en: "What was the exact customer session format that worked?",
      a_en: "90 minutes, 5 customers per sprint, insight matrix (problem-solution-hypothesis), recording for entire squad, action items with owners. PMs facilitated by rotation."
    },
    {
      q: "Como você manteve velocidade de desenvolvimento durante a transformação cultural?",
      a: "Paralelizei: sessões com clientes aconteciam durante sprints, não interrompiam. Insights viravam backlog refinement. Lead time caiu 45% porque priorizamos certo.",
      q_en: "How did you maintain development velocity during cultural transformation?",
      a_en: "I parallelized: customer sessions happened during sprints, didn't interrupt. Insights became backlog refinement. Lead time dropped 45% because we prioritized right."
    },
    {
      q: "Que resistência você enfrentou do financeiro e como superou?",
      a: "CFO temia aumento de burn rate. Provei que customer obsession reduzia waste: -38% lead time, -R$ 2.1M features canceladas, +32% cross-sell. ROI líquido positivo em 4 meses.",
      q_en: "What financial resistance did you face and how did you overcome it?",
      a_en: "CFO feared burn rate increase. I proved customer obsession reduced waste: -38% lead time, -R$2.1M cancelled features, +32% cross-sell. Net positive ROI in 4 months."
    },
    {
      q: "Como você escalou o modelo para outras verticais do Bradesco?",
      a: "Criei playbook com templates, treinei 15 product leaders, estabeleci rituais mensais cross-verticais. Cartões e seguros adotaram primeiro, depois investimentos.",
      q_en: "How did you scale the model to other Bradesco verticals?",
      a_en: "Created playbook with templates, trained 15 product leaders, established monthly cross-vertical rituals. Cards and insurance adopted first, then investments."
    },
    {
      q: "Qual foi o aprendizado mais importante sobre customer obsession em bancos tradicionais?",
      a: "Bancos são hierárquicos e data-driven. Customer obsession só pega quando você transforma voz do cliente em dados financeiros que executivos entendem: ROI, churn, NPS impacting revenue.",
      q_en: "What was the most important learning about customer obsession in traditional banks?",
      a_en: "Banks are hierarchical and data-driven. Customer obsession only sticks when you transform customer voice into financial data executives understand: ROI, churn, NPS impacting revenue."
    }
  ]
};

export default case_2;
