/**
 * Component to highlight search terms within text (supports multi-word)
 * Uses a simple and reliable approach with regex
 * 
 * Features:
 * - Case-insensitive highlighting
 * - Accent-insensitive search (ação matches acao)
 * - Multi-word search support
 * - Filters short words (< 3 chars) to avoid highlighting articles
 * - Safe regex escaping to prevent injection
 * 
 * @param {Object} props - Component props
 * @param {string} props.text - Text to display and search within
 * @param {string} props.searchTerm - Term(s) to highlight (space-separated for multiple)
 * @param {string} [props.className=""] - Additional CSS classes to apply
 * @returns {JSX.Element} Text with highlighted search terms
 * 
 * @example
 * <HighlightableText 
 *   text="Ação e reação são forças opostas" 
 *   searchTerm="acao forcas"
 *   className="text-lg"
 * />
 */
export function HighlightableText({ text, searchTerm, className = "" }) {
  if (!searchTerm || !text) {
    return <span className={className}>{text}</span>;
  }

  try {
    const textString = String(text);

    // Split search term into individual words (filter words with 3+ chars to avoid highlighting "de", "ou", "eu", "do", "da", etc.)
    const searchWords = searchTerm.trim().split(/\s+/).filter(w => w.length >= 3);

    if (searchWords.length === 0) {
      return <span className={className}>{text}</span>;
    }

    // Escape special regex characters and create pattern for each word
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create a regex that matches any of the words
    // We'll normalize accents by creating alternatives for each character
    const normalizeForRegex = (word) => {
      return word
        .replace(/[aáàâãä]/gi, '[aáàâãäAÁÀÂÃÄ]')
        .replace(/[eéèêë]/gi, '[eéèêëEÉÈÊË]')
        .replace(/[iíìîï]/gi, '[iíìîïIÍÌÎÏ]')
        .replace(/[oóòôõö]/gi, '[oóòôõöOÓÒÔÕÖ]')
        .replace(/[uúùûü]/gi, '[uúùûüUÚÙÛÜ]')
        .replace(/[cç]/gi, '[cçCÇ]')
        .replace(/[nñ]/gi, '[nñNÑ]');
    };

    const patterns = searchWords.map(word => normalizeForRegex(escapeRegex(word)));
    const combinedPattern = patterns.join('|');
    const regex = new RegExp(`(${combinedPattern})`, 'gi');

    // Split text by matches
    const parts = textString.split(regex);

    // If no matches, return original text
    if (parts.length === 1) {
      return <span className={className}>{text}</span>;
    }

    // Build highlighted text
    return (
      <span className={className}>
        {parts.map((part, index) => {
          // Check if this part matches any search word (case-insensitive)
          const isMatch = searchWords.some(word =>
            part.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') ===
            word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          );

          if (isMatch) {
            return (
              <mark key={index} className="bg-yellow-300 px-1 rounded font-semibold">
                {part}
              </mark>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  } catch (error) {
    console.error('HighlightableText error:', error);
    return <span className={className}>{text}</span>;
  }
}
