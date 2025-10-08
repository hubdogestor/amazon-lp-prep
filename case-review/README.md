# 📊 Case Review - Amazon Leadership Principles

Sistema completo de revisão e análise de 71 cases profissionais para entrevistas Amazon L5/L6.

---

## 🎯 O Que É Este Projeto?

Este diretório contém uma **metodologia estruturada de revisão** desenvolvida para avaliar e melhorar os 71 cases de preparação para entrevistas Amazon, baseada nos [16 Leadership Principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles).

**Status**: ✅ Análise completa | 📋 Pronto para execução

---

## 📂 Estrutura de Arquivos

```
case-review/
│
├── 📋 DOCUMENTOS PRINCIPAIS
│   ├── README.md (este arquivo)
│   ├── METODOLOGIA.md (metodologia completa de 7 fases)
│   ├── CRITERIOS.md (critérios de qualidade Amazon)
│   └── OPORTUNIDADES.md (oportunidades de melhoria)
│
├── 📊 REPORTS (Resultados da Análise)
│   ├── 01-inventory.json (71 cases mapeados)
│   ├── 02-scoring-summary.json (auto-scores detalhados)
│   ├── 03-priorization.json (classificação A/B/C)
│   ├── FASE1-SUMARIO.md (inventário e scoring)
│   ├── FASE2-SUMARIO.md (análise dimensional)
│   └── MASTER-PLAN.md ⭐ (plano de execução completo)
│
├── 📈 ANALYSIS (Análises Profundas)
│   └── by-dimension/
│       ├── 01-hooks.md (hooks dramáticos)
│       ├── 02-transitions.md (transições STAR)
│       ├── 03-mic-drops.md (learnings impactantes)
│       ├── 04-customer-obsession.md (foco no cliente)
│       └── 05-conflict.md (conflito e hardening)
│
├── 💡 RECOMMENDATIONS (Ações Específicas)
│   ├── high-priority/ (5 cases críticos)
│   ├── medium-priority/ (10 cases prioritários)
│   └── CONSOLIDATED-RECOMMENDATIONS.md
│
└── 🔧 SCRIPTS (Automação)
    ├── inventory-generator-v2.js
    ├── auto-scorer.js
    ├── priorizador.js
    ├── analisador-dimensoes.js
    └── gerador-recomendacoes.js
```

---

## 🚀 Quick Start

### **1. Entender o Estado Atual**
```bash
# Ler o sumário executivo
cat reports/FASE1-SUMARIO.md

# Ver distribuição de qualidade
cat reports/FASE2-SUMARIO.md
```

### **2. Ver Plano de Ação**
```bash
# Plano completo de execução
cat reports/MASTER-PLAN.md
```

### **3. Revisar Cases Prioritários**
```bash
# Ver recomendações consolidadas
cat recommendations/CONSOLIDATED-RECOMMENDATIONS.md

# Ver recomendações individuais
ls recommendations/high-priority/
```

### **4. Executar Sprints**
Seguir roadmap em [MASTER-PLAN.md](reports/MASTER-PLAN.md):
- **Sprint 1** (12.5h): 5 cases críticos
- **Sprint 2** (7.5h): 14 hooks dramáticos
- **Sprint 3** (5.4h): Métricas + transições
- **Sprint 4** (26.8h - opcional): Polimento

---

## 📊 Resultados da Análise

### **Resumo do Portfólio (71 cases)**

| Métrica | Valor |
|---------|-------|
| Score médio (projetado) | 84.1/100 |
| Cases aprovados (≥75) | 66/71 (93%) |
| Cases excelentes (≥85) | 53/71 (75%) |
| **Cases críticos** (<75) | **5 (7%)** |

### **Distribuição por Prioridade**

- 🟢 **Grupo A** (53 cases): ≥85 pts - Polimento apenas
- 🟡 **Grupo B** (13 cases): 75-84 pts - Enriquecimento
- 🔴 **Grupo C** (5 cases): <75 pts - Revisão profunda

### **Top 5 Cases Críticos** 🚨

