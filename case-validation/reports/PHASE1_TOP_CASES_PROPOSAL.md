# 🔴 FASE 1 – MAPEAMENTO DE 5 TOP CASES PENDENTES

## Análise Completa & Recomendações de Mapeamento

**Status Atual:**
- **2 TOP CASES** não mapeados (0Q)
- **3 TOP CASES** insuficientemente mapeados (<3Q)
- **Meta**: Elevar todos para **≥5 questões** com scores ≥85

---

## 1️⃣ **INVENT AND SIMPLIFY - unimed-ai-authorization** 🔴 TOP CASE (0Q → 5Q)

**Título:** "Inventei IA de Autorização Médica que Simplificou Processo de 5 Dias para 9 Horas (82% Automação)"

**Resumo STAR(L):**
- **S:** 1.120 solicitações/dia com 5,1 dias espera; NPS caiu 48→19; hospitais ameaçaram migrar 22k vidas; pacientes onco perdendo janela 48h
- **T:** Automatizar 80% decisões até out/23 sem aumentar risco clínico; SLA crítico para 12h
- **A:** (1) Mapa jornada 19 pontos + "tempo de angústia" como indicador; (2) Modelo IA 220k autorizações, 58 features, removeu 11 variáveis de viés; (3) Enfrentou auditoria exigindo dupla checagem→A/B provou 95,2% acerto, revisão manual adicionava 18h sem ganho; (4) Bypassou AS/400, criou API Python, LGPD compliance; (5) Painel de Confiança + 32 sessões alinhamento
- **R:** 90 dias: 82% automação; SLA 9h; tempo angústia -78%; NPS 67; queixas ANS -63%; R$2,4M economia; zero eventos clínicos; expandido para 4 linhas; 0,8% override humano
- **L:** Indicador de angústia = gatilho para priorizar tech alto impacto; mesmo em pagamentos usa lógica para merchant onboarding

### **✅ Questões que RESPONDE (Invent and Simplify):**

| # | Questão | Score | Justificativa |
|---|---------|-------|---------------|
| **Q0** | "Inovação que **simplificou processo complexo**" | **98** | ✅ PERFEITO: 5,1 dias → 9h (82%); eliminou dupla checagem 18h; processo de 19 touchpoints simplificado |
| **Q1** | "**Solução criativa** que desenvolveu" | **95** | ✅ PERFEITO: Indicador "tempo de angústia" medindo horas pedido→retorno; Painel Confiança com 3 variáveis de cada decisão; API Python para bypass AS/400 |
| **Q4** | "**Processo mais simples** com grande impacto" | **98** | ✅ PERFEITO: Automação 82% eliminou 18h de revisão manual sem ganho clínico; R$2,4M economia; NPS 19→67; tempo angústia -78% |
| **Q6** | "**Plano com obstáculos** - como pivotou?" | **92** | ✅ FORTE: Auditoria exigiu dupla checagem→A/B provou ineficácia→negociou limites dinâmicos por valor/CID; TI resistiu→criou API layer Python |
| **Q9** | "**Tech/ferramenta não-convencional** para resolver problema" | **88** | ✅ BOM: Bypassou AS/400 legado com API Python; feature store de 58 atributos com ganho informação >0,02; fairness metrics por gênero/faixa |

### **📊 RECOMENDAÇÃO:**
```javascript
"invent_simplify": {
  "0": { "case_id": "unimed-ai-authorization", "score": 98 },
  "1": { "case_id": "unimed-ai-authorization", "score": 95 },
  "4": { "case_id": "unimed-ai-authorization", "score": 98 },
  "6": { "case_id": "unimed-ai-authorization", "score": 92 },
  "9": { "case_id": "unimed-ai-authorization", "score": 88 }
}
```

---

## 2️⃣ **INSIST ON HIGHEST STANDARDS - sefaz-pmo-governance** 🔴 TOP CASE (0Q → 5Q)

**Título:** "Elevei o Padrão do PMO da SEFAZ com Foco em Valor ao Cidadão"

