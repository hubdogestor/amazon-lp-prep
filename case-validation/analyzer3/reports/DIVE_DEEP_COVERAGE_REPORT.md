# DIVE DEEP — COVERAGE REPORT (Questão por Questão)

**Data**: 2025-10-07  
**Score Final**: 88.5  
**Status**: ✅ 10/10 Questões Mapeadas (100%)

---

## Q0: "Conte uma situação onde você precisou entender a causa raiz para resolver um problema complexo"

**Caso Selecionado**: `sicredi-churn-analysis` (TOP CASE ⭐)  
**Score**: 75 → **90** (+15 pontos)  
**Ação**: Otimização de score (caso mantido)

### Por que este caso?
✅ **Causa raiz profunda**: 47 queries SQL para identificar drivers de churn  
✅ **Análise de 2.3M registros**: Profundidade técnica extrema  
✅ **Resultado quantificado**: Churn 40% → 32.8% (-18%), R$5.4M preservado  
✅ **TOP CASE**: isTopCase: true (maior qualidade do portfolio)

### Alinhamento com Amazon LP
- Dive Deep: "Leaders operate at all levels, stay connected to the details"
- Case demonstra: SQL queries manual, análise granular, causas estruturais identificadas

**Justificativa do Score 90**: Profundidade técnica excepcional + impacto quantificado + TOP CASE

---

## Q1: "Me fale sobre quando você teve que investigar um problema complexo"

**Caso Selecionado**: `hsbc-data-validation-audit`  
**Score**: 65 → **85** (+20 pontos)  
**Ação**: Remapping (antes: sicredi-churn)

### Por que este caso?
✅ **Investigação complexa**: 51 scripts SQL customizados para cenários ignorados  
✅ **Auditoria manual**: 120 contas críticas auditadas pessoalmente  
✅ **Impacto**: US$180M protegido, 840 erros corrigidos, multas FATCA evitadas  
✅ **Conflito**: Confrontar fornecedor global (dashboards "verde demais")

### Alinhamento com Amazon LP
- Dive Deep: "Good leaders trust yet verify"
- Case demonstra: Não aceitar "verde" sem evidência, investigação independente

**Justificativa do Score 85**: Complexidade alta + auditoria profunda + impacto cliente direto

---

## Q2: "Como você garante qualidade nos detalhes?"

**Caso Selecionado**: `sicredi-pix-settlement` (Hidden Gem 💎)  
**Score**: null → **85** (+85 pontos)  
**Ação**: Preencher null (antes: sem caso mapeado)

### Por que este caso?
✅ **Instrumentação**: Timestamps em 15 sistemas, 47 queries SQL para medir fila/throughput  
✅ **Monitoramento**: 10 métricas Grafana, alertas automáticos, runbook "SLA strike"  
✅ **Atenção ao detalhe**: Descobriu 65% latência em fila única (p95=192min) invisível em dashboards  
✅ **Resultado**: SLA 4.2h → 2.2h (-47%), multas Bacen evitadas

### Alinhamento com Amazon LP
- Dive Deep: "No task is beneath them"
- Case demonstra: Instrumentação manual, métricas proprietárias, não confiar em dashboards existentes

**Justificativa do Score 85**: Qualidade técnica excepcional + mecanismos preventivos instalados

---

## Q3: "Descreva uma situação onde dados superficiais não eram suficientes"

**Caso Selecionado**: `hsbc-data-validation-audit`  
**Score**: **100** (mantido perfeito ⭐)  
**Ação**: Nenhuma (caso já perfeito)

### Por que este caso?
✅ **Dashboards enganosos**: 99.8% match, fornecedor dizia "não precisa auditar"  
✅ **Investigação profunda**: 51 queries customizadas, caracteres especiais, multi-cotitulares  
✅ **Voz do cliente**: 12 RMs contactados, 27 reclamações Ouvidoria analisadas  
✅ **Impacto**: US$180M protegido, 840 registros corrigidos, BACEN/IRS sem ressalvas

### Alinhamento com Amazon LP
- Dive Deep: "Audit skeptically when something seems too good to be true"
- Case demonstra: "Verde demais é red flag" — auditoria independente provou problemas ocultos

**Justificativa do Score 100**: Exemplo perfeito de não aceitar superficialidade + métricas quantificadas

---

## Q4: "Conte sobre o problema mais complicado que você já resolveu"

**Caso Selecionado**: `sicredi-pix-settlement` (Hidden Gem 💎)  
**Score**: 50 → **90** (+40 pontos)  
**Ação**: Remapping (antes: sicredi-churn)

