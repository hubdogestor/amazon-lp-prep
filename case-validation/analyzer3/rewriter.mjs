import { STARL_KEYS } from './utils/schema.mjs';

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj ?? {}));
}

export function ensureParityPTEN(originalCase = {}) {
  const cloned = deepClone(originalCase);
  const changes = [];
  let changed = false;

  if (!cloned.pt || typeof cloned.pt !== 'object') {
    cloned.pt = Object.fromEntries(STARL_KEYS.map(key => [key, '']));
    changes.push({ code: 'create_pt', severity: 'critical', message: 'Estrutura PT criada vazia' });
    changed = true;
  }

  if (!cloned.en || typeof cloned.en !== 'object') {
    cloned.en = Object.fromEntries(STARL_KEYS.map(key => [key, '']));
    changes.push({ code: 'create_en', severity: 'critical', message: 'Estrutura EN criada vazia' });
    changed = true;
  }

  for (const key of STARL_KEYS) {
    if (typeof cloned.pt[key] !== 'string') {
      cloned.pt[key] = '';
      changes.push({ code: `fill_pt_${key}`, severity: 'critical', message: `pt.${key} preenchido com string vazia` });
      changed = true;
    }
    if (typeof cloned.en[key] !== 'string') {
      cloned.en[key] = '';
      changes.push({ code: `fill_en_${key}`, severity: 'critical', message: `en.${key} preenchido com string vazia` });
      changed = true;
    }
  }

  return { changed, changes, case: cloned };
}

export function rewriteCase(originalCase = {}, heuristics = {}) {
  const suggestions = [];

  if (heuristics.dealbreakers?.length) {
    for (const item of heuristics.dealbreakers) {
      suggestions.push({ severity: 'dealbreaker', topic: 'dealbreaker', message: item, action: buildActionFromDealbreaker(item) });
    }
  }

  if (heuristics.warnings?.length) {
    for (const warning of heuristics.warnings) {
      suggestions.push({ severity: 'warning', topic: 'warning', message: warning, action: buildActionFromWarning(warning) });
    }
  }

  if (heuristics.ratio) {
    suggestions.push({
      severity: heuristics.ratio.ratio >= 0.75 ? 'info' : heuristics.ratio.ratio >= 0.67 ? 'warning' : 'dealbreaker',
      topic: 'ownership',
      message: `Ratio EU:N�S atual ${formatRatioMessage(heuristics.ratio.counts.eu, heuristics.ratio.counts.nos)}`,
      action: heuristics.ratio.ratio >= 0.75 ? 'Manter foco no "EU" descrevendo decis�es cr�ticas pessoais.' : 'Refor�ar a��es individuais: reescrever frases passivas e destacar decis�es pessoais nas se��es A/R.'
    });
  }

  if (typeof heuristics.metricsCount === 'number') {
    suggestions.push({
      severity: heuristics.metricsCount >= 8 ? 'info' : 'warning',
      topic: 'metrics',
      message: `M�tricas detectadas: ${heuristics.metricsCount}`,
      action: heuristics.metricsCount >= 8 ? 'Boa densidade m�trica � verificar se h� equil�brio entre cliente, finan�as e opera��o.' : 'Inserir ou detalhar m�tricas espec�ficas (cliente, financeiro, opera��o) nas se��es R e A.'
    });
  }

  const mutated = {
    ...deepClone(originalCase),
    __scorecard: {
      score: heuristics.score,
      status: heuristics.status,
      positives: heuristics.positives || [],
      warnings: heuristics.warnings || [],
      dealbreakers: heuristics.dealbreakers || [],
      suggestions
    }
  };

  return {
    changed: suggestions.length > 0,
    changes: suggestions,
    case: mutated
  };
}

