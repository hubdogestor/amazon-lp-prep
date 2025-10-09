// Case 3 - disagree_and_commit (VERSÃO CINEMA)
const case_3 = {
  id: "bradesco-mvp-feature-prioritization",
  title: "Discordei da priorização do MVP, aceitei o voto do comitê e entreguei com excelência",
  title_pt: "Discordei da priorização do MVP, aceitei o voto do comitê e entreguei com excelência",
  title_en: "Disagreed with MVP prioritization, accepted committee vote, and delivered with excellence",
  company: "Bradesco Next",
  period: "11/2017-05/2018",
  isTopCase: true,
  isGoodCase: false,
  pt: {
    s: `"Um feed bonitinho não baixa churn." Essas foram minhas palavras exatas quando confrontei o CPO do Bradesco Next que queria priorizar um feed social gamificado no refresh do app 2023. Era março de 2018, eu atuava como Head de Produto, e o timing estava crítico: havia analisado os dados e descoberto que 61% dos nossos cancelamentos vinham de clientes que não entendiam gasto futuro, enquanto concorrentes ganhavam buzz com feeds sociais. Eu defendia com unhas e dentes investir primeiro no novo motor de recomendação financeira que havia desenhado — uma solução que poderia reduzir churn em 30% baseada em machine learning. A tensão no ar era palpável quando ele respondeu: "Se você não entrar na fila do feed, perco o suporte do marketing." Era o momento decisivo: defender minha convicção técnica ou ceder à pressão política. O dilema era brutal: 2,4 milhões de clientes ativos, R$ 180M em receita anual em risco, e uma decisão que definiria o futuro do produto.`,
    t: `Meu escopo como Head de Produto cobria roadmap e discovery, mas assumi ownership total do impasse. Diante dessa tensão que precisaria resolver, elaborei estratégia em três frentes: (1) provar impacto real através de dados irrefutáveis que coletaria, (2) escalar decisão para nível executivo adequado assumindo risco político, (3) caso perdesse a votação, liderar pessoalmente a entrega sem qualquer resistência. Estabeleci metas claras que declarei publicamente: rodar experimento A/B comparando ambas as soluções em duas semanas, apresentar resultados ao comitê executivo e, após votação final, entregar o backlog aprovado em seis sprints mantendo NPS acima de 70.`,
    a: `Executei teste A/B rigoroso com 40 mil clientes, criando pessoalmente protótipos funcionais tanto do feed quanto do motor de recomendação que havia desenhado. Os resultados foram reveladores: feed aumentou tempo de tela em impressionantes 18%, mas motor de recomendação reduziu intenção de cancelamento em 36% — impacto direto no bottom line. Levei esses dados ao comitê executivo com transparência total: "Recomendo o motor baseado nos dados que coletei, mas se votarem pelo feed, assumo integralmente os riscos e entrego." A votação foi acirrada — CMO pelo feed, CFO comigo, até que CEO fez voto de minerva escolhendo feed gamificado com condição inflexível de entrega em 90 dias. Minha resposta foi imediata: "Discordei com base em dados, mas estou 100% comprometido com o MVP aprovado." Naquele momento, assumi completamente o squad, negociei com marketing cronograma de criativos em duas semanas, estabeleci SLA de aprovação em 6 horas para eliminar gargalos, escrevi pessoalmente todas as regras de missões gamificadas (78 páginas de especificação), integrei APIs de cashback com latência abaixo de 300ms e, estrategicamente, criei mecanismo de recomendação lite rodando em background — meu plano B discreto que não comprometeria o go-live principal. Quando tech lead questionou viabilidade do prazo, assumi ownership direto do código crítico, trabalhando madrugadas e revisando pessoalmente 340 pull requests para garantir qualidade.`,
    r: `A entrega foi impecável: lancei o feed em 82 dias, 8 dias antes do prazo comprometido. Os números superaram expectativas — engajamento subiu 27%, tempo médio de sessão saltou de 3,1 para 4,0 minutos, NPS do app atingiu 72 e intenção de cancelamento despencou 19%. O que o comitê não esperava era o bônus: como motor lite operava silenciosamente, consegui reduzir churn adicional de 2,4 pontos percentuais especificamente nos clientes de alta renda. Durante all-hands, CEO fez questão de reconhecer publicamente: "Leonardo discordou com dados sólidos, mas entregou com excelência a decisão do comitê." Como resultado direto dessa demonstração de commitment, ele aprovou imediatamente investimento de R$ 8 milhões para evolução do motor completo no Q4 — exatamente o que havia proposto originalmente. Mais importante: criei precedente de que discordância respeitosa seguida de execução exemplar gera confiança e oportunidades futuras.`,
    l: `Aprendi que disagree and commit não é apenas aceitar decisão contrária, mas executá-la com a mesma paixão e excelência que aplicaria à minha própria ideia. Quando demonstrei que podia discordar respeitosamente e ainda assim entregar resultados excepcionais, conquistei não apenas confiança da liderança, mas também espaço para reinserir minhas convicções estratégicas. O paradoxo é poderoso: ao abandonar temporariamente o plano perfeito, criei condições para implementá-lo de forma ainda mais robusta posteriormente. Dados vencem política, mas execução exemplar vence tudo.`
  },
  en: {
    s: `"A shiny feed won't drop churn." Those were my exact words when I confronted Bradesco Next's CPO who wanted to prioritize a gamified social feed during our 2023 app refresh. It was March 2018, I was Head of Product, and timing was critical: I had analyzed data and discovered 61% of our churn came from customers who couldn't understand future spending, while competitors generated buzz with social feeds. I fought tooth and nail to invest first in the new financial recommendation engine I had designed — a solution that could reduce churn by 30% based on machine learning. Tension was palpable when he replied: "If you don't queue for the feed, I lose marketing support." This was the decisive moment: defend my technical conviction or yield to political pressure. The dilemma was brutal: 2.4 million active customers, BRL 180M in annual revenue at risk, and a decision that would define the product's future.`,
    t: `My scope as Head of Product covered roadmap and discovery, but I took total ownership of the impasse. Facing this tension I needed to resolve, I crafted a three-pronged strategy: (1) prove real impact through irrefutable data I would collect, (2) escalate decision to appropriate executive level assuming political risk, (3) if I lost the vote, personally lead delivery without any resistance. I set clear goals I declared publicly: run A/B experiment comparing both solutions within two weeks, present results to executive committee, and after final vote, deliver approved backlog in six sprints maintaining NPS above 70.`,
    a: `I executed rigorous A/B test with 40,000 customers, personally building functional prototypes for both the feed and recommendation engine I had designed. Results were revealing: feed increased screen time by impressive 18%, but recommendation engine reduced cancellation intent by 36% — direct bottom-line impact. I brought this data to executive committee with complete transparency: "I recommend the engine based on data I collected, but if you vote for the feed, I fully own risks and deliver." Vote was tight — CMO for feed, CFO with me, until CEO cast tie-breaking vote choosing gamified feed with inflexible 90-day delivery condition. My response was immediate: "I disagreed based on data, but I'm 100% committed to approved MVP." At that moment, I completely took over the squad, negotiated two-week creative timeline with marketing, established 6-hour approval SLAs to eliminate bottlenecks, personally wrote all gamification mission rules (78 pages of specification), integrated cashback APIs with sub-300ms latency, and strategically created lite recommendation mechanism running in background — my discrete Plan B that wouldn't compromise main go-live. When tech lead questioned timeline feasibility, I took direct ownership of critical code, working late nights and personally reviewing 340 pull requests to ensure quality.`,
    r: `Delivery was flawless: I launched the feed in 82 days, 8 days ahead of committed deadline. Numbers exceeded expectations — engagement rose 27%, average session time jumped from 3.1 to 4.0 minutes, app NPS hit 72, and cancellation intent plummeted 19%. What committee didn't expect was the bonus: because lite engine operated silently, I achieved additional 2.4 percentage point churn reduction specifically among high-value customers. During all-hands, CEO made a point of publicly recognizing: "Leonardo disagreed with solid data but delivered committee's decision with excellence." As direct result of this commitment demonstration, he immediately approved BRL 8 million investment for full engine evolution in Q4 — exactly what I had originally proposed. Most importantly: I created precedent that respectful disagreement followed by exemplary execution generates trust and future opportunities.`,
    l: `I learned that disagree and commit isn't just accepting contrary decision, but executing it with same passion and excellence I'd apply to my own idea. When I demonstrated I could disagree respectfully and still deliver exceptional results, I earned not just leadership trust, but also space to reinsert my strategic convictions. The paradox is powerful: by temporarily abandoning the perfect plan, I created conditions to implement it even more robustly later. Data beats politics, but exemplary execution beats everything.`
  },
  fups: [
    {
      q: "Como você montou o teste A/B para comparar feed vs motor?",
      a: "Usei amostra de 40 mil clientes segmentada por valor, medi tempo de tela, intenção de cancelamento, ticket médio e engajamento por 14 dias. Criei protótipos funcionais de ambas as soluções para teste real.",
      q_en: "How did you set up the A/B test to compare feed vs engine?",
      a_en: "I used 40,000-customer sample segmented by value, tracked screen time, cancellation intent, average ticket, and engagement over 14 days. Built functional prototypes of both solutions for real testing."
    },
    {
      q: "O que exatamente você apresentou ao comitê executivo?",
      a: "Tabela comparando feed vs motor com ROI projetado, heatmap de churn por segmento, análise de risco-benefício e cronograma de entrega para ambas as opções. Transparência total nos dados.",
      q_en: "What exactly did you present to the executive committee?",
      a_en: "Comparison table feed vs engine with projected ROI, churn heatmaps per segment, risk-benefit analysis, and delivery timeline for both options. Total data transparency."
    },
    {
      q: "Como você negociou com marketing o cronograma apertado?",
      a: "Propus sprint dedicada para criativos, garanti briefing detalhado em 48h, estabeleci SLA de entrega em duas semanas e monitorei tempo médio de aprovação em 6 horas para eliminar gargalos.",
      q_en: "How did you negotiate the tight timeline with marketing?",
      a_en: "I proposed dedicated sprint for creatives, guaranteed detailed brief in 48h, established two-week delivery SLA, and monitored 6-hour average approval time to eliminate bottlenecks."
    },
    {
      q: "O que continha exatamente o motor de recomendação lite?",
      a: "Regras de recomendação baseadas em saldo, categoria de gasto e padrão transacional, rodando em background e exibindo cartões de insight simples sem impactar performance do feed principal.",
      q_en: "What exactly did the lite recommendation engine include?",
      a_en: "Recommendation rules based on balance, spending category, and transactional patterns, running in background and surfacing simple insight cards without impacting main feed performance."
    },
    {
      q: "Como garantiu que o feed ficasse pronto em seis sprints?",
      a: "Travei backlog, cortei gold plating, apliquei WIP limite 4 por squad, defini SLA de deploy de 4 horas, fiz demo diária dos componentes críticos e assumi ownership pessoal do código mais complexo.",
      q_en: "How did you ensure the feed shipped in six sprints?",
      a_en: "I froze backlog, cut gold plating, enforced WIP limit of 4 per squad, set 4-hour deploy SLA, ran daily demos of critical components, and took personal ownership of most complex code."
    },
    {
      q: "Quais métricas você acompanhou após o go-live?",
      a: "Tempo de tela, NPS, cancelamentos, uso de cashback, faturamento por cliente, reclamações no BACEN, e performance do motor lite em background. Dashboard em tempo real para toda a liderança.",
      q_en: "Which metrics did you track post go-live?",
      a_en: "Screen time, NPS, cancellations, cashback usage, revenue per customer, Central Bank complaints, and lite engine performance in background. Real-time dashboard for all leadership."
    },
    {
      q: "Como você documentou formalmente seu commitment?",
      a: "Enviei email para o comitê com plano detalhado dos seis sprints e a frase 'assumo integralmente a execução do MVP aprovado, independente da minha discordância inicial'. Transparência total.",
      q_en: "How did you formally document your commitment?",
      a_en: "I emailed the committee detailed six-sprint plan stating 'I fully own execution of approved MVP, regardless of my initial disagreement'. Total transparency."
    },
    {
      q: "Qual risco específico você monitorou no feed gamificado?",
      a: "Engajamento sem conversão — defini gatilho de alerta se tempo de tela subisse sem queda proporcional de cancelamentos. Também monitorei fadiga de gamificação após 30 dias.",
      q_en: "Which specific risk did you monitor in the gamified feed?",
      a_en: "Engagement without conversion — I set alerts if screen time rose without proportional cancellation drops. Also monitored gamification fatigue after 30 days."
    },
    {
      q: "Como conseguiu aprovação para evoluir o motor completo?",
      a: "Apresentei resultado do lite engine com churn -2,4 p.p. especificamente em clientes premium, calculei ROI de R$ 24M anuais e pedi R$ 8M como follow-on investment. CEO aprovou na hora.",
      q_en: "How did you get approval to scale the full engine?",
      a_en: "I presented lite engine results with -2.4 p.p. churn specifically in premium customers, calculated BRL 24M annual ROI, and requested BRL 8M as follow-on investment. CEO approved immediately."
    },
    {
      q: "Que lição o time levou dessa experiência?",
      a: "Que podemos discordar com respeito baseado em dados, mas depois da votação todo mundo entrega como se fosse a ideia original. Discordância + execução exemplar = confiança duradoura.",
      q_en: "What lesson did the team take from this experience?",
      a_en: "That we can disagree respectfully based on data, but after the vote everyone delivers as if it were the original idea. Disagreement + exemplary execution = lasting trust."
    }
  ]
};

export default case_3;
