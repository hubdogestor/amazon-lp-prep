import { useMemo, useState, useEffect, useCallback } from "react";
import { Search, Circle, CheckCircle2 } from "lucide-react";
import typicalQuestions from "./data/typicalQuestions.js";
import { usePrinciplesData } from "./hooks/usePrinciplesData.js";
import { HighlightableText } from "./components/HighlightableText.jsx";
import { useDebounce } from "./hooks/useDebounce.js";
import { useCaseHelpers } from "./hooks/useCaseHelpers.js";
import { useHighlight } from "./hooks/useHighlight.js";
import {
  slugify,
  norm
} from "./utils/textUtils.js";
import {
  isTopCase,
  getCaseFups,
} from "./utils/caseUtils.js";
import {
  getDisplayName as getPrincipleDisplayName,
  sortPrinciples as sortPrinciplesByLanguage,
} from "./utils/principleLabels.js";
import {
  FUP_SCROLL_DELAY,
  CASE_EXPAND_DELAY,
  DEBOUNCE_SEARCH_DELAY,
} from "./constants.js";
import "./App.css";
import IcebreakerModal from "./components/modals/IcebreakerModal.jsx";
import MyQuestionsModal from "./components/modals/MyQuestionsModal.jsx";
import { usePersistentFlagMap } from "./hooks/usePersistentFlagMap.js";
import CaseCard from "./components/cases/CaseCard.jsx";
import CaseSearchResults from "./components/search/CaseSearchResults.jsx";
import FupSearchResults from "./components/search/FupSearchResults.jsx";
import TypicalQuestionSearchResults from "./components/search/TypicalQuestionSearchResults.jsx";
import HeaderTimer from "./components/layout/HeaderTimer.jsx";
import { loopingGroups, getPrinciplesForLooping } from "./config/loopingGroups.js";

// ---------- Labels & Ordem ----------
const getDisplayName = getPrincipleDisplayName;
const sortPrinciples = sortPrinciplesByLanguage;

