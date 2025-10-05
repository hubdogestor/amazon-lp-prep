// Case 6 - invent_and_simplify
const case_6 = {
  id: "payment-simplification-high-impact",
  title: "Inventei motor de simplificacao de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_pt: "Inventei motor de simplificacao de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_en: "Invented liquidity simplification engine that moved settlements from D+3 to D+0",
  company: "Bradesco Fintech Hub",
  period: "04/2023-12/2023",
  isTopCase: false,
  pt: {
    s: `Trinta marketplaces medio porte estavam ameaçando sair da plataforma de payments porque recebiam o saldo em D+3, enquanto concorrentes pagavam em seis horas. Eu recebi 4.200 chamados de lojistas pedindo capital de giro e o NPS caiu de 63 para 29 em dois ciclos. Dois varejistas chave (R$ 480M em TPV) enviaram carta exigindo plano concreto ou migrariam em 60 dias. Eu pessoalmente liguei para 20 lojistas top e escutei que a dor era a previsibilidade do fluxo de caixa e nao apenas a tarifa.`,
    t: `Eu assumi ownership integral e defini meta: entregar liquidez D+0 para 80% das transacoes ate dezembro, mantendo risco de chargeback abaixo de 0,35% e sem aumentar custo de capital. Eu prometi aos lojistas que enviaria dashboard diario com hora prevista de liquidacao assinada por mim.`,
    a: `Primeiro, eu inventei o "Settlement Graph", um modelo que clusteriza transacoes por risco, volume e comportamento de vendas. Eu analisei 18 meses de dados, identifiquei oito arquetipos de lojistas e provei que 64% do TPV tinha risco historico inferior a 0,2%. Segundo, eu simplifiquei o fluxo operacional criando o motor Liquidez Zero: reescrevi 27 integrações legadas, concentrei conciliacao em apenas dois caminhos e inseri scoring em tempo real que eu mesmo treinei usando 42 features. Terceiro, eu lidei com conflito interno: o comite de risco recusou liberar D+0 sem colateral. Eu construí um experimento com 50 lojistas, garanti fundo de garantia de R$ 25M usando recursos ociosos de float e apresentei simulaçao mostrando impacto de apenas 0,08 p.p. no capital regulatorio. Tambem derrubei barreira de TI criando esteiras paralelas de deploy e participei de todas as CABs para priorizar meus releases.`,
    r: `Eu entreguei settlement D+0 para 82% do volume em 120 dias, reduzi chamados de saque em 86% e o NPS voltou para 71. O faturamento dos marketplaces subiu 12% por conta do giro mais rapido e o churn caiu 4,5 p.p. Gerei receita incremental de R$ 19M em fees e reduzi custo de capital em R$ 7,4M ao usar o fundo de garantia inteligente. Mantive chargeback em 0,31% e o tempo de conciliacao caiu de 42 horas para 3 horas.`,
    l: `Eu aprendi que simplificar pagamento é sobre entender a dor de caixa do lojista e assumir o risco com mecanismo transparente. O Settlement Graph virou meu template para novas categorias: mapeio quem precisa de liquidez imediata, desenho regras claras e coloco minha assinatura nos limites.`,
  },
  en: {
    s: `Thirty mid-marketplaces threatened to leave the payments platform because they received funds on D+3 while competitors paid within six hours. I received 4,200 merchant tickets asking for working capital and NPS dropped from 63 to 29 in two cycles. Two flagship retailers (R$ 480M TPV) sent a letter demanding a concrete plan or they would churn in 60 days. I personally called the top 20 merchants and learned the real pain was cash-flow predictability, not pricing.`,
    t: `I took full ownership and set the goal to deliver D+0 liquidity for 80% of transactions by December while keeping chargeback risk below 0.35% without raising cost of capital. I promised merchants I would send a daily dashboard with expected settlement time signed by me.`,
    a: `First, I invented the "Settlement Graph", a model clustering transactions by risk, volume, and sales behavior. I analyzed 18 months of data, identified eight merchant archetypes, and proved 64% of TPV had historical risk below 0.2%. Second, I simplified the operational flow by building the Zero Liquidity engine: I rewrote 27 legacy integrations, concentrated reconciliation into two paths, and deployed a real-time scoring model I trained myself using 42 features. Third, I handled internal conflict: the risk committee denied D+0 without collateral. I built an experiment with 50 merchants, secured a R$ 25M guarantee fund from idle float, and presented a simulation showing only a 0.08 p.p. hit on regulatory capital. I also broke IT barriers by creating parallel deployment lanes and joined every CAB to prioritize my releases.`,
    r: `I delivered D+0 settlement for 82% of volume within 120 days, cut withdrawal tickets by 86%, and NPS rebounded to 71. Marketplace sales grew 12% due to faster cash flow and churn dropped 4.5 p.p. I generated R$ 19M in incremental fee revenue and reduced cost of capital by R$ 7.4M through the smart guarantee fund. Chargeback stayed at 0.31% and reconciliation time fell from 42 hours to 3 hours.`,
    l: `I learned that simplifying payments is about understanding merchant cash pain and owning the risk with a transparent mechanism. The Settlement Graph became my template for new categories: map who needs instant liquidity, design clear rules, and sign the limits myself.`,
  },
  fups: [
    {
      q: "Como voce validou que o problema era liquidez e nao tarifa?",
      a: "Eu realizei 20 entrevistas com lojistas top, analisei tickets e percebi que 78% citavam previsibilidade de caixa; apenas 12% mencionaram preco.",
      q_en: "How did you validate liquidity was the problem and not pricing?",
      a_en: "I held 20 interviews with top merchants, reviewed tickets, and found 78% mentioned cash predictability while only 12% cited pricing."
    },
    {
      q: "Como voce convenceu o comite de risco?",
      a: "Eu apresentei experimento controlado com 50 lojistas, mostrei queda de 56% em inadimplencia e o impacto regulatorio de 0,08 p.p., assumindo responsabilidade pelo fundo de garantia.",
      q_en: "How did you convince the risk committee?",
      a_en: "I presented a controlled experiment with 50 merchants, showed a 56% drop in delinquencies, and detailed the 0.08 p.p. regulatory impact while taking responsibility for the guarantee fund."
    },
    {
      q: "Quais metricas voce monitorou diariamente?",
      a: "TPV elegivel, saldo do fundo, taxa de chargeback, horas ate liquidacao e percepcao de NPS; eu mandava esse painel pessoalmente aos lojistas.",
      q_en: "Which metrics did you track daily?",
      a_en: "Eligible TPV, fund balance, chargeback rate, hours to settlement, and NPS sentiment; I personally sent that dashboard to merchants."
    },
    {
      q: "Como voce garantiu que o motor Liquidez Zero nao criasse gargalos novos?",
      a: "Eu reescrevi integrações para reduzir filas, automatizei reconciliacao em dois caminhos e monitorei latencia em menos de 400 ms.",
      q_en: "How did you ensure the Zero Liquidity engine would not create new bottlenecks?",
      a_en: "I rewrote integrations to shrink queues, automated reconciliation into two paths, and monitored latency under 400 ms."
    },
    {
      q: "Que trade-off financeiro voce assumiu?",
      a: "Eu realoquei R$ 25M de float ocioso para o fundo, reduzi reservas de D+3 em 32% e ajustei precificacao premium para lojistas que usavam o limite maximo.",
      q_en: "What financial trade-off did you assume?",
      a_en: "I reallocated R$ 25M of idle float to the fund, reduced D+3 reserves by 32%, and adjusted premium pricing for merchants using the maximum limit."
    },
    {
      q: "Como voce mediu o impacto no churn?",
      a: "Eu comparei cohortes pre e pos motor, acompanhando churn mensal e vendo queda de 4,5 p.p. entre lojistas que migraram para D+0.",
      q_en: "How did you measure churn impact?",
      a_en: "I compared cohorts before and after the engine, tracking monthly churn and seeing a 4.5 p.p. drop among merchants moved to D+0."
    },
    {
      q: "Como voce garantiu ratio EU:NOS alto?",
      a: "Eu assumi a negociacao com risco, conduzi CABs e assinei pessoalmente os limites de credito, evitando comites difusos.",
      q_en: "How did you keep a high I:we ratio?",
      a_en: "I led the risk negotiations, chaired CABs, and personally signed the credit limits, avoiding diffuse committees."
    },
    {
      q: "Que mecanismos ficaram apos sua saida?",
      a: "Eu deixei playbook do Settlement Graph, trilha de auditoria automatica e gatilhos de risco que pausam liquidez em minutos se o chargeback estourar 0,35%.",
      q_en: "Which mechanisms remained after you moved on?",
      a_en: "I left the Settlement Graph playbook, automated audit trail, and risk triggers that pause liquidity within minutes if chargeback surpasses 0.35%."
    },
    {
      q: "Como esse aprendizado escala para novos produtos?",
      a: "Eu estou aplicando o motor a creditos para sellers B2B, usando o mesmo grafo para liberar antecipacoes em 45 minutos.",
      q_en: "How does this learning scale to new products?",
      a_en: "I'm applying the engine to B2B seller loans, using the same graph to release advances in 45 minutes."
    },
    {
      q: "Qual foi o mic drop com os lojistas?",
      a: "Eu publiquei o dashboard de D+0 com assinatura digital e video explicando os limites, mostrando que o risco era meu e nao deles.",
      q_en: "What was the mic drop with merchants?",
      a_en: "I published the D+0 dashboard with my digital signature and a video explaining the limits, proving I took the risk, not them."
    }
  ]
};

export default case_6;
