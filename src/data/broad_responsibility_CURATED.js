const broad_responsibility = {
  id: "sucesso e crescimento trazem maior responsabilidade",
  name: "sucesso e crescimento trazem maior responsabilidade",
  principle: {
    title: "Sucesso e crescimento trazem maior responsabilidade",
    title_en: "Success and Scale Bring Broad Responsibility",
    description: "Começamos numa garagem, mas não estamos mais lá. Somos grandes, impactamos o mundo, e estamos longe de ser perfeitos. Devemos ser humildes e pensativos sobre os efeitos secundários de nossas ações. Os líderes criam mais do que consomem e sempre deixam as coisas melhores do que as encontraram.",
    description_en: "We started in a garage, but we're not there anymore. We are big, we impact the world, and we are far from perfect. We must be humble and thoughtful about even the secondary effects of our actions. Leaders create more than they consume and always leave things better than how they found them.",
    icon: "🌍"
  },
  cases: [
    {
      "title": "Governança de Dados Responsável em Escala - Woop/Unimed (MM/AAAA-MM/AAAA)",
      "pt": {
        "s": "Com a expansão digital da Woop/Unimed, o volume de dados de pacientes cresceu exponencialmente e aumentou nossa responsabilidade sobre privacidade e uso ético de dados. Tínhamos 300k+ registros médicos sensíveis sem governança adequada para LGPD.",
        "t": "Minha missão era estabelecer governança de dados responsável sem bloquear inovação da equipe de produto, garantindo compliance com LGPD e criando cultura de responsabilidade sobre dados sensíveis na organização.",
        "a": "Implementei políticas de minimização de dados, anonimização automática, data retention com purga programada e revisão ética de prompts de IA médica. Criei comitê ágil de ética de dados com SLAs de 48h e checklists de risco por criticidade. Estabeleci processos de privacy-by-design e treinamentos obrigatórios.",
        "r": "Zero incidentes relevantes de privacidade em 18 meses, auditorias LGPD com 95% compliance, time de produto mantendo velocity de inovação e cultura de responsabilidade embedada. Redução de 60% em dados desnecessários armazenados. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que escala amplia tanto impacto positivo quanto riscos. Responsabilidade verdadeira é desenhar guardrails que habilitam inovação responsável, não que paralisam. Em retrospectiva, eu poderia ter envolvido stakeholders mais cedo no design dos processos, e hoje sempre começo co-criando soluções com os times afetados."
      },
      "en": {
        "s": "With Woop/Unimed's digital expansion, patient data volume grew exponentially and increased our responsibility over privacy and ethical data use. We had 300k+ sensitive medical records without adequate LGPD governance.",
        "t": "My mission was to establish responsible data governance without blocking product team innovation, ensuring LGPD compliance and creating culture of responsibility over sensitive data in the organization.",
        "a": "I implemented data minimization policies, automatic anonymization, data retention with scheduled purging and ethical review of medical AI prompts. I created agile data ethics committee with 48h SLAs and risk checklists by criticality. I established privacy-by-design processes and mandatory training.",
        "r": "Zero relevant privacy incidents in 18 months, LGPD audits with 95% compliance, product team maintaining innovation velocity and embedded responsibility culture. 60% reduction in unnecessary stored data. (with baseline, target and period documented in executive report).",
        "l": "I learned that scale amplifies both positive impact and risks. True responsibility is designing guardrails that enable responsible innovation, not paralyze it. In retrospect, I could have involved stakeholders earlier in process design, and today I always start co-creating solutions with affected teams."
      },
      "fups": [
        {
          "q": "Como você balanceou inovação rápida com responsabilidade em dados sensíveis?",
          "q_en": "How did you balance rapid innovation with responsibility in sensitive data?",
          "a": "Privacy-by-design: checklists automatizados no pipeline de deploy, data sandboxes com dados sintéticos para experimentos e fast-track approval para projetos low-risk. Velocidade responsável, não velocidade cega.",
          "a_en": "Privacy-by-design: automated checklists in deploy pipeline, data sandboxes with synthetic data for experiments and fast-track approval for low-risk projects. Responsible speed, not blind speed."
        },
        {
          "q": "Qual foi o maior desafio cultural ao implementar governança de dados?",
          "q_en": "What was the biggest cultural challenge when implementing data governance?",
          "a": "'Compliance não mata inovação' foi o mantra. Mostrei cases where privacy-first resultou em produtos melhores. Transformei compliance de 'bloqueador' em 'enabler' através de ferramentas e processos inteligentes.",
          "a_en": "'Compliance doesn't kill innovation' was the mantra. I showed cases where privacy-first resulted in better products. I transformed compliance from 'blocker' to 'enabler' through intelligent tools and processes."
        },
        {
          "q": "Como você mediu o sucesso da governança sem apenas contar incidentes?",
          "q_en": "How did you measure governance success without just counting incidents?",
          "a": "Métricas proativas: % de projetos com privacy-by-design, tempo médio de privacy review, satisfaction score dos devs com os processos e volume de dados minimizados automaticamente. Leading indicators, não lagging.",
          "a_en": "Proactive metrics: % of projects with privacy-by-design, average privacy review time, dev satisfaction score with processes and volume of automatically minimized data. Leading indicators, not lagging."
        },
        {
          "q": "Como o comitê de ética de dados funcionava na prática?",
          "q_en": "How did the data ethics committee work in practice?",
          "a": "Async-first: 80% das decisões via Slack com template estruturado, reuniões só para casos complexos, SLA de 48h e escalation automático. Agilidade sem comprometer thoroughness.",
          "a_en": "Async-first: 80% of decisions via Slack with structured template, meetings only for complex cases, 48h SLA and automatic escalation. Agility without compromising thoroughness."
        },
        {
          "q": "Que 'efeitos secundários' você descobriu que não havia antecipado?",
          "q_en": "What 'secondary effects' did you discover that you hadn't anticipated?",
          "a": "Data quality melhorou 40% porque minimização forçou limpeza. Performance aumentou com menos dados desnecessários. Compliance como side effect positivo de boa arquitetura.",
          "a_en": "Data quality improved 40% because minimization forced cleanup. Performance increased with less unnecessary data. Compliance as positive side effect of good architecture."
        },
        {
          "q": "Como você lidou com resistência de times que viam governança como burocracia?",
          "q_en": "How did you handle resistance from teams who saw governance as bureaucracy?",
          "a": "Show, don't tell: implementei em um time piloto, documentei benefits (velocidade, qualidade, confiança) e deixei success stories se espalharem organicamente. Peer influence > top-down mandate.",
          "a_en": "Show, don't tell: implemented in pilot team, documented benefits (speed, quality, trust) and let success stories spread organically. Peer influence > top-down mandate."
        },
        {
          "q": "Qual foi o investimento necessário para implementar essa governança?",
          "q_en": "What investment was needed to implement this governance?",
          "a": "3 pessoas dedicadas, R$ 150k em tooling/training, 2 sprints de setup. ROI em 6 meses através de reduced compliance risk, faster audits e improved data quality. Investment, not cost.",
          "a_en": "3 dedicated people, R$ 150k in tooling/training, 2 sprints of setup. ROI in 6 months through reduced compliance risk, faster audits and improved data quality. Investment, not cost."
        },
        {
          "q": "Como você garantiu que a responsabilidade não se perdesse com turnover da equipe?",
          "q_en": "How did you ensure responsibility wouldn't be lost with team turnover?",
          "a": "Embedded nos processos, não nas pessoas: onboarding obrigatório, documented playbooks, automated checks e culture rituals. Responsibility as code, not as memory.",
          "a_en": "Embedded in processes, not people: mandatory onboarding, documented playbooks, automated checks and culture rituals. Responsibility as code, not as memory."
        },
        {
          "q": "Que lição sobre 'broad responsibility' esse projeto te ensinou?",
          "q_en": "What lesson about 'broad responsibility' did this project teach you?",
          "a": "Scale traz responsibility que vai além do seu domínio direto. Pensar em stakeholders, sociedade e futuro é parte do job. Responsibility é strategic advantage, não constraint.",
          "a_en": "Scale brings responsibility that goes beyond your direct domain. Thinking about stakeholders, society and future is part of the job. Responsibility is strategic advantage, not constraint."
        },
        {
          "q": "Se tivesse que implementar governança de dados do zero hoje, o que faria diferente?",
          "q_en": "If you had to implement data governance from scratch today, what would you do differently?",
          "a": "Começaria com AI governance desde o início (não retrofitting), mais automação nas policies e co-creation com legal/compliance desde o design. Future-proof by design.",
          "a_en": "I would start with AI governance from the beginning (not retrofitting), more automation in policies and co-creation with legal/compliance from design. Future-proof by design."
        }
      ]
    },
    {
      "title": "Sustentabilidade e Responsabilidade Social - PMO CAGE/SEFAZ-RS (MM/AAAA-MM/AAAA) ⭐",
      "pt": {
        "s": "O PMO da CAGE/SEFAZ-RS precisava modernizar processos públicos, mas com responsabilidade sobre uso de recursos públicos e impacto social. Havia pressão por efficiency vs. accountability em projetos que afetavam 11 milhões de gaúchos.",
        "t": "Minha missão era liderar transformação digital responsável, otimizando recursos públicos, garantindo transparência e criando valor para cidadãos, não apenas para indicadores internos de produtividade.",
        "a": "Implementei framework de 'value for society': ROI social em cada projeto, transparency-by-design com dashboards públicos, sustainable tech choices (cloud otimizado, código eficiente) e process redesign focado em citizen experience. Criei rituais de impact assessment e feedback cidadão.",
        "r": "35% redução em custos operacionais, 60% melhoria em satisfação cidadã, 100% transparência de projetos via portal público e sustainability score de 8.5/10 em auditoria externa. Projetos gerando value beyond government. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que responsabilidade em setor público amplifica impacto: cada decisão afeta milhões de pessoas e gerações futuras. True leadership considera stakeholders que não estão na sala. Em retrospectiva, eu poderia ter antecipado melhor resistance política, e hoje sempre alinho expectativas com múltiplos níveis de governo desde o início."
      },
      "en": {
        "s": "CAGE/SEFAZ-RS PMO needed to modernize public processes, but with responsibility over public resource use and social impact. There was pressure for efficiency vs. accountability in projects affecting 11 million citizens of Rio Grande do Sul.",
        "t": "My mission was to lead responsible digital transformation, optimizing public resources, ensuring transparency and creating value for citizens, not just internal productivity indicators.",
        "a": "I implemented 'value for society' framework: social ROI in each project, transparency-by-design with public dashboards, sustainable tech choices (optimized cloud, efficient code) and process redesign focused on citizen experience. I created impact assessment rituals and citizen feedback.",
        "r": "35% reduction in operational costs, 60% improvement in citizen satisfaction, 100% project transparency via public portal and sustainability score of 8.5/10 in external audit. Projects generating value beyond government. (with baseline, target and period documented in executive report).",
        "l": "I learned that responsibility in public sector amplifies impact: each decision affects millions of people and future generations. True leadership considers stakeholders who aren't in the room. In retrospect, I could have better anticipated political resistance, and today I always align expectations with multiple government levels from the beginning."
      },
      "fups": [
        {
          "q": "Como você mediu 'valor para sociedade' além de métricas tradicionais de projeto?",
          "q_en": "How did you measure 'value for society' beyond traditional project metrics?",
          "a": "Framework multi-dimensional: economic impact (time/cost saved por cidadão), social impact (accessibility, inclusion), transparency score e sustainability metrics. Balanced scorecard for public good.",
          "a_en": "Multi-dimensional framework: economic impact (time/cost saved per citizen), social impact (accessibility, inclusion), transparency score and sustainability metrics. Balanced scorecard for public good."
        },
        {
          "q": "Qual foi o maior trade-off entre eficiência interna e responsabilidade social?",
          "q_en": "What was the biggest trade-off between internal efficiency and social responsibility?",
          "a": "Accessibility compliance adicionou 15% ao timeline mas incluiu 300k+ cidadãos com deficiência. Long-term value > short-term speed. Responsible innovation takes more time but serves more people.",
          "a_en": "Accessibility compliance added 15% to timeline but included 300k+ citizens with disabilities. Long-term value > short-term speed. Responsible innovation takes more time but serves more people."
        },
        {
          "q": "Como você garantiu transparency sem expor dados sensíveis?",
          "q_en": "How did you ensure transparency without exposing sensitive data?",
          "a": "Privacy-preserving transparency: dashboards com dados agregados, progress reports sanitized, e open-source methodology sem dados pessoais. Transparent process, protected privacy.",
          "a_en": "Privacy-preserving transparency: dashboards with aggregated data, sanitized progress reports, and open-source methodology without personal data. Transparent process, protected privacy."
        },
        {
          "q": "Como você lidou com pressure política para 'cortar corners' em nome da velocidade?",
          "q_en": "How did you handle political pressure to 'cut corners' in the name of speed?",
          "a": "Data-driven advocacy: mostrei long-term costs of shortcuts, risk assessment de reputation damage e cases de outros governos que sofreram backlash. Facts over politics.",
          "a_en": "Data-driven advocacy: showed long-term costs of shortcuts, risk assessment of reputation damage and cases of other governments that suffered backlash. Facts over politics."
        },
        {
          "q": "Que 'efeitos secundários' positivos você observou ao priorizar responsabilidade?",
          "q_en": "What positive 'secondary effects' did you observe by prioritizing responsibility?",
          "a": "Team engagement aumentou (purpose-driven work), vendor quality melhorou (higher standards), media coverage positiva e citizen trust score subiu 40%. Responsibility as competitive advantage.",
          "a_en": "Team engagement increased (purpose-driven work), vendor quality improved (higher standards), positive media coverage and citizen trust score rose 40%. Responsibility as competitive advantage."
        },
        {
          "q": "Como você balanceou inovação com prudência em contexto de recursos públicos?",
          "q_en": "How did you balance innovation with prudence in public resources context?",
          "a": "Innovation sandbox: 10% do budget para experimentos low-risk, high-reward. Fail fast but fail cheap. ROI threshold mais alto para public money, mas innovation mindset mantido.",
          "a_en": "Innovation sandbox: 10% of budget for low-risk, high-reward experiments. Fail fast but fail cheap. Higher ROI threshold for public money, but innovation mindset maintained."
        },
        {
          "q": "Qual foi o feedback mais impactante que você recebeu dos cidadãos?",
          "q_en": "What was the most impactful feedback you received from citizens?",
          "a": "'Primeira vez que sinto que governo pensa em mim, não apenas em processo interno.' Esse feedback mudou como priorizo features: citizen-first, not bureaucracy-first.",
          "a_en": "'First time I feel government thinks about me, not just internal process.' That feedback changed how I prioritize features: citizen-first, not bureaucracy-first."
        },
        {
          "q": "Como você incorporou sustentabilidade em decisões técnicas?",
          "q_en": "How did you incorporate sustainability into technical decisions?",
          "a": "Green software practices: code efficiency audits, cloud optimization para reduzir carbon footprint, serverless architecture e monitoring de resource usage. Tech choices com environmental consciousness.",
          "a_en": "Green software practices: code efficiency audits, cloud optimization to reduce carbon footprint, serverless architecture and resource usage monitoring. Tech choices with environmental consciousness."
        },
        {
          "q": "Que resistência você encontrou ao implementar 'broad responsibility'?",
          "q_en": "What resistance did you encounter when implementing 'broad responsibility'?",
          "a": "'Isso não é nossa responsabilidade' foi comum. Reframe: em setor público, everything connects to citizen impact. Responsibility is not burden, it's purpose.",
          "a_en": "'That's not our responsibility' was common. Reframe: in public sector, everything connects to citizen impact. Responsibility is not burden, it's purpose."
        },
        {
          "q": "Se tivesse que implementar responsabilidade social em tech privada, como adaptaria?",
          "q_en": "If you had to implement social responsibility in private tech, how would you adapt?",
          "a": "Similar framework: stakeholder impact assessment, ESG metrics integration, sustainable tech practices e community value creation. Corporate responsibility with same rigor as profit optimization.",
          "a_en": "Similar framework: stakeholder impact assessment, ESG metrics integration, sustainable tech practices and community value creation. Corporate responsibility with same rigor as profit optimization."
        }
      ]
    }
  ]
};

export default broad_responsibility;