const frugality = {
  principle: {
    title: "Parcim�nia",
    title_en: "Frugality",
    description: "Realizar mais com menos. As restri��es geram inventividade, autossufici�ncia e criatividade. N�o h� pontos extras por crescer o n�mero de funcion�rios, o tamanho do or�amento ou despesas fixas.",
    description_en: "Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention. There are no extra points for growing headcount, budget size, or fixed expense.",
    icon: ""
  },
  "id": "frugality",
  "name": "Frugalidade",
  "cases": [
    {
      "title": "Racionaliza��o de Stack de Relat�rios e Licen�as (SEFAZ-RS)",
      "pt": {
        "s": "No SEFAZ-RS, os custos de licen�as e infraestrutura de relat�rios cresciam sem controle, com solu��es sobrepostas e pouca padroniza��o.",
        "t": "Minha miss�o era: Reduzir o gasto anual recorrente em pelo menos 20% sem perder capacidade anal�tica e governan�a.",
        "a": "Eu mapeei contratos e uso real; consolidei ferramentas redundantes; movi relat�rios de baixa criticidade para stack open-source; criei pol�tica de lifecyle e de rightsizing; renegociei contratos com base em dados de uso. Padronizei templates e automa��es de extra��o.",
        "r": "Economia anualizada de 27%; redu��o de 35% em incidentes de vers�o divergente; tempo de atualiza��o de relat�rios-chave caiu 40%. (com baseline, meta e per�odo documentados em relat�rio executivo).",
        "l": "Aprendi que frugalidade � priorizar aloca��o eficiente, n�o cortar por cortar. Quando o uso real guia as decis�es, economizamos e ainda melhoramos o servi�o. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "At SEFAZ-RS, license and reporting infrastructure costs were growing unchecked, with overlapping solutions and little standardization.",
        "t": "Cut at least 20% of recurring annual spend without losing analytical capability or governance.",
        "a": "I mapped contracts and real usage; consolidated redundant tools; moved low-criticality reports to an open-source stack; defined lifecycle and rightsizing policies; renegotiated contracts based on usage data. Standardized templates and extraction automations.",
        "r": "27% annualized savings; 35% fewer version-drift incidents; 40% faster updates to key reports.",
        "l": "Frugality is efficient allocation, not blind cuts. When real usage drives decisions, you save and improve service quality."
      },      "fup": [
        {
          "q": "Como voc� identificou redund�ncias?",
          "a": "Invent�rio cruzado por funcionalidade e custo/uso; heatmap exp�s sobreposi��es claras.",
          "q_en": "How did you identify redundancies?",
          "a_en": "Cross-inventory by functionality and cost/usage; heatmap exposed clear overlaps."
        },
        {
          "q": "Qual foi a negocia��o mais relevante?",
          "a": "Licen�as superdimensionadas: reduzi 20% com cl�usula de el�stico para picos sem multa.",
          "q_en": "What was the most relevant negotiation?",
          "a_en": "Oversized licenses: reduced 20% with elastic clause for peaks without penalty."
        },
        {
          "q": "Quais riscos de migra��o voc� aceitou?",
          "a": "Mover relat�rios de baixa criticidade primeiro; mantive runbook de rollback.",
          "q_en": "What migration risks did you accept?",
          "a_en": "Move low-criticality reports first; kept rollback runbook."
        },
        {
          "q": "Como evitou shadow IT ap�s cortes?",
          "a": "Portal �nico de relat�rios e pol�tica clara de solicita��es com SLA.",
          "q_en": "How did you avoid shadow IT after cuts?",
          "a_en": "Single reporting portal and clear request policy with SLA."
        },
        {
          "q": "Que m�trica guiou as escolhas?",
          "a": "Custo por relat�rio consumido/m�s e % de licen�as ativas/usu�rio.",
          "q_en": "What metric guided the choices?",
          "a_en": "Cost per report consumed/month and % active licenses/user."
        },        {
          "q": "Houve impacto na qualidade?",
          "a": "Melhorou; padroniza��o reduziu retrabalho e erros de vers�o.",
          "q_en": "Was there an impact on quality?",
          "a_en": "It improved; standardization reduced rework and version errors."
        },
        {
          "q": "Como priorizou o que cortar primeiro?",
          "a": "Pareto: 20% dos itens respondiam por 60% do custo com uso marginal.",
          "q_en": "How did you prioritize what to cut first?",
          "a_en": "Pareto: 20% of items accounted for 60% of cost with marginal usage."
        },
        {
          "q": "Como manteve a equipe engajada?",
          "a": "Expliquei a l�gica, envolvi donos dos processos e converti economias em melhorias vis�veis.",
          "q_en": "How did you keep the team engaged?",
          "a_en": "I explained the logic, involved process owners, and converted savings into visible improvements."
        },
        {
          "q": "Que aprendizado ficou?",
          "a": "Dados de uso s�o argumento irrefut�vel em renegocia��o.",
          "q_en": "What learning remained?",
          "a_en": "Usage data is an irrefutable argument in renegotiation."
        },
        {
          "q": "O que faria diferente?",
          "a": "Anteciparia governan�a para evitar a dispers�o inicial de ferramentas.",
          "q_en": "What would you do differently?",
          "a_en": "I would anticipate governance to avoid the initial tool sprawl."
        }
      ]
    },    {
      "title": "Otimiza��o de OPEX em Check-ups Premium (Unimed)",
      "pt": {
        "s": "Na Unimed, a press�o por reduzir OPEX sem afetar experi�ncia levou a revisar contratos de atendimento e log�stica de check-ups.",
        "t": "Minha miss�o era: Economizar pelo menos 15% mantendo NPS e SLAs.",
        "a": "Redesenhei a rota de coleta/entrega de exames com otimiza��o de janelas, renegociei pacotes por volume e integrei agenda digital para reduzir no-show. Implantei auditoria amostral de contas.",
        "r": "Economia de 18%; NPS est�vel; redu��o de 22% em no-show; melhor ocupa��o das cl�nicas parceiras. (com baseline, meta e per�odo documentados em relat�rio executivo).",
        "l": "Aprendi que frugalidade inteligente alinha incentivos do parceiro com resultado: pagar por performance, n�o por esfor�o. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje come�o engajando-os desde o in�cio."
      },
      "en": {
        "s": "At Unimed, pressure to lower OPEX without hurting UX led us to review care contracts and check-up logistics.",
        "t": "Save at least 15% while maintaining NPS and SLAs.",
        "a": "I redesigned specimen routing with optimized windows, renegotiated volume bundles, integrated digital scheduling to reduce no-shows, and implemented sample invoice audits.",
        "r": "18% savings; stable NPS; 22% fewer no-shows; better partner clinic occupancy.",
        "l": "Smart frugality aligns partner incentives with outcomes: pay for performance, not effort."
      },      "fup": [
        {
          "q": "Qual foi o maior driver de economia?",
          "a": "Otimiza��o de rotas e janelas, reduzindo viagens ociosas e consolidando coletas.",
          "q_en": "What was the biggest savings driver?",
          "a_en": "Route and window optimization, reducing idle trips and consolidating collections."
        },
        {
          "q": "Como garantiu que parceiros n�o reduzissem qualidade?",
          "a": "KPIs com gatilho de b�nus/penalidade vinculados a NPS e primeira-entrega-sem-retrabalho.",
          "q_en": "How did you ensure partners didn't reduce quality?",
          "a_en": "KPIs with bonus/penalty triggers linked to NPS and first-delivery-without-rework."
        },
        {
          "q": "Quais riscos regulat�rios mapeou?",
          "a": "Condi��es de armazenamento/transporte e LGPD na integra��o de agendas.",
          "q_en": "What regulatory risks did you map?",
          "a_en": "Storage/transport conditions and LGPD in schedule integration."
        },
        {
          "q": "Como evitou queda de NPS?",
          "a": "Reserva de slots premium para alto risco/urg�ncia e comunica��o proativa de hor�rios.",
          "q_en": "How did you avoid NPS drop?",
          "a_en": "Reserved premium slots for high risk/urgency and proactive time communication."
        },
        {
          "q": "Qual foi o payback?",
          "a": "Menos de 4 meses considerando custos de implementa��o.",
          "q_en": "What was the payback?",
          "a_en": "Less than 4 months considering implementation costs."
        },        {
          "q": "Como lidou com resist�ncia interna?",
          "a": "Mostrei dados de ociosidade e converti parte da economia em melhorias pedidas pela opera��o.",
          "q_en": "How did you handle internal resistance?",
          "a_en": "I showed idle time data and converted part of savings into improvements requested by operations."
        },
        {
          "q": "Qual m�trica mais enganosa voc� descartou?",
          "a": "Custo m�dio por exame sem ponderar complexidade e dist�ncia.",
          "q_en": "What most misleading metric did you discard?",
          "a_en": "Average cost per exam without weighting complexity and distance."
        },
        {
          "q": "Como definiu o baseline?",
          "a": "Tr�s meses de dados normalizados por sazonalidade e mix de servi�os.",
          "q_en": "How did you define the baseline?",
          "a_en": "Three months of data normalized by seasonality and service mix."
        },
        {
          "q": "Que automa��o foi mais efetiva?",
          "a": "Confirma��o autom�tica e remarca��o via WhatsApp com detec��o de conflito.",
          "q_en": "What automation was most effective?",
          "a_en": "Automatic confirmation and rescheduling via WhatsApp with conflict detection."
        },
        {
          "q": "O que faria diferente?",
          "a": "Envolver financeiro antes para ajustar centro de custos e refletir economias com mais precis�o.",
          "q_en": "What would you do differently?",
          "a_en": "Involve finance earlier to adjust cost centers and reflect savings more accurately."
        }
      ]
    }
  ]
};

export default frugality;
