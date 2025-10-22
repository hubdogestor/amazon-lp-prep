const case_3 = {
  "id": "bradesco-international-payments",
  "title": "Crise de Pagamentos Internacionais -- Virada de Custos e SLAs em 90 Dias",
  "title_pt": "Crise de Pagamentos Internacionais -- Virada de Custos e SLAs em 90 Dias",
  "title_en": "International Payments Crisis -- Turning Costs and SLAs Around in 90 Days",
  "company": "Bradesco",
  "period": "01/2017-06/2017",
  "keywords": "#crise | #turnaround | #assumir-responsabilidade | #sla | #pagamentos",
  "isTopCase": false,
  "isGoodCase": false,
  "pt": {
    "s": "Janeiro de 2017. A reunião de resultados da área internacional começou tensa. No telão, o relatório mostrava uma curva crescente que ninguém conseguiu explicar. O custo médio por transação de pagamentos internacionais havia subido de R$ 47 para R$ 54 em seis meses (+15%), e o SLA médio passara de 2h50 para 4h10 -- um atraso que impactava clientes premium de custódia internacional, especialmente nas Cayman Islands. O NPS desses clientes despencou de 66 para 48, e três deles -- responsáveis por quase 40% das receitas da unidade offshore -- ameaçavam sair. O CFO interrompeu a discussão: “90 dias ou corto o headcount”. O prazo era para estabilizar custos, SLAs e risco de compliance. Embora eu fosse coordenador de Transformação Digital, alocado na workstream de Asset Management sob Estratégia Corporativa, eu dominava fluxos SWIFT, correspondentes e controles BACEN. Decidi assumir ownership total da virada.",
    "t": "Minha tarefa foi liderar a reversão completa em 90 dias, unindo frentes técnicas, operacionais e regulatórias. A meta: SLA < 3 horas, -12% de custo e recuperação do NPS premium. O trade-off: pausar features de marketing digital por seis semanas para reconstruir reconciliação e corrigir causas-raiz.",
    "a": "Formei, com apoio do CFO, força-tarefa de sete especialistas de Operações, Compliance, TI, Comercial e Procurement. Rituais: daily de 30 minutos, métrica única e decisões imediatas. Modelei business case com três cenários, cruzando custo incremental, risco de churn (R$ 1,2 M/ano) e multas BACEN (0,5% dos ativos). Orçamento liberado: R$ 120 mil. Analisei 160 mil transações dos últimos 90 dias em Python e mostrei que 68% do custo vinha da reconciliação manual e tabelas antigas de correspondentes. Projetei novo workflow com RPA integrando SWIFT MT103 ao ledger e score de risco para escalonamento. Negociei personally novos acordos de volume (-18 bps). Quando Compliance travou o rollout, levei framework ao BACEN em Brasília e consegui carta de não oposição em 48 horas. Paralelamente, abri canal 24/7 com clientes premium e criei dashboard em Grafana (SLA, custo, backlog, churn).",
    "r": "Em 74 dias, a operação mudou. Custo médio -14% (R$ 54→46,4), SLA 2h32 (-38%), backlog -86% (1.120→160), NPS 48→74. Evitei R$ 4,8 M/ano em perdas e neutralizei risco de churn. Escrevi manual de 21 páginas, treinei quatro gerentes e o modelo virou template corporativo para crises operacionais.",
    "l": "Aprendi que leadership é somar técnica e coragem para decidir. Corrigir estruturas gera mais valor que lançar features. Desde então, uso métrica única, dono único e decisão rápida como base de qualquer virada."
  },
  "en": {
    "s": "January 2017. The international division’s results meeting started tense. The chart showed a cost curve no one could justify. Average cost per international payment rose from R$47 to R$54 (+15%) while SLA slipped from 2h50 to 4h10, hitting premium custody clients mainly in Cayman Islands. Premium NPS fell from 66 to 48 and three major clients (40% of offshore revenue) planned to leave. The CFO stated: “90 days or I cut headcount.” The deadline was to stabilize costs, SLAs, and compliance risk. As Digital Transformation Coordinator under Corporate Strategy/Asset Management, I decided to take full ownership and lead the turnaround.",
    "t": "My task was to lead the complete recovery in 90 days. Goals: SLA < 3 hours, -12% average cost, and restored premium NPS. I made a strategic trade-off: stopped digital feature rollouts for six weeks to rebuild reconciliation.",
    "a": "Supported by the CFO, I built a seven-person task force from Operations, Compliance, IT, Commercial, and Procurement. We held 30-minute war rooms with single metric focus and immediate decisions. Built 3-scenario business case crossing incremental cost, R$1.2 M/year churn risk, and BACEN fines (0.5% assets), securing R$120 K budget. Analyzed 160 K transactions in Python showing 68% cost from manual reconciliation and outdated pricing. Redesigned workflow with RPA linking SWIFT MT103 to ledger and a risk score for escalation. Personally negotiated -18 bps volume contracts. When Compliance blocked rollout, flew to Brasília to present framework to BACEN and secured no-objection in 48h. Meanwhile, opened 24/7 client channel and Grafana dashboard (SLA, cost, backlog, churn).",
    "r": "In 74 days operation was restored: -14% cost, SLA 2h32 (-38%), -86% backlog, NPS 48→74, saving R$ 4.8 M/year. Playbook (21 pages) trained 4 managers and became corporate template.",
    "l": "I learned leadership joins technical depth and courage to decide. Fixing foundations creates more value than shipping new features. Single metric, single owner, fast decisions -- that framework remains my default."
  },
  "fups": [
    {
      "q": "Qual foi seu maior erro ou falha nesse caso?",
      "a": "Programei o RPA sem considerar curva de aprendizado da equipe. O cronograma atrasou 10 dias. Ajustei o plano, comuniquei o CFO e mantive credibilidade. Mostrei a queda de custo médio de R$ 54 para R$ 46,4 (-14%) e o SLA reduzido para 2h32 (-38%).",
      "q_en": "What was your biggest mistake or failure?",
      "a_en": "I underestimated the team's RPA learning curve; schedule slipped 10 days. I adjusted plan, informed CFO, and preserved credibility. I showed average cost dropping from BRL 54 to BRL 46.4 (-14%) and SLA tightening to 2h32 (-38%)."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Começaria o trabalho de gestão de mudança em paralelo ao técnico, para engajar Operações desde o design. Detalhei o backlog derrubado de 1.120 para 160 casos (-86%) e o NPS subindo de 48 para 74 em 74 dias.",
      "q_en": "What would you do differently today?",
      "a_en": "Would start change management alongside technical design to engage Operations early. I detailed the backlog collapsing from 1,120 to 160 cases (-86%) and NPS climbing from 48 to 74 within 74 days."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "O bloqueio de Compliance. Tive de ir pessoalmente ao BACEN para demonstrar os controles e liberar o rollout. Reforcei que evitamos R$ 4,8 milhões anuais em perdas e o manual de 21 páginas virou template corporativo.",
      "q_en": "What was the hardest obstacle to overcome?",
      "a_en": "Compliance blocking rollout; I personally presented controls to BACEN to obtain clearance. I highlighted the BRL 4.8M annual loss avoided and the 21-page playbook that became the corporate crisis template."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Multa regulatória, perda de clientes e falha operacional. Mitiguei com dupla validação, auditoria semanal e alinhamento prévio com o BACEN. Mostrei a queda de custo médio de R$ 54 para R$ 46,4 (-14%) e o SLA reduzido para 2h32 (-38%).",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "Regulatory fine, client churn, operational failure -- mitigated via dual validation, weekly audit, and prior BACEN alignment. I showed average cost dropping from BRL 54 to BRL 46.4 (-14%) and SLA tightening to 2h32 (-38%)."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Usei 160 mil transações, custo unitário e spread médio por corredor. Cada 1% de eficiência equivalia a R$ 78 mil por ano. Detalhei o backlog derrubado de 1.120 para 160 casos (-86%) e o NPS subindo de 48 para 74 em 74 dias.",
      "q_en": "What data did you use and what was the rationale?",
      "a_en": "Used 160K transactions, unit cost and average spread per corridor; each 1% efficiency = R$78K/year. I detailed the backlog collapsing from 1,120 to 160 cases (-86%) and NPS climbing from 48 to 74 within 74 days."
    },
    {
      "q": "Como você usou o aprendizado desse caso em outras frentes?",
      "a": "Replicando o formato de war room e métrica única em três regiões, treinando gestores em gestão de crise. Reforcei que evitamos R$ 4,8 milhões anuais em perdas e o manual de 21 páginas virou template corporativo.",
      "q_en": "How did you use this learning elsewhere?",
      "a_en": "Replicated war-room and single-metric model in three regions, training managers in crisis management. I highlighted the BRL 4.8M annual loss avoided and the 21-page playbook that became the corporate crisis template."
    },
    {
      "q": "Por que decidiu pausar novas features de marketing e como justificou esse trade-off?",
      "a": "Mostrei ROI técnico de 35% menos retrabalho e 25% menos downtime. O CFO e o Marketing aprovaram a priorização estrutural. Mostrei a queda de custo médio de R$ 54 para R$ 46,4 (-14%) e o SLA reduzido para 2h32 (-38%).",
      "q_en": "Why did you pause new marketing features and how did you justify the trade-off?",
      "a_en": "Presented ROI showing 35% less rework and 25% less downtime; CFO and Marketing approved structural focus. I showed average cost dropping from BRL 54 to BRL 46.4 (-14%) and SLA tightening to 2h32 (-38%)."
    },
    {
      "q": "Como garantiu que a força-tarefa permanecesse alinhada às metas nos 90 dias?",
      "a": "Defini métrica única de custo médio e SLA p95 com painel diário; nenhuma reunião fora dos indicadores era permitida. Detalhei o backlog derrubado de 1.120 para 160 casos (-86%) e o NPS subindo de 48 para 74 em 74 dias.",
      "q_en": "How did you keep the task force aligned during the 90 days?",
      "a_en": "Defined single average-cost/SLA metric with daily panel; no off-metric discussions allowed. I detailed the backlog collapsing from 1,120 to 160 cases (-86%) and NPS climbing from 48 to 74 within 74 days."
    },
    {
      "q": "Durante a negociação com bancos correspondentes, quais foram os maiores desafios e como superou?",
      "a": "Os bancos pediam volume garantido. Usei históricos e projeções de fluxo para mostrar viabilidade; consegui redução de 18 bps. Reforcei que evitamos R$ 4,8 milhões anuais em perdas e o manual de 21 páginas virou template corporativo.",
      "q_en": "During correspondent bank negotiation, what challenges did you face?",
      "a_en": "Banks requested guaranteed volume; I used historical data and flow projections, achieving 18bps discount. I highlighted the BRL 4.8M annual loss avoided and the 21-page playbook that became the corporate crisis template."
    },
    {
      "q": "Como convenceu o diretor de Compliance a liberar o rollout do RPA?",
      "a": "Apresentei framework de controles, medi risco residual e levei carta do BACEN; decisão baseada em fato, não opinião. Mostrei a queda de custo médio de R$ 54 para R$ 46,4 (-14%) e o SLA reduzido para 2h32 (-38%).",
      "q_en": "How did you convince Compliance to approve the RPA rollout?",
      "a_en": "Presented control framework, measured residual risk, and showed BACEN no-objection letter. I showed average cost dropping from BRL 54 to BRL 46.4 (-14%) and SLA tightening to 2h32 (-38%)."
    },
    {
      "q": "Que indicadores usava diariamente para medir avanço?",
      "a": "Custo médio, backlog, taxa de exceção e SLA p95, com alertas >5%. Atualização a cada 15 min. Detalhei o backlog derrubado de 1.120 para 160 casos (-86%) e o NPS subindo de 48 para 74 em 74 dias.",
      "q_en": "Which indicators did you track daily?",
      "a_en": "Average cost, backlog, exception rate, SLA p95; >5% deviation alerts refreshed every 15 min. I detailed the backlog collapsing from 1,120 to 160 cases (-86%) and NPS climbing from 48 to 74 within 74 days."
    },
    {
      "q": "Como garantiu sustentabilidade dos resultados após sua saída?",
      "a": "Deixei manual, treinei substitutos e vinculei bônus de área ao SLA. Mantiveram performance >95% por dois anos. Reforcei que evitamos R$ 4,8 milhões anuais em perdas e o manual de 21 páginas virou template corporativo.",
      "q_en": "How did you ensure result sustainability after you left?",
      "a_en": "Delivered manual, trained successors, tied bonuses to SLA; kept >95% performance for two years. I highlighted the BRL 4.8M annual loss avoided and the 21-page playbook that became the corporate crisis template."
    },
    {
      "q": "Como avaliou ROI real da iniciativa?",
      "a": "Economias e perdas evitadas totalizaram R$ 9,1 M/ano para R$ 120 K de custo. Mostrei a queda de custo médio de R$ 54 para R$ 46,4 (-14%) e o SLA reduzido para 2h32 (-38%).",
      "q_en": "How did you evaluate real ROI?",
      "a_en": "Savings + losses avoided = R$9.1 M/year for R$120 K investment. I showed average cost dropping from BRL 54 to BRL 46.4 (-14%) and SLA tightening to 2h32 (-38%)."
    },
    {
      "q": "Como geriu a pressão do CFO durante o prazo?",
      "a": "Transparência semanal e checkpoints de 10 dias; o CFO acompanhava progresso em tempo real. Detalhei o backlog derrubado de 1.120 para 160 casos (-86%) e o NPS subindo de 48 para 74 em 74 dias.",
      "q_en": "How did you handle CFO pressure under deadline?",
      "a_en": "Weekly transparency and 10-day checkpoints; CFO tracked real-time progress. I detailed the backlog collapsing from 1,120 to 160 cases (-86%) and NPS climbing from 48 to 74 within 74 days."
    },
    {
      "q": "O dashboard virou padrão. Qual foi seu papel na escalabilidade?",
      "a": "Desenhei arquitetura e treinei 12 analistas para replicar o modelo em Tesouraria e Seguros. Reforcei que evitamos R$ 4,8 milhões anuais em perdas e o manual de 21 páginas virou template corporativo.",
      "q_en": "The dashboard became standard. What was your scaling role?",
      "a_en": "Designed architecture and trained 12 analysts to replicate in Treasury and Insurance. I highlighted the BRL 4.8M annual loss avoided and the 21-page playbook that became the corporate crisis template."
    },
    {
      "q": "O que aprendeu deste caso?",
      "a": "Que clareza e métrica única sustentam viradas rápidas. Sem dados confiáveis, liderança vira opinião. Mostrei a queda de custo médio de R$ 54 para R$ 46,4 (-14%) e o SLA reduzido para 2h32 (-38%).",
      "q_en": "What did you learn from this case?",
      "a_en": "That clarity and single metric sustain fast turnarounds; without reliable data, leadership becomes opinion. I showed average cost dropping from BRL 54 to BRL 46.4 (-14%) and SLA tightening to 2h32 (-38%)."
    }
  ]
};

export default case_3;
