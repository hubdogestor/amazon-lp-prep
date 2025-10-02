import { useMemo, useState, useEffect, useCallback } from "react";
import { Search } from "lucide-react";
import principlesDataRaw from "./data_principles.js";
import icebreakerData from "./data/icebreaker.js";
import myQuestionsData from "./data/myQuestions.js";
import typicalQuestions from "./data/typicalQuestions.js";
import { HighlightableText } from "./components/HighlightableText.jsx";
import { useDebounce } from "./hooks/useDebounce.js";
import { useHighlight } from "./hooks/useHighlight.js";
import {
  slugify,
  norm
} from "./utils/textUtils.js";
import {
  isTopCase,
  getCaseBaseTitle as getCaseBaseTitleUtil,
  getDisplayCaseTitle as getDisplayCaseTitleUtil,
  getCaseFups,
  getDisplayName as getDisplayNameUtil,
  sortPrinciples as sortPrinciplesUtil,
} from "./utils/caseUtils.js";
import {
  TIMER_DEFAULT_SECONDS,
  FUP_SCROLL_DELAY,
  CASE_EXPAND_DELAY,
  DEBOUNCE_SEARCH_DELAY,
} from "./constants.js";
import "./App.css";

// ---------- Labels & Ordem ----------
const PT_KEYS = [
  "inventar e simplificar",
  "mentalidade de dono",
  "mergulhar fundo",
  "entregar resultados",
  "ganhar a confianca",
  "obsessao pelo cliente",
  "aprender e ser curioso",
  "insistir nos mais altos padroes",
  "estar certo, e muito",
  "ter iniciativa",
  "pensar grande",
  "ser firme, discordar e se comprometer",
  "contratar e desenvolver os melhores",
  "frugalidade",
  "sucesso e crescimento trazem maior responsabilidade",
  "empenhar-se para ser a melhor empregadora do mundo",
];

const PT_LABELS = {
  "inventar e simplificar": "Inventar e simplificar",
  "mentalidade de dono": "Mentalidade de dono",
  "mergulhar fundo": "Mergulhar fundo",
  "entregar resultados": "Entregar resultados",
  "ganhar a confianca": "Ganhar a confiança",
  "obsessao pelo cliente": "Obsessão pelo cliente",
  "aprender e ser curioso": "Aprender e ser curioso",
  "insistir nos mais altos padroes": "Insistir nos mais altos padrões",
  "estar certo, e muito": "Estar certo, e muito",
  "ter iniciativa": "Ter iniciativa",
  "pensar grande": "Pensar grande",
  "ser firme, discordar e se comprometer": "Ser firme, discordar e se comprometer",
  "contratar e desenvolver os melhores": "Contratar e desenvolver os melhores",
  frugalidade: "Frugalidade",
  "sucesso e crescimento trazem maior responsabilidade":
    "Sucesso e crescimento trazem maior responsabilidade",
  "empenhar-se para ser a melhor empregadora do mundo":
    "Empenhar-se para ser a melhor empregadora do mundo",
};

const EN_LABELS_FROM_PT = {
  [PT_KEYS[0]]: "Invent and Simplify",
  [PT_KEYS[1]]: "Ownership",
  [PT_KEYS[2]]: "Dive Deep",
  [PT_KEYS[3]]: "Deliver Results",
  [PT_KEYS[4]]: "Earn Trust",
  [PT_KEYS[5]]: "Customer Obsession",
  [PT_KEYS[6]]: "Learn and Be Curious",
  [PT_KEYS[7]]: "Insist on the Highest Standards",
  [PT_KEYS[8]]: "Are Right, A Lot",
  [PT_KEYS[9]]: "Bias for Action",
  [PT_KEYS[10]]: "Think Big",
  [PT_KEYS[11]]: "Have Backbone; Disagree and Commit",
  [PT_KEYS[12]]: "Hire and Develop the Best",
  [PT_KEYS[13]]: "Frugality",
  [PT_KEYS[14]]: "Success and Scale Bring Broad Responsibility",
  [PT_KEYS[15]]: "Strive to be Earth's Best Employer",
};

const ORDER_PT = PT_KEYS;
const ORDER_EN = PT_KEYS.map((k) => k);

// Wrapper functions that use imported utilities
const getDisplayName = (p, lang) => getDisplayNameUtil(p, lang, PT_LABELS, EN_LABELS_FROM_PT);
const sortPrinciples = (arr, lang) => sortPrinciplesUtil(arr, lang, ORDER_PT, ORDER_EN);

// ---------- i18n ----------
const TEXTS = {
  pt: {
    kSearch: "CASES 🗂️",
    kFup: "FUP 🔎",
    kTypical: "PERGUNTAS ❓",
    viewDetails: "Ver detalhes",
    close: "Fechar",
    filterAll: "Todos os princípios",
    topCases: "Top Cases",
    icebreaker: "Icebreaker",
    myQuestions: "Minhas Perguntas",
    noResult: "Sem resultados",
    situation: "Situação",
    task: "Tarefa",
    action: "Ação",
    result: "Resultado",
    learning: "Aprendizado",
    timer: "Timer",
  },
  en: {
    kSearch: "CASES 🗂️",
    kFup: "FUP 🔎",
    kTypical: "PERGUNTAS ❓",
    viewDetails: "View details",
    close: "Close",
    filterAll: "All principles",
    topCases: "Top Cases",
    icebreaker: "Icebreaker",
    myQuestions: "My Questions",
    noResult: "No results",
    situation: "Situation",
    task: "Task",
    action: "Action",
    result: "Result",
    learning: "Learning",
    timer: "Timer",
  },
};

// ---------- App ----------
export default function App() {
  const [selectedPrinciple, setSelectedPrinciple] = useState("all");
  const [expandedCases, setExpandedCases] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [questionSearch, setQuestionSearch] = useState("");
  const [typicalQuestionSearch, setTypicalQuestionSearch] = useState("");
  const [showTopCases, setShowTopCases] = useState(false);
  const [showIcebreaker, setShowIcebreaker] = useState(false);
  const [showMyQuestions, setShowMyQuestions] = useState(false);
  const [language, setLanguage] = useState("pt");
  const [isSearching, setIsSearching] = useState(false);

  // Use debounced search for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, DEBOUNCE_SEARCH_DELAY);
  const debouncedQuestionSearch = useDebounce(questionSearch, DEBOUNCE_SEARCH_DELAY);
  const debouncedTypicalQuestionSearch = useDebounce(typicalQuestionSearch, DEBOUNCE_SEARCH_DELAY);

  // Use highlight hook instead of DOM manipulation
  const {
    highlightedFupId,
    highlightedCaseId,
    highlightedTypicalQuestionId,
    highlightSearchTerm,
    setHighlightSearchTerm,
    clearHighlights,
    setHighlightedFup,
    setHighlightedCase,
    setHighlightedTypicalQuestion,
  } = useHighlight();

  const t = TEXTS[language];
  const principlesData = useMemo(() => {
    const dataRaw = Array.isArray(principlesDataRaw) ? principlesDataRaw : [];
    return sortPrinciples(dataRaw, language);
  }, [language]);

  const clearExpanded = useCallback(() => setExpandedCases({}), []);

  // Memoize case title functions
  const getCaseBaseTitle = useCallback((c, lang) => {
    return getCaseBaseTitleUtil(c, lang);
  }, []);

  const getDisplayCaseTitle = useCallback((c, lang) => {
    return getDisplayCaseTitleUtil(c, lang);
  }, []);

  // Show loading state when searching
  useEffect(() => {
    if (searchTerm || questionSearch) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), DEBOUNCE_SEARCH_DELAY);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [searchTerm, questionSearch]);

  // Filtro principal - now properly memoized
  const filteredPrinciples = useMemo(() => {
    let base = principlesData;

    if (debouncedSearchTerm) {
      const term = norm(debouncedSearchTerm);
      return base
        .map((p) => {
          const hits = (p.cases || []).filter((c) => {
            if (language === "pt") {
              const titleHitPT = norm(getCaseBaseTitle(c, "pt")).includes(term);
              const starlPT = (c && c.pt) || {};
              const starlHitPT = norm(Object.values(starlPT).join(" ")).includes(term);
              return titleHitPT || starlHitPT;
            } else {
              const titleHitEN = norm(getCaseBaseTitle(c, "en")).includes(term);
              const starlEN = (c && c.en) || {};
              const starlHitEN = norm(Object.values(starlEN).join(" ")).includes(term);
              return titleHitEN || starlHitEN;
            }
          });
          if (hits.length > 0 || norm(p.name).includes(term)) {
            return { ...p, cases: hits.length ? hits : p.cases || [] };
          }
          return null;
        })
        .filter(Boolean);
    }

    if (showTopCases) {
      return base
        .map((p) => ({ ...p, cases: (p.cases || []).filter(isTopCase) }))
        .filter((p) => (p.cases || []).length > 0);
    }

    if (selectedPrinciple !== "all") {
      return base.filter((p) => p?.id === selectedPrinciple);
    }

    return base;
  }, [principlesData, selectedPrinciple, showTopCases, debouncedSearchTerm, language, getCaseBaseTitle]);

  const toggleCase = useCallback((caseTitle, principleId, preserveSearchTerm = false) => {
    if (preserveSearchTerm && searchTerm) {
      setHighlightSearchTerm(searchTerm);
    }

    if (!preserveSearchTerm) {
      setSearchTerm("");
      setHighlightSearchTerm("");
    } else {
      setSearchTerm("");
    }
    setQuestionSearch("");

    setExpandedCases((prev) => {
      const next = {};
      next[caseTitle] = !prev[caseTitle];
      return next;
    });
    setSelectedPrinciple(principleId);
  }, [searchTerm, setHighlightSearchTerm]);

  // FUP search results - memoized (multi-word support)
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

  // Typical question search results - memoized
  const typicalQuestionSearchResults = useMemo(() => {
    if (!debouncedTypicalQuestionSearch) return [];

    // Split search into multiple words
    const searchWords = debouncedTypicalQuestionSearch.trim().split(/\s+/).filter(w => w.length > 0);
    const searchWordsNorm = searchWords.map(w => norm(w));

    return (principlesData || [])
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
  }, [principlesData, debouncedTypicalQuestionSearch, language]);

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

    return results.slice(0, 10); // Limit to 10 results
  }, [principlesData, debouncedSearchTerm, language]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Cabeçalho Fixo */}
      <header
        id="stickyHeader"
        className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        role="banner"
      >
        <div className="max-w-[1600px] mx-auto px-6 py-3">
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Busca por palavras (col-span-2) */}
            <div className="col-span-2">
              <div id="kSearch" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t.kSearch}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (e.target.value) {
                      setShowTopCases(false);
                      clearExpanded();
                    }
                  }}
                  onFocus={() => {
                    setQuestionSearch("");
                    setTypicalQuestionSearch("");
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
                  aria-label={t.kSearch}
                  aria-expanded={!!searchTerm && caseSearchResults.length > 0}
                  aria-controls="case-dropdown"
                />
                {searchTerm && caseSearchResults.length > 0 && (
                  <div
                    id="case-dropdown"
                    role="listbox"
                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-96 overflow-auto"
                  >
                    {caseSearchResults.map((result, idx) => {
                      const { p, c, snippet, matches, searchWords } = result;

                      // Build snippet with multiple highlights
                      const renderSnippet = () => {
                        // Sort matches by position
                        const sortedMatches = [...matches].sort((a, b) => a.start - b.start);
                        const parts = [];
                        let lastEnd = 0;

                        sortedMatches.forEach((match, i) => {
                          // Add text before this match
                          if (match.start > lastEnd) {
                            parts.push(
                              <span key={`text-${i}`} className="text-slate-600">
                                {snippet.substring(lastEnd, match.start)}
                              </span>
                            );
                          }
                          // Add highlighted match
                          parts.push(
                            <span key={`match-${i}`} className="bg-amber-200 font-semibold">
                              {snippet.substring(match.start, match.start + match.length)}
                            </span>
                          );
                          lastEnd = match.start + match.length;
                        });

                        // Add remaining text
                        if (lastEnd < snippet.length) {
                          parts.push(
                            <span key="text-end" className="text-slate-600">
                              {snippet.substring(lastEnd)}
                            </span>
                          );
                        }

                        return parts;
                      };

                      return (
                        <div
                          key={`case-result-${idx}`}
                          role="option"
                          tabIndex={0}
                          className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0 focus:bg-slate-100 focus:outline-none"
                          onClick={() => {
                            // Save search words BEFORE clearing
                            const savedSearchWords = [...searchWords];

                            setSelectedPrinciple(p.id);
                            setShowTopCases(false);
                            setSearchTerm("");
                            clearExpanded();
                            clearHighlights();

                            setTimeout(() => {
                              setExpandedCases({ [c.title]: true });
                              setHighlightSearchTerm(savedSearchWords.join(' '));

                              const caseDomId = `case-${slugify(c.id || c.title)}`;
                              setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
                            }, 0);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              e.currentTarget.click();
                            }
                          }}
                        >
                          <div className="text-sm mb-1">
                            {renderSnippet()}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {getDisplayCaseTitle(c, language)} • {getDisplayName(p, language)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Busca por FUPs (col-span-2) */}
            <div className="col-span-2">
              <div id="kFup" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t.kFup}
                  value={questionSearch}
                  onChange={(e) => setQuestionSearch(e.target.value)}
                  onFocus={() => {
                    setSearchTerm("");
                    setTypicalQuestionSearch("");
                  }}
                  className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
                  aria-label={t.kFup}
                  aria-expanded={!!questionSearch}
                  aria-controls="fup-dropdown"
                />
                {questionSearch && (
                  <div
                    id="fup-dropdown"
                    role="listbox"
                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto"
                  >
                    {fupSearchResults.map(({ p, c, f, originalIdx }, k) => (
                      <div
                        key={`${p.id}-${slugify(c.id || c.title)}-${originalIdx}-${k}`}
                        role="option"
                        tabIndex={0}
                        className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm focus:bg-slate-100 focus:outline-none"
                        onClick={() => {
                          // Save search words BEFORE clearing (same as CASES)
                          const searchWords = debouncedQuestionSearch.trim().split(/\s+/).filter(w => w.length > 0);

                          setSelectedPrinciple(p.id);
                          setShowTopCases(false);
                          setSearchTerm("");
                          clearExpanded();
                          clearHighlights();

                          setTimeout(() => {
                            setExpandedCases({ [c.title]: true });
                            setQuestionSearch("");
                            setHighlightSearchTerm(searchWords.join(' ')); // Set highlight terms like CASES

                            const anchorId = `fup-${p.id}-${slugify(c.id || c.title)}-${originalIdx}`;
                            setHighlightedFup(anchorId, FUP_SCROLL_DELAY);
                          }, 0);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.currentTarget.click();
                          }
                        }}
                      >
                        <div className="font-medium text-slate-800">
                          <HighlightableText
                            text={language === "en" ? (f.q_en || f.q) : f.q}
                            searchTerm={debouncedQuestionSearch}
                          />
                        </div>
                        <div className="text-slate-500">
                          {getDisplayName(p, language)} • {getDisplayCaseTitle(c, language)}
                        </div>
                      </div>
                    ))}
                    {fupSearchResults.length === 0 && (
                      <div className="px-3 py-2 text-slate-500 text-sm">{t.noResult}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Busca por Perguntas Típicas (col-span-2) */}
            <div className="col-span-2">
              <div id="kTypical" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t.kTypical}
                  value={typicalQuestionSearch}
                  onChange={(e) => setTypicalQuestionSearch(e.target.value)}
                  onFocus={() => {
                    setSearchTerm("");
                    setQuestionSearch("");
                  }}
                  className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white text-center"
                  aria-label={t.kTypical}
                  aria-expanded={!!typicalQuestionSearch}
                  aria-controls="typical-dropdown"
                />
                {typicalQuestionSearch && (
                  <div
                    id="typical-dropdown"
                    role="listbox"
                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto"
                  >
                    {typicalQuestionSearchResults.map(({ p, q, idx }, k) => (
                      <div
                        key={`${p.id}-typical-${idx}-${k}`}
                        role="option"
                        tabIndex={0}
                        className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm focus:bg-slate-100 focus:outline-none"
                        onClick={() => {
                          // Save search words BEFORE clearing (same as CASES)
                          const searchWords = debouncedTypicalQuestionSearch.trim().split(/\s+/).filter(w => w.length > 0);

                          setSelectedPrinciple(p.id);
                          setShowTopCases(false);
                          setSearchTerm("");
                          clearExpanded();
                          clearHighlights();

                          setTimeout(() => {
                            setTypicalQuestionSearch("");
                            setHighlightSearchTerm(searchWords.join(' ')); // Set highlight terms like CASES
                            const anchorId = `typical-q-${p.id}-${idx}`;
                            setHighlightedTypicalQuestion(anchorId, 120);
                          }, 0);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.currentTarget.click();
                          }
                        }}
                      >
                        <div className="font-medium text-slate-800">
                          <HighlightableText
                            text={q}
                            searchTerm={debouncedTypicalQuestionSearch}
                          />
                        </div>
                        <div className="text-slate-500">{getDisplayName(p, language)}</div>
                      </div>
                    ))}
                    {typicalQuestionSearchResults.length === 0 && (
                      <div className="px-3 py-2 text-slate-500 text-sm">{t.noResult}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Top Cases (col-span-1) */}
            <div className="col-span-1">
              <button
                id="topCasesBtn"
                className={`w-full px-3 py-2 rounded-lg text-sm border transition ${
                  showTopCases
                    ? "bg-yellow-100 border-yellow-300 text-yellow-800"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  clearExpanded();
                  clearHighlights();
                  setSearchTerm("");
                  setSelectedPrinciple("all");
                  setShowTopCases((v) => !v);
                }}
                aria-label={`${showTopCases ? 'Hide' : 'Show'} top cases`}
                aria-pressed={showTopCases}
                title="Mostrar apenas Top Cases"
              >
                🎯 {t.topCases}
              </button>
            </div>

            {/* Icebreaker (col-span-1) */}
            <div className="col-span-1">
              <button
                id="icebreakerBtn"
                className="w-full px-3 py-2 rounded-lg text-sm border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowIcebreaker(true);
                }}
                aria-label="Open Icebreaker questions"
                title="Perguntas iniciais de rapport"
              >
                💬 {t.icebreaker}
              </button>
            </div>

            {/* Minhas Perguntas (col-span-1) */}
            <div className="col-span-1">
              <button
                id="myQuestionsBtn"
                className="w-full px-3 py-2 rounded-lg text-sm border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMyQuestions(true);
                }}
                aria-label="Open my questions for interviewer"
                title="Perguntas para fazer ao entrevistador"
              >
                🤔 {t.myQuestions}
              </button>
            </div>

            {/* Timer (col-span-2) */}
            <div className="col-span-2">
              <HeaderTimer t={t} />
            </div>

            {/* Idioma (col-span-1) */}
            <div className="col-span-1">
              <div id="langBox" className="w-full flex gap-2" role="group" aria-label="Language selection">
                <button
                  className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
                    language === "pt" ? "bg-slate-900 text-white" : "bg-white text-slate-700"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage("pt");
                  }}
                  aria-label="Portuguese"
                  aria-pressed={language === "pt"}
                >
                  PT
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
                    language === "en" ? "bg-slate-900 text-white" : "bg-white text-slate-700"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage("en");
                  }}
                  aria-label="English"
                  aria-pressed={language === "en"}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal Icebreaker */}
      {showIcebreaker && (
        <IcebreakerModal
          language={language}
          onClose={() => setShowIcebreaker(false)}
        />
      )}

      {/* Modal Minhas Perguntas */}
      {showMyQuestions && (
        <MyQuestionsModal
          language={language}
          onClose={() => setShowMyQuestions(false)}
        />
      )}

      {/* Conteúdo - Otimizado para widescreen */}
      <div className="max-w-[2400px] mx-auto px-8 pt-6">
        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <aside id="sidebar" className="col-span-12 xl:col-span-2" role="navigation" aria-label="Principles filter">
            <div
              className={`cursor-pointer p-2 rounded-lg transition ${
                selectedPrinciple === "all" ? "bg-amber-100 font-semibold text-amber-900" : "hover:bg-slate-50"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPrinciple("all");
                setShowTopCases(false);
                setSearchTerm("");
                clearHighlights();
                clearExpanded();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.currentTarget.click();
                }
              }}
              aria-pressed={selectedPrinciple === "all"}
            >
              {t.filterAll}
            </div>
            {(principlesData || []).map((p) => (
              <div
                key={`side-${p.id}`}
                className={`cursor-pointer p-2 rounded-lg transition ${
                  selectedPrinciple === p.id ? "bg-amber-100 font-semibold text-amber-900" : "hover:bg-slate-50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPrinciple(p.id);
                  setShowTopCases(false);
                  setSearchTerm("");
                  setQuestionSearch(""); // Clear FUP search
                  setTypicalQuestionSearch(""); // Clear Typical Questions search
                  setHighlightSearchTerm(""); // Clear highlight search term
                  clearHighlights();
                  clearExpanded();
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.currentTarget.click();
                  }
                }}
                aria-pressed={selectedPrinciple === p.id}
              >
                {getDisplayName(p, language)}
              </div>
            ))}
          </aside>

          {/* Main */}
          <main className="col-span-12 xl:col-span-10 space-y-6" role="main">
            {isSearching && (
              <div className="text-center py-4 text-slate-500" role="status" aria-live="polite">
                Buscando...
              </div>
            )}
            {(filteredPrinciples || []).map((principle) => (
              <section key={principle.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-3 text-slate-900">{getDisplayName(principle, language)}</h2>
                  {principle.principle && (
                    <p className="text-slate-600 italic leading-relaxed">
                      {language === "en" ? (principle.principle.description_en || principle.principle.description) : principle.principle.description}
                    </p>
                  )}

                  {/* Perguntas Típicas - Amazon Style (azul) - Layout tipo tabela */}
                  {typicalQuestions[principle.id] && (
                    <div className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-4 shadow-sm">
                      <h3 className="text-sm font-bold text-[#232F3E] mb-3 uppercase tracking-wide flex items-center gap-2">
                        💭 {language === "pt" ? "Perguntas Típicas do Entrevistador" : "Typical Interviewer Questions"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {(language === "en" ? typicalQuestions[principle.id].en : typicalQuestions[principle.id].pt).map((q, qIdx) => {
                          const questionId = `typical-q-${principle.id}-${qIdx}`;
                          const isHighlighted = highlightedTypicalQuestionId === questionId;
                          return (
                            <div
                              key={qIdx}
                              id={questionId}
                              className={`px-3 py-2 bg-white/60 border border-blue-200 rounded flex items-center text-xs text-[#232F3E] transition-all duration-300 hover:bg-white hover:shadow-sm ${
                                isHighlighted ? 'bg-yellow-200 font-bold shadow-md' : ''
                              }`}
                            >
                              <span className="text-blue-600 font-bold mr-2">{qIdx + 1}.</span>
                              <HighlightableText
                                text={q}
                                searchTerm={highlightSearchTerm}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {((principle && principle.cases) || []).map((c, idx) => {
                  const caseKey = `${principle.id}-${idx}`;
                  const caseDomId = `case-${slugify(c.id || c.title)}`;
                  const open = !!expandedCases[c.title];
                  const isHighlighted = highlightedCaseId === caseDomId;
                  const isTop = isTopCase(c);

                  return (
                    <article
                      key={caseKey}
                      id={caseDomId}
                      className={`bg-gradient-to-br rounded-xl p-0 mb-6 overflow-hidden transition-all duration-300 ${
                        isTop
                          ? 'from-orange-50 to-amber-50 border-4 border-[#FF9900] shadow-lg shadow-orange-200/50 hover:shadow-xl hover:shadow-orange-300/50'
                          : 'from-blue-50 to-sky-50 border-2 border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 hover:border-blue-400'
                      } ${isHighlighted ? 'ring-2 ring-amber-400' : ''}`}
                    >
                      {/* Header clicável (área ampla) */}
                      <header
                        className={`flex items-center justify-between px-5 py-4 cursor-pointer ${
                          open ? "bg-white/80" : "bg-white/60"
                        } hover:bg-white/90 backdrop-blur-sm`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const hasSearchTerm = !!searchTerm;
                          toggleCase(c.title, principle.id, hasSearchTerm);
                          if (hasSearchTerm) {
                            setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-expanded={open}
                        aria-controls={`case-content-${caseKey}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.currentTarget.click();
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          {isTop && (
                            <span className="px-3 py-1 bg-[#FF9900] text-white text-xs font-bold rounded-full shadow-md animate-pulse">
                              ⭐ TOP CASE
                            </span>
                          )}
                          <h3 className={`text-lg font-bold ${isTop ? 'text-[#232F3E]' : 'text-slate-900'}`}>
                            <HighlightableText
                              text={getDisplayCaseTitle(c, language)}
                              searchTerm={highlightSearchTerm}
                            />
                          </h3>
                        </div>
                        <span className="text-sm text-amber-600 select-none">
                          {open ? t.close : t.viewDetails} ▾
                        </span>
                      </header>

                      {open && (
                        <div
                          id={`case-content-${caseKey}`}
                          className="px-6 pb-6 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-700 bg-white/40 backdrop-blur-sm"
                        >
                          <div className="space-y-3">
                            <h4 className="text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-3">📋 STAR Case</h4>
                            <div className="space-y-3 leading-relaxed text-base">
                              <p>
                                <strong>{t.situation}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].s) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.task}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].t) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.action}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].a) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.result}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].r) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.learning}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].l) || ""}
                                  searchTerm={highlightSearchTerm}
                                />
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 mb-3">❓ Follow-up Questions</h4>
                            {(() => {
                              const fups = getCaseFups(c);
                              return fups.length > 0 ? (
                                <ul className="list-disc pl-5 space-y-2 text-sm">
                                  {fups.map((f, fIdx) => {
                                    const fupId = `fup-${principle.id}-${slugify(c.id || c.title)}-${fIdx}`;
                                    const question = language === "en" ? (f.q_en || f.q) : f.q;
                                    const answer = language === "en" ? (f.a_en || f.a) : f.a;
                                    const isFupHighlighted = highlightedFupId === fupId;

                                    return (
                                      <li
                                        key={`${slugify(c.id || c.title)}-${fIdx}`}
                                        id={fupId}
                                        className={`flex flex-col gap-1 transition-all ${
                                          isFupHighlighted ? 'ring-2 ring-amber-300 rounded-md bg-amber-50 p-2' : ''
                                        }`}
                                      >
                                        <div className={`font-medium ${
                                          isFupHighlighted ? 'bg-amber-100 px-2 py-1 rounded' : ''
                                        }`}>
                                          {question}
                                        </div>
                                        {answer && <div className="text-slate-600 whitespace-pre-line">{answer}</div>}
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : (
                                <div className="text-slate-500 italic">Nenhuma pergunta disponível.</div>
                              );
                            })()}
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: Icebreaker Modal ----------
function IcebreakerModal({ language, onClose }) {
  const data = icebreakerData[language];
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (idx) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="icebreaker-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
          <h2 id="icebreaker-title" className="text-2xl font-bold text-white flex items-center gap-2">
            💬 {data.title}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg px-3 py-1 transition"
            aria-label="Close icebreaker modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          <div className="space-y-4">
            {data.questions.map((item, idx) => {
              const isExpanded = expandedQuestions[idx];
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-white/60 transition"
                    onClick={() => toggleQuestion(idx)}
                  >
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-blue-600 font-mono text-sm">Q{idx + 1}</span>
                      <span>{item.q}</span>
                    </h3>
                    <span className="text-sm text-blue-600 select-none">
                      {isExpanded ? (language === "pt" ? "Fechar ▾" : "Close ▾") : (language === "pt" ? "Ver resposta" : "View answer")}
                    </span>
                  </div>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 bg-white/40">
                      <div className="pl-7 text-slate-700 leading-relaxed whitespace-pre-line">
                        {item.a.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i}>{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            {language === "pt" ? "Fechar" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: My Questions Modal ----------
function MyQuestionsModal({ language, onClose }) {
  const data = myQuestionsData[language];
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (idx) => {
    setExpandedCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="myquestions-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
          <h2 id="myquestions-title" className="text-2xl font-bold text-white flex items-center gap-2">
            🤔 {data.title}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg px-3 py-1 transition"
            aria-label="Close my questions modal"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
          <div className="space-y-4">
            {data.categories.map((category, catIdx) => {
              const isExpanded = expandedCategories[catIdx];
              return (
                <div
                  key={catIdx}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-white/60 transition"
                    onClick={() => toggleCategory(catIdx)}
                  >
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <span>{category.category}</span>
                      <span className="text-sm font-normal text-slate-500">({category.questions.length} perguntas)</span>
                    </h3>
                    <span className="text-sm text-purple-600 select-none">
                      {isExpanded ? (language === "pt" ? "Fechar ▾" : "Close ▾") : (language === "pt" ? "Ver perguntas" : "View questions")}
                    </span>
                  </div>
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 bg-white/40">
                      <div className="space-y-4">
                        {category.questions.map((item, qIdx) => (
                          <div key={qIdx} className="border-l-4 border-purple-400 pl-4 py-2">
                            <div className="font-semibold text-slate-800 mb-1">{item.q}</div>
                            <div className="text-sm text-slate-600 italic">💡 {item.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
          >
            {language === "pt" ? "Fechar" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: Header Timer ----------
function HeaderTimer() {
  const [seconds, setSeconds] = useState(TIMER_DEFAULT_SECONDS);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let id;
    if (running) id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => id && clearInterval(id);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeDisplay = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div
      id="timerBox"
      className="w-full h-full px-4 border border-slate-200 rounded-lg bg-white flex items-center justify-between gap-3"
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="font-mono text-2xl font-bold text-slate-800" aria-label={`${minutes} minutes ${secs} seconds`}>
        {timeDisplay}
      </span>
      <div className="flex items-center gap-2">
        {!running ? (
          <button
            className="px-4 py-2 text-xl rounded-lg border-2 border-green-500 bg-green-50 hover:bg-green-100 text-green-700 transition"
            onClick={(e) => {
              e.stopPropagation();
              setRunning(true);
            }}
            aria-label="Start timer"
            title="Iniciar timer"
          >
            ▶
          </button>
        ) : (
          <button
            className="px-4 py-2 text-xl rounded-lg border-2 border-amber-500 bg-amber-50 hover:bg-amber-100 text-amber-700 transition"
            onClick={(e) => {
              e.stopPropagation();
              setRunning(false);
            }}
            aria-label="Pause timer"
            title="Pausar timer"
          >
            ⏸
          </button>
        )}
        <button
          className="px-3 py-2 text-lg rounded-lg border-2 border-slate-300 bg-slate-50 hover:bg-slate-100 transition"
          onClick={(e) => {
            e.stopPropagation();
            setRunning(false);
            setSeconds(TIMER_DEFAULT_SECONDS);
          }}
          aria-label="Reset timer"
          title="Resetar timer"
        >
          ⟲
        </button>
      </div>
    </div>
  );
}
