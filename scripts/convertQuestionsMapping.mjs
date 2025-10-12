import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { questionsToCasesMapping as legacyMapping } from "../src/data/questionsToCasesMapping.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function buildNewStructure() {
  const result = {};

  for (const [principleId, mapping] of Object.entries(legacyMapping)) {
    const byQuestion = {};

    for (const [rawKey, value] of Object.entries(mapping)) {
      if (!value || !value.case_id) continue;

      const [baseKey] = rawKey.split("_alt");

      if (!byQuestion[baseKey]) {
        byQuestion[baseKey] = [];
      }

      byQuestion[baseKey].push({
        caseId: value.case_id,
        score: typeof value.score === "number" ? value.score : null,
      });
    }

    const normalized = {};

    for (const [baseKey, options] of Object.entries(byQuestion)) {
      options.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
      normalized[baseKey] = {
        options,
      };
    }

    result[principleId] = normalized;
  }

  return result;
}

const newMapping = buildNewStructure();

const header = `// src/data/questionsToCasesMapping.js\n// Converted to new options-based structure via scripts/convertQuestionsMapping.mjs\n// Generation timestamp: ${new Date().toISOString()}\n\nexport const questionsToCasesMapping = ${JSON.stringify(newMapping, null, 2)};\n\nexport default questionsToCasesMapping;\n`;

const targetPath = path.resolve(__dirname, "../src/data/questionsToCasesMapping.js");
writeFileSync(targetPath, header, "utf8");

console.log("questionsToCasesMapping.js rewritten using new options-based structure.");