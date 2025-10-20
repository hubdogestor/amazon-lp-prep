import { Search, Home, Menu, X, Sun, Moon } from "lucide-react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import CaseSearchResults from "../search/CaseSearchResults.jsx";
import FupSearchResults from "../search/FupSearchResults.jsx";
import TypicalQuestionSearchResults from "../search/TypicalQuestionSearchResults.jsx";
import HeaderTimer from "./HeaderTimer.jsx";
import { slugify } from "../../utils/textUtils.js";

export default function Header({
  language,
  setLanguage,
  searchTerm,
  setSearchTerm,
  questionSearch,
  setQuestionSearch,
  typicalQuestionSearch,
  setTypicalQuestionSearch,
  showTopCases,
  setShowTopCases,
  setShowIcebreaker,
  setShowMyQuestions,
  selectedLooping,
  setSelectedLooping,
  caseSearchResults,
  fupSearchResults,
  typicalQuestionSearchResults,
  handleCaseSearchResultSelect,
  handleFupSearchResultSelect,
  handleTypicalSearchResultSelect,
  toggleUsedCase,
  usedCases,
  toggleUsedQuestion,
  usedQuestions,
  getDisplayCaseTitle,
  getDisplayName,
  clearExpanded,
  clearHighlights,
  setSelectedPrinciple,
  debouncedQuestionSearch,
  debouncedTypicalQuestionSearch,
  loopingGroups,
  onHomeClick,
  isMobileDrawerOpen,
  setIsMobileDrawerOpen,
  isDarkMode,
  setIsDarkMode,
}) {
  const { t } = useTranslation();
  return (
    <header
      id="stickyHeader"
      className="sticky top-0 z-30 border-b border-slate-200 bg-gradient-to-r from-white to-slate-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:from-slate-800 dark:to-slate-700 dark:border-slate-700"
      role="banner"
    >
      <div className="max-w-[1600px] mx-auto px-6 py-3">
        <div className="flex gap-3 items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
            className="md:hidden p-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
            aria-label={isMobileDrawerOpen ? "Fechar menu" : "Abrir menu"}
            title={isMobileDrawerOpen ? "Fechar menu lateral" : "Abrir menu lateral"}
          >
            {isMobileDrawerOpen ? (
              <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            )}
          </button>

          {/* Home Button */}
          <button
            onClick={onHomeClick}
            className="p-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 active:scale-95 relative overflow-hidden"
            aria-label="Home"
            title="Voltar ao início"
          >
            <Home className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            <span className="absolute inset-0 bg-white/20 dark:bg-white/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200"></span>
          </button>

          {/* Separator */}
          <div className="h-8 w-px bg-slate-300 dark:bg-slate-600 mx-1"></div>

          {/* Search Group */}
          <div className="flex gap-2 items-center flex-1 min-w-0">
            {/* Busca por palavras */}
            <div className="flex-1 min-w-0 max-w-[140px]">
              <div id="kSearch" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 z-10" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t('kSearch')}
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
                    clearHighlights();
                  }}
                  className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 text-center"
                  aria-label={t('kSearch')}
                  aria-expanded={!!searchTerm && caseSearchResults.length > 0}
                  aria-controls="case-dropdown"
                />
                {searchTerm && caseSearchResults.length > 0 && (
                  <div
                    id="case-dropdown"
                    role="listbox"
                    aria-live="polite"
                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 rounded-lg max-h-96 overflow-auto"
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

            {/* Busca por FUPs */}
            <div className="flex-1 min-w-0 max-w-[140px]">
              <div id="kFup" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 z-10" aria-hidden="true" />
                <input
                  type="search"
                  placeholder={t('kFup')}
                  value={questionSearch}
                  onChange={(e) => setQuestionSearch(e.target.value)}
                  onFocus={() => {
                    setSearchTerm("");
                    setTypicalQuestionSearch("");
                    clearHighlights();
                  }}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 text-center"
                  aria-label={t('kFup')}
                  aria-expanded={!!questionSearch}
                  aria-controls="fup-dropdown"
                />
                {questionSearch && (
                  <div
                    id="fup-dropdown"
                    role="listbox"
                    aria-live="polite"
                    className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 rounded-lg max-h-72 overflow-auto"
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
                      <div className="px-3 py-2 text-slate-500 dark:text-slate-400 text-sm">{t('noResult')}</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Busca por Perguntas Típicas + Looping Selector */}
            <div className="flex-1 min-w-0">
              <div className="flex gap-2">
                {/* Looping Selector */}
                <div className="relative">
                  <select
                    value={selectedLooping || ""}
                    onChange={(e) => setSelectedLooping(e.target.value || null)}
                    className="h-full px-2 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-medium"
                    aria-label="Select looping group"
                    title={t('filterLoopingGroup')}
                  >
                    <option value="">🗃️</option>
                    {loopingGroups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search Box */}
                <div id="kTypical" className="relative flex-1 min-w-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 z-10" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder={t('kTypical')}
                    value={typicalQuestionSearch}
                    onChange={(e) => setTypicalQuestionSearch(e.target.value)}
                    onFocus={() => {
                      setSearchTerm("");
                      setQuestionSearch("");
                      clearHighlights();
                    }}
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 text-center"
                    aria-label={t('kTypical')}
                    aria-expanded={!!typicalQuestionSearch}
                    aria-controls="typical-dropdown"
                  />
                  {typicalQuestionSearch && (
                    <div
                      id="typical-dropdown"
                      role="listbox"
                      aria-live="polite"
                      className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 rounded-lg max-h-72 overflow-auto"
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
                        <div className="px-3 py-2 text-slate-500 dark:text-slate-400 text-sm">{t('noResult')}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-8 w-px bg-slate-300 dark:bg-slate-600 mx-1"></div>

          {/* Actions Group */}
          <div className="flex gap-2 items-center flex-shrink-0">
            {/* Top Cases */}
            <button
              id="topCasesBtn"
              className={clsx(
                "px-2 py-2 text-xs rounded-lg border transition whitespace-nowrap",
                {
                  "bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-600 dark:text-yellow-200": showTopCases,
                  "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700": !showTopCases,
                }
              )}
              onClick={(e) => {
                e.stopPropagation();
                clearExpanded();
                clearHighlights();
                setSearchTerm("");
                setSelectedPrinciple("all");
                setShowTopCases((v) => !v);
              }}
              aria-label={showTopCases ? t('hideTopCases') : t('showTopCases')}
              aria-pressed={showTopCases}
              title={t('showOnlyTopCases')}
            >
              🎯 {t('topCases')}
            </button>

            {/* Icebreaker */}
            <button
              id="icebreakerBtn"
              className="px-2 py-2 text-xs rounded-lg border transition whitespace-nowrap bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
              onClick={(e) => {
                e.stopPropagation();
                setShowIcebreaker(true);
              }}
              aria-label={t('openIcebreakerQuestions')}
              title={t('icebreakerQuestionsTitle')}
            >
              💬 {t('icebreaker')}
            </button>

            {/* Minhas Perguntas */}
            <button
              id="myQuestionsBtn"
              className="px-2 py-2 text-xs rounded-lg border transition whitespace-nowrap bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
              onClick={(e) => {
                e.stopPropagation();
                setShowMyQuestions(true);
              }}
              aria-label={t('openMyQuestions')}
              title={t('myQuestionsTitle')}
            >
              🤔 {t('myQuestions')}
            </button>
          </div>

          {/* Separator */}
          <div className="h-8 w-px bg-slate-300 dark:bg-slate-600 mx-1"></div>

          {/* Controls Group */}
          <div className="flex gap-2 items-center flex-shrink-0">
            {/* Timer */}
            <div className="min-w-[140px]">
              <HeaderTimer t={t} />
            </div>

            {/* Idioma */}
            <div id="langBox" className="flex gap-1" role="group" aria-label="Language selection">
              <button
                className={clsx(
                  "px-2 py-2 text-sm rounded-lg border",
                  {
                    "bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-100": language === "pt",
                    "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-300": language !== "pt",
                  }
                )}
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
                className={clsx(
                  "px-2 py-2 text-sm rounded-lg border",
                  {
                    "bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-100": language === "en",
                    "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-300": language !== "en",
                  }
                )}
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

            {/* Tema */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:hover:bg-slate-700 transition-colors"
              aria-label={isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
              title={isDarkMode ? "Modo claro" : "Modo escuro"}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
