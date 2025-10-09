const case_1 = {
  id: "huawei-six-sigma-optimization",
  title: "Inventei mecanismo 5G com playbook Six Sigma que reverteu multas client-facing",
  title_pt: "Inventei mecanismo 5G com playbook Six Sigma que reverteu multas client-facing",
  title_en: "Invented 5G mechanism with Six Sigma playbook that reversed client-facing penalties",
  company: "Huawei LATAM",
  period: "03/2013-09/2014",
  isTopCase: true,
  isGoodCase: true,
  pt: {
    s: `"R$ 2,7M em multas trimestrais. NPS despencou de 51 para 17. Cinco operadoras ameaçando cancelar contratos." O cenário era devastador: 214 dias para ativar um site 5G, 38 mil assinantes sem cobertura prometida e um processo com 19 handoffs que ninguém conseguia rastrear. Cada dia de atraso custava R$ 12k em penalidades e destruía a credibilidade da Huawei no mercado mais estratégico da América Latina.`,
    t: `Diante desse colapso operacional que ameaçava nossa posição no mercado, assumi ownership total do rollout 5G para cinco operadoras. Minha missão era clara: reduzir o tempo de ativação para 60 dias em 70% dos sites, eliminar as multas e recuperar a confiança dos clientes — tudo sem aumentar capex.`,
    a: `Eu inventei uma solução radical usando metodologia DMAIC. Primeiro, criei o indicador "tempo de dor do cliente" — medindo horas de indisponibilidade por assinante — que revelou que 61% dos defeitos vinham da fila offshore. Segundo, descartei completamente o pipeline de 19 handoffs e criei o playbook "One Flow": 8 marcos obrigatórios com owners únicos e SLAs cristalinos. Terceiro, codifiquei em Python o "Command Center 5G" que automatizou 14 reuniões semanais e criou alertas proativos via WhatsApp. Quando o diretor de engenharia resistiu à mudança, usei os dados para justificar o investimento de R$ 180k que trouxe QA para São Paulo, acelerando homologações em 11 dias.`,
    r: `A invenção transformou radicalmente a operação. Em seis meses, o tempo de ativação despencou de 214 para 58 dias (-73%), eliminamos 100% das multas (economia de R$ 10,8M anuais) e o NPS saltou de 17 para 56. Mais importante: desbloqueamos R$ 47M em receita antecipada para os clientes, que reduziram churn em 3,4 pontos percentuais. O Command Center virou mecanismo oficial da Huawei, replicado em oito países e sustentando rollouts até hoje.`,
    l: `Aprendi que inventar e simplificar é sobre eliminar complexidade desnecessária que prejudica o cliente final. O "tempo de dor do cliente" virou meu indicador padrão para priorizar melhorias. Hoje, em pagamentos, aplico o mesmo princípio: meço horas de indisponibilidade do lojista, elimino handoffs redundantes e construo dashboards que transformam dados complexos em decisões acionáveis para qualquer líder.`
  },
  en: {
    s: `"R$2.7M in quarterly penalties. NPS crashed from 51 to 17. Five carriers threatening contract cancellations." The scenario was devastating: 214 days to activate a 5G site, 38,000 subscribers without promised coverage, and a process with 19 handoffs that nobody could track. Each day of delay cost R$12k in penalties and destroyed Huawei's credibility in Latin America's most strategic market.`,
    t: `Faced with this operational collapse threatening our market position, I took total ownership of the 5G rollout for five carriers. My mission was clear: reduce activation time to 60 days for 70% of sites, eliminate penalties, and recover client trust — all without increasing capex.`,
    a: `I invented a radical solution using DMAIC methodology. First, I created the "customer pain time" indicator — measuring unavailability hours per subscriber — which revealed that 61% of defects came from the offshore queue. Second, I completely discarded the 19-handoff pipeline and created the "One Flow" playbook: 8 mandatory gates with single owners and crystal-clear SLAs. Third, I coded the "5G Command Center" in Python that automated 14 weekly meetings and created proactive WhatsApp alerts. When the engineering director resisted the change, I used data to justify the R$180k investment that brought QA to São Paulo, accelerating certifications by 11 days.`,
    r: `The invention radically transformed the operation. In six months, activation time plummeted from 214 to 58 days (-73%), we eliminated 100% of penalties (R$10.8M annual savings), and NPS jumped from 17 to 56. More importantly: we unlocked R$47M in accelerated revenue for clients, who reduced churn by 3.4 percentage points. The Command Center became Huawei's official mechanism, replicated in eight countries and sustaining rollouts to this day.`,
    l: `I learned that inventing and simplifying is about eliminating unnecessary complexity that hurts the end customer. "Customer pain time" became my standard indicator for prioritizing improvements. Today, in payments, I apply the same principle: I measure merchant unavailability hours, eliminate redundant handoffs, and build dashboards that turn complex data into actionable decisions for any leader.`
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