**Resumo STAR(L):**
- **S:** 74 projetos; 63% estouro orçamento; 5,6 meses atraso médio; nenhum acompanhava NPS ou tempo de serviço; R$38M perdas/ano
- **T:** Owner único governança; padrão excelência setor privado: outcome mensurável, 5% tolerância orçamento, transparência externa total
- **A:** (1) War-room subsecretários + R$38M perdas; subsecretário TI resistiu→apresentou backlog, obteve apoio secretário, mandato 48h; (2) 4 manuais (157 pág) + matriz "Outcome First" (nenhum projeto passa gate 0 sem meta tempo serviço/NPS/impacto); (3) Recusou 11 pedidos software sem outcome; (4) Portal PMO Transparente API aberta + 20 entidades empresariais; (5) Impact Review mensal + gerente "setor público é assim"→exigiu plano; (6) Checklist 28 itens + gate auditor independente; (7) Comitê BID/TCE bimensal -32% retrabalho
- **R:** 9 meses: variação orçamento 63%→6,8%; aderência prazos 88%; 28 projetos outcome: certidões 10d→22h; NPS 43→71; chamadas 156 -41%; Portal 9,4k acessos; ROI R$57M; matriz adotada por Planejamento
- **L:** Insistir em padrões altos no setor público = evidências objetivas, transparência radical, zero tolerância justificativas vagas; mecanismos sustentam excelência mesmo após saída

### **✅ Questões que RESPONDE (Insist on Highest Standards):**

| # | Questão | Score | Justificativa |
|---|---------|-------|---------------|
| **Q0** | "Como **garante padrões elevados** com prazo apertado?" | **98** | ✅ PERFEITO: Matriz Outcome First bloqueou 11 projetos sem meta; checklist 28 itens; gate auditor independente; variação orçamento 63%→6,8% |
| **Q1** | "Vez que **elevou barra de qualidade**" | **98** | ✅ PERFEITO: Setor público aceitava 10 dias para certidão→reduziu para 22h; 4 manuais (157 pág); Portal Transparente API aberta; R$38M perdas→R$57M ROI |
| **Q2** | "Quando **não aceitou trabalho medíocre**" | **95** | ✅ PERFEITO: Recusou 11 softwares sem outcome; confrontou gerente "setor público é assim"→exigiu plano; subsecretário TI resistiu→apresentou backlog |
| **Q6** | "Quando **implementou processo qualidade**" | **92** | ✅ FORTE: Matriz Outcome First + checklist 28 itens + gate auditor + comitê BID/TCE→retrabalho -32%; Impact Review mensal com evidências |
| **Q10** | "Como **garante defeitos não passam** e problemas ficam resolvidos?" | **88** | ✅ BOM: Gate auditor independente; Portal Transparente tempo real; Impact Review mensal com evidências (logs, NPS, audit); decreto + contrato gestão |

### **📊 RECOMENDAÇÃO:**
```javascript
"insist_on_highest_standards": {
  "0": { "case_id": "sefaz-pmo-governance", "score": 98 },
  "1": { "case_id": "sefaz-pmo-governance", "score": 98 },
  "2": { "case_id": "sefaz-pmo-governance", "score": 95 },
  "6": { "case_id": "sefaz-pmo-governance", "score": 92 },
  "10": { "case_id": "sefaz-pmo-governance", "score": 88 }
}
```

---

## 3️⃣ **ARE RIGHT, A LOT - sicredi-mobile-first-strategy** 🔴 TOP CASE (2Q → 5Q)

**Título:** "Decisão Difícil com Múltiplos Stakeholders: Equilibrei Inputs Conflitantes e Redesenhei Roadmap Mobile"

**Status Atual:**
- ✅ **Q0**: 95 (decisão difícil stakeholders)
- ✅ **Q10**: 90 (dados pagamento)
- ❌ **Faltam 3 questões**

