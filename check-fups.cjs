// Script para verificar FUPs de todos os cases
const fs = require('fs');
const path = require('path');

async function checkCaseFUPs(casePath) {
  try {
    const caseData = await import('./' + casePath.replace(/\\/g, '/'));
    const fupCount = caseData.default.fups ? caseData.default.fups.length : 0;
    const hasRequiredFUPs = caseData.default.fups && caseData.default.fups.length >= 6;

    // Check if first 6 FUPs follow the required pattern
    let followsPattern = false;
    if (caseData.default.fups && caseData.default.fups.length >= 6) {
      const firstFUP = caseData.default.fups[0].q.toLowerCase();
      const secondFUP = caseData.default.fups[1].q.toLowerCase();
      const thirdFUP = caseData.default.fups[2].q.toLowerCase();

      followsPattern = (firstFUP.includes('erro') || firstFUP.includes('falha')) &&
                      (secondFUP.includes('faria diferente') || secondFUP.includes('faria diferentemente')) &&
                      (thirdFUP.includes('obstáculo') || thirdFUP.includes('obstaculo') || thirdFUP.includes('dificuldade'));
    }

    return {
      id: caseData.default.id,
      fupCount,
      hasRequiredFUPs,
      followsPattern,
      path: casePath
    };
  } catch (e) {
    return { id: 'ERROR', fupCount: 0, hasRequiredFUPs: false, followsPattern: false, path: casePath, error: e.message };
  }
}

async function main() {
  const results = [];
  const dirs = fs.readdirSync('src/data').filter(d => {
    const fullPath = path.join('src/data', d);
    return fs.statSync(fullPath).isDirectory() && !d.includes('.');
  });

  for (const dir of dirs) {
    const caseFiles = fs.readdirSync(path.join('src/data', dir)).filter(f => f.includes('case') && f.endsWith('.js'));
    for (const file of caseFiles) {
      const casePath = path.join('src/data', dir, file);
      const result = await checkCaseFUPs(casePath);
      results.push(result);
    }
  }

  console.log('=== VERIFICAÇÃO DE FUPs DOS CASES ===');
  console.log('Total de cases encontrados:', results.length);
  console.log('');

  results.forEach(r => {
    const status = r.hasRequiredFUPs ? (r.followsPattern ? '✅ OK' : '⚠️  REVISAR ORDEM') : '❌ FALTA FUPs';
    console.log(`${r.id}: ${r.fupCount} FUPs - ${status}`);
    if (r.error) console.log(`  Erro: ${r.error}`);
  });
  console.log('');
  console.log('Cases que precisam de revisão:');
  const needsReview = results.filter(r => !r.hasRequiredFUPs || !r.followsPattern);
  const insufficientFUPs = needsReview.filter(r => !r.hasRequiredFUPs);
  const wrongOrder = needsReview.filter(r => r.hasRequiredFUPs && !r.followsPattern);

  console.log(`\n📉 CASES COM MENOS DE 6 FUPS (${insufficientFUPs.length}):`);
  insufficientFUPs.forEach(r => {
    console.log(`- ${r.id}: ${r.fupCount} FUPs (${r.path})`);
  });

  console.log(`\n🔄 CASES COM ORDEM INCORRETA (${wrongOrder.length}):`);
  wrongOrder.forEach(r => {
    console.log(`- ${r.id}: ${r.fupCount} FUPs (${r.path})`);
  });

  console.log('');
  console.log('Resumo:');
  console.log(`- Total: ${results.length}`);
  console.log(`- OK: ${results.filter(r => r.hasRequiredFUPs && r.followsPattern).length}`);
  console.log(`- Precisam revisão: ${needsReview.length}`);
}

main().catch(console.error);