# Architecture
- Single landing route `src/app/page.tsx` ("use client") composes section components and owns modal state
  (appointment w/ preselected doctor, enquiry, question, report).
- Sections receive callbacks (`onOpenAppointmentModal(docName?)`) instead of global state.
- Scroll reveal: sections wrapped in `.reveal-on-scroll`; page effect adds `html.reveal-ready` + IntersectionObserver.
- Forms are front-end only (no API routes) — they display a confirmation state.
- Fixed layers: header (z 1000), chatbot launcher (z 9999), page loader (z 99999).
