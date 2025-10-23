import { memo } from "react";
import CaseCardHeader from "./CaseCardHeader.jsx";
import CaseCardBody from "./CaseCardBody.jsx";
import { HighlightableText } from "../HighlightableText.jsx";

const CaseCard = memo(function CaseCard({
  caseData,
  principle,

  caseDomId,
  caseSlug,
  caseSearchKey,
  isTop,
  isHighlighted,
  open,
  isCaseUsed,
  language,
  caseQuestions,
  questionsTooltip,
  highlightCaseTerm,
  highlightFupTerm,
  highlightedFupId,
  caseStarSearchOpen,
  caseStarSearchTerms,
  caseFupSearchOpen,
  caseFupSearchTerms,
  copiedCaseId,
  toggleCaseTooltip,
  texts,
  getDisplayCaseTitle,
  getCaseFups,
  filterCaseFups,
  starSectionMatchesTerm,
  onToggleCase,
  onToggleUsedCase,
  onCopyPrompt,
  onToggleCaseStarSearch,
  onUpdateCaseStarSearchTerm,
  onToggleCaseFupSearch,
  onUpdateCaseFupSearchTerm,
  searchTerm,
}) {
  const usedStarTextClass = isCaseUsed ? "line-through decoration-slate-400 decoration-2 text-slate-500" : "";
  const isStarSearchOpen = !!caseStarSearchOpen[caseSearchKey];
  const starSearchTerm = caseStarSearchTerms[caseSearchKey] || "";
  const isFupSearchOpen = !!caseFupSearchOpen[caseSearchKey];
  const fupSearchTerm = caseFupSearchTerms[caseSearchKey] || "";
  const hasSearchTerm = Boolean(searchTerm);

  return (
    <article
      id={caseDomId}
      className={`rounded-2xl p-0 mb-2 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
        isCaseUsed
          ? "from-slate-100 to-slate-200 border-2 border-slate-400 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/60 hover:border-slate-500 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700 dark:shadow-slate-900/50"
          : isTop
          ? "from-orange-50 via-amber-50 to-yellow-50 border-4 border-[#FF9900] shadow-xl shadow-orange-300/60 hover:shadow-2xl hover:shadow-orange-400/70 hover:scale-[1.01] dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950 dark:border-orange-500 dark:shadow-orange-900/60"
          : "from-blue-50 via-sky-50 to-cyan-50 border-2 border-blue-400 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/60 hover:border-blue-500 hover:scale-[1.005] dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 dark:border-blue-700 dark:shadow-blue-900/50"
      } ${isHighlighted ? "ring-4 ring-amber-400 ring-offset-2 dark:ring-amber-500" : ""} ${isCaseUsed ? "opacity-75" : ""}`}
      title={questionsTooltip}
    >
      <CaseCardHeader
        caseData={caseData}
        isTop={isTop}
        isCaseUsed={isCaseUsed}
        language={language}
        caseQuestions={caseQuestions}
        questionsTooltip={questionsTooltip}
        highlightCaseTerm={highlightCaseTerm}
        open={open}
        copiedCaseId={copiedCaseId}
        caseSearchKey={caseSearchKey}
        toggleCaseTooltip={toggleCaseTooltip}
        texts={texts}
        getDisplayCaseTitle={getDisplayCaseTitle}
        onToggleCase={onToggleCase}
        onToggleUsedCase={onToggleUsedCase}
        onCopyPrompt={onCopyPrompt}
        hasSearchTerm={hasSearchTerm}
      />

      {open && (
        <CaseCardBody
          caseData={caseData}
          language={language}
          texts={texts}
          caseSearchKey={caseSearchKey}
          isStarSearchOpen={isStarSearchOpen}
          starSearchTerm={starSearchTerm}
          isFupSearchOpen={isFupSearchOpen}
          fupSearchTerm={fupSearchTerm}
          renderStarSearchStatus={() => {
            if (!starSearchTerm) return null;
            const matches = starSectionMatchesTerm(caseData, language, starSearchTerm);
            return (
              <div className="mt-2">
                <p className="text-xs text-slate-600">
                  🔎 Buscando por: <strong>{starSearchTerm}</strong>
                </p>
                {matches ? (
                  <p className="text-xs text-green-600 font-medium mt-1 bg-green-50 px-2 py-1 rounded">
                    Termo encontrado no STAR(L)
                  </p>
                ) : (
                  <p className="text-xs text-yellow-600 font-medium mt-1 bg-yellow-50 px-2 py-1 rounded">
                    ⚠️ Termo não encontrado
                  </p>
                )}
              </div>
            );
          }}
          renderFupList={() => {
            const allFups = getCaseFups(caseData);
            const fups = filterCaseFups(allFups, caseSearchKey, language);
            const hasLocalSearch = fupSearchTerm.trim().length > 0;

            if (fups.length > 0) {
              return (
                <div>
                  {hasLocalSearch && (
                    <p className="text-xs text-green-600 font-medium mb-2 bg-green-50 px-2 py-1 rounded">
                      ✅ {fups.length} de {allFups.length} pergunta(s) encontrada(s)
                    </p>
                  )}
                  <div className="grid gap-4">
                    {fups.map((f, fIdx) => {
                      const originalFupIndex = allFups.indexOf(f);
                      const fupId = `fup-${principle.id}-${caseSlug}-${originalFupIndex}`;
                      const question = language === "en" ? (f.q_en || f.q) : f.q;
                      const answer = language === "en" ? (f.a_en || f.a) : f.a;
                      const questionForKey = question || "";
                      const keySource = (f.id || f.slug || questionForKey.slice(0, 24) || `${fIdx}`).toString().trim();
                      const sanitizedKey = keySource
                        .normalize('NFKD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/[^a-zA-Z0-9-_]/g, '-')
                        .replace(/-+/g, '-')
                        .replace(/^-|-$/g, '') || `${fIdx}`;
                      const keyPrefix = (caseSlug || `case-${principle.id || 'case'}`);
                      const fKey = `${keyPrefix}-${sanitizedKey}`;
                      const isFupHighlighted = highlightedFupId === fupId;

                      return (
                        <div
                          key={fKey}
                          id={fupId}
                          className={`bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow ${
                            isFupHighlighted ? "ring-4 ring-amber-400 ring-offset-2" : ""
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xl flex-shrink-0">❓</span>
                            <div className="flex-1 min-w-0 space-y-2">
                              <div className="font-semibold text-sm uppercase tracking-wide text-purple-700 dark:text-purple-400">
                                <HighlightableText
                                  text={question}
                                  searchTerm={fupSearchTerm || highlightFupTerm}
                                  className={isCaseUsed ? "line-through decoration-slate-400 decoration-2 text-slate-500" : ""}
                                />
                              </div>
                              {answer && (
                                <div className={`text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line`}>
                                  <HighlightableText
                                    text={answer}
                                    searchTerm={fupSearchTerm || highlightFupTerm}
                                    className={isCaseUsed ? "line-through decoration-slate-300 decoration-2 text-slate-500" : ""}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            if (hasLocalSearch) {
              return (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800">
                    ⚠️ Nenhuma pergunta encontrada com o termo: <strong>{fupSearchTerm}</strong>
                  </p>
                  <p className="text-xs text-yellow-700 mt-1">Tente outro termo ou limpe a busca.</p>
                </div>
              );
            }

            return <div className="text-slate-500 italic">Nenhuma pergunta disponível.</div>;
          }}
          onToggleCaseStarSearch={onToggleCaseStarSearch}
          onUpdateCaseStarSearchTerm={onUpdateCaseStarSearchTerm}
          onToggleCaseFupSearch={onToggleCaseFupSearch}
          onUpdateCaseFupSearchTerm={onUpdateCaseFupSearchTerm}
          highlightCaseTerm={highlightCaseTerm}
          usedStarTextClass={usedStarTextClass}
        />
      )}
    </article>
  );
});

CaseCard.displayName = 'CaseCard';

export default CaseCard;