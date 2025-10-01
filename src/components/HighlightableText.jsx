import { escapeRegex } from '../utils/textUtils.js';

/**
 * Component to highlight search terms within text
 * Sanitizes input to prevent XSS attacks
 * @param {Object} props - Component props
 * @param {string} props.text - Text to display
 * @param {string} props.searchTerm - Term to highlight
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} Highlighted text
 */
export function HighlightableText({ text, searchTerm, className = "" }) {
  if (!searchTerm || !text) {
    return <span className={className}>{text}</span>;
  }

  try {
    // Escape regex special characters to prevent injection
    const escapedTerm = escapeRegex(searchTerm);
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    const parts = String(text).split(regex);

    return (
      <span className={className}>
        {parts.map((part, index) => {
          if (part.toLowerCase() === searchTerm.toLowerCase()) {
            return (
              <mark key={index} className="bg-yellow-200 px-1 rounded">
                {part}
              </mark>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  } catch (error) {
    // Fallback if regex fails
    console.error('HighlightableText error:', error);
    return <span className={className}>{text}</span>;
  }
}
