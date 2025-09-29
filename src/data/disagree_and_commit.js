const disagree_and_commit = {
  "id": "disagree_and_commit",
  "name": "Ser firme, discordar e se comprometer",
  "cases": [
    {
      "title": "ADR e Decisão de Arquitetura Híbrida (Next)",
      "pt": {
        "s": "No desenho da arquitetura do Banco Digital Next, times de segurança defendiam on-premise total; times de produto, nuvem total. A polarização travou decisões críticas.",
        "t": "Minha missão era: Conduzir a decisão técnica com base em fatos, discordar frontalmente quando necessário e, após a decisão, unir todos sob um único compromisso.",
        "a": "Liderei um processo decisório estruturado (ADR) com critérios e pesos. Defendi a arquitetura híbrida com dados de latência, compliance e TTM. Houve discordâncias duras; registrei as objeções e tomei a decisão como DRI. Depois, publiquei o ‘Commit Plan’: quem faz o quê, quando, independendo de preferências pessoais.",
        "r": "Decisão implementada em 12 semanas; time alinhado; lançamento dentro do prazo regulatório. Não houve mais reabertura do tema.",
        "l": "Aprendi que backbone é discordar com respeito e assumir a decisão. Compromisso é executar a decisão como se fosse sua, mesmo quando não era sua preferência. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "While designing Banco Digital Next’s architecture, security pushed for full on‑prem; product pushed for full cloud. Polarization stalled critical calls.",
        "t": "Drive the technical decision on facts, disagree openly when needed, and, once decided, rally everyone around a single commitment.",
        "a": "I led a structured ADR process with criteria and weights. I championed hybrid cloud with latency, compliance, and TTM data. Disagreements were tough; I recorded objections and made the call as the DRI. Then I published the Commit Plan—who does what, when—regardless of prior preferences.",
        "r": "Decision implemented in 12 weeks; team aligned; launch met regulatory timeline. The topic was not reopened.",
        "l": "Backbone is respectful dissent and owning the call. Commit is executing the decision as if it were yours, even when it wasn’t your first choice."
      },
      "fup": [
        {
          "q": "Como você evitou ‘síndrome da reunião infinita’?",
          "a": "Limitei o ADR a 2 ciclos com dados novos; depois disso, decisão do DRI com registro público."
        },
        {
          "q": "Que evidência técnica foi definitiva?",
          "a": "Latência medida em protótipo e requisitos de dados sensíveis sob BACEN, suportando o híbrido."
        },
        {
          "q": "Como garantiu alinhamento pós-decisão?",
          "a": "Commit Plan público, metas por squad e check-ins quinzenais."
        },
        {
          "q": "Houve retrabalho por insistir demais?",
          "a": "Não; objeções foram registradas e mitigadas antes da execução."
        },
        {
          "q": "Como tratou resistências silenciosas?",
          "a": "Mapeei riscos de sabotagem inadvertida e criei pares ‘advogado do diabo’/owner por stream."
        },
        {
          "q": "Qual foi sua maior autocrítica no processo?",
          "a": "Poderia ter trago a Engenharia de Plataforma 1 sprint antes."
        },
        {
          "q": "Como mediu adesão real ao ‘commit’?",
          "a": "Entrega por marco e ausência de tentativas de reabrir decisão sem novos dados."
        },
        {
          "q": "Que princípio te guiou?",
          "a": "Desacordo na sala; compromisso no corredor. Divergir não é dividir."
        },
        {
          "q": "Como lidou com um stakeholder sênior contrário?",
          "a": "Ofereci experimento de reversibilidade limitada e critérios objetivos de sucesso."
        },
        {
          "q": "O que faria diferente?",
          "a": "Ter explicitado upfront o prazo do ADR para criar senso de urgência."
        }
      ]
    },
    {
      "title": "Dizer 'não' com dados e apoiar o plano aprovado (SEFAZ-RS)",
      "pt": {
        "s": "No PMO da SEFAZ-RS, uma iniciativa popular entre áreas queria seguir adiante apesar de dados fracos de impacto fiscal.",
        "t": "Minha missão era: Sustentar o ‘não’ com coragem e dados, e depois se comprometer com a alternativa aprovada.",
        "a": "Eu apresentei análise de custo-benefício com sensibilidade e mostrei risco de oportunidade. Propus alternativa com impacto fiscal comprovado e cronograma realista. Após decisão contrária ao projeto popular, conduzi o alinhamento público e apoiei a execução como sponsor adjunto.",
        "r": "Portfólio reequilibrado; +R$ 48 mi em impacto fiscal anualizado; cultura passou a respeitar ‘nãos’ bem fundamentados.",
        "l": "Aprendi que dizer ‘não’ é parte do trabalho; o ‘commit’ é não sabotar o plano aprovado e ajudar a fazê-lo dar certo. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "In SEFAZ-RS’ PMO, a popular initiative had weak fiscal-impact data yet pushed to proceed.",
        "t": "Hold the ‘no’ with courage and data, then commit to the approved alternative.",
        "a": "I presented a cost–benefit and sensitivity analysis, highlighting opportunity risk. I proposed an alternative with proven fiscal impact and realistic schedule. After the decision against the popular project, I publicly aligned and supported execution as a co-sponsor.",
        "r": "Rebalanced portfolio; +R$ 48M annualized fiscal impact; culture learned to respect well-founded ‘no’s.",
        "l": "Saying ‘no’ is part of the job; the commit is not sabotaging the approved plan and helping it succeed."
      },
      "fup": [
        {
          "q": "Como você evitou desgaste político?",
          "a": "Dados transparentes e alternativa viável; foco no objetivo fiscal, não em preferências."
        },
        {
          "q": "Qual foi a reação inicial e como endereçou?",
          "a": "Frustração. Criei um fórum de Q&A público e incorporei sugestões viáveis à alternativa."
        },
        {
          "q": "Como garantiu execução do plano alternativo?",
          "a": "Designação clara de owners, milestones e benefícios esperados."
        },
        {
          "q": "Como mediu que o ‘não’ foi aceito?",
          "a": "Diminuição de tentativas de reabrir o tema e engajamento nos marcos da alternativa."
        },
        {
          "q": "Qual foi o maior risco do ‘não’?",
          "a": "Perder aliados. Compensei com comunicação 1:1 e quick wins."
        },
        {
          "q": "Houve recuo?",
          "a": "Não; segui os critérios de governança e mantive a decisão com respeito."
        },
        {
          "q": "Como registrou a decisão?",
          "a": "Ata com ADR e plano de comunicação anexos."
        },
        {
          "q": "Que trade-off fez?",
          "a": "Tempo investido em comunicação para reduzir ruído e resistência."
        },
        {
          "q": "Qual aprendizado?",
          "a": "‘Não’ com alternativa concreta é mais aceito que ‘não’ puro."
        },
        {
          "q": "O que faria diferente?",
          "a": "Mapear influenciadores informais antes para preparar terreno."
        }
      ]
    }
  ]
};

export default disagree_and_commit;
