# GATE A - Sintese Base + App + Modelo

## Da Base (Knowledge Base + Leonardo + Vaga)
- Amazon cobra narrativa STAR(L) com mecanismos repetiveis, 8+ metricas e conflito concreto; ratio EU:Nos deve ficar >=3:1 (dealbreaker <2:1) e Customer Obsession precisa ser explicita em situacao, acao e resultado.
- Guia de LPs reforca: hooks fortes na Situacao, Task curta com ownership individual, Action de 60-70% do tempo, Resultados com comparacao before/after e Learning com mic-drop acionavel.
- Vaga Payments/Oakberry exige provas de AI/ML aplicados a operacoes, lances Lean/Six Sigma e integracao com parceiros/regulacao; dados do CV mostram repertorio em bancos (Bradesco Next, Sicredi), saude (Unimed) e governo (SEFAZ) com impacto financeiro >USD 200M.
- Prep-call e notas HR destacam: contar historias recentes (<=5 anos quando possivel), mecanizar aprendizados, voce no centro das decisoes, frugalidade e responsabilidade ampla; entrevistas esperam follow-ups sobre riscos, trade-offs, stakeholders discordantes.
- Para Bias for Action especificamente: enfatizar decisoes two-way door, calculo de riscos, tempo comprimido, e mecanismos para evitar retrabalho; ainda assim, nao perder customer obsession e longo prazo.

## Da App Anterior (bundle case-validation/)
- Front (src/**) entrega analisador 2.x orientado a browser: possui heuristicas amplas (dealbreakers, timing, ownership ratio, mecanismos) mas usa parsing permissivo e injeta textos placeholder; mantem biblioteca generica de FUPs sem bucket.
- Motor 3.0 (node) ja separado em case-validation/analyzer3/: loader sandboxia JS com vm, linter valida shape STARL/PT-EN/FUPs, heuristicas calculam metricas, customer signals, ratio EU:Nos, recencia, mecanismos e status; rewriter gera scorecard e plano de acao, fups completa com biblioteca curada, reporter grava JSON/CSV/preview.
- Relatorios atuais (review-status.*) exibem scores (Ready/Needs-Polish/Needs-Rewrite/KO) por case; previews armazenam original x mutated com sugestoes, sem tocar arquivos de origem (writer.mjs desativado) mantendo bundle isolado.
- Gaps atuais para Bias for Action: heuristica ja penaliza ausencia de conflito e metricas, mas precisamos checar se palavras-chave de velocidade/risco estao capturando bem; revisar se biblioteca de FUP inclui perguntas especificas de risco/timing; confirmar logs e output para pipeline batch.

## Do Modelo (Motor 3.0 desejado nesta rodada)
- Manter pipeline CLI fora do bundle (node case-validation/analyzer3/index.mjs --validate|--refine) respeitando shape id,title_pt,title_en,company,period,isTopCase,pt{ s,t,a,r,l },en{ s,t,a,r,l },fups[10].
- Para Bias for Action, reforcar heuristicas de velocidade: garantir contagem de termos ligados a risco calculado, decisao rapida, reversibilidade e mecanismos anti retrabalho; se necessario adicionar keywords sem quebrar outros LPs.
- Ajustar biblioteca de FUPs para trazer questoes de risco/calculo, escalonamento rapido, trade-offs de tempo; preservar paridade PT/EN e nao duplicar existentes.
- No modo refine gerar previews detalhados com scorecard atualizado, mantendo plano de acoes (dealbreakers/warnings/positives) sem alterar dados originais.
- Monitorar review-status.json|csv para confirmar que casos de bias_for_action avancam para Ready/Needs-Polish; atualizar docs/CHECKLIST_VISUAL_v2.md e docs/REVIEW_TRACKER.md apos execucao.
- Riscos: falsos positivos em metricas (regex monetaria), recencia >7 anos (verificar periodos), infos sem conflito; mitigar revisando manualmente preview e ajustando heuristicas apenas se necessario. Bundle original permanece intocado; qualquer ajuste fica em analyzer3.
