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

  /**
   * Calculate tiebreaker score for cases with same score.
   * Priority order (highest weight first):
   * 1. isTopCase flag (1,000,000 points)
   * 2. isGoodCase flag (100,000 points)
   * 3. Number of questions answered in LP (1,000 points each)
   * 4. Average score across all LP questions (10 points per point)
   * 5. Number of follow-ups (1 point each)
   * 6. Alphabetical order (used in final sort, not scored)
   */
  const getTiebreakScore = useCallback((caseData, principleId) => {
    // 1. Flag isTopCase (peso 1000000)
    const topCaseScore = caseData.isTopCase ? 1000000 : 0;

    // 2. Flag isGoodCase (peso 100000)
    const goodCaseScore = caseData.isGoodCase ? 100000 : 0;

    // 3. Quantidade de perguntas que responde no LP (peso 1000)
    const principleMapping = questionsToCasesMapping[principleId];
    const questionsAnswered = Object.values(principleMapping || {}).filter(
      entry => entry.options?.some(opt => opt.caseId === caseData.id)
    ).length;
    const versatilityScore = questionsAnswered * 1000;

    // 4. Score médio no LP (peso 10)
    const scores = Object.values(principleMapping || {})
      .flatMap(entry => entry.options?.filter(opt => opt.caseId === caseData.id) || [])
      .map(opt => opt.score || 0);
    const avgScore = scores.length > 0
      ? (scores.reduce((a, b) => a + b, 0) / scores.length) * 10
      : 0;

    // 5. Completude (número de FUPs, peso 1)
    const completenessScore = (caseData.fups?.length || 0);

    return topCaseScore + goodCaseScore + versatilityScore + avgScore + completenessScore;
  }, []);

  const getBestCaseOption = useCallback((principleId, questionIndex) => {
    const principleMapping = questionsToCasesMapping[principleId];
    if (!principleMapping) return null;

    const entry = principleMapping[String(questionIndex)];
    if (!entry || !Array.isArray(entry.options) || entry.options.length === 0) {
      return null;
    }

    const principleCases = casesByPrinciple.get(principleId);
    if (!principleCases) return null;

    // Enriquecer options com caseData
    const enrichedOptions = entry.options
      .map(option => ({
        ...option,
        caseData: principleCases.index.get(option.caseId)
      }))
      .filter(option => option.caseData); // Apenas cases válidos

    if (enrichedOptions.length === 0) return null;

    // Ordenar por: 1) Score (desc), 2) Tiebreak score (desc), 3) Alfabético
    const sortedOptions = enrichedOptions.sort((a, b) => {
      // 1º: Score da pergunta
      const scoreDiff = (b.score ?? 0) - (a.score ?? 0);
      if (scoreDiff !== 0) return scoreDiff;

      // 2º: Tiebreak score
      const tiebreakDiff = getTiebreakScore(b.caseData, principleId)
                         - getTiebreakScore(a.caseData, principleId);
      if (tiebreakDiff !== 0) return tiebreakDiff;

      // 3º: Alfabético (fallback)
      return a.caseId.localeCompare(b.caseId);
    });

    return sortedOptions[0];
  }, [casesByPrinciple, getTiebreakScore]);

  const getCaseQuestions = useCallback((caseId, principleId) => {
    const principleMapping = questionsToCasesMapping[principleId];
    if (!principleMapping) return [];

    const questions = typicalQuestions[principleId];
    if (!questions) return [];

    const entry = Object.entries(principleMapping)
      .map(([questionIndex, data]) => ({ questionIndex: Number(questionIndex), data }))
      .filter(({ data }) =>
        Array.isArray(data.options) &&
        data.options.length > 0 &&
        data.options[0].caseId === caseId
      );

    return entry.map(({ questionIndex, data }) => ({
      number: questionIndex,
      text: language === "en" ? questions.en?.[questionIndex - 1] : questions.pt?.[questionIndex - 1],
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