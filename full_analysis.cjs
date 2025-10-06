const fs = require('fs');
const path = require('path');

// Todas as perguntas do CSV
const allQuestions = {
  'INVENT AND S      "Conte sobre quando você teve que mudar curso/direção de um projeto quando estava 70% completo",
      "Descreva uma situação onde você teve que tomar decisão rápida sobre transação suspeita"PLIFY': [
    'Conte sobre uma inovação que você implementou que simplificou um processo (que era complexo)?',
    'Me fale sobre uma solução criativa que você desenvolveu',
    'Como você simplifica processos complexos?',
    'Descreva uma situação onde você desafiou o status quo',
    'Me fale sobre uma vez que você criou um processo mais simples que teve grande impacto',
    'Conte sobre quando você teve um plano mas encontrou obstáculos - como você pivotou?',
    'Descreva uma situação onde você equilibrou inovação com risco',
    'Como você decidiu entre construir uma solução própria vs. adaptar algo existente?',
    'Me dê um exemplo de quando você usou tecnologia/ferramenta de forma não-convencional para resolver um problema',
    'Conte sobre um processo de payment operations que você automatizou ou otimizou'
  ],
  'OWNERSHIP': [
    'Nos conte uma situação onde você assumiu responsabilidade além do seu escopo de trabalho e área de conhecimento - como lidou com isso, equilibrando as tarefas atuais/normais com essas outras (novas)?',
    'Me dê um exemplo de quando você foi além da sua função',
    'Conte sobre uma decisão de longo prazo que você tomou',
    'Como você age quando algo não é sua responsabilidade?',
    'Me fale sobre um trade-off difícil que você fez pensando no longo prazo',
    'Descreva uma situação onde você tomou uma decisão importante de negócio sem consultar seu gestor',
    'Me fale sobre quando você identificou uma ineficiência e tomou ownership para melhorar',
    'Como você lida com situações onde precisa assumir responsabilidade por erros?',
    'Descreva um projeto que você liderou do início ao fim - como garantiu o sucesso?',
    'Descreva quando você criou um mecanismo para prevenir problemas recorrentes em pagamentos'
  ],
  'DIVE DEEP': [
    'Conte uma situação onde você precisou entender a causa raiz para resolver um problema complexo',
    'Me fale sobre quando você teve que investigar um problema complexo',
    'Como você garante qualidade nos detalhes?',
    'Descreva uma situação onde dados superficiais não eram suficientes',
    'Conte sobre o problema mais complicado que você teve que lidar - como você investigou?',
    'Me dê um exemplo de quando você usou dados em profundidade para desenvolver uma solução',
    'Descreva uma vez que alguém te deu uma explicação mas você não acreditou e investigou - qual foi a verdade?',
    'Como você usa "5 Whys" ou análise de causa raiz para chegar ao fundo de problemas?',
    'Conte sobre quando métricas e anedotas diferiam - como você descobriu a verdade?',
    'Conte sobre uma vez que você identificou um padrão de fraude ou risco que outros não viram'
  ],
  'DELIVER RESULTS': [
    'Conte sobre um projeto desafiador entregue com sucesso superando obstáculos significativos',
    'Me fale sobre uma vez que você entregou sob pressão',
    'Como você lida com prazos apertados?',
    'Me dê um exemplo de quando você teve que priorizar para entregar no prazo',
    'Conte sobre quando você não gerenciou prioridades efetivamente e algo não foi entregue no prazo',
    'Me fale sobre quando você teve dois deadlines ao mesmo tempo - como gerenciou?',
    'Descreva uma vez que você teve que entregar resultados diante de desafios significativos',
    'Como você foca nos inputs-chave do negócio e os entrega com qualidade no prazo?',
    'Conte sobre quando você se recusou a baixar padrões apesar de pressão por deadlines',
    'Conte sobre uma meta desafiadora que você alcançou'
  ],
  'EARN TRUST': [
    'Qual foi o feedback mais difícil que você já recebeu? E como lidou com isso? / Me conte sobre um feedback negativo que você recebeu',
    'Conte sobre uma vez que você admitiu um erro',
    'Me fale sobre quando você teve que reconstruir confiança',
    'Como você lida com conflitos em equipe?',
    'Descreva uma situação onde você foi transparente mesmo sendo desconfortável',
    'Conte sobre um desacordo com um colega/gestor - como você resolveu?',
    'Me fale sobre quando você teve que falar uma verdade dura para alguém',
    'Descreva uma vez que você teve que influenciar um peer que tinha opinião diferente sobre um objetivo compartilhado',
    'Como você constrói confiança com stakeholders que você não conhece?',
    'Conte sobre quando você foi vocalmente auto-crítico mesmo sendo constrangedor',
    'Me fale sobre uma parceria complexa que você negociou com processadores de pagamento',
    'Como você gerencia relacionamentos com múltiplos stakeholders (bancos, gateways, reguladores)?',
    'Conte sobre quando você teve que influenciar parceiros externos sem autoridade direta'
  ],
  'CUSTOMER OBSESSION': [
    'Conte uma situação onde você foi além da expectativa do cliente ou antecipou uma necessidade não expressa',
    'Me fale sobre uma vez que você colocou o cliente em primeiro lugar',
    'Conte sobre quando você teve que escolher entre cliente e métricas internas',
    'Como você entende as necessidades dos clientes?',
    'Descreva uma situação onde você melhorou a experiência do cliente',
    'Conte sobre uma vez que você usou feedback de clientes para mudar completamente uma estratégia de produto',
    'Descreva uma situação onde você teve que equilibrar demandas competitivas de múltiplos clientes',
    'Me fale sobre quando você não conseguiu atender a expectativa de um cliente - o que você aprendeu?',
    'Como você prioriza necessidades de clientes quando recursos são limitados?',
    'Conte sobre uma vez que você defendeu um cliente mesmo quando isso não era popular internamente',
    'Como você equilibra prevenção de fraude com experiência do cliente?',
    'Como você reduziu chargebacks/disputas mantendo satisfação do cliente?'
  ],
  'LEARN AND BE CURIOUS': [
    'Como você se mantém atualizado na sua área de expertise e como explora novas áreas de conhecimento?',
    'Me fale sobre a última coisa nova que você aprendeu',
    'Conte sobre uma vez que você saiu da sua zona de conforto',
    'Descreva uma situação onde você teve que aprender algo rapidamente',
    'Me dê um exemplo de quando sua curiosidade levou a uma melhoria',
    'Conte sobre uma missão ou objetivo que você não achava que era alcançável - como você abordou?',
    'Me fale sobre algo que você aprendeu que te tornou melhor no seu trabalho',
    'Descreva uma área onde você identificou uma lacuna de conhecimento e como você a preencheu',
    'Como você explora novas possibilidades mesmo quando está ocupado com o dia a dia?',
    'Conte sobre quando você aplicou aprendizados de uma área completamente diferente ao seu trabalho'
  ],
  'INSIST ON HIGHEST STANDARDS': [
    'Como você garante que a equipe mantenha padrões elevados mesmo com prazo apertado?',
    'Conte sobre uma vez que você elevou a barra de qualidade',
    'Me fale sobre quando você não aceitou um trabalho medíocre',
    'Como você define padrões para sua equipe?',
    'Descreva uma situação onde você teve que refazer algo para atingir excelência',
    'Me dê um exemplo de quando você implementou um processo de qualidade',
    'Conte sobre quando você não apenas atingiu uma meta, mas excedeu consideravelmente - como?',
    'Descreva um projeto que você gostaria de ter feito melhor - o que faria diferente hoje?',
    'Me fale sobre uma vez que você teve que escolher entre velocidade e qualidade',
    'Como você garante que defeitos não passam para frente e problemas ficam resolvidos?',
    'Conte sobre quando você estabeleceu um novo padrão que outros achavam impossível de atingir'
  ],
  'ARE RIGHT, A LOT': [
    'Conte sobre uma situação onde você tomou uma decisão difícil com input de diferentes stakeholders',
    'Me fale sobre quando você mudou de opinião baseado em novos dados',
    'Como você toma decisões com informação incompleta?',
    'Descreva uma situação onde seu julgamento foi crucial',
    'Me dê um exemplo de quando você desafiou uma decisão que achava errada',
    'Conte sobre uma vez que você teve uma opinião impopular mas correta',
    'Me fale sobre quando você estava errado - como você lidou com isso?',
    'Descreva uma vez que você buscou perspectivas diversas para desafiar suas próprias crenças',
    'Como você garante que está fazendo as perguntas certas antes de tomar decisões?',
    'Conte sobre quando você teve que tomar uma decisão rápida sob pressão - você estava certo?',
    'Me dê exemplo de quando você usou dados de pagamento para impactar decisões comerciais'
  ],
  'BIAS FOR ACTION': [
    'Nos dê um exemplo de risco calculado que você tomou quando o tempo era crítico, e como você mitigou esse risco?',
    'Me fale sobre uma decisão que você tomou com informação limitada',
    'Conte sobre uma vez que você agiu rapidamente',
    'Como você decide quando é hora de agir vs. analisar mais?',
    'Descreva uma situação onde velocidade era crítica',
    'Me fale sobre quando você foi o primeiro a agir em algo',
    'Descreva uma vez que você teve que tomar decisão reversível rapidamente vs. irreversível com mais análise',
    'Como você equilibra necessidade de dados com necessidade de agir?',
    'Conte sobre quando você teve que mudar curso/direção de um projeto quando estava 70% completo'
    'Descreva uma situação onde você teve que tomar decisão rápida sobre transação suspeita'
  ],
  'THINK BIG': [
    'Conte sobre um momento onde você propôs uma ideia ousada mas que trouxe grandes resultados',
    'Conte sobre uma visão ambiciosa que você teve',
    'Me fale sobre um projeto que mudou o jogo',
    'Como você inspira outros com ideias grandes?',
    'Descreva uma situação onde você pensou além do óbvio',
    'Me dê um exemplo de quando você propôs algo que parecia impossível',
    'Conte sobre sua maior conquista profissional - por que ela foi significativa?',
    'Descreva uma vez que você propôs uma solução não-intuitiva para um problema',
    'Me fale sobre quando você teve que vender uma ideia ousada para liderança sênior',
    'Como você cria e comunica uma direção ousada que inspira resultados?',
    'Conte sobre quando você pensou grande mas teve que adaptar a escala - como você fez?',
    'Descreva uma vez que você identificou oportunidade de receita em operações de pagamento'
  ],
  'HAVE BACKBONE; DISAGREE AND COMMIT': [
    'Conte sobre uma situação onde você discordou do supervisor/manager, mas ainda assim se comprometeu com a decisão final (e com a entrega)',
    'Conte sobre uma vez que você discordou fortemente de uma decisão',
    'Me fale sobre quando você teve que se comprometer com algo que não concordava',
    'Como você lida com disagreements na equipe?',
    'Me dê um exemplo de quando você defendeu uma posição impopular',
    'Me dê um exemplo de quando você se comprometeu com uma decisão de grupo mesmo discordando',
    'Conte sobre quando você discordou de um colega/PM/gestor porque achava que estava errado para o cliente',
    'Descreva uma vez que você teve uma ideia que não foi aceita - como você reagiu?',
    'Me fale sobre um conflito que você resolveu - qual foi o processo?',
    'Como você desafia respeitosamente decisões mas depois se compromete totalmente?'
  ],
  'HIRE AND DEVELOP THE BEST': [
    'Como você abordou o desenvolvimento de um membro da equipe que estava com baixo desempenho?',
    'Me fale sobre como você desenvolve pessoas',
    'Conte sobre uma contratação excepcional que você fez',
    'Como você identifica talentos?',
    'Descreva uma situação onde você ajudou alguém a crescer',
    'Me dê um exemplo de quando você teve que dar feedback difícil',
    'Conte sobre quando você recebeu feedback negativo - como você respondeu?',
    'Descreva uma vez que você melhorou moral e produtividade da sua equipe',
    'Me fale sobre alguém que você mentorou - qual foi o impacto?',
    'Como você reconhece talento excepcional e os move pela organização?',
    'Conte sobre quando você teve que tomar uma decisão difícil sobre performance de alguém'
  ],
  'FRUGALITY': [
    'Conte sobre uma vez que você fez mais com menos',
    'Me fale sobre quando você otimizou custos',
    'Como você prioriza recursos limitados?',
    'Descreva uma situação onde você foi criativo com restrições',
    'Me dê um exemplo de quando você eliminou desperdícios',
    'Conte sobre uma ideia nova que você teve para economizar dinheiro da empresa',
    'Me fale sobre quando você entregou um projeto com orçamento ou recursos limitados',
    'Descreva uma situação onde você recusou mais recursos para completar um projeto - por quê?',
    'Como você gerenciaria projetos sem orçamento e sem recursos?',
    'Conte sobre quando você teve que gerenciar orçamento - como você extraiu mais valor com menos?',
    'Como você equilibra custo operacional com expansão de métodos de pagamento?'
  ],
  'STRIVE TO BE EARTH\'S BEST EMPLOYER': [
    'Conte sobre como você cria um ambiente de trabalho melhor',
    'Me fale sobre quando você priorizou o bem-estar da equipe',
    'Como você promove diversidade e inclusão?',
    'Descreva uma situação onde você defendeu sua equipe',
    'Me dê um exemplo de quando você investiu no crescimento de alguém',
    'Conte sobre uma vez que você fez seu ambiente de trabalho mais seguro, inclusivo ou divertido',
    'Me fale sobre quando você teve que equilibrar produtividade com bem-estar da equipe',
    'Descreva uma situação onde você criou oportunidade de crescimento para alguém',
    'Como você garante que diferentes perspectivas e backgrounds são valorizados?',
    'Conte sobre quando você teve que tomar uma decisão pensando no que é melhor para as pessoas, não só nos resultados'
  ],
  'SUCCESS AND SCALE BRING BROAD RESPONSIBILITY': [
    'Me fale sobre como você considera impacto mais amplo das suas decisões',
    'Conte sobre uma vez que você agiu pensando na comunidade',
    'Como você equilibra resultados com responsabilidade social?',
    'Descreva uma situação onde você tomou a decisão certa, não a fácil',
    'Me dê um exemplo de quando você considerou stakeholders além dos óbvios',
    'Conte sobre quando você deixou algo melhor do que encontrou',
    'Me fale sobre uma decisão moral ou ética que você enfrentou no trabalho - como lidou?',
    'Descreva uma vez que você considerou impactos de segunda ordem das suas ações',
    'Como você pensa sobre comunidades locais, planeta e futuras gerações nas suas decisões?',
    'Conte sobre quando você escolheu fazer o certo mesmo custando resultados de curto prazo'
  ]
};

console.log('🔍 ANÁLISE COMPLETA - MAPEAMENTO PERGUNTAS × CASES');
console.log('====================================================\n');

let totalQuestions = 0;
Object.values(allQuestions).forEach(questions => {
  totalQuestions += questions.length;
});

console.log(`📊 TOTAL DE PERGUNTAS A MAPEAR: ${totalQuestions}`);
console.log(`📁 TOTAL DE LPs: ${Object.keys(allQuestions).length}\n`);

console.log('✅ Script pronto para análise detalhada!');
console.log('   (Próximo passo: análise manual detalhada de cada pergunta)\n');
