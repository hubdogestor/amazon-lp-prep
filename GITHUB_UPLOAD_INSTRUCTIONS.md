# 📋 Instruções para Upload no GitHub

## 🚀 Como colocar este projeto no seu GitHub

### Opção 1: Criar repositório via interface web (Recomendado)

1. **Acesse o GitHub**: Vá para [github.com](https://github.com) e faça login
2. **Criar novo repositório**: 
   - Clique no botão "+" no canto superior direito
   - Selecione "New repository"
   - Nome: `amazon-lp-prep`
   - Descrição: `Aplicação web para preparação de entrevistas baseadas nos 16 Princípios de Liderança da Amazon`
   - Marque como **Public** (ou Private se preferir)
   - **NÃO** marque "Initialize this repository with a README"
   - Clique em "Create repository"

3. **Conectar repositório local**:
   ```bash
   # No terminal, dentro da pasta do projeto:
   git remote add origin https://github.com/SEU_USUARIO/amazon-lp-prep.git
   git push -u origin main
   ```

### Opção 2: Upload via interface web

1. **Criar repositório vazio** no GitHub (mesmo processo acima)
2. **Fazer upload dos arquivos**:
   - Na página do repositório vazio, clique em "uploading an existing file"
   - Arraste todos os arquivos da pasta do projeto
   - Adicione uma mensagem de commit
   - Clique em "Commit new files"

### Opção 3: Usar GitHub CLI (se disponível)

```bash
# Instalar GitHub CLI se não tiver
# https://cli.github.com/

# Criar repositório e fazer push
gh repo create amazon-lp-prep --public --source=. --remote=origin --push
```

## 📁 Arquivos do Projeto

O repositório está pronto com:
- ✅ Código fonte completo da aplicação
- ✅ Arquivo `.gitignore` configurado
- ✅ README.md com documentação
- ✅ Instruções de instalação e uso
- ✅ Commit inicial já realizado

## 🔧 Próximos Passos

Após o upload no GitHub:

1. **Testar localmente**:
   ```bash
   pnpm install  # ou npm install
   pnpm dev      # ou npm run dev
   ```

2. **Deploy gratuito** (opcional):
   - **Netlify**: Conecte seu repositório GitHub
   - **Vercel**: Importe o projeto do GitHub
   - **GitHub Pages**: Configure nas settings do repositório

3. **Personalizar**:
   - Edite os cases STARL em `/src/data/`
   - Modifique o icebreaker em `/src/data/principlesData.js`
   - Ajuste cores e estilos conforme necessário

## 🆘 Problemas Comuns

**Erro de autenticação Git**:
```bash
# Configure suas credenciais
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

**Repositório já existe**:
- Use um nome diferente ou delete o repositório existente

**Problemas de permissão**:
- Verifique se está logado na conta correta
- Use HTTPS em vez de SSH se houver problemas

## 📞 Suporte

Se precisar de ajuda:
1. Verifique a documentação do GitHub
2. Use o GitHub Desktop para interface gráfica
3. Consulte os arquivos README.md e INSTALACAO_LOCAL.md

---

**Boa sorte com seu projeto! 🚀**
