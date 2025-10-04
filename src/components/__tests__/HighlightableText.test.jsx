// src/components/__tests__/HighlightableText.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HighlightableText } from '../HighlightableText.jsx';

describe('HighlightableText', () => {
  it('should render text without highlighting when no search term', () => {
    render(
      <HighlightableText 
        text="This is a test text"
        searchTerm=""
      />
    );
    
    expect(screen.getByText('This is a test text')).toBeInTheDocument();
    expect(screen.queryByRole('mark')).not.toBeInTheDocument();
  });

  it('should highlight matching text case-insensitively', () => {
    render(
      <HighlightableText 
        text="This is a Test text"
        searchTerm="test"
      />
    );
    
    const highlightedElements = screen.getAllByText('Test');
    expect(highlightedElements).toHaveLength(1);
    expect(highlightedElements[0]).toHaveClass('bg-yellow-300');
  });

  it('should highlight multiple occurrences', () => {
    render(
      <HighlightableText 
        text="Test test TEST tEsT"
        searchTerm="test"
      />
    );
    
    // Should highlight all variations of "test"
    const container = screen.getByText(/Test/).closest('span');
    const highlights = container.querySelectorAll('.bg-yellow-300');
    expect(highlights).toHaveLength(4);
  });

  it('should handle special regex characters in search term', () => {
    render(
      <HighlightableText 
        text="Price is $100 (100 dollars)"
        searchTerm="$100"
      />
    );
    
    const highlighted = screen.getByText('$100');
    expect(highlighted).toHaveClass('bg-yellow-300');
  });

  it('should handle empty text gracefully', () => {
    render(
      <HighlightableText 
        text=""
        searchTerm="test"
      />
    );
    
    expect(screen.queryByText(/test/)).not.toBeInTheDocument();
  });

  it('should handle null/undefined text gracefully', () => {
    render(
      <HighlightableText 
        text={null}
        searchTerm="test"
      />
    );
    
    expect(screen.queryByText(/test/)).not.toBeInTheDocument();

    render(
      <HighlightableText 
        text={undefined}
        searchTerm="test"
      />
    );
    
    expect(screen.queryByText(/test/)).not.toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(
      <HighlightableText 
        text="Test text"
        searchTerm=""
        className="custom-class"
      />
    );
    
    const element = screen.getByText('Test text');
    expect(element).toHaveClass('custom-class');
  });

  it('should handle accented characters properly', () => {
    render(
      <HighlightableText 
        text="Ação e Reação são importantes"
        searchTerm="acao"
      />
    );
    
    const highlighted = screen.getByText('Ação');
    expect(highlighted).toHaveClass('bg-yellow-300');
  });

  it('should not highlight when search term is only whitespace', () => {
    render(
      <HighlightableText 
        text="This is a test"
        searchTerm="   "
      />
    );
    
    expect(screen.getByText('This is a test')).toBeInTheDocument();
    expect(screen.queryByRole('mark')).not.toBeInTheDocument();
  });

  it('should handle very long text efficiently', () => {
    const longText = 'Lorem ipsum '.repeat(1000) + 'target text';
    
    render(
      <HighlightableText 
        text={longText}
        searchTerm="target"
      />
    );
    
    const highlighted = screen.getByText('target');
    expect(highlighted).toHaveClass('bg-yellow-300');
  });
});