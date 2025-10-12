import typicalQuestions from "../src/data/typicalQuestions.js";
import consolidatedPrinciples from "../src/data/consolidatedPrinciples.js";
import { questionsToCasesMapping } from "../src/data/questionsToCasesMapping.js";

const principleIndex = new Map(consolidatedPrinciples.map((principle) => [principle.id, principle]));

const errors = [];
const warnings = [];

for (const [principleId, mapping] of Object.entries(questionsToCasesMapping)) {
  const principleData = principleIndex.get(principleId);
  if (!principleData) {
    errors.push({ type: "missing_principle", principleId });
    continue;
  }

  const questionSet = typicalQuestions[principleId];
  if (!questionSet) {
    errors.push({ type: "missing_typical_questions", principleId });
    continue;
  }

  const localizedQuestions = Array.isArray(questionSet.pt)
    ? questionSet.pt
    : Array.isArray(questionSet.en)
    ? questionSet.en
    : [];

  const maxIndex = localizedQuestions.length - 1;
  const observedQuestions = new Set();

  for (const [questionKey, entry] of Object.entries(mapping)) {
    const index = Number.parseInt(questionKey, 10);
    if (Number.isNaN(index)) {
      errors.push({ type: "invalid_question_index", principleId, questionKey });
      continue;
    }

    observedQuestions.add(index);

    if (index < 0 || index > maxIndex) {
      errors.push({
        type: "question_out_of_range",
        principleId,
        questionKey,
        index,
        maxIndex,
      });
    }

    if (!entry || !Array.isArray(entry.options) || entry.options.length === 0) {
      errors.push({
        type: "empty_options",
        principleId,
        questionKey,
      });
      continue;
    }

    const seenCaseIds = new Set();

    for (const option of entry.options) {
      if (!option || !option.caseId) {
        errors.push({
          type: "missing_case_id",
          principleId,
          questionKey,
        });
        continue;
      }

      if (seenCaseIds.has(option.caseId)) {
        warnings.push({
          type: "duplicate_case_option",
          principleId,
          questionKey,
          caseId: option.caseId,
        });
      }
      seenCaseIds.add(option.caseId);

      const caseExists = (principleData.cases || []).some((caseItem) => caseItem.id === option.caseId);
      if (!caseExists) {
        errors.push({
          type: "case_not_found",
          principleId,
          questionKey,
          caseId: option.caseId,
        });
      }
    }
  }

  for (let idx = 0; idx <= maxIndex; idx += 1) {
    if (!observedQuestions.has(idx)) {
      warnings.push({
        type: "question_without_mapping",
        principleId,
        questionIndex: idx,
      });
    }
  }
}

if (errors.length > 0) {
  console.error("Mapping validation errors:");
  for (const error of errors) {
    console.error(JSON.stringify(error));
  }
}

if (warnings.length > 0) {
  console.warn("Mapping validation warnings:");
  for (const warning of warnings) {
    console.warn(JSON.stringify(warning));
  }
}

if (errors.length > 0) {
  process.exitCode = 1;
}