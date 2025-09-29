const insist_on_highest_standards = {
  principle: {
    title: "Insistir nos Mais Altos Padr�es",
    title_en: "Insist on the Highest Standards",
    description: "Os l�deres t�m padr�es implacavelmente altos - muitos podem pensar que esses padr�es s�o excessivamente altos. Os l�deres est�o continuamente elevando o padr�o e motivam suas equipes a entregar produtos, servi�os e processos de alta qualidade.",
    description_en: "Leaders have relentlessly high standards � many people may think these standards are unreasonably high. Leaders are continually raising the bar and drive their teams to deliver high quality products, services, and processes.",
    icon: ""
  },
  "id": "insist_on_highest_standards",
  "name": "Insistir nos mais altos padr�es",
  "cases": [
    {
      "title": "Quality Gates e DoD/DoR em Squads (Woop/Sicredi)",
      "pt": {
        "s": "Defeitos recorrentes em entregas digitais geravam retrabalho e desgaste com �reas de neg�cio.",
        "t": "Minha miss�o era: Elevar padr�es de qualidade de ponta a ponta sem desacelerar a entrega.",
        "a": "Eu institu� Definition of Ready/Done com crit�rios objetivos, testes automatizados m�nimos, code review com checklist e 'quality gates' no CI/CD. Criei papel de 'quality owner' por squad.",
        "r": "Retrabalho -23%; incidentes em produ��o -31%; lead time est�vel. (com baseline, meta e per�odo documentados em relat�rio executivo).",
        "l": "Aprendi que padr�es altos s�o desenho de sistema: clareza, automa��o e donos vis�veis. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
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
          "a": "Crit�rios m�nimos e automa��o; reuni�es substitu�das por evid�ncias no pipeline.",
          "q_en": "How did you avoid bureaucracy?",
          "a_en": "Minimum criteria and automation; meetings replaced by pipeline evidence."
        },
        {
          "q": "Qual m�trica chave?",
          "a": "Taxa de retrabalho e defeitos por release.",
          "q_en": "What key metric?",
          "a_en": "Rework rate and defects per release."
        },
        {
          "q": "Houve queda de velocidade?",
          "a": "N�o significativa; previsibilidade aumentou.",
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
          "a": "Seguran�a, acessibilidade, performance e logs m�nimos.",
          "q_en": "What checklist did you use?",
          "a_en": "Security, accessibility, performance, and minimum logs."
        },        {
          "q": "Como tratou exce��es?",
          "a": "Waivers tempor�rios com data de expira��o.",
          "q_en": "How did you handle exceptions?",
          "a_en": "Temporary waivers with expiration dates."
        },
        {
          "q": "Quem � o dono da qualidade?",
          "a": "Squad tem quality owner; responsabilidade � coletiva.",
          "q_en": "Who owns quality?",
          "a_en": "Squad has a quality owner; responsibility is collective."
        },
        {
          "q": "Qual erro cometeu?",
          "a": "Crit�rios detalhados demais na 1� vers�o; simplifiquei ap�s feedback.",
          "q_en": "What mistake did you make?",
          "a_en": "Too detailed criteria in v1; I simplified after feedback."
        },
        {
          "q": "Que automa��o mais ajudou?",
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
      "title": "Relat�rios com M�tricas Verdade e Selo de Qualidade (Unimed)",
      "pt": {
        "s": "Relat�rios executivos variavam em formato e precis�o; decis�es eram tomadas com dados inconsistentes.",
        "t": "Minha miss�o era: Padronizar e elevar padr�o de relat�rios para decis�es confi�veis.",
        "a": "Eu modelo �nico de narrativa com 'm�tricas verdade', glossary de termos, revis�o por pares e selo de qualidade. Automatizei a extra��o e criei trilha de auditoria.",
        "r": "Queda de 40% em diverg�ncias; decis�es mais r�pidas; confian�a ampliada. (com baseline, meta e per�odo documentados em relat�rio executivo).",
        "l": "Aprendi que padr�o alto em dados come�a por sem�ntica comum e fonte �nica da verdade. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "Executive reports varied in format and accuracy; decisions relied on inconsistent data.",
        "t": "Standardize and raise reporting standards for reliable decisions.",
        "a": "Single narrative model with 'true metrics', glossary, peer review, and a quality seal. Automated extraction and added audit trails.",
        "r": "40% divergences; faster decisions; increased trust.",
        "l": "High data standards start with shared semantics and a single source of truth."
      },      "fup": [
        {
          "q": "Como definiu 'm�trica verdade'?",
          "a": "Dicion�rio com owner por m�trica e SQL de refer�ncia versionado.",
          "q_en": "How did you define 'true metric'?",
          "a_en": "Dictionary with owner per metric and versioned reference SQL."
        },
        {
          "q": "Como garantiu ader�ncia?",
          "a": "Relat�rios sem selo n�o iam para comit�s.",
          "q_en": "How did you ensure compliance?",
          "a_en": "Reports without a seal didn't go to committees."
        },
        {
          "q": "Que ferramenta ajudou?",
          "a": "Cat�logo de dados e jobs agendados de valida��o.",
          "q_en": "What tool helped?",
          "a_en": "Data catalog and scheduled validation jobs."
        },
        {
          "q": "Houve resist�ncia?",
          "a": "Inicial; caiu ap�s ganhos vis�veis.",
          "q_en": "Was there resistance?",
          "a_en": "Initially; it dropped after visible gains."
        },
        {
          "q": "Como tratou exce��es?",
          "a": "Janelas de transi��o com mapeamento de campos antigos.",
          "q_en": "How did you handle exceptions?",
          "a_en": "Transition windows with legacy field mapping."
        },        {
          "q": "Qual m�trica de sucesso?",
          "a": "Redu��o de diverg�ncias e retrabalho anal�tico.",
          "q_en": "What success metric?",
          "a_en": "Reduction in divergences and analytical rework."
        },
        {
          "q": "Como escalou?",
          "a": "Templates, treinamento e comunidade de pr�tica.",
          "q_en": "How did you scale?",
          "a_en": "Templates, training, and community of practice."
        },
        {
          "q": "Que aprendizado?",
          "a": "Nome igual com c�lculo diferente � a raiz do caos.",
          "q_en": "What learning?",
          "a_en": "Same name with different calculation is the root of chaos."
        },
        {
          "q": "Tradeoff?",
          "a": "Tempo inicial maior para padronizar, ganho cont�nuo depois.",
          "q_en": "Trade-off?",
          "a_en": "Higher initial time to standardize, continuous gain after."
        },
        {
          "q": "O que faria diferente?",
          "a": "Mapearia stakeholders-chave antes para patroc�nio mais forte.",
          "q_en": "What would you do differently?",
          "a_en": "I would map key stakeholders earlier for stronger sponsorship."
        }
      ]
    }
  ]
};

export default insist_on_highest_standards;
