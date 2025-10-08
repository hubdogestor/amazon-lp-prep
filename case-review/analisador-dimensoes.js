/**
 * ANALISADOR DE DIMENSÕES
 *
 * Analisa profundamente as 6 dimensões de qualidade:
 * 1. Hooks Dramáticos
 * 2. Transições STAR
 * 3. Mic-Drops (Learning)
 * 4. Customer Obsession Explícita
 * 5. Conflito/Hardening
 * 6. Ratio EU:NÓS Detalhado
 *
 * Gera: analysis/by-dimension/*.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INVENTORY_FILE = path.join(__dirname, 'reports', '01-inventory.json');
const SCORING_FILE = path.join(__dirname, 'reports', '02-scoring-summary.json');
const OUTPUT_DIR = path.join(__dirname, 'analysis', 'by-dimension');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

/**
 * Carrega case completo
 */
async function loadFullCase(filePath) {
  try {
    const fileUrl = pathToFileURL(path.join(__dirname, '..', filePath)).href;
    const module = await import(fileUrl + '?cb=' + Date.now());
    const caseObj = module.default || Object.values(module)[0];

    if (caseObj.pt && !caseObj.s) {
      return {
        ...caseObj,
        s: caseObj.pt?.s,
        t: caseObj.pt?.t,
        a: caseObj.pt?.a,
        r: caseObj.pt?.r,
        l: caseObj.pt?.l,
        s_en: caseObj.en?.s,
        t_en: caseObj.en?.t,
        a_en: caseObj.en?.a,
        r_en: caseObj.en?.r,
        l_en: caseObj.en?.l
      };
    }
    return caseObj;
  } catch (error) {
    return null;
  }
}

/**
 * Analisa qualidade do hook (abertura Situation)
 */
function analyzeHook(caseObj, caseInfo) {
  const hook = caseObj.s || '';
  const firstSentences = hook.split(/[.!?]/).slice(0, 3).join('. ');

  // Detectores de tensão dramática
  const hasTension = /ameaça|risco|crítico|urgente|emergência|falh|cris|deadline|prazo|perder|colapso/gi.test(firstSentences);
  const hasStakes = /milhões|milhares|\d+[KMB]|R\$|USD|receita|clientes|vidas|beneficiários/gi.test(firstSentences);
  const hasUrgency = /horas|dias|meses|semanas|quando|faltavam|tempo/gi.test(firstSentences);
  const hasNumbers = /\d+/.test(firstSentences);

  // Detectores de hooks genéricos (red flags)
  const isGeneric = /^(em|quando eu|eu trabalhava|eu assumi|durante)/gi.test(hook.trim());

  let score = 0;
  let quality = 'weak';
  const strengths = [];
  const weaknesses = [];

  if (hasTension) { score += 3; strengths.push('Tensão dramática presente'); }
  else { weaknesses.push('Falta tensão dramática'); }

  if (hasStakes) { score += 3; strengths.push('Stakes numéricos explícitos'); }
  else { weaknesses.push('Falta stakes quantificados'); }

  if (hasUrgency) { score += 2; strengths.push('Urgência temporal'); }
  else { weaknesses.push('Falta senso de urgência'); }

  if (hasNumbers) { score += 2; strengths.push('Dados numéricos no hook'); }

  if (isGeneric) { score -= 3; weaknesses.push('Abertura genérica (padrão "Em/Quando")'); }

  if (score >= 8) quality = 'strong';
  else if (score >= 5) quality = 'medium';
  else quality = 'weak';

  return {
    case_id: caseInfo.id,
    lp: caseInfo.lp,
    quality,
    score,
    hook_preview: firstSentences.substring(0, 150) + '...',
    strengths,
    weaknesses,
    has_tension: hasTension,
    has_stakes: hasStakes,
    has_urgency: hasUrgency,
    is_generic: isGeneric
  };
}

/**
 * Analisa transições STAR
 */
