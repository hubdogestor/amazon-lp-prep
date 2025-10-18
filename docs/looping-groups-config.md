# Configuração dos Grupos de Looping

Este documento explica como atualizar a configuração dos grupos de looping (L1, L2, L3, L4, L5) que filtram a busca de perguntas típicas.

## Arquivo de Configuração

O arquivo de configuração está localizado em:
```
src/config/loopingGroups.js
```

## Como Atualizar os Grupos

Para modificar quais Leadership Principles fazem parte de cada looping:

1. Abra o arquivo `src/config/loopingGroups.js`
2. Localize o grupo que deseja atualizar (L1, L2, L3, L4, L5)
3. Modifique o array `principles` com os IDs desejados

### Exemplo:

```javascript
{
  id: 'L1',
  label: 'L1',
  principles: [
    'customer_obsession',
    'program_management',
    'ownership'
  ]
}
```

## IDs dos Leadership Principles Disponíveis

- `customer_obsession` - Customer Obsession
- `program_management` - Program Management
- `ownership` - Ownership
- `dive_deep` - Dive Deep
- `invent_and_simplify` - Invent and Simplify
- `earn_trust` - Earn Trust
- `deliver_results` - Deliver Results
- `stakeholder_management` - Stakeholder Management
- `learn_and_be_curious` - Learn and Be Curious
- `bias_for_action` - Bias for Action
- `prioritizing_and_influence` - Prioritizing & Influence Decisions
- `deal_with_ambiguity` - Deal with Ambiguity
- `have_backbone` - Have Backbone; Disagree and Commit
- `insist_on_the_highest_standards` - Insist on the Highest Standards

## Como Funciona

### Interface do Usuário

Na caixa de busca de "Perguntas Típicas", há um seletor dropdown ao lado esquerdo com as seguintes opções:
- **Todos/All** - Busca em todos os Leadership Principles (padrão)
- **L1** - Busca apenas nos LPs do grupo L1
- **L2** - Busca apenas nos LPs do grupo L2
- **L3** - Busca apenas nos LPs do grupo L3
- **L4** - Busca apenas nos LPs do grupo L4
- **L5** - Busca apenas nos LPs do grupo L5

### Comportamento

Quando um looping é selecionado:
1. A busca de perguntas típicas filtra apenas os Leadership Principles daquele grupo
2. Os resultados mostram apenas perguntas dos LPs incluídos no looping selecionado
3. Selecionando "Todos/All", a busca volta a incluir todos os LPs

## Configuração Atual

### L1 - Customer Obsession, Program Management, Ownership
```javascript
principles: ['customer_obsession', 'program_management', 'ownership']
```

### L2 - Dive Deep, Invent and Simplify
```javascript
principles: ['dive_deep', 'invent_and_simplify']
```

### L3 - Earn Trust, Deliver Results, Stakeholder Management
```javascript
principles: ['earn_trust', 'deliver_results', 'stakeholder_management']
```

### L4 - Learn and Be Curious, Bias for Action, Prioritizing & Influence Decisions
```javascript
principles: ['learn_and_be_curious', 'bias_for_action', 'prioritizing_and_influence']
```

### L5 - Deal with Ambiguity, Have Backbone; Disagree and Commit, Insist on the Highest Standards
```javascript
principles: ['deal_with_ambiguity', 'have_backbone', 'insist_on_the_highest_standards']
```

## Observações Importantes

- **Não é necessário reiniciar o servidor de desenvolvimento** após alterar o arquivo de configuração (Hot Module Replacement)
- **Para produção**, execute `npm run build` após fazer alterações
- Os IDs dos princípios devem corresponder exatamente aos IDs usados no sistema
- Você pode adicionar ou remover princípios de qualquer grupo conforme necessário
- Não há limite para quantos princípios podem estar em um grupo
