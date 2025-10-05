# CHECKLIST_VISUAL_v2.md
**Versao:** v2 - 2025-10-05 13:02

## Gates
- **GATE A - SYNTHESIS.md**: [x] Concluido
- **GATE B - MOTOR_DE_ANALISE_3.0.md**: [x] Concluido

## Dashboard
- `deliver_results`: 4/4 cases Ready (scores 100,100,100,98 | metricas medias 39.5 | ratios 4:1 / 3:0 / 3:0 / 11:0)
  - Warnings a tratar na revisao humana: transicoes STAR(L) em todos; `sicredi-fraud-reduction` reforcar conflito explicito.
- `customer_obsession`: 3/3 cases Ready (scores 100,100,89 | metricas medias 34.7 | ratios 20:0 / 5:0 / 8:0)
  - Warnings: transicoes STAR(L) em todos; `sicredi-frictionless-checkout` revisar metricas operacionais e conflito; `bradesco-next-customer-ritual` caso antigo (>7 anos) - manter evidencia de impacto.
- `ownership`: 6/6 cases Ready (score medio 99.5 | metricas medias 29.5 | ratios 21:0 / 19:0 / 13:0 / 12:0 / 11:0 / 20:0)
- `dive_deep`: 4/4 cases Ready (score medio 98.8 | metricas medias 40.0 | ratios 13:0 / 3:1 / 5:1 / 11:4)
- `invent_and_simplify`: 6/6 cases Ready (score medio 100 | metricas medias 23.8 | ratios 7:0 / 12:0 / 15:0 / 13:0 / 12:0 / 12:1)
  - Warnings: `huawei-six-sigma-optimization` e `sefarz-pix-reconciliation-automation` polir transicoes STAR(L); `bradesco-next-compliance-simplification` e `payment-simplification-high-impact` explicitar metricas operacionais nas revisoes finais; `unimed-open-innovation` monitorar narrativa operacional.
- `earn_trust`: 5/5 cases Ready (scores 100,100,100,100,100 | metricas medias 13.2 | ratios 15:0 / 11:0 / 9:0 / 14:0 / 10:0)
  - Warnings: nenhum; transicoes STAR(L) ajustadas.
- `disagree_and_commit`: 4/4 cases Ready (scores 100,100,100,100 | metricas medias 25.5 | ratios 11:0 / 9:0 / 9:1 / 8:0)
  - Warnings: nenhum.
- `are_right_a_lot`: 3/3 cases Ready (scores 100,100,100 | metricas medias 19.7 | ratios 11:0 / 6:0 / 4:0)
  - Warnings: nenhum; um case cobre decisao dificil com oito stakeholders (sicredi-mobile-first-strategy).
- `best_employer`: 3/3 cases Ready (scores 92,99,96 | metricas medias 22.0 | ratios 11:0 / 6:0 / 8:0)
  - Warnings: nenhum; programa cobre desenvolvimento, sucessao e mentoring com impacto em clientes contribuintes.
- `bias_for_action`: 4/4 cases Ready (scores 100,100,100,100 | metricas medias 19.8 | bias signals 10/4/7/13)
| 2025-10-05 16:45 | bias_for_action | bradesco-next-rapid-launch | Reescrito + refine preview | 100 | Aviso: case 2016 mantido; mecanismo SeDR documentado |
  - Observacoes: portal emergencial SEFAZ (2024) e Phoenix Unimed (2023) adicionados para garantir recencia.
- Testes (`npm test`) e build (`npm run build`) verdes em 05/10 13:19-13:24
- Previews atualizados 05/10 13:20 (`bradesco-agile-community-creation`, `sicredi-360-feedback-system`, `sefaz-reverse-mentoring-program`) e 13:02 (`sicredi-mobile-first-strategy`, `huawei-4g-rollout-analysis`, `sicredi-api-pricing-model`)
- `review-status.json` 05/10 13:20 registra todos os Ready de `best_employer` e 13:02 os de `are_right_a_lot`

## Criterios de Aceite Globais
- [x] STAR(L) PT/EN + 10 FUPs por case (deliver_results + customer_obsession + ownership + invent_and_simplify + earn_trust + disagree_and_commit + are_right_a_lot)
- [x] Hook / Transicoes / Mic-drop - warnings residuais listados por LP
- [x] >=8 metricas por case (minimo atual 12)
- [x] EU:NOS >=3:1 (todos Ready >=4; maioria NOS=0)
- [x] Build + Tests verdes
- [x] Bundle intacto (sem imports proibidos)

