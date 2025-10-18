import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar.jsx';

describe('Sidebar', () => {
  const principlesData = [
    { id: 'p1', name: 'Principle 1' },
    { id: 'p2', name: 'Principle 2' },
  ];

  const mockT = {
    filterAll: 'All Principles',
  };

  const getDisplayName = (p, lang) => p.name;

  it('should call setSelectedPrinciple with "all" when the "All Principles" button is clicked', () => {
    const setSelectedPrinciple = vi.fn();
    render(
      <Sidebar
        language="pt"
        t={mockT}
        selectedPrinciple="p1"
        setSelectedPrinciple={setSelectedPrinciple}
        setShowTopCases={() => {}}
        setSearchTerm={() => {}}
        setQuestionSearch={() => {}}
        setTypicalQuestionSearch={() => {}}
        clearHighlights={() => {}}
        clearExpanded={() => {}}
        principlesData={principlesData}
        getDisplayName={getDisplayName}
      />
    );

    fireEvent.click(screen.getByText('All Principles'));
    expect(setSelectedPrinciple).toHaveBeenCalledWith('all');
  });

  it('should call setSelectedPrinciple with the correct principle id when a principle button is clicked', () => {
    const setSelectedPrinciple = vi.fn();
    render(
      <Sidebar
        language="pt"
        t={mockT}
        selectedPrinciple="all"
        setSelectedPrinciple={setSelectedPrinciple}
        setShowTopCases={() => {}}
        setSearchTerm={() => {}}
        setQuestionSearch={() => {}}
        setTypicalQuestionSearch={() => {}}
        clearHighlights={() => {}}
        clearExpanded={() => {}}
        principlesData={principlesData}
        getDisplayName={getDisplayName}
      />
    );

    fireEvent.click(screen.getByText('Principle 2'));
    expect(setSelectedPrinciple).toHaveBeenCalledWith('p2');
  });
});
