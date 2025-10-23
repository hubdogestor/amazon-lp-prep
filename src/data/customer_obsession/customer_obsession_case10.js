const case_10 = {
  id: "payment-simplification-high-impact-co10",
  title: "Inventei motor de simplificação de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_pt: "Inventei motor de simplificação de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_en: "Invented liquidity simplification engine that moved settlements from D+3 to D+0",
  company: "Bradesco Fintech Hub",
  period: "04/2017-12/2017",
  keywords: "#inventar-motor | #simplificação | #d+0 | #liquidez | #marketplace",
  isTopCase: true,
  isGoodCase: true,
  pt: {
    s: `Em 2017, como Product Owner de Liquidez no **Bradesco Fintech Hub**, recebi um alerta direto do CEO de nosso maior cliente:

> “Vou migrar para a Stone. Eles pagam no mesmo dia.”

Na época, nossa liquidação ainda operava em **D+3**, enquanto concorrentes como **Stone e PagSeguro** já entregavam **D+0**.

Em apenas **três meses**:

* Perdemos **23% da base**,
* NPS despencou para **29**,
* R$ **2,4 bilhões** em volume transacionado estavam em risco.

Era claro: **a dor do cliente era previsibilidade de caixa, não tarifa.**
Sem resposta, a unidade de marketplaces colapsaria em seis meses.
**Agir rápido e com foco no cliente era a única estratégia possível.**`,
    t: `Minha missão era:

* Entregar **liquidação D+0 para pelo menos 80%** do volume,
* Manter chargebacks **abaixo de 0,35%**,
* E reposicionar a plataforma como **referência em liquidez simples e confiável**.

O desafio ia além de engenharia: era **reconquistar a confiança do cliente por meio da experiência**.`,
    a: `Assumi a liderança da resposta à crise, transformando-a num caso de **Customer Obsession extremo** e executando em quatro frentes paralelas.

### 1. **Imersão Profunda no Cliente**
Em vez de analisar relatórios, fui a campo. Organizei e conduzi pessoalmente entrevistas com os 20 maiores lojistas, que representavam 40% do nosso TPV. Descobri que **78% deles citavam a imprevisibilidade do fluxo de caixa** como a principal razão para o churn, enquanto apenas 12% mencionavam as taxas. A dor não era o custo, mas a incerteza. Ficou claro que os clientes não confiavam mais no nosso prazo de pagamento.

### 2. **Invenção do ‘Settlement Graph’**
Com o diagnóstico em mãos, desenhei um modelo de decisão em tempo real que chamei de ‘Settlement Graph’. O modelo utilizava machine learning para categorizar transações com base em mais de 50 variáveis, como histórico do lojista, padrão de vendas, sazonalidade e score de fraude. Para validar a hipótese, rodei uma simulação com **2,1 milhões de transações históricas**, que provou que **73% do volume poderia ter sido liquidado em D+0 com um aumento de risco marginal, inferior a 0,05%**.

### 3. **Liderança Técnica e Simplificação Radical**
Liderei três squads de engenharia (18 pessoas) na reescrita do motor de conciliação. Adotamos uma arquitetura baseada em microsserviços, o que nos permitiu eliminar **19 das 27 integrações legadas** que geravam latência e pontos de falha. Implementamos **cache distribuído com Redis e filas assíncronas com RabbitMQ**, alcançando uma latência de processamento inferior a **200 ms**. Minha função foi definir a visão técnica, remover impedimentos e garantir que as equipes mantivessem o foco na experiência do cliente.

### 4. **Negociação Estratégica com Stakeholders**
O comitê de risco foi meu maior desafio. Eles viam a antecipação como uma ameaça à estabilidade financeira. Em vez de um debate técnico, apresentei uma análise de negócio: comparei a exposição financeira marginal do D+0 com a perda de receita garantida pela evasão de clientes. Para selar o acordo, propus a criação de um **fundo de garantia de R$ 8 milhões**, provisionado com base no meu modelo de risco e sob minha gestão, com **auditorias externas semanais** para garantir total transparência. A proposta foi aprovada por unanimidade.`,
    r: `Em **8 meses**, entregamos:

* **D+0 em 82%** do volume.
* NPS subiu de **29 para 71**.
* Churn caiu **4,5 pontos**.
* **R$ 2,4 bilhões** retidos em volume transacionado.
* Reconciliações tardias caíram **48%**.
* Eficiência 18% superior a bancos digitais concorrentes.
* **R$ 19 milhões** em receita incremental + **R$ 7,4 milhões** em economia.

O modelo foi **expandido para cartões corporativos e pagamentos cross-border**, elevando o D+0 em **36% no ano seguinte**.`,
    l: `Aprendi que **obsessão pelo cliente começa com escuta ativa e termina com simplificação radical**.

* O ‘Settlement Graph’ provou que é possível **entregar agilidade com segurança.**
* Desde então, aplico esse modelo em todo novo produto:
  → Ouvir,
  → Remover complexidades desnecessárias,
  → E criar sistemas confiáveis para decisões mais rápidas.`
  },
  en: {
    s: `In 2017, as the Product Owner for Liquidity at **Bradesco Fintech Hub**, I received a direct alert from the CEO of our largest client:

> “I’m moving to Stone. They pay on the same day.”

At the time, our settlement still operated on a **D+3** basis, while competitors like **Stone and PagSeguro** were already delivering **D+0**.

In just **three months**:

* We lost **23% of our client base**,
* NPS plummeted to **29**,
* R$**2.4 billion** in transaction volume was at risk.

It was clear: **the customer's pain was cash flow predictability, not fees.**
Without a response, the marketplaces unit would collapse within six months.
**Acting quickly and with a customer focus was the only possible strategy.**`,
    t: `My mission was to:

* Deliver **D+0 settlement for at least 80%** of the volume,
* Keep chargebacks **below 0.35%**,
* And reposition the platform as a **benchmark for simple and reliable liquidity**.

The challenge went beyond engineering: it was about **regaining customer trust through experience**.`,
    a: `I took the lead in responding to the crisis, turning it into a case of **extreme Customer Obsession** and executing on four parallel fronts.

### 1. **Deep Customer Immersion**
Instead of analyzing reports, I went into the field. I organized and personally conducted interviews with the 20 largest merchants, who represented 40% of our TPV. I discovered that **78% of them cited unpredictable cash flow** as the main reason for churn, while only 12% mentioned fees. The pain was not the cost, but the uncertainty. It became clear that customers no longer trusted our payment timeline.

### 2. **Invention of the ‘Settlement Graph’**
With the diagnosis in hand, I designed a real-time decision model I called the ‘Settlement Graph’. The model used machine learning to categorize transactions based on over 50 variables, such as merchant history, sales patterns, seasonality, and fraud score. To validate the hypothesis, I ran a simulation with **2.1 million historical transactions**, which proved that **73% of the volume could have been settled on D+0 with a marginal risk increase of less than 0.05%**.

### 3. **Technical Leadership and Radical Simplification**
I led three engineering squads (18 people) in rewriting the reconciliation engine. We adopted a microservices-based architecture, which allowed us to eliminate **19 of the 27 legacy integrations** that caused latency and points of failure. We implemented **distributed caching with Redis and asynchronous queues with RabbitMQ**, achieving a processing latency of less than **200 ms**. My role was to define the technical vision, remove impediments, and ensure the teams remained focused on the customer experience.

### 4. **Strategic Negotiation with Stakeholders**
The risk committee was my biggest challenge. They saw early settlement as a threat to financial stability. Instead of a technical debate, I presented a business analysis: I compared the marginal financial exposure of D+0 with the guaranteed revenue loss from customer churn. To seal the deal, I proposed the creation of an **R$8 million guarantee fund**, provisioned based on my risk model and under my management, with **weekly external audits** to ensure full transparency. The proposal was unanimously approved.`,
    r: `In **8 months**, we delivered:

* **D+0 on 82%** of the volume.
* NPS increased from **29 to 71**.
* Churn fell by **4.5 points**.
* **R$2.4 billion** in transaction volume retained.
* Late reconciliations dropped by **48%**.
* 18% higher efficiency than competing digital banks.
* **R$19 million** in incremental revenue + **R$7.4 million** in savings.

The model was **expanded to corporate cards and cross-border payments**, increasing D+0 by **36% the following year**.`,
    l: `I learned that **customer obsession begins with active listening and ends with radical simplification**.

* The ‘Settlement Graph’ proved that it is possible to **deliver agility with security.**
* Since then, I have applied this model to every new product:
  → Listen,
  → Remove unnecessary complexities,
  → And create reliable systems for faster decisions.`
  },
  fups: [
    {
      "q": "Qual foi seu maior erro ou falha neste caso?",
      "a": "Inicialmente apontei D+0 como objetivo único sem considerar exceções regulatórias; precisei recalibrar o algoritmo para contas corporativas com restrição de SLA. Quantifiquei que atingimos D+0 em 82% do volume com NPS subindo de 29 para 71.",
      "q_en": "What was your biggest mistake or failure in this case?",
      "a_en": "At first I set D+0 as a single goal ignoring regulatory exceptions; I later recalibrated the algorithm for corporate accounts with SLA restrictions. I quantified reaching D+0 for 82% of volume with NPS rising from 29 to 71."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Iniciaria a comunicação com o comitê de risco já no discovery, criando patrocínio antecipado e evitando duas semanas de atraso na aprovação final. Mostrei que retivemos R$ 2,4 bilhões em TPV e reduzimos churn em 4,5 pontos percentuais.",
      "q_en": "What would you do differently today?",
      "a_en": "I would engage the risk committee during discovery, building early sponsorship and avoiding the two-week delay before final approval. I showed retaining BRL 2.4B in TPV while churn dropped 4.5 points."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "Convencer o comitê de risco de que a liquidez instantânea traria mais governança, não menos; usei projeções de receita e dados de inadimplência para mudar a narrativa. Detalhei os R$ 19 milhões de receita incremental e R$ 7,4 milhões em economia anual.",
      "q_en": "What was the hardest obstacle to overcome?",
      "a_en": "Convincing the risk committee that instant liquidity improved governance, not jeopardized it; I used revenue projections and delinquency data to shift the narrative. I detailed BRL 19M in incremental revenue plus BRL 7.4M in annual savings."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Chargeback e exposição financeira; implantei cap de 0,07 % do TPV, auditoria independente e simulações semanais de stress financeiro. Reforcei a queda de 48% nas reconciliações tardias após simplificar 27 integrações para oito módulos.",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "Chargeback and financial exposure; I implemented a 0.07 % TPV cap, independent audits and weekly financial stress tests. I reinforced late reconciliation incidents falling 48% after simplifying 27 integrations into eight modules."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Examinei 2,1 milhões de transações históricas, modelei curvas de risco e calculei cut-off de liquidação instantânea com base em probabilidade de inadimplência preditiva. Expliquei que o modelo escalou para cartões corporativos e cross-border, elevando o D+0 em 36% no ano seguinte.",
      "q_en": "What data did you use and what was the calculation rationale?",
      "a_en": "Analyzed 2.1 M historical transactions, modeled risk curves and calculated instant-settlement cut-offs based on predictive default probability. I explained the model scaling to corporate cards and cross-border, boosting D+0 share 36% the following year."
    },
    {
      "q": "Como você usou o aprendizado desse caso em outras frentes?",
      "a": "Reapliquei o conceito em modelos de crédito same-day de open banking e em liquidação cross-border com métricas de risco unificadas. Quantifiquei que atingimos D+0 em 82% do volume com NPS subindo de 29 para 71.",
      "q_en": "How did you apply the learning from this case elsewhere?",
      "a_en": "I used the concept in same-day credit open-banking models and cross-border settlements with unified risk metrics. I quantified reaching D+0 for 82% of volume with NPS rising from 29 to 71."
    },
    {
      "q": "Como você validou que o problema era liquidez e não tarifa?",
      "a": "Realizei 20 entrevistas com lojistas top e descobri que 78 % apontavam previsibilidade de caixa como principal fator de decisão; apenas 12 % citavam preço. Mostrei que retivemos R$ 2,4 bilhões em TPV e reduzimos churn em 4,5 pontos percentuais.",
      "q_en": "How did you validate liquidity was the root issue and not pricing?",
      "a_en": "I ran 20 top-merchant interviews and found 78 % highlighted cash-flow predictability as key driver; only 12 % mentioned price. I showed retaining BRL 2.4B in TPV while churn dropped 4.5 points."
    },
    {
      "q": "Quais foram os maiores desafios técnicos ao remover as 19 integrações legadas, e como você os solucionou?",
      "a": "A principal dificuldade foi mapear dependências ocultas entre sistemas; resolvi criando gateway de compatibilidade temporário e rodando migração em ondas com rollback contínuo. Detalhei os R$ 19 milhões de receita incremental e R$ 7,4 milhões em economia anual.",
      "q_en": "What were the biggest technical challenges when removing 19 legacy integrations and how did you solve them?",
      "a_en": "Main challenge was hidden inter-system dependencies; I built a temporary compatibility gateway and ran wave-based migration with continuous rollback mechanism. I detailed BRL 19M in incremental revenue plus BRL 7.4M in annual savings."
    },
    {
      "q": "O que você considerou ao propor o fundo de garantia de R$ 8 milhões? Havia outras alternativas?",
      "a": "Considerei seguro de performance e reprecificação de risco, mas ambos ampliariam custos; o fundo interno mantinha controle e agilidade de decisão. Reforcei a queda de 48% nas reconciliações tardias após simplificar 27 integrações para oito módulos.",
      "q_en": "What did you consider when proposing the BRL 8 M guarantee fund? Were there alternatives?",
      "a_en": "I considered performance insurance and risk re-pricing, but both raised costs; an internal fund preserved control and decision speed. I reinforced late reconciliation incidents falling 48% after simplifying 27 integrations into eight modules."
    },
    {
      "q": "Como você identificou as 73% das transações que poderiam ser liquidadas instantaneamente sem aumentar o risco?",
      "a": "Combinei histórico comercial, padrões de disputa e score de fraude; usei análise de coorte e machine learning para categorizar transações com erro < 0,2 p.p. Expliquei que o modelo escalou para cartões corporativos e cross-border, elevando o D+0 em 36% no ano seguinte.",
      "q_en": "How did you identify the 73 % of transactions that could be settled instantly without raising risk?",
      "a_en": "Combined sales history, dispute patterns and fraud scores; used cohort analysis and ML to classify transactions with < 0.2 p.p. error margin. I explained the model scaling to corporate cards and cross-border, boosting D+0 share 36% the following year."
    },
    {
      "q": "Após o lançamento do ‘Settlement Graph’, que medidas você tomou para monitorar e ajustar o modelo em tempo real?",
      "a": "Implementei painel de correlação entre TPV e anomalias de risco; ajusto pesos mensalmente com base em feed dos times de operações e fraude. Quantifiquei que atingimos D+0 em 82% do volume com NPS subindo de 29 para 71.",
      "q_en": "After the ‘Settlement Graph’ launch, what measures did you take to monitor and adjust it in real time?",
      "a_en": "Implemented risk-TPV correlation dashboard and monthly weight updates based on operations and fraud-team feedback. I quantified reaching D+0 for 82% of volume with NPS rising from 29 to 71."
    },
    {
      "q": "Como o sucesso deste projeto influenciou outros projetos no Bradesco Fintech Hub ou no mercado?",
      "a": "Inspirou iniciativas de ‘same-day settlement’ em outros produtos e foi adotado como boas práticas pelo hub; duas fintechs parceiras replicaram o modelo. Mostrei que retivemos R$ 2,4 bilhões em TPV e reduzimos churn em 4,5 pontos percentuais.",
      "q_en": "How did this project’s success influence other initiatives in the Bradesco Fintech Hub or industry?",
      "a_en": "It inspired same-day settlement initiatives across other products and was adopted as best practice by the hub; two partner fintechs replicated the model. I showed retaining BRL 2.4B in TPV while churn dropped 4.5 points."
    },
    {
      "q": "Como você mediu o impacto no cliente final?",
      "a": "Monitorei tempo médio de recebimento, volatilidade de caixa e NPS; criei dashboard em tempo real para os lojistas acompanharem a liquidez. Detalhei os R$ 19 milhões de receita incremental e R$ 7,4 milhões em economia anual.",
      "q_en": "How did you measure the end-customer impact?",
      "a_en": "I tracked average time-to-payment, cash-flow volatility and NPS; built real-time merchant liquidity dashboard. I detailed BRL 19M in incremental revenue plus BRL 7.4M in annual savings."
    }
  ]
};

export default case_10;