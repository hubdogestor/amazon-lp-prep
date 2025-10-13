import { useEffect, useRef } from "react";
import { CheckCircle2, Circle } from "lucide-react";

export default function NarrativeModal({ narrative, language, onClose, isUsed = false, onToggleUsed }) {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current?.focus();
  }, [narrative]);

  if (!narrative || !narrative.version) return null;

  const { sectionTitle, sectionCategory, version } = narrative;

  const renderRichContent = (value) => {
    if (!value) return null;
    return value.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-gray-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const contextLabel = language === "pt" ? "Contexto sugerido" : "Suggested context";
  const hookLabel = language === "pt" ? "Gancho" : "Hook";
  const micDropLabel = language === "pt" ? "Fecho" : "Mic Drop";
  const tagsLabel = language === "pt" ? "Temas" : "Tags";
  const closeLabel = language === "pt" ? "Fechar" : "Close";
  const toggleTooltip = isUsed
    ? (language === "pt" ? "Remover marca de narrativa usada" : "Unmark icebreaker as used")
    : (language === "pt" ? "Marcar narrativa como usada" : "Mark icebreaker as used");
  const contextTextClass = isUsed ? "line-through decoration-slate-300 text-gray-500" : "text-gray-700";
  const bodyTextClass = isUsed ? "line-through decoration-slate-400 decoration-2 text-slate-600" : "text-gray-700";
  const contentBodyClass = `leading-relaxed whitespace-pre-line space-y-2 ${bodyTextClass}`;
  const hookBodyClass = `text-xs ${bodyTextClass}`;
  const tagClass = isUsed ? "bg-gray-200 text-gray-500 line-through decoration-slate-400" : "bg-gray-100 text-gray-600";

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={sectionTitle}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
        }
      }}
      tabIndex={-1}
    >
      <div
        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-5 text-white flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-orange-100">{sectionCategory}</p>
            <h3 className="text-2xl font-bold mt-1">{sectionTitle}</h3>
            <div className="flex items-center gap-3 mt-3">
              {version.badge && (
                <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${version.badgeColor}`}>
                  {version.badge}
                </span>
              )}
              <p className="text-sm text-orange-100">{version.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {onToggleUsed && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onToggleUsed();
                }}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition ${
                  isUsed
                    ? "border-green-300 bg-white/90 text-green-600"
                    : "border-white/60 bg-white/20 text-white/80 hover:bg-white/30"
                }`}
                title={toggleTooltip}
                aria-label={toggleTooltip}
                aria-pressed={isUsed}
              >
                {isUsed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl leading-none"
              aria-label={closeLabel}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div className="px-6 py-6 space-y-5">
          {version.context && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">{contextLabel}</p>
              <p className={`text-sm ${contextTextClass}`}>{version.context}</p>
            </div>
          )}

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className={contentBodyClass}>
              {renderRichContent(version.content)}
            </div>
          </div>

          {(version.hook || version.mic_drop) && (
            <div className="grid md:grid-cols-2 gap-4">
              {version.hook && (
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-700 mb-1">{hookLabel}</p>
                  <p className={hookBodyClass}>{version.hook}</p>
                </div>
              )}
              {version.mic_drop && (
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">{micDropLabel}</p>
                  <p className={hookBodyClass}>{version.mic_drop}</p>
                </div>
              )}
            </div>
          )}

          {version.tags && version.tags.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">{tagsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {version.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded text-xs ${tagClass}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}