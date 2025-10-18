import { Copy, Check, Circle, CheckCircle2 } from "lucide-react";
import { HighlightableText } from "../HighlightableText.jsx";

export default function CaseCard({
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
  const usedFupQuestionClass = isCaseUsed ? "line-through decoration-slate-400 decoration-2 text-slate-500" : "text-slate-800";
  const usedFupAnswerClass = isCaseUsed ? "line-through decoration-slate-300 decoration-2 text-slate-500" : "text-slate-600";
  const isStarSearchOpen = !!caseStarSearchOpen[caseSearchKey];
  const starSearchTerm = caseStarSearchTerms[caseSearchKey] || "";
  const isFupSearchOpen = !!caseFupSearchOpen[caseSearchKey];
  const fupSearchTerm = caseFupSearchTerms[caseSearchKey] || "";
  const hasSearchTerm = Boolean(searchTerm);

  const renderStarSearchStatus = () => {
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
  };

  const renderFupList = () => {
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
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {fups.map((f, fIdx) => {
              const fupId = `fup-${principle.id}-${caseSlug}-${fIdx}`;
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
                <li
                  key={fKey}
                  id={fupId}
                  className={`flex flex-col gap-1 transition-all ${
                    isFupHighlighted ? "ring-2 ring-amber-300 rounded-md bg-amber-50 p-2" : ""
                  }`}
                >
                  <div className={`font-medium ${isFupHighlighted ? "bg-amber-100 px-2 py-1 rounded" : ""}`}>
                    <HighlightableText
                      text={question}
                      searchTerm={fupSearchTerm || highlightFupTerm}
                      className={usedFupQuestionClass}
                    />
                  </div>
                  {answer && (
                    <div className={`${usedFupAnswerClass} whitespace-pre-line`}>
                      <HighlightableText
                        text={answer}
                        searchTerm={fupSearchTerm || highlightFupTerm}
                        className={usedFupAnswerClass}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
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
  };

  return (
    <article
      id={caseDomId}
      className={`bg-gradient-to-br rounded-xl p-0 mb-6 overflow-hidden transition-all duration-300 ${
        isTop
          ? "from-orange-50 to-amber-50 border-4 border-[#FF9900] shadow-lg shadow-orange-200/50 hover:shadow-xl hover:shadow-orange-300/50"
          : "from-blue-50 to-sky-50 border-2 border-blue-300 hover:shadow-lg hover:shadow-blue-200/50 hover:border-blue-400"
      } ${isHighlighted ? "ring-2 ring-amber-400" : ""} ${isCaseUsed ? "opacity-80" : ""}`}
      title={questionsTooltip}
    >
      <header
        className={`flex items-center justify-between px-5 py-4 cursor-pointer ${
          open ? "bg-white/80" : "bg-white/60"
        } hover:bg-white/90 backdrop-blur-sm`}
        onClick={(event) => {
          event.stopPropagation();
          onToggleCase(hasSearchTerm);
        }}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`case-content-${caseSearchKey}`}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            event.currentTarget.click();
          }
        }}
      >
        <div className="flex items-center gap-3">
          {isTop && (
            <span className="px-3 py-1 bg-[#FF9900] text-white text-[10px] font-bold rounded-full shadow-md animate-pulse">
              TOP CASE
            </span>
          )}
          {!isTop && caseData.isGoodCase && (
            <span className="px-2.5 py-0.5 bg-blue-500 text-white text-[10px] font-semibold rounded-full shadow-sm">
              💡 GOOD CASE
            </span>
          )}
          {caseQuestions.length > 0 && (
            <span
              className="px-2.5 py-0.5 bg-purple-500 text-white text-[10px] font-semibold rounded-full shadow-sm cursor-help"
              title={questionsTooltip}
            >
              📝 {caseQuestions.length} {language === "pt" ? "Q" : "Q"}
            </span>
          )}
          <h3 className={`text-lg font-bold ${isTop ? "text-[#232F3E]" : "text-slate-900"} ${isCaseUsed ? "text-slate-500" : ""}`}>
            <HighlightableText
              text={getDisplayCaseTitle(caseData, language)}
              searchTerm={highlightCaseTerm}
              className={isCaseUsed ? "line-through decoration-2 decoration-slate-500" : ""}
            />
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggleUsedCase();
            }}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all ${
              isCaseUsed
                ? "bg-green-50 border-green-300 text-green-700"
                : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50"
            }`}
            title={toggleCaseTooltip}
            aria-label={toggleCaseTooltip}
            aria-pressed={isCaseUsed}
          >
            {isCaseUsed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
          </button>
          {open && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                onCopyPrompt();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border transition-all ${
copiedCaseId === caseSearchKey
                  ? "bg-green-50 border-green-300 text-green-700"
                  : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
              title={language === "pt" ? "Copiar prompt para IA" : "Copy prompt for AI"}
              aria-label={language === "pt" ? "Gerar e copiar prompt" : "Generate and copy prompt"}
            >
              {copiedCaseId === caseSearchKey ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{language === "pt" ? "Copiado!" : "Copied!"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{language === "pt" ? "Gerar Prompt" : "Generate Prompt"}</span>
                </>
              )}
            </button>
          )}
          <span className="text-sm text-amber-600 select-none">
            {open ? texts.close : texts.viewDetails} {open ? "▲" : "▼"}
          </span>
        </div>
      </header>

      {open && (
        <div
          id={`case-content-${caseSearchKey}`}
          className="px-6 pb-6 pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-700 bg-white/40 backdrop-blur-sm"
        >
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
        </div>
      )}
    </article>
  );
}