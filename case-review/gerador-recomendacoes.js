/**
 * GERADOR DE RECOMENDAÇÕES
 *
 * Consolida análises dimensionais e gera recomendações específicas
 * por case, priorizadas por ROI.
 *
 * Gera:
 * - recommendations/high-priority/*.md
 * - recommendations/medium-priority/*.md
 * - recommendations/CONSOLIDATED-RECOMMENDATIONS.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRIORIZATION_FILE = path.join(__dirname, 'reports', '03-priorization.json');
const SCORING_FILE = path.join(__dirname, 'reports', '02-scoring-summary.json');
const OUTPUT_DIR = path.join(__dirname, 'recommendations');

function main() {
  console.log('📋 Gerando recomendações consolidadas...\n');

  const priorization = JSON.parse(fs.readFileSync(PRIORIZATION_FILE, 'utf8'));
  const scoring = JSON.parse(fs.readFileSync(SCORING_FILE, 'utf8'));

  // Mapeia scores por case_id
  const scoresMap = {};
  scoring.cases_scored.forEach(c => {
    scoresMap[c.case_id] = c;
  });

  // Gera recomendações para alta prioridade
  console.log('🔴 Alta Prioridade (5 cases)...');
  priorization.groups.high_priority.forEach(caseInfo => {
    generateCaseRecommendation(caseInfo, scoresMap[caseInfo.case_id], 'high-priority');
  });

  // Gera recomendações para média prioridade (top 10)
  console.log('\n🟡 Média Prioridade (top 10 de 13 cases)...');
  priorization.groups.medium_priority.slice(0, 10).forEach(caseInfo => {
    generateCaseRecommendation(caseInfo, scoresMap[caseInfo.case_id], 'medium-priority');
  });

  // Gera relatório consolidado
  generateConsolidatedReport(priorization, scoresMap);

  console.log('\n✅ Recomendações geradas!');
}

function generateCaseRecommendation(caseInfo, scoreData, priority) {
  const filename = `${caseInfo.case_id}.md`;
  const filepath = path.join(OUTPUT_DIR, priority, filename);

  const priorityEmoji = priority === 'high-priority' ? '🔴' : '🟡';
  const priorityLabel = priority === 'high-priority' ? 'ALTA' : 'MÉDIA';

  const report = `# Recomendações: \`${caseInfo.case_id}\`

**LP**: ${caseInfo.lp}
**Empresa**: ${caseInfo.company}
**Score Atual**: ${caseInfo.projected_score}/100
**Prioridade**: ${priorityEmoji} ${priorityLabel}
**Esforço Estimado**: ${caseInfo.estimated_effort_hours}h

---

## 📊 Diagnóstico

### Auto-Score Breakdown
- **EU:NÓS Ratio**: ${scoreData.auto_calculated.eu_nos_ratio}:1 ${scoreData.auto_calculated.eu_nos_ratio >= 3 ? '✅' : '⚠️'}
- **Métricas Específicas**: ${scoreData.auto_calculated.specific_metrics_count} ${scoreData.auto_calculated.specific_metrics_count >= 8 ? '✅' : '⚠️'}
- **FUPs**: ${scoreData.auto_calculated.fup_count}/10 ${scoreData.auto_calculated.fup_count >= 10 ? '✅' : '⚠️'}
- **Word Count**: ${scoreData.auto_calculated.word_count_pt} palavras

### Flags Identificados
${caseInfo.top_flags ? caseInfo.top_flags.map(f => `- ${f}`).join('\n') : scoreData.flags.slice(0, 3).map(f => `- ${f}`).join('\n')}

---

## 🎯 Ações Prioritárias

${generateActions(caseInfo, scoreData)}

---

## 📈 Impacto Esperado

Aplicando as ações acima:
- **Score Projetado**: ${caseInfo.projected_score} → **${Math.min(caseInfo.projected_score + estimateImpact(scoreData), 95)}**
- **Grupo**: ${caseInfo.projected_score < 75 ? 'C → B' : 'B → A'}
- **ROI**: ⭐⭐⭐⭐${caseInfo.estimated_effort_hours < 2 ? '⭐' : ''}

---

## ✅ Checklist de Revisão

- [ ] Ratio EU:NÓS elevado para ≥3:1
- [ ] Hook dramático com tensão + stakes + urgência
- [ ] Transições fluidas S→T→A→R→L
- [ ] Customer Obsession explícita (se aplicável ao LP)
- [ ] Métricas específicas (≥8) com baseline→resultado
- [ ] Mic-drop memorável no Learning
- [ ] PT/EN parity validada

---

**Arquivo gerado automaticamente pela Metodologia de Revisão - Fase 6**
`;

  fs.writeFileSync(filepath, report, 'utf8');
  console.log(`   ✅ ${priority}/${filename}`);
}

function generateActions(caseInfo, scoreData) {
  const actions = [];

  // Ação 1: Ratio EU:NÓS
  if (scoreData.auto_calculated.eu_nos_ratio < 3) {
    const severity = scoreData.auto_calculated.eu_nos_ratio === 0 ? 'CRÍTICO' : 'ALTO';
    actions.push(`
### 1. ${severity}: Elevar Ratio EU:NÓS (${scoreData.auto_calculated.eu_nos_ratio}:1 → ≥3:1)

**Problema**: Foco excessivo em "nós" vs "eu". Amazon valoriza contribuição individual clara.

**Ação**:
- Reescrever seções S/T/A substituindo:
  - "Nós implementamos..." → "Eu liderei a implementação de..."
  - "A equipe decidiu..." → "Eu decidi, junto com minha equipe..."
  - "Conseguimos entregar..." → "Eu garanti a entrega através de..."
- Adicionar decisões pessoais, trade-offs assumidos, riscos calculados
- Manter colaboração mas explicitar papel individual

**Impacto**: +6-9 pts
**Esforço**: ${scoreData.auto_calculated.eu_nos_ratio === 0 ? '1.5h' : '1h'}
`);
  }

  // Ação 2: Métricas
  if (scoreData.auto_calculated.specific_metrics_count < 8) {
    actions.push(`
### 2. MÉDIO: Adicionar Métricas Específicas (${scoreData.auto_calculated.specific_metrics_count} → ≥8)

**Problema**: Poucas métricas quantificadas.

**Ação**:
- Substituir termos genéricos por números:
  - "Melhoria significativa" → "NPS 28 → 58 (+30, +107%)"
  - "Redução de tempo" → "Tempo de autorização 4.8 → 1.9 dias (-60%)"
- Adicionar métricas de impacto secundário (economia, eficiência, satisfação)
- Usar formato: [baseline] → [resultado] ([delta], [%]) em [timeframe]

**Impacto**: +3-5 pts
**Esforço**: 0.5h
`);
  }

  // Ação 3: Hook dramático (se flags indicam)
  if (scoreData.flags.some(f => f.includes('genéricos'))) {
    actions.push(`
### 3. MÉDIO: Enriquecer Hook Dramático

**Problema**: Hook genérico sem tensão ou stakes claros.

**Ação**:
- Reescrever primeiras 2-3 frases com framework:
  - [TENSÃO]: Ameaça, risco, crise
  - [STAKES]: Números, impacto financeiro/clientes
  - [URGÊNCIA]: Prazo, deadline

**Exemplo**:
- ❌ ANTES: "Em janeiro de 2023 eu assumi o projeto..."
- ✅ DEPOIS: "Quando o projeto entrou em alerta vermelho com R$ 2M em risco e 45 dias para o go-live, eu assumi ownership total..."

**Impacto**: +2-3 pts
**Esforço**: 0.3h
`);
  }

  // Ação 4: Customer Obsession (se LP relevante)
  const customerLPs = ['Customer Obsession', 'Invent and Simplify', 'Deliver Results', 'Insist on the Highest Standards'];
  if (customerLPs.includes(caseInfo.lp) && scoreData.auto_calculated.word_count_pt < 500) {
    actions.push(`
### 4. BAIXO: Explicitar Customer Obsession

**Problema**: Impacto no cliente pode ser mais explícito.

**Ação**:
- Adicionar em (R)esults:
  - Quem é o cliente (interno ou externo)
  - Métrica de satisfação (NPS, CSAT, feedback)
  - Impacto mensurável na experiência

**Exemplo**: "Isso elevou satisfação dos desenvolvedores (clientes internos) de 68% para 89%..."

**Impacto**: +2 pts
**Esforço**: 0.2h
`);
  }

  if (actions.length === 0) {
    actions.push(`
### 1. Polimento Geral

**Ação**:
- Revisar transições STAR para fluidez
- Amplificar mic-drop no Learning
- Adicionar 1-2 FUPs de "failure mode"
- Validar PT/EN parity

**Impacto**: +2-3 pts
**Esforço**: 0.5h
`);
  }

  return actions.join('\n');
}

function estimateImpact(scoreData) {
  let impact = 0;
  if (scoreData.auto_calculated.eu_nos_ratio < 3) impact += 8;
  if (scoreData.auto_calculated.specific_metrics_count < 8) impact += 4;
  if (scoreData.flags.length > 2) impact += 3;
  return impact;
}

function generateConsolidatedReport(priorization, scoresMap) {
  const report = `# Recomendações Consolidadas - 71 Cases

**Gerado em**: ${new Date().toISOString().split('T')[0]}

---

## 📊 Visão Geral

| Prioridade | Cases | Esforço Total | Score Médio Atual | Score Médio Projetado |
|------------|-------|---------------|-------------------|----------------------|
| 🔴 Alta    | ${priorization.groups.high_priority.length} | ${priorization.effort_estimate.high_priority_total.toFixed(1)}h | ${(priorization.groups.high_priority.reduce((sum, c) => sum + c.projected_score, 0) / priorization.groups.high_priority.length).toFixed(1)} | 82+ |
| 🟡 Média   | ${priorization.groups.medium_priority.length} | ${priorization.effort_estimate.medium_priority_total.toFixed(1)}h | ${(priorization.groups.medium_priority.reduce((sum, c) => sum + c.projected_score, 0) / priorization.groups.medium_priority.length).toFixed(1)} | 88+ |
| 🟢 Baixa   | ${priorization.groups.low_priority.length} | ${priorization.effort_estimate.low_priority_total.toFixed(1)}h | ${(priorization.groups.low_priority.reduce((sum, c) => sum + c.projected_score, 0) / priorization.groups.low_priority.length).toFixed(1)} | 90+ |

---

## 🔴 ALTA PRIORIDADE (${priorization.groups.high_priority.length} cases)

${priorization.groups.high_priority.map((c, i) => `
### ${i + 1}. [\`${c.case_id}\`](high-priority/${c.case_id}.md)
- **LP**: ${c.lp}
- **Score**: ${c.projected_score}/100
- **Principal gap**: ${c.top_flags ? c.top_flags[0] : scoresMap[c.case_id].flags[0]}
- **Esforço**: ${c.estimated_effort_hours}h
`).join('')}

**Esforço total**: ${priorization.effort_estimate.high_priority_total.toFixed(1)}h

---

## 🟡 MÉDIA PRIORIDADE (${priorization.groups.medium_priority.length} cases)

${priorization.groups.medium_priority.slice(0, 10).map((c, i) => `
### ${i + 1}. [\`${c.case_id}\`](medium-priority/${c.case_id}.md)
- **LP**: ${c.lp}
- **Score**: ${c.projected_score}/100
- **Esforço**: ${c.estimated_effort_hours}h
`).join('')}

${priorization.groups.medium_priority.length > 10 ? `\n... e mais ${priorization.groups.medium_priority.length - 10} cases.\n` : ''}

---

## 📋 Roadmap Sugerido

### Sprint 1 (12.5h): Críticos
1. Atacar os 5 cases de alta prioridade
2. Foco: Elevar ratio EU:NÓS
3. Meta: 100% dos cases ≥75 pts

### Sprint 2 (20h): Enriquecimento
1. Revisar 13 cases de média prioridade
2. Foco: Hooks, transições, mic-drops
3. Meta: 90% dos cases ≥85 pts

### Sprint 3 (26h): Polimento
1. Polir 53 cases de baixa prioridade
2. Foco: FUPs de failure mode, PT/EN parity
3. Meta: 100% excelência

**Total**: 58.5 horas (~7-8 dias úteis)

---

## 🎯 Ações Comuns Mais Frequentes

| Ação | Cases Afetados | Impacto |
|------|----------------|---------|
| Elevar ratio EU:NÓS | 5 | +8 pts |
| Adicionar métricas específicas | 2 | +4 pts |
| Enriquecer hooks | 14 | +3 pts |
| Intensificar transições | 35 | +2 pts |
| Amplificar mic-drops | 25 | +2 pts |

---

## ✅ Critérios de Sucesso

- [ ] 100% dos cases com score ≥75
- [ ] 90% dos cases com score ≥85
- [ ] Score médio ≥87
- [ ] 100% com ratio EU:NÓS ≥3:1
- [ ] 100% com ≥8 métricas específicas
- [ ] PT/EN parity validada em todos

---

**Próximos passos**: Revisar recomendações individuais em \`recommendations/{high,medium}-priority/\`
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'CONSOLIDATED-RECOMMENDATIONS.md'), report, 'utf8');
  console.log(`\n   ✅ recommendations/CONSOLIDATED-RECOMMENDATIONS.md`);
}

main();