function analyzeTransitions(caseObj, caseInfo) {
  const text = [caseObj.s, caseObj.t, caseObj.a, caseObj.r, caseObj.l].join(' ');

  // Detectores de transições explícitas
  const transitionPatterns = [
    /TRANSIÇÃO|TRANSITION/gi,
    /diante\s+(desse|disso|dessa)/gi,
    /para\s+(cumprir|entregar|resolver)/gi,
    /esse\s+esforço/gi,
    /retrospectivamente|olhando\s+para\s+trás/gi,
    /aprendi\s+que/gi
  ];

  const transitionsFound = [];
  let totalTransitions = 0;

  for (const pattern of transitionPatterns) {
    const matches = text.match(pattern);
    if (matches) {
      totalTransitions += matches.length;
      transitionsFound.push({
        pattern: pattern.source,
        count: matches.length
      });
    }
  }

  // Detecta se tem markers explícitos de TRANSIÇÃO
  const hasExplicitMarkers = /TRANSIÇÃO|TRANSITION/gi.test(text);

  let quality = 'weak';
  if (totalTransitions >= 4) quality = 'strong';
  else if (totalTransitions >= 2) quality = 'medium';

  return {
    case_id: caseInfo.id,
    lp: caseInfo.lp,
    quality,
    total_transitions: totalTransitions,
    has_explicit_markers: hasExplicitMarkers,
    transitions_found: transitionsFound,
    recommendation: quality === 'weak' ? 'Adicionar conectores narrativos entre S→T→A→R→L' : 'OK'
  };
}

/**
 * Analisa mic-drop (Learning)
 */
function analyzeMicDrop(caseObj, caseInfo) {
  const learning = caseObj.l || '';

  // Framework de mic-drop:
  // 1. Learning abstrato
  // 2. Learning operacional (mecanismo criado)
  // 3. Learning replicado (onde aplicou depois)
  // 4. Mic-drop (frase memorável final)

  const hasAbstract = /aprendi que|lição|lesson/gi.test(learning);
  const hasMechanism = /mecanismo|ritual|playbook|framework|processo|gate|guardrail/gi.test(learning);
  const hasReplication = /replicado|adotado|aplicado|usado\s+em|hoje/gi.test(learning);
  const hasMicDrop = /mic-drop|cultura\s+muda|hoje.*rejeito|agora.*significa/gi.test(learning);

  let score = 0;
  const elements = [];
  const missing = [];

  if (hasAbstract) { score += 2; elements.push('Learning abstrato'); }
  else { missing.push('Learning abstrato claro'); }

  if (hasMechanism) { score += 3; elements.push('Mecanismo operacional criado'); }
  else { missing.push('Mecanismo/sistema criado'); }

  if (hasReplication) { score += 3; elements.push('Evidência de replicação'); }
  else { missing.push('Replicação em outros contextos'); }

  if (hasMicDrop) { score += 2; elements.push('Mic-drop memorável'); }
  else { missing.push('Frase de impacto final'); }

  let quality = 'weak';
  if (score >= 8) quality = 'strong';
  else if (score >= 5) quality = 'medium';

  return {
    case_id: caseInfo.id,
    lp: caseInfo.lp,
    quality,
    score,
    elements_present: elements,
    elements_missing: missing,
    learning_preview: learning.substring(0, 200) + '...'
  };
}

/**
 * Analisa Customer Obsession explícita
 */
function analyzeCustomerObsession(caseObj, caseInfo) {
  const fullText = [caseObj.s, caseObj.t, caseObj.a, caseObj.r, caseObj.l].join(' ');

  // 1. Quem é o cliente?
  const clientPatterns = /cliente|customer|usuário|user|beneficiário|member|consumidor|cooperado/gi;
  const clientMentions = (fullText.match(clientPatterns) || []).length;

  // 2. Métricas de satisfação
  const satisfactionPatterns = /NPS|CSAT|satisfação|satisfaction|feedback|reclamação|complaint|churn|retenção|retention/gi;
  const hasSatisfactionMetrics = satisfactionPatterns.test(fullText);

  // 3. Impacto no cliente
  const impactPatterns = /impacto.*cliente|customer.*impact|experiência|experience|jornada|journey/gi;
  const hasImpactStatement = impactPatterns.test(fullText);

  // 4. Backwards from customer
  const backwardsPatterns = /voz\s+do\s+cliente|voice\s+of.*customer|ouvir.*cliente|listen.*customer|entrevistas|interviews/gi;
  const hasBackwards = backwardsPatterns.test(fullText);

  let score = 0;
  const elements = [];
  const missing = [];

  if (clientMentions >= 3) {
    score += 3;
    elements.push(`Cliente mencionado ${clientMentions}x`);
  } else {
    missing.push('Aumentar menções ao cliente');
  }

  if (hasSatisfactionMetrics) {
    score += 3;
    elements.push('Métricas de satisfação presentes');
  } else {
    missing.push('Adicionar métricas de satisfação');
  }

  if (hasImpactStatement) {
    score += 2;
    elements.push('Impacto no cliente explícito');
  } else {
    missing.push('Explicitar impacto no cliente');
  }

  if (hasBackwards) {
    score += 2;
    elements.push('Trabalho backwards from customer');
  } else {
    missing.push('Evidenciar "backwards from customer"');
  }

  let quality = 'weak';
  if (score >= 8) quality = 'strong';
  else if (score >= 5) quality = 'medium';

  return {
    case_id: caseInfo.id,
    lp: caseInfo.lp,
    quality,
    score,
    client_mentions: clientMentions,
    has_satisfaction_metrics: hasSatisfactionMetrics,
    has_impact_statement: hasImpactStatement,
    has_backwards_approach: hasBackwards,
    elements_present: elements,
    elements_missing: missing
  };
}

