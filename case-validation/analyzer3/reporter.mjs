import fs from 'node:fs/promises';
import path from 'node:path';

export async function writeReports(report, outDir) {
  await fs.mkdir(outDir, { recursive: true });
  const jsonPath = path.join(outDir, 'review-status.json');
  const csvPath = path.join(outDir, 'review-status.csv');
  const summaryPath = path.join(outDir, 'scan_summary.md');

  await fs.writeFile(jsonPath, JSON.stringify(report, null, 2), 'utf8');
  await fs.writeFile(csvPath, buildCsv(report), 'utf8');
  await fs.writeFile(summaryPath, buildSummary(report), 'utf8');
}

export async function writePreviewChanges(original, mutated) {
  const outBase = 'case-validation/analyzer3/preview';
  await fs.mkdir(outBase, { recursive: true });
  const safeId = String(mutated.id || 'case').replace(/[^a-z0-9_\-]/gi, '_');
  const fp = path.join(outBase, `${safeId}.preview.json`);
  await fs.writeFile(fp, JSON.stringify({ original, mutated }, null, 2), 'utf8');
}

function buildCsv(report) {
  const header = [
    'lp_id',
    'case_id',
    'title_pt',
    'title_en',
    'status',
    'score',
    'dealbreakers',
    'warnings',
    'positives',
    'lint_issues',
    'lint_warnings',
    'metrics_count',
    'eu_nos_ratio',
    'recency_months',
    'bias_signals'
  ];


  const lines = [header.join(',')];

  for (const result of report.results) {
    lines.push([
      escapeCsv(result.lp_id),
      escapeCsv(result.case_id),
      escapeCsv(result.title_pt || ''),
      escapeCsv(result.title_en || ''),
      escapeCsv(result.status || ''),
      result.heur?.score ?? '',
      escapeCsv((result.heur?.dealbreakers || []).join('|')), 
      escapeCsv((result.heur?.warnings || []).join('|')),
      escapeCsv((result.heur?.positives || []).join('|')),
      escapeCsv((result.lint?.issues || []).join('|')),
      escapeCsv((result.lint?.warnings || []).join('|')),
      result.heur?.metricsCount ?? '',
      result.heur?.ratio ? formatRatio(result.heur.ratio.counts.eu, result.heur.ratio.counts.nos) : '',
      result.heur?.recency?.monthsAgo ?? '',
      result.heur?.biasSignals ?? ''
    ].join(','));
  }

  return lines.join('\n');
}

function escapeCsv(value) {
  if (value === null || value === undefined) return '';
  const stringValue = String(value).replace(/"/g, '""');
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue}"`;
  }
  return stringValue;
}

function formatRatio(eu, nos) {
  if (nos === 0) return `${eu}:0`;
  return `${eu}:${nos}`;
}

function buildSummary(report) {
  const totals = report.results.length;
  const ready = report.results.filter(r => r.status === 'Ready').length;
  const needsPolish = report.results.filter(r => r.status === 'Needs-Polish').length;
  const rewrite = report.results.filter(r => r.status === 'Needs-Rewrite').length;
  const ko = report.results.filter(r => r.status === 'KO').length;

  const avgScore = average(report.results.map(r => r.heur?.score).filter(isNumber));
  const avgMetrics = average(report.results.map(r => r.heur?.metricsCount).filter(isNumber));
  const avgRatio = average(report.results.map(r => r.heur?.ratio?.ratio).filter(isNumber));
  const avgBiasSignals = average(report.results.map(r => r.heur?.biasSignals).filter(isNumber));

  const totalDealbreakers = report.results.reduce((acc, r) => acc + (r.heur?.dealbreakers?.length || 0), 0);
  const totalWarnings = report.results.reduce((acc, r) => acc + (r.heur?.warnings?.length || 0), 0);

  return `# scan_summary.md
Gerado em: ${report.run_at}

- Casos avaliados: ${totals}
- Ready: ${ready} | Needs-Polish: ${needsPolish} | Needs-Rewrite: ${rewrite} | KO: ${ko} | Lint blockers: ${report.results.filter(r => r.status === 'Lint-Blocker').length}
- Score mÃ©dio: ${isNumber(avgScore) ? avgScore.toFixed(1) : 'N/D'}
- MÃ©tricas por case (mÃ©dia): ${isNumber(avgMetrics) ? avgMetrics.toFixed(1) : 'N/D'}
- Ratio EU:NÃ“S mÃ©dio: ${isNumber(avgRatio) ? avgRatio.toFixed(2) : 'N/D'}
- Bias signals (media): ${isNumber(avgBiasSignals) ? avgBiasSignals.toFixed(1) : 'N/D'}
- Dealbreakers totais: ${totalDealbreakers}
- Warnings totais: ${totalWarnings}
`; 
}

function average(values) {
  if (!values.length) return null;
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
}

function isNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}



