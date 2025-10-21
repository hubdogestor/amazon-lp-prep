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
    s: "Dois meses antes da Copa Feminina de 2023, eu era responsável pelo rollout 5G da Huawei em 42 sites em quatro países. O projeto entrou em alerta máximo quando testes de campo revelaram uma perda de 23% no throughput, mostrando que as antenas passivas planejadas não suportariam os 1,3 Gbps exigidos pela FIFA em estruturas temporárias. O diretor de engenharia, apegado ao plano original, hesitava, enquanto os dados demoravam 48 horas para chegar ao comitê de decisão. A situação era crítica: uma falha durante a Fan Fest, com 140 mil torcedores, resultaria em US$ 9 milhões em multas de patrocínio.",
    t: "Meu desafio era identificar a causa raiz, provar o problema com dados irrefutáveis e redesenhar a arquitetura de rede sem quebrar o cronograma ou a confiança da engenharia e do cliente. Minhas metas eram: (1) em cinco dias, construir um 'gêmeo digital' da rede, integrando dados de RF, meteorologia e densidade de público para simular cenários de risco; (2) apresentar uma recomendação baseada em evidências ao VP regional; (3) executar o plano aprovado, mantendo o SLA de entrega e a economia prometida aos clientes.",
    a: "Minha abordagem foi transformar uma intuição técnica em uma simulação replicável e uma prova financeira. Primeiro, capturei logs de drive-tests e, usando modelos de propagação e simulações de Monte Carlo, analisei 10 mil cenários. A análise revelou que o vento lateral nas estruturas abertas reduzia o ganho da antena em 4,7 dBi. Com esse dado, criei o mecanismo 'Risk Twin' e o apresentei ao VP, afirmando: 'O plano atual falha em 67% dos cenários'. Em seguida, propus a migração de 18 sites críticos para antenas ativas com MIMO 64x64. A proposta enfrentou resistência devido ao CAPEX adicional de US$ 3,2 milhões. Para superar isso, refinei a análise com um cálculo de payback: o investimento evitaria US$ 9 milhões em multas. O VP aprovou a mudança, com a condição de mantermos o cronograma. Imediatamente, montei um squad de execução, reprogramei a logística em 48 horas, negociei com fornecedores no México para acelerar a entrega das antenas em 12 dias e implementei o 'Control Tower', um painel em tempo real para monitorar a performance da rede.",
    r: "O impacto da decisão foi total. As antenas ativas foram instaladas em 14 dias, mantendo o cronograma original. Durante a fase de grupos do evento, entregamos uma média de 1,42 Gbps, superando a meta. O NPS dos patrocinadores atingiu 86 pontos, não tivemos nenhuma quebra de SLA, e a FIFA nos enviou uma carta de reconhecimento pela 'qualidade técnica acima do contrato'. O CAPEX adicional foi compensado pela economia de US$ 1,1 milhão em multas evitadas e pela renegociação de contratos futuros.",
    l: "Aprendi que, sob pressão, 'estar certo' exige a habilidade de transformar intuição técnica em simulações financeiramente defensáveis. Quando você prova seu ponto com modelos de risco e análise de payback, consegue pivotar uma arquitetura complexa sem perder a credibilidade da engenharia ou do cliente. Transformei essa experiência em um whitepaper sobre o uso de antenas ativas em estruturas temporárias, que foi apresentado ao comitê global e agora serve como modelo para os eventos de Los Angeles 2026 e da CONMEBOL."
  },
  en: {
    s: "Two months before the 2023 Women's World Cup, I was responsible for Huawei's 5G rollout across 42 sites in four countries. The project went on high alert when field tests revealed a 23% throughput loss, showing that the planned passive antennas would not support the 1.3 Gbps required by FIFA on temporary structures. The engineering director, attached to the original plan, hesitated, while data took 48 hours to reach the decision committee. The situation was critical: a failure during the Fan Fest, with 140,000 fans, would result in US$9 million in sponsorship penalties.",
    t: "My challenge was to identify the root cause, prove the problem with irrefutable data, and redesign the network architecture without breaking the schedule or the trust of engineering and the client. My goals were: (1) in five days, build a 'digital twin' of the network, integrating RF, weather, and crowd density data to simulate risk scenarios; (2) present an evidence-based recommendation to the regional VP; (3) execute the approved plan, maintaining the delivery SLA and the savings promised to customers.",
    a: "My approach was to turn a technical intuition into a repeatable simulation and a financial proof. First, I captured drive-test logs and, using propagation models and Monte Carlo simulations, analyzed 10,000 scenarios. The analysis revealed that lateral wind on the open structures reduced antenna gain by 4.7 dBi. With this data, I created the 'Risk Twin' mechanism and presented it to the VP, stating: 'The current plan fails in 67% of the scenarios.' Next, I proposed migrating 18 critical sites to active antennas with 64x64 MIMO. The proposal faced resistance due to the additional CAPEX of US$3.2 million. To overcome this, I refined the analysis with a payback calculation: the investment would avoid US$9 million in penalties. The VP approved the change, on the condition that we kept the schedule. Immediately, I assembled an execution squad, rescheduled logistics in 48 hours, negotiated with suppliers in Mexico to accelerate antenna delivery in 12 days, and implemented the 'Control Tower,' a real-time dashboard to monitor network performance.",
    r: "The impact of the decision was absolute. The active antennas were installed in 14 days, keeping the original schedule. During the group stage of the event, we delivered an average of 1.42 Gbps, exceeding the target. The sponsors' NPS reached 86 points, we had zero SLA breaches, and FIFA sent us a letter of recognition for 'technical quality above the contract.' The additional CAPEX was offset by the US$1.1 million savings in avoided penalties and the renegotiation of future contracts.",
    l: "I learned that, under pressure, 'being right' requires the ability to turn technical intuition into financially defensible simulations. When you prove your point with risk models and payback analysis, you can pivot a complex architecture without losing the credibility of engineering or the client. I transformed this experience into a whitepaper on the use of active antennas in temporary structures, which was presented to the global committee and now serves as a model for the Los Angeles 2026 and CONMEBOL events."
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha nesse caso?",
      a: "Meu erro foi subestimar o impacto de variáveis ambientais, como o vento, em estruturas temporárias, baseando o plano inicial apenas em testes de laboratório. Essa falha de planejamento quase causou uma perda de 23% no throughput, o que teria gerado US$ 9 milhões em multas e comprometido a reputação da Huawei com a FIFA.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My mistake was underestimating the impact of environmental variables, like wind, on temporary structures, basing the initial plan only on lab tests. This planning failure almost caused a 23% throughput loss, which would have resulted in US$9 million in penalties and compromised Huawei's reputation with FIFA."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu insistiria em realizar testes de campo em condições reais desde a fase de planejamento, antes de finalizar a arquitetura. Também implementaria sensores IoT para monitoramento ambiental contínuo desde o início e estabeleceria um comitê técnico com poder de decisão rápida para evitar que dados críticos levem 48 horas para serem avaliados.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would insist on conducting field tests in real-world conditions from the planning phase, before finalizing the architecture. I would also implement IoT sensors for continuous environmental monitoring from the start and establish a technical committee with rapid decision-making power to prevent critical data from taking 48 hours to be evaluated."
    },
    {
      q: "Qual foi o obstáculo mais difícil que você enfrentou?",
      a: "O obstáculo mais difícil foi a resistência do VP regional ao CAPEX adicional de US$ 3,2 milhões, que ele via como uma ameaça ao orçamento. Superei isso mudando o foco da conversa de 'custo' para 'investimento', com uma análise de payback que mostrava que as multas evitadas pagariam o valor em 3,5 meses.",
      q_en: "What was the most difficult obstacle you faced?",
      a_en: "The most difficult obstacle was the regional VP's resistance to the additional US$3.2 million in CAPEX, which he saw as a budget threat. I overcame this by shifting the conversation from 'cost' to 'investment,' with a payback analysis showing that the avoided penalties would pay for the amount in 3.5 months."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Os principais riscos eram: (1) atraso na entrega das novas antenas, (2) complexidade logística em quatro países, e (3) resistência da equipe de engenharia à mudança. Mitiguei os riscos com: (1) negociação de entrega acelerada com fornecedores, (2) uma squad dedicada com especialistas locais, e (3) o uso de dados da simulação para provar a superioridade da nova solução.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risks were: (1) delay in the delivery of the new antennas, (2) logistical complexity across four countries, and (3) resistance from the engineering team to the change. I mitigated these risks by: (1) negotiating accelerated delivery with suppliers, (2) a dedicated squad with local experts, and (3) using simulation data to prove the superiority of the new solution."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Usei dados de drive-tests, modelos de propagação de RF e dados meteorológicos. O cálculo central foi a simulação de Monte Carlo com 10 mil cenários, que mostrou que o plano original falhava em 67% das vezes. O racional financeiro foi simples: um investimento de US$ 3,2 milhões para evitar uma perda certa de US$ 9 milhões.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "I used data from drive-tests, RF propagation models, and meteorological data. The core calculation was the Monte Carlo simulation with 10,000 scenarios, which showed that the original plan failed 67% of the time. The financial rationale was simple: a US$3.2 million investment to avoid a certain loss of US$9 million."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "Eu formalizei a metodologia do 'Risk Twin' em um whitepaper que se tornou um padrão na Huawei para eventos de grande escala. Estamos aplicando o mesmo framework para os Jogos Olímpicos de Los Angeles 2026 e eventos da CONMEBOL, o que reduziu o tempo de decisão em cenários de crise de 48 para menos de 4 horas.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "I formalized the 'Risk Twin' methodology into a whitepaper that became a standard at Huawei for large-scale events. We are applying the same framework for the Los Angeles 2026 Olympic Games and CONMEBOL events, which has reduced decision time in crisis scenarios from 48 to less than 4 hours."
    },
    {
      q: "Como você gerenciou a percepção da FIFA e dos clientes durante essa mudança de alto risco?",
      a: "Eu estabeleci uma comunicação proativa e transparente. Realizei chamadas diárias com as operadoras e com a FIFA, enviando um relatório de status que não escondia os riscos, mas que focava nas ações de mitigação e no novo plano. Isso construiu confiança e evitou que eles se sentissem informados apenas no final do processo.",
      q_en: "How did you manage the perception of FIFA and the clients during this high-risk change?",
      a_en: "I established proactive and transparent communication. I held daily calls with the carriers and FIFA, sending a status report that didn't hide the risks but focused on the mitigation actions and the new plan. This built trust and prevented them from feeling like they were only informed at the end of the process."
    },
    {
      q: "Que dados específicos alimentaram o 'gêmeo digital'?",
      a: "O modelo foi alimentado com dados de drive-tests, sensores de vento em tempo real, projeções de densidade de público fornecidas pela FIFA, inventário de antenas e a topologia da malha de fibra. A combinação desses dados permitiu uma simulação muito próxima da realidade.",
      q_en: "What specific data fed the 'digital twin'?",
      a_en: "The model was fed with data from drive-tests, real-time wind sensors, crowd density projections provided by FIFA, antenna inventory, and the fiber mesh topology. The combination of this data allowed for a simulation that was very close to reality."
    },
    {
      q: "Como você negociou com os fornecedores para acelerar a entrega?",
      a: "Eu não pedi um favor, eu propus um acordo de ganha-ganha. Ofereci a eles um contrato de volume maior para 2024 em troca de prioridade na produção e na entrega. Também estabelecemos um pequeno estoque de emergência local, o que lhes deu segurança e nos garantiu um plano B.",
      q_en: "How did you negotiate with the suppliers to accelerate the delivery?",
      a_en: "I didn't ask for a favor; I proposed a win-win deal. I offered them a larger volume contract for 2024 in exchange for priority in production and delivery. We also established a small local emergency stock, which gave them security and provided us with a plan B."
    }
  ]
};

export default case_2;
