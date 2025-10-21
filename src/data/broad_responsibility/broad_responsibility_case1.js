// Case 1 - broad_responsibility
const case_1 = {
  id: "unimed-lgpd-compliance",
  title_pt: "Garantia de Conformidade com a LGPD no Lançamento de Produtos Digitais para Milhões de Clientes",
  title_en: "Ensuring LGPD Compliance in Digital Product Launches for Millions of Customers",
  company: "Unimed",
  period: "08/2021-12/2021",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "Em 2021, a Unimed estava prestes a lançar quatro produtos digitais com receita potencial de R$ 15 milhões, mas a nova LGPD representava um risco de R$ 50 milhões em multas. Como responsável pelos dados de saúde de 600 mil clientes, eu vi que minha responsabilidade ia além de apenas lançar produtos. Um único vazamento de dados médicos não seria apenas um prejuízo financeiro, mas a quebra de uma confiança sagrada com nossos clientes.",
    t: "Minha missão era garantir que a inovação não acontecesse à custa da privacidade. Fui designado como o único responsável pela conformidade com a LGPD nos novos produtos, mas eu me impus uma responsabilidade maior: criar um novo padrão de governança de dados para toda a empresa. A tarefa não era cumprir uma lei, mas honrar a confiança dos nossos 600 mil clientes, provando que agilidade e segurança rigorosa podem andar juntas.",
    a: "Minha abordagem foi tratar a privacidade como um requisito do produto, não como um obstáculo. Criei mecanismos de governança desde o início, como a regra inegociável de que nenhum desenvolvimento começaria sem um 'Privacy Impact Assessment' aprovado. Para o produto de Atenção Primária, liderei pessoalmente o desenho de um 'Painel de Consentimento Granular', uma inovação que dava ao cliente controle total sobre seus dados. Essa não era uma exigência da minha função, mas eu sabia que era a coisa certa a se fazer para proteger nossos clientes e a empresa.",
    r: "Lancei os quatro produtos no prazo, 100% em conformidade, e passamos por três auditorias externas sem nenhuma ressalva. O Painel de Consentimento teve uma taxa de adesão de 85%, 25 pontos acima da média do setor, e se tornou o padrão para todos os produtos da empresa. Em 24 meses, não tivemos um único incidente de privacidade, evitando multas estimadas em R$ 2,4 milhões e, o mais importante, honrando a confiança dos 600 mil clientes que eu me propus a proteger.",
    l: "Aprendi que a responsabilidade ampla significa ser o guardião da confiança do cliente, mesmo em áreas que não são formalmente suas. Um 'bug' de privacidade em escala não é um erro técnico, é uma catástrofe de confiança. Esse aprendizado foi tão profundo que, na minha startup, a governança de dados foi um valor fundador. Hoje, antes de aprovar qualquer projeto com dados sensíveis, minha primeira pergunta é sempre: 'Como isso fortalece ou enfraquece a confiança do nosso cliente?'."
  },
  en: {
    s: "In 2021, Unimed was about to launch four digital products with a potential revenue of BRL 15 million, but the new LGPD posed a risk of BRL 50 million in fines. As the person responsible for the health data of 600,000 customers, I saw that my responsibility went beyond just launching products. A single leak of medical data would not only be a financial loss but a breach of a sacred trust with our customers.",
    t: "My mission was to ensure that innovation did not come at the expense of privacy. I was appointed as the sole owner for LGPD compliance in the new products, but I imposed a greater responsibility on myself: to create a new standard of data governance for the entire company. The task was not to comply with a law, but to honor the trust of our 600,000 customers, proving that agility and rigorous security can go hand in hand.",
    a: "My approach was to treat privacy as a product requirement, not an obstacle. I created governance mechanisms from the beginning, such as the non-negotiable rule that no development would start without an approved 'Privacy Impact Assessment.' For the Primary Care product, I personally led the design of a 'Granular Consent Panel,' an innovation that gave the customer full control over their data. This was not a requirement of my role, but I knew it was the right thing to do to protect our customers and the company.",
    r: "I launched the four products on time, 100% compliant, and we passed three external audits with no remarks. The Consent Panel had an 85% adoption rate, 25 points above the industry average, and became the standard for all company products. In 24 months, we had not a single privacy incident, avoiding an estimated BRL 2.4 million in fines and, most importantly, honoring the trust of the 600,000 customers I set out to protect.",
    l: "I learned that broad responsibility means being the guardian of the customer's trust, even in areas that are not formally yours. A privacy 'bug' at scale is not a technical error; it's a catastrophe of trust. This learning was so profound that in my startup, data governance was a founding value. Today, before approving any project with sensitive data, my first question is always: 'How does this strengthen or weaken our customer's trust?'."
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Meu maior erro foi subestimar a complexidade de integrar os controles de privacidade em sistemas legados. Acreditei que os workshops seriam suficientes, mas a realidade técnica se mostrou mais desafiadora, o que gerou resistência da equipe de engenharia e quase atrasou o cronograma em duas semanas.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My biggest mistake was underestimating the complexity of integrating privacy controls into legacy systems. I believed the workshops would be enough, but the technical reality proved more challenging, which generated resistance from the engineering team and almost delayed the schedule by two weeks."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu começaria com uma avaliação técnica aprofundada dos sistemas legados, envolvendo arquitetos desde o primeiro dia. Além disso, eu implementaria protótipos funcionais de privacidade em 2 semanas para demonstrar a viabilidade e ganhar a confiança da equipe antes de comprometer recursos em larga escala.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would start with an in-depth technical assessment of the legacy systems, involving architects from day one. Additionally, I would implement functional privacy prototypes in 2 weeks to demonstrate feasibility and gain the team's trust before committing large-scale resources."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "O obstáculo mais difícil foi convencer a equipe técnica de que a privacidade não era apenas uma burocracia, mas uma vantagem competitiva. Muitos viam a LGPD como um obstáculo. Para superar isso, precisei demonstrar com protótipos como os controles poderiam ser implementados de forma eficiente, sem comprometer a agilidade.",
      q_en: "What was the most difficult obstacle to overcome?",
      a_en: "The most difficult obstacle was convincing the technical team that privacy was not just a bureaucracy, but a competitive advantage. Many saw LGPD as a roadblock. To overcome this, I had to demonstrate with prototypes how controls could be implemented efficiently without compromising agility."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Os principais riscos eram as multas de até R$50 milhões e a perda de confiança de 600 mil clientes. Mitiguei esses riscos com um 'Privacy Impact Assessment' obrigatório, a implementação de 'Privacy by Design' desde o início, e auditorias externas regulares. Com esses controles, o risco foi reduzido a um nível próximo de zero.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risks were fines of up to BRL 50 million and the loss of trust of 600,000 customers. I mitigated these risks with a mandatory 'Privacy Impact Assessment,' the implementation of 'Privacy by Design' from the start, and regular external audits. With these controls, the risk was reduced to near zero."
    },
    {
      q: "Que dados você usou para justificar o investimento em privacidade?",
      a: "Usei a projeção de multas da LGPD (até R$50 milhões) e as métricas de adoção do nosso Painel de Consentimento, que atingiram 85% contra 60% da média da indústria. A racional foi baseada no ROI da prevenção: cada R$1 investido em compliance nos economizou R$12 em multas e danos à reputação.",
      q_en: "What data did you use to justify the investment in privacy?",
      a_en: "I used the LGPD fine projection (up to BRL 50 million) and the adoption metrics of our Consent Panel, which reached 85% compared to the industry average of 60%. The rationale was based on the ROI of prevention: every BRL 1 invested in compliance saved us BRL 12 in fines and reputational damage."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "Apliquei os princípios de 'Privacy by Design' na minha startup, tornando a governança de dados um valor fundamental. Na Unimed, expandi o modelo para todos os produtos, criando uma equipe central de ‘UX de Confiança’. Hoje, presto consultoria para outras empresas no mesmo framework.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "I applied the 'Privacy by Design' principles in my startup, making data governance a core value. At Unimed, I expanded the model to all products, creating a central 'Trust UX' team. Today, I consult for other companies on the same framework."
    },
    {
      q: "Como você equilibrou a conformidade rigorosa com a velocidade da inovação?",
      a: "Ao tratar a privacidade como um requisito desde o Dia 0, e não como um obstáculo. O 'Privacy Impact Assessment' no início do ciclo de vida do produto evitou retrabalho e garantiu que a privacidade fosse incorporada ao design. Era mais rápido construir certo da primeira vez do que consertar depois, o que na verdade acelerou nosso time-to-market.",
      q_en: "How did you balance rigorous compliance with the speed of innovation?",
      a_en: "By treating privacy as a Day 0 requirement, not an obstacle. The 'Privacy Impact Assessment' at the beginning of the product lifecycle avoided rework and ensured privacy was incorporated into the design. It was faster to build it right the first time than to fix it later, which actually accelerated our time-to-market."
    },
    {
      q: "Qual foi a decisão mais difícil que você tomou relacionada à privacidade neste projeto?",
      a: "A decisão mais difícil foi a de descartar uma parceria promissora com uma healthtech. A solução deles era inovadora, mas o modelo de compartilhamento de dados não atendia aos meus altos padrões de privacidade. Foi uma decisão difícil de curto prazo, mas que protegeu minha responsabilidade de longo prazo com os dados e a confiança dos nossos clientes.",
      q_en: "What was the most difficult privacy-related decision you made in this project?",
      a_en: "The most difficult decision was to discard a promising partnership with a healthtech. Their solution was innovative, but their data-sharing model did not meet my high standards of privacy. It was a difficult short-term decision, but it protected my long-term responsibility for our customers' data and trust."
    },
    {
      q: "Como você garantiu que a equipe entendesse que isso era sobre responsabilidade ética, não apenas compliance?",
      a: "Através de storytelling. Nos workshops, eu não falava sobre ‘conformidade com a LGPD’, mas sobre ‘proteger a dona Maria, que confia seus dados de saúde a nós’. Quando a equipe entendeu que estávamos protegendo pessoas reais, e não apenas cumprindo regras, a mentalidade mudou e a privacidade se tornou uma missão compartilhada.",
      q_en: "How did you ensure the team understood this was about ethical responsibility, not just compliance?",
      a_en: "Through storytelling. In the workshops, I didn't talk about 'LGPD compliance,' but about 'protecting Mrs. Maria, who entrusts her health data to us.' When the team understood that we were protecting real people, not just following rules, the mindset changed and privacy became a shared mission."
    }
  ]
};

export default case_1;