function buildActionFromDealbreaker(message) {
  if (/Customer Obsession/i.test(message)) {
    return 'Reposicionar a narrativa come�ando pelo cliente: explicitar dor, feedbacks e m�tricas de satisfa��o.';
  }
  if (/Menos de 8 m�tricas/i.test(message)) {
    return 'Adicionar m�tricas tang�veis em Resultado e A��o (cliente, financeiro e opera��o).';
  }
  if (/Ratio EU:N�S/i.test(message)) {
    return 'Reescrever se��es destacando decis�es e a��es pessoais ("Eu decidi", "Eu implementei").';
  }
  if (/Case muito antigo/i.test(message)) {
    return 'Trazer casos mais recentes ou conectar explicitamente impactos atuais (mecanismos ainda em uso).';
  }
  return 'Revisar conte�do com foco nas exig�ncias LP Amazon.';
}

function buildActionFromWarning(message) {
  if (/Customer Obsession/i.test(message)) {
    return 'Incluir evid�ncias claras de voz do cliente, feedbacks e m�tricas de experi�ncia.';
  }
  if (/financi/i.test(message)) {
    return 'Inserir m�tricas financeiras (receita, savings, margem) vinculadas ao impacto.';
  }
  if (/operacionais/i.test(message)) {
    return 'Adicionar m�tricas operacionais (SLA, tempo, efici�ncia) na se��o R.';
  }
  if (/conflito/i.test(message)) {
    return 'Detalhar o conflito: quem discordou, como voc� sustentou a posi��o e qual foi o desfecho.';
  }
  if (/Mecanismos/i.test(message)) {
    return 'Explicar processos repet�veis criados (cad�ncia, dashboards, automa��es, playbooks).';
  }
  if (/Hook/i.test(message)) {
    return 'Reescrever abertura da Situa��o com tens�o executiva: risco, meta agressiva, impacto financeiro.';
  }
  if (/Transicoes STAR\(L\)/i.test(message)) {
    return 'Adicionar frases ponte nas se��es T/A/R para guiar a hist�ria (ex.: "Para atacar", "Com isso", "O resultado").';
  }
  if (/Mic-drop/i.test(message)) {
    return 'Fortalecer aprendizado no L: insight concreto aplicado em contexto recente.';
  }
  if (/Paridade PT\/EN/i.test(message)) {
    return 'Ajustar texto PT/EN para manter comprimentos pr�ximos e evitar inconsist�ncias.';
  }
  if (/Case antigo/i.test(message)) {
    return 'Conectar explicitamente como o mecanismo segue ativo ou considere um case mais recente.';
  }
  return 'Refinar narrativa conforme alerta.';
}

function formatRatioMessage(eu, nos) {
  if (nos === 0) return `${eu}:0 (ideal >= 3:1)`;
  return `${eu}:${nos} (ideal >= 3:1)`;
}

const TRANSITIONS = {
  pt: {
    s_t: [
      "Diante desse cenário, ",
      "Frente a este desafio, ",
      "Nesse contexto, ",
      "Com a urgência estabelecida, ",
    ],
    t_a: [
      "Para atingir essa meta, minha abordagem foi ",
      "Para executar essa visão, eu estruturei o trabalho em ",
      "Com o objetivo definido, eu agi em ",
      "Para transformar o plano em realidade, minha estratégia foi ",
    ],
    a_r: [
      "Como resultado direto dessas ações, ",
      "Esse esforço coordenado culminou em ",
      "O impacto mensurável dessa iniciativa foi ",
      "Com isso, os resultados que obtivemos foram ",
    ],
    r_l: [
      "Olhando para trás, a grande lição que tirei foi ",
      "Refletindo sobre o processo, aprendi que ",
      "Essa experiência me ensinou que ",
      "Como aprendizado principal, ficou claro que ",
    ],
  },
  en: {
    s_t: [
      "Faced with this scenario, ",
      "Given this challenge, ",
      "In this context, ",
      "With the urgency established, ",
    ],
    t_a: [
      "To achieve this goal, my approach was to ",
      "To execute this vision, I structured the work into ",
      "With the objective set, I took action on ",
      "To turn the plan into reality, my strategy was to ",
    ],
    a_r: [
      "As a direct result of these actions, ",
      "This coordinated effort culminated in ",
      "The measurable impact of this initiative was ",
      "As a result, the outcomes we achieved were ",
    ],
    r_l: [
      "Looking back, the key lesson I learned was that ",
      "Reflecting on the process, I learned that ",
      "This experience taught me that ",
      "As a key takeaway, it became clear that ",
    ],
  },
};

