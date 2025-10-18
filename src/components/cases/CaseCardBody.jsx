import { HighlightableText } from "../HighlightableText.jsx";
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
      className="px-6 pb-6 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-700 bg-white/40 backdrop-blur-sm"
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
        caseData={caseData}
        language={language}
        caseSearchKey={caseSearchKey}
        isFupSearchOpen={isFupSearchOpen}
        fupSearchTerm={fupSearchTerm}
        renderFupList={renderFupList}
        onToggleCaseFupSearch={onToggleCaseFupSearch}
        onUpdateCaseFupSearchTerm={onUpdateCaseFupSearchTerm}
      />
    </div>
  );
}
