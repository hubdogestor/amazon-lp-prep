const insist_on_highest_standards = {
  "id": "insist_on_highest_standards",
  "name": "Insistir nos Mais Altos Padrões",
  "cases": [
    {
      "title": "Quality Gates e DoD/DoR em Squads",
      "pt": {
        "s": "Defeitos recorrentes em entregas digitais geravam retrabalho e desgaste com áreas de negócio.",
        "t": "Minha missão era: Elevar padrões de qualidade de ponta a ponta sem desacelerar a entrega.",
        "a": "Eu instituí Definition of Ready/Done com critérios objetivos, testes automatizados mínimos, code review com checklist e 'quality gates' no CI/CD. Criei papel de 'quality owner' por squad.",
        "r": "Retrabalho -23%; incidentes em produção -31%; lead time estável. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que padrões altos são desenho de sistema: clareza, automação e donos visíveis. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "Recurring defects in digital deliveries caused rework and friction with business areas.",
        "t": "Raise endtoend quality standards without slowing delivery.",
        "a": "I set Definition of Ready/Done with objective criteria, minimum automated tests, checklistbased code review, and CI/CD quality gates. Appointed a squad quality owner.",
        "r": "23% rework; 31% production incidents; stable lead time.",
        "l": "High standards are systems work: clarity, automation, and visible ownership."
      },      "fup": [
        {
          "q": "Como evitou burocracia?",
          "a": "Critérios mínimos e automação; reuniões substituídas por evidências no pipeline.",
          "q_en": "How did you avoid bureaucracy?",
          "a_en": "Minimum criteria and automation; meetings replaced by pipeline evidence."
        },
        {
          "q": "Qual métrica chave?",
          "a": "Taxa de retrabalho e defeitos por release.",
          "q_en": "What key metric?",
          "a_en": "Rework rate and defects per release."
        },
        {
          "q": "Houve queda de velocidade?",
          "a": "Não significativa; previsibilidade aumentou.",
          "q_en": "Was there a velocity drop?",
          "a_en": "Not significant; predictability increased."
        },
        {
          "q": "Como obteve buyin?",
          "a": "Mostrei custo do retrabalho e quick wins em 2 sprints.",
          "q_en": "How did you get buy-in?",
          "a_en": "I showed rework cost and quick wins in 2 sprints."
        },
        {
          "q": "Que checklist usou?",
          "a": "Segurança, acessibilidade, performance e logs mínimos.",
          "q_en": "What checklist did you use?",
          "a_en": "Security, accessibility, performance, and minimum logs."
        },        {
          "q": "Como tratou exceções?",
          "a": "Waivers temporários com data de expiração.",
          "q_en": "How did you handle exceptions?",
          "a_en": "Temporary waivers with expiration dates."
        },
        {
          "q": "Quem é o dono da qualidade?",
          "a": "Squad tem quality owner; responsabilidade é coletiva.",
          "q_en": "Who owns quality?",
          "a_en": "Squad has a quality owner; responsibility is collective."
        },
        {
          "q": "Qual erro cometeu?",
          "a": "Critérios detalhados demais na 1ª versão; simplifiquei após feedback.",
          "q_en": "What mistake did you make?",
          "a_en": "Too detailed criteria in v1; I simplified after feedback."
        },
        {
          "q": "Que automação mais ajudou?",
          "a": "Testes de contrato de API e linting.",
          "q_en": "What automation helped most?",
          "a_en": "API contract tests and linting."
        },
        {
          "q": "O que faria diferente?",
          "a": "Adicionar testes de E2E visuais mais cedo.",
          "q_en": "What would you do differently?",
          "a_en": "Add visual E2E tests earlier."
        }
      ]
    },    {
      "title": "Relatórios com Métricas Verdade e Selo de Qualidade",
      "pt": {
        "s": "Relatórios executivos variavam em formato e precisão; decisões eram tomadas com dados inconsistentes.",
        "t": "Minha missão era: Padronizar e elevar padrão de relatórios para decisões confiáveis.",
        "a": "Eu modelo único de narrativa com 'métricas verdade', glossary de termos, revisão por pares e selo de qualidade. Automatizei a extração e criei trilha de auditoria.",
        "r": "Queda de 40% em divergências; decisões mais rápidas; confiança ampliada. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que padrão alto em dados começa por semântica comum e fonte única da verdade. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "Executive reports varied in format and accuracy; decisions relied on inconsistent data.",
        "t": "Standardize and raise reporting standards for reliable decisions.",
        "a": "Single narrative model with 'true metrics', glossary, peer review, and a quality seal. Automated extraction and added audit trails.",
        "r": "40% divergences; faster decisions; increased trust.",
        "l": "High data standards start with shared semantics and a single source of truth."
      },      "fup": [
        {
          "q": "Como definiu 'métrica verdade'?",
          "a": "Dicionário com owner por métrica e SQL de referência versionado.",
          "q_en": "How did you define 'true metric'?",
          "a_en": "Dictionary with owner per metric and versioned reference SQL."
        },
        {
          "q": "Como garantiu aderência?",
          "a": "Relatórios sem selo não iam para comitês.",
          "q_en": "How did you ensure compliance?",
          "a_en": "Reports without a seal didn't go to committees."
        },
        {
          "q": "Que ferramenta ajudou?",
          "a": "Catálogo de dados e jobs agendados de validação.",
          "q_en": "What tool helped?",
          "a_en": "Data catalog and scheduled validation jobs."
        },
        {
          "q": "Houve resistência?",
          "a": "Inicial; caiu após ganhos visíveis.",
          "q_en": "Was there resistance?",
          "a_en": "Initially; it dropped after visible gains."
        },
        {
          "q": "Como tratou exceções?",
          "a": "Janelas de transição com mapeamento de campos antigos.",
          "q_en": "How did you handle exceptions?",
          "a_en": "Transition windows with legacy field mapping."
        },        {
          "q": "Qual métrica de sucesso?",
          "a": "Redução de divergências e retrabalho analítico.",
          "q_en": "What success metric?",
          "a_en": "Reduction in divergences and analytical rework."
        },
        {
          "q": "Como escalou?",
          "a": "Templates, treinamento e comunidade de prática.",
          "q_en": "How did you scale?",
          "a_en": "Templates, training, and community of practice."
        },
        {
          "q": "Que aprendizado?",
          "a": "Nome igual com cálculo diferente é a raiz do caos.",
          "q_en": "What learning?",
          "a_en": "Same name with different calculation is the root of chaos."
        },
        {
          "q": "Tradeoff?",
          "a": "Tempo inicial maior para padronizar, ganho contínuo depois.",
          "q_en": "Trade-off?",
          "a_en": "Higher initial time to standardize, continuous gain after."
        },
        {
          "q": "O que faria diferente?",
          "a": "Mapearia stakeholders-chave antes para patrocínio mais forte.",
          "q_en": "What would you do differently?",
          "a_en": "I would map key stakeholders earlier for stronger sponsorship."
        }
      ]
    }
  ]
};

export default insist_on_highest_standards;