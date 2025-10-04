// Case 4 - bias_for_action
const case_4 = {
  id: "calculated-risk-time-critical",
  title: "Ativei 4G em Janela Crítica com Risco Calculado (Arenas)",
  title_pt: "Ativei 4G em Janela Crítica com Risco Calculado (Arenas)",
  title_en: "Activated 4G in a Critical Window with Calculated Risk (Arenas)",
  company: "Huawei/Operadora (ex.)",
  period: "2014",
  isTopCase: false,
  pt: {
    s: `Janela curta para ativar 4G antes de eventos; perder o prazo prejudicaria a experiência e parcerias.`,
    t: `Ativar no prazo com risco controlado, evitando indisponibilidade ampla.`,
    a: `Escolhi ativação por zonas com rollback planejado; defini GO/NO-GO claros e telemetria priorizada; orquestrei dependências externas e comunicação em tempo real (NOC, campo, parceiros).`,
    r: `Ativação no prazo, sem indisponibilidade ampla; contingência não foi necessária; playbook virou referência.`,
    l: `Velocidade com disciplina: critérios objetivos mantêm risco sob controle.`
  },
  en: {
    s: `Short window to activate 4G before events; missing it would harm UX and partnerships.`,
    t: `Activate on time with controlled risk, avoiding widespread outages.`,
    a: `I chose zoned activation with planned rollback; set clear GO/NO-GO and prioritized telemetry; orchestrated external dependencies and real-time comms (NOC, field, partners).`,
    r: `On-time activation, no wide outages; contingency unused; playbook became a reference.`,
    l: `Speed with discipline: objective criteria keep risk under control.`
  },
  fups: [
    {
        "q": "Qual era o custo de perder a janela?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What was the cost of missing the window?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Por que ativação por zonas foi superior?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Why was zoned activation superior?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como critérios de rollback evitaram incidentes?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did rollback criteria prevent incidents?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que telemetria foi crítica no cutover?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which telemetry was critical during cutover?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como coordenou dependências externas?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you coordinate external dependencies?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Quais métricas usou no go-live?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which metrics did you use on go-live?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que playbook/documentação deixou como legado?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What playbook/documentation did you leave?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Se refizesse, que otimização faria?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "If redoing, what optimization would you make?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como escalou o padrão para outros eventos?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you scale the pattern to other events?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como protegeu a experiência do usuário final?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you protect end-user experience?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    }
]
};

export default case_4;
