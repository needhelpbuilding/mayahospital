# Roadmap — Milestone 1: Medanta-inspired landing components

## Progress
| Phase | Name | Status | Plans |
|-------|------|--------|-------|
| 1 | Data & foundations | Complete | 01-01 |
| 2 | Components | Complete | 02-01 … 02-04 |
| 3 | Verification & ship to dev | Complete | 03-01 |

### Phase 1: Data & foundations
**Goal**: Fix broken doctor photo in hospitalData DOCTORS; shared helpers (tel/maps URLs) used by new components.
**Depends on**: None · **Traces to**: PRD §4, US-003, US-006

### Phase 2: Components
**Goal**: MayaQuickActions (US-001/004), MayaStatsStrip (US-005), MayaDoctorFinder (US-003/004),
MayaMobileActionBar + Get Directions (US-002/006); wire into page.tsx.
**Depends on**: Phase 1 · **Traces to**: PRD §3 Epics A–C

### Phase 3: Verification & ship
**Goal**: tsc, eslint, desktop/390/320 screenshots, reduced-motion & keyboard checks; commit; push to origin dev.
**Depends on**: Phase 2 · **Traces to**: PRD §6, §8
