const ownership_data = {
  id: "mentalidade de dono",
  name: "mentalidade de dono",
  principle: {
    title: "Mentalidade de Dono",
    title_en: "Ownership",
    description: "Os líderes são donos. Eles pensam no longo prazo e não sacrificam valor no longo prazo por resultados no curto prazo. Eles agem em nome de toda a empresa, além de sua própria equipe. Eles nunca dizem 'isso não é meu trabalho'.",
    description_en: "Leaders are owners. They think long term and don't sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say 'that's not my job'.",
    icon: "🏆"
  },
  cases: [
    {
      "title": "Migração Crítica de Dados e Compliance - HSBC → Bradesco (11/2015-09/2016)",
      "title_pt": "Migração Crítica de Dados e Compliance",
      "title_en": "Critical Data Migration and Compliance",
      "company": "HSBC → Bradesco",
      "period": "2019-2024",
      "isTopCase": true,
      "pt": {
        "s": "Durante a aquisição do HSBC pelo Bradesco (US$ 5,2 bi), fui responsável pela migração do portfólio de Retail Banking. O desafio era migrar milhões de contas e R$ 3 bilhões em ativos sem perda de dados, garantindo 100% de conformidade com reguladores como BACEN e o FATCA/IRS americano.",
        "t": "Minha responsabilidade era garantir que a migração ocorresse com zero perda de dados, total conformidade regulatória e retenção da base de clientes de alto valor (HNWI). Eu precisava ser o dono do processo de ponta a ponta.",
        "a": "Eu em vez de delegar, mergulhei nos detalhes. Atuei pessoalmente na implantação dos processos de conformidade FATCA. Liderei squads globais na Índia, China e Polônia para validação de dados, mapeando tabelas críticas. Quando identifiquei um risco, não disse 'não é meu trabalho'; eu mesmo criei dashboards de conformidade para reportar o status semanalmente ao C-Level e ao BACEN.",
        "r": "A migração foi concluída com zero perda de dados e 100% de aprovação em todas as auditorias. Além disso, não apenas retivemos a base de clientes HNWI, como aumentamos o portfólio de Private Banking em 30% durante a transição. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que 'Ownership' em projetos críticos significa ir muito além do gerenciamento. Significa assumir a responsabilidade pessoal pelo resultado, mergulhando em áreas técnicas ou regulatórias fora da sua zona de conforto e ser o dono do problema e da solução. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "During the $5.2 billion acquisition of HSBC by Bradesco, I was responsible for the migration of the Retail Banking portfolio. The challenge was to migrate millions of accounts and R$ 3 billion in assets with zero data loss, ensuring 100% compliance with regulators like BACEN and the US FATCA/IRS.",
        "t": "My responsibility was to ensure the migration occurred with zero data loss, full regulatory compliance, and retention of the high-net-worth individual (HNWI) client base. I needed to own the end-to-end process.",
        "a": "Instead of delegating, I dove into the details. I was personally involved in implementing FATCA compliance processes. I led global squads in India, China, and Poland for data validation, mapping critical tables. When I identified a risk, I didn't say 'that's not my job'; I created compliance dashboards myself to report status weekly to the C-Level and BACEN.",
        "r": "The migration was completed with zero data loss and 100% approval in all audits. Furthermore, we not only retained the HNWI client base but also increased the Private Banking portfolio by 30% during the transition. (with baseline, target and period documented in executive report).",
        "l": "I learned that 'Ownership' in critical projects means going far beyond management. It means taking personal responsibility for the outcome, diving into technical or regulatory areas outside your comfort zone, and owning both the problem and the solution. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fups": [
        {
          "q": "Qual foi o primeiro risco que você identificou pessoalmente e que a equipe não havia percebido?",
          "q_en": "What was the first risk you personally identified that the team hadn't noticed?",
          "a": "Eu identifiquei que o tratamento de 'contas conjuntas' com diferentes nacionalidades tinha uma particularidade na lei FATCA que nosso processo automático não cobria. Assumi a liderança, criei uma força-tarefa e desenhei um processo de validação manual para esse nicho, evitando uma falha de compliance.",
          "a_en": "I identified that handling 'joint accounts' with different nationalities had a FATCA law particularity that our automatic process didn't cover. I took leadership, created a task force and designed a manual validation process for this niche, avoiding a compliance failure."
        },
        {
          "q": "Descreva um momento em que você teve que assumir a responsabilidade por um erro cometido por sua equipe global.",
          "q_en": "Describe a moment when you had to take responsibility for an error made by your global team.",
          "a": "A equipe de dados na Índia rodou um script de limpeza que removeu marcadores de clientes de alto valor. Em vez de culpá-los, no comitê executivo eu disse: 'A falha foi minha por não ter definido um teste em ambiente controlado para esse script'. Assumi a responsabilidade e apresentei o plano de recuperação.",
          "a_en": "The data team in India ran a cleanup script that removed high-value client markers. Instead of blaming them, in the executive committee I said: 'The failure was mine for not defining a controlled environment test for this script'. I took responsibility and presented the recovery plan."
        },
        {
          "q": "Como você garantiu que a mentalidade de ownership fosse replicada em sua equipe?",
          "q_en": "How did you ensure the ownership mindset was replicated in your team?",
          "a": "Criei rituais de 'Ownership Reviews' onde cada membro apresentava não apenas o que fez, mas as decisões que tomou como 'dono'. Reconhecia publicamente quando alguém ia além do escopo para resolver problemas. Ownership se ensina pelo exemplo e reconhecimento.",
          "a_en": "I created 'Ownership Reviews' rituals where each member presented not just what they did, but the decisions they made as 'owner'. I publicly recognized when someone went beyond scope to solve problems. Ownership is taught by example and recognition."
        },
        {
          "q": "Qual foi a decisão mais arriscada que você tomou assumindo ownership completo?",
          "q_en": "What was the riskiest decision you made taking complete ownership?",
          "a": "Decidir pausar a migração por 48h quando encontrei inconsistências nos dados de compliance. Era véspera de deadline regulatório, mas preferi assumir o risco de atraso a entregar com falhas. No final, evitamos multa milionária do BACEN.",
          "a_en": "Deciding to pause migration for 48h when I found inconsistencies in compliance data. It was the eve of regulatory deadline, but I preferred to take the delay risk rather than deliver with failures. In the end, we avoided a million-dollar fine from BACEN."
        },
        {
          "q": "Como mediu que sua abordagem de ownership estava funcionando?",
          "q_en": "How did you measure that your ownership approach was working?",
          "a": "Métricas de qualidade (zero erros críticos), velocidade de resolução de problemas (redução de 60% no MTTR) e feedback da equipe sobre autonomia. Quando pararam de me escalar problemas triviais, soube que tinham assumido ownership.",
          "a_en": "Quality metrics (zero critical errors), problem resolution speed (60% reduction in MTTR) and team feedback on autonomy. When they stopped escalating trivial problems to me, I knew they had assumed ownership."
        },
        {
          "q": "Qual foi o momento em que você mais sentiu o peso da responsabilidade como 'dono'?",
          "q_en": "What was the moment you most felt the weight of responsibility as 'owner'?",
          "a": "Quando descobri um erro de mapeamento que poderia impactar aposentadorias de clientes. Eram 23h, véspera de feriado, mas liguei pessoalmente para o CTO e CFO. Trabalhamos a madrugada toda para corrigir. Ownership não tem horário comercial.",
          "a_en": "When I discovered a mapping error that could impact client retirements. It was 11pm, eve of a holiday, but I personally called the CTO and CFO. We worked all night to fix it. Ownership doesn't have business hours."
        },
        {
          "q": "Como você balanceou ownership individual com trabalho em equipe?",
          "q_en": "How did you balance individual ownership with teamwork?",
          "a": "Ownership não é fazer tudo sozinho, é garantir que tudo seja feito. Delegava com contexto claro e checkpoints, mas mantinha accountability final. 'Distributed ownership, centralized accountability'.",
          "a_en": "Ownership isn't doing everything alone, it's ensuring everything gets done. I delegated with clear context and checkpoints, but maintained final accountability. 'Distributed ownership, centralized accountability'."
        },
        {
          "q": "Qual foi o impacto financeiro direto de sua abordagem de ownership neste projeto?",
          "q_en": "What was the direct financial impact of your ownership approach in this project?",
          "a": "Evitamos R$ 50M em potenciais multas regulatórias, reduzimos 40% o prazo de migração (economia de R$ 12M em consultoria) e aumentamos retenção de clientes HNWI gerando R$ 80M em receita adicional.",
          "a_en": "We avoided R$ 50M in potential regulatory fines, reduced migration timeline by 40% (R$ 12M savings in consulting) and increased HNWI client retention generating R$ 80M in additional revenue."
        },
        {
          "q": "Como você tratou situações onde outros departamentos tentaram transferir responsabilidade para você?",
          "q_en": "How did you handle situations where other departments tried to transfer responsibility to you?",
          "a": "Aceitava se fosse crítico para o sucesso do projeto, mas sempre documentava e comunicava a todos os stakeholders. 'Assumo a responsabilidade, mas vamos alinhar que isso não é o normal'. Ownership responsável, não ingênuo.",
          "a_en": "I accepted if it was critical for project success, but always documented and communicated to all stakeholders. 'I assume responsibility, but let's align that this isn't normal'. Responsible ownership, not naive."
        },
        {
          "q": "Se você tivesse que refazer esta migração, o que faria diferente mantendo a mesma mentalidade de ownership?",
          "q_en": "If you had to redo this migration, what would you do differently while maintaining the same ownership mindset?",
          "a": "Investiria mais tempo no início mapeando stakeholders e criando coalition. Ownership é mais efetivo quando todos entendem e compram a visão. Começaria com mais diplomacia, manteria a mesma determinação.",
          "a_en": "I would invest more time upfront mapping stakeholders and creating coalition. Ownership is more effective when everyone understands and buys into the vision. I would start with more diplomacy, maintain the same determination."
        }
      ]
    },
    {
      "id": "estruturacao-pmo-zero-sefaz-rs",
      "title": "Estruturação do PMO do Zero (SEFAZ-RS) (07/2024-09/2025)",
      "title_pt": "Estruturação do PMO do Zero (SEFAZ-RS)",
      "title_en": "PMO Structuring from Scratch (SEFAZ-RS)",
      "company": "SEFAZ-RS",
      "period": "07/2024-09/2025",
      "isTopCase": true,
      "pt": {
        "s": "A SEFAZ-RS estava iniciando o Programa Zero, um projeto estratégico de R$ 50 milhões para modernização digital, mas não tinha estrutura de PMO nem governança estabelecida. Projetos anteriores falharam por falta de coordenação e ownership.",
        "t": "Minha missão era criar do zero um PMO robusto que garantisse a entrega bem-sucedida do Programa Zero, assumindo responsabilidade total pelo sucesso de uma carteira de 12 projetos críticos simultâneos.",
        "a": "Assumi ownership completo da estruturação: desenhei metodologia híbrida (waterfall + ágil), implementei ferramentas de gestão (Azure DevOps, Power BI), criei rituais de governança, contratei e treinei equipe de 15 pessoas. Quando surgiam problemas em qualquer projeto, não esperava escalação - ia pessoalmente resolver, seja questão técnica, orçamentária ou política.",
        "r": "Programa Zero entregue dentro do prazo e orçamento, com 12/12 projetos finalizados com sucesso. Redução de 40% no tempo médio de entrega vs. projetos anteriores, satisfaction score de 8.7/10 dos sponsors e modelo de PMO sendo replicado em outras secretarias. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que ownership em estruturação organizacional significa assumir não apenas a entrega, mas a construção da capacidade de entregar. Você é responsável por criar o sistema que vai gerar os resultados, não apenas pelos resultados. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "SEFAZ-RS was starting the Zero Program, a strategic R$ 50 million project for digital modernization, but had no PMO structure or established governance. Previous projects failed due to lack of coordination and ownership.",
        "t": "My mission was to create from scratch a robust PMO that would ensure successful delivery of the Zero Program, taking total responsibility for the success of a portfolio of 12 critical simultaneous projects.",
        "a": "I assumed complete ownership of structuring: designed hybrid methodology (waterfall + agile), implemented management tools (Azure DevOps, Power BI), created governance rituals, hired and trained team of 15 people. When problems arose in any project, I didn't wait for escalation - I personally went to resolve, whether technical, budgetary or political issues.",
        "r": "Zero Program delivered on time and budget, with 12/12 projects completed successfully. 40% reduction in average delivery time vs. previous projects, 8.7/10 satisfaction score from sponsors and PMO model being replicated in other departments. (with baseline, target and period documented in executive report).",
        "l": "I learned that ownership in organizational structuring means assuming not just delivery, but building the capacity to deliver. You're responsible for creating the system that will generate results, not just for the results. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fups": [
        {
          "q": "Como você assumiu ownership de uma área que não existia antes?",
          "q_en": "How did you assume ownership of an area that didn't exist before?",
          "a": "Tratei como se fosse minha empresa: pesquisei best practices, entrevistei stakeholders, desenhei o que precisávamos e assumi a responsabilidade de fazer funcionar. Ownership de resultado + ownership de processo.",
          "a_en": "I treated it like my own company: researched best practices, interviewed stakeholders, designed what we needed and assumed responsibility for making it work. Ownership of result + ownership of process."
        },
        {
          "q": "Qual foi a primeira decisão de ownership que você tomou que surpreendeu a organização?",
          "q_en": "What was the first ownership decision you made that surprised the organization?",
          "a": "Quando um projeto estava com risco de atraso, cancelei minhas férias e trabalhei fim de semana para resolver pessoalmente um problema de infraestrutura. Mandei mensagem: 'Não vou deixar o Programa Zero falhar por um problema técnico'.",
          "a_en": "When a project was at risk of delay, I cancelled my vacation and worked weekends to personally solve an infrastructure problem. I sent message: 'I won't let Zero Program fail due to a technical problem'."
        },
        {
          "q": "Como você garantiu que sua equipe também desenvolvesse mentalidade de ownership?",
          "q_en": "How did you ensure your team also developed ownership mindset?",
          "a": "Cada PM era 'dono' de seu projeto end-to-end. Criaram dashboards próprios, reportavam direto aos sponsors e tinham budget de decisão. Autonomia com accountability gera ownership natural.",
          "a_en": "Each PM was 'owner' of their project end-to-end. They created their own dashboards, reported directly to sponsors and had decision budget. Autonomy with accountability generates natural ownership."
        },
        {
          "q": "Descreva uma situação onde você teve que assumir ownership de um fracasso da equipe.",
          "q_en": "Describe a situation where you had to assume ownership of a team failure.",
          "a": "Um PM novato entregou relatório com dados incorretos ao Secretário. Em vez de culpá-lo, assumi: 'Falha minha no processo de quality assurance'. Implementei peer review e assumiu responsabilidade pelo desenvolvimento da equipe.",
          "a_en": "A junior PM delivered report with incorrect data to the Secretary. Instead of blaming him, I assumed: 'My failure in quality assurance process'. I implemented peer review and took responsibility for team development."
        },
        {
          "q": "Como mediu se sua abordagem de ownership estava criando resultados?",
          "q_en": "How did you measure if your ownership approach was creating results?",
          "a": "Métricas de entrega (100% projetos no prazo), satisfação dos sponsors (NPS 8.7/10), engagement da equipe (eNPS 9.2/10) e replicação do modelo (3 secretarias adotaram). Results speak louder than words.",
          "a_en": "Delivery metrics (100% projects on time), sponsor satisfaction (NPS 8.7/10), team engagement (eNPS 9.2/10) and model replication (3 departments adopted). Results speak louder than words."
        },
        {
          "q": "Qual foi o maior risco pessoal que você assumiu por ownership?",
          "q_en": "What was the biggest personal risk you assumed through ownership?",
          "a": "Garantir pessoalmente ao Governador que entregaríamos no prazo quando 60% dos stakeholders achavam impossível. Coloquei minha reputação na linha porque acreditava no que construímos.",
          "a_en": "Personally guaranteeing to the Governor we would deliver on time when 60% of stakeholders thought it impossible. I put my reputation on the line because I believed in what we built."
        },
        {
          "q": "Como você balanceou ownership com delegação efetiva?",
          "q_en": "How did you balance ownership with effective delegation?",
          "a": "Deleguei autoridade mas mantive responsabilidade. 'Você decide, eu respondo pelas consequências'. Isso deu autonomia à equipe sem me isentar do accountability final.",
          "a_en": "I delegated authority but maintained responsibility. 'You decide, I answer for consequences'. This gave autonomy to team without exempting me from final accountability."
        },
        {
          "q": "Qual foi o feedback mais marcante sobre sua abordagem de ownership?",
          "q_en": "What was the most striking feedback about your ownership approach?",
          "a": "O Secretário disse: 'Nunca vi alguém assumir responsabilidade como você. Você trata o governo como se fosse seu'. Era exatamente o mindset que queria transmitir.",
          "a_en": "The Secretary said: 'I've never seen anyone assume responsibility like you. You treat government as if it were yours'. It was exactly the mindset I wanted to convey."
        },
        {
          "q": "Como você lidou com stakeholders que tentavam transferir ownership para você indevidamente?",
          "q_en": "How did you handle stakeholders who tried to transfer ownership to you inappropriately?",
          "a": "Aceitava responsabilidades que impactavam o Programa Zero, mas sempre alinhava expectativas: 'Assumo isso agora, mas vamos definir como vai funcionar no futuro'. Ownership estratégico, não operacional infinito.",
          "a_en": "I accepted responsibilities that impacted Zero Program, but always aligned expectations: 'I assume this now, but let's define how it will work in the future'. Strategic ownership, not infinite operational."
        },
        {
          "q": "Se tivesse que recriar este PMO em outro órgão, o que faria igual e diferente?",
          "q_en": "If you had to recreate this PMO in another agency, what would you do the same and differently?",
          "a": "Manteria: ownership total dos resultados, metodologia híbrida, equipe dedicada. Mudaria: começaria com mais stakeholder mapping e coalition building. Ownership é mais efetivo com contexto político claro.",
          "a_en": "I would keep: total ownership of results, hybrid methodology, dedicated team. I would change: start with more stakeholder mapping and coalition building. Ownership is more effective with clear political context."
        }
      ]
    }
  ]
};

export default ownership_data;