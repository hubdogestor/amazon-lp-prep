import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce.js";
import { norm } from "../utils/textUtils.js";
import { getCaseFups } from "../utils/caseUtils.js";
import typicalQuestions from "../data/typicalQuestions.js";
import { getPrinciplesForLooping } from "../config/loopingGroups.js";
import { DEBOUNCE_SEARCH_DELAY } from "../constants.js";

export function useSearch(principlesData, language, selectedLooping) {
  const [searchTerm, setSearchTerm] = useState("");
  const [questionSearch, setQuestionSearch] = useState("");
  const [typicalQuestionSearch, setTypicalQuestionSearch] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_SEARCH_DELAY);
  const debouncedQuestionSearch = useDebounce(questionSearch, DEBOUNCE_SEARCH_DELAY);
  const debouncedTypicalQuestionSearch = useDebounce(
    typicalQuestionSearch,
    DEBOUNCE_SEARCH_DELAY
  );

  const fupSearchResults = useMemo(() => {
    if (!debouncedQuestionSearch) return [];

    // Split search into multiple words
    const searchWords = debouncedQuestionSearch.trim().split(/\s+/).filter(w => w.length > 0);
    const searchWordsNorm = searchWords.map(w => norm(w));

    return (principlesData || [])
      .flatMap((p) =>
        (p.cases || []).flatMap((c) => {
          const fups = getCaseFups(c);
          return fups
            .map((f, originalIdx) => ({ p, c, f, originalIdx }))
            .filter(({ f }) => {
              const qTxt = language === "en" ? (f.q_en || f.q || "") : (f.q || "");
              const qTxtNorm = norm(qTxt);
              // Check if ALL words are present
              return searchWordsNorm.every(word => qTxtNorm.includes(word));
            });
        })
      );
  }, [principlesData, debouncedQuestionSearch, language]);

  // Typical question search results - memoized with looping filter
  const typicalQuestionSearchResults = useMemo(() => {
    if (!debouncedTypicalQuestionSearch) return [];

    // Split search into multiple words
    const searchWords = debouncedTypicalQuestionSearch.trim().split(/\s+/).filter(w => w.length > 0);
    const searchWordsNorm = searchWords.map(w => norm(w));

    // Get principles to filter by looping group if selected
    const loopingPrinciples = selectedLooping ? getPrinciplesForLooping(selectedLooping) : null;

    return (principlesData || [])
      .filter((p) => {
        // If a looping is selected, only include principles from that looping
        if (loopingPrinciples) {
          return loopingPrinciples.includes(p.id);
        }
        return true;
      })
      .flatMap((p) => {
        const questions = typicalQuestions[p.id];
        if (!questions) return [];

        const questionsList = language === "en" ? questions.en : questions.pt;
        return questionsList
          .map((q, idx) => ({ p, q, idx }))
          .filter(({ q }) => {
            const qNorm = norm(q);
            return searchWordsNorm.every(word => qNorm.includes(word));
          });
      });
  }, [principlesData, debouncedTypicalQuestionSearch, language, selectedLooping]);

  // Case search results with context - memoized (multi-word support)
  const caseSearchResults = useMemo(() => {
    if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) return [];

    const results = [];
    // Split search into multiple words
    const searchWords = debouncedSearchTerm.trim().split(/\s+/).filter(w => w.length > 0);
    const searchWordsNorm = searchWords.map(w => norm(w));

    (principlesData || []).forEach((p) => {
      (p.cases || []).forEach((c) => {
        const caseContent = language === "en" ? c.en : c.pt;
        if (!caseContent) return;

        // Search in all STAR fields
        const fields = ['s', 't', 'a', 'r', 'l'];
        fields.forEach(field => {
          const text = caseContent[field] || '';
          const textNorm = norm(text);

          // Check if ALL words are present
          const allWordsPresent = searchWordsNorm.every(word => textNorm.includes(word));
          if (!allWordsPresent) return;

          // Find positions of all words
          const wordPositions = searchWordsNorm.map(word => ({
            word,
            index: textNorm.indexOf(word)
          })).filter(wp => wp.index !== -1);

          if (wordPositions.length === 0) return;

          // Find first match position for snippet context
          const firstMatch = Math.min(...wordPositions.map(wp => wp.index));

          // Extract snippet with context (80 chars before/after first match)
          const start = Math.max(0, firstMatch - 80);
          const end = Math.min(text.length, firstMatch + 150);
          let snippet = text.substring(start, end);

          // Add ellipsis
          if (start > 0) snippet = '...' + snippet;
          if (end < text.length) snippet = snippet + '...';

          // Calculate match positions in snippet
          const snippetOffset = start > 0 ? 3 : 0; // Ellipsis offset
          const matches = wordPositions.map(wp => ({
            start: wp.index - start + snippetOffset,
            length: wp.word.length,
            word: wp.word
          }));

          results.push({
            p,
            c,
            snippet,
            field,
            matches,
            searchWords
          });
        });
      });
    });

    return results; // No limit - show all results
  }, [principlesData, debouncedSearchTerm, language]);


  return {
    searchTerm,
    setSearchTerm,
    questionSearch,
    setQuestionSearch,
    typicalQuestionSearch,
    setTypicalQuestionSearch,
    debouncedSearchTerm,
    debouncedQuestionSearch,
    debouncedTypicalQuestionSearch,
    fupSearchResults,
    typicalQuestionSearchResults,
    caseSearchResults,
  };
}