### Por que este caso?
✅ **Complexidade técnica**: 15 sistemas, 7 integrações, gargalo arquitetural (65% latência em fila única)  
✅ **Pressão regulatória**: Carta Bacen, multas R$50-200k, 60 dias deadline  
✅ **Conflito organizacional**: Fraude/TI/Ops em guerra, diretor Fraude resistente  
✅ **Solução complexa**: Modelo ML (87k features, 94.7% accuracy), 3 esteiras paralelas, POC em 1 semana  
✅ **Resultado**: SLA 4.2h → 2.2h (-47%), R$5.4M preservado, NPS 32→68

### Alinhamento com Amazon LP
- Dive Deep: "They go deep on complex issues and find root causes"
- Case demonstra: Diagnóstico profundo (fila sequencial) + solução arquitetural + execução sob pressão

**Justificativa do Score 90**: Problema multi-dimensional + risco regulatório + solução técnica avançada

---

## Q5: "Me dê um exemplo de quando você usou dados em profundidade para tomar uma decisão"

**Caso Selecionado**: `sicredi-churn-analysis` (TOP CASE ⭐)  
**Score**: **85** (mantido)  
**Ação**: Nenhuma (caso já correto)

### Por que este caso?
✅ **Volume de dados**: 2.3M registros analisados  
✅ **Profundidade técnica**: 47 queries SQL customizadas  
✅ **Decisão data-driven**: Priorizar features high-risk identificadas pela análise  
✅ **Resultado**: Churn 40% → 32.8% (-18%), R$5.4M preservado

### Alinhamento com Amazon LP
- Dive Deep: "They use data to make decisions"
- Case demonstra: Análise profunda de dados → insights → decisões → impacto mensurável

**Justificativa do Score 85**: Volume + profundidade técnica + decisão quantificada

---

## Q6: "Descreva uma vez que alguém te deu uma explicação mas você não acreditou e investigou"

**Caso Selecionado**: `unimed-fraud-investigation`  
**Score**: null → **90** (+90 pontos)  
**Ação**: Preencher null (antes: sem caso mapeado)

### Por que este caso?
✅ **Explicação rejeitada**: Dashboard "verde", diretor assistencial queria "seguir com outras prioridades"  
✅ **Instinto questionado**: Analista alerta "pode ser falso positivo" — mas investigou mesmo assim  
✅ **Investigação profunda**: 186k transações, 8 visualizações exploratórias, 3 clientes contactados  
✅ **Prova de fraude**: Cluster 2-4am, mesmo IP, R$2.1M/ano em perdas, pacientes negaram atendimentos  
✅ **Resultado**: R$2.1M evitado, 112 clientes protegidos, ANS sem ressalvas

### Alinhamento com Amazon LP
- Dive Deep: "Skeptically audit when given pat answers"
- Case demonstra: Não aceitar "verde" sem investigar + confrontar diretor + provar fraude com dados

**Justificativa do Score 90**: Coragem de confrontar + investigação profunda + impacto cliente + resultado quantificado

---

## Q7: "Como você usa '5 Whys' ou análise de causa raiz no seu trabalho?"

**Caso Selecionado**: `sicredi-pix-settlement` (Hidden Gem 💎)  
**Score**: 85 → **90** (+5 pontos)  
**Ação**: Remapping (antes: sicredi-churn)

### Por que este caso?
✅ **Causa raiz profunda**: Por que SLA 4.2h? → 65% tempo em fila sequencial → motor fraude arquiteturalmente errado  
✅ **Diagnóstico sistemático**: Mapeou 15 sistemas, 7 integrações, 47 queries SQL para medir cada etapa  
✅ **Solução estrutural**: Não "mais servidores" (sugestão diretor Fraude) → redesenho arquitetural (3 esteiras)  
✅ **Resultado**: SLA 4.2h → 2.2h (-47%), p95 192min → 174min (-31%)

### Alinhamento com Amazon LP
- Dive Deep: "They identify root causes, not symptoms"
- Case demonstra: Instrumentação profunda → causa raiz (arquitetura) → solução estrutural → métricas instaladas

**Justificativa do Score 90**: Diagnóstico profundo + causa raiz arquitetural + mecanismos preventivos

---

## Q8: "Conte sobre quando métricas e anedotas diferiam"

**Caso Selecionado**: `unimed-fraud-investigation`  
**Score**: 50 → **85** (+35 pontos)  
**Ação**: Remapping (antes: hsbc-data-validation-audit)

### Por que este caso?
✅ **Conflito métrica vs anedota**: Dashboard "verde" (0.5% sinistralidade OK) vs alerta analista (intuição)  
✅ **Anedotas validadas**: 27 reclamações Ouvidoria + 3 clientes contactados (todos negaram atendimentos)  
✅ **Investigação prova anedotas**: Cluster 2-4am, mesmo IP, R$2.1M/ano fraude invisível em dashboard  
✅ **Resultado**: R$2.1M evitado, CSAT 4.7/5, NPS mantido em 78

### Alinhamento com Amazon LP
- Dive Deep: "Leaders balance metrics with anecdotes"
- Case demonstra: Dashboard verde + anedota analista → investigação profunda → anedota estava certa

