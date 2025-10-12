const case_1 = {
  "id": "sicredi-churn-analysis",
  "title": "Analise de Dados para Identificar os Principais Drivers de Churn no App",
  "title_pt": "Análise de Dados para Identificar os Principais Drivers de Churn no App",
  "title_en": "Data Analysis to Identify the Main Drivers of App Churn",
  "company": "Sicredi Woop",
  "period": "01/2019-10/2019",
  "isTopCase": true,
  "isGoodCase": true,

  "pt": {
    "s": "Em 2019, eu atuava como estrategista de produtos no Sicredi Woop, o braço digital da cooperativa. Naquele momento, enfrentávamos um desafio crítico: churn anual de 40%, representando cerca de R$ 12 milhões em perda de receita. Certa manhã, vi esse número piscando em vermelho no dashboard quando o diretor comercial entrou na sala e disse — \"Leonardo, vamos liberar R$ 400 mil em cashback agora. Precisamos estancar essa sangria.\" Ali percebi o dilema: aprovar uma solução imediata e, possivelmente, desperdiçar recursos, ou parar tudo para entender a causa real do problema. Eu já havia lido centenas de tickets de suporte, e as queixas mostravam que o problema poderia não estar na falta de benefícios, mas sim na experiência do cliente. Eu precisava decidir: ceder à pressão por velocidade ou mergulhar nos dados para encontrar a verdade — mesmo que isso significasse confrontar um diretor e atrasar a solução rápida.",
    
    "t": "Combinei com o COO que, em até duas semanas, entregaria um diagnóstico de causa raiz, provando de onde o churn realmente vinha e qual seria o caminho mais inteligente para reduzi-lo. Minha responsabilidade era conduzir a investigação ponta a ponta, usando dados como principal ferramenta — e convencer a liderança a priorizar a dor real do cliente em vez de um paliativo caro. Esse seria um momento definidor para o futuro digital do Woop.",
    
    "a": "Comecei mapeando possíveis hipóteses: cashback poderia ser uma solução eficaz? Ou o problema estaria em falhas de suporte e jornada? Depois de testar essas hipóteses com dados, apenas uma tendência se mostrou consistente — a perda de usuários logo no início da jornada. Pedi acesso direto ao Redshift e, com 47 queries SQL escritas por mim, cruzei cinco tabelas e reconstruí o funil de 2,3 milhões de registros. O diagnóstico foi claro: 54% dos cancelamentos ocorriam nos primeiros sete dias, e 40% desistiam no upload de documentos. Para confirmar, li 500 tickets de suporte, analisei avaliações nas lojas de app e liguei pessoalmente para três ex-clientes. Todos descreviam a mesma frustração: mensagens de erro confusas e validações demoradas. Com essas evidências, pedi uma reunião 1:1 com o diretor comercial. Mostrei o funil completo e um business case comparando três alternativas — cashback de R$400k (impacto incerto), nova funcionalidade de R$650k (6 meses), e correção do onboarding de R$180k (2 meses, ROI 3x maior). Ele hesitou, mas os números e a história dos clientes falaram mais alto. Sai da reunião com o aval para o plano. Em seguida, instalei um war room diário com engenharia e QA, defini métricas de sucesso (upload >95%, tempo médio <30s, falsos positivos <2%) e criei um dashboard automatizado de saúde para detectar anomalias. Esse processo virou um mecanismo permanente de controle, garantindo que futuras regressões fossem detectadas antes de impactar o cliente.",
    
    "r": "Em nove meses, o churn caiu de 40% para 32,8% — uma redução de 18%. Isso significou 32 mil clientes que permaneceram ativos, preservando R$ 5,4 milhões em receita anual. A taxa de conclusão do onboarding subiu 20 pontos percentuais, e a base de clientes ativos cresceu 25%, permitindo ao Sicredi bater a meta de crescimento de 150% sem investir em cashback. O war room se consolidou como rotina quinzenal, reduzindo o tempo médio de resposta a incidentes em 35%.",
    
    "l": "Essa experiência redefiniu minha visão sobre liderança orientada por dados. Antes desse projeto, eu acreditava que incentivos financeiros eram o caminho mais rápido para retenção. Aprendi que a verdadeira fidelização nasce da remoção de fricções invisíveis e de entender onde o cliente se perde. Também aprendi o valor de discordar com respeito e sustentar decisões com evidências. Desde então, a Triangulação de Evidências — quanti, quali e operacional — virou meu método essencial. Apliquei-o depois em cinco outros projetos críticos, gerando economias de R$ 12,8 milhões e disseminando uma cultura de decisão baseada em evidências. O principal aprendizado: liderança é mergulhar tão fundo quanto for preciso para ouvir o que os dados e os clientes têm a dizer."
  },

  "en": {
    "s": "In 2019, I was working as a Product Strategist at Sicredi Woop, the cooperative’s digital bank. At that time, we were facing a critical challenge: a 40% annual churn rate, amounting to about BRL 12 million in lost revenue. One Tuesday morning, as that number flashed red on the dashboard, the commercial director walked in and said, 'Leonardo, we’re approving BRL 400k in cashback now. We need to stop the bleeding.' That moment presented a dilemma: approve an immediate, costly fix or pause everything to understand the root cause. I had already reviewed hundreds of support tickets, and the pattern was clear — customers weren’t leaving because of missing perks but because of frustration in their early experience. I had to choose between moving fast or diving deep to uncover the truth, even if it meant opposing a director and delaying a convenient answer.",
    
    "t": "I committed to the COO to deliver a full root-cause analysis within two weeks. My responsibility was to lead the investigation end to end — analyze data, test hypotheses, and prove where the churn truly originated — while convincing leadership that the customer’s pain, not speed, should guide our next move. This moment would define the digital strategy’s credibility at Woop.",
    
    "a": "I first mapped the potential causes: was cashback really the lever, or were support and UX failures to blame? After testing these hypotheses, only one stood out — customers dropping off early in onboarding. I requested direct access to Redshift, wrote 47 SQL queries, and cross-referenced five datasets to rebuild a complete funnel of 2.3 million records. The data spoke clearly: 54% of cancellations occurred within the first seven days, and 40% abandoned during document upload. To validate the insights, I read 500 support tickets, reviewed app-store feedback, and personally called three former users. Each pointed to the same issue: confusing error messages and delayed verification. Armed with this, I scheduled a 1:1 with the commercial director. I walked him through the funnel, a comparative business case, and three options — cashback (BRL 400k, uncertain outcome), a new feature (BRL 650k, six months), and fixing onboarding (BRL 180k, two months, 3x ROI). The evidence was clear enough that he paused, nodded, and approved the plan. I then launched a daily war room, aligned metrics with engineering and QA (upload >95%, time <30s, false positives <2%), and built a live onboarding health dashboard with automatic alerts. Eventually, this evolved into a recurring mechanism: every new feature now required an onboarding health check before going live, preventing regressions and protecting the customer experience.",
    
    "r": "Within nine months, churn dropped from 40% to 32.8%, an 18% reduction, meaning 32,000 customers retained — BRL 5.4 million in preserved annual revenue. Onboarding completion rose 20 percentage points, active users grew 25%, and the company hit its 150% growth target without spending on cashback. The war room became a biweekly mechanism, cutting incident response times by 35%.",
    
    "l": "This experience changed how I approach data-driven leadership. Before this project, I believed financial incentives were the quickest route to customer retention. It taught me that real retention comes from eliminating hidden friction and understanding the moments when customers disengage. It also taught me to respectfully disagree and back decisions with data. Since then, I’ve turned my Evidence Triangulation method — combining quantitative, qualitative, and operational insights — into a habit. I’ve applied it in five subsequent cross-functional projects, saving over BRL 12.8 million. My key takeaway: great leadership means diving as deep as necessary to let data and customers guide the truth."
  },

  "fups": [
    {
      "q": "Qual foi seu maior erro ou falha nesse processo?",
      "a": "Meu principal erro foi não envolver o diretor comercial desde o início da investigação. Ao tentar apresentar os dados apenas no final, gerei resistência. Hoje, sei que é mais efetivo construir junto, trazendo os stakeholders chave para o processo desde o diagnóstico inicial."
    },
    {
      "q": "O que você faria diferente se enfrentasse o mesmo desafio hoje?",
      "a": "Além de cooptar a liderança mais cedo, eu teria validado o problema com uma amostra maior de clientes ativos — isso poderia ter antecipado alguns insights sobre as fases de engajamento que só descobrimos meses depois."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "Convencer um diretor-executivo a abandonar a solução fácil (cashback) em favor de uma análise aprofundada. Superar isso exigiu não confronto, mas raciocínio com dados, empatia e paciência para transformar oposição em patrocínio."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "Havia dois riscos principais: atrasar uma ação imediata e perder clientes no curto prazo ou falhar em provar o ROI do onboarding. Mitiguei o primeiro construindo checkpoints semanais para mostrar progresso e o segundo usando estimativas financeiras realistas junto ao time de finanças."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Cruzei dados de base de usuários, logs do app, taxas de upload e churn cohorts. Calculei o ROI comparando o custo do onboarding (R$180k) com a receita preservada (R$5,4M) e usei análise de coorte para validar o timing do abandono."
    },
    {
      "q": "Qual aprendizado desse caso você aplicou em outros projetos?",
      "a": "Apliquei o mesmo modelo de Triangulação de Evidências em projetos de crédito e cartões. Em ambos, medir simultaneamente dados, jornada e feedback do cliente garantiu decisões mais assertivas e economias combinadas de R$12,8M."
    },
    {
      "q": "Como você mediu o impacto do novo mecanismo criado?",
      "a": "Defini métricas automatizadas no dashboard de onboarding — tempo médio, taxa de falhas e volume de alertas. A queda sustentada de incidentes em mais de 30% após seis meses provou a eficácia do mecanismo."
    },
    {
      "q": "Como garantiu engajamento do time durante um processo de mudança desafiador?",
      "a": "Criei um war room colaborativo que concentrava engenheiros, QA e atendimento. Cada pessoa via, diariamente, o progresso em tempo real. Isso criou senso de propósito coletivo, reduzindo atrito e acelerando resultado."
    },
    {
      "q": "Houve algum momento em que você percebeu que poderia estar errado?",
      "a": "Sim. Inicialmente imaginei que o problema fosse apenas técnico. Ao ouvir clientes que desistiram, percebi que a frustração era emocional — falta de clareza nas mensagens. Esse insight mudou totalmente minha abordagem."
    },
    {
      "q": "De que forma esse case demonstra o princípio de ‘Dive Deep’?",
      "a": "Não parei na superfície dos números; investiguei as origens dos comportamentos, combinei quanti com feedback real e refinei o funil até entender exatamente onde o cliente desistia e por quê. Esse mergulho revelou a causa e guiou a solução."
    }
  ]
};

export default case_1;