// program_management_case5.js
const case_5 = {
  id: "sicredi-woop-delay-communication",
  title: "Comuniquei Atraso de 3 Meses no Lançamento do App Woop ao Board",
  title_pt: "Comuniquei Atraso de 3 Meses no Lançamento do App Woop ao Board",
  title_en: "Communicated a 3-Month Delay in the Woop App Launch to the Board",
  company: "Sicredi",
  period: "06/2019 - 09/2019",
  isTopCase: true,
  isGoodCase: true,
  pt: {
    s: "Em junho de 2019, como Product Strategist no Sicredi, eu era o lider responsável pelo lançamento do Woop, nosso banco digital. O projeto, com orçamento de R$ 10 milhoes, era a principal aposta estrategica para competir com fintechs. Porem, durante a fase final de testes, descobrimos falhas criticas de integração entre a nova plataforma é os sistemas legados do Sicredi, projetando um atraso inevitavel de tres meses. O cenário era de alta pressao: o board executivo contava com o lançamento em setembro para capturar um pico sazonal de adocao, é qualquer desvio colocaria em risco a confianca dos stakeholders é o retorno do investimento.",
    t: "Minha tarefa era assumir a responsabilidade pela crise, comunicar o atraso ao board de forma transparente é, mais importante, apresentar um plano de mitigacao viavel que salvasse o projeto. Eu precisava garantir que eles não apenas entendessem o problema, mas que aprovassem minha solução. Meus objetivos eram claros: obter a aprovacao de um aditivo de R$ 2 milhoes para escalar as equipes de correcao, garantir que o churn de clientes na lista de espera ficasse abaixo de 5%, é redefinir o escopo para um lançamento MVP (Minimum Viable Product) que entregasse valor é mantivesse o momentum do mercado.",
    a: "Minha primeira ação foi um 'dive deep' técnico. Analisei os logs de erro é trabalhei com os engenheiros para mapear a causa-raiz, quantificando o esforco necessario para a correcao. Com esses dados, preparei uma apresentacao para o board. Abri a reuniao assumindo total responsabilidade pelo erro de planejamento. Em vez de dar desculpas, apresentei o diagnostico técnico é, em seguida, o plano de ação: realocar especialistas de outros times para uma forca-tarefa, implementar um novo framework de testes automatizados para evitar futuras surpresas, é pivotar o lançamento para um MVP focado em 70% das features mais criticas. Defendi o investimento adicional de R$ 2 milhoes com um novo calculo de ROI que, mesmo com o atraso, ainda era de 20%. Antecipei as perguntas dificeis é preparei um Q&A detalhado, o que foi fundamental para neutralizar o ceticismo é ganhar a aprovacao deles.",
    r: "O board não apenas entendeu a situacao, como aprovou por unanimidade os recursos adicionais é o novo plano. O lançamento do MVP foi um sucesso: atingimos a meta de 25% de adocao da base de espera, mantendo o churn em apenas 3%. Essa estrategia gerou uma receita incremental de R$ 50 milhoes no primeiro ano. O trade-off de lancar com menos features foi compensado pela estabilidade da plataforma, que alcancou um NPS de 78 em seis meses, validando a decisao de priorizar a qualidade. A confianca do board foi restaurada, é minha abordagem se tornou um case interno de gestão de crises.",
    l: "Aprendi que, em momentos de crise, a velocidade é a transparencia da comunicação, aliadas a um plano de ação solido, são mais importantes do que o erro inicial. Meu erro foi não ter insistido em uma prova de conceito para a integração com sistemas legados na fase de discovery. Hoje, eu jamais aprovaria um projeto dessa magnitude sem validar os pontos técnicos mais arriscados primeiro. Apliquei essa licao na Unimed, onde, ao prever um atraso em um novo produto de saude digital, comuniquei proativamente o risco é o plano de mitigacao com seis semanas de antecedencia, o que reduziu o impacto financeiro é de imagem em mais de 40%.",
  },
  en: {
    s: "In June 2019, as a Product Strategist at Sicredi, I was the leader responsible for the launch of Woop, our digital bank. The project, with a R$ 10 million budget, was the main strategic bet to compete with fintechs. However, during the final testing phase, we discovered critical integration failures between the new platform and Sicredi's legacy systems, projecting an unavoidable three-month delay. The scenario was high-pressure: the executive board was counting on a September launch to capture a seasonal adoption peak, and any deviation would jeopardize stakeholder confidence and the return on investment.",
    t: "My task was to take ownership of the crisis, communicate the delay to the board with transparency, and, most importantly, present a viable mitigation plan to save the project. I needed to ensure they not only understood the problem but also approved my solution. My goals were clear: to obtain approval for an additional R$ 2 million to scale the correction teams, to ensure churn from the waiting list remained below 5%, and to redefine the scope for an MVP (Minimum Viable Product) launch that would deliver value and maintain market momentum.",
    a: "My first action was a technical 'dive deep.' I analyzed the error logs and worked with the engineers to map the root cause, quantifying the effort needed for the fix. With this data, I prepared a presentation for the board. I opened the meeting by taking full responsibility for the planning error. Instead of making excuses, I presented the technical diagnosis and then the action plan: reallocate specialists from other teams into a task force, implement a new automated testing framework to prevent future surprises, and pivot the launch to an MVP focused on 70% of the most critical features. I defended the additional R$ 2 million investment with a new ROI calculation that, even with the delay, still stood at 20%. I anticipated the tough questions and prepared a detailed Q&A, which was crucial to neutralize skepticism and win their approval.",
    r: "The board not only understood the situation but unanimously approved the additional resources and the new plan. The MVP launch was a success: we hit the 25% adoption target from our waitlist, keeping churn at just 3%. This strategy generated an incremental revenue of R$ 50 million in the first year. The trade-off of launching with fewer features was offset by the platform's stability, which achieved an NPS of 78 within six months, validating the decision to prioritize quality. The board's trust was restored, and my approach became an internal case study for crisis management.",
    l: "I learned that in times of crisis, the speed and transparency of communication, combined with a solid action plan, are more important than the initial mistake. My error was not insisting on a proof-of-concept for the legacy system integration during the discovery phase. Today, I would never approve a project of this magnitude without validating the riskiest technical points first. I applied this lesson at Unimed, where, upon foreseeing a delay in a new digital health product, I proactively communicated the risk and mitigation plan six weeks in advance, which reduced the financial and brand impact by over 40%.",
  },
  fups: [
    {
      q: "Qual foi seu maior erro nesse caso?",
      a: "Meu maior erro foi uma falha de 'due diligence' técnica no início do projeto. Eu confiei na avaliacao da arquitetura que dizia que a integração com os sistemas legados era viavel é não exigi uma prova de conceito (PoC) para validar essa premissa. Essa lacuna no planejamento foi a causa-raiz direta do atraso, um erro que custou tempo é recursos.",
      q_en: "What was your biggest mistake in this case?",
      a_en: "My biggest mistake was a failure of technical due diligence at the project's outset. I trusted the architectural assessment that claimed legacy system integration was feasible and did not demand a proof-of-concept (PoC) to validate this premise. This planning gap was the direct root cause of the delay, a mistake that cost time and resources.",
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu tornaria a validação de dependencias criticas, especialmente com sistemas legados, um 'gate' obrigatorio para a aprovacao do orçamento completo. Eu alocaria 10% do orçamento inicial para uma fase de discovery é testes técnicos, incluindo a construcao de prototipos para as integracoes mais arriscadas. Isso traria visibilidade sobre os desafios reais muito mais cedo.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would make the validation of critical dependencies, especially with legacy systems, a mandatory gate for full budget approval. I would allocate 10% of the initial budget for a discovery and technical testing phase, including building prototypes for the riskiest integrations. This would provide visibility into the real challenges much earlier.",
    },
    {
      q: "Qual foi o obstáculo mais dificil de superar que você enfrentou?",
      a: "O obstáculo mais dificil foi, sem duvida, enfrentar o ceticismo do board na sala de reunioes. Eles tinham todos os motivos para estarem desapontados. Superei isso não com otimismo, mas com dados. Ao apresentar uma análise de causa-raiz detalhada é um plano de ação com metricas claras, mudei a narrativa de 'problema' para 'plano de recuperacao', o que lhes deu a confianca necessaria para apoiar minha proposta.",
      q_en: "What was the most difficult obstacle you faced?",
      a_en: "The most difficult obstacle was undoubtedly facing the board's skepticism in the meeting room. They had every reason to be disappointed. I overcame this not with optimism, but with data. By presenting a detailed root-cause analysis and an action plan with clear metrics, I shifted the narrative from 'problem' to 'recovery plan,' which gave them the confidence to support my proposal.",
    },
    {
      q: "Quais foram os principais riscos é como você os mitigou?",
      a: "Os principais riscos eram dois: a perda total de confianca do board, o que poderia levar ao cancelamento do projeto, é um churn massivo da base de clientes em espera. Mitiguei o primeiro com uma comunicação proativa é um plano solido. Mitiguei o segundo lancando um MVP funcional, que, embora limitado, entregou valor real aos usuários é manteve o engajamento, segurando o churn em niveis baixos.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risks were twofold: a complete loss of board confidence, which could lead to the project's cancellation, and massive churn from the customer waitlist. I mitigated the first with proactive communication and a solid plan. I mitigated the second by launching a functional MVP, which, although limited, delivered real value to users and maintained engagement, keeping churn at low levels.",
    },
    {
      q: "Que dados você usou é qual foi a racional de calculo?",
      a: "Eu usei os logs de falha do sistema para identificar os pontos exatos da quebra de integração. Para calcular a receita de R$ 50 milhoes, usamos a projecao de crescimento da base de usuários do MVP (25% da lista de espera) multiplicada pelo ARPU (Average Revenue Per User) de produtos similares no mercado brasileiro de bancos digitais, ajustado para o nosso portfolio de features.",
      q_en: "What data did you use and what was the calculation rationale?",
      a_en: "I used system failure logs to pinpoint the exact integration breaking points. To calculate the R$ 50 million revenue, we used the MVP's projected user base growth (25% of the waitlist) multiplied by the ARPU (Average Revenue Per User) of similar products in the Brazilian digital banking market, adjusted for our feature portfolio.",
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes de trabalho?",
      a: "Essa experiencia foi fundamental para a forma como estruturei o PMO na SEFAZ. Criei um 'Risk Assessment Framework' que exige que todos os projetos de TI passem por uma análise de dependencias sistemicas antes da aprovacao. Isso já nos ajudou a identificar é mitigar preventivamente dois potenciais atrasos em projetos de modernização fiscal, economizando tempo é recursos publicos.",
      q_en: "How did you use the learning from this case in other work fronts?",
      a_en: "This experience was foundational for how I structured the PMO at SEFAZ. I created a 'Risk Assessment Framework' that requires all IT projects to undergo a systemic dependency analysis before approval. This has already helped us preemptively identify and mitigate two potential delays in fiscal modernization projects, saving public time and resources.",
    },
    {
      q: "Como você gerenciou a moral da equipe durante a crise?",
      a: "Fui radicalmente transparente com a equipe. Reuni todos, expliquei a situacao, assumi minha parte da responsabilidade é os envolvi na criação da solução. Transformei a crise em uma missao: 'Vamos entregar um MVP estavel é provar que podemos superar isso'. Ao dar a eles ownership sobre a solução, a moral se recuperou rapidamente, é o time trabalhou com um senso de proposito renovado.",
      q_en: "How did you manage team morale during the crisis?",
      a_en: "I was radically transparent with the team. I gathered everyone, explained the situation, took my share of the responsibility, and involved them in creating the solution. I turned the crisis into a mission: 'Let's deliver a stable MVP and prove we can overcome this.' By giving them ownership over the solution, morale recovered quickly, and the team worked with a renewed sense of purpose.",
    },
    {
      q: "Como a decisao de pivotar para um MVP impactou o roadmap de longo prazo?",
      a: "O pivot nos forcou a uma priorizacao muito mais rigorosa, o que foi positivo. O roadmap de longo prazo foi reajustado com base no feedback real dos usuários do MVP, em vez de nossas proprias suposicoes. Isso tornou nosso planejamento futuro mais enxuto é orientado ao cliente, permitindo que entregassemos features de maior impacto mais rapidamente apos o lançamento inicial.",
      q_en: "How did the decision to pivot to an MVP impact the long-term roadmap?",
      a_en: "The pivot forced us into much stricter prioritization, which was a positive outcome. The long-term roadmap was readjusted based on real feedback from MVP users, rather than our own assumptions. This made our future planning leaner and more customer-centric, allowing us to deliver higher-impact features more quickly after the initial launch.",
    },
  ],
};

export default case_5;