// Case 3 - ownership
const case_3 = {
  id: "bradesco-international-payments",
  title: "Força-Tarefa de Pagamentos Internacionais para Cortar Custos e Recuperar SLAs",
  title_pt: "Força-Tarefa de Pagamentos Internacionais para Cortar Custos e Recuperar SLAs",
  title_en: "International Payments Task Force to Cut Costs and Recover SLAs",
  company: "Bradesco",
  period: "01/2017-06/2017",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `"90 dias ou corto headcount." A ameaça do CFO ecoou na sala quando mostrei o relatório mensal de pagamentos internacionais: custo médio por transação subiu de R$ 47 para R$ 54 (+15%) em seis meses, adicionando R$ 364k mensais ao P&L (R$ 4,3M anualizados). O SLA explodiu de 2h50 para 4h10, NPS premium despencou de 66 para 48, e três dos meus 20 maiores clientes ameaçaram migrar. Estruturar força-tarefa não era minha função — meu mandato formal era apenas transformação digital. Mas quando confrontei Operações, Compliance, TI e Comercial, ouvi "isso não é nosso problema" de todos. Alguém precisava assumir ownership total da crise — e eu decidi que seria eu.`,
    t: `Diante dessa crise que ameaçava tanto a rentabilidade quanto a retenção de clientes premium, eu decidi ir além do meu escopo formal e assumir ownership total da situação. Mesmo com mandato restrito à transformação digital, me declarei single-threaded owner e assumi responsabilidade pessoal pelo resultado. Meu desafio era cortar ao menos 12% do custo médio, trazer o SLA para menos de 3h e recolocar o NPS acima de 65 dentro de 90 dias. Mais importante: tracei o trade-off de longo prazo — pausar features novas de marketing por seis semanas para refactoring da reconciliação, pensando em prevenir reincidência.`,
    a: `Eu formei uma força-tarefa com sete pessoas (Operações, Compliance, TI, Comercial, Procurement) com charter simples: daily de 30 minutos, decisões por métrica e eu como single-threaded owner. Primeiro, construí business case de três cenários cruzando custo incremental, churn de clientes priority (R$ 1,2M/ano) e multas potenciais do BACEN (até 0,5% dos ativos) para ganhar o CFO. Segundo, extraí 160k transações dos últimos 90 dias, normalizei em Python e mostrei que 68% do custo vinha de reconciliação manual e tabela antiquada de correspondentes. Terceiro, redesenhei o fluxo com filas medidas, implantei RPA conciliando SWIFT MT103 vs ledger e criei score de risco que escalona tickets acima de R$ 200k para revisão manual. Quarto, negociei com dois bancos correspondentes contratos baseados em volume com redução média de 18 bps, condicionados a piloto de 30 dias com auditoria semanal. Quinto, quando o diretor de Compliance travou o rollout, voei a Brasília, apresentei os controles ao BACEN, ajustei segregação de funções e saí com carta de não oposição em 48h. Sexto, para recuperar clientes, liguei pessoalmente para os 30 maiores premium, abri canal 24/7 e publiquei dashboard no Grafana com 12 indicadores (SLA por país, custo por corredor, backlog, MTTD, risco de churn).`,
    r: `Eu transformei uma crise operacional em vantagem competitiva sustentável. Em 74 dias atingi todas as metas: custo médio caiu de R$ 54 para R$ 46,4 (-14%), SLA voltou para 2h32, backlog diário despencou de 1.120 para 160 transações (-86%) e o NPS premium subiu de 48 para 74. Evitei perda anual de R$ 4,8M e zerei pedidos de cancelamento dos clientes priority. O CFO institucionalizou o ritual como template corporativo para outras crises operacionais e meu dashboard virou fonte oficial em comitês executivos. Mais importante: os mecanismos preventivos que criei (RPA, score de risco, dashboard 24/7) continuaram operando após minha saída, sustentando os ganhos de eficiência.`,
    l: `Aprendi que ownership verdadeiro significa assumir responsabilidade além do escopo formal, fazer trade-offs impopulares de longo prazo (pausar features para refactoring) e construir mecanismos preventivos que impedem reincidência. Não basta apagar incêndios — é preciso criar sistemas (RPA, score de risco, dashboard 24/7) que monitoram continuamente e alertam antes da crise. Transformei esse caso no meu playbook: sempre que vejo ineficiência sistêmica, assumo ownership, negocio trade-offs com impacto financeiro e deixo mecanismos permanentes rodando — mesmo quando "não é minha função". Esse ritual de war room com métrica única e single-threaded owner virou meu template para crises de pagamentos.`
  },
  en: {
    s: `"90 days or I cut headcount." The CFO's threat echoed in the room when I showed the international payments monthly report: average cost per transaction climbed from R$47 to R$54 (+15%) in six months, adding R$364K monthly to P&L (R$4.3M annualized). SLA ballooned from 2h50 to 4h10, premium NPS crashed from 66 to 48, and three of my top 20 clients threatened to leave. Building a task force wasn't my job — my formal remit was only digital transformation. But when I confronted Operations, Compliance, IT, and Commercial, I heard "not my problem" from everyone. Someone needed to take total ownership of the crisis — and I decided it would be me.`,
    t: `Faced with that crisis threatening both profitability and premium client retention, I decided to go beyond my formal scope and take total ownership of the situation. Even with mandate restricted to digital transformation, I declared myself single-threaded owner and took personal responsibility for the outcome. My challenge was cutting at least 12% of average cost, bringing SLA back under 3 hours, and lifting NPS above 65 within 90 days. Most importantly: I framed the long-term trade-off — pause new marketing features for six weeks to refactor reconciliation, thinking about preventing recurrence.`,
    a: `I formed a seven-person task force (Operations, Compliance, IT, Commercial, Procurement) with simple charter: 30-minute dailies, metric-driven decisions, and me as single-threaded owner. First, I built three-scenario business case covering incremental cost, priority client churn risk (R$1.2M/year), and potential BACEN fines (up to 0.5% of assets) to secure CFO backing. Second, I extracted 160K transactions from last 90 days, normalized in Python, and showed 68% of cost came from manual reconciliation and outdated correspondent pricing. Third, I redesigned workflow with measured queues, deployed RPA reconciling SWIFT MT103 vs ledger, and created risk score escalating tickets above R$200K for manual review. Fourth, I negotiated volume-based contracts with two correspondent banks, locking average 18 bps reduction tied to 30-day pilot with weekly audits. Fifth, when Compliance director froze rollout, I flew to Brasília, walked BACEN through controls, tightened segregation of duties, and secured no-objection letter within 48 hours. Sixth, to recover clients, I personally called top 30 premium accounts, opened 24/7 dedicated channel, and published Grafana dashboard with 12 metrics (SLA by country, cost per corridor, backlog, MTTD, churn risk).`,
    r: `I transformed an operational crisis into sustainable competitive advantage. Within 74 days I hit all targets: average cost dropped from R$54 to R$46.4 (-14%), SLA landed at 2h32, daily backlog plummeted from 1,120 to 160 transactions (-86%), and premium NPS rebounded from 48 to 74. I avoided R$4.8M/year in losses and eliminated cancellation requests from priority clients. CFO institutionalized the ritual as corporate template for other operational crises and my dashboard became standard in executive committees. Most importantly: the preventive mechanisms I created (RPA, risk score, 24/7 dashboard) continued operating after my departure, sustaining efficiency gains.`,
    l: `I learned that true ownership means taking responsibility beyond formal scope, making unpopular long-term trade-offs (pause features for refactoring), and building preventive mechanisms that block recurrence. It's not enough to fight fires — you must create systems (RPA, risk score, 24/7 dashboard) that monitor continuously and alert before crisis. I turned this into my playbook: whenever I spot systemic inefficiency, I take ownership, negotiate trade-offs with financial impact, and leave permanent mechanisms running — even when "it's not my job". This war room ritual with single metric and single-threaded owner became my template for payment crises.`
  },
  fups: [
    {
      "q": "Como você convenceu o diretor de Compliance a liberar o rollout do RPA?",
      "a": "Levei o fluxo detalhado, quantifiquei o risco residual e garanti carta de não oposição do BACEN em 48h, transformando opinião em fato regulatório. Mostrei que RPA reduzia risco humano (erro manual de R$ 2,3M em 6 meses) e criava trilha de auditoria mais robusta.",
      "q_en": "How did you convince the Compliance director to approve the RPA rollout?",
      "a_en": "I walked him through detailed flow, quantified residual risk, and secured BACEN no-objection letter within 48 hours, turning opinion into regulatory fact. I showed RPA reduced human risk (R$2.3M manual errors in 6 months) and created more robust audit trail."
    },
    {
      "q": "Que indicadores você monitorou diariamente para manter o custo sob controle?",
      "a": "Acompanhei custo por corredor, backlog de reconciliação, SLA p95, taxa de exceções e tempo de reprocessamento. Qualquer desvio >5% disparava alerta no war room. Dashboard atualizado a cada 15 minutos com semáforo vermelho/amarelo/verde.",
      "q_en": "Which daily indicators did you track to keep costs under control?",
      "a_en": "I tracked cost per corridor, reconciliation backlog, p95 SLA, exception rate, and reprocessing time. Any deviation >5% fired war room alert. Dashboard updated every 15 minutes with red/yellow/green traffic light."
    },
    {
      "q": "Como você garantiu que os renegócios com correspondentes gerariam economia real?",
      "a": "Construí tabela de volume, tier de preço e economia projetada, rodei piloto de 30 dias com auditoria semanal e clausei redução mínima de 15 bps. Mais importante: vinculei pagamento dos correspondentes aos resultados do piloto, criando incentivo real para performance.",
      "q_en": "How did you ensure correspondent renegotiations delivered real savings?",
      "a_en": "I built volume table, price tier, and projected savings, ran 30-day pilot with weekly audits, and locked minimum 15 bps reduction. Most importantly: I tied correspondent payments to pilot results, creating real performance incentive."
    },
    {
      "q": "Qual foi o maior desafio técnico na implementação do RPA?",
      "a": "Integrar SWIFT MT103 com ledger interno sem quebrar segregação de funções. Criei camada intermediária que valida, enriquece e roteia transações baseado no score de risco, mantendo controles de compliance intactos. Testei com 1.000 transações antes do rollout completo.",
      "q_en": "What was the biggest technical challenge in RPA implementation?",
      "a_en": "Integrating SWIFT MT103 with internal ledger without breaking segregation of duties. I created intermediate layer that validates, enriches, and routes transactions based on risk score, keeping compliance controls intact. Tested with 1,000 transactions before full rollout."
    },
    {
      "q": "Como você mediu o impacto real nos clientes premium?",
      "a": "NPS premium (48→74), tempo de resolução de problemas (4h10→2h32), taxa de cancelamento (3 clientes ameaçando→0), e satisfação com transparência (dashboard 24/7). Mais importante: receita retida de R$ 4,8M/ano dos clientes que ameaçavam sair.",
      "q_en": "How did you measure real impact on premium clients?",
      "a_en": "Premium NPS (48→74), problem resolution time (4h10→2h32), cancellation rate (3 clients threatening→0), and transparency satisfaction (24/7 dashboard). Most importantly: R$4.8M/year revenue retained from clients who threatened to leave."
    },
    {
      "q": "Que resistência você enfrentou da equipe de Operações?",
      "a": "Operações temia que RPA eliminasse empregos. Mostrei que automação liberaria equipe para trabalho de maior valor (análise de risco, relacionamento com correspondentes) e criei programa de requalificação. Resultado: zero demissões, 5 promoções internas.",
      "q_en": "What resistance did you face from the Operations team?",
      "a_en": "Operations feared RPA would eliminate jobs. I showed automation would free team for higher-value work (risk analysis, correspondent relationships) and created requalification program. Result: zero layoffs, 5 internal promotions."
    },
    {
      "q": "Como você garantiu sustentabilidade dos resultados após sua saída?",
      "a": "Documentei playbook de 23 páginas, treinei 4 pessoas-chave em operação do RPA, automatizei 87% dos reports e criei rituais autossustentáveis (daily de 15min, review semanal). Mais importante: institucionalizei métricas no comitê executivo.",
      "q_en": "How did you ensure result sustainability after your departure?",
      "a_en": "I documented 23-page playbook, trained 4 key people in RPA operation, automated 87% of reports, and created self-sustaining rituals (15-min daily, weekly review). Most importantly: I institutionalized metrics in executive committee."
    },
    {
      "q": "Qual foi o ROI real da força-tarefa?",
      "a": "ROI de 890% no primeiro ano: evitei R$ 4,8M em perdas (clientes premium), economizei R$ 4,3M anualizados (redução de custo), liberei 340 horas/mês da equipe (R$ 680k em produtividade). Investimento total: R$ 120k (RPA + viagem Brasília + minha dedicação).",
      "q_en": "What was the real ROI of the task force?",
      "a_en": "890% ROI in first year: avoided R$4.8M in losses (premium clients), saved R$4.3M annualized (cost reduction), freed 340 hours/month from team (R$680K in productivity). Total investment: R$120K (RPA + Brasília trip + my dedication)."
    },
    {
      "q": "Como você lidou com a pressão do CFO durante os 90 dias?",
      "a": "Transparência radical: updates semanais com métricas objetivas (custo, SLA, backlog, NPS), sem sugar-coating. Mostrei progresso incremental e riscos reais. CFO parou de pressionar quando viu que tinha visibilidade total e controle real da situação.",
      "q_en": "How did you handle CFO pressure during the 90 days?",
      "a_en": "Radical transparency: weekly updates with objective metrics (cost, SLA, backlog, NPS), no sugar-coating. I showed incremental progress and real risks. CFO stopped pressuring when he saw he had total visibility and real control of situation."
    },
    {
      "q": "Que aprendizado dessa crise você aplicou em outros contextos?",
      "a": "O template de war room: (1) Single-threaded owner, (2) Métrica única de sucesso, (3) Daily de 30min máximo, (4) Trade-offs explícitos de longo prazo, (5) Mecanismos preventivos permanentes. Apliquei isso em 3 outras crises operacionais com sucesso similar.",
      "q_en": "What learning from this crisis did you apply in other contexts?",
      "a_en": "The war room template: (1) Single-threaded owner, (2) Single success metric, (3) 30-min max dailies, (4) Explicit long-term trade-offs, (5) Permanent preventive mechanisms. I applied this to 3 other operational crises with similar success."
    }
  ]
};

export default case_3;