// ---------- i18n ----------
const STORAGE_KEYS = {
  usedCases: "alp-used-cases",
  usedQuestions: "alp-used-questions",
  usedIcebreakers: "alp-used-icebreakers",
};

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
  const [copiedCaseId, setCopiedCaseId] = useState(null);
  const [selectedLooping, setSelectedLooping] = useState(null); // null = "All"

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
  const {
    value: usedCases,
    toggle: toggleUsedCase,
  } = usePersistentFlagMap(STORAGE_KEYS.usedCases);
  const {
    value: usedQuestions,
    toggle: toggleUsedQuestion,
  } = usePersistentFlagMap(STORAGE_KEYS.usedQuestions);
  const {
    value: usedIcebreakers,
    toggle: toggleUsedIcebreaker,
  } = usePersistentFlagMap(STORAGE_KEYS.usedIcebreakers);

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

  const clearExpanded = useCallback(() => {
    setExpandedCases({});
  }, []);

  const handleCaseHeaderToggle = useCallback((caseId, principleId, caseDomId, hasSearchTerm) => {
    toggleCase(caseId, principleId, hasSearchTerm);
    if (hasSearchTerm) {
      setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
    }
  }, [toggleCase, setHighlightedCase]);

  const handleCaseSearchResultSelect = useCallback((result, savedSearchWords) => {
    const { p, c } = result;
    setSelectedPrinciple(p.id);
    setShowTopCases(false);
    setSearchTerm("");
    clearExpanded();
    clearHighlights();

    setTimeout(() => {
      setExpandedCases({ [c.id || c.title]: true });
      setHighlightCaseTerm(savedSearchWords.join(" "));
      setHighlightFupTerm("");
      setHighlightTypicalTerm("");

      const caseDomId = `case-${slugify(c.id || c.title)}`;
      setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
    }, 0);
  }, [clearExpanded, clearHighlights, setExpandedCases, setHighlightCaseTerm, setHighlightFupTerm, setHighlightTypicalTerm, setHighlightedCase, setSelectedPrinciple, setShowTopCases, setSearchTerm]);

  const handleFupSearchResultSelect = useCallback((payload, savedSearchWords) => {
    const { principle: p, caseData: c, originalIdx } = payload;
    setSelectedPrinciple(p.id);
    setShowTopCases(false);
    setSearchTerm("");
    clearExpanded();
    clearHighlights();

    setTimeout(() => {
      setExpandedCases({ [c.id || c.title]: true });
      setQuestionSearch("");
      setHighlightCaseTerm("");
      setHighlightFupTerm(savedSearchWords.join(" "));
      setHighlightTypicalTerm("");

      const anchorId = `fup-${p.id}-${slugify(c.id || c.title)}-${originalIdx}`;
      setHighlightedFup(anchorId, FUP_SCROLL_DELAY);
    }, 0);
  }, [clearExpanded, clearHighlights, setExpandedCases, setHighlightCaseTerm, setHighlightFupTerm, setHighlightTypicalTerm, setHighlightedFup, setQuestionSearch, setSearchTerm, setSelectedPrinciple, setShowTopCases]);

  const handleTypicalSearchResultSelect = useCallback((payload, savedSearchWords) => {
    const { principle: p, idx } = payload;
    setSelectedPrinciple(p.id);
    setShowTopCases(false);
    setSearchTerm("");
    clearExpanded();
    clearHighlights();

    setTimeout(() => {
      setTypicalQuestionSearch("");
      setHighlightCaseTerm("");
      setHighlightFupTerm("");
      setHighlightTypicalTerm(savedSearchWords.join(" "));
      const anchorId = `typical-q-${p.id}-${idx}`;
      setHighlightedTypicalQuestion(anchorId, 120);
    }, 0);
  }, [clearExpanded, clearHighlights, setHighlightCaseTerm, setHighlightFupTerm, setHighlightTypicalTerm, setHighlightedTypicalQuestion, setSearchTerm, setSelectedPrinciple, setShowTopCases, setTypicalQuestionSearch]);

  const t = TEXTS[language];
  const rawPrinciplesData = usePrinciplesData();
  const principlesData = useMemo(() => {
    return sortPrinciples(rawPrinciplesData, language);
  }, [rawPrinciplesData, language]);

  const {
    getCaseBaseTitle,
    getDisplayCaseTitle,
    getBestCaseOption,
    getCaseQuestions,
  } = useCaseHelpers(principlesData, language);

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

  const generatePrompt = useCallback((caseData, principleData, lang) => {
    const isPortuguese = lang === 'pt';
    const caseContent = caseData[lang] || {};
    const fups = getCaseFups(caseData);

    let prompt = '';

    if (isPortuguese) {
      prompt = `# CONTEXTO DE ENTREVISTA - LEADERSHIP PRINCIPLES AMAZON

## Princípio: ${getDisplayName(principleData, lang)}

${principleData.principle ? `**Descrição do Princípio:** ${principleData.principle.description}\n` : ''}

## Case: ${getDisplayCaseTitle(caseData, lang)}

### STAR Framework:

**Situação (Situation):**
${caseContent.s || ''}

**Tarefa (Task):**
${caseContent.t || ''}

**Ação (Action):**
${caseContent.a || ''}

**Resultado (Result):**
${caseContent.r || ''}

**Aprendizado (Learning):**
${caseContent.l || ''}
`;

      if (fups.length > 0) {
        prompt += `\n### Follow-up Questions (FUPs):\n\n`;
        fups.forEach((fup, idx) => {
          const question = fup.q || '';
          const answer = fup.a || '';
          prompt += `**${idx + 1}. ${question}**\n`;
          if (answer) {
            prompt += `${answer}\n\n`;
          } else {
            prompt += '\n';
          }
        });
      }

      prompt += `\n---

**INSTRUÇÕES:**
Estou em uma entrevista para a Amazon e acabei de compartilhar o case acima. Na próxima mensagem, vou enviar a pergunta que o entrevistador me fez. Por favor, me ajude a elaborar uma resposta natural, autêntica e que demonstre os Leadership Principles da Amazon, especialmente "${getDisplayName(principleData, lang)}".

Responda como se você fosse eu, mantendo consistência com os detalhes do case compartilhado acima. Seja específico, use exemplos concretos e demonstre aprendizado.`;

    } else {
      prompt = `# INTERVIEW CONTEXT - AMAZON LEADERSHIP PRINCIPLES

## Principle: ${getDisplayName(principleData, lang)}

${principleData.principle ? `**Principle Description:** ${principleData.principle.description_en || principleData.principle.description}\n` : ''}

## Case: ${getDisplayCaseTitle(caseData, lang)}

### STAR Framework:

**Situation:**
${caseContent.s || ''}

**Task:**
${caseContent.t || ''}

**Action:**
${caseContent.a || ''}

**Result:**
${caseContent.r || ''}

**Learning:**
${caseContent.l || ''}
`;

      if (fups.length > 0) {
        prompt += `\n### Follow-up Questions (FUPs):\n\n`;
        fups.forEach((fup, idx) => {
          const question = fup.q_en || fup.q || '';
          const answer = fup.a_en || fup.a || '';
          prompt += `**${idx + 1}. ${question}**\n`;
          if (answer) {
            prompt += `${answer}\n\n`;
          } else {
            prompt += '\n';
          }
        });
      }

      prompt += `\n---

**INSTRUCTIONS:**
I'm in an interview for Amazon and I've just shared the case above. In my next message, I'll send the question the interviewer asked me. Please help me craft a natural, authentic response that demonstrates Amazon's Leadership Principles, especially "${getDisplayName(principleData, lang)}".

Respond as if you were me, maintaining consistency with the details from the case shared above. Be specific, use concrete examples, and demonstrate learning.`;
    }

    return prompt;
  }, [getDisplayCaseTitle]);

  const copyPromptToClipboard = useCallback(async (caseData, principleData, caseKey) => {
    const prompt = generatePrompt(caseData, principleData, language);

    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedCaseId(caseKey);
      setTimeout(() => setCopiedCaseId(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
      alert('Não foi possível copiar para a área de transferência.');
    }
  }, [generatePrompt, language]);

  // Navegar para o case mapeado a partir de uma pergunta típica
  const navigateToMappedCase = useCallback((lpId, questionIndex) => {
    const option = getBestCaseOption(lpId, questionIndex + 1);
    if (!option || !option.caseData) {
      return;
    }

    const caseId = option.caseData.id;

    setExpandedCases({ [caseId]: true });
    setSelectedPrinciple(lpId);

    setTimeout(() => {
      const caseDomId = `case-${slugify(caseId)}`;
      const elem = document.getElementById(caseDomId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setHighlightedCase(caseDomId, 2000);
      }
    }, 100);
  }, [getBestCaseOption, setHighlightedCase]);

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
                    <CaseSearchResults
                      results={caseSearchResults}
                      language={language}
                      onSelect={handleCaseSearchResultSelect}
                      onToggleUsed={(id) => toggleUsedCase(id)}
                      isCaseUsed={(id) => !!usedCases[id]}
                      getDisplayCaseTitle={getDisplayCaseTitle}
                      getDisplayName={getDisplayName}
                      getCaseStorageId={(caseItem) => caseItem.id || slugify(caseItem.title || "")}
                    />
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
                    {fupSearchResults.length > 0 ? (
                      <FupSearchResults
                        results={fupSearchResults}
                        language={language}
                        searchTerm={debouncedQuestionSearch}
                        onSelect={handleFupSearchResultSelect}
                        getDisplayName={getDisplayName}
                        getDisplayCaseTitle={getDisplayCaseTitle}
                      />
                    ) : (
                      <div className="px-3 py-2 text-slate-500 text-sm">{t.noResult}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Busca por Perguntas Típicas + Looping Selector (col-span-2) */}
            <div className="col-span-2">
              <div className="flex gap-2">
                {/* Looping Selector */}
                <div className="relative">
                  <select
                    value={selectedLooping || ""}
                    onChange={(e) => setSelectedLooping(e.target.value || null)}
                    className="h-full px-2 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white font-medium"
                    aria-label="Select looping group"
                    title={language === "pt" ? "Filtrar perguntas por grupo de looping" : "Filter questions by looping group"}
                  >
                    <option value="">{language === "pt" ? "Todos" : "All"}</option>
                    {loopingGroups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search Box */}
                <div id="kTypical" className="relative flex-1">
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
                      {typicalQuestionSearchResults.length > 0 ? (
                        <TypicalQuestionSearchResults
                          results={typicalQuestionSearchResults}
                          language={language}
                          searchTerm={debouncedTypicalQuestionSearch}
                          onSelect={handleTypicalSearchResultSelect}
                          isQuestionUsed={(id) => !!usedQuestions[id]}
                          onToggleQuestion={toggleUsedQuestion}
                          getDisplayName={getDisplayName}
                        />
                      ) : (
                        <div className="px-3 py-2 text-slate-500 text-sm">{t.noResult}</div>
                      )}
                    </div>
                  )}
                </div>
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
          usedIcebreakers={usedIcebreakers}
          onToggleUsed={toggleUsedIcebreaker}
        />
      )}

      {/* Modal Minhas Perguntas */}
      {showMyQuestions && (
        <MyQuestionsModal
          language={language}
          onClose={() => setShowMyQuestions(false)}
          usedQuestions={usedQuestions}
          onToggleQuestion={toggleUsedQuestion}
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
                          const questionStorageId = `${principle.id}-${qIdx}`;
                          const isQuestionUsed = !!usedQuestions[questionStorageId];
                          const isHighlighted = highlightedTypicalQuestionId === questionId;
                          const bestOption = getBestCaseOption(principle.id, qIdx + 1);
                          const hasCase = Boolean(bestOption);
                          const caseScore = bestOption?.score ?? 0;
                          const mappedCaseTitle = bestOption?.caseData
                            ? getDisplayCaseTitle(bestOption.caseData, language)
                            : "";
                          const tooltip = (() => {
                            if (!hasCase) {
                              return language === "pt" ? "Sem case mapeado" : "No case mapped";
                            }
                            const actionLabel = language === "pt" ? "Clique para ver o case" : "Click to see case";
                            if (mappedCaseTitle) {
                              return `${actionLabel} (${mappedCaseTitle} - score: ${caseScore})`;
                            }
                            return `${actionLabel} (score: ${caseScore})`;
                          })();
                          const toggleTooltip = isQuestionUsed
                            ? (language === 'pt' ? 'Remover marca de pergunta usada' : 'Unmark question as used')
                            : (language === 'pt' ? 'Marcar pergunta como usada' : 'Mark question as used');

                          return (
                            <div key={qIdx} className="relative">
                              <button
                                id={questionId}
                                onClick={() => {
                                  if (hasCase) {
                                    navigateToMappedCase(principle.id, qIdx);
                                  }
                                }}
                                disabled={!hasCase}
                                className={`w-full px-3 py-2 border rounded text-xs transition-all duration-300 flex items-center justify-center text-center min-h-[60px] ${
                                  hasCase
                                    ? 'bg-white/80 border-blue-200 text-[#232F3E] hover:bg-blue-50 hover:shadow-md hover:scale-105 cursor-pointer'
                                    : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                                } ${
                                  isHighlighted ? 'bg-yellow-200 font-bold shadow-md ring-2 ring-yellow-400' : ''
                                } ${isQuestionUsed ? 'opacity-80' : ''}`}
                                title={tooltip}
                              >
                                <span className="flex items-center gap-1">
                                  {hasCase && <span className="text-green-600 font-bold">V</span>}
                                  <HighlightableText
                                    text={q}
                                    searchTerm={highlightTypicalTerm}
                                    className={isQuestionUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-500' : ''}
                                  />
                                </span>
                              </button>
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  toggleUsedQuestion(questionStorageId);
                                }}
                                className={`absolute -top-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full border text-slate-500 shadow-sm transition ${
                                  isQuestionUsed
                                    ? 'border-green-300 bg-green-50 text-green-600'
                                    : 'border-slate-200 bg-white hover:bg-slate-50'
                                }`}
                                title={toggleTooltip}
                                aria-label={toggleTooltip}
                                aria-pressed={isQuestionUsed}
                              >
                                {isQuestionUsed ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {((principle && principle.cases) || []).map((c, idx) => {
                  const caseKey = `${principle.id}-${idx}`;
                  const caseId = c.id || c.title;
                  const caseSlug = slugify(caseId);
                  const caseDomId = `case-${caseSlug}`;
                  const caseSearchKey = c.id || caseSlug;
                  const open = !!expandedCases[caseId];
                  const isHighlighted = highlightedCaseId === caseDomId;
                  const isTop = isTopCase(c);
                  const caseStorageId = c.id || caseSlug;
                  const isCaseUsed = !!usedCases[caseStorageId];
                  const caseQuestions = getCaseQuestions(c.id, principle.id);
                  const questionSummaryLabel = language === 'pt' ? 'Responde' : 'Answers';
                  const questionCountLabel = language === 'pt' ? 'pergunta(s)' : 'question(s)';
                  const questionIdList = caseQuestions.map((q) => `Q${q.number}`).join(', ');
                  const questionDetails = caseQuestions.slice(0, 3).map((q) => {
                    const preview = (q.text || '').substring(0, 80);
                    const scoreLabel = q.score != null ? ` (score: ${q.score})` : '';
                    return `Q${q.number}${scoreLabel}: ${preview}...`;
                  }).join('\n');
                  const questionsTooltip = caseQuestions.length > 0
                    ? `${questionSummaryLabel} ${caseQuestions.length} ${questionCountLabel}: ${questionIdList}\n\n${questionDetails}`
                    : language === 'pt' ? 'Nenhuma pergunta mapeada' : 'No questions mapped';
                  const toggleCaseTooltip = isCaseUsed
                    ? (language === 'pt' ? 'Remover marca de case usado' : 'Unmark case as used')
                    : (language === 'pt' ? 'Marcar case como usado' : 'Mark case as used');

                  return (
                    // TODO: Ajustar a prop "key" dentro de CaseCard.jsx se o aviso persistir.
                    <CaseCard
                      key={caseKey}
                      caseData={c}
                      principle={principle}
                      caseKey={caseKey}
                      caseDomId={caseDomId}
                      caseSlug={caseSlug}
                      caseSearchKey={caseSearchKey}
                      isTop={isTop}
                      isHighlighted={isHighlighted}
                      open={open}
                      isCaseUsed={isCaseUsed}
                      language={language}
                      caseQuestions={caseQuestions}
                      questionsTooltip={questionsTooltip}
                      highlightCaseTerm={highlightCaseTerm}
                      highlightFupTerm={highlightFupTerm}
                      highlightedFupId={highlightedFupId}
                      caseStarSearchOpen={caseStarSearchOpen}
                      caseStarSearchTerms={caseStarSearchTerms}
                      caseFupSearchOpen={caseFupSearchOpen}
                      caseFupSearchTerms={caseFupSearchTerms}
                      copiedCaseId={copiedCaseId}
                      toggleCaseTooltip={toggleCaseTooltip}
                      texts={t}
                      getDisplayCaseTitle={getDisplayCaseTitle}
                      getCaseFups={getCaseFups}
                      filterCaseFups={filterCaseFups}
                      starSectionMatchesTerm={starSectionMatchesTerm}
                      onToggleCase={(hasSearchTerm) => handleCaseHeaderToggle(caseId, principle.id, caseDomId, hasSearchTerm)}
                      onToggleUsedCase={() => toggleUsedCase(caseStorageId)}
                      onCopyPrompt={() => copyPromptToClipboard(c, principle, caseKey)}
                      onToggleCaseStarSearch={() => toggleCaseStarSearch(caseSearchKey)}
                      onUpdateCaseStarSearchTerm={(value) => updateCaseStarSearchTerm(caseSearchKey, value)}
                      onToggleCaseFupSearch={() => toggleCaseFupSearch(caseSearchKey)}
                      onUpdateCaseFupSearchTerm={(value) => updateCaseFupSearchTerm(caseSearchKey, value)}
                      searchTerm={searchTerm}
                    />
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
// ---------- Subcomponent: Header Timer ----------
