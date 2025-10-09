const case_6 = {
  id: "payment-simplification-high-impact",
  title: "Inventei motor de simplificacao de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_pt: "Inventei motor de simplificacao de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_en: "Invented liquidity simplification engine that moved settlements from D+3 to D+0",
  company: "Bradesco Fintech Hub",
  period: "04/2017-12/2017",
  isTopCase: false,
  isGoodCase: true, // Added
  pt: {
    s: `Marketplaces estavam saindo da nossa plataforma porque o Process Cycle Time da liquidez era de 3 dias, enquanto concorrentes pagavam em horas. Isso quebrava a experiência do cliente e freava o flywheel de crescimento dos nossos parceiros. O NPS caiu para 29 e a dor era clara: falta de previsibilidade de caixa, impactando o \"tráfego\" e a \"seleção\" dos marketplaces.`,
    t: `Eu me posicionei como a ponte entre a dor do lojista e a decisão de negócio. Minha missão era tomar uma decisão acionável: inventar uma solução para entregar liquidez D+0, melhorando o Payment Success Rate (PSR) percebido pelo cliente e mantendo o risco de chargeback abaixo de 0,35%. Eu precisava criar um mecanismo que girasse o flywheel da liquidez.`,
    a: `Eu inventei e simplifiquei. Primeiro, para ser a ponte com o negócio, criei o \"Settlement Graph\", um modelo que clusteriza transações por risco. Segundo, usei meu julgamento e criei o motor \"Liquidez Zero\", reescrevendo 27 integrações legadas e simplificando a conciliação. Terceiro, quando o comitê de risco resistiu, não mostrei apenas dados; enquadrei a questão como uma decisão de negócio sobre o Custo Operacional por Transação da ineficiência, usando um fundo de garantia para mitigar o risco. A automação que criei foi a ponte final para a liquidez D+0.`,
    r: `A invenção girou o flywheel. Entregamos D+0 para 82% do volume, o NPS recuperou para 71 e o churn caiu 4,5 p.p. A melhor experiência do cliente (lojistas) aumentou o \"tráfego\" e a \"seleção\" nos marketplaces, gerando R$19M em receita incremental. O Custo Operacional por Transação foi reduzido em R$7,4M ao otimizar o uso de capital.`,
    l: `Aprendi que para inovar e simplificar em pagamentos, é preciso ser a ponte que transforma a dor de caixa do lojista em uma decisão de negócio acionável. O \"Settlement Graph\" virou meu mecanismo para avaliar risco e benefício. Hoje, aplico a mesma lógica para otimizar o Authorization Rate: entendo a dor do cliente, crio mecanismos transparentes e assumo o risco para girar o flywheel do crescimento.`
  },
  en: {
    s: `Marketplaces were leaving our platform because the liquidity Process Cycle Time was 3 days, while competitors paid in hours. This was breaking the customer experience and stalling our partners\" growth flywheel. The NPS dropped to 29, and the pain was clear: a lack of cash flow predictability, impacting the marketplaces\" \"traffic\" and \"selection.\"`,
    t: `I positioned myself as the bridge between the merchant\"s pain and the business decision. My mission was to make an actionable decision: invent a solution to deliver D+0 liquidity, improving the customer-perceived Payment Success Rate (PSR) and keeping chargeback risk below 0.35%. I needed to create a mechanism that would spin the liquidity flywheel.`,
    a: `I invented and simplified. First, to be the bridge to the business, I created the \"Settlement Graph,\" a model that clusters transactions by risk. Second, I used my judgment and built the \"Zero Liquidity\" engine, rewriting 27 legacy integrations and simplifying reconciliation. Third, when the risk committee resisted, I didn\"t just show data; I framed it as a business decision about the Operational Cost per Transaction of inefficiency, using a guarantee fund to mitigate risk. The automation I created was the final bridge to D+0 liquidity.`,
    r: `The invention spun the flywheel. We delivered D+0 for 82% of the volume, the NPS recovered to 71, and churn dropped by 4.5 p.p. The better customer experience (merchants) increased \"traffic\" and \"selection\" in the marketplaces, generating R$19M in incremental revenue. The Operational Cost per Transaction was reduced by R$7.4M by optimizing capital usage.`,
    l: `I learned that to innovate and simplify in payments, you need to be the bridge that turns merchant cash pain into an actionable business decision. The \"Settlement Graph\" became my mechanism for assessing risk and benefit. Today, I apply the same logic to optimize the Authorization Rate: I understand the customer\"s pain, create transparent mechanisms, and own the risk to spin the growth flywheel.`
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
      q_en: "Eligible TPV, fund balance, chargeback rate, hours to settlement, and NPS sentiment; I personally sent that dashboard to merchants."
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
      a_en: "I\"m applying the engine to B2B seller loans, using the same graph to release advances in 45 minutes."
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
