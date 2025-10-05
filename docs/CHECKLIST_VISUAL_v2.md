# CHECKLIST_VISUAL_v2.md
**Vers�o:** v2 � 2025-10-04 23:23

## ? Gates
- **GATE A � SYNTHESIS.md**: [x] Conclu�do
- **GATE B � MOTOR_DE_ANALISE_3.0.md**: [x] Conclu�do

## ?? Dashboard
- Progresso: 4/4 cases `dive_deep` analisados (1 Ready, 3 KO)
- Score m�dio: 59.5/100 (meta =85)
- M�tricas/case (m�dia): 40.3 (meta =8)
- Ratio m�dio EU:N�S: �2.0:1 (meta =3:1 � aten��o)
- FUPs 100% completas: 4/4

## ??? Crit�rios de Aceite Globais
- [ ] STAR(L) PT/EN + 10 FUPs por case (estrutura ok, narrativa precisa ajustes nos KOs)
- [ ] Hook / Transi��es S?T?A?R?L / Mic-drop
- [ ] =8 m�tricas por case
- [ ] EU:N�S =3:1 (falha se <2:1)
- [ ] Build + Tests verdes
- [ ] Sem regress�o de bundle

## ?? Lote Atual � `dive_deep`
- Cases: 4 � Ready: 1 | Needs-Polish: 0 | KO: 3
- Pr�ximo foco: refor�ar ownership/conflito em `sicredi-churn-analysis`, `hsbc-data-validation-audit`, `unimed-fraud-investigation`

### Checklist por Case (`dive_deep`)
- [x] sicredi-pix-settlement � Ready � revisar ajustes de transi��o/ownership (warnings leves)
- [ ] sicredi-churn-analysis � KO � refor�ar EU:N�S e conflito antes de nova rodada
- [ ] hsbc-data-validation-audit � KO � refor�ar m�tricas de impacto e mic-drop
- [ ] unimed-fraud-investigation � KO � inserir conflito expl�cito e mecanismos repet�veis

## ??? Hist�rico
| Data | LP | Case | A��o | Score | Notas |
|------|----|------|------|-------|-------|
| 2025-10-04 | dive_deep | sicredi-pix-settlement | Refinado (preview) | 100 | Ready (warnings: ownership 11:4, transi��es) |
| 2025-10-04 | dive_deep | sicredi-churn-analysis | Valida��o | 68 | KO � ratio 6:4 e conflito ausente |
| 2025-10-04 | dive_deep | hsbc-data-validation-audit | Valida��o | 28 | KO � m�tricas ok, aus�ncia de mecanismos/ownership |
| 2025-10-04 | dive_deep | unimed-fraud-investigation | Valida��o | 42 | KO � rec�ncia ok, falta conflito e mic-drop |
