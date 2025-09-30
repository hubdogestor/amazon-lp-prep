// SCRIPT PARA ADICIONAR IDs EM TODOS OS CASOS
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para gerar ID único
function generateCaseId(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplos
    .replace(/^-|-$/g, '') // Remove hífens no início/fim
    .substring(0, 50); // Limita tamanho
}

// Função para processar um arquivo
function processFile(filePath) {
  console.log(`\n🔧 Processando: ${path.basename(filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let caseCount = 0;

  // Regex para encontrar casos
  const casesRegex = /cases:\s*\[([\s\S]*?)\]/;
  const match = content.match(casesRegex);
  
  if (!match) {
    console.log('❌ Nenhum caso encontrado');
    return;
  }

  const casesContent = match[1];
  
  // Processa cada caso individualmente
  const caseObjectRegex = /{\s*([\s\S]*?)}/g;
  
  let newCasesContent = casesContent;
  let caseMatch;
  
  while ((caseMatch = caseObjectRegex.exec(casesContent)) !== null) {
    const [fullMatch, caseBody] = caseMatch;
    
    // Verifica se tem título
    const titleMatch = caseBody.match(/"title":\s*"([^"]*)"/);
    if (!titleMatch) continue;
    
    const title = titleMatch[1];
    caseCount++;
    
    console.log(`  📝 Caso: "${title}"`);
    
    // Gera ID baseado no título
    const baseTitle = title.replace(/ - [^(]*\([^)]*\)$/, ''); // Remove empresa e período
    const newId = generateCaseId(baseTitle);
    
    let updatedCase = fullMatch;
    
    // Adiciona ID se não existir
    if (!updatedCase.includes('"id":')) {
      // Adiciona ID logo após a abertura da chave
      updatedCase = updatedCase.replace(/{\s*/, `{\n      "id": "${newId}",\n      `);
      console.log(`    🆕 ID adicionado: "${newId}"`);
      modified = true;
    } else {
      // Se já tem ID, verifica se precisa atualizar
      const currentIdMatch = updatedCase.match(/"id":\s*"([^"]*)"/);
      if (currentIdMatch && currentIdMatch[1] !== newId) {
        updatedCase = updatedCase.replace(/"id":\s*"[^"]*"/, `"id": "${newId}"`);
        console.log(`    🔄 ID atualizado: "${currentIdMatch[1]}" → "${newId}"`);
        modified = true;
      } else {
        console.log(`    ✅ ID já existe: "${newId}"`);
      }
    }
    
    // Substitui o caso no conteúdo
    newCasesContent = newCasesContent.replace(fullMatch, updatedCase);
  }
  
  if (modified) {
    // Substitui o conteúdo completo dos cases
    content = content.replace(casesContent, newCasesContent);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Arquivo atualizado com ${caseCount} casos processados`);
  } else {
    console.log(`ℹ️ Nenhuma modificação necessária (${caseCount} casos verificados)`);
  }
}

// Processa todos os arquivos de dados
function processAllFiles() {
  console.log('🚀 ADICIONANDO IDs EM TODOS OS CASOS\n');
  
  const dataDir = path.join(__dirname, 'src', 'data');
  const files = fs.readdirSync(dataDir)
    .filter(file => 
      file.endsWith('.js') && 
      !file.includes('topCases') && 
      !file.includes('meta_overrides') && 
      !file.includes('principlesData') &&
      !file.includes('dataStructure') &&
      !file.includes('TEMPLATE')
    )
    .map(file => path.join(dataDir, file));
  
  console.log(`📂 Encontrados ${files.length} arquivos para processar`);
  
  files.forEach(processFile);
  
  console.log('\n🎉 PROCESSAMENTO CONCLUÍDO!');
  console.log('\n📋 TODOS OS CASOS AGORA TÊM IDs ÚNICOS');
  console.log('🎯 Sistema preparado para expansão futura');
}

// Executa o script
processAllFiles();