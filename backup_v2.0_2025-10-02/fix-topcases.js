// SCRIPT PARA CORREÇÃO DE TOP CASES E TÍTULOS
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correções de títulos e dados
const titleCorrections = {
  'Migração Crítica de Dados e Compliance': {
    title_pt: 'Migração Crítica de Dados e Compliance',
    title_en: 'Critical Data Migration and Compliance', 
    company: 'HSBC → Bradesco',
    period: '2019-2024',
    isTopCase: true
  },
  
  'Redução Drástica de SLA com Novo Modelo de Processo': {
    title_pt: 'Redução Drástica de SLA com Novo Modelo de Processo',
    title_en: 'Drastic SLA Reduction with New Process Model',
    company: 'Huawei', 
    period: '09/2013-07/2014',
    isTopCase: true
  },

  'Criação do Checklist Executivo para Clientes B2B': {
    title_pt: 'Criação do Checklist Executivo para Clientes B2B',
    title_en: 'Executive Checklist Creation for B2B Clients',
    company: 'Unimed',
    period: '05/2021-06/2024',
    isTopCase: true
  },

  'Estruturação do PMO do Zero - Secretaria da Fazenda do RS (SEFAZ-RS) (07/2024-09/2025)': {
    title_pt: 'Estruturação do PMO do Zero (SEFAZ-RS)',
    title_en: 'PMO Structuring from Scratch (SEFAZ-RS)',
    company: 'SEFAZ-RS',
    period: '07/2024-09/2025',
    isTopCase: true
  },

  'Redução do Churn no Onboarding do Banco Digital (Woop Sicredi)': {
    title_pt: 'Redução do Churn no Onboarding do Banco Digital',
    title_en: 'Digital Bank Onboarding Churn Reduction',
    company: 'Woop Sicredi',
    period: '06/2018-05/2021',
    isTopCase: true
  },

  'Decisão de Arquitetura Bancária Next vs. Bradesco': {
    title_pt: 'Decisão de Arquitetura Bancária Next vs. Bra',
    title_en: 'Banking Architecture Decision Next vs. Bra',
    company: 'Bradesco', 
    period: '08/2016-12/2017',
    isTopCase: true
  }
};

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
  
  // Processa cada caso individualmente - sem IDs (eles não existem ainda)
  const caseObjectRegex = /{\s*"title":\s*"([^"]*)"([\s\S]*?)}/g;
  
  let newCasesContent = casesContent;
  let caseMatch;
  
  while ((caseMatch = caseObjectRegex.exec(casesContent)) !== null) {
    const [fullMatch, title] = caseMatch;
    caseCount++;
    
    console.log(`  📝 Caso: "${title}"`);
    
    // Gera novo ID baseado no título
    const baseTitle = title.replace(/ - [^(]*\([^)]*\)$/, ''); // Remove empresa e período
    const newId = generateCaseId(baseTitle);
    
    let updatedCase = fullMatch;
    
    // Adiciona ID se não existir
    if (!updatedCase.includes('"id":')) {
      updatedCase = updatedCase.replace('{\n      "title":', `{\n      "id": "${newId}",\n      "title":`);
      console.log(`    🆕 ID adicionado: "${newId}"`);
      modified = true;
    }
    
    // Verifica se precisa de correções específicas
    const correction = Object.entries(titleCorrections).find(([key]) => 
      baseTitle.includes(key) || title.includes(key)
    );
    
    if (correction) {
      const [, correctionData] = correction;
      console.log(`    ⭐ Aplicando correção para top case`);
      
      // Atualiza title_pt
      if (correctionData.title_pt && !updatedCase.includes(`"title_pt": "${correctionData.title_pt}"`)) {
        updatedCase = updatedCase.replace(/"title_pt":\s*"[^"]*"/, `"title_pt": "${correctionData.title_pt}"`);
        modified = true;
      }
      
      // Atualiza title_en  
      if (correctionData.title_en && !updatedCase.includes(`"title_en": "${correctionData.title_en}"`)) {
        updatedCase = updatedCase.replace(/"title_en":\s*"[^"]*"/, `"title_en": "${correctionData.title_en}"`);
        modified = true;
      }
      
      // Atualiza company
      if (correctionData.company && !updatedCase.includes(`"company": "${correctionData.company}"`)) {
        updatedCase = updatedCase.replace(/"company":\s*"[^"]*"/, `"company": "${correctionData.company}"`);
        modified = true;
      }
      
      // Atualiza period
      if (correctionData.period && !updatedCase.includes(`"period": "${correctionData.period}"`)) {
        updatedCase = updatedCase.replace(/"period":\s*"[^"]*"/, `"period": "${correctionData.period}"`);
        modified = true;
      }
      
      // Adiciona isTopCase se não existir
      if (correctionData.isTopCase && !updatedCase.includes('"isTopCase"')) {
        // Adiciona após period
        updatedCase = updatedCase.replace(/"period": "[^"]*",/, `$&\n      "isTopCase": true,`);
        modified = true;
        console.log(`    ⭐ Adicionado flag isTopCase`);
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
  console.log('🚀 INICIANDO CORREÇÃO DE TOP CASES E TÍTULOS\n');
  
  const dataDir = path.join(__dirname, 'src', 'data');
  const files = fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.js') && !file.includes('topCases') && !file.includes('meta_overrides') && !file.includes('principlesData'))
    .map(file => path.join(dataDir, file));
  
  console.log(`📂 Encontrados ${files.length} arquivos para processar`);
  
  files.forEach(processFile);
  
  console.log('\n🎉 PROCESSAMENTO CONCLUÍDO!');
  console.log('\n📋 PRÓXIMOS PASSOS:');
  console.log('1. Verifique os arquivos modificados');
  console.log('2. Execute npm run build para testar');
  console.log('3. Faça commit das mudanças');
}

// Executa o script
processAllFiles();