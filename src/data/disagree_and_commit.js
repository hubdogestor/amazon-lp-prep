const disagree_and_commit = {
  principle: {
    title: "Ser firme, discordar e se comprometer",
    title_en: "Have Backbone; Disagree and Commit",
    description: "Os l�deres s�o obrigados a desafiar respeitosamente as decis�es quando discordam, mesmo quando isso � desconfort�vel. Os l�deres t�m convic��o e s�o tenazes. Uma vez que uma decis�o � determinada, eles se comprometem totalmente.",
    description_en: "Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Leaders have conviction and are tenacious. Once a decision is determined, they commit wholly.",
    icon: ""
  },
  "id": "disagree_and_commit",
  "name": "Ser firme, discordar e se comprometer",
  "cases": [
    {
      "title": "ADR e Decis�o de Arquitetura H�brida (Next)",
      "pt": {
        "s": "No desenho da arquitetura do Banco Digital Next, times de seguran�a defendiam on-premise total; times de produto, nuvem total. A polariza��o travou decis�es cr�ticas.",
        "t": "Minha miss�o era: Conduzir a decis�o t�cnica com base em fatos, discordar frontalmente quando necess�rio e, ap�s a decis�o, unir todos sob um �nico compromisso.",
        "a": "Liderei um processo decis�rio estruturado (ADR) com crit�rios e pesos. Defendi a arquitetura h�brida com dados de lat�ncia, compliance e TTM. Houve discord�ncias duras; registrei as obje��es e tomei a decis�o como DRI. Depois, publiquei o 'Commit Plan': quem faz o qu�, quando, independendo de prefer�ncias pessoais.",
        "r": "Decis�o implementada em 12 semanas; time alinhado; lan�amento dentro do prazo regulat�rio. N�o houve mais reabertura do tema.",
        "l": "Aprendi que backbone � discordar com respeito e assumir a decis�o. Compromisso � executar a decis�o como se fosse sua, mesmo quando n�o era sua prefer�ncia. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "While designing Banco Digital Next's architecture, security pushed for full onprem; product pushed for full cloud. Polarization stalled critical calls.",
        "t": "Drive the technical decision on facts, disagree openly when needed, and, once decided, rally everyone around a single commitment.",
        "a": "I led a structured ADR process with criteria and weights. I championed hybrid cloud with latency, compliance, and TTM data. Disagreements were tough; I recorded objections and made the call as the DRI. Then I published the Commit Planwho does what, whenregardless of prior preferences.",
        "r": "Decision implemented in 12 weeks; team aligned; launch met regulatory timeline. The topic was not reopened.",
        "l": "Backbone is respectful dissent and owning the call. Commit is executing the decision as if it were yours, even when it wasn't your first choice."
      },      "fup": [
        {
          "q": "Como voc� evitou 's�ndrome da reuni�o infinita'?",
          "a": "Limitei o ADR a 2 ciclos com dados novos; depois disso, decis�o do DRI com registro p�blico.",
          "q_en": "How did you avoid 'infinite meeting syndrome'?",
          "a_en": "I limited the ADR to 2 cycles with new data; after that, DRI decision with public record."
        },
        {
          "q": "Que evid�ncia t�cnica foi definitiva?",
          "a": "Lat�ncia medida em prot�tipo e requisitos de dados sens�veis sob BACEN, suportando o h�brido.",
          "q_en": "What technical evidence was decisive?",
          "a_en": "Measured latency in prototype and sensitive data requirements under BACEN, supporting the hybrid."
        },
        {
          "q": "Como garantiu alinhamento p�s-decis�o?",
          "a": "Commit Plan p�blico, metas por squad e check-ins quinzenais.",
          "q_en": "How did you ensure post-decision alignment?",
          "a_en": "Public Commit Plan, squad goals, and bi-weekly check-ins."
        },
        {
          "q": "Houve retrabalho por insistir demais?",
          "a": "N�o; obje��es foram registradas e mitigadas antes da execu��o.",
          "q_en": "Was there rework from insisting too much?",
          "a_en": "No; objections were recorded and mitigated before execution."
        },
        {
          "q": "Como tratou resist�ncias silenciosas?",
          "a": "Mapeei riscos de sabotagem inadvertida e criei pares 'advogado do diabo'/owner por stream.",
          "q_en": "How did you handle silent resistance?",
          "a_en": "I mapped risks of inadvertent sabotage and created 'devil's advocate'/owner pairs per stream."
        },        {
          "q": "Qual foi sua maior autocr�tica no processo?",
          "a": "Poderia ter trago a Engenharia de Plataforma 1 sprint antes.",
          "q_en": "What was your biggest self-criticism in the process?",
          "a_en": "I could have brought Platform Engineering in 1 sprint earlier."
        },
        {
          "q": "Como mediu ades�o real ao 'commit'?",
          "a": "Entrega por marco e aus�ncia de tentativas de reabrir decis�o sem novos dados.",
          "q_en": "How did you measure real adherence to the 'commit'?",
          "a_en": "Delivery per milestone and absence of attempts to reopen decision without new data."
        },
        {
          "q": "Que princ�pio te guiou?",
          "a": "Desacordo na sala; compromisso no corredor. Divergir n�o � dividir.",
          "q_en": "What principle guided you?",
          "a_en": "Disagreement in the room; commitment in the hallway. Diverging is not dividing."
        },
        {
          "q": "Como lidou com um stakeholder s�nior contr�rio?",
          "a": "Ofereci experimento de reversibilidade limitada e crit�rios objetivos de sucesso.",
          "q_en": "How did you handle a contrary senior stakeholder?",
          "a_en": "I offered a limited reversibility experiment and objective success criteria."
        },
        {
          "q": "O que faria diferente?",
          "a": "Ter explicitado upfront o prazo do ADR para criar senso de urg�ncia.",
          "q_en": "What would you do differently?",
          "a_en": "I would have made the ADR deadline explicit upfront to create urgency."
        }
      ]
    },    {
      "title": "Dizer 'n�o' com dados e apoiar o plano aprovado (SEFAZ-RS)",
      "pt": {
        "s": "No PMO da SEFAZ-RS, uma iniciativa popular entre �reas queria seguir adiante apesar de dados fracos de impacto fiscal.",
        "t": "Minha miss�o era: Sustentar o 'n�o' com coragem e dados, e depois se comprometer com a alternativa aprovada.",
        "a": "Eu apresentei an�lise de custo-benef�cio com sensibilidade e mostrei risco de oportunidade. Propus alternativa com impacto fiscal comprovado e cronograma realista. Ap�s decis�o contr�ria ao projeto popular, conduzi o alinhamento p�blico e apoiei a execu��o como sponsor adjunto.",
        "r": "Portf�lio reequilibrado; +R$ 48 mi em impacto fiscal anualizado; cultura passou a respeitar 'n�os' bem fundamentados.",
        "l": "Aprendi que dizer 'n�o' � parte do trabalho; o 'commit' � n�o sabotar o plano aprovado e ajudar a faz�-lo dar certo. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "In SEFAZ-RS' PMO, a popular initiative had weak fiscal-impact data yet pushed to proceed.",
        "t": "Hold the 'no' with courage and data, then commit to the approved alternative.",
        "a": "I presented a costbenefit and sensitivity analysis, highlighting opportunity risk. I proposed an alternative with proven fiscal impact and realistic schedule. After the decision against the popular project, I publicly aligned and supported execution as a co-sponsor.",
        "r": "Rebalanced portfolio; +R$ 48M annualized fiscal impact; culture learned to respect well-founded 'no's.",
        "l": "Saying 'no' is part of the job; the commit is not sabotaging the approved plan and helping it succeed."
      },      "fup": [
        {
          "q": "Como voc� evitou desgaste pol�tico?",
          "a": "Dados transparentes e alternativa vi�vel; foco no objetivo fiscal, n�o em prefer�ncias.",
          "q_en": "How did you avoid political wear?",
          "a_en": "Transparent data and viable alternative; focus on fiscal objective, not preferences."
        },
        {
          "q": "Qual foi a rea��o inicial e como endere�ou?",
          "a": "Frustra��o. Criei um f�rum de Q&A p�blico e incorporei sugest�es vi�veis � alternativa.",
          "q_en": "What was the initial reaction and how did you address it?",
          "a_en": "Frustration. I created a public Q&A forum and incorporated viable suggestions into the alternative."
        },
        {
          "q": "Como garantiu execu��o do plano alternativo?",
          "a": "Designa��o clara de owners, milestones e benef�cios esperados.",
          "q_en": "How did you ensure execution of the alternative plan?",
          "a_en": "Clear designation of owners, milestones, and expected benefits."
        },
        {
          "q": "Como mediu que o 'n�o' foi aceito?",
          "a": "Diminui��o de tentativas de reabrir o tema e engajamento nos marcos da alternativa.",
          "q_en": "How did you measure that the 'no' was accepted?",
          "a_en": "Decreased attempts to reopen the topic and engagement in the alternative's milestones."
        },
        {
          "q": "Qual foi o maior risco do 'n�o'?",
          "a": "Perder aliados. Compensei com comunica��o 1:1 e quick wins.",
          "q_en": "What was the biggest risk of the 'no'?",
          "a_en": "Losing allies. I compensated with 1:1 communication and quick wins."
        },        {
          "q": "Houve recuo?",
          "a": "N�o; segui os crit�rios de governan�a e mantive a decis�o com respeito.",
          "q_en": "Was there any backing down?",
          "a_en": "No; I followed governance criteria and maintained the decision with respect."
        },
        {
          "q": "Como registrou a decis�o?",
          "a": "Ata com ADR e plano de comunica��o anexos.",
          "q_en": "How did you record the decision?",
          "a_en": "Minutes with ADR and communication plan attached."
        },
        {
          "q": "Que trade-off fez?",
          "a": "Tempo investido em comunica��o para reduzir ru�do e resist�ncia.",
          "q_en": "What trade-off did you make?",
          "a_en": "Time invested in communication to reduce noise and resistance."
        },
        {
          "q": "Qual aprendizado?",
          "a": "'N�o' com alternativa concreta � mais aceito que 'n�o' puro.",
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
