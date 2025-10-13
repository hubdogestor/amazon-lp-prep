import { HighlightableText } from "../HighlightableText.jsx";

export default function FupSearchResults({
  results,
  language,
  searchTerm,
  onSelect,
  getDisplayName,
  getDisplayCaseTitle,
}) {
  if (!results || results.length === 0) {
    return null;
  }

  return results.map(({ p, c, f, originalIdx }, index) => (
    <div
      key={`${p.id}-${c.id || c.title}-${originalIdx}-${index}`}
      role="option"
      tabIndex={0}
      className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm focus:bg-slate-100 focus:outline-none"
      onClick={() => {
        const searchWords = (searchTerm || "").trim().split(/\s+/).filter((word) => word.length >= 3);
        onSelect({ principle: p, caseData: c, followUp: f, originalIdx }, searchWords);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
    >
      <div className="font-medium text-slate-800">
        <HighlightableText text={language === "en" ? (f.q_en || f.q) : f.q} searchTerm={searchTerm} />
      </div>
      <div className="text-slate-500">
        {getDisplayName(p, language)} - {getDisplayCaseTitle(c, language)}
      </div>
    </div>
  ));
}