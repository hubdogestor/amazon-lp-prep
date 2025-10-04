/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/amazon-lp-prep/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'src/test/',
        '**/*.test.{js,jsx}',
        '**/*.spec.{js,jsx}',
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React em chunk próprio
          react: ['react', 'react-dom'],
          // Separar dados dos princípios em chunks menores por categoria
          'data-core': ['./src/data/consolidatedPrinciples.js'],
          'data-utils': ['./src/data/icebreaker.js', './src/data/myQuestions.js', './src/data/typicalQuestions.js'],
          // Separar utilitários
          'utils': ['./src/utils/textUtils.js', './src/utils/caseUtils.js'],
          // Separar hooks
          'hooks': ['./src/hooks/useDebounce.js', './src/hooks/useHighlight.js'],
          // Separar Lucide icons
          'icons': ['lucide-react']
        }
      }
    },
    // Otimizar para performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    // Aumentar limite de chunk para warning
    chunkSizeWarningLimit: 800
  },
  // Otimizações de desenvolvimento
  server: {
    hmr: {
      overlay: false
    }
  }
})
