// Case 2 - broad_responsibility
const case_2 = {
  id: "hsbc-fatca-aml-migration",
  title: "Implementação de Controles FATCA e AML em Operação Bilionária",
  title_pt: "Implementação de Controles FATCA e AML em uma Operação de Escala Bilionária",
  title_en: "FATCA and AML Controls Implementation in Billion-Dollar Operation",
  company: "HSBC",
  period: "01/2016--12/2016",
  keywords: "#compliance | #fatca | #aml | #risco-sistêmico | #integridade",
  isTopCase: false,
  isGoodCase: false,
  pt: {
    s: "Na venda da operação do HSBC para o Bradesco, fui o responsável pela migração de um portfólio bilionário com milhares de contas internacionais. Uma única falha de conformidade com as regulações FATCA e AML poderia resultar em multas multimilionárias e, mais importante, impactar a integridade do sistema financeiro. Minha responsabilidade ia além do banco; era com a estabilidade do ecossistema financeiro.",
    t: "Minha missão era garantir 100% de conformidade em uma operação de altíssimo risco. Eu me posicionei como o único responsável por essa frente, entendendo que meu trabalho era uma linha de defesa para a integridade do sistema. A tarefa não era apenas migrar contas, mas proteger o ecossistema financeiro de riscos sistêmicos, agindo como um guardião em nome da empresa e da sociedade.",
    a: "Para executar essa missão, criei uma força-tarefa que incluía não apenas especialistas, mas também analistas da linha de frente, que entendiam as nuances dos dados. Em vez de confiar em scripts automatizados, criei um processo de 'due diligence aprimorada' com revisão manual para contas de alto risco, justificando o custo ao mostrar que era menor que 0,1% de uma multa típica. Também trabalhei pessoalmente para criar um roteiro de comunicação empático para os clientes, o que aumentou a taxa de resposta em 40% e acelerou o processo. Por fim, consolidei todo o aprendizado em um 'Playbook de Conformidade em Migrações'.",
    r: "Concluímos a migração com 100% de conformidade, um feito notável em comparação com os benchmarks do setor. Evitamos multas potenciais de mais de US$ 50 milhões e protegemos a reputação do banco. O playbook que criei foi adotado como melhor prática pelo PMO global do HSBC, beneficiando futuras migrações em 12 países e fortalecendo os controles globais da instituição, um impacto que durou muito além da minha presença no projeto.",
    l: "Aprendi que, quanto maior a escala, maior a responsabilidade com o ecossistema. Conformidade não é uma caixa a ser marcada; é uma manifestação da nossa responsabilidade com a sociedade. Essa experiência com controles AML/FATCA me preparou para os desafios de operações de pagamento na Amazon, onde a integridade transacional em escala global exige o mesmo nível de rigor e pensamento sistêmico."
  },
  en: {
    s: "In the sale of HSBC's operation to Bradesco, I was responsible for migrating a billion-dollar portfolio with thousands of international accounts. A single compliance failure with FATCA and AML regulations could result in multimillion-dollar fines and, more importantly, impact the integrity of the financial system. My responsibility extended beyond the bank; it was to the stability of the financial ecosystem.",
    t: "My mission was to ensure 100% compliance in a high-risk operation. I positioned myself as the sole owner of this front, understanding that my work was a line of defense for the system's integrity. The task was not just to migrate accounts, but to protect the financial ecosystem from systemic risks, acting as a guardian on behalf of the company and society.",
    a: "To execute this mission, I created a task force that included not only experts but also front-line analysts who understood the nuances of the data. Instead of relying on automated scripts, I created an 'enhanced due diligence' process with manual review for high-risk accounts, justifying the cost by showing it was less than 0.1% of a typical fine. I also personally worked to create an empathetic communication script for customers, which increased the response rate by 40% and accelerated the process. Finally, I consolidated all the learning into a 'Migration Compliance Playbook.'",
    r: "We completed the migration with 100% compliance, a remarkable achievement compared to industry benchmarks. We avoided potential fines of over $50 million and protected the bank's reputation. The playbook I created was adopted as a best practice by HSBC's global PMO, benefiting future migrations in 12 countries and strengthening the institution's global controls, an impact that lasted long after my presence on the project.",
    l: "I learned that the greater the scale, the greater the responsibility to the ecosystem. Compliance is not a box to be checked; it is a manifestation of our responsibility to society. This experience with AML/FATCA controls prepared me for the challenges of payment operations at Amazon, where transactional integrity on a global scale requires the same level of rigor and systemic thinking."
  },
  fups: [
    {
      q: "Qual foi seu maior erro ou falha nesse caso?",
      a: "Meu maior erro foi não ter antecipado a complexidade dos ‘falsos positivos’ — clientes que o sistema sinalizava como de risco, mas não eram. O processo de verificação gerou atrito desnecessário para clientes inocentes. Tive que criar um processo de ‘due diligence aprimorada’ no meio do caminho para corrigir isso, o que consumiu tempo e recursos não planejados.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "My biggest mistake was not anticipating the complexity of 'false positives'—customers the system flagged as high-risk, but weren't. The verification process created unnecessary friction for innocent customers. I had to create an 'enhanced due diligence' process midway to fix this, which consumed unplanned time and resources."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Hoje, eu incorporaria a análise de ‘falsos positivos’ desde o início. Criaria um workflow específico para esses casos, com uma equipe dedicada a resolvê-los internamente antes de qualquer contato com o cliente. Isso minimizaria o impacto no cliente e tornaria o processo mais eficiente.",
      q_en: "What would you do differently today?",
      a_en: "Today, I would incorporate the analysis of 'false positives' from the beginning. I would create a specific workflow for these cases, with a dedicated team to resolve them internally before any customer contact. This would minimize customer impact and make the process more efficient."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "O obstáculo mais difícil foi convencer a liderança a investir em um processo de ‘due diligence aprimorada’ que era mais caro. Apresentei um business case baseado em risco, mostrando que o custo da revisão manual era inferior a 1% do valor de uma única multa potencial. O ROI da precaução era evidente.",
      q_en: "What was the most difficult obstacle to overcome?",
      a_en: "The most difficult obstacle was convincing leadership to invest in a more expensive 'enhanced due diligence' process. I presented a risk-based business case, showing that the cost of manual review was less than 1% of a single potential fine. The ROI of precaution was evident."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Os principais riscos eram as multas multimilionárias e o dano reputacional. Mitiguei isso com uma abordagem de ‘defesa em profundidade’: a força-tarefa multidisciplinar, a ‘due diligence aprimorada’ para casos de alto risco, e o ‘Playbook de Conformidade’ para padronizar as melhores práticas.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "The main risks were multimillion-dollar fines and reputational damage. I mitigated this with a 'defense in depth' approach: the multidisciplinary task force, the 'enhanced due diligence' for high-risk cases, and the 'Compliance Playbook' to standardize best practices."
    },
    {
      q: "Que dados você usou para justificar a ‘due diligence aprimorada’?",
      a: "Usei dados da indústria que mostravam que 90% dos erros de conformidade em wealth management vinham de triagens automatizadas. Calculei que o custo da revisão manual era de R$50k, enquanto uma única multa poderia exceder R$50M. A análise de custo-benefício era irrefutável.",
      q_en: "What data did you use to justify the 'enhanced due diligence'?",
      a_en: "I used industry data showing that 90% of compliance errors in wealth management came from automated screenings. I calculated that the cost of manual review was BRL 50k, while a single fine could exceed BRL 50M. The cost-benefit analysis was irrefutable."
    },
    {
      q: "Como você usou o aprendizado desse caso em outras frentes?",
      a: "O ‘Playbook de Conformidade’ que criei foi adotado como melhor prática pelo PMO global do HSBC, beneficiando futuras migrações em 12 países. A experiência com controles AML/FATCA me preparou para os desafios de operações de pagamento na Amazon, onde a integridade transacional em escala global exige o mesmo rigor.",
      q_en: "How did you use the learning from this case in other areas?",
      a_en: "The 'Compliance Playbook' I created was adopted as a best practice by HSBC's global PMO, benefiting future migrations in 12 countries. The experience with AML/FATCA controls prepared me for the challenges of payment operations at Amazon, where transactional integrity on a global scale requires the same rigor."
    },
    {
      q: "Como você garantiu que a força-tarefa trabalhasse de forma colaborativa?",
      a: "Estabeleci um objetivo comum claro: 100% de conformidade com zero impacto negativo no cliente. Usei a metodologia RACI para definir papéis e facilitei as reuniões focando em decisões, não em debates. Meu papel era ser o ‘tradutor’ entre as linguagens do jurídico, do compliance e da operação.",
      q_en: "How did you ensure the task force worked collaboratively?",
      a_en: "I established a clear common goal: 100% compliance with zero negative customer impact. I used the RACI methodology to define roles and facilitated meetings focusing on decisions, not debates. My role was to be the 'translator' between the languages of legal, compliance, and operations."
    },
    {
      q: "Como você mediu o impacto da abordagem centrada no cliente?",
      a: "Medimos o impacto através de duas métricas: a ‘taxa de resposta positiva’ dos clientes, que aumentou em 40%, e o ‘tempo para obter a documentação’, que foi reduzido em 25%. Além disso, recebemos feedbacks diretos elogiando a clareza e a empatia da nossa comunicação.",
      q_en: "How did you measure the impact of the customer-centric approach?",
      a_en: "We measured the impact through two metrics: the 'positive response rate' from customers, which increased by 40%, and the 'time to obtain documentation,' which was reduced by 25%. Additionally, we received direct feedback praising the clarity and empathy of our communication."
    },
    {
      q: "Como essa experiência se conecta à sua responsabilidade com as ‘futuras gerações’?",
      a: "A conexão está na integridade do sistema financeiro. Ao garantir a conformidade com leis anti-lavagem de dinheiro, estamos fazendo nossa parte para tornar o sistema mais seguro e transparente para todos. Deixar um sistema mais íntegro do que o encontramos é uma responsabilidade com as futuras gerações.",
      q_en: "How does this experience connect to your responsibility to 'future generations'?",
      a_en: "The connection is in the integrity of the financial system. By ensuring compliance with anti-money laundering laws, we are doing our part to make the system safer and more transparent for everyone. Leaving a more integral system than we found it is a responsibility to future generations."
    }
  ]
};

export default case_2;
