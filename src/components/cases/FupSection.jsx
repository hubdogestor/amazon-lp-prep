import { HighlightableText } from "../HighlightableText.jsx";

export default function FupSection({
  caseData,
  language,
  caseSearchKey,
  isFupSearchOpen,
  fupSearchTerm,
  renderFupList,
  onToggleCaseFupSearch,
  onUpdateCaseFupSearchTerm,
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onToggleCaseFupSearch()}
          className="text-left flex items-center justify-between text-base font-semibold text-slate-800 border-b border-slate-200 pb-1 hover:text-blue-600 transition-colors group"
        >
          <span className="flex items-center gap-2">
            ❓ Follow-up Questions
            <span className="text-xs text-slate-500 group-hover:text-blue-500">
              {isFupSearchOpen ? "🔎 (busca ativa)" : "(clique para buscar)"}
            </span>
          </span>
          <span className="text-slate-400 text-sm">{isFupSearchOpen ? "▲" : "▼"}</span>
        </button>

        {isFupSearchOpen && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fadeIn">
            <input
              type="text"
              placeholder="Buscar nas 10 perguntas deste case..."
              value={fupSearchTerm}
              onChange={(event) => onUpdateCaseFupSearchTerm(event.target.value)}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              autoFocus
            />
            {fupSearchTerm && (
              <p className="text-xs text-slate-600 mt-2">
                🔎 Buscando por: <strong>{fupSearchTerm}</strong>
              </p>
            )}
          </div>
        )}
      </div>

      {renderFupList()}
    </div>
  );
}
