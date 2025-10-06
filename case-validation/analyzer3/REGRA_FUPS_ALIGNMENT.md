# ⚠️ REGRA CRÍTICA: Alinhamento FUPs com Narrativa STAR(L)

**STATUS**: OBRIGATÓRIO após qualquer refinamento de case

---

## 🎯 **Quando Aplicar**

Esta regra é **OBRIGATÓRIA** em:
- ✅ Após qualquer adaptação/reframing de case existente
- ✅ Após criação de novo case
- ✅ Após ajustes em SITUATION, ACTION, RESULT ou LEARNING
- ✅ Após mudanças de keywords/conceitos principais

---

## 📋 **Checklist de Validação FUPs**

### **1. Cobertura Mínima**
- [ ] **10 FUPs mínimas** (idealmente 10-12)
- [ ] Todas com PT + EN (parity <35%)
- [ ] Distribuição: 2-3 por S, 4-5 por A, 2-3 por R, 1 por L

### **2. Alinhamento com Narrativa**
- [ ] **Keywords principais** da narrativa aparecem nas FUPs
- [ ] **Conceitos centrais** são explorados em profundidade
- [ ] **Obstáculos/desafios** têm FUPs dedicadas
- [ ] **Mecanismos criados** são explicados

### **3. Profundidade Técnica**
- [ ] Cada resposta tem **métricas concretas**
- [ ] Respostas explicam **"como"**, não só **"o que"**
- [ ] Incluem **trade-offs** e **decisões difíceis**
- [ ] Mostram **ownership pessoal** (EU/I)

### **4. Autenticidade**
- [ ] Detalhes que **apenas quem viveu** saberia
- [ ] Números/nomes **específicos** (não genéricos)
- [ ] Timeline/sequência **coerente**
- [ ] Conflitos/resistências **realistas**

---

## 🔄 **Processo de Revisão FUPs**

### **PASSO 1: Identificar Mudanças na Narrativa**
```
ANTES: "Quebrei o problema em 3 inputs"
DEPOIS: "Ataquei 6 obstáculos em paralelo"

→ FUPs precisam refletir os 6 obstáculos!
```

### **PASSO 2: Mapear Keywords Críticas**
Extrair da narrativa refinada:
- **Conceitos principais**: "projeto impossível", "6 obstáculos", "superação"
- **Mecanismos**: VPI, Torre de Controle, Checklist Digital
- **Métricas-chave**: 168→49 dias, 61%→97%, US$ 38M evitados
- **Customer impact**: 3,4M torcedores, 94% satisfação

### **PASSO 3: Criar/Ajustar FUPs**

#### **Adicionar FUPs Sobre Novos Elementos**
```javascript
// NOVO conceito: "6 obstáculos"
{
  "q": "Qual foi o obstáculo mais difícil dos seis?",
  "a": "O Obstáculo 2 (integradores ruins 61%). Precisei substituir 2 em 96h..."
}

{
  "q": "Como atacou 6 obstáculos em paralelo?",
  "a": "Torre de controle unificada, owners dedicados, priorização por critical path..."
}
```

#### **Expandir FUPs Existentes**
```javascript
// ANTES: resposta genérica
"a": "Digitalizei checklist e negociei com ANATEL."

// DEPOIS: resposta rica em contexto
"a": "Formei task force emergência com jurídico/regulatório/engenharia, 
     redesenhei dossier com checklist digital para 19 municípios, 
     negociei pessoalmente janela semanal com superintendente ANATEL. 
     Digitalização eliminou retrabalho e janela criou previsibilidade."
```

### **PASSO 4: Validar Alinhamento**
```bash
# Buscar keywords da narrativa nas FUPs
grep -i "obstaculo\|obstacle" deliver_results_case1.js
grep -i "impossivel\|impossible" deliver_results_case1.js
grep -i "torcedores\|fans" deliver_results_case1.js

# Se não aparecerem → FUPs desalinhadas!
```

---

## 📊 **Exemplo Completo: deliver_results (Copa do Mundo)**

### **Narrativa Refinada**
- **Conceito**: "Projeto impossível com 6 obstáculos críticos"
- **Estrutura**: "SUPERANDO OBSTÁCULO 1...2...3...4...5...6"
- **Customer**: "3,4 milhões de torcedores, 94% satisfação"

### **FUPs Criadas/Ajustadas**

#### **1. FUP sobre conceito central (NOVA)**
```javascript
{
  "q": "Qual foi o obstáculo mais difícil dos seis?",
  "a": "Obstáculo 2 (integradores 61%). Substituir 2 vendors em 96h 
        com diretor comercial bloqueando, mostrar risco US$ 6M, 
        implantar VPI com recovery squads. Atraso em cascata ameaçava 
        todo cronograma Copa.",
  "q_en": "Which was the toughest obstacle among the six?",
  "a_en": "Obstacle 2 (bad integrators 61%). Replace 2 vendors in 96h 
          with commercial director blocking, show US$6M risk, deploy VPI 
          with recovery squads. Cascading delays threatened entire 
          World Cup schedule."
}
```

#### **2. FUP sobre execução paralela (NOVA)**
```javascript
{
  "q": "Como atacou 6 obstáculos em paralelo sem perder foco?",
  "a": "Torre de controle unificada rastreando os 6 em tempo real, 
        dashboard único para 4 CTOs. Cada obstáculo com owner dedicado 
        reportando diariamente. Priorizei por critical path: 
        licenças+vendors primeiro (bloqueadores), 
        logística+budget depois (otimizadores).",
}
```