**Resumo STAR(L):**
- **S:** 8 stakeholders conflitantes (marketing queria feed 90d; risco alertou 48% reclamações autenticação; regional pedia agro); cada defendia sua verdade
- **T:** Separar opinião de fato; roadmap preservando resultado+experiência; (1) 10d análise multi-fonte; (2) business case NPS+margem+risco; (3) plano sequenciado 6 sprints acordo formal
- **A:** (1) Coletou 18m dados NPS, funil auth, ARPU, churn; modelou custo: 0,1% erro auth = R$6,3M margem perdida; (2) Mecanismo "Data Gate" matriz benefícios vs risco; sessão decisão tempo real 8 stakeholders; (3) 3 cenários: hype (feed 90d), estabilidade (hardening), híbrido; CFO validou números, marketing reconheceu feed sem estabilidade aumentaria churn; (4) Comitê aprovou híbrido com margem+NPS>65; task force TI/risco/marketing; sensores latência tempo real; SLA 300ms login, 30min reversão; squad agro co-liderança cooperativa; ele próprio escreveu specs API dados agrícolas; negociou jurídico 15d
- **R:** 6 sprints: auth 1,8%→0,4%; NPS 54→71; R$19M perdas evitadas; módulo agro 104d, ticket +22% Centro-Oeste, ligações crédito rural -37%; feed set com estabilidade, engajamento +24% sem impacto margem; CEO: "contestou com fatos, equilibrou, entregou conforme"
- **L:** Are right a lot = ponto de vista que aguenta stress de todos os lados; dados+testagem+contingenciais alinha 8 stakeholders e entrega resultado

### **✅ Questões ADICIONAIS que RESPONDE:**

| # | Questão | Score | Justificativa |
|---|---------|-------|---------------|
| **Q1** | "Quando **mudou opinião** baseado novos dados" | **92** | ✅ FORTE: Inicialmente defendia motor; após A/B feed +18% tela mas motor -36% cancel intent→manteve dados mas defendeu híbrido |
| **Q7** | "Quando estava **errado** - como lidou?" | **88** | ✅ BOM: Reconheceu que feed sozinho não era ideal, mas puro motor também não; admitiu necessidade de balancear stakeholders; criou híbrido baseado em dados |
| **Q8** | "**Perspectivas diversas** para desafiar crenças" | **95** | ✅ PERFEITO: Buscou 8 stakeholders conflitantes (marketing, risco, canais, ops, digital, TI, jurídico, 2 regionais); mecanismo Data Gate sessão tempo real |

### **📊 RECOMENDAÇÃO (adicionar 3 questões):**
```javascript
"are_right_a_lot": {
  "0": { "case_id": "sicredi-mobile-first-strategy", "score": 95 },  // JÁ EXISTE
  "1": { "case_id": "sicredi-mobile-first-strategy", "score": 92 },  // NOVO
  "7": { "case_id": "sicredi-mobile-first-strategy", "score": 88 },  // NOVO
  "8": { "case_id": "sicredi-mobile-first-strategy", "score": 95 },  // NOVO
  "10": { "case_id": "sicredi-mobile-first-strategy", "score": 90 }  // JÁ EXISTE
}
```

---

## 4️⃣ **THINK BIG - unimed-ecosystem-transformation** 🔴 TOP CASE (2Q → 5Q)

**Título:** "Transformação da Unimed em Ecossistema de Saúde Digital"

**Status Atual:**
- ✅ **Q1**: 95 (visão ambiciosa)
- ✅ **Q8**: 90 (vender ideia ousada liderança)
- ❌ **Faltam 3 questões**

**Resumo STAR(L):**
- **S:** 2021: churn curve alarmante; clientes multicanal migravam 2,4x para healthtechs; conselho queria bundles promocionais; ele provocou: pensamento limitado perderia R$1,2B até 2025
- **T:** Owner único posicionamento; meta: 3 verticais adjacentes 18m; engajar 20% vidas em ≥2 serviços; NPS +5; provar Unimed orquestradora ecossistema completo saúde/bem-estar
- **A:** (1) Vision Doc "Unimed+" TAM R$36B 2030, ARR incremental R$420M 5 anos; (2) CFO temia margin squeeze→3 cenários payback 19m EBITDA +6pp; (3) CMO questionou foco clínico→pesquisa 4,8k famílias provou telemedicina+prevenção triplicava adesão; (4) Licenciou algoritmos 2 healthtechs, negociou data-sharing; roadmap 3 ondas: APS 360, marketplace bem-estar, Pet Saúde; (5) Squad 18 pessoas, OKRs trimestrais ("10k vidas APS com queda sinistralidade >12%"), HealthOps War Room diário DORA adaptado; ele revisava pessoalmente compliance, finanças, narrativa conselho
- **R:** 24m: 3 verticais originais + Clube Empresas Saudáveis + Telepsicologia; 420k vidas ativadas (25% base); churn 12,4%→8,3% (-33%); NPS 58→66 (+8); receita incremental anualizada R$312M (Pet R$96M, APS R$118M, Bem-estar R$56M, Telepsico R$42M); custo médio/vida -9,7%; sinistralidade APS -14pp; B2B 310 empresas 9m, ticket R$29/colaborador; visão virou eixo estratégia 2025-28; conselho criou diretoria Plataforma Digital, ele nomeado líder
- **L:** Pensar grande = transformar ameaça existencial em plataforma sustentável; ancorar ambição em métricas duras, enfrentar conflitos com dados, instalar mecanismos governança; fórmula: tese ousada + números que sustentam + mecanismos que tornam escala inevitável

