import { HighlightableText } from "../HighlightableText.jsx";

export default function FupSearchResults({
  results,
  language,
  onSelect,
  getDisplayName,
  getDisplayCaseTitle,
}) {
  if (!results || results.length === 0) {
    return null;
  }

  const renderSnippet = (snippet, matches) => {
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

  return results.map((result, index) => {
    const { p, c, f, originalIdx, snippet, matches, searchWords, questionText } = result;

    return (
      <div
        key={`${p.id}-${c.id || c.title}-${originalIdx}-${index}`}
        role="option"
        tabIndex={0}
        className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0 focus:bg-slate-100 focus:outline-none"
        onClick={() => {
          onSelect({ principle: p, caseData: c, followUp: f, originalIdx }, searchWords);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.currentTarget.click();
          }
        }}
      >
        {questionText && (
          <div className="text-xs text-slate-500 mb-1 italic">
            Re: "{questionText}"
          </div>
        )}
        <div className="text-sm mb-1 text-slate-600">{renderSnippet(snippet, matches)}</div>
        <div className="text-xs text-slate-500 mt-1">
            <span className="font-medium text-slate-700">
                {getDisplayCaseTitle(c, language)}
            </span>
            <span className="text-slate-400"> - </span>
            {getDisplayName(p, language)}
        </div>
      </div>
    );
  });
}
