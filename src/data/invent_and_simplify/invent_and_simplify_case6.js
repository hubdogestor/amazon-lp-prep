const case_6 = {
  id: "payment-simplification-high-impact",
  title: "Inventei motor de simplificação de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_pt: "Inventei motor de simplificação de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_en: "Invented liquidity simplification engine that moved settlements from D+3 to D+0",
  company: "Bradesco Fintech Hub",
  period: "04/2017-12/2017",
  isTopCase: false,
  isGoodCase: false,

  pt: {
    s: `Em 2017, como Product Owner de Liquidez no Bradesco Fintech Hub, recebi um alerta crítico do nosso maior cliente: “Vou migrar para a Stone, eles pagam no mesmo dia.” Nossa liquidação ocorria em D+3, enquanto concorrentes como Stone e PagSeguro já operavam com D+0. O efeito foi imediato - perdíamos 23 % dos clientes por trimestre, o NPS despencou para 29 e R$ 2,4 bilhões em TPV estavam em risco. Mantida a tendência, em seis meses nosso marketplace ficaria insustentável. Priorizei esse problema porque ameaçava o core da unidade de negócio - sem corrigir a liquidez, perderíamos a base de receita recorrente e comprometeríamos a estratégia de crescimento do hub como provedor de soluções instantâneas.`,
    
    t: `Com o negócio em risco existencial, recebi a missão de entregar D+0 para pelo menos 80 % do volume transacionado, manter chargebacks abaixo de 0,35 % e restaurar a confiança dos marketplaces. Além do resultado técnico, era minha responsabilidade reposicionar a plataforma como referência em simplicidade de liquidez.`,
    
    a: `Transformei a crise em um problema de engenharia de simplificação.  
    **1. Análise e priorização de risco** - Criei o "Settlement Graph", modelo que classificava transações em tempo real por perfil de risco com base em histórico de vendas, inadimplência e sazonalidade. Ao testar mais de 2 milhões de operações, identifiquei que 73 % podiam ser liquidadas de forma instantânea sem elevar perdas.  
    **2. Redesenho técnico** - Liderei três squads e assumi a arquitetura do novo motor de conciliação, reescrevendo módulos de autorização e definindo padrão de normalização que eliminou 19 das 27 integrações legadas. Implementei cache distribuído, fila de transações assíncronas e monitoramento preemptivo. Esse design reduziu latência para 200 ms e permitiu liquidação em minutos.  
    **3. Condução do comitê de risco** - Quando o comitê vetou o modelo D+0, preparei cenários de exposição baseados nos últimos 36 meses de TPV. Comparei perdas esperadas em D+3 versus ganhos de retenção, mostrando que não migrar geraria queda de 19 % na receita anual. Propus então fundo de garantia de R$ 8 milhões de exposição máxima, sob minha gestão, e assegurei auditoria independente semanal. A decisão foi aprovada por unanimidade após duas reuniões.`,
    
    r: `Em oito meses, atingimos D+0 para 82 % do volume transacionado. O NPS subiu de 29 para 71, o churn caiu 4,5 pontos percentuais e retivemos R$ 2,4 bilhões em TPV. Além de gerar R$ 19 milhões em receita incremental e economizar R$ 7,4 milhões em custos, a nova arquitetura reduziu em 48 % as ocorrências de reconciliação tardia. Comparando com bancos digitais de mesmo porte, operamos com eficiência 18 % superior. Mais importante: a solução simplificou um sistema de 27 integrações para oito módulos independentes, mantendo governança de risco intacta. O modelo foi replicado nas operações de cartões corporativos e em pagamentos cross-border, aumentando o volume D+0 em 36 % no ano seguinte.`,
    
    l: `Aprendi que inovar em pagamentos é interpretar a dor de caixa como oportunidade de simplificar processos complexos sem perder controle. O "Settlement Graph" comprovou que é possível diminuir riscos operando com menos camadas. Desde então, uso esse framework para avaliar qualquer novo produto: Entender profundamente o fluxo financeiro, remover etapas desnecessárias e criar mecanismos seguros para decisões mais rápidas.`
  },

  en: {
    s: `In 2017, as Product Owner for Liquidity at Bradesco Fintech Hub, I received an alert from our largest marketplace CEO: “I’m moving to Stone - they pay same-day.” Our settlement was D+3 while competitors such as Stone and PagSeguro already operated at D+0. We were losing 23 % of clients per quarter, NPS fell to 29 and BRL 2.4 B in TPV was at risk. Keeping that pace meant the marketplace unit would collapse within six months. I prioritized the problem because it threatened our core revenue and strategic growth plan - instant liquidity was the only path to survival.`,
    
    t: `With the business under existential threat, I was tasked to deliver D+0 settlement for at least 80 % of the volume, keep chargebacks below 0.35 %, and rebuild merchant trust through a simpler architecture.`,
    
    a: `I turned the crisis into an engineering exercise in simplification.  
    **1. Risk analysis and prioritization** - I built the “Settlement Graph,” classifying transactions in real time by risk profile based on sales history and delinquency patterns. Testing over two million orders showed 73 % could be settled instantly without additional loss.  
    **2. Technical redesign** - I led three squads and took ownership of the new reconciliation engine’s architecture; rewrote authorization modules and defined normalization standards that eliminated 19 of 27 legacy integrations. Implemented distributed cache, asynchronous queues, and predictive monitoring, reducing latency to 200 ms and enabling minute-level settlement.  
    **3. Risk committee negotiation** - When the committee blocked D+0, I presented 36 months of TPV exposure scenarios comparing expected losses vs. client retention. I proved that not migrating would cut annual revenue by 19 %. I then proposed an BRL 8 M guarantee fund, personally managed with independent weekly audits. Approval came after two sessions through data-driven risk-trade-off presentation.`,
    
    r: `In eight months we reached D+0 for 82 % of volume. NPS rose from 29 to 71, churn -4.5 points, and BRL 2.4 B in TPV was retained. We generated BRL 19 M incremental revenue and saved BRL 7.4 M in costs. The new architecture reduced late reconciliation events by 48 %. Against peer digital banks we achieved 18 % higher efficiency. More importantly, the solution simplified 27 legacy integrations into eight self-contained modules maintaining full risk governance. The model scaled to corporate cards and cross-border payments, increasing D+0 share by 36 % the following year.`,
    
    l: `I learned that innovation in payments means transforming cash pain into structured simplicity. The “Settlement Graph” proved that reducing layers often reduces risk. Since then I use the framework to evaluate any new product - study the financial flow deeply, remove unnecessary steps, and design secure mechanisms to enable faster decisions.`
  },

  fups: [
    // --- Seis FUPs centrais obrigatórias ---
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Inicialmente apontei D+0 como objetivo único sem considerar exceções regulatórias; precisei recalibrar o algoritmo para contas corporativas com restrição de SLA.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "At first I set D+0 as a single goal ignoring regulatory exceptions; I later recalibrated the algorithm for corporate accounts with SLA restrictions."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Iniciaria a comunicação com o comitê de risco já no discovery, criando patrocínio antecipado e evitando duas semanas de atraso na aprovação final.",
      q_en: "What would you do differently today?",
      a_en: "I would engage the risk committee during discovery, building early sponsorship and avoiding the two-week delay before final approval."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Convencer o comitê de risco de que a liquidez instantânea traria mais governança, não menos; usei projeções de receita e dados de inadimplência para mudar a narrativa.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Convincing the risk committee that instant liquidity improved governance, not jeopardized it; I used revenue projections and delinquency data to shift the narrative."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Chargeback e exposição financeira; implantei cap de 0,07 % do TPV, auditoria independente e simulações semanais de stress financeiro.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Chargeback and financial exposure; I implemented a 0.07 % TPV cap, independent audits and weekly financial stress tests."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Examinei 2,1 milhões de transações históricas, modelei curvas de risco e calculei cut-off de liquidação instantânea com base em probabilidade de inadimplência preditiva.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "Analyzed 2.1 M historical transactions, modeled risk curves and calculated instant-settlement cut-offs based on predictive default probability."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "Reapliquei o conceito em modelos de crédito same-day de open banking e em liquidação cross-border com métricas de risco unificadas.",
      q_en: "How did you apply the learning from this case elsewhere?",
      a_en: "I used the concept in same-day credit open-banking models and cross-border settlements with unified risk metrics."
    },

    // --- FUPs originais + novas complementares ---
    {
      q: "Como você validou que o problema era liquidez e não tarifa?",
      a: "Realizei 20 entrevistas com lojistas top e descobri que 78 % apontavam previsibilidade de caixa como principal fator de decisão; apenas 12 % citavam preço.",
      q_en: "How did you validate liquidity was the root issue and not pricing?",
      a_en: "I ran 20 top-merchant interviews and found 78 % highlighted cash-flow predictability as key driver; only 12 % mentioned price."
    },
    {
      q: "Quais foram os maiores desafios técnicos ao remover as 19 integrações legadas, e como você os solucionou?",
      a: "A principal dificuldade foi mapear dependências ocultas entre sistemas; resolvi criando gateway de compatibilidade temporário e rodando migração em ondas com rollback contínuo.",
      q_en: "What were the biggest technical challenges when removing 19 legacy integrations and how did you solve them?",
      a_en: "Main challenge was hidden inter-system dependencies; I built a temporary compatibility gateway and ran wave-based migration with continuous rollback mechanism."
    },
    {
      q: "O que você considerou ao propor o fundo de garantia de R$ 8 milhões? Havia outras alternativas?",
      a: "Considerei seguro de performance e reprecificação de risco, mas ambos ampliariam custos; o fundo interno mantinha controle e agilidade de decisão.",
      q_en: "What did you consider when proposing the BRL 8 M guarantee fund? Were there alternatives?",
      a_en: "I considered performance insurance and risk re-pricing, but both raised costs; an internal fund preserved control and decision speed."
    },
    {
      q: "Como você identificou as 73% das transações que poderiam ser liquidadas instantaneamente sem aumentar o risco?",
      a: "Combinei histórico comercial, padrões de disputa e score de fraude; usei análise de coorte e machine learning para categorizar transações com erro < 0,2 p.p.",
      q_en: "How did you identify the 73 % of transactions that could be settled instantly without raising risk?",
      a_en: "Combined sales history, dispute patterns and fraud scores; used cohort analysis and ML to classify transactions with < 0.2 p.p. error margin."
    },
    {
      q: "Após o lançamento do ‘Settlement Graph’, que medidas você tomou para monitorar e ajustar o modelo em tempo real?",
      a: "Implementei painel de correlação entre TPV e anomalias de risco; ajusto pesos mensalmente com base em feed dos times de operações e fraude.",
      q_en: "After the ‘Settlement Graph’ launch, what measures did you take to monitor and adjust it in real time?",
      a_en: "Implemented risk-TPV correlation dashboard and monthly weight updates based on operations and fraud-team feedback."
    },
    {
      q: "Como o sucesso deste projeto influenciou outros projetos no Bradesco Fintech Hub ou no mercado?",
      a: "Inspirou iniciativas de ‘same-day settlement’ em outros produtos e foi adotado como boas práticas pelo hub; duas fintechs parceiras replicaram o modelo.",
      q_en: "How did this project’s success influence other initiatives in the Bradesco Fintech Hub or industry?",
      a_en: "It inspired same-day settlement initiatives across other products and was adopted as best practice by the hub; two partner fintechs replicated the model."
    },
    {
      q: "Como você mediu o impacto no cliente final?",
      a: "Monitorei tempo médio de recebimento, volatilidade de caixa e NPS; criei dashboard em tempo real para os lojistas acompanharem a liquidez.",
      q_en: "How did you measure the end-customer impact?",
      a_en: "I tracked average time-to-payment, cash-flow volatility and NPS; built real-time merchant liquidity dashboard."
    }
  ]
};

export default case_6;