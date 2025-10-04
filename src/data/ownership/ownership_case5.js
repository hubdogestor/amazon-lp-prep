// Case 5 - ownership
const case_5 = {
  id: "payment-incidents-prevention-mechanism",
  title: "Criei um Mecanismo para Prevenir Incidentes Reincidentes em Pagamentos",
  title_pt: "Criei um Mecanismo para Prevenir Incidentes Reincidentes em Pagamentos",
  title_en: "Built a Mechanism to Prevent Recurring Incidents in Payment Systems",
  company: "SEFAZ/RS",
  period: "03/2024–08/2024",
  isTopCase: false,
  pt: {
    s: `Tínhamos timeouts de gateway e divergência de status que voltavam a ocorrer, exigindo força‑tarefa e corroendo a confiança com áreas de negócio. O custo oculto era alto (horas, atrasos, ruído com parceiros) e a recorrência indicava que não havia aprendizado institucionalizado.`,
    t: `Parar a reincidência e reduzir o MTTR, estabelecendo ownership único por incidente e um mecanismo de CAPA enxuto, com metas de -50% de repetição em 4 meses e -30% de MTTR.`,
    a: `Instituí ownership single‑threaded por incidente e um CAPA com registro estruturado (causa‑raiz, ação corretiva, preventiva, SLO, DRI e prazo). Padronizei retry idempotente, rollback seguro e critérios de change; conduzi postmortems sem culpa, focados em mecanismos, com sumários executivos; e publiquei playbooks reutilizáveis. Para buy‑in, monetizei custo total das falhas e alinhei com a liderança metas de confiabilidade como parte do scorecard.`,
    r: `Incidentes repetidos caíram ~55% em 4 meses; MTTR reduziu 34%; a liquidação estabilizou; e os escalonamentos diminuíram. Passamos a discutir prevenção e não apenas correção, com melhor previsibilidade para o negócio.`,
    l: `Ownership sem mecanismo vira heroísmo. Com CAPA efetivo e critérios técnicos claros, o aprendizado compõe e a taxa de falhas cai de forma sustentada.`
  },
  en: {
    s: `Gateway timeouts and status divergences kept recurring, forcing fire‑drills and eroding trust with the business. Hidden costs were high and recurrence signaled lack of institutional learning.`,
    t: `Stop recurrence and reduce MTTR by establishing single‑threaded ownership and a lean CAPA mechanism, targeting −50% repeats in 4 months and −30% MTTR.`,
    a: `I instituted single‑owner accountability and a structured CAPA (root cause, corrective & preventive actions, SLO, DRI, due date). I standardized idempotent retry, safe rollback, and change criteria; ran blameless, mechanism‑focused postmortems with exec summaries; and published reusable playbooks. To secure buy‑in, I monetized total failure cost and tied reliability to leadership scorecards.`,
    r: `Repeated incidents dropped ~55% in 4 months; MTTR fell 34%; settlement stabilized; exec escalations decreased. The conversation shifted from fixing to preventing.`,
    l: `Ownership without mechanisms becomes heroics. With effective CAPA and clear technical criteria, learning compounds and failure rates fall sustainably.`
  },
  fups: [
    {
        "q": "Como priorizou incidentes e definiu SLOs por categoria?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you prioritize incidents and set SLOs per category?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que resistências surgiram ao ownership único e como tratou?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What resistance did single-threaded ownership face and how did you handle it?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Quais alternativas ao CAPA foram consideradas e descartadas?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which alternatives to CAPA did you discard and why?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como critérios técnicos (retry idempotente, rollback) reduziram risco de negócio?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did technical criteria (idempotent retry, rollback) cut business risk?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que métricas provaram eficácia (antes/depois, MTTR/MTBF)?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which metrics proved effectiveness (before/after, MTTR/MTBF)?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como escalou o mecanismo para outros sistemas?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you scale the mechanism to other systems?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como evitou que CAPA virasse burocracia?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you keep CAPA from becoming bureaucracy?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como socializou aprendizado entre times?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you spread learning across teams?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Se refizesse, que melhoria de detecção/prevenção faria?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "If redoing, what detection/prevention improvement would you add?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como elevou confiança de stakeholders externos?",
        "a": "Eu descrevi a decisão, os critérios e as evidências, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did this raise external stakeholder trust?",
        "a_en": "I described the decision, criteria, and evidence, tying them to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    }
]
};

export default case_5;
