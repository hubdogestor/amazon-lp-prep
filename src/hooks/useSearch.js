import { useMemo, useState } from "react";
import { useDebounce } from "./useDebounce.js";
import { norm } from "../utils/textUtils.js";
import { getCaseFups } from "../utils/caseUtils.js";
import typicalQuestions from "../data/typicalQuestions.js";
import { questionsToCasesMapping } from "../data/questionsToCasesMapping.js";
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

  const allCasesById = useMemo(() => {
    const caseMap = {};
    (principlesData || []).forEach(p => {
        (p.cases || []).forEach(c => {
            caseMap[c.id] = c;
        });
    });
    return caseMap;
  }, [principlesData]);

  const fupSearchResults = useMemo(() => {
    if (!debouncedQuestionSearch) return [];

    const searchWords = debouncedQuestionSearch.trim().split(/\s+/).filter(w => w.length > 0);
    if (searchWords.length === 0) return [];
    const searchWordsNorm = searchWords.map(w => norm(w));

    const results = [];

    (principlesData || []).forEach(p => {
      (p.cases || []).forEach(c => {
        const fups = getCaseFups(c);
        fups.forEach((f, originalIdx) => {
          const qTxt = language === "en" ? (f.q_en || f.q || "") : (f.q || "");
          const aTxt = language === "en" ? (f.a_en || f.a || "") : (f.a || "");
          
          const textsToSearch = [
            { text: qTxt, type: 'q' },
            { text: aTxt, type: 'a' }
          ];

          for (const { text, type } of textsToSearch) {
            if (!text) continue;

            const textNorm = norm(text);
            const allWordsPresent = searchWordsNorm.every(word => textNorm.includes(word));

            if (allWordsPresent) {
              const wordPositions = searchWordsNorm.map(word => ({
                word,
                index: textNorm.indexOf(word)
              })).filter(wp => wp.index !== -1);

              if (wordPositions.length > 0) {
                const firstMatch = Math.min(...wordPositions.map(wp => wp.index));
                const start = Math.max(0, firstMatch - 60);
                const end = Math.min(text.length, firstMatch + 100);
                let snippet = text.substring(start, end);

                if (start > 0) snippet = '...' + snippet;
                if (end < text.length) snippet = snippet + '...';

                const snippetOffset = start > 0 ? 3 : 0;
                const matches = wordPositions.map(wp => ({
                  start: wp.index - start + snippetOffset,
                  length: wp.word.length,
                }));

                results.push({
                  p,
                  c,
                  f,
                  originalIdx,
                  snippet,
                  matches,
                  searchWords,
                  matchType: type, // 'q' or 'a'
                  questionText: type === 'a' ? qTxt : null
                });
                // Found a match in this FUP, break from inner loop to not add it twice
                break; 
              }
            }
          }
        });
      });
    });

    return results;
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
          .filter(({ p }) => p && p.id) // Ensure p and p.id exist before proceeding
          .filter(({ q }) => {
            const qNorm = norm(q);
            return searchWordsNorm.every(word => qNorm.includes(word));
          })
          .map(item => {
            // Find the case associated with this question to attach keywords
            const caseMapping = questionsToCasesMapping[item.p.id]?.[item.idx + 1];
            const caseId = caseMapping?.options?.[0]?.caseId;
            const caseData = caseId ? allCasesById[caseId] : null;
            const keywords = caseData?.keywords || null;

            return {
              ...item,
              searchWords, // Add searchWords for consistent API
              keywords, // Add keywords to the result object
            };
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