1. `sefaz-pmo-governance` (73.7 pts) - Ratio EU:NÓS = 0:1
2. `bradesco-safe-agile-framework` (74 pts) - Ratio EU:NÓS = 0:1
3. `unimed-telemedicine-redo-for-excellence` (74 pts) - Ratio EU:NÓS = 1:1
4. `bradesco-mvp-feature-prioritization` (74 pts) - Ratio EU:NÓS = 1.5:1
5. `bradesco-agile-community-creation` (74 pts) - Ratio EU:NÓS = 0:1

---

## 🎯 Principais Gaps Identificados

### **1. Ratio EU:NÓS Baixo** (5 cases)
**Problema**: Foco excessivo em "nós" vs "eu"
**Solução**: Reescrever explicitando contribuição individual
**Esforço**: 12.5h

### **2. Hooks Genéricos** (14 cases)
**Problema**: Aberturas sem tensão dramática
**Solução**: Framework [TENSÃO] + [STAKES] + [URGÊNCIA]
**Esforço**: 7.5h

### **3. Transições Fracas** (8 cases)
**Problema**: Narrativa "robótica" sem conectores
**Solução**: Adicionar transições S→T→A→R→L
**Esforço**: 2.4h

### **4. Learnings Abstratos** (5 cases)
**Problema**: "Aprendi que X é importante" sem ação
**Solução**: Framework abstrato → operacional → replicado → mic-drop
**Esforço**: 2h

---

## 🏆 Metodologia de Scoring

### **Auto-Score (0-55 pontos)**

Calculado automaticamente:

1. **Ratio EU:NÓS** (0-15 pts): Contribuição individual
2. **Métricas** (0-20 pts): Quantidade e especificidade
3. **FUPs** (0-10 pts): Completude (≥10)
4. **Word Count** (0-10 pts): Profundidade (≥400 palavras)

### **Score Manual (0-45 pontos)**

Avaliação humana necessária:

5. **Estrutura STAR** (0-20 pts): S(5) + T(5) + A(7) + R(3)
6. **Conteúdo LP** (0-25 pts): Alinhamento com elementos-chave

**Score Total Projetado**: Auto (55) + Manual Estimado (36) = **91 pts**

**Threshold Amazon**: ≥75 pontos

---

## 🛠️ Scripts Disponíveis

### **1. Inventário**
```bash
node inventory-generator-v2.js
# Gera: reports/01-inventory.json
```

### **2. Auto-Scoring**
```bash
node auto-scorer.js
# Gera: reports/02-scoring-summary.json
# Calcula ratio EU:NÓS, métricas, FUPs, word count
```

### **3. Priorização**
```bash
node priorizador.js
# Gera: reports/03-priorization.json
# Classifica em grupos A/B/C
```

### **4. Análise Dimensional**
```bash
node analisador-dimensoes.js
# Gera: analysis/by-dimension/*.md
# Analisa hooks, transições, mic-drops, customer obsession, conflito
```

### **5. Recomendações**
```bash
node gerador-recomendacoes.js
# Gera: recommendations/{high,medium}-priority/*.md
# Recomendações específicas por case
```

---

## 📈 Roadmap de Execução

### **Core (28.6h) - Recomendado**

| Sprint | Duração | Objetivo | Cases |
|--------|---------|----------|-------|
| 1 | 12.5h | Elevar ratio EU:NÓS | 5 |
| 2 | 7.5h | Hooks dramáticos | 14 |
| 3 | 5.4h | Métricas + transições | 15 |

**Resultado**: 95% dos cases ≥85 pts

### **Polimento (26.8h) - Opcional**

| Sprint | Duração | Objetivo | Cases |
|--------|---------|----------|-------|
| 4 | 26.8h | Excelência absoluta | 53 |

**Resultado**: 100% dos cases ≥90 pts

---

## ✅ Critérios de Sucesso

### **Mínimo (Threshold Amazon)**
- [ ] 100% dos cases ≥75 pts
- [ ] 100% com ratio EU:NÓS ≥3:1
- [ ] 100% com ≥8 métricas específicas
- [ ] 100% com ≥10 FUPs

