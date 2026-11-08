# Phase 2 Discovery

## Medanta patterns → Maya adaptation
| Medanta pattern | Maya component | Notes |
|---|---|---|
| Quick-action tile row (icon, label, circle arrow; carousel/grid) | MayaQuickActions (replaces FathimaTopLinks) | 6 tiles, CSS grid 6→3→2 cols, no carousel needed |
| Doctor finder (location + speciality dropdowns + Go) | MayaDoctorFinder | Single location → department select + text search, live results |
| Stats tiles (icon, number, label) | MayaStatsStrip | Real numbers only; count-up on view |
| Floating action bar (Doctors, Book, WhatsApp, Chat, Call back) | MayaMobileActionBar | Emergency 108 / Helpline / Book / Directions, phones only |
| Network card (Call + Get Direction) | Location card button | Add "Get Directions" pill |
| Call-back modal | — | Skipped: no backend |

## Existing hooks
- page.tsx `handleOpenAppointment(docName)` → AppointmentModal `initialDoctor` (matches DOCTORS names).
- Chatbot launcher fixed bottom-right (class `.suchi-launcher`) → must sit above mobile bar.
- Reveal wrapper `.reveal-on-scroll` for new sections.

## Risks
- AppointmentModal reads `initialDoctor` in useState initialiser — check it re-syncs when reopened with a
  different doctor (CoVe target).
- Count-up must not render 0 for no-JS / reduced-motion users (SSR shows final values).
