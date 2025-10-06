# analyzer3 – Pipeline de validação/refino (Amazon LP Prep)
Gerado em: 2025-10-04 22:04

## 🎯 Uso

```bash
# Validar todos os cases
node case-validation/analyzer3/index.mjs --validate --data=src/data

# Refinar LP inteiro
node case-validation/analyzer3/index.mjs --refine --lp=<lp_id> --data=src/data

# Refinar case específico
node case-validation/analyzer3/index.mjs --refine --lp=<lp_id> --case=<case_id> --data=src/data
```

## 📂 Saídas

- `case-validation/analyzer3/reports/review-status.json|csv`
- `case-validation/analyzer3/preview/*.preview.json`

## ⚠️ REGRA CRÍTICA: Sempre Revisar FUPs Após Refinamento

**QUANDO**: Sempre que um case for refinado/adaptado (STAR(L) modificado)

**O QUE FAZER**:
1. ✅ Revisar todas as 10 FUPs para garantir alinhamento com nova narrativa
2. ✅ Adicionar 2-3 FUPs sobre elementos novos da narrativa
3. ✅ Expandir respostas existentes para incluir mais contexto/métricas
4. ✅ Garantir que keywords da narrativa apareçam nas FUPs

**EXEMPLO**: 
- Narrativa mudou de "3 inputs" para "6 obstáculos superados"
- FUPs devem refletir isso: "Qual foi o obstáculo mais difícil?", "Como atacou 6 em paralelo?", etc.

**POR QUÊ**: 
- FUPs são a **prova** de que você viveu o case
- Entrevistador vai fazer deep-dive nos detalhes
- FUPs desalinhadas = red flag de autenticidade

**CHECKLIST FUPs Pós-Refinamento**:
- [ ] Todas as 10 FUPs existem (mínimo)
- [ ] FUPs refletem keywords/conceitos da nova narrativa
- [ ] Respostas têm métricas concretas
- [ ] PT/EN parity nas FUPs
- [ ] FUPs cobrem todos os elementos STAR(L)

