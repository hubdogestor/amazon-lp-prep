# CHECKLIST_VISUAL_v2.md
**Versao:** v2 - 2025-10-05 00:38

## Gates
- **GATE A - SYNTHESIS.md**: [x] Concluido
- **GATE B - MOTOR_DE_ANALISE_3.0.md**: [x] Concluido

## Dashboard
- Progresso: 4/4 cases `dive_deep` Ready
- Score medio: 98.8/100 (meta >=85)
- Metricas/case (media): 40.0 (meta >=8)
- Ratio medio EU:NOS: ~0.83 (aprox 5:1 vs meta >=3:1)
- FUPs completas: 4/4

## Criterios de Aceite Globais
- [x] STAR(L) PT/EN + 10 FUPs por case
- [x] Hook / Transicoes S->T->A->R->L / Mic-drop (ajustes finos sinalizados via warnings)
- [x] >=8 metricas por case
- [x] EU:NOS >=3:1 (falha se <2:1)
- [x] Build + Tests verdes
- [x] Sem regressao de bundle

## Lote Atual - `dive_deep`
- Cases: 4 - Ready: 4 | Needs-Polish: 0 | KO: 0
- Observacoes: `hsbc-data-validation-audit` ainda traz warning de transicoes; `unimed-fraud-investigation` alerta falta de metricas operacionais explicitas (cobrir na revisao humana)

### Checklist por Case (`dive_deep`)
- [x] sicredi-churn-analysis - Ready (score 100) - ratio 13:0; war room + dashboard ativos
- [x] hsbc-data-validation-audit - Ready (score 100) - revisar narrativa de transicao na revisao humana
- [x] unimed-fraud-investigation - Ready (score 95) - confirmar metricas operacionais/conflicto no review
- [x] sicredi-pix-settlement - Ready (score 100) - warnings leves (ownership 11:4, transicoes)

## Historico
| Data | LP | Case | Acao | Score | Notas |
|------|----|------|------|-------|-------|
| 2025-10-05 | dive_deep | sicredi-churn-analysis | Revisado + refine preview | 100 | Ratio 13:0; war room + dashboard documentados |
| 2025-10-05 | dive_deep | hsbc-data-validation-audit | Revisado + refine preview | 100 | Byte-check + alertas; warning de transicao |
| 2025-10-05 | dive_deep | unimed-fraud-investigation | Revisado + refine preview | 95 | War room semanal; acompanhar warning de metricas operacionais |
| 2025-10-04 | dive_deep | sicredi-pix-settlement | Refinado (referencia) | 100 | Warnings residuais de ownership/transicoes |