### **✅ Questões ADICIONAIS que RESPONDE:**

| # | Questão | Score | Justificativa |
|---|---------|-------|---------------|
| **Q0** | "Momento onde propôs **ideia ousada** com grandes resultados" | **98** | ✅ PERFEITO: Transformar seguradora tradicional em ecossistema digital; TAM R$36B; ARR R$420M/5a; 420k vidas; churn -33%; receita R$312M |
| **Q2** | "Projeto que **mudou o jogo**" | **98** | ✅ PERFEITO: Tirou Unimed do ciclo defensivo→ecossistema completo saúde; 3 verticais (APS, bem-estar, Pet) + 2 adicionais; criou diretoria Plataforma Digital |
| **Q6** | "Algo que **parecia impossível**" | **92** | ✅ FORTE: Conselho cético→CFO temia margin squeeze→provou EBITDA +6pp; CMO questionou foco clínico→pesquisa 4,8k famílias provou triplicava adesão |

### **📊 RECOMENDAÇÃO (adicionar 3 questões):**
```javascript
"think_big": {
  "0": { "case_id": "unimed-ecosystem-transformation", "score": 98 },  // NOVO
  "1": { "case_id": "unimed-ecosystem-transformation", "score": 95 },  // JÁ EXISTE
  "2": { "case_id": "unimed-ecosystem-transformation", "score": 98 },  // NOVO
  "6": { "case_id": "unimed-ecosystem-transformation", "score": 92 },  // NOVO
  "8": { "case_id": "unimed-ecosystem-transformation", "score": 90 }   // JÁ EXISTE
}
```

---

## 5️⃣ **HAVE BACKBONE; DISAGREE AND COMMIT - bradesco-mvp-feature-prioritization** 🔴 TOP CASE (1Q → 5Q)

**Título:** "Discordei da priorização de MVP, aceitei o voto do comitê e ainda entreguei o top recurso pedido"

**Status Atual:**
- ✅ **Q5**: 90 (comprometeu decisão grupo discordando)
- ❌ **Faltam 4 questões**

**Resumo STAR(L):**
- **S:** Refresh app Next 2023; comitê queria feed social gamificado (buzz concorrentes); ele defendia motor recomendação financeira (61% cancelamentos=clientes não entendiam gasto futuro); CPO: "se não entrar fila feed, perco suporte marketing"
- **T:** Provar impacto motor, escalar decisão, se feed vencesse liderar entrega sem reclamar; metas: experimento 2 semanas, resultado comitê executivo, entregar backlog aprovado 6 sprints NPS>70
- **A:** (1) A/B 40k clientes prototipo feed vs motor; feed +18% tempo tela, motor -36% intenção cancelar; (2) Levou dados ao comitê: "recomendo motor, mas se votarem feed assumo riscos e entrego"; CMO votou feed, CFO motor, CEO voto de minerva feed gamificado 90d; (3) Respondeu: "discordei, mas comprometido com MVP aprovado"; (4) Assumiu squad, negociou marketing criativos 2 semanas, SLA 6h aprovação, escreveu regras missões, API cashback <300ms latência; (5) Criou motor lite (plano B) background, obteve aprovação CPO após provar não atrasaria go-live
- **R:** 82d entrega feed; engajamento +27%; tempo sessão 3,1→4,0min; NPS 72; intenção cancel -19%; motor básico silencioso reduziu churn alta renda +2,4pp; CEO reconheceu all-hands "discordou com dados e entregou o que comitê votou"; aprovou R$8M evoluir motor completo Q4
- **L:** Disagree and commit = abandonar plano perfeito quando maioria decide; executar com excelência decisão não escolhida abre espaço para reinserir apostas logo em seguida

