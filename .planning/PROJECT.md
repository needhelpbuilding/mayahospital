# Project: Maya Hospital — Medanta-inspired components

## Vision
Bring proven patient-first patterns from medanta.org to the Maya Hospital landing page, re-implemented in
Maya's design system with Maya's data (see specs/PRD.md §1).

## Requirements
### Validated
US-001 quick-action tiles · US-002 mobile action bar · US-003/004 doctor finder · US-005 stats strip ·
US-006 Get Directions on location card.

### Active (Under Discussion)
WhatsApp availability of helpline · real doctor roster · backend for forms.

### Out of Scope
Call-back form without backend, ailment index, news/blog, awards wall, international patients, video stories.

## Constraints
Next.js 16 / React 19, no new dependencies, theme tokens only, accessibility (PRD §6). Work on branch `dev`;
push only to `origin dev`, never `main`.

## Key Decisions
| Decision | Status | Rationale |
|----------|--------|-----------|
| Patterns only, no Medanta assets/copy | Approved | Brand & copyright |
| Replace FathimaTopLinks with MayaQuickActions | Approved | Same intents, richer Medanta-style tiles |
| Finder uses hospitalData DOCTORS | Approved | Has department, experience, OPD availability |
| No call-back modal | Approved | Forms have no backend; avoid fake submissions |
| Ralph loop not used; plans executed inline | Approved | Windows host without tmux; same GSD artefacts |
