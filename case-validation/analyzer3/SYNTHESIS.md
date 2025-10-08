# Síntese de Conhecimento para o Motor de Análise v3.2# GATE A - Sintese Base + App + Modelo



**Data**: 08 de Outubro de 2025## Da Base (Knowledge Base + Leonardo + Vaga)

**Autor**: Principal Engineer (GitHub Copilot)- Amazon cobra narrativa STAR(L) com mecanismos repetiveis, 8+ metricas e conflito concreto; ratio EU:Nos deve ficar >=3:1 (dealbreaker <2:1) e Customer Obsession precisa ser explicita em situacao, acao e resultado.

**Status**: ✅ Concluído- Guia de LPs reforca: hooks fortes na Situacao, Task curta com ownership individual, Action de 60-70% do tempo, Resultados com comparacao before/after e Learning com mic-drop acionavel.

- Vaga Payments/Oakberry exige provas de AI/ML aplicados a operacoes, lances Lean/Six Sigma e integracao com parceiros/regulacao; dados do CV mostram repertorio em bancos (Bradesco Next, Sicredi), saude (Unimed) e governo (SEFAZ) com impacto financeiro >USD 200M.

## 1. Introdução- Prep-call e notas HR destacam: contar historias recentes (<=5 anos quando possivel), mecanizar aprendizados, voce no centro das decisoes, frugalidade e responsabilidade ampla; entrevistas esperam follow-ups sobre riscos, trade-offs, stakeholders discordantes.

- Para Bias for Action especificamente: enfatizar decisoes two-way door, calculo de riscos, tempo comprimido, e mecanismos para evitar retrabalho; ainda assim, nao perder customer obsession e longo prazo.

Este documento sintetiza as fontes de conhecimento que serviram de base para a construção do **Motor de Análise v3.2**. O objetivo do motor é automatizar a avaliação de casos de entrevista para os Princípios de Liderança da Amazon, movendo de uma análise superficial para uma avaliação contextual e profunda, alinhada com os benchmarks de um *Bar Raiser*.

## Da App Anterior (bundle case-validation/)

## 2. Fontes de Conhecimento Ingeridas- Front (src/**) entrega analisador 2.x orientado a browser: possui heuristicas amplas (dealbreakers, timing, ownership ratio, mecanismos) mas usa parsing permissivo e injeta textos placeholder; mantem biblioteca generica de FUPs sem bucket.

- Motor 3.0 (node) ja separado em case-validation/analyzer3/: loader sandboxia JS com vm, linter valida shape STARL/PT-EN/FUPs, heuristicas calculam metricas, customer signals, ratio EU:Nos, recencia, mecanismos e status; rewriter gera scorecard e plano de acao, fups completa com biblioteca curada, reporter grava JSON/CSV/preview.

### 2.1. Da Base de Conhecimento (`base-conhecimento/`)- Relatorios atuais (review-status.*) exibem scores (Ready/Needs-Polish/Needs-Rewrite/KO) por case; previews armazenam original x mutated com sugestoes, sem tocar arquivos de origem (writer.mjs desativado) mantendo bundle isolado.

- Gaps atuais para Bias for Action: heuristica ja penaliza ausencia de conflito e metricas, mas precisamos checar se palavras-chave de velocidade/risco estao capturando bem; revisar se biblioteca de FUP inclui perguntas especificas de risco/timing; confirmar logs e output para pipeline batch.

A análise dos documentos internos e guias de preparação da Amazon revelou três pilares essenciais:

## Do Modelo (Motor 3.0 desejado nesta rodada)

-   **Linguagem e Critérios Amazon**: A comunicação deve ser direta, data-driven e focada em impacto. O uso de métricas específicas (e.g., "NPS subiu de 28 para 58") é mais valorizado do que adjetivos (e.g., "melhora significativa").- Manter pipeline CLI fora do bundle (node case-validation/analyzer3/index.mjs --validate|--refine) respeitando shape id,title_pt,title_en,company,period,isTopCase,pt{ s,t,a,r,l },en{ s,t,a,r,l },fups[10].

-   **Mecanismos > Intenções**: A Amazon valoriza a criação de mecanismos, processos e sistemas replicáveis que resolvem problemas em escala. Um bom "Learning" (L) não é apenas uma lição abstrata, mas a criação de um playbook, ritual ou ferramenta que foi adotada por outros.- Para Bias for Action, reforcar heuristicas de velocidade: garantir contagem de termos ligados a risco calculado, decisao rapida, reversibilidade e mecanismos anti retrabalho; se necessario adicionar keywords sem quebrar outros LPs.

