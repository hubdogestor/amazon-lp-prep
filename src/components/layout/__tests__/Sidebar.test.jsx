import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar.jsx';

// Mock useTranslation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      switch (key) {
        case 'leadershipPrinciplesTitle': return 'Leadership Principles';
        case 'filterAll': return 'All Principles';
        default: return key;
      }
    },
  }),
}));

describe('Sidebar', () => {
  const getDisplayName = (p) => p.name;

  const defaultProps = {
    language: "pt",
    selectedPrinciple: "all",
    setSelectedPrinciple: vi.fn(),
    setShowTopCases: vi.fn(),
    setSearchTerm: vi.fn(),
    setQuestionSearch: vi.fn(),
    setTypicalQuestionSearch: vi.fn(),
    clearHighlights: vi.fn(),
    clearExpanded: vi.fn(),
    principlesData: [
      { id: 'p1', name: 'Principle 1' },
      { id: 'p2', name: 'Principle 2' },
    ],
    getDisplayName: getDisplayName,
  };

  it('should render the Leadership Principles title', () => {
    render(<Sidebar {...defaultProps} />);
    expect(screen.getByText('Leadership Principles')).toBeInTheDocument();
  });

  it('should call setSelectedPrinciple with the correct principle id when a principle button is clicked', () => {
    render(<Sidebar {...defaultProps} selectedPrinciple="p1" />);
    fireEvent.click(screen.getByText('Principle 2'));
    expect(defaultProps.setSelectedPrinciple).toHaveBeenCalledWith('p2');
  });
});
