// Case 3 - deliver_results
const case_3 = {
  id: "sicredi-fraud-reduction",
  title: "Superação da Meta de Redução de Fraudes em 30% em 6 Meses",
  title_pt: "Superação da Meta de Redução de Fraudes em 30% em 6 Meses",
  title_en: "Exceeding 30% Fraud Reduction Target in 6 Months",
  company: "Sicredi Woop",
  period: "01/2020-06/2020",
  isTopCase: true,
  pt: {
    s: `O banco digital Woop estava sofrendo um aumento súbito e agressivo nas tentativas de fraude de identidade no onboarding. As perdas financeiras estavam crescendo de R$ 180k/mês em Nov/19 para R$ 420k/mês em Dez/19, abalando a confiança de stakeholders. Quando cheguei, a equipe de 5 analistas estava reagindo caso a caso, sem padrão de resposta ou priorização baseada em risco.`,
    t: `Meu papel individual: eu liderei end-to-end, defini escopo e decisões críticas, e atuei como owner único. A diretoria me deu uma missão clara: reduzir as perdas por fraude de onboarding em 30% em 6 meses. O resultado não era negociável. Eu precisava montar uma equipe, definir uma estratégia e entregar esse número.`,
    a: `Ações pessoais: priorizei mudanças, alinhei stakeholders, tomei decisões de trade-off e removi bloqueios. Analisei o problema e determinei que as perdas eram uma função de dois inputs principais: 1) nossa Acurácia de detecção e 2) nossa Velocidade de resposta a novas táticas. EU passei 3 dias no SQL analisando os últimos 5.000 ataques, cruzando tabelas de onboarding, KYC e device fingerprint, até identificar o padrão: 67% usavam documentos sintéticos gerados por IA com data de criação inferior a 48h. Calculei que treinar novo modelo ML levaria 3-4 meses. EU decidi por solução tática: criei 5 regras heurísticas simples em Python (ex: 'if documento_criado_última_48h AND idade_aparente_foto > 10_anos_diferença: FLAG') e deploy em 1 semana, que bloquearam imediatamente 40% dos ataques. No terceiro mês, os fraudadores mudaram de tática para deepfakes em vídeo. Em vez de desanimar, usei o ataque como uma fonte de dados. Em 48 horas, liderei a equipe para lançar um 'hotfix' que exigia uma prova de vida (piscar os olhos 3x) no vídeo, neutralizando 85% dos novos ataques. EU criei uma 'War Room' Anti-Fraude, uma força-tarefa com Produto, Dados e Risco. Minha principal dificuldade foi alinhar a velocidade da Engenharia com a cautela do Risco. Instituí uma reunião diária de 15 minutos às 9h onde revisávamos os dados juntos, o que criou confiança e permitiu a implantação de novas regras em 4-6 horas, não semanas.`,
    r: `Em menos de 5 meses, reduzimos as perdas por fraude de R$ 420k/mês para R$ 190k/mês (45% de redução), superando a meta de 30%. Esse resultado reverteu uma tendência de crescimento de 133% nas perdas do trimestre anterior e nos colocou abaixo do benchmark da indústria (0.12% vs. 0.18%). Tempo médio de resposta a novos padrões: de 3-4 semanas para 48-72 horas. Taxa de falsos positivos mantida em <2%. O playbook que desenvolvemos se tornou o padrão de resposta a incidentes de fraude para todo o banco, sendo implementado em outras 3 unidades de negócio.`,
    l: `Aprendi que, em uma crise de payment operations, a entrega de resultados exige foco, velocidade e resiliência. Um líder precisa criar um mecanismo (a War Room) que permita um ciclo rápido de aprendizado e resposta. Descobri que meu papel mais importante era criar um 'senso de verdade compartilhada' através dos dados, o que permitiu que equipes com culturas diferentes (Risco conservador e Engenharia ágil) colaborassem com eficácia para entregar o resultado.`
  },
  en: {
    s: `The digital bank Woop was suffering a sudden and aggressive increase in identity fraud attempts during onboarding. Financial losses were growing from R$ 180k/month in Nov/19 to R$ 420k/month in Dec/19, shaking stakeholder confidence. When I arrived, the team of 5 analysts was reacting case by case, without response patterns or risk-based prioritization.`,
    t: `My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. The board gave me a clear mission: reduce onboarding fraud losses by 30% in 6 months. The result was non-negotiable. I needed to assemble a team, define a strategy, and deliver that number.`,
    a: `Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. I analyzed the problem and determined that losses were a function of two main inputs: 1) my Detection accuracy and 2) my Response speed to new tactics. I spent 3 days in SQL analyzing the last 5,000 attacks, cross-referencing onboarding, KYC, and device fingerprint tables, until I identified the pattern: 67% used AI-generated synthetic documents with creation dates under 48h. I calculated that training a new ML model would take 3-4 months. I decided on a tactical solution: I created 5 simple heuristic rules in Python (e.g., 'if document_created_last_48h AND apparent_age_photo > 10_years_difference: FLAG') and deployed in 1 week, which immediately blocked 40% of attacks. In the third month, fraudsters switched tactics to deepfake videos. Instead of getting discouraged, I used the attack as a data source. In 48 hours, I led the team to launch a 'hotfix' that required proof of life (blink eyes 3x) in video, neutralizing 85% of new attacks. I created an Anti-Fraud 'War Room,' a task force with Product, Data, and Risk. My main difficulty was aligning Engineering's speed with Risk's caution. I instituted a daily 15-minute meeting at 9am where I reviewed data together, which created trust and allowed new rule deployment in 4-6 hours, not weeks.`,
    r: `In less than 5 months, I reduced fraud losses from R$ 420k/month to R$ 190k/month (45% reduction), exceeding the 30% target. This result reversed a 133% growth trend in losses from the previous quarter and put us below industry benchmark (0.12% vs. 0.18%). Average response time to new patterns: from 3-4 weeks to 48-72 hours. False positive rate maintained at <2%. The playbook I developed became the fraud incident response standard for the entire bank, being implemented in 3 other business units.`,
    l: `I learned that in a payment operations crisis, results delivery requires focus, speed, and resilience. A leader needs to create a mechanism (the War Room) that enables a rapid learning and response cycle. I discovered that my most important role was creating a 'shared sense of truth' through data, which allowed teams with different cultures (conservative Risk and agile Engineering) to collaborate effectively to deliver the result.`
  },
  fups: [
    {
        "q": "Por que você escolheu os dois inputs principais (acurácia do modelo e velocidade de resposta) como os mais críticos para reduzir as fraudes? Considerou outros inputs?",
        "a": "Sim, consideramos outros, como a recuperação de perdas. No entanto, a análise mostrou que a fraude de onboarding era um problema de 'prevenção'. A perda, uma vez ocorrida, era quase irrecuperável. Portanto, a única forma de impactar o resultado era melhorar minha capacidade de bloquear a fraude na porta de entrada, o que é uma função direta da minha acurácia de detecção e da minha velocidade para nos adaptarmos a novos ataques.",
        "q_en": "Why did you choose the two main inputs (model accuracy and response speed) as the most critical for reducing fraud? Did you consider other inputs?",
        "a_en": "Yes, I considered others, like loss recovery. However, analysis showed that onboarding fraud was a 'prevention' problem. Once a loss occurred, it was almost unrecoverable. Therefore, the only way to impact the result was to improve my ability to block fraud at the entry point, which is a direct function of my detection accuracy and my speed to adapt to new attacks."
    },
    {
        "q": "Qual foi o maior desafio ao liderar uma força-tarefa multidisciplinar e como você garantiu alinhamento entre as equipes?",
        "a": "O maior desafio foi o conflito de culturas entre a equipe de Risco (focada em cautela) e a de Engenharia (focada em velocidade). O alinhamento foi forjado na reunião diária da War Room. Ao revisar os dados de ataques do dia anterior juntos, todos tinham a mesma visão do problema. Isso transformou o debate de 'opiniões' para 'decisões baseadas em evidências', criando uma confiança e uma velocidade que não existiam antes.",
        "q_en": "What was the biggest challenge in leading a multidisciplinary task force and how did you ensure alignment between teams?",
        "a_en": "The biggest challenge was the culture clash between the Risk team (focused on caution) and Engineering (focused on speed). Alignment was forged in the daily War Room meeting. By reviewing the previous day's attack data together, everyone had the same view of the problem. This transformed the debate from 'opinions' to 'evidence-based decisions,' creating trust and speed that didn't exist before."
    },
    {
        "q": "Como você priorizou entre implementar regras heurísticas rápidas versus desenvolver soluções baseadas em machine learning?",
        "a": "Eu usei uma abordagem de 'estancar a sangria primeiro'. As regras heurísticas eram como um 'curativo' rápido e eficaz para o ataque imediato. Elas nos deram o fôlego necessário. Em paralelo, iniciamos o trabalho no modelo de ML, que era a 'cirurgia' de longo prazo para criar uma defesa mais robusta e adaptativa. Foi uma estratégia de duas velocidades.",
        "q_en": "How did you prioritize between implementing quick heuristic rules versus developing machine learning-based solutions?",
        "a_en": "I used a 'stop the bleeding first' approach. Heuristic rules were like a quick and effective 'bandage' for the immediate attack. They gave us the necessary breathing room. In parallel, I started work on the ML model, which was the long-term 'surgery' to create a more robust and adaptive defense. It was a two-speed strategy."
    },
    {
        "q": "Se os fraudadores tivessem mudado de estratégia novamente após o hotfix, como você teria adaptado sua abordagem?",
        "a": "Nossa abordagem já era adaptativa. O mecanismo da War Room foi criado exatamente para isso. Um novo ataque seria tratado da mesma forma: 1) Mergulhar nos dados para entender o novo padrão. 2) Implementar uma contra-medida rápida (seja uma regra ou um ajuste). 3) Usar os aprendizados para fortalecer meu modelo de longo prazo. O processo era um ciclo contínuo de defesa e aprendizado.",
        "q_en": "If fraudsters had changed strategy again after the hotfix, how would you have adapted your approach?",
        "a_en": "Our approach was already adaptive. The War Room mechanism was created exactly for this. A new attack would be treated the same way: 1) Dive into data to understand the new pattern. 2) Implement a quick countermeasure (whether a rule or adjustment). 3) Use learnings to strengthen my long-term model. The process was a continuous cycle of defense and learning."
    },
    {
        "q": "Como os aprendizados dessa experiência influenciaram sua forma de liderar em outros projetos subsequentes?",
        "a": "Influenciou profundamente. Aprendi o poder de criar um 'mecanismo de crise' antes que a crise aconteça. Hoje, para qualquer projeto de alto risco, eu estabeleço desde o início uma 'war room' com um ritual de sincronização rápida e um dashboard focado nos inputs chave. Isso me permite detectar e reagir a desvios com muito mais velocidade e eficácia.",
        "q_en": "How did the learnings from this experience influence your way of leading in subsequent projects?",
        "a_en": "It influenced profoundly. I learned the power of creating a 'crisis mechanism' before the crisis happens. Today, for any high-risk project, I establish from the beginning a 'war room' with a rapid synchronization ritual and a dashboard focused on key inputs. This allows me to detect and react to deviations with much more speed and effectiveness."
    },
    {
        "q": "Como você equilibrou o bloqueio de fraudes com o risco de criar atrito para clientes legítimos (falsos positivos)?",
        "a": "Esse foi o meu principal 'balanceamento de qualidade'. Para cada nova regra, monitorávamos de perto a 'taxa de falsos positivos' em um dashboard. Se uma regra se mostrava muito agressiva, eu a ajustávamos em horas. A 'qualidade certa' era a máxima detecção de fraude com o mínimo de impacto na experiência do cliente bom.",
        "q_en": "How did you balance fraud blocking with the risk of creating friction for legitimate customers (false positives)?",
        "a_en": "This was my main 'quality balancing.' For each new rule, I closely monitored the 'false positive rate' on a dashboard. If a rule proved too aggressive, I adjusted it within hours. The 'right quality' was maximum fraud detection with minimum impact on good customer experience."
    },
    {
        "q": "Como você manteve a equipe motivada ao lutar contra um 'inimigo' que estava constantemente mudando de tática?",
        "a": "Eu usei uma analogia de 'jogo de xadrez'. Cada nova tática deles era um 'movimento' que precisávamos antecipar e contra-atacar. Isso transformou a frustração em um desafio intelectual. Eu celebrava cada 'defesa' bem-sucedida, mantendo a energia da equipe alta.",
        "q_en": "How did you keep the team motivated while fighting an 'enemy' that was constantly changing tactics?",
        "a_en": "I used a 'chess game' analogy. Each new tactic of theirs was a 'move' I needed to anticipate and counter-attack. This transformed frustration into an intellectual challenge. I celebrated each successful 'defense,' keeping the team's energy high."
    },
    {
        "q": "O que você fez para garantir que os aprendizados da força-tarefa não se perdessem?",
        "a": "Eu documentamos cada novo padrão de fraude e cada contra-medida em um 'playbook anti-fraude'. Ao final do projeto, realizamos um workshop com a equipe de operações de risco para transferir esse conhecimento e formalizar os novos processos e alertas no dia a dia deles.",
        "q_en": "What did you do to ensure that the task force learnings weren't lost?",
        "a_en": "I documented each new fraud pattern and each countermeasure in an 'anti-fraud playbook.' At the end of the project, I held a workshop with the risk operations team to transfer this knowledge and formalize the new processes and alerts in their daily work."
    },
    {
        "q": "E se vocês não tivessem atingido a meta de 30% em 6 meses?",
        "a": "O resultado é o número, mas a entrega também é a trajetória e o aprendizado. Se estivéssemos consistentemente reduzindo as perdas, mesmo que não atingíssemos o número exato, teríamos demonstrado progresso e justificado a continuação dos esforços, apresentando um plano revisado com os novos aprendizados.",
        "q_en": "What if you hadn't reached the 30% target in 6 months?",
        "a_en": "The result is the number, but delivery is also trajectory and learning. If I were consistently reducing losses, even if I didn't reach the exact number, I would have demonstrated progress and justified continuing efforts, presenting a revised plan with new learnings."
    },
    {
        "q": "Como você superou o contratempo do novo ataque sem desmoralizar a equipe?",
        "a": "Minha mensagem foi: 'Parabéns, equipe. Fomos tão eficazes em bloquear o método antigo que forçamos o inimigo a gastar mais recursos e a nos mostrar sua próxima carta. Agora temos mais dados e sabemos como vencê-los de novo'. Eu enquadrei o ataque como um sinal do meu sucesso, não da minha falha.",
        "q_en": "How did you overcome the setback of the new attack without demoralizing the team?",
        "a_en": "My message was: 'Congratulations, team. I were so effective at blocking the old method that I forced the enemy to spend more resources and show us their next card. Now I have more data and know how to beat them again.' I framed the attack as a sign of my success, not my failure."
    }
]
};

export default case_3;
