# GATE A: Síntese da Base de Conhecimento, Aplicação Anterior e Modelo de Análise

Este documento sintetiza os aprendizados da fase de Ingestão, servindo como fundação para o desenvolvimento do **Motor de Análise 3.0**. O objetivo é consolidar os critérios de avaliação, identificar gaps nos processos anteriores e direcionar a nova implementação para uma análise mais inteligente e alinhada às expectativas da Amazon.

## 1. Da Base de Conhecimento: Critérios e Linguagem Amazon

A análise dos artefatos (`base-conhecimento/`, `prompts/`, `docs/`) revela um conjunto claro de critérios inegociáveis para a construção de cases de sucesso.

-   **Customer Obsession é o Pilar Central**: Todas as histórias devem começar e terminar com o cliente. A narrativa precisa demonstrar como a necessidade do cliente guiou as ações e como o resultado o beneficiou. O motor deve penalizar cases que não estabelecem essa conexão de forma explícita.
-   **Mecanismos > Intenções**: A Amazon valoriza a criação de processos, sistemas e ferramentas que garantem resultados de forma repetível e escalável. O motor deve ser capaz de identificar e valorizar a criação de "mecanismos" (ex: dashboards automatizados, checklists de qualidade, frameworks de decisão) em detrimento de "boas intenções" (ex: "trabalhamos duro", "nos esforçamos mais").
-   **Métricas de Impacto São Mandatórias**: Cases sem quantificação são fracos. O motor deve exigir um número mínimo de métricas (alvo: **≥8**) que cubram tanto o resultado de negócio (receita, custo, churn) quanto o impacto operacional (eficiência, tempo, qualidade). A ausência de métricas é um *dealbreaker*.
-   **Ratio EU:NÓS (I:WE)**: A contribuição individual deve ser cristalina. O motor precisa calcular o ratio de pronomes "Eu" vs. "Nós" e sinalizar como crítico qualquer case com um ratio inferior a **2:1** (alvo ideal: **≥3:1**).
-   **STAR(L) e Narrativa**: A estrutura Situação, Tarefa, Ação, Resultado e Aprendizado é a espinha dorsal. O motor deve validar a completude e a fluidez da narrativa, identificando a presença de um **gancho inicial (hook)**, **transições claras** entre as seções e um **fechamento de impacto (mic-drop)** no aprendizado (L).

## 2. Da Aplicação Anterior: Gaps e Falhas Recorrentes

A análise dos scripts em `case-validation/` e dos relatórios antigos revela o que a ferramenta anterior fazia bem e onde falhava.

-   **O que já era medido bem**:
    -   **Validação de Schema**: A estrutura do objeto `.js` (presença de `id`, `title`, `pt`, `en`, etc.) era bem validada.
    -   **Linting Básico**: Verificações de conformidade de código (formatação, sintaxe) eram aplicadas.
    -   **Contagem Simples**: Métricas básicas como contagem de palavras ou caracteres eram possíveis.

-   **Gaps e Falhas Recorrentes**:
    -   **Análise Semântica Inexistente**: A ferramenta não compreendia o *conteúdo*. Ela não conseguia diferenciar um bom "Resultado" (com métricas) de um ruim (sem métricas).
    -   **Falta de Análise de Sentimento e Tom**: O tom executivo e a autocrítica vocal (essencial para "Earn Trust") não eram avaliados.
    -   **Incapacidade de Medir Complexidade**: A ferramenta não distinguia um case de alta complexidade (adequado para L6+) de um simples.
    -   **"Hook Inicial Fraco"**: Uma falha recorrente identificada manualmente, mas que o sistema anterior não detectava. A introdução da Situação (S) precisa ser mais impactante.
    -   **Paridade PT/EN**: A verificação de paridade entre as versões em português e inglês era manual e propensa a erros, especialmente com *false friends*.

## 3. Do Modelo: Onde Aplicar Análise Contextual e Scoring

O **Motor 3.0** deve superar os gaps acima, aplicando inteligência contextual e um sistema de scoring objetivo.

-   **Análise Contextual (LLM-powered)**:
    1.  **Identificação de Entidades**: Extrair e classificar métricas ($, %, dias), tecnologias, nomes de projetos e stakeholders para validar a profundidade do case.
    2.  **Análise de Causa Raiz**: Em "Dive Deep", verificar se a "Ação" (A) de fato endereça uma causa raiz identificada na "Situação" (S) ou "Tarefa" (T).
    3.  **Detecção de Mecanismos**: Identificar palavras-chave como "framework", "dashboard", "automação", "processo", "checklist", "playbook" para pontuar positivamente a criação de mecanismos.
    4.  **Avaliação do "Hook" e "Mic-drop"**: Analisar a primeira frase da Situação (S) e a última do Aprendizado (L) para avaliar seu impacto narrativo.
    5.  **Verificação de Paridade Semântica PT/EN**: Em vez de uma tradução literal, usar embeddings ou análise semântica para garantir que o *significado* e o *tom* são consistentes entre os idiomas.

-   **Scoring Objetivo**:
    -   **Métricas**: Pontuar com base no número e na qualidade das métricas (ex: métricas de resultado de negócio valem mais que métricas de processo).
    -   **Ratio EU:NÓS**: Pontuação direta baseada no ratio calculado.
    -   **Alinhamento com LP**: Avaliar a presença de palavras-chave e conceitos associados a cada Leadership Principle.
    -   **Complexidade**: Pontuar com base na escala do projeto (impacto financeiro, número de usuários, times envolvidos) e nos trade-offs enfrentados.
    -   **Dealbreakers**: Aplicar um redutor de pontuação severo ou zerar o score na ausência de Customer Obsession, métricas, ou com um ratio EU:NÓS muito baixo.

Com esta síntese, o caminho para o **GATE B (Construção do Motor 3.0)** está claro. A próxima fase focará em implementar essas capacidades de análise e scoring nos módulos `linter.mjs`, `heuristics.mjs` e `rewriter.mjs`.
