# Security Policy

## 🔒 Segurança

### Vulnerabilidades Conhecidas

#### esbuild (Moderate - Development Only)
- **Status**: Conhecida, não afeta produção
- **Versão**: <=0.24.2
- **Impacto**: Permite requests ao dev server
- **Mitigação**: 
  - Vulnerabilidade afeta APENAS ambiente de desenvolvimento
  - Em produção, a aplicação é estática (sem dev server)
  - Não executar `npm run dev` em ambientes públicos
  - Upgrade para Vite 7.x requer breaking changes (planejado para v3.0)

### Práticas de Segurança Implementadas

✅ **Build de Produção**
- Todos os `console.log` são removidos em produção
- Minificação com Terser
- Code splitting para reduzir superfície de ataque
- Headers de segurança configurados

✅ **Dependências**
- Todas as dependências de produção estão atualizadas
- Sem vulnerabilidades em runtime
- Auditoria regular com `npm audit`

✅ **Código**
- Validação de dados de entrada
- Sanitização de conteúdo renderizado
- Uso de React (proteção contra XSS por padrão)
- Sem uso de `dangerouslySetInnerHTML`

### Reportar Vulnerabilidades

Se você encontrar uma vulnerabilidade de segurança, por favor:
1. NÃO abra uma issue pública
2. Envie um email para o mantenedor
3. Inclua descrição detalhada e passos para reproduzir

### Atualizações de Segurança

Verificamos vulnerabilidades:
- Semanalmente via `npm audit`
- A cada nova release
- Quando notificados por GitHub Security Advisories

## Última Auditoria
- **Data**: 2025-10-04
- **Status**: ✅ Sem vulnerabilidades críticas em produção
- **Ação**: Vulnerabilidade de dev documentada e monitorada
