const bias_for_action = {
  principle: {
    title: "Ter Iniciativa",
    title_en: "Bias for Action",
    description: "Velocidade importa nos negócios. Muitas decisões e ações são reversíveis e não precisam de estudos extensos. Valorizamos a tomada de riscos calculados.",
    description_en: "Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.",
    icon: "⚡"
  },
  cases: [
    {
      "title": "Dashboard Executivo em 10 dias - PMO CAGE/SEFAZ-RS (MM/AAAA-MM/AAAA)",
      "pt": {
        "s": "No lançamento do portal do PMO da CAGE, a Diretiva precisava visualizar em poucos dias o status do portfólio para uma reunião com o Secretário. As fontes de dados estavam dispersas (planilhas, e-mails, Project, PSA) e não havia um dashboard executivo consolidado.",
        "t": "Minha missão era: Entregar um MVP funcional do painel executivo em 10 dias, ainda que com escopo reduzido, para suportar a decisão estratégica e padronizar o rito mensal de acompanhamento.",
        "a": "Eu adotei um recorte de 12 projetos críticos, criei um esquema de dados mínimo viável e conectei as fontes via Power BI e SharePoint. Usei feature flags para liberar o módulo de riscos depois e estabeleci um 'ritual de dados' diário (cut-off às 18h). Documentei limitações e próximos incrementos.",
        "r": "O dashboard ficou pronto em 8 dias, suportou a reunião e virou padrão mensal. O tempo de preparação dos GPs para reuniões executivas caiu 60%, e a Diretiva passou a tomar decisões baseadas em um quadro único e confiável. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que iniciativa eficaz é sobre otimizar valor/tempo: destravar decisões com um MVP bem recortado, sem esperar a 'perfeição'. A clareza sobre o que entra agora e o que fica para a próxima sprint garante confiança e ritmo. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "At the launch of CAGE's PMO portal, the Directorate needed to visualize portfolio status within days for a meeting with the Secretary. Data sources were scattered (spreadsheets, emails, Project, PSA) and there was no consolidated executive dashboard.",
        "t": "My mission was to deliver a functional executive panel MVP in 10 days, even with reduced scope, to support strategic decision-making and standardize monthly monitoring ritual.",
        "a": "I adopted a scope of 12 critical projects, created a minimum viable data schema and connected sources via Power BI and SharePoint. I used feature flags to release the risk module later and established a daily 'data ritual' (cut-off at 6 PM). I documented limitations and next increments.",
        "r": "The dashboard was ready in 8 days, supported the meeting and became monthly standard. Preparation time for PMs in executive meetings dropped 60%, and the Directorate started making decisions based on a single, reliable picture. (with baseline, target and period documented in executive report).",
        "l": "I learned that effective initiative is about optimizing value/time: unblocking decisions with a well-scoped MVP, without waiting for 'perfection'. Clarity about what goes in now and what stays for next sprint ensures confidence and pace. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fups": [
        {
          "q": "Como você definiu o que entrava no MVP de 10 dias vs. o que ficaria para depois?",
          "q_en": "How did you define what went into the 10-day MVP vs. what would stay for later?",
          "a": "Priorizei pelo framework MoSCoW focado na reunião: Must (status dos 12 projetos críticos), Should (riscos top 3), Could (financeiro), Won't (histórico detalhado). O critério era: 'Isso é essencial para a decisão de quinta-feira?'",
          "a_en": "I prioritized using MoSCoW framework focused on the meeting: Must (status of 12 critical projects), Should (top 3 risks), Could (financial), Won't (detailed history). The criterion was: 'Is this essential for Thursday's decision?'"
        },
        {
          "q": "Qual foi o maior risco que você assumiu ao entregar algo 'imperfeito' em 8 dias?",
          "q_en": "What was the biggest risk you assumed by delivering something 'imperfect' in 8 days?",
          "a": "Dados manuais sem validação automática. Mitiguei criando checklist de validação diária e sendo transparente sobre limitações. Preferi dashboard com avisos de 'dados preliminares' a não ter dashboard.",
          "a_en": "Manual data without automatic validation. I mitigated by creating daily validation checklist and being transparent about limitations. I preferred dashboard with 'preliminary data' warnings to no dashboard."
        },
        {
          "q": "Como você garantiu qualidade mantendo a velocidade?",
          "q_en": "How did you ensure quality while maintaining speed?",
          "a": "Quality gates mínimos mas rigorosos: dados testados em ambiente de homologação, validação cruzada com GPs dos 3 maiores projetos e dry-run da apresentação 24h antes. Qualidade focada no essencial.",
          "a_en": "Minimal but rigorous quality gates: data tested in staging environment, cross-validation with PMs of 3 largest projects and presentation dry-run 24h before. Quality focused on essentials."
        },
        {
          "q": "Como você comunicou as limitações sem perder credibilidade?",
          "q_en": "How did you communicate limitations without losing credibility?",
          "a": "Transparência total: slide inicial com 'O que este dashboard faz bem' e 'O que ainda não faz'. Roadmap visual de próximas 3 sprints. Honestidade sobre limitações gera mais confiança que promessas exageradas.",
          "a_en": "Total transparency: initial slide with 'What this dashboard does well' and 'What it doesn't do yet'. Visual roadmap of next 3 sprints. Honesty about limitations generates more trust than exaggerated promises."
        },
        {
          "q": "Qual foi a reação da Diretiva ao receber um MVP ao invés da solução completa?",
          "q_en": "What was the Directorate's reaction to receiving an MVP instead of the complete solution?",
          "a": "Surpresa positiva. Esperavam 'nada' em 10 dias, receberam algo funcional em 8. O Secretário disse: 'Prefiro 80% de informação agora a 100% de informação na semana que vem'. Velocidade criou momentum.",
          "a_en": "Positive surprise. They expected 'nothing' in 10 days, received something functional in 8. The Secretary said: 'I prefer 80% information now to 100% information next week'. Speed created momentum."
        },
        {
          "q": "Como você organizou a equipe para entregar em ritmo acelerado?",
          "q_en": "How did you organize the team to deliver at accelerated pace?",
          "a": "Daily standups de 15min, pair programming para componentes críticos e 'no-meeting afternoons' para deep work. Eliminei burocracia: aprovações verbais, documentação mínima, decisões rápidas.",
          "a_en": "15min daily standups, pair programming for critical components and 'no-meeting afternoons' for deep work. I eliminated bureaucracy: verbal approvals, minimal documentation, quick decisions."
        },
        {
          "q": "Que métricas você usou para medir se a iniciativa foi bem-sucedida?",
          "q_en": "What metrics did you use to measure if the initiative was successful?",
          "a": "Adoption rate (100% da Diretiva usando na primeira semana), time-to-decision (60% redução no tempo de reuniões), data accuracy (95% validação cruzada) e feedback qualitativo (NPS 9/10).",
          "a_en": "Adoption rate (100% of Directorate using in first week), time-to-decision (60% reduction in meeting time), data accuracy (95% cross-validation) and qualitative feedback (NPS 9/10)."
        },
        {
          "q": "Como você evitou que o MVP virasse 'gambiarra permanente'?",
          "q_en": "How did you prevent the MVP from becoming 'permanent workaround'?",
          "a": "Roadmap público com datas commitadas, technical debt documentado e budget aprovado para próximas fases. 'MVP não é versão final' estava no header de todas as telas.",
          "a_en": "Public roadmap with committed dates, documented technical debt and approved budget for next phases. 'MVP is not final version' was in header of all screens."
        },
        {
          "q": "Qual foi o aprendizado mais valioso sobre 'bias for action' neste projeto?",
          "q_en": "What was the most valuable learning about 'bias for action' in this project?",
          "a": "Ação rápida sem contexto é imprudência. Gastei 2 dos 10 dias entendendo o problema real e definindo sucesso. Bias for action bem executado é 20% planejamento + 80% execução disciplinada.",
          "a_en": "Quick action without context is recklessness. I spent 2 of 10 days understanding the real problem and defining success. Well-executed bias for action is 20% planning + 80% disciplined execution."
        },
        {
          "q": "Se tivesse que refazer esse projeto, o que faria diferente mantendo a mesma velocidade?",
          "q_en": "If you had to redo this project, what would you do differently while maintaining the same speed?",
          "a": "Envolveria usuários finais (Diretiva) mais cedo no processo de validação. Faria mini-demos diárias ao invés de big reveal final. Feedback contínuo acelera mais que desenvolvimento isolado.",
          "a_en": "I would involve end users (Directorate) earlier in validation process. I would do mini-daily demos instead of big final reveal. Continuous feedback accelerates more than isolated development."
        }
      ]
    },
    {
      "title": "Implementação Emergencial de Home Office - Unimed/Woop (MM/AAAA-MM/AAAA) ⭐",
      "pt": {
        "s": "Em março de 2020, com o início da pandemia, a Unimed/Woop precisava implementar home office para 300+ colaboradores em 48h. A infraestrutura tradicional não suportava trabalho remoto em larga escala e havia riscos de continuidade de negócio.",
        "t": "Minha missão era garantir que toda a operação continuasse funcionando remotamente sem perda de produtividade ou segurança, implementando soluções tecnológicas e processos de trabalho distribuído em tempo recorde.",
        "a": "Tomei decisões rápidas sem comitês: compra emergencial de laptops e licenças VPN, implementação de Microsoft Teams em 24h, criação de guias de trabalho remoto e treinamentos express via videoconferência. Estabeleci rituais diários de check-in e métricas de produtividade simples mas eficazes.",
        "r": "100% da equipe trabalhando remotamente em 48h, produtividade mantida em 95% vs. presencial, zero incidentes de segurança e NPS de satisfação com home office de 8.5/10. A empresa se adaptou rapidamente e manteve operações críticas funcionando. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que em crises, velocidade de execução supera perfeição de planejamento. Decisions reversíveis devem ser tomadas rapidamente, ajustes feitos em movimento. A iniciativa em momentos críticos define resiliência organizacional. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "In March 2020, with the pandemic onset, Unimed/Woop needed to implement home office for 300+ employees in 48h. Traditional infrastructure didn't support large-scale remote work and there were business continuity risks.",
        "t": "My mission was to ensure entire operation continued functioning remotely without productivity or security loss, implementing technological solutions and distributed work processes in record time.",
        "a": "I made quick decisions without committees: emergency purchase of laptops and VPN licenses, Microsoft Teams implementation in 24h, creation of remote work guides and express training via videoconference. I established daily check-in rituals and simple but effective productivity metrics.",
        "r": "100% of team working remotely in 48h, productivity maintained at 95% vs. in-person, zero security incidents and home office satisfaction NPS of 8.5/10. The company adapted quickly and kept critical operations running. (with baseline, target and period documented in executive report).",
        "l": "I learned that in crises, execution speed surpasses planning perfection. Reversible decisions should be made quickly, adjustments made in motion. Initiative in critical moments defines organizational resilience. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fups": [
        {
          "q": "Como você tomou decisões de compra emergencial sem processo de aprovação tradicional?",
          "q_en": "How did you make emergency purchase decisions without traditional approval process?",
          "a": "Consegui pré-aprovação verbal da diretoria para budget de R$ 500k com critério: 'Tudo que for essencial para manter operação funcionando'. Documentei depois, executei primeiro. Crisis authority bem definida.",
          "a_en": "I got verbal pre-approval from board for R$ 500k budget with criteria: 'Everything essential to keep operation running'. I documented after, executed first. Well-defined crisis authority."
        },
        {
          "q": "Qual foi a decisão mais arriscada que você tomou nessas 48h?",
          "q_en": "What was the riskiest decision you made in those 48h?",
          "a": "Implementar VPN para todos sem full security assessment. Assumi risco calculado: melhor ter conexão com risco controlado que operação parada. Implementei monitoramento intensivo e security patches em paralelo.",
          "a_en": "Implementing VPN for everyone without full security assessment. I assumed calculated risk: better have connection with controlled risk than stopped operation. I implemented intensive monitoring and security patches in parallel."
        },
        {
          "q": "Como você garantiu que ninguém ficasse para trás na transição?",
          "q_en": "How did you ensure no one was left behind in the transition?",
          "a": "Buddy system: cada tech-savvy paired com alguém menos técnico. Help desk improvisado via WhatsApp e sessões de troubleshooting em grupo via Teams. Ninguém trabalha sozinho no primeiro dia.",
          "a_en": "Buddy system: each tech-savvy paired with someone less technical. Improvised help desk via WhatsApp and group troubleshooting sessions via Teams. No one works alone on first day."
        },
        {
          "q": "Como mediu produtividade sem microgerenciar?",
          "q_en": "How did you measure productivity without micromanaging?",
          "a": "Outcome-based metrics: entregas por sprint, quality of deliverables e customer satisfaction. Daily standups de 15min focados em blockers, não reporting. Trust but verify through results.",
          "a_en": "Outcome-based metrics: deliveries per sprint, quality of deliverables and customer satisfaction. 15min daily standups focused on blockers, not reporting. Trust but verify through results."
        },
        {
          "q": "Qual foi o maior challenge não-técnico que você enfrentou?",
          "q_en": "What was the biggest non-technical challenge you faced?",
          "a": "Ansiedade da equipe sobre job security e mudança abrupta. Comunicação transparente e constante sobre situação da empresa, rituais de coffee break virtual e check-ins de bem-estar. People first, technology second.",
          "a_en": "Team anxiety about job security and abrupt change. Transparent and constant communication about company situation, virtual coffee break rituals and wellness check-ins. People first, technology second."
        },
        {
          "q": "Como você priorizou quais processos adaptar primeiro?",
          "q_en": "How did you prioritize which processes to adapt first?",
          "a": "Matriz de impacto vs. esforço focada em business continuity: atendimento ao cliente (alto impacto, baixo esforço), desenvolvimento (alto impacto, médio esforço), admin (baixo impacto, deixar depois).",
          "a_en": "Impact vs. effort matrix focused on business continuity: customer service (high impact, low effort), development (high impact, medium effort), admin (low impact, leave for later)."
        },
        {
          "q": "Que lições sobre 'bias for action' essa crise te ensinou?",
          "q_en": "What lessons about 'bias for action' did this crisis teach you?",
          "a": "Em situações extremas, perfection is the enemy of good. 80% solution implemented today beats 100% solution next week. Speed to market (or survival) trumps optimization.",
          "a_en": "In extreme situations, perfection is the enemy of good. 80% solution implemented today beats 100% solution next week. Speed to market (or survival) trumps optimization."
        },
        {
          "q": "Como você lidou com resistance à mudança em contexto de urgência?",
          "q_en": "How did you handle resistance to change in urgency context?",
          "a": "Reframe: não era 'mudança', era 'sobrevivência'. Mostrei alternative (layoffs ou empresa fechada) vs. adaptação rápida. Urgência real elimina resistance artificial.",
          "a_en": "Reframe: it wasn't 'change', it was 'survival'. I showed alternative (layoffs or closed company) vs. quick adaptation. Real urgency eliminates artificial resistance."
        },
        {
          "q": "Quais processos você manteve simplificados mesmo após a pandemia?",
          "q_en": "Which processes did you keep simplified even after the pandemic?",
          "a": "Aprovações digitais (não voltamos ao papel), daily standups (mais eficazes que reuniões longas) e flex work (híbrido permanente). Crisis-driven improvements que se provaram superiores.",
          "a_en": "Digital approvals (didn't go back to paper), daily standups (more effective than long meetings) and flex work (permanent hybrid). Crisis-driven improvements that proved superior."
        },
        {
          "q": "Se uma crise similar acontecesse hoje, o que você faria diferente?",
          "q_en": "If a similar crisis happened today, what would you do differently?",
          "a": "Teria playbooks de contingência pré-preparados para diferentes cenários. Crisis planning + bias for action = response time ainda mais rápido. Prepare for speed, don't just be fast.",
          "a_en": "I would have pre-prepared contingency playbooks for different scenarios. Crisis planning + bias for action = even faster response time. Prepare for speed, don't just be fast."
        }
      ]
    }
  ]
};

export default bias_for_action;