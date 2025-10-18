import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSearch } from '../useSearch.js';
import typicalQuestions from '../../data/typicalQuestions.js';

vi.mock('../../data/typicalQuestions.js', () => ({
  default: {
    p1: {
      pt: ['Pergunta típica 1'],
      en: ['Typical question 1'],
    },
  },
}));

describe('useSearch', () => {
  const principlesData = [
    {
      id: 'p1',
      name: 'Principle 1',
      cases: [
        {
          id: 'c1',
          title: 'Case 1',
          pt: {
            s: 'Situação 1',
            t: 'Tarefa 1',
            a: 'Ação 1',
            r: 'Resultado 1',
            l: 'Aprendizado 1',
          },
          fups: [
            { q: 'FUP 1?' },
            { q: 'FUP 2?' },
          ]
        },
      ],
    },
  ];

  it('should return case search results when searching', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSearch(principlesData, 'pt', null));

    act(() => {
      result.current.setSearchTerm('Tarefa 1');
    });

    act(() => {
        vi.advanceTimersByTime(300);
    });

    expect(result.current.caseSearchResults.length).toBe(1);
    expect(result.current.caseSearchResults[0].c.id).toBe('c1');
  });

  it('should return fup search results when searching', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSearch(principlesData, 'pt', null));

    act(() => {
      result.current.setQuestionSearch('FUP 1');
    });

    act(() => {
        vi.advanceTimersByTime(300);
    });

    expect(result.current.fupSearchResults.length).toBe(1);
    expect(result.current.fupSearchResults[0].f.q).toBe('FUP 1?');
  });

  it('should return typical question search results when searching', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSearch(principlesData, 'pt', null));

    act(() => {
      result.current.setTypicalQuestionSearch('típica 1');
    });

    act(() => {
        vi.advanceTimersByTime(300);
    });

    expect(result.current.typicalQuestionSearchResults.length).toBe(1);
    expect(result.current.typicalQuestionSearchResults[0].q).toBe('Pergunta típica 1');
  });

  it('should filter typical questions by looping group', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSearch(principlesData, 'pt', 'L1'));

    act(() => {
      result.current.setTypicalQuestionSearch('típica 1');
    });

    act(() => {
        vi.advanceTimersByTime(300);
    });

    // This test assumes that 'p1' is not in looping group 'L1'.
    // The mock for loopingGroups should be updated if this is not the case.
    expect(result.current.typicalQuestionSearchResults.length).toBe(0);
  });

  it('should handle multi-word search', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSearch(principlesData, 'pt', null));

    act(() => {
      result.current.setSearchTerm('Tarefa 1');
    });

    act(() => {
        vi.advanceTimersByTime(300);
    });

    expect(result.current.caseSearchResults.length).toBe(1);

    act(() => {
      result.current.setSearchTerm('Tarefa 2');
    });

    act(() => {
        vi.advanceTimersByTime(300);
    });

    expect(result.current.caseSearchResults.length).toBe(0);
  });

  it('should return no results when search term does not match', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSearch(principlesData, 'pt', null));

    act(() => {
      result.current.setSearchTerm('non-existent term');
    });

    act(() => {
        vi.advanceTimersByTime(300);
    });

    expect(result.current.caseSearchResults.length).toBe(0);
  });
});