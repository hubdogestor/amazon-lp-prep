import { useMemo, useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
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
import IcebreakerModal from "./components/modals/IcebreakerModal.jsx";
import MyQuestionsModal from "./components/modals/MyQuestionsModal.jsx";
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
export default function App() {
  const { t, i18n } = useTranslation();
  const [selectedPrinciple, setSelectedPrinciple] = useState("all");
  const [expandedCases, setExpandedCases] = useState({});


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
  const [showTopCases, setShowTopCases] = useState(false);
  const [showIcebreaker, setShowIcebreaker] = useState(false);
  const [showMyQuestions, setShowMyQuestions] = useState(false);
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

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

  const handleSearchResultSelect = useCallback((type, payload, savedSearchWords) => {
    const { principle, caseData, originalIdx, idx } = payload;
    const p = principle || payload.p;
    const c = caseData || payload.c;

    setSelectedPrinciple(p.id);
    setShowTopCases(false);
    setSearchTerm("");
    clearExpanded();
    clearHighlights();

    setTimeout(() => {
      if (type === 'case' || type === 'fup') {
        setExpandedCases({ [c.id || c.title]: true });
      }

      if (type === 'fup') {
        setQuestionSearch("");
      }

      if (type === 'typical') {
        setTypicalQuestionSearch("");
      }

      setHighlightCaseTerm(type === 'case' ? savedSearchWords.join(" ") : "");
      setHighlightFupTerm(type === 'fup' ? savedSearchWords.join(" ") : "");
      setHighlightTypicalTerm(type === 'typical' ? savedSearchWords.join(" ") : "");

      if (type === 'case') {
        const caseDomId = `case-${slugify(c.id || c.title)}`;
        setHighlightedCase(caseDomId, CASE_EXPAND_DELAY);
      } else if (type === 'fup') {
        const anchorId = `fup-${p.id}-${slugify(c.id || c.title)}-${originalIdx}`;
        setHighlightedFup(anchorId, FUP_SCROLL_DELAY);
      } else if (type === 'typical') {
        const anchorId = `typical-q-${p.id}-${idx}`;
        setHighlightedTypicalQuestion(anchorId, 120);
      }
    }, 0);
  }, [clearExpanded, clearHighlights, setExpandedCases, setHighlightCaseTerm, setHighlightFupTerm, setHighlightTypicalTerm, setHighlightedCase, setHighlightedFup, setHighlightedTypicalQuestion, setSelectedPrinciple, setShowTopCases, setSearchTerm, setQuestionSearch, setTypicalQuestionSearch]);

  const handleCaseSearchResultSelect = useCallback((result, savedSearchWords) => {
    handleSearchResultSelect('case', result, savedSearchWords);
  }, [handleSearchResultSelect]);

  const handleFupSearchResultSelect = useCallback((payload, savedSearchWords) => {
    handleSearchResultSelect('fup', payload, savedSearchWords);
  }, [handleSearchResultSelect]);

  const handleTypicalSearchResultSelect = useCallback((payload, savedSearchWords) => {
    handleSearchResultSelect('typical', payload, savedSearchWords);
  }, [handleSearchResultSelect]);

  const rawPrinciplesData = usePrinciplesData();
  const principlesData = useMemo(() => {
    return sortPrinciples(rawPrinciplesData, language);
  }, [rawPrinciplesData, language]);

  const [isSearching, setIsSearching] = useState(false);
  const [copiedCaseId, setCopiedCaseId] = useState(null);
  const [selectedLooping, setSelectedLooping] = useState(null);

  const {
    value: usedIcebreakers,
    toggle: toggleUsedIcebreaker,
  } = usePersistentFlagMap(STORAGE_KEYS.usedIcebreakers);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
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
      />

      {/* Modal Icebreaker */}
      {showIcebreaker && (
        <IcebreakerModal
          language={i18n.language}
          onClose={() => setShowIcebreaker(false)}
          usedIcebreakers={usedIcebreakers}
          onToggleUsed={toggleUsedIcebreaker}
        />
      )}

      {/* Modal Minhas Perguntas */}
      {showMyQuestions && (
        <MyQuestionsModal
          language={i18n.language}
          onClose={() => setShowMyQuestions(false)}
          usedQuestions={usedQuestions}
          onToggleQuestion={toggleUsedQuestion}
        />
      )}

      {/* Conteúdo - Otimizado para widescreen */}
      <div className="max-w-[2400px] mx-auto px-8 pt-6">
        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar */}
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

          {/* Main */}
          <MainContent
            isSearching={isSearching}
            filteredPrinciples={filteredPrinciples}
            getDisplayName={getDisplayName}
            language={i18n.language}
            typicalQuestions={typicalQuestions}
            usedQuestions={usedQuestions}
            highlightedTypicalQuestionId={highlightedTypicalQuestionId}
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
  );
}

// ---------- Subcomponent: Icebreaker Modal ----------
// ---------- Subcomponent: Header Timer ----------
