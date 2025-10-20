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
        manualChunks(id) {
          // Separar React e bibliotecas core
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n';
            }
            // Outros node_modules em vendor
            return 'vendor';
          }

          // Separar cada LP em seu próprio chunk
          if (id.includes('src/data/') && !id.includes('consolidatedPrinciples')) {
            // LPs principais
            if (id.includes('customer_obsession')) return 'lp-customer-obsession';
            if (id.includes('ownership')) return 'lp-ownership';
            if (id.includes('program_management')) return 'lp-program-management';
            if (id.includes('dive_deep')) return 'lp-dive-deep';
            if (id.includes('invent_and_simplify')) return 'lp-invent-simplify';
            if (id.includes('earn_trust')) return 'lp-earn-trust';
            if (id.includes('deliver_results')) return 'lp-deliver-results';
            if (id.includes('stakeholder_management')) return 'lp-stakeholder';
            if (id.includes('learn_and_be_curious')) return 'lp-learn-curious';
            if (id.includes('bias_for_action')) return 'lp-bias-action';
            if (id.includes('prioritizing_and_influence')) return 'lp-prioritize';
            if (id.includes('deal_with_ambiguity')) return 'lp-ambiguity';
            if (id.includes('disagree_and_commit')) return 'lp-disagree-commit';
            if (id.includes('insist_on_highest_standards')) return 'lp-highest-standards';
            if (id.includes('are_right_a_lot')) return 'lp-right-lot';
            if (id.includes('think_big')) return 'lp-think-big';
            if (id.includes('hire_and_develop')) return 'lp-hire-develop';
            if (id.includes('frugality')) return 'lp-frugality';
            if (id.includes('broad_responsibility')) return 'lp-broad-responsibility';
            if (id.includes('best_employer')) return 'lp-best-employer';

            // Outros dados
            if (id.includes('icebreaker')) return 'data-icebreaker';
            if (id.includes('myQuestions')) return 'data-my-questions';
            if (id.includes('typicalQuestions')) return 'data-typical-questions';
            if (id.includes('questionsToCasesMapping')) return 'data-mappings';
          }

          // Componentes
          if (id.includes('src/components/')) {
            if (id.includes('cases/')) return 'components-cases';
            if (id.includes('layout/')) return 'components-layout';
            return 'components-common';
          }

          // Utils e hooks
          if (id.includes('src/utils/')) return 'utils';
          if (id.includes('src/hooks/')) return 'hooks';
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
    chunkSizeWarningLimit: 600
  },
  // Otimizações de desenvolvimento
  server: {
    hmr: {
      overlay: false
    }
  }
})