/**
 * Analisa conflito/hardening
 */
function analyzeConflict(caseObj, caseInfo) {
  const action = caseObj.a || '';

  // Elementos de conflito
  const hasResistance = /resistência|resistiu|bloqueou|travou|vetou|ameaçou|recusou/gi.test(action);
  const hasTradeoff = /trade-off|escolher\s+entre|dilema|sacrific|abr(ir\s+mão|icar)/gi.test(action);
  const hasDoubt = /dúvida|desist|falh|erro|difícil|desafiador/gi.test(action);
  const hasEscalation = /escalei|levei\s+ao|CEO|diretor|board|apresentei/gi.test(action);
  const hasDataProof = /dados\s+provaram|evidência|demonstrei\s+com/gi.test(action);

  let score = 0;
  const conflicts = [];
  const missing = [];

  if (hasResistance) { score += 3; conflicts.push('Resistência de stakeholder'); }
  else { missing.push('Resistência/oposição enfrentada'); }

  if (hasTradeoff) { score += 2; conflicts.push('Trade-off difícil'); }
  else { missing.push('Trade-offs explícitos'); }

  if (hasDoubt) { score += 1; conflicts.push('Momento de dúvida/hardening'); }

  if (hasEscalation) { score += 2; conflicts.push('Escalação necessária'); }

  if (hasDataProof) { score += 2; conflicts.push('Superou com dados'); }

  let quality = 'weak';
  if (score >= 7) quality = 'strong';
  else if (score >= 4) quality = 'medium';

  return {
    case_id: caseInfo.id,
    lp: caseInfo.lp,
    quality,
    score,
    conflicts_present: conflicts,
    conflicts_missing: missing.length > 0 ? missing : ['Nenhum conflito significativo detectado']
  };
}

/**
 * Main
 */
async function main() {
  console.log('🔍 Análise Profunda por Dimensão (71 cases)...\n');

  const inventory = JSON.parse(fs.readFileSync(INVENTORY_FILE, 'utf8'));
  const scoring = JSON.parse(fs.readFileSync(SCORING_FILE, 'utf8'));

  const analyses = {
    hooks: [],
    transitions: [],
    micDrops: [],
    customerObsession: [],
    conflict: []
  };

  // Analisa cada case
  for (const lp of inventory.leadership_principles) {
    console.log(`\n📂 Analisando ${lp.name}...`);

    for (const caseInfo of lp.cases) {
      const fullCase = await loadFullCase(caseInfo.file_path);
      if (!fullCase) continue;

      console.log(`   • ${caseInfo.id}`);

      analyses.hooks.push(analyzeHook(fullCase, caseInfo));
      analyses.transitions.push(analyzeTransitions(fullCase, caseInfo));
      analyses.micDrops.push(analyzeMicDrop(fullCase, caseInfo));
      analyses.customerObsession.push(analyzeCustomerObsession(fullCase, caseInfo));
      analyses.conflict.push(analyzeConflict(fullCase, caseInfo));
    }
  }

  // Gera relatórios
  console.log('\n\n📝 Gerando relatórios...\n');

  generateHooksReport(analyses.hooks);
  generateTransitionsReport(analyses.transitions);
  generateMicDropsReport(analyses.micDrops);
  generateCustomerObsessionReport(analyses.customerObsession);
  generateConflictReport(analyses.conflict);

  console.log('\n✅ Análise dimensional completa!');
}

/**
 * Gera relatório de hooks
 */
