import { Copy, Check, Circle, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HighlightableText } from "../HighlightableText.jsx";

export default function CaseCardHeader({
  caseData,
  isTop,
  isCaseUsed,
  language,
  caseQuestions,
  questionsTooltip,
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
            {t('topCaseLabel')}
          </span>
        )}
        {!isTop && caseData.isGoodCase && (
          <span className="px-2.5 py-0.5 bg-blue-500 text-white text-[10px] font-semibold rounded-full shadow-sm">
            {t('goodCaseLabel')}
          </span>
        )}
        {caseQuestions.length > 0 && (
          <span
            className="px-2.5 py-0.5 bg-purple-500 text-white text-[10px] font-semibold rounded-full shadow-sm cursor-help"
            title={questionsTooltip}
          >
            📝 {caseQuestions.length} {t('questionAbbreviation')}
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
          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-110 active:scale-95 ${
            isCaseUsed
              ? "bg-green-50 border-green-300 text-green-700 dark:bg-green-900 dark:border-green-600 dark:text-green-400"
              : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700"
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
            className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 hover:scale-105 active:scale-95 ${
              copiedCaseId === caseSearchKey
                ? "bg-green-50 border-green-300 text-green-700 dark:bg-green-900 dark:border-green-600 dark:text-green-400"
                : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
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
        <span className="text-sm text-amber-600 select-none">
          {open ? t('close') : t('viewDetails')} {open ? "▲" : "▼"}
        </span>
      </div>
    </header>
  );
}
