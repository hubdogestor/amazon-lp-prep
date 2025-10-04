# Amazon Cases Analyzer 🎯

Uma aplicação inteligente para curadoria e otimização de cases STAR(L) para entrevistas da Amazon. Analisa, aprimora e gera follow-up questions personalizadas baseadas nos 16 Leadership Principles da Amazon.

## 🚀 Demo Online

**Acesse a aplicação:** [https://hubdogestor.github.io/case-validation/](https://hubdogestor.github.io/case-validation/)

*🔄 Deploy automático via GitHub Actions - Aguarde alguns minutos após o commit para a aplicação ficar disponível online*

## ✨ Funcionalidades

- **📤 Upload de Arquivos**: Carregue seus cases em formato .js
- **🧠 Análise STAR(L)**: Avaliação automática da estrutura Situation, Task, Action, Result, Learning
- **🎯 Alinhamento com LP**: Verifica compatibilidade com Leadership Principles da Amazon
- **📊 Scoring Inteligente**: Sistema de pontuação baseado em critérios específicos
- **✍️ Storytelling Otimizado**: Sugestões para melhorar a narrativa dos cases
- **❓ Follow-up Questions**: Gera 10 perguntas de acompanhamento personalizadas
- **💾 Download Processado**: Baixe o arquivo com todas as melhorias aplicadas
- **🔄 Sistema de Feedback**: Refinamento adicional baseado em feedback específico

## 🛠️ Tecnologias Utilizadas

- **React 18** + **Vite** - Interface moderna e performática
- **Tailwind CSS** - Estilização responsiva
- **Lucide React** - Ícones elegantes
- **shadcn/ui** - Componentes de interface
- **JavaScript ES6+** - Lógica de análise avançada

## 📋 Como Usar

### 1. Prepare seu arquivo de cases

Crie um arquivo `.js` com a estrutura:

```javascript
const leadershipPrinciple = {
  principle: {
    title: "Nome do Princípio",
    title_en: "Principle Name",
    description: "Descrição...",
    icon: "🎯"
  },
  cases: [
    {
      id: "case-1",
      title: "Título do Case",
      company: "Nome da Empresa",
      period: "2022-2023",
      pt: {
        s: "Situação...",
        t: "Tarefa...",
        a: "Ação...",
        r: "Resultado...",
        l: "Aprendizado..."
      },
      en: { /* versões em inglês */ }
    }
  ]
};

export default leadershipPrinciple;
```

### 2. Faça o upload

- Acesse a aplicação
- Clique na área de upload ou arraste o arquivo
- Aguarde a validação

### 3. Processe e analise

- Clique em "Analisar Cases"
- Acompanhe o progresso da análise
- Visualize os resultados e melhorias

### 4. Download e refinamento

- Baixe o arquivo processado
- Opcional: forneça feedback para refinamento adicional
- Repita o processo quantas vezes necessário

## 🧪 Arquivo de Exemplo

Um arquivo de exemplo está disponível no repositório: `example-case.js`

## 🔧 Desenvolvimento Local

```bash
# Clone o repositório
git clone https://github.com/hubdogestor/case-validation.git

# Instale as dependências
cd case-validation
npm install

# Execute em modo de desenvolvimento
npm run dev

# Acesse: http://localhost:5173/case-validation/
```

## 📦 Build e Deploy

```bash
# Build para produção
npm run build

# Deploy para GitHub Pages
npm run deploy
```

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎯 Amazon Leadership Principles Suportados

- **Are Right, A Lot** - Estar Certo, e muito
- **Customer Obsession** - Obsessão pelo Cliente  
- **Ownership** - Senso de Dono
- **Invent and Simplify** - Inventar e Simplificar
- **Learn and Be Curious** - Aprender e Ser Curioso

*Mais princípios serão adicionados nas próximas versões.*

## 📞 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/hubdogestor/case-validation/issues) no GitHub.

---

**Desenvolvido com ❤️ para ajudar profissionais a se prepararem melhor para entrevistas na Amazon**