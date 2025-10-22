// Case 3 - frugality
const case_3 = {
  id: "unimed-automation-n8n",
  title: "Automação de Reconciliação Financeira (Payment Ops) com Ferramentas Open-Source",
  title_pt: "Automação de Relatórios de Reconciliação Financeira Usando Ferramentas Open-Source (n8n)",
  title_en: "Financial Reconciliation Report Automation Using Open-Source Tools (n8n)",
  company: "Unimed",
  period: "01/2023--12/2023",
  role: "Innovation Lead",
  keywords: "#automação | #open-source | #baixo-custo | #empoderar-equipe | #n8n",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "A equipe de reconciliação financeira da Unimed gastava 200 horas/mês em trabalho manual e propenso a erros. A solução proposta era um software de R$ 300.000, com um processo de aprovação longo e incerto. A equipe estava frustrada, gastando 68% do seu tempo em tarefas repetitivas. A frugalidade, para mim, não era uma restrição, mas a estratégia correta para resolver o problema de forma mais rápida e inteligente.",
    t: "Minha missão era entregar o mesmo resultado — relatórios automatizados — mas com uma fração do custo e do tempo. Eu precisava provar que poderíamos ser mais eficientes usando a criatividade e os recursos internos, em vez de esperar por um orçamento inflado. A meta era clara: automatizar 80% do trabalho manual em 3 meses, com um custo inferior a R$ 5.000.",
    a: "Minha abordagem foi capacitar um 'campeão' interno com uma ferramenta open-source. Escolhi o n8n por ser gratuito, seguro (auto-hospedável) e fácil de usar. Em vez de contratar um desenvolvedor, identifiquei um analista financeiro curioso e o mentorei em sessões de pair-programming. Em uma semana, automatizamos nosso primeiro relatório. O sucesso foi tão imediato que o próprio analista, agora empoderado, liderou a automação de outros cinco relatórios e começou a treinar colegas, criando um núcleo de automação autossustentável.",
    r: "Em três meses, com um custo de apenas R$ 4.800, automatizamos 80% do trabalho, liberando 200 horas mensais da equipe para análises estratégicas. A taxa de erros caiu para zero, e o tempo para gerar relatórios caiu de 12 horas para 18 minutos. A economia foi de 98% em relação ao orçamento original. Mais importante, criamos uma capacidade interna de automação que se espalhou para outras áreas, gerando economias adicionais e uma cultura de eficiência.",
    l: "Aprendi que a frugalidade não é sobre economizar dinheiro, é sobre encontrar a solução mais inteligente e empoderadora. Capacitar 'campeões internos' com ferramentas low-code se tornou meu método preferido para escalar a inovação de forma sustentável. Essa abordagem é diretamente aplicável a operações de pagamento, onde a reconciliação de milhões de transações exige soluções escaláveis e de baixo custo, sem comprometer a precisão."
  },
  en: {
    s: "Unimed's financial reconciliation team spent 200 hours/month on manual, error-prone work. The proposed solution was a BRL 300,000 software, with a long and uncertain approval process. The team was frustrated, spending 68% of their time on repetitive tasks. For me, frugality was not a constraint, but the right strategy to solve the problem faster and smarter.",
    t: "My mission was to deliver the same result—automated reports—but at a fraction of the cost and time. I needed to prove that we could be more efficient by using creativity and internal resources, instead of waiting for an inflated budget. The goal was clear: automate 80% of the manual work in 3 months, with a cost of less than BRL 5,000.",
    a: "My approach was to empower an internal 'champion' with an open-source tool. I chose n8n for being free, secure (self-hostable), and easy to use. Instead of hiring a developer, I identified a curious financial analyst and mentored him in pair-programming sessions. In one week, we automated our first report. The success was so immediate that the analyst himself, now empowered, led the automation of five other reports and began training colleagues, creating a self-sustaining automation hub.",
    r: "In three months, with a cost of just BRL 4,800, we automated 80% of the work, freeing up 200 monthly hours for the team to focus on strategic analysis. The error rate dropped to zero, and the time to generate reports fell from 12 hours to 18 minutes. The savings were 98% compared to the original budget. More importantly, we created an internal automation capability that spread to other areas, generating additional savings and a culture of efficiency.",
    l: "I learned that frugality is not about saving money, it's about finding the smartest, most empowering solution. Empowering 'internal champions' with low-code tools has become my preferred method for scaling innovation sustainably. This approach is directly applicable to payment operations, where reconciling millions of transactions requires scalable, low-cost solutions without compromising accuracy."
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Meu maior erro foi não ter envolvido a equipe de TI desde o início. Tentei provar o conceito de forma isolada para ganhar velocidade, mas isso gerou preocupações de segurança que poderiam ter sido resolvidas mais cedo. Aprendi que a frugalidade não pode ser uma desculpa para contornar a governança de TI.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My biggest mistake was not involving the IT team from the beginning. I tried to prove the concept in isolation to gain speed, but this generated security concerns that could have been resolved earlier. I learned that frugality cannot be an excuse to bypass IT governance."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu apresentaria o projeto para a TI como um ‘experimento de inovação controlado’. Proporia uma arquitetura isolada para o piloto e os convidaria a serem parceiros na avaliação da ferramenta. Isso teria transformado a TI de um potencial bloqueador em um aliado estratégico desde o primeiro dia.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would present the project to the IT team as a 'controlled innovation experiment.' I would propose an isolated architecture for the pilot and invite them to be partners in evaluating the tool. This would have turned IT from a potential blocker into a strategic ally from day one."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "O obstáculo mais difícil foi a barreira conceitual inicial do analista com APIs e a estrutura de dados JSON. Superei isso com ‘pair programming’, construindo o primeiro fluxo lado a lado com ele. Depois, dei a ele um projeto pequeno, de ponta a ponta, para que ele ganhasse confiança e autonomia.",
      q_en: "What was the most difficult obstacle to overcome?",
      a_en: "The most difficult obstacle was the analyst's initial conceptual barrier with APIs and the JSON data structure. I overcame this with 'pair programming,' building the first flow side-by-side with him. Then, I gave him a small, end-to-end project so he could gain confidence and autonomy."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "O principal risco era a segurança dos dados financeiros em uma ferramenta open-source. Mitiguei isso com uma arquitetura auto-hospedada em um servidor isolado e envolvendo a equipe de segurança de TI na validação da solução. Outro risco era a falta de suporte; mitiguei isso capacitando um ‘campeão interno’.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risk was the security of financial data in an open-source tool. I mitigated this with a self-hosted architecture on an isolated server and by involving the IT security team in the solution's validation. Another risk was the lack of support; I mitigated this by empowering an 'internal champion'."
    },
    {
      q: "Que dados você usou e qual foi a racional de cálculo?",
      a: "Usei a economia de R$ 295.200 (98%) em relação ao orçamento original como o principal dado. Além disso, a redução de 95% no tempo de geração de relatórios (de 12 horas para 18 minutos) e a eliminação de 100% dos erros manuais provaram o ganho de eficiência e qualidade.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "I used the BRL 295,200 (98%) savings compared to the original budget as the main data point. Additionally, the 95% reduction in report generation time (from 12 hours to 18 minutes) and the 100% elimination of manual errors proved the efficiency and quality gains."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "A abordagem de capacitar ‘campeões internos’ com ferramentas low-code se tornou meu método preferido para escalar a inovação de forma frugal. Aplico isso hoje ao ensinar pequenos empresários a automatizarem seus próprios processos, criando uma cultura de eficiência e autonomia.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "The approach of empowering 'internal champions' with low-code tools has become my preferred method for scaling innovation frugally. I apply this today when teaching small business owners to automate their own processes, creating a culture of efficiency and autonomy."
    },
    {
      q: "A solução com n8n era tão robusta quanto a ferramenta de R$300k? Quais foram os trade-offs?",
      a: "Ela não tinha todas as funcionalidades, como dashboards de governança complexos, e esse foi o trade-off. No entanto, era 100% eficaz na tarefa principal e nos dava uma flexibilidade que a ferramenta empresarial não oferecia. Aceitamos o trade-off de menos ‘sinos e assobios’ por mais economia, controle e agilidade.",
      q_en: "Was the n8n solution as robust as the BRL 300k tool? What were the trade-offs?",
      a_en: "It didn't have all the features, like complex governance dashboards, and that was the trade-off. However, it was 100% effective at the main task and gave us a flexibility that the enterprise tool didn't offer. We accepted the trade-off of fewer 'bells and whistles' for more savings, control, and agility."
    },
    {
      q: "Por que a equipe de finanças não encontrou essa solução sozinha?",
      a: "Porque eles estavam focados no problema e buscaram a solução que o mercado ‘vende’: softwares caros. Meu papel, com uma perspectiva de inovação, foi conectar a dor deles com uma solução de outro domínio, a automação low-code. A frugalidade muitas vezes vem da polinização cruzada de ideias.",
      q_en: "Why didn't the finance team find this solution on their own?",
      a_en: "Because they were focused on their problem and sought the solution the market 'sells': expensive software. My role, with an innovation perspective, was to connect their pain with a solution from another domain, low-code automation. Frugality often comes from the cross-pollination of ideas."
    },
    {
      q: "Que conselho você daria para uma equipe que quer ser mais frugal?",
      a: "Comece mapeando o tempo. Peça para cada pessoa estimar as horas gastas em tarefas manuais e repetitivas. Essa lista de ‘desperdiçadores de tempo’ é o seu mapa do tesouro para encontrar as primeiras e mais impactantes oportunidades de automação frugal. Foque no que consome mais tempo para gerar vitórias rápidas.",
      q_en: "What advice would you give to a team that wants to be more frugal?",
      a_en: "Start by mapping time. Ask each person to estimate the hours spent on manual, repetitive tasks. This list of 'time wasters' is your treasure map to find the first and most impactful opportunities for frugal automation. Focus on what consumes the most time to generate quick wins."
    }
  ]
};

export default case_3;