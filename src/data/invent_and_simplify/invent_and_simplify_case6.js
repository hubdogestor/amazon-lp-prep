const case_6 = {
  id: "payment-simplification-high-impact",
  title: "Inventei motor de simplificacao de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_pt: "Inventei motor de simplificacao de liquidez que reduziu D+3 para D+0 em marketplaces",
  title_en: "Invented liquidity simplification engine that moved settlements from D+3 to D+0",
  company: "Bradesco Fintech Hub",
  period: "04/2017-12/2017",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `"Vou migrar para o Stone. Eles pagam no mesmo dia." A ameaça do CEO do maior marketplace da plataforma resumia nossa crise: liquidação em D+3 enquanto concorrentes entregavam D+0. Estávamos perdendo 23% dos clientes por trimestre, o NPS despencou para 29 e R$ 2,4B em TPV estava em risco. O problema não era tecnologia — era que nossa solução complexa de 27 integrações legadas tornava impossível acelerar pagamentos sem explodir o risco de chargeback.`,
    t: `Diante dessa ameaça existencial ao nosso negócio de marketplaces, assumi ownership total da transformação da liquidez. Minha missão era clara: entregar D+0 para 80% do volume, manter chargeback abaixo de 0,35% e reconquistar a confiança dos clientes que já tinham um pé fora da porta.`,
    a: `Eu inventei uma solução que transformou complexidade em simplicidade. Primeiro, criei o "Settlement Graph" — um modelo que clusteriza transações por risco em tempo real, identificando quais podiam ser liquidadas imediatamente. Segundo, reescrevi completamente o motor de conciliação, eliminando 19 das 27 integrações legadas e criando uma arquitetura que processava liquidação em minutos, não dias. Terceiro, quando o comitê de risco resistiu ao D+0, criei um fundo de garantia de R$ 8M que eu gerenciaria pessoalmente, assumindo total responsabilidade pelos resultados.`,
    r: `A invenção salvou nosso negócio de marketplaces. Em 8 meses, entregamos D+0 para 82% do volume, o NPS saltou para 71 e o churn despencou 4,5 pontos percentuais. Mais importante: retivemos R$ 2,4B em TPV ameaçado, geramos R$ 19M em receita incremental e economizamos R$ 7,4M em custos operacionais. A solução foi tão robusta que expandimos para outros segmentos, transformando liquidez instantânea em nossa principal vantagem competitiva.`,
    l: `Aprendi que inovar em pagamentos é sobre transformar a dor de caixa do cliente em vantagem competitiva sustentável. O "Settlement Graph" virou meu framework padrão para balancear velocidade e risco. Hoje, aplico o mesmo princípio em qualquer decisão de produto: entendo profundamente a dor do cliente, simplifico processos complexos e assumo riscos calculados para entregar valor superior.`
  },
  en: {
    s: `"I'm migrating to Stone. They pay same-day." The threat from our largest marketplace's CEO summarized our crisis: D+3 settlement while competitors delivered D+0. We were losing 23% of clients per quarter, NPS plummeted to 29, and R$2.4B in TPV was at risk. The problem wasn't technology — it was that our complex solution with 27 legacy integrations made it impossible to accelerate payments without exploding chargeback risk.`,
    t: `Faced with this existential threat to our marketplace business, I took total ownership of liquidity transformation. My mission was clear: deliver D+0 for 80% of volume, keep chargebacks below 0.35%, and win back the trust of clients who already had one foot out the door.`,
    a: `I invented a solution that transformed complexity into simplicity. First, I created the "Settlement Graph" — a model that clusters transactions by risk in real-time, identifying which could be settled immediately. Second, I completely rewrote the reconciliation engine, eliminating 19 of 27 legacy integrations and creating an architecture that processed settlement in minutes, not days. Third, when the risk committee resisted D+0, I created an R$8M guarantee fund that I would personally manage, taking total responsibility for results.`,
    r: `The invention saved our marketplace business. In 8 months, we delivered D+0 for 82% of volume, NPS jumped to 71, and churn plummeted 4.5 percentage points. More importantly: we retained R$2.4B in threatened TPV, generated R$19M in incremental revenue, and saved R$7.4M in operational costs. The solution was so robust we expanded to other segments, turning instant liquidity into our main competitive advantage.`,
    l: `I learned that innovating in payments is about transforming customer cash pain into sustainable competitive advantage. The "Settlement Graph" became my standard framework for balancing speed and risk. Today, I apply the same principle to any product decision: deeply understand customer pain, simplify complex processes, and take calculated risks to deliver superior value.`
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
      q_en: "Which metrics did you monitor daily?",
      a_en: "Eligible TPV, fund balance, chargeback rate, hours to settlement, and NPS sentiment; I personally sent that dashboard to merchants."
    },
    {
      q: "Como voce garantiu que o Settlement Graph nao gerasse vies?",
      a: "Eu rodei testes A/B por segmento, validei com auditoria externa e ajustei pesos para garantir que pequenos lojistas nao fossem penalizados.",
      q_en: "How did you ensure the Settlement Graph didn't create bias?",
      a_en: "I ran A/B tests by segment, validated with external audit, and adjusted weights to ensure small merchants weren't penalized."
    },
    {
      q: "Qual foi o maior desafio tecnico?",
      a: "Integrar dados de 27 sistemas legados em tempo real; eu criei camada de normalizacao e cache distribuido que reduziu latencia para 200ms.",
      q_en: "What was the biggest technical challenge?",
      a_en: "Integrating data from 27 legacy systems in real-time; I created a normalization layer and distributed cache that reduced latency to 200ms."
    },
    {
      q: "Como voce mediu o impacto no cliente final?",
      a: "Eu trackeei tempo medio para receber pagamento, volatilidade de caixa e satisfacao via NPS; criei dashboard que lojistas acessavam 24/7.",
      q_en: "How did you measure impact on the end customer?",
      a_en: "I tracked average time to receive payment, cash volatility, and satisfaction via NPS; I created a dashboard merchants accessed 24/7."
    },
    {
      q: "Que resistencia voce enfrentou internamente?",
      a: "Operacoes temia aumento de chargebacks; eu criei SLA de resposta em 4 horas para disputas e assumi pessoalmente os casos complexos.",
      q_en: "What internal resistance did you face?",
      a_en: "Operations feared increased chargebacks; I created a 4-hour response SLA for disputes and personally handled complex cases."
    },
    {
      q: "Como voce garantiu sustentabilidade da solucao?",
      a: "Eu documentei todos os algoritmos, treinei 12 analistas e criei alertas automaticos para qualquer desvio nos padroes de risco.",
      q_en: "How did you ensure solution sustainability?",
      a_en: "I documented all algorithms, trained 12 analysts, and created automatic alerts for any deviation in risk patterns."
    },
    {
      q: "Qual aprendizado voce aplicou em outros produtos?",
      a: "O conceito de clusterizacao por risco; hoje uso para otimizar autorizacao de cartoes e underwriting de credito em tempo real.",
      q_en: "What learning did you apply to other products?",
      a_en: "Risk clustering concept; today I use it to optimize card authorization and real-time credit underwriting."
    },
    {
      q: "Como voce celebrou o sucesso com os clientes?",
      a: "Eu organizei evento exclusivo mostrando economia de caixa gerada e lancei programa de cashback baseado no volume D+0 processado.",
      q_en: "How did you celebrate success with clients?",
      a_en: "I organized an exclusive event showing cash savings generated and launched a cashback program based on D+0 volume processed."
    }
  ]
};

export default case_6;
