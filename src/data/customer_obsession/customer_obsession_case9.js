const case_9 = {
  "id": "sefaz-emergency-tax-portal-co9",
  "title": "Lancei portal Volta por Cima RS em 18 dias após as cheias no Vale do Taquari",
  "title_pt": "Lancei portal Volta por Cima RS em 18 dias após as cheias no Vale do Taquari",
  "title_en": "Launched Volta por Cima RS tax relief portal in 18 days after Taquari floods",
  "company": "SEFAZ/RS",
  "period": "09/2024-10/2024",
  "keywords": "#crise | #resposta-rápida | #prazo-impossível | #ação-controlada | #desastre",
  "isTopCase": true,
  "isGoodCase": false,
  "pt": {
    "s": "Em setembro de 2024, o Vale do Taquari viveu a pior enchente em um século, paralisando mais de 30 mil contribuintes e afetando 15 municípios. Eu atuava como advisor do gabinete da CAGE, responsável por coordenar as frentes de tecnologia, fiscalização e atendimento da SEFAZ na resposta à calamidade. O governador decretou estado de emergência e exigiu que a Secretaria aliviasse a cobrança de tributos em 72 horas. O fluxo manual levaria quatro meses e causaria perda estimada de R$ 180 milhões em arrecadação, além do colapso de milhares de microempresas. Essa perda não era apenas financeira -- ameaçava a economia regional, a confiança dos contribuintes no Estado e a imagem do governo como capaz de reagir sob crise. Cada dia de atraso significava R$ 6,3 milhões em prejuízo e novas falências. Nesse cenário, meu papel era propor solução operacional em tempo recorde para evitar um colapso econômico local e político nacional.",
    "t": "O desafio foi lançar, em no máximo 18 dias, um portal fiscal plenamente funcional e seguro - respeitando LGPD, compliance tributário, e garantindo rollback instantâneo em caso de falha. Recebi mandato da CAGE para unir as equipes de TI, Procuradoria e Arrecadação sob um único plano de ação, mas a responsabilidade pela entrega recaía diretamente sobre mim. Meu objetivo era erguer o programa Volta por Cima RS -- um portal de alívio fiscal que processasse pedidos em minutos, mantivesse receitas do Estado e salvasse 32 mil microempresas. A pressão era real: cada demora afetava clientes em situação humanitária, e qualquer erro narrativo poderia voltar-se contra a credibilidade da Secretaria.",
    "a": "Com 72 horas de prazo para evitar o vácuo decisório, organizei um war-room imediato com TI, Procuradoria Geral, Auditoria e Arrecadação e apresentei um plano de 18 dias com entregas inegociáveis. Montei uma squad multidisciplinar de 14 profissionais e criei o programa emergencial Volta por Cima RS com base em três fundamentos: arquitetura serverless na AWS, política de corte de escopo (stop the backlog) e telemetria auditoria pessoal. Houve forte oposição inicial - o diretor de TI e a Procuradoria temiam abrir precedentes de compliance. Argumentei com simulações financeiras: cada dia de atraso custava R$ 6,3 milhões e 4 200 empresas já estavam sem caixa. A evidência desarmou a resistência e garantiu assinatura condicional: testes diários de segurança e validações jurídicas em ciclo de 24 horas. Implementei checkpoints a cada 72 horas com objetivos claros: infraestrutura escalável, motor de regras declarativo para ajustes sem redeploy e integração automática com cadastro estadual. Documentei 47 decisões técnicas em matriz de reversibilidade e publiquei regra oficial: atraso acima de seis horas em qualquer frente autorizava corte de escopo sem consulta. Esse foi meu gatilho de ação -- agir antes que o problema crescesse. Em cinco dias o MVP estava ativo, com cadastro simplificado e deferimento automático para empresas com queda de faturamento acima de 30 %. Projetei validação dupla - score antifraude Banrisul + checagem via API SEFAZ - e treinei 180 atendentes em três turnos por trilha e-learning e simulação remota. Configurei painel executivo em Power BI auditado três vezes por dia por mim mesmo, monitorando fila, SLA, NPS e alertas de fraude. Quando detectamos pico de 12 % em pedidos suspeitos, bloqueei 1 240 CNPJs em 12 minutos, avisei clientes legítimos e acionei auditoria para investigação. Durante toda a implantação publiquei boletins públicos a cada seis horas e mantive linha direta com Casa Civil e federação comercial para ajustar regras em tempo real.",
    "r": "O Volta por Cima RS entrou no ar no prazo exato de 18 dias -- o lançamento mais rápido da história da SEFAZ-RS. Em três semanas foram processados 28 700 pedidos de contribuintes, concedendo R$ 312 milhões em parcelamentos e moratórias. O tempo médio de análise caiu de 96 horas para 18 minutos, com 99,4 % de disponibilidade e NPS 76. A fraude prevenida evitou R$ 14 milhões em danos e 91 % dos casos foram aprovados sem intervenção humana. O impacto foi além dos números: a agilidade fortaleceu a imagem da SEFAZ como órgão tecnológico e confiável, inspirando a criação de diretriz nacional no CONFAZ para respostas em desastres naturais. Depois da crise, o modelo de governança rápida foi expandido para outras secretarias e atraiu parcerias com bancos estaduais para novos mecanismos de socorro fiscal.",
    "l": "A principal lição foi aprender que agir com urgência é eficaz apenas quando há mecânica de controle visível. Os três pilares do projeto tiveram efeitos concretos: (1) a política stop the backlog permitiu cumprir os 18 dias sem pedidos represados; (2) a telemetria auditoria pessoal antecipou R$ 14 milhões em fraudes e manutenção de SLA de 18 minutos; (3) a integração compliance garantiu zero vazamentos de dados e nenhuma glosa posterior. Esse framework foi reaplicado no plano de estiagem 2025, reduzindo benefício emergencial para 36 minutos. Comprovei que governo pode agir com agilidade sem abrir mão da responsabilidade -- e que evidência e ritmo salvam empresas tanto quanto leis."
  },
  "en": {
    "s": "In September 2024 massive floods in Vale do Taquari paralyzed 30 000 taxpayers across 15 cities. As advisor to the CAGE Executive Office I was responsible for coordinating technology, auditing and revenue teams. The Governor declared state of emergency and ordered tax relief within 72 hours. Manual procedures would take four months and cause BRL 180 million loss, threatening regional economy and trust in government capacity to respond. Every day of delay meant BRL 6.3 million lost and new closures. My mission was to deliver a safe operational solution in less than three weeks to prevent economic and political collapse.",
    "t": "The goal was to launch a fully compliant tax relief portal within 18 days, ensuring GDPR safety and rollback in case of failure. I had formal mandate to align IT, Legal and Revenue departments but full ownership over execution. The target was Volta por Cima RS - a portal capable of processing requests in minutes and saving 32 000 micro-businesses while preserving state revenue and public trust.",
    "a": "Within 72 hours I set up a crisis war-room and presented an 18-day non-negotiable delivery plan - because every extra day risked economic meltdown and political backlash. I created Volta por Cima RS around three pillars: serverless AWS architecture, explicit scope-cut rule (stop the backlog) and telemetry audited by myself. IT and Legal opposed the timeline citing compliance risk; I defused it using data simulations showing each delay day cost BRL 6.3 million and 4 200 companies already bankrupt. They agreed under daily testing conditions. I formed a 14-person multidisciplinary team and set 72-hour checkpoints for serverless setup, rules engine and taxpayer sync. I logged 47 reversible decisions on a risk matrix and empowered leaders to cut scope independently if any stream delayed six hours. Five days later we released MVP with simplified registration and auto approval for ≥30 % revenue loss. Dual antifraud validation (Banrisul score + invoice API) shielded data integrity. I trained 180 agents through 40-min e-learning and remote role-play. Dashboard reviewed by me 3× daily tracked live queue, SLA and fraud. On day nine, 12 % fraud rise triggered automatic block of 1 240 CNPJs and same-day audit task force. Throughout crisis I published 6-hourly public reports and kept open line with Governor and merchant federation for real-time criteria adjustments.",
    "r": "Volta por Cima RS went live on day 18 - fastest launch in SEFAZ history. In three weeks 28 700 requests processed, BRL 312 million tax support granted, BRL 128 million revenue loss avoided. Average time fell from 96 hours to 18 minutes with 99.4 % uptime and NPS 76. Fraud prevention saved BRL 14 million. Beyond metrics, the initiative reinforced SEFAZ’s position as trusted innovator and inspired CONFAZ and National Treasury protocols for future crises. It also drove internal culture shift toward measurable agility.",
    "l": "I learned that speed in government demands visible control. Three design pillars produced tangible results - scope-cut policy ensured 18-day delivery, telemetry prevented BRL 14 million fraud and kept 18-minute SLA, and daily compliance achieved zero data leak or audit issues. This model was replicated in 2025 drought plan cutting response to 36 minutes. I proved that urgency and responsibility can coexist - evidence and pace save companies as much as policy."
  },
  "fups": [
    {
      "q": "Qual foi seu maior erro ou falha nesse caso?",
      "a": "Subestimei a sobrecarga de comunicação entre áreas técnicas e políticas nas primeiras 48 h; resolvi nomeando um ponto focal único. Mostrei que o portal emergencial ficou pronto em 18 dias e processou 28.700 pedidos em três semanas.",
      "q_en": "What was your biggest mistake or failure in this case?",
      "a_en": "Underestimated communication overload between technical and political fronts; solved by appointing a single focal point. I showed the emergency portal went live on day 18 and handled 28,700 requests in three weeks."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Iniciaria boletins automáticos desde o dia 1 para reduzir especulação e manter transparência constante. Detalhei que concedemos R$ 312 milhões em suporte fiscal e evitamos R$ 128 milhões em perdas.",
      "q_en": "What would you do differently today?",
      "a_en": "Launch automated bulletins from day one to contain speculation and sustain transparency. I detailed BRL 312M granted in fiscal relief while avoiding BRL 128M in losses."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "Resistência simultânea de TI, Procuradoria e Auditoria; venci com simulações financeiras e rodadas diárias de validação áudio-visual. Reforcei que o tempo médio caiu de 96 horas para 18 minutos com 99,4% de disponibilidade.",
      "q_en": "What was the toughest obstacle to overcome?",
      "a_en": "Concurrent resistance from IT, Legal and Audit; overcame through financial simulations and daily joint validations. I reinforced average handling dropping from 96 hours to 18 minutes with 99.4% uptime."
    },
    {
      "q": "Quais foram os principais riscos e como mitigou?",
      "a": "Risco de fraude e vazamento; mitiguei com dupla autenticação, logs WORM e validações jurídicas diárias. Expliquei que o NPS atingiu 76 e 91% dos casos foram aprovados sem intervenção humana.",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "Fraud and data leaks; mitigated via dual validation, WORM logs and daily legal checks. I explained NPS hitting 76 and 91% of cases approved automatically."
    },
    {
      "q": "Que dados sustentaram sua análise de custo-atraso?",
      "a": "Usei série histórica de arrecadação 2023, CNAE e índice de perda de faturamento municipal. Citei que o modelo virou referência do CONFAZ para respostas a desastres naturais.",
      "q_en": "Which data supported your delay-cost analysis?",
      "a_en": "Used 2023 revenue series, CNAE segments and municipal revenue-loss index. I cited the governance becoming CONFAZ's reference for disaster response."
    },
    {
      "q": "Como aplicou o aprendizado em outras equipes?",
      "a": "Implementei o framework 'stop the backlog' em outros órgãos, reduzindo em 60 % ciclos de decisão. Mostrei que o portal emergencial ficou pronto em 18 dias e processou 28.700 pedidos em três semanas.",
      "q_en": "How did you apply this learning to other teams?",
      "a_en": "Implemented 'stop the backlog' framework in other agencies cutting decision cycles by 60 %. I showed the emergency portal went live on day 18 and handled 28,700 requests in three weeks."
    },
    {
      "q": "Como você estimou o custo diário de R$ 6,3 mi?",
      "a": "Cruzei glosas históricas, base CNAE e inadimplência média por segmento afetado. Detalhei que concedemos R$ 312 milhões em suporte fiscal e evitamos R$ 128 milhões em perdas.",
      "q_en": "How did you estimate the daily BRL 6.3 million cost?",
      "a_en": "Cross-checked historical chargebacks, CNAE data and segment default average. I detailed BRL 312M granted in fiscal relief while avoiding BRL 128M in losses."
    },
    {
      "q": "Quais decisões técnicas reversíveis acelerou?",
      "a": "Deleguei 47 pontos à squad para aprovar infraestrutura e layout sem comitê. Reforcei que o tempo médio caiu de 96 horas para 18 minutos com 99,4% de disponibilidade.",
      "q_en": "Which reversible technical decisions did you accelerate?",
      "a_en": "Delegated 47 infra and UI choices to team without committee. I reinforced average handling dropping from 96 hours to 18 minutes with 99.4% uptime."
    },
    {
      "q": "Como funcionou o antifraude em tempo real?",
      "a": "Integração Banrisul + API NF - bloqueio instantâneo de divergências. Expliquei que o NPS atingiu 76 e 91% dos casos foram aprovados sem intervenção humana.",
      "q_en": "How did real-time antifraud work?",
      "a_en": "Banrisul score plus invoice API - instant block of mismatches. I explained NPS hitting 76 and 91% of cases approved automatically."
    },
    {
      "q": "Quais indicadores acompanhava no painel?",
      "a": "SLA médio, fila ativa, NPS e alertas de fraude em tempo real. Citei que o modelo virou referência do CONFAZ para respostas a desastres naturais.",
      "q_en": "Which indicators did you track on the dashboard?",
      "a_en": "Average SLA, live queue, NPS and real-time fraud alerts. I cited the governance becoming CONFAZ's reference for disaster response."
    },
    {
      "q": "Como treinou 180 atendentes tão rápido?",
      "a": "Trilha digital de 40 min + simulações remotas e checklist auditado. Mostrei que o portal emergencial ficou pronto em 18 dias e processou 28.700 pedidos em três semanas.",
      "q_en": "How did you train 180 agents so fast?",
      "a_en": "40-min digital training plus remote role-play and audited checklist. I showed the emergency portal went live on day 18 and handled 28,700 requests in three weeks."
    },
    {
      "q": "Que sinais acionaram o bloqueio de 1 240 CNPJs?",
      "a": "Padrões anômalos de CNAE e nota fiscal com registros duplicados. Detalhei que concedemos R$ 312 milhões em suporte fiscal e evitamos R$ 128 milhões em perdas.",
      "q_en": "Which signals triggered the 1 240 CNPJ blocks?",
      "a_en": "Anomalous CNAE patterns and duplicated invoice records. I detailed BRL 312M granted in fiscal relief while avoiding BRL 128M in losses."
    },
    {
      "q": "Como garantiu conformidade com LGPD?",
      "a": "Mapeei bases legais, mantive logs imutáveis e enviei relatórios diários ao DPO. Reforcei que o tempo médio caiu de 96 horas para 18 minutos com 99,4% de disponibilidade.",
      "q_en": "How did you ensure LGPD compliance?",
      "a_en": "Mapped lawful bases, kept immutable logs and sent daily reports to DPO. I reinforced average handling dropping from 96 hours to 18 minutes with 99.4% uptime."
    },
    {
      "q": "Quais resultados convenceram o Tesouro Nacional?",
      "a": "SLA de 18 minutos + inexistência de falhas críticas + fraudes evitadas. Expliquei que o NPS atingiu 76 e 91% dos casos foram aprovados sem intervenção humana.",
      "q_en": "Which results convinced the National Treasury?",
      "a_en": "18-min SLA, zero critical failures and fraud prevention cases. I explained NPS hitting 76 and 91% of cases approved automatically."
    },
    {
      "q": "Como institucionalizou o stop the backlog na SEFAZ?",
      "a": "Criei playbook de 10 dias, treinei 62 gestores regionais e amarrei a OKRs. Citei que o modelo virou referência do CONFAZ para respostas a desastres naturais.",
      "q_en": "How did you institutionalize stop the backlog at SEFAZ?",
      "a_en": "Built 10-day playbook, trained 62 regional managers and linked to OKRs. I cited the governance becoming CONFAZ's reference for disaster response."
    },
    {
      "q": "Como alinhou stakeholders em prazo tão curto?",
      "a": "Reuni TV executiva diária com decisões visíveis e co-assinatura do gabinete civil. Mostrei que o portal emergencial ficou pronto em 18 dias e processou 28.700 pedidos em três semanas.",
      "q_en": "How did you align stakeholders in such a short timeframe?",
      "a_en": "Held daily executive briefings with visible decisions and Governor’s Office co-sign. I showed the emergency portal went live on day 18 and handled 28,700 requests in three weeks."
    },
    {
      "q": "Que critérios usou para definir as 47 decisões técnicas?",
      "a": "Classifiquei por reversibilidade, impacto no prazo e risco de re-deploy. Detalhei que concedemos R$ 312 milhões em suporte fiscal e evitamos R$ 128 milhões em perdas.",
      "q_en": "Which criteria defined the 47 technical decisions?",
      "a_en": "Ranked by reversibility, timeline impact and re-deploy risk. I detailed BRL 312M granted in fiscal relief while avoiding BRL 128M in losses."
    },
    {
      "q": "Como manteve eficiência antifraude sem penalizar contribuinte legítimo?",
      "a": "Otimizei gatilhos pelo histórico do contribuinte e feedback do SAC para evitar falsos positivos. Reforcei que o tempo médio caiu de 96 horas para 18 minutos com 99,4% de disponibilidade.",
      "q_en": "How did you keep antifraud efficient without hurting legitimate users?",
      "a_en": "Tuned triggers to taxpayer history and customer-service feedback, minimizing false positives. I reinforced average handling dropping from 96 hours to 18 minutes with 99.4% uptime."
    },
    {
      "q": "Quais melhorias faria para futuras crises?",
      "a": "Automatizaria ainda mais telemetria com IA e criaria sandbox para testes rápidos em simulações de desastre. Expliquei que o NPS atingiu 76 e 91% dos casos foram aprovados sem intervenção humana.",
      "q_en": "What improvements would you apply to future crises?",
      "a_en": "Automate telemetry with AI and build disaster response sandbox for faster testing. I explained NPS hitting 76 and 91% of cases approved automatically."
    },
    {
      "q": "Como o aprendizado influenciou o plano de estiagem 2025?",
      "a": "Reapliquei toda estrutura e dobrei taxa de adoção digital sem aumentar inadimplência. Citei que o modelo virou referência do CONFAZ para respostas a desastres naturais.",
      "q_en": "How did this learning influence the 2025 drought plan?",
      "a_en": "Replicated structure doubling digital adoption while keeping default flat. I cited the governance becoming CONFAZ's reference for disaster response."
    },
    {
      "q": "Como prova que agir rápido não compromete segurança ou qualidade?",
      "a": "Nenhum incidente de dados e 100 % de auditorias aprovadas em 2025 confirmaram a solidez do modelo. Mostrei que o portal emergencial ficou pronto em 18 dias e processou 28.700 pedidos em três semanas.",
      "q_en": "How do you prove fast action did not harm quality?",
      "a_en": "Zero data incidents and 100 % audit clearance in 2025 validated model soundness. I showed the emergency portal went live on day 18 and handled 28,700 requests in three weeks."
    }
  ]
};

export default case_9;