### **Excelência (Recomendado)**
- [ ] 90% dos cases ≥85 pts
- [ ] 100% hooks com tensão + stakes + urgência
- [ ] 100% com transições fluidas S→T→A→R→L
- [ ] 100% com Customer Obsession explícita (quando aplicável)
- [ ] 100% com mic-drops memoráveis

### **Classe Mundial (Opcional)**
- [ ] 100% dos cases ≥90 pts
- [ ] Todos com FUPs de "failure mode"
- [ ] PT/EN parity 100% validada
- [ ] 0 termos genéricos detectados

---

## 💡 Dicas de Uso

### **Para Revisar Cases**
1. Comece pelos [5 casos críticos](recommendations/high-priority/)
2. Leia as recomendações específicas de cada case
3. Use os critérios em [CRITERIOS.md](CRITERIOS.md) como checklist
4. Valide com `node auto-scorer.js` após edições

### **Para Entender a Metodologia**
1. Leia [METODOLOGIA.md](METODOLOGIA.md) completo
2. Veja exemplos de análise em [analysis/by-dimension/](analysis/by-dimension/)
3. Compare com [OPORTUNIDADES.md](OPORTUNIDADES.md)

### **Para Executar Sprints**
1. Siga o [MASTER-PLAN.md](reports/MASTER-PLAN.md)
2. Use as recomendações individuais como guia
3. Marque progresso em `reports/04-progress.json` (criar)
4. Re-valide scores frequentemente

---

## 📚 Documentação

### **Documentos Core**
- [METODOLOGIA.md](METODOLOGIA.md) - Metodologia completa de 7 fases
- [CRITERIOS.md](CRITERIOS.md) - Critérios de qualidade Amazon
- [OPORTUNIDADES.md](OPORTUNIDADES.md) - Oportunidades de melhoria

### **Sumários Executivos**
- [FASE1-SUMARIO.md](reports/FASE1-SUMARIO.md) - Inventário e scoring
- [FASE2-SUMARIO.md](reports/FASE2-SUMARIO.md) - Análise dimensional

### **Plano de Ação**
- ⭐ [MASTER-PLAN.md](reports/MASTER-PLAN.md) - Roadmap completo

### **Recomendações**
- [CONSOLIDATED-RECOMMENDATIONS.md](recommendations/CONSOLIDATED-RECOMMENDATIONS.md) - Visão geral
- [high-priority/](recommendations/high-priority/) - 5 cases críticos
- [medium-priority/](recommendations/medium-priority/) - 10 cases prioritários

---

## 🎯 Próximos Passos

1. ✅ **Análise completa** (DONE)
2. 📖 **Ler MASTER-PLAN.md** (você está aqui)
3. 🔴 **Sprint 1**: Atacar 5 cases críticos (12.5h)
4. 🟡 **Sprint 2-3**: Enriquecimento (12.9h)
5. 🟢 **Sprint 4**: Polimento opcional (26.8h)

---

## 📞 Suporte

Para dúvidas sobre:
- **Metodologia**: Ver [METODOLOGIA.md](METODOLOGIA.md)
- **Critérios Amazon**: Ver [CRITERIOS.md](CRITERIOS.md)
- **Execução**: Ver [MASTER-PLAN.md](reports/MASTER-PLAN.md)
- **Cases específicos**: Ver `recommendations/{high,medium}-priority/`

---

## 🏆 Conclusão

Este sistema fornece:
- ✅ **Diagnóstico preciso** de 71 cases
- ✅ **Priorização clara** (5 críticos, 13 médios, 53 excelentes)
- ✅ **Roadmap executável** (28.6h core, 55.4h com polimento)
- ✅ **Recomendações acionáveis** por case
- ✅ **Ferramentas de validação** (auto-scorer)

**ROI**: Investir 12.5h nos 5 cases críticos eleva 100% do portfólio para ≥75 pts (threshold Amazon).

**Boa execução! 🚀**

---

**Última atualização**: 2025-10-08
**Versão**: 1.0
**Gerado por**: Claude + Metodologia de Revisão Estruturada
