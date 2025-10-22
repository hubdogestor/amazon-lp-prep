const case_4 = {
  id: "sicredi-pix-settlement",
  title: "Redução de 47% no Tempo de Liquidação de Pagamentos PIX",
  title_pt: "Redução de 47% no Tempo de Liquidação de Pagamentos PIX",
  title_en: "47% Reduction in PIX Payment Settlement Time",
  company: "Sicredi",
  period: "03/2020-08/2020",
  keywords: "#causa-raiz | #gargalo | #instrumentação | #crise-técnica | #latência",
  isTopCase: true,
  isGoodCase: false,

  pt: {
    s: `Quando assumi como Product Strategist de Pagamentos Digitais no Sicredi, o PIX estava prestes a ser lançado e um alerta urgente surgia: a liquidação média de pagamentos havia explodido para 4,2 horas - 40% acima do limite regulatório de 3 horas definido pelo Banco Central. Às 14h37 de uma terça-feira, recebi a ligação que todo PM teme: nosso maior merchant, responsável por R$2 milhões/mês, anunciou publicamente que deixaria a plataforma. O NPS havia despencado para 32 e a cooperativa tinha 60 dias para resolver o problema ou enfrentar multas pesadas e dano irreversível à reputação. O clima interno era de crise - engenharia e fraude se culpavam mutuamente, e ninguém possuía um mapa da latência de ponta a ponta.`,
    
    t: `Diante da confusão e da pressão regulatória, eu me tornei o single-threaded owner da operação, com a missão de diagnosticar pessoalmente a causa raiz e reduzir a liquidação para menos de 2 horas em 45 dias, mantendo o p95 abaixo do limite e sem aumentar custos de infraestrutura. Meu compromisso com o CTO era resolver rápido, sem improviso, e garantir que o problema não voltasse.`,
    
    a: `Decidi começar do zero. Instrumentei pessoalmente os sete microsserviços do fluxo PIX, adicionando timestamps e métricas de desempenho em cada camada - da API ao motor de fraude. Analisei cerca de 1,2 milhão de transações e finalmente detectei o gargalo: 65% do tempo era gasto em uma fila sequencial no motor de fraude, operando com baixa utilização de CPU. Modelei o impacto financeiro dessa latência e mostrei que reduzir uma hora de processamento equivalia a reter 12% do volume de merchants. Para obter o buy-in do diretor de Fraude, apresentei um plano de rollback detalhado e uma arquitetura de fast lanes para transações de baixo risco. Montei um squad dedicado de cinco engenheiros, conduzi uma PoC em staging e, após validação, fiz rollout gradual. Para evitar reincidências, desenvolvi um painel de monitoramento em tempo real com p50/p95, backlog, taxa de falsos positivos e alertas automáticos integrados ao Slack.`,
    
    r: `Em 38 dias, a liquidação média caiu de 4,2 para 2,2 horas - uma redução de 47%, com o p95 em 2,9 horas, dentro do limite do Banco Central. A taxa de falsos positivos se manteve estável em 0,4%, e o merchant crítico não apenas permaneceu, como aumentou seu volume em 15%. O NPS da carteira PIX saltou de 32 para 68, as multas foram evitadas e o churn de merchants caiu 22% no trimestre. O dashboard e os mecanismos de alerta se tornaram padrão para todos os fluxos de pagamento do Sicredi.`,
    
    l: `Aprendi que, em uma crise técnica, delegar investigação é o erro mais caro que um líder pode cometer. Somente mergulhando nos dados é possível transformar opiniões conflitantes em uma causa raiz incontestável. Desde então, aplico um método simples: 1) instrumentar tudo antes de discutir soluções; 2) isolar o gargalo com dados e simular impacto financeiro antes de propor mudanças; 3) deixar mecanismos de monitoração e alertas que impeçam regressões. Esse playbook foi replicado nas liquidações de TEDs e boletos, reduzindo latências em 28% e 34% respectivamente e poupando R$8,7 milhões em custos operacionais anuais.`
  },

  en: {
    s: `When I joined Sicredi as Product Strategist for Digital Payments, PIX was about to launch - and we were in crisis. The average settlement time had surged to 4.2 hours, 40% above the Central Bank’s three-hour limit. At 2:37 PM on a Tuesday, I got the call no PM wants to hear: our largest merchant, processing BRL 2 million monthly, publicly threatened to leave. NPS had dropped to 32, and we had barely 60 days to fix the issue or face fines and reputational damage. Engineering and Fraud teams blamed each other, and no one truly understood where the latency originated.`,
    
    t: `Amid chaos and regulatory pressure, I stepped in as the single-threaded owner. My mission was to personally diagnose the root cause and cut the settlement time to under 2 hours in 45 days, while keeping the 95th percentile below the Central Bank threshold and staying within our cloud budget. My commitment to the CTO was clear: no guesses, only facts - and a fix that would last.`,
    
    a: `I started from scratch. I instrumented the seven microservices in the PIX flow myself, adding precise timestamping at each stage - from API to fraud engine. After analyzing 1.2 million transactions, I pinpointed the bottleneck: 65% of the time was spent in a sequential queue within the fraud engine with low CPU usage. I quantified the financial impact and demonstrated that every hour saved meant retaining 12% more transaction volume. To win over the skeptical Fraud Director, I presented a rollback-ready redesign with a “fast-lane” path for low-risk transactions. I assembled a five-engineer squad, validated through data reprocessing and PoC, and performed a staggered rollout. Finally, I created a real-time monitoring dashboard with P50/P95 metrics, queue backlog, false-positive rates, and Slack-based alerts.`,
    
    r: `Within 38 days, the average settlement time dropped from 4.2 to 2.2 hours - a 47% reduction. The P95 stabilized at 2.9h, the false-positive rate remained at 0.4%, and the merchant not only stayed but grew volume by 15%. NPS jumped from 32 to 68, regulatory fines were avoided, and merchant churn dropped 22% in the next quarter. The alert mechanism became a standard for all Sicredi payment systems.`,
    
    l: `I learned that during a crisis, leaders cannot delegate the search for truth - data must come before opinion. I’ve since turned this case into a repeatable method: 1) instrument every step before discussing fixes; 2) isolate the bottleneck, model financial impact, and then act; 3) leave behind automated monitoring to prevent recurrence. This approach later improved TED and boleto processing times by 28% and 34%, saving BRL 8.7 million annually.`
  },

  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Meu maior erro foi ter confiado demais nos relatórios de monitoramento existentes e ter perdido quase uma semana acreditando em métricas incorretas que apontavam para um problema de infraestrutura. Aprendi da maneira mais difícil a nunca iniciar uma análise crítica sem validar a confiabilidade da fonte de dados. Hoje, minha primeira ação é sempre pedir acesso direto aos logs brutos para fazer minha própria análise.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My biggest mistake was trusting the existing monitoring reports too much and wasting almost a week believing incorrect metrics that pointed to an infrastructure problem. I learned the hard way to never start a critical analysis without validating the reliability of the data source. Today, my first action is always to request direct access to the raw logs to do my own analysis."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu começaria instrumentando os sete microsserviços do fluxo PIX desde o primeiro dia, em vez de esperar a crise. Teria adicionado timestamps e métricas de desempenho em cada camada como parte do desenvolvimento inicial. Essa abordagem proativa teria nos permitido identificar o gargalo meses antes, evitando a crise e a perda de confiança do cliente.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would start by instrumenting the seven microservices of the PIX flow from day one, instead of waiting for the crisis. I would have added timestamps and performance metrics at each layer as part of the initial development. This proactive approach would have allowed us to identify the bottleneck months earlier, avoiding the crisis and the loss of customer trust."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "O obstáculo mais difícil foi a resistência inicial do diretor de Fraude, que acreditava firmemente que o problema estava na infraestrutura de nuvem e não no seu motor de fraude. Para superar isso, precisei não apenas apresentar os dados que mostravam o gargalo, mas também um plano de rollback completo e seguro que o deixou confortável para aprovar a mudança. A confiança foi construída com dados e segurança.",
      q_en: "What was the most difficult obstacle to overcome?",
      a_en: "The most difficult obstacle was the initial resistance from the Fraud Director, who firmly believed that the problem was in the cloud infrastructure and not in his fraud engine. To overcome this, I had to not only present the data that showed the bottleneck, but also a complete and secure rollback plan that made him comfortable approving the change. Trust was built with data and security."
    },
    {
      q: "Quais foram os principais riscos do projeto e como você os mitigou?",
      a: "Os principais riscos eram a regressão de performance, o impacto em clientes de alto risco durante a mudança, e a instabilidade pós-release. Mitiguei esses riscos com uma estratégia de ‘cinto de segurança triplo’: rollbacks planejados, um modo ‘shadow’ de 10 dias para comparar os resultados em produção, e feature flags para desligar o novo módulo instantaneamente se algo saísse do esperado.",
      q_en: "What were the main risks of the project and how did you mitigate them?",
      a_en: "The main risks were performance regression, the impact on high-risk customers during the change, and post-release instability. I mitigated these risks with a 'triple seatbelt' strategy: planned rollbacks, a 10-day 'shadow' mode to compare results in production, and feature flags to instantly disable the new module if anything went wrong."
    },
    {
      q: "Que dados você usou para provar que o gargalo era no motor de fraude?",
      a: "Usei timestamps de alta precisão que adicionei em cada microsserviço para medir a diferença entre a chegada e a saída de cada fila. A análise de 1,2 milhão de transações mostrou que o motor de fraude era responsável por 65% da latência total. O diagrama de dispersão que criei tornou o gargalo visualmente inegável, o que foi crucial para convencer a todos.",
      q_en: "What data did you use to prove that the bottleneck was in the fraud engine?",
      a_en: "I used high-precision timestamps that I added to each microservice to measure the difference between the arrival and departure of each queue. The analysis of 1.2 million transactions showed that the fraud engine was responsible for 65% of the total latency. The scatter plot I created made the bottleneck visually undeniable, which was crucial to convince everyone."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "Apliquei o mesmo método de instrumentação e análise de gargalos nos fluxos de TED e boletos, o que reduziu as latências em 28% e 34%, respectivamente, e economizou R$8,7 milhões em custos operacionais anuais. O playbook de ‘diagnóstico profundo’ se tornou um padrão que levei para outros projetos, garantindo que nunca mais tomássemos decisões baseadas em achismos.",
      q_en: "How did you apply the learning from this case in other areas?",
      a_en: "I applied the same method of instrumentation and bottleneck analysis to the TED and boleto flows, which reduced latencies by 28% and 34%, respectively, and saved BRL 8.7 million in annual operating costs. The 'deep diagnosis' playbook became a standard that I took to other projects, ensuring that we never again made decisions based on guesswork."
    },
    {
      q: "Como garantiu que o novo fluxo PIX não criasse gargalos futuros?",
      a: "Incluí automação de alertas e precondições de deploy como parte do nosso processo de CI/CD. Cada nova versão é validada com testes de estresse e análise de p95. Nenhuma release é promovida para produção sem passar por três checkpoints consecutivos com latência abaixo de 3 horas, garantindo a estabilidade a longo prazo.",
      q_en: "How did you ensure that the new PIX flow would not create future bottlenecks?",
      a_en: "I included alert automation and deployment preconditions as part of our CI/CD process. Each new version is validated with stress tests and p95 analysis. No release is promoted to production without passing three consecutive checkpoints with latency below 3 hours, ensuring long-term stability."
    },
    {
      q: "Qual insight técnico mais ampliou sua compreensão sobre latência em sistemas distribuídos?",
      a: "A constatação de que a CPU ociosa não significa um código eficiente. Descobrir que o problema era uma fila sequencial mal estruturada, e não um problema de hardware, me fez valorizar o tracing distribuído acima de qualquer métrica isolada. Aprendi a olhar para o fluxo completo, e não apenas para os componentes individuais.",
      q_en: "What technical insight most expanded your understanding of latency in distributed systems?",
      a_en: "The realization that an idle CPU does not mean efficient code. Discovering that the problem was a poorly structured sequential queue, and not a hardware issue, made me value distributed tracing above any isolated metric. I learned to look at the complete flow, and not just at the individual components."
    },
    {
      q: "Como o dashboard que você criou impactou a cultura do time?",
      a: "Depois do dashboard, ninguém mais discutia com base em achismos. Os times começaram a usar o painel em suas dailies, e isso fortaleceu uma cultura de medição e accountability entre as equipes de engenharia e produto. Os dados se tornaram a linguagem comum para a tomada de decisões.",
      q_en: "How did the dashboard you created impact the team's culture?",
      a_en: "After the dashboard, no one argued based on guesswork anymore. The teams started using the panel in their dailies, and this strengthened a culture of measurement and accountability between the engineering and product teams. Data became the common language for decision-making."
    },
    {
      q: "Como você lidou com a pressão dos merchants e da diretoria durante a crise?",
      a: "Mantive uma comunicação transparente e proativa, com relatórios semanais detalhados e um acompanhamento VIP para os clientes-chave. Preferi admitir os riscos e explicar os planos de ação em vez de esconder as instabilidades. Essa abordagem honesta foi fundamental para manter a confiança de todos os stakeholders durante o período mais crítico.",
      q_en: "How did you handle the pressure from the merchants and the board during the crisis?",
      a_en: "I maintained transparent and proactive communication, with detailed weekly reports and VIP follow-up for key customers. I preferred to admit the risks and explain the action plans rather than hiding the instabilities. This honest approach was fundamental to maintaining the trust of all stakeholders during the most critical period."
    }
  ]
};

export default case_4;
