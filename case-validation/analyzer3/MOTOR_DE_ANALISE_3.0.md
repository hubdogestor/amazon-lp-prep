# Motor de Análise 3.0 — Documentação Técnica

## Pipeline
1. `loader.mjs`: varre `src/data/**`, ignora `index/config`, executa sandbox `vm` e anexa metadados (`lp_id`, `__load_warnings`).
2. `linter.mjs`: valida shape STAR(L) PT/EN, checa paridade, FUPs=10, períodos válidos; produz `issues` (bloqueiam) e `warnings` (atenção).
3. `heuristics.mjs`: consolida texto PT/EN, aplica contagem de métricas, Customer Obsession, ratio EU:NÓS, mecanismos, conflito, recência, paridade; calcula score 0-100 e status (`Ready`, `Needs-Polish`, `Needs-Rewrite`, `KO`, `Lint-Blocker`).
4. `rewriter.mjs`: gera `__scorecard` com insights + plano de ação; converte dealbreakers/warnings em sugestões executáveis (sem alterar narrativa original).
5. `fups.mjs`: mantém FUPs existentes e complementa com biblioteca curada (core + customer + métricas + mecanismo + LP específico) até 10 itens, sempre PT/EN simétrico.
6. `reporter.mjs`: grava `review-status.json|csv` com lint/heurísticas/sugestões, e `scan_summary.md` com agregados (score médio, dealbreakers, etc.).
7. `preview/*.preview.json`: cada execução `--refine` gera diff com `original` + `mutated` (contendo scorecard e sugestões).

## Score & Regras
- **Base 50** + ganhos: métricas (=12), customer signals (=6), mecanismos, conflito, hook, mic-drop, transições.
- Penalidades: `warnings * 5` pontos, `dealbreakers * 40` pontos (travamento se `lint.ok === false`).
- Dealbreakers tratados: ausência de Customer Obsession, <8 métricas, ratio EU:NÓS <2:1, case muito antigo (>9 anos).
- Warnings capturam lacunas de métricas (financeiro/operacional), conflito, mecanismos, hook, transições STAR(L), mic-drop, paridade PT/EN, recência >7 anos.

## Execução (npm scripts)
```
npm run validate:cases             # varre todo src/data, só relatório
npm run refine:lp -- --lp=dive_deep # gera previews para LP selecionado
npm run refine:one -- --lp=dive_deep --case=dive_deep_case1
```

> `--case` garante foco em um case, `--data` default `src/data`. Outros parâmetros opcionais: `--out` para customizar diretório de relatório.

## Saída (`review-status.json`)
- `status`: estado final considerando lint + heurísticas.
- `lint`: issues/warnings estruturais.
- `heur`: scorecard completo (score, dealbreakers, warnings, positives, métricas, ratio, recência, paridade).
- `changes`: sugestões aplicadas no modo `--refine` (dealbreaker/warning/inf o).

## Boas Práticas de Uso
- Rodar `npm run validate:cases` antes de qualquer refino para entender blockers.
- Só promover cases `Ready` ou `Needs-Polish`; `Needs-Rewrite` depende de reescrita manual.
- Revisar `preview/<case>.preview.json` antes de atualizar textos definitivos.
- Usar `scan_summary.md` + `docs/REVIEW_TRACKER.md` para atualizar status manual.

## Extensões Futuras
- Enriquecer `lpIdToFups` com catálogos específicos por LP restantes.
- Integrar anotação de follow-up buckets (Technical, Conflict, Mechanisms) direto nos relatórios.
- Adicionar flag `--dry-run=false` para futura escrita automática (writer continua desativado).
