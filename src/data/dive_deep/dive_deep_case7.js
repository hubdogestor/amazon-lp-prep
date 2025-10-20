// dive_deep_case7.js - Experimentação e iteração para encontrar solução certa
const case_7 = {
  id: "sicredi-payment-experimentation",
  title_pt: "Experimentação Sistemática em Plataforma de Pagamentos para Encontrar Modelo de Monetização Ótimo",
  title_en: "Systematic Experimentation in Payment Platform to Find Optimal Monetization Model",
  company: "Sicredi",
  period: "09/2022-03/2023",
  role: "Product Manager / Experimentation Lead",
  context: "Digital Payments Platform",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: "Em setembro de 2022, como Product Manager da plataforma de pagamentos do Sicredi, enfrentei um dilema crítico: tínhamos 4 milhões de transações mensais, mas margem negativa de 0,3% devido a modelo de precificação inadequado. Três opções conflitantes: manter fees baixos para volume (estratégia atual), aumentar fees para margem (risco de churn), ou modelo híbrido complexo. Sem dados suficientes para decidir, qualquer escolha custaria milhões. O desafio era encontrar a solução certa através de experimentação sistemática sem impactar usuários finais.",
    t: "Minha missão era usar experimentação controlada para identificar o modelo de monetização ótimo. Precisava testar hipóteses rapidamente, medir impacto real, e iterar baseado em dados, não opiniões. O desafio crítico era equilibrar velocidade de aprendizado com controle de risco, mantendo confiança dos stakeholders enquanto explorava soluções.",
    a: "Implementei framework de experimentação em três fases: (1) 'Hypothesis Generation' - mapeei 12 hipóteses de precificação com stakeholders, priorizando por impacto vs risco; (2) 'Rapid Prototyping' - criei 4 experimentos A/B simultâneos com cohorts de 50k usuários cada, testando diferentes modelos (fee fixo, percentual, híbrido); (3) 'Iterative Learning' - medi KPIs em tempo real (margem, churn, NPS), ajustando parâmetros semanalmente baseado em dados. Usei ferramentas de analytics para isolamento causal e controle de viés.",
    r: "Em 6 meses, identifiquei modelo híbrido que aumentou margem 340% (de -0,3% para +0,8%) com churn estável. ROI do investimento em experimentação foi 8,2x. O framework se tornou padrão para decisões estratégicas no Sicredi.",
    l: "Aprendi que experimentação sistemática transforma incerteza em vantagem competitiva. Criei 'Experimentation Playbook' com 5 princípios: hipóteses claras, medição objetiva, iteração rápida, controle de risco, aprendizado compartilhado."
  },
  en: {
    s: "In September 2022, as Product Manager of Sicredi's payment platform, I faced a critical dilemma: we had 4 million monthly transactions, but negative margin of 0.3% due to inadequate pricing model. Three conflicting options: keep low fees for volume (current strategy), increase fees for margin (churn risk), or complex hybrid model. Without sufficient data to decide, any choice would cost millions. The challenge was finding the right solution through systematic experimentation without impacting end users.",
    t: "My mission was to use controlled experimentation to identify the optimal monetization model. I needed to test hypotheses quickly, measure real impact, and iterate based on data, not opinions. The critical challenge was balancing learning speed with risk control, maintaining stakeholder confidence while exploring solutions.",
    a: "I implemented experimentation framework in three phases: (1) 'Hypothesis Generation' - mapped 12 pricing hypotheses with stakeholders, prioritizing by impact vs risk; (2) 'Rapid Prototyping' - created 4 simultaneous A/B experiments with 50k user cohorts each, testing different models (fixed fee, percentage, hybrid); (3) 'Iterative Learning' - measured KPIs in real-time (margin, churn, NPS), adjusting parameters weekly based on data. Used analytics tools for causal isolation and bias control.",
    r: "In 6 months, I identified hybrid model that increased margin 340% (from -0.3% to +0.8%) with stable churn. ROI of experimentation investment was 8.2x. The framework became standard for strategic decisions at Sicredi.",
    l: "I learned that systematic experimentation transforms uncertainty into competitive advantage. I created 'Experimentation Playbook' with 5 principles: clear hypotheses, objective measurement, rapid iteration, risk control, shared learning."
  },
  fups: [
    {
      q: "Qual foi seu maior erro nesse caso?",
      a: "Inicialmente testei hipóteses muito ambiciosas, causando confusão nos dados. Aprendi a começar pequeno e escalar.",
      q_en: "What was your biggest mistake in this case?",
      a_en: "Initially I tested too ambitious hypotheses, causing data confusion. I learned to start small and scale."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Implementaria analytics desde o planejamento, não depois dos primeiros experimentos.",
      q_en: "What would you do differently today?",
      a_en: "I would implement analytics from planning, not after first experiments."
    },
    {
      q: "Qual foi o obstáculo mais difícil?",
      a: "Resistência cultural a experimentação, com medo de 'quebrar' o negócio.",
      q_en: "What was the most difficult obstacle?",
      a_en: "Cultural resistance to experimentation, with fear of 'breaking' the business."
    },
    {
      q: "Quais foram os principais riscos?",
      a: "Perda de confiança se experimentos dessem errado, churn de usuários insatisfeitos.",
      q_en: "What were the main risks?",
      a_en: "Loss of trust if experiments went wrong, churn from dissatisfied users."
    },
    {
      q: "Que dados você usou?",
      a: "Margem por transação, churn rate, NPS, volume transacional, CAC.",
      q_en: "What data did you use?",
      a_en: "Margin per transaction, churn rate, NPS, transaction volume, CAC."
    },
    {
      q: "Como você usou o aprendizado?",
      a: "Criei framework de experimentação usado em 5 produtos diferentes.",
      q_en: "How did you use the learning?",
      a_en: "Created experimentation framework used in 5 different products."
    }
  ]
};

export default case_7;