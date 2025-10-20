// Case 4 - are_right_a_lot
const case_4 = {
  id: "sicredi-wrong-fraud-model-pivot",
  title: "Eu Estava Errado Sobre Modelo de Fraude: Tive Humildade para Pivotar e Aprender com Analista Junior",
  title_pt: "Eu Estava Errado Sobre Modelo de Fraude: Tive Humildade para Pivotar e Aprender com Analista Junior",
  title_en: "I Was Wrong About Fraud Model: Had Humility to Pivot and Learn from Junior Analyst",
  company: "Sicredi",
  period: "02/2021-05/2021",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `Falsos positivos: 23%. Fraudes escapando: 34%. O dashboard piscava vermelho no décimo dia de produção, março de 2021, e o número me socava no estômago. Eu tinha 15 anos de experiência em payments, tinha usado essa abordagem com sucesso no Bradesco, estava 95% confiante — e estava completamente errado. Seis semanas de desenvolvimento, R$ 180 mil investidos, um modelo de detecção de fraude em Pix baseado em VALOR e FREQUÊNCIA que eu tinha arquitetado pessoalmente estava falhando de forma espetacular: bloqueando clientes legítimos em massa (23% de falso positivo quando esperávamos 8%) enquanto deixava um terço das fraudes reais passarem despercebidas. Clientes furiosos bombardeavam o SAC, fraudadores riam na nossa cara, e meu ego sangrava junto com os R$ 180k queimados. Pior: Marina, analista júnior com nove meses de Sicredi, tinha dados provando que eu estava focando nas variáveis erradas — e minha primeira reação foi defensiva. Eu estava errado, ela estava certa, e eu precisava decidir: proteger meu ego de 15 anos ou salvar o Sicredi de mais R$ 600k em perdas nos próximos dois meses.`,
    t: `Como Head of Payments eu era responsavel por entregar modelo de fraude eficaz que protegesse o Sicredi sem prejudicar experiencia do cliente. Minha responsabilidade era reconhecer rapidamente quando minha abordagem estava falhando e pivotar para solucao melhor, mesmo que isso significasse admitir publicamente que eu estava errado depois de 15 anos de experiencia e R$ 180k investidos.`,
    a: `No dia 11 de producao eu convoquei post-mortem de emergencia com o time de 8 pessoas. Marina, analista junior de dados com 9 meses de Sicredi, apresentou analise que contradzia minha hipotese: ela mostrou que 78% das fraudes reais tinham VALORES BAIXOS (R$ 200-800) em HORARIOS ESPECIFICOS (madrugada, 2am-5am) para CPFs COM RELACIONAMENTO RECENTE (< 15 dias). Meu modelo estava focando nas variaveis erradas (valor alto, frequencia) e ignorando as variaveis certas (horario, relacionamento, padrão). Minha primeira reacao foi defensiva: argumentei que horario era variavel fraca porque clientes legitimos tambem usam Pix de madrugada. Marina me mostrou os dados: apenas 3% dos clientes legitimos usavam Pix entre 2-5am versus 67% dos fraudadores. Eu estava errado e ela estava certa. No dia 12 eu tomei 3 decisoes: (1) pausei o modelo atual imediatamente apesar dos R$ 180k ja investidos; (2) promovi Marina para co-lead tecnica do novo modelo; (3) pedi a ela para liderar a revisao completa da abordagem com autonomia total. Em reuniao de diretoria eu assumi publicamente: 'Eu estava errado sobre as variaveis criticas. Marina identificou o padrao correto e agora ela vai liderar o pivot.' Alguns diretores ficaram desconfortaveis com um Head admitindo erro tao explicito mas o CTO me apoiou: 'Isso e are right a lot. Leonardo esta priorizando estar certo mais vezes, nao proteger ego.' Durante marco e abril eu trabalhei PARA Marina: eu executava tarefas que ela definia, removia impedimentos e questionava hipoteses dela com dados (nao com autoridade). Marina liderou redesenho do modelo com 4 variaveis: (1) horario da transacao; (2) idade do relacionamento beneficiario; (3) padrao de navegacao pre-transacao; (4) device fingerprint. Eu aprendi MUITO: tecnicas de feature engineering que eu nao conhecia, uso de embeddings para relacionamento, analise de sequencia temporal. Marina me ensinou e eu absorvi sem ego.`,
    r: `O novo modelo entrou em producao em maio com resultados opostos: taxa de falsos positivos caiu de 23% para 4.2% e deteccao de fraudes reais subiu de 66% para 91%. Economizamos R$ 1.8M em fraudes evitadas nos primeiros 30 dias versus R$ 890k do modelo antigo (2x melhor). NPS de clientes que tinham sido bloqueados indevidamente subiu de 12 para 58 quando paramos de bloquea-los. Marina foi promovida para coordenadora de fraud analytics em junho (6 meses antes do esperado) e eu publicamente creditei ela em all-hands de 400 pessoas. O caso virou exemplo interno de lideranca que aprende: eu apresentei 'Como Eu Estava Errado e O Que Aprendi' em sessao de tech talks e 120 pessoas participaram. Tres outros leads adotaram a pratica de fazer post-mortems publicos de decisoes erradas. Mais importante: o aprendizado sobre feature engineering de relacionamento que Marina me ensinou eu apliquei depois na Unimed no modelo de autorizacao medica (adicionamos 'historico de relacionamento medico-paciente' como feature) e melhoramos acuracia de 87% para 93%.`,
    l: `Aprendi que 'are right a lot' nao significa nunca estar errado, significa: (1) reconhecer rapidamente quando esta errado sem proteger ego; (2) promover quem tem razao independente de senioridade e dar autonomia real; (3) aprender genuinamente com quem te corrigiu. A parte mais dificil foi o ego: admitir publicamente erro depois de 15 anos de experiencia e R$ 180k investidos. Mas aprendi que pausar projeto errado rapido e mais barato que insistir no erro: pausamos com R$ 180k investidos, se insistissemos por mais 2 meses perderiamos R$ 600k adicionais em fraudes nao detectadas. Aprendi tambem que criar ambiente onde juniors podem contradizer seniors SALVA a organizacao de bad decisions: se Marina tivesse medo de me contradizer teriamos continuado com modelo ruim por meses. Na Unimed eu institui pratica de 'challenge sessions' onde qualquer pessoa de qualquer nivel pode questionar decisoes tecnicas de leads com dados, sem retaliacao. Isso salvou 2 projetos de arquitetura que estavam indo na direcao errada. Are right a lot e sobre criar sistema onde voce e CORRIGIDO mais vezes, nao sistema onde voce sempre PARECE certo.`
  },
  en: {
    s: `In February 2021 I was leading the development of the new Pix fraud detection model for Sicredi. I had 15 years of payments experience and was 95% confident in my approach: model based on transaction VALUE and FREQUENCY (e.g. block Pix > BRL 3,000 or > 8 transactions per day). I had used this approach successfully at Bradesco and was certain it would work. After 6 weeks of development and BRL 180k invested the model went to production in March. In the first 10 days we had terrible results: false positive rate of 23% (we expected 8%) and 34% of real frauds went undetected. Legitimate customers were being blocked while fraudsters were bypassing the system. I was wrong.`,
    t: `As Head of Payments I was responsible for delivering effective fraud model that protected Sicredi without harming customer experience. My responsibility was to quickly recognize when my approach was failing and pivot to better solution, even if that meant publicly admitting I was wrong after 15 years of experience and BRL 180k invested.`,
    a: `On day 11 of production I called emergency post-mortem with the 8-person team. Marina, junior data analyst with 9 months at Sicredi, presented analysis that contradicted my hypothesis: she showed that 78% of real frauds had LOW VALUES (BRL 200-800) at SPECIFIC TIMES (early morning, 2am-5am) to CPFs with RECENT RELATIONSHIP (< 15 days). My model was focusing on wrong variables (high value, frequency) and ignoring right variables (time, relationship, pattern). My first reaction was defensive: I argued that time was weak variable because legitimate customers also use Pix at dawn. Marina showed me the data: only 3% of legitimate customers used Pix between 2-5am versus 67% of fraudsters. I was wrong and she was right. On day 12 I made 3 decisions: (1) paused current model immediately despite BRL 180k already invested; (2) promoted Marina to technical co-lead of new model; (3) asked her to lead complete approach review with full autonomy. In board meeting I publicly owned: 'I was wrong about critical variables. Marina identified correct pattern and now she will lead the pivot.' Some directors were uncomfortable with a Head admitting error so explicitly but CTO supported me: 'This is are right a lot. Leonardo is prioritizing being right more often, not protecting ego.' During March and April I worked FOR Marina: I executed tasks she defined, removed blockers, and challenged her hypotheses with data (not with authority). Marina led model redesign with 4 variables: (1) transaction time; (2) beneficiary relationship age; (3) pre-transaction navigation pattern; (4) device fingerprint. I learned A LOT: feature engineering techniques I didn't know, use of embeddings for relationship, temporal sequence analysis. Marina taught me and I absorbed without ego.`,
    r: `The new model went to production in May with opposite results: false positive rate dropped from 23% to 4.2% and real fraud detection rose from 66% to 91%. We saved BRL 1.8M in prevented frauds in first 30 days versus BRL 890k from old model (2x better). NPS of customers who had been wrongly blocked rose from 12 to 58 when we stopped blocking them. Marina was promoted to fraud analytics coordinator in June (6 months earlier than expected) and I publicly credited her in 400-person all-hands. The case became internal example of leadership that learns: I presented 'How I Was Wrong and What I Learned' in tech talks session and 120 people participated. Three other leads adopted practice of doing public post-mortems of wrong decisions. More importantly: the learning about relationship feature engineering that Marina taught me I later applied at Unimed in medical authorization model (we added 'doctor-patient relationship history' as feature) and improved accuracy from 87% to 93%.`,
    l: `I learned that 'are right a lot' doesn't mean never being wrong, it means: (1) quickly recognizing when you're wrong without protecting ego; (2) promoting who's right regardless of seniority and giving real autonomy; (3) genuinely learning from who corrected you. The hardest part was ego: publicly admitting error after 15 years of experience and BRL 180k invested. But I learned that pausing wrong project fast is cheaper than insisting on error: we paused with BRL 180k invested, if we had insisted for 2 more months we'd lose additional BRL 600k in undetected frauds. I also learned that creating environment where juniors can contradict seniors SAVES organization from bad decisions: if Marina had been afraid to contradict me we'd have continued with bad model for months. At Unimed I instituted 'challenge sessions' practice where anyone at any level can question technical decisions of leads with data, without retaliation. This saved 2 architecture projects that were going in wrong direction. Are right a lot is about creating system where you're CORRECTED more often, not system where you always APPEAR right.`
  },
  fups: [
    {
      "q": "Qual foi o maior erro que você cometeu no desenvolvimento do modelo de fraude e como impactou o projeto?",
      "a": "Subestimei o padrão de uso do Pix durante madrugada, acreditando que seria similar ao horário comercial (3% vs 67% de diferença real). Esse erro fez o modelo ter 23% de falsos positivos, custando R$ 180 mil em desenvolvimento desnecessário e quase implementando uma solução ineficaz que geraria R$ 600 mil adicionais em fraudes não detectadas nos próximos 2 meses.",
      "q_en": "What was the biggest mistake you made in the fraud model development and how did it impact the project?",
      "a_en": "I underestimated Pix usage patterns during nighttime, believing it would be similar to business hours (3% vs 67% real difference). This mistake made the model have 23% false positives, costing BRL 180 thousand in unnecessary development and almost implementing an ineffective solution that would generate additional BRL 600 thousand in undetected frauds over the next 2 months."
    },
    {
      "q": "O que você faria diferente hoje se uma pessoa mais júnior contradissesse sua decisão técnica?",
      "a": "Hoje criaria um ambiente onde dados vencem hierarquia desde o início, implementaria 'challenge sessions' obrigatórias antes de decisões críticas, e estabeleceria métricas claras de validação. Também promoveria imediatamente quem provar estar certo com dados, independente de senioridade, sinalizando que competência técnica supera tempo de casa.",
      "q_en": "What would you do differently today if a more junior person contradicted your technical decision?",
      "a_en": "Today I would create an environment where data beats hierarchy from the beginning, implement mandatory 'challenge sessions' before critical decisions, and establish clear validation metrics. I would also immediately promote whoever proves to be right with data, regardless of seniority, signaling that technical competence surpasses tenure."
    },
    {
      "q": "Qual foi o maior obstáculo que você enfrentou ao admitir publicamente que estava errado?",
      "a": "O obstáculo principal foi o medo de perder credibilidade perante diretores e equipe após 15 anos de experiência. Superei mostrando dados objetivos: pausar o projeto errado custou R$ 180k mas evitou R$ 600k em perdas futuras, demonstrando que admitir erro rápido é mais barato que proteger ego lentamente. O apoio público do CTO foi crucial.",
      "q_en": "What was the biggest obstacle you faced when publicly admitting you were wrong?",
      "a_en": "The main obstacle was fear of losing credibility with directors and team after 15 years of experience. I overcame it by showing objective data: pausing the wrong project cost BRL 180k but avoided BRL 600k in future losses, demonstrating that admitting error quickly is cheaper than slowly protecting ego. The CTO's public support was crucial."
    },
    {
      "q": "Quais foram os principais riscos de promover uma pessoa mais júnior para co-lead e como mitigou?",
      "a": "Riscos principais: (1) resistência cultural da equipe, (2) dúvidas sobre competência técnica de Marina, (3) possíveis conflitos de autoridade. Mitiguei com: (1) comunicação clara sobre decisão baseada em dados, (2) autonomia real (ela definia roadmap, eu executava), (3) apoio público do CTO e demonstração prática de que ela estava certa.",
      "q_en": "What were the main risks of promoting a more junior person to co-lead and how did you mitigate them?",
      "a_en": "Main risks: (1) team cultural resistance, (2) doubts about Marina's technical competence, (3) possible authority conflicts. I mitigated with: (1) clear communication about data-based decision, (2) real autonomy (she defined roadmap, I executed), (3) CTO's public support and practical demonstration that she was right."
    },
    {
      "q": "Quais dados e racional você usou para convencer os diretores sobre a mudança de abordagem?",
      "a": "Usei dados de análise comportamental mostrando 67% vs 3% de uso do Pix na madrugada, métricas de falsos positivos (23% vs 8% esperado), e cálculo de ROI comparando R$ 180k em custos imediatos vs R$ 600k em fraudes evitadas. O racional foi: melhor perder dinheiro em desenvolvimento errado do que implementar solução ineficaz que custa mais caro no longo prazo.",
      "q_en": "What data and rationale did you use to convince directors about the approach change?",
      "a_en": "I used behavioral analysis data showing 67% vs 3% Pix usage at dawn, false positive metrics (23% vs 8% expected), and ROI calculation comparing BRL 180k in immediate costs vs BRL 600k in avoided frauds. The rationale was: better to lose money on wrong development than implement ineffective solution that costs more expensive in the long term."
    },
    {
      "q": "Como você aplicou o aprendizado de admitir erros publicamente em projetos futuros?",
      "a": "Instituí 'challenge sessions' onde qualquer nível pode questionar decisões técnicas com dados, criei cultura de post-mortems públicos das minhas decisões erradas (fiz 4 tech talks), e promovi 3 pessoas mais jovens baseadas em dados técnicos. Isso resultou em 2 engenheiros juniores questionando decisões arquiteturais corretamente, melhorando qualidade técnica geral.",
      "q_en": "How did you apply the learning of publicly admitting mistakes in future projects?",
      "a_en": "I instituted 'challenge sessions' where any level can question technical decisions with data, created culture of public post-mortems of my wrong decisions (did 4 tech talks), and promoted 3 younger people based on technical data. This resulted in 2 junior engineers correctly questioning architectural decisions, improving overall technical quality."
    },
    {
      q: "Como voce se sentiu quando Marina contradisse sua abordagem publicamente?",
      a: "Honestamente minha primeira reacao foi defensiva: eu tinha 15 anos de experiencia e ela 9 meses. Mas em 30 segundos eu olhei os dados que ela mostrou (3% vs 67% uso de Pix madrugada) e percebi: ela estava certa e eu estava protegendo ego. Escolhi dados sobre ego.",
      q_en: "How did you feel when Marina publicly contradicted your approach?",
      a_en: "Honestly my first reaction was defensive: I had 15 years experience and she had 9 months. But within 30 seconds I looked at data she showed (3% vs 67% dawn Pix usage) and realized: she was right and I was protecting ego. I chose data over ego."
    },
    {
      q: "Por que voce decidiu promover Marina para co-lead em vez de apenas ajustar o modelo?",
      a: "Porque: (1) ela tinha identificado o erro e a solucao, entao ela merecia ownership; (2) eu queria sinalizar para o time que quem tem razao lidera, nao quem tem mais tempo de casa; (3) eu genuinamente queria aprender com ela e trabalhar como co-lead era a melhor forma.",
      q_en: "Why did you decide to promote Marina to co-lead instead of just adjusting the model?",
      a_en: "Because: (1) she had identified the error and solution, so she deserved ownership; (2) I wanted to signal to team that who's right leads, not who has more tenure; (3) I genuinely wanted to learn from her and working as co-lead was best way."
    },
    {
      q: "Como voce lidou com diretores desconfortaveis com sua admissao publica de erro?",
      a: "Eu expliquei com numeros: pausar projeto errado em 11 dias custou R$ 180k mas nos salvou de R$ 600k adicionais em fraudes nao detectadas nos proximos 2 meses. Mostrei que admitir erro rapido e mais barato que proteger ego lento. O CTO me apoiou publicamente.",
      q_en: "How did you handle directors uncomfortable with your public admission of error?",
      a_en: "I explained with numbers: pausing wrong project in 11 days cost BRL 180k but saved us from additional BRL 600k in undetected frauds over next 2 months. I showed that admitting error fast is cheaper than protecting ego slowly. CTO supported me publicly."
    },
    {
      q: "O que especificamente voce aprendeu com Marina sobre feature engineering?",
      a: "Aprendi 3 coisas: (1) usar embeddings de relacionamento (idade de relacionamento beneficiario como feature continua, nao binaria); (2) analise de sequencia temporal pre-transacao (nao so a transacao isolada); (3) combinar behavioral features (navegacao) com transactional features (valor). Eu nao conhecia essas tecnicas.",
      q_en: "What specifically did you learn from Marina about feature engineering?",
      a_en: "I learned 3 things: (1) using relationship embeddings (beneficiary relationship age as continuous feature, not binary); (2) pre-transaction temporal sequence analysis (not just isolated transaction); (3) combining behavioral features (navigation) with transactional features (value). I didn't know these techniques."
    },
    {
      q: "Como voce aplicou esse aprendizado no modelo de autorizacao medica da Unimed?",
      a: "Eu adicionei 'historico de relacionamento medico-paciente' como feature (inspirado no 'relacionamento beneficiario' de Marina): paciente com historico > 6 meses com mesmo medico tinha 94% de aprovacao justificada vs 71% de pacientes novos. Isso melhorou acuracia de 87% para 93%.",
      q_en: "How did you apply this learning to Unimed's medical authorization model?",
      a_en: "I added 'doctor-patient relationship history' as feature (inspired by Marina's 'beneficiary relationship'): patients with history > 6 months with same doctor had 94% justified approval vs 71% for new patients. This improved accuracy from 87% to 93%."
    },
    {
      q: "O que voce mudou na sua forma de liderar depois dessa experiencia?",
      a: "Mudei 2 coisas: (1) institui 'challenge sessions' onde qualquer nivel pode questionar decisoes tecnicas com dados, sem retaliacao; (2) faco post-mortems publicos de minhas decisoes erradas em tech talks (fiz 4 deles na Unimed). Isso cria ambiente onde ser corrigido e valorizado.",
      q_en: "What did you change in your leadership style after this experience?",
      a_en: "I changed 2 things: (1) instituted 'challenge sessions' where any level can question technical decisions with data, without retaliation; (2) do public post-mortems of my wrong decisions in tech talks (did 4 of them at Unimed). This creates environment where being corrected is valued."
    },
    {
      q: "Como voce garantiu que Marina tivesse autonomia real e nao apenas titulo?",
      a: "Eu fiz 3 coisas: (1) ela definia roadmap e eu executava tarefas (nao o contrario); (2) em reunioes de stakeholders eu explicitamente dizia 'Marina decide, eu executo'; (3) quando stakeholders tentavam me bypassar para decisoes eu os redirecionava para Marina. Autonomia real exige comportamento consistente.",
      q_en: "How did you ensure Marina had real autonomy and not just title?",
      a_en: "I did 3 things: (1) she defined roadmap and I executed tasks (not the other way); (2) in stakeholder meetings I explicitly said 'Marina decides, I execute'; (3) when stakeholders tried to bypass me for decisions I redirected them to Marina. Real autonomy requires consistent behavior."
    },
    {
      q: "Qual foi o impacto de voce apresentar 'Como Eu Estava Errado' em tech talks?",
      a: "120 pessoas participaram e 3 outros leads adotaram pratica de post-mortems publicos. Mais importante: 2 engineers juniors me procuraram depois para questionar decisoes de arquitetura que eles achavam erradas (e eles estavam certos em 1 caso). A cultura de challenge melhorou.",
      q_en: "What was the impact of you presenting 'How I Was Wrong' in tech talks?",
      a_en: "120 people participated and 3 other leads adopted public post-mortem practice. More importantly: 2 junior engineers approached me later to question architecture decisions they thought were wrong (and they were right in 1 case). Challenge culture improved."
    },
    {
      q: "Como voce distingue entre estar errado (que voce aceita) e divergencia de opiniao (que voce defende)?",
      a: "Eu uso DADOS objetivos: se alguem me contradiz COM dados que mostram que minha hipotese esta falhando (ex: 23% falsos positivos vs 8% esperado), eu reconheco erro. Se e divergencia de opiniao SEM dados conclusivos, eu defendo minha posicao ate termos dados. Marina tinha dados, entao eu pivoei.",
      q_en: "How do you distinguish between being wrong (which you accept) and difference of opinion (which you defend)?",
      a_en: "I use OBJECTIVE data: if someone contradicts me WITH data showing my hypothesis is failing (e.g. 23% false positives vs 8% expected), I recognize error. If it's difference of opinion WITHOUT conclusive data, I defend my position until we have data. Marina had data, so I pivoted."
    },
    {
      q: "Qual e a coisa mais dificil de admitir publicamente que voce estava errado?",
      a: "A coisa mais dificil e o medo de perder credibilidade: 'Se eu admitir erro publico depois de 15 anos de experiencia as pessoas vao confiar menos em mim.' Mas aprendi o oposto: as pessoas confiam MAIS quando voce admite erro e corrige rapido. O CTO me disse: 'Sua credibilidade subiu porque voce priorizou resultado sobre ego.'",
      q_en: "What's the hardest thing about publicly admitting you were wrong?",
      a_en: "The hardest thing is fear of losing credibility: 'If I admit public error after 15 years experience people will trust me less.' But I learned the opposite: people trust MORE when you admit error and correct fast. CTO told me: 'Your credibility went up because you prioritized outcome over ego.'"
    }
  ]
};

export default case_4;
