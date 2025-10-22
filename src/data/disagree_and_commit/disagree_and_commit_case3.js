// disagree_and_commit_case3.js
const case_3 = {
  id: "bradesco-mvp-feature-prioritization",
  title_pt: "Discordei da priorização de feature do MVP, aceitei a decisão do comitê e entreguei resultados que viabilizaram meu plano original",
  title_en: "Disagreed with MVP feature prioritization, accepted the committee's decision, and delivered results that funded my original plan",
  company: "Bradesco Next",
  period: "11/2017 - 05/2018",
  isTopCase: true,
  isGoodCase: false,
  pt: {
    s: "Em março de 2018, como Head de Produto no Banco Digital Next, identifiquei um desalinhamento crítico no roadmap. O CPO, apoiado pelo marketing, defendia priorizar um feed social gamificado para aumentar o engajamento, enquanto minha análise de dados mostrava que 61% do nosso churn vinha de clientes que não conseguiam prever seus gastos futuros. A tensão era alta, pois eu defendia um motor de recomendação financeira baseado em machine learning que, segundo minhas projeções, poderia reduzir o churn em 30%. O CPO argumentava que sem o feed, perderíamos apoio de marketing, colocando em risco uma receita anual de R$ 180 milhões e a base de 2,4 milhões de clientes.",
    t: "Minha tarefa era resolver esse impasse de forma produtiva. Eu precisava apresentar dados irrefutáveis para embasar uma decisão executiva, forçar uma votação final no comitê e, caso minha proposta fosse rejeitada, comprometer-me totalmente com a execução do plano escolhido. Assumi a responsabilidade de entregar o MVP aprovado em seis sprints, mantendo o NPS acima de 70, independentemente de qual feature fosse priorizada.",
    a: "Para embasar a decisão, executei um teste A/B com 40 mil clientes, usando protótipos funcionais de ambas as features. Os dados foram claros: o feed aumentou o tempo de tela em 18%, mas meu motor de recomendação reduziu a intenção de cancelamento em 36%. Apresentei esses resultados ao comitê executivo e afirmei: 'Com base nestes dados, recomendo o motor de recomendação, mas estou preparado para liderar e entregar o feed se essa for a decisão'. A votação foi dividida, e o CEO deu o voto de minerva a favor do feed, com a condição de entrega em 90 dias. Imediatamente, respondi: 'Estou 100% comprometido'. Assumi a liderança do squad, negociei um cronograma de duas semanas para os criativos com o marketing e, para garantir a velocidade, escrevi pessoalmente as 78 páginas de especificações das missões de gamificação. Em paralelo, de forma estratégica, desenvolvi um 'motor de recomendação lite' que rodaria em background, sem impactar o cronograma principal. Quando o time técnico expressou dúvidas sobre o prazo, assumi a responsabilidade direta pelo código mais crítico, revisando mais de 300 pull requests para garantir a qualidade e o prazo.",
    r: "Entregamos o feed em 82 dias, oito dias antes do prazo. Os resultados superaram as metas: o engajamento aumentou 27%, o NPS do app atingiu 72, e a intenção de cancelamento geral caiu 19%. O resultado inesperado veio do meu 'motor lite', que, operando silenciosamente, reduziu o churn em 2,4 pontos percentuais adicionais entre os clientes de alta renda. Em uma reunião geral, o CEO reconheceu publicamente que eu 'discordei com dados sólidos, mas entreguei a decisão do comitê com excelência'. Como resultado direto, ele aprovou um investimento de R$ 8 milhões para o desenvolvimento completo do motor de recomendação no trimestre seguinte, validando minha proposta original.",
    l: "Aprendi que a forma mais eficaz de ganhar influência não é apenas vencer um argumento com dados, mas demonstrar um compromisso inabalável com o sucesso da empresa, mesmo quando a decisão não é a sua. Ao executar o plano do comitê com excelência, não só entreguei valor imediato, mas também criei a confiança necessária para que minha visão estratégica original fosse financiada. A lição é que a execução exemplar é a maior prova de liderança e abre portas que a discordância, por si só, não consegue.",
  },
  en: {
    s: "In March 2018, as Head of Product at Next Digital Bank, I identified a critical misalignment in the roadmap. The CPO, backed by marketing, advocated for prioritizing a gamified social feed to increase engagement, while my data analysis showed that 61% of our churn came from customers who couldn't forecast their future spending. The tension was high, as I was championing a machine learning-based financial recommendation engine that my projections indicated could reduce churn by 30%. The CPO argued that without the feed, we would lose marketing support, jeopardizing an annual revenue of BRL 180 million and our 2.4 million customer base.",
    t: "My task was to resolve this impasse productively. I needed to present irrefutable data to inform an executive decision, force a final committee vote, and, if my proposal was rejected, fully commit to executing the chosen plan. I took ownership of delivering the approved MVP in six sprints while maintaining an NPS above 70, regardless of which feature was prioritized.",
    a: "To inform the decision, I ran an A/B test with 40,000 customers, using functional prototypes of both features. The data was clear: the feed increased screen time by 18%, but my recommendation engine reduced cancellation intent by 36%. I presented these results to the executive committee and stated, 'Based on this data, I recommend the engine, but I am prepared to lead and deliver the feed if that is the decision.' The vote was split, and the CEO cast the tie-breaking vote for the feed, with a strict 90-day delivery deadline. I immediately responded, 'I am 100% committed.' I took leadership of the squad, negotiated a two-week timeline for creatives with marketing, and, to ensure speed, I personally wrote the 78 pages of gamification mission specifications. In parallel, as a strategic move, I developed a 'lite recommendation engine' that would run in the background without impacting the main schedule. When the tech team raised concerns about the timeline, I took direct responsibility for the most critical code, reviewing over 300 pull requests to ensure quality and meet the deadline.",
    r: "We delivered the feed in 82 days, eight days ahead of schedule. The results exceeded targets: engagement increased by 27%, the app's NPS reached 72, and overall cancellation intent dropped by 19%. The unexpected result came from my 'lite engine,' which, operating silently, reduced churn by an additional 2.4 percentage points among high-value customers. In an all-hands meeting, the CEO publicly acknowledged that I had 'disagreed with solid data but delivered the committee's decision with excellence.' As a direct result, he approved an BRL 8 million investment for the full development of the recommendation engine in the following quarter, validating my original proposal.",
    l: "I learned that the most effective way to gain influence is not just to win an argument with data, but to demonstrate an unwavering commitment to the company's success, even when the decision is not your own. By executing the committee's plan with excellence, I not only delivered immediate value but also built the trust necessary for my original strategic vision to be funded. The lesson is that exemplary execution is the ultimate proof of leadership and opens doors that disagreement alone cannot.",
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Meu erro foi ter apresentado minha proposta como uma escolha ‘ou um, ou outro’, o que polarizou a discussão e forçou uma decisão de soma zero. Eu deveria ter enquadrado a conversa em torno de ‘como podemos resolver o churn E o engajamento?’, talvez propondo uma versão mais simples do motor de recomendação para rodar junto com o feed desde o início, buscando uma solução mais colaborativa.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My mistake was presenting my proposal as an 'either/or' choice, which polarized the discussion and forced a zero-sum decision. I should have framed the conversation around 'how can we solve for both churn AND engagement?', perhaps by proposing a simpler version of the recommendation engine to run alongside the feed from the start, seeking a more collaborative solution.",
    },
    {
      q: "O que você faria de diferente hoje?",
      a: "Hoje, eu faria do ‘motor lite’ parte da proposta inicial. Apresentaria o feed como a feature principal para atender à demanda de marketing, mas com o motor lite integrado como um ‘piloto de retenção’. Isso teria transformado a decisão de um ‘não’ para a minha ideia em um ‘sim’ para uma solução híbrida e mais inteligente, alinhando os interesses de todos desde o começo.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would make the 'lite engine' part of the initial proposal. I would present the feed as the main feature to meet marketing's demand, but with the lite engine integrated as a 'retention pilot'. This would have turned the decision from a 'no' to my idea into a 'yes' for a smarter, hybrid solution, aligning everyone's interests from the start.",
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar durante a execução?",
      a: "O obstáculo mais difícil foi manter a moral da equipe de tecnologia, que via o feed como uma ‘feature de vaidade’ e estava desmotivada por não trabalhar na solução que eles acreditavam ser a correta. Para superar isso, eu organizei sessões diárias de 15 minutos para mostrar o impacto dos pequenos incrementos que entregávamos e reforcei a importância estratégica da entrega para o banco, conectando o trabalho deles diretamente ao reconhecimento do CEO.",
      q_en: "What was the most difficult obstacle to overcome during execution?",
      a_en: "The hardest obstacle was maintaining the morale of the tech team, who saw the feed as a 'vanity feature' and were unmotivated by not working on the solution they believed to be correct. To overcome this, I held daily 15-minute sessions to show the impact of the small increments we were delivering and reinforced the project's strategic importance to the bank, directly connecting their work to the CEO's recognition.",
    },
    {
      q: "Quais foram os principais riscos do feed gamificado e como você os mitigou?",
      a: "O maior risco era o ‘engajamento vazio’: usuários passariam mais tempo no app sem transacionar mais, o que não geraria valor para o negócio. Mitiguei isso atrelando as missões de gamificação a ações de alto valor, como configurar pagamentos recorrentes ou usar o cartão de crédito. Isso garantiu que o engajamento estivesse diretamente ligado a KPIs de negócio e não apenas a métricas de vaidade.",
      q_en: "What were the main risks of the gamified feed, and how did you mitigate them?",
      a_en: "The biggest risk was 'empty engagement': users spending more time in the app without transacting more, which would not generate business value. I mitigated this by tying the gamification missions to high-value actions, such as setting up recurring payments or using the credit card. This ensured that engagement was directly linked to business KPIs and not just vanity metrics.",
    },
    {
      q: "Pode detalhar a lógica do cálculo do teste A/B que reduziu a intenção de cancelamento em 36%?",
      a: "Apresentamos aos usuários de ambos os grupos uma pesquisa de NPS ao final de 14 dias. A última pergunta era: ‘Em uma escala de 0 a 10, qual a probabilidade de você cancelar sua conta nos próximos 3 meses?’. O grupo que interagiu com o motor de recomendação teve uma redução de 36% nas respostas entre 7 e 10 (alta intenção) em comparação com o grupo do feed, um resultado estatisticamente significativo.",
      q_en: "Can you detail the logic of the A/B test calculation that reduced cancellation intent by 36%?",
      a_en: "We presented users in both groups with an NPS survey at the end of 14 days. The final question was, 'On a scale of 0 to 10, how likely are you to cancel your account in the next 3 months?'. The group that interacted with the recommendation engine had a 36% reduction in responses between 7 and 10 (high intent) compared to the feed group, a statistically significant result.",
    },
    {
      q: "Como você aplicou o aprendizado deste caso em outras frentes?",
      a: "Eu formalizei o conceito de ‘MVP paralelo’ ou ‘piloto furtivo’. Em projetos futuros com stakeholders divididos, passei a alocar 10-15% da capacidade do time para testar uma hipótese alternativa em background. Isso nos permite coletar dados do mundo real sem paralisar a entrega principal, tornando as decisões futuras muito mais fáceis e baseadas em evidências.",
      q_en: "How did you apply the learning from this case in other areas?",
      a_en: "I formalized the concept of a 'parallel MVP' or 'stealth pilot'. In future projects with divided stakeholders, I began allocating 10-15% of the team's capacity to test an alternative hypothesis in the background. This allows us to collect real-world data without halting the main delivery, making future decisions much easier and evidence-based.",
    },
    {
      q: "Como exatamente funcionava o motor de recomendação 'lite'?",
      a: "Era um sistema simples baseado em regras, não em machine learning, para provar o conceito rapidamente. Ele analisava o padrão de gastos dos últimos 30 dias e, se identificasse uma despesa recorrente que ainda não havia ocorrido no mês atual, exibia um card de alerta. Era uma solução simples, mas eficaz para validar a hipótese de que a previsibilidade financeira reduzia o churn.",
      q_en: "How exactly did the 'lite' recommendation engine work?",
      a_en: "It was a simple rule-based system, not machine learning, to prove the concept quickly. It analyzed the spending patterns of the last 30 days and, if it identified a recurring expense that hadn't occurred in the current month, it would display an alert card. It was a simple but effective solution to validate the hypothesis that financial predictability reduced churn.",
    },
    {
      q: "Como você garantiu que o desenvolvimento do 'motor lite' não atrasasse a entrega principal?",
      a: "Eu o tratei como um ‘projeto de estimação’ pessoal, fora do cronograma oficial. Usei minhas próprias horas para escrever os requisitos e trabalhei diretamente com um desenvolvedor sênior, usando a ‘folga’ entre as sprints para construir os componentes. Por definição, ele não podia atrasar o projeto principal, mas foi um risco calculado de gestão que valeu a pena.",
      q_en: "How did you ensure that the 'lite engine' development didn't delay the main delivery?",
      a_en: "I treated it as a personal 'pet project,' off the official schedule. I used my own hours to write the requirements and worked directly with a senior developer, using the 'slack' between sprints to build the components. By definition, it couldn't delay the main project, but it was a calculated management risk that paid off.",
    },
    {
      q: "Qual foi a reação do CPO quando viu os resultados do motor 'lite'?",
      a: "Ele foi o primeiro a apoiar o investimento de R$ 8 milhões para a versão completa. Ele admitiu em particular que os dados do piloto ‘lite’ eram a prova que ele precisava para se convencer e para defender o investimento para o resto da diretoria. Nossa relação profissional se fortaleceu muito depois disso, baseada em um respeito mútuo pela execução e pelos dados.",
      q_en: "What was the CPO's reaction when he saw the results of the 'lite' engine?",
      a_en: "He was the first to support the BRL 8 million investment for the full version. He admitted privately that the data from the 'lite' pilot was the proof he needed to be convinced and to defend the investment to the rest of the board. Our professional relationship strengthened significantly after that, based on mutual respect for execution and data.",
    },
    {
      q: "Como você mediu a queda de 19% na 'intenção de cancelamento' de forma confiável?",
      a: "Utilizamos a mesma pesquisa de NPS antes e depois do lançamento para a base geral de clientes. A queda de 19% representa a redução percentual de usuários que se classificaram entre 7 e 10 na pergunta sobre a probabilidade de cancelar a conta. Embora fosse uma métrica de sentimento, ela historicamente tinha alta correlação com o churn real, o que nos deu confiança no resultado.",
      q_en: "How did you measure the 19% drop in 'cancellation intent' reliably?",
      a_en: "We used the same NPS survey before and after the launch for the general customer base. The 19% drop represents the percentage reduction of users who rated themselves between 7 and 10 on the question about the likelihood of canceling their account. Although it was a sentiment metric, it historically had a high correlation with actual churn, which gave us confidence in the result.",
    },
    {
      q: "Como você formalizou seu comprometimento com a decisão do comitê?",
      a: "Imediatamente após a reunião, enviei um e-mail a todos os membros do comitê com a ata da decisão. No corpo do e-mail, escrevi: ‘Agradeço a clareza da decisão. Assumo total responsabilidade pela entrega do feed em 90 dias e meu time já está começando o planejamento hoje’. Isso eliminou qualquer dúvida sobre meu alinhamento e mostrou meu compromisso com a execução.",
      q_en: "How did you formalize your commitment to the committee's decision?",
      a_en: "Immediately after the meeting, I sent an email to all committee members with the minutes of the decision. In the body of the email, I wrote: 'Thank you for the clarity of the decision. I take full responsibility for delivering the feed in 90 days, and my team is already starting the planning today.' This eliminated any doubt about my alignment and showed my commitment to execution.",
    },
    {
      q: "Que lição o time de produto aprendeu com essa experiência?",
      a: "O time aprendeu que uma boa ideia não morre só porque não é priorizada. Se você acredita nela, pode encontrar maneiras criativas e de baixo custo para testá-la, como o ‘motor lite’. E que a melhor maneira de conseguir recursos para suas ideias é entregando com excelência as prioridades dos outros, construindo credibilidade através da execução.",
      q_en: "What lesson did the product team learn from this experience?",
      a_en: "The team learned that a good idea doesn't die just because it's not prioritized. If you believe in it, you can find creative, low-cost ways to test it, like the 'lite engine.' And that the best way to get resources for your ideas is by delivering excellence on others' priorities, building credibility through execution.",
    },
    {
      q: "O que era mais complexo no código que você assumiu pessoalmente?",
      a: "A lógica de integração com o sistema de cashback era a mais complexa. Envolvia múltiplas chamadas de API assíncronas e precisava garantir que as recompensas da gamificação fossem creditadas em tempo real, sem duplicidade e com latência abaixo de 300ms. Eu revisei pessoalmente o fluxo de transações para garantir que fosse idempotente e escalável, o que era crítico para a experiência do usuário.",
      q_en: "What was most complex about the code you personally took over?",
      a_en: "The integration logic with the cashback system was the most complex. It involved multiple asynchronous API calls and needed to ensure that gamification rewards were credited in real-time, without duplication, and with latency below 300ms. I personally reviewed the transaction flow to ensure it was idempotent and scalable, which was critical for the user experience.",
    },
    {
      q: "Como o sucesso deste projeto impactou sua relação com o CEO?",
      a: "Ele passou a me ver como um líder que não apenas trazia boas ideias, mas que também era um executor confiável e resiliente. Após este projeto, ele me incluiu em discussões estratégicas de nível mais sênior, pois sabia que eu traria uma perspectiva baseada em dados, mas que também estaria comprometido com o resultado final, qualquer que fosse a decisão.",
      q_en: "How did the success of this project impact your relationship with the CEO?",
      a_en: "He began to see me as a leader who not only brought good ideas but was also a reliable and resilient executor. After this project, he included me in more senior-level strategic discussions because he knew I would bring a data-driven perspective but would also be committed to the final outcome, whatever the decision was.",
    }
  ]
};

export default case_3;