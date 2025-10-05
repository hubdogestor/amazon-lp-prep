# Motor de An�lise 3.0 � Documenta��o T�cnica

## Pipeline
1. `loader.mjs`: varre `src/data/**`, ignora `index/config`, executa sandbox `vm` e anexa metadados (`lp_id`, `__load_warnings`).
2. `linter.mjs`: valida shape STAR(L) PT/EN, checa paridade, FUPs=10, per�odos v�lidos; produz `issues` (bloqueiam) e `warnings` (aten��o).
3. `heuristics.mjs`: consolida texto PT/EN, aplica contagem de m�tricas, Customer Obsession, ratio EU:N�S, mecanismos, conflito, rec�ncia, paridade; calcula score 0-100 e status (`Ready`, `Needs-Polish`, `Needs-Rewrite`, `KO`, `Lint-Blocker`).
4. `rewriter.mjs`: gera `__scorecard` com insights + plano de a��o; converte dealbreakers/warnings em sugest�es execut�veis (sem alterar narrativa original).
5. `fups.mjs`: mant�m FUPs existentes e complementa com biblioteca curada (core + customer + m�tricas + mecanismo + LP espec�fico) at� 10 itens, sempre PT/EN sim�trico.
6. `reporter.mjs`: grava `review-status.json|csv` com lint/heur�sticas/sugest�es, e `scan_summary.md` com agregados (score m�dio, dealbreakers, etc.).
7. `preview/*.preview.json`: cada execu��o `--refine` gera diff com `original` + `mutated` (contendo scorecard e sugest�es).

## Score & Regras
- **Base 50** + ganhos: m�tricas (=12), customer signals (=6), mecanismos, conflito, hook, mic-drop, transi��es.
- Penalidades: `warnings * 5` pontos, `dealbreakers * 40` pontos (travamento se `lint.ok === false`).
- Dealbreakers tratados: aus�ncia de Customer Obsession, <8 m�tricas, ratio EU:N�S <2:1, case muito antigo (>9 anos).
- Warnings capturam lacunas de m�tricas (financeiro/operacional), conflito, mecanismos, hook, transi��es STAR(L), mic-drop, paridade PT/EN, rec�ncia >7 anos.

## Execu��o (npm scripts)
```
npm run validate:cases             # varre todo src/data, s� relat�rio
npm run refine:lp -- --lp=dive_deep # gera previews para LP selecionado
npm run refine:one -- --lp=dive_deep --case=dive_deep_case1
```

> `--case` garante foco em um case, `--data` default `src/data`. Outros par�metros opcionais: `--out` para customizar diret�rio de relat�rio.

## Sa�da (`review-status.json`)
- `status`: estado final considerando lint + heur�sticas.
- `lint`: issues/warnings estruturais.
- `heur`: scorecard completo (score, dealbreakers, warnings, positives, m�tricas, ratio, rec�ncia, paridade).
- `changes`: sugest�es aplicadas no modo `--refine` (dealbreaker/warning/inf o).

## Boas Pr�ticas de Uso
- Rodar `npm run validate:cases` antes de qualquer refino para entender blockers.
- S� promover cases `Ready` ou `Needs-Polish`; `Needs-Rewrite` depende de reescrita manual.
- Revisar `preview/<case>.preview.json` antes de atualizar textos definitivos.
- Usar `scan_summary.md` + `docs/REVIEW_TRACKER.md` para atualizar status manual.

## Extens�es Futuras
- Enriquecer `lpIdToFups` com cat�logos espec�ficos por LP restantes.
- Integrar anota��o de follow-up buckets (Technical, Conflict, Mechanisms) direto nos relat�rios.
- Adicionar flag `--dry-run=false` para futura escrita autom�tica (writer continua desativado).
