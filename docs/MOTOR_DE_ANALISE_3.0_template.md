# MOTOR_DE_ANALISE_3.0.md — GATE B
**Data:** 2025-10-04 22:04

## 1) Arquitetura
- `index.mjs` (CLI/orquestração)
- `loader` (scan/parse casos)
- `linter` (schema STARL + FUPs PT/EN)
- `heuristics` (hook, transições, mic-drop, métricas, EU:NÓS)
- `rewriter` (preenchimentos conservadores; marcadores)
- `fups` (completar até 10)
- `reporter` (JSON/CSV + previews)
- `writer` (desabilitado; só aplicar após revisão humana)

## 2) Scoring/Thresholds
- Score alvo ≥ 0.8 (componentes: hook/transições/mic-drop/métricas/ratio)
- Métricas por case ≥ 8
- EU:NÓS desejado 0.6–0.9 (ideal ~0.75)

## 3) Fluxo
1. `--validate`: scan + relatórios
2. `--refine`: gera apenas `preview/*.preview.json`
3. Revisão humana → (opcional) aplicar

## 4) Scripts
- validate: `node case-validation/analyzer3/index.mjs --validate --data=src/data`
- refine lp: `node case-validation/analyzer3/index.mjs --refine --lp=<id> --data=src/data`
- refine one: `node case-validation/analyzer3/index.mjs --refine --lp=<id> --case=<id> --data=src/data`