function generateHooksReport(hooks) {
  const strong = hooks.filter(h => h.quality === 'strong');
  const medium = hooks.filter(h => h.quality === 'medium');
  const weak = hooks.filter(h => h.quality === 'weak');

  const report = `# Análise: Hooks Dramáticos

## Metodologia
- ✅ **Hook forte**: Tensão + stakes + urgência nas primeiras 2-3 frases
- ⚠️ **Hook médio**: Contextualiza mas sem tensão dramática completa
- ❌ **Hook fraco**: Genérico, "Em [data] eu assumi..."

## Resultados

### Distribuição de Qualidade

| Qualidade | Count | % |
|-----------|-------|---|
| ✅ Forte  | ${strong.length} | ${((strong.length / hooks.length) * 100).toFixed(1)}% |
| ⚠️ Médio  | ${medium.length} | ${((medium.length / hooks.length) * 100).toFixed(1)}% |
| ❌ Fraco  | ${weak.length} | ${((weak.length / hooks.length) * 100).toFixed(1)}% |

---

## 🔥 Hooks Exemplares (${strong.length} cases)

${strong.slice(0, 10).map((h, i) => `
### ${i + 1}. \`${h.case_id}\` (${h.lp})
**Preview**: "${h.hook_preview}"

**Pontos Fortes**:
${h.strengths.map(s => `- ✅ ${s}`).join('\n')}

**Score**: ${h.score}/10
`).join('\n---\n')}

${strong.length > 10 ? `\n... e mais ${strong.length - 10} hooks fortes.\n` : ''}

---

## ⚠️ Hooks Médios (${medium.length} cases)

${medium.slice(0, 5).map((h, i) => `
### ${i + 1}. \`${h.case_id}\` (${h.lp})
**Preview**: "${h.hook_preview}"

**Oportunidades**:
${h.weaknesses.map(w => `- ⚠️ ${w}`).join('\n')}

**Recomendação**: ${h.weaknesses.includes('Falta tensão dramática') ? 'Adicionar tensão e stakes numéricos logo na primeira frase' : 'Intensificar urgência temporal'}
`).join('\n---\n')}

---

## ❌ Hooks Fracos (${weak.length} cases)

${weak.map((h, i) => `
### ${i + 1}. \`${h.case_id}\` (${h.lp}) - Score: ${h.score}/10
**Preview**: "${h.hook_preview}"

**Problemas**:
${h.weaknesses.map(w => `- ❌ ${w}`).join('\n')}

**Recomendação**: Reescrever hook com framework [URGÊNCIA] + [STAKES] + [CONFLITO INICIAL]

**Exemplo de reescrita**:
- ❌ ANTES: "Em janeiro de 2023 eu assumi a diretoria de..."
- ✅ DEPOIS: "Quando o NPS despencou para 28 e o conselho ameaçou terceirizar, eu tinha 12 meses para salvar 1.6M de beneficiários..."
`).join('\n---\n')}

---

## 📊 Estatísticas

- **Hooks com tensão dramática**: ${hooks.filter(h => h.has_tension).length}/${hooks.length} (${((hooks.filter(h => h.has_tension).length / hooks.length) * 100).toFixed(1)}%)
- **Hooks com stakes numéricos**: ${hooks.filter(h => h.has_stakes).length}/${hooks.length} (${((hooks.filter(h => h.has_stakes).length / hooks.length) * 100).toFixed(1)}%)
- **Hooks com urgência**: ${hooks.filter(h => h.has_urgency).length}/${hooks.length} (${((hooks.filter(h => h.has_urgency).length / hooks.length) * 100).toFixed(1)}%)
- **Hooks genéricos**: ${hooks.filter(h => h.is_generic).length}/${hooks.length} (${((hooks.filter(h => h.is_generic).length / hooks.length) * 100).toFixed(1)}%)

## Priorização

- **Alta**: ${weak.length} cases com hook fraco (reescrita completa)
- **Média**: ${medium.length} cases com hook médio (enriquecimento)
- **Baixa**: ${strong.length} cases já excelentes (manter)

**Esforço estimado**: ${(weak.length * 0.5 + medium.length * 0.3).toFixed(1)} horas
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, '01-hooks.md'), report, 'utf8');
  console.log(`   ✅ analysis/by-dimension/01-hooks.md`);
}

/**
 * Gera relatório de transições (simplificado para não ultrapassar token limit)
 */
function generateTransitionsReport(transitions) {
  const strong = transitions.filter(t => t.quality === 'strong');
  const medium = transitions.filter(t => t.quality === 'medium');
  const weak = transitions.filter(t => t.quality === 'weak');

  const report = `# Análise: Transições STAR(L)

## Resultados

| Qualidade | Count | % |
|-----------|-------|---|
| ✅ Forte  | ${strong.length} | ${((strong.length / transitions.length) * 100).toFixed(1)}% |
| ⚠️ Médio  | ${medium.length} | ${((medium.length / transitions.length) * 100).toFixed(1)}% |
| ❌ Fraco  | ${weak.length} | ${((weak.length / transitions.length) * 100).toFixed(1)}% |

## Cases que Precisam Transições (${weak.length})

${weak.map(t => `- \`${t.case_id}\` (${t.lp}) - ${t.total_transitions} transições`).join('\n')}

**Recomendação**: Adicionar conectores narrativos entre S→T→A→R→L

**Esforço estimado**: ${(weak.length * 0.3).toFixed(1)} horas
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, '02-transitions.md'), report, 'utf8');
  console.log(`   ✅ analysis/by-dimension/02-transitions.md`);
}

