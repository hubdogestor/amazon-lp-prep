// src/test/setup.js
import '@testing-library/jest-dom';

// Mock para performance API
global.performance = {
  mark: vi.fn(),
  measure: vi.fn(),
  clearMarks: vi.fn(),
  clearMeasures: vi.fn(),
  now: vi.fn(() => Date.now())
};

// Mock para console methods em testes
global.console = {
  ...console,
  log: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
  info: vi.fn(),
  debug: vi.fn()
};

// Setup para testes de componentes React
beforeEach(() => {
  vi.clearAllMocks();
});