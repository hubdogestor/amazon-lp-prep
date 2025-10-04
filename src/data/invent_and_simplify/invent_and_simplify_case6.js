// Case 6 - invent_and_simplify
const case_6 = {
  id: "payment-simplification-high-impact",
  title: "Simplifiquei Baixa/Estorno com Matriz de Decisão e Menos Toques",
  title_pt: "Simplifiquei Baixa/Estorno com Matriz de Decisão e Menos Toques",
  title_en: "Simplified Write-off/Refund with a Decision Matrix and Fewer Touches",
  company: "SEFAZ/RS",
  period: "07/2024-10/2024",
  isTopCase: false,
  pt: {
    s: `O fluxo de baixa/estorno acumulava aprovações redundantes, filas e retrabalho, afetando o cliente e elevando custo de backoffice.`,
    t: `Reduzir toques e ambiguidade decisória sem violar compliance/segregação, mirando SLA D+2 (vs D+5) e ~40% de redução de toques.`,
    a: `Redesenhei o processo com matriz valor×tipo×risco calibrada por histórico; removi 3 aprovações redundantes e ancorei responsabilidade com logs/auditoria; padronizei entradas/saídas com templates; implantei checagens automáticas para casos triviais e uma UX operacional clara; tratei resistências com jurídico/financeiro/ops em workshops e pilots.`,
    r: `~42% menos toques; SLA D+5→D+2; NPS interno +23 p.p.; passamos ao quartil superior em tempo de estorno e custo por caso.`,
    l: `Mecanismos simples e baseados em dados escalam sem aumentar risco; a matriz virou padrão para chargebacks.`
  },
  en: {
    s: `The write-off/refund flow had redundant approvals, queues, and rework, hurting customers and raising back-office costs.`,
    t: `Cut touches and decision ambiguity without breaking compliance/SoD, targeting D+2 (vs D+5) and ~40% touch reduction.`,
    a: `I redesigned with an amount×type×risk matrix tuned by history; removed 3 redundant approvals and anchored accountability with logs/audits; standardized inputs/outputs via templates; added auto-checks for trivial cases and clear operational UX; handled resistance via Legal/Finance/Ops workshops and pilots.`,
    r: `~42% fewer touches; SLA D+5→D+2; internal NPS +23 pp; we moved to top quartile on refund time and cost per case.`,
    l: `Simple, data-backed mechanisms scale without adding risk; the matrix became the standard for chargebacks.`
  },
  fups: [
    {
        "q": "Que impacto a simplificação trouxe ao cliente e ao financeiro?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What impact did the simplification have on customers and Finance?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como definiu critérios da matriz (valor/tipo/risco) e validou com histórico?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you define matrix criteria (amount/type/risk) and validate against history?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como tratou resistências ao remover aprovações e ancorou responsabilidade?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you handle resistance to removing approvals and anchor accountability?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Quais métricas de processo/resultado guiaram o piloto?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which process/outcome metrics guided the pilot?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como garantiu compliance e segregação de funções após reduzir toques?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you ensure compliance and SoD after fewer touches?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Houve exceções que testaram a robustez?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Were there exceptions that tested robustness?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como escalou a matriz para chargebacks/outros fluxos?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you scale the matrix to chargebacks/other flows?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Qual comparativo com benchmark após a mudança?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What was the post-change benchmark comparison?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Se refizesse, que ajuste de UX operacional faria?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "If redoing, which operational UX tweak would you make?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que mecanismos evitam degradação do processo ao longo do tempo?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What mechanisms prevent process degradation over time?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    }
]
};

export default case_6;
