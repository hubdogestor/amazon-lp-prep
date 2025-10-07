// Case 3 - customer_obsession
const case_3 = {
  id: "sicredi-frictionless-checkout",
  title: "Redesenhei o Checkout do Gateway e Cortei Abandono de Carrinho em 25 Pontos",
  title_pt: "Redesenhei o Checkout do Gateway e Cortei Abandono de Carrinho em 25 Pontos",
  title_en: "Redesigned Our Gateway Checkout and Cut Cart Abandonment by 25 Points",
  company: "Sicredi",
  period: "03/2020-11/2020",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `No início de 2020, o nosso gateway B2B2C tinha SLA impecável, mas lojistas reclamavam de TAXA e "lentidão". Mantendo working backwards, eu descobri que a dor real não era preço—era experiência: abandono de carrinho 70% (benchmark 45%), tempo médio de checkout 4m30s, NPS pós-transação 31. O cliente final não reclamava da taxa de 2,9%, mas dos 7 campos obrigatórios que travavam o fluxo. Em plena pandemia, três grandes varejistas ameaçavam migrar para PagSeguro e Mercado Pago se não consertássemos a experiência do consumidor final—mas eles expressavam isso como "cobram menos". Eu precisava antecipar a necessidade real, que eles nem sabiam verbalizar.` ,
    t: `Me declarei owner da jornada do consumidor. Prometi ao COO reduzir abandono para <=45%, derrubar o tempo de checkout para <=2m15s e aumentar NPS para >=55 em 6 meses sem elevar chargeback. Apliquei working backwards: comecei do "checkout completo" e trabalhei para trás, descobrindo cada passo que não agregava valor ao cliente final. Também garanti que toda decisão seria validada com clientes reais antes de bater martelo—mesmo quando conflitasse com métricas internas de upsell de features adicionais.` ,
    a: `Ataquei em quatro frentes, sempre priorizando a voz do cliente final:
    (1) Insight direto do consumidor + working backwards: estruturei 30 sessões moderadas, 25M eventos de analytics e entrevistas com 50 clientes finais e 15 lojistas top. Descobri que 67% do abandono acontecia em validações de cadastro que não agregavam valor—mas os lojistas reclamavam de "taxa alta". Trabalhei backwards: comecei do estado ideal ("compra concluída") e removi cada passo que não protegia contra fraude ou compliance. De 12 campos obrigatórios, reduzi para 5.
    (2) Trade-off customer vs métricas internas: a área de produto queria adicionar 3 features de upsell (seguro, cashback, parcelamento com juros) no checkout para aumentar conversão interna. Eu escolhi priorizar experiência e empurrei essas features para pós-compra, mesmo sabendo que perderia 8% de conversão de upsell a curto prazo. Priorizei NPS sobre revenue interno.
    (3) Piloto controlado com recursos limitados: selecionei três parceiros (moda, eletrônicos, marketplace) representando 38% do volume. Conduzi diagnóstico em uma semana e publiquei experimento A/B com autofill inteligente, checkout em uma única página e validação de risco silenciosa. Com orçamento limitado, priorizei 3 das 12 melhorias propostas—aquelas que impactavam diretamente o cliente final, não as que eram mais fáceis de implementar.
    (4) Governança com risco e compliance: criei squad dedicado com engenharia e prevenção a fraude, defini SLA de 2h para ajustes e monitorei chargeback diário. Mantivemos chargeback em 0,11% (benchmark 0,12%).
    (5) Feedback loop contínuo: instalei NPS transacional pós-compra, heatmaps, session recording e comitê mensal com lojistas compartilhando métricas de conversão. Qualquer queda de NPS ou aumento de abandono gerava plano em 24h.
    Além disso produzi relatórios quinzenais com recomendações e deixei claro que nenhuma feature ia a produção sem evidência de impacto no consumidor final.` ,
    r: `Em 5 meses o abandono de carrinho caiu de 70% para 45% (-25 p.p.), tempo médio de checkout 4m30s -> 2m08s (-52%), NPS pós-transação 31 -> 58 (+27), MAU dos lojistas +35%, e 8,6 milhões de transações foram processadas sem incidente durante a Black Friday. Chargeback ficou estável em 0,11% e trazemos 15 novos grandes varejistas no trimestre seguinte. Receita do gateway cresceu 43% ano contra ano com contribuição direta do novo fluxo.` ,
    l: `Aprendi que em B2B2C, obsessão pelo cliente significa defender o usuário final mesmo quando o contrato é com o lojista—e que clientes nem sempre sabem expressar a dor real (reclamavam de "taxa alta" quando a dor era "7 campos obrigatórios"). Working backwards revelou o que métricas de reclamação escondiam: precisei começar do estado ideal e trabalhar para trás, removendo fricções invisíveis. Hoje nunca aprovo backlog sem métrica de cliente final (abandono, tempo de checkout, NPS), e sempre priorizo experiência sobre conversão de upsell interno quando há trade-off. O foco no consumidor final virou requisito em todos os business cases do gateway. Aprendi também que com recursos limitados, devo priorizar as melhorias que impactam o cliente, não as que são mais fáceis de implementar.`
  },
  en: {
    s: `Early 2020 our B2B2C gateway had perfect SLAs, yet merchants claimed they were losing revenue because of "FEES" and "slowness." Working backwards, I discovered the real pain wasn't price—it was experience: cart abandonment 70% (benchmark 45%), checkout time 4m30s, post-transaction NPS 31. End-consumers weren't complaining about the 2.9% rate but about the 7 mandatory fields that blocked the flow. In the middle of the pandemic three major retailers threatened to move to PagSeguro/Mercado Pago unless we fixed end-consumer experience—but they expressed it as "they charge less." I needed to anticipate the real need they couldn't verbalize.` ,
    t: `I declared myself owner of the consumer journey. I promised the COO I would bring abandonment to <=45%, cut checkout time to <=2m15s, and raise NPS to >=55 within six months without increasing chargebacks. I applied working backwards: I started from "checkout complete" and worked backward, discovering every step that didn't add value to the end-customer. I also guaranteed every decision would be validated with real customers before sign-off—even when it conflicted with internal upsell metrics.` ,
    a: `Four execution fronts, always prioritizing end-customer voice:
    (1) Direct consumer insight + working backwards: I ran 30 moderated sessions, mined 25M analytics events, interviewed 50 end-consumers and 15 top merchants. Sixty-seven percent of abandonment happened in redundant verification fields—yet merchants complained about "high fees." I worked backwards: started from the ideal state ("purchase complete") and removed every step that didn't protect against fraud or compliance. From 12 mandatory fields, I reduced to 5.
    (2) Trade-off customer vs internal metrics: product team wanted to add 3 upsell features (insurance, cashback, installment with interest) in checkout to boost internal conversion. I chose to prioritize experience and pushed those features to post-purchase, even knowing I'd lose 8% upsell conversion short-term. I prioritized NPS over internal revenue.
    (3) Controlled pilot with limited resources: I chose fashion, electronics, and marketplace partners (38% of volume). In one week I ran diagnostics and launched an A/B test with smart autofill, one-page checkout, and silent risk validation. With limited budget, I prioritized 3 of 12 proposed improvements—those that directly impacted the end-customer, not those that were easier to implement.
    (4) Governance with risk/compliance: I formed a dedicated squad with engineering and fraud prevention, set a two-hour SLA for adjustments, and monitored daily chargebacks. We held chargebacks at 0.11% (benchmark 0.12%).
    (5) Continuous loops: I deployed post-transaction NPS, heatmaps, session recordings, and a monthly committee with merchants sharing conversion metrics. Any drop in NPS or rise in abandonment triggered a 24-hour action plan.
    I delivered biweekly reports with recommendations and required customer-impact evidence before shipping any feature.` ,
    r: `Five months later cart abandonment fell from 70% to 45% (-25 p.p.), checkout time from 4m30s to 2m08s (-52%), post-transaction NPS from 31 to 58 (+27), MAU grew 35%, and we processed 8.6M contactless transactions without incidents on Black Friday. Chargebacks stayed at 0.11% and we won 15 enterprise merchants the following quarter. Gateway revenue grew 43% year over year directly attributed to the new flow.` ,
    l: `I learned that in B2B2C, customer obsession means defending the end consumer even when the contract is with the merchant—and that customers don't always know how to express the real pain (they complained about "high fees" when the pain was "7 mandatory fields"). Working backwards revealed what complaint metrics hid: I had to start from the ideal state and work back, removing invisible frictions. I now refuse backlog items without end-user metrics (abandonment, task time, NPS), and I always prioritize experience over internal upsell conversion when there's a trade-off. That focus is a non-negotiable requirement in every gateway business case. I also learned that with limited resources, I must prioritize improvements that impact the customer, not those that are easier to implement.`
  },
  fups: [
    {
      "q": "Como você provou que 67% do abandono vinha de validações redundantes?",
      "a": "Cruzei 25M de eventos com 320 entrevistas; 92% desistiam antes de concluir endereço. Documentei com vídeo e analytics para os squads.",
      "q_en": "How did you prove 67% of abandonment came from redundant validations?",
      "a_en": "I combined 25M analytics events with 320 interviews; 92% quit before finishing the address. I documented it with video and analytics for the squads." 
    },
    {
      "q": "Por que escolheu moda, eletrônicos e marketplace no piloto?",
      "a": "Representavam comportamentos diferentes (valor baixo, alto e recorrência). Cobriram 38% do volume e deram dados confiáveis em 3 semanas.",
      "q_en": "Why did you pick fashion, electronics, and marketplace for the pilot?",
      "a_en": "They represent different behaviors-low value, high value, and recurrence-covering 38% of volume and yielding solid data in three weeks." 
    },
    {
      "q": "Quais métricas monitorou diariamente no piloto?",
      "a": "Abandono, tempo de checkout, NPS transacional, chargeback, fraude e ticket médio. Compartilhei painel diário com risco, engenharia e parceiros.",
      "q_en": "Which metrics did you monitor daily during the pilot?",
      "a_en": "Abandonment, checkout time, transactional NPS, chargeback, fraud, and average ticket. I shared a daily dashboard with risk, engineering, and merchants." 
    },
    {
      "q": "Como garantiu que a validação silenciosa não aumentaria chargeback?",
      "a": "Criei score paralelo com 200 variáveis e SLA de 2h para revisão manual. Chargeback ficou em 0,11% (benchmark 0,12%).",
      "q_en": "How did you ensure silent validation wouldn't boost chargebacks?",
      "a_en": "I built a 200-variable shadow score with a two-hour manual SLA. Chargebacks stayed at 0.11% versus the 0.12% benchmark." 
    },
    {
      "q": "Como calculou o impacto financeiro do redesign?",
      "a": "Projetei uplift de conversão por segmento x ticket médio x margem. No piloto, o ganho representou R$ 18M/ano de GMV adicional.",
      "q_en": "How did you quantify the redesign's financial impact?",
      "a_en": "I modeled conversion uplift per segment times average ticket times margin. The pilot alone produced R$18M/year in incremental GMV." 
    },
    {
      "q": "Qual o maior conflito com engenharia e como resolveu?",
      "a": "Eles queriam manter 12 campos obrigatórios. Levei gravações de clientes, simulação de risco e garanti rollback em 2h. Fechamos com 5 campos.",
      "q_en": "What was the biggest conflict with engineering and how did you solve it?",
      "a_en": "They wanted 12 mandatory fields. I brought customer recordings, risk simulations, and guaranteed a two-hour rollback. We agreed on five fields." 
    },
    {
      "q": "Como manteve os lojistas engajados após o lançamento?",
      "a": "Montei comitê mensal com conversão, NPS e plano de melhorias; entreguei relatório customizado por loja e mantive canal aberto de sugestões.",
      "q_en": "How did you keep merchants engaged after launch?",
      "a_en": "I set up a monthly committee with conversion, NPS, and improvement plans; delivered customized reports per merchant and kept an open suggestion channel." 
    },
    {
      "q": "Que instrumentos usou para detecção contínua de fricção?",
      "a": "Heatmaps, recordings, NPS pós-transação e monitoramento de cliques por passo. Insights alimentavam backlog quinzenal.",
      "q_en": "Which tools did you use for ongoing friction detection?",
      "a_en": "Heatmaps, session recordings, post-transaction NPS, and click tracking per step. Insights fed the biweekly backlog." 
    },
    {
      "q": "Como evitou regressão de experiência em novas releases?",
      "a": "Automatizei smoke tests de UX, mantive feature flags e só desbloqueei 100% após monitorar métricas 48h sem queda.",
      "q_en": "How did you prevent experience regression in future releases?",
      "a_en": "I automated UX smoke tests, kept feature flags, and only opened 100% after 48 hours of stable metrics." 
    },
    {
      "q": "Que lição levou para outros produtos do Sicredi?",
      "a": "Incluí métricas do cliente final nos business cases de crédito e adquirência. Nos três primeiros meses já vimos +12 pontos de NPS.",
      "q_en": "What lesson did you take to other Sicredi products?",
      "a_en": "I added end-customer metrics to credit and acquiring business cases. Within three months we saw +12 NPS points." 
    }
  ]
};

export default case_3;
