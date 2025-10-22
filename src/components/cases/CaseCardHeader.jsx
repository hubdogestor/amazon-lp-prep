import { Copy, Check, Circle, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HighlightableText } from "../HighlightableText.jsx";

export default function CaseCardHeader({
  caseData,
  isTop,
  isCaseUsed,
  language,
  caseQuestions: _caseQuestions,
  questionsTooltip: _questionsTooltip,
  highlightCaseTerm,
  open,
  copiedCaseId,
  caseSearchKey,
  toggleCaseTooltip,
  getDisplayCaseTitle,
  onToggleCase,
  onToggleUsedCase,
  onCopyPrompt,
  hasSearchTerm,
}) {
  const { t } = useTranslation();
  return (
    <header
      className={`flex items-center justify-between px-6 py-5 cursor-pointer transition-all duration-200 ${
        open ? "bg-white/90 dark:bg-slate-800/90" : "bg-white/70 dark:bg-slate-800/70"
      } hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm`}
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
      {/* Left & Center Combined */}
      <div className="flex flex-1 items-center gap-4">
        {/* Gutter / Badge Container */}
        <div className="w-36 flex-shrink-0">
          {isTop && (
            <span className="px-3 py-1.5 bg-gradient-to-r from-[#FF9900] to-[#FF6B00] text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
              {t('topCaseLabel')}
            </span>
          )}
          {!isTop && caseData.isGoodCase && (
            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-semibold rounded-full shadow-md">
              {t('goodCaseLabel')}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col">
          <h3 className={`text-xl font-bold tracking-tight leading-tight text-left ${isTop ? "text-[#232F3E] dark:text-orange-400" : "text-slate-900 dark:text-slate-100"} ${isCaseUsed ? "text-slate-500 dark:text-slate-600" : ""}`}>
            <HighlightableText
              text={getDisplayCaseTitle(caseData, language)}
              searchTerm={highlightCaseTerm}
              className={isCaseUsed ? "line-through decoration-2 decoration-slate-500" : ""}
            />
          </h3>
          <div className={`text-sm flex items-center gap-2 mt-1 text-left ${isCaseUsed ? "text-slate-400 dark:text-slate-600" : "text-slate-600 dark:text-slate-400"}`}>
            {caseData.company && (
              <span className="font-bold">
                <HighlightableText
                  text={caseData.company}
                  searchTerm={highlightCaseTerm}
                  className={isCaseUsed ? "line-through decoration-2 decoration-slate-400" : ""}
                />
              </span>
            )}
            {caseData.period && (
              <span className={isCaseUsed ? "text-slate-400 dark:text-slate-600" : ""}>
                <HighlightableText
                  text={caseData.period}
                  searchTerm={highlightCaseTerm}
                  className={isCaseUsed ? "line-through decoration-2 decoration-slate-400" : ""}
                />
              </span>
            )}
            {caseData.keywords && (
              <span className={`ml-4 text-xs italic ${isCaseUsed ? "text-slate-400 dark:text-slate-600" : "text-slate-500 dark:text-slate-500"}`}>
                {caseData.keywords}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Column (Buttons) */}
      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onToggleUsedCase();
          }}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-lg ${
            isCaseUsed
              ? "bg-gradient-to-br from-green-50 to-green-100 border-green-400 text-green-700 shadow-green-200/50 dark:from-green-900 dark:to-green-800 dark:border-green-500 dark:text-green-300"
              : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:border-slate-500"
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
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg ${
              copiedCaseId === caseSearchKey
                ? "bg-gradient-to-br from-green-50 to-green-100 border-green-400 text-green-700 shadow-green-200/50 dark:from-green-900 dark:to-green-800 dark:border-green-500 dark:text-green-300"
                : "bg-white border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 shadow-blue-200/50 dark:bg-slate-800 dark:border-blue-600 dark:text-blue-300 dark:hover:bg-slate-700 dark:hover:border-blue-500"
            }`}
            title={t('copyPromptTitle')}
            aria-label={t('generateCopyPromptLabel')}
          >
            {copiedCaseId === caseSearchKey ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t('copiedConfirmation')}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{t('generatePromptButton')}</span>
              </>
            )}
          </button>
        )}
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 select-none transition-colors">
          {open ? t('close') : t('viewDetails')} {open ? "▲" : "▼"}
        </span>
      </div>
    </header>
  );
}
