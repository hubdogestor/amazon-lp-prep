const case_1 = {
  id: "huawei-six-sigma-optimization",
  title: "Inventei mecanismo 5G com playbook Six Sigma que reverteu multas client-facing",
  title_pt: "Inventei mecanismo 5G com playbook Six Sigma que reverteu multas client-facing",
  title_en: "Invented 5G mechanism with Six Sigma playbook that reversed client-facing penalties",
  company: "Huawei LATAM",
  period: "03/2013-09/2014",
  keywords: "#simplificar-processo | #criar-mecanismo | #six-sigma | #automação | #eficiência",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `Em 2013, eu era Product Manager de Network Optimization na Huawei LATAM, responsável pelo desempenho do rollout 4G em um dos contratos mais críticos da região. O cenário era grave: multas de R$2,7 milhões por trimestre, NPS de 51 caindo para 17 e cinco operadoras cogitando rescindir contratos.  
    A ativação média de cada site levava 214 dias, com 38 mil assinantes sem cobertura e 19 pontos de repasse entre equipes. A cadeia ficara ingovernável, os times trabalhavam muito e entregavam pouco. Eu sabia que precisávamos restaurar confiança antes que os clientes rompessem o contrato.`,
    
    t: `A diretoria me convocou para conduzir uma intervenção no processo de ativação 5G. Defini três metas: reduzir o tempo de implantação de 214 para 60 dias, eliminar as multas e reconquistar a credibilidade - sem novo capex. Percebi que o problema era menos capacidade e mais estrutura: o modelo de trabalho tinha características de um sistema que cresceu sem design central. Eu precisava devolver clareza ao processo.`,
    
    a: `Antes de qualquer ferramenta, fui pessoalmente a campanhas de ativação no campo para observar a realidade das equipes. Usando o DMAIC do Six Sigma, mapeei todo o fluxo e percebi que ninguém media quanto tempo o cliente ficava afetado pelas falhas. Criei o indicador “tempo de dor do cliente”, medindo horas de indisponibilidade multiplicadas pela base afetada. Essa métrica expôs onde a inércia custava mais.  
    Com os dados, montei mapa de causas - 61% dos defeitos vinham do QA offshore. Sugeri trazer parte da validação para o Brasil e construí um modelo financeiro mostrando que cada dia de atraso equivalia a R$ 780 mil em receita retida dos clientes. Apresentei para engenharia e finanças, e a mudança foi aprovada com orçamento próprio de R$ 180 mil.  
    Paralelamente, simplifiquei o processo: eliminei 11 handoffs e mantive oito marcos claros com responsáveis únicos, documentados no “One Flow Playbook”. Codifiquei do zero um painel em Python - o “5G Command Center” - que automatizava 14 reuniões semanais, consolidava SLA entre times e enviava alertas WhatsApp imediatos para desvios.  
    No relacionamento com os clientes, adotei transparência: a cada duas semanas eu mesmo apresentava o mapa de tempo de dor, mostrando a redução em horas e comprometendo-me com as causas ainda abertas. Esse simples gesto restaurou confiança e mudou o tom das reuniões.`,
    
    r: `Após seis meses, o tempo de ativação caiu de 214 para 58 dias (-73%). As multas desapareceram, gerando R$ 10,8 milhões de economia anual. O NPS subiu de 17 para 56 e o modelo passou a ser referência interna: o Command Center foi replicado em oito países. As equipes reconheceram claramente a relação entre decisão técnica e impacto no cliente, e a organização recuperou respeito frente aos clientes.  
    O resultado mais profundo foi cultural - pela primeira vez os times entenderam que simplificar é parte da engenharia, não um pedido de gestão.`,
    
    l: `Aprendi que simplificar não é reduzir, é organizar para enxergar. O indicador “tempo de dor do cliente” virou minha forma padrão de quantificar impacto em operações. Continuo usando essa abordagem em pagamentos digitais e serviços online - substituindo opiniões por medidas claras que todos podem questionar e melhorar.`
  },

  en: {
    s: `In 2013, I was Product Manager for Network Optimization at Huawei LATAM, accountable for 4G rollout performance across one of the region’s largest telecom operators. The situation was severe: quarterly penalties reached BRL 2.7 million, NPS had dropped from 51 to 17, and five carriers were openly considering contract termination.  
    Average site activation took 214 days, leaving 38 thousand subscribers without coverage. The process involved 19 handoffs between engineering, QA, supply chain and operations. Everyone was busy, yet progress was minimal. It felt like a system operating by inertia. We risked losing our most profitable market.`,
    
    t: `The regional board asked me to orchestrate recovery of the 5G activation process. I set three objectives: cut activation time from 214 to 60 days, remove client penalties completely, and restore trust-without increasing capex.  
    I soon realized that the core issue wasn’t resource shortage but structural complexity. Our system had grown organically without coherent design. Bringing clarity back became my first priority.`,
    
    a: `Before proposing any tool, I went on-site with field engineers to observe integration in real conditions. Using Six Sigma’s DMAIC cycle, I documented each phase and discovered that no one measured how long customers were actually impacted.  
    I developed a new metric called **“customer pain time”**, quantifying hours of unavailability multiplied by affected subscribers. This number put financial magnitude behind each delay and revealed that 61% of cumulative downtime came from offshore QA queues processing outdated builds outside our timezone.  
    I proposed repatriating part of QA and built a financial simulation proving that each lost day equaled roughly BRL 780 k in client revenue. The finance and engineering teams validated the data, and management approved a local QA initiative with a BRL 180 k budget.  
    Meanwhile, I rebuilt the workflow from the ground up: 19 handoffs condensed into 8 checkpoints, each with a clearly identified owner and measurable entry/exit criteria. I wrote the “One Flow Playbook” and created supporting software-the **“5G Command Center”**-a Python-based dashboard automating 14 recurring meetings, consolidating SLA calculations, and sending WhatsApp alerts the moment a threshold was exceeded.  
    To regain client confidence, I instituted transparent reporting. Every two weeks I presented “pain time” dashboards directly to carrier executives, showing trend lines and actions under way. Turning data into visuals helped transform criticism into cooperation.`,
    
    r: `After six months, activation time dropped from 214 to 58 days (−73 %). All contractual penalties were eliminated, saving BRL 10.8 million per year. NPS rose from 17 to 56, and client trust was permanently restored. Carriers collectively unlocked around BRL 47 million in previously delayed revenue.  
    The Command Center became official practice across eight LATAM countries. More than a platform, it created a new culture of accountability - engineers understood instantly which event caused which delay, and leaders gained visibility without micromanagement.`,
    
    l: `This project shaped how I approach operational design. The breakthrough didn’t come from adding complexity but from reframing measurement around what the customer actually feels.  
    “Customer pain time” became my standard lever for aligning business and technical decisions. Ever since, whether in connectivity or digital payments, I rely on metrics that expose friction precisely and can survive leadership transitions because everyone understands their logic. The lesson is simple: sustainable performance is built on clarity that people trust.`
  },

  fups: [
    // 1. Erro / Failure
    {
      q: "Qual foi seu maior erro ou falha nesse caso?",
      a: "No início tentei redesenhar todo o processo de uma vez e isso diluiu o foco. Aprendi que simplificação é maratona: começando com quick wins que geram credibilidade.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "At first I tried to redesign the entire process at once, which diluted focus. I learned that simplification is a marathon - start with quick wins that earn trust."
    },
    // 2. O que faria diferente / What would you do differently
    {
      q: "O que você faria diferente hoje?",
      a: "Ter trazido o cliente para o diagnóstico inicial e não só para a entrega. Isso teria acelerado o apoio político e validado hipóteses mais cedo.",
      q_en: "What would you do differently today?",
      a_en: "I would involve the client during the diagnostic phase, not only at delivery. Early engagement would have accelerated buy-in and validated assumptions faster."
    },
    // 3. Obstáculo mais difícil / Hardest obstacle
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "A oposição da engenharia offshore, que temia perder autonomia. Usei dados financeiros - R$47 mi bloqueados por atrasos - para transformar resistência em evidência.",
      q_en: "What was the most difficult obstacle to overcome?",
      a_en: "Resistance from the offshore engineering team, afraid of losing autonomy. I used financial correlation - BRL 47 M blocked due to delays - to turn resistance into data-driven insight."
    },
    // 4. Riscos / Risks
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Interrupção de entregas durante migração de QA e perda de patrocínio executivo. Mitiguei com rollout em lotes de 15 dias com rollback de 12 h e relatórios transparentes ao board.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Main risks were delivery interruption during QA migration and losing executive sponsorship. I mitigated through 15-day batch rollouts, 12-hour rollback plans, and transparent reports to the board."
    },
    // 5. Dados / Data rationale
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Coletei 214 históricos de sites cruzando tempo de deploy, defeitos e receita retida. O 'tempo de dor' multiplicava horas sem serviço pela base afetada, evidenciando perda real.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "I analyzed 214 site histories combining deploy time, defects, and blocked revenue. The 'customer pain time' multiplied downtime hours by affected users, exposing real cost per delay."
    },
    // 6. Uso posterior / Later application
    {
      q: "Como você usou o aprendizado desse caso em outras frentes ou trabalhos?",
      a: "Levei o indicador de 'tempo de dor' para fintechs e pagamentos, correlacionando falhas de reconciliação ao prejuízo de receita e priorizando correções com base em impacto humano.",
      q_en: "How did you use the learning from this case elsewhere?",
      a_en: "I applied the 'customer pain time' metric in fintech operations, linking reconciliation failures to revenue loss and prioritizing fixes based on human and financial impact."
    },

    // Complementares bilíngues
    {
      q: "Como garantiu sustentabilidade após o projeto?",
      a: "Implementei alertas automáticos de SLA, auditoria trimestral e documentação pública. O mecanismo continuou operando após minha saída.",
      q_en: "How did you ensure sustainability after completion?",
      a_en: "I set automated SLA alerts, quarterly audits, and open documentation. The mechanism kept running long after I left."
    },
    {
      q: "Qual decisão mais impopular precisou tomar?",
      a: "Transferir parte do QA do exterior para o Brasil, contrariando contratos antigos. A prova financeira convenceu rápido.",
      q_en: "What was your most unpopular decision?",
      a_en: "Moving part of QA from overseas to Brazil, which broke old contracts. The financial proof converted resistance quickly."
    },
    {
      q: "Como mediu o fator humano de sucesso?",
      a: "Subida de NPS de 17 para 56 e 72% menos escalonamentos. Mostrou que confiança havia voltado.",
      q_en: "How did you measure the human factor of success?",
      a_en: "NPS jumped from 17 to 56 and 72 % fewer internal escalations - clear proof that trust was restored."
    },
    {
      q: "Que habilidade pessoal mais contribuiu para o resultado?",
      a: "Traduzir dados complexos em linguagem executiva. Essa ponte manteve engenharia e board no mesmo ritmo.",
      q_en: "Which personal skill contributed most?",
      a_en: "Translating complex data into executive language - that bridge kept engineering and leadership in sync."
    },
    {
      q: "Como lidou com falhas do Command Center nas primeiras semanas?",
      a: "Operei monitoramento 24h manual por 15 dias e mantive fallback em planilha para evitar incidentes.",
      q_en: "How did you handle early Command Center failures?",
      a_en: "I manually monitored logs 24 hours a day for two weeks and maintained spreadsheet fallback to prevent incidents."
    },
    {
      q: "Qual aprendizado mais importante tirou dessa experiência?",
      a: "Quando todos têm acesso aos mesmos dados, o comportamento muda sem precisar impor regras.",
      q_en: "What was your most important takeaway?",
      a_en: "When everyone shares the same data, behavior shifts naturally - transparency drives discipline more than control."
    }
  ]
};

export default case_1;
