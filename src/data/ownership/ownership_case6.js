// Case 6 - ownership
const case_6 = {
  id: "long-term-tradeoff",
  title: "Assumi Trade-off: Menos Escopo Agora por Maior Robustez",
  title_pt: "Assumi Trade-off: Menos Escopo Agora por Maior Robustez",
  title_en: "Took the Trade-off: Less Scope Now for Greater Robustness",
  company: "Unimed / Banco Next (ex.)",
  period: "2019-2020",
  isTopCase: false,
  pt: {
    s: `A pressão por features ignorava fragilidades no core de pagamento; risco de incidentes, chargebacks e custo de suporte.`,
    t: `Defendi reduzir escopo e investir em testes de carga, observabilidade e hardening antes de ampliar o produto.`,
    a: `Modelei cenários de carga/receita/custos e mostrei o ponto de inflexão financeiro; ancorei decisão em dados de falhas e riscos de compliance; negociei plano em fases: MVP seguro agora, expansão pós-estabilização.`,
    r: `Disponibilidade +2,1 p.p.; chargebacks -14%; suporte -18% em 6 meses; releases seguintes sem incidentes críticos.`,
    l: `Dizer 'não' protege valor: a organização adotou 'qualidade antes de velocidade' em domínios críticos.`
  },
  en: {
    s: `Feature pressure ignored payment-core fragilities; risk of incidents, chargebacks, and support costs.`,
    t: `I advocated cutting scope and investing in load tests, observability, and hardening before widening the product.`,
    a: `I modeled load/revenue/cost scenarios and showed the financial inflection point; anchored the decision on failure data and compliance risks; negotiated phased plan: safe MVP now, expansion after stabilization.`,
    r: `+2.1 pp availability; -14% chargebacks; -18% support in 6 months; later releases without critical incidents.`,
    l: `Saying 'no' protects value: the org adopted 'quality before speed' in critical domains.`
  },
  fups: [
    {
        "q": "Qual seria o impacto se o trade-off não fosse feito?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What would have happened without the trade-off?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como persuadiu sponsors a priorizar robustez?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you persuade sponsors to prioritize robustness?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como cenários de carga/financeiros sustentaram a decisão?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did load/financial scenarios support the decision?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que riscos foram reduzidos com observabilidade/hardening?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which risks were reduced by observability/hardening?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que métricas provaram o ganho?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which metrics proved the gain?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como esse movimento influenciou o roadmap?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did this influence the roadmap?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Você replicou a abordagem em outros produtos?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Did you replicate the approach elsewhere?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que resistências enfrentou e como resolveu?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What resistance did you face and how did you resolve it?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Se refizesse, o que mudaria no pacing?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "If redoing, what would you change in pacing?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como documentou e socializou o aprendizado?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you document and share the learning?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    }
]
};

export default case_6;
