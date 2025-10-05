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
      message: `Ratio EU:NÓS atual ${formatRatioMessage(heuristics.ratio.counts.eu, heuristics.ratio.counts.nos)}`,
      action: heuristics.ratio.ratio >= 0.75 ? 'Manter foco no "EU" descrevendo decisões críticas pessoais.' : 'Reforçar ações individuais: reescrever frases passivas e destacar decisões pessoais nas seções A/R.'
    });
  }

  if (typeof heuristics.metricsCount === 'number') {
    suggestions.push({
      severity: heuristics.metricsCount >= 8 ? 'info' : 'warning',
      topic: 'metrics',
      message: `Métricas detectadas: ${heuristics.metricsCount}`,
      action: heuristics.metricsCount >= 8 ? 'Boa densidade métrica — verificar se há equilíbrio entre cliente, finanças e operação.' : 'Inserir ou detalhar métricas específicas (cliente, financeiro, operação) nas seções R e A.'
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
    return 'Reposicionar a narrativa começando pelo cliente: explicitar dor, feedbacks e métricas de satisfação.';
  }
  if (/Menos de 8 métricas/i.test(message)) {
    return 'Adicionar métricas tangíveis em Resultado e Ação (cliente, financeiro e operação).';
  }
  if (/Ratio EU:NÓS/i.test(message)) {
    return 'Reescrever seções destacando decisões e ações pessoais ("Eu decidi", "Eu implementei").';
  }
  if (/Case muito antigo/i.test(message)) {
    return 'Trazer casos mais recentes ou conectar explicitamente impactos atuais (mecanismos ainda em uso).';
  }
  return 'Revisar conteúdo com foco nas exigências LP Amazon.';
}

function buildActionFromWarning(message) {
  if (/Customer Obsession/i.test(message)) {
    return 'Incluir evidências claras de voz do cliente, feedbacks e métricas de experiência.';
  }
  if (/financi/i.test(message)) {
    return 'Inserir métricas financeiras (receita, savings, margem) vinculadas ao impacto.';
  }
  if (/operacionais/i.test(message)) {
    return 'Adicionar métricas operacionais (SLA, tempo, eficiência) na seção R.';
  }
  if (/conflito/i.test(message)) {
    return 'Detalhar o conflito: quem discordou, como você sustentou a posição e qual foi o desfecho.';
  }
  if (/Mecanismos/i.test(message)) {
    return 'Explicar processos repetíveis criados (cadência, dashboards, automações, playbooks).';
  }
  if (/Hook/i.test(message)) {
    return 'Reescrever abertura da Situação com tensão executiva: risco, meta agressiva, impacto financeiro.';
  }
  if (/Transicoes STAR\(L\)/i.test(message)) {
    return 'Adicionar frases ponte nas seções T/A/R para guiar a história (ex.: "Para atacar", "Com isso", "O resultado").';
  }
  if (/Mic-drop/i.test(message)) {
    return 'Fortalecer aprendizado no L: insight concreto aplicado em contexto recente.';
  }
  if (/Paridade PT\/EN/i.test(message)) {
    return 'Ajustar texto PT/EN para manter comprimentos próximos e evitar inconsistências.';
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
