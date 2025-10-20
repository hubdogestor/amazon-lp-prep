import { Circle, CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { memo } from "react";
import { HighlightableText } from "../HighlightableText.jsx";
import CaseCard from "../cases/CaseCard.jsx";
import { slugify } from "../../utils/textUtils.js";

// Memoized component for typical questions
const TypicalQuestionItem = memo(({
  q,
  qIdx,
  principle,
  isQuestionUsed,
  isHighlighted,
  hasCase,
  tooltip,
  toggleTooltip,
  onClick,
  onToggleUsed,
  highlightTypicalTerm,
  language
}) => (
  <div key={qIdx} className="relative">
    <button
      id={`typical-q-${principle.id}-${qIdx}`}
      onClick={onClick}
      disabled={!hasCase}
      className={clsx(
        "w-full px-3 py-2.5 border rounded-lg text-xs transition-all duration-300 flex items-center justify-center text-center min-h-[60px] font-medium leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800",
        {
          "bg-white/90 border-blue-200 text-[#232F3E] hover:bg-blue-50 hover:shadow-md hover:scale-105 cursor-pointer dark:bg-slate-800 dark:border-blue-600 dark:text-slate-100 dark:hover:bg-blue-900": hasCase,
          "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed dark:bg-slate-700 dark:border-slate-600 dark:text-slate-500": !hasCase,
          "bg-yellow-200 font-bold shadow-md ring-2 ring-yellow-400 dark:bg-yellow-800 dark:ring-yellow-500": isHighlighted,
          "opacity-80": isQuestionUsed,
        }
      )}
      title={tooltip}
    >
      <span className="flex items-center gap-1.5">
        {hasCase && <span className="text-green-600 font-bold text-base flex-shrink-0">✓</span>}
        <HighlightableText
          text={q}
          searchTerm={highlightTypicalTerm}
          className={isQuestionUsed ? 'line-through decoration-slate-400 decoration-2 text-slate-500' : ''}
        />
      </span>
    </button>
    <button
      type="button"
      onClick={onToggleUsed}
      className={clsx(
        "absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border text-slate-500 shadow-sm transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800",
        {
          "border-green-300 bg-green-50 text-green-600 dark:border-green-600 dark:bg-green-900 dark:text-green-400": isQuestionUsed,
          "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-400": !isQuestionUsed,
        }
      )}
      title={isQuestionUsed ? (language === 'pt' ? 'Remover marca de pergunta usada' : 'Unmark question as used') : (language === 'pt' ? 'Marcar pergunta como usada' : 'Mark question as used')}
    >
      <span className="sr-only">{toggleTooltip}</span>
      {isQuestionUsed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
    </button>
  </div>
));

TypicalQuestionItem.displayName = 'TypicalQuestionItem';

export default function MainContent({
  isSearching,
  filteredPrinciples,
  getDisplayName,
  language,
  typicalQuestions,
  usedQuestions,
  highlightedTypicalQuestionId,
  setHighlightedTypicalQuestion,
  getBestCaseOption,
  getDisplayCaseTitle,
  navigateToMappedCase,
  highlightTypicalTerm,
  toggleUsedQuestion,
  expandedCases,
  highlightedCaseId,
  isTopCase,
  usedCases,
  getCaseQuestions,
  copyPromptToClipboard,
  toggleCaseStarSearch,
  updateCaseStarSearchTerm,
  toggleCaseFupSearch,
  updateCaseFupSearchTerm,
  searchTerm,
  caseStarSearchOpen,
  caseFupSearchOpen,
  caseFupSearchTerms,
  caseStarSearchTerms,
  highlightCaseTerm,
  highlightFupTerm,
  highlightedFupId,
  copiedCaseId,
  toggleUsedCase,
  handleCaseHeaderToggle,
  t,
  getCaseFups,
  filterCaseFups,
  starSectionMatchesTerm,
}) {
  // Skeleton component for loading states
  const SkeletonCard = () => (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 mb-6 animate-pulse border border-slate-200 dark:border-slate-600">
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-3/4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
      </div>
    </div>
  );

  return (
    <main id="main-content" className="col-span-12 xl:col-span-10 space-y-6" role="main">
      {/* Hidden h1 for screen readers */}
      <h1 className="sr-only">Amazon Leadership Principles Preparation Tool</h1>

      {isSearching && (
        <div className="text-center py-4 text-slate-500 dark:text-slate-400" role="status" aria-live="polite">
          Buscando...
        </div>
      )}

      {!filteredPrinciples || filteredPrinciples.length === 0 ? (
        // Show skeletons when loading
        <div className="space-y-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        (filteredPrinciples || []).map((principle) => (
        <section key={principle.id} className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">{getDisplayName(principle, language)}</h2>
            {principle.principle && (
              <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                {language === "en" ? (principle.principle.description_en || principle.principle.description) : principle.principle.description}
              </p>
            )}

            {/* Perguntas Típicas - Amazon Style (azul) - Layout tipo tabela */}
            {typicalQuestions[principle.id] && (
              <div className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-4 shadow-sm dark:from-slate-900 dark:to-slate-950 dark:border-slate-700">
                <h3 className="text-sm font-bold text-[#232F3E] dark:text-slate-100 mb-3 uppercase tracking-wide flex items-center gap-2">
                  💭 {language === "pt" ? "Perguntas Típicas do Entrevistador" : "Typical Interviewer Questions"}
                  <span className="text-xs font-normal text-gray-500 ml-2">
                    ({language === "pt" ? "Clique para ver o case que responde" : "Click to see the case that answers"})
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                      <TypicalQuestionItem
                        key={qIdx}
                        q={q}
                        qIdx={qIdx}
                        principle={principle}
                        isQuestionUsed={isQuestionUsed}
                        isHighlighted={isHighlighted}
                        hasCase={hasCase}
                        tooltip={tooltip}
                        toggleTooltip={toggleTooltip}
                        highlightTypicalTerm={highlightTypicalTerm}
                        language={language}
                        onClick={() => {
                          if (hasCase) {
                            navigateToMappedCase(principle.id, qIdx);
                          }
                          // Destacar a pergunta clicada permanentemente
                          setHighlightedTypicalQuestion(questionId);
                        }}
                        onToggleUsed={(event) => {
                          event.stopPropagation();
                          toggleUsedQuestion(questionStorageId);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {((principle && principle.cases) || []).map((c, _idx) => {
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
              <CaseCard
                key={caseId}
                caseData={c}
                principle={principle}
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
                onCopyPrompt={() => copyPromptToClipboard(c, principle, caseSearchKey)}
                onToggleCaseStarSearch={() => toggleCaseStarSearch(caseSearchKey)}
                onUpdateCaseStarSearchTerm={(value) => updateCaseStarSearchTerm(caseSearchKey, value)}
                onToggleCaseFupSearch={() => toggleCaseFupSearch(caseSearchKey)}
                onUpdateCaseFupSearchTerm={(value) => updateCaseFupSearchTerm(caseSearchKey, value)}
                searchTerm={searchTerm}
              />
            );
          })}
        </section>
      ))
      )}
    </main>
  );
}
