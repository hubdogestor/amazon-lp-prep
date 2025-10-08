# Lógica de Pontuação v3.2 — Refinamento do Motor de Análise

**Data**: 08 de Outubro de 2025
**Autor**: GitHub Copilot
**Status**: Proposta para Implementação

## 1. Visão Geral

Este documento detalha a nova metodologia de pontuação para o `analyzer3`, substituindo a lógica heurística anterior por um modelo ponderado e multifacetado. O objetivo é alinhar o score automático com a definição de excelência de um case, conforme estabelecido em `criterios-new.md` e `OPORTUNIDADES.md`.

A nova pontuação é baseada em **6 Dimensões Principais**, cada uma com um peso específico, totalizando 100 pontos.

| Dimensão | Peso | Fonte dos Critérios |
| :--- | :--- | :--- |
| 1. **Qualidade da Narrativa** | 25% | `OPORTUNIDADES.md` (Hooks, Transições, Mic-Drop) |
| 2. **Métricas e Dados** | 20% | `criterios-new.md` |
| 3. **Conteúdo do Leadership Principle (LP)** | 20% | `criterios-new.md` + Análise de Palavras-Chave |
| 4. **Aspectos Específicos da Amazon** | 15% | `criterios-new.md` (Customer Obsession, Mechanisms, Conflict) |
| 5. **Contribuição Individual (EU:NÓS)** | 10% | `criterios-new.md` |
| 6. **Estrutura e Sanidade Básica** | 10% | `linter.mjs` (Estrutura STAR, Paridade PT/EN) |
| **TOTAL** | **100%** | |

---

## 2. Detalhamento por Dimensão

### 2.1. Qualidade da Narrativa (25 pontos)

Esta é a dimensão mais importante, refletindo o impacto da história.

- **Hook (10 pontos)**: Avalia a força da abertura na seção (S).
  - **Lógica**: Procura a combinação de **[URGÊNCIA]** (termos como `crise`, `risco`, `queda de X%`) + **[STAKES]** (métricas de alto impacto, financeiras ou de cliente) + **[CONFLITO INICIAL]** (termos como `ameaça`, `pressão`). Um hook forte não é apenas uma frase, mas um cenário de tensão.
- **Transições (10 pontos)**: Mede a fluidez entre as seções S→T→A→R→L.
  - **Lógica**: Em vez de contar palavras soltas, o script verificará se as seções `T`, `A`, `R` e `L` começam com frases ou conectores que criam uma ponte narrativa (e.g., "Diante desse cenário...", "Para atacar o problema...", "Como resultado...", "Retrospectivamente..."). A pontuação será proporcional ao número de transições fluidas identificadas.
- **Mic-Drop (5 pontos)**: Analisa o impacto da seção de aprendizado (L).
  - **Lógica**: Pontua a presença de um aprendizado que gerou um **mecanismo replicável**. Procura a combinação de termos de aprendizado (`aprendi`, `lição`) com termos de processo (`ritual`, `playbook`, `framework`, `processo`) e evidência de replicação (`replicado em`, `adotado por`).

### 2.2. Métricas e Dados (20 pontos)

Avalia a quantificação do case.

- **Contagem de Métricas (15 pontos)**:
  - **Lógica**: A pontuação é logarítmica. Atingir as 8 métricas mínimas garante uma boa parte dos pontos. A pontuação máxima é atingida com 12+ métricas.
    - 0-4 métricas: Pontuação baixa.
    - 5-7 métricas: Pontuação média (dealbreaker).
    - 8-11 métricas: Pontuação alta.
    - 12+ métricas: Pontuação máxima.
- **Categorias de Métricas (5 pontos)**:
  - **Lógica**: Concede pontos bônus pela presença de métricas de diferentes categorias, conforme `heuristics.mjs` já faz: **Financeira**, **Cliente** e **Operacional**. Ter as três categorias garante a pontuação máxima aqui.

### 2.3. Conteúdo do LP (20 pontos)

Mede o alinhamento do case com o Leadership Principle específico.

- **Lógica**: Será criada uma nova estrutura de dados no script que mapeia cada `lp_id` (e.g., `customer_obsession`, `bias_for_action`) a uma lista de **termos-chave obrigatórios e esperados**, extraídos diretamente do `criterios-new.md`. A pontuação será baseada na densidade e presença desses termos no texto.

### 2.4. Aspectos Específicos da Amazon (15 pontos)

Avalia a presença de conceitos valorizados pela cultura Amazon.

- **Customer Obsession (5 pontos)**:
  - **Lógica**: Contagem de termos relacionados ao cliente (`cliente`, `usuário`, `NPS`, `CSAT`, `experiência`). A ausência total continua sendo um `dealbreaker`.
- **Mechanisms vs. Intentions (5 pontos)**:
  - **Lógica**: Contagem de termos que denotam a criação de sistemas e processos (`mecanismo`, `processo`, `automação`, `playbook`, `governança`).
- **Conflito e Hardening (5 pontos)**:
  - **Lógica**: Detecção de termos de conflito e superação de resistência (`conflito`, `resistência`, `objeção`, `escalar para`, `trade-off`).

### 2.5. Contribuição Individual (10 pontos)

- **Ratio EU:NÓS (10 pontos)**:
  - **Lógica**: A pontuação será uma função direta do ratio.
    - Ratio < 2:1: 0 pontos (dealbreaker).
    - Ratio 2:1 a 3:1: 5 pontos (warning).
    - Ratio > 3:1: 10 pontos.

### 2.6. Estrutura e Sanidade (10 pontos)

Pontuação base para a conformidade estrutural do case.

- **Lógica**: Esta pontuação virá diretamente do `linter.mjs`.
  - Todos os campos STARL PT/EN preenchidos: 5 pontos.
  - Paridade PT/EN equilibrada (<35% de diferença de tamanho por seção): 5 pontos.
  - Falhas aqui (campos vazios, FUPs faltando) resultarão em 0 pontos e status `KO`, como já ocorre.

---

## 3. Próximos Passos

1.  **Implementar** esta nova lógica de pontuação no arquivo `case-validation/analyzer3/heuristics.mjs`.
2.  **Refatorar** o `index.mjs` para chamar a nova função de scoring e interpretar o resultado.
3.  **Testar** o novo script contra os cases já revisados para validar a eficácia da nova pontuação.
4.  **Substituir** a lógica antiga após a validação.
