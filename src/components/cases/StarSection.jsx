import { HighlightableText } from "../HighlightableText.jsx";
import { useTranslation } from "react-i18next";

export default function StarSection({
  caseData,
  language,
  isStarSearchOpen,
  starSearchTerm,
  renderStarSearchStatus,
  onToggleCaseStarSearch,
  onUpdateCaseStarSearchTerm,
  highlightCaseTerm,
  usedStarTextClass,
}) {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onToggleCaseStarSearch()}
          className="text-left flex items-center justify-between text-base font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 pb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <span className="flex items-center gap-2">
            ⭐ {t('starCaseTitle')}
            <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400">
              {isStarSearchOpen ? t('activeSearch') : t('clickToSearch')}
            </span>
          </span>
          <span className="text-slate-400 dark:text-slate-500 text-sm">{isStarSearchOpen ? "▲" : "▼"}</span>
        </button>

        {isStarSearchOpen && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fadeIn dark:bg-blue-900 dark:border-blue-700">
            <input
              type="text"
              placeholder={t('searchStarPlaceholder')}
              value={starSearchTerm}
              onChange={(event) => onUpdateCaseStarSearchTerm(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.preventDefault();
                  onUpdateCaseStarSearchTerm('');
                }
              }}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-slate-800 dark:border-blue-600 dark:text-slate-100"
              autoFocus
            />
            {renderStarSearchStatus()}
          </div>
        )}
      </div>

      <div className="grid gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">📍</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-blue-700 dark:text-blue-400 mb-2">
                {t('situation')}
              </h4>
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <HighlightableText
                  text={(caseData && caseData[language] && caseData[language].s) || ""}
                  searchTerm={starSearchTerm || highlightCaseTerm}
                  className={usedStarTextClass}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎯</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-purple-700 dark:text-purple-400 mb-2">
                {t('task')}
              </h4>
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <HighlightableText
                  text={(caseData && caseData[language] && caseData[language].t) || ""}
                  searchTerm={starSearchTerm || highlightCaseTerm}
                  className={usedStarTextClass}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚡</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-green-700 dark:text-green-400 mb-2">
                {t('action')}
              </h4>
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <HighlightableText
                  text={(caseData && caseData[language] && caseData[language].a) || ""}
                  searchTerm={starSearchTerm || highlightCaseTerm}
                  className={usedStarTextClass}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🏆</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-2">
                {t('result')}
              </h4>
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <HighlightableText
                  text={(caseData && caseData[language] && caseData[language].r) || ""}
                  searchTerm={starSearchTerm || highlightCaseTerm}
                  className={usedStarTextClass}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm uppercase tracking-wide text-indigo-700 dark:text-indigo-400 mb-2">
                {t('learning')}
              </h4>
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                <HighlightableText
                  text={(caseData && caseData[language] && caseData[language].l) || ""}
                  searchTerm={starSearchTerm || highlightCaseTerm}
                  className={usedStarTextClass}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