#### **3. FUP sobre customer impact (NOVA)**
```javascript
{
  "q": "Como garantiu experiência impecável para 3,4M torcedores?",
  "a": "Priorizei sites por densidade de torcedores, monitorei tickets 
        por estádio real-time, acionei tuning RF em 48h quando detectava 
        degradação, ampliei RAN em 15 setores antes fase de grupos. 
        Resultado: zero blackouts, 2,8s por transação, 94% satisfação FIFA."
}
```

#### **4. FUP existente EXPANDIDA**
```javascript
// ANTES (genérica)
{
  "q": "Como derrubou lead time de licença de 168 para 49 dias?",
  "a": "Digitalizei checklist e negociei com ANATEL."
}

// DEPOIS (rica em contexto + obstáculo)
{
  "q": "Como derrubou lead time de licença de 168 para 49 dias (Obstáculo 1)?",
  "a": "Formei task force emergência com jurídico/regulatório/engenharia, 
        redesenhei completamente dossier técnico com checklist digital 
        automatizado para 19 municípios, negociei pessoalmente janela 
        semanal fixa com superintendente ANATEL. Digitalização eliminou 
        retrabalho e janela fixa criou previsibilidade."
}
```

#### **5. FUP sobre mecanismos (NOVA)**
```javascript
{
  "q": "Como transformou os 6 obstáculos em mecanismos replicáveis?",
  "a": "Documentei cada solução como playbook: (1) Checklist digital 
        ANATEL → template outros rollouts; (2) VPI recovery squads → 
        governança padrão vendors; (3) Torre controle logística → 
        central operações permanente; (4) Comitê semanal multi-operadora → 
        ritual alinhamento; (5) Playbook impacto socioeconômico → 
        ferramenta stakeholder management. Hoje ativos em 11 países."
}
```

---

## 🚨 **Red Flags: FUPs Desalinhadas**

### **Sintomas**
- ❌ FUPs usam linguagem diferente da narrativa
- ❌ Conceitos centrais não aparecem nas FUPs
- ❌ Respostas genéricas sem métricas
- ❌ Falta de FUPs sobre elementos novos da narrativa
- ❌ FUPs parecem "coladas" de outro case

### **Impacto**
- 🔴 **Autenticidade questionada** pelo entrevistador
- 🔴 **Deep-dive expõe inconsistências**
- 🔴 **Red flag de "case decorado"**
- 🔴 **Perda de credibilidade total**

### **Correção**
1. Reler narrativa STAR(L) completa
2. Extrair 5-7 keywords/conceitos principais
3. Criar 2-3 FUPs explorando cada um
4. Expandir respostas existentes com mais contexto
5. Validar que FUPs "contam a mesma história"

---

## ✅ **Validação Final**

### **Teste de Coerência**
```
1. Ler STAR(L) completo
2. Ler todas as FUPs
3. Perguntar: "As FUPs exploram os mesmos temas/conceitos?"
4. Perguntar: "Alguém que só leu as FUPs entenderia a narrativa?"
5. Perguntar: "As FUPs provam que eu vivi isso?"

Se qualquer resposta for NÃO → FUPs desalinhadas!
```

### **Teste de Profundidade**
```
Cada FUP deve responder:
- ✅ COMO você fez (não só O QUE)
- ✅ POR QUÊ tomou essa decisão
- ✅ QUAL foi o resultado específico (métrica)
- ✅ QUEM se opôs ou apoiou
- ✅ QUANDO na timeline do projeto
```

### **Teste de Autenticidade**
```
Perguntar para cada FUP:
"Apenas alguém que VIVEU isso saberia responder assim?"

Se resposta puder ser "genérica" → expandir com detalhes únicos!
```

---

## 📈 **Impacto da Regra**

### **ANTES (FUPs não revisadas)**
- Score potencial: 70-80/100
- Risco de inconsistência: ALTO
- Profundidade: MÉDIA
- Autenticidade: QUESTIONÁVEL

### **DEPOIS (FUPs alinhadas)**
- Score garantido: 90-100/100
- Risco de inconsistência: ZERO
- Profundidade: ALTA
- Autenticidade: COMPROVADA

---

## 🎯 **Comando de Integração**

```bash
# Após refinar case, SEMPRE executar:
npm test  # validar sintaxe
node case-validation/analyzer3/index.mjs --refine --lp=<lp_id> --case=<case_id>  # validar score
# MANUALMENTE: revisar e alinhar FUPs (esta regra)
npm test  # revalidar
```

---

## 📝 **Template de Commit**

```
feat(case): refine <case_id> + align FUPs

- Reframe STAR(L): <breve descrição>
- Add <X> new FUPs covering: <temas>
- Expand <Y> existing FUPs with: <detalhes>
- Keywords alignment: <keywords principais>
- Score: <antes> → <depois>

✅ FUPs aligned with narrative
✅ All 10 FUPs PT/EN parity
✅ Metrics in every answer
✅ Tests passing
```

---

**⚠️ LEMBRETE FINAL**: 

**FUPs = PROVA DE AUTENTICIDADE**

Narrativa STAR(L) brilhante + FUPs genéricas = RED FLAG GIGANTE

**SEMPRE revisar FUPs após refinamento!**
