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
  "reducao-drastica-de-sla-com-novo-modelo-de-processo-huawei-mm-aaaa-mm-aaaa": {
    title_pt: "Redução Drástica de SLA com Novo Modelo de Processo",
    title_en: "Radical SLA Reduction with a New Process Model",
    company: "Huawei",
    period: "09/2013–07/2014", // approx. (Copa do Mundo 2014)
  },

  // Unimed (2021–2024)
  "criacao-do-checklist-executivo-para-clientes-b2b-unimed-mm-aaaa-mm-aaaa": {
    title_pt: "Criação do 'Checklist Executivo' para Clientes B2B",
    title_en: "Executive Checklist for B2B Clients",
    company: "Unimed",
    period: "05/2021–06/2024", // approx.
  },

  // SEFAZ-RS / CAGE (2024–2025)
  "estruturacao-do-pmo-do-zero-secretaria-da-fazenda-sefaz-rs-mm-aaaa-mm-aaaa": {
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
  "dashboard-executivo-em-10-dias-pmo-cage-sefaz-rs-mm-aaaa-mm-aaaa": {
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
  "lancamento-de-novos-produtos-digitais-para-diversificar-receita-unimed-mm-aaaa-mm-aaaa": {
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

  // ======================================================================
  // CASOS ADICIONAIS COM MM/AAAA CORRIGIDOS
  // ======================================================================

  "quality-gates-e-dod-dor-em-squads-woop-sicredi-mm-aaaa-mm-aaaa": {
    title_pt: "Quality Gates e DoD/DoR em Squads",
    title_en: "Quality Gates and DoD/DoR in Squads",
    company: "Woop (Sicredi)",
    period: "03/2019–12/2020",
  },

  "tese-de-crescimento-e-portfolio-multi-produto-unimed-mm-aaaa-mm-aaaa": {
    title_pt: "Tese de Crescimento e Portfólio Multi-produto", 
    title_en: "Growth Thesis & Multi-Product Portfolio",
    company: "Unimed",
    period: "01/2022–12/2023",
  },

  "estruturacao-da-cultura-de-produto-baseada-em-dados-sicredi-mm-aaaa-mm-aaaa": {
    title_pt: "Estruturação da Cultura de Produto Baseada em Dados",
    title_en: "Data-Driven Product Culture Implementation",
    company: "Sicredi",
    period: "06/2019–03/2021",
  },

  "decisao-de-arquitetura-bancaria-next-vs-bradesco-bradesco": {
    title_pt: "Decisão de Arquitetura Bancária Next vs. Bradesco",
    title_en: "Banking Architecture Decision: Next vs. Bradesco",
    company: "Bradesco",
    period: "08/2016–12/2017",
  },

  "timeouts-ocultos-em-verificacao-externa-sefaz-rs-mm-aaaa-mm-aaaa": {
    title_pt: "Timeouts Ocultos em Verificação Externa",
    title_en: "Hidden Timeouts in External Verification",
    company: "SEFAZ-RS",
    period: "08/2024–09/2024",
  },

  "root-cause-analysis-falha-de-pagamento-silenciosa-woop-unimed": {
    title_pt: "Root Cause Analysis: Falha de Pagamento Silenciosa",
    title_en: "Root Cause Analysis: Silent Payment Failure", 
    company: "Woop/Unimed",
    period: "11/2019–02/2020",
  },

  "virada-de-obra-rollout-4g-e-copa-2014-huawei-mm-aaaa-mm-aaaa": {
    title_pt: "Virada de Obra: Rollout 4G e Copa 2014",
    title_en: "Turnaround: 4G Rollout & World Cup 2014",
    company: "Huawei", 
    period: "09/2013–07/2014",
  },

  "entrega-de-platform-migration-em-6-semanas-woop-unimed": {
    title_pt: "Entrega de Platform Migration em 6 semanas",
    title_en: "Platform Migration Delivery in 6 Weeks",
    company: "Woop/Unimed",
    period: "08/2020–09/2020",
  },

  "implementacao-emergencial-de-home-office-unimed-woop": {
    title_pt: "Implementação Emergencial de Home Office",
    title_en: "Emergency Home Office Implementation",
    company: "Unimed/Woop",
    period: "03/2020–05/2020",
  },

  "pivot-de-produto-vs-persistencia-woop-unimed": {
    title_pt: "Pivot de Produto vs. Persistência",
    title_en: "Product Pivot vs. Persistence Decision",
    company: "Woop/Unimed", 
    period: "01/2020–06/2020",
  },

  "sustentabilidade-e-responsabilidade-social-pmo-cage-sefaz-rs": {
    title_pt: "Sustentabilidade e Responsabilidade Social",
    title_en: "Sustainability & Social Responsibility",
    company: "PMO CAGE/SEFAZ-RS",
    period: "09/2024–12/2025",
  },

  "racionalizacao-de-stack-de-relatorios-e-licencas-sefaz-rs": {
    title_pt: "Racionalização de Stack de Relatórios e Licenças", 
    title_en: "Reporting Stack & License Rationalization",
    company: "SEFAZ-RS",
    period: "08/2024–12/2024",
  },

  "mvp-com-zero-budget-portal-do-empreendedor-woop-unimed": {
    title_pt: "MVP com Zero Budget: Portal do Empreendedor",
    title_en: "Zero Budget MVP: Entrepreneur Portal",
    company: "Woop/Unimed",
    period: "05/2019–08/2019", 
  },

  "funil-de-contratacao-e-onboarding-90dias-woop-sicredi": {
    title_pt: "Funil de Contratação e Onboarding 90Dias",
    title_en: "Hiring Funnel & 90-Day Onboarding",
    company: "Woop (Sicredi)", 
    period: "01/2019–12/2019",
  },

  "identificacao-e-desenvolvimento-de-high-performer-pmo-cage-sefaz-rs": {
    title_pt: "Identificação e Desenvolvimento de High Performer",
    title_en: "High Performer Identification & Development",
    company: "PMO CAGE/SEFAZ-RS",
    period: "08/2024–05/2025",
  },

  "programa-de-mentoria-e-desenvolvimento-unimed-woop": {
    title_pt: "Programa de Mentoria e Desenvolvimento",
    title_en: "Mentoring & Development Program", 
    company: "Unimed/Woop",
    period: "06/2020–12/2021",
  },
};

// ----------------------------------------------------------------------
// Dica: para adicionar novos cases rapidamente, copie um bloco acima e
// ajuste a CHAVE (slug PT), os campos e o período.
// Exemplo de slug: "Título PT" → "titulo-pt" (sem acentos, minúsculas, hífens).
// ----------------------------------------------------------------------

export default metaOverrides;

