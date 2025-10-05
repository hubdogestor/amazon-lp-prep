// Case 3 - ownership
const case_3 = {
  id: "bradesco-international-payments",
  title: "Forca-Tarefa de Pagamentos Internacionais para Cortar Custos e Recuperar SLAs",
  title_pt: "Forca-Tarefa de Pagamentos Internacionais para Cortar Custos e Recuperar SLAs",
  title_en: "International Payments Task Force to Cut Costs and Recover SLAs",
  company: "Bradesco",
  period: "01/2017-06/2017",
  isTopCase: false,
  pt: {
    s: `Eu auditava o relatorio mensal de pagamentos internacionais quando vi o alerta vermelho: o custo medio por transacao subiu de R$ 47 para R$ 54 (+15%) em seis meses, adicionando R$ 364k por mes ao P&L (R$ 4,3M anualizados). O SLA explodiu de 2h50 para 4h10 e o NPS premium caiu de 66 para 48; tres dos meus 20 maiores clientes ameaçaram migrar. Quando confrontei Operacoes, Compliance, TI e Comercial, ouvi "isso nao e nosso problema". O CFO cravou 90 dias para recuperar custo e SLA ou cortaria headcount.`,
    t: `Mesmo com mandato formal restrito a transformacao digital, eu declarei que assumiria ownership ponta a ponta. Na frente do comite eu prometi cortar ao menos 12% do custo medio, trazer o SLA para menos de 3h e recolocar o NPS acima de 65 dentro de 90 dias. Pedi sete dias para apresentar o plano e garanti entregas tangiveis em 30, sem budget extra.`,
    a: `No dia seguinte eu formei uma forca-tarefa com sete pessoas (Operacoes, Compliance, TI, Comercial, Procurement) com charter simples: daily de 30 minutos, decisoes por metrica e eu como single-threaded owner. (1) Eu construí um business case de tres cenarios cruzando custo incremental, churn de clientes priority (R$ 1,2M/ano) e multas potenciais do Bacen (ate 0,5% dos ativos) para ganhar o CFO. (2) Eu extraí 160k transacoes dos ultimos 90 dias, normalizei em Python e mostrei que 68% do custo vinha de reconciliacao manual e tabela antiquada de correspondentes. (3) Eu redesenhei o fluxo com filas medidas, implantei RPA conciliando SWIFT MT103 vs ledger e criei um score de risco que escalona tickets acima de R$ 200k para revisao manual. (4) Eu negociei com dois bancos correspondentes contratos baseados em volume com reducao media de 18 bps, condicionados a piloto de 30 dias com auditoria semanal. (5) Quando o diretor de Compliance travou o rollout, eu voei a Brasilia, apresentei os controles ao Bacen, ajustei segregacao de funcoes e sai com carta de nao oposicao em 48h. (6) Para recuperar clientes, eu liguei pessoalmente para os 30 maiores premium, abri canal 24/7 e publiquei dashboard no Grafana com 12 indicadores (SLA por pais, custo por corredor, backlog, MTTD, risco de churn).`,
    r: `Em 74 dias eu atingi as metas: custo medio caiu de R$ 54 para R$ 46,4 (-14%), SLA voltou para 2h32, backlog diario despencou de 1.120 para 160 transacoes (-86%) e o NPS premium subiu de 48 para 74. Evitei perda anual de R$ 4,8M e zerei pedidos de cancelamento dos clientes priority. O CFO institucionalizou o ritual como template corporativo e meu dashboard virou fonte oficial em comites.`,
    l: `Eu aprendi que ownership real e ocupar o vazio entre silos antes que ele destrua valor. Transformar conflito em dado irrefutavel, negociar trade-offs com impacto financeiro e deixar mecanismos permanentes (RPA, score de risco, dashboard) garante que o problema nao volte. Esse virou meu playbook para crises de pagamentos.`,
  },
  en: {
    s: `I was auditing the international payments monthly report when the red flag popped: average cost per transaction climbed from R$47 to R$54 (+15%) in six months, adding R$364K per month (R$4.3M annualized). SLA ballooned from 2h50 to 4h10 and premium NPS crashed from 66 to 48; three of my top 20 clients threatened to leave. When I confronted Operations, Compliance, IT, and Commercial I heard "not my problem". The CFO gave me 90 days to recover cost and SLA or he would cut headcount.`,
    t: `Although my formal remit was digital transformation, I said I would own the end-to-end exposure. In front of the steering committee I committed to slash at least 12% of unit cost, bring SLA back under three hours, and lift NPS above 65 within 90 days. I asked for seven days to present the plan and promised tangible results in 30 with zero extra budget.`,
    a: `The next morning I assembled a seven-person task force across Ops, Compliance, IT, Commercial, and Procurement with a tight charter: 30-minute daily standups, metric-driven decisions, and me as the single-threaded owner. (1) I built a three-scenario business case covering incremental cost, premium-client churn risk (R$1.2M/year), and potential BACEN fines (up to 0.5% of assets) to secure the CFO's backing. (2) I pulled 160K transactions from the last 90 days, normalized them in Python, and proved 68% of cost came from manual reconciliation and outdated correspondent pricing. (3) I redesigned the workflow with queue metrics, deployed an RPA to reconcile SWIFT MT103 vs ledger, and implemented a risk score that escalated tickets above R$200K for manual review. (4) I negotiated volume-based contracts with two correspondent banks, locking an average 18 bps reduction tied to a 30-day pilot with weekly audits. (5) When the compliance director froze the rollout, I flew to Brasilia, walked BACEN through the controls, tightened segregation of duties, and secured the no-objection letter within 48 hours. (6) To retain clients I personally called the top 30, opened a 24/7 dedicated channel, and published a Grafana dashboard with 12 metrics (SLA by country, cost per corridor, backlog, MTTD, churn risk).`,
    r: `Within 74 days I hit the targets: average cost dropped from R$54 to R$46.4 (-14%), SLA landed at 2h32, backlog fell from 1,120 to 160 transactions (-86%), and premium NPS rebounded from 48 to 74. I avoided R$4.8M/year in losses and wiped out cancellation requests from priority clients. The CFO institutionalized my ritual as the corporate template and my dashboard became standard in executive committees.`,
    l: `I learned that real ownership is stepping into the gap between silos before it destroys value. Turning conflict into data, trading with a financial lens, and leaving mechanisms (RPA, risk score, dashboard) running keeps the gains. This is now my playbook for payment crises.`,
  },
  fups: [
    {
      q: "Como voce convenceu o diretor de Compliance a liberar o rollout do RPA?",
      a: "Eu levei o fluxo detalhado, quantifiquei o risco residual e garanti carta de nao oposicao do Bacen em 48h, transformando opiniao em fato regulatorio.",
      q_en: "How did you convince the compliance director to approve the RPA rollout?",
      a_en: "I walked him through the detailed flow, quantified residual risk, and secured a BACEN no-objection letter within 48 hours, turning opinion into regulatory fact." 
    },
    {
      q: "Que indicadores voce monitorou diariamente para manter o custo sob controle?",
      a: "Eu acompanhei custo por corredor, backlog de reconciliacao, SLA p95, taxa de excecoes e tempo de reprocessamento; qualquer desvio disparava alerta no war room.",
      q_en: "Which daily indicators did you track to keep costs under control?",
      a_en: "I tracked cost per corridor, reconciliation backlog, p95 SLA, exception rate, and reprocessing time; any deviation fired a war-room alert." 
    },
    {
      q: "Como voce garantiu que os renegocios com correspondentes gerariam economia real?",
      a: "Eu construí uma tabela de volume, tier de preco e economia projetada, rodei piloto de 30 dias com auditoria semanal e clausei reducao minima de 15 bps.",
      q_en: "How did you ensure correspondent renegotiations delivered real savings?",
      a_en: "I built a comparison table with volume, price tiers, and projected savings, ran a 30-day pilot with weekly audits, and added a minimum 15 bps reduction clause." 
    },
    {
      q: "Qual foi o principal trade-off que voce impôs ao backlog de TI?",
      a: "Eu pausei features de marketing e priorizei automatizacao operacional mostrando ao VP de TI que o ganho de R$ 4,8M compensava atrasar duas sprints de marketing.",
      q_en: "What was the key IT backlog trade-off you enforced?",
      a_en: "I paused marketing features and prioritized operational automation, proving to the CIO that the R$4.8M gain outweighed delaying two marketing sprints." 
    },
    {
      q: "Como voce lidou com o risco de erros no novo score de risco?",
      a: "Eu rodei shadow mode por 14 dias, comparei decisao automatizada versus manual e ajustei limiares ate manter falsos positivos abaixo de 0,7%.",
      q_en: "How did you mitigate the risk of errors in the new risk score?",
      a_en: "I ran a 14-day shadow mode, compared automated versus manual decisions, and tuned thresholds until false positives stayed below 0.7%." 
    },
    {
      q: "Que mecanismos voce deixou para evitar regressao apos a forca-tarefa?",
      a: "Eu formalizei um comite mensal com dashboard, SLA de resposta e owners claros; qualquer indicador fora do limite abre incidente com plano em 24h.",
      q_en: "Which mechanisms did you leave behind to avoid regression?",
      a_en: "I formalized a monthly committee with dashboards, response SLAs, and named owners; any metric out of bounds opens an incident with a 24-hour plan." 
    },
    {
      q: "Como voce comunicou as mudancas aos clientes premium?",
      a: "Eu enviei carta personalizada com novo SLA, disponibilizei canal exclusivo e fiz follow-up com os 30 principais clientes em duas semanas; o NPS desse grupo subiu 12 pontos.",
      q_en: "How did you communicate the changes to premium clients?",
      a_en: "I sent personalized letters with the new SLA, opened a dedicated channel, and followed up with the top 30 clients within two weeks; their NPS rose by 12 points." 
    },
    {
      q: "Qual foi o maior conflito entre as areas e como voce resolveu?",
      a: "Eu arbitrei a disputa entre Compliance e Comercial definindo matriz RACI e voto de minerva: tickets acima de R$ 200k passam por analise manual, o restante segue o score.",
      q_en: "What was the biggest conflict between teams and how did you solve it?",
      a_en: "I arbitrated the clash between Compliance and Commercial with a clear RACI and my tie-breaker vote: tickets above R$200K get manual review, the rest follow the score." 
    },
    {
      q: "Como voce garantiu que a economia atingiu o P&L?",
      a: "Eu conciliei mensalmente os ganhos com a controladoria, ajustei metas de custo e documentei R$ 1,2M capturados em 90 dias no relatorio gerencial.",
      q_en: "How did you ensure savings hit the P&L?",
      a_en: "I reconciled savings monthly with Controllership, adjusted cost targets, and documented R$1.2M captured within 90 days in the management report." 
    },
    {
      q: "Que aprendizado voce levou para outros programas depois?",
      a: "Eu transformei a cadencia e o dashboard em kit reutilizavel; um ano depois usei o mesmo modelo em pagamentos corporativos gerando economia adicional de R$ 3M.",
      q_en: "What learning did you carry into other programs?",
      a_en: "I turned the cadence and dashboard into a reusable kit; a year later I used the same model on corporate payments and unlocked another R$3M." 
    }
  ]
};

export default case_3;
