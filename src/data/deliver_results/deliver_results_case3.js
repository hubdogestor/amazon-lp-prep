// Case 3 - deliver_results - nao fiz o essay
const case_3 = {
  id: "sicredi-fraud-reduction",
  title: "Fundei o Mecanismo Anti-Fraude que Cortou Perdas em 46% em 5 Meses",
  title_pt: "Fundei o Mecanismo Anti-Fraude que Cortou Perdas em 46% em 5 Meses",
  title_en: "Built the Anti-Fraud Mechanism that Cut Losses 46% in 5 Months",
  company: "Sicredi Woop",
  period: "01/2020-05/2020",
  role: "Product Manager",
  keywords: "#crise-fraude | #resposta-rápida | #criar-mecanismos | #impacto-financeiro | #heurísticas",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `"R$ 420 mil em perdas. 217% acima da média. Lockdown total." O número piscava vermelho no dashboard quando entrei na sala de crise às 7h43 daquela segunda de dezembro de 2019. O Woop estava sangrando: R$ 420k mensais em fraudes de onboarding, NPS despencou para 29, 3.200 clientes legítimos bloqueados por engano martelando o SAC. A diretoria jurídica exigia parar todas as aprovações até a chegada de um modelo de IA que levaria seis meses. Seis meses significava R$ 2,5M queimados e o negócio estrangulado. Cinco analistas reagiam manualmente como bombeiros apagando incêndios, sem priorização, sem mecanismo, sob pressão crescente para fechar as torneiras e matar o crescimento.`,
    t: `Diante desse sangramento financeiro e da pressão para lockdown total que paralisaria o negócio, eu decidi ser a pessoa que atacaria o problema na raiz sem esperar soluções milagrosas. Meu desafio era cortar perdas de fraude drasticamente mantendo a experiência do cliente intacta, algo que parecia impossível com os recursos disponíveis. Assumi ownership integral da crise e prometi publicamente ao CEO reduzir perdas em pelo menos 30% em 5 meses, manter falsos positivos abaixo de 2% e reconquistar NPS de onboarding acima de 55.`,
    a: `Eu ataquei sistematicamente os dois inputs críticos que moviam o resultado, criando mecanismos que funcionariam mesmo sem minha presença. Primeiro, mergulhei 72 horas diretas no SQL analisando 5.137 tentativas suspeitas, cruzando tabelas de onboarding, device e KYC. A descoberta breakthrough: 67% dos golpes vinham de documentos sintéticos criados nas últimas 48h. Em uma semana escrevi 7 regras heurísticas em Python (idade vs documento, delta OCR vs selfie, cluster de IP) que bloquearam 38% das tentativas já no piloto. Segundo, criei war room anti-fraude permanente com risco, produto e engenharia, com dailies de 20 minutos e dashboard Datadog rastreando detecção, perdas e fila de revisão. Cada sinal amarelo acionava runbook em até 2 horas. Quando fraudadores migraram para deepfake de vídeo, condensei evidências em 12 horas, consegui waiver jurídico para prova de vida ativa e publiquei patch em 36 horas, derrubando 85% do novo vetor. Terceiro, para recuperar confiança, liguei pessoalmente para 30 microempresários bloqueados indevidamente e redesenhei fluxo de contestação para 6 passos com SLA de 4 horas, programando notificação proativa no app explicando bloqueio e reprocesso.`,
    r: `Eu entreguei resultados que salvaram o negócio sem destruir a experiência do cliente. Em cinco meses, as perdas despencaram de R$ 420k para R$ 226k (-46%), superando significativamente a meta de 30%. O tempo médio de resposta a novo padrão de ataque caiu de 21 dias para 18 horas (-96%), falsos positivos permaneceram em 1,6% (abaixo da meta de 2%) e o NPS de onboarding saltou de 29 para 63 (+34 pontos). Recuperamos R$ 1,9M em receita anualizada aprovando clientes legítimos que antes desistiam do processo. O mecanismo se tornou playbook corporativo oficial e foi replicado com sucesso em mais três unidades (cartão, crédito rural, seguros), sustentando redução média de 38% nas perdas.`,
    l: `Aprendi que entregar resultado sustentável sob ataque exige integração total: dados (heurísticas), resposta (war room) e experiência do cliente (contestação transparente) devem funcionar como sistema único, não como frentes separadas. A velocidade importa mais que perfeição -- heurísticas rápidas em Python bateram modelo de IA de 6 meses porque geraram fôlego financeiro imediato. Hoje nunca encerro uma crise de fraude sem garantir três mecanismos ativos: heurísticas funcionando em produção, war room rodando com dailies e jornada de contestação transparente. Resultado sob ataque só é sustentável quando defesa, resposta e reparação operam como mecanismo único.`
  },
  en: {
    s: `"R$420K lost. 217% above average. Total lockdown." The number blinked red on the dashboard when I entered the crisis room at 7:43 AM that Monday in December 2019. Woop was bleeding: R$420K monthly in onboarding fraud, NPS plummeted to 29, 3,200 legitimate customers wrongly blocked hammering customer service. Legal demanded stopping all approvals until an AI model arrived in six months. Six months meant R$2.5M burned and business strangled. Five analysts reacted manually like firefighters, no prioritization, no mechanism, under growing pressure to shut off taps and kill growth.`,
    t: `Faced with that financial bleeding and pressure for total lockdown that would paralyze the business, I decided to be the person who would attack the root problem without waiting for miracle solutions. My challenge was to cut fraud losses drastically while keeping customer experience intact, something that seemed impossible with available resources. I took full ownership of the crisis and publicly promised the CEO I would cut losses by at least 30% in 5 months, keep false positives below 2%, and bring onboarding NPS back above 55.`,
    a: `I systematically attacked the two critical inputs that moved the outcome, creating mechanisms that would work even without my presence. First, I spent 72 straight hours in SQL analyzing 5,137 suspicious attempts, joining onboarding, device, and KYC tables. The breakthrough discovery: 67% of attacks used synthetic documents created within 48 hours. In one week I wrote 7 Python heuristics (age vs document, OCR/selfie delta, IP clusters) that blocked 38% of attempts in pilot. Second, I created permanent anti-fraud war room with risk, product, and engineering, running 20-minute dailies and Datadog dashboard tracking detection, losses, and review queue. Every yellow signal triggered 2-hour runbook. When fraudsters shifted to video deepfakes, I condensed evidence in 12 hours, obtained legal waiver for active liveness, and shipped patch in 36 hours, shutting down 85% of the new vector. Third, to recover trust, I personally called 30 wrongly blocked microbusiness owners, redesigned dispute flow to 6 steps with 4-hour SLA, and launched proactive in-app notifications explaining blocks and reprocessing.`,
    r: `I delivered results that saved the business without destroying customer experience. In five months, losses plummeted from R$420K to R$226K (-46%), significantly exceeding the 30% target. Average response time to new attack patterns fell from 21 days to 18 hours (-96%), false positives remained at 1.6% (below 2% target), and onboarding NPS jumped from 29 to 63 (+34 points). We recovered R$1.9M in annualized revenue by approving legitimate clients who previously abandoned the process. The mechanism became official corporate playbook and was successfully replicated across three additional units (cards, rural credit, insurance), sustaining average loss reduction of 38%.`,
    l: `I learned that delivering sustainable results under attack requires total integration: data (heuristics), response (war room), and customer experience (transparent disputes) must work as a single system, not separate fronts. Speed matters more than perfection -- fast Python heuristics beat a 6-month AI model because they generated immediate financial breathing room. I never close a fraud crisis without ensuring three active mechanisms: heuristics running in production, war room operating with dailies, and transparent dispute journey. Results under attack are only sustainable when defense, response, and repair operate as one unified mechanism.`
  },
  fups: [
    // --- 6 PERGUNTAS OBRIGATÓRIAS ---
    {
      "q": "Qual foi seu maior erro ou falha neste caso?",
      "a": "Demorei 10 dias para perceber que fraudadores adaptariam às heurísticas. Quando migraram para deepfake na semana 3, perdemos momentum e perdas subiram 40% em 2 dias. Se tivesse montado sistema de detecção de mudança de padrão desde o início, teríamos reagido em horas, não dias.",
      "q_en": "What was your biggest mistake or failure in this case?",
      "a_en": "I took 10 days to realize fraudsters would adapt to heuristics. When they migrated to deepfakes in week 3, we lost momentum and losses shot up 40% in 2 days. If I had built pattern-shift detection system from start, we would have reacted in hours, not days."
    },
    {
      "q": "O que você faria diferente hoje?",
      "a": "Construiria sistema de monitoramento de evolução de ataque desde dia 1, não só dashboard de perdas. Incluiria alertas automáticos para mudanças de padrão (ex: cluster novo de IPs, spike de rejeição OCR). Isso teria me dado 5 dias de vantagem sobre o deepfake.",
      "q_en": "What would you do differently today?",
      "a_en": "I would build attack evolution monitoring system from day 1, not just loss dashboard. I would include automatic alerts for pattern shifts (e.g., new IP clusters, OCR rejection spikes). That would have given me 5 days advantage over deepfake."
    },
    {
      "q": "Qual foi o obstáculo mais difícil de superar?",
      "a": "A migração para deepfake de vídeo na semana 3. Fraudadores descobriram nossas heurísticas e atacaram o ponto cego: prova de vida passiva. Cancelei férias, montei war room 24/7, condensei evidências em 12h, consegui waiver jurídico e publiquei patch em 36h. Foi corrida contra relógio.",
      "q_en": "What was the hardest obstacle to overcome?",
      "a_en": "The migration to video deepfakes in week 3. Fraudsters discovered our heuristics and attacked the blind spot: passive liveness. I canceled vacation, set up 24/7 war room, condensed evidence in 12h, got legal waiver, and shipped patch in 36h. It was race against time."
    },
    {
      "q": "Quais foram os principais riscos e como você os mitigou?",
      "a": "1) Falsos positivos matarem NPS: trackeei daily e mantive <2%; 2) Jurídico bloquear prova de vida ativa: assumi responsabilidade pessoal e propus piloto limitado; 3) Fraudadores descobrirem heurísticas: criei war room permanente para resposta rápida; 4) Equipe queimar sob pressão: celebrei pequenas vitórias e protegi folgas.",
      "q_en": "What were the main risks and how did you mitigate them?",
      "a_en": "1) False positives killing NPS: tracked daily and kept <2%; 2) Legal blocking active liveness: took personal responsibility and proposed limited pilot; 3) Fraudsters discovering heuristics: created permanent war room for fast response; 4) Team burning out under pressure: celebrated small wins and protected time off."
    },
    {
      "q": "Que dados você usou e qual foi a racional de cálculo?",
      "a": "Cruzei 5.137 tentativas suspeitas no SQL (onboarding × device × KYC). Descobri que docs sintéticos (emitidos <48h) tinham taxa de fraude 340% maior. Calculei que 7 heurísticas (idade vs doc, delta OCR/selfie, cluster IP) bloqueavam 38% das tentativas com apenas 1,6% de falsos positivos. ROI: R$ 194k/mês em perdas evitadas + R$ 1,9M/ano em receita recuperada.",
      "q_en": "What data did you use and what was your calculation rationale?",
      "a_en": "I cross-referenced 5,137 suspicious attempts in SQL (onboarding × device × KYC). I found synthetic docs (issued <48h) had 340% higher fraud rate. I calculated 7 heuristics (age vs doc, OCR/selfie delta, IP clusters) blocked 38% of attempts with only 1.6% false positives. ROI: R$194K/month in avoided losses + R$1.9M/year in recovered revenue."
    },
    {
      "q": "Como você usou o aprendizado deste caso em outros contextos?",
      "a": "A tríade detecção-resposta-reparação virou playbook oficial: repliquei em cartão, crédito rural e seguros no Sicredi, sempre com heurísticas rápidas, war room permanente e contestação transparente. Redução média de 38% em perdas sem impactar NPS. Hoje nunca fecho crise de fraude sem garantir esses 3 mecanismos ativos.",
      "q_en": "How did you use the learning from this case in other contexts?",
      "a_en": "The detection-response-repair triad became official playbook: I replicated in cards, rural credit, and insurance at Sicredi, always with fast heuristics, permanent war room, and transparent disputes. Average 38% loss reduction without impacting NPS. Today I never close fraud crisis without ensuring these 3 active mechanisms."
    },
    // --- FUPs COMPLEMENTARES ---
    {
      "q": "Como voce descobriu que 67% das fraudes vinham de documentos sinteticos?",
      "a": "Eu passei 72 horas diretas no SQL cruzando tabelas de onboarding, device e KYC. Notei padrao estranho: documentos com data de emissao muito recente (48h) tinham taxa de fraude 340% maior. Cruzei com dados de OCR e selfie e confirmei: documentos sinteticos tem delta maior entre foto e selfie.",
      "q_en": "How did you discover 67% of fraud came from synthetic documents?",
      "a_en": "I spent 72 straight hours in SQL joining onboarding, device, and KYC tables. I noticed strange pattern: documents with very recent issue dates (48h) had 340% higher fraud rate. I cross-referenced with OCR and selfie data and confirmed: synthetic documents have larger delta between photo and selfie."
    },
    {
      "q": "Qual foi o maior desafio tecnico na implementacao das heuristicas?",
      "a": "Balancear precisao com velocidade. Heuristicas muito rigorosas bloqueavam clientes legitimos, muito frouxas deixavam fraudes passar. Eu testei 23 combinacoes diferentes ate achar o sweet spot: 7 regras que bloqueavam 38% das fraudes com apenas 1,6% de falsos positivos.",
      "q_en": "What was the biggest technical challenge implementing heuristics?",
      "a_en": "Balancing precision with speed. Too strict heuristics blocked legitimate customers, too loose let fraud through. I tested 23 different combinations until finding the sweet spot: 7 rules that blocked 38% of fraud with only 1.6% false positives."
    },
    {
      "q": "Como voce conseguiu waiver juridico para prova de vida ativa em 12 horas?",
      "a": "Eu condensei todas as evidencias de deepfake em apresentacao de 15 slides, mostrei impacto financeiro (R$ 180k em 3 dias), propus piloto limitado a 500 usuarios e assumi responsabilidade pessoal por qualquer problema de compliance. Juridico aprovou teste controlado.",
      "q_en": "How did you get legal waiver for active liveness in 12 hours?",
      "a_en": "I condensed all deepfake evidence into 15-slide presentation, showed financial impact (R$180K in 3 days), proposed pilot limited to 500 users, and took personal responsibility for any compliance issues. Legal approved controlled test."
    },
    {
      "q": "Qual foi o momento mais critico da crise?",
      "a": "Semana 3, quando fraudadores descobriram nossas heuristicas e migraram para deepfake de video. Perdas voltaram a subir 40% em 2 dias. Eu cancelei ferias, montei war room 24/7 e em 36 horas tinhamos patch funcionando. Foi corrida contra o tempo.",
      "q_en": "What was the most critical moment of the crisis?",
      "a_en": "Week 3, when fraudsters discovered our heuristics and migrated to video deepfakes. Losses shot back up 40% in 2 days. I canceled vacation, set up 24/7 war room, and in 36 hours we had working patch. It was race against time."
    },
    {
      "q": "Como voce mediu o impacto na experiencia do cliente?",
      "a": "Eu trackeei NPS de onboarding (29→63), tempo de aprovacao para clientes legitimos (4h→2h), taxa de abandono no processo (-23%) e satisfacao com suporte via contestacao. Tambem liguei pessoalmente para 30 clientes bloqueados para entender a dor.",
      "q_en": "How did you measure impact on customer experience?",
      "a_en": "I tracked onboarding NPS (29→63), approval time for legitimate customers (4h→2h), process abandonment rate (-23%), and support satisfaction via disputes. I also personally called 30 blocked customers to understand their pain."
    },
    {
      "q": "Que resistencia voce enfrentou da equipe de risco?",
      "a": "Risco queria esperar modelo de IA 'perfeito' de 6 meses. Eu mostrei que heuristicas rapidas em Python entregariam 70% do resultado em 1 semana vs 100% em 6 meses. Convenci mostrando que velocidade valia mais que perfeicao em crise.",
      "q_en": "What resistance did you face from the risk team?",
      "a_en": "Risk wanted to wait for 'perfect' 6-month AI model. I showed that fast Python heuristics would deliver 70% of results in 1 week vs 100% in 6 months. I convinced them showing speed was worth more than perfection in crisis."
    },
    {
      "q": "Como voce garantiu que o mecanismo funcionasse sem sua presenca?",
      "a": "Eu documentei todas as heuristicas, criei runbooks para cada tipo de ataque, treinei 3 analistas para operar a war room e estabeleci metricas automatizadas com alertas. Quando sai, o sistema continuou funcionando sozinho.",
      "q_en": "How did you ensure the mechanism worked without your presence?",
      "a_en": "I documented all heuristics, created runbooks for each attack type, trained 3 analysts to operate war room, and established automated metrics with alerts. When I left, the system continued working by itself."
    },
    {
      "q": "Qual aprendizado voce aplicou em outras operacoes de pagamento?",
      "a": "A triada: deteccao (heuristicas), resposta (war room) e reparacao (contestacao transparente). Repliquei em cartao, credito rural e seguros. Mesmo framework, contextos diferentes. Reducao media de 35% em perdas sem impacto em NPS.",
      "q_en": "What learning did you apply to other payment operations?",
      "a_en": "The triad: detection (heuristics), response (war room), and repair (transparent disputes). I replicated in cards, rural credit, and insurance. Same framework, different contexts. Average 35% loss reduction without NPS impact."
    },
    {
      "q": "Como voce lidou com a pressao da diretoria durante a crise?",
      "a": "Transparencia radical: dashboard diario com perdas, deteccoes, falsos positivos e NPS. Compartilhei tanto sucessos quanto fracassos, sempre com plano de acao. Diretoria parou de pressionar quando viu que eu tinha controle real dos numeros.",
      "q_en": "How did you handle board pressure during the crisis?",
      "a_en": "Radical transparency: daily dashboard with losses, detections, false positives, and NPS. I shared both successes and failures, always with action plan. Board stopped pressuring when they saw I had real control of numbers."
    },
    {
      "q": "Qual foi o ROI do investimento em anti-fraude?",
      "a": "Economia de R$ 194k mensais em perdas evitadas, mais R$ 1,9M anualizados em receita recuperada de clientes legitimos. Investimento total: R$ 80k (minha dedicacao + ferramentas). ROI de 2.400% no primeiro ano.",
      "q_en": "What was the ROI of the anti-fraud investment?",
      "a_en": "R$194K monthly savings in avoided losses, plus R$1.9M annualized in recovered revenue from legitimate customers. Total investment: R$80K (my dedication + tools). ROI of 2,400% in first year."
    }
  ]
};

export default case_3;
