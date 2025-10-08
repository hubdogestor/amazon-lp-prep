# Documentação do Motor de Análise v3.2# Motor de Análise 3.0 — Documentação Completa



**Data**: 08 de Outubro de 2025**Versão**: 3.1.0  

**Autor**: Principal Engineer (GitHub Copilot)**Última Atualização**: 07 de Outubro de 2025  

**Status**: ✅ Versão Final**Status**: ✅ VALIDADO E OPERACIONAL



## 1. Visão Geral---



O Motor de Análise v3.2 é um sistema baseado em Node.js projetado para avaliar programaticamente a qualidade de narrativas de entrevista baseadas nos Princípios de Liderança da Amazon. Ele substitui uma abordagem anterior, baseada em contagem de palavras-chave, por um modelo de pontuação ponderado e multidimensional que analisa o contexto e a estrutura da narrativa.## 📋 ÍNDICE



O sistema opera através de scripts na pasta `case-validation/analyzer3/` e pode ser invocado via comandos `npm`.1. [Visão Geral](#visão-geral)

2. [Pipeline de Execução](#pipeline-de-execução)

## 2. Arquitetura e Componentes3. [Como Usar](#como-usar)

4. [Sistema de Scoring](#sistema-de-scoring)

O motor é composto por vários módulos que trabalham em conjunto:5. [Saídas e Relatórios](#saídas-e-relatórios)

6. [Troubleshooting](#troubleshooting)

-   `index.mjs`: O orquestrador principal. Processa os argumentos da linha de comando (`--validate`, `--refine`), carrega os casos, executa as análises e gera os relatórios.7. [Validação e Testes](#validação-e-testes)

-   `loader.mjs`: Responsável por carregar os arquivos de caso (`.js`) do diretório `src/data`, tratando erros de sintaxe e validando a estrutura básica.

-   `linter.mjs`: Realiza verificações estruturais e de conformidade nos dados do caso. Garante que todos os campos necessários (`s`, `t`, `a`, `r`, `l`) estão presentes, que não há campos vazios e que a paridade entre PT e EN é mantida.---

-   `heuristics.mjs`: **O cérebro do motor**. Contém a lógica de pontuação (`analyzeHeuristics`). É aqui que as 6 dimensões de qualidade são avaliadas.

-   `lp-keywords.mjs`: Um dicionário de palavras-chave associadas a cada Princípio de Liderança, divididas em `strong` e `medium` para uma pontuação mais precisa.## 🎯 VISÃO GERAL

-   `reporter.mjs`: Formata e escreve os resultados da análise em diferentes formatos, como JSON e CSV, na pasta `reports/`.

-   `rewriter.mjs` / `fups.mjs`: Módulos para o modo `--refine`, responsáveis por sugerir melhorias (atualmente em desenvolvimento).O Motor 3.0 é um sistema automatizado de análise e validação de cases STAR(L) para preparação de entrevistas Amazon. Ele:



## 3. Lógica de Pontuação (Scoring)✅ **Valida** estrutura, conteúdo e qualidade de 68 cases  

✅ **Detecta** dealbreakers e warnings automaticamente  

A pontuação é a principal inovação do v3.2. Um score final de 0 a 100 é calculado com base em 6 dimensões ponderadas:✅ **Calcula** score 0-100 baseado em heurísticas Amazon  

✅ **Gera** previews com sugestões de melhoria  

### 3.1. Qualidade da Narrativa (Peso: 25%)✅ **Produz** relatórios JSON/CSV para análise  



-   **Hook (10 pts)**: Avalia a força da abertura do caso. Procura por termos de **urgência** (`crise`, `risco`), **stakes** numéricos (R$ 1.2M, 38 mil consultas) e **conflito** (`board`, `c-level`).**Status Atual**: ✅ OPERACIONAL (validado em 07/10/2025)

-   **Transições (10 pts)**: Verifica se existem conectores narrativos fluidos entre as seções S→T→A→R→L, usando uma lista de frases de transição comuns.

-   **Mic-Drop (5 pts)**: Analisa a seção de aprendizado (L). Pontua mais alto se o aprendizado gerou um **mecanismo** (`playbook`, `ritual`) que foi **replicado** em outros contextos.---



### 3.2. Métricas (Peso: 20%)## ⚙️ PIPELINE DE EXECUÇÃO



-   **Quantidade (15 pts)**: Usa uma escala logarítmica. A pontuação máxima é para 12+ métricas, com um bom score para 8+.### **1. Loader (`loader.mjs`)**

-   **Diversidade (5 pts)**: Incentiva o uso de métricas de diferentes categorias, procurando por termos `Financeiros` (ROI, receita), de `Cliente` (NPS, CSAT) e `Operacionais` (SLA, latência).- **Função**: Carrega todos os cases de `src/data/**/*.js`

- **Processo**:

### 3.3. Conteúdo do LP (Peso: 20%)  - Varre diretórios recursivamente

  - Ignora arquivos de configuração (index.js, config.js, etc.)

-   Mede a profundidade da conexão com o Princípio de Liderança específico do caso. Usa o `lp-keywords.mjs` para contar ocorrências de palavras-chave `strong` (2 pontos) e `medium` (1 ponto), com um teto de 20 pontos.  - Executa cada case em sandbox VM seguro

  - Anexa metadados: `lp_id`, `case_id`, `__load_warnings`

### 3.4. Aspectos Amazon (Peso: 15%)- **Output**: Array de cases carregados



-   **Customer Obsession (5 pts)**: Procura por termos relacionados ao cliente. A pontuação é significativamente maior se uma métrica de cliente (NPS, CSAT) for encontrada.### **2. Linter (`linter.mjs`)**

-   **Mecanismos (5 pts)**: Reutiliza a lógica do Mic-Drop para encontrar a criação de sistemas e processos.- **Função**: Valida estrutura e shape dos cases

-   **Conflito (5 pts)**: Procura por termos que indicam superação de resistência (`conflito`, `objeção`, `escalar`).- **Validações**:

  - ✅ Presença de campos obrigatórios (id, title, company, period, pt, en, fups)

### 3.5. Contribuição Individual (Peso: 10%)  - ✅ STAR(L) completo em PT e EN (s, t, a, r, l)

  - ✅ Exatamente 10 FUPs (q, a, q_en, a_en)

-   Calcula o ratio de "Eu" vs. "Nós" no texto. Um ratio de **3:1 ou mais** recebe a pontuação máxima (10). Um ratio abaixo de 2:1 é um *dealbreaker*.  - ✅ Período válido (formato MM/YYYY-MM/YYYY)

  - ✅ Paridade PT/EN (mesmas seções, tamanhos similares)

### 3.6. Estrutura (Peso: 10%)- **Output**: `{ ok: boolean, issues: [], warnings: [] }`

  - **Issues**: Bloqueadores (impedem Ready)

-   Recebe a pontuação do `linter.mjs`. A pontuação máxima (10) é dada se não houver erros ou warnings. Warnings de paridade PT/EN reduzem a pontuação.  - **Warnings**: Pontos de atenção (reduzem score)



## 4. Status e Dealbreakers### **3. Heuristics (`heuristics.mjs`)**

- **Função**: Análise profunda de qualidade do conteúdo

-   **Dealbreakers**: Certas condições resultam em um status `KO` (Knock-Out) imediato, independentemente do score.- **Análises**:

    -   Ratio EU:NÓS < 2:1.  - 📊 **Métricas**: Conta métricas quantitativas (financeiras, operacionais, cliente)

    -   Menos de 5 métricas.  - 👥 **Customer Obsession**: Detecta sinais de foco no cliente

    -   Ausência total de sinais de Customer Obsession.  - 🔢 **Ratio EU:NÓS**: Calcula protagonismo individual

    -   Erros estruturais graves apontados pelo linter.  - ⚙️ **Mecanismos**: Identifica processos/frameworks replicáveis

-   **Status**: Com base no score final e na ausência de dealbreakers, um caso é classificado como:  - ⚔️ **Conflito**: Detecta tensão dramática e resistência

    -   `Ready` (≥ 85)  - 📅 **Recency**: Calcula antiguidade do case

    -   `Needs-Polish` (≥ 70)  - 🌐 **Paridade PT/EN**: Verifica simetria entre versões

    -   `Needs-Rewrite` (< 70)- **Output**: Score 0-100 + Status (Ready/Polish/Rewrite/KO)



## 5. Como Usar### **4. Rewriter (`rewriter.mjs`)**

- **Função**: Gera scorecard e sugestões de melhoria

-   **Validação de todos os casos**:- **Processo**:

    ```bash  - Converte dealbreakers em ações corretivas

    node case-validation/analyzer3/index.mjs --validate --data=src/data  - Transforma warnings em sugestões específicas

    ```  - Cria plano de ação executável

-   **Validação de um LP específico**:  - **NÃO ALTERA** o case original (apenas preview)

    ```bash- **Output**: `__scorecard` com insights + action plan

    node case-validation/analyzer3/index.mjs --validate --lp=dive_deep --data=src/data

    ```### **5. FUPs (`fups.mjs`)**

-   **Validação de um caso específico**:- **Função**: Valida e complementa Follow-Up Questions

    ```bash- **Processo**:

    node case-validation/analyzer3/index.mjs --validate --case=calculated-risk-time-critical --data=src/data  - Mantém FUPs existentes (se boas)

    ```  - Sugere FUPs adicionais de biblioteca curada:

Os relatórios são gerados em `case-validation/analyzer3/reports/`.    - Core questions (métricas, decisões)

    - Customer-focused questions
    - Mechanism questions
    - LP-specific questions
  - Garante simetria PT/EN
- **Output**: 10 FUPs completas (q, a, q_en, a_en)

### **6. Reporter (`reporter.mjs`)**
- **Função**: Gera relatórios consolidados
- **Arquivos Criados**:
  - `review-status.json`: Análise detalhada de todos os cases
  - `review-status.csv`: Versão tabular para Excel
  - `scan_summary.md`: Agregados e estatísticas
- **Conteúdo**: Status, scores, dealbreakers, warnings, positives

### **7. Preview (`preview/*.preview.json`)**
- **Função**: Gera diff com caso original + sugestões
- **Estrutura**:
  ```json
  {
    "original": { /* case original intacto */ },
    "analysis": {
      "lint": { /* resultados lint */ },
      "heur": { /* heurísticas + scoring */ },
      "score": 100,
      "status": "Ready"
    },
    "suggestions": { /* sugestões de melhoria */ }
  }
  ```

---

## 🚀 COMO USAR

### **Comando 1: Validar Todos os Cases**

```bash
npm run validate:cases
```

**O que faz**:
- Varre todos os 68 cases em `src/data/`
- Executa lint + heuristics em cada um
- Gera `review-status.json` e `.csv`
- **NÃO gera previews** (apenas análise)

**Quando usar**:
- Antes de qualquer refinamento
- Para entender estado global do portfólio
- Para identificar cases KO/blockers

**Output**:
```
[customer_obsession] READY unimed-customer-experience -> Ready (score 100)
[ownership] KO bradesco-next-delay -> KO (score 45)
[analyzer3] Relatórios em case-validation/analyzer3/reports
```

---

### **Comando 2: Refinar LP Específico**

```bash
npm run refine:lp -- --lp=customer_obsession
```

**O que faz**:
- Processa TODOS os 68 cases novamente
- Gera `preview/*.preview.json` para análise
- Atualiza `review-status.json`

**Quando usar**:
- Após identificar cases que precisam melhoria
- Para gerar sugestões de refinamento
- Antes de revisar manualmente cases

**Output**:
```
[customer_obsession] READY unimed-customer-experience -> Ready (score 100)
[analyzer3] Previews prontos em 'case-validation/analyzer3/preview/'
```

---

### **Comando 3: Refinar Case Específico** (opcional)

```bash
npm run refine:one -- --lp=ownership --case=hsbc-migration-leadership
```

**O que faz**:
- Processa apenas 1 case específico
- Gera preview individual
- Útil para testes focados

---

## 📊 SISTEMA DE SCORING

### **Fórmula Base**

```
Score = 50 (base)
  + Métricas (até 12 pontos)
  + Customer Signals (até 6 pontos)
  + Mecanismos (até 8 pontos)
  + Conflito (até 8 pontos)
  + Hook (até 6 pontos)
  + Transições (até 4 pontos)
  + Mic-drop (até 6 pontos)
  - (Warnings × 5 pontos)
  - (Dealbreakers × 40 pontos)
```

**Score Máximo**: 100 pontos

---

### **Dealbreakers (Bloqueadores Críticos)**

| Dealbreaker | Penalidade | Descrição |
|-------------|-----------|-----------|
| **Ausência de Customer Obsession** | -40 pts | Nenhum sinal de foco no cliente |
| **Menos de 8 métricas** | -40 pts | Insuficiência de evidências quantitativas |
| **Ratio EU:NÓS < 2:1** | -40 pts | Protagonismo individual insuficiente |
| **Case muito antigo (>9 anos)** | -40 pts | Relevância questionável |
| **Lint blocker** | Score 0 | Estrutura inválida |

**Efeito**: Qualquer dealbreaker → Status **KO**

---

### **Warnings (Pontos de Atenção)**

| Warning | Penalidade | Descrição |
|---------|-----------|-----------|
| **Transições STAR(L) pouco claras** | -5 pts | Narrativa robótica, sem fluidez |
| **Sem métricas financeiras** | -5 pts | Falta impacto em ROI/receita/custo |
| **Sem métricas operacionais** | -5 pts | Falta SLA/throughput/latency |
| **Sem métricas de cliente** | -5 pts | Falta NPS/churn/satisfação |
| **Sem conflito/resistência** | -5 pts | Ausência de tensão dramática |
| **Sem mecanismos** | -5 pts | Falta processos replicáveis |
| **Hook fraco** | -5 pts | Abertura genérica |
| **Mic-drop fraco** | -5 pts | Learning genérico |
| **Paridade PT/EN desequilibrada** | -5 pts | Diferença >25% entre versões |
| **Case antigo (>7 anos)** | -5 pts | Atenção à relevância |

**Efeito**: Múltiplos warnings → Status **Needs-Polish** ou **Needs-Rewrite**

---

### **Positives (Highlights)**

- ✅ Customer Obsession forte (≥3 sinais)
- ✅ Métricas robustas (≥8)
- ✅ Ratio EU:NÓS saudável (≥3:1)
- ✅ Conflito/endurecimento presente
- ✅ Mecanismos/repeatability destacados
- ✅ Bias for Action robusto (para LP específico)

---

### **Status Atribuídos**

| Status | Condição | Score | Ação |
|--------|----------|-------|------|
| **Ready** | 0 dealbreakers, <3 warnings | 87-100 | ✅ Pronto para uso |
| **Needs-Polish** | 0 dealbreakers, 3-5 warnings | 75-86 | 🟡 Ajustes menores |
| **Needs-Rewrite** | 0 dealbreakers, >5 warnings | 60-74 | 🟠 Revisão substancial |
| **KO** | ≥1 dealbreaker | <60 | 🔴 Bloqueador crítico |
| **Lint-Blocker** | Lint issues críticos | 0 | 🚫 Estrutura inválida |

---

## 📁 SAÍDAS E RELATÓRIOS

### **1. review-status.json**

**Localização**: `case-validation/analyzer3/reports/review-status.json`

**Estrutura**:
```json
{
  "run_at": "2025-10-07T23:58:56.999Z",
  "data_dir": "src/data",
  "total_cases": 80,
  "filtered_cases": 80,
  "results": [
    {
      "lp_id": "customer_obsession",
      "case_id": "unimed-customer-experience",
      "title_pt": "...",
      "title_en": "...",
      "status": "Ready",
      "lint": { "ok": true, "issues": [], "warnings": [] },
      "heur": {
        "score": 100,
        "status": "Ready",
        "dealbreakers": [],
        "warnings": [],
        "positives": ["..."],
        "metricsCount": 55,
        "ratio": { "ratio": 1, "counts": { "eu": 6, "nos": 0 } },
        "customerSignals": 18,
        "conflictSignals": true,
        "mechanismSignals": 3
      }
    }
  ]
}
```

**Uso**: Análise programática, integração com scripts

---

### **2. review-status.csv**

**Localização**: `case-validation/analyzer3/reports/review-status.csv`

**Colunas**:
- `lp_id`, `case_id`, `title_pt`, `title_en`
- `status`, `score`
- `dealbreakers`, `warnings`, `positives`
- `metrics_count`, `eu_nos_ratio`, `recency_months`

**Uso**: Análise em Excel, filtros, gráficos

---

### **3. Previews (.preview.json)**

**Localização**: `case-validation/analyzer3/preview/<case-id>.preview.json`

**Uso**: Revisão humana antes de merge

---

## 🔧 TROUBLESHOOTING

### **Problema: "Lint-Blocker" em arquivos auxiliares**

**Sintoma**:
```
[dataStructure.js] LINT dataStructure -> Lint-Blocker (score 0)
[icebreaker.js] LINT undefined -> Lint-Blocker (score 0)
```

**Causa**: Arquivos não são cases reais (são estruturas auxiliares)

**Solução**: **NORMAL** — Esses arquivos não afetam os 68 cases reais

---

### **Problema: Cases com score baixo**

**Sintoma**: Case com score <80

**Diagnóstico**:
1. Verificar `dealbreakers` no `review-status.json`
2. Verificar `warnings`
3. Ler sugestões no `preview/*.preview.json`

**Ação**:
- Dealbreaker → Correção obrigatória
- Warning → Melhoria recomendada

---

### **Problema: Preview não reflete mudanças**

**Causa**: Previews são gerados apenas com `--refine`

**Solução**: Rodar `npm run refine:lp` novamente

---

## ✅ VALIDAÇÃO E TESTES

### **Status de Validação**

✅ **Testado em**: 07 de Outubro de 2025  
✅ **Cases processados**: 68/68 (100%)  
✅ **Relatórios gerados**: JSON + CSV ✅  
✅ **Previews gerados**: 68 arquivos ✅  
✅ **Performance**: ~2 segundos para 80 arquivos  

**Relatório Completo**: Ver `MOTOR_3.0_VALIDATION_REPORT.md`

---

### **Estatísticas da Última Execução**

| Métrica | Valor |
|---------|-------|
| **Cases Ready** | 61 (90%) |
| **Cases KO** | 3 (4%) |
| **Cases Polish** | 1 (1%) |
| **Score médio** | 94.7 |
| **Cases score 100** | 56 (82%) |

---

## 🎯 BOAS PRÁTICAS

### **✅ DO**

1. ✅ Rodar `validate:cases` antes de qualquer refinamento
2. ✅ Revisar `review-status.csv` para visão geral
3. ✅ Analisar previews antes de aplicar mudanças
4. ✅ Corrigir cases KO antes de polish
5. ✅ Usar `refine:lp` para lotes de LP

### **❌ DON'T**

1. ❌ Aplicar mudanças sem revisar previews
2. ❌ Ignorar dealbreakers
3. ❌ Confiar 100% em scoring automático (revisão humana essencial)
4. ❌ Sobrescrever cases sem backup

---

## 🚀 PRÓXIMAS EXTENSÕES

### **Planejadas**

1. 🔵 **Filtro de arquivos auxiliares**: Excluir dataStructure.js, icebreaker.js, etc.
2. 🔵 **Scoring dimensional**: Breakdown por hook/transições/métricas/conflito/learning
3. 🔵 **Sugestões específicas**: Melhorar qualidade das recomendações
4. 🔵 **Dashboard visual**: HTML com gráficos Chart.js

### **Futuro**

5. 🔵 **Writer automático**: Flag `--write` para sobrescrever cases (com validação dupla)
6. 🔵 **FUPs por LP**: Catálogos específicos para cada Leadership Principle
7. 🔵 **AI-powered suggestions**: GPT-4 para sugestões contextuais

---

**Documentação atualizada em**: 07 de Outubro de 2025  
**Versão**: 3.1.0  
**Status**: ✅ VALIDADO E OPERACIONAL

