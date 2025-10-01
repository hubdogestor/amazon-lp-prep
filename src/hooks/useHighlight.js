import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Custom hook to manage highlight state using React state instead of DOM manipulation
 * @returns {Object} Highlight state and control functions
 */
export function useHighlight() {
  const [highlightedFupId, setHighlightedFupId] = useState(null);
  const [highlightedCaseId, setHighlightedCaseId] = useState(null);
  const [highlightSearchTerm, setHighlightSearchTerm] = useState("");

  // Track pending scroll to prevent race conditions
  const pendingScrollRef = useRef(null);

  // Cleanup pending scroll on unmount
  useEffect(() => {
    return () => {
      if (pendingScrollRef.current) {
        clearTimeout(pendingScrollRef.current);
      }
    };
  }, []);

  /**
   * Clear all highlights
   */
  const clearHighlights = useCallback(() => {
    // Cancel any pending scroll operations
    if (pendingScrollRef.current) {
      clearTimeout(pendingScrollRef.current);
      pendingScrollRef.current = null;
    }

    setHighlightedFupId(null);
    setHighlightedCaseId(null);
  }, []);

  /**
   * Set highlighted FUP with safe scroll
   * @param {string} fupId - FUP element ID
   * @param {number} delay - Delay before scroll
   */
  const setHighlightedFup = useCallback((fupId, delay = 120) => {
    // Cancel any pending scroll
    if (pendingScrollRef.current) {
      clearTimeout(pendingScrollRef.current);
    }

    clearHighlights();
    setHighlightedFupId(fupId);

    pendingScrollRef.current = setTimeout(() => {
      const el = document.getElementById(fupId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      pendingScrollRef.current = null;
    }, delay);
  }, [clearHighlights]);

  /**
   * Set highlighted case with safe scroll
   * @param {string} caseId - Case element ID
   * @param {number} delay - Delay before scroll
   */
  const setHighlightedCase = useCallback((caseId, delay = 80) => {
    // Cancel any pending scroll
    if (pendingScrollRef.current) {
      clearTimeout(pendingScrollRef.current);
    }

    clearHighlights();
    setHighlightedCaseId(caseId);

    pendingScrollRef.current = setTimeout(() => {
      const el = document.getElementById(caseId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      pendingScrollRef.current = null;
    }, delay);
  }, [clearHighlights]);

  return {
    highlightedFupId,
    highlightedCaseId,
    highlightSearchTerm,
    setHighlightSearchTerm,
    clearHighlights,
    setHighlightedFup,
    setHighlightedCase,
  };
}
