// Case 4 - think_big
const case_4 = {
  id: "game-changing-program",
  title: "Concebi um Programa que Mudou o Jogo (Modelo Integrado CAGE)",
  title_pt: "Arquitetura do Programa Horizonte: Digital Twin Fiscal que Redirecionou R$2.1B em Investimentos",
  title_en: "Horizonte Program Architecture: Fiscal Digital Twin that Redirected BRL 2.1B in Investments",
  company: "SEFAZ-RS",
  period: "04/2023--08/2025",
  isTopCase: false,
  pt: {
    s: `Situação — Em 2023, eu assumi a tarefa de destravar o planejamento plurianual do Rio Grande do Sul. O estado investiria R$4,5B em infraestrutura, mas cada secretaria planejava isoladamente, sem modelo unificado para medir impacto em arrecadação ou serviços. O governador queria "um painel com burndown de obras"; eu diagnostiquei algo maior: sem um gêmeo digital fiscal, continuaríamos aprovando projetos que traziam retorno marginal e mantendo gargalos logísticos que custavam R$680M/ano.`,
    t: `Tarefa — Oficialmente, eu deveria entregar um dashboard para consolidar projetos. Eu me autoimpus a missão de conceber o Programa Horizonte: um digital twin fiscal-urbanístico capaz de simular cenários macroeconômicos, priorizar investimentos por ROI social e ajustar alocação de caixa em tempo real. Defini metas pessoais: reduzir o ciclo de decisão de 60 para 10 dias, capturar pelo menos R$1B em valor reprogramado e elevar o índice de confiança do Tesouro acima de 80 pontos.`,
    a: `Ação — Como owner único, conduzi 4 frentes simultâneas. (1) Arquitetura: modelei 2.300 variáveis (arrecadação, mobilidade, saúde, clima) e implantei grafo no Neo4j com camada de IA que rodava 14 cenários por noite. (2) Dados: negociei com 18 secretarias, assinei convênios para compartilhar bases sensíveis e criei mecanismo de tokenização para cumprir LGPD. (3) Conflito: o secretário de Obras resistiu a submeter R$1,2B a um simulador; eu utilizei dados do DNIT mostrando que atrasos de 7 obras drenavam R$110M/ano e propus gatilho de investimento condicionado ao ROI mínimo de 15%. (4) Operação: instituí governança quinzenal com o governador, secretários e Tesouro; todo ciclo começava com a frase "Situação, Tarefa, Ação" para garantir narrativa STAR clara. Codifiquei playbook com 28 rituais (war room, demo day com prefeitos, scorecards) e liderei P&D com a UFRGS para validar a modelagem.`,
    r: `Resultado — Em 16 meses, o Horizonte simulou 1.257 iniciativas e redirecionou R$2,1B para projetos com ROI social >22%. O ciclo decisório caiu de 60 para 9 dias; o estado antecipou R$620M em arrecadação via investimentos logísticos (tempo médio de escoamento agrícola -34%) e cortou R$210M em obras redundantes. O Tesouro elevou seu Índice de Confiança Fiscal de 63 para 84 e o NPS dos prefeitos subiu de 32 para 74. A maturidade de dados do estado saltou para nível 4 no índice nacional e o programa recebeu o Prêmio GovTech Latam 2024. O modelo foi replicado em Santa Catarina em 2025 com meu apoio como advisor.`,
    l: `Lição — Pensar grande é transformar um pedido tático em mecanismo sistêmico. Aprendi que quando eu ancore visão arrojada em métricas duras, enfrento conflitos com fatos e construo cadência de decisão disciplinada, consigo redesenhar como um governo investe bilhões. Hoje eu só entro em projetos públicos se for para deixar um mecanismo em produção que sobreviva a mandatos e continue redirecionando recursos com base em simulações em escala.`
  },
  en: {
    s: `Situation — In 2023 I was tasked with unlocking Rio Grande do Sul's multi-year investment plan. The state would pour BRL 4.5B into infrastructure, yet each department planned in silos with no unified model to gauge revenue or service impact. The governor initially wanted “a burndown chart for projects”; I saw a bigger issue: without a fiscal digital twin we would keep approving marginal-return projects while logistics bottlenecks burned BRL 680M per year.`,
    t: `Task — Officially I had to deliver a project dashboard. I set a higher mission: design the Horizonte Program, a fiscal-urban digital twin able to simulate macro scenarios, prioritize investments by social ROI, and rebalance cash in real time. I defined personal targets: cut decision cycle from 60 to 10 days, reprogram at least BRL 1B in value, and push Treasury trust index above 80 points.`,
    a: `Action — As single-threaded owner I ran four fronts in parallel. (1) Architecture: I modeled 2,300 variables (tax, mobility, health, climate) and deployed a Neo4j graph with an AI layer running 14 scenarios nightly. (2) Data: I negotiated with 18 departments, signed agreements to share sensitive datasets, and created a tokenization mechanism to comply with LGPD. (3) Conflict: the Public Works secretary resisted submitting BRL 1.2B to a simulator; I used DNIT evidence showing seven delayed projects drained BRL 110M yearly and proposed an investment trigger tied to 15% minimum ROI. (4) Operations: I installed a biweekly governance with the governor, secretaries, and Treasury; every cycle opened with "Situation, Task, Action" to ensure STAR clarity. I codified a 28-ritual playbook (war room, mayor demo day, scorecards) and led R&D with UFRGS to validate the model.`,
    r: `Result — Within 16 months Horizonte simulated 1,257 initiatives and redirected BRL 2.1B toward projects delivering >22% social ROI. Decision cycle shrank from 60 to nine days; the state accelerated BRL 620M in revenue via logistics investments (agricultural flow time -34%) and canceled BRL 210M in redundant works. Treasury's Trust Index climbed from 63 to 84 and mayor NPS jumped from 32 to 74. State data maturity reached level 4 on the national index and the program received the 2024 GovTech Latam Award. Santa Catarina replicated the model in 2025 with me as advisor.`,
    l: `Learning — Thinking big means turning a tactical request into a systemic mechanism. I learned that when I anchor a bold vision in hard metrics, face conflicts with facts, and build disciplined decision cadence, I can reshape how a government allocates billions. Now I only enter public projects when the outcome is a production mechanism that outlives political cycles and keeps redirecting resources based on large-scale simulations.`
  },
  fups: [
    {
      q: "Como você convenceu 18 secretarias a compartilhar dados sensíveis?",
      a: "Eu criei acordo de nível de serviço cruzado, garanti tokenização irreversível e ofereci dashboards exclusivos com insights por secretaria. O compromisso de retorno concreto em 30 dias acelerou a adesão.",
      q_en: "How did you convince 18 departments to share sensitive data?",
      a_en: "I set cross SLAs, enforced irreversible tokenization, and delivered exclusive dashboards with department-specific insights. The promise of tangible returns in 30 days unlocked adoption."
    },
    {
      q: "Quais métricas definiram o ROI social mínimo dos projetos?",
      a: "Adotei metodologia SROI com cinco dimensões: arrecadação incremental, empregos, impacto ambiental, mobilidade e qualidade de serviço. Projetos precisavam atingir score ≥15% ponderado para avançar.",
      q_en: "Which metrics defined the minimum social ROI for projects?",
      a_en: "I used a five-dimension SROI model covering tax uplift, jobs, environmental impact, mobility, and service quality. Projects needed a weighted score ≥15% to move forward."
    },
    {
      q: "Como o digital twin impactou a arrecadação efetiva?",
      a: "Identifiquei corredores logísticos com ROI alto, priorizei 11 obras que reduziram tempo de escoamento em 34% e recalibrei incentivos fiscais. Isso antecipou R$620M em ICMS em dois exercícios.",
      q_en: "How did the digital twin impact actual revenue?",
      a_en: "It highlighted high-ROI logistic corridors; I prioritized 11 works, cut flow time 34%, and recalibrated tax incentives, accelerating BRL 620M in ICMS over two fiscal years."
    },
    {
      q: "Qual foi o maior conflito político que você enfrentou?",
      a: "O secretário de Obras não queria submeter R$1,2B ao simulador. Eu mostrei perdas anuais de R$110M e propus cláusula de gatilho com ROI mínimo. O dado derrubou a objeção em reunião com o governador.",
      q_en: "What was the toughest political conflict you faced?",
      a_en: "The Public Works secretary refused to route BRL 1.2B through the simulator. I showed R$110M yearly losses and proposed a trigger clause with minimum ROI. The data removed his objection in the governor's meeting."
    },
    {
      q: "Como você garantiu que o modelo sobreviveria a mudanças de governo?",
      a: "Transformei o Horizonte em decreto com funding plurianual, criei PMO transversal e treinei 62 analistas municipais. A governança ficou amarrada a metas de transparência da Lei de Acesso à Informação.",
      q_en: "How did you ensure the model would survive administration changes?",
      a_en: "I converted Horizonte into a decree with multi-year funding, built a transversal PMO, and trained 62 municipal analysts. Governance tied to transparency goals under the Freedom of Information Act."
    },
    {
      q: "Que ferramentas técnicas sustentam o simulador?",
      a: "Usei Neo4j para o grafo, Spark para processamento massivo e modelos de machine learning em Python (Prophet e XGBoost). A arquitetura roda em cluster híbrido com SLA de 99,95%.",
      q_en: "Which technical tools power the simulator?",
      a_en: "Neo4j handles the graph, Spark the heavy processing, and Python models (Prophet, XGBoost) run predictions. The hybrid cluster operates with 99.95% SLA."
    },
    {
      q: "Como você mediu confiança do Tesouro?",
      a: "Implementei índice de confiança com 18 perguntas sobre previsibilidade de caixa, aderência a cronogramas e transparência. O score subiu de 63 para 84 após seis ciclos do Horizonte.",
      q_en: "How did you measure Treasury trust?",
      a_en: "I created a trust index with 18 questions on cash predictability, schedule adherence, and transparency. The score rose from 63 to 84 after six Horizonte cycles."
    },
    {
      q: "Quais mecanismos evitaram captura política das prioridades?",
      a: "Instituí ranking público mensal dos projetos e travas automáticas: se o ROI social caísse abaixo de 12%, o projeto entrava em revisão obrigatória com participação do Tribunal de Contas.",
      q_en: "Which mechanisms prevented political capture of priorities?",
      a_en: "I published a monthly public ranking and added automatic locks: if social ROI fell below 12%, the project entered mandatory review with the Audit Court."
    },
    {
      q: "Como você envolveu a sociedade civil na validação do modelo?",
      a: "Realizei audiências públicas híbridas e liberamos API aberta. Recebemos 184 contribuições e 37 análises externas foram incorporadas à matriz de risco.",
      q_en: "How did you involve civil society in validating the model?",
      a_en: "We ran hybrid public hearings and opened an API. We received 184 contributions and integrated 37 external analyses into the risk matrix."
    },
    {
      q: "Se tivesse mais tempo, o que escalaria em seguida?",
      a: "Eu conectaria o Horizonte a dados de ESG privados para ranquear projetos por emissão evitada. Isso permitiria captar green bonds adicionais estimados em R$450M.",
      q_en: "If you had more time, what would you scale next?",
      a_en: "I'd plug Horizonte into private ESG datasets to rank projects by avoided emissions, enabling an extra BRL 450M in green bonds." 
    }
  ]
};

export default case_4;
