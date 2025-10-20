import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Custom hook to manage highlight state using React state instead of DOM manipulation
 * @returns {Object} Highlight state and control functions
 */
export function useHighlight() {
  const [highlightedFupId, setHighlightedFupId] = useState(null);
  const [highlightedCaseId, setHighlightedCaseId] = useState(null);
  const [highlightedTypicalQuestionId, setHighlightedTypicalQuestionId] = useState(null);
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

  // Clear typical question highlight when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only clear if there's a highlighted typical question
      if (highlightedTypicalQuestionId) {
        // Check if the click was on a typical question button
        const target = event.target;
        const isTypicalQuestionClick = target.closest('[id^="typical-q-"]');
        
        // If not clicking on a typical question, clear the highlight
        if (!isTypicalQuestionClick) {
          setHighlightedTypicalQuestionId(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [highlightedTypicalQuestionId]);

  /**
   * Clear all highlights (including search term)
   */
  const clearHighlights = useCallback(() => {
    // Cancel any pending scroll operations
    if (pendingScrollRef.current) {
      clearTimeout(pendingScrollRef.current);
      pendingScrollRef.current = null;
    }

    setHighlightedFupId(null);
    setHighlightedCaseId(null);
    setHighlightedTypicalQuestionId(null);
    setHighlightSearchTerm(""); // Clear search term highlights too
  }, []);

  /**
   * Set highlighted FUP
   * @param {string} fupId - FUP element ID
   */
  const setHighlightedFup = useCallback((fupId) => {
    clearHighlights();
    setHighlightedFupId(fupId);
  }, [clearHighlights]);

  /**
   * Set highlighted case
   * @param {string} caseId - Case element ID
   */
  const setHighlightedCase = useCallback((caseId) => {
    clearHighlights();
    setHighlightedCaseId(caseId);
  }, [clearHighlights]);

  /**
   * Set highlighted typical question
   * @param {string} questionId - Typical question element ID
   */
  const setHighlightedTypicalQuestion = useCallback((questionId) => {
    clearHighlights();
    setHighlightedTypicalQuestionId(questionId);
  }, [clearHighlights]);

  return {
    highlightedFupId,
    highlightedCaseId,
    highlightedTypicalQuestionId,
    highlightSearchTerm,
    setHighlightSearchTerm,
    clearHighlights,
    setHighlightedFup,
    setHighlightedCase,
    setHighlightedTypicalQuestion,
  };
}
