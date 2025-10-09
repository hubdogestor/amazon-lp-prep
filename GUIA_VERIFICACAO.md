# 🔍 Guia de Verificação - Perguntas Adicionais

## Como Verificar as Alterações no Sistema

### 1️⃣ Verificação Rápida nos Arquivos

#### Verificar `typicalQuestions.js`
```bash
# Contar total de perguntas por LP
grep -c "\"" src/data/typicalQuestions.js
```

**Números Esperados:**
- Customer Obsession: 14 perguntas (era 12)
- Ownership: 13 perguntas (era 10)
- Invent and Simplify: 12 perguntas (era 10)
- Are Right A Lot: 13 perguntas (era 11)
- Learn and Be Curious: 14 perguntas (era 12)
- Hire and Develop: 13 perguntas (era 11)
- Highest Standards: 13 perguntas (era 11)
- Think Big: 15 perguntas (era 12)
- Bias for Action: 12 perguntas (era 10)
- Frugality: 13 perguntas (era 11)
- Earn Trust: 16 perguntas (era 13)
- Dive Deep: 12 perguntas (era 10)
- Disagree and Commit: 12 perguntas (era 10)
- Deliver Results: 12 perguntas (era 10)

---

### 2️⃣ Verificação Visual no Código

#### Customer Obsession - Últimas perguntas
```javascript
// typicalQuestions.js - linhas finais da seção customer_obsession
"Como você reduziu chargebacks/disputas mantendo satisfação do cliente?",
"Como você equilibra necessidades de diferentes segmentos de clientes?",        // ✅ NOVA
"Conte sobre quando você teve que educar um cliente sobre algo que ele não sabia que precisava"  // ✅ NOVA
```

#### Ownership - Últimas perguntas
```javascript
// typicalQuestions.js - linhas finais da seção ownership
"Descreva quando você criou um mecanismo para prevenir problemas recorrentes em pagamentos",
"Como você lida com situações onde múltiplas pessoas poderiam assumir ownership?",        // ✅ NOVA
"Conte sobre quando você teve que assumir ownership de um problema criado por outro time",  // ✅ NOVA
"Como você gerencia dependências entre múltiplos times?"                                   // ✅ NOVA
```

---

### 3️⃣ Verificação dos Mapeamentos

#### Customer Obsession - Novos mapeamentos
```javascript
// questionsToCasesMapping.js - customer_obsession
"12": {
  "case_id": "unimed-customer-experience",
  "score": 88
},
"13": {
  "case_id": "unimed-pet-anticipation",
  "score": 95
}
```

#### Ownership - Novos mapeamentos
```javascript
// questionsToCasesMapping.js - ownership
"10": {
  "case_id": "hsbc-migration-leadership",
  "score": 92
},
"11": {
  "case_id": "bradesco-international-payments",
  "score": 95
},
"12": {
  "case_id": "hsbc-migration-leadership",
  "score": 95
}
```

---

### 4️⃣ Teste na Aplicação (Quando Rodar)

#### Passo 1: Iniciar Dev Server
```bash
npm run dev
```

#### Passo 2: Verificar no Browser
1. Abra `http://localhost:5173`
2. Vá para qualquer LP (ex: Customer Obsession)
3. Procure pela dropdown de perguntas
4. Verifique se as novas perguntas aparecem no final da lista

#### Exemplo - Customer Obsession:
- Pergunta #12: "Como você equilibra necessidades de diferentes segmentos de clientes?"
- Pergunta #13: "Conte sobre quando você teve que educar um cliente..."

#### Passo 3: Verificar Mapeamento
1. Selecione a pergunta #13 (educar cliente)
2. Verifique se o case sugerido é: **"Pet Unimed - Antecipação de necessidades"**
3. Score deve ser: **95**

---

### 5️⃣ Checklist de Verificação Manual

#### Arquivos Modificados
- [ ] `src/data/typicalQuestions.js` - Abrir e verificar últimas perguntas de cada LP
- [ ] `src/data/questionsToCasesMapping.js` - Verificar últimos índices de cada LP

