export function analyzeHeuristics(c) {
  const txt = [c.pt?.s,c.pt?.t,c.pt?.a,c.pt?.r,c.pt?.l,
               c.en?.s,c.en?.t,c.en?.a,c.en?.r,c.en?.l]
               .filter(Boolean).join("\n").toLowerCase();

  const hasHook = /hook[:\-]|abr[ei] com|cold open|quebra-gelo/.test(txt);
  const hasTransitions = /transi[cç]ão|s\s*→\s*t|t\s*→\s*a|a\s*→\s*r|r\s*→\s*l/.test(txt);
  const hasMicDrop = /mic\-?drop|insight final|li[cç][aã]o chave/.test(txt);
  const metricsCount = (txt.match(/%|\b\d+\s?(dias|semanas|meses|kpis?|nps|sla|csat|defect|throughput|cycle time)/g) || []).length;

  const eu = (txt.match(/\b(eu|i)\b/g) || []).length;
  const nos = (txt.match(/\b(n[óo]s|we)\b/g) || []).length;
  const ratio = eu + nos > 0 ? eu / (eu + nos) : 0.8;

  const score = (
    (hasHook ? 0.2 : 0) +
    (hasTransitions ? 0.2 : 0) +
    (hasMicDrop ? 0.2 : 0) +
    Math.min(metricsCount/8, 0.2) +
    (ratio >= 0.6 && ratio <= 0.9 ? 0.2 : 0)
  );

  return { hasHook, hasTransitions, hasMicDrop, metricsCount, eu_nos_ratio: ratio, score };
}