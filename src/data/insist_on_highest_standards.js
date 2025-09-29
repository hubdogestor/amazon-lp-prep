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
        "t": "Raise end‑to‑end quality standards without slowing delivery.",
        "a": "I set Definition of Ready/Done with objective criteria, minimum automated tests, checklist‑based code review, and CI/CD quality gates. Appointed a squad quality owner.",
        "r": "−23% rework; −31% production incidents; stable lead time.",
        "l": "High standards are systems work: clarity, automation, and visible ownership."
      },
      "fup": [
        {
          "q": "Como evitou burocracia?",
          "a": "Critérios mínimos e automação; reuniões substituídas por evidências no pipeline."
        },
        {
          "q": "Qual métrica chave?",
          "a": "Taxa de retrabalho e defeitos por release."
        },
        {
          "q": "Houve queda de velocidade?",
          "a": "Não significativa; previsibilidade aumentou."
        },
        {
          "q": "Como obteve buy‑in?",
          "a": "Mostrei custo do retrabalho e quick wins em 2 sprints."
        },
        {
          "q": "Que checklist usou?",
          "a": "Segurança, acessibilidade, performance e logs mínimos."
        },
        {
          "q": "Como tratou exceções?",
          "a": "Waivers temporários com data de expiração."
        },
        {
          "q": "Quem é o dono da qualidade?",
          "a": "Squad tem quality owner; responsabilidade é coletiva."
        },
        {
          "q": "Qual erro cometeu?",
          "a": "Critérios detalhados demais na 1ª versão; simplifiquei após feedback."
        },
        {
          "q": "Que automação mais ajudou?",
          "a": "Testes de contrato de API e linting."
        },
        {
          "q": "O que faria diferente?",
          "a": "Adicionar testes de E2E visuais mais cedo."
        }
      ]
    },
    {
      "title": "Relatórios com Métricas Verdade e Selo de Qualidade",
      "pt": {
        "s": "Relatórios executivos variavam em formato e precisão; decisões eram tomadas com dados inconsistentes.",
        "t": "Minha missão era: Padronizar e elevar padrão de relatórios para decisões confiáveis.",
        "a": "Eu modelo único de narrativa com ‘métricas verdade’, glossary de termos, revisão por pares e selo de qualidade. Automatizei a extração e criei trilha de auditoria.",
        "r": "Queda de 40% em divergências; decisões mais rápidas; confiança ampliada. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que padrão alto em dados começa por semântica comum e fonte única da verdade. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "Executive reports varied in format and accuracy; decisions relied on inconsistent data.",
        "t": "Standardize and raise reporting standards for reliable decisions.",
        "a": "Single narrative model with ‘true metrics’, glossary, peer review, and a quality seal. Automated extraction and added audit trails.",
        "r": "−40% divergences; faster decisions; increased trust.",
        "l": "High data standards start with shared semantics and a single source of truth."
      },
      "fup": [
        {
          "q": "Como definiu ‘métrica verdade’?",
          "a": "Dicionário com owner por métrica e SQL de referência versionado."
        },
        {
          "q": "Como garantiu aderência?",
          "a": "Relatórios sem selo não iam para comitês."
        },
        {
          "q": "Que ferramenta ajudou?",
          "a": "Catálogo de dados e jobs agendados de validação."
        },
        {
          "q": "Houve resistência?",
          "a": "Inicial; caiu após ganhos visíveis."
        },
        {
          "q": "Como tratou exceções?",
          "a": "Janelas de transição com mapeamento de campos antigos."
        },
        {
          "q": "Qual métrica de sucesso?",
          "a": "Redução de divergências e retrabalho analítico."
        },
        {
          "q": "Como escalou?",
          "a": "Templates, treinamento e comunidade de prática."
        },
        {
          "q": "Que aprendizado?",
          "a": "Nome igual com cálculo diferente é a raiz do caos."
        },
        {
          "q": "Trade‑off?",
          "a": "Tempo inicial maior para padronizar, ganho contínuo depois."
        },
        {
          "q": "O que faria diferente?",
          "a": "Mapearia stakeholders-chave antes para patrocínio mais forte."
        }
      ]
    }
  ]
};

export default insist_on_highest_standards;
