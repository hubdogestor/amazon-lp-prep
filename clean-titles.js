// SCRIPT PARA LIMPEZA COMPLETA DE TÍTULOS
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correções específicas de títulos e dados
const titleCorrections = {
  'Dashboard Executivo em 10 dias': {
    company: 'PMO CAGE/SEFAZ-RS',
    period: '08/2024-12/2024'
  },
  'Implementação Emergencial de Home Office': {
    company: 'Unimed',
    period: '2020-2021'
  },
  'Sustentabilidade e Responsabilidade Social': {
    company: 'PMO CAGE/SEFAZ-RS',
    period: '08/2024-05/2025'
  },
  'Programa de Mentoria e Desenvolvimento': {
    company: 'Unimed',
    period: '2022-2024'
  },
  'Pivot de Produto vs. Persistência': {
    company: 'Woop Sicredi',
    period: '01/2019-12/2020'
  },
  'Identificação e Desenvolvimento de High Performer': {
    company: 'PMO CAGE/SEFAZ-RS',
    period: '08/2024-12/2024'
  },
  'MVP com Zero Budget: Portal do Empreendedor': {
    company: 'Unimed',
    period: '06/2021-12/2023'
  },
  'Tese de Crescimento e Portfólio Multi‑produto': {
    company: 'Unimed',
    period: '2022-2024'
  },
  'Lançamento de Novos Produtos Digitais para Diversificar Receita': {
    company: 'Unimed',
    period: '2022-2024'
  },
  'Quality Gates e DoD/DoR em Squads': {
    company: 'Woop Sicredi',
    period: '06/2018-05/2021'
  }
};

// Função para processar um arquivo
function processFile(filePath) {
  console.log(`\n🔧 Processando: ${path.basename(filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove todas as ⭐ primeiro (exceto casos com isTopCase: true)
  const lines = content.split('\n');
  const newLines = lines.map(line => {
    if (line.includes(' ⭐') && !content.includes('"isTopCase": true')) {
      return line.replace(/ ⭐/g, '');
    }
    return line;
  });
  
  let newContent = newLines.join('\n');
  if (newContent !== content) {
    modified = true;
    content = newContent;
    console.log('  🗑️ Removidas estrelas desnecessárias');
  }

  // Corrige MM/AAAA e empresas problemáticas
  Object.entries(titleCorrections).forEach(([baseTitle, correction]) => {
    if (content.includes(baseTitle)) {
      console.log(`  🔧 Corrigindo caso: ${baseTitle}`);
      
      // Corrige company se necessário
      if (correction.company) {
        const companyRegex = new RegExp(`"company":\\s*"[^"]*"`, 'g');
        content = content.replace(companyRegex, `"company": "${correction.company}"`);
      }
      
      // Corrige period se necessário  
      if (correction.period) {
        const periodRegex = new RegExp(`"period":\\s*"[^"]*"`, 'g');
        content = content.replace(periodRegex, `"period": "${correction.period}"`);
      }
      
      modified = true;
    }
  });

  // Remove MM/AAAA específicos
  if (content.includes('MM/AAAA')) {
    content = content.replace(/MM\/AAAA-MM\/AAAA/g, '2024');
    content = content.replace(/\(MM\/AAAA-MM\/AAAA\)/g, '');
    console.log('  🗑️ Removidos MM/AAAA');
    modified = true;
  }

  // Corrige Woop/Unimed misturados
  if (content.includes('Woop/Unimed') || content.includes('Unimed/Woop')) {
    content = content.replace(/Woop\/Unimed/g, 'Woop Sicredi');
    content = content.replace(/Unimed\/Woop/g, 'Unimed');
    console.log('  🔧 Corrigidas empresas misturadas');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Arquivo corrigido`);
  } else {
    console.log(`ℹ️ Nenhuma correção necessária`);
  }
}

// Processa todos os arquivos de dados
function processAllFiles() {
  console.log('🚀 INICIANDO LIMPEZA COMPLETA DE TÍTULOS\n');
  
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
  
  console.log('\n🎉 LIMPEZA CONCLUÍDA!');
  console.log('✅ Títulos organizados');
  console.log('🗑️ Estrelas removidas de casos não-top');
  console.log('🔧 MM/AAAA e empresas corrigidas');
}

// Executa o script
processAllFiles();