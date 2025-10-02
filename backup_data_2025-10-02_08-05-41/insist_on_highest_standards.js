const insist_on_highest_standards = {
  id: "insistir nos mais altos padroes",
  name: "insistir nos mais altos padroes",
  principle: {
    title: "Insistir nos Mais Altos Padrões",
    title_en: "Insist on the Highest Standards",
    description: "Os líderes têm padrões implacavelmente altos - muitos podem pensar que esses padrões são excessivamente altos. Os líderes estão continuamente elevando o padrão e motivam suas equipes a entregar produtos, serviços e processos de alta qualidade.",
    description_en: "Leaders have relentlessly high standards – many people may think these standards are unreasonably high. Leaders are continually raising the bar and drive their teams to deliver high quality products, services, and processes.",
    icon: "🎯"
  },
  cases: [
    {
      "id": "quality-gates-e-doddor-em-squads",
      "title": "Quality Gates e DoD/DoR em Squads - Woop/Sicredi (2024)",
      "title_pt": "Quality Gates e DoD/DoR em Squads",
      "title_en": "Quality Gates and DoD/DoR in Squads",
      "company": "Woop Sicredi",
      "period": "06/2018-05/2021",
      "pt": {
        "s": "Defeitos recorrentes em entregas digitais geravam retrabalho e desgaste com áreas de negócio.",
        "t": "Minha missão era: Elevar padrões de qualidade de ponta a ponta sem desacelerar a entrega.",
        "a": "Eu instituí Definition of Ready/Done com critérios objetivos, testes automatizados mínimos, code review com checklist e 'quality gates' no CI/CD. Criei papel de 'quality owner' por squad.",
        "r": "Retrabalho -23%; incidentes em produção -31%; lead time estável. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que padrões altos são desenho de sistema: clareza, automação e donos visíveis. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "Recurring defects in digital deliveries caused rework and friction with business areas.",
        "t": "My mission was to raise end-to-end quality standards without slowing delivery.",
        "a": "I instituted Definition of Ready/Done with objective criteria, minimum automated tests, checklist-based code review, and CI/CD quality gates. I created a 'quality owner' role per squad.",
        "r": "Rework -23%; production incidents -31%; stable lead time. (with baseline, target and period documented in executive report).",
        "l": "I learned that high standards are systems work: clarity, automation, and visible ownership. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fups": [
        {
          "q": "Como evitou burocracia?",
          "q_en": "How did you avoid bureaucracy?",
          "a": "Critérios mínimos e automação; reuniões substituídas por evidências no pipeline.",
          "a_en": "Minimum criteria and automation; meetings replaced by pipeline evidence."
        },
        {
          "q": "Como conseguiu buy-in dos desenvolvedores para os novos padrões?",
          "q_en": "How did you get developer buy-in for the new standards?",
          "a": "Mostrei dados: 70% do tempo era gasto em retrabalho. Eles mesmos propuseram padrões mais rigorosos quando viram o impacto no seu dia-a-dia. Ownership automático.",
          "a_en": "I showed data: 70% of time was spent on rework. They themselves proposed stricter standards when they saw the impact on their daily work. Automatic ownership."
        },
        {
          "q": "Qual foi o critério mais impactante no Definition of Done?",
          "q_en": "What was the most impactful criteria in the Definition of Done?",
          "a": "Cobertura de testes unitários mínima de 80%. Forçou design melhor e reduziu 90% dos bugs básicos que chegavam em produção.",
          "a_en": "Minimum unit test coverage of 80%. It forced better design and reduced 90% of basic bugs reaching production."
        },
        {
          "q": "Como o quality owner funcionava na prática?",
          "q_en": "How did the quality owner work in practice?",
          "a": "Rotativo semanal, não era cargo. Responsável por validar que todos os quality gates foram atendidos antes do deploy. Criou ownership distribuído.",
          "a_en": "Weekly rotation, not a position. Responsible for validating all quality gates were met before deploy. Created distributed ownership."
        },
        {
          "q": "Qual foi a resistência inicial mais forte?",
          "q_en": "What was the strongest initial resistance?",
          "a": "'Vai desacelerar entregas'. Implementei gradualmente: primeiro automação, depois critérios. Mostramos que qualidade acelera no longo prazo.",
          "a_en": "'It will slow down deliveries'. I implemented gradually: automation first, then criteria. We showed quality accelerates long-term."
        },
        {
          "q": "Como mediu que os padrões eram 'altos o suficiente'?",
          "q_en": "How did you measure that standards were 'high enough'?",
          "a": "Benchmarking externo: nossos padrões ficaram no top 10% vs. outras fintechs. Métrica interna: menos de 2% de retrabalho por sprint.",
          "a_en": "External benchmarking: our standards ranked top 10% vs. other fintechs. Internal metric: less than 2% rework per sprint."
        },
        {
          "q": "O que acontecia quando alguém não seguia os padrões?",
          "q_en": "What happened when someone didn't follow the standards?",
          "a": "Pipeline automaticamente rejeitava. Não era questão pessoal, era sistemático. Feedback imediato e objetivo eliminou conflitos interpessoais.",
          "a_en": "Pipeline automatically rejected. It wasn't personal, it was systematic. Immediate and objective feedback eliminated interpersonal conflicts."
        },
        {
          "q": "Como evoluiu os padrões ao longo do tempo?",
          "q_en": "How did you evolve standards over time?",
          "a": "Review trimestral com dados de qualidade. Se 95% dos PRs passavam facilmente, elevávamos o padrão. Melhoria contínua baseada em evidências.",
          "a_en": "Quarterly review with quality data. If 95% of PRs passed easily, we raised the standard. Evidence-based continuous improvement."
        },
        {
          "q": "Qual foi o impacto nos prazos de entrega?",
          "q_en": "What was the impact on delivery timelines?",
          "a": "Primeiros 2 meses: +15% no cycle time. A partir do 3º mês: -25% devido à redução de retrabalho. Investimento de curto prazo, ganho de longo prazo.",
          "a_en": "First 2 months: +15% in cycle time. From 3rd month: -25% due to reduced rework. Short-term investment, long-term gain."
        },
        {
          "q": "Como garantiu que padrões altos não criassem perfeccionismo paralisante?",
          "q_en": "How did you ensure high standards didn't create paralyzing perfectionism?",
          "a": "Definição clara de 'bom o suficiente' para cada critério. 80% de cobertura, não 100%. Padrão alto, mas atingível e pragmático.",
          "a_en": "Clear definition of 'good enough' for each criteria. 80% coverage, not 100%. High standard, but achievable and pragmatic."
        }
      ]
    },
    {
      "title": "Padronização de Arquivos de Dados e Controle de Versão - SEFAZ-RS (07/2024-09/2025)",
      "title_pt": "Padronização de Arquivos de Dados e Controle de Versão",
      "title_en": "Padronização de Arquivos de Dados e Controle de Versão (EN)",
      "company": "Woop Sicredi",
      "period": "06/2018-05/2021",
      "pt": {
        "s": "No Programa Zero da SEFAZ-RS, havia inconsistências nos formatos de dados entre sistemas, causando erros de integração e reprocessamentos. Cada equipe usava seu próprio padrão, gerando complexidade desnecessária.",
        "t": "Minha missão era estabelecer padrões únicos e rigorosos para estruturas de dados, versionamento e documentação, garantindo qualidade e interoperabilidade entre todos os sistemas.",
        "a": "Criei data schemas obrigatórios com validação automática, implementei semantic versioning para todas as estruturas de dados e estabeleci documentação técnica como critério de Definition of Done. Instituí code review obrigatório para mudanças em schemas e alertas automáticos para breaking changes.",
        "r": "Redução de 85% em erros de integração, de 40 erros/semana para 6. Tempo de onboarding de novos desenvolvedores caiu 60%. Reprocessamentos por incompatibilidade de dados reduziram 92%. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que padrões técnicos rigorosos são um investimento que se paga exponencialmente. A resistência inicial foi vencida mostrando que padrões eliminam trabalho repetitivo e permitem focar na inovação. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "In SEFAZ-RS's Zero Program, there were inconsistencies in data formats between systems, causing integration errors and reprocessing. Each team used its own standard, creating unnecessary complexity.",
        "t": "My mission was to establish unique and rigorous standards for data structures, versioning and documentation, ensuring quality and interoperability across all systems.",
        "a": "I created mandatory data schemas with automatic validation, implemented semantic versioning for all data structures and established technical documentation as Definition of Done criteria. I instituted mandatory code review for schema changes and automatic alerts for breaking changes.",
        "r": "85% reduction in integration errors, from 40 errors/week to 6. New developer onboarding time dropped 60%. Reprocessing due to data incompatibility reduced 92%. (with baseline, target and period documented in executive report).",
        "l": "I learned that rigorous technical standards are an investment that pays off exponentially. Initial resistance was overcome by showing that standards eliminate repetitive work and allow focus on innovation. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fups": [
        {
          "q": "Como definiu os data schemas obrigatórios?",
          "q_en": "How did you define the mandatory data schemas?",
          "a": "Analisei os 20 formatos mais usados, extraí padrões comuns e criei schema base extensível. JSON Schema com validações automáticas no CI/CD.",
          "a_en": "I analyzed the 20 most used formats, extracted common patterns and created an extensible base schema. JSON Schema with automatic CI/CD validations."
        },
        {
          "q": "Qual foi a maior resistência técnica encontrada?",
          "q_en": "What was the biggest technical resistance encountered?",
          "a": "Desenvolvedores sêniores que queriam 'liberdade criativa'. Mostrei que 90% das 'inovações' eram reinventar a roda. Padrão liberta para inovar no que importa.",
          "a_en": "Senior developers who wanted 'creative freedom'. I showed that 90% of 'innovations' were reinventing the wheel. Standards free you to innovate on what matters."
        },
        {
          "q": "Como implementou semantic versioning em dados?",
          "q_en": "How did you implement semantic versioning in data?",
          "a": "Major: breaking changes, Minor: novos campos opcionais, Patch: correções. Automated tooling para detectar breaking changes e alertar dependentes.",
          "a_en": "Major: breaking changes, Minor: new optional fields, Patch: fixes. Automated tooling to detect breaking changes and alert dependents."
        },
        {
          "q": "Qual foi o impacto na produtividade inicial?",
          "q_en": "What was the impact on initial productivity?",
          "a": "Primeira semana: -40% produtividade (curva de aprendizado). Terceira semana: produtividade normal. Sexta semana: +30% devido à redução de debugging.",
          "a_en": "First week: -40% productivity (learning curve). Third week: normal productivity. Sixth week: +30% due to reduced debugging."
        },
        {
          "q": "Como garantiu que a documentação ficasse sempre atualizada?",
          "q_en": "How did you ensure documentation stayed always updated?",
          "a": "Automated doc generation dos schemas + obrigatório no PR. CI/CD rejeitava se doc não matchasse o código. Documentação como código, não afterthought.",
          "a_en": "Automated doc generation from schemas + mandatory in PR. CI/CD rejected if doc didn't match code. Documentation as code, not afterthought."
        },
        {
          "q": "Qual foi o critério para 'padrão alto o suficiente' vs 'over-engineering'?",
          "q_en": "What was the criteria for 'high enough standard' vs 'over-engineering'?",
          "a": "Se resolvia 80% dos casos com 20% de complexidade, era padrão. Se precisava de casos especiais para >50% dos usos, era over-engineering.",
          "a_en": "If it solved 80% of cases with 20% complexity, it was standard. If it needed special cases for >50% of uses, it was over-engineering."
        },
        {
          "q": "Como lidou com sistemas legados que não seguiam os padrões?",
          "q_en": "How did you handle legacy systems that didn't follow standards?",
          "a": "Adapters transparentes para sistemas legados + migration roadmap de 18 meses. Novos sistemas obrigatoriamente no padrão. Migração gradual sem breaking.",
          "a_en": "Transparent adapters for legacy systems + 18-month migration roadmap. New systems mandatory on standard. Gradual migration without breaking."
        },
        {
          "q": "Qual métrica provou que os padrões valeram o investimento?",
          "q_en": "Which metric proved the standards were worth the investment?",
          "a": "Developer Experience Score subiu de 4.2 para 8.1. Tempo para resolver bugs de integração: 4h → 20min. ROI de 400% em 6 meses.",
          "a_en": "Developer Experience Score rose from 4.2 to 8.1. Time to resolve integration bugs: 4h → 20min. ROI of 400% in 6 months."
        },
        {
          "q": "Como evitou que padrões ficassem obsoletos?",
          "q_en": "How did you prevent standards from becoming obsolete?",
          "a": "Review trimestral com usage analytics. Se <70% dos novos projetos seguiam um padrão, era sinal de que precisava evoluir. Standards como produto interno.",
          "a_en": "Quarterly review with usage analytics. If <70% of new projects followed a standard, it was a sign it needed evolution. Standards as internal product."
        },
        {
          "q": "Qual foi o feedback mais valioso da equipe sobre os padrões?",
          "q_en": "What was the most valuable team feedback about the standards?",
          "a": "'Agora posso entender qualquer código em 5 minutos'. A consistência acelerou colaboração e code review. Padrão como linguagem comum.",
          "a_en": "'Now I can understand any code in 5 minutes'. Consistency accelerated collaboration and code review. Standard as common language."
        }
      ]
    }
  ]
};

export default insist_on_highest_standards;