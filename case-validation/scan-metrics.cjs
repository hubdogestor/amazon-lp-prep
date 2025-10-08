// Script para identificar métricas genéricas que precisam de enhancement
const fs = require('fs');
const path = require('path');

// Padrões de métricas genéricas (SEM baseline/delta/time estruturado)
const genericPatterns = [
  /melhorou significativamente/i,
  /aumentou consideravelmente/i,
  /reduziu drasticamente/i,
  /cresceu exponencialmente/i,
  /caiu muito/i,
  /subiu bastante/i,
  /elevou expressivamente/i,
  /otimizou/i,
  /aperfeiçoou/i,
  /evoluiu/i,
  /transformou/i,
  // Métricas sem baseline explícito
  /alcançou \d+%/i,
  /atingiu \d+/i,
  /obteve \d+/i,
  /chegou a \d+/i,
];

// Padrões de métricas operacionais FORTES (COM baseline → resultado → delta → time)
const strongPatterns = [
  /(\d+%?)\s*→\s*(\d+%?)\s*\([^\)]+\)\s*em\s+\d+/i, // "30% → 72% (+42pp) em 12 meses"
  /de\s+(\d+%?)\s+para\s+(\d+%?)\s+\([^\)]+\)/i,    // "de 6 para 2.8 semanas (-53%)"
  /caiu de\s+(\d+%?)\s+para\s+(\d+%?)\s+\([^\)]+\)/i,
  /subiu de\s+(\d+%?)\s+para\s+(\d+%?)\s+\([^\)]+\)/i,
];

function analyzeMetrics(text) {
  const genericCount = genericPatterns.reduce((count, pattern) => {
    const matches = text.match(new RegExp(pattern, 'gi'));
    return count + (matches ? matches.length : 0);
  }, 0);

  const strongCount = strongPatterns.reduce((count, pattern) => {
    const matches = text.match(new RegExp(pattern, 'gi'));
    return count + (matches ? matches.length : 0);
  }, 0);

  return { genericCount, strongCount };
}

function scanCase(caseFile) {
  try {
    const content = fs.readFileSync(caseFile, 'utf-8');
    
    // Extract case object
    const caseMatch = content.match(/const\s+\w+\s*=\s*\{[\s\S]*?\};/);
    if (!caseMatch) return null;

    const caseObj = eval('(' + caseMatch[0].replace(/^const\s+\w+\s*=\s*/, '') + ')');
    
    // Analyze PT sections (S, T, A, R, L)
    const sections = ['s', 't', 'a', 'r', 'l'];
    let totalGeneric = 0;
    let totalStrong = 0;
    const sectionMetrics = {};

    sections.forEach(sec => {
      if (caseObj.pt && caseObj.pt[sec]) {
        const { genericCount, strongCount } = analyzeMetrics(caseObj.pt[sec]);
        totalGeneric += genericCount;
        totalStrong += strongCount;
        if (genericCount > 0 || strongCount > 0) {
          sectionMetrics[sec] = { generic: genericCount, strong: strongCount };
        }
      }
    });

    return {
      id: caseObj.id,
      title: caseObj.title_pt || caseObj.title,
      lp: path.basename(path.dirname(caseFile)),
      totalGeneric,
      totalStrong,
      ratio: totalGeneric > 0 ? (totalStrong / totalGeneric).toFixed(2) : 'N/A',
      sectionMetrics,
      file: caseFile
    };
  } catch (err) {
    console.error(`Error processing ${caseFile}:`, err.message);
    return null;
  }
}

// Scan all case files
const dataDir = path.join(__dirname, '..', 'src', 'data');
const results = [];

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.js') && entry.name.includes('case')) {
      const analysis = scanCase(fullPath);
      if (analysis) {
        results.push(analysis);
      }
    }
  });
}

console.log('=== SCANNING PORTFOLIO FOR GENERIC METRICS ===\n');
scanDirectory(dataDir);

// Sort by priority: high generic count + low strong count
results.sort((a, b) => {
  const priorityA = a.totalGeneric - a.totalStrong;
  const priorityB = b.totalGeneric - b.totalStrong;
  return priorityB - priorityA;
});

console.log(`Total cases analyzed: ${results.length}\n`);

// PRIORITY 1: Cases with generic > strong (need enhancement)
const needEnhancement = results.filter(r => r.totalGeneric > r.totalStrong);
console.log(`=== PRIORITY 1: Cases needing metric enhancement ===`);
console.log(`Total: ${needEnhancement.length} cases\n`);

console.log('Top 20 cases by priority (generic > strong):\n');
needEnhancement.slice(0, 20).forEach((r, i) => {
  console.log(`${i + 1}. ${r.id}`);
  console.log(`   LP: ${r.lp}`);
  console.log(`   Generic: ${r.totalGeneric}, Strong: ${r.totalStrong}, Ratio: ${r.ratio}`);
  console.log(`   Sections: ${JSON.stringify(r.sectionMetrics)}`);
  console.log('');
});

// PRIORITY 2: Cases with strong metrics (already good)
const alreadyStrong = results.filter(r => r.totalStrong >= r.totalGeneric && r.totalStrong > 0);
console.log(`\n=== PRIORITY 2: Cases with strong metrics (already good) ===`);
console.log(`Total: ${alreadyStrong.length} cases\n`);

// Summary stats
console.log('\n=== SUMMARY STATISTICS ===');
console.log(`Total cases: ${results.length}`);
console.log(`Need enhancement: ${needEnhancement.length} (${(needEnhancement.length / results.length * 100).toFixed(1)}%)`);
console.log(`Already strong: ${alreadyStrong.length} (${(alreadyStrong.length / results.length * 100).toFixed(1)}%)`);
