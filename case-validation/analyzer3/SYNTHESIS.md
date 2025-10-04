# GATE A — Sintese Base + App + Modelo

## Da Base (Knowledge Base + vaga)
- LPs como mecanismos: customer obsession em primeiro plano, ownership, dive deep, invent and simplify, insist on highest standards, deliver results; cada história precisa mostrar conflito real, decisões difíceis e impacto replicável.
- Requisitos duros: >=8 métricas confiáveis por case (finanças, cliente, operação), ratio EU:NÓS >=3:1 (falha automática <2:1), conflito explícito com resolução, recência (últimos 5 anos preferencial), aprendizagem/mic-drop obrigatório.
- Amazon prioriza mecanismos acima de intenções: processos sustentáveis, dashboards, automações e cadência de auditoria são provas fortes.
- Tom duplamente executivo PT/EN espelhado, sem “false friends”; customer obsession obrigatória mesmo em casos técnicos; dados devem amarrar cliente ? negócio.
- Vaga Payments/Oakberry: ênfase em AI/ML aplicada a operações, Lean/Six Sigma, eventos críticos, governança e integração parceiros — precisa destacar impactos em pagamentos, automação, risco/reg compliance.

## Da App Anterior (bundle `case-validation/`)
- Analyzer 2.0 (front) possui heurísticas ricas: dealbreakers, timing, mecanismos, ownership ratio; bom repertório conceitual mas roda no browser e injeta placeholders.
- Motor 3.0 atual (node) é minimalista: garante apenas campos STARL e FUPs genéricas, insere marcadores `[Hook]`, `[Transition]`, `[Mic-drop]` sem conteúdo real, não valida métricas, conflito ou customer obsession ? risco de reprovação.
- Loader aceita JS com `eval`/`vm` sem validar esquema completo ? precisamos endurecer parsing e reportar erros por case.
- Reporter gera `review-status.json|csv`, mas heurísticas usam regex simples (quantidade de `%`, `eu`/`nos`), resultando em falsos positivos; não há scoring objetivo nem checagem de recência/conflito.
- FUPs padronizadas quebram paridade PT/EN e não consideram bucket (técnico, conflito, mecanismo). Nenhum mecanismo para conservar texto existente.

## Do Modelo (Motor 3.0 desejado)
- Pipeline fora do bundle (somente `case-validation/analyzer3/**`): Loader rígido (schema STARL + FUPs=10), validações contextuais (recência <=60 meses salvo exceção, conflito detectado por palavras-chave e follow-ups existentes), customer obsession com heurísticas multi-língua.
- Scoring objetivo: peso para Dealbreakers (KO), red flags (penalidade), métricas (contagem, diversidade), ratio EU:NÓS (0-1), mecanismos, hooks/transições/mic-drop reais, alinhamento LP (palavras-chave e entidades). Saída por case: status, score 0-100, motivos.
- Rewriter deve apenas sugerir (pré-visualização) sem placeholders: produzir `preview/<id>.preview.json` com diffs textuais e recomendações estruradas (sem alterar arquivo original). Fornecer upgrades Paridade PT/EN via heurística que compara comprimento, sentenças e termos.
- FUPs: manter existentes; completar faltantes com biblioteca curada por LP/bucket; validar PT/EN 1:1, sem texto “? revisar”.
- Reporter: atualizar `review-status.json|csv` e `scan_summary.md` com métricas agregadas (quantidade de dealbreakers, média ratio, média métricas, lista de KOs). Preparar dados para checklist.
- CLI: suportar `--validate`, `--refine --lp=... [--case=...]`, flags de modo seco vs aplicar preview; logs humanos com contadores finais.
- Integração pós-Gate B: manter writer off; outputs alimentam revisão humana ? ação posterior será manual.
