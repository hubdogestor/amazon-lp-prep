// Script de teste para validar o CaseAnalyzer
import { CaseAnalyzer } from './src/lib/caseAnalyzer.js';
import fs from 'fs';

async function testAnalyzer() {
  console.log('🧪 Iniciando testes do Amazon Cases Analyzer...\n');
  
  const analyzer = new CaseAnalyzer();
  
  try {
    // Lê o arquivo de teste
    const fileContent = fs.readFileSync('./test_file.js', 'utf8');
    console.log('✅ Arquivo de teste carregado com sucesso');
    
    // Processa o arquivo
    console.log('🔄 Processando arquivo...');
    const result = await analyzer.processFile(fileContent);
    
    console.log('\n📊 Resultados da análise:');
    console.log(`- Princípio: ${result.principle.title}`);
    console.log(`- Cases analisados: ${result.processedCases.length}`);
    console.log(`- Score médio: ${result.summary.averageScore}/100`);
    console.log(`- Total de melhorias: ${result.summary.totalImprovements}`);
    
    // Testa geração do arquivo processado
    console.log('\n📝 Gerando arquivo processado...');
    const processedFile = analyzer.generateProcessedFile(result);
    
    // Salva o arquivo processado
    fs.writeFileSync('./test_output.js', processedFile);
    console.log('✅ Arquivo processado salvo como test_output.js');
    
    // Mostra detalhes de um case
    if (result.processedCases.length > 0) {
      const firstCase = result.processedCases[0];
      console.log('\n🔍 Detalhes do primeiro case:');
      console.log(`- ID: ${firstCase.id}`);
      console.log(`- Título: ${firstCase.title}`);
      console.log(`- Empresa: ${firstCase.company}`);
      console.log(`- Período: ${firstCase.period}`);
      console.log(`- Melhorias aplicadas: ${firstCase.improvements.length}`);
      console.log(`- FUPs atualizadas: ${firstCase.updatedFUPs.length}`);
      
      // Mostra scores STAR
      console.log('\n📈 Scores STAR(L):');
      Object.entries(firstCase.scores.star).forEach(([section, data]) => {
        console.log(`  ${section.toUpperCase()}: ${data.score}/100`);
      });
    }
    
    console.log('\n🎉 Todos os testes passaram com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro durante os testes:', error.message);
    console.error(error.stack);
  }
}

testAnalyzer();
