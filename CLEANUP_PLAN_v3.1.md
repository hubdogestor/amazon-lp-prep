# Amazon LP Prep - Cleanup Plan v3.1

**Date**: 2025-10-07  
**Status**: In Progress  
**Target**: Production-ready v3.1 release

---

## 1. Files to DELETE (Obsolete/Temporary)

### Root Level - Temporary Scripts
- [x] `audit-all-mappings.mjs` (use case-validation/audit-final.mjs)
- [x] `check-learn-curious-after.mjs` (Phase 3 temp)
- [x] `check-learn-curious.mjs` (Phase 3 temp)
- [x] `count-bias-for-action.mjs` (Phase 3 temp)
- [x] `debug-final.mjs` (debug temp)
- [x] `debug-getCaseQuestions.mjs` (debug temp)
- [x] `temp_analyze.cjs` (temp analysis)
- [x] `temp_coverage_ownership.mjs` (Phase 3 temp)
- [x] `temp_coverage_report.mjs` (temp report)
- [x] `test-ownership-tooltips.mjs` (Phase 3 test)
- [x] `validate-5-cases.mjs` (Phase 3 validation)
- [x] `validate-case-ids.mjs` (validation temp)
- [x] `verify-all-5-cases.mjs` (Phase 3 verification)
- [x] `nul` (Windows artifact)

### Root Level - Old Backups
- [x] `amazon-lp-prep-v3.0.0-2025-10-06.tar.gz` (move to archives/)

### Root Level - Old Documentation (move to archives/)
- [x] `PHASE2_OWNERSHIP_INVENT_PROPOSAL.md`
- [x] `PHASE3_BIAS_FOR_ACTION_PROPOSAL.md`
- [x] `PHASE3_LEARN_CURIOUS_PROPOSAL.md`
- [x] `PHASE3_OWNERSHIP_PROPOSAL.md`
- [x] `PHASE4_AUTO_IMPLEMENTATION.md`
- [x] `TOP_CASES_MAPPING_PROPOSAL.md`
- [x] `CONCLUSAO-v3.0.md`
- [x] `RELEASE-v3.0.0.md`

### case-validation/ - Obsolete Files
- [x] `App.jsx` (not used in validation)
- [x] `caseAnalyzer.js` (superseded by analyzer3/)
- [x] `simpleCaseAnalyzer.js` (superseded)
- [x] `test_analyzer.js` (old test)
- [x] `test_enhanced_analyzer.js` (old test)
- [x] `deep_case_processor.js` (not used)
- [x] `simple_batch_processor.js` (not used)

### case-validation/src/ - Duplicate UI Files
- [x] Entire `case-validation/src/` folder (duplicates root src/)

---

## 2. Folders to REORGANIZE

### Create `archives/phases/` Structure
```
archives/
  phases/
    phase0-1/
    phase2/
    phase3/
    phase4-5/
  backups/
    v3.0.0/
```

### Keep Active Documentation
```
docs/
  CHECKLIST_VISUAL_v2.md ✅
  REVIEW_TRACKER.md ✅
  MOTOR_DE_ANALISE_3.0_template.md ✅
  SYNTHESIS_template.md ✅
```

---

## 3. Files to KEEP & ORGANIZE

### Root Level - Essential
- ✅ `AGENTS.md` (primary instructions)
- ✅ `SYNTHESIS.md` (Motor 3.0 base)
- ✅ `ORIENTACOES_CLAUDE.md` (guidelines)
- ✅ `CHANGELOG.md` (history)
- ✅ `README_ALL_IN_ONE.md` (main readme)
- ✅ `PROCESSO_REFINAMENTO_FUPs.md` (FUPs process)
- ✅ `PHASE5_PROJECT_COMPLETE.md` (final status)

### case-validation/ - Active Tools
- ✅ `audit-final.mjs` (primary audit tool)
- ✅ `audit-complete.mjs` (backup audit)
- ✅ `README.md` (validation docs)
- ✅ `analyzer3/` (Motor 3.0 - future use)
- ✅ `reports/` (active reports)
- ✅ `scripts/` (utility scripts)

---

## 4. Code Quality Tasks

### ESLint & Prettier
- [ ] Run `npm run lint` and fix all issues
- [ ] Configure Prettier for consistent formatting
- [ ] Fix unused imports/variables

### React Components
- [ ] Check all components for warnings
- [ ] Verify prop-types usage
- [ ] Remove console.logs from production code

### Data Files
- [ ] Verify all case IDs match
- [ ] Check questionsToCasesMapping.js structure
- [ ] Validate all scores are in range

---

## 5. Git & Deployment

### GitHub
- [ ] Create v3.1.0 tag
- [ ] Push all changes
- [ ] Create GitHub Release

### Backup
- [ ] Create `amazon-lp-prep-v3.1.0-2025-10-07.tar.gz`
- [ ] Move to `archives/backups/v3.1.0/`
- [ ] Update CHANGELOG.md

---

## 6. Package.json Scripts to Add

```json
"scripts": {
  "audit:final": "node case-validation/audit-final.mjs",
  "audit:complete": "node case-validation/audit-complete.mjs",
  "clean:temp": "node scripts/clean-temp-files.js",
  "archive:phases": "node scripts/archive-phases.js"
}
```

---

## Execution Order

1. ✅ Create cleanup plan
2. ⏳ Move phase docs to archives/
3. ⏳ Delete temporary scripts
4. ⏳ Remove obsolete validation files
5. ⏳ Run ESLint fixes
6. ⏳ Run tests + build
7. ⏳ Create v3.1.0 backup
8. ⏳ Git commit + push
9. ⏳ Create GitHub release

---

**Status**: Ready to execute cleanup operations
