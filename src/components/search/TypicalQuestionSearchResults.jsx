import { CheckCircle2, Circle } from "lucide-react";
import { HighlightableText } from "../HighlightableText.jsx";

export default function TypicalQuestionSearchResults({
  results,
  language,
  searchTerm,
  onSelect,
  isQuestionUsed,
  onToggleQuestion,
  getDisplayName,
}) {
  if (!results || results.length === 0) {
    return null;
  }

  return results.map(({ p, q, idx, searchWords }, index) => {
    if (!p || !p.id) {
      console.error("Principle (p) or principle ID (p.id) is undefined for a search result.", { p, q, idx, searchWords });
      return null; // Skip rendering this result if essential data is missing
    }
    const questionStorageId = `${p.id}-${idx}`;
    const used = isQuestionUsed(questionStorageId);
    const toggleTooltip = used
      ? language === "pt" ? "Remover marca de pergunta usada" : "Unmark question as used"
      : language === "pt" ? "Marcar pergunta como usada" : "Mark question as used";

    return (
      <div
        key={`${p.id}-typical-${idx}-${index}`}
        id={`search-result-${p.id}-${idx}`}

        role="option"
        tabIndex={0}
        className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm focus:bg-slate-100 focus:outline-none"
        onClick={() => {
          const questionId = `typical-q-${p.id}-${idx}`;
          onSelect({ principle: p, question: q, idx, questionId }, (searchWords || []).filter((word) => word.length >= 3));
          setTimeout(() => {
            const targetElement = document.getElementById(questionId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 0);
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
            <div className="font-medium text-slate-800">
              <HighlightableText text={q} searchTerm={searchTerm} className={used ? "line-through decoration-slate-400 decoration-2 text-slate-500" : ""} />
            </div>
            <div className="text-slate-500">{getDisplayName(p, language)}</div>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggleQuestion(questionStorageId);
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