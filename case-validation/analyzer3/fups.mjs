const MAX_FUPS = 10;

const CORE_LIBRARY = [
  {
    q: 'Qual foi o maior risco que você assumiu pessoalmente e como mitigou?',
    a: 'Descrever o risco calculado, o plano de mitigação e como monitorou sinais de alerta.',
    q_en: 'What was the biggest personal risk you took and how did you mitigate it?',
    a_en: 'Explain the calculated risk, mitigation plan, and how you monitored leading indicators.'
  },
  {
    q: 'Como você garantiu que os mecanismos criados não dependessem apenas de você?',
    a: 'Explicar como documentou, treinou o time e definiu cadência para torná-los escaláveis.',
    q_en: 'How did you make sure the mechanisms created did not rely solely on you?',
    a_en: 'Share how you documented, trained the team, and set cadence to make them scalable.'
  },
  {
    q: 'Quais dados você usou para auditar se a solução continuava saudável após o lançamento?',
    a: 'Detalhar indicadores leading/lagging, frequência de auditoria e ações corretivas.',
    q_en: 'Which data did you use to audit the solution after launch?',
    a_en: 'Detail leading/lagging indicators, audit cadence, and corrective actions.'
  },
  {
    q: 'Relate um momento em que recebeu pushback de um stakeholder crítico e como resolveu.',
    a: 'Descrever contexto, argumentos utilizados, trade-offs assumidos e compromisso final.',
    q_en: 'Describe a moment when a critical stakeholder pushed back and how you resolved it.',
    a_en: 'Cover context, arguments, trade-offs, and how you achieved commitment.'
  },
  {
    q: 'Se tivesse 20% menos tempo, o que cortaria e o que preservaria?',
    a: 'Indicar prioridades inegociáveis, insumos que protegem qualidade e o que pode ser simplificado.',
    q_en: 'If you had 20% less time, what would you cut and what would you preserve?',
    a_en: 'Highlight non-negotiable priorities, quality safeguards, and what could be simplified.'
  }
];

const CUSTOMER_LIBRARY = [
  {
    q: 'Como você capturou a voz do cliente além dos dados quantitativos?',
    a: 'Explicar entrevistas, shadowing, tickets, reviews e como esses sinais mudaram a solução.',
    q_en: 'How did you capture the voice of the customer beyond quantitative data?',
    a_en: 'Explain interviews, shadowing, tickets, reviews, and how those signals changed the solution.'
  },
  {
    q: 'Quais métricas de cliente você definiu como leading indicators?',
    a: 'Listar métricas de experiência, thresholds de alerta e forma de resposta rápida.',
    q_en: 'Which customer metrics did you define as leading indicators?',
    a_en: 'List the experience metrics, alert thresholds, and how you triggered a fast response.'
  }
];

const METRICS_LIBRARY = [
  {
    q: 'Como você calculou o impacto financeiro e validou com finanças?',
    a: 'Descrever modelo financeiro, premissas, validação com FP&A ou controller.',
    q_en: 'How did you calculate the financial impact and validate it with finance?',
    a_en: 'Describe the financial model, assumptions, and FP&A/controller validation.'
  },
  {
    q: 'Qual foi a métrica mais desafiadora de coletar e como garantiu qualidade dos dados?',
    a: 'Comentar sobre origem, limpeza, governança e mecanismo de auditoria.',
    q_en: 'Which metric was hardest to capture and how did you ensure data quality?',
    a_en: 'Talk about source, cleansing, governance, and the audit mechanism.'
  }
];

const MECHANISM_LIBRARY = [
  {
    q: 'Que mecanismos você instituiu para impedir regressão após sua saída?',
    a: 'Falar sobre cadências, donos claros, dashboards automáticos e revisões executivas.',
    q_en: 'What mechanisms did you install to avoid regression once you stepped away?',
    a_en: 'Cover cadences, clear owners, automated dashboards, and exec reviews.'
  },
  {
    q: 'Como você difundiu o aprendizado para outras equipes?',
    a: 'Explicar playbooks, treinamentos, guilds ou documentação padrão.',
    q_en: 'How did you spread the learning to other teams?',
    a_en: 'Explain playbooks, trainings, guilds, or standard documentation.'
  }
];

