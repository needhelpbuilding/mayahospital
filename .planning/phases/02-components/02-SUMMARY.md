# Phase 2 Summary — Components (plans 02-01 … 02-04)

| Plan | Delivered | Files |
|------|-----------|-------|
| 02-01 | MayaQuickActions — 6 tiles (icon disc, title, sub-label, circle arrow), grid 6/3/2; replaces FathimaTopLinks on landing; "Find a Doctor" smooth-scrolls to finder and focuses the department select | MayaQuickActions.tsx, globals.css, page.tsx |
| 02-02 | MayaStatsStrip — 24x7 · 9+ specialities · 5.0★ (51+ reviews) · Since 2021, all from hospitalData; SSR renders final values, count-up once on view, static for reduced motion; sr-only final values | MayaStatsStrip.tsx |
| 02-03 | MayaDoctorFinder — department select + doctor/treatment/condition search, aria-live count, cards (photo, experience badge, department, degrees, designation, OPD timings, Book), empty state with Clear + helpline | MayaDoctorFinder.tsx |
| 02-04 | MayaMobileActionBar (≤768px: Call 108 / Helpline / Book / Directions, safe-area, chatbot lifted, body padding) + "Get Directions" pill and "Call Hospital" label on location card | MayaMobileActionBar.tsx, page.tsx |

## CoVe findings
- **Bug found & fixed (pre-existing):** AppointmentModal stays mounted and seeds state from props once, so
  `initialDoctor` was never applied. page.tsx now resolves the name to {doctor, department}
  (`resolveAppointmentTarget`) and remounts the modal with an incrementing `key` per open.
  Verified in browser: booking Dr. R. K. Sharma then Dr. Maya Verma pre-selects each doctor + department.
- Count-up: observer disconnects after first hit, rAF cancelled on unmount, no setState in effect body.

## Verification
- tsc clean; eslint on new files: 0 errors (1 `<img>` warning, consistent with site).
- Browser (CDP): ortho filter → 1 (Dr. S. K. Singh); "pregnancy" → Dr. Maya Verma; "zzzz" → empty state;
  Clear → 6; Find a Doctor tile → focus on #finder-department; mobile bar hidden on desktop.
- Screenshots 1440 / 390 / 320: no overflow, theme-consistent.
