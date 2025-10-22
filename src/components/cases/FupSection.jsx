import { useTranslation } from "react-i18next";

export default function FupSection({
  isFupSearchOpen,
  fupSearchTerm,
  renderFupList,
  onToggleCaseFupSearch,
  onUpdateCaseFupSearchTerm,
}) {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onToggleCaseFupSearch()}
          className="text-left flex items-center justify-between text-base font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 pb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <span className="flex items-center gap-2">
            ❓ {t('fupQuestionsTitle')}
            <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400">
              {isFupSearchOpen ? t('activeSearch') : t('clickToSearch')}
            </span>
          </span>
          <span className="text-slate-400 dark:text-slate-500 text-sm">{isFupSearchOpen ? "▲" : "▼"}</span>
        </button>

        {isFupSearchOpen && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-fadeIn dark:bg-blue-900 dark:border-blue-700">
            <input
              type="text"
              placeholder={t('searchFupPlaceholder')}
              value={fupSearchTerm}
              onChange={(event) => onUpdateCaseFupSearchTerm(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.preventDefault();
                  onUpdateCaseFupSearchTerm('');
                }
              }}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:bg-slate-800 dark:border-blue-600 dark:text-slate-100"
              autoFocus
            />
            {fupSearchTerm && (
              <p className="text-xs text-slate-600 mt-2 dark:text-slate-300">
                🔎 {t('searchingFor', { searchTerm: fupSearchTerm })}
              </p>
            )}
          </div>
        )}
      </div>

      {renderFupList()}
    </div>
  );
}