### **✅ Questões ADICIONAIS que RESPONDE:**

| # | Questão | Score | Justificativa |
|---|---------|-------|---------------|
| **Q0** | "**Discordou supervisor/manager** mas comprometeu decisão final e entrega" | **98** | ✅ PERFEITO: Discordou CPO/comitê sobre motor vs feed; defendeu motor com dados A/B; após voto CEO aceitou feed e liderou entrega 82d; NPS 72 |
| **Q1** | "Vez que **discordou fortemente** de decisão" | **95** | ✅ PERFEITO: Defendeu motor ("feed bonitinho não baixa churn"); apresentou A/B 40k clientes motor -36% cancel; comitê votou feed; ele disse "discordei mas comprometido" |
| **Q6** | "**Discordou colega/PM/gestor** porque achava errado para cliente" | **92** | ✅ FORTE: CPO+CMO queriam buzz feed; ele defendeu motor pois 61% cancelamentos=clientes não entendiam gasto; provou motor reduziria cancel -36%; mesmo perdendo voto executou feed com excelência |
| **Q9** | "Como **desafia respeitosamente** mas depois se compromete totalmente?" | **98** | ✅ PERFEITO: Usou dados A/B para desafiar; disse "recomendo motor, mas se votarem feed assumo riscos"; após voto assumiu squad; entregou 82d; CEO reconheceu "discordou e entregou"; ganhou R$8M para motor depois |

### **📊 RECOMENDAÇÃO (adicionar 4 questões):**
```javascript
"disagree_and_commit": {
  "0": { "case_id": "bradesco-mvp-feature-prioritization", "score": 98 },  // NOVO
  "1": { "case_id": "bradesco-mvp-feature-prioritization", "score": 95 },  // NOVO
  "5": { "case_id": "bradesco-mvp-feature-prioritization", "score": 90 },  // JÁ EXISTE
  "6": { "case_id": "bradesco-mvp-feature-prioritization", "score": 92 },  // NOVO
  "9": { "case_id": "bradesco-mvp-feature-prioritization", "score": 98 }   // NOVO
}
```

---

## 📋 RESUMO FINAL: 5 TOP CASES FASE 1

| # | TOP CASE | LP | Antes | Depois | Novos Mappings | Scores Médios |
|---|----------|----|----|-------|----------------|---------------|
| 1 | unimed-ai-authorization | Invent & Simplify | 0Q | **5Q** | Q0,Q1,Q4,Q6,Q9 | 94/100 |
| 2 | sefaz-pmo-governance | Insist Highest Standards | 0Q | **5Q** | Q0,Q1,Q2,Q6,Q10 | 94/100 |
| 3 | sicredi-mobile-first-strategy | Are Right, A Lot | 2Q | **5Q** | Q1,Q7,Q8 | 92/100 |
| 4 | unimed-ecosystem-transformation | Think Big | 2Q | **5Q** | Q0,Q2,Q6 | 95/100 |
| 5 | bradesco-mvp-feature-prioritization | Disagree & Commit | 1Q | **5Q** | Q0,Q1,Q6,Q9 | 95/100 |

**TOTAIS:**
- **5 TOP CASES** completados
- **22 novos mapeamentos** (5+5+3+3+4)
- **Score médio**: 94/100
- **Coverage médio**: ~45%/case (5Q de ~11Q disponíveis)
- **Resultado**: **100% dos TOP CASES terão ≥5 questões** ✅

---

## 🎯 PRÓXIMO PASSO

**Implementar os 22 novos mapeamentos no `questionsToCasesMapping.js`:**

1. **Invent & Simplify**: adicionar 5 mapeamentos
2. **Insist on Highest Standards**: adicionar 5 mapeamentos
3. **Are Right, A Lot**: adicionar 3 mapeamentos
4. **Think Big**: adicionar 3 mapeamentos
5. **Disagree & Commit**: adicionar 4 mapeamentos

**Estimativa**: ~20 minutos (5 LPs × 4min/LP)
