import { useEffect, useState } from "react";
import { TIMER_DEFAULT_SECONDS } from "../../constants.js";

export default function HeaderTimer({ t }) {
  const [seconds, setSeconds] = useState(TIMER_DEFAULT_SECONDS);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let id;
    if (running) {
      id = setInterval(() => setSeconds((s) => s - 1), 1000);
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, [running]);

  const isNegative = seconds < 0;
  const absSeconds = Math.abs(seconds);
  const minutes = Math.floor(absSeconds / 60);
  const secs = absSeconds % 60;
  const timeDisplay = `${isNegative ? "-" : ""}${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  const isLastMinute = seconds > 0 && seconds <= 60;
  const isTimeUp = seconds <= 0;

  const resetTimer = () => {
    setSeconds(TIMER_DEFAULT_SECONDS);
    setRunning(false);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm px-3 py-2 flex items-center justify-between dark:bg-slate-800 dark:border-slate-600">
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400">{t.timer}</p>
        <p className={`font-mono text-lg tracking-wider ${isTimeUp ? "text-rose-600 dark:text-rose-400" : isLastMinute ? "text-amber-600 dark:text-amber-400" : "text-slate-900 dark:text-slate-100"}`}>
          {timeDisplay}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="p-1.5 text-sm rounded-md border border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700 transition-colors"
          onClick={() => setRunning((state) => !state)}
          title={running ? "Pausar" : "Iniciar"}
        >
          {running ? "⏸️" : "▶️"}
        </button>
        <button
          type="button"
          className="p-1.5 text-sm rounded-md border border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700 transition-colors"
          onClick={resetTimer}
          title="Reiniciar"
        >
          🔄
        </button>
      </div>
    </div>
  );
}