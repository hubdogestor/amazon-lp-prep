const fs = require('fs');
const path = require('path');

// Mapeamento de perguntas (do CSV fornecido)
const questions = {
  'INVENT AND SIMPLIFY': [
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
  ]
  // Adicionar mais LPs conforme necessário
};

// Função para ler todos os cases de uma pasta LP
function readLPCases(lpFolder) {
  const lpPath = path.join('src/data', lpFolder);
  const cases = [];
  
  try {
    const files = fs.readdirSync(lpPath);
    files.forEach(file => {
      if (file.endsWith('.js') && !file.includes('index')) {
        const filePath = path.join(lpPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extrair informações do case
        const idMatch = content.match(/id:\s*["']([^"']+)["']/);
        const titleMatch = content.match(/title_pt:\s*["']([^"']+)["']/);
        const companyMatch = content.match(/company:\s*["']([^"']+)["']/);
        const periodMatch = content.match(/period:\s*["']([^"']+)["']/);
        
        // Extrair STAR(L) completo
        const ptMatch = content.match(/pt:\s*{([^}]+s:\s*`([^`]+)`[^}]+t:\s*`([^`]+)`[^}]+a:\s*`([^`]+)`[^}]+r:\s*`([^`]+)`[^}]+l:\s*`([^`]+)`)/s);
        
        if (idMatch && titleMatch) {
          cases.push({
            file: file,
            id: idMatch[1],
            title: titleMatch[1],
            company: companyMatch ? companyMatch[1] : 'N/A',
            period: periodMatch ? periodMatch[1] : 'N/A',
            situation: ptMatch ? ptMatch[2].substring(0, 200) : '',
            task: ptMatch ? ptMatch[3].substring(0, 200) : '',
            action: ptMatch ? ptMatch[4].substring(0, 300) : '',
            result: ptMatch ? ptMatch[5].substring(0, 200) : '',
            learning: ptMatch ? ptMatch[6].substring(0, 200) : ''
          });
        }
      }
    });
  } catch (err) {
    console.error(`Erro ao ler pasta ${lpFolder}:`, err.message);
  }
  
  return cases;
}

// Função para analisar match entre pergunta e case
function analyzeMatch(question, caseData) {
  const questionLower = question.toLowerCase();
  const fullText = `${caseData.title} ${caseData.situation} ${caseData.task} ${caseData.action} ${caseData.result} ${caseData.learning}`.toLowerCase();
  
  let score = 0;
  let reasons = [];
  
  // Keywords importantes por tipo de pergunta
  const keywords = {
    'inovação': ['inovação', 'invent', 'criou', 'criação', 'novo', 'nova'],
    'simplific': ['simplific', 'otimiz', 'automati', 'reduzi', 'eficiente'],
    'processo': ['processo', 'fluxo', 'workflow', 'procedimento'],
    'ownership': ['assumi', 'responsabilidade', 'owner', 'liderei'],
    'além': ['além', 'extra', 'adicional', 'mais'],
    'investigar': ['investigar', 'analis', 'causa raiz', 'profund', 'detalhe'],
    'dados': ['dados', 'métricas', 'números', 'análise'],
    'decisão': ['decisão', 'escolha', 'optei', 'decidi']
  };
  
  // Verificar presença de keywords
  Object.entries(keywords).forEach(([key, terms]) => {
    if (questionLower.includes(key)) {
      terms.forEach(term => {
        if (fullText.includes(term)) {
          score += 2;
          reasons.push(`Contém termo relacionado: ${term}`);
        }
      });
    }
  });
  
  return { score, reasons };
}

// Processar todas as LPs
const lpFolders = [
  'invent_and_simplify',
  'ownership', 
  'dive_deep',
  'deliver_results',
  'earn_trust',
  'customer_obsession',
  'learn_and_be_curious',
  'insist_on_highest_standards',
  'are_right_a_lot',
  'bias_for_action',
  'think_big',
  'disagree_and_commit',
  'hire_and_develop_the_best',
  'frugality',
  'best_employer',
  'broad_responsibility'
];

console.log('🔍 INICIANDO ANÁLISE PROFUNDA DE CASES...\n');

lpFolders.forEach(lpFolder => {
  console.log(`\n📁 Analisando: ${lpFolder}`);
  const cases = readLPCases(lpFolder);
  console.log(`   Encontrados ${cases.length} cases`);
  cases.forEach(c => {
    console.log(`   - ${c.id}: ${c.title.substring(0, 60)}...`);
  });
});

console.log('\n✅ Análise concluída!');
