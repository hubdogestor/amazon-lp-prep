const frugality = {
  "id": "frugality",
  "name": "Frugalidade",
  "cases": [
    {
      "title": "Racionalização de Stack de Relatórios e Licenças (SEFAZ-RS)",
      "pt": {
        "s": "No SEFAZ-RS, os custos de licenças e infraestrutura de relatórios cresciam sem controle, com soluções sobrepostas e pouca padronização.",
        "t": "Minha missão era: Reduzir o gasto anual recorrente em pelo menos 20% sem perder capacidade analítica e governança.",
        "a": "Eu mapeei contratos e uso real; consolidei ferramentas redundantes; movi relatórios de baixa criticidade para stack open-source; criei política de lifecyle e de rightsizing; renegociei contratos com base em dados de uso. Padronizei templates e automações de extração.",
        "r": "Economia anualizada de 27%; redução de 35% em incidentes de versão divergente; tempo de atualização de relatórios-chave caiu 40%. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que frugalidade é priorizar alocação eficiente, não cortar por cortar. Quando o uso real guia as decisões, economizamos e ainda melhoramos o serviço. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
      },
      "en": {
        "s": "At SEFAZ-RS, license and reporting infrastructure costs were growing unchecked, with overlapping solutions and little standardization.",
        "t": "Cut at least 20% of recurring annual spend without losing analytical capability or governance.",
        "a": "I mapped contracts and real usage; consolidated redundant tools; moved low-criticality reports to an open-source stack; defined lifecycle and rightsizing policies; renegotiated contracts based on usage data. Standardized templates and extraction automations.",
        "r": "27% annualized savings; 35% fewer version-drift incidents; 40% faster updates to key reports.",
        "l": "Frugality is efficient allocation, not blind cuts. When real usage drives decisions, you save and improve service quality."
      },      "fup": [
        {
          "q": "Como você identificou redundâncias?",
          "a": "Inventário cruzado por funcionalidade e custo/uso; heatmap expôs sobreposições claras.",
          "q_en": "How did you identify redundancies?",
          "a_en": "Cross-inventory by functionality and cost/usage; heatmap exposed clear overlaps."
        },
        {
          "q": "Qual foi a negociação mais relevante?",
          "a": "Licenças superdimensionadas: reduzi 20% com cláusula de elástico para picos sem multa.",
          "q_en": "What was the most relevant negotiation?",
          "a_en": "Oversized licenses: reduced 20% with elastic clause for peaks without penalty."
        },
        {
          "q": "Quais riscos de migração você aceitou?",
          "a": "Mover relatórios de baixa criticidade primeiro; mantive runbook de rollback.",
          "q_en": "What migration risks did you accept?",
          "a_en": "Move low-criticality reports first; kept rollback runbook."
        },
        {
          "q": "Como evitou shadow IT após cortes?",
          "a": "Portal único de relatórios e política clara de solicitações com SLA.",
          "q_en": "How did you avoid shadow IT after cuts?",
          "a_en": "Single reporting portal and clear request policy with SLA."
        },
        {
          "q": "Que métrica guiou as escolhas?",
          "a": "Custo por relatório consumido/mês e % de licenças ativas/usuário.",
          "q_en": "What metric guided the choices?",
          "a_en": "Cost per report consumed/month and % active licenses/user."
        },        {
          "q": "Houve impacto na qualidade?",
          "a": "Melhorou; padronização reduziu retrabalho e erros de versão.",
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
          "a": "Expliquei a lógica, envolvi donos dos processos e converti economias em melhorias visíveis.",
          "q_en": "How did you keep the team engaged?",
          "a_en": "I explained the logic, involved process owners, and converted savings into visible improvements."
        },
        {
          "q": "Que aprendizado ficou?",
          "a": "Dados de uso são argumento irrefutável em renegociação.",
          "q_en": "What learning remained?",
          "a_en": "Usage data is an irrefutable argument in renegotiation."
        },
        {
          "q": "O que faria diferente?",
          "a": "Anteciparia governança para evitar a dispersão inicial de ferramentas.",
          "q_en": "What would you do differently?",
          "a_en": "I would anticipate governance to avoid the initial tool sprawl."
        }
      ]
    },    {
      "title": "Otimização de OPEX em Check-ups Premium (Unimed)",
      "pt": {
        "s": "Na Unimed, a pressão por reduzir OPEX sem afetar experiência levou a revisar contratos de atendimento e logística de check-ups.",
        "t": "Minha missão era: Economizar pelo menos 15% mantendo NPS e SLAs.",
        "a": "Redesenhei a rota de coleta/entrega de exames com otimização de janelas, renegociei pacotes por volume e integrei agenda digital para reduzir no-show. Implantei auditoria amostral de contas.",
        "r": "Economia de 18%; NPS estável; redução de 22% em no-show; melhor ocupação das clínicas parceiras. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que frugalidade inteligente alinha incentivos do parceiro com resultado: pagar por performance, não por esforço. Em retrospectiva, eu poderia ter antecipado riscos envolvendo stakeholders, e hoje começo engajando-os desde o início."
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
          "a": "Otimização de rotas e janelas, reduzindo viagens ociosas e consolidando coletas.",
          "q_en": "What was the biggest savings driver?",
          "a_en": "Route and window optimization, reducing idle trips and consolidating collections."
        },
        {
          "q": "Como garantiu que parceiros não reduzissem qualidade?",
          "a": "KPIs com gatilho de bônus/penalidade vinculados a NPS e primeira-entrega-sem-retrabalho.",
          "q_en": "How did you ensure partners didn't reduce quality?",
          "a_en": "KPIs with bonus/penalty triggers linked to NPS and first-delivery-without-rework."
        },
        {
          "q": "Quais riscos regulatórios mapeou?",
          "a": "Condições de armazenamento/transporte e LGPD na integração de agendas.",
          "q_en": "What regulatory risks did you map?",
          "a_en": "Storage/transport conditions and LGPD in schedule integration."
        },
        {
          "q": "Como evitou queda de NPS?",
          "a": "Reserva de slots premium para alto risco/urgência e comunicação proativa de horários.",
          "q_en": "How did you avoid NPS drop?",
          "a_en": "Reserved premium slots for high risk/urgency and proactive time communication."
        },
        {
          "q": "Qual foi o payback?",
          "a": "Menos de 4 meses considerando custos de implementação.",
          "q_en": "What was the payback?",
          "a_en": "Less than 4 months considering implementation costs."
        },        {
          "q": "Como lidou com resistência interna?",
          "a": "Mostrei dados de ociosidade e converti parte da economia em melhorias pedidas pela operação.",
          "q_en": "How did you handle internal resistance?",
          "a_en": "I showed idle time data and converted part of savings into improvements requested by operations."
        },
        {
          "q": "Qual métrica mais enganosa você descartou?",
          "a": "Custo médio por exame sem ponderar complexidade e distância.",
          "q_en": "What most misleading metric did you discard?",
          "a_en": "Average cost per exam without weighting complexity and distance."
        },
        {
          "q": "Como definiu o baseline?",
          "a": "Três meses de dados normalizados por sazonalidade e mix de serviços.",
          "q_en": "How did you define the baseline?",
          "a_en": "Three months of data normalized by seasonality and service mix."
        },
        {
          "q": "Que automação foi mais efetiva?",
          "a": "Confirmação automática e remarcação via WhatsApp com detecção de conflito.",
          "q_en": "What automation was most effective?",
          "a_en": "Automatic confirmation and rescheduling via WhatsApp with conflict detection."
        },
        {
          "q": "O que faria diferente?",
          "a": "Envolver financeiro antes para ajustar centro de custos e refletir economias com mais precisão.",
          "q_en": "What would you do differently?",
          "a_en": "Involve finance earlier to adjust cost centers and reflect savings more accurately."
        }
      ]
    }
  ]
};

export default frugality;