## Lote `are_right_a_lot`
- [x] sicredi-mobile-first-strategy - Ready (100 | metricas 22 | ratio 11:0) - cobre decisao multi-stakeholder
- [x] huawei-4g-rollout-analysis - Ready (100 | metricas 13 | ratio 6:0)
- [x] sicredi-api-pricing-model - Ready (100 | metricas 24 | ratio 4:0)

## Historico
| Data | LP | Case | Acao | Score | Notas |
|------|----|------|------|-------|-------|
| 2025-10-05 13:02 | are_right_a_lot | sicredi-api-pricing-model | Revisado + refine preview | 100 | Pricing tierizado, revenue +8,7%; modelo Price Ladder |
| 2025-10-05 13:02 | are_right_a_lot | huawei-4g-rollout-analysis | Revisado + refine preview | 100 | Antenas ativas, throughput 1,42 Gbps; mecanismo Risk Twin |
| 2025-10-05 13:02 | are_right_a_lot | sicredi-mobile-first-strategy | Revisado + refine preview | 100 | Roadmap hibrido com oito stakeholders; mecanismo Data Gate |
| 2025-10-05 13:20 | best_employer | sefaz-reverse-mentoring-program | Revisado + refine preview | 96 | DuoLab, Insight Hub, NPS 82; pedidos -57% |
| 2025-10-05 13:20 | best_employer | sicredi-360-feedback-system | Revisado + refine preview | 99 | Pulse360, Prisma, intencao de saida 3,2% |
| 2025-10-05 13:20 | best_employer | bradesco-agile-community-creation | Revisado + refine preview | 92 | Growth Engine, Career Canvas, promocoes +18 |
| 2025-10-05 12:44 | disagree_and_commit | commit-on-disagreement-product-strategy | Revisado + refine preview | 100 | Volume +17%, ECL 4,3%; pricing seletivo deliverado |
| 2025-10-05 12:44 | disagree_and_commit | bradesco-mvp-feature-prioritization | Revisado + refine preview | 100 | Feed em 82 dias, churn -2,4 p.p.; warnings limpos |
| 2025-10-05 12:44 | disagree_and_commit | huawei-world-cup-timeline | Revisado + refine preview | 100 | Licencas em 7 dias, disponibilidade 99,94%; fans NPS 81 |
| 2025-10-05 12:44 | disagree_and_commit | unimed-retention-strategy | Revisado + refine preview | 100 | Churn 3,6% -> 2,1%; telemedicina +52%; compromisso registrado |
| 2025-10-05 16:45 | bias_for_action | bradesco-next-rapid-launch | Reescrito + refine preview | 100 | Aviso: case 2016 mantido; mecanismo SeDR documentado |
| 2025-10-05 16:45 | bias_for_action | sicredi-ml-credit-analysis | Reescrito + refine preview | 100 | ML em 90 dias, shadow mode replicavel |
| 2025-10-05 16:19 | bias_for_action | huawei-logistics-optimization-pilot | Validate + refine preview | 0 | KO: narrativa placeholder; precisa reescrever com metricas, conflito e customer obsession reais |
| 2025-10-05 16:19 | bias_for_action | calculated-risk-time-critical | Validate + refine preview | 0 | KO: falta STAR completo; incluir situacao real, decisao two-way door e plano de rollback |
| 2025-10-05 16:45 | bias_for_action | bradesco-next-rapid-launch | Reescrito + refine preview | 100 | Aviso: case 2016 mantido; mecanismo SeDR documentado |
| 2025-10-05 16:45 | bias_for_action | sicredi-ml-credit-analysis | Reescrito + refine preview | 100 | ML em 90 dias, shadow mode replicavel |
| 2025-10-05 16:34 | bias_for_action | huawei-logistics-optimization-pilot | Reescrito + refine preview | 100 | Stop or swap replicado; SLA 4,6 dias |
| 2025-10-05 16:34 | bias_for_action | calculated-risk-time-critical | Reescrito + refine preview | 100 | Plano Phoenix replicado em 9 regionais |
