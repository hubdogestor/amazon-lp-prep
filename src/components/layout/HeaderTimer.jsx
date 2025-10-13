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
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm px-4 py-3 flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">{t.timer}</p>
        <p className={`font-mono text-2xl tracking-wider ${isTimeUp ? "text-rose-600" : isLastMinute ? "text-amber-600" : "text-slate-900"}`}>
          {timeDisplay}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="px-3 py-1 text-sm rounded-md border border-slate-300 hover:bg-slate-100"
          onClick={() => setRunning((state) => !state)}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          type="button"
          className="px-3 py-1 text-sm rounded-md border border-slate-300 hover:bg-slate-100"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}