function deepClone(value) {
  return JSON.parse(JSON.stringify(value ?? {}));
}

function buildCuratedList(lpId, heuristics = {}) {
  const pool = [...CORE_LIBRARY];
  if ((heuristics.customerSignals ?? 0) < 3) pool.push(...CUSTOMER_LIBRARY);
  if (!heuristics.metricCategories?.financial || !heuristics.metricCategories?.operational) pool.push(...METRICS_LIBRARY);
  if ((heuristics.mechanismSignals ?? 0) < 1) pool.push(...MECHANISM_LIBRARY);

  const lpSpecific = lpIdToFups(lpId);
  pool.push(...lpSpecific);

  return pool;
}

function lpIdToFups(lpId = '') {
  const map = {
    bias_for_action: [
      {
        q: 'Qual foi o trigger para agir sem ter todos os dados e como voce definiu o guardrail?',
        a: 'Descrever sinal leading, criterio de reversibilidade (two-way door) e plano de rollback.',
        q_en: 'What triggered you to act without full data and how did you set guardrails?',
        a_en: 'Describe leading signal, two-way door criteria, and rollback plan.'
      },
      {
        q: 'Como voce balanceou velocidade com controle de risco e quais mecanismos evitaram retrabalho?',
        a: 'Detalhar plano de mitigacao, mecanismos de auditoria rapida e checkpoints pos-lancamento.',
        q_en: 'How did you balance speed with risk control and what mechanisms prevented rework?',
        a_en: 'Detail mitigation plan, rapid audit mechanisms, and post-launch checkpoints.'
      }
    ],
    customer_obsession: [
      {
        q: 'Que métricas comprovam que o cliente percebeu o valor da solução?',
        a: 'Apontar evidências quantitativas (NPS, churn, CSAT) e qualitativas (quotes, tickets).',
        q_en: 'Which metrics prove the customer noticed the value of your solution?',
        a_en: 'Point to quantitative evidence (NPS, churn, CSAT) and qualitative quotes/tickets.'
      }
    ],
    dive_deep: [
      {
        q: 'Quais camadas de dados você auditou pessoalmente e que defeitos encontrou?',
        a: 'Detalhar consultas, inconsistências descobertas e como fechou a auditoria.',
        q_en: 'Which data layers did you personally audit and what defects did you find?',
        a_en: 'Detail queries, inconsistencies uncovered, and how you closed the audit.'
      }
    ],
    ownership: [
      {
        q: 'Como você manteve accountability mesmo sem autoridade formal?',
        a: 'Descrever mecanismos de alinhamento, escalonamento e decisões difíceis.',
        q_en: 'How did you keep accountability even without formal authority?',
        a_en: 'Describe alignment mechanisms, escalations, and tough calls.'
      }
    ]
  };

  return map[lpId] ? [...map[lpId]] : [];
}

export function optimizeFUPs(originalCase = {}, heuristics = {}, lpId = '') {
  const cloned = deepClone(originalCase);
  if (!Array.isArray(cloned.fups)) cloned.fups = [];

  const existingQuestions = new Set(cloned.fups.map(item => (item?.q || '').trim().toLowerCase()));
  const curated = buildCuratedList(lpId, heuristics);
  const added = [];

  while (cloned.fups.length < MAX_FUPS && curated.length) {
    const candidate = curated.shift();
    if (!candidate) break;
    const key = (candidate.q || '').trim().toLowerCase();
    if (existingQuestions.has(key)) continue;
    cloned.fups.push(candidate);
    existingQuestions.add(key);
    added.push(candidate.q);
  }

  return {
    changed: added.length > 0,
    changes: added.map(q => ({ severity: 'info', topic: 'fup', message: `FUP adicionada: ${q}` })),
    case: cloned
  };
}
