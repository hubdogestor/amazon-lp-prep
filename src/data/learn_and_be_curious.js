// Amazon Leadership Principle: Learn and Be Curious
// Data structure for study cases and follow-up questions

const learn_and_be_curious_data = {
  principle: {
    title: "Aprender e Ser Curioso",
    title_en: "Learn and Be Curious", 
    description: "Os líderes nunca param de aprender e sempre buscam se aprimorar. Eles são curiosos sobre novas possibilidades e agem para explorá-las.",
    description_en: "Leaders are never done learning and always seek to improve themselves. They are curious about new possibilities and act to explore them.",
    icon: ""
  },
  "id": "learn_and_be_curious", 
  "name": "Aprender e ser curioso",
  cases: [
    {
      "title": "Cultura de Aprendizagem Contínua no PMO (CAGE/SEFAZ-RS)",
      "pt": {
        "s": "No PMO da CAGE/SEFAZ-RS, equipes multidisciplinares executavam projetos estratégicos sem um mecanismo formal e contínuo de aprendizagem. As retrospectivas aconteciam de forma ad hoc e o conhecimento produzido se perdia entre planilhas e e-mails, impactando prazos, qualidade e reuso de soluções.",
        "t": "Minha missão era criar um sistema de aprendizagem contínua que conectasse discovery, delivery e operação (BAU), institucionalizando práticas de melhoria contínua, acervo de lições aprendidas e reuso de padrões.",
        "a": "Implementei um programa de 'Learning Sprints' trimestrais com três pilares: (1) Retro cross-projetos com métricas padronizadas (lead time, retrabalho, desvio de escopo); (2) Biblioteca de 'Playbooks' versionados no portal do PMO (SharePoint) com templates, checklists e exemplos; (3) Ritos de compartilhamento ('Tech/PM Talks') com gravação, sumário e tagging para busca rápida. Conectei o pipeline do Power BI para medir adoção e impacto.",
        "r": "Adoção de 87% dos projetos em 2 ciclos; redução média de 14% no lead time e de 11% no retrabalho em 6 meses; aumento de 22 p.p. na reutilização de templates; satisfação dos sponsors subiu 0,6 no NPS interno. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que curiosidade organizacional precisa de infraestrutura mínima: cadência, curadoria e métricas. Sem isso, a 'vontade de aprender' vira ruído. Com isso, vira vantagem competitiva e previsibilidade. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "Within SEFAZ-RS' PMO, cross-functional teams executed strategic projects without a formal, continuous learning mechanism. Retrospectives were ad hoc and knowledge was scattered across spreadsheets and emails, harming timelines, quality, and reuse.",
        "t": "My mission was to create a continuous learning system that connected discovery, delivery, and BAU, institutionalizing continuous improvement practices, lessons learned repository, and pattern reuse.",
        "a": "I implemented quarterly 'Learning Sprints' with three pillars: (1) Cross-project retros with standardized metrics (lead time, rework, scope variance); (2) A versioned Playbook Library on the PMO portal (SharePoint) with templates, checklists, and exemplars; (3) Sharing rituals ('Tech/PM Talks') with recording, summaries, and tagging for fast retrieval. I wired Power BI to measure adoption and impact.",
        "r": "87% project adoption within 2 cycles; average 14% lead-time reduction and 11% rework reduction over 6 months; +22 pp in template reuse; sponsor satisfaction +0.6 in internal NPS.",
        "l": "I learned that organizational curiosity requires lightweight infrastructure: cadence, curation, and metrics. Without it, 'learning intent' becomes noise; with it, it becomes a performance edge. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fup": [
        {
          "q": "Que métrica você usou como 'leading indicator' para saber se a aprendizagem estava de fato acontecendo?",
          "q_en": "What metric did you use as a 'leading indicator' to know if learning was actually happening?",
          "a": "Adoção dos Playbooks por projeto (downloads/uso por sprint) e taxa de issues recorrentes: se caía a recorrência, a aprendizagem estava sendo incorporada ao processo. Implementei um dashboard no Power BI que tracked downloads por template, tempo médio entre download e uso, e correlação entre uso de templates e redução de retrabalho. O leading indicator mais forte foi 'tempo para resolução de problemas similares' - quando caiu de 5,2 para 2,1 dias em média, soubemos que o conhecimento estava virando muscle memory.",
          "a_en": "Playbook adoption per project (downloads/usage per sprint) and recurring issues rate: if recurrence dropped, learning was being incorporated into the process. I implemented a Power BI dashboard that tracked downloads per template, average time between download and usage, and correlation between template usage and rework reduction. The strongest leading indicator was 'time to resolution of similar problems' - when it dropped from 5.2 to 2.1 days on average, we knew knowledge was becoming muscle memory."
        },
        {
          "q": "Como você garantiu que os 'Talks' não virassem apenas apresentações sem mudança de processo?",
          "q_en": "How did you ensure the 'Talks' didn't become just presentations without process change?",
          "a": "Cada Talk terminava com um 'commit' explícito de 1 melhoria testável na sprint seguinte. O PM responsável registrava no backlog com owner e critério de aceitação. Criamos um template de 'Action Items' obrigatório: What (ação específica), Who (responsável), When (prazo), How to measure (métrica de sucesso). No Talk seguinte, os primeiros 10 minutos eram sempre review dos commits anteriores. Taxa de cumprimento dos commits ficou em 78% - aqueles não cumpridos geraram post-mortems para entender blockers.",
          "a_en": "Each Talk ended with an explicit 'commit' of 1 testable improvement in the next sprint. The responsible PM registered in the backlog with owner and acceptance criteria. We created a mandatory 'Action Items' template: What (specific action), Who (owner), When (deadline), How to measure (success metric). In the following Talk, the first 10 minutes were always review of previous commits. Commit fulfillment rate was 78% - those not fulfilled generated post-mortems to understand blockers."
        },
        {
          "q": "Qual trade-off você enfrentou entre padronizar e permitir autonomia dos times?",
          "q_en": "What trade-off did you face between standardizing and allowing team autonomy?",
          "a": "Padronizei entradas/saídas mínimas (DoR/DoD, métricas) e deixei autonomia total no 'como'. Evitei sufocar a inovação mantendo o padrão no 'quê' medir. Por exemplo: todos os times tinham que medir lead time, mas cada um podia escolher as ferramentas (Jira, Trello, Azure DevOps). Criamos 'rails' opcionais - templates que times podiam usar se quisessem velocidade, ou ignorar se preferissem inovar. 67% dos times adotaram os rails, 33% criaram variações próprias que depois viraram novos templates.",
          "a_en": "I standardized minimum inputs/outputs (DoR/DoD, metrics) and left total autonomy on the 'how'. I avoided stifling innovation by keeping standards on 'what' to measure. For example: all teams had to measure lead time, but each could choose tools (Jira, Trello, Azure DevOps). We created optional 'rails' - templates teams could use for speed, or ignore if they preferred to innovate. 67% of teams adopted the rails, 33% created their own variations that later became new templates."
        },
        {
          "q": "Como evitou viés de sobrevivência nas lições aprendidas?",
          "q_en": "How did you avoid survivorship bias in lessons learned?",
          "a": "Incluímos 'postmortems' de falhas com blame-free culture. As melhores lições vieram de erros analisados com dados, não de casos de sucesso. Criei uma política explícita: para cada case de sucesso documentado, precisávamos de um case de falha com mesmo nível de detalhe. Implementamos 'Failure Fridays' mensais onde times voluntariamente apresentavam erros e aprendizados. Descobrimos que 73% das melhorias de processo vieram de análise de falhas, não de replicação de sucessos. Também randomizamos reviews - não só 'melhores' projetos, mas amostra estatística.",
          "a_en": "We included 'postmortems' of failures with blame-free culture. The best lessons came from analyzed errors with data, not success cases. I created an explicit policy: for each documented success case, we needed a failure case with the same level of detail. We implemented monthly 'Failure Fridays' where teams voluntarily presented errors and learnings. We discovered that 73% of process improvements came from failure analysis, not success replication. We also randomized reviews - not just 'best' projects, but statistical sample."
        },
        {
          "q": "O que você faria diferente para acelerar a adoção inicial?",
          "q_en": "What would you do differently to accelerate initial adoption?",
          "a": "Eu teria eleito 'champions' por macroprocesso desde o começo e dado micro-incentivos de visibilidade já no 1º ciclo. Em retrospectiva, subestimei a importância do social proof early on. Deveria ter identificado 2-3 times early adopters, dado suporte premium para eles gerarem quick wins visíveis, e usar esses cases como showcase. Também faltou gamificação: badges, leaderboards, reconhecimento público. O programa demorou 4 meses para pegar tração - com champions + incentivos, teria sido 6-8 semanas.",
          "a_en": "I would have elected 'champions' per macro-process from the beginning and given micro-incentives for visibility in the 1st cycle. In retrospect, I underestimated the importance of social proof early on. I should have identified 2-3 early adopter teams, given them premium support to generate visible quick wins, and used these cases as showcase. Also lacked gamification: badges, leaderboards, public recognition. The program took 4 months to gain traction - with champions + incentives, it would have been 6-8 weeks."
        },        {
          "q": "Como conectou BAU e projetos na prática?",
          "q_en": "How did you connect BAU and projects in practice?",
          "a": "Criamos o 'handover canvas' com KPIs-alvo e um '30-60-90' de estabilização; BAU reportava variação e, se >x%, virava melhoria priorizada. O canvas tinha 6 seções: contexto do projeto, métricas baseline, metas operacionais, riscos conhecidos, runbooks críticos, e owner do BAU. Durante os primeiros 90 dias pós-go-live, BAU fazia check-ins semanais reportando desvios. Se qualquer métrica saía >15% da meta, automaticamente virava item de backlog para o próximo sprint de melhorias.",
          "a_en": "We created the 'handover canvas' with target KPIs and a '30-60-90' stabilization plan; BAU reported variance and, if >x%, it became prioritized improvement. The canvas had 6 sections: project context, baseline metrics, operational targets, known risks, critical runbooks, and BAU owner. During the first 90 days post-go-live, BAU did weekly check-ins reporting deviations. If any metric went >15% off target, it automatically became a backlog item for the next improvement sprint."
        },
        {
          "q": "Como mediu o ROI do programa de aprendizagem?",
          "q_en": "How did you measure the ROI of the learning program?",
          "a": "Comparativo A/B entre grupos com alta vs. baixa adoção (quartis). Projetos no quartil superior entregaram +9 p.p. no prazo e -13% custo variado. Criei uma métrica composta: (Redução Lead Time × Custo/Hora) + (Redução Retrabalho × Custo/Sprint) + (Templates Reutilizados × Custo Desenvolvimento). ROI foi 340% em 12 meses. Investimento: R$ 180K (tooling + tempo dedicado); retorno: R$ 612K (horas economizadas × custo médio da equipe). O payback aconteceu no mês 7.",
          "a_en": "A/B comparison between high vs. low adoption groups (quartiles). Projects in the top quartile delivered +9 pp on time and -13% variable cost. I created a composite metric: (Lead Time Reduction × Cost/Hour) + (Rework Reduction × Cost/Sprint) + (Reused Templates × Development Cost). ROI was 340% in 12 months. Investment: R$ 180K (tooling + dedicated time); return: R$ 612K (saved hours × average team cost). Payback happened at month 7."
        },
        {
          "q": "Qual o maior obstáculo cultural e como foi mitigado?",
          "q_en": "What was the biggest cultural obstacle and how was it mitigated?",
          "a": "Ceticismo de 'mais reunião'. Respondi reduzindo reuniões operacionais redundantes e substituindo por uma retro estruturada e curta (45min). Fiz audit das reuniões existentes: 23 reuniões semanais recorrentes, sendo 8 redundantes. Propus eliminar as 8 e criar 1 retro semanal de 45min com agenda clara. A equação foi: -320min de reuniões redundantes + 45min de retro estruturada = 275min economizados por semana. Esse math compelling quebrou a resistência inicial.",
          "a_en": "Skepticism about 'more meetings'. I responded by reducing redundant operational meetings and replacing them with one structured, short retro (45min). I audited existing meetings: 23 weekly recurring meetings, 8 being redundant. I proposed eliminating the 8 and creating 1 weekly 45min retro with clear agenda. The equation was: -320min redundant meetings + 45min structured retro = 275min saved per week. This compelling math broke initial resistance."
        },
        {
          "q": "Como você garantiu perenidade do acervo?",
          "q_en": "How did you ensure the repository's longevity?",
          "a": "Versão única da verdade no SharePoint com governance leve (PRs, revisão trimestral) e dono por capítulo. Criei estrutura federada: cada macroprocesso tinha um 'curator' responsável por manter seu capítulo atualizado. Governance: PRs para mudanças grandes, edit direto para typos, revisão trimestral de adoption metrics por template. Templates não usados há 6 meses iam para 'deprecated' section. Implementei versionamento semântico simples (v1.0, v1.1) e changelog automático.",
          "a_en": "Single source of truth in SharePoint with lightweight governance (PRs, quarterly review) and owner per chapter. I created federated structure: each macro-process had a 'curator' responsible for keeping their chapter updated. Governance: PRs for major changes, direct edit for typos, quarterly review of adoption metrics per template. Templates unused for 6 months went to 'deprecated' section. I implemented simple semantic versioning (v1.0, v1.1) and automatic changelog."
        },
        {
          "q": "Que insight te surpreendeu nesses ciclos?",
          "q_en": "What insight surprised you in these cycles?",
          "a": "O maior ganho veio de pequenos checklists de qualidade (ex.: critérios de aceite de requisitos), não de grandes mudanças de ferramenta. Esperava que frameworks complexos ou ferramentas caras fossem o game changer, mas na prática, uma checklist de 8 itens para 'Definition of Done' teve mais impacto que migrar para Jira ou Azure DevOps. Os pequenos rituais consistentes (daily checks, review criteria) geraram mais valor que big-bang transformations. Aprendi que operational excellence é mais sobre disciplina do que sobre ferramentas.",
          "a_en": "The biggest gain came from small quality checklists (e.g., acceptance criteria for requirements), not major tool changes. I expected complex frameworks or expensive tools to be the game changer, but in practice, an 8-item checklist for 'Definition of Done' had more impact than migrating to Jira or Azure DevOps. Small consistent rituals (daily checks, review criteria) generated more value than big-bang transformations. I learned that operational excellence is more about discipline than tools."
        }
      ]
    },
    {
      "title": "Programa de Upskilling em IA e Automação (HDG Robots)",
      "pt": {
        "s": "No Hub do Gestor (HDG Robots), líderes queriam ganhar proficiência prática em IA/n8n/automação para acelerar entrega e reduzir custos, mas o nível de entrada era heterogêneo e o conteúdo disponível era difuso.",
        "t": "Minha missão era desenhar e lançar um programa de upskilling com foco 'mão na massa', medindo ganho real de produtividade e redução de retrabalho em squads.",
        "a": "Eu estruturei uma trilha em 3 níveis (Foundations, Applied, Advanced), com projetos guiados (capstone), código reusável, repositório de prompts padronizados e clínicas de revisão assíncronas. Adotei avaliação por rubricas (qualidade, segurança, velocidade) e 'demo day' bimestral.",
        "r": "Tempo de prototipação caiu 35%; automações reduziram ~28% de trabalho manual em 90 dias; biblioteca de componentes/fluxos reutilizados cresceu para 120 artefatos; satisfação dos times +0,7. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que curiosidade florece quando há um 'caminho feliz' tangível: exemplos prontos, feedback rápido e metas de uso em cenários reais de negócio. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "At Hub do Gestor (HDG Robots), leaders sought practical proficiency in AI/n8n/automation to speed delivery and cut costs, yet entry levels varied and content was fragmented.",
        "t": "My mission was to design and launch a hands-on upskilling program measuring real productivity gain and rework reduction across squads.",
        "a": "I built a 3-tier track (Foundations, Applied, Advanced) with guided projects (capstones), reusable code, a standardized prompt repository, and asynchronous review clinics. I adopted rubric-based assessments (quality, safety, speed) and a bi-monthly demo day.",
        "r": "Prototyping time dropped 35%; automations removed ~28% manual effort within 90 days; the reusable components/flows library reached 120 artifacts; team satisfaction +0.7.",
        "l": "I learned that curiosity thrives when a tangible 'happy path' exists: ready-made examples, fast feedback, and targets tied to real business scenarios. In retrospect, I could have anticipated stakeholder risks and today I start by engaging them from the beginning."
      },
      "fup": [
        {
          "q": "Como você mediu 'ganho real' e evitou métricas de vaidade?",
          "q_en": "How did you measure 'real gain' and avoid vanity metrics?",
          "a": "Usei tempo de ciclo e horas evitadas por automação validadas pelo gestor; só entrava no score o que teve uso em produção por 30 dias. Criei uma fórmula: Ganho Real = (Horas Economizadas × Frequência de Uso × 30 dias) ÷ Horas de Desenvolvimento. Só automações com score >1.5 eram consideradas 'successful'. Validação dupla: self-report do usuário + approval do gestor. Métricas de vaidade que descartei: número de prompts criados, horas de treinamento, número de certificações. Foquei em: redução de tempo para entrega, qualidade do output, e adoção sustentada.",
          "a_en": "I used cycle time and automation-saved hours validated by managers; only what had production use for 30 days entered the score. I created a formula: Real Gain = (Saved Hours × Usage Frequency × 30 days) ÷ Development Hours. Only automations with score >1.5 were considered 'successful'. Double validation: user self-report + manager approval. Vanity metrics I discarded: number of prompts created, training hours, number of certifications. I focused on: delivery time reduction, output quality, and sustained adoption."
        },
        {
          "q": "Qual foi o maior risco de segurança e como foi tratado?",
          "q_en": "What was the biggest security risk and how was it addressed?",
          "a": "Padronizei tokens e segredos via cofre/vars no n8n, e revisões de privacidade nos prompts para evitar vazamento de dados. O maior risco era pessoas hardcoding API keys e enviando dados sensíveis para LLMs públicos. Implementei: 1) Vault obrigatório para credenciais; 2) Prompt sanitization checklist; 3) Data classification automática (público/interno/confidencial); 4) Review obrigatório para automações que processam dados nível 2+. Violações geravam suspension temporária do acesso. Zero incidentes em 18 meses.",
          "a_en": "I standardized tokens and secrets via vault/vars in n8n, and privacy reviews in prompts to prevent data leakage. The biggest risk was people hardcoding API keys and sending sensitive data to public LLMs. I implemented: 1) Mandatory vault for credentials; 2) Prompt sanitization checklist; 3) Automatic data classification (public/internal/confidential); 4) Mandatory review for automations processing level 2+ data. Violations generated temporary access suspension. Zero incidents in 18 months."
        },
        {
          "q": "Que erro comum nos capstones você observou e corrigiu?",
          "q_en": "What common error in capstones did you observe and correct?",
          "a": "Dependência de um único nó ou serviço. Reforcei fallback e idempotência; introduzi checklists de resiliência. 67% dos capstones iniciais falhavam quando um API estava down ou um prompt não funcionava. Criei regra: toda automação crítica precisa de Plan B. Template obrigatório: 'If X fails, then Y'. Exemplos: se OpenAI API down, use Anthropic; se webhook falha, tente email; se parsing falha, escale para humano. Resilience score virou critério de aprovação: <80% = refactor obrigatório.",
          "a_en": "Single point of failure dependency. I reinforced fallback and idempotency; introduced resilience checklists. 67% of initial capstones failed when an API was down or a prompt didn't work. I created rule: every critical automation needs Plan B. Mandatory template: 'If X fails, then Y'. Examples: if OpenAI API down, use Anthropic; if webhook fails, try email; if parsing fails, escalate to human. Resilience score became approval criteria: <80% = mandatory refactor."
        },
        {
          "q": "Como você personalizou a trilha para níveis diferentes sem fragmentar o programa?",
          "q_en": "How did you customize the track for different levels without fragmenting the program?",
          "a": "Mesma missão de negócio, mas com critérios de aceitação diferenciados por trilha; o Advanced tinha SLOs mais rígidos. Foundations: automação simples (2 nós, 1 trigger); Applied: automação média (5+ nós, error handling); Advanced: automação complexa (10+ nós, monitoring, fallbacks). Todos trabalhavam no mesmo case business (ex: lead scoring), mas com complexity scaling. Isso manteve coerência curricular e permitiu peer learning entre níveis. Advanced ajudavam Foundations, criando mentorship natural.",
          "a_en": "Same business mission, but with differentiated acceptance criteria per track; Advanced had stricter SLOs. Foundations: simple automation (2 nodes, 1 trigger); Applied: medium automation (5+ nodes, error handling); Advanced: complex automation (10+ nodes, monitoring, fallbacks). Everyone worked on the same business case (e.g., lead scoring), but with complexity scaling. This maintained curricular coherence and enabled peer learning between levels. Advanced helped Foundations, creating natural mentorship."
        },
        {
          "q": "Qual a estratégia de engajamento mais eficaz?",
          "q_en": "What was the most effective engagement strategy?",
          "a": "Demo day com placar, badges e showcases no portal; social proof elevou a adesão. Bimestral, 2h, formato show-and-tell. Cada participante tinha 5min para demo + 2min Q&A. Placar público: pontos por complexidade, reuso, impacto business. Badges digitais no Slack: 'First Automation', 'Prompt Master', 'Code Reuser'. Top 3 ganhavam spotlight no newsletter executivo. Waiting list para apresentar cresceu de 3 para 23 pessoas. Engagement subiu 340% post-primeiro demo day.",
          "a_en": "Demo day with scoreboard, badges and showcases on portal; social proof elevated adoption. Bi-monthly, 2h, show-and-tell format. Each participant had 5min for demo + 2min Q&A. Public scoreboard: points for complexity, reuse, business impact. Digital badges on Slack: 'First Automation', 'Prompt Master', 'Code Reuser'. Top 3 got spotlight in executive newsletter. Waiting list to present grew from 3 to 23 people. Engagement rose 340% post-first demo day."
        },
        {
          "q": "Quais foram os top 3 componentes reutilizados?",
          "q_en": "What were the top 3 reused components?",
          "a": "Autenticação OAuth2 genérica, conector WhatsApp Business, e pipeline de avaliação de embeddings. OAuth2: usado em 45 automações diferentes (CRM, email marketing, analytics); WhatsApp: 32 usos (customer service, notifications, surveys); Embeddings pipeline: 28 usos (document search, content matching, similarity scoring). Esses 3 representaram 67% de todo reuso. Viraram 'golden templates' com documentation premium, versioning, e dedicated support. ROI do reuso: cada componente economizou ~40h desenvolvimento por reutilização.",
          "a_en": "Generic OAuth2 authentication, WhatsApp Business connector, and embeddings evaluation pipeline. OAuth2: used in 45 different automations (CRM, email marketing, analytics); WhatsApp: 32 uses (customer service, notifications, surveys); Embeddings pipeline: 28 uses (document search, content matching, similarity scoring). These 3 represented 67% of all reuse. They became 'golden templates' with premium documentation, versioning, and dedicated support. Reuse ROI: each component saved ~40h development per reuse."
        },
        {
          "q": "Como lidou com obsolescência rápida das ferramentas de IA?",
          "q_en": "How did you handle rapid obsolescence of AI tools?",
          "a": "Ciclos trimestrais de atualização do conteúdo e deprecation policy leve para exemplos antigos. Criei 'Tech Radar' com 4 quadrantes: Adopt (stable), Trial (promising), Assess (emerging), Hold (declining). Review trimestral baseado em: adoption rate, community support, performance benchmarks, pricing evolution. Deprecation gradual: Assess  Trial  Adopt ou Hold. Exemplos obsoletos ficavam em 'legacy section' com warning, mas não eram deletados (historical context). Framework agnóstico: ensinava conceitos (prompting, chaining, evaluation) não tools específicas.",
          "a_en": "Quarterly content update cycles and lightweight deprecation policy for old examples. I created 'Tech Radar' with 4 quadrants: Adopt (stable), Trial (promising), Assess (emerging), Hold (declining). Quarterly review based on: adoption rate, community support, performance benchmarks, pricing evolution. Gradual deprecation: Assess  Trial  Adopt or Hold. Obsolete examples stayed in 'legacy section' with warning, but weren't deleted (historical context). Framework agnostic: taught concepts (prompting, chaining, evaluation) not specific tools."
        },
        {
          "q": "Que métrica não funcionou e você abandonou?",
          "q_en": "What metric didn't work and you abandoned?",
          "a": "Número bruto de prompts criados; incentivava volume sem qualidade. Substituí por 'prompts aprovados em revisão técnica'. Initial metric: total prompts created per user per week. Problema: gerava gaming - pessoas criavam prompts básicos para inflar números. Quality despencou, usefulness idem. New metric: prompts that passed technical review (criteria: clear objective, proper formatting, reusability, documentation). Passou de 847 prompts/mês (garbage) para 127 prompts/mês (quality). Business impact 3x maior com volume 6.7x menor.",
          "a_en": "Raw number of prompts created; it incentivized volume without quality. I replaced it with 'prompts approved in technical review'. Initial metric: total prompts created per user per week. Problem: generated gaming - people created basic prompts to inflate numbers. Quality plummeted, usefulness too. New metric: prompts that passed technical review (criteria: clear objective, proper formatting, reusability, documentation). Went from 847 prompts/month (garbage) to 127 prompts/month (quality). 3x higher business impact with 6.7x lower volume."
        },
        {
          "q": "Como provou o impacto para a liderança?",
          "q_en": "How did you prove impact to leadership?",
          "a": "Mostrei savings anualizados e tempo de lançamento antecipado (TTM) em 3 cases âncora. Case 1: automação de lead scoring economizou 15h/semana × 52 semanas × R$ 180/hora = R$ 140K/ano. Case 2: customer onboarding automatizado antecipou launch em 6 semanas = R$ 280K revenue early capture. Case 3: content generation pipeline reduziu agency dependency em 40% = R$ 95K/ano saved. Total quantified: R$ 515K/ano. Investment: R$ 89K (tooling + time). ROI: 478%. Executive summary: 1 slide, 3 numbers, 6 meses payback.",
          "a_en": "I showed annualized savings and accelerated time-to-market (TTM) in 3 anchor cases. Case 1: lead scoring automation saved 15h/week × 52 weeks × R$ 180/hour = R$ 140K/year. Case 2: automated customer onboarding advanced launch by 6 weeks = R$ 280K early revenue capture. Case 3: content generation pipeline reduced agency dependency by 40% = R$ 95K/year saved. Total quantified: R$ 515K/year. Investment: R$ 89K (tooling + time). ROI: 478%. Executive summary: 1 slide, 3 numbers, 6 months payback."
        },
        {
          "q": "Se tivesse que dobrar o impacto em 60 dias, o que faria?",
          "q_en": "If you had to double the impact in 60 days, what would you do?",
          "a": "Criaria squads de aceleração (tiger teams) focados em 3 casos de alto valor e pagaria a dívida técnica de automações mais usadas. Tiger teams: 3 pessoas full-time por 60 dias em use cases com potential >R$ 200K impact. Debt payoff: refactor das top 10 automações mais críticas para performance + reliability. Quick wins: deploy pre-built automations para use cases comuns (email marketing, data sync, reporting). Pareto focus: 80% do próximo valor está em 20% dos use cases. All-hands sprint: pause new development, focus on scale + optimization dos existentes.",
          "a_en": "I would create acceleration squads (tiger teams) focused on 3 high-value cases and pay technical debt of most-used automations. Tiger teams: 3 people full-time for 60 days on use cases with >R$ 200K potential impact. Debt payoff: refactor top 10 most critical automations for performance + reliability. Quick wins: deploy pre-built automations for common use cases (email marketing, data sync, reporting). Pareto focus: 80% of next value is in 20% of use cases. All-hands sprint: pause new development, focus on scale + optimization of existing ones."
        }
      ]
    }
  ]
};

export default learn_and_be_curious_data;

