const case_1 = {
  id: "huawei-six-sigma-optimization",
  title: "Inventei mecanismo 5G com playbook Six Sigma que reverteu multas client-facing",
  title_pt: "Inventei mecanismo 5G com playbook Six Sigma que reverteu multas client-facing",
  title_en: "Invented 5G mechanism with Six Sigma playbook that reversed client-facing penalties",
  company: "Huawei LATAM",
  period: "03/2013-09/2014",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `Com R$ 2,7M em multas trimestrais e um colapso no NPS de 51 para 17, assumi o rollout 5G para cinco operadoras. O Process Cycle Time médio de ativação era de 214 dias, um gargalo que quebrava a experiência de 38 mil assinantes e freava o flywheel de crescimento dos meus clientes. A crise ameaçava a expansão da seleção de serviços 5G, impactando diretamente o tráfego e a satisfação do cliente final.`,
    t: `Fui o owner único com a missão de transformar o caos em uma decisão de negócio acionável. A meta era reduzir o Process Cycle Time para 60 dias em 70% dos sites, sem aumentar o capex, e eliminar o custo operacional das multas. Meu compromisso era ser a ponte entre os dados operacionais e a liderança dos clientes, provendo transparência total.`,
    a: `Eu inventei um novo processo usando DMAIC. Para ser a ponte entre dados e negócio, criei o indicador de \"tempo de dor do cliente\" e descartei o pipeline padrão que escondia 19 handoffs. No lugar, criei o playbook \"One Flow\", um mecanismo simples com 8 marcos obrigatórios que reduziu a complexidade. Para automação, codifiquei em Python o Command Center 5G, que eliminou 14 reuniões semanais e reduziu o tempo de ciclo. Quando o diretor de engenharia resistiu a mudanças, usei meu julgamento e os dados (61% dos defeitos vinham da fila offshore) para justificar o investimento de R$ 180k que acelerou as homologações em 11 dias, uma decisão de negócio clara para destravar o resultado.`,
    r: `Minha invenção simplificou radicalmente a operação. Em seis meses, o Process Cycle Time caiu para 58 dias (redução de 73%), o Automation Rate do monitoramento atingiu 87% e o Operational Cost per Transaction foi drasticamente reduzido ao zerarmos as multas. O Customer Satisfaction (NPS) recuperou de 17 para 56. Isso reativou o flywheel dos clientes: a melhor experiência reduziu o churn em 3,4 p.p., o que aumentou o tráfego e acelerou a receita em R$ 47M. O Command Center virou um mecanismo oficial, replicado em oito países.`,
    l: `Aprendi que inventar e simplificar é sobre criar mecanismos que melhoram a experiência do cliente e giram o flywheel de crescimento. O playbook \"One Flow\" virou meu template para ser a ponte entre compliance, engenharia e a voz do cliente. Hoje, em pagamentos, aplico o mesmo princípio para otimizar o Payment Success Rate (PSR): meço a dor do lojista, elimino etapas redundantes e construo dashboards que transformam dados complexos em decisões de negócio acionáveis para qualquer líder.`
  },
  en: {
    s: `With R$2.7M in quarterly penalties and an NPS collapse from 51 to 17, I took over a 5G rollout for five carriers. The average Process Cycle Time for activation was 214 days, a bottleneck that shattered the experience for 38,000 subscribers and stalled my clients' growth flywheel. The crisis threatened the expansion of the 5G service selection, directly impacting traffic and end-customer satisfaction.`,
    t: `I was the single-threaded owner with a mission to turn chaos into an actionable business decision. The goal was to reduce the Process Cycle Time to 60 days for 70% of the sites, without increasing capex, and to eliminate the operational cost of penalties. My commitment was to be the bridge between operational data and the clients' leadership, providing full transparency.`,
    a: `I invented a new process using DMAIC. To be the bridge between data and business, I created a \"customer pain time\" indicator and discarded the standard pipeline that hid 19 handoffs. Instead, I created the \"One Flow\" playbook, a simple mechanism with 8 mandatory gates that reduced complexity. For automation, I coded the 5G Command Center in Python, which eliminated 14 weekly meetings and reduced cycle time. When the engineering director resisted changes, I used my judgment and data (61% of defects came from the offshore queue) to justify the R$180k investment that accelerated approvals by 11 days, a clear business decision to unlock the result.`,
    r: `My invention radically simplified the operation. In six months, the Process Cycle Time dropped to 58 days (a 73% reduction), the monitoring Automation Rate reached 87%, and the Operational Cost per Transaction was drastically reduced by eliminating the penalties. Customer Satisfaction (NPS) recovered from 17 to 56. This reignited the clients' flywheel: the better experience reduced churn by 3.4 p.p., which increased traffic and accelerated revenue by R$47M. The Command Center became an official mechanism, replicated in eight countries.`,
    l: `I learned that to invent and simplify is to create mechanisms that improve the customer experience and spin the growth flywheel. The \"One Flow\" playbook became my template to be the bridge between compliance, engineering, and the customer's voice. Today, in payments, I apply the same principle to optimize the Payment Success Rate (PSR): I measure merchant pain, eliminate redundant steps, and build dashboards that turn complex data into actionable business decisions for any leader.`
  },
  fups: [
    {
      q: "Como voce priorizou os cinco carriers quando todos estavam em crise?",
      a: "Eu usei o indicador de horas de dor do cliente para rankear clusters; foquei nas duas operadoras com maior penalidade acumulada (R$ 1,5M) e programei tres sprints dedicados a elas antes de expandir.",
      q_en: "How did you prioritize the five carriers when everyone felt urgent?",
      a_en: "I ranked clusters by customer pain hours, focused on the two carriers with the largest accrued penalties (R$ 1.5M), and scheduled three dedicated sprints for them before expanding."
    },
    {
      q: "Qual foi a maior resistencia interna e como voce venceu?",
      a: "O diretor de engenharia bloqueou a migracao do QA; eu levei logs mostrando 61% dos defeitos vindos da fila offshore e negociei com RH um pacote de retencao para os 8 especialistas que aceitei mover para Sao Paulo.",
      q_en: "What was the hardest internal pushback and how did you break it?",
      a_en: "The engineering director blocked the QA switch; I showed logs proving 61% of defects originated offshore and negotiated a retention package with HR for the eight specialists I moved to Sao Paulo."
    },
    {
      q: "Como voce garantiu que o Command Center nao virasse mais uma ferramenta ignorada?",
      a: "Eu anexei o uso diario ao bonus dos gerentes de implantacao, criei alertas via WhatsApp com tres indicadores chave e facilitei uma rotina de 15 minutos onde eu pessoalmente revisava excecoes com cada cliente.",
      q_en: "How did you ensure the Command Center would not become shelfware?",
      a_en: "I tied daily usage to rollout managers' bonuses, pushed WhatsApp alerts with three key indicators, and ran a 15-minute ritual where I personally reviewed exceptions with each client."
    },
    {
      q: "Que tipo de dado voce considerou para provar o retorno financeiro?",
      a: "Eu consolidei no PowerBI a previsao de receita por antena, o ganho de ARPU e a reducao de churn observada nos primeiros 45 dias; o CFO do cliente validou os R$ 47M antecipados em conjunto comigo.",
      q_en: "What data did you use to prove the financial upside?",
      a_en: "I consolidated antenna revenue forecasts, ARPU uplift, and churn reduction observed in the first 45 days; the client's CFO validated the R$ 47M pull-forward with me."
    },
    {
      q: "Como voce tratou o risco regulatorio com as prefeituras?",
      a: "Eu criei um pacote unico de licenca, apresentei pessoalmente aos quatro prefeitos e disponibilizei um painel publico com andamento por site, reduzindo consultas duplicadas em 72%.",
      q_en: "How did you address regulatory risk with the city halls?",
      a_en: "I built a single licensing bundle, presented it personally to the four mayors, and published a public dashboard per site, cutting duplicate inquiries by 72%."
    },
    {
      q: "Qual mecanismo voce deixou para sustentar o SLA apos sua saida?",
      a: "Eu documentei o playbook One Flow, treinei 43 lideres de campo e instalei auditorias quinzenais automatizadas com triggers que avisam o VP sempre que o SLA passa de 70 dias.",
      q_en: "What mechanism did you leave to keep the SLA after you moved on?",
      a_en: "I documented the One Flow playbook, trained 43 field leaders, and deployed bi-weekly automated audits that ping the VP whenever SLA exceeds 70 days."
    },
    {
      q: "Como voce mediu a satisfacao do cliente final e nao apenas da operadora?",
      a: "Eu conectei o Command Center ao CRM B2C dos carriers e monitorei reconexoes em 48 horas, alem de realizar entrevistas com 40 assinantes prioritarios identificados pelo churn score.",
      q_en: "How did you measure end-customer satisfaction and not just the carrier's view?",
      a_en: "I linked the Command Center to the carriers' B2C CRM, tracked reactivations within 48 hours, and interviewed 40 priority subscribers flagged by churn score."
    },
    {
      q: "Que trade-off financeiro voce precisou fazer para acelerar homologacoes?",
      a: "Eu realoquei R$ 180k do orcamento de viagens para cobrir o QA local, cortei 22 deslocamentos internacionais e reduzi em 18% o gasto com diarias.",
      q_en: "What financial trade-off did you take to accelerate certifications?",
      a_en: "I reallocated R$ 180k from the travel budget to fund local QA, cut 22 international trips, and reduced per-diem spend by 18%."
    },
    {
      q: "Como voce garantiu ratio EU:NOS saudavel no time?",
      a: "Eu mantive ownership explicito: todas as decisoes criticas eram aprovadas por mim e registradas no Command Center, deixando claro onde eu intervinha em vez de diluir em comites.",
      q_en: "How did you keep a healthy I:we ratio inside the team?",
      a_en: "I kept explicit ownership: every critical decision was approved by me and logged in the Command Center, making it clear where I intervened instead of hiding behind committees."
    },
    {
      q: "Que aprendizado voce exportou imediatamente para pagamentos?",
      a: "Eu reuso o indicador de tempo de dor para medir horas com falha de conciliacao em adquirentes, priorizando squads que reduzem impacto direto no lojista.",
      q_en: "What learning did you export straight into payments?",
      a_en: "I reuse the customer pain-time indicator to measure reconciliation outage hours in acquirers, prioritizing squads that reduce direct merchant impact."
    }
  ]
};

export default case_1;