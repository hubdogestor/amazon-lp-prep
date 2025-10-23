const case_9 = {
  id: "sefaz-emergency-tax-portal-co9",
  title: "Lancei portal Volta por Cima RS em 18 dias após as cheias no Vale do Taquari",
  title_pt: "Lancei portal Volta por Cima RS em 18 dias após as cheias no Vale do Taquari",
  title_en: "Launched Volta por Cima RS tax relief portal in 18 days after Taquari floods",
  company: "SEFAZ/RS",
  period: "09/2024-10/2024",
  keywords: "#crise | #resposta-rápida | #prazo-impossível | #ação-controlada | #desastre",
  isTopCase: true,
  isGoodCase: true,
  pt: {
    s: "Em setembro de 2024, o Vale do Taquari enfrentou a pior enchente em um século, paralisando mais de 30 mil contribuintes e afetando 15 municípios. Como advisor do gabinete da CAGE, fui designado para coordenar as frentes de tecnologia, fiscalização e arrecadação da SEFAZ na resposta à calamidade. O governador decretou estado de emergência e exigiu que a Secretaria implementasse alívio fiscal efetivo em até 72 horas. O fluxo manual disponível levava quatro meses, implicando uma perda estimada de R$ 180 milhões em arrecadação e a falência iminente de milhares de microempresas. Essa perda não era apenas fiscal — era uma ameaça direta à economia regional, à confiança dos contribuintes no Estado e à imagem do governo como capaz de reagir com agilidade em crises. Cada dia de atraso representava R$ 6,3 milhões em prejuízo e novos fechamentos. Os contribuintes estavam em situação de vulnerabilidade extrema e precisavam de resposta concreta e rápida. Meu papel era conceber e executar uma solução operacional segura, simples e eficaz que colocasse os cidadãos no centro da resposta.",
    t: "Recebi da CAGE o mandato para unir as áreas de TI, Procuradoria e Arrecadação sob um único plano de resposta emergencial. A responsabilidade da entrega recaía totalmente sobre mim. Meu objetivo era idealizar e lançar em no máximo 18 dias o programa Volta por Cima RS — um portal fiscal emergencial que processasse pedidos de alívio tributário em minutos, garantisse segurança jurídica e tecnológica, preservasse as receitas do Estado e, sobretudo, aliviasse a situação de milhares de microempreendedores atingidos. A urgência era real e humanitária: qualquer demora resultaria em mais perdas para os contribuintes e mais fechamento de negócios. A obsessão pelo cliente aqui não era abstrata — ela era literal: se eu não agisse, o cliente faliria.",
    a: "Com apenas 72 horas para evitar um vácuo decisório, convoquei um war-room imediato com todas as frentes críticas: TI, Procuradoria Geral, Auditoria e Arrecadação. Apresentei um plano de 18 dias com entregas inegociáveis, sustentado por dados de impacto econômico diário e estimativas de colapso por segmento. Montei uma squad emergencial com 14 profissionais multidisciplinares e defini três pilares para o projeto: (1) arquitetura serverless na AWS; (2) política de corte de escopo explícita (“stop the backlog”); (3) sistema de telemetria auditável pessoalmente. Houve forte resistência inicial — especialmente da TI e da Procuradoria — por receio de precedentes legais e riscos de compliance. Em vez de confrontar, usei simulações de impacto para sensibilizar: cada dia de atraso custava R$ 6,3 milhões e mais de 4.200 empresas já estavam operando sem caixa. Essa evidência desarmou objeções e viabilizou um acordo com base em testes diários de segurança e validações jurídicas a cada 24 horas. Implementei checkpoints a cada 72 horas com entregas mensuráveis, documentei 47 decisões técnicas com matriz de reversibilidade e autorizei cortes de escopo automáticos após 6h de atraso. Em 5 dias lançamos o MVP com cadastro simplificado e deferimento automático para empresas com queda de faturamento ≥30%, com dupla checagem antifraude (score Banrisul + API SEFAZ). Treinei 180 atendentes em três dias com trilha digital de 40 min, simulações remotas e checklist auditado. Configurei painel executivo auditado 3x ao dia por mim, monitorando fila, SLA, NPS e alertas de fraude. Ao detectar 12% de pedidos suspeitos, bloqueei 1.240 CNPJs em 12 minutos, notifiquei contribuintes legítimos e acionei auditoria.",
    r: "O portal Volta por Cima RS entrou no ar exatamente no 18º dia — o lançamento mais rápido da história da SEFAZ-RS. Em três semanas, processamos 28.700 pedidos, concedendo R$ 312 milhões em parcelamentos e moratórias, com R$ 128 milhões em perdas evitadas. O tempo médio de análise caiu de 96 horas para 18 minutos, com 99,4% de disponibilidade, zero incidentes de segurança, e NPS de 76. O sistema antifraude impediu R$ 14 milhões em danos, com 91% dos casos aprovados automaticamente, sem intervenção humana. O projeto reposicionou a SEFAZ como referência em agilidade e confiança, inspirando protocolo nacional no CONFAZ. O modelo foi replicado no plano de estiagem de 2025, com resposta emergencial em 36 minutos. Comprovamos que mesmo em crise extrema é possível agir com obsessão pelo cliente, sem abrir mão da responsabilidade institucional.",
    l: "Aprendi que velocidade em governo só é sustentável com mecanismos claros de reversão, corte de escopo e auditoria. Os três pilares do projeto geraram efeitos concretos: (1) o corte de escopo permitiu cumprir os 18 dias sem backlog; (2) a telemetria antecipou R$ 14 milhões em fraudes e sustentou SLA de 18 minutos; (3) o compliance diário garantiu zero vazamentos e nenhuma glosa. Reforcei que ritmo sem controle gera caos — e que evidência com coragem gera confiança. Esse modelo provou que agir com obsessão pelo cliente é compatível com responsabilidade institucional."
  },
  en: {
    s: "In September 2024, the Taquari Valley faced the worst flood in a century, paralyzing over 30,000 taxpayers across 15 municipalities. As an advisor to the CAGE Executive Office, I was assigned to coordinate SEFAZ’s technology, auditing, and revenue teams in responding to the emergency. The Governor declared a state of emergency and demanded effective tax relief within 72 hours. Manual workflows would take four months, implying BRL 180 million in revenue loss and imminent bankruptcy for thousands of microbusinesses. The loss wasn’t only fiscal—it threatened regional economic survival, taxpayer trust, and the government’s credibility. Every delayed day meant BRL 6.3 million in damages and additional closures. Citizens were in a humanitarian emergency and needed fast, reliable help. My mission was to design and deliver a safe, simple, effective operational solution with the taxpayer at the center.",
    t: "I was mandated to align IT, Legal, and Revenue teams under a single emergency plan. I had full ownership over execution. My goal was to launch the Volta por Cima RS program in 18 days—a tax relief portal capable of processing requests in minutes, securing legal and data compliance, preserving state revenue, and most importantly, alleviating the crisis of tens of thousands of affected taxpayers. This was a literal customer obsession scenario: if I didn’t act, the taxpayer would go bankrupt.",
    a: "Within 72 hours, I convened an emergency war-room with IT, Legal, Audit, and Revenue. I presented a non-negotiable 18-day plan backed by economic impact data and collapse projections by sector. I formed a 14-person squad and built the portal on three pillars: (1) AWS serverless architecture; (2) a scope-cut rule ('stop the backlog') for delivery enforcement; (3) a telemetry system I audited personally. There was strong initial resistance—especially from Legal and IT—due to compliance risks. I defused this using simulations: every day of delay meant BRL 6.3 million lost and 4,200 firms already cashless. They agreed under 24-hour security and legal validation cycles. I implemented 72-hour checkpoints with measurable milestones, logged 47 reversible technical decisions, and enabled automatic scope cut if any stream was delayed over 6 hours. In 5 days we launched an MVP with simplified registration and auto-approval for ≥30% revenue drop. Dual antifraud checks (Banrisul score + SEFAZ API) ensured integrity. I trained 180 agents in three days via 40-min e-learning and remote simulations. I configured an executive dashboard I audited three times a day for queue, SLA, NPS, and fraud. On day 9, we detected 12% suspicious requests; I blocked 1,240 CNPJs in 12 minutes, notified legit customers, and triggered an audit task force.",
    r: "Volta por Cima RS went live on day 18—the fastest launch in SEFAZ history. In three weeks, we processed 28,700 requests, granted BRL 312 million in tax relief, and avoided BRL 128 million in losses. Average handling time dropped from 96 hours to 18 minutes, with 99.4% uptime, zero security incidents, and NPS of 76. The antifraud system blocked BRL 14 million in damages with 91% of cases auto-approved. The project repositioned SEFAZ as a trusted and agile institution, inspiring a national disaster response framework at CONFAZ. The model was replicated in the 2025 drought plan, cutting emergency response to 36 minutes. We proved that extreme crisis can be tackled with true customer obsession—without compromising institutional responsibility.",
    l: "I learned that speed in government is only sustainable with clear mechanisms for rollback, scope cut, and audit. The three design pillars had real impact: (1) the backlog policy guaranteed 18-day delivery; (2) telemetry avoided BRL 14 million in fraud and sustained 18-min SLA; (3) daily compliance ensured zero leaks or audit issues. I proved that pace without control creates chaos—but evidence with courage builds trust. This model showed that customer obsession and institutional responsibility can and must coexist."
  },
  fups: [
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