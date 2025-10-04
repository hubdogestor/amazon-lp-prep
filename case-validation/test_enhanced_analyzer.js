// Teste do analisador aprimorado com base de conhecimento completa
import SimpleCaseAnalyzer from './src/lib/simpleCaseAnalyzer.js';

// Case de exemplo para testar timing e análise aprimorada
const testCase = {
  id: "test-timing",
  title: "Otimização de Sistema de Recomendação",
  company: "TechCorp", 
  period: "2023-2024",
  pt: {
    s: "Em 2023, nossa plataforma de e-commerce enfrentava baixa conversão devido ao sistema de recomendação ineficiente que resultava em experiência ruim para 2 milhões de usuários.",
    t: "Fui responsável por redesenhar completamente o algoritmo de recomendação com foco na experiência do cliente.",
    a: "Implementei análise de dados comportamentais, criei novo modelo de ML, e coordenei implementação com 3 equipes diferentes ao longo de 4 meses.",
    r: "Aumentamos conversão em 35%, satisfação do cliente de 6.2 para 8.7, e receita em $2.3M anuais.",
    l: "Aprendi que foco obsessivo no cliente e dados são fundamentais para decisões de produto eficazes."
  }
};

async function testEnhancedAnalyzer() {
  const analyzer = new SimpleCaseAnalyzer();
  
  console.log('🧪 Testando Analisador Aprimorado\n');
  
  // 1. Teste de otimização de timing
  console.log('⏰ TESTE 1: Otimização de Timing');
  const timingOptimized = analyzer.optimizePresentationTiming(testCase);
  console.log('Tempo estimado original:', timingOptimized.timingGuide.currentEstimate, 'minutos');
  console.log('Tempo estimado otimizado:', timingOptimized.timingGuide.optimizedEstimate, 'minutos');
  
  // 2. Teste de análise com base de conhecimento completa
  console.log('\n🧠 TESTE 2: Análise com Base de Conhecimento');
  const fullAnalysis = analyzer.analyzeWithFullKnowledgeBase(testCase, 'Customer Obsession');
  console.log('Customer Obsession Score:', fullAnalysis.bestPractices.customerObsessionCheck.score);
  console.log('Individual Contribution:', fullAnalysis.bestPractices.individualContributionRatio.currentRatio);
  console.log('Question Bucket:', fullAnalysis.questionBucket);
  
  // 3. Teste de contagem de palavras
  console.log('\n📊 TESTE 3: Análise Detalhada de Timing');
  const wordCounts = analyzer.calculateWordCounts(testCase);
  console.log('Contagem de palavras por seção:');
  Object.entries(wordCounts).forEach(([section, count]) => {
    console.log(`  ${section.toUpperCase()}: ${count} palavras`);
  });
  
  // 4. Dicas específicas da Amazon
  console.log('\n💡 TESTE 4: Dicas Amazon-Específicas');
  const amazonTips = analyzer.getAmazonSpecificTips('Customer Obsession');
  amazonTips.slice(0, 3).forEach(tip => console.log(`  ${tip}`));
  
  console.log('\n✅ Todos os testes executados com sucesso!');
  console.log('\n🎯 O analisador agora inclui:');
  console.log('  • Otimização automática para apresentações de 7-10 minutos');
  console.log('  • Base de conhecimento completa da Amazon (16 LPs + best practices)');
  console.log('  • Análise comportamental específica para Amazon interviews');
  console.log('  • Estratégias por bucket de perguntas (Technical, Conflict, etc.)');
  console.log('  • Timing preciso por seção STAR(L)');
  console.log('  • Análise Customer Obsession e Individual Contribution');
}

// Executa o teste
testEnhancedAnalyzer().catch(console.error);