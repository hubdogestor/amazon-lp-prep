# LP Harmony AI by Claude

**Sistema de Análise Semântica AI-Powered para Mapeamento de Leadership Principles**

---

## 📂 Estrutura de Pastas

### 1 - Code and Scripts
Contém os scripts principais utilizáveis para futuros processamentos:
- **lp-harmony-ai.mjs** - Script principal de análise semântica com Claude AI
- **generate-coverage-report.mjs** - Gerador de relatórios de cobertura

### 2 - Analysis and Results
Arquivos de apoio, análises e cache do processamento:
- **.lp-harmony-cache.json** - Cache com 737 análises semânticas (não reprocessar)
- **.prompt-*.txt** - Prompts gerados para análise de cada LP
- **semantic_analysis_*.json** - Resultados de análises semânticas
- **LP-HARMONY-AI-INSTRUCTIONS.md** - Instruções de uso do sistema
- **unmapped-questions-report.txt** - Relatório de perguntas não mapeadas

### 3 - Final Reports
Relatórios executivos gerados:
- **COVERAGE_REPORT_QUESTIONS.txt** - 179 perguntas com cases vinculados
- **COVERAGE_REPORT_UNMAPPED_CASES.txt** - 5 cases não utilizados
- **RELATORIO_FINAL_BATCHES_1-5.md** - Sumário executivo completo

---

## 🎯 Resultados Alcançados

- ✅ **100% de cobertura** nas 179 perguntas
- ✅ **14 Leadership Principles** mapeados
- ✅ **737 mapeamentos** Question × Case
- ✅ **4.1 cases por pergunta** (média)

---

## 🚀 Como Reutilizar

### Para processar novos LPs:

```bash
# Copiar scripts de volta para /scripts
cp "LP Harmony AI by Claude/1 - code and scripts/"* scripts/

# Executar análise
node scripts/lp-harmony-ai.mjs analyze <principle_id>

# Gerar relatórios
node scripts/generate-coverage-report.mjs
```

### Para consultar análises anteriores:

- Verificar cache: `.lp-harmony-cache.json`
- Consultar prompts: `.prompt-*.txt`
- Ver análises: `semantic_analysis_*.json`

---

**Data de Criação:** 19 de Outubro de 2025
**Versão:** v4.0-pre-looping