**Justificativa do Score 85**: Conflito claro + validação anedotas + impacto quantificado

---

## Q9: "Conte sobre uma vez que você identificou um padrão de fraude ou risco que outros não viram"

**Caso Selecionado**: `unimed-fraud-investigation`  
**Score**: **85** (mantido)  
**Ação**: Nenhuma (caso já correto)

### Por que este caso?
✅ **Padrão oculto**: Dashboard verde, nenhum alerta automático — apenas intuição de analista  
✅ **Investigação visual**: 8 visualizações exploratórias (scatter, heatmap, grafo médico-paciente)  
✅ **Padrão descoberto**: Cluster 2-4am, mesmo IP, valores R$50-150, rede artificial  
✅ **Resultado**: R$2.1M/ano evitado, 112 clientes protegidos, features modelo instaladas

### Alinhamento com Amazon LP
- Dive Deep: "They expose patterns that automated systems miss"
- Case demonstra: Intuição humana + exploração visual → padrão invisível para modelos → mecanismo instalado

**Justificativa do Score 85**: Padrão oculto descoberto + exploração profunda + impacto quantificado

---

## 📊 RESUMO DE COBERTURA

### Distribuição de Casos
```
sicredi-churn-analysis:         Q0, Q5        (2/10 = 20%) ✅
hsbc-data-validation-audit:     Q1, Q3        (2/10 = 20%) ✅
sicredi-pix-settlement:         Q2, Q4, Q7    (3/10 = 30%) ✅
unimed-fraud-investigation:     Q6, Q8, Q9    (3/10 = 30%) ✅
```

### Distribuição de Scores
```
Excellent (≥90):    Q0, Q3, Q4, Q6, Q7       (5/10 = 50%) ⭐
Good (80-89):       Q1, Q2, Q5, Q8, Q9       (5/10 = 50%) ✅
Weak (60-79):       -                        (0/10 = 0%)  ✅
Critical (<60):     -                        (0/10 = 0%)  ✅
Unmapped (null):    -                        (0/10 = 0%)  ✅
```

### Tipos de Ação
```
Mantidos:           Q3, Q5, Q9               (3/10 = 30%)
Remapped:           Q1, Q2, Q4, Q6, Q7, Q8   (6/10 = 60%)
Score Otimizado:    Q0                       (1/10 = 10%)
```

---

## ✅ QUALIDADE DO MAPEAMENTO

### Alinhamento com Dive Deep LP
```
✅ "Leaders operate at all levels": Q0, Q2, Q4, Q7 (instrumentação, queries SQL manuais)
✅ "Stay connected to details": Q0, Q2, Q7 (timestamps, métricas Grafana, 47 queries)
✅ "Trust yet verify": Q1, Q3, Q6 (auditoria independente, confrontar fornecedor/diretor)
✅ "No task is beneath them": Q2, Q4 (instrumentação manual, 15 sistemas mapeados)
✅ "Identify root causes": Q4, Q7 (fila sequencial 65%, arquitetura vs "mais servidores")
✅ "Balance metrics and anecdotes": Q6, Q8 (dashboard verde + alerta analista)
✅ "Expose hidden patterns": Q6, Q9 (fraude invisível para modelos, exploração visual)
```

### Diversidade de Contextos
```
✅ Fintech/Payments:    Q2, Q4, Q7    (sicredi-pix-settlement)
✅ Data Analytics:      Q0, Q5        (sicredi-churn-analysis)
✅ Banking/Compliance:  Q1, Q3        (hsbc-data-validation-audit)
✅ Healthcare/Fraud:    Q6, Q8, Q9    (unimed-fraud-investigation)
```

### Tipos de Profundidade
```
✅ Investigação SQL profunda:       Q0, Q1, Q2, Q5 (47-51 queries customizadas)
✅ Auditoria manual:                Q1, Q3 (120 contas críticas)
✅ Exploração visual:               Q6, Q8, Q9 (8 visualizações, scatter/heatmap/grafo)
✅ Diagnóstico arquitetural:        Q4, Q7 (15 sistemas, gargalo fila sequencial)
✅ Conflito organizacional:         Q3, Q4, Q6 (confrontar fornecedor/diretor)
```

---

## 🎯 CONCLUSÃO

**Dive Deep está 100% coberto com diversidade excelente:**
- ✅ 4 casos diferentes (0% overuse, máximo 30%)
- ✅ 4 contextos business (fintech, analytics, banking, healthcare)
- ✅ 5 tipos de profundidade técnica
- ✅ 10/10 questões ≥80 (50% ≥90)
- ✅ Hidden gem (sicredi-pix) ativada em 3 questões

**Pronto para entrevista Amazon.** 🚀

---

**FIM DO COVERAGE REPORT**  
**Status**: ✅ 100% MAPEADO  
**Qualidade**: ⭐ EXCELENTE
