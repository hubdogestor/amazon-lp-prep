const case_4 = {
  "id": "hsbc-payment-reconciliation",
  "title": "Crise de Reconciliação de Pagamentos -- Zerei US$ 47M às Vésperas do Cutover",
  "title_pt": "Crise de Reconciliação de Pagamentos -- Zerei US$ 47M às Vésperas do Cutover",
  "title_en": "Payment Reconciliation Crisis -- Cleared US$47M on the Eve of Cutover",
  "company": "HSBC",
  "period": "03/2016-05/2016",
  "keywords": "#crise | #reconciliação | #assumir-responsabilidade | #ponta-a-ponta | #pagamentos",
  "isTopCase": false,
  "isGoodCase": false,
  "pt": {
    "s": "Março de 2016. Faltavam 21 dias para o cutover Banquo → Bradesco quando minha rotina de auditoria paralela identificou um número alarmante no dashboard: 2.847 pagamentos não reconciliados, somando US$ 47 milhões. O risco era imediato -- o BACEN poderia aplicar multa de 0,5% dos ativos (≈ R$ 12 milhões), 18 clientes priority sofriam atrasos > 48h e o prazo do cutover era inegociável. Como PMO, eu já respondia pela governança da migração e conhecia em detalhe o fluxo de reconciliação e integração SWIFT. Percebi que ninguém tinha autoridade formal sobre o problema -- Operações, Compliance e TI se limitavam a suas fronteiras -- e decidi assumir a responsabilidade ponta a ponta, unindo planejamento, execução técnica e alinhamento regulatório.",
    "t": "Minha missão tornou-se eliminar integralmente os US$ 47 milhões travados antes do cutover, sem alterar a data e sem perder clientes ou conformidade. Para isso, precisei integrar todas as áreas em um único plano operacional, com processo automatizado, priorização por risco e mecanismo auditatório atestado pelo BACEN.",
    "a": "Em 36 horas montei uma tiger team multifuncional com Operações, TI, Compliance, Correspondentes e Controladoria. Instituí cadência de guerra (daily 20 min às 8h, review 18h, relato a cada 48h). Analisei personally 300 transações, escrevendo cinco scripts SQL que cruzavam SAP, SWIFT, core banking e extratos de correspondentes. Eu mesmo detectei três padrões críticos -- erro de câmbio, campo SWIFT truncado e timestamp de fusos diferentes -- e defini contramedidas imediatas. Classifiquei as pendências em três níveis de risco (A/B/C): A com impacto financeiro direto, B com risco de reputação e C com impacto operacional baixo. Essa priorização me permitiu resolver primeiro os 20% de casos que representavam 80% do valor travado e definir SLAs proporcionais (A = 12h, B = 24h, C = 48h). Implementei RPA em shadow mode por 5 dias, com dupla aprovação para valores > US$ 50k e reversão manual automática (kill switch). Em seguida, configurei war room com painel Grafana exibindo MTTR, valor pendente e volume por país; qualquer anomalia > US$ 250 mil gerava alerta direto ao meu celular. Quando o diretor de Compliance vetou o deploy por risco regulatório, voei a Brasília, apresentei a Resolução 4.557, demonstrei redução de risco vs. processo manual e garanti carta de não oposição em 24 horas. Por fim, abri canal 24/7 com os 18 clientes priority, enviei status diários e concedi waiver de tarifas a 12 empresas críticas; o NPS desse grupo caiu apenas 2 pontos (vs 18 projetados).",
    "r": "Em 38 dias o backlog zerou: 2.276 casos (80%) automaticamente, 427 (15%) via playbook manual e 144 (5%) escalados a correspondentes. Liberei US$ 47 M, evitei multa de R$ 12 M e mantive cutover no prazo. O tempo total de resolução ficou 40% melhor que migrações anteriores do grupo (geralmente 2-3 meses). Nenhum cliente priority cancelou contrato e o Bradesco incorporou meu runbook. O mecanismo seguinte, criptografado e executado a cada hora, reduziu incidentes em 73% (42 → 11 casos/mês), reduziu MTTR de 4,3 para 1,2 dia, e elevou NPS de 67 para 81. Participei diretamente na replicação dessa arquitetura em três integrações seguintes, ajustando parâmetros de fuso horário e layout SWIFT sem dependência mínima de TI.",
    "l": "Aprendi que ownership real em integrações críticas significa antecipar a crise, dominar os dados e mobilizar todas as frentes -- clientes e reguladores incluídos -- em torno de um mecanismo contínuo. Automação (80%+), painel preventivo e playbook transferível viraram minhas três regras de governança. Esse framework foi replicado em PIX e cartões na América Latina com ganhos semelhantes."
  },
  "en": {
    "s": "March 2016. Twenty-one days before Banquo→Bradesco cutover, my parallel audit routine spotted 2,847 unreconciled payments -- US$47 million stuck. BACEN fine risk: 0.5% of assets (~R$12 M). 18 priority clients had delays >48 h, and the deadline was non-negotiable. As PMO, I already owned migration governance and knew the SWIFT reconciliation flows. Since no team had formal ownership, I decided to take it myself -- integrating planning, technical execution, and regulatory alignment.",
    "t": "My mission: clear US$47 M before cutover without date shift, client loss, or compliance breach. I would unify all departments under an end-to-end plan, introducing automation, risk-based prioritization, and BACEN-validated controls.",
    "a": "In 36 hours I assembled a tiger team of Ops, IT, Compliance, Correspondents and Finance. War cadence: 20-min morning daily, 6 p.m. review, 48-h executive update. I personally analyzed 300 sample transactions and built five SQL scripts linking SAP, SWIFT, core banking and correspondent data. I identified three critical patterns -- FX error, truncated SWIFT fields and time-zone drift -- and devised countermeasures. Segmented cases A/B/C by financial impact and urgency, where A represented 20% of cases but 80% of value; set SLAs (A 12h, B 24h, C 48h). Implemented RPA shadow mode for 5 days with dual approval >US$50K and manual fallback. Built Grafana dashboard for MTTR and pending value; anomalies >US$250K alerted my phone. When Compliance blocked deployment, I flew to Brasília, presented Resolution 4.557 and proved risk reduction vs manual process; secured no-objection in 24h. Finally, I opened 24/7 line for 18 priority clients and sent daily status with fee waiver for 12. NPS drop -2 points (vs -18 projected).",
    "r": "Backlog zeroed in 38 days: 2,276 cases (80%) auto, 427 (15%) manual, 144 (5%) escalated. Released US$47 M, avoided R$12 M fine, kept cutover on schedule. Resolution speed was 40% faster than group’s typical 2-3-month migrations. No client churn, runbook adopted by Bradesco. Hourly script cut incidents 73% (42→11 per month), MTTR 4.3→1.2 days, NPS 67→81. I personally helped adapt the architecture for three later integrations with different SWIFT formats and time-zones.",
    "l": "I learned that true ownership in critical migrations means anticipating crisis and turning data into trust. Permanent mechanisms (80%+ automation, preventive dashboard, transferable playbook) outvalue heroics -- a lesson I carried to PIX and card projects across Latin America."
  },
  "fups": [
    {
      "q": "Qual foi seu maior erro ou falha nesse caso?",
      "a": "Atrasar o mapeamento geral de exceções por excesso de foco em automação no primeiro sprint. Corrigi no segundo ciclo ao incluir analista de backoffice. Expliquei que zeramos o backlog em 38 dias, resolvendo 2.276 casos automaticamente e 427 via playbook manual.",
      "q_en": "What was your biggest mistake or failure?",
      "a_en": "Delayed exception mapping by focusing too much on automation early; fixed by adding back-office analyst in next cycle. I explained clearing the backlog in 38 days with 2,276 cases auto-resolved and 427 handled via the manual playbook."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Definiria critérios de risco A/B/C com Compliance desde o início para ganhar agilidade em validações regulatórias. Mostrei a liberação de US$ 47 milhões, a multa de R$ 12 milhões evitada e o cutover mantido no prazo.",
      "q_en": "What would you do differently today?",
      "a_en": "Would define A/B/C risk criteria jointly with Compliance from the start to speed regulatory sign-off. I showed US$47M released, a R$12M fine avoided, and the cutover staying on schedule."
    },
    {
      "q": "Qual foi o obstáculo mais difícil que você enfrentou?",
      "a": "A resistência inicial de Compliance ao deploy. Negociei pessoalmente com o BACEN e demonstrei redução de risco operacional. Reforcei que o runbook reduziu incidentes em 73%, derrubou o MTTR de 4,3 para 1,2 dia e elevou o NPS de 67 para 81.",
      "q_en": "What was the hardest obstacle you faced?",
      "a_en": "Initial Compliance resistance to deployment; personally negotiated with BACEN showing operational-risk reduction. I highlighted the runbook cutting incidents by 73%, shrinking MTTR from 4.3 to 1.2 days, and lifting NPS from 67 to 81."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Multa regulatória, churn de clientes priority e falhas no RPA. Mitiguei com shadow mode de 5 dias e war room ativo 24/7. Expliquei que zeramos o backlog em 38 dias, resolvendo 2.276 casos automaticamente e 427 via playbook manual.",
      "q_en": "What were main risks and how did you mitigate them?",
      "a_en": "Regulatory fines, priority client churn, RPA misfires -- mitigated via 5-day shadow mode and 24/7 war-room oversight. I explained clearing the backlog in 38 days with 2,276 cases auto-resolved and 427 handled via the manual playbook."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Integrei SAP, SWIFT, core banking e extratos. Cada 1% de atraso representava R$ 520 mil em liquidez bloqueada. Mostrei a liberação de US$ 47 milhões, a multa de R$ 12 milhões evitada e o cutover mantido no prazo.",
      "q_en": "What data did you use and what was the rationale?",
      "a_en": "Integrated SAP, SWIFT, core-banking, and correspondent data; each 1% delay meant R$520 K in blocked liquidity. I showed US$47M released, a R$12M fine avoided, and the cutover staying on schedule."
    },
    {
      "q": "Como você usou o aprendizado desse caso em outras frentes?",
      "a": "Reapliquei o framework em PIX e cartões na América Latina, alcançando eficiência similar em 3 projetos subsequentes. Reforcei que o runbook reduziu incidentes em 73%, derrubou o MTTR de 4,3 para 1,2 dia e elevou o NPS de 67 para 81.",
      "q_en": "How did you use this learning elsewhere?",
      "a_en": "Re-used framework for PIX and card integrations in Latin America achieving similar efficiency gains. I highlighted the runbook cutting incidents by 73%, shrinking MTTR from 4.3 to 1.2 days, and lifting NPS from 67 to 81."
    },
    {
      "q": "Como você calculou o risco financeiro para convencer o board?",
      "a": "Projetei multa (0,5% = R$ 12M), retrabalho (10 FTEs × 6 meses = R$ 1,8M) e churn (R$ 23M). Total R$ 36,8M vs. R$ 120K investidos. Expliquei que zeramos o backlog em 38 dias, resolvendo 2.276 casos automaticamente e 427 via playbook manual.",
      "q_en": "How did you quantify financial risk for the board?",
      "a_en": "Modeled fine (0.5% = R$12M), rework (10 FTEs × 6 months = R$1.8M), churn (R$23M); R$36.8M risk vs R$120 K investment. I explained clearing the backlog in 38 days with 2,276 cases auto-resolved and 427 handled via the manual playbook."
    },
    {
      "q": "Qual foi o maior desafio técnico na automação da reconciliação?",
      "a": "Sincronizar timestamps entre 4 sistemas; criei camada UTC0 e janela de matching de 15 min. Mostrei a liberação de US$ 47 milhões, a multa de R$ 12 milhões evitada e o cutover mantido no prazo.",
      "q_en": "What was the biggest technical challenge in automation?",
      "a_en": "Synchronizing timestamps across 4 systems; built UTC0 layer with 15-minute matching window. I showed US$47M released, a R$12M fine avoided, and the cutover staying on schedule."
    },
    {
      "q": "Como garantiu que o RPA não criasse novos riscos operacionais?",
      "a": "Executei shadow mode 5 dias com logs completos e dupla aprovação > US$ 50k. Nenhum falso positivo. Reforcei que o runbook reduziu incidentes em 73%, derrubou o MTTR de 4,3 para 1,2 dia e elevou o NPS de 67 para 81.",
      "q_en": "How did you ensure RPA didn't create new risks?",
      "a_en": "Ran 5-day shadow mode with full logs and dual > US$ 50K approvals. Zero false positives. I highlighted the runbook cutting incidents by 73%, shrinking MTTR from 4.3 to 1.2 days, and lifting NPS from 67 to 81."
    },
    {
      "q": "Como mediu o impacto real para os clientes priority?",
      "a": "Queda de NPS apenas 2 pontos vs 18 projetados; SLA 4,3→1,2 dia; churn 0%. Expliquei que zeramos o backlog em 38 dias, resolvendo 2.276 casos automaticamente e 427 via playbook manual.",
      "q_en": "How did you measure real impact on priority clients?",
      "a_en": "NPS drop only -2 vs -18 projected; SLA 4.3→1.2 days; 0% churn. I explained clearing the backlog in 38 days with 2,276 cases auto-resolved and 427 handled via the manual playbook."
    },
    {
      "q": "Que resistência enfrentou da equipe de Operações?",
      "a": "Temiam que automação substituísse funções. Mostrei ganho analítico e abri trilha de crescimento; 3 promoções e 0 desligamentos. Mostrei a liberação de US$ 47 milhões, a multa de R$ 12 milhões evitada e o cutover mantido no prazo.",
      "q_en": "What resistance did you face from Operations?",
      "a_en": "Team feared job loss; demonstrated analytical upside and opened growth path -- 3 promotions, 0 layoffs. I showed US$47M released, a R$12M fine avoided, and the cutover staying on schedule."
    },
    {
      "q": "Como conseguiu carta de não oposição do BACEN em 24 horas?",
      "a": "Entreguei dossiê técnico com fluxos e testes; mostrei que solução reduzia risco versus manual. Reforcei que o runbook reduziu incidentes em 73%, derrubou o MTTR de 4,3 para 1,2 dia e elevou o NPS de 67 para 81.",
      "q_en": "How did you get BACEN no-objection within 24 hours?",
      "a_en": "Submitted technical dossier with flows and tests; proved automation lowered risk vs manual process. I highlighted the runbook cutting incidents by 73%, shrinking MTTR from 4.3 to 1.2 days, and lifting NPS from 67 to 81."
    },
    {
      "q": "Como garantiu sustentabilidade da solução após o cutover?",
      "a": "Documentei 127 procedimentos, treinei 6 líderes e implantei governança semanal. Bradesco adotou como padrão. Expliquei que zeramos o backlog em 38 dias, resolvendo 2.276 casos automaticamente e 427 via playbook manual.",
      "q_en": "How did you ensure sustainability after cutover?",
      "a_en": "Documented 127 procedures, trained 6 leaders, set weekly governance; Bradesco adopted as standard. I explained clearing the backlog in 38 days with 2,276 cases auto-resolved and 427 handled via the manual playbook."
    },
    {
      "q": "Qual foi o ROI real da reconciliação automatizada?",
      "a": "ROI 1.240% (= R$ 12M multas evitadas + R$ 1,8M retrabalho + R$ 23M retenção + R$ 680K produtividade). Mostrei a liberação de US$ 47 milhões, a multa de R$ 12 milhões evitada e o cutover mantido no prazo.",
      "q_en": "What was real ROI of automation?",
      "a_en": "1,240% ROI = R$ 12M fines avoided + R$ 1.8M rework + R$ 23M retention + R$ 680K productivity. I showed US$47M released, a R$12M fine avoided, and the cutover staying on schedule."
    },
    {
      "q": "Como lidou com pressão do deadline de cutover?",
      "a": "Usei transparência diária e dashboard aberto ao C-level para impedimentos > 4h. Nada ficava oculto. Reforcei que o runbook reduziu incidentes em 73%, derrubou o MTTR de 4,3 para 1,2 dia e elevou o NPS de 67 para 81.",
      "q_en": "How did you handle cutover pressure?",
      "a_en": "Daily transparency and dashboard visible to C-level for blockers > 4h; no hidden issues. I highlighted the runbook cutting incidents by 73%, shrinking MTTR from 4.3 to 1.2 days, and lifting NPS from 67 to 81."
    },
    {
      "q": "O que aprendeu dessa experiência?",
      "a": "Que prevenção é sustentabilidade; mecanismos resolvem, heróis apenas reagem. Expliquei que zeramos o backlog em 38 dias, resolvendo 2.276 casos automaticamente e 427 via playbook manual.",
      "q_en": "What did you learn from this experience?",
      "a_en": "Prevention creates sustainability; mechanisms solve what heroes merely patch. I explained clearing the backlog in 38 days with 2,276 cases auto-resolved and 427 handled via the manual playbook."
    },
    {
      "q": "Como você garantiu a colaboração entre equipes multifuncionais (Operações, TI, Compliance, etc.) para manter o foco e resolver o backlog no prazo?",
      "a": "Instituí checkpoints cruzados e uma métrica única de backlog resolvido. Cada área tinha KPI ligado ao mesmo painel, eliminando silos. Mostrei a liberação de US$ 47 milhões, a multa de R$ 12 milhões evitada e o cutover mantido no prazo.",
      "q_en": "How did you ensure cross-team collaboration (Ops, IT, Compliance) to meet deadline?",
      "a_en": "Set cross-checkpoints and single backlog metric; all areas shared one KPI panel, removing silos. I showed US$47M released, a R$12M fine avoided, and the cutover staying on schedule."
    },
    {
      "q": "Por que você escolheu priorizar a segmentação por risco (A/B/C) e como essa abordagem impactou os resultados?",
      "a": "O modelo A/B/C permitiu focar nos 20% dos casos que seguravam 80% do valor. Resultado: liberação de US$ 36 M logo na primeira semana. Reforcei que o runbook reduziu incidentes em 73%, derrubou o MTTR de 4,3 para 1,2 dia e elevou o NPS de 67 para 81.",
      "q_en": "Why did you choose A/B/C segmentation and how did it impact results?",
      "a_en": "A/B/C model focused first 20% of cases holding 80% of value; released US$36 M within week one. I highlighted the runbook cutting incidents by 73%, shrinking MTTR from 4.3 to 1.2 days, and lifting NPS from 67 to 81."
    },
    {
      "q": "Durante a apresentação ao BACEN, quais foram os maiores desafios regulatórios enfrentados e como você os superou para obter a carta de não oposição em 24 horas?",
      "a": "O BACEN questionou segregação de funções e rastreabilidade de logs. Demonstrei dupla checagem automática e trilha auditável criptografada. Expliquei que zeramos o backlog em 38 dias, resolvendo 2.276 casos automaticamente e 427 via playbook manual.",
      "q_en": "During meeting with BACEN, what regulatory hurdles did you face and how did you overcome them?",
      "a_en": "BACEN questioned segregation and log traceability; showed dual automated check and encrypted audit trail. I explained clearing the backlog in 38 days with 2,276 cases auto-resolved and 427 handled via the manual playbook."
    },
    {
      "q": "Como o runbook e o painel preventivo foram adaptados e replicados em outras integrações? Qual foi seu papel direto nesse processo?",
      "a": "Redesenhei parâmetros de timezone e correspondentes e acompanhei os pilotos. Fui responsável por certificar aderência técnica e processual. Mostrei a liberação de US$ 47 milhões, a multa de R$ 12 milhões evitada e o cutover mantido no prazo.",
      "q_en": "How were runbook and dashboard adapted and replicated elsewhere, and what was your role?",
      "a_en": "Redesigned timezone and correspondent parameters, supervised pilots, ensuring technical and process adherence. I showed US$47M released, a R$12M fine avoided, and the cutover staying on schedule."
    },
    {
      "q": "Se pudesse refazer este projeto, o que faria de forma diferente para aumentar a eficácia ou o impacto dos resultados?",
      "a": "Aplicaria análise preditiva de anomalias já no primeiro sprint, antecipando desvios e reduzindo ainda mais tempo de resolução. Reforcei que o runbook reduziu incidentes em 73%, derrubou o MTTR de 4,3 para 1,2 dia e elevou o NPS de 67 para 81.",
      "q_en": "If you could redo this project, what would you change to enhance effectiveness or impact?",
      "a_en": "Would apply predictive anomaly analysis in first sprint to anticipate deviations and further cut resolution time. I highlighted the runbook cutting incidents by 73%, shrinking MTTR from 4.3 to 1.2 days, and lifting NPS from 67 to 81."
    }
  ]
};

export default case_4;
