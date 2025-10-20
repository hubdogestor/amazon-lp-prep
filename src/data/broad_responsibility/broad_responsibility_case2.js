// Case 2 - broad_responsibility
const case_2 = {
  id: "hsbc-fatca-aml-migration",
  title: "Implementação de Controles FATCA e AML em Operação Bilionária",
  title_pt: "Implementação de Controles FATCA e AML em uma Operação de Escala Bilionária",
  title_en: "FATCA and AML Controls Implementation in Billion-Dollar Operation",
  company: "HSBC",
  period: "01/2016--12/2016",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: `Na venda da operação do HSBC para o Bradesco, um desafio de altíssimo risco me aguardava: a migração de um portfólio bilionário com milhares de contas internacionais, bem no epicentro de regulamentações globais complexas como FATCA e AML. Uma única falha poderia resultar em multas multimilionárias e impactar a integridade do sistema financeiro global.`,
    t: `Diante desse cenário, meu papel individual como líder do portfólio era de responsabilidade absoluta. Eu precisava garantir 100% de conformidade em uma operação que processava bilhões em transações, atuando como owner único. A tarefa era entender as implicações mais amplas de nossas ações: nosso trabalho era uma linha de defesa na integridade do sistema financeiro global, protegendo não apenas o banco, mas contribuindo para a estabilidade econômica internacional.`,
    a: `Para executar essa missão, minhas ações pessoais foram diretas: priorizei mudanças, alinhei stakeholders e removi bloqueios. Reconhecendo a complexidade, organizei uma força-tarefa que incluía não apenas especialistas de compliance e jurídico, mas também analistas de operações da linha de frente. Essa inclusão foi crucial. Em vez do script automatizado padrão, criei um processo de 'due diligence aprimorada', com revisão manual para contas de alto risco. Justifiquei o custo (R$50k) mostrando que era menor que 0,1% de uma multa regulatória típica. Além disso, trabalhei pessoalmente com a equipe de comunicação para criar um roteiro empático para contatar os clientes, o que aumentou a taxa de resposta em 40%. Por fim, liderei a criação de um 'Playbook de Conformidade em Migrações' de 45 páginas, que foi subsequentemente utilizado pela equipe do HSBC na Argentina, economizando meses de trabalho para eles.`,
    r: `Como resultado, concluímos a migração com 100% de conformidade FATCA e AML, validado por auditorias sem ressalvas — um feito notável, já que benchmarks da indústria mostram que migrações similares frequentemente apresentam de 5 a 15% de não-conformidade. Evitamos multas potenciais de mais de USD $50M e protegemos a reputação do banco. O playbook que criei foi adotado como melhor prática pelo PMO global do HSBC, beneficiando futuras migrações em 12 países.`,
    l: `Essa experiência me ensinou que, quanto maior a escala, maior a responsabilidade com o ecossistema. Conformidade não é uma caixa a ser marcada; é uma manifestação da nossa responsabilidade com a sociedade. Lidar com controles AML/FATCA em operações bilionárias me preparou diretamente para os desafios de payment operations na Amazon, onde a integridade transacional em escala global exige o mesmo nível de rigor e pensamento sistêmico.`
  },
  en: {
    s: `In the context of payment operations in wealth management, the sale of HSBC's operation to Bradesco involved migrating a billion-dollar portfolio with thousands of international accounts. Our success and scale meant I were at the center of complex global regulations like FATCA and AML (Anti-Money Laundering). A single failure could result in multimillion-dollar fines and impact global financial system integrity.`,
    t: `My individual role: I led end-to-end, set scope and critical decisions, and acted as the single-threaded owner. As portfolio leader, my responsibility was absolute. I needed to ensure 100% compliance in an operation processing billions in transactions. The task was to understand the broader implications of my actions: my work was a line of defense in global financial system integrity, protecting not just the bank, but contributing to international economic stability.`,
    a: `Personal actions: I drove execution—prioritized changes, aligned stakeholders, made trade-offs, and unblocked teams. Recognizing the complexity, I organized a task force that not only included compliance and legal experts, but also operations analysts, who truly understood customer data nuances. This frontline inclusion was crucial for identifying practical risks. The standard process was an automated script to identify customers with 'American citizenship indicators'. I considered this insufficient for a high-complexity portfolio. I created an 'enhanced due diligence' process, where high-risk accounts (e.g., with multiple passports, movements in tax havens) were manually reviewed by an analyst pair. I chose the 'four eyes' standard because industry data showed 90% of compliance errors in wealth management derived from false positives/negatives in automated screening, and manual review cost (R$50k) was less than 0.1% of a typical regulatory fine. I knew I'd have to contact customers for document verification. Instead of a standard legalistic letter, I personally worked with the communication team to create an empathetic script that explained the migration context. The result was that customer response rate increased 40% compared to similar previous communications, significantly accelerating the process. I was responsible for identifying the need and leading creation of a 45-page 'Migration Compliance Playbook'. This playbook was subsequently requested and used by the team that conducted HSBC migration in Argentina, saving them months of planning work.`,
    r: `I completed migration with 100% FATCA and AML compliance, validated by audits without exceptions - a result that stands out considering similar migrations in the financial sector frequently show 5-15% non-compliance rates according to industry benchmarks. I avoided potential fines (which could reach USD $50M+ based on regulatory precedents) and protected the bank's reputation in a very high-profile transaction. The playbook I created was adopted as a best practice by HSBC's global PMO, benefiting future migrations in 12 countries and strengthening the institution's global controls.`,
    l: `I learned that, the greater the scale, the greater the responsibility to the ecosystem. Compliance isn't a box to be checked; it's a manifestation of my responsibility to society. This experience with AML/FATCA controls in billion-dollar financial operations prepared me directly for payment operations at Amazon, where responsibility over compliance, fraud prevention and transactional integrity at global scale requires the same level of rigor, systemic thinking and regulatory risk anticipation. This mentality guided me at SEFAZ, where responsibility with taxpayer money requires a similar level of rigor and thinking about each action's impact.`
  },
  fups: [
    {
        "q": "Qual foi seu maior erro ou falha nesse caso?",
        "a": "Meu maior erro foi não ter antecipado a complexidade dos ‘falsos positivos’ — clientes que o sistema sinalizava como americanos, mas não eram. Inicialmente, focamos apenas em encontrar os verdadeiros positivos, mas o processo de verificação gerou atrito desnecessário para clientes inocentes. Tive que criar um processo de ‘due diligence aprimorada’ no meio do caminho para corrigir isso, o que consumiu tempo e recursos não planejados.",
        "q_en": "What was your biggest mistake or failure in this case?",
        "a_en": "My biggest mistake was not anticipating the complexity of 'false positives' — customers the system flagged as American, but weren't. Initially, we focused only on finding the true positives, but the verification process created unnecessary friction for innocent customers. I had to create an 'enhanced due diligence' process midway to correct this, which consumed unplanned time and resources."
    },
    {
        "q": "O que você faria diferente hoje?",
        "a": "Hoje, eu incorporaria a análise de ‘falsos positivos’ desde o início do planejamento. Criaria um workflow específico para esses casos, com uma equipe dedicada a resolvê-los internamente antes de qualquer contato com o cliente. Isso minimizaria o impacto no cliente e tornaria o processo mais eficiente, evitando o retrabalho que tivemos que fazer.",
        "q_en": "What would you do differently today?",
        "a_en": "Today, I would incorporate the analysis of 'false positives' from the beginning of the planning. I would create a specific workflow for these cases, with a dedicated team to resolve them internally before any customer contact. This would minimize the impact on the customer and make the process more efficient, avoiding the rework we had to do."
    },
    {
        "q": "Qual foi o obstáculo mais difícil de superar?",
        "a": "O obstáculo mais difícil foi convencer a liderança a investir em um processo de ‘due diligence aprimorada’ que era mais caro e demorado que o padrão. Apresentei um business case baseado em risco, mostrando que o custo da revisão manual de 1.000 contas era inferior a 1% do valor de uma única multa potencial do IRS. O ROI da precaução era evidente, mas a batalha para conseguir o orçamento foi intensa.",
        "q_en": "What was the most difficult obstacle to overcome?",
        "a_en": "The most difficult obstacle was convincing the leadership to invest in an 'enhanced due diligence' process that was more expensive and time-consuming than the standard. I presented a risk-based business case, showing that the cost of manually reviewing 1,000 accounts was less than 1% of the value of a single potential IRS fine. The ROI of precaution was evident, but the battle to get the budget was intense."
    },
    {
        "q": "Quais foram os principais riscos e como você os mitigou?",
        "a": "Os principais riscos eram as multas multimilionárias por falhas de conformidade com FATCA e AML, e o dano reputacional ao banco. Mitiguei esses riscos com uma abordagem de ‘defesa em profundidade’: a força-tarefa multidisciplinar, a ‘due diligence aprimorada’ para casos de alto risco, e o ‘Playbook de Conformidade’ para padronizar as melhores práticas. Essa combinação de medidas reduziu o risco a um nível residual aceitável.",
        "q_en": "What were the main risks and how did you mitigate them?",
        "a_en": "The main risks were the multimillion-dollar fines for non-compliance with FATCA and AML, and the reputational damage to the bank. I mitigated these risks with a 'defense in depth' approach: the multidisciplinary task force, the 'enhanced due diligence' for high-risk cases, and the 'Compliance Playbook' to standardize best practices. This combination of measures reduced the risk to an acceptable residual level."
    },
    {
        "q": "Que dados você usou para justificar a criação da ‘due diligence aprimorada’?",
        "a": "Usei dados da indústria que mostravam que 90% dos erros de conformidade em wealth management vinham de falsos positivos ou negativos em triagens automatizadas. Calculei que o custo da revisão manual era de R$50k, enquanto uma única multa poderia exceder R$50M. A análise de custo-benefício era clara e irrefutável, o que me ajudou a conseguir a aprovação para o processo.",
        "q_en": "What data did you use to justify the creation of the 'enhanced due diligence'?",
        "a_en": "I used industry data that showed that 90% of compliance errors in wealth management came from false positives or negatives in automated screenings. I calculated that the cost of manual review was BRL 50k, while a single fine could exceed BRL 50M. The cost-benefit analysis was clear and irrefutable, which helped me get approval for the process."
    },
    {
        "q": "Como você usou o aprendizado desse caso em outras frentes?",
        "a": "O ‘Playbook de Conformidade em Migrações’ que criei foi adotado como melhor prática pelo PMO global do HSBC, beneficiando futuras migrações em 12 países e economizando meses de trabalho. Além disso, a experiência com controles AML/FATCA me preparou diretamente para os desafios de operações de pagamento na Amazon, onde a integridade transacional em escala global exige o mesmo nível de rigor e pensamento sistêmico.",
        "q_en": "How did you use the learning from this case in other areas?",
        "a_en": "The 'Migration Compliance Playbook' I created was adopted as a best practice by HSBC's global PMO, benefiting future migrations in 12 countries and saving months of work. In addition, the experience with AML/FATCA controls prepared me directly for the challenges of payment operations at Amazon, where transactional integrity on a global scale requires the same level of rigor and systemic thinking."
    },
    {
        "q": "Como você garantiu que a força-tarefa de especialistas trabalhasse de forma colaborativa e eficiente?",
        "a": "Estabeleci um objetivo comum claro: 100% de conformidade com zero impacto negativo no cliente. Usei a metodologia RACI para definir papéis e responsabilidades, e facilitei as reuniões focando em decisões e ações, não em debates teóricos. Meu papel era ser o ‘tradutor’ entre as linguagens do jurídico, do compliance e da operação, garantindo que todos estivessem na mesma página.",
        "q_en": "How did you ensure the specialist task force worked collaboratively and efficiently?",
        "a_en": "I established a clear common goal: 100% compliance with zero negative impact on the customer. I used the RACI methodology to define roles and responsibilities, and I facilitated the meetings focusing on decisions and actions, not on theoretical debates. My role was to be the 'translator' between the languages of legal, compliance, and operations, ensuring that everyone was on the same page."
    },
    {
        "q": "Como você mediu o impacto da abordagem centrada no cliente durante a migração?",
        "a": "Medimos o impacto através de duas métricas principais: a ‘taxa de resposta positiva’ dos clientes, que aumentou em 40% em comparação com comunicações anteriores, e o ‘tempo para obter a documentação necessária’, que foi reduzido em 25%. Além disso, recebemos feedbacks diretos através dos gerentes de relacionamento, com clientes elogiando a clareza e a empatia da nossa comunicação.",
        "q_en": "How did you measure the impact of the customer-centric approach during the migration?",
        "a_en": "We measured the impact through two main metrics: the 'positive response rate' from customers, which increased by 40% compared to previous communications, and the 'time to obtain the necessary documentation,' which was reduced by 25%. In addition, we received direct feedback through the relationship managers, with customers praising the clarity and empathy of our communication."
    },
    {
        "q": "Qual foi a reação de um membro da sua equipe quando cometeu um erro no processo de compliance?",
        "a": "Minha primeira reação foi de apoio incondicional. Eu disse: ‘Ok, vamos entender o que aconteceu e como podemos consertar o processo para que isso não aconteça novamente.’ Depois que resolvemos o problema, a conversa se tornou sobre aprendizado e melhoria contínua. A responsabilidade é sobre corrigir o sistema, não sobre culpar o indivíduo, e essa abordagem fortaleceu a confiança e a segurança psicológica da equipe.",
        "q_en": "What was the reaction of a member of your team when they made a mistake in the compliance process?",
        "a_en": "My first reaction was one of unconditional support. I said, 'Ok, let's understand what happened and how we can fix the process so this doesn't happen again.' After we solved the problem, the conversation became about learning and continuous improvement. The responsibility is about fixing the system, not about blaming the individual, and this approach strengthened the team's trust and psychological safety."
    },
    {
        "q": "Como essa experiência se conecta à sua responsabilidade com as ‘futuras gerações’?",
        "a": "A conexão está na integridade do sistema financeiro. Ao garantir a conformidade com leis anti-lavagem de dinheiro, estamos fazendo a nossa parte para tornar o sistema mais seguro e transparente para todos. Deixar um sistema mais íntegro do que o encontramos é uma responsabilidade com as futuras gerações que dependerão desse sistema para suas próprias transações e investimentos.",
        "q_en": "How does this experience connect to your responsibility to 'future generations'?",
        "a_en": "The connection is in the integrity of the financial system. By ensuring compliance with anti-money laundering laws, we are doing our part to make the system safer and more transparent for everyone. Leaving a more integral system than we found it is a responsibility to the future generations who will depend on this system for their own transactions and investments."
    }
]
};

export default case_2;
