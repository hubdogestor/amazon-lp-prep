import { useMemo, useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import typicalQuestions from "./data/typicalQuestions.js";
import { usePrinciplesData } from "./hooks/usePrinciplesData.js";
import { useSearch } from "./hooks/useSearch.js";
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
import { X } from "lucide-react";
const IcebreakerModal = lazy(() => import("./components/modals/IcebreakerModal.jsx"));
const MyQuestionsModal = lazy(() => import("./components/modals/MyQuestionsModal.jsx"));
import { usePersistentFlagMap } from "./hooks/usePersistentFlagMap.js";
import Header from "./components/layout/Header.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import MainContent from "./components/layout/MainContent.jsx";
import { loopingGroups } from "./config/loopingGroups.js";

// ---------- Labels & Ordem ----------
const getDisplayName = getPrincipleDisplayName;
const sortPrinciples = sortPrinciplesByLanguage;

// ---------- i18n ----------
const STORAGE_KEYS = {
  usedCases: "alp-used-cases",
  usedQuestions: "alp-used-questions",
  usedIcebreakers: "alp-used-icebreakers",
};

// ---------- App ----------

// Helper function for robust scrolling
function scrollToElementWhenReady(elementId, options, timeout = 3000) {
  const startTime = Date.now();
  const { block = 'center', highlightSetter } = options;

  function scroll() {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block });
      if (highlightSetter) {
        highlightSetter(elementId);
      }
    } else if (Date.now() - startTime < timeout) {
      requestAnimationFrame(scroll);
    }
  }
  requestAnimationFrame(scroll);
}

