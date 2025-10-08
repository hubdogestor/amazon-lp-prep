// Case 3 - deliver_results
const case_3 = {
  id: "sicredi-fraud-reduction",
  title: "Fundei o Mecanismo Anti-Fraude que Cortou Perdas em 46% em 5 Meses",
  title_pt: "Fundei o Mecanismo Anti-Fraude que Cortou Perdas em 46% em 5 Meses",
  title_en: "Built the Anti-Fraud Mechanism that Cut Losses 46% in 5 Months",
  company: "Sicredi Woop",
  period: "01/2020-05/2020",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `R$ 420 mil em perdas. 217% acima da média. O número piscava vermelho no dashboard quando entrei na sala de crise às 7h43 daquela segunda de dezembro de 2019. Pior: 3.200 clientes legítimos bloqueados por engano estavam martelando o SAC, nosso NPS de entrada tinha afundado para 29, e a diretoria jurídica exigia lockdown total — parar todas as aprovações até a chegada de um modelo de IA que levaria seis meses. Seis meses com o Woop sangrando R$ 420k por mês significava R$ 2,5M queimados e o negócio estrangulado. Cinco analistas reagiam manualmente a cada fraude como bombeiros apagando incêndios, sem priorização, sem mecanismo, sob pressão crescente para fechar as torneiras e matar o crescimento. Alguém precisava parar o sangramento sem esperar milagres tecnológicos — e eu decidi que esse alguém seria eu.`,
    t: `Diante desse sangramento financeiro e da pressão para lockdown total que paralisaria o negócio, eu percebi que alguém precisava atacar o problema na raiz sem esperar soluções milagrosas — e eu decidi ser essa pessoa. O desafio crítico que assumi foi cortar perdas de fraude drasticamente mantendo a experiência do cliente intacta, algo que parecia impossível com os recursos disponíveis.

Eu assumi ownership integral da crise e, para criar pressão construtiva e forçar execução acelerada, prometi publicamente ao CEO reduzir perdas em pelo menos 30% em até 5 meses, manter falsos positivos rigorosamente abaixo de 2% e reconquistar NPS de onboarding acima de 55 sem esperar o novo modelo preditivo de 6 meses. Esse compromisso público se tornou meu filtro de decisão para cada ação.`,
    a: `Para honrar esses compromissos audaciosos sem comprometer experiência do cliente, eu sabia que precisava de uma abordagem cirúrgica: atacar os dois inputs que realmente moviam o resultado — detecção e tempo de resposta — com velocidade de guerra e precisão científica.

Eu ataquei sistemáticamente os dois inputs críticos que moviam o resultado, criando mecanismos que funcionariam mesmo sem minha presença. (1) DETECÇÃO: mergulhei 72 horas diretas no SQL analisando 5.137 tentativas suspeitas e cruzei tabelas de onboarding, device e KYC; a descoberta breakthrough foi que 67% dos golpes vinham de documentos sintéticos criados nas últimas 48h. Em uma semana escrevi 7 regras heurísticas em Python (idade X documento, delta OCR vs selfie, cluster de IP) que bloquearam 38% das tentativas já no piloto. → *Com detecção funcionando, precisava acelerar dramaticamente o tempo de resposta a novos ataques.* (2) TEMPO DE RESPOSTA: criei uma war room anti-fraude permanente com risco, produto e engenharia; estipulei daily de 20 minutos, dashboard Datadog com detecção, perdas por faixa e fila de revisão. Cada sinal amarelo acionava runbook em até 2 horas. Quando os fraudadores migraram para deepfake de vídeo, eu condensei as evidências em 12 horas, consegui waiver do jurídico para prova de vida ativa (piscar + comando de voz) e publiquei patch em 36 horas, derrubando 85% do novo vetor. → *Com defesas ativas, precisava recuperar a confiança dos clientes legítimos prejudicados.* (3) RECUPERAÇÃO DE CONFIANÇA: para recuperar confiança, liguei pessoalmente para 30 microempresários bloqueados indevidamente e redesenhei fluxo de contestação para 6 passos com SLA de 4 horas. Programei notificação proativa no app explicando bloqueio e reprocesso, garantindo transparência total.`,
    r: `Essa abordagem de três frentes coordenadas gerou impacto mensurável massivo tanto nas perdas quanto na experiência do cliente — provando que é possível combater fraude sem destruir onboarding.

Em cinco meses as perdas despencaram de R$ 420k para R$ 226k (-46%), superando significativamente a meta de 30%. Eficiência operacional: o tempo médio de resposta a novo padrão de ataque caiu de 21 dias para 18 horas (-96%), falsos positivos permaneceram rigorosamente em 1,6% (abaixo da meta de 2%) e o NPS de onboarding saltou de 29 para 63 (+34 pontos). Impacto na receita: recuperamos R$ 1,9M em receita anualizada aprovando clientes legítimos que antes desistiam do processo. Escalabilidade institucional: o mecanismo se tornou playbook corporativo oficial e foi replicado com sucesso em mais três unidades (cartão, crédito rural, seguros), sustentando redução média de 38% nas perdas. → *Esses resultados cristalizaram aprendizados fundamentais sobre como entregar resultado sob ataque constante.*`,
    l: `Olhando retrospectivamente, a lição que transformou permanentemente minha abordagem a crises de segurança foi esta: entregar resultado sob ataque constante exige tratar dados, resposta e experiência do cliente como uma única linha crítica indivisível.

Aprendi que entregar resultado sustentável sob ataque exige integração total: dados (heurísticas), resposta (war room) e experiência do cliente (contestação transparente) devem funcionar como sistema único, não como frentes separadas. A velocidade importa mais que perfeição — heurísticas rápidas em Python bateram modelo de IA de 6 meses porque geraram folego financeiro imediato. Hoje nunca encerro uma crise de fraude sem garantir três mecanismos ativos: heurísticas funcionando em produção, war room rodando com dailies e jornada de contestação transparente para clientes prejudicados. Essa tríade virou mecanismo padrão replicado em todas as operações de pagamentos que lidero, sustentando redução média de perdas de 35% sem impacto em NPS. Mic-drop: resultado sob ataque só é sustentável quando defesa, resposta e reparação operam como mecanismo único.`
  },
  en: {
    s: `"R$ 420K lost. 217% above average. 3,200 legit customers blocked. Legal demands total lockdown." In December 2019 Woop hit a record low: R$420K in fraudulent onboarding losses (217% above normal), entry NPS dropped to 29, and 3,200 new members were wrongly blocked. Five analysts reacted manually, legal pressure pushed for blanket denials, and the planned AI model was six months away.`,
    t: `Faced with that financial bleeding and pressure for total lockdown that would paralyze the business, I realized someone needed to attack the root problem without waiting for miracle solutions — and I decided to be that person. The critical challenge I owned was to cut fraud losses drastically while keeping customer experience intact, something that seemed impossible with available resources.

I took full ownership of the crisis and, to create constructive pressure and force accelerated execution, publicly promised the CEO I would cut losses by at least 30% within five months, keep false positives rigorously below 2%, and bring onboarding NPS back above 55 without waiting for the six-month predictive model. That public commitment became my decision filter for every action.`,
    a: `To honor those audacious commitments without compromising customer experience, I knew I needed a surgical approach: attack the two inputs that actually moved the outcome — detection and response time — with wartime speed and scientific precision.

I systematically attacked the two critical inputs that moved the outcome, creating mechanisms that would work even without my presence. (1) DETECTION: I spent 72 straight hours in SQL analyzing 5,137 suspicious attempts, joining onboarding, device, and KYC tables; the breakthrough discovery was that 67% of attacks used synthetic documents created within 48 hours. In one week I wrote seven Python heuristics (age vs document, OCR/selfie delta, IP clusters) that blocked 38% of attempts in pilot. → *With detection working, I needed to dramatically accelerate response time to new attacks.* (2) RESPONSE TIME: I created a permanent anti-fraud war room with risk, product, and engineering; ran 20-minute dailies, launched a Datadog dashboard with detection, losses by band, and review queue. Every yellow signal triggered a two-hour runbook. When fraudsters shifted to video deepfakes I condensed evidence in 12 hours, obtained legal waiver for active liveness (blink + voice command), and shipped a patch in 36 hours, shutting down 85% of the new vector. → *With active defenses running, I needed to recover trust from harmed legitimate customers.* (3) TRUST RECOVERY: I personally called 30 wrongly blocked microbusiness owners, redesigned the dispute flow to six steps with a four-hour SLA, and launched proactive in-app notifications explaining blocks and reprocessing, ensuring total transparency.`,
    r: `That coordinated three-front approach generated massive measurable impact on both losses and customer experience — proving it's possible to fight fraud without destroying onboarding.

Within five months losses plummeted from R$420K to R$226K (-46%), significantly exceeding the 30% target. Operational efficiency: average response time to new attack patterns fell from 21 days to 18 hours (-96%), false positives remained rigorously at 1.6% (below 2% target), and onboarding NPS jumped from 29 to 63 (+34 points). Revenue impact: we recovered R$1.9M in annualized revenue by approving legitimate clients who previously abandoned the process. Institutional scalability: the mechanism became the official corporate playbook and was successfully replicated across three additional units (cards, rural credit, insurance), sustaining average loss reduction of 38%. → *These outcomes crystallized fundamental learnings about delivering results under constant attack.*`,
    l: `Looking back, the lesson that permanently transformed my approach to security crises: delivering sustainable results under constant attack requires treating data, response, and customer experience as one indivisible critical path.

I learned that delivering sustainable results under attack demands total integration: data (heuristics), response (war room), and customer experience (transparent disputes) must work as a single system, not separate fronts. Speed matters more than perfection — fast Python heuristics beat a six-month AI model because they generated immediate financial breathing room. I never close a fraud crisis without ensuring three active mechanisms: heuristics running in production, war room operating with dailies, and transparent dispute journey for affected customers. This triad became the standard mechanism replicated across all payment operations I lead, sustaining average loss reduction of 35% without NPS impact. Mic drop: results under attack are only sustainable when defense, response, and repair operate as one unified mechanism.`
  },
  fups: [
    {
      "q": "Como voce priorizou quais regras heuristicas escrever primeiro?",
      "a": "Classifiquei 5.137 tentativas por perda potencial, foco em top 20% dos ataques; escrevi regras para cruzar idade vs documento, checksum de OCR e historico de IP." ,
      "q_en": "How did you prioritize which heuristics to code first?",
      "a_en": "I ranked 5,137 attempts by loss exposure, focused on the top 20% patterns, and coded rules for age/document mismatch, OCR checksum, and IP history." 
    },
    {
      "q": "Qual governanca voce criou para aprovar novas regras em 24h?",
      "a": "Montei triade Risco-Produto-Engenharia, criei checklist de impacto, execucao em 2h e revisao juridica asincrona; somente eu liberava producao." ,
      "q_en": "What governance let you approve new rules in 24 hours?",
      "a_en": "I set a Risk-Product-Engineering triad, built an impact checklist, executed changes in two hours with asynchronous legal review, and I gave the final production go." 
    },
    {
      "q": "Como mensurou a recuperacao de receita?",
      "a": "Comparei coorte de clientes liberados apos heuristicas com baseline Q3/2019: ticket medio R$ 58, LTV 18 meses, resultando em R$ 1,9M anualizado." ,
      "q_en": "How did you measure recovered revenue?",
      "a_en": "I compared the cohort of customers approved after the heuristics with the Q3/2019 baseline: average ticket R$58, 18-month LTV, totaling R$1.9M annualized." 
    },
    {
      "q": "Que indicadores voce acompanhou diariamente na war room?",
      "a": "Tentativas bloqueadas, perdas por vetor, tempo de resposta, falsos positivos, NPS de onboarding e fila de contestacao." ,
      "q_en": "Which indicators did you track daily in the war room?",
      "a_en": "Blocked attempts, losses by vector, response time, false positives, onboarding NPS, and dispute queue backlog." 
    },
    {
      "q": "Como voce conteve o protesto do juridico quanto a prova de vida ativa?",
      "a": "Submeti parecer com base LGPD, demonstrei que 92% das tentativas vinham de persona unica e inseri auditoria quinzenal com log criptografado." ,
      "q_en": "How did you address legal's pushback on active liveness?",
      "a_en": "I provided an LGPD-based legal memo, showed that 92% of attempts originated from one persona, and added a biweekly audit with encrypted logs." 
    },
    {
      "q": "Qual a estrutura do runbook de 2 horas?",
      "a": "Defini 6 passos: detectar, classificar, validar, acao no motor, comunicacao cliente, retroalimentacao; cada passo tinha owner e SLA." ,
      "q_en": "What was inside your two-hour runbook?",
      "a_en": "Six steps: detect, classify, validate, deploy rule, notify customer, feed back to analytics; each step with an owner and SLA." 
    },
    {
      "q": "Como voce manteve falsos positivos em 1,6% mesmo endurecendo regras?",
      "a": "Implementei amostragem diaria de 300 casos, rodei champion-challenger e reverti qualquer regra com impacto >0,3 p.p. em FP." ,
      "q_en": "How did you keep false positives at 1.6% while tightening rules?",
      "a_en": "I sampled 300 cases daily, ran champion-challenger tests, and rolled back any rule that raised false positives above 0.3 p.p." 
    },
    {
      "q": "Que aprendizado voce compartilhou com as outras unidades?",
      "a": "Documentei heuristicas, matriz de risco e roteiro de comunicacao em playbook de 18 paginas e treinei squads de cartao, rural e seguros." ,
      "q_en": "What did you pass to the other business units?",
      "a_en": "I documented heuristics, risk matrix, and communication scripts in an 18-page playbook and trained the card, rural, and insurance squads." 
    },
    {
      "q": "Como voce lidou com clientes bloqueados indevidamente?",
      "a": "Criei canal direto comigo, resposta em 4h, credito de R$ 50 em tarifa e acompanhamento do gerente de conta por 30 dias." ,
      "q_en": "How did you handle wrongly blocked customers?",
      "a_en": "I opened a direct line with me, set a four-hour response, offered a R$50 fee credit, and assigned account-manager follow-up for 30 days." 
    },
    {
      "q": "Qual a maior decisao de trade-off que voce tomou no projeto?",
      "a": "Priorizei heuristicas rapidas em vez de treinar modelo de IA de 12 semanas; aceitei precisao menor no inicio para gerar folego financeiro imediato." ,
      "q_en": "What was the toughest trade-off you made?",
      "a_en": "I chose fast heuristics over a 12-week ML model, accepting slightly lower accuracy early on to generate immediate financial relief." 
    }
  ]
};

export default case_3;
