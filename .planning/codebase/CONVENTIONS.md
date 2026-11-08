# Conventions
- New sections: `src/components/Maya<Name>.tsx`, default export, "use client" when interactive.
- Section shell: `<section id=… style={{ padding: "80-90px 0" }}>` + `.container` + header block
  (`<span className="subtitle">CAPS LABEL</span>` + `<h2 className="heading">`).
- Colours: plum `var(--primary-color)` #240b3b, amethyst #7c3aed (hover #6d28d9), lilac #c084fc, pale
  #ede9fe, cream `var(--fadeblue)`, emergency red #dc2626. Cards: radius 20–28px, border
  `1px solid rgba(124,58,237,.12-.15)`, optional `borderTop: 4px solid #7c3aed`, soft purple shadow.
- Buttons: pills (`borderRadius: 9999px`), uppercase 12–13px, letter-spacing 1–2px.
- Icons: `<i className="fa-solid fa-…" aria-hidden="true">`.
- Hover/focus styles for new components live in globals.css classes (not onMouseEnter).
- Phone links: `tel:${phone.replace(/\s+/g, '')}`.
