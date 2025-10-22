import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainContent from '../MainContent.jsx';

vi.mock('../../cases/CaseCard.jsx', () => ({
  default: () => <div data-testid="case-card"></div>,
}));

describe('MainContent', () => {
  const mockT = {
    filterAll: 'All Principles',
  };

  const getDisplayName = (p, _lang) => p.name;
  const getDisplayCaseTitle = (c, _lang) => c.title;

  const baseProps = {
    isSearching: false,
    getDisplayName: getDisplayName,
    language: "pt",
    typicalQuestions: {},
    usedQuestions: {},
    highlightedTypicalQuestionId: "",
    getBestCaseOption: vi.fn(),
    getDisplayCaseTitle: getDisplayCaseTitle,
    navigateToMappedCase: vi.fn(),
    highlightTypicalTerm: "",
    toggleUsedQuestion: vi.fn(),
    expandedCases: {},
    highlightedCaseId: "",
    isTopCase: () => false,
    usedCases: {},
    getCaseQuestions: () => [],
    copyPromptToClipboard: vi.fn(),
    toggleCaseStarSearch: vi.fn(),
    updateCaseStarSearchTerm: vi.fn(),
    toggleCaseFupSearch: vi.fn(),
    updateCaseFupSearchTerm: vi.fn(),
    searchTerm: "",
    caseStarSearchOpen: {},
    caseFupSearchOpen: {},
    caseFupSearchTerms: {},
    caseStarSearchTerms: {},
    highlightCaseTerm: "",
    highlightFupTerm: "",
    highlightedFupId: "",
    copiedCaseId: "",
    toggleUsedCase: vi.fn(),
    handleCaseHeaderToggle: vi.fn(),
    t: mockT,
    getCaseFups: () => [],
    filterCaseFups: () => [],
    starSectionMatchesTerm: () => true,
  };

  it('should render the principles', () => {
    const principlesData = [
      { id: 'p1', name: 'Principle 1', cases: [] },
      { id: 'p2', name: 'Principle 2', cases: [] },
    ];

    render(
      <MainContent
        {...baseProps}
        filteredPrinciples={principlesData}
      />
    );

    expect(screen.getByText('Principle 1')).toBeInTheDocument();
    expect(screen.getByText('Principle 2')).toBeInTheDocument();
  });

  it('should show "Buscando..." when isSearching is true', () => {
    render(<MainContent {...baseProps} isSearching={true} filteredPrinciples={[]} />);
    expect(screen.getByText('Buscando...')).toBeInTheDocument();
  });

  it('should render typical questions for a principle', () => {
    const principlesData = [
      { id: 'p1', name: 'Principle 1', cases: [] },
    ];
    const typicalQuestions = {
      p1: {
        pt: ['Pergunta 1'],
        en: ['Question 1'],
      },
    };

    render(
      <MainContent
        {...baseProps}
        filteredPrinciples={principlesData}
        typicalQuestions={typicalQuestions}
      />
    );

    expect(screen.getByText('Pergunta 1')).toBeInTheDocument();
    // Check for the tooltip for no mapped case
    expect(screen.getByTitle('Sem case mapeado')).toBeInTheDocument();
  });

  it('should render CaseCard for each case in a principle', () => {
    const principlesData = [
      {
        id: 'p1',
        name: 'Principle 1',
        cases: [
          { id: 'c1', title: 'Case 1' },
          { id: 'c2', title: 'Case 2' },
        ],
      },
    ];

    render(
      <MainContent
        {...baseProps}
        filteredPrinciples={principlesData}
      />
    );

    const caseCards = screen.getAllByTestId('case-card');
    expect(caseCards).toHaveLength(2);
  });
});
