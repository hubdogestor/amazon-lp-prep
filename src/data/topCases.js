// TOP CASES CONFIGURATION
// Define quais casos devem receber o ícone de alvo 🎯

const topCasesConfig = {
  // IDs dos casos que são considerados "top cases"
  topCaseIds: [
    'migracao-critica-de-dados-e-compliance',
    'reducao-drastica-de-sla-com-novo-modelo-de-process', 
    'criacao-checklist-executivo-clientes-b2b',
    'estruturacao-pmo-zero-sefaz-rs',
    'reducao-churn-onboarding-banco-digital',
    'decisao-de-arquitetura-bancaria-next-vs-bra'
  ],

  // Função para verificar se um caso é top case
  isTopCase: function(caseId) {
    return this.topCaseIds.includes(caseId);
  },

  // Função para gerar ID único baseado no título
  generateCaseId: function(principleId, title) {
    const baseTitle = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .substring(0, 50); // Limita tamanho
    
    return `${principleId}-${baseTitle}`;
  }
};

// Mapeamento de correções de títulos e datas
const titleCorrections = {
  // Top Cases com correções específicas
  'Migração Crítica de Dados e Compliance': {
    title_pt: 'Migração Crítica de Dados e Compliance',
    title_en: 'Critical Data Migration and Compliance', 
    company: 'HSBC → Bradesco',
    period: '05/2015-06/2016' // Período real da transição
  },
  
  'Redução Drástica de SLA com Novo Modelo de Processo': {
    title_pt: 'Redução Drástica de SLA com Novo Modelo de Processo',
    title_en: 'Drastic SLA Reduction with New Process Model',
    company: 'Huawei', 
    period: '09/2013-07/2014'
  },

  'Criação do Checklist Executivo para Clientes B2B': {
    title_pt: 'Criação do Checklist Executivo para Clientes B2B',
    title_en: 'Executive Checklist Creation for B2B Clients',
    company: 'Unimed',
    period: '05/2021-06/2024'
  },

  'Estruturação do PMO do Zero': {
    title_pt: 'Estruturação do PMO do Zero (SEFAZ-RS)',
    title_en: 'PMO Structuring from Scratch (SEFAZ-RS)',
    company: 'SEFAZ-RS',
    period: '07/2024-09/2025'
  },

  'Redução do Churn no Onboarding do Banco Digital': {
    title_pt: 'Redução do Churn no Onboarding do Banco Digital',
    title_en: 'Digital Bank Onboarding Churn Reduction',
    company: 'Woop Sicredi',
    period: '06/2018-05/2021' // Período do Sicredi/Woop
  },

  'Decisão de Arquitetura Bancária Next vs. Bradesco': {
    title_pt: 'Decisão de Arquitetura Bancária Next vs. Bra',
    title_en: 'Banking Architecture Decision Next vs. Bra',
    company: 'Bradesco', 
    period: '08/2016-12/2017'
  },

  // Outros casos com problemas
  'Root Cause Analysis: Falha de Pagamento Silenciosa': {
    title_pt: 'Root Cause Analysis: Falha de Pagamento Silenciosa',
    title_en: 'Root Cause Analysis: Silent Payment Failure',
    company: 'Woop Sicredi', // Corrigido: era Woop/Unimed
    period: '06/2019-12/2021' // Período do Sicredi/Woop
  },

  'Entrega de Platform Migration em 6 semanas': {
    title_pt: 'Entrega de Platform Migration em 6 semanas', 
    title_en: 'Platform Migration Delivery in 6 weeks',
    company: 'Woop Sicredi', // Corrigido: era Woop/Unimed
    period: '06/2019-12/2021' // Período do Sicredi/Woop
  },

  'Implementação Emergencial de Home Office': {
    title_pt: 'Implementação Emergencial de Home Office',
    title_en: 'Emergency Home Office Implementation', 
    company: 'Unimed', // Corrigido: removido Woop
    period: '2019-2024'
  },

  'Visão de Transformação Digital Governamental': {
    title_pt: 'Visão de Transformação Digital Governamental',
    title_en: 'Government Digital Transformation Vision',
    company: 'SEFAZ-RS',
    period: '08/2024-12/2024'
  },

  'ADR e Decisão de Arquitetura Híbrida': {
    title_pt: 'ADR e Decisão de Arquitetura Híbrida',
    title_en: 'ADR and Hybrid Architecture Decision',
    company: 'Banco Next',
    period: '08/2016-12/2017'
  },

  'Funil de Contratação e Onboarding 90Dias': {
    title_pt: 'Funil de Contratação e Onboarding 90Dias',
    title_en: 'Hiring Funnel and 90-Day Onboarding',
    company: 'Woop Sicredi', // Corrigido
    period: '01/2019-12/2020'
  },

  'Racionalização de Stack de Relatórios e Licenças': {
    title_pt: 'Racionalização de Stack de Relatórios e Licenças',
    title_en: 'Reports and Licenses Stack Rationalization',
    company: 'SEFAZ-RS',
    period: '08/2024-12/2024'
  },

  'MVP com Zero Budget: Portal do Empreendedor': {
    title_pt: 'MVP com Zero Budget: Portal do Empreendedor',
    title_en: 'Zero Budget MVP: Entrepreneur Portal',
    company: 'Unimed', // Removido Woop
    period: '06/2019-12/2021'
  },

  'Governança de Dados Responsável em Escala': {
    title_pt: 'Governança de Dados Responsável em Escala',
    title_en: 'Responsible Data Governance at Scale',
    company: 'Unimed', // Removido Woop 
    period: '06/2019-12/2021'
  },

  'Sustentabilidade e Responsabilidade Social': {
    title_pt: 'Sustentabilidade e Responsabilidade Social',
    title_en: 'Sustainability and Social Responsibility',
    company: 'PMO CAGE/SEFAZ-RS',
    period: '08/2024-05/2025'
  },

  'Ritmo Sustentável e Segurança Psicológica': {
    title_pt: 'Ritmo Sustentável e Segurança Psicológica',
    title_en: 'Sustainable Pace and Psychological Safety',
    company: 'PMO SEFAZ-RS',
    period: '2019-2024'
  },

  'Programa de Mentoria e Desenvolvimento': {
    title_pt: 'Programa de Mentoria e Desenvolvimento',
    title_en: 'Mentorship and Development Program',
    company: 'Unimed', // Removido Woop
    period: '2019-2024'
  }
};

export default { topCasesConfig, titleCorrections };