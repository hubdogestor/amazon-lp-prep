import { CheckCircle2, Circle } from "lucide-react";

export default function CaseSearchResults({
  results,
  language,
  onSelect,
  onToggleUsed,
  isCaseUsed,
  getDisplayCaseTitle,
  getDisplayName,
}) {
  if (!results || results.length === 0) {
    return null;
  }

  return results.map((result, idx) => {
    const { p, c, snippet, matches, searchWords } = result;
    const caseStorageId = c.id || c.slug || c.title;
    const used = isCaseUsed(caseStorageId);
    const toggleTooltip = used
      ? language === "pt" ? "Remover marca de case usado" : "Unmark case as used"
      : language === "pt" ? "Marcar case como usado" : "Mark case as used";

    const renderSnippet = () => {
      const sortedMatches = [...(matches || [])].sort((a, b) => a.start - b.start);
      const parts = [];
      let lastEnd = 0;

      sortedMatches.forEach((match, i) => {
        if (match.start > lastEnd) {
          parts.push(
            <span key={`text-${i}`} className="text-slate-600">
              {snippet.substring(lastEnd, match.start)}
            </span>
          );
        }
        parts.push(
          <span key={`match-${i}`} className="bg-amber-200 font-semibold">
            {snippet.substring(match.start, match.start + match.length)}
          </span>
        );
        lastEnd = match.start + match.length;
      });

      if (lastEnd < snippet.length) {
        parts.push(
          <span key="text-end" className="text-slate-600">
            {snippet.substring(lastEnd)}
          </span>
        );
      }

      return parts;
    };

    return (
      <div
        key={`case-result-${idx}`}
        role="option"
        tabIndex={0}
        className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0 focus:bg-slate-100 focus:outline-none"
        onClick={() => {
          const savedSearchWords = (searchWords || []).filter((word) => word.length >= 3);
          onSelect(result, savedSearchWords);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.currentTarget.click();
          }
        }}
      >
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <div className="text-sm mb-1 text-slate-600">{renderSnippet()}</div>
            <div className="text-xs text-slate-500 mt-1">
              <span className={used ? "line-through decoration-slate-400 decoration-2 text-slate-500" : "font-medium text-slate-700"}>
                {getDisplayCaseTitle(c, language)}
              </span>
              <span className="text-slate-400"> - </span>
              {getDisplayName(p, language)}
            </div>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggleUsed(caseStorageId);
            }}
            className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border text-slate-500 transition ${
              used ? "border-green-300 bg-green-50 text-green-600" : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
            title={toggleTooltip}
            aria-label={toggleTooltip}
            aria-pressed={used}
          >
            {used ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
          </button>
        </div>
      </div>
    );
  });
}