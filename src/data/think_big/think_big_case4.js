// Case 4 - think_big
const case_4 = {
  id: "game-changing-program",
  title: "Programa Horizonte: Digital Twin que Redirecionou R$2.1B em Investimentos",
  title_pt: "Programa Horizonte: Digital Twin Fiscal que Redirecionou R$2,1B em Investimentos",
  title_en: "Horizonte Program: Fiscal Digital Twin that Redirected BRL 2.1B in Investments",
  company: "SEFAZ-RS",
  period: "04/2023--08/2025",
  isTopCase: false,
  pt: {
    s: `Situação — Em 2023, eu assumi a missão de destravar o planejamento plurianual do Rio Grande do Sul. O estado investiria R$4,5B em infraestrutura, porém cada secretaria priorizava isoladamente. Sem um modelo unificado, acumulávamos risco de desperdiçar R$680M/ano em gargalos logísticos e escolher projetos com ROI marginal.`,
    t: `Tarefa — O pedido inicial do governador era um dashboard de execução. Eu me auto-impus criar o Programa Horizonte: um digital twin fiscal-urbanístico capaz de simular cenários macroeconômicos, equilibrar caixa em tempo real e priorizar investimentos por ROI social. Estabeleci metas pessoais de cortar o ciclo decisório de 60 para 10 dias, reprogramar pelo menos R$1B e elevar o índice de confiança do Tesouro acima de 80 pontos.`,
    a: `Ação — Atuei como owner único em quatro frentes. (1) Arquitetura: modelei 2.300 variáveis (arrecadação, mobilidade, saúde, clima) e implantei grafo no Neo4j com camada de IA rodando 14 cenários por noite. (2) Dados: negociei com 18 secretarias, firmei convênios de compartilhamento e usei tokenização para cumprir LGPD. (3) Conflito: o secretário de Obras resistiu a submeter R$1,2B ao simulador; apresentei relatório do DNIT mostrando que atrasos em sete obras drenavam R$110M/ano e propus gatilho de investimento com ROI mínimo de 15%. (4) Operação: criei governança quinzenal com governador, secretários e Tesouro, adotei rituais STAR em cada ciclo (Situação, Tarefa, Ação, Resultado) e codifiquei playbook com 28 cadências (war room, demo day com prefeitos, scorecards de impacto). Também liderei parceria com a UFRGS para validar o modelo preditivo.`,
    r: `Resultado — Em 16 meses, o Horizonte simulou 1.257 iniciativas e redirecionou R$2,1B para projetos com ROI social acima de 22%. O ciclo decisório caiu de 60 para nove dias, o estado antecipou R$620M em arrecadação via alocação logística (tempo de escoamento agrícola -34%) e cancelou R$210M em obras redundantes. O Índice de Confiança do Tesouro subiu de 63 para 84, o NPS dos prefeitos saltou de 32 para 74 e a maturidade de dados estadual alcançou nível 4 no índice nacional. O programa venceu o Prêmio GovTech Latam 2024 e foi replicado em Santa Catarina com meu suporte como advisor em 2025.`,
    l: `Lição — Pensar grande é transformar um pedido tático em mecanismo sistêmico. Ao combinar visão ousada com métricas duras, enfrentar conflitos com fatos e instaurar cadência disciplinada, eu reprogramei bilhões de reais de investimento público. Hoje só assumo projetos governamentais quando consigo deixar um mecanismo vivo que sobrevive a mandatos e segue redistribuindo recursos com base em simulações em escala.`
  },
  en: {
    s: `Situation — In 2023 I was asked to unlock Rio Grande do Sul's multi-year investment plan. The state would invest BRL 4.5B in infrastructure, yet each department set priorities in isolation. Without a unified model we risked burning BRL 680M per year on logistics bottlenecks and selecting marginal-return projects.`,
    t: `Task — The governor's initial request was a project dashboard. I set a higher bar: build the Horizonte Program, a fiscal-urban digital twin able to simulate macro scenarios, rebalance cash in real time, and rank investments by social ROI. I defined personal targets to cut the decision cycle from 60 to 10 days, reprogram at least BRL 1B, and lift the Treasury trust index above 80 points.`,
    a: `Action — I acted as single-threaded owner across four fronts. (1) Architecture: I modeled 2,300 variables (tax, mobility, health, climate) and deployed a Neo4j graph with an AI layer running 14 nightly scenarios. (2) Data: I negotiated with 18 departments, signed data-sharing agreements, and used tokenization to comply with LGPD. (3) Conflict: the Public Works secretary resisted sending BRL 1.2B through the simulator; I presented DNIT evidence that seven delayed works drained BRL 110M yearly and proposed a 15% minimum ROI trigger. (4) Operations: I created a biweekly governance with the governor, secretaries, and Treasury, enforced STAR storytelling in every cycle, and codified a 28-ritual playbook (war room, mayor demo day, impact scorecards). I also led an R&D partnership with UFRGS to validate the predictive model.`,
    r: `Result — Within 16 months Horizonte simulated 1,257 initiatives and redirected BRL 2.1B toward projects delivering >22% social ROI. Decision cycle dropped from 60 to nine days, the state accelerated BRL 620M in revenue through logistics allocation (agricultural flow time -34%), and canceled BRL 210M in redundant works. The Treasury trust index rose from 63 to 84, mayor NPS jumped from 32 to 74, and state data maturity reached level 4 nationally. The program won the 2024 GovTech Latam Award and was replicated in Santa Catarina with my advisory support in 2025.`,
    l: `Learning — Thinking big means turning a tactical ask into a systemic mechanism. By pairing bold vision with hard metrics, confronting conflicts with facts, and installing disciplined cadence, I reprogrammed billions of public investments. I now accept government engagements only when I can leave a living mechanism that outlasts administrations and keeps reallocating resources through large-scale simulations.`
  },
  fups: [
    {
      q: "Como você convenceu 18 secretarias a compartilhar dados sensíveis?",
      a: "Eu formalizei SLAs cruzados, garanti tokenização irreversível e entreguei painéis exclusivos por secretaria com ganhos mensuráveis em 30 dias, acelerando a adesão.",
      q_en: "How did you convince 18 departments to share sensitive data?",
      a_en: "I set cross SLAs, enforced irreversible tokenization, and delivered department-specific dashboards with 30-day measurable wins, which accelerated adoption."
    },
    {
      q: "Quais métricas definiram o ROI social mínimo?",
      a: "Adotei modelo SROI com cinco dimensões (arrecadação, empregos, meio ambiente, mobilidade, serviço). Somente projetos com score ponderado ≥15% avançavam.",
      q_en: "Which metrics defined the minimum social ROI?",
      a_en: "I used a five-dimension SROI model (revenue, jobs, environment, mobility, service). Projects needed a weighted score ≥15% to advance."
    },
    {
      q: "Como o digital twin impactou a arrecadação efetiva?",
      a: "Mapeei corredores logísticos de alto ROI, priorizei 11 obras que reduziram tempo de escoamento em 34% e recalibrei incentivos fiscais, antecipando R$620M em ICMS em dois exercícios.",
      q_en: "How did the digital twin impact actual revenue?",
      a_en: "I mapped high-ROI logistics corridors, prioritized 11 works cutting flow time 34%, and recalibrated tax incentives, accelerating BRL 620M in ICMS over two fiscal years."
    },
    {
      q: "Qual foi o conflito político mais difícil?",
      a: "O secretário de Obras resistiu a submeter R$1,2B ao simulador. Usei dados do DNIT mostrando perdas de R$110M/ano e propus cláusula de ROI mínimo; o governador apoiou e o secretário recuou.",
      q_en: "What was the toughest political conflict?",
      a_en: "The Public Works secretary resisted sending BRL 1.2B to the simulator. I used DNIT data showing BRL 110M yearly losses and proposed a minimum ROI clause; the governor backed it and the secretary conceded."
    },
    {
      q: "Como garantiu que o programa sobreviveria a mudanças de governo?",
      a: "Transformei o Horizonte em decreto com funding plurianual, criei PMO transversal e capacitei 62 analistas municipais; a governança ficou atrelada a metas da Lei de Acesso à Informação.",
      q_en: "How did you ensure the program would survive administration changes?",
      a_en: "I turned Horizonte into a decree with multi-year funding, built a transversal PMO, trained 62 municipal analysts, and tied governance to Freedom of Information targets."
    },
    {
      q: "Que ferramentas sustentam o simulador?",
      a: "Usei Neo4j para o grafo, Spark para processamento massivo e modelos Prophet/XGBoost em Python, rodando em cluster híbrido com SLA de 99,95%.",
      q_en: "Which tools power the simulator?",
      a_en: "Neo4j handles the graph, Spark the heavy processing, and Prophet/XGBoost models run in Python on a hybrid cluster with 99.95% SLA."
    },
    {
      q: "Como mediu confiança do Tesouro?",
      a: "Criei índice de confiança com 18 perguntas sobre previsibilidade de caixa, aderência a cronogramas e transparência. O score saltou de 63 para 84 após seis ciclos.",
      q_en: "How did you measure Treasury trust?",
      a_en: "I designed an 18-question trust index covering cash predictability, schedule adherence, and transparency. Score rose from 63 to 84 after six cycles."
    },
    {
      q: "Que mecanismos evitaram captura política das prioridades?",
      a: "Publiquei ranking mensal, implementei travas automáticas e qualquer projeto com ROI <12% entrava em revisão obrigatória com o Tribunal de Contas.",
      q_en: "Which mechanisms prevented political capture?",
      a_en: "I published a monthly ranking, added automatic locks, and any project with ROI <12% entered mandatory review with the Audit Court."
    },
    {
      q: "Como engajou a sociedade civil?",
      a: "Realizei audiências públicas híbridas, abri API e incorporei 37 análises externas à matriz de risco; isso elevou a legitimidade do modelo.",
      q_en: "How did you engage civil society?",
      a_en: "I ran hybrid public hearings, opened an API, and integrated 37 external analyses into the risk matrix, increasing the model's legitimacy."
    },
    {
      q: "Qual próximo passo você deixaria preparado?",
      a: "Conectaria o Horizonte a dados privados de ESG para ranquear emissões evitadas e captaria até R$450M adicionais em green bonds.",
      q_en: "What next step would you prepare?",
      a_en: "I'd link Horizonte to private ESG data to rank avoided emissions and raise up to BRL 450M in green bonds."
    }
  ]
};

export default case_4;
