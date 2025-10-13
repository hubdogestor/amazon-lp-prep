import { useState, useEffect, useCallback, useMemo } from "react";

const isBrowser = typeof window !== "undefined";

const cloneInitial = (value) => {
  if (!value || typeof value !== "object") return {};
  return { ...value };
};

const readFromStorage = (storage, key, fallback) => {
  if (!storage) return cloneInitial(fallback);
  try {
    const raw = storage.getItem(key);
    if (!raw) return cloneInitial(fallback);
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
    return cloneInitial(fallback);
  } catch (error) {
    console.warn(`[usePersistentFlagMap] Failed to parse storage key "${key}"`, error);
    return cloneInitial(fallback);
  }
};

const persistToStorage = (storage, key, value) => {
  if (!storage) return;
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`[usePersistentFlagMap] Failed to persist storage key "${key}"`, error);
  }
};

export function usePersistentFlagMap(storageKey, options = {}) {
  const { initialValue = {}, storage: providedStorage } = options;

  const storage = useMemo(() => {
    if (typeof providedStorage !== "undefined") {
      return providedStorage;
    }
    return isBrowser ? window.localStorage : null;
  }, [providedStorage]);

  const [map, setMap] = useState(() => readFromStorage(storage, storageKey, initialValue));

  useEffect(() => {
    persistToStorage(storage, storageKey, map);
  }, [map, storage, storageKey]);

  const toggle = useCallback((id) => {
    if (!id) return;
    setMap((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      return next;
    });
  }, []);

  const setFlag = useCallback((id, value) => {
    if (!id) return;
    setMap((prev) => {
      const next = { ...prev };
      if (value) {
        next[id] = true;
      } else {
        delete next[id];
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => setMap(cloneInitial(initialValue)), [initialValue]);

  return {
    value: map,
    setValue: setMap,
    toggle,
    setFlag,
    reset,
  };
}