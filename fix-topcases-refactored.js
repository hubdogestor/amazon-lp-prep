// SCRIPT REFATORADO PARA CORREÇÃO DE TOP CASES E TÍTULOS
// Agora usa manipulação de objetos JavaScript em vez de regex em strings
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Correções de títulos e dados para top cases
 */
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

/**
 * Gera ID único baseado no título
 * @param {string} title - Título do case
 * @returns {string} ID slugified
 */
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

/**
 * Remove empresa e período do título
 * @param {string} title - Título completo
 * @returns {string} Título base
 */
function extractBaseTitle(title) {
  return title
    .replace(/ - [^(]*\([^)]*\)$/, '') // Remove " - Company (MM/AAAA-MM/AAAA)"
    .replace(/\([^)]*\)$/, '') // Remove qualquer "(...)" no final
    .trim();
}

/**
 * Processa um arquivo de dados de princípio
 * @param {string} filePath - Caminho do arquivo
 */
function processFile(filePath) {
  console.log(`\n🔧 Processando: ${path.basename(filePath)}`);

  try {
    // Lê o arquivo como módulo ES6
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Remove o export para poder fazer eval (não ideal, mas funciona para este caso)
    // Uma alternativa seria usar dynamic import, mas isso complica o script
    const moduleContent = fileContent
      .replace(/export\s+default\s+/, '')
      .replace(/;?\s*$/, '');

    // Avalia o conteúdo como JavaScript
    const principleData = eval(`(${moduleContent})`);

    if (!principleData.cases || !Array.isArray(principleData.cases)) {
      console.log('❌ Nenhum caso encontrado');
      return;
    }

    let modified = false;
    let caseCount = 0;

    // Processa cada caso
    principleData.cases = principleData.cases.map((caseObj) => {
      caseCount++;
      const title = caseObj.title;
      console.log(`  📝 Caso: "${title}"`);

      let updatedCase = { ...caseObj };

      // Gera ID se não existir
      if (!updatedCase.id) {
        const baseTitle = extractBaseTitle(title);
        const newId = generateCaseId(baseTitle);
        updatedCase.id = newId;
        console.log(`    🆕 ID adicionado: "${newId}"`);
        modified = true;
      }

      // Verifica se precisa de correções específicas
      const baseTitle = extractBaseTitle(title);
      const correction = Object.entries(titleCorrections).find(([key]) =>
        baseTitle.includes(key) || title.includes(key)
      );

      if (correction) {
        const [, correctionData] = correction;
        console.log(`    ⭐ Aplicando correção para top case`);

        // Aplica todas as correções
        Object.entries(correctionData).forEach(([key, value]) => {
          if (updatedCase[key] !== value) {
            updatedCase[key] = value;
            modified = true;
            console.log(`    ✏️ ${key}: "${value}"`);
          }
        });
      }

      return updatedCase;
    });

    if (modified) {
      // Converte de volta para string JavaScript formatada
      const newContent = `const ${path.basename(filePath, '.js')} = ${JSON.stringify(principleData, null, 2)};\n\nexport default ${path.basename(filePath, '.js')};\n`;

      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Arquivo atualizado com ${caseCount} casos processados`);
    } else {
      console.log(`ℹ️ Nenhuma modificação necessária (${caseCount} casos verificados)`);
    }

  } catch (error) {
    console.error(`❌ Erro ao processar ${filePath}:`, error.message);
  }
}

/**
 * Processa todos os arquivos de dados
 */
function processAllFiles() {
  console.log('🚀 INICIANDO CORREÇÃO DE TOP CASES E TÍTULOS (Versão Refatorada)\n');

  const dataDir = path.join(__dirname, 'src', 'data');

  if (!fs.existsSync(dataDir)) {
    console.error('❌ Diretório src/data não encontrado');
    return;
  }

  const files = fs.readdirSync(dataDir)
    .filter(file =>
      file.endsWith('.js') &&
      !file.includes('topCases') &&
      !file.includes('meta_overrides') &&
      !file.includes('principlesData') &&
      !file.includes('TEMPLATE')
    )
    .map(file => path.join(dataDir, file));

  console.log(`📂 Encontrados ${files.length} arquivos para processar\n`);

  files.forEach(processFile);

  console.log('\n🎉 PROCESSAMENTO CONCLUÍDO!');
  console.log('\n📋 PRÓXIMOS PASSOS:');
  console.log('1. Verifique os arquivos modificados');
  console.log('2. Execute npm run build para testar');
  console.log('3. Execute npm run lint para verificar erros');
  console.log('4. Faça commit das mudanças');
}

// Executa o script
processAllFiles();
