// Case 5 - insist_on_highest_standards
const case_5 = {
  id: "unimed-telemedicine-redo-for-excellence",
  title: "Refiz Plataforma de Telemedicina do Zero Após NPS 28 para Atingir Padrão de Excelência (NPS 84)",
  title_pt: "Refiz Plataforma de Telemedicina do Zero Após NPS 28 para Atingir Padrão de Excelência (NPS 84)",
  title_en: "Redid Telemedicine Platform from Scratch After NPS 28 to Achieve Excellence Standard (NPS 84)",
  company: "Unimed",
  period: "03/2022-12/2022",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `Em março de 2022 lançamos a primeira versão da plataforma de telemedicina da Unimed depois de 4 meses de desenvolvimento e investimento de R$ 1,8 milhão. Nas primeiras 3 semanas registramos 2.840 consultas mas o NPS caiu para 28, recebi 1.370 reclamações diretas e médicos relataram 8 desistências por dia por problemas técnicos. Beneficiários idosos (42% da base) não conseguiam conectar sozinhos e o tempo médio de setup era 11 minutos. A diretoria pressionava para "ajustar aos poucos" mas eu sabia que estávamos entregando mediocridade.`,
    t: `Eu assumi ownership total do produto e tomei a decisão mais difícil: pausar todas as consultas por 15 dias, admitir publicamente que a plataforma não atendia nosso padrão de excelência e comprometer-me pessoalmente a refazer do zero com foco em simplicidade e confiabilidade. Meu compromisso público foi atingir NPS acima de 75 em 90 dias ou pedir demissão.`,
    a: `Primeiro, eu pausei a plataforma no dia 22 de março e liguei pessoalmente para os 87 médicos parceiros e para 340 beneficiários que haviam agendado consultas, pedindo desculpas e explicando que não aceitaria entregar serviço abaixo do padrão de saúde que mereciam. Publiquei carta aberta no portal e aceitei críticas públicas. Segundo, montei war-room com 12 pessoas (incluindo 3 médicos e 5 beneficiários idosos) e redesenhei a jornada completa em 8 dias: eliminei 14 telas, reduzi o cadastro para 3 cliques, implementei vídeo-teste obrigatório antes de agendar e criei botão SOS que conectava com suporte em 40 segundos. Terceiro, reescrevi 78% do código front-end, migrei de WebRTC para Vonage (mais estável), adicionei fallback automático para telefone se conexão caísse e implementei tutorial interativo de 2 minutos narrado por voz. Enfrentei resistência do CTO que achava "desperdício" jogar fora código, mas apresentei ao conselho os custos de reputação (R$ 4,2 milhões estimados em churn) e consegui aprovação. Durante 60 dias testei pessoalmente com 120 beneficiários reais em suas casas, ajustei 43 detalhes de UX e só liberei quando 95% conseguiram conectar sozinhos em menos de 3 minutos.`,
    r: `Relançamos em 15 de junho com zero incidentes técnicos. Nas primeiras 4 semanas o NPS saltou para 84, tempo de setup caiu para 2min20s, médicos reportaram zero desistências técnicas e conseguimos 8.600 consultas no primeiro mês (3x o volume anterior). Taxa de sucesso na primeira tentativa chegou a 96,2%, reclamações técnicas caíram 94% e o tempo médio de suporte caiu de 11 para 2 minutos. Beneficiários idosos enviaram 237 mensagens de agradecimento e a Unimed ganhou prêmio de Inovação Digital da ABRAMGE em novembro. O investimento adicional de R$ 680 mil foi recuperado em 4 meses pelo aumento de adesão e redução de custo operacional (R$ 3,1 milhões/ano). A plataforma virou case de excelência apresentado em 6 Unimeds regionais.`,
    l: `Aprendi que insistir nos mais altos padrões às vezes significa ter coragem de admitir publicamente que algo não está bom o suficiente e recomeçar do zero. Refazer não é fracasso, é compromisso com excelência. Quando você coloca o cliente (beneficiário) no centro e não aceita mediocridade, a equipe se mobiliza e o resultado sempre supera. Hoje, sempre que vejo produto com NPS abaixo de 60, questiono se devemos pausar e refazer em vez de "consertar aos poucos".`
  },
  en: {
    s: `In March 2022 we launched Unimed's first telemedicine platform after 4 months of development and BRL 1.8M investment. In the first 3 weeks we logged 2,840 consultations but NPS dropped to 28, I received 1,370 direct complaints, and doctors reported 8 daily dropouts due to technical issues. Elderly beneficiaries (42% of base) couldn't connect alone and average setup time hit 11 minutes. Leadership pushed to "tweak gradually" but I knew we were delivering mediocrity.`,
    t: `I took total product ownership and made the hardest call: pause all consultations for 15 days, publicly admit the platform failed our excellence standard, and personally commit to rebuild from scratch with focus on simplicity and reliability. My public pledge: hit NPS above 75 in 90 days or resign.`,
    a: `First, I paused the platform on March 22 and personally called 87 partner doctors and 340 beneficiaries with scheduled appointments, apologizing and explaining I would not accept delivering healthcare service below the standard they deserved. I published an open letter on the portal and welcomed public criticism. Second, I assembled a 12-person war-room (including 3 doctors and 5 elderly beneficiaries) and redesigned the complete journey in 8 days: removed 14 screens, cut registration to 3 clicks, implemented mandatory video-test before booking, and created an SOS button connecting to support in 40 seconds. Third, I rewrote 78% of front-end code, migrated from WebRTC to Vonage (more stable), added automatic fallback to phone if connection dropped, and built a 2-minute interactive voice-narrated tutorial. I faced CTO resistance who saw it as "wasted code," but I presented to the board the reputational costs (BRL 4.2M estimated churn) and secured approval. For 60 days I personally tested with 120 real beneficiaries in their homes, adjusted 43 UX details, and only released when 95% could connect alone in under 3 minutes.`,
    r: `We relaunched on June 15 with zero technical incidents. In the first 4 weeks NPS jumped to 84, setup time dropped to 2min20s, doctors reported zero technical dropouts, and we hit 8,600 consultations in month one (3x previous volume). First-attempt success rate reached 96.2%, technical complaints fell 94%, and average support time dropped from 11 to 2 minutes. Elderly beneficiaries sent 237 thank-you messages and Unimed won ABRAMGE's Digital Innovation Award in November. The additional BRL 680k investment paid back in 4 months through higher adoption and reduced operational cost (BRL 3.1M/year). The platform became an excellence case presented at 6 regional Unimeds.`,
    l: `I learned that insisting on the highest standards sometimes means having the courage to publicly admit something isn't good enough and start over from scratch. Redoing isn't failure—it's commitment to excellence. When you put the customer (beneficiary) at the center and refuse mediocrity, the team mobilizes and results always exceed expectations. Today, whenever I see a product with NPS below 60, I question whether we should pause and rebuild instead of "patching gradually."`
  },
  fups: [
    {
      q: "Por que você decidiu pausar completamente em vez de fazer ajustes incrementais?",
      a: "Porque os problemas eram estruturais, não superficiais. Ajustes incrementais levariam 6 meses e o NPS continuaria baixo, destruindo reputação. Pausar 15 dias para refazer gerou resultado em 90 dias e protegeu a marca.",
      q_en: "Why did you decide to pause completely instead of making incremental fixes?",
      a_en: "Because the problems were structural, not superficial. Incremental fixes would take 6 months and NPS would stay low, destroying reputation. Pausing 15 days to rebuild delivered results in 90 days and protected the brand."
    },
    {
      q: "Como você lidou com a pressão da diretoria para não pausar?",
      a: "Apresentei dados de custo de reputação (R$ 4,2 milhões em churn estimado), mostrei que médicos estavam recusando usar a plataforma e propus compromisso público pessoal. Quando assumi a responsabilidade total, consegui aprovação.",
      q_en: "How did you handle leadership pressure not to pause?",
      a_en: "I presented reputational cost data (BRL 4.2M estimated churn), showed doctors were refusing the platform, and proposed personal public commitment. When I took total responsibility, I secured approval."
    },
    {
      q: "Qual foi o momento mais difícil desse processo?",
      a: "Ligar para os 340 beneficiários e 87 médicos pedindo desculpas pessoalmente. Alguns estavam irritados, mas a maioria agradeceu a honestidade e disse que preferia esperar para ter algo excelente.",
      q_en: "What was the hardest moment in this process?",
      a_en: "Calling 340 beneficiaries and 87 doctors to personally apologize. Some were upset, but most thanked me for the honesty and said they'd rather wait for something excellent."
    },
    {
      q: "Como você garantiu que a segunda versão seria realmente melhor?",
      a: "Testei pessoalmente com 120 beneficiários reais em suas casas durante 60 dias. Só liberei quando 95% conseguiram conectar sozinhos em menos de 3 minutos. Critério objetivo e inflexível.",
      q_en: "How did you ensure the second version would truly be better?",
      a_en: "I personally tested with 120 real beneficiaries in their homes for 60 days. Only released when 95% could connect alone in under 3 minutes. Objective and inflexible criteria."
    },
    {
      q: "Que métricas você usou para definir 'excelência'?",
      a: "NPS acima de 75, tempo de setup abaixo de 3 minutos, taxa de sucesso na primeira tentativa acima de 90%, zero desistências técnicas reportadas por médicos e menos de 5% de chamados de suporte.",
      q_en: "What metrics did you use to define 'excellence'?",
      a_en: "NPS above 75, setup time under 3 minutes, first-attempt success rate above 90%, zero technical dropouts reported by doctors, and less than 5% support calls."
    },
    {
      q: "Como você convenceu o CTO a aceitar jogar fora 78% do código?",
      a: "Mostrei que o custo de reputação (R$ 4,2 milhões) era 6x maior que o custo de refazer (R$ 680 mil). Apresentei ROI de 4 meses e assumi responsabilidade pelo fracasso técnico se não funcionasse.",
      q_en: "How did you convince the CTO to accept throwing away 78% of the code?",
      a_en: "I showed reputational cost (BRL 4.2M) was 6x higher than rebuild cost (BRL 680k). Presented 4-month ROI and took responsibility for technical failure if it didn't work."
    },
    {
      q: "Qual foi o feedback dos médicos após o relançamento?",
      a: "Zero desistências técnicas nas primeiras 4 semanas, NPS médico saltou de 31 para 88, e 23 médicos enviaram mensagens dizendo que agora confiavam recomendar a plataforma para pacientes.",
      q_en: "What was doctor feedback after relaunch?",
      a_en: "Zero technical dropouts in first 4 weeks, doctor NPS jumped from 31 to 88, and 23 doctors sent messages saying they now trusted recommending the platform to patients."
    },
    {
      q: "Como você mediu o impacto em beneficiários idosos especificamente?",
      a: "Taxa de sucesso de idosos subiu de 51% para 94%, tempo médio de setup caiu de 11 para 2min40s, e recebemos 237 mensagens de agradecimento (vs. 12 na versão anterior).",
      q_en: "How did you measure impact on elderly beneficiaries specifically?",
      a_en: "Elderly success rate rose from 51% to 94%, average setup time dropped from 11 to 2min40s, and we received 237 thank-you messages (vs. 12 in previous version)."
    },
    {
      q: "Que mecanismo você criou para evitar lançar produtos ruins no futuro?",
      a: "Implementei 'Excellence Gate': todo produto digital precisa passar por teste com 30 usuários reais, atingir NPS mínimo de 70 em piloto e ter menos de 10% de chamados técnicos antes de lançar para toda base.",
      q_en: "What mechanism did you create to avoid launching poor products in the future?",
      a_en: "I implemented 'Excellence Gate': every digital product must pass testing with 30 real users, hit minimum NPS of 70 in pilot, and have less than 10% technical support calls before launching to full base."
    },
    {
      q: "Qual foi o aprendizado mais importante sobre 'refazer para excelência'?",
      a: "Que a coragem de admitir falha pública e recomeçar gera mais respeito e resultado que tentar 'consertar aos poucos' algo estruturalmente ruim. Excelência exige padrões inflexíveis, não graduais.",
      q_en: "What was the most important learning about 'redoing for excellence'?",
      a_en: "That the courage to publicly admit failure and restart generates more respect and results than trying to 'gradually fix' something structurally bad. Excellence requires inflexible standards, not gradual ones."
    }
  ]
};

export default case_5;
