// Script para adicionar traduções automaticamente nos casos
import fs from 'fs';
import path from 'path';

// Mapeamento de traduções comuns
const translations = {
  "Dashboard Executivo em 10 dias": "Executive Dashboard in 10 Days",
  "Implementação Emergencial de Home Office": "Emergency Home Office Implementation", 
  "Tese de Crescimento e Portfólio Multi‑produto": "Growth Thesis & Multi-Product Portfolio",
  "Estruturação da Cultura de Produto Baseada em Dados": "Data-Driven Product Culture Implementation",
  "Decisão de Arquitetura Bancária Next vs. Bradesco": "Banking Architecture Decision: Next vs. Bradesco",
  "ADR e Decisão de Arquitetura Híbrida": "ADR and Hybrid Architecture Decision",
  "Pivot de Produto vs. Persistência": "Product Pivot vs. Persistence Decision",
  "Timeouts Ocultos em Verificação Externa": "Hidden Timeouts in External Verification",
  "Root Cause Analysis: Falha de Pagamento Silenciosa": "Root Cause Analysis: Silent Payment Failure",
  "Virada de Obra: Rollout 4G e Copa 2014": "Turnaround: 4G Rollout & World Cup 2014",
  "Entrega de Platform Migration em 6 semanas": "Platform Migration Delivery in 6 Weeks",
  "Racionalização de Stack de Relatórios e Licenças": "Reporting Stack & License Rationalization",
  "MVP com Zero Budget: Portal do Empreendedor": "Zero Budget MVP: Entrepreneur Portal",
  "Funil de Contratação e Onboarding 90Dias": "Hiring Funnel & 90-Day Onboarding",
  "Identificação e Desenvolvimento de High Performer": "High Performer Identification & Development",
  "Quality Gates e DoD/DoR em Squads": "Quality Gates and DoD/DoR in Squads",
  "Programa de Mentoria e Desenvolvimento": "Mentoring & Development Program",
  "Governança de Dados Responsável em Escala": "Responsible Data Governance at Scale",
  "Sustentabilidade e Responsabilidade Social": "Sustainability & Social Responsibility"
};

// Mapeamento de empresas e períodos
const companyPeriods = {
  "Huawei": "09/2013–07/2014",
  "Unimed": "06/2021–05/2024", 
  "SEFAZ-RS": "08/2024–12/2024",
  "PMO CAGE/SEFAZ-RS": "08/2024–05/2025",
  "Woop/Sicredi": "01/2019–12/2020",
  "Woop/Unimed": "06/2019–12/2021",
  "Sicredi": "06/2019–03/2021",
  "Bradesco": "08/2016–12/2017",
  "Banco Next": "08/2016–12/2017"
};

function extractBaseTitle(title) {
  return title
    .replace(/\s*-\s*[^(]+\s*\([^)]*\)\s*$/, '')
    .replace(/\s*\([^)]*\)\s*$/, '')
    .trim();
}

function extractCompany(title) {
  const match = title.match(/-\s*([^(]+)\s*\(/);
  return match ? match[1].trim() : "";
}

function processFile(filePath) {
  console.log(`Processando: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Regex para encontrar cases sem title_pt/title_en
  const caseRegex = /"title":\s*"([^"]+)"((?!.*"title_pt")[^}]*?)("pt":\s*{)/g;
  
  content = content.replace(caseRegex, (match, originalTitle, middle, ptStart) => {
    const baseTitle = extractBaseTitle(originalTitle);
    const company = extractCompany(originalTitle);
    const translation = translations[baseTitle] || `${baseTitle} (EN)`;
    const period = companyPeriods[company] || "2019–2024";

    console.log(`  - ${baseTitle} → ${translation}`);
    modified = true;

    return `"title": "${originalTitle}",
      "title_pt": "${baseTitle}",
      "title_en": "${translation}",
      "company": "${company}",
      "period": "${period}",
      ${ptStart}`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ Atualizado!`);
  } else {
    console.log(`  ⏭️  Nenhuma alteração necessária`);
  }
}

// Processar todos os arquivos de dados
const dataDir = './src/data';
const files = fs.readdirSync(dataDir)
  .filter(f => f.endsWith('.js') && !f.includes('meta_overrides') && !f.includes('principlesData') && !f.includes('dataStructure') && !f.includes('TEMPLATE'));

console.log('🚀 Iniciando processamento automático de traduções...\n');

files.forEach(file => {
  processFile(path.join(dataDir, file));
  console.log('');
});

console.log('✅ Processamento concluído!');