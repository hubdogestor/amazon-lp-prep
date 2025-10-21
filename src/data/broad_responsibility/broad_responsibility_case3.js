// Case 3 - broad_responsibility
const case_3 = {
  id: "sicredi-responsible-ai-policy",
  title: "Impacto Amplo das Decisões: Política de IA Responsável com Responsabilidade Social, Equidade e Transparência",
  title_pt: "Impacto Amplo das Decisões: Política de IA Responsável com Responsabilidade Social, Equidade e Transparência",
  title_en: "Broader Impact of Decisions: Responsible AI Policy with Social Responsibility, Equity and Transparency",
  company: "Sicredi",
  period: "01/2020-12/2020",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "No Sicredi, ao lançar nosso primeiro modelo de ML para crédito, identifiquei um viés que penalizava trabalhadores autônomos, com uma taxa de aprovação 23% menor. O caminho fácil seria lançar o modelo como estava, pois era tecnicamente preciso. No entanto, eu vi minha responsabilidade de forma mais ampla: uma decisão algorítmica em escala poderia perpetuar a exclusão financeira para milhares de cooperados, além de expor a empresa a riscos reputacionais e regulatórios.",
    t: "Minha missão era garantir que nossa inovação em IA fosse justa e transparente, mesmo antes de ser uma exigência. Eu me impus a responsabilidade de ir além da acurácia do modelo e considerar o impacto em todos os stakeholders: os 120 mil cooperados, os reguladores e a sociedade. A tarefa era criar a primeira 'Política de IA Responsável' do Sicredi, estabelecendo um precedente de governança e responsabilidade social.",
    a: "Para isso, estudei os frameworks de IA do Google e Microsoft e redigi uma política que instituía mecanismos concretos, como o 'teste de viés' obrigatório. Quando o teste confirmou o viés contra autônomos, liderei pessoalmente a correção através de 'feature engineering', criando novas variáveis que representavam melhor a saúde financeira desse perfil. Enfrentei resistência do VP Comercial, que via isso como um atraso, mas justifiquei o ROI ético e a importância para uma cooperativa baseada em equidade. Também criei um sistema de 'explicabilidade' para traduzir as decisões do modelo em linguagem simples para o cliente.",
    r: "A política se tornou o padrão para todos os projetos de dados no Sicredi. Como resultado, mais de 18.000 autônomos qualificados ganharam acesso a crédito justo, aumentando a taxa de aprovação em 15% para esse grupo e liberando R$ 47 milhões em crédito que antes seria negado. Evitamos fiscalizações invasivas do Banco Central e nosso framework foi replicado por outras 3 cooperativas, estabelecendo um novo padrão de IA responsável no setor.",
    l: "Aprendi que a responsabilidade ampla exige uma metodologia estruturada para antecipar efeitos não intencionais. Hoje, em qualquer projeto, eu mapeio os stakeholders secundários e testo os impactos não óbvios. A responsabilidade sobre os efeitos secundários de uma decisão cresce exponencialmente com a escala. Em um mundo de decisões algorítmicas, nossa responsabilidade como líderes é garantir que essas decisões sejam justas, transparentes e auditáveis."
  },
  en: {
    s: "At Sicredi, when launching our first ML credit model, I identified a bias that penalized self-employed workers with a 23% lower approval rate. The easy path would have been to launch the model as it was, as it was technically accurate. However, I saw my responsibility more broadly: an algorithmic decision at scale could perpetuate financial exclusion for thousands of members, in addition to exposing the company to reputational and regulatory risks.",
    t: "My mission was to ensure that our AI innovation was fair and transparent, even before it was a requirement. I took on the responsibility of going beyond the model's accuracy and considering the impact on all stakeholders: the 120,000 members, regulators, and society. The task was to create Sicredi's first 'Responsible AI Policy,' setting a precedent for governance and social responsibility.",
    a: "To do this, I studied Google's and Microsoft's AI frameworks and drafted a policy that instituted concrete mechanisms, such as mandatory 'bias testing.' When the test confirmed the bias against the self-employed, I personally led the correction through 'feature engineering,' creating new variables that better represented this profile's financial health. I faced resistance from the Commercial VP, who saw this as a delay, but I justified the ethical ROI and the importance for a cooperative based on equity. I also created an 'explainability' system to translate the model's decisions into simple language for the customer.",
    r: "The policy became the standard for all data projects at Sicredi. As a result, over 18,000 qualified self-employed workers gained access to fair credit, increasing the approval rate for this group by 15% and releasing BRL 47 million in credit that would have otherwise been denied. We avoided invasive audits from the Central Bank, and our framework was replicated by 3 other cooperatives, setting a new standard for responsible AI in the sector.",
    l: "I learned that broad responsibility requires a structured methodology to anticipate unintended effects. Today, in any project, I map secondary stakeholders and test for non-obvious impacts. The responsibility for the secondary effects of a decision grows exponentially with scale. In a world of algorithmic decisions, our responsibility as leaders is to ensure that these decisions are fair, transparent, and auditable."
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha nesse caso?",
      a: "Meu maior erro foi subestimar a resistência do VP Comercial. Acreditei que os dados sobre os riscos seriam suficientes, mas a pressão por resultados de curto prazo era imensa. Tive que investir um tempo considerável em negociações para conseguir o apoio, o que atrasou o início do projeto em duas semanas.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My biggest mistake was underestimating the Commercial VP's resistance. I believed the data on the risks would be enough, but the pressure for short-term results was immense. I had to invest considerable time in negotiations to get the support, which delayed the project's start by two weeks."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu envolveria o VP Comercial desde o início, posicionando a IA Responsável não como um obstáculo, mas como uma vantagem competitiva. Eu o convidaria a co-criar a solução, transformando-o em um patrocinador do projeto desde o primeiro dia, o que teria acelerado a adesão.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would involve the Commercial VP from the beginning, positioning Responsible AI not as an obstacle, but as a competitive advantage. I would invite him to co-create the solution, turning him into a sponsor from day one, which would have accelerated buy-in."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "O obstáculo mais difícil foi a resistência da equipe de dados à complexidade da ‘explicabilidade’ dos modelos. Eles estavam focados na acurácia. Para superar isso, posicionei o desafio como uma oportunidade de inovação em engenharia e investi em ferramentas como SHAP, que facilitaram o processo.",
      q_en: "What was the most difficult obstacle to overcome?",
      a_en: "The most difficult obstacle was the data team's resistance to the complexity of model 'explainability.' They were focused on accuracy. To overcome this, I positioned the challenge as an engineering innovation opportunity and invested in tools like SHAP, which facilitated the process."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Os principais riscos eram a perpetuação de vieses, multas regulatórias e danos à reputação. Mitiguei esses riscos com a Política de IA Responsável, que incluía testes de viés obrigatórios, um Comitê de Ética para governança, e um sistema de ‘explicabilidade’ para garantir a transparência.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risks were the perpetuation of biases, regulatory fines, and reputational damage. I mitigated these risks with the Responsible AI Policy, which included mandatory bias testing, an Ethics Committee for governance, and an 'explainability' system to ensure transparency."
    },
    {
      q: "Que dados você usou para identificar o viés no modelo?",
      a: "Usei uma técnica chamada ‘justiça contrafactual’. Em vez de apenas comparar dados demográficos, criei cenários hipotéticos para testar como o modelo se comportaria com perfis de risco idênticos, mas com diferentes tipos de vínculo empregatício. Foi essa análise que revelou a taxa de aprovação 23% menor para autônomos.",
      q_en: "What data did you use to identify the bias in the model?",
      a_en: "I used a technique called 'counterfactual fairness.' Instead of just comparing demographics, I created hypothetical scenarios to test how the model would behave with identical risk profiles but different employment types. It was this analysis that revealed the 23% lower approval rate for freelancers."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "O framework de IA Responsável foi replicado por outras três cooperativas, impactando mais de 600 mil membros. Além disso, a metodologia de mapear stakeholders secundários e antecipar efeitos não intencionais se tornou um padrão em todos os meus projetos. A pergunta ‘Quem mais isso afeta além do usuário direto?’ é sempre o ponto de partida.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "The Responsible AI framework was replicated by three other cooperatives, impacting over 600,000 members. Additionally, the methodology of mapping secondary stakeholders and anticipating unintended effects has become a standard in all my projects. The question 'Who else does this affect besides the direct user?' is always the starting point."
    },
    {
      q: "Como o Comitê de Ética em IA operava na prática?",
      a: "O comitê se reunia mensalmente e funcionava como um ‘quality gate’. Nenhum modelo de IA entrava em produção sem sua aprovação formal, baseada em um checklist que criei, cobrindo impacto social, resultados dos testes de viés, interpretabilidade e plano de monitoramento.",
      q_en: "How did the AI Ethics Committee operate in practice?",
      a_en: "The committee met monthly and functioned as a 'quality gate.' No AI model went into production without its formal approval, based on a checklist I created covering social impact, bias test results, interpretability, and the monitoring plan."
    },
    {
      q: "Quem fazia parte do ‘Comitê de Ética em IA’ e por que você escolheu essa composição?",
      a: "Era um grupo multidisciplinar que eu fiz questão de montar. Incluía cientistas de dados, líderes de negócio, jurídico, compliance, e, o mais importante, um membro do comitê de relacionamento com o cooperado, que trazia a voz do cliente. Essa diversidade garantia que considerássemos o impacto de múltiplas perspectivas.",
      q_en: "Who was part of the 'AI Ethics Committee' and why did you choose this composition?",
      a_en: "It was a multidisciplinary group that I made a point of assembling. It included data scientists, business leaders, legal, compliance, and, most importantly, a member of the member relations committee, who brought the customer's voice. This diversity ensured we considered the impact from multiple perspectives."
    },
    {
      q: "O que significa ser ‘humilde e ponderado’ ao lidar com IA na prática?",
      a: "Significa reconhecer que os dados são um reflexo do mundo, com todos os seus vieses, e não a verdade absoluta. É ter a humildade de saber que meu modelo pode ser injusto, e a ponderação de criar sistemas para auditar, monitorar e corrigir esses erros continuamente, em vez de confiar cegamente na tecnologia.",
      q_en: "What does 'being humble and thoughtful' when dealing with AI in practice mean?",
      a_en: "It means recognizing that data is a reflection of the world, with all its biases, not absolute truth. It's having the humility to know my model can be unfair, and the thoughtfulness to create systems to audit, monitor, and continuously correct these errors, rather than blindly trusting the technology."
    }
  ]
};

export default case_3;