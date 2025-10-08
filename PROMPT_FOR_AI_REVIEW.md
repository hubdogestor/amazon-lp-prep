# Prompt para Revisão de Cases - Amazon Leadership Principles

## 🎯 Contexto da Aplicação

Sou **Leonardo Menezes** e estou me preparando para uma entrevista de emprego na Amazon. Esta é uma aplicação web interativa que contém meus **68 cases profissionais reais** organizados pelos **16 Amazon Leadership Principles** (princípios de liderança da Amazon).

### O que é a aplicação:
- **Ferramenta de estudo pessoal** para preparação de entrevistas comportamentais
- **Casos estruturados no formato STAR** (Situation, Task, Action, Result, Learning)
- **Bilíngue completo** (Português e Inglês) para cada case
- **10+ perguntas de follow-up** (FUPs) para cada case
- **Mapeamento inteligente** de perguntas típicas de entrevista para os cases mais relevantes

### Estrutura dos Leadership Principles:
1. Customer Obsession (Obsessão pelo Cliente)
2. Ownership (Senso de Dono)
3. Invent and Simplify (Inventar e Simplificar)
4. Are Right, A Lot (Estar Certo, Frequentemente)
5. Learn and Be Curious (Aprender e Ser Curioso)
6. Hire and Develop the Best (Contratar e Desenvolver os Melhores)
7. Insist on the Highest Standards (Insistir nos Mais Altos Padrões)
8. Think Big (Pensar Grande)
9. Bias for Action (Viés para Ação)
10. Frugality (Frugalidade)
11. Earn Trust (Conquistar Confiança)
12. Dive Deep (Mergulhar Fundo)
13. Have Backbone; Disagree and Commit (Ter Coragem; Discordar e Comprometer-se)
14. Deliver Results (Entregar Resultados)
15. Strive to be Earth's Best Employer (Esforçar-se para Ser o Melhor Empregador da Terra)
16. Success and Scale Bring Broad Responsibility (Sucesso e Escala Trazem Ampla Responsabilidade)

### Estrutura de um Case:
Cada case está em um arquivo `.js` dentro de `src/data/[leadership_principle]/` e contém:

```javascript
{
  id: "identificador-unico",
  title: "Título do Case",
  title_pt: "Título em Português",
  title_en: "Título em Inglês",
  company: "Empresa",
  period: "Período",
  role: "Cargo",
  context: "Contexto",
  isTopCase: true/false, // Se é um dos melhores exemplos
  
  // STAR em Português
  s: "Situation - Situação...",
  t: "Task - Tarefa...",
  a: "Action - Ação...",
  r: "Result - Resultado...",
  l: "Learning - Aprendizado...",
  
  // STAR em Inglês
  s_en: "Situation in English...",
  t_en: "Task in English...",
  a_en: "Action in English...",
  r_en: "Result in English...",
  l_en: "Learning in English...",
  
  // Follow-up Questions
  fups: [
    {
      q: "Pergunta em português?",
      a: "Resposta em português...",
      q_en: "Question in English?",
      a_en: "Answer in English..."
    },
    // ... mais 9+ perguntas
  ]
}
```

---

## 📋 Meu Pedido de Revisão

Preciso que você **revise TODOS os 68 cases** da minha aplicação seguindo critérios específicos que vou fornecer em anexo.

### O que preciso:

1. **Analisar cada case** nos 16 Leadership Principles
2. **Aplicar os critérios de qualidade** que vou fornecer (anexo separado)
3. **Identificar gaps, inconsistências ou oportunidades de melhoria**
4. **Sugerir melhorias concretas** quando necessário
5. **Validar se cada case atende aos padrões da Amazon**

### Formato esperado da sua análise:

Para cada case revisado, gostaria de receber:

```markdown
## [Leadership Principle] - [Nome do Case]

**Arquivo**: src/data/[lp]/[arquivo].js
**Status**: ✅ Excelente | ⚠️ Precisa Ajustes | ❌ Requer Revisão

### Pontos Fortes:
- [O que está bom no case]

### Gaps Identificados:
- [O que está faltando ou fraco]

### Sugestões de Melhoria:
- [Recomendações específicas]

### Métricas/Evidências:
- [Validar se há métricas quantitativas suficientes]
```

---

## 📂 Estrutura dos Arquivos

Os cases estão organizados assim:

```
src/data/
├── customer_obsession/
│   ├── customer_obsession_case1.js
│   ├── customer_obsession_case2.js
│   └── customer_obsession_case3.js
├── ownership/
│   ├── ownership_case1.js
│   ├── ownership_case2.js
│   └── ... (8 cases)
├── invent_and_simplify/
│   └── ... (7 cases)
├── are_right_a_lot/
│   └── ... (4 cases)
├── learn_and_be_curious/
│   └── ... (5 cases)
├── hire_and_develop_the_best/
│   └── ... (3 cases)
├── insist_on_highest_standards/
│   └── ... (5 cases)
├── think_big/
│   └── ... (4 cases)
├── bias_for_action/
│   └── ... (6 cases)
├── frugality/
│   └── ... (3 cases)
├── earn_trust/
│   └── ... (5 cases)
├── dive_deep/
│   └── ... (4 cases)
├── disagree_and_commit/
│   └── ... (4 cases)
├── deliver_results/
│   └── ... (5 cases)
├── best_employer/
│   └── best_employer_case1.js
└── broad_responsibility/
    └── broad_responsibility_case3.js
```

**Total**: 68 cases profissionais

---

## 🎯 O que NÃO precisa revisar:

- ❌ Código React/JavaScript da aplicação (apenas os CONTEÚDOS dos cases)
- ❌ Configurações do projeto (Vite, Tailwind, etc)
- ❌ Testes unitários
- ❌ Arquivos de documentação (README, CHANGELOG, etc)

**Foco total**: Revisar o **conteúdo dos 68 cases** (STAR, FUPs, métricas, evidências)

---

## 📎 Anexo com Critérios

[ANEXAR AQUI OS CRITÉRIOS ESPECÍFICOS QUE VOCÊ QUER QUE A IA USE PARA REVISAR]

Exemplo de critérios que você pode incluir:
- Critérios de qualidade STAR
- Requisitos de métricas quantitativas
- Padrões de evidências
- Estrutura de FUPs
- Barreiras que devem estar presentes
- etc.

---

## ❓ Perguntas para me fazer

Se precisar de **qualquer clarificação** antes de começar a revisão:
1. Qual Leadership Principle priorizar?
2. Algum case específico que quer revisar primeiro?
3. Nível de detalhe esperado na análise?
4. Formato de saída preferido?

---

## 🚀 Como começar

**Opção 1 - Revisão Completa**:
"Vou começar revisando TODOS os 68 cases seguindo os critérios fornecidos. Aguarde..."

**Opção 2 - Por Leadership Principle**:
"Vou revisar por Leadership Principle. Começando por [nome do LP]..."

**Opção 3 - Amostragem**:
"Vou fazer uma análise piloto com 5 cases de diferentes LPs para você validar a abordagem primeiro."

---

## 💡 Objetivo Final

Ter todos os 68 cases **refinados e otimizados** para:
- ✅ Impressionar entrevistadores da Amazon
- ✅ Demonstrar domínio dos 16 Leadership Principles
- ✅ Ter evidências quantitativas sólidas
- ✅ Mostrar impacto real nos clientes/negócio
- ✅ Ser autêntico e específico (evitar generalizações)

---

**Pronto para começar? Aguardo seus critérios de revisão!** 🎯
