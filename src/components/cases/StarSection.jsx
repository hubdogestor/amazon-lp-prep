import { HighlightableText } from "../HighlightableText.jsx";

export default function StarSection({
  caseData,
  language,
  texts,
  isStarSearchOpen,
  starSearchTerm,
  renderStarSearchStatus,
  onToggleCaseStarSearch,
  onUpdateCaseStarSearchTerm,
  highlightCaseTerm,
  usedStarTextClass,
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onToggleCaseStarSearch()}
          className="text-left flex items-center justify-between text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 hover:text-blue-600 transition-colors group"
        >
          <span className="flex items-center gap-2">
            ⭐ STAR Case
            <span className="text-xs text-slate-500 group-hover:text-blue-500">
              {isStarSearchOpen ? "🔎 (busca ativa)" : "(clique para buscar)"}
            </span>
          </span>
          <span className="text-slate-400 text-sm">{isStarSearchOpen ? "▲" : "▼"}</span>
        </button>

        {isStarSearchOpen && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fadeIn">
            <input
              type="text"
              placeholder="Buscar em S.T.A.R.L deste case..."
              value={starSearchTerm}
              onChange={(event) => onUpdateCaseStarSearchTerm(event.target.value)}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              autoFocus
            />
            {renderStarSearchStatus()}
          </div>
        )}
      </div>

      <div className="space-y-3 leading-relaxed text-base">
        <p>
          <strong>{texts.situation}:</strong>{" "}
          <HighlightableText
            text={(caseData && caseData[language] && caseData[language].s) || ""}
            searchTerm={starSearchTerm || highlightCaseTerm}
            className={usedStarTextClass}
          />
        </p>
        <p>
          <strong>{texts.task}:</strong>{" "}
          <HighlightableText
            text={(caseData && caseData[language] && caseData[language].t) || ""}
            searchTerm={starSearchTerm || highlightCaseTerm}
            className={usedStarTextClass}
          />
        </p>
        <p>
          <strong>{texts.action}:</strong>{" "}
          <HighlightableText
            text={(caseData && caseData[language] && caseData[language].a) || ""}
            searchTerm={starSearchTerm || highlightCaseTerm}
            className={usedStarTextClass}
          />
        </p>
        <p>
          <strong>{texts.result}:</strong>{" "}
          <HighlightableText
            text={(caseData && caseData[language] && caseData[language].r) || ""}
            searchTerm={starSearchTerm || highlightCaseTerm}
            className={usedStarTextClass}
          />
        </p>
        <p>
          <strong>{texts.learning}:</strong>{" "}
          <HighlightableText
            text={(caseData && caseData[language] && caseData[language].l) || ""}
            searchTerm={starSearchTerm || highlightCaseTerm}
            className={usedStarTextClass}
          />
        </p>
      </div>
    </div>
  );
}
