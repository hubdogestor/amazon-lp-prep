const disagree_and_commit = {
  "id": "disagree_and_commit",
  "name": "Ser firme, discordar e se comprometer",
  "cases": [
    {
      "title": "ADR e Decisão de Arquitetura Híbrida (Next)",
      "pt": {
        "s": "No desenho da arquitetura do Banco Digital Next, times de segurança defendiam on-premise total; times de produto, nuvem total. A polarização travou decisões críticas.",
        "t": "Minha missão era: Conduzir a decisão técnica com base em fatos, discordar frontalmente quando necessário e, após a decisão, unir todos sob um único compromisso.",
        "a": "Liderei um processo decisório estruturado (ADR) com critérios e pesos. Defendi a arquitetura híbrida com dados de latência, compliance e TTM. Houve discordâncias duras; registrei as objeções e tomei a decisão como DRI. Depois, publiquei o 'Commit Plan': quem faz o quê, quando, independendo de preferências pessoais.",
        "r": "Decisão implementada em 12 semanas; time alinhado; lançamento dentro do prazo regulatório. Não houve mais reabertura do tema.",
        "l": "Aprendi que backbone é discordar com respeito e assumir a decisão. Compromisso é executar a decisão como se fosse sua, mesmo quando não era sua preferência. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "While designing Banco Digital Next's architecture, security pushed for full onprem; product pushed for full cloud. Polarization stalled critical calls.",
        "t": "Drive the technical decision on facts, disagree openly when needed, and, once decided, rally everyone around a single commitment.",
        "a": "I led a structured ADR process with criteria and weights. I championed hybrid cloud with latency, compliance, and TTM data. Disagreements were tough; I recorded objections and made the call as the DRI. Then I published the Commit Planwho does what, whenregardless of prior preferences.",
        "r": "Decision implemented in 12 weeks; team aligned; launch met regulatory timeline. The topic was not reopened.",
        "l": "Backbone is respectful dissent and owning the call. Commit is executing the decision as if it were yours, even when it wasn't your first choice."
      },      "fup": [
        {
          "q": "Como você evitou 'síndrome da reunião infinita'?",
          "a": "Limitei o ADR a 2 ciclos com dados novos; depois disso, decisão do DRI com registro público.",
          "q_en": "How did you avoid 'infinite meeting syndrome'?",
          "a_en": "I limited the ADR to 2 cycles with new data; after that, DRI decision with public record."
        },
        {
          "q": "Que evidência técnica foi definitiva?",
          "a": "Latência medida em protótipo e requisitos de dados sensíveis sob BACEN, suportando o híbrido.",
          "q_en": "What technical evidence was decisive?",
          "a_en": "Measured latency in prototype and sensitive data requirements under BACEN, supporting the hybrid."
        },
        {
          "q": "Como garantiu alinhamento pós-decisão?",
          "a": "Commit Plan público, metas por squad e check-ins quinzenais.",
          "q_en": "How did you ensure post-decision alignment?",
          "a_en": "Public Commit Plan, squad goals, and bi-weekly check-ins."
        },
        {
          "q": "Houve retrabalho por insistir demais?",
          "a": "Não; objeções foram registradas e mitigadas antes da execução.",
          "q_en": "Was there rework from insisting too much?",
          "a_en": "No; objections were recorded and mitigated before execution."
        },
        {
          "q": "Como tratou resistências silenciosas?",
          "a": "Mapeei riscos de sabotagem inadvertida e criei pares 'advogado do diabo'/owner por stream.",
          "q_en": "How did you handle silent resistance?",
          "a_en": "I mapped risks of inadvertent sabotage and created 'devil's advocate'/owner pairs per stream."
        },        {
          "q": "Qual foi sua maior autocrítica no processo?",
          "a": "Poderia ter trago a Engenharia de Plataforma 1 sprint antes.",
          "q_en": "What was your biggest self-criticism in the process?",
          "a_en": "I could have brought Platform Engineering in 1 sprint earlier."
        },
        {
          "q": "Como mediu adesão real ao 'commit'?",
          "a": "Entrega por marco e ausência de tentativas de reabrir decisão sem novos dados.",
          "q_en": "How did you measure real adherence to the 'commit'?",
          "a_en": "Delivery per milestone and absence of attempts to reopen decision without new data."
        },
        {
          "q": "Que princípio te guiou?",
          "a": "Desacordo na sala; compromisso no corredor. Divergir não é dividir.",
          "q_en": "What principle guided you?",
          "a_en": "Disagreement in the room; commitment in the hallway. Diverging is not dividing."
        },
        {
          "q": "Como lidou com um stakeholder sênior contrário?",
          "a": "Ofereci experimento de reversibilidade limitada e critérios objetivos de sucesso.",
          "q_en": "How did you handle a contrary senior stakeholder?",
          "a_en": "I offered a limited reversibility experiment and objective success criteria."
        },
        {
          "q": "O que faria diferente?",
          "a": "Ter explicitado upfront o prazo do ADR para criar senso de urgência.",
          "q_en": "What would you do differently?",
          "a_en": "I would have made the ADR deadline explicit upfront to create urgency."
        }
      ]
    },    {
      "title": "Dizer 'não' com dados e apoiar o plano aprovado (SEFAZ-RS)",
      "pt": {
        "s": "No PMO da SEFAZ-RS, uma iniciativa popular entre áreas queria seguir adiante apesar de dados fracos de impacto fiscal.",
        "t": "Minha missão era: Sustentar o 'não' com coragem e dados, e depois se comprometer com a alternativa aprovada.",
        "a": "Eu apresentei análise de custo-benefício com sensibilidade e mostrei risco de oportunidade. Propus alternativa com impacto fiscal comprovado e cronograma realista. Após decisão contrária ao projeto popular, conduzi o alinhamento público e apoiei a execução como sponsor adjunto.",
        "r": "Portfólio reequilibrado; +R$ 48 mi em impacto fiscal anualizado; cultura passou a respeitar 'nãos' bem fundamentados.",
        "l": "Aprendi que dizer 'não' é parte do trabalho; o 'commit' é não sabotar o plano aprovado e ajudar a fazê-lo dar certo. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "In SEFAZ-RS' PMO, a popular initiative had weak fiscal-impact data yet pushed to proceed.",
        "t": "Hold the 'no' with courage and data, then commit to the approved alternative.",
        "a": "I presented a costbenefit and sensitivity analysis, highlighting opportunity risk. I proposed an alternative with proven fiscal impact and realistic schedule. After the decision against the popular project, I publicly aligned and supported execution as a co-sponsor.",
        "r": "Rebalanced portfolio; +R$ 48M annualized fiscal impact; culture learned to respect well-founded 'no's.",
        "l": "Saying 'no' is part of the job; the commit is not sabotaging the approved plan and helping it succeed."
      },      "fup": [
        {
          "q": "Como você evitou desgaste político?",
          "a": "Dados transparentes e alternativa viável; foco no objetivo fiscal, não em preferências.",
          "q_en": "How did you avoid political wear?",
          "a_en": "Transparent data and viable alternative; focus on fiscal objective, not preferences."
        },
        {
          "q": "Qual foi a reação inicial e como endereçou?",
          "a": "Frustração. Criei um fórum de Q&A público e incorporei sugestões viáveis à alternativa.",
          "q_en": "What was the initial reaction and how did you address it?",
          "a_en": "Frustration. I created a public Q&A forum and incorporated viable suggestions into the alternative."
        },
        {
          "q": "Como garantiu execução do plano alternativo?",
          "a": "Designação clara de owners, milestones e benefícios esperados.",
          "q_en": "How did you ensure execution of the alternative plan?",
          "a_en": "Clear designation of owners, milestones, and expected benefits."
        },
        {
          "q": "Como mediu que o 'não' foi aceito?",
          "a": "Diminuição de tentativas de reabrir o tema e engajamento nos marcos da alternativa.",
          "q_en": "How did you measure that the 'no' was accepted?",
          "a_en": "Decreased attempts to reopen the topic and engagement in the alternative's milestones."
        },
        {
          "q": "Qual foi o maior risco do 'não'?",
          "a": "Perder aliados. Compensei com comunicação 1:1 e quick wins.",
          "q_en": "What was the biggest risk of the 'no'?",
          "a_en": "Losing allies. I compensated with 1:1 communication and quick wins."
        },        {
          "q": "Houve recuo?",
          "a": "Não; segui os critérios de governança e mantive a decisão com respeito.",
          "q_en": "Was there any backing down?",
          "a_en": "No; I followed governance criteria and maintained the decision with respect."
        },
        {
          "q": "Como registrou a decisão?",
          "a": "Ata com ADR e plano de comunicação anexos.",
          "q_en": "How did you record the decision?",
          "a_en": "Minutes with ADR and communication plan attached."
        },
        {
          "q": "Que trade-off fez?",
          "a": "Tempo investido em comunicação para reduzir ruído e resistência.",
          "q_en": "What trade-off did you make?",
          "a_en": "Time invested in communication to reduce noise and resistance."
        },
        {
          "q": "Qual aprendizado?",
          "a": "'Não' com alternativa concreta é mais aceito que 'não' puro.",
          "q_en": "What was the learning?",
          "a_en": "'No' with concrete alternative is more accepted than pure 'no'."
        },
        {
          "q": "O que faria diferente?",
          "a": "Mapear influenciadores informais antes para preparar terreno.",
          "q_en": "What would you do differently?",
          "a_en": "Map informal influencers beforehand to prepare the ground."
        }
      ]
    }
  ]
};

export default disagree_and_commit;