function getRandomTransition(lang, key) {
  const transitions = TRANSITIONS[lang][key];
  return transitions[Math.floor(Math.random() * transitions.length)];
}

function hasTransition(text, lang, key) {
    const lowerText = text.toLowerCase().trim();
    return TRANSITIONS[lang][key].some(t => lowerText.startsWith(t.toLowerCase().trim()));
}

export function rewriteCaseV2(originalCase = {}, heuristics = {}) {
  const newCase = deepClone(originalCase);
  const changes = [];
  let changed = false;

  const needsHookImprovement = heuristics.warnings?.some(w => /Hook/i.test(w));
  const needsTransitionImprovement = heuristics.warnings?.some(w => /Transicoes STAR\(L\)/i.test(w));

  if (needsHookImprovement) {
    for (const lang of ['pt', 'en']) {
      if (newCase[lang]?.s) {
        const originalText = newCase[lang].s;
        const sentences = originalText.split(/(?<=[.!?])\s+/);
        if (sentences.length > 1) {
          const firstSentence = sentences.shift();
          const hookPrefix = lang === 'pt' ? 'O desafio começou quando ' : 'The challenge began when ';
          const newFirstSentence = hookPrefix + firstSentence.charAt(0).toLowerCase() + firstSentence.slice(1);
          newCase[lang].s = [newFirstSentence, ...sentences].join(' ');
          
          if (originalText !== newCase[lang].s) {
            changed = true;
            changes.push({
              severity: 'suggestion',
              topic: 'hook',
              message: `[${lang}] Hook (S) reescrito para maior impacto.`,
              action: 'Validar se o novo hook captura a urgência e os stakes do caso.'
            });
          }
        }
      }
    }
  }

  if (needsTransitionImprovement) {
    for (const lang of ['pt', 'en']) {
        const starl = newCase[lang];
        if (!starl) continue;

        // S -> T
        if (starl.t && !hasTransition(starl.t, lang, 's_t')) {
            const transition = getRandomTransition(lang, 's_t');
            starl.t = transition + starl.t.charAt(0).toLowerCase() + starl.t.slice(1);
            changed = true;
            changes.push({ severity: 'suggestion', topic: 'transition', message: `[${lang}] Adicionada transição S->T.` });
        }

        // T -> A
        if (starl.a && !hasTransition(starl.a, lang, 't_a')) {
            const transition = getRandomTransition(lang, 't_a');
            starl.a = transition + starl.a.charAt(0).toLowerCase() + starl.a.slice(1);
            changed = true;
            changes.push({ severity: 'suggestion', topic: 'transition', message: `[${lang}] Adicionada transição T->A.` });
        }

        // A -> R
        if (starl.r && !hasTransition(starl.r, lang, 'a_r')) {
            const transition = getRandomTransition(lang, 'a_r');
            starl.r = transition + starl.r.charAt(0).toLowerCase() + starl.r.slice(1);
            changed = true;
            changes.push({ severity: 'suggestion', topic: 'transition', message: `[${lang}] Adicionada transição A->R.` });
        }

        // R -> L
        if (starl.l && !hasTransition(starl.l, lang, 'r_l')) {
            const transition = getRandomTransition(lang, 'r_l');
            starl.l = transition + starl.l.charAt(0).toLowerCase() + starl.l.slice(1);
            changed = true;
            changes.push({ severity: 'suggestion', topic: 'transition', message: `[${lang}] Adicionada transição R->L.` });
        }
    }
  }

  const baseRewrite = rewriteCase(newCase, heuristics);
  
  const finalCase = baseRewrite.case;
  finalCase.__scorecard.suggestions = [...changes, ...baseRewrite.changes];

  return {
    changed: changed || baseRewrite.changed,
    changes: finalCase.__scorecard.suggestions,
    case: finalCase,
  };
}