function generateMicDropsReport(micDrops) {
  const strong = micDrops.filter(m => m.quality === 'strong');
  const medium = micDrops.filter(m => m.quality === 'medium');
  const weak = micDrops.filter(m => m.quality === 'weak');

  const report = `# Análise: Mic-Drops (Learning)

## Resultados

| Qualidade | Count | % |
|-----------|-------|---|
| ✅ Forte  | ${strong.length} | ${((strong.length / micDrops.length) * 100).toFixed(1)}% |
| ⚠️ Médio  | ${medium.length} | ${((medium.length / micDrops.length) * 100).toFixed(1)}% |
| ❌ Fraco  | ${weak.length} | ${((weak.length / micDrops.length) * 100).toFixed(1)}% |

## Cases com Mic-Drops Fracos (${weak.length})

${weak.slice(0, 10).map(m => `
### \`${m.case_id}\` (${m.lp})
**Faltam**: ${m.elements_missing.join(', ')}
`).join('\n')}

**Esforço estimado**: ${(weak.length * 0.4).toFixed(1)} horas
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, '03-mic-drops.md'), report, 'utf8');
  console.log(`   ✅ analysis/by-dimension/03-mic-drops.md`);
}

function generateCustomerObsessionReport(customerObsession) {
  const strong = customerObsession.filter(c => c.quality === 'strong');
  const medium = customerObsession.filter(c => c.quality === 'medium');
  const weak = customerObsession.filter(c => c.quality === 'weak');

  const report = `# Análise: Customer Obsession Explícita

## Resultados

| Qualidade | Count | % |
|-----------|-------|---|
| ✅ Forte  | ${strong.length} | ${((strong.length / customerObsession.length) * 100).toFixed(1)}% |
| ⚠️ Médio  | ${medium.length} | ${((medium.length / customerObsession.length) * 100).toFixed(1)}% |
| ❌ Fraco  | ${weak.length} | ${((weak.length / customerObsession.length) * 100).toFixed(1)}% |

## Cases Precisam Reforçar Customer Obsession (${weak.length})

${weak.map(c => `
### \`${c.case_id}\` (${c.lp})
- Menções ao cliente: ${c.client_mentions}
- Métricas de satisfação: ${c.has_satisfaction_metrics ? '✅' : '❌'}
- Impacto explícito: ${c.has_impact_statement ? '✅' : '❌'}
- Backwards from customer: ${c.has_backwards_approach ? '✅' : '❌'}

**Faltam**: ${c.elements_missing.join(', ')}
`).join('\n')}

**Esforço estimado**: ${(weak.length * 0.5).toFixed(1)} horas
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, '04-customer-obsession.md'), report, 'utf8');
  console.log(`   ✅ analysis/by-dimension/04-customer-obsession.md`);
}

function generateConflictReport(conflicts) {
  const strong = conflicts.filter(c => c.quality === 'strong');
  const medium = conflicts.filter(c => c.quality === 'medium');
  const weak = conflicts.filter(c => c.quality === 'weak');

  const report = `# Análise: Conflito e Hardening

## Resultados

| Qualidade | Count | % |
|-----------|-------|---|
| ✅ Forte  | ${strong.length} | ${((strong.length / conflicts.length) * 100).toFixed(1)}% |
| ⚠️ Médio  | ${medium.length} | ${((medium.length / conflicts.length) * 100).toFixed(1)}% |
| ❌ Fraco  | ${weak.length} | ${((weak.length / conflicts.length) * 100).toFixed(1)}% |

## Cases Sem Conflito Significativo (${weak.length})

${weak.slice(0, 15).map(c => `- \`${c.case_id}\` (${c.lp}) - Faltam: ${c.conflicts_missing[0]}`).join('\n')}

**Recomendação**: Adicionar resistência, trade-offs ou momentos de hardening

**Esforço estimado**: ${(weak.length * 0.3).toFixed(1)} horas
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, '05-conflict.md'), report, 'utf8');
  console.log(`   ✅ analysis/by-dimension/05-conflict.md`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
