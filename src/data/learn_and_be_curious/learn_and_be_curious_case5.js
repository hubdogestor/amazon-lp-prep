// Case 5 - learn_and_be_curious
const case_5 = {
  id: "out-of-comfort-zone-transparency-portal",
  title: "Liderei o Portal da Transparência: Fora da Zona de Conforto",
  title_pt: "Liderei o Portal da Transparência: Fora da Zona de Conforto",
  title_en: "Led the Transparency Portal: Out of the Comfort Zone",
  company: "SEFAZ/RS",
  period: "01/2023-04/2023",
  isTopCase: false,
  pt: {
    s: `Na SEFAZ/RS, identifiquei que cidadãos não tinham acesso transparente a dados fiscais públicos - analisei e descobri que 78% das solicitações via Lei de Acesso à Informação eram sobre execução orçamentária básica que eu poderia disponibilizar online. Examinei reclamações do Ministério Público e mapeei que falta de transparência gerava 340 processos/ano questionando uso de recursos públicos. Portal da Transparência existente estava 5 anos desatualizado, com dados agregados inúteis (ninguém conseguia entender). Eu assumiria projeto envolvendo dados sensíveis de contratos, licitações e folha de pagamento - qualquer vazamento de dados pessoais ou erro de cálculo teria impacto imediato na reputação institucional e poderia gerar processo administrativo contra mim. Tecnicamente, estava completamente fora da minha zona de conforto: eu nunca tinha trabalhado com dados governamentais, LGPD aplicada ao setor público, ou projetos com escrutínio de TCE (Tribunal de Contas do Estado) e Ministério Público. Examinei tentativas anteriores de modernizar o portal que falharam em 2019 e 2021 por complexidade técnica e político-jurídica.`,
    t: `Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. Minha responsabilidade pessoal era entregar Portal da Transparência totalmente redesenhado em 4 meses (prazo político vs. 6 meses técnicos estimados) sem comprometer privacidade, segurança ou conformidade legal. Estabeleci meta clara que seria cobrada diretamente de mim: reduzir solicitações via LAI (Lei de Acesso) em 60%, atingir 10.000 acessos únicos/mês que eu monitoraria nos primeiros 3 meses, zero incidentes de privacidade sob minha gestão, e tempo de resposta de consultas < 3 segundos. Sabia que precisava aprender rapidamente domínios completamente novos (governança pública, LGPD setorial, arquitetura de dados abertos) para ter sucesso individual.`,
    a: `Priorizei transparência centrada no cidadão, alinhei stakeholders complexos, tomei decisões de trade-off político-técnico e removi bloqueios jurídicos. Primeiro: eu mapeei necessidades reais de cidadãos entrevistando 18 jornalistas investigativos, 12 auditores do TCE, e analisando 240 solicitações LAI dos últimos 12 meses. Identifiquei top 5 demandas: (1) execução orçamentária detalhada por programa, (2) contratos vigentes com fornecedores, (3) evolução de folha de pagamento por secretaria, (4) licitações em andamento com status, (5) transferências a municípios. Desenhei MVP focado nesses 5 casos de uso com drill-down granular. Segundo: eu investi 80 horas em 3 semanas estudando LGPD aplicada ao setor público, arquitetura de dados abertos (padrões Open Data Charter), e técnicas de anonimização K-anonymity. Participei de 4 webinars da CGU (Controladoria Geral da União) sobre transparência ativa e li 8 pareceres jurídicos de outros estados sobre limites de exposição de dados. Criei matriz de risco jurídico classificando cada campo de dado em 4 níveis (público irrestrito, público anonimizado, público agregado, confidencial). Terceiro: estruturei governança multi-stakeholder com reuniões semanais envolvendo jurídico, TCE, Ministério Público e sociedade civil (OAB Digital). Cada decisão de arquitetura que tomei passava por validação cruzada. Criei 12 testes de homologação específicos para anonimização (exemplo: garantir que nenhuma query retornasse menos de 5 registros agregados para evitar identificação). Maior desafio foi conflito entre demanda de transparência total do TCE versus proteção de dados do jurídico. TCE queria CPF de todos servidores visível; jurídico proibia por LGPD. Passei 2 semanas negociando solução de compromisso: publiquei faixas salariais + cargo + lotação sem identificação pessoal, mas criei acesso restrito com justificativa para auditorias. Apresentei parecer técnico-jurídico que convenceu ambos os lados.`,
    r: `Entreguei portal redesenhado em 3.8 meses (5% antes do prazo político). Atingi pessoalmente 14.200 acessos únicos/mês que monitorei nos primeiros 3 meses, superando minha meta de 10k em 42%. Reduzi solicitações via LAI em 67% (de 340 para 112 processos/ano), economizando 480h/ano de trabalho manual de atendimento (R$ 94k considerando custo de servidor). Tempo médio de resposta de consultas que otimizei foi 1.8 segundos (40% melhor que meta de 3s). Mantive zero incidentes de privacidade ou vazamento em 18 meses de operação pós-lançamento. Auditoria do TCE em agosto/2023 classificou portal que criei como 'referência estadual' e dados foram reutilizados por 23 municípios gaúchos. Jornalistas publicaram 47 reportagens investigativas baseadas em dados do portal que disponibilizei nos primeiros 6 meses (vs. 8 reportagens/ano antes). NPS de satisfação com transparência estadual subiu de 31 para 58 (pesquisa Datafolha/TCE). ROI do meu aprendizado foi transformador: conhecimento em LGPD setorial que adquiri foi aplicado por mim em 4 outros projetos da SEFAZ, gerando economia cumulativa de R$ 380k em consultorias externas evitadas. Portal que construí se tornou base para 3 iniciativas subsequentes (Painel COVID, Transparência de Convênios, Portal de Licitações).`,
    l: `Aprendi que sair da zona de conforto técnica e política acelera maturidade exponencialmente quando há investimento disciplinado em aprendizado estruturado e mecanismos de governança. Descobri que complexidade jurídico-política exige tempo para eu construir relacionamentos e confiança - não pode ser resolvida apenas com excelência técnica. O maior insight foi que transparência para cidadãos (Customer Obsession aplicada ao setor público) cria alinhamento natural entre stakeholders conflitantes - quando foquei em valor para o cidadão, TCE e jurídico convergiram. Hoje, sempre que enfrento domínio desconhecido com alto risco, primeiro pergunto: 'Quem são os especialistas de referência?' e invisto 20% do prazo em aprendizado intensivo antes de executar, ao invés de aprender 'fazendo' e corrigindo erros caros.`
  },
  en: {
    s: `At SEFAZ/RS, I identified that citizens lacked transparent access to public fiscal data - I analyzed and discovered that 78% of requests via Freedom of Information Act were about basic budget execution that I could make available online. I examined complaints from Public Prosecutor's Office and mapped that lack of transparency generated 340 lawsuits/year questioning use of public resources. Existing Transparency Portal was 5 years outdated, with useless aggregated data (nobody could understand). I would take on project involving sensitive data on contracts, procurement and payroll - any personal data leak or calculation error would have immediate institutional reputation impact and could generate administrative lawsuit against me. Technically, I was completely out of my comfort zone: I had never worked with government data, LGPD applied to public sector, or projects with scrutiny from State Court of Accounts and Public Prosecutor. I examined previous attempts to modernize portal that failed in 2019 and 2021 due to technical and political-legal complexity.`,
    t: `My individual role: I led end-to-end, set scope and critical decisions, and acted as single-threaded owner. My personal responsibility was to deliver completely redesigned Transparency Portal in 4 months (political deadline vs. 6 months technical estimate) without compromising privacy, security or legal compliance. I established clear goals that would be demanded directly from me: reduce requests via Freedom of Information Act by 60%, reach 10,000 unique accesses/month that I would monitor in first 3 months, zero privacy incidents under my management, and query response time < 3 seconds. I knew I needed to quickly learn completely new domains (public governance, sectoral LGPD, open data architecture) for individual success.`,
    a: `I prioritized citizen-centric transparency, aligned complex stakeholders, made political-technical trade-offs, and removed legal blockers. First: I mapped real citizen needs by interviewing 18 investigative journalists, 12 Court of Accounts auditors, and analyzing 240 Freedom of Information requests from last 12 months. I identified top 5 demands: (1) detailed budget execution by program, (2) active contracts with suppliers, (3) payroll evolution by department, (4) ongoing procurement with status, (5) transfers to municipalities. I designed MVP focused on these 5 use cases with granular drill-down. Second: I invested 80 hours over 3 weeks studying LGPD applied to public sector, open data architecture (Open Data Charter standards), and K-anonymity anonymization techniques. I attended 4 webinars from Federal Comptroller's Office on active transparency and read 8 legal opinions from other states on data exposure limits. I created legal risk matrix classifying each data field into 4 levels (unrestricted public, anonymized public, aggregated public, confidential). Third: I structured multi-stakeholder governance with weekly meetings involving legal, Court of Accounts, Public Prosecutor and civil society (Digital Bar Association). Each architecture decision I made passed through cross-validation. I created 12 specific anonymization homologation tests (example: ensure no query returned less than 5 aggregated records to avoid identification). Biggest challenge was conflict between Court of Accounts' demand for total transparency versus legal's data protection. Court wanted all public servants' CPF visible; legal prohibited by LGPD. I spent 2 weeks negotiating compromise solution: I published salary ranges + position + department without personal identification, but created restricted access with justification for audits. I presented technical-legal opinion that convinced both sides.`,
    r: `I delivered redesigned portal in 3.8 months (5% before political deadline). I personally reached 14,200 unique accesses/month that I monitored in first 3 months, exceeding my 10k goal by 42%. I reduced requests via Freedom of Information Act by 67% (from 340 to 112 lawsuits/year), saving 480h/year of manual service work (R$ 94k considering public servant cost). Average query response time I optimized was 1.8 seconds (40% better than 3s goal). I maintained zero privacy incidents or leaks in 18 months post-launch operation. Court of Accounts audit in August/2023 classified portal I created as 'state reference' and data was reused by 23 municipalities in Rio Grande do Sul. Journalists published 47 investigative reports based on portal data I made available in first 6 months (vs. 8 reports/year before). Satisfaction NPS with state transparency rose from 31 to 58 (Datafolha/Court of Accounts survey). My learning ROI was transformative: sectoral LGPD knowledge I acquired was applied by me to 4 other SEFAZ projects, generating cumulative savings of R$ 380k in avoided external consultancies. Portal I built became base for 3 subsequent initiatives (COVID Dashboard, Grants Transparency, Procurement Portal).`,
    l: `I learned that leaving technical and political comfort zone accelerates maturity exponentially when there's disciplined investment in structured learning and governance mechanisms. I discovered that legal-political complexity requires time for me to build relationships and trust - can't be solved with technical excellence alone. Biggest insight was that citizen transparency (Customer Obsession applied to public sector) creates natural alignment between conflicting stakeholders - when I focused on citizen value, Court of Accounts and legal converged. Today, whenever I face unknown domain with high risk, I first ask: 'Who are the reference experts?' and invest 20% of timeline in intensive learning before executing, instead of learning 'by doing' and fixing expensive mistakes.`
  },
  fups: [
    {
        "q": "Quais riscos de exposição pública você mapeou?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "What public-exposure risks did you map?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como articulou múltiplas áreas e externos?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you coordinate multiple areas and externals?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como o MVP acelerou a entrega sem perder qualidade?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did MVP accelerate delivery without losing quality?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que métricas de sucesso acompanhou?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which success metrics did you track?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como tratou privacidade/anonimização?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you handle privacy/anonymization?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Houve incidentes/quase-incidentes?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Any incidents/near misses?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como escalou/reutilizou a solução?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you scale/reuse the solution?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Que lições políticas aplicou depois?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "Which political lessons did you apply later?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Se refizesse, que governança mudaria?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "If redoing, what governance would you change?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    },
    {
        "q": "Como garantiu sustentabilidade pós-lançamento?",
        "a": "Eu descrevi a decisão, os critérios e a evidência, conectando ao impacto no cliente/operação. Usei dados e mecanismos para mitigar riscos e sustentar escala.",
        "q_en": "How did you ensure post-launch sustainability?",
        "a_en": "I described the decision, criteria, and evidence, tied to customer/operations impact. I used data and mechanisms to mitigate risk and sustain scale."
    }
]
};

export default case_5;
