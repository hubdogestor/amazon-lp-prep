// Case 2 - are_right_a_lot
const case_2 = {
  id: "huawei-4g-rollout-analysis",
  title: "Modelei riscos 5G em tempo real e mudei a arquitetura no meio do rollout sem atrasar a FIFA Fan Fest",
  title_pt: "Modelei riscos 5G em tempo real e mudei a arquitetura no meio do rollout sem atrasar a FIFA Fan Fest",
  title_en: "I modeled 5G risks in real time and pivoted the architecture mid-rollout without delaying the FIFA Fan Fest",
  company: "Huawei LATAM",
  period: "08/2014-03/2015",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "Situacao: \"23% de perda no throughput. Se isso acontecer na Fan Fest com 140 mil torcedores, perdemos US$ 9M em multas de patrocinio.\" Eu tinha 42 sites em quatro paises no rollout 5G da Huawei para a Copa Feminina 2023. Dois meses antes do evento, os testes de campo mostraram que as antenas passivas planejadas nao sustentavam o 1,3 Gbps exigido pela FIFA em estruturas temporarias. O diretor de engenharia queria seguir o plano original, mas os dados duravam 48 horas para chegar ao comite e ninguem tinha clareza sobre a gravidade.",
    t: "Task: O desafio critico que enfrentei foi descobrir rapidamente a causa raiz, provar com dados e ajustar a arquitetura sem quebrar o cronograma nem a confianca de engenharia e cliente. Minhas metas: (1) montar em cinco dias um gemeo digital com dados de RF, meteorologia e densidade de publico, (2) apresentar ao VP regional uma recomendacao baseada em evidencia, (3) executar o plano aprovado mantendo SLA de entregas e economia prometida aos clientes.",
    a: "Action: Minha abordagem foi transformar intuicao tecnica em simulacao replicavel e prova financeira. Primeiro capturei logs de drive-test, inseri modelos de propagacao e usei simulacao tipo Monte Carlo para 10 mil cenarios. Descobri que o vento lateral nas estruturas abertas reduzia ganho de antena em 4,7 dBi. Levei os graficos com o mecanismo \"Risk Twin\" que criei para simular a rede ao VP afirmando: \"o plano atual falha em 67% dos cenarios\". Em seguida recomendei migrar 18 sites criticos para antenas ativas com MIMO 64x64 e redimensionar a malha de fibra. Houve resistencia financeira (capex adicional de US$ 3,2M). Refinei a analise com payback: se nao mudasse, os contratos de patrocinio teriam multa de US$ 9M. O VP aprovou o cambio com condicao de preservar o cronograma. Depois montei um squad de arquitetura, compras e instalacao; reprogramei logistica em 48 horas, negociei com dois fornecedores no Mexico para acelerar entrega de antenas em 12 dias e fiz acordos com prefeituras para estender janelas noturnas. Implementei o mecanismo \"Control Tower\" com painel em tempo real integrando sensores de inclinacao e monitorando P95 de throughput a cada cinco minutos.",
    r: "Result: O impacto mensuravel dessa decisao baseada em dados foi completo. Instalamos as antenas ativas em 14 dias, mantivemos o cronograma e entregamos 1,42 Gbps medio durante a fase de grupos. O NPS dos patrocinadores subiu para 86 pontos, zero queda de SLA, e a FIFA enviou carta reconhecendo \"qualidade tecnica acima do contrato\". Por fim o custo extra foi compensado com renegociacao de contratos e economia de US$ 1,1M em multas evitadas.",
    l: "Learning: A licao principal desse caso transformou minha abordagem para decisoes de arquitetura sob pressao. Aprendi que are right a lot exige transformar intuicao em simulacao replicavel. Quando eu provo com modelos e impacto financeiro, consigo pivotar uma arquitetura complexa sem perder credibilidade com engenharia nem com o cliente. Transformei isso em whitepaper sobre antenas ativas em estruturas temporarias, apresentei no comite global, e estamos aplicando o mesmo modelo em Los Angeles 2026 e eventos da CONMEBOL."
  },
  en: {
    s: "Situation: \"23% throughput loss. If this happens at the Fan Fest with 140,000 fans, we lose US$ 9M in sponsorship penalties.\" I owned 42 sites across four countries in Huawei's 5G rollout for the 2023 Women's World Cup. Two months before the event, field tests showed the planned passive antennas couldn't sustain FIFA's required 1.3 Gbps on temporary structures. The engineering director wanted to stick with the original plan, but data took 48 hours to reach the committee and no one understood the magnitude.",
    t: "Task: The critical challenge I faced was uncovering the root cause fast, proving it with data, and reshaping the architecture without breaking the timeline or losing engineering and client trust. My goals were: (1) build a digital twin in five days with RF, weather, and crowd density data, (2) present an evidence-based recommendation to the regional VP, (3) execute the approved plan while keeping the delivery SLA and savings promised to customers.",
    a: "Action: My approach was to turn technical intuition into repeatable simulation and financial proof. First I captured drive-test logs, fed propagation models, and ran Monte Carlo simulations on 10,000 scenarios. I found that lateral wind on open structures reduced antenna gain by 4.7 dBi. I showed the charts alongside the \"Risk Twin\" mechanism I created to simulate the network to the VP stating, \"the current plan fails in 67% of scenarios.\" Next I recommended migrating 18 critical sites to 64x64 MIMO active antennas and resizing the fiber mesh. Finance resisted the extra US$ 3.2M capex. I refined the analysis with payback: without the change, sponsorship contracts would incur US$ 9M in penalties. The VP approved the shift provided the schedule was preserved. After that I assembled an architecture, procurement, and installation squad; re-planned logistics in 48 hours, negotiated with two Mexican suppliers to deliver antennas in twelve days, and secured night-time windows with city halls. Finally I deployed the \"Control Tower\" mechanism with a real-time panel combining tilt sensors and measuring P95 throughput every five minutes.",
    r: "Result: The measurable impact of this data-backed decision was complete. We installed the active antennas in fourteen days, stayed on schedule, and delivered 1.42 Gbps average during the group stage. Sponsor NPS climbed to 86, SLAs stayed intact, and FIFA sent a letter praising \"technical quality beyond contract\". Finally the extra cost was offset through contract renegotiations and US$ 1.1M in avoided penalties.",
    l: "Learning: The key lesson from this case transformed my approach to architecture decisions under pressure. I learned that being right a lot means turning intuition into repeatable simulation. When I back my position with models and financial impact, I can pivot a complex architecture without losing credibility with engineering or the client. I turned this into a whitepaper on active antennas in temporary structures, presented it to the global committee, and we are applying the same model to Los Angeles 2026 and CONMEBOL events."
  },
  fups: [
    {
      "q": "Qual foi o maior erro técnico que você cometeu no planejamento inicial e como impactou o projeto?",
      "a": "Subestimei o impacto do vento lateral nas estruturas temporárias, acreditando que as antenas passivas seriam suficientes baseado em testes indoor. Esse erro quase causou perda de 23% no throughput durante a Fan Fest, potencialmente gerando US$ 9 milhões em multas de patrocínio e comprometendo a credibilidade da Huawei perante a FIFA e operadoras.",
      "q_en": "What was the biggest technical mistake you made in the initial planning and how did it impact the project?",
      "a_en": "I underestimated the impact of lateral wind on temporary structures, believing passive antennas would be sufficient based on indoor tests. This mistake almost caused 23% throughput loss during the Fan Fest, potentially generating US$ 9 million in sponsorship penalties and compromising Huawei's credibility with FIFA and carriers."
    },
    {
      "q": "O que você faria diferente hoje se enfrentasse um desafio similar de arquitetura em rollout?",
      "a": "Hoje começaria com testes de campo em condições reais desde o primeiro dia, implementaria sensores IoT para monitoramento contínuo de variáveis ambientais, e criaria um comitê técnico independente para validar decisões críticas. Também estabeleceria 'kill switches' automáticos baseados em thresholds de performance para evitar decisões tardias.",
      "q_en": "What would you do differently today if you faced a similar architecture challenge in a rollout?",
      "a_en": "Today I would start with real-world field tests from day one, implement IoT sensors for continuous environmental monitoring, and create an independent technical committee to validate critical decisions. I would also establish automatic 'kill switches' based on performance thresholds to avoid late decisions."
    },
    {
      "q": "Qual foi o maior obstáculo que você enfrentou durante a mudança de arquitetura?",
      "a": "A resistência financeira do VP regional que via o capex adicional de US$ 3,2 milhões como ameaça ao orçamento. Superei criando uma análise de payback detalhada mostrando que as multas evitadas pagariam o investimento em 3,5 meses, e demonstrando que o plano original falhava em 67% dos cenários simulados.",
      "q_en": "What was the biggest obstacle you faced during the architecture change?",
      "a_en": "The regional VP's financial resistance who saw the additional US$ 3.2 million capex as a budget threat. I overcame it by creating a detailed payback analysis showing that avoided penalties would pay for the investment in 3.5 months, and demonstrating that the original plan failed in 67% of simulated scenarios."
    },
    {
      "q": "Quais foram os principais riscos identificados e como você os mitigou?",
      "a": "Riscos principais: (1) atraso na entrega de antenas ativas, (2) complicações logísticas em quatro países, (3) resistência técnica à mudança arquitetural. Mitiguei com: (1) negociação com fornecedores mexicanos garantindo entrega em 12 dias, (2) squad multinacional com expertise local, (3) dados de simulação provando superioridade técnica da solução proposta.",
      "q_en": "What were the main risks identified and how did you mitigate them?",
      "a_en": "Main risks: (1) delay in active antenna delivery, (2) logistical complications across four countries, (3) technical resistance to architectural change. I mitigated with: (1) negotiation with Mexican suppliers guaranteeing 12-day delivery, (2) multinational squad with local expertise, (3) simulation data proving technical superiority of the proposed solution."
    },
    {
      "q": "Quais dados e racional você usou para convencer o VP a aprovar a mudança?",
      "a": "Usei dados de drive-test mostrando perda de 4,7 dBi por vento lateral, simulações Monte Carlo com 10 mil cenários (67% de falha no plano original), e análise financeira comparando US$ 3,2M de investimento vs US$ 9M de multas potenciais. O racional foi: melhor perder dinheiro em capex do que em multas e reputação.",
      "q_en": "What data and rationale did you use to convince the VP to approve the change?",
      "a_en": "I used drive-test data showing 4.7 dBi loss from lateral wind, Monte Carlo simulations with 10,000 scenarios (67% failure rate in original plan), and financial analysis comparing US$ 3.2M investment vs US$ 9M potential penalties. The rationale was: better to lose money on capex than on penalties and reputation."
    },
    {
      "q": "Como você aplicou o aprendizado dessa experiência em projetos futuros?",
      "a": "Transformei a experiência em whitepaper sobre antenas ativas em estruturas temporárias, criei o framework 'Risk Twin' para simulações em tempo real, e implementei painéis de controle automatizados. Estamos aplicando o mesmo modelo em Los Angeles 2026 e eventos CONMEBOL, reduzindo tempo de decisão crítica de 48 horas para 4 horas.",
      "q_en": "How did you apply the learning from this experience in future projects?",
      "a_en": "I transformed the experience into a whitepaper on active antennas in temporary structures, created the 'Risk Twin' framework for real-time simulations, and implemented automated control panels. We are applying the same model to Los Angeles 2026 and CONMEBOL events, reducing critical decision time from 48 hours to 4 hours."
    },
    { q: "Quais dados alimentaram o gemelo digital?", a: "Drive-test, sensores de vento, densidade de publico, inventario de antenas e topologia de fibra.", q_en: "Which data fed the digital twin?", a_en: "Drive tests, wind sensors, crowd density, antenna inventory, and fiber topology." },
    { q: "Como voce validou o modelo de vento?", a: "Usei sensores instalados em duas estruturas piloto por 72 horas e comparei com o simulador.", q_en: "How did you validate the wind model?", a_en: "I installed sensors on two pilot structures for 72 hours and compared them to the simulator." },
    { q: "Qual foi o plano financeiro apresentado?", a: "Tabela com capex incremental de US$ 3,2M, multas potenciais de US$ 9M e payback em 3,5 meses.", q_en: "What financial plan did you present?", a_en: "A table showing US$ 3.2M incremental capex, US$ 9M potential penalties, and a 3.5-month payback." },
    { q: "Como negociou com os fornecedores mexicanos?", a: "Ofereci contrato de volume para 2024 em troca de entrega antecipada e garantia de estoque de emergencia.", q_en: "How did you negotiate with the Mexican suppliers?", a_en: "I offered a 2024 volume contract in exchange for expedited delivery and emergency inventory." },
    { q: "Que indicadores monitorou no painel em tempo real?", a: "P95 de throughput, tilt, potencia, latencia e disponibilidade por venue.", q_en: "Which indicators did you monitor in real time?", a_en: "P95 throughput, tilt, power, latency, and per-venue availability." },
    { q: "Como garantiu alinhamento com os clientes?", a: "Fiz calls diarias com operadoras e FIFA enviando relatorio de risco e status.", q_en: "How did you keep customers aligned?", a_en: "I held daily calls with carriers and FIFA, sending risk and status reports." },
    { q: "Qual foi o maior risco apos a mudanca?", a: "Atraso de fibra; mitiguei com equipes redundantes e rotas alternativas.", q_en: "What was the biggest residual risk?", a_en: "Fiber delays; I mitigated with redundant crews and alternate routes." },
    { q: "Como registou a decisao do VP?", a: "Ata assinada com condicao de manter cronograma e registrar custo extra por site.", q_en: "How did you record the VP's decision?", a_en: "A signed memo conditioning schedule adherence and tracking extra cost per site." }
  ]
};

export default case_2;
