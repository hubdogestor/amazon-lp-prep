// insist_on_highest_standards_case5.js
const case_5 = {
  id: "unimed-telemedicine-redo-for-excellence",
  title_pt: "Refiz uma plataforma de telemedicina do zero apos um NPS de 28 para atingir um padrao de excelencia (NPS 84)",
  title_en: "I Rebuilt a Telemedicine Platform from Scratch After an NPS of 28 to Achieve a Standard of Excellence (NPS 84)",
  company: "Unimed",
  period: "03/2022 - 12/2022",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "Em marco de 2022, como Head de Produto Digital na Unimed Porto Alegre, uma cooperativa de saude com 695 mil beneficiarios é receita de R$ 3,2 bilhoes, a plataforma de telemedicina que eu havia liderado lançamento registrou um NPS de apenas 28. O cenário era critico: acumulamos 1.370 reclamacoes no trimestre anterior, com medicos abandonando o sistema por instabilidades técnicas é, o pior, 42% dos beneficiarios idosos enfrentando dificuldades para se conectar. Uma senhora de 82 anos me ligou chorando, dizendo que não conseguia falar com o medico durante uma crise de asma. A diretoria, preocupada com a imagem publica é possiveis processos judiciais, sugeria ajustes graduais para não interromper o servico. Mas eu via isso como uma falha fundamental: estavamos deixando de cumprir nossa missao de cuidar das pessoas na hora de maior vulnerabilidade. A responsabilidade era minha, já que eu havia aprovado o lançamento inicial sem testes suficientes com usuários reais.",
    t: "Minha tarefa, que eu mesmo propus é negociei diretamente com o CEO, era redefinir o padrao de excelencia para o produto. Estabeleci compromissos claros: pausar o servico por 15 dias para evitar mais danos, admitir publicamente a falha via comunicado oficial é reconstruir a plataforma do zero. A meta era ambiciosa: alcancar um NPS acima de 75 em 90 dias, com o compromisso pessoal de que, se não atingisse, eu pediria demissao. Nao se tratava apenas de consertar um app, mas de resgatar a confianca dos beneficiarios, medicos é da propria equipe interna, que estava desmotivada com o fracasso inicial. Eu precisava equilibrar opcoes como manter o sistema antigo com patches rapidos ou investir em uma reconstrucao total, optando pela segunda para garantir sustentabilidade a longo prazo.",
    a: "Iniciei a virada com uma abordagem em tres ondas, sempre priorizando decisoes baseadas em dados é feedback real. Na primeira onda, foquei em accountability é escuta ativa: pausei o servico imediatamente é pessoalmente liguei para 87 medicos é 340 pacientes para pedir desculpas é coletar insights diretos. Em uma dessas chamadas, um paciente idoso me disse que o problema não era so a tecnologia, mas o medo de errar sem apoio humano imediato, o que me levou a priorizar o desenvolvimento de um 'botao de SOS' para conexao rapida com suporte. Analisei hipoteses como se o erro era puramente técnico ou tambem de usabilidade, usando dados de logs que mostravam 68% das falhas em conexoes instaveis, é decidi migrar para a plataforma Vonage para maior estabilidade, mesmo sabendo do risco de vendor lock-in. Na segunda onda, montei uma war room com representantes de medicos, pacientes é a equipe técnica, onde avaliei trade-offs: para financiar os R$ 680 mil adicionais na reconstrucao, negociei o adiamento de um projeto de marketing, o que gerou um conflito com o CMO, mas defendi a decisao com dados projetando uma perda de R$ 2 milhoes em churn se não agissemos. Priorizei features como interface simplificada, reduzindo de 14 para 4 telas no fluxo de consulta. Na terceira onda, liderei a reescrita do código, testando pessoalmente com 120 beneficiarios em suas casas para validar em condicoes reais. Identifiquei um analista junior, o Bruno, que estava desmotivado, é em vez de afasta-lo, deleguei a ele a consolidacao do feedback dos testes, ajudando-o a crescer é apresentando seu relatório diretamente para a diretoria.",
    r: "O relancamento em junho de 2022 foi transformador: o NPS saltou de 28 para 84 em 90 dias, com o tempo medio de setup caindo de 12 minutos para 2 minutos é 20 segundos, é o volume de consultas triplicando de 1.200 para 3.600 por mes. O investimento de R$ 680 mil foi recuperado em apenas 4 meses atraves do aumento na retencao de beneficiarios, evitando um churn projetado de R$ 1,2 milhao. Mas os ganhos foram alem dos numeros: criei o 'Excellence Gate', um mecanismo obrigatorio que exige NPS minimo de 70 em testes piloto para qualquer novo lançamento, garantindo sustentabilidade. Seis meses depois, já sem meu envolvimento direto, esse gate barrou um app de agendamento com NPS 55, forçando a equipe a refinar é lancar com 78. O Bruno, que mentorei, liderou essa reavaliacao, mostrando o impacto humano no desenvolvimento de talentos. Trade-offs como o vendor lock-in valeram a pena, pois elevamos o padrao geral, reduzindo reclamacoes em 92% é melhorando a satisfacao dos medicos de 45% para 89%.",
    l: "Essa experiencia me ensinou que excelencia não é um destino, mas um compromisso diario que exige coragem para admitir falhas é recomeçar. Se eu tivesse conduzido 40 entrevistas profundas com pacientes idosos antes do MVP inicial, teria evitado o desperdicio de R$ 1,8 milhao em desenvolvimento equivocado é o sofrimento desnecessario dos usuários. Hoje, eu faria diferente priorizando ainda mais a validação em campo desde o dia um, integrando usuários reais no design thinking inicial. Apliquei esse aprendizado em projetos subsequentes na SEFAZ, onde implantei gates semelhantes para aprovacoes de sistemas fiscais, evitando lancamentos prematuros é garantindo adesao regulatoria. Tambem percebi que um padrao alto so se mantem se você investe em pessoas: desenvolver o Bruno não so salvou o projeto, mas criou um multiplicador de excelencia na equipe."
  },
  en: {
    s: "In March 2022, as Head of Digital Product at Unimed Porto Alegre, a healthcare cooperative with 695 thousand beneficiaries and R$ 3.2 billion in revenue, the telemedicine platform I had led the launch of registered an NPS of just 28. The scenario was critical: we accumulated 1,370 complaints in the previous quarter, with doctors abandoning the system due to technical instabilities, and worst of all, 42% of elderly beneficiaries facing difficulties connecting. An 82-year-old lady called me crying, saying she couldn't reach her doctor during an asthma crisis. The board, concerned with public image and potential lawsuits, suggested gradual adjustments to avoid interrupting the service. But I saw this as a fundamental failure: we were failing to fulfill our mission of caring for people at their most vulnerable time. The responsibility was mine, as I had approved the initial launch without sufficient real-user testing.",
    t: "My task, which I proposed myself and negotiated directly with the CEO, was to redefine the standard of excellence for the product. I established clear commitments: pause the service for 15 days to prevent further damage, publicly admit the failure via an official statement, and rebuild the platform from scratch. The goal was ambitious: achieve an NPS above 75 in 90 days, with my personal commitment that if I didn't, I would resign. It wasn't just about fixing an app, but about regaining the trust of beneficiaries, doctors, and the internal team, which was demotivated by the initial failure. I needed to balance options like keeping the old system with quick patches or investing in a total rebuild, opting for the latter to ensure long-term sustainability.",
    a: "I started the turnaround with a three-wave approach, always prioritizing data-based decisions and real feedback. In the first wave, I focused on accountability and active listening: I immediately paused the service and personally called 87 doctors and 340 patients to apologize and gather direct insights. In one of those calls, an elderly patient told me the problem wasn't just the technology, but the fear of making mistakes without immediate human support, which led me to prioritize developing an 'SOS button' for quick support connection. I analyzed hypotheses like whether the error was purely technical or also usability-related, using log data showing 68% of failures in unstable connections, and decided to migrate to the Vonage platform for greater stability, even knowing the vendor lock-in risk. In the second wave, I set up a war room with representatives from doctors, patients, and the technical team, where I evaluated trade-offs: to fund the additional R$ 680 thousand in the rebuild, I negotiated the postponement of a marketing project, which created a conflict with the CMO, but I defended the decision with data projecting a R$ 2 million loss in churn if we didn't act. I prioritized features like a simplified interface, reducing from 14 to 4 screens in the consultation flow. In the third wave, I led the code rewrite, personally testing with 120 beneficiaries in their homes to validate in real conditions. I identified a junior analyst, Bruno, who was demotivated, and instead of sidelining him, I delegated to him the consolidation of test feedback, helping him grow and presenting his report directly to the board.",
    r: "The relaunch in June 2022 was transformative: NPS jumped from 28 to 84 in 90 days, with average setup time dropping from 12 minutes to 2 minutes and 20 seconds, and consultation volume tripling from 1,200 to 3,600 per month. The R$ 680 thousand investment was recovered in just 4 months through increased beneficiary retention, avoiding a projected R$ 1.2 million churn. But the gains went beyond numbers: I created the 'Excellence Gate', a mandatory mechanism requiring a minimum NPS of 70 in pilot tests for any new launch, ensuring sustainability. Six months later, already without my direct involvement, this gate blocked a scheduling app with NPS 55, forcing the team to refine and launch with 78. Bruno, whom I mentored, led that reevaluation, showing the human impact on talent development. Trade-offs like vendor lock-in were worth it, as we elevated the overall standard, reducing complaints by 92% and improving doctor satisfaction from 45% to 89%.",
    l: "This experience taught me that excellence is not a destination, but a daily commitment that requires courage to admit failures and start over. If I had conducted 40 in-depth interviews with elderly patients before the initial MVP, I would have avoided the R$ 1.8 million waste in misguided development and the unnecessary suffering of users. Today, I would do it differently by prioritizing even more field validation from day one, integrating real users into the initial design thinking. I applied this learning in subsequent projects at SEFAZ, where I implemented similar gates for fiscal system approvals, avoiding premature launches and ensuring regulatory adherence. I also realized that a high standard only endures if you invest in people: developing Bruno not only saved the project but created a multiplier of excellence in the team."
  },
  fups: [
    {
      q: "Qual foi seu maior erro nesse caso?",
      a: "Meu maior erro foi aprovar o lançamento inicial sem testes suficientes com usuários reais, especialmente idosos. Eu confiei demais em metricas internas de estabilidade é ignorei a usabilidade em condicoes reais, como conexoes ruins. Isso resultou em R$ 1,8 milhao desperdicados é sofrimento para os beneficiarios, algo que poderia ter sido evitado com 40 entrevistas profundas antes do MVP.",
      q_en: "What was your biggest mistake in this case?",
      a_en: "My biggest mistake was approving the initial launch without sufficient real-user testing, especially with the elderly. I relied too much on internal stability metrics and ignored usability in real conditions, like poor connections. This resulted in R$ 1.8 million wasted and suffering for beneficiaries, something that could have been avoided with 40 in-depth interviews before the MVP."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu integraria usuários reais no design thinking desde o dia um, com pelo menos 50% dos testes em campo. Tambem estabeleceria um 'Excellence Gate' antes mesmo do MVP, exigindo NPS minimo em prototipos. Isso aceleraria a identificacao de falhas é evitaria lancamentos prematuros, priorizando sustentabilidade desde o início.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would integrate real users into design thinking from day one, with at least 50% of tests in the field. I would also establish an 'Excellence Gate' even before the MVP, requiring minimum NPS in prototypes. This would speed up failure identification and avoid premature launches, prioritizing sustainability from the start."
    },
    {
      q: "Qual foi o obstáculo mais dificil de superar que você enfrentou?",
      a: "O obstáculo mais dificil foi o conflito interno com o CMO pelo adiamento do projeto de marketing para financiar a reconstrucao. Ele via isso como perda de visibilidade imediata, mas eu defendi com dados de churn projetado. Superei negociando um plano conjunto onde parte do orçamento de marketing foi realocado para promover o novo lançamento, alinhando interesses.",
      q_en: "What was the most difficult obstacle you faced?",
      a_en: "The most difficult obstacle was the internal conflict with the CMO over postponing the marketing project to fund the rebuild. He saw it as a loss of immediate visibility, but I defended it with projected churn data. I overcame it by negotiating a joint plan where part of the marketing budget was reallocated to promote the new launch, aligning interests."
    },
    {
      q: "Quais foram os principais riscos é como você os mitigou?",
      a: "Os principais riscos eram perda de receita durante a pausa (R$ 200 mil estimados) é vendor lock-in com Vonage. Mitiguei o primeiro comunicando transparentemente aos beneficiarios é oferecendo alternativas como consultas presenciais gratuitas. Para o segundo, negociei acesso total a dados é criei uma camada de abstracao no código, reduzindo o esforco de migração futura em 60%.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risks were revenue loss during the pause (estimated R$ 200 thousand) and vendor lock-in with Vonage. I mitigated the first by communicating transparently to beneficiaries and offering alternatives like free in-person consultations. For the second, I negotiated full data access and created an abstraction layer in the code, reducing future migration effort by 60%."
    },
    {
      q: "Que dados você usou, qual foi a racional de calculo?",
      a: "Usei dados de logs (68% falhas em conexoes), NPS (28 inicial), reclamacoes (1.370) é churn projetado (R$ 1,2 milhao). A racional para churn foi: taxa historica de 15% multiplicada pelo numero de usuários afetados (42% idosos), vezes LTV medio de R$ 5 mil por beneficiario. Para ROI, dividi investimento (R$ 680 mil) pela receita adicional de consultas triplicadas, projetando payback em 4 meses.",
      q_en: "What data did you use, what was the calculation rationale?",
      a_en: "I used log data (68% connection failures), NPS (initial 28), complaints (1,370), and projected churn (R$ 1.2 million). The churn rationale was: historical 15% rate multiplied by affected users (42% elderly), times average LTV of R$ 5 thousand per beneficiary. For ROI, I divided investment (R$ 680 thousand) by additional revenue from tripled consultations, projecting payback in 4 months."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes ou trabalhos?",
      a: "Apliquei o conceito de 'Excellence Gate' na SEFAZ, criando checkpoints para aprovacoes de sistemas fiscais que exigem aderencia minima a metricas de usabilidade antes de lançamento. Isso evitou dois lancamentos prematuros em projetos de arrecadacao, reduzindo riscos regulatorios. Tambem uso a pratica de escuta ativa em mentorias, incentivando equipes a validar ideias com usuários reais desde o início.",
      q_en: "How did you use the learning from this case in other fronts or jobs?",
      a_en: "I applied the 'Excellence Gate' concept at SEFAZ, creating checkpoints for fiscal system approvals requiring minimum usability metrics before launch. This avoided two premature launches in revenue projects, reducing regulatory risks. I also use active listening in mentoring, encouraging teams to validate ideas with real users from the start."
    },
    {
      q: "Qual habilidade pessoal foi decisiva nesse projeto?",
      a: "Minha capacidade de empatia combinada com análise de dados. Ouvir pacientes chorando me motivou, mas foram os dados de logs é NPS que guiaram as decisoes. Essa combinacao me permitiu defender trade-offs dificeis, como o adiamento de marketing, com argumentos solidos que convenceram a diretoria.",
      q_en: "What personal skill was decisive in this project?",
      a_en: "My ability to combine empathy with data analysis. Hearing patients cry motivated me, but it was log and NPS data that guided decisions. This combination allowed me to defend tough trade-offs, like postponing marketing, with solid arguments that convinced the board."
    },
    {
      q: "Qual foi o impacto humano é etico dessa reconstrucao?",
      a: "Eticamente, restauramos a dignidade dos beneficiarios, especialmente idosos, reduzindo seu estresse em momentos vulneraveis. Humanamente, desenvolvi talentos como o Bruno, que passou de desmotivado a lider. O projeto tambem fortaleceu a cultura de transparencia, com a equipe se sentindo mais empoderada para admitir falhas é buscar excelencia.",
      q_en: "What was the human and ethical impact of this rebuild?",
      a_en: "Ethically, we restored beneficiaries' dignity, especially the elderly, reducing their stress in vulnerable moments. Humanly, I developed talents like Bruno, who went from demotivated to leader. The project also strengthened a culture of transparency, with the team feeling more empowered to admit failures and seek excellence."
    },
    {
      q: "Como você lidou com resistencia cultural na equipe?",
      a: "A resistencia veio da visao de que reconstruir era 'admitir derrota'. Superei convidando resistentes, como o Bruno, para visitas a pacientes, mostrando o impacto real. Tambem criei sessoes de feedback aberto, onde todos podiam expressar duvidas, transformando resistencia em engajamento coletivo pela excelencia.",
      q_en: "How did you handle cultural resistance in the team?",
      a_en: "Resistance came from viewing rebuild as 'admitting defeat.' I overcame it by inviting resisters, like Bruno, to patient visits, showing real impact. I also created open feedback sessions where everyone could express doubts, turning resistance into collective engagement for excellence."
    },
    {
      q: "Qual foi a sustentabilidade é escalabilidade do 'Excellence Gate'?",
      a: "O 'Excellence Gate' é escalavel, aplicado em todos lancamentos digitais da Unimed, é sustentavel por ser um processo documentado com metricas claras, independente de lideres individuais. Seis meses apos minha saida, ele já barrou é refinou dois projetos, provando sua durabilidade.",
      q_en: "What was the sustainability and scalability of the 'Excellence Gate'?",
      a_en: "The 'Excellence Gate' is scalable, applied to all Unimed digital launches, and sustainable as a documented process with clear metrics, independent of individual leaders. Six months after my departure, it already blocked and refined two projects, proving its durability."
    },
    {
      q: "Como calculou o ROI é outras metricas chave?",
      a: "Para ROI, somei custos (R$ 680 mil) é dividi pela receita adicional de consultas triplicadas (R$ 420 mil/mes), resultando em payback de 4 meses. NPS subiu 200% (28 para 84), baseado em surveys padronizados. Reclamacoes caíram 92%, de 1.370 para 110, rastreando via sistema de tickets.",
      q_en: "How did you calculate ROI and other key metrics?",
      a_en: "For ROI, I added costs (R$ 680 thousand) and divided by additional revenue from tripled consultations (R$ 420 thousand/month), resulting in 4-month payback. NPS rose 200% (28 to 84), based on standardized surveys. Complaints fell 92%, from 1,370 to 110, tracked via ticketing system."
    },
    {
      q: "Como garantiu alinhamento politico com a diretoria?",
      a: "Apresentei dados concretos de churn é NPS baixo como risco reputacional, é propus um plano com milestones claros. Negociei trade-offs, como realocar orçamento de marketing, mostrando beneficios de longo prazo. Essa transparencia construiu confianca, com o CEO aprovando apos ver o compromisso pessoal de demissao.",
      q_en: "How did you ensure political alignment with the board?",
      a_en: "I presented concrete churn and low NPS data as reputational risk, and proposed a plan with clear milestones. I negotiated trade-offs, like reallocating marketing budget, showing long-term benefits. This transparency built trust, with the CEO approving after seeing my personal resignation commitment."
    },
    {
      q: "Quais foram as consequencias financeiras da pausa no servico?",
      a: "Estimamos perda de receita de cerca de R$ 200 mil durante os 15 dias de pausa. Apresentei esse numero para a diretoria como custo necessario para proteger um ativo maior: a confianca de longo prazo dos clientes, que valia dezenas de milhoes em LTV. Foi um trade-off de curto prazo por um ganho de longo prazo.",
      q_en: "What were the financial consequences of pausing the service?",
      a_en: "We estimated a revenue loss of approximately R$ 200 thousand during the 15-day pause. I presented this number to the board as a necessary cost to protect a much larger asset: the long-term trust of our customers, which was worth tens of millions in LTV. It was a short-term trade-off for a long-term gain."
    },
    {
      q: "Como você mitigou o risco de 'vendor lock-in' da Vonage?",
      a: "Embora tenhamos aceitado o risco para ganhar estabilidade, negociei um contrato que nos dava acesso total aos logs é dados de performance, é criei uma camada de abstracao no código. Isso nos permitiria, se necessario no futuro, migrar para outro fornecedor com um esforco 60% menor do que uma integração direta.",
      q_en: "How did you mitigate the risk of vendor lock-in with Vonage?",
      a_en: "Although we accepted the risk to gain stability, I negotiated a contract that gave us full access to logs and performance data, and created an abstraction layer in our code. This would allow us, if necessary in the future, to migrate to another provider with 60% less effort than a direct integration."
    },
    {
      q: "Conte sobre alguem da sua equipe que resistiu mas evoluiu durante a reconstrucao.",
      a: "O Bruno, analista junior, estava desmotivado é via a reconstrucao como 'retrabalho'. Em vez de delegar, convidei-o para me acompanhar em tres visitas a pacientes. Ver o impacto real mudou sua perspectiva. Ele se tornou obcecado pela simplicidade é contribuiu mais para a reducao das 14 telas.",
      q_en: "Tell me about someone on your team who resisted but evolved during the rebuild.",
      a_en: "Bruno, the junior analyst, was demotivated and saw the rebuild as 'rework.' Instead of delegating, I invited him to join me on three patient visits. Seeing the real impact changed his perspective. He became obsessed with simplicity and contributed most to reducing the 14 screens."
    },
    {
      q: "Algum outro produto foi rejeitado gracas ao 'Excellence Gate'?",
      a: "Sim. Seis meses depois, o 'Excellence Gate' barrou o lançamento de um novo app de agendamento que, embora funcional, teve NPS de 55 no piloto. A equipe, liderada pelo Bruno, usou o feedback para mais um ciclo de refinamento, é o app foi lancado com NPS de 78. O mecanismo provou que a cultura de excelencia foi internalizada.",
      q_en: "Has any other product been rejected thanks to the 'Excellence Gate'?",
      a_en: "Yes. Six months later, the 'Excellence Gate' blocked the launch of a new scheduling app that, while functional, had an NPS of 55 in the pilot. The team, led by Bruno, used the feedback for another refinement cycle, and the app was launched with an NPS of 78. The mechanism proved the culture of excellence had been internalized."
    },
    {
      q: "Como você sistematizou o ciclo de feedback para que a escuta ativa não dependesse so de você?",
      a: "Criei o programa 'Voz do Cliente', um ritual quinzenal onde um membro da equipe de produto conversa com tres usuários é apresenta os aprendizados para o time. Integramos uma ferramenta de feedback continuo no app. A escuta ativa se tornou um processo, não uma iniciativa heroica.",
      q_en: "How did you systematize the feedback cycle so that active listening didn't just depend on you?",
      a_en: "I created the 'Voice of the Customer' program, a bi-weekly ritual where a product team member talks to three users and presents the learnings to the team. We integrated a continuous feedback tool into the app. Active listening became a process, not a heroic initiative."
    },
    {
      q: "Como o projeto impactou a satisfacao dos medicos?",
      a: "A satisfacao dos medicos subiu de 45% para 89%, medido por surveys mensais. Com a estabilidade da Vonage é interface simplificada, eles relataram menos interrupcoes é mais foco no atendimento. Isso reduziu o abandono de 22% para 3%, fortalecendo nossa rede de profissionais.",
      q_en: "How did the project impact doctor satisfaction?",
      a_en: "Doctor satisfaction rose from 45% to 89%, measured by monthly surveys. With Vonage stability and simplified interface, they reported fewer interruptions and more focus on care. This reduced abandonment from 22% to 3%, strengthening our professional network."
    },
    {
      q: "Qual foi o papel da tecnologia na reducao do tempo de setup?",
      a: "Migramos para Vonage para conexoes estaveis é implementamos reconhecimento facial para login, reduzindo passos manuais. Testes mostraram que 70% do tempo anterior era gasto em autententicacao; com isso, caimos de 12 minutos para 2m20s, validado em 120 testes domiciliares.",
      q_en: "What was technology's role in reducing setup time?",
      a_en: "We migrated to Vonage for stable connections and implemented facial recognition for login, reducing manual steps. Tests showed 70% of previous time was spent on authentication; with this, we dropped from 12 minutes to 2m20s, validated in 120 home tests."
    },
    {
      q: "Como você mediu o impacto no churn de beneficiarios?",
      a: "Rastreie o churn mensal de usuários da telemedicina, que caiu de 15% para 6% apos o relancamento. Multipliquei pela base afetada (42% idosos) é LTV (R$ 5 mil), estimando economia de R$ 1,2 milhao. Dados vieram do CRM, comparando períodos pre é pos.",
      q_en: "How did you measure the impact on beneficiary churn?",
      a_en: "I tracked monthly churn for telemedicine users, which fell from 15% to 6% after relaunch. Multiplied by affected base (42% elderly) and LTV (R$ 5 thousand), estimating R$ 1.2 million savings. Data came from CRM, comparing pre and post periods."
    }
  ]
};

export default case_5;