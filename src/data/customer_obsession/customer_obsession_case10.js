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
    a: `Transformei a crise em um caso de **Customer Obsession extremo**.

### 1. **Diagnóstico com foco no cliente**

* Entrevistas com os 20 maiores lojistas revelaram que **78% citavam previsibilidade de caixa** como razão de churn.
* Apenas **12% mencionavam tarifa.**
* A dor estava clara: **clientes não confiavam no nosso tempo de pagamento**.

### 2. **Criação do ‘Settlement Graph’**

* Desenvolvi um modelo de decisão em tempo real que categorizava transações por risco com base em:

  * Histórico,
  * Padrão de vendas,
  * Score de inadimplência.
* Simulei **2,1 milhões de transações históricas**.
  → Resultado: **73% poderiam ser liquidadas no mesmo dia sem aumento significativo de risco**.

### 3. **Redesenho técnico com foco no tempo do cliente**

* Liderei três squads para reescrever o motor de conciliação:

  * Eliminei **19 das 27 integrações legadas**.
  * Implantei **cache distribuído**, **filas assíncronas** e **latência de 200 ms**.

### 4. **Alinhamento com Risco e Stakeholders**

* O comitê de risco resistiu.
  → Apresentei comparativos de exposição financeira D+3 vs. retenção com D+0.
  → Propus **fundo de garantia de R$ 8 milhões**, sob minha gestão, com **auditoria externa semanal**.
  → Aprovado por unanimidade.`,
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
    a: `I turned the crisis into a case of **extreme Customer Obsession**.

### 1. **Customer-Focused Diagnosis**

* Interviews with the 20 largest merchants revealed that **78% cited cash flow predictability** as the reason for churn.
* Only **12% mentioned fees.**
* The pain was clear: **customers did not trust our payment times**.

### 2. **Creation of the ‘Settlement Graph’**

* I developed a real-time decision model that categorized transactions by risk based on:

  * History,
  * Sales patterns,
  * Delinquency score.
* I simulated **2.1 million historical transactions**.
  → Result: **73% could be settled on the same day without a significant increase in risk**.

### 3. **Technical Redesign with a Focus on Customer Time**

* I led three squads to rewrite the reconciliation engine:

  * Eliminated **19 of the 27 legacy integrations**.
  * Implemented **distributed caching**, **asynchronous queues**, and **200 ms latency**.

### 4. **Alignment with Risk and Stakeholders**

* The risk committee resisted.
  → I presented comparisons of D+3 financial exposure vs. retention with D+0.
  → I proposed an **R$8 million guarantee fund**, under my management, with **weekly external audits**.
  → Unanimously approved.`,
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