-   **Métricas-Alvo e Ratios**: Há metas quantitativas claras que um caso forte deve atingir:- Ajustar biblioteca de FUPs para trazer questoes de risco/calculo, escalonamento rapido, trade-offs de tempo; preservar paridade PT/EN e nao duplicar existentes.

    -   **Métricas**: No mínimo 8 métricas confiáveis por caso.- No modo refine gerar previews detalhados com scorecard atualizado, mantendo plano de acoes (dealbreakers/warnings/positives) sem alterar dados originais.

    -   **Contribuição Individual**: O ratio "Eu" vs. "Nós" deve ser de pelo menos 3:1 para demonstrar ownership claro.- Monitorar review-status.json|csv para confirmar que casos de bias_for_action avancam para Ready/Needs-Polish; atualizar docs/CHECKLIST_VISUAL_v2.md e docs/REVIEW_TRACKER.md apos execucao.

    -   **Customer Obsession**: É um dealbreaker. Todo caso deve, explicitamente, conectar a ação ao impacto no cliente final.- Riscos: falsos positivos em metricas (regex monetaria), recencia >7 anos (verificar periodos), infos sem conflito; mitigar revisando manualmente preview e ajustando heuristicas apenas se necessario. Bundle original permanece intocado; qualquer ajuste fica em analyzer3.


### 2.2. Da Aplicação Anterior (Análise de Gaps)

A versão anterior do validador e a análise do documento `OPORTUNIDADES.md` apontaram falhas críticas que foram o foco desta nova versão:

-   **Análise Superficial de Narrativa**: O sistema anterior era incapaz de distinguir um "hook" fraco de um forte. Ele não media a presença de tensão, stakes ou conflito inicial.
-   **Transições Robóticas**: Os casos pareciam uma lista de "S, T, A, R, L" sem conectores narrativos. O motor antigo não validava a fluidez entre as seções.
-   **"Keyword Stuffing"**: A pontuação era baseada na contagem simples de palavras-chave, o que podia ser facilmente "enganado" e não media a qualidade do contexto onde a palavra-chave aparecia.
-   **Falta de Ponderação**: Todas as dimensões de qualidade tinham o mesmo peso, enquanto a cultura Amazon claramente prioriza aspectos como Customer Obsession e Entrega de Resultados.

### 2.3. Do Novo Modelo (Motor v3.2)

O Motor v3.2 foi projetado para endereçar diretamente esses gaps, aplicando análise contextual e pontuação objetiva e ponderada.

-   **Análise Contextual**:
    -   **Hooks**: Utiliza RegEx (`HOOK_STAKES_REGEX`) para detectar "stakes" numéricos (e.g., R$ 1,2 milhão, 38 mil consultas) e listas de termos para identificar "urgência" e "conflito".
    -   **Transições**: Procura por frases de transição específicas (`TRANSITION_STARTERS`) que conectam as seções S→T→A→R→L.
    -   **Keywords com Força**: As palavras-chave agora são classificadas como `strong` e `medium` (`lp-keywords.mjs`), permitindo uma pontuação mais granular que valoriza termos de alto impacto.
    -   **Métricas por Categoria**: O motor agora classifica métricas em `Financeira`, `Cliente` e `Operacional`, incentivando diversidade.

-   **Scoring Objetivo e Ponderado**:
    -   O score final é uma soma ponderada de 6 dimensões, refletindo as prioridades da Amazon:
        1.  **Qualidade da Narrativa (25%)**: Avalia Hooks, Transições e Mic-drops.
        2.  **Métricas (20%)**: Avalia quantidade e diversidade das métricas.
        3.  **Conteúdo do LP (20%)**: Mede a profundidade da conexão com o LP específico.
        4.  **Aspectos Amazon (15%)**: Mede Customer Obsession, Mecanismos e Conflito.
        5.  **Contribuição Individual (10%)**: Mede o ratio EU:NÓS.
        6.  **Estrutura (10%)**: Valida a integridade do arquivo e paridade PT/EN.

## 3. Conclusão

O Motor v3.2 representa uma evolução significativa, movendo de uma simples verificação de presença para uma análise de qualidade e contexto. Ao sintetizar o conhecimento da cultura Amazon com as lições aprendidas da versão anterior, o novo sistema fornece uma avaliação muito mais precisa e alinhada com o que é esperado de um candidato de alto nível.
