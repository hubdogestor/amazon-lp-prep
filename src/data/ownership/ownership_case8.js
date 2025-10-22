const case_8 = {
  id: "bradesco-next-delay",
  title: "Erro de Estimativa no Lançamento Bradesco Next",
  title_pt: "Erro de Estimativa no Lançamento Bradesco Next",
  title_en: "Estimation Error in Bradesco Next Launch",
  company: "Bradesco",
  period: "Q2 2018",
  keywords: "#assumir-erro | #falha | #criar-mecanismo | #credibilidade | #estimativa",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: "Março de 2018, a contagem regressiva para o lançamento do Bradesco Next havia começado. Eu atuava como Product Manager responsável pelas integrações de pagamento -- a frente que conectava o novo banco digital ao Serasa, SPC e instituições parceiras. O contexto era de alta visibilidade: o CEO havia prometido à imprensa um lançamento no dia 28 de abril, e a concorrência, liderada pelo Nubank (NPS 92), pressionava por velocidade. Três semanas antes do code freeze, meu time me informou que o módulo da Serasa estava apenas 60 % concluído, quando eu já havia comunicado 85 % ao board. Em uma reunião executiva, o CTO foi direto: “Leonardo, você garantiu que abril era viável. O CEO já anunciou o prazo. Onde você errou?” A resposta estava na projeção: eu havia subestimado o impacto do mutual TLS, dos retries assíncronos e da burocracia para homologação regulatória da Serasa.",
    t: "Meu escopo formal incluía planejamento e priorização técnica de integrações de pagamento, mas, diante de um erro de estimativa que ameaçava um lançamento estratégico, precisei assumir publicamente a responsabilidade e restaurar a confiança do C-level. Meu objetivo deixou de ser cumprir um prazo e passou a ser restabelecer credibilidade e criar um mecanismo que protegesse projetos futuros contra erros similares.",
    a: "Analisei três alternativas: (1) atribuir o problema à Serasa, justificando mudança de API; (2) solicitar recursos extras e empurrar o prazo sem assumir falha; ou (3) admitir o erro e construir uma solução estruturada. Escolhi a terceira. Dentro de 24 horas, enviei email ao CEO, CTO e conselho, copiando o time: “Subestimei a complexidade da integração com a Serasa. O erro foi meu. A nova data é 19 de maio.” Em seguida, promovi um post-mortem de 5 porquês que revelou a causa raiz: ausência de framework de estimativas para integrações regulatórias com terceiros. Apresentei um plano de recuperação em três frentes: realocar oito pessoas de features secundárias, contratar dois consultores especializados da Serasa (R$ 180 mil/mês) e executar testes de carga em paralelo para ganhar três semanas. Por fim, criei um framework institucional de estimativas com quatro componentes -- buffer de 40 % para APIs de terceiros regulatórios, POCs obrigatórias para integrações maiores que 50 story points, revisões quinzenais e escalonamento automático quando a variância ultrapassasse 15 %. Treinei quatro engenheiros principais nesse modelo e formalizei o processo no roadmap da engenharia.",
    r: "Em 19 de maio, entregamos o Next no novo prazo. O motor de crédito suportou picos de 73 mil requisições/hora e abriu 12.847 contas em 72 horas sem incidentes. O tempo médio de aprovação foi de 3 min 47 s (abaixo da meta de 5 min). O NPS atingiu 89, três pontos abaixo do Nubank. Em relação a lançamentos anteriores, reduzimos erros médios de estimativa de ±42 % para ±11 % e eliminamos três atrasos críticos, economizando R$ 8,7 milhões em 18 meses. O framework influenciou outras frentes de tecnologia e foi adotado como referência corporativa no processo de planejamento do grupo. Quatro meses depois, fui promovido -- o CTO registrou oficialmente que assumir erros e construir mecanismos era “uma marca de liderança madura”.",
    l: "Aprendi que credibilidade se conquista mais nas falhas do que nos acertos. Assumir o erro de forma imediata preserva confiança e acelera resolução. Desde então, aplico um padrão: escalar riscos cedo, conduzir post-mortems sem culpa e deixar mecanismos institucionalizados como legado. Usei esse modelo no Sicredi e no HSBC para transformar falhas de estimativa em frameworks corporativos de planejamento e capacity."
  },
  en: {
    s: "March 2018. As Product Manager for payment integrations at Bradesco Next -- the group’s digital bank -- I was leading the connection between Next, Serasa, SPC, and partner institutions. The CEO had publicly announced a launch date of April 28, and the market was dominated by Nubank (NPS 92). Three weeks before code freeze my team reported 60 percent completion of the Serasa module while I had already informed the board of 85 percent. In an executive meeting, the CTO demanded, 'Leonardo, you guaranteed April was viable. The CEO has gone public. Where did you go wrong?' The answer: I had underestimated Serasa API complexities -- mutual TLS, asynchronous retries, and long regulatory validation cycles.",
    t: "My formal scope spanned planning and technical prioritization across payment integrations. But facing an estimation error that jeopardized the company’s most visible launch, I needed to take responsibility publicly and rebuild trust through structured corrective action. The goal shifted from 'meeting the deadline' to 'building systems that protect future estimates'.",
    a: "I evaluated three options: (1) blame Serasa for API changes; (2) quietly request resources and extend deadline; (3) admit mistake and design a systemic solution. I chose the third. Within 24 hours I emailed CEO, CTO, and board (CC team): 'I underestimated Serasa integration complexity. The error was mine. New target: May 19.' I then led a 5-Whys post-mortem exposing the root cause -- lack of an estimation framework for regulated third-party APIs. The recovery plan covered three fronts: reassigned eight engineers from low-impact features, hired two Serasa specialists (R$ 180K/month), and launched parallel load tests to cut three weeks off schedule. Finally, I built a four-pillar estimation framework (40 % buffer for external APIs, mandatory POCs, bi-weekly architectural reviews, and auto-escalation at >15 % variance) and trained four principal engineers to deploy it company-wide.",
    r: "On May 19 we launched Next on the revised date. Credit engine handled 73 K requests/hour, 12,847 accounts approved within 72 hours, zero incidents. Average approval time 3 min 47 s (<5 min goal) and NPS 89 -- just three points below Nubank. Compared with previous digital initiatives, forecast error fell from ±42 % to ±11 and three critical delays were eliminated, saving R$ 8.7 M in 18 months. The framework became corporate standard and later replicated in other technology dives. Four months later the CTO cited this episode when promoting me as an example of executive accountability.",
    l: "Leadership is earned more through failure than success. Owning error openly creates speed and trust. Since then, I apply a discipline: escalate risk early, conduct blameless post-mortems, and embed preventive mechanisms so lessons endure. This pattern later turned under-estimation issues at Sicredi and HSBC into planning frameworks and capacity models used to this day."
  },
  fups: [
    // 6 centrais obrigatórias
    { q: "Qual foi seu maior erro ou falha nesse caso?", a: "Assumir que complexidade técnica seria proporcional à das integrações anteriores e não considerar o efeito do TLS mútuo e dos retries assíncronos. Corrigi criando regra de buffer obrigatório e POCs de validação antecipada.", q_en: "What was your biggest mistake or failure?", a_en: "Assumed technical complexity equal to prior APIs, ignoring mutual TLS and async retries. Fixed via mandatory buffer and early validation POCs." },
    { q: "O que você faria diferente hoje?", a: "Reportaria a divergência assim que percepção de risco surgisse e envolveria o CTO antes de qualquer promessa oficial.", q_en: "What would you do differently today?", a_en: "Would flag variance as soon as risk perception rose and involve CTO before any public commitment." },
    { q: "Qual foi o obstáculo mais difícil que você enfrentou?", a: "Convencer a diretoria de que admitir a falha publicamente era estratégia de credibilidade, não exposição de fraqueza.", q_en: "What was the hardest obstacle you faced?", a_en: "Convincing leadership that public ownership built credibility instead of showing weakness." },
    { q: "Quais foram os principais riscos e como você os mitigou?", a: "Perda de reputação e atrasos adicionais; mitiguei apresentando plano de recuperação detalhado com prazos, ROI e métricas de qualidade.", q_en: "What were the main risks and how did you mitigate them?", a_en: "Reputation loss and further delays; mitigated through detailed recovery plan with ROI and quality metrics." },
    { q: "Que dados você usou e qual foi a racional de cálculo?", a: "Baseei-me em logs de integração, throughput máximo observado, tempo médio por requisição e histórico de projetos regulatórios anteriores.", q_en: "What data did you use and what was the calculation rationale?", a_en: "Relied on integration logs, peak throughput, average request time, and past regulatory project metrics." },
    { q: "Como você usou o aprendizado desse caso em outras frentes?", a: "Padronizei o framework e o expandi para produtos de crédito e onboarding, reduzindo variação de estimativas em 70% em toda a tribo Next.", q_en: "How did you use the learning from this case in other areas?", a_en: "Standardized framework applied to credit and onboarding products, reducing estimation variance 70% across Next tribe." },

    // FUPs originais mantidas
    {
      q: "Como você soube que havia subestimado a complexidade?",
      a: "Na sprint review de março percebi que o progresso funcional não refletia o status técnico. O número de falhas TLS e de timeout deixou evidente o gap.",
      q_en: "How did you realize you had underestimated the complexity?",
      a_en: "At March sprint review I saw functional progress not matching technical reality; TLS and timeout failures exposed gap."
    },
    {
      q: "Como o CEO e o CTO reagiram quando você assumiu o erro?",
      a: "Inicialmente surpresos, reconheceram transparência como valor estratégico e pediram plano de ação imediato.",
      q_en: "How did the CEO and CTO react when you admitted the error?",
      a_en: "Initially surprised, both valued transparency as strategic and asked for immediate action plan."
    },
    {
      q: "Qual foi o framework de estimativa que você criou?",
      a: "Inclui buffer de 40%, POC obrigatória, revisão quinzenal de estimativas e escalonamento automático para desvios acima de 15%.",
      q_en: "What was the estimation framework you created?",
      a_en: "Included 40% buffer, mandatory POC, bi-weekly review, and auto-escalation for >15% deviation."
    },
    {
      q: "Como você mediu o impacto do seu erro na organização?",
      a: "Perdas diretas de R$ 2,1 M em três semanas de atraso e ganhos subsequentes de R$ 8,7 M com o novo método (ROI 314%).",
      q_en: "How did you measure the impact of your error on the organization?",
      a_en: "R$ 2.1 M direct loss from 3-week delay, R$ 8.7 M savings afterwards--314% ROI."
    },
    {
      q: "Que resistência você enfrentou ao assumir o erro publicamente?",
      a: "Parte do time temia impacto de reputação; reverti essa visão explicando que transparência gera confiança e aprendizado coletivo.",
      q_en: "What resistance did you face when admitting the error publicly?",
      a_en: "Team feared reputational harm; I reframed transparency as trust and collective learning builder."
    },
    {
      q: "Como você garantiu que o framework fosse adotado pela empresa?",
      a: "Exibi ROI comprovado, treinei multiplicadores e formalizei o processo com apoio direto do CTO.",
      q_en: "How did you ensure the framework was adopted by the company?",
      a_en: "Showed verified ROI, trained internal champions, formalized process with CTO endorsement."
    },
    {
      q: "Qual foi o maior aprendizado pessoal dessa experiência?",
      a: "Que vulnerabilidade combinada com método é força de liderança, não fraqueza.",
      q_en: "What was the greatest personal learning from this experience?",
      a_en: "That vulnerability paired with method is leadership strength, not weakness."
    },
    {
      q: "Como você aplicou esse aprendizado em outras situações?",
      a: "Usei o modelo em Sicredi e HSBC, ajustando métricas para cenários de open finance e capacity planning.",
      q_en: "How did you apply this learning in other situations?",
      a_en: "Applied model at Sicredi and HSBC, adapting metrics to open-finance and capacity-planning environments."
    },
    {
      q: "Qual foi o ROI real do framework de estimativa?",
      a: "ROI 314% em 18 meses e eliminação de atrasos críticos em cinco projetos seguintes.",
      q_en: "What was the real ROI of the estimation framework?",
      a_en: "314% ROI in 18 months and zero critical delays across next five projects."
    },
    {
      q: "Como você lidou com a pressão do CEO e da imprensa?",
      a: "Comuniquei que três semanas de espera eram melhor que um lançamento instável. Criamos estratégia de reputação: 'lançamento responsável'.",
      q_en: "How did you handle the pressure from the CEO and the press?",
      a_en: "Explained that 3-week delay was safer than unstable launch. Built 'responsible launch' communication strategy."
    },

    // Novas FUPs do feedback adicional
    {
      q: "Como você garantiu a adesão da equipe e dos stakeholders ao novo framework de estimativa?",
      a: "Apresentei métricas de ROI, demonstrei ganhos nos testes-piloto e envolvi o CTO na comunicação do novo padrão.",
      q_en: "How did you ensure team and stakeholder buy-in to the new estimation framework?",
      a_en: "Presented ROI metrics, showed pilot results, and involved CTO in communication of new standards."
    },
    {
      q: "O que você aprendeu com o processo de '5 porquês' e como aplicou em projetos futuros?",
      a: "Aprendi que causas humanas e sistêmicas costumam coexistir. Passei a registrar toda raiz identificada em base corporativa de lições aprendidas.",
      q_en: "What did you learn from the '5 whys' process and how did you apply it to future projects?",
      a_en: "Learned human and systemic causes coexist; began logging every root cause to corporate lessons-learned base."
    },
    {
      q: "Quais foram os maiores desafios técnicos na integração com Serasa e como você os superou?",
      a: "Autenticação TLS mútua dependia de certificados assinados manualmente e latência de 5 segundos. Implementei paralelização de conexões e retries inteligentes.",
      q_en: "What were the biggest technical challenges in the Serasa integration and how did you overcome them?",
      a_en: "Mutual TLS required manual cert sign-off and 5 s latency; implemented connection parallelism and smart retries."
    },
    {
      q: "Como você lidou com a resistência ou receios do CEO e do conselho ao comunicar o erro?",
      a: "Usei fato e ROI: mostrei que transparência custaria três semanas, mas evitaria perda potencial de R$ 12 M em reclamações e retrabalho.",
      q_en: "How did you handle resistance or concerns from the CEO and the board when communicating the error?",
      a_en: "Used facts and ROI--showed transparency would add three weeks but avert R$ 12 M potential loss."
    },
    {
      q: "Se pudesse refazer este projeto, o que faria de forma diferente para evitar o erro inicial ou aprimorar resultados?",
      a: "Introduziria revisões técnicas de risco já na fase de discovery e criaria métricas preditivas de esforço baseado em integrações anteriores.",
      q_en: "If you could redo this project, what would you do differently to avoid the initial error or improve results?",
      a_en: "Would introduce technical-risk reviews in discovery phase and predictive effort metrics based on prior integrations."
    }
  ]
};

export default case_8;