#### Para cada LP, verificar:
- [ ] Customer Obsession: Perguntas 12 e 13 existem
- [ ] Ownership: Perguntas 10, 11 e 12 existem
- [ ] Invent and Simplify: Perguntas 10 e 11 existem
- [ ] Are Right A Lot: Perguntas 11 e 12 existem
- [ ] Learn and Be Curious: Perguntas 12 e 13 existem
- [ ] Hire and Develop: Perguntas 10 e 11 existem
- [ ] Highest Standards: Perguntas 11 e 12 existem
- [ ] Think Big: Perguntas 12, 13 e 14 existem
- [ ] Bias for Action: Perguntas 10 e 11 existem
- [ ] Frugality: Perguntas 11 e 12 existem
- [ ] Earn Trust: Perguntas 13, 14 e 15 existem
- [ ] Dive Deep: Perguntas 10 e 11 existem
- [ ] Disagree and Commit: Perguntas 10 e 11 existem
- [ ] Deliver Results: Perguntas 10 e 11 existem

---

### 6️⃣ Teste de Build

```bash
# Build de produção
npm run build

# Resultado esperado:
# ✅ built in ~3-5s
# ✅ No errors
# ⚠️  Pode ter warning sobre chunk size (normal)
```

---

### 7️⃣ Comandos Úteis para Verificação

#### Buscar uma pergunta específica
```bash
# PowerShell
Select-String -Path "src/data/typicalQuestions.js" -Pattern "equilibra necessidades de diferentes segmentos"
```

#### Verificar mapeamentos de um LP específico
```bash
# PowerShell
Select-String -Path "src/data/questionsToCasesMapping.js" -Pattern "customer_obsession" -Context 5,50
```

#### Contar total de mapeamentos
```bash
# PowerShell
(Select-String -Path "src/data/questionsToCasesMapping.js" -Pattern '"case_id":').Count
```

---

### 8️⃣ Verificação de Integridade

#### Verificar que não há erros de sintaxe
```javascript
// Abrir DevTools no browser (F12)
// Console não deve ter erros vermelhos
// Warnings amarelos são aceitáveis
```

#### Verificar importação dos arquivos
```bash
# Verificar se os arquivos são importados corretamente
grep -r "typicalQuestions" src/
grep -r "questionsToCasesMapping" src/
```

---

### 9️⃣ Exemplos Específicos para Testar

#### Teste 1: Earn Trust - Pergunta #15
- **Pergunta**: "Como você comunica status para executivos sêniores?"
- **Case Esperado**: `hsbc-bacen-communication`
- **Score Esperado**: 92

#### Teste 2: Frugality - Pergunta #12
- **Pergunta**: "Conte sobre quando você encontrou uma solução de R$ 10..."
- **Case Esperado**: `unimed-automation-n8n`
- **Score Esperado**: 98

#### Teste 3: Think Big - Pergunta #14
- **Pergunta**: "Conte sobre quando você teve que coordenar lançamento global"
- **Case Esperado**: `huawei-global-rollout`
- **Score Esperado**: 95

---

### 🔟 Troubleshooting

#### Se as perguntas não aparecerem:
1. Limpar cache do browser (Ctrl+Shift+Delete)
2. Hard reload (Ctrl+Shift+R)
3. Verificar console por erros
4. Rebuild: `npm run build`

#### Se os mapeamentos não funcionarem:
1. Verificar se o case_id existe nos arquivos de cases
2. Verificar sintaxe JSON no mapeamento
3. Verificar se o índice está correto (sequencial)

#### Se houver erros de build:
1. Verificar vírgulas e chaves no JSON
2. Verificar aspas (devem ser duplas)
3. Executar: `npm run lint` (se disponível)

---

## ✅ Confirmação Final

Após executar estas verificações:

- [ ] Build passou sem erros
- [ ] Todas as 36 perguntas estão visíveis nos arquivos
- [ ] Todos os 36 mapeamentos estão presentes
- [ ] Sintaxe está correta
- [ ] Aplicação está funcionando (se testou localmente)

**Status**: ✅ PRONTO PARA USO

---

## 📞 Em Caso de Problemas

Se algo não funcionar conforme esperado:

1. Verifique o arquivo `VALIDACAO_FINAL.md` para comparar
2. Consulte `INTEGRACAO_PERGUNTAS_ADICIONAIS.md` para detalhes
3. Revise `INTEGRACAO_RESUMO.md` para visão geral
4. Verifique os logs de build para erros específicos

---

**Última atualização**: 09/10/2025  
**Versão**: 3.1.0  
**Status da Integração**: ✅ COMPLETA
