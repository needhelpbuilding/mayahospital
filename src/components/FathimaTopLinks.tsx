"use client";

import React from "react";

interface TopLinksProps {
  onOpenAppointmentModal: () => void;
  onOpenQuestionModal: () => void;
  onOpenReportModal: () => void;
}

// Theme-consistent amethyst dividers (replaces leftover template gold)
const DIVIDER = "rgba(124, 58, 237, 0.14)";

export default function FathimaTopLinks({
  onOpenAppointmentModal,
  onOpenQuestionModal,
  onOpenReportModal,
}: TopLinksProps) {
  const links: {
    icon: string;
    label: [string, string];
    href: string;
    onClick?: () => void;
  }[] = [
    { icon: "fa-heart-pulse", label: ["health", "Checkup"], href: "#location", onClick: onOpenAppointmentModal },
    { icon: "fa-notes-medical", label: ["health", "packages"], href: "#location", onClick: onOpenAppointmentModal },
    { icon: "fa-comment-medical", label: ["ask a", "question"], href: "#ask", onClick: onOpenQuestionModal },
    { icon: "fa-file-waveform", label: ["download", "lab report"], href: "#report", onClick: onOpenReportModal },
    { icon: "fa-file-shield", label: ["insurance", "providers"], href: "#insurance" },
  ];

  return (
    <section style={{ backgroundColor: "var(--fadeblue)", borderBottom: `1px solid ${DIVIDER}` }}>
      <div className="container">
        <div className="row toplinks top-links-inner" style={{ padding: "26px 0" }}>
          {links.map((link, i) => (
            <a
              key={link.href + i}
              href={link.href}
              onClick={
                link.onClick
                  ? (e) => {
                      e.preventDefault();
                      link.onClick?.();
                    }
                  : undefined
              }
              style={i < links.length - 1 ? { borderRightColor: DIVIDER } : undefined}
            >
              <i className={`fa-solid ${link.icon} toplink-icon`} aria-hidden="true"></i>
              <h3 style={{ color: "var(--primary-color)" }}>
                {link.label[0]} <br /> {link.label[1]}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
