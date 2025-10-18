import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header.jsx';
import * as HeaderTimer from '../HeaderTimer.jsx';

// Mock useTranslation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      switch (key) {
        case 'kSearch': return 'CASES 🗂️';
        case 'kFup': return 'FUP 🔎';
        case 'kTypical': return 'QUESTIONS ❓';
        case 'topCases': return 'Top Cases';
        case 'icebreaker': return 'Icebreaker';
        case 'myQuestions': return 'My Questions';
        case 'noResult': return 'No results';
        case 'filterLoopingGroup': return 'Filter questions by looping group';
        case 'all': return 'All';
        case 'hideTopCases': return 'Hide top cases';
        case 'showTopCases': return 'Show top cases';
        case 'showOnlyTopCases': return 'Show only Top Cases';
        case 'openIcebreakerQuestions': return 'Open Icebreaker questions';
        case 'icebreakerQuestionsTitle': return 'Icebreaker questions for rapport building';
        case 'openMyQuestions': return 'Open my questions for interviewer';
        case 'myQuestionsTitle': return 'Questions to ask the interviewer';
        default: return key;
      }
    },
  }),
}));

// Mock child components to isolate the Header component
vi.mock('../search/FupSearchResults.jsx', () => ({
  default: () => <div data-testid="fup-search-results" />,
}));
vi.mock('../search/TypicalQuestionSearchResults.jsx', () => ({
  default: () => <div data-testid="typical-question-search-results" />,
}));

const mockLoopingGroups = [
  { id: 'group1', label: 'Group 1' },
  { id: 'group2', label: 'Group 2' },
];

const defaultProps = {
  language: 'en',
  setLanguage: vi.fn(),
  searchTerm: '',
  setSearchTerm: vi.fn(),
  questionSearch: '',
  setQuestionSearch: vi.fn(),
  typicalQuestionSearch: '',
  setTypicalQuestionSearch: vi.fn(),
  showTopCases: false,
  setShowTopCases: vi.fn(),
  setShowIcebreaker: vi.fn(),
  setShowMyQuestions: vi.fn(),
  selectedLooping: null,
  setSelectedLooping: vi.fn(),
  caseSearchResults: [],
  fupSearchResults: [],
  typicalQuestionSearchResults: [],
  handleCaseSearchResultSelect: vi.fn(),
  handleFupSearchResultSelect: vi.fn(),
  handleTypicalSearchResultSelect: vi.fn(),
  toggleUsedCase: vi.fn(),
  usedCases: {},
  toggleUsedQuestion: vi.fn(),
  usedQuestions: {},
  getDisplayCaseTitle: (c) => c.title,
  getDisplayName: (n) => n,
  clearExpanded: vi.fn(),
  clearHighlights: vi.fn(),
  setSelectedPrinciple: vi.fn(),
  debouncedQuestionSearch: '',
  debouncedTypicalQuestionSearch: '',
  loopingGroups: mockLoopingGroups,
  isCaseUsed: () => false,
};

describe('Header', () => {
  beforeEach(() => {
    vi.spyOn(HeaderTimer, 'default').mockImplementation(() => <div data-testid="header-timer" />);
  });

  it('should render all main elements correctly', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByPlaceholderText('CASES 🗂️')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('FUP 🔎')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('QUESTIONS ❓')).toBeInTheDocument();
    expect(screen.getByText('🎯 Top Cases')).toBeInTheDocument();
    expect(screen.getByText('💬 Icebreaker')).toBeInTheDocument();
    expect(screen.getByText('🤔 My Questions')).toBeInTheDocument();
    expect(screen.getByTestId('header-timer')).toBeInTheDocument();
    expect(screen.getByText('PT')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('should call setSearchTerm when typing in the case search input', () => {
    render(<Header {...defaultProps} />);
    const searchInput = screen.getByPlaceholderText('CASES 🗂️');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(defaultProps.setSearchTerm).toHaveBeenCalledWith('test');
  });

  it('should call setLanguage when clicking the PT button', () => {
    render(<Header {...defaultProps} />);
    const ptButton = screen.getByText('PT');
    fireEvent.click(ptButton);
    expect(defaultProps.setLanguage).toHaveBeenCalledWith('pt');
  });

  it('should call setLanguage when clicking the EN button', () => {
    render(<Header {...defaultProps} language="pt" />);
    const enButton = screen.getByText('EN');
    fireEvent.click(enButton);
    expect(defaultProps.setLanguage).toHaveBeenCalledWith('en');
  });

  it('should call setShowTopCases when clicking the Top Cases button', () => {
    render(<Header {...defaultProps} />);
    const topCasesButton = screen.getByText('🎯 Top Cases');
    fireEvent.click(topCasesButton);
    expect(defaultProps.setShowTopCases).toHaveBeenCalled();
  });

  it('should show case search results when searchTerm is not empty and there are results', () => {
    const propsWithResults = {
      ...defaultProps,
      searchTerm: 'test',
      caseSearchResults: [{
        p: 'principle',
        c: { id: '1', title: 'Test Case' },
        snippet: 'This is a test snippet',
        matches: [{ start: 10, length: 4 }],
        searchWords: ['test'],
      }],
    };
    render(<Header {...propsWithResults} />);
    expect(screen.getByText('Test Case')).toBeInTheDocument();
  });

  it('should not show case search results when searchTerm is empty', () => {
    render(<Header {...defaultProps} />);
    expect(screen.queryByText('Test Case')).not.toBeInTheDocument();
  });
});
