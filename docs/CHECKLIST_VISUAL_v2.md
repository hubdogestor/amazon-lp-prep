# CHECKLIST_VISUAL_v2.md
**Versão:** v2 — 2025-10-04 23:23

## ? Gates
- **GATE A — SYNTHESIS.md**: [x] Concluído
- **GATE B — MOTOR_DE_ANALISE_3.0.md**: [x] Concluído

## ?? Dashboard
- Progresso: 4/4 cases `dive_deep` analisados (1 Ready, 3 KO)
- Score médio: 59.5/100 (meta =85)
- Métricas/case (média): 40.3 (meta =8)
- Ratio médio EU:NÓS: ˜2.0:1 (meta =3:1 — atenção)
- FUPs 100% completas: 4/4

## ??? Critérios de Aceite Globais
- [ ] STAR(L) PT/EN + 10 FUPs por case (estrutura ok, narrativa precisa ajustes nos KOs)
- [ ] Hook / Transições S?T?A?R?L / Mic-drop
- [ ] =8 métricas por case
- [ ] EU:NÓS =3:1 (falha se <2:1)
- [ ] Build + Tests verdes
- [ ] Sem regressão de bundle

## ?? Lote Atual — `dive_deep`
- Cases: 4 — Ready: 1 | Needs-Polish: 0 | KO: 3
- Próximo foco: reforçar ownership/conflito em `sicredi-churn-analysis`, `hsbc-data-validation-audit`, `unimed-fraud-investigation`

### Checklist por Case (`dive_deep`)
- [x] sicredi-pix-settlement — Ready — revisar ajustes de transição/ownership (warnings leves)
- [ ] sicredi-churn-analysis — KO — reforçar EU:NÓS e conflito antes de nova rodada
- [ ] hsbc-data-validation-audit — KO — reforçar métricas de impacto e mic-drop
- [ ] unimed-fraud-investigation — KO — inserir conflito explícito e mecanismos repetíveis

## ??? Histórico
| Data | LP | Case | Ação | Score | Notas |
|------|----|------|------|-------|-------|
| 2025-10-04 | dive_deep | sicredi-pix-settlement | Refinado (preview) | 100 | Ready (warnings: ownership 11:4, transições) |
| 2025-10-04 | dive_deep | sicredi-churn-analysis | Validação | 68 | KO — ratio 6:4 e conflito ausente |
| 2025-10-04 | dive_deep | hsbc-data-validation-audit | Validação | 28 | KO — métricas ok, ausência de mecanismos/ownership |
| 2025-10-04 | dive_deep | unimed-fraud-investigation | Validação | 42 | KO — recência ok, falta conflito e mic-drop |
