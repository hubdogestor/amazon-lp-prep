const case_4 = {
  id: "sicredi-pix-settlement",
  title: "Redução de 47% no Tempo de Liquidação de Pagamentos PIX",
  title_pt: "Redução de 47% no Tempo de Liquidação de Pagamentos PIX",
  title_en: "47% Reduction in PIX Payment Settlement Time",
  company: "Sicredi",
  period: "03/2020-08/2020",
  isTopCase: true,
  isGoodCase: true,

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
      q: "Qual foi o maior erro que você cometeu durante esse processo?",
      a: "Confiei demais nos relatórios originais e perdi quase uma semana acreditando em métricas incorretas. Aprendi a nunca iniciar uma análise sem validar a confiabilidade da fonte de dados. Hoje, sempre começo pedindo acesso direto ao log bruto."
    },
    {
      q: "Como você identificou o gargalo principal na arquitetura?",
      a: "Usei timestamps em cada microsserviço e medi a diferença entre chegada e saída de cada fila. O motor de fraude tinha 65% da latência total, o que ficou evidente no diagrama de dispersão."
    },
    {
      q: "Quais foram os principais riscos e como os mitigou?",
      a: "Risco de regressão, impacto em clientes de alto risco e instabilidade pós-release. Mitiguei com rollbacks planejados, shadow mode de 10 dias e feature flags para desligar o módulo instantaneamente se algo saísse do esperado."
    },
    {
      q: "Qual foi a reação do diretor de Fraude ao seu plano?",
      a: "Inicialmente resistência - ele acreditava que o problema estava na nuvem. Mostrei os dados e o impacto financeiro projetado, e ganhei o buy-in quando apresentei um rollback completo e seguro."
    },
    {
      q: "Como garantiu que o novo fluxo PIX não criasse gargalos futuros?",
      a: "Incluí automação de alertas e precondições de deploy: cada nova versão é validada com stress tests e análise de p95. Nenhuma release é promovida sem três checkpoints consecutivos abaixo de 3h."
    },
    {
      q: "Como mensurou o impacto financeiro da lentidão?",
      a: "Cada hora de atraso equivalia a R$420 mil em volume não processado. Modelei isso com base no throughput médio por merchant e gravei dashboards de impacto em tempo real."
    },
    {
      q: "Qual insight técnico mais ampliou sua compreensão sobre latência?",
      a: "A constatação de que CPU ociosa não significa código eficiente. Descobrir filas sequenciais mal estruturadas me fez valorizar o tracing distribuído acima de qualquer métrica isolada."
    },
    {
      q: "Como o dashboard criado impactou a cultura do time?",
      a: "Depois dele, ninguém discutia mais com base em achismo. Os times começaram a usar o painel em dailies, e isso fortaleceu a cultura de medição e accountability entre engenharia e produto."
    },
    {
      q: "Como lidou com a pressão dos merchants e da diretoria?",
      a: "Mantive comunicação transparente, com relatórios semanais e acompanhamento VIP de clientes chave. Preferi admitir riscos e explicar planos ao invés de esconder instabilidades - isso manteve confiança."
    },
    {
      q: "Que aprendizado desse caso você aplicou em outros fluxos?",
      a: "Apliquei o mesmo método em TED e boleto. Ao repetir a lógica de mapear, isolar e automatizar alertas, reduzimos latências e melhoramos a previsibilidade das janelas de liquidação em 30%."
    },
    {
      q: "Como garantiu estabilidade ao mudar arquitetura sob alta pressão?",
      a: "Fiz rollout em camadas, começando com 10% do tráfego e monitorando p95. Estabilidade só foi declarada após 72h de comportamento consistente e sem alerta crítico."
    },
    {
      q: "O que esse projeto ensinou sobre liderança sob pressão?",
      a: "Que o papel do líder é eliminar ruído e construir consenso em torno de dados. Em 48h, consegui transformar um conflito entre áreas em um objetivo técnico comum."
    },
    {
      q: "Como o time respondeu à sua abordagem de 'mão na massa'?",
      a: "O engajamento cresceu visivelmente. Ao me ver depurando logs ao lado deles, o time entendeu que o problema era coletivo, não departamental. Isso uniu áreas antes desconectadas."
    },
    {
      q: "Qual foi seu momento decisivo nessa investigação?",
      a: "Quando vi o gráfico p95 colapsando após o ajuste na fila de fraude - ali soube que tínhamos virado o jogo. Era mais do que resolver um bug, era restaurar a confiança do cliente."
    },
    {
      q: "O que esse caso demonstra sobre o princípio 'Dive Deep'?",
      a: "Mergulhar fundo é não aceitar 'suposições confortáveis'. É abrir os logs, seguir cada transação, medir cada salto de latência e não parar até achar a verdade que o gráfico não mostra."
    }
  ]
};

export default case_4;