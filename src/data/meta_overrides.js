// src/data/meta_overrides.js
//
// Centraliza metadados por **slug do título PT** (sem acentos, minúsculo e hífens).
// Campos disponíveis por case:
//   - title_pt:   Título em português
//   - title_en:   Título em inglês
//   - company:    Empresa/área
//   - period:     Período no formato "MM/AAAA–MM/AAAA" (ou "MM/AAAA–Presente")
// Obs: datas marcadas com `// approx.` foram inferidas a partir do histórico de vínculos.

const metaOverrides = {
  // ======================================================================
  // TOP CASES
  // ======================================================================

  // HSBC → Bradesco (2015–2016)
  "migracao-critica-de-dados-e-compliance-hsbc-bradesco": {
    title_pt: "Migração Crítica de Dados e Compliance",
    title_en: "Critical Data Migration & Compliance",
    company: "HSBC → Bradesco",
    period: "11/2015–09/2016", // approx.
  },

  // Huawei (2009–2015)
  "reducao-drastica-de-sla-com-novo-modelo-de-processo-huawei": {
    title_pt: "Redução Drástica de SLA com Novo Modelo de Processo",
    title_en: "Radical SLA Reduction with a New Process Model",
    company: "Huawei",
    period: "09/2013–07/2014", // approx. (Copa do Mundo 2014)
  },

  // Unimed (2021–2024)
  "criacao-do-checklist-executivo-para-clientes-b2b-unimed": {
    title_pt: "Criação do 'Checklist Executivo' para Clientes B2B",
    title_en: "Executive Checklist for B2B Clients",
    company: "Unimed",
    period: "05/2021–06/2024", // approx.
  },

  // SEFAZ-RS / CAGE (2024–2025)
  "estruturacao-do-pmo-do-zero-na-secretaria-da-fazenda-sefaz-rs": {
    title_pt: "Estruturação do PMO do Zero",
    title_en: "Standing up a Greenfield PMO",
    company: "Secretaria da Fazenda do RS (SEFAZ-RS)",
    period: "07/2024–09/2025", // approx.
  },

  // Woop (Sicredi) (2018–2021)
  "reducao-do-churn-no-onboarding-do-banco-digital-woop-sicredi": {
    title_pt: "Redução do Churn no Onboarding do Banco Digital",
    title_en: "Reducing Onboarding Churn for the Digital Bank",
    company: "Woop (Sicredi)",
    period: "08/2019–03/2021", // approx.
  },

  // Next (Bradesco) (2016–2018)
  "decisao-de-arquitetura-cloud-hibrida-para-o-banco-digital-next": {
    title_pt: "Decisão de Arquitetura Cloud Híbrida para o Banco Digital",
    title_en: "Hybrid Cloud Architecture Decision for the Digital Bank",
    company: "Next (Bradesco)",
    period: "04/2016–06/2018", // approx.
  },

  // ======================================================================
  // SECUNDÁRIOS (apareceram nas suas telas/descrições)
  // ======================================================================

  // Sicredi (2018–2021)
  "estruturacao-da-cultura-de-produto-baseada-em-dados-sicredi": {
    title_pt: "Estruturação da Cultura de Produto Baseada em Dados",
    title_en: "Building a Data-informed Product Culture",
    company: "Sicredi",
    period: "01/2019–06/2021", // approx.
  },

  // PMO/CAGE (2024–2025)
  "ritmo-sustentavel-e-seguranca-psicologica-pmo": {
    title_pt: "Ritmo Sustentável e Segurança Psicológica",
    title_en: "Sustainable Cadence & Psychological Safety",
    company: "PMO / CAGE",
    period: "08/2024–09/2025", // approx.
  },

  // PMO CAGE / SEFAZ-RS (2024–2025)
  "dashboard-executivo-em-10-dias-pmo-cage": {
    title_pt: "Dashboard Executivo em 10 dias",
    title_en: "Executive Dashboard in 10 Days",
    company: "PMO CAGE / SEFAZ-RS",
    period: "08/2024–08/2024", // approx.
  },

  // CAGE / SEFAZ-RS (2024–2025)
  "career-ladders-e-mentoria-cruzada": {
    title_pt: "Career Ladders & Mentoria Cruzada",
    title_en: "Career Ladders & Cross-Mentoring",
    company: "CAGE / SEFAZ-RS",
    period: "09/2024–05/2025", // approx.
  },

  // Woop (Sicredi) (2018–2021)
  "fast-track-de-aprovacao-no-onboarding-woop-sicredi": {
    title_pt: "Fast Track de Aprovação no Onboarding",
    title_en: "Fast-track Approval in Onboarding",
    company: "Woop (Sicredi)",
    period: "10/2019–02/2020", // approx.
  },

  // Unimed (2021–2024)
  "lancamento-de-novos-produtos-digitais-para-diversificar-receita-unimed": {
    title_pt: "Lançamento de Novos Produtos Digitais para Diversificar Receita",
    title_en: "Launching New Digital Products to Diversify Revenue",
    company: "Unimed",
    period: "06/2022–05/2024", // approx.
  },

  // Huawei (2009–2015) – caso alternativo citado nas telas
  "telecom-rollouts-world-cup-readiness-huawei": {
    title_pt: "Rollouts de Telecom & Prontidão para a Copa do Mundo",
    title_en: "Telecom Rollouts & World Cup Readiness",
    company: "Huawei",
    period: "09/2013–07/2014", // approx.
  },

  // Sicredi (2018–2021) – do print “Redesign da Experiência Digital”
  "redesign-da-experiencia-digital-sicredi": {
    title_pt: "Redesign da Experiência Digital",
    title_en: "Digital Experience Redesign",
    company: "Sicredi",
    period: "01/2020–06/2021", // approx.
  },

  // Responsabilidade/escala – alinhado a SEFAZ (apareceu na barra lateral do print)
  "governanca-de-dados-responsavel-em-escala": {
    title_pt: "Governança de Dados Responsável em Escala",
    title_en: "Responsible Data Governance at Scale",
    company: "SEFAZ-RS",
    period: "07/2024–09/2025", // approx.
  },
};

// ----------------------------------------------------------------------
// Dica: para adicionar novos cases rapidamente, copie um bloco acima e
// ajuste a CHAVE (slug PT), os campos e o período.
// Exemplo de slug: "Título PT" → "titulo-pt" (sem acentos, minúsculas, hífens).
// ----------------------------------------------------------------------

export default metaOverrides;

