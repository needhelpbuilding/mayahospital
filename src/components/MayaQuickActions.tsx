"use client";

import React from "react";

interface QuickActionsProps {
  onOpenAppointmentModal: () => void;
  onOpenQuestionModal: () => void;
  onOpenReportModal: () => void;
}

interface QuickAction {
  icon: string;
  title: string;
  sub: string;
  href: string;
  onClick?: () => void;
}

// Jump to the doctor finder and put keyboard focus on its first filter
function goToDoctorFinder() {
  const section = document.getElementById("find-doctor");
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  const select = document.getElementById("finder-department") as HTMLSelectElement | null;
  // preventScroll keeps the smooth scroll from being cut short
  window.setTimeout(() => select?.focus({ preventScroll: true }), 450);
}

/**
 * Quick-action tile row: one-tap entry points for the most common patient intents.
 * Pattern inspired by large hospital portals, implemented in Maya's purple design system.
 */
export default function MayaQuickActions({
  onOpenAppointmentModal,
  onOpenQuestionModal,
  onOpenReportModal,
}: QuickActionsProps) {
  const actions: QuickAction[] = [
    { icon: "fa-user-doctor", title: "Find a Doctor", sub: "Search by speciality", href: "#find-doctor", onClick: goToDoctorFinder },
    { icon: "fa-calendar-check", title: "Book Appointment", sub: "OPD consultation", href: "#find-doctor", onClick: onOpenAppointmentModal },
    { icon: "fa-heart-pulse", title: "Health Checkup", sub: "Preventive packages", href: "#find-doctor", onClick: onOpenAppointmentModal },
    { icon: "fa-comment-medical", title: "Ask a Question", sub: "Talk to our team", href: "#location", onClick: onOpenQuestionModal },
    { icon: "fa-file-waveform", title: "Lab Reports", sub: "Download online", href: "#location", onClick: onOpenReportModal },
    { icon: "fa-file-shield", title: "Insurance & TPA", sub: "Cashless & Ayushman", href: "#insurance" },
  ];

  return (
    <section aria-label="Quick actions" className="maya-quick-actions">
      <div className="container">
        <ul className="maya-quick-grid">
          {actions.map((action) => (
            <li key={action.title}>
              <a
                href={action.href}
                className="maya-quick-tile"
                onClick={
                  action.onClick
                    ? (e) => {
                        e.preventDefault();
                        action.onClick?.();
                      }
                    : undefined
                }
              >
                <span className="maya-quick-icon" aria-hidden="true">
                  <i className={`fa-solid ${action.icon}`}></i>
                </span>
                <span className="maya-quick-text">
                  <span className="maya-quick-title">{action.title}</span>
                  <span className="maya-quick-sub">{action.sub}</span>
                </span>
                <span className="maya-quick-arrow" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
