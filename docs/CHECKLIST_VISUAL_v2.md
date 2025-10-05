# CHECKLIST_VISUAL_v2.md
**Versao:** v2 - 2025-10-05 07:40

## Gates
- **GATE A - SYNTHESIS.md**: [x] Concluido
- **GATE B - MOTOR_DE_ANALISE_3.0.md**: [x] Concluido

## Dashboard
- `ownership`: 6/6 cases Ready (score medio 99.5 | metricas medias 29.5 | ratios 21:0 / 19:0 / 13:0 / 12:0 / 11:0 / 20:0)
  - Warnings ativos: transicoes STAR(L) em todos (peso maior para payment-incidents e long-term); hsbc-migration e hsbc-payment pedem evidencia operacional adicional; hsbc-payment segue sem conflito explicito (revisao humana validar narrativa).
- `dive_deep`: 4/4 cases Ready (score medio 98.8 | metricas medias 40.0 | ratios 13:0 / 3:1 / 5:1 / 11:4)
- Tests (`npm test`) e build (`npm run build`) verdes em 05/10 07:24 (sem mudanca de codigo logico apos a bateria)
- Previews ownership atualizados 05/10 07:40 (`bradesco-international-payments`, `hsbc-payment-reconciliation`, `payment-incidents-prevention-mechanism`, `hsbc-migration-leadership`, `sefaz-pmo-creation`, `long-term-tradeoff`)
- `review-status.json` (05/10 07:40) registra todos os ownership como Ready (scores >=97)

## Criterios de Aceite Globais
- [x] STAR(L) PT/EN + 10 FUPs por case
- [x] Hook / Transicoes / Mic-drop (warnings residuais listados para revisao humana)
- [x] >=8 metricas por case (minimo atual 17)
- [x] EU:NOS >=3:1 (todos os Ready com NOS = 0)
- [x] Build + Tests verdes
- [x] Bundle intacto (sem importar analyzer em src)

## Lote Atual – `ownership`
- [x] hsbc-migration-leadership — Ready (score 100 | metricas 41 | ratio 21:0) — warnings: explicitar metricas operacionais na revisao e limpar transicoes; case antigo (>7 anos)
- [x] sefaz-pmo-creation — Ready (score 100 | metricas 33 | ratio 19:0) — sem warnings
- [x] bradesco-international-payments — Ready (score 100 | metricas 37 | ratio 13:0) — warnings: reforcar storytelling de transicoes STAR(L); case antigo
- [x] hsbc-payment-reconciliation — Ready (score 97 | metricas 23 | ratio 12:0) — warnings: destacar conflito mais explicito e reforcar metricas financeiras na revisao
- [x] payment-incidents-prevention-mechanism — Ready (score 100 | metricas 17 | ratio 11:0) — warning: revisar fluidez das transicoes STAR(L)
- [x] long-term-tradeoff — Ready (score 100 | metricas 26 | ratio 20:0) — warning: revisar transicoes STAR(L) na revisao humana

## Lote anterior – `dive_deep`
- Cases: 4 - Ready: 4 | Needs-Polish: 0 | KO: 0
- Observacoes: `hsbc-data-validation-audit` ainda sinaliza transicoes (leve); `unimed-fraud-investigation` reforcar metricas operacionais/conflito durante review

### Checklist por Case (`dive_deep`)
- [x] sicredi-churn-analysis - Ready (score 100) - ratio 13:0; war room + dashboard ativos
- [x] hsbc-data-validation-audit - Ready (score 100) - revisar narrativa de transicao na revisao humana
- [x] unimed-fraud-investigation - Ready (score 95) - confirmar metricas operacionais/conflito no review
- [x] sicredi-pix-settlement - Ready (score 100) - warnings leves (ownership 11:4, transicoes)

## Historico
| Data | LP | Case | Acao | Score | Notas |
|------|----|------|------|-------|-------|
| 2025-10-05 07:40 | ownership | bradesco-international-payments | Revisado + refine preview | 100 | Ratio 13:0; correspondentes com reducao 18 bps; revisar transicoes STAR(L) |
| 2025-10-05 07:40 | ownership | hsbc-payment-reconciliation | Revisado + refine preview | 97 | Carta do Bacen, hotline priority; explicitar conflito/metricas operacionais no review |
| 2025-10-05 07:40 | ownership | payment-incidents-prevention-mechanism | Revisado + refine preview | 100 | Reincidencia -58%, ouvidoria -45%; polir transicoes STAR(L) |
| 2025-10-05 07:27 | ownership | long-term-tradeoff | Revisado + refine preview | 100 | Ratio 20:0; manter observacao de transicoes STAR(L) |
| 2025-10-05 07:27 | ownership | sefaz-pmo-creation | Revisado + refine preview | 100 | Templates + dashboards automatizados; sem warnings |
| 2025-10-05 07:27 | ownership | hsbc-migration-leadership | Revisado + refine preview | 100 | Resistencias compliance + CFO; explicitar metricas operacionais |
| 2025-10-05 00:38 | dive_deep | sicredi-churn-analysis | Revisado + refine preview | 100 | Ratio 13:0; war room + dashboard documentados |
| 2025-10-05 00:38 | dive_deep | hsbc-data-validation-audit | Revisado + refine preview | 100 | Byte-check + alertas; warning de transicao |
| 2025-10-05 00:38 | dive_deep | unimed-fraud-investigation | Revisado + refine preview | 95 | War room semanal; acompanhar warning de metricas operacionais |
| 2025-10-04 22:42 | dive_deep | sicredi-pix-settlement | Refinado (referencia) | 100 | Warnings residuais de ownership/transicoes |
