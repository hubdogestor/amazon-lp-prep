const frugality = {
  id: "frugalidade",
  name: "frugalidade",
  principle: {
    title: "Parcimônia",
    title_en: "Frugality",
    description: "Realizar mais com menos. As restrições geram inventividade, autossuficiência e criatividade. Não há pontos extras por crescer o número de funcionários, o tamanho do orçamento ou despesas fixas.",
    description_en: "Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention. There are no extra points for growing headcount, budget size, or fixed expense.",
    icon: "💰"
  },
  cases: [
    {
      "title": "Racionalização de Stack de Relatórios e Licenças - SEFAZ-RS (MM/AAAA-MM/AAAA) ⭐",
      "title_pt": "Racionalização de Stack de Relatórios e Licenças - SEFAZ-RS (MM/AAAA-MM/AAAA) ⭐",
      "title_en": "Racionalização de Stack de Relatórios e Licenças - SEFAZ-RS (MM/AAAA-MM/AAAA) ⭐ (EN)",
      "company": "SEFAZ-RS",
      "period": "08/2024–12/2024",
      "pt": {
        "s": "No SEFAZ-RS, os custos de licenças e infraestrutura de relatórios cresciam descontroladamente: R$ 800k/ano em ferramentas sobrepostas, 12 soluções diferentes fazendo funções similares e baixa utilização (30% das licenças ociosas).",
        "t": "Minha missão era reduzir o gasto anual recorrente em pelo menos 20% sem perder capacidade analítica e governança, otimizando stack tecnológico através de inventividade e consolidação inteligente.",
        "a": "Mapeei contratos detalhadamente e uso real por ferramenta; consolidei tools redundantes em stack unificado; movi relatórios de baixa criticidade para open-source (Grafana/ELK); criei política de lifecycle de licenças e rightsizing baseado em usage analytics; renegociei contratos com dados concretos de utilização. Padronizei templates e automatizei extração de dados.",
        "r": "Economia anualizada de 27% (R$ 216k/ano), redução de 35% em incidentes de versão divergente, tempo de atualização de relatórios-chave caiu 40% e satisfaction score dos usuários aumentou de 6.2 para 8.1/10. Stack mais simples = operação mais eficiente. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que frugalidade verdadeira é priorizar alocação eficiente de recursos, não cortar por cortar. Quando uso real guia as decisões, economizamos e ainda melhoramos o serviço. Constraints forçam criatividade que resulta em soluções superiores. Em retrospectiva, eu poderia ter mapeado stakeholder resistance upfront, e hoje sempre envolvo usuários finais no process de consolidação."
      },
      "en": {
        "s": "At SEFAZ-RS, license and reporting infrastructure costs were growing uncontrollably: R$ 800k/year in overlapping tools, 12 different solutions doing similar functions and low utilization (30% idle licenses).",
        "t": "My mission was to reduce annual recurring spend by at least 20% without losing analytical capacity and governance, optimizing tech stack through resourcefulness and intelligent consolidation.",
        "a": "I mapped contracts in detail and actual usage per tool; consolidated redundant tools into unified stack; moved low-criticality reports to open-source (Grafana/ELK); created license lifecycle policy and rightsizing based on usage analytics; renegotiated contracts with concrete utilization data. I standardized templates and automated data extraction.",
        "r": "Annualized savings of 27% (R$ 216k/year), 35% reduction in version divergence incidents, key report update time dropped 40% and user satisfaction score increased from 6.2 to 8.1/10. Simpler stack = more efficient operation. (with baseline, target and period documented in executive report).",
        "l": "I learned that true frugality is prioritizing efficient resource allocation, not cutting for cutting's sake. When actual usage drives decisions, we save money and still improve service. Constraints force creativity that results in superior solutions. In retrospect, I could have mapped stakeholder resistance upfront, and today I always involve end users in consolidation process."
      },
      "fups": [
        {
          "q": "Como você mapeou o uso real vs. licenças contratadas?",
          "q_en": "How did you map actual usage vs. contracted licenses?",
          "a": "Usage analytics de 6 meses: login frequency, feature utilization, data volume processed e user satisfaction surveys. Hard data sobre what's actually being used vs. what we're paying for.",
          "a_en": "6-month usage analytics: login frequency, feature utilization, data volume processed and user satisfaction surveys. Hard data about what's actually being used vs. what we're paying for."
        },
        {
          "q": "Qual foi a maior resistência ao consolidar ferramentas redundantes?",
          "q_en": "What was the biggest resistance when consolidating redundant tools?",
          "a": "'Minha ferramenta é especial' syndrome. Cada team achava que sua tool era única. Mostrei feature overlap de 85% entre solutions. Data kills emotional attachment to tools.",
          "a_en": "'My tool is special' syndrome. Each team thought their tool was unique. I showed 85% feature overlap between solutions. Data kills emotional attachment to tools."
        },
        {
          "q": "Como você escolheu quais relatórios mover para open-source?",
          "q_en": "How did you choose which reports to move to open-source?",
          "a": "Risk matrix: baixa criticidade de negócio + alta frequency de uso + standard data formats. Open-source para commodities, commercial para competitive advantages.",
          "a_en": "Risk matrix: low business criticality + high usage frequency + standard data formats. Open-source for commodities, commercial for competitive advantages."
        },
        {
          "q": "Que argumentos você usou para renegociar contratos com vendors?",
          "q_en": "What arguments did you use to renegotiate contracts with vendors?",
          "a": "Usage data transparency: 'Pagamos por 100 users, usamos 30. Queremos rightsized contract ou consideramos alternatives'. Market leverage com competitive options researched.",
          "a_en": "Usage data transparency: 'We pay for 100 users, use 30. We want rightsized contract or consider alternatives'. Market leverage with competitive options researched."
        },
        {
          "q": "Como você mediu que a consolidação não prejudicou produtividade?",
          "q_en": "How did you measure that consolidation didn't hurt productivity?",
          "a": "KPIs de output: time-to-report, report accuracy, user satisfaction e request fulfillment rate. Productivity mantida ou improved em unified stack.",
          "a_en": "Output KPIs: time-to-report, report accuracy, user satisfaction and request fulfillment rate. Productivity maintained or improved on unified stack."
        },
        {
          "q": "Qual foi o maior challenge técnico da consolidação?",
          "q_en": "What was the biggest technical challenge of consolidation?",
          "a": "Data migration sem downtime: ETL pipelines paralelos durante transition, fallback plans e gradual cutover. Engineering challenge com business constraint de zero interruption.",
          "a_en": "Data migration without downtime: parallel ETL pipelines during transition, fallback plans and gradual cutover. Engineering challenge with business constraint of zero interruption."
        },
        {
          "q": "Como você criou política de lifecycle de licenças sustentável?",
          "q_en": "How did you create sustainable license lifecycle policy?",
          "a": "Automated governance: monthly usage reports, quarterly rightsizing reviews, annual contract renewals com business justification required. Governance through automation, não bureaucracy.",
          "a_en": "Automated governance: monthly usage reports, quarterly rightsizing reviews, annual contract renewals with required business justification. Governance through automation, not bureaucracy."
        },
        {
          "q": "Que 'inventividade' surgiu das constraints de orçamento?",
          "q_en": "What 'resourcefulness' emerged from budget constraints?",
          "a": "Custom dashboards com open-source tools que superaram commercial solutions, internal APIs que eliminaram manual work e community knowledge sharing que reduziu training costs.",
          "a_en": "Custom dashboards with open-source tools that outperformed commercial solutions, internal APIs that eliminated manual work and community knowledge sharing that reduced training costs."
        },
        {
          "q": "Como você garantiu que economia não fosse temporária?",
          "q_en": "How did you ensure savings weren't temporary?",
          "a": "Structural changes: automated monitoring de spending, approval workflows para new licenses e quarterly budget reviews. Process changes que sustentam frugality culture.",
          "a_en": "Structural changes: automated spending monitoring, approval workflows for new licenses and quarterly budget reviews. Process changes that sustain frugality culture."
        },
        {
          "q": "Se tivesse que fazer consolidação similar hoje, o que faria diferente?",
          "q_en": "If you had to do similar consolidation today, what would you do differently?",
          "a": "Mais change management upfront, pilot programs para prove value e better stakeholder communication about benefits. Technical solution + people solution = sustainable frugality.",
          "a_en": "More change management upfront, pilot programs to prove value and better stakeholder communication about benefits. Technical solution + people solution = sustainable frugality."
        }
      ]
    },
    {
      "title": "MVP com Zero Budget: Portal do Empreendedor - Woop/Unimed (MM/AAAA-MM/AAAA)",
      "title_pt": "MVP com Zero Budget: Portal do Empreendedor",
      "title_en": "Zero Budget MVP: Entrepreneur Portal",
      "company": "Woop/Unimed",
      "period": "06/2019–12/2021",
      "pt": {
        "s": "A Woop/Unimed queria lançar portal para empreendedores da saúde, mas budget estava congelado. Marketing pressionava por launch em 2 meses para aproveitar timing de evento da categoria.",
        "t": "Minha missão era entregar MVP funcional do portal sem orçamento adicional, usando recursos internos existentes e criatividade para substituir soluções caras por alternativas resourceful.",
        "a": "Criei solução híbrida: WordPress customizado ao invés de desenvolvimento do zero, integração com APIs existentes da Unimed, design system reaproveitado de outros produtos e hosting em infrastructure já contratada. Team interno working part-time, freelancers pagos com equity em projeto piloto e parcerias com fornecedores em troca de case studies.",
        "r": "Portal lançado em 7 semanas com custo total de R$ 12k (vs. R$ 180k orçado originalmente), 500+ empreendedores cadastrados no primeiro mês, NPS de 8.2/10 e lead generation de 40% above target. Solução frugal superou expectativas premium. (com baseline, meta e período documentados em relatório executivo).",
        "l": "Aprendi que constraints extremas forçam inovação radical. Frugality não é about ser barato, é about ser resourceful e encontrar ways to deliver value que não dependem de dinheiro. Em retrospectiva, eu poderia ter documentado better o business case para future funding, e hoje sempre capturo learnings de MVPs frugais para scale decisions posteriores."
      },
      "en": {
        "s": "Woop/Unimed wanted to launch portal for health entrepreneurs, but budget was frozen. Marketing pressured for launch in 2 months to leverage category event timing.",
        "t": "My mission was to deliver functional portal MVP without additional budget, using existing internal resources and creativity to replace expensive solutions with resourceful alternatives.",
        "a": "I created hybrid solution: customized WordPress instead of development from scratch, integration with existing Unimed APIs, design system reused from other products and hosting on already contracted infrastructure. Internal team working part-time, freelancers paid with equity in pilot project and partnerships with suppliers in exchange for case studies.",
        "r": "Portal launched in 7 weeks with total cost of R$ 12k (vs. originally budgeted R$ 180k), 500+ entrepreneurs registered in first month, NPS of 8.2/10 and lead generation 40% above target. Frugal solution exceeded premium expectations. (with baseline, target and period documented in executive report).",
        "l": "I learned that extreme constraints force radical innovation. Frugality isn't about being cheap, it's about being resourceful and finding ways to deliver value that don't depend on money. In retrospect, I could have better documented business case for future funding, and today I always capture learnings from frugal MVPs for later scale decisions."
      },
      "fups": [
        {
          "q": "Como você convenceu stakeholders que WordPress seria adequado para projeto corporativo?",
          "q_en": "How did you convince stakeholders that WordPress would be adequate for corporate project?",
          "a": "Proof of concept em 48h: functional prototype com integrations working e security audit passed. Show, don't tell. Results falam mais alto que architecture debates.",
          "a_en": "Proof of concept in 48h: functional prototype with working integrations and passed security audit. Show, don't tell. Results speak louder than architecture debates."
        },
        {
          "q": "Que recursos internos você conseguiu reaproveitar?",
          "q_en": "What internal resources were you able to reuse?",
          "a": "Design system (salvou 3 semanas), user authentication via SSO existente, content templates de outros produtos e analytics/monitoring infrastructure já contratada. Asset reuse = time compression.",
          "a_en": "Design system (saved 3 weeks), user authentication via existing SSO, content templates from other products and already contracted analytics/monitoring infrastructure. Asset reuse = time compression."
        },
        {
          "q": "Como você estruturou parcerias com equity ao invés de cash?",
          "q_en": "How did you structure partnerships with equity instead of cash?",
          "a": "Value exchange: developers ganharam case study + portfolio credit + networking, fornecedores receberam testimonial + referral potential. Non-monetary value création.",
          "a_en": "Value exchange: developers earned case study + portfolio credit + networking, suppliers received testimonial + referral potential. Non-monetary value creation."
        },
        {
          "q": "Qual foi o maior risco de usar solução frugal ao invés de premium?",
          "q_en": "What was the biggest risk of using frugal solution instead of premium?",
          "a": "Scalability concerns: WordPress pode não aguentar growth exponential. Mitigation: architecture modular que permite migration posterior sem rebuild completo. Plan for success.",
          "a_en": "Scalability concerns: WordPress might not handle exponential growth. Mitigation: modular architecture that allows later migration without complete rebuild. Plan for success."
        },
        {
          "q": "Como você mediu que qualidade não foi comprometida por frugality?",
          "q_en": "How did you measure that quality wasn't compromised by frugality?",
          "a": "Same KPIs que versão premium: page load speed, uptime, conversion rate e user satisfaction. Quality standards mantidos, cost structure otimizada.",
          "a_en": "Same KPIs as premium version: page load speed, uptime, conversion rate and user satisfaction. Quality standards maintained, cost structure optimized."
        },
        {
          "q": "Que 'inventividade' mais surpreendeu você durante o projeto?",
          "q_en": "What 'resourcefulness' surprised you most during the project?",
          "a": "Community engagement: users começaram contributing content voluntariamente, criando network effect que não tínhamos planejado. Frugality unlocked community power.",
          "a_en": "Community engagement: users started contributing content voluntarily, creating network effect we hadn't planned. Frugality unlocked community power."
        },
        {
          "q": "Como você gerenciou expectations com budget tão restrito?",
          "q_en": "How did you manage expectations with such restricted budget?",
          "a": "Under-promise, over-deliver: communiquei 'basic MVP', delivered polished experience. Better to exceed low expectations than disappoint high ones.",
          "a_en": "Under-promise, over-deliver: communicated 'basic MVP', delivered polished experience. Better to exceed low expectations than disappoint high ones."
        },
        {
          "q": "Qual foi o feedback dos usuários sobre a solução frugal?",
          "q_en": "What was user feedback about the frugal solution?",
          "a": "'Funciona perfeitamente e é super rápido.' Users don't care about backend architecture, só about value delivered. Frugal implementation, premium experience.",
          "a_en": "'Works perfectly and is super fast.' Users don't care about backend architecture, just about value delivered. Frugal implementation, premium experience."
        },
        {
          "q": "Como você documentou learnings para future scaling decisions?",
          "q_en": "How did you document learnings for future scaling decisions?",
          "a": "Performance benchmarks, usage patterns, technical debt inventory e business metrics tracking. Data-driven scaling plan com clear trigger points para investment.",
          "a_en": "Performance benchmarks, usage patterns, technical debt inventory and business metrics tracking. Data-driven scaling plan with clear trigger points for investment."
        },
        {
          "q": "Se tivesse orçamento ilimitado hoje, ainda escolheria approach frugal?",
          "q_en": "If you had unlimited budget today, would you still choose frugal approach?",
          "a": "Para MVP, yes. Frugality força focus em essentials e validates demand before big investment. Money can't buy market validation, só frugal experiments can.",
          "a_en": "For MVP, yes. Frugality forces focus on essentials and validates demand before big investment. Money can't buy market validation, only frugal experiments can."
        }
      ]
    }
  ]
};

export default frugality;