export default function App() {
  const { t, i18n } = useTranslation();
  const [selectedPrinciple, setSelectedPrinciple] = useState("all");
  const [expandedCases, setExpandedCases] = useState({});
  const [selectedLooping, setSelectedLooping] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Aplicar tema escuro/claro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);


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

  // Function to clear all highlights and search terms
  const clearAllHighlights = useCallback(() => {
    clearHighlights();
    setHighlightCaseTerm("");
    setHighlightFupTerm("");
    setHighlightTypicalTerm("");
  }, [clearHighlights, setHighlightCaseTerm, setHighlightFupTerm, setHighlightTypicalTerm]);

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
  const [showTopCases, setShowTopCases] = useState(false);
  const [showIcebreaker, setShowIcebreaker] = useState(false);
  const [showMyQuestions, setShowMyQuestions] = useState(false);
  const [language, setLanguage] = useState('pt');
  const [isSearching, setIsSearching] = useState(false);
  const [copiedCaseId, setCopiedCaseId] = useState(null);

  const rawPrinciplesData = usePrinciplesData();
  const principlesData = useMemo(() => {
    return sortPrinciples(rawPrinciplesData, language);
  }, [rawPrinciplesData, language]);

  // Hook para funções de casos
  const {
    getCaseBaseTitle,
    getDisplayCaseTitle,
    getBestCaseOption,
    getCaseQuestions,
  } = useCaseHelpers(principlesData, language);

  const {
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
  } = useSearch(principlesData, language, selectedLooping);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSearchTerm("");
        setQuestionSearch("");
        setTypicalQuestionSearch("");
        clearAllHighlights();
        setShowTopCases(false);
        setSelectedLooping(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [clearAllHighlights, setSearchTerm, setQuestionSearch, setTypicalQuestionSearch, setShowTopCases, setSelectedLooping]);

  // Clear searches on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if click is outside search dropdowns and input fields
      const isInsideSearch = e.target.closest('#kSearch, #kFup, #kTypical, #case-dropdown, #fup-dropdown, #typical-dropdown');

      if (!isInsideSearch) {
        setSearchTerm("");
        setQuestionSearch("");
        setTypicalQuestionSearch("");
        clearAllHighlights();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [clearAllHighlights, setSearchTerm, setQuestionSearch, setTypicalQuestionSearch]);

  const clearExpanded = useCallback(() => {
    setExpandedCases({});
  }, []);

  const handleCaseHeaderToggle = useCallback((caseId, principleId, caseDomId, hasSearchTerm) => {
    if (hasSearchTerm && searchTerm) {
      setHighlightCaseTerm(searchTerm);
    }

    if (!hasSearchTerm) {
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

    if (hasSearchTerm) {
      setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
    }
  }, [searchTerm, setHighlightCaseTerm, setSearchTerm, setQuestionSearch, setHighlightedCase]);

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
      prompt = `# ${t('prompt.interviewContext')} - ${t('prompt.amazonLp')}

## ${t('prompt.principle')}: ${getDisplayName(principleData, lang)}

${principleData.principle ? `**${t('prompt.principleDescription')}:** ${principleData.principle.description}\n` : ''}

## ${t('prompt.case')}: ${getDisplayCaseTitle(caseData, lang)}

### ${t('prompt.starFramework')}:

**${t('situation')}:**
${caseContent.s || ''}

**${t('task')}:**
${caseContent.t || ''}

**${t('action')}:**
${caseContent.a || ''}

**${t('result')}:**
${caseContent.r || ''}

**${t('learning')}:**
${caseContent.l || ''}
`;

      if (fups.length > 0) {
        prompt += `\n### ${t('prompt.followupQuestions')}:\n\n`;
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

**${t('prompt.instructions')}:**
${t('prompt.instructionsText', { principleName: getDisplayName(principleData, lang) })}`;

    } else {
      prompt = `# ${t('prompt.interviewContext')} - ${t('prompt.amazonLp')}

## ${t('prompt.principle')}: ${getDisplayName(principleData, lang)}

${principleData.principle ? `**${t('prompt.principleDescription')}:** ${principleData.principle.description_en || principleData.principle.description}\n` : ''}

## ${t('prompt.case')}: ${getDisplayCaseTitle(caseData, lang)}

### ${t('prompt.starFramework')}:

**${t('situation')}:**
${caseContent.s || ''}

**${t('task')}:**
${caseContent.t || ''}

**${t('action')}:**
${caseContent.a || ''}

**${t('result')}:**
${caseContent.r || ''}

**${t('learning')}:**
${caseContent.l || ''}
`;

      if (fups.length > 0) {
        prompt += `\n### ${t('prompt.followupQuestions')}:\n\n`;
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

**${t('prompt.instructions')}:**
${t('prompt.instructionsText', { principleName: getDisplayName(principleData, lang) })}`;
    }

    return prompt;
  }, [getDisplayCaseTitle, t]);

  const copyPromptToClipboard = useCallback(async (caseData, principleData, caseIdentifier) => {
    const prompt = generatePrompt(caseData, principleData, language);

    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedCaseId(caseIdentifier);
      setTimeout(() => setCopiedCaseId(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
      alert(t('copyError'));
    }
  }, [generatePrompt, i18n.language, t]);

  // Navegar para o case mapeado a partir de uma pergunta típica
  const navigateToMappedCase = useCallback((lpId, questionIndex, questionId = null) => {
    const option = getBestCaseOption(lpId, questionIndex + 1);
    if (!option || !option.caseData) {
      return;
    }

    const caseId = option.caseData.id;

    setExpandedCases({ [caseId]: true });
    setSelectedPrinciple(lpId);

    if (questionId) {
      scrollToElementWhenReady(questionId, { block: 'start', highlightSetter: setHighlightedTypicalQuestion });
    }

    setTimeout(() => {
      const caseDomId = `case-${slugify(caseId)}`;
      const elem = document.getElementById(caseDomId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setHighlightedCase(caseDomId, 2000);
      }
    }, 100);
  }, [getBestCaseOption, setExpandedCases, setSelectedPrinciple, scrollToElementWhenReady, setHighlightedTypicalQuestion, slugify, setHighlightedCase]);

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

  // Handler para seleção de resultado de busca de cases
  const handleCaseSearchResultSelect = useCallback((result, savedSearchWords) => {
    const { p, c } = result;
    const caseId = c.id || c.title;
    
    setSelectedPrinciple(p.id);
    setShowTopCases(false);
    setQuestionSearch("");
    setTypicalQuestionSearch("");
    clearExpanded();
    setExpandedCases({ [caseId]: true });
    setHighlightCaseTerm(searchTerm);
    setSearchTerm("");

    const caseDomId = `case-${slugify(caseId)}`;
    scrollToElementWhenReady(caseDomId, {
      block: 'start',
      highlightSetter: setHighlightedCase
    });
  }, [searchTerm, clearExpanded, setHighlightedCase, setHighlightCaseTerm, setSearchTerm, setQuestionSearch, setTypicalQuestionSearch, setSelectedPrinciple, setShowTopCases, setExpandedCases]);

  // Handler para seleção de resultado de busca de FUPs
  const handleFupSearchResultSelect = useCallback((result, savedSearchWords) => {
    const { principle, caseData, originalIdx } = result;
    const caseId = caseData.id || caseData.title;

    setSelectedPrinciple(principle.id);
    setShowTopCases(false);
    setSearchTerm("");
    setTypicalQuestionSearch("");
    clearExpanded();
    setExpandedCases({ [caseId]: true });
    setHighlightFupTerm(questionSearch);
    setQuestionSearch("");

    const anchorId = `fup-${principle.id}-${slugify(caseId)}-${originalIdx}`;
    scrollToElementWhenReady(anchorId, {
      highlightSetter: setHighlightedFup
    });
  }, [questionSearch, clearExpanded, setHighlightedFup, setHighlightFupTerm, setQuestionSearch, setSearchTerm, setTypicalQuestionSearch, setSelectedPrinciple, setShowTopCases, setExpandedCases]);

  // Handler para seleção de resultado de busca de perguntas típicas
  const handleTypicalSearchResultSelect = useCallback((result, savedSearchWords) => {
    const { principle, idx } = result;

    // Define o termo de highlight com as palavras pesquisadas
    setHighlightTypicalTerm(savedSearchWords.join(' '));

    // Navega para a pergunta sem expandir o case
    setSelectedPrinciple(principle.id);
    setShowTopCases(false);

    // Scroll para a pergunta
    const questionId = `typical-q-${principle.id}-${idx}`;
    scrollToElementWhenReady(questionId, { 
      block: 'start', 
      highlightSetter: () => setHighlightedTypicalQuestion(questionId)
    });

    // Limpa o estado da busca
    setTypicalQuestionSearch("");
    setSearchTerm("");
    setQuestionSearch("");
    
  }, [setHighlightTypicalTerm, setSelectedPrinciple, setShowTopCases, scrollToElementWhenReady, setHighlightedTypicalQuestion, setTypicalQuestionSearch, setSearchTerm, setQuestionSearch]);

  // Handler para botão Home
  const handleHomeClick = useCallback(() => {
    setSearchTerm("");
    setQuestionSearch("");
    setTypicalQuestionSearch("");
    setHighlightCaseTerm("");
    setHighlightFupTerm("");
    setHighlightTypicalTerm("");
    setSelectedPrinciple("all");
    setShowTopCases(false);
    setSelectedLooping(null);
    clearExpanded();
    clearHighlights();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [clearExpanded, clearHighlights]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Skip Links for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Pular para conteúdo principal
      </a>
      <a
        href="#sidebar"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-48 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Pular para navegação
      </a>

      {/* Cabeçalho Fixo */}
      <Header
        language={i18n.language}
        setLanguage={i18n.changeLanguage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        questionSearch={questionSearch}
        setQuestionSearch={setQuestionSearch}
        typicalQuestionSearch={typicalQuestionSearch}
        setTypicalQuestionSearch={setTypicalQuestionSearch}
        showTopCases={showTopCases}
        setShowTopCases={setShowTopCases}
        setShowIcebreaker={setShowIcebreaker}
        setShowMyQuestions={setShowMyQuestions}
        selectedLooping={selectedLooping}
        setSelectedLooping={setSelectedLooping}
        caseSearchResults={caseSearchResults}
        fupSearchResults={fupSearchResults}
        typicalQuestionSearchResults={typicalQuestionSearchResults}
        handleCaseSearchResultSelect={handleCaseSearchResultSelect}
        handleFupSearchResultSelect={handleFupSearchResultSelect}
        handleTypicalSearchResultSelect={handleTypicalSearchResultSelect}
        toggleUsedCase={toggleUsedCase}
        usedCases={usedCases}
        toggleUsedQuestion={toggleUsedQuestion}
        usedQuestions={usedQuestions}
        getDisplayCaseTitle={getDisplayCaseTitle}
        getDisplayName={getDisplayName}
        clearExpanded={clearExpanded}
        clearHighlights={clearHighlights}
        setSelectedPrinciple={setSelectedPrinciple}
        debouncedQuestionSearch={debouncedQuestionSearch}
        debouncedTypicalQuestionSearch={debouncedTypicalQuestionSearch}
        loopingGroups={loopingGroups}
        onHomeClick={handleHomeClick}
        isMobileDrawerOpen={isMobileDrawerOpen}
        setIsMobileDrawerOpen={setIsMobileDrawerOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Modal Icebreaker */}
      {showIcebreaker && (
        <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div className="text-white">Carregando...</div></div>}>
          <IcebreakerModal
            language={i18n.language}
            onClose={() => setShowIcebreaker(false)}
            usedIcebreakers={usedIcebreakers}
            onToggleUsed={toggleUsedIcebreaker}
          />
        </Suspense>
      )}

      {/* Modal Minhas Perguntas */}
      {showMyQuestions && (
        <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div className="text-white">Carregando...</div></div>}>
          <MyQuestionsModal
            language={i18n.language}
            onClose={() => setShowMyQuestions(false)}
            usedQuestions={usedQuestions}
            onToggleQuestion={toggleUsedQuestion}
          />
        </Suspense>
      )}

      {/* Conteúdo - Otimizado para widescreen */}
      <div className="max-w-[2400px] mx-auto px-8 pt-6">
        {/* Mobile Drawer Overlay */}
        {isMobileDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 border-b border-slate-200">
            <button
              onClick={() => setIsMobileDrawerOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>
          </div>
          <div className="p-4">
            <Sidebar
              language={i18n.language}
              t={t}
              selectedPrinciple={selectedPrinciple}
              setSelectedPrinciple={setSelectedPrinciple}
              setShowTopCases={setShowTopCases}
              setSearchTerm={setSearchTerm}
              setQuestionSearch={setQuestionSearch}
              setTypicalQuestionSearch={setTypicalQuestionSearch}
              clearHighlights={clearHighlights}
              clearExpanded={clearExpanded}
              principlesData={principlesData}
              getDisplayName={getDisplayName}
              onCloseMobileDrawer={() => setIsMobileDrawerOpen(false)}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <div className="hidden md:block md:col-span-2">
            <Sidebar
              language={i18n.language}
              t={t}
              selectedPrinciple={selectedPrinciple}
              setSelectedPrinciple={setSelectedPrinciple}
              setShowTopCases={setShowTopCases}
              setSearchTerm={setSearchTerm}
              setQuestionSearch={setQuestionSearch}
              setTypicalQuestionSearch={setTypicalQuestionSearch}
              clearHighlights={clearHighlights}
              clearExpanded={clearExpanded}
              principlesData={principlesData}
              getDisplayName={getDisplayName}
            />
          </div>

          {/* Main */}
          <div className="col-span-12 md:col-span-10">
            <MainContent
              isSearching={isSearching}
              filteredPrinciples={filteredPrinciples}
              getDisplayName={getDisplayName}
              language={i18n.language}
              typicalQuestions={typicalQuestions}
              usedQuestions={usedQuestions}
            highlightedTypicalQuestionId={highlightedTypicalQuestionId}
            setHighlightedTypicalQuestion={setHighlightedTypicalQuestion}
            getBestCaseOption={getBestCaseOption}
              getDisplayCaseTitle={getDisplayCaseTitle}
              navigateToMappedCase={navigateToMappedCase}
              highlightTypicalTerm={highlightTypicalTerm}
              toggleUsedQuestion={toggleUsedQuestion}
              expandedCases={expandedCases}
              highlightedCaseId={highlightedCaseId}
              isTopCase={isTopCase}
              usedCases={usedCases}
              getCaseQuestions={getCaseQuestions}
              copyPromptToClipboard={copyPromptToClipboard}
              toggleCaseStarSearch={toggleCaseStarSearch}
              updateCaseStarSearchTerm={updateCaseStarSearchTerm}
              toggleCaseFupSearch={toggleCaseFupSearch}
              updateCaseFupSearchTerm={updateCaseFupSearchTerm}
              searchTerm={searchTerm}
              caseStarSearchOpen={caseStarSearchOpen}
              caseFupSearchOpen={caseFupSearchOpen}
              caseFupSearchTerms={caseFupSearchTerms}
              caseStarSearchTerms={caseStarSearchTerms}
              highlightCaseTerm={highlightCaseTerm}
              highlightFupTerm={highlightFupTerm}
              highlightedFupId={highlightedFupId}
              copiedCaseId={copiedCaseId}
              toggleUsedCase={toggleUsedCase}
              handleCaseHeaderToggle={handleCaseHeaderToggle}
              t={t}
              getCaseFups={getCaseFups}
              filterCaseFups={filterCaseFups}
              starSectionMatchesTerm={starSectionMatchesTerm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Subcomponent: Icebreaker Modal ----------
// ---------- Subcomponent: Header Timer ----------
