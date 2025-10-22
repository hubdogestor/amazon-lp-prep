// Case 3 - are_right_a_lot
const case_3 = {
  id: "sicredi-api-pricing-model",
  title: "Provei com ciencia de dados que a nova precificacao API nao se pagava e redesenhei o modelo em 30 dias",
  title_pt: "Provei com ciencia de dados que a nova precificacao API nao se pagava e redesenhei o modelo em 30 dias",
  title_en: "I used data science to prove the API pricing would not pay off and redesigned the model in 30 days",
  company: "Sicredi Plataforma",
  period: "06/2020-12/2020",
  role: "Platform PM",
  keywords: "#pricing | #ciência-de-dados | #contestação | #modelo-financeiro | #pivot",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "Como PM de Plataforma no Sicredi, enfrentei uma crise quando o comitê de produtos aprovou uma precificação fixa de R$ 2,90 por chamada de API, uma decisão que minha análise preliminar mostrava que reduziria a receita em 11%. O diretor comercial, no entanto, estava convencido de que o aumento de volume compensaria a perda. A situação se tornou crítica porque a equipe de vendas já havia comunicado o novo preço a 23 parceiros, e o CFO exigia uma validação dos números em menos de uma semana. Eu estava em uma posição onde precisava contestar uma decisão já em curso.",
    t: "Meu desafio era provar matematicamente, e em poucos dias, que o modelo de preço fixo era insustentável e, em seguida, propor uma alternativa robusta que mantivesse a confiança do comitê e dos parceiros. Minhas metas eram: (1) em cinco dias, construir um modelo de elasticidade de preço que previsse o churn; (2) apresentar um plano alternativo com unit economics positivos; (3) negociar um piloto com as áreas comercial e de tecnologia que protegesse a receita e a experiência do parceiro.",
    a: "Minha abordagem foi traduzir a ciência de dados em uma linguagem financeira que fosse irrefutável para as áreas de negócio. Extraí 18 meses de logs de uso, apliquei clusterização K-means para segmentar os parceiros por volume e usei regressão logística para prever o churn em função do preço. O modelo foi claro: o novo preço causaria uma queda de 22% no volume do cluster premium, gerando uma perda de R$ 14 milhões ao ano. Com esses gráficos, fui ao diretor comercial e ao CFO e afirmei: 'Os fatos não sustentam o preço fixo. Proponho um modelo escalonado'. Criei o mecanismo 'Price Ladder', com três faixas de preço baseadas em volume, que não apenas protegia a receita, mas também reduzia o payback do CAC de 9 para 5 meses. Para garantir a execução, trabalhei com vendas em um novo playbook de comunicação e com a tecnologia para ajustar o sistema de billing em 21 dias. Por fim, apresentei o modelo a seis parceiros-chave e obtive o aceite para um piloto.",
    r: "O impacto do novo modelo foi imediato e mensurável. O piloto, realizado com parceiros que representavam 58% do volume, resultou em um aumento de 8,7% nas receitas e uma queda no churn para 0,6% (contra 2,1% no modelo antigo). O NPS da plataforma subiu de 63 para 74. Com esses resultados, o CFO aprovou o rollout completo, e o diretor comercial me convidou para usar o mesmo modelo na atualização trimestral de preços.",
    l: "Aprendi que 'estar certo' em decisões de negócio muitas vezes significa ser um tradutor eficaz entre a ciência de dados e a linguagem financeira. Quando você apresenta clusters, elasticidade e payback de forma clara, consegue convencer stakeholders a abandonar uma decisão popular, mas equivocada, sem danificar o relacionamento com parceiros. Transformei essa abordagem em um framework que usei posteriormente para precificar as APIs de Open Finance em 2024, com resultados igualmente positivos."
  },
  en: {
    s: "As a Platform PM at Sicredi, I faced a crisis when the product committee approved a flat price of BRL 2.90 per API call, a decision my preliminary analysis showed would reduce revenue by 11%. The sales director, however, was convinced that the increase in volume would offset the loss. The situation became critical because the sales team had already communicated the new price to 23 partners, and the CFO demanded a validation of the numbers in less than a week. I was in a position where I had to challenge a decision already in motion.",
    t: "My challenge was to prove mathematically, in just a few days, that the flat pricing model was unsustainable and then propose a robust alternative that would maintain the trust of the committee and the partners. My goals were: (1) in five days, build a price elasticity model that predicted churn; (2) present an alternative plan with positive unit economics; (3) negotiate a pilot with the sales and technology departments that would protect revenue and the partner experience.",
    a: "My approach was to translate data science into a financial language that would be irrefutable for the business units. I extracted 18 months of usage logs, applied K-means clustering to segment partners by volume, and used logistic regression to predict churn based on price. The model was clear: the new price would cause a 22% drop in volume from the premium cluster, generating a loss of BRL 14 million per year. With these charts, I went to the sales director and the CFO and stated: 'The facts do not support the flat price. I propose a tiered model.' I created the 'Price Ladder' mechanism, with three price tiers based on volume, which not only protected revenue but also reduced the CAC payback from 9 to 5 months. To ensure execution, I worked with sales on a new communication playbook and with technology to adjust the billing system in 21 days. Finally, I presented the model to six key partners and got their approval for a pilot.",
    r: "The impact of the new model was immediate and measurable. The pilot, conducted with partners representing 58% of the volume, resulted in an 8.7% increase in revenue and a drop in churn to 0.6% (compared to 2.1% in the old model). The platform's NPS rose from 63 to 74. With these results, the CFO approved the full rollout, and the sales director invited me to use the same model for the quarterly price update.",
    l: "I learned that 'being right' in business decisions often means being an effective translator between data science and financial language. When you present clusters, elasticity, and payback clearly, you can convince stakeholders to abandon a popular but flawed decision without damaging partner relationships. I turned this approach into a framework that I later used to price the Open Finance APIs in 2024, with equally positive results."
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha nesse caso?",
      a: "Meu erro inicial foi focar apenas no modelo de dados e subestimar o custo político de reverter uma decisão já comunicada. Isso exigiu uma semana extra de negociações com a liderança de vendas e um pedido formal de desculpas a dois parceiros-chave, o que quase atrasou o início do piloto e arranhou nossa credibilidade.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My initial mistake was focusing only on the data model and underestimating the political cost of reversing a decision that had already been communicated. This required an extra week of negotiations with sales leadership and a formal apology to two key partners, which almost delayed the pilot's start and damaged our credibility."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu modelaria o impacto financeiro e o custo de comunicação simultaneamente. Apresentaria o plano de reversão para a área comercial antes de levá-lo ao CFO, garantindo que a estratégia de comunicação com os parceiros estivesse pronta e alinhada, transformando-os em aliados, e não em um obstáculo de última hora.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would model the financial impact and the communication cost simultaneously. I would present the reversal plan to the sales department before taking it to the CFO, ensuring that the partner communication strategy was ready and aligned, turning them into allies rather than a last-minute obstacle."
    },
    {
      q: "Qual foi o obstáculo mais difícil que você enfrentou?",
      a: "O obstáculo mais difícil foi a convicção do diretor comercial, que já havia 'vendido' a ideia do preço fixo internamente e para parceiros. Superei isso não ao confrontar sua opinião, mas ao apresentar os dados como uma 'nova descoberta' que nos ajudaria a evitar um prejuízo de R$ 14 milhões, permitindo que ele liderasse a correção de curso.",
      q_en: "What was the most difficult obstacle you faced?",
      a_en: "The most difficult obstacle was the conviction of the sales director, who had already 'sold' the idea of flat pricing internally and to partners. I overcame this not by confronting his opinion, but by presenting the data as a 'new discovery' that would help us avoid a BRL 14 million loss, allowing him to lead the course correction."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Os riscos eram: (1) churn de parceiros estratégicos, (2) perda de credibilidade interna, e (3) complexidade técnica no sistema de billing. Mitiguei os riscos com: (1) um piloto controlado com parceiros-chave, (2) comunicação transparente e baseada em dados, e (3) um plano de implementação faseado com a equipe de tecnologia.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The risks were: (1) churn of strategic partners, (2) loss of internal credibility, and (3) technical complexity in the billing system. I mitigated these risks with: (1) a controlled pilot with key partners, (2) transparent and data-driven communication, and (3) a phased implementation plan with the technology team."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Usei 18 meses de logs de API para clusterizar parceiros com K-means e, em seguida, uma regressão logística para prever a probabilidade de churn com base no novo preço. O racional foi provar que a perda de receita com o churn dos parceiros de alto volume superaria em muito qualquer ganho com novos clientes de baixo volume.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "I used 18 months of API logs to cluster partners with K-means and then a logistic regression to predict the probability of churn based on the new price. The rationale was to prove that the revenue loss from the churn of high-volume partners would far outweigh any gain from new low-volume customers."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "Eu formalizei o processo de 'tradução de dados para finanças' em um framework de pricing. Usei esse framework para definir os preços das APIs de Open Finance em 2024, o que nos permitiu lançar um modelo de negócio sustentável desde o primeiro dia, evitando o mesmo tipo de erro e gerando um aumento de 28% na margem.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "I formalized the 'data-to-finance translation' process into a pricing framework. I used this framework to set the prices for the Open Finance APIs in 2024, which allowed us to launch a sustainable business model from day one, avoiding the same type of mistake and generating a 28% increase in margin."
    },
    {
      q: "Como o 'Price Ladder' equilibrou simplicidade e justiça?",
      a: "O modelo ofereceu três faixas de preço claras, o que o tornou simples para a equipe de vendas comunicar. Ao mesmo tempo, era justo, pois garantia que os parceiros de maior volume, que mais contribuíam para a nossa escala, pagassem um preço por transação menor, incentivando o crescimento e a parceria de longo prazo.",
      q_en: "How did the 'Price Ladder' balance simplicity and fairness?",
      a_en: "The model offered three clear price tiers, which made it simple for the sales team to communicate. At the same time, it was fair, as it ensured that the highest-volume partners, who contributed most to our scale, paid a lower price per transaction, encouraging growth and long-term partnership."
    },
    {
      q: "Como você validou seu modelo de regressão antes de apresentá-lo?",
      a: "Eu validei o modelo usando cross-validation (k=5) para garantir que ele não estava superajustado aos dados de treino e alcancei uma AUC de 0.83, o que indicava uma alta capacidade de predição. Apresentei esse índice de confiança ao CFO para dar credibilidade à projeção de perda de R$ 14 milhões.",
      q_en: "How did you validate your regression model before presenting it?",
      a_en: "I validated the model using cross-validation (k=5) to ensure it was not overfitted to the training data and achieved an AUC of 0.83, which indicated a high predictive capability. I presented this confidence score to the CFO to give credibility to the BRL 14 million loss projection."
    },
    {
      q: "Qual foi a reação dos parceiros-chave ao serem incluídos na decisão?",
      a: "A reação foi extremamente positiva. Ao apresentar os dados e a lógica por trás do novo modelo, eles se sentiram parceiros estratégicos, e não apenas clientes. Essa abordagem transparente foi fundamental para conseguir o aceite para o piloto em tempo recorde e fortaleceu nosso relacionamento comercial.",
      q_en: "What was the reaction of the key partners to being included in the decision?",
      a_en: "The reaction was extremely positive. By presenting the data and the logic behind the new model, they felt like strategic partners, not just customers. This transparent approach was crucial to getting their approval for the pilot in record time and strengthened our business relationship."
    }
  ]
};

export default case_3;
