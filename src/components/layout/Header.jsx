import { Search } from "lucide-react";
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
}) {
  const { t } = useTranslation();
  return (
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
                className="w-full pl-10 pr-4 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
                aria-label={t('kSearch')}
                aria-expanded={!!searchTerm && caseSearchResults.length > 0}
                aria-controls="case-dropdown"
              />
              {searchTerm && caseSearchResults.length > 0 && (
                <div
                  id="case-dropdown"
                  role="listbox"
                  aria-live="polite"
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
                placeholder={t('kFup')}
                value={questionSearch}
                onChange={(e) => setQuestionSearch(e.target.value)}
                onFocus={() => {
                  setSearchTerm("");
                  setTypicalQuestionSearch("");
                  clearHighlights();
                }}
                className="w-full pl-10 pr-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white text-center"
                aria-label={t('kFup')}
                aria-expanded={!!questionSearch}
                aria-controls="fup-dropdown"
              />
              {questionSearch && (
                <div
                  id="fup-dropdown"
                  role="listbox"
                  aria-live="polite"
                  className="absolute z-20 mt-2 left-0 right-0 min-w-[800px] bg-white shadow-lg border border-slate-200 rounded-lg max-h-72 overflow-auto"
                >
                    <div className="px-3 py-2 text-slate-500 text-sm">{t('noResult')}</div>
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
                  title={t('filterLoopingGroup')}
                >
                  <option value="">{t('all')}</option>
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
                  placeholder={t('kTypical')}
                  value={typicalQuestionSearch}
                  onChange={(e) => setTypicalQuestionSearch(e.target.value)}
                  onFocus={() => {
                    setSearchTerm("");
                    setQuestionSearch("");
                    clearHighlights();
                  }}
                  className="w-full pl-10 pr-3 py-3 text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white text-center"
                  aria-label={t('kTypical')}
                  aria-expanded={!!typicalQuestionSearch}
                  aria-controls="typical-dropdown"
                />
                {typicalQuestionSearch && (
                  <div
                    id="typical-dropdown"
                    role="listbox"
                    aria-live="polite"
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
                      <div className="px-3 py-2 text-slate-500 text-sm">{t('noResult')}</div>
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
              className={clsx(
                "w-full px-3 py-3 text-base rounded-lg border transition",
                {
                  "bg-yellow-100 border-yellow-300 text-yellow-800": showTopCases,
                  "bg-white border-slate-200 text-slate-700 hover:bg-slate-50": !showTopCases,
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
              aria-label={t('openIcebreakerQuestions')}
              title={t('icebreakerQuestionsTitle')}
            >
              💬 {t('icebreaker')}
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
              aria-label={t('openMyQuestions')}
              title={t('myQuestionsTitle')}
            >
              🤔 {t('myQuestions')}
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
                className={clsx(
                  "flex-1 px-3 py-3 text-base rounded-lg border",
                  {
                    "bg-slate-900 text-white": language === "pt",
                    "bg-white text-slate-700": language !== "pt",
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
                  "flex-1 px-3 py-3 text-base rounded-lg border",
                  {
                    "bg-slate-900 text-white": language === "en",
                    "bg-white text-slate-700": language !== "en",
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
          </div>
        </div>
      </div>
    </header>
  );
}
