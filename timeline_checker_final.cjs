const fs = require('fs');
const path = require('path');

// Histórico profissional correto
const timeline = {
  'Huawei': ['2009-10', '2015-04'],
  'HSBC': ['2015-05', '2016-06'], 
  'Bradesco': ['2016-07', '2018-05'],
  'Sicredi': ['2018-06', '2021-05'],
  'Unimed': ['2021-06', '2024-02'],
  'SEFAZ': ['2024-07', '2025-11'],
  'OLÍBANO': ['2024-01', '2024-12'],
  'HUB DO GESTOR': ['2025-01', '2025-12']
};

function parseYearMonth(dateStr) {
  if (!dateStr) return null;
  // Handle formats like "01/2023", "2023", "01-2023"  
  const cleaned = dateStr.replace(/--/g, '-').trim();
  const parts = cleaned.split(/[\/\-]/);
  
  if (parts.length >= 2) {
    return `${parts[1]}-${parts[0].padStart(2, '0')}`;
  } else if (parts.length === 1) {
    return `${parts[0]}-01`;
  }
  return null;
}

function isValidPeriod(company, periodStart, periodEnd) {
  const companyKey = Object.keys(timeline).find(key => 
    company.toLowerCase().includes(key.toLowerCase()) || 
    key.toLowerCase().includes(company.toLowerCase())
  );
  
  if (!companyKey) return 'UNKNOWN_COMPANY';
  
  const [validStart, validEnd] = timeline[companyKey];
  const caseStart = parseYearMonth(periodStart);
  const caseEnd = parseYearMonth(periodEnd);
  
  if (!caseStart || !caseEnd) return 'PARSE_ERROR';
  
  if (caseStart < validStart || caseEnd > validEnd) {
    return `TIMELINE_ERROR: Valid period for ${companyKey} is ${validStart} to ${validEnd}, but case shows ${caseStart} to ${caseEnd}`;
  }
  
  return 'OK';
}

function scanFiles() {
  const results = [];
  
  function scanDir(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory() && !file.name.includes('node_modules')) {
        scanDir(fullPath);
      } else if (file.name.endsWith('.js') && !file.name.includes('template')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const companyMatch = content.match(/company:\s*["']([^"']+)["']/);
          const periodMatch = content.match(/period:\s*["']([^"']+)["']/);
          
          if (companyMatch && periodMatch) {
            const company = companyMatch[1];
            const period = periodMatch[1];
            
            // Parse period range
            const periodParts = period.split(/[\-\–]/);
            const periodStart = periodParts[0]?.trim();
            const periodEnd = periodParts[1]?.trim() || periodParts[0]?.trim();
            
            const status = isValidPeriod(company, periodStart, periodEnd);
            
            if (status !== 'OK') {
              results.push({
                file: fullPath.replace(process.cwd() + '\\', ''),
                company,
                period,
                status
              });
            }
          }
        } catch (err) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDir('src/data');
  return results;
}

const issues = scanFiles();
console.log('🚨 TIMELINE INCONSISTENCIES FOUND:');
console.log('=====================================');
issues.forEach(issue => {
  console.log(`❌ ${issue.file}`);
  console.log(`   Company: ${issue.company}`);
  console.log(`   Period: ${issue.period}`);  
  console.log(`   Issue: ${issue.status}`);
  console.log('');
});
console.log(`TOTAL ISSUES: ${issues.length}`);