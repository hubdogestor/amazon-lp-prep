import { norm } from '../utils/textUtils.js';

/**
 * Component to highlight search terms within text (supports multi-word)
 * Sanitizes input to prevent XSS attacks
 * @param {Object} props - Component props
 * @param {string} props.text - Text to display
 * @param {string} props.searchTerm - Term(s) to highlight (space-separated for multiple)
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Highlighted text
 */
export function HighlightableText({ text, searchTerm, className = "" }) {
  if (!searchTerm || !text) {
    return <span className={className}>{text}</span>;
  }

  try {
    // Split search term into multiple words
    const searchWords = searchTerm.trim().split(/\s+/).filter(w => w.length > 0);

    if (searchWords.length === 0) {
      return <span className={className}>{text}</span>;
    }

    // Normalize search words for comparison
    const searchWordsNorm = searchWords.map(w => norm(w));
    const textString = String(text);
    const textNorm = norm(textString);

    // Find all matches in the normalized text
    const matches = [];
    searchWordsNorm.forEach(wordNorm => {
      let startIndex = 0;
      let index = textNorm.indexOf(wordNorm, startIndex);
      while (index !== -1) {

        // The match was found at position 'index' in the normalized text
        // We need to find the corresponding position and length in the original text
        // Since normalization only affects case and accents (not length in most cases),
        // we can use the same indices
        const actualLength = wordNorm.length;

        matches.push({
          start: index,
          end: index + actualLength,
          originalText: textString.substring(index, index + actualLength)
        });

        startIndex = index + 1;
        index = textNorm.indexOf(wordNorm, startIndex);
      }
    });

    // If no matches found, return original text
    if (matches.length === 0) {
      return <span className={className}>{text}</span>;
    }

    // Sort matches by position and merge overlapping ones
    matches.sort((a, b) => a.start - b.start);
    const mergedMatches = [];
    let current = matches[0];

    for (let i = 1; i < matches.length; i++) {
      if (matches[i].start <= current.end) {
        // Overlapping or adjacent, merge
        current = {
          start: current.start,
          end: Math.max(current.end, matches[i].end),
          originalText: textString.substring(current.start, Math.max(current.end, matches[i].end))
        };
      } else {
        mergedMatches.push(current);
        current = matches[i];
      }
    }
    mergedMatches.push(current);

    // Build the highlighted text
    const parts = [];
    let lastEnd = 0;

    mergedMatches.forEach((match, index) => {
      // Add text before match
      if (match.start > lastEnd) {
        parts.push(
          <span key={`text-${index}`}>{textString.substring(lastEnd, match.start)}</span>
        );
      }

      // Add highlighted match
      parts.push(
        <mark key={`mark-${index}`} className="bg-yellow-200 px-1 rounded">
          {match.originalText}
        </mark>
      );

      lastEnd = match.end;
    });

    // Add remaining text
    if (lastEnd < textString.length) {
      parts.push(
        <span key="text-end">{textString.substring(lastEnd)}</span>
      );
    }

    return <span className={className}>{parts}</span>;
  } catch (error) {
    // Fallback if regex fails
    console.error('HighlightableText error:', error);
    return <span className={className}>{text}</span>;
  }
}
