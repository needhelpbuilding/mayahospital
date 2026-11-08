# Stack
- Next.js 16.4 (app router, Turbopack, cacheComponents) · React 19.3 · TypeScript 5
- Styling: inline styles + `src/app/globals.css` (theme tokens, `!important` overrides) + template
  `public/css/fathima_combined.css`. Tailwind 4 installed but not imported.
- Icons: Font Awesome 6.5.1 (CDN link in layout), lucide-react in a few modals.
- Fonts: Plus Jakarta Sans (headings) + Inter (body), Google Fonts link in layout.
- Data: `src/data/hospitalData.ts` (HOSPITAL_INFO, DEPARTMENTS, DOCTORS, REVIEWS, HEALTH_PACKAGES).
- Commands: `npx tsc --noEmit`, `npx eslint <files>`, `npx next dev -p 5434`.
