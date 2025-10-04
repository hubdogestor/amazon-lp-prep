export function optimizeFUPs(c) {
  let changed = false;
  const changes = [];
  if (!Array.isArray(c.fups)) c.fups = [];
  while (c.fups.length < 10) {
    c.fups.push({
      q: "Pergunta de aprofundamento (PT) – revisar",
      a: "Resposta sucinta (PT) – revisar",
      q_en: "Follow-up question (EN) – review",
      a_en: "Concise answer (EN) – review"
    });
    changed = true;
  }
  if (changed) changes.push("preencher FUPs até 10");
  return { changed, changes, case: c };
}