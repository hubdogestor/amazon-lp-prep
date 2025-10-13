import { useCallback, useMemo } from "react";
import typicalQuestions from "../data/typicalQuestions.js";
import { questionsToCasesMapping } from "../data/questionsToCasesMapping.js";
import {
  getCaseBaseTitle as getCaseBaseTitleUtil,
  getDisplayCaseTitle as getDisplayCaseTitleUtil,
} from "../utils/caseUtils.js";

export function useCaseHelpers(principlesData, language) {
  const getCaseBaseTitle = useCallback((caseData, lang) => getCaseBaseTitleUtil(caseData, lang), []);

  const getDisplayCaseTitle = useCallback((caseData, lang) => getDisplayCaseTitleUtil(caseData, lang), []);

  const casesByPrinciple = useMemo(() => {
    const map = new Map();
    (principlesData || []).forEach((principle) => {
      const list = Array.isArray(principle.cases) ? principle.cases : [];
      const index = new Map(list.map((item) => [item.id, item]));
      map.set(principle.id, { list, index });
    });
    return map;
  }, [principlesData]);

  const getBestCaseOption = useCallback((principleId, questionIndex) => {
    const principleMapping = questionsToCasesMapping[principleId];
    if (!principleMapping) return null;

    const entry = principleMapping[String(questionIndex)];
    if (!entry || !Array.isArray(entry.options) || entry.options.length === 0) {
      return null;
    }

    const principleCases = casesByPrinciple.get(principleId);
    if (!principleCases) return null;

    const sortedOptions = [...entry.options].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

    for (const option of sortedOptions) {
      const caseData = principleCases.index.get(option.caseId);
      if (caseData) {
        return { ...option, caseData };
      }
    }

    return null;
  }, [casesByPrinciple]);

  const getCaseQuestions = useCallback((caseId, principleId) => {
    const principleMapping = questionsToCasesMapping[principleId];
    if (!principleMapping) return [];

    const questions = typicalQuestions[principleId];
    if (!questions) return [];

    const entry = Object.entries(principleMapping)
      .map(([questionIndex, data]) => ({ questionIndex: Number(questionIndex), data }))
      .filter(({ data }) => Array.isArray(data.options) && data.options.some((option) => option.caseId === caseId));

    return entry.map(({ questionIndex, data }) => ({
      number: questionIndex + 1,
      text: language === "en" ? questions.en?.[questionIndex] : questions.pt?.[questionIndex],
      score:
        (data.options.find((option) => option.caseId === caseId) || {}).score ??
        data.options[0]?.score ??
        null,
    }));
  }, [language]);

  return {
    getCaseBaseTitle,
    getDisplayCaseTitle,
    getBestCaseOption,
    getCaseQuestions,
    casesByPrinciple,
  };
}