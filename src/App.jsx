import { useMemo, useState, useEffect, useCallback } from "react";
import { Search } from "lucide-react";
import icebreakerData from "./data/icebreaker.js";
import myQuestionsData from "./data/myQuestions.js";
import typicalQuestions from "./data/typicalQuestions.js";
import { questionsToCasesMapping } from "./data/questionsToCasesMapping.js";
import { usePrinciplesData } from "./hooks/usePrinciplesData.js";
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
    clearHighlights,
    setHighlightedFup,
    setHighlightedCase,
    setHighlightedTypicalQuestion,
  } = useHighlight();

  // Separate highlight terms for each search context
  const [highlightCaseTerm, setHighlightCaseTerm] = useState("");
  const [highlightFupTerm, setHighlightFupTerm] = useState("");
  const [highlightTypicalTerm, setHighlightTypicalTerm] = useState("");

  // Local FUP search per case (formato: { "caseId": "searchTerm" })
  const [caseFupSearchTerms, setCaseFupSearchTerms] = useState({});
  const [caseFupSearchOpen, setCaseFupSearchOpen] = useState({}); // controla visibilidade da busca

  // Local STAR search per case (formato: { "caseId": "searchTerm" })
  const [caseStarSearchTerms, setCaseStarSearchTerms] = useState({});
  const [caseStarSearchOpen, setCaseStarSearchOpen] = useState({}); // controla visibilidade da busca

  const t = TEXTS[language];
  const rawPrinciplesData = usePrinciplesData();
  const principlesData = useMemo(() => {
    return sortPrinciples(rawPrinciplesData, language);
  }, [rawPrinciplesData, language]);

  const clearExpanded = useCallback(() => setExpandedCases({}), []);

  // Memoize case title functions
  const getCaseBaseTitle = useCallback((c, lang) => {
    return getCaseBaseTitleUtil(c, lang);
  }, []);

  const getDisplayCaseTitle = useCallback((c, lang) => {
    return getDisplayCaseTitleUtil(c, lang);
  }, []);

  // Get questions that this case answers for a given principle
  const getCaseQuestions = useCallback((caseId, principleId) => {
    const principleMapping = questionsToCasesMapping[principleId];
    if (!principleMapping) return [];
    
    const questions = typicalQuestions[principleId];
    if (!questions) return [];
    
    const questionNumbers = [];
    Object.entries(principleMapping).forEach(([qNum, mapping]) => {
      if (mapping && mapping.case_id === caseId) {
        questionNumbers.push(parseInt(qNum));
      }
    });
    
    return questionNumbers.sort((a, b) => a - b).map(num => {
      const questionText = language === 'pt' ? questions.pt[num] : questions.en[num];
      return {
        number: num,
        text: questionText || `Question ${num}` // Fallback se texto não existir
      };
    }).filter(q => q.text); // Remove questões sem texto
  }, [language]);

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

  const toggleCase = useCallback((caseId, principleId, preserveSearchTerm = false) => {
    if (preserveSearchTerm && searchTerm) {
      setHighlightCaseTerm(searchTerm);
    }

    if (!preserveSearchTerm) {
      setSearchTerm("");
      setHighlightCaseTerm("");
    } else {
      setSearchTerm("");
    }
    setQuestionSearch("");

    setExpandedCases((prev) => {
      const next = {};
      next[caseId] = !prev[caseId];
      return next;
    });
    setSelectedPrinciple(principleId);
  }, [searchTerm]);

  // Navegar para o case mapeado a partir de uma pergunta típica
  const navigateToMappedCase = useCallback((lpId, questionIndex) => {
    const mapping = questionsToCasesMapping[lpId];
    if (!mapping || !mapping[questionIndex]) {
      // Sem case mapeado para esta pergunta
      return;
    }

    const { case_id } = mapping[questionIndex];

    // Encontrar o case nos dados
    const principle = principlesData.find(p => p.id === lpId);
    if (!principle) return;

    const caseObj = principle.cases?.find(c => c.id === case_id);
    if (!caseObj) return;

    // Expandir o case usando case_id em vez de title
    setExpandedCases({ [case_id]: true });
    setSelectedPrinciple(lpId);

    // Scroll para o case após um delay
    setTimeout(() => {
      const caseDomId = `case-${slugify(case_id)}`;
      const elem = document.getElementById(caseDomId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight temporário
        setHighlightedCase(caseDomId, 2000);
      }
    }, 100);
  }, [principlesData, setHighlightedCase]);

  // Toggle busca local de FUPs para um case específico
  const toggleCaseFupSearch = useCallback((caseId) => {
    setCaseFupSearchOpen(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
    // Limpa o termo de busca ao fechar
    if (caseFupSearchOpen[caseId]) {
      setCaseFupSearchTerms(prev => {
        const newTerms = { ...prev };
        delete newTerms[caseId];
        return newTerms;
      });
    }
  }, [caseFupSearchOpen]);

  // Atualiza termo de busca para um case específico
  const updateCaseFupSearchTerm = useCallback((caseId, term) => {
    setCaseFupSearchTerms(prev => ({
      ...prev,
      [caseId]: term
    }));
  }, []);

  // Filtra FUPs de um case específico baseado no termo de busca local
  const filterCaseFups = useCallback((fups, caseId, lang) => {
    const searchTerm = caseFupSearchTerms[caseId];
    if (!searchTerm || searchTerm.trim() === '') return fups;

    const term = searchTerm.toLowerCase().trim();
    return fups.filter(f => {
      const question = lang === "en" ? (f.q_en || f.q) : f.q;
      const answer = lang === "en" ? (f.a_en || f.a) : f.a;
      return (
        question?.toLowerCase().includes(term) ||
        answer?.toLowerCase().includes(term)
      );
    });
  }, [caseFupSearchTerms]);

  // Toggle busca local no STAR Case para um case específico
  const toggleCaseStarSearch = useCallback((caseId) => {
    setCaseStarSearchOpen(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
    // Limpa o termo de busca ao fechar
    if (caseStarSearchOpen[caseId]) {
      setCaseStarSearchTerms(prev => {
        const newTerms = { ...prev };
        delete newTerms[caseId];
        return newTerms;
      });
    }
  }, [caseStarSearchOpen]);

  // Atualiza termo de busca STAR para um case específico
  const updateCaseStarSearchTerm = useCallback((caseId, term) => {
    setCaseStarSearchTerms(prev => ({
      ...prev,
      [caseId]: term
    }));
  }, []);

  // Verifica se termo de busca STAR existe em alguma seção do STAR(L)
  const starSectionMatchesTerm = useCallback((caseObj, lang, term) => {
    if (!term || !caseObj || !caseObj[lang]) return true;
    
    const termLower = term.toLowerCase().trim();
    const starData = caseObj[lang];
    
    return (
      starData.s?.toLowerCase().includes(termLower) ||
      starData.t?.toLowerCase().includes(termLower) ||
      starData.a?.toLowerCase().includes(termLower) ||
      starData.r?.toLowerCase().includes(termLower) ||
      starData.l?.toLowerCase().includes(termLower)
    );
  }, []);

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
                    setHighlightCaseTerm("");
                    setHighlightFupTerm("");
                    setHighlightTypicalTerm("");
                    clearHighlights();
                  }}
                  className="w-full pl-10 pr-4 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
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
                            // Save search words BEFORE clearing (filter words with 3+ chars)
                            const savedSearchWords = searchWords.filter(w => w.length >= 3);

                            setSelectedPrinciple(p.id);
                            setShowTopCases(false);
                            setSearchTerm("");
                            clearExpanded();
                            clearHighlights();

                            setTimeout(() => {
                              setExpandedCases({ [c.id || c.title]: true });
                              setHighlightCaseTerm(savedSearchWords.join(' '));
                              setHighlightFupTerm("");
                              setHighlightTypicalTerm("");

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
                    setHighlightCaseTerm("");
                    setHighlightFupTerm("");
                    setHighlightTypicalTerm("");
                    clearHighlights();
                  }}
                  className="w-full pl-10 pr-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
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
                          // Save search words BEFORE clearing (filter words with 3+ chars)
                          const searchWords = debouncedQuestionSearch.trim().split(/\s+/).filter(w => w.length >= 3);

                          setSelectedPrinciple(p.id);
                          setShowTopCases(false);
                          setSearchTerm("");
                          clearExpanded();
                          clearHighlights();

                          setTimeout(() => {
                            setExpandedCases({ [c.id || c.title]: true });
                            setQuestionSearch("");
                            setHighlightCaseTerm("");
                            setHighlightFupTerm(searchWords.join(' '));
                            setHighlightTypicalTerm("");

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
                    setHighlightCaseTerm("");
                    setHighlightFupTerm("");
                    setHighlightTypicalTerm("");
                    clearHighlights();
                  }}
                  className="w-full pl-10 pr-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white text-center"
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
                          // Save search words BEFORE clearing (filter words with 3+ chars)
                          const searchWords = debouncedTypicalQuestionSearch.trim().split(/\s+/).filter(w => w.length >= 3);

                          setSelectedPrinciple(p.id);
                          setShowTopCases(false);
                          setSearchTerm("");
                          clearExpanded();
                          clearHighlights();

                          setTimeout(() => {
                            setTypicalQuestionSearch("");
                            setHighlightCaseTerm("");
                            setHighlightFupTerm("");
                            setHighlightTypicalTerm(searchWords.join(' '));
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
                className={`w-full px-3 py-3 text-base rounded-lg border transition ${
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
                className="w-full px-3 py-3 text-base rounded-lg border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
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
                className="w-full px-3 py-3 text-base rounded-lg border transition bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
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
                  className={`flex-1 px-3 py-3 text-base rounded-lg border ${
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
                  className={`flex-1 px-3 py-3 text-base rounded-lg border ${
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
            {/* Header "Leadership Principles" */}
            <div className="mb-3 pb-2 border-b-2 border-[#FF9900]">
              <h2 className="text-sm font-bold text-[#232F3E] uppercase tracking-wider">
                {language === "pt" ? "Leadership Principles" : "Leadership Principles"}
              </h2>
            </div>

            {/* Botão "Todos os Princípios" - estilo título clicável */}
            <button
              className={`w-full mb-4 px-3 py-2.5 rounded text-base text-left font-bold uppercase tracking-wide transition-all flex items-center gap-2 ${
                selectedPrinciple === "all"
                  ? "bg-[#232F3E] text-white shadow-lg"
                  : "bg-slate-100 text-[#232F3E] hover:bg-slate-200"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPrinciple("all");
                setShowTopCases(false);
                setSearchTerm("");
                setQuestionSearch("");
                setTypicalQuestionSearch("");
                setHighlightCaseTerm("");
                setHighlightFupTerm("");
                setHighlightTypicalTerm("");
                clearHighlights();
                clearExpanded();
              }}
              aria-pressed={selectedPrinciple === "all"}
            >
              <span className="text-lg">🏠</span>
              {t.filterAll}
            </button>

            {/* Botões dos 16 LPs - estilo Amazon com fundo */}
            {(principlesData || []).map((p) => (
              <button
                key={`side-${p.id}`}
                className={`w-full mb-2 px-4 py-2.5 rounded-md text-sm text-left font-medium transition-all shadow-sm ${
                  selectedPrinciple === p.id
                    ? "bg-[#FF9900] text-white shadow-md scale-[1.02]"
                    : "bg-gradient-to-r from-white to-slate-50 border border-slate-200 text-[#232F3E] hover:border-[#FF9900] hover:shadow-md hover:scale-[1.01]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPrinciple(p.id);
                  setShowTopCases(false);
                  setSearchTerm("");
                  setQuestionSearch(""); // Clear FUP search
                  setTypicalQuestionSearch(""); // Clear Typical Questions search
                  setHighlightCaseTerm("");
                  setHighlightFupTerm("");
                  setHighlightTypicalTerm("");
                  clearHighlights();
                  clearExpanded();
                }}
                aria-pressed={selectedPrinciple === p.id}
              >
                {getDisplayName(p, language)}
              </button>
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
                        <span className="text-xs font-normal text-gray-500 ml-2">
                          ({language === "pt" ? "Clique para ver o case que responde" : "Click to see the case that answers"})
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {(language === "en" ? typicalQuestions[principle.id].en : typicalQuestions[principle.id].pt).map((q, qIdx) => {
                          const questionId = `typical-q-${principle.id}-${qIdx}`;
                          const isHighlighted = highlightedTypicalQuestionId === questionId;
                          const hasCase = questionsToCasesMapping[principle.id]?.[qIdx];
                          const caseScore = hasCase?.score || 0;
                          
                          return (
                            <button
                              key={qIdx}
                              id={questionId}
                              onClick={() => {
                                if (hasCase) {
                                  navigateToMappedCase(principle.id, qIdx);
                                }
                              }}
                              disabled={!hasCase}
                              className={`px-3 py-2 border rounded text-xs transition-all duration-300 flex items-center justify-center text-center min-h-[60px] ${
                                hasCase 
                                  ? 'bg-white/80 border-blue-200 text-[#232F3E] hover:bg-blue-50 hover:shadow-md hover:scale-105 cursor-pointer' 
                                  : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                              } ${
                                isHighlighted ? 'bg-yellow-200 font-bold shadow-md ring-2 ring-yellow-400' : ''
                              }`}
                              title={hasCase 
                                ? `${language === "pt" ? "Clique para ver o case" : "Click to see case"} (score: ${caseScore})` 
                                : (language === "pt" ? "Sem case mapeado" : "No case mapped")
                              }
                            >
                              <span className="flex items-center gap-1">
                                {hasCase && <span className="text-green-600 font-bold">✓</span>}
                                <HighlightableText
                                  text={q}
                                  searchTerm={highlightTypicalTerm}
                                />
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {((principle && principle.cases) || []).map((c, idx) => {
                  const caseKey = `${principle.id}-${idx}`;
                  const caseDomId = `case-${slugify(c.id || c.title)}`;
                  const open = !!expandedCases[c.id || c.title];
                  const isHighlighted = highlightedCaseId === caseDomId;
                  const isTop = isTopCase(c);
                  const caseQuestions = getCaseQuestions(c.id, principle.id);
                  const questionsTooltip = caseQuestions.length > 0
                    ? `${language === 'pt' ? 'Responde' : 'Answers'} ${caseQuestions.length} ${language === 'pt' ? 'pergunta(s)' : 'question(s)'}: Q${caseQuestions.map(q => q.number).join(', Q')}\n\n${caseQuestions.slice(0, 3).map(q => `Q${q.number}: ${(q.text || '').substring(0, 80)}...`).join('\n')}`
                    : language === 'pt' ? 'Nenhuma pergunta mapeada' : 'No questions mapped';

                  return (
                    <article
                      key={caseKey}
                      id={caseDomId}
                      className={`bg-gradient-to-br rounded-xl p-0 mb-6 overflow-hidden transition-all duration-300 ${
                        isTop
                          ? 'from-orange-50 to-amber-50 border-4 border-[#FF9900] shadow-lg shadow-orange-200/50 hover:shadow-xl hover:shadow-orange-300/50'
                          : 'from-blue-50 to-sky-50 border-2 border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 hover:border-blue-400'
                      } ${isHighlighted ? 'ring-2 ring-amber-400' : ''}`}
                      title={questionsTooltip}
                    >
                      {/* Header clicável (área ampla) */}
                      <header
                        className={`flex items-center justify-between px-5 py-4 cursor-pointer ${
                          open ? "bg-white/80" : "bg-white/60"
                        } hover:bg-white/90 backdrop-blur-sm`}
                        onClick={(e) => {
                          e.stopPropagation();
                          const hasSearchTerm = !!searchTerm;
                          toggleCase(c.id || c.title, principle.id, hasSearchTerm);
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
                            <span className="px-3 py-1 bg-[#FF9900] text-white text-[10px] font-bold rounded-full shadow-md animate-pulse">
                              ⭐ TOP CASE
                            </span>
                          )}
                          {!isTop && c.isGoodCase && (
                            <span className="px-2.5 py-0.5 bg-blue-500 text-white text-[10px] font-semibold rounded-full shadow-sm">
                              👍 GOOD CASE
                            </span>
                          )}
                          {caseQuestions.length > 0 && (
                            <span 
                              className="px-2.5 py-0.5 bg-purple-500 text-white text-[10px] font-semibold rounded-full shadow-sm cursor-help"
                              title={questionsTooltip}
                            >
                              💬 {caseQuestions.length} {language === 'pt' ? 'Q' : 'Q'}
                            </span>
                          )}
                          <h3 className={`text-lg font-bold ${isTop ? 'text-[#232F3E]' : 'text-slate-900'}`}>
                            <HighlightableText
                              text={getDisplayCaseTitle(c, language)}
                              searchTerm={highlightCaseTerm}
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
                            {/* Header com botão para abrir busca local no STAR */}
                            <div className="flex flex-col gap-2">
                              <button
                                onClick={() => toggleCaseStarSearch(c.id || slugify(c.title))}
                                className="text-left flex items-center justify-between text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 hover:text-blue-600 transition-colors group"
                              >
                                <span className="flex items-center gap-2">
                                  📋 STAR Case
                                  <span className="text-xs text-slate-500 group-hover:text-blue-500">
                                    {caseStarSearchOpen[c.id || slugify(c.title)] ? '🔍 (busca ativa)' : '(clique para buscar)'}
                                  </span>
                                </span>
                                <span className="text-slate-400 text-sm">
                                  {caseStarSearchOpen[c.id || slugify(c.title)] ? '✕' : '🔎'}
                                </span>
                              </button>

                              {/* Caixa de busca local - aparece ao clicar */}
                              {caseStarSearchOpen[c.id || slugify(c.title)] && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fadeIn">
                                  <input
                                    type="text"
                                    placeholder="Buscar em S.T.A.R.L deste case..."
                                    value={caseStarSearchTerms[c.id || slugify(c.title)] || ''}
                                    onChange={(e) => updateCaseStarSearchTerm(c.id || slugify(c.title), e.target.value)}
                                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    autoFocus
                                  />
                                  {caseStarSearchTerms[c.id || slugify(c.title)] && (
                                    <div className="mt-2">
                                      <p className="text-xs text-slate-600">
                                        🔎 Buscando por: <strong>{caseStarSearchTerms[c.id || slugify(c.title)]}</strong>
                                      </p>
                                      {starSectionMatchesTerm(c, language, caseStarSearchTerms[c.id || slugify(c.title)]) ? (
                                        <p className="text-xs text-green-600 font-medium mt-1 bg-green-50 px-2 py-1 rounded">
                                          ✓ Termo encontrado no STAR(L)
                                        </p>
                                      ) : (
                                        <p className="text-xs text-yellow-600 font-medium mt-1 bg-yellow-50 px-2 py-1 rounded">
                                          ⚠️ Termo não encontrado
                                        </p>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>

                            <div className="space-y-3 leading-relaxed text-base">
                              <p>
                                <strong>{t.situation}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].s) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.task}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].t) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.action}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].a) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.result}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].r) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                />
                              </p>
                              <p>
                                <strong>{t.learning}:</strong>{" "}
                                <HighlightableText
                                  text={(c && c[language] && c[language].l) || ""}
                                  searchTerm={caseStarSearchTerms[c.id || slugify(c.title)] || highlightCaseTerm}
                                />
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {/* Header com botão para abrir busca local */}
                            <div className="flex flex-col gap-2">
                              <button
                                onClick={() => toggleCaseFupSearch(c.id || slugify(c.title))}
                                className="text-left flex items-center justify-between text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 hover:text-blue-600 transition-colors group"
                              >
                                <span className="flex items-center gap-2">
                                  ❓ Follow-up Questions
                                  <span className="text-xs text-slate-500 group-hover:text-blue-500">
                                    {caseFupSearchOpen[c.id || slugify(c.title)] ? '🔍 (busca ativa)' : '(clique para buscar)'}
                                  </span>
                                </span>
                                <span className="text-slate-400 text-sm">
                                  {caseFupSearchOpen[c.id || slugify(c.title)] ? '✕' : '🔎'}
                                </span>
                              </button>

                              {/* Caixa de busca local - aparece ao clicar */}
                              {caseFupSearchOpen[c.id || slugify(c.title)] && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fadeIn">
                                  <input
                                    type="text"
                                    placeholder="Buscar nas 10 perguntas deste case..."
                                    value={caseFupSearchTerms[c.id || slugify(c.title)] || ''}
                                    onChange={(e) => updateCaseFupSearchTerm(c.id || slugify(c.title), e.target.value)}
                                    className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    autoFocus
                                  />
                                  {caseFupSearchTerms[c.id || slugify(c.title)] && (
                                    <p className="text-xs text-slate-600 mt-2">
                                      🔎 Buscando por: <strong>{caseFupSearchTerms[c.id || slugify(c.title)]}</strong>
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>

                            {(() => {
                              const allFups = getCaseFups(c);
                              const fups = filterCaseFups(allFups, c.id || slugify(c.title), language);
                              const hasLocalSearch = caseFupSearchTerms[c.id || slugify(c.title)]?.trim();
                              
                              return fups.length > 0 ? (
                                <div>
                                  {hasLocalSearch && (
                                    <p className="text-xs text-green-600 font-medium mb-2 bg-green-50 px-2 py-1 rounded">
                                      ✓ {fups.length} de {allFups.length} pergunta(s) encontrada(s)
                                    </p>
                                  )}
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
                                          <HighlightableText
                                            text={question}
                                            searchTerm={caseFupSearchTerms[c.id || slugify(c.title)] || highlightFupTerm}
                                          />
                                        </div>
                                        {answer && (
                                          <div className="text-slate-600 whitespace-pre-line">
                                            <HighlightableText
                                              text={answer}
                                              searchTerm={caseFupSearchTerms[c.id || slugify(c.title)] || highlightFupTerm}
                                            />
                                          </div>
                                        )}
                                      </li>
                                    );
                                  })}
                                  </ul>
                                </div>
                              ) : hasLocalSearch ? (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                                  <p className="text-sm text-yellow-800">
                                    ⚠️ Nenhuma pergunta encontrada com o termo: <strong>{caseFupSearchTerms[c.id || slugify(c.title)]}</strong>
                                  </p>
                                  <p className="text-xs text-yellow-700 mt-1">
                                    Tente outro termo ou limpe a busca.
                                  </p>
                                </div>
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
function IcebreakerModal({ language: initialLanguage, onClose }) {
  const [language, setLanguage] = useState(initialLanguage);
  const data = icebreakerData[language];
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState({});

  // Pega todas as seções (exceto title, subtitle e questions)
  const sections = Object.keys(data)
    .filter(key => !['title', 'subtitle', 'questions'].includes(key))
    .map(key => ({
      id: key,
      data: data[key]
    }));

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const toggleVersion = (sectionId, versionId) => {
    setSelectedVersion(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === versionId ? null : versionId
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
        className="bg-white rounded-xl shadow-2xl max-w-[95vw] w-full max-h-[90vh] overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 id="icebreaker-title" className="text-2xl font-bold text-white flex items-center gap-2">
              💬 {data.title}
            </h2>
            <p className="text-orange-100 text-sm mt-1">{data.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-white hover:bg-orange-600 rounded-lg px-4 py-2 transition font-semibold flex items-center gap-2"
              aria-label="Toggle language"
            >
              🌐 {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={onClose}
              className="text-white hover:bg-orange-600 rounded-lg px-3 py-2 transition text-xl"
              aria-label="Close icebreaker modal"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="space-y-6">
            {sections.map((section) => {
              const sectionData = section.data;
              const isExpanded = expandedSection === section.id;
              
              return (
                <div
                  key={section.id}
                  className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all"
                >
                  <div
                    className="bg-gradient-to-r from-gray-50 to-white px-5 py-4 cursor-pointer"
                    onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{sectionData.question}</h3>
                        <p className="text-sm text-gray-600 mt-1">{sectionData.category}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                          {sectionData.versions?.length || 0} versões
                        </span>
                        <span className={`text-2xl transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-5 bg-white border-t border-gray-200">
                      <div className="grid md:grid-cols-2 gap-4">
                        {sectionData.versions?.map((version) => {
                          const isVersionExpanded = selectedVersion[section.id] === version.id;
                          
                          return (
                            <div
                              key={version.id}
                              className={`border-2 rounded-lg transition-all ${
                                isVersionExpanded 
                                  ? 'border-orange-400 shadow-lg' 
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div
                                className="p-4 cursor-pointer bg-gradient-to-r from-gray-50 to-white"
                                onClick={() => toggleVersion(section.id, version.id)}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      {version.badge && (
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${version.badgeColor}`}>
                                          {version.badge}
                                        </span>
                                      )}
                                      <h4 className="text-lg font-bold text-gray-800">
                                        {version.title}
                                      </h4>
                                    </div>
                                    {version.context && (
                                      <p className="text-sm text-gray-600 italic">
                                        {version.context}
                                      </p>
                                    )}
                                  </div>
                                  <span className={`ml-3 transition-transform ${isVersionExpanded ? 'rotate-180' : ''}`}>
                                    ▼
                                  </span>
                                </div>

                                {isVersionExpanded && (
                                  <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {version.content.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                                          if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={i} className="text-gray-900">{part.slice(2, -2)}</strong>;
                                          }
                                          return part;
                                        })}
                                      </div>
                                    </div>
                                    
                                    {(version.hook || version.mic_drop) && (
                                      <div className="grid md:grid-cols-2 gap-3 mb-3">
                                        {version.hook && (
                                          <div className="bg-orange-50 rounded-lg p-3">
                                            <p className="font-bold text-orange-700 text-xs mb-1">🎣 Hook</p>
                                            <p className="text-gray-700 text-sm">{version.hook}</p>
                                          </div>
                                        )}
                                        {version.mic_drop && (
                                          <div className="bg-blue-50 rounded-lg p-3">
                                            <p className="font-bold text-blue-700 text-xs mb-1">🎤 Mic Drop</p>
                                            <p className="text-gray-700 text-sm">{version.mic_drop}</p>
                                          </div>
                                        )}
                                      </div>
                                    )}

                                    {version.tags && version.tags.length > 0 && (
                                      <div className="flex flex-wrap gap-2">
                                        {version.tags.map(tag => (
                                          <span
                                            key={tag}
                                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                                          >
                                            #{tag}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
          >
            {language === "pt" ? "Fechar" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: My Questions Modal ----------
function MyQuestionsModal({ language: initialLanguage, onClose }) {
  const [language, setLanguage] = useState(initialLanguage);
  const data = myQuestionsData[language];
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (idx) => {
    setExpandedCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
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
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-white hover:bg-white/20 rounded-lg px-4 py-2 transition font-semibold flex items-center gap-2"
              aria-label="Toggle language"
            >
              🌐 {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg px-3 py-2 transition text-xl"
              aria-label="Close my questions modal"
            >
              ✕
            </button>
          </div>
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
    if (running) id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => id && clearInterval(id);
  }, [running]);

  const isNegative = seconds < 0;
  const absSeconds = Math.abs(seconds);
  const minutes = Math.floor(absSeconds / 60);
  const secs = absSeconds % 60;
  const timeDisplay = `${isNegative ? '-' : ''}${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  // Alert state: last minute (0-59 seconds)
  const isLastMinute = seconds > 0 && seconds <= 60;
  const isTimeUp = seconds <= 0;

  return (
    <div
      id="timerBox"
      className={`w-full h-full px-4 border-2 rounded-lg flex items-center justify-between gap-3 transition-all ${
        isTimeUp
          ? 'border-red-500 bg-red-50 animate-pulse'
          : isLastMinute
          ? 'border-amber-500 bg-amber-50 shadow-lg shadow-amber-200'
          : 'border-slate-200 bg-white'
      }`}
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        className={`font-mono text-2xl font-bold transition-colors ${
          isTimeUp
            ? 'text-red-600'
            : isLastMinute
            ? 'text-amber-700'
            : 'text-slate-800'
        }`}
        aria-label={`${minutes} minutes ${secs} seconds`}
      >
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
