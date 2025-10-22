import StarSection from "./StarSection.jsx";
import FupSection from "./FupSection.jsx";

export default function CaseCardBody({
  caseData,
  language,
  caseSearchKey,
  isStarSearchOpen,
  starSearchTerm,
  isFupSearchOpen,
  fupSearchTerm,
  renderStarSearchStatus,
  renderFupList,
  onToggleCaseStarSearch,
  onUpdateCaseStarSearchTerm,
  onToggleCaseFupSearch,
  onUpdateCaseFupSearchTerm,
  highlightCaseTerm,
  usedStarTextClass,
}) {
  return (
    <div
      id={`case-content-${caseSearchKey}`}
      className="px-6 pb-6 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-700 dark:text-slate-200 bg-white/40 dark:bg-slate-900/60 backdrop-blur-sm"
    >
      <StarSection
        caseData={caseData}
        language={language}
        isStarSearchOpen={isStarSearchOpen}
        starSearchTerm={starSearchTerm}
        renderStarSearchStatus={renderStarSearchStatus}
        onToggleCaseStarSearch={onToggleCaseStarSearch}
        onUpdateCaseStarSearchTerm={onUpdateCaseStarSearchTerm}
        highlightCaseTerm={highlightCaseTerm}
        usedStarTextClass={usedStarTextClass}
      />

      <FupSection
        isFupSearchOpen={isFupSearchOpen}
        fupSearchTerm={fupSearchTerm}
        renderFupList={renderFupList}
        onToggleCaseFupSearch={onToggleCaseFupSearch}
        onUpdateCaseFupSearchTerm={onUpdateCaseFupSearchTerm}
      />
    </div>
  );
}
