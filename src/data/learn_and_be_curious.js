const learn_and_be_curious = {
  "id": "learn_and_be_curious",
  "name": "Aprender e Ser Curioso",
  "cases": [
    {
      "title": "Cultura de Aprendizagem Contínua no PMO (CAGE/SEFAZ-RS)",
      "pt": {
        "s": "No PMO da CAGE/SEFAZ-RS, equipes multidisciplinares executavam projetos estratégicos sem um mecanismo formal e contínuo de aprendizagem. As retrospectivas aconteciam de forma ad hoc e o conhecimento produzido se perdia entre planilhas e e-mails, impactando prazos, qualidade e reuso de soluções.",
        "t": "Minha missão era: Criar um sistema de aprendizagem contínua que conectasse discovery, delivery e operação (BAU), institucionalizando práticas de melhoria contínua, acervo de lições aprendidas e reuso de padrões.",
        "a": "Implementei um programa de ‘Learning Sprints’ trimestrais com três pilares: (1) Retro cross-projetos com métricas padronizadas (lead time, retrabalho, desvio de escopo); (2) Biblioteca de ‘Playbooks’ versionados no portal do PMO (SharePoint) com templates, checklists e exemplos; (3) Ritos de compartilhamento (‘Tech/PM Talks’) com gravação, sumário e tagging para busca rápida. Conectei o pipeline do Power BI para medir adoção e impacto.",
        "r": "Adoção de 87% dos projetos em 2 ciclos; redução média de 14% no lead time e de 11% no retrabalho em 6 meses; aumento de 22 p.p. na reutilização de templates; satisfação dos sponsors subiu 0,6 no NPS interno. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que curiosidade organizacional precisa de infraestrutura mínima: cadência, curadoria e métricas. Sem isso, a ‘vontade de aprender’ vira ruído. Com isso, vira vantagem competitiva e previsibilidade. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "Within SEFAZ-RS’ PMO, cross-functional teams executed strategic projects without a formal, continuous learning mechanism. Retrospectives were ad hoc and knowledge was scattered across spreadsheets and emails, harming timelines, quality, and reuse.",
        "t": "Create a continuous learning system that connected discovery, delivery, and BAU, institutionalizing continuous improvement, lessons learned, and reusable standards.",
        "a": "I implemented quarterly ‘Learning Sprints’ with three pillars: (1) Cross-project retros with standardized metrics (lead time, rework, scope variance); (2) A versioned Playbook Library on the PMO portal (SharePoint) with templates, checklists, and exemplars; (3) Sharing rituals (‘Tech/PM Talks’) with recording, summaries, and tagging for fast retrieval. I wired Power BI to measure adoption and impact.",
        "r": "87% project adoption within 2 cycles; average 14% lead-time reduction and 11% rework reduction over 6 months; +22 pp in template reuse; sponsor satisfaction +0.6 in internal NPS.",
        "l": "I learned that organizational curiosity requires lightweight infrastructure: cadence, curation, and metrics. Without it, ‘learning intent’ becomes noise; with it, it becomes a performance edge."
      },
      "fup": [
        {
          "q": "Que métrica você usou como ‘leading indicator’ para saber se a aprendizagem estava de fato acontecendo?",
          "a": "Adoção dos Playbooks por projeto (downloads/uso por sprint) e taxa de issues recorrentes: se caía a recorrência, a aprendizagem estava sendo incorporada ao processo."
        },
        {
          "q": "Como você garantiu que os ‘Talks’ não virassem apenas apresentações sem mudança de processo?",
          "a": "Cada Talk terminava com um ‘commit’ explícito de 1 melhoria testável na sprint seguinte. O PM responsável registrava no backlog com owner e critério de aceitação."
        },
        {
          "q": "Qual trade-off você enfrentou entre padronizar e permitir autonomia dos times?",
          "a": "Padronizei entradas/saídas mínimas (DoR/DoD, métricas) e deixei autonomia total no ‘como’. Evitei sufocar a inovação mantendo o padrão no ‘quê’ medir."
        },
        {
          "q": "Como evitou viés de sobrevivência nas lições aprendidas?",
          "a": "Incluímos ‘postmortems’ de falhas com blame-free culture. As melhores lições vieram de erros analisados com dados, não de casos de sucesso."
        },
        {
          "q": "O que você faria diferente para acelerar a adoção inicial?",
          "a": "Eu teria eleito ‘champions’ por macroprocesso desde o começo e dado micro-incentivos de visibilidade já no 1º ciclo."
        },
        {
          "q": "Como conectou BAU e projetos na prática?",
          "a": "Criamos o ‘handover canvas’ com KPIs-alvo e um ‘30-60-90’ de estabilização; BAU reportava variação e, se >x%, virava melhoria priorizada."
        },
        {
          "q": "Como mediu o ROI do programa de aprendizagem?",
          "a": "Comparativo A/B entre grupos com alta vs. baixa adoção (quartis). Projetos no quartil superior entregaram +9 p.p. no prazo e -13% custo variado."
        },
        {
          "q": "Qual o maior obstáculo cultural e como foi mitigado?",
          "a": "Ceticismo de ‘mais reunião’. Respondi reduzindo reuniões operacionais redundantes e substituindo por uma retro estruturada e curta (45min)."
        },
        {
          "q": "Como você garantiu perenidade do acervo?",
          "a": "Versão única da verdade no SharePoint com governance leve (PRs, revisão trimestral) e dono por capítulo."
        },
        {
          "q": "Que insight te surpreendeu nesses ciclos?",
          "a": "O maior ganho veio de pequenos checklists de qualidade (ex.: critérios de aceite de requisitos), não de grandes mudanças de ferramenta."
        }
      ]
    },
    {
      "title": "Programa de Upskilling em IA e Automação (HDG Robots)",
      "pt": {
        "s": "No Hub do Gestor (HDG Robots), líderes queriam ganhar proficiência prática em IA/n8n/automação para acelerar entrega e reduzir custos, mas o nível de entrada era heterogêneo e o conteúdo disponível era difuso.",
        "t": "Minha missão era: Desenhar e lançar um programa de upskilling com foco ‘mão na massa’, medindo ganho real de produtividade e redução de retrabalho em squads.",
        "a": "Eu estruturei uma trilha em 3 níveis (Foundations, Applied, Advanced), com projetos guiados (capstone), código reusável, repositório de prompts padronizados e clínicas de revisão assíncronas. Adotei avaliação por rubricas (qualidade, segurança, velocidade) e ‘demo day’ bimestral.",
        "r": "Tempo de prototipação caiu 35%; automações reduziram ~28% de trabalho manual em 90 dias; biblioteca de componentes/fluxos reutilizados cresceu para 120 artefatos; satisfação dos times +0,7. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que curiosidade florece quando há um ‘caminho feliz’ tangível: exemplos prontos, feedback rápido e metas de uso em cenários reais de negócio. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "At Hub do Gestor (HDG Robots), leaders sought practical proficiency in AI/n8n/automation to speed delivery and cut costs, yet entry levels varied and content was fragmented.",
        "t": "Design and launch a hands-on upskilling program measuring real productivity gain and rework reduction across squads.",
        "a": "I built a 3-tier track (Foundations, Applied, Advanced) with guided projects (capstones), reusable code, a standardized prompt repository, and asynchronous review clinics. I adopted rubric-based assessments (quality, safety, speed) and a bi-monthly demo day.",
        "r": "Prototyping time dropped 35%; automations removed ~28% manual effort within 90 days; the reusable components/flows library reached 120 artifacts; team satisfaction +0.7.",
        "l": "I learned that curiosity thrives when a tangible ‘happy path’ exists: ready-made examples, fast feedback, and targets tied to real business scenarios."
      },
      "fup": [
        {
          "q": "Como você mediu ‘ganho real’ e evitou métricas de vaidade?",
          "a": "Usei tempo de ciclo e horas evitadas por automação validadas pelo gestor; só entrava no score o que teve uso em produção por 30 dias."
        },
        {
          "q": "Qual foi o maior risco de segurança e como foi tratado?",
          "a": "Padronizei tokens e segredos via cofre/vars no n8n, e revisões de privacidade nos prompts para evitar vazamento de dados."
        },
        {
          "q": "Que erro comum nos capstones você observou e corrigiu?",
          "a": "Dependência de um único nó ou serviço. Reforcei fallback e idempotência; introduzi checklists de resiliência."
        },
        {
          "q": "Como você personalizou a trilha para níveis diferentes sem fragmentar o programa?",
          "a": "Mesma missão de negócio, mas com critérios de aceitação diferenciados por trilha; o Advanced tinha SLOs mais rígidos."
        },
        {
          "q": "Qual a estratégia de engajamento mais eficaz?",
          "a": "Demo day com placar, badges e showcases no portal; social proof elevou a adesão."
        },
        {
          "q": "Quais foram os top 3 componentes reutilizados?",
          "a": "Autenticação OAuth2 genérica, conector WhatsApp Business, e pipeline de avaliação de embeddings."
        },
        {
          "q": "Como lidou com obsolescência rápida das ferramentas de IA?",
          "a": "Ciclos trimestrais de atualização do conteúdo e deprecation policy leve para exemplos antigos."
        },
        {
          "q": "Que métrica não funcionou e você abandonou?",
          "a": "Número bruto de prompts criados; incentivava volume sem qualidade. Substituí por ‘prompts aprovados em revisão técnica’."
        },
        {
          "q": "Como provou o impacto para a liderança?",
          "a": "Mostrei savings anualizados e tempo de lançamento antecipado (TTM) em 3 cases âncora."
        },
        {
          "q": "Se tivesse que dobrar o impacto em 60 dias, o que faria?",
          "a": "Criaria squads de aceleração (tiger teams) focados em 3 casos de alto valor e pagaria a dívida técnica de automações mais usadas."
        }
      ]
    }
  ]
};

export default learn_and_be_curious;
