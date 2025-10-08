# 🎯 Amazon Leadership Principles Prep - v3.1.0

**Interactive STAR Interview Preparation Tool**  
**Status**: ✅ Production Ready | 100% Coverage | All Tests Passing

[![Tests](https://img.shields.io/badge/tests-31%20passing-brightgreen)](https://github.com/hubdogestor/amazon-lp-prep)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](https://github.com/hubdogestor/amazon-lp-prep)
[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/hubdogestor/amazon-lp-prep)
[![Version](https://img.shields.io/badge/version-3.1.0-blue)](https://github.com/hubdogestor/amazon-lp-prep)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

---

## 📊 Project Status

### **100% Coverage Achieved** 🎉

| Metric | Status |
|--------|--------|
| **Total Cases** | 68/68 (100%) |
| **Well-Mapped** | 68 cases (≥3 questions each) |
| **Insufficient** | 0 cases |
| **Unmapped** | 0 cases |
| **TOP CASES** | 15/15 (100%) |
| **LPs at 100%** | 16/16 (ALL) |

### All 16 Leadership Principles at 100%

✅ Customer Obsession (3/3)  
✅ Ownership (8/8)  
✅ Invent and Simplify (7/7)  
✅ Are Right, A Lot (4/4)  
✅ Learn and Be Curious (5/5)  
✅ Hire and Develop the Best (3/3)  
✅ Insist on the Highest Standards (5/5)  
✅ Think Big (4/4)  
✅ Bias for Action (6/6)  
✅ Frugality (3/3)  
✅ Earn Trust (5/5)  
✅ Dive Deep (4/4)  
✅ Have Backbone; Disagree and Commit (4/4)  
✅ Deliver Results (5/5)  
✅ Strive to be Earth's Best Employer (1/1)  
✅ Success and Scale Bring Broad Responsibility (1/1)  

---

## 🎯 Key Features

### 1. **68 Real Professional Cases**
- Complete STAR(L) stories with PT/EN parity
- 10 follow-up questions per case
- Sourced from: Huawei, Bradesco, Sicredi, Unimed, HSBC, SEFAZ

### 2. **Interactive Question-to-Case Mapping**
- 165+ high-quality mappings across all LPs
- Smart case selection based on question type
- Score-based relevance ranking (80-98 range)

### 3. **Visual Organization**
- 🌟 TOP CASES: Best example per LP (15 cases)
- 👍 GOOD CASES: Quality score ≥70% (20 cases)
- Auto-scroll navigation
- Bilingual PT/EN interface

### 4. **Quality Assurance**
- All 31 tests passing
- ESLint with 0 errors
- Build optimization
- Automated auditing tools

---

## 📁 Project Structure

```
amazon-lp-prep/
├── src/
│   ├── components/       # React components
│   ├── contexts/         # App state management
│   ├── data/             # 68 case files + mappings
│   │   ├── questionsToCasesMapping.js (165+ mappings)
│   │   ├── principlesData.js
│   │   └── [16 LP folders]/
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Utility functions
├── archives/
│   └── backups/          # Version backups
├── base-conhecimento/    # Reference materials
├── public/               # Static assets
└── dist/                 # Production build
```

---

## 🛠️ Available Scripts

### Development
```bash
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build
```

### Testing
```bash
npm test                 # Run all tests (watch mode)
npm run test:ui          # Run tests with UI
npm run test:coverage    # Generate coverage report
```

### Quality Checks
```bash
npm run lint             # Run ESLint
```

### Deployment
```bash
npm run deploy           # Build + deploy to GitHub Pages
```

---

## 📈 Version History

### v3.1.0 (2025-10-07) - **Current**
- ✅ **100% coverage achieved** (68/68 cases)
- ✅ Completed Phases 0-5 systematic remapping
- ✅ Major cleanup: removed 14 temp files
- ✅ Fixed ESLint duplicate key error
- ✅ Reorganized project structure
- ✅ Added audit scripts to package.json
- ✅ All tests passing (31/31)

### v3.0.0 (2025-01-10)
- Added TOP CASES system (15 cases)
- Added GOOD CASES classification (20 cases)
- Enhanced visual badges
- Improved navigation
- ESLint configuration updates
- Project structure reorganization

---

## 🧪 Testing

### Test Coverage
```
Test Files:  4 passed (4)
Tests:       31 passed (31)
Duration:    ~3.15s
Coverage:    100% well-mapped cases
```

### Test Suites
- `textUtils.test.js` - Text utility functions (10 tests)
- `useDebounce.test.js` - Debounce hook (5 tests)
- `HighlightableText.test.jsx` - Text highlighting (10 tests)
- `usePrinciplesData.test.js` - Data management (6 tests)

---

## 🎓 Case Examples

### TOP CASE Example: Customer Obsession
**Case**: `bradesco-next-customer-ritual`  
**Impact**: NPS 31→76, churn -38%, MAU +156%  
**Evidence**: Quarterly user research, 67 usability tests, 3 pivots  
**Score**: 98 (exceptional)

### GOOD CASE Example: Bias for Action
**Case**: `sicredi-ml-credit-analysis`  
**Impact**: 72h MVP, 94% accuracy, R$6.8M additional approvals  
**Evidence**: Fast experimentation, data-driven decisions  
**Score**: 88 (good)

---

## 📚 Documentation

### Essential Docs
- [`README.md`](README.md) - This file
- [`CHANGELOG.md`](CHANGELOG.md) - Complete version history

### Archived
- `archives/backups/v3.1.0/` - Version 3.1.0 backup

---

## 🔍 Audit System

Manual audit can be done by reviewing the `src/data/questionsToCasesMapping.js` file to ensure all cases have proper mappings.

---

## 🤝 Contributing

### Development Workflow
1. Create feature branch
2. Make changes
3. Run `npm test` (ensure passing)
4. Run `npm run lint` (fix errors)
5. Run `npm run build` (verify build)
6. Commit and push

### Code Quality Standards
- All tests must pass
- ESLint errors must be fixed
- Build must succeed
- PT/EN parity in all cases

---

## 📝 License

Private project - All rights reserved

---

## 👤 Author

**Leonardo Menezes**  
Principal Engineer | Product Manager  
Preparing for Amazon Leadership Principles Interview

---

## 📊 Metrics Summary

| Phase | Cases | Mappings | Coverage | Status |
|-------|-------|----------|----------|--------|
| Start | - | - | 29/68 (43%) | - |
| Phase 0 | 7 | 12 | - | ✅ |
| Phase 1 | 5 | 22 | 36/68 (53%) | ✅ |
| Phase 2 | 12 | 49 | 46/68 (68%) | ✅ |
| Phase 3 | 11 | 52 | 48/68 (71%) | ✅ |
| Phase 4 | 11 | 19 | 61/68 (90%) | ✅ |
| Phase 5 | 7 | 11 | **68/68 (100%)** | ✅ |
| **TOTAL** | **46** | **165** | **+57pp** | **🏆** |

---

**Built with** ⚛️ React | ⚡ Vite | 🎨 Tailwind CSS | 🧪 Vitest

**Last Updated**: October 7, 2025  
**Version**: 3.1.0  
**Status**: Production Ready ✅
