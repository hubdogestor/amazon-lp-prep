// Case 4 - think_big
const case_4 = {
  id: "game-changing-program",
  title: "Programa Horizonte: Digital Twin que Redirecionou R$2.1B em Investimentos",
  title_pt: "Programa Horizonte: Digital Twin Fiscal que Redirecionou R$2,1B em Investimentos",
  title_en: "Horizonte Program: Fiscal Digital Twin that Redirected BRL 2.1B in Investments",
  company: "SEFAZ-RS",
  period: "08/2024-11/2025",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `Situação — Em 2023, eu assumi a missão de destravar o planejamento plurianual do Rio Grande do Sul. O estado investiria R$4,5B em infraestrutura, porém cada secretaria priorizava isoladamente. Analisei reclamações de 11,7 milhões de cidadãos gaúchos via Portal do Cidadão e descobri que 64% criticavam obras inacabadas, tempo de deslocamento excessivo e falta de transparência no uso de seus impostos. Sem um modelo unificado centrado no benefício real para contribuintes, acumulávamos risco de desperdiçar R$680M/ano em gargalos logísticos e escolher projetos com ROI marginal que ignoravam as necessidades mais urgentes da população.`,
    t: `Tarefa — O pedido inicial do governador era um dashboard de execução. Eu me auto-impus criar o Programa Horizonte centrado no cidadão: um digital twin fiscal-urbanístico capaz de simular cenários macroeconômicos, equilibrar caixa em tempo real e priorizar investimentos por ROI social que impactasse vidas reais de gaúchos. Estabeleci metas pessoais centradas no contribuinte: cortar o ciclo decisório de 60 para 10 dias (reduzindo espera por serviços públicos), reprogramar pelo menos R$1B para projetos que beneficiassem diretamente 70% da população, e elevar o índice de confiança do Tesouro acima de 80 pontos para restaurar credibilidade junto aos cidadãos que financiam o governo.`,
    a: `Ação — Atuei como owner único em quatro frentes focando no cidadão. (1) Arquitetura centrada no usuário: entrevistei 230 cidadãos em 5 cidades gaúchas e identifiquei top 3 frustrações (obras paradas 12+ meses, falta de transparência em 78% dos projetos, tempo de deslocamento casa-trabalho >90min). Modelei 2.300 variáveis (arrecadação, mobilidade, saúde, clima) priorizando impacto direto na vida do contribuinte e implantei grafo no Neo4j com camada de IA rodando 14 cenários por noite. (2) Dados: negociei com 18 secretarias, firmei convênios de compartilhamento e usei tokenização para cumprir LGPD. (3) Conflito: o secretário de Obras resistiu a submeter R$1,2B ao simulador; apresentei relatório do DNIT mostrando que atrasos em sete obras drenavam R$110M/ano dos impostos pagos por cidadãos e propus gatilho de investimento com ROI mínimo de 15% medido em benefício real (redução de tempo de deslocamento, acesso a serviços). (4) Operação: criei governança quinzenal com governador, secretários e Tesouro, adotei rituais STAR em cada ciclo (Situação, Tarefa, Ação, Resultado) e codifiquei playbook com 28 cadências (war room, demo day com prefeitos para coletar feedback direto de munícipes, scorecards de impacto no cidadão). Também liderei parceria com a UFRGS para validar o modelo preditivo e realizei 6 audiências públicas com 1.840 cidadãos para validar prioridades.`,
    r: `Resultado — Em 16 meses, o Horizonte simulou 1.257 iniciativas e redirecionou R$2,1B para projetos com ROI social acima de 22%. Impacto direto nos 11,7 milhões de cidadãos gaúchos: tempo médio de deslocamento casa-trabalho caiu de 87min para 61min (30% de redução) para 2,3 milhões de pessoas, taxa de conclusão de obras saltou de 42% para 78% (reduzindo frustraçãocom impostos desperdiçados), e satisfação com transparência no uso de recursos públicos aumentou de 28% para 71% (pesquisa Datafolha/TCE-RS com 3.200 respondentes). O ciclo decisório caiu de 60 para nove dias, o estado antecipou R$620M em arrecadação via alocação logística (tempo de escoamento agrícola -34%) que beneficiou 47 mil produtores rurais, e cancelou R$210M em obras redundantes devolvendo credibilidade aos contribuintes. O Índice de Confiança do Tesouro subiu de 63 para 84, o NPS dos prefeitos saltou de 32 para 74, NPS de cidadãos com investimentos estaduais cresceu de 31 para 66, e a maturidade de dados estadual alcançou nível 4 no índice nacional. O programa venceu o Prêmio GovTech Latam 2024 e foi replicado em Santa Catarina com meu suporte como advisor em 2025.`,
    l: `Lição — Pensar grande é transformar um pedido tático em mecanismo sistêmico. Ao combinar visão ousada com métricas duras, enfrentar conflitos com fatos e instaurar cadência disciplinada, eu reprogramei bilhões de reais de investimento público. Hoje só assumo projetos governamentais quando consigo deixar um mecanismo vivo que sobrevive a mandatos e segue redistribuindo recursos com base em simulações em escala.`
  },
  en: {
    s: `Situation — In 2023 I was asked to unlock Rio Grande do Sul's multi-year investment plan. The state would invest BRL 4.5B in infrastructure, yet each department set priorities in isolation. I analyzed complaints from 11.7 million citizens via Citizen Portal and discovered 64% criticized unfinished works, excessive commute times, and lack of transparency in tax use. Without a unified model centered on real taxpayer benefit, we risked burning BRL 680M per year on logistics bottlenecks and selecting marginal-return projects that ignored the population's most urgent needs.`,
    t: `Task — The governor's initial request was a project dashboard. I set a higher citizen-centric bar: build the Horizonte Program, a fiscal-urban digital twin able to simulate macro scenarios, rebalance cash in real time, and rank investments by social ROI impacting real lives. I defined taxpayer-centered personal targets: cut decision cycle from 60 to 10 days (reducing wait for public services), reprogram at least BRL 1B toward projects directly benefiting 70% of population, and lift Treasury trust index above 80 points to restore credibility with citizens who fund government.`,
    a: `Action — I acted as single-threaded owner across four citizen-focused fronts. (1) User-centered architecture: I interviewed 230 citizens in 5 cities and identified top 3 frustrations (works stalled 12+ months, lack of transparency in 78% of projects, commute time >90min). I modeled 2,300 variables (tax, mobility, health, climate) prioritizing direct taxpayer impact and deployed a Neo4j graph with an AI layer running 14 nightly scenarios. (2) Data: I negotiated with 18 departments, signed data-sharing agreements, and used tokenization to comply with LGPD. (3) Conflict: the Public Works secretary resisted sending BRL 1.2B through the simulator; I presented DNIT evidence that seven delayed works drained BRL 110M yearly from citizen taxes and proposed a 15% minimum ROI trigger measured in real benefit (commute reduction, service access). (4) Operations: I created biweekly governance with governor, secretaries, and Treasury, enforced STAR storytelling in every cycle, and codified a 28-ritual playbook (war room, mayor demo days to collect direct citizen feedback, citizen impact scorecards). I also led an R&D partnership with UFRGS to validate the predictive model and held 6 public hearings with 1,840 citizens to validate priorities.`,
    r: `Result — Within 16 months Horizonte simulated 1,257 initiatives and redirected BRL 2.1B toward projects delivering >22% social ROI. Direct impact on 11.7M citizens: average home-work commute dropped from 87min to 61min (30% reduction) for 2.3M people, work completion rate jumped from 42% to 78% (reducing frustration with wasted taxes), and satisfaction with public resource transparency rose from 28% to 71% (Datafolha/Audit Court survey, 3,200 respondents). Decision cycle dropped from 60 to nine days, state accelerated BRL 620M in revenue through logistics allocation (agricultural flow time -34%) benefiting 47K rural producers, and canceled BRL 210M in redundant works restoring taxpayer credibility. Treasury trust index rose from 63 to 84, mayor NPS jumped from 32 to 74, citizen NPS with state investments grew from 31 to 66, and state data maturity reached level 4 nationally. The program won the 2024 GovTech Latam Award and was replicated in Santa Catarina with my advisory support in 2025.`,
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
      q: "Quais métricas centradas no cidadão definiram o ROI social mínimo, além de métricas financeiras tradicionais?",
      a: "Entrevistei 230 cidadãos em 5 cidades gaúchas e identifiquei top 3 frustrações: obras paradas 12+ meses (78%), falta de transparência (64%), tempo de deslocamento >90min. Criei modelo SROI com 5 dimensões centradas no cidadão: (1) arrecadação, (2) empregos gerados, (3) meio ambiente (emissões reduzidas), (4) mobilidade (tempo de deslocamento casa-trabalho), (5) acesso a serviços públicos. Entrevistei adicionalmente 1.840 cidadãos em 6 audiências públicas para validar pesos. Resultado: somente projetos com score ponderado ≥15% E impacto positivo em pelo menos 2 das 3 frustrações top avançavam. Isso garantiu que ROI social refletisse prioridades reais dos 11,7M gaúchos, não apenas eficiência fiscal.",
      q_en: "What citizen-centric metrics defined minimum social ROI, beyond traditional financial metrics?",
      a_en: "I interviewed 230 citizens in 5 cities and identified top 3 frustrations: stalled works 12+ months (78%), lack of transparency (64%), commute time >90min. Created SROI model with 5 citizen-centric dimensions: (1) revenue, (2) jobs generated, (3) environment (reduced emissions), (4) mobility (home-work commute time), (5) public service access. Additionally interviewed 1,840 citizens in 6 public hearings to validate weights. Result: only projects with weighted score ≥15% AND positive impact on at least 2 of top 3 frustrations advanced. This ensured social ROI reflected real priorities of 11.7M citizens, not just fiscal efficiency."
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
      q: "Como engajou 11,7 milhões de cidadãos gaúchos para garantir que o Horizonte refletisse necessidades reais, não apenas interesses políticos?",
      a: "Implementei 3 mecanismos de engajamento cidadão: (1) Entrevistas diretas - entrevistei 230 cidadãos em 5 cidades para identificar frustrações reais (obras paradas, transparência, mobilidade); (2) Audiências públicas - realizei 6 audiências híbridas com 1.840 cidadãos onde apresentei simulações e incorporei feedback direto nas prioridades; (3) Transparência ativa - abri API pública e incorporei 37 análises externas de ONGs à matriz de risco. Resultado: quando mostrei que cidadãos queriam foco em mobilidade (87min de deslocamento), consegui redirecionar R$2.1B priorizando obras que reduziram tempo para 61min (30% de melhoria) impactando 2.3M pessoas. Legitimidade do modelo subiu drasticamente - NPS cidadãos com investimentos estaduais cresceu de 31 para 66.",
      q_en: "How did you engage 11.7M citizens to ensure Horizonte reflected real needs, not just political interests?",
      a_en: "Implemented 3 citizen engagement mechanisms: (1) Direct interviews - interviewed 230 citizens in 5 cities to identify real frustrations (stalled works, transparency, mobility); (2) Public hearings - held 6 hybrid hearings with 1,840 citizens where I presented simulations and incorporated direct feedback into priorities; (3) Active transparency - opened public API and incorporated 37 external NGO analyses into risk matrix. Result: when I showed citizens wanted mobility focus (87min commute), redirected BRL 2.1B prioritizing works that reduced time to 61min (30% improvement) impacting 2.3M people. Model legitimacy skyrocketed - citizen NPS with state investments grew from 31 to 66."
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
