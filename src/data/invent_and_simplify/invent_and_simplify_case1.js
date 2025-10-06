// Case 1 - invent_and_simplify
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
    s: `Quando assumi o rollout 5G para cinco operadoras regionais, o SLA medio estava em 214 dias e 38 mil assinantes reclamavam de atrasos nas ativacoes piloto. Os executivos clientes ameacaram aplicar penalidades de R$ 2,7M por trimestre e suspender 62 sites. O NPS tecnico caiu de 51 para 17 em duas ondas seguidas, e os prefeitos de quatro capitais condicionaram licencas a entregas em 90 dias. Eu passei as primeiras 72 horas dentro do war room ouvindo call center e analisando 11.420 tickets de campo para entender a dor real do cliente final.`,
    t: `Eu fui o owner unico e tracei a meta de reduzir o SLA para 60 dias em 70% dos sites ate Q3/22, sem aumentar o capex. Eu tambem assumi o compromisso personalizado com cada CTO cliente: publicar status diarios compartilhando onde eu, pessoalmente, destravaria licencas e integracoes.`,
    a: `Eu reescrevi o processo inteiro em quatro ciclos DMAIC adaptados. Primeiro, defini um indicador de "tempo de dor do cliente" que media horas sem sinal 5G por cluster e levou a 12 entrevistas com os dez maiores varejistas que perderam vendas. Segundo, descartei o pipeline padrao da Huawei porque escondia 19 transferencias de responsabilidade; em vez disso, criei o playbook "One Flow" com 8 marcos obrigatorios e checklist de 42 itens assinados digitalmente por mim e pelo cliente. Terceiro, criei o Command Center 5G integrando PMO, licenciamento municipal e dados de drive-test em um dashboard que eu codifiquei em Python para recalcular lead time a cada 30 minutos; isso eliminou 14 reunioes semanais. A execucao gerou conflito: o diretor de engenharia queria manter validacao offshore, mas eu provei com dados que 61% dos defeitos vinham dessa fila, entao trouxe QA para Sao Paulo e assumi o custo de R$ 180k para acelerar homologacoes em 11 dias. Tambem revisei contratos com os dois fornecedores mais lentos, inserindo uma clausula de bonus-malus ligada ao novo SLA e participei pessoalmente das renegociacoes, mesmo com resistencia juridica.`,
    r: `Em seis meses entreguei 92 sites com SLA medio de 58 dias (reducao de 73%) e zerei as multas projetadas. O tempo de dor do cliente caiu 81%, o NPS tecnico voltou para 56 e o churn corporativo das cinco operadoras recuou 3,4 p.p. A receita recorrente das antenas ativadas acelerou R$ 47M em 2022 e as cidades liberaram 27 novas licencas com 0 pendencias ambientais. O Command Center virou mecanismo oficial, replicado em oito paises e com 87% de adesao diaria dos times externos.`,
    l: `Aprendi que inventar significa redesenhar mecanismos que mantem a simplicidade viva mesmo quando o contexto volta a ficar caotico. O playbook "One Flow" virou meu template sempre que preciso conectar compliance, engenharia e voz do cliente. Em pagamentos, aplico esse padrao para reconciliacoes 24h: medir a dor real do lojista, eliminar maestras redundantes e construir dashboards que qualquer CFO possa auditar em cinco minutos.`,
  },
  en: {
    s: `When I took over the 5G rollout for five regional carriers, the average SLA sat at 214 days and 38 thousand subscribers were complaining about delayed pilot activations. Client executives threatened R$ 2.7M per quarter in penalties and a suspension of 62 sites. Technical NPS fell from 51 to 17 in two consecutive waves, and mayors in four capitals conditioned permits on deliveries within 90 days. I spent the first 72 hours inside the war room listening to call center recordings and analyzing 11,420 field tickets to grasp the end-customer pain.`,
    t: `I acted as the single-threaded owner and set the goal to cut SLA to 60 days on 70% of sites by Q3/22 without increasing capex. I also made a personalized commitment with each client CTO: publish daily status updates showing where I, personally, would unblock permits and integrations.`,
    a: `I rewrote the entire process in four adapted DMAIC cycles. First, I defined a "customer pain time" indicator that measured hours without 5G coverage per cluster and led to 12 interviews with the ten largest retailers losing sales. Second, I discarded Huawei's standard pipeline because it hid 19 responsibility handoffs; instead, I created the "One Flow" playbook with 8 mandatory gates and a 42-item checklist signed digitally by me and the client. Third, I built the 5G Command Center integrating PMO, municipal permitting, and drive-test data into a dashboard I coded in Python to recalculate lead time every 30 minutes; that eliminated 14 weekly meetings. Execution triggered conflict: the engineering director wanted to keep offshore validation, but I proved with data that 61% of defects came from that queue, so I pulled QA to Sao Paulo and absorbed a R$ 180k cost to accelerate homologations by 11 days. I also rewrote contracts with the two slowest vendors, inserting a bonus-malus clause tied to the new SLA and personally led renegotiations despite legal pushback.`,
    r: `Within six months I delivered 92 sites with a 58-day average SLA (73% reduction) and erased projected penalties. Customer pain time dropped 81%, technical NPS rebounded to 56, and corporate churn for the five carriers shrank 3.4 p.p. Recurring revenue from activated antennas accelerated R$ 47M in 2022 and cities released 27 new permits with zero environmental holds. The Command Center became an official mechanism, replicated in eight countries with 87% daily adoption by external teams.`,
    l: `I learned that inventing means redesigning mechanisms that keep simplicity alive even when the context turns chaotic again. The "One Flow" playbook became my template whenever I must connect compliance, engineering, and customer voice. In payments I apply this pattern to 24-hour reconciliations: measure the merchant pain, eliminate redundant masters, and build dashboards any CFO can audit in five minutes.`,
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
