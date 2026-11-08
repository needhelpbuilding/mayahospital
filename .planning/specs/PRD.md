# PRD: Maya Hospital — Medanta-inspired landing components

## 1. Overview
Adapt the most effective patient-facing UI patterns from a large Indian hospital site (medanta.org) to the
Maya Hospital landing page (Meerpur, Lakhimpur Kheri). Patterns only — every component is re-implemented in
Maya's own purple design system with Maya's own data. No Medanta assets, logos, images, copy or code.

Source analysis (Nov 2026, homepage): header emergency CTA, hero with Find a Doctor / Book Appointment,
quick-action tile row, specialities showcase, ailment search, doctor finder (location + speciality dropdowns),
numbered services, hospital network cards (Call / Get Directions), stats tiles, patient stories, awards,
news/blogs, floating action bar, call-back modal.

## 2. Target Users
| User | Description | Primary need |
|------|-------------|--------------|
| Emergency caller | Family member in a crisis, on a phone | Call 108 / hospital in one tap |
| OPD patient | Local patient choosing a specialist | Find the right doctor + OPD timings, book |
| Planner | Pregnancy / surgery / check-up research | Trust signals, services, insurance, directions |

## 3. User Stories
### Epic A: Fast actions
- **US-001** As any visitor I want a row of clear action tiles so I can start the most common task in one tap.
  - [ ] 6 tiles: Find a Doctor, Book Appointment, Health Checkup, Ask a Question, Lab Report, Insurance
  - [ ] Each tile: icon, label, arrow affordance; keyboard accessible; 2-column grid on phones
- **US-002** As a phone user I want a sticky bottom action bar so emergency/booking is always reachable.
  - [ ] ≤768px only: Emergency 108, Helpline, Book, Directions; safe-area aware; chatbot moves above it
  - [ ] Hidden on desktop; does not cover page footer content (body bottom padding)

### Epic B: Find a doctor
- **US-003** As an OPD patient I want to filter doctors by department and name.
  - [ ] Department dropdown (from DEPARTMENTS) + name/speciality text search + live result count
  - [ ] Result cards: photo, name, degrees, designation, experience, OPD availability, Book button
  - [ ] Book opens the appointment modal pre-filled with that doctor
  - [ ] Empty state with "Clear filters" and helpline call link
- **US-004** Quick-action "Find a Doctor" scrolls to the finder and focuses the department filter.

### Epic C: Trust
- **US-005** As a planner I want key facts at a glance (stats strip).
  - [ ] Only real data from HOSPITAL_INFO / DEPARTMENTS: years of service (since established), specialities
        count, rating + review count, 24x7 emergency
  - [ ] Count-up animation when visible; static under prefers-reduced-motion and before JS
- **US-006** Location card gets Medanta-style "Get Directions" action (Google Maps) next to call.

## 4. Technical Requirements
| Layer | Tech | Rationale |
|-------|------|-----------|
| Framework | Next.js 16 app router, React 19, client components | Existing |
| Styling | Inline styles + globals.css classes, theme tokens | Match existing conventions |
| Icons | Font Awesome 6.5 (CDN) | Already used site-wide |
| Data | src/data/hospitalData.ts | Single source of truth |

No backend exists (modals only show a confirmation), so no new form that pretends to submit data.

## 5. Screens
Landing page order after change: Hero → Quick Actions → Stats strip → About → Founder → Departments →
Doctor Finder → Doctors honeycomb → Facilities → Service → Testimonials → Location → Footer; plus the
mobile action bar (fixed).

## 6. Non-Functional
- 100% visual consistency with existing theme (plum #240b3b, amethyst #7c3aed, lilac #c084fc, --fadeblue,
  Plus Jakarta Sans / Inter, pill buttons, 20–28px radius cards).
- WCAG: labels for controls, focus-visible, reduced motion, ≥11px text, 320px phones without overflow.
- No new dependencies.

## 7. MVP Scope
In: US-001…US-006. Out: call-back form (no backend), ailment A–Z index, news/blogs, awards wall,
international patients, video stories, multi-location network.

## 8. Success Metrics
| Metric | Target |
|--------|--------|
| Taps to call emergency on mobile | 1 from anywhere on page |
| Taps to book a specific doctor | ≤3 |
| tsc / eslint errors introduced | 0 |

## 9. Open Questions (assumptions made, confirm with owner)
- Doctor roster/photos are placeholders (see FathimaDoctors.tsx note) — finder uses hospitalData DOCTORS.
- Is +91 91611 03325 on WhatsApp? If yes, a WhatsApp action can be added to the mobile bar.
- Real backend for appointment/call-back requests.
