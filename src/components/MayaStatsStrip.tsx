"use client";

import React, { useEffect, useRef, useState } from "react";
import { HOSPITAL_INFO, DEPARTMENTS } from "@/data/hospitalData";

interface Stat {
  icon: string;
  label: string;
  /** Numeric stats count up; text stats render as-is */
  value?: number;
  decimals?: number;
  suffix?: string;
  text?: string;
}

// Only real figures from hospitalData — no invented numbers
const STATS: Stat[] = [
  { icon: "fa-truck-medical", text: "24x7", label: "Emergency, ICU & Ambulance" },
  { icon: "fa-stethoscope", value: DEPARTMENTS.length, suffix: "+", label: "Clinical Specialities" },
  {
    icon: "fa-star",
    value: parseFloat(HOSPITAL_INFO.rating),
    decimals: 1,
    suffix: "★",
    label: `Patient Rating · ${HOSPITAL_INFO.reviewCount} Reviews`,
  },
  { icon: "fa-hospital", text: `Since ${HOSPITAL_INFO.established}`, label: "Serving Lakhimpur Kheri" },
];

const DURATION_MS = 1400;

/**
 * Trust stats strip with count-up on first view.
 * Server HTML always contains the final values (progress = 1), so no-JS and reduced-motion users never see zeros.
 */
export default function MayaStatsStrip() {
  const [progress, setProgress] = useState(1);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION_MS);
          setProgress(1 - Math.pow(1 - t, 3)); // ease-out cubic
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} aria-label="Maya Hospital at a glance" className="maya-stats-strip">
      <div className="container">
        <ul className="maya-stats-grid">
          {STATS.map((stat) => {
            const shown =
              stat.value !== undefined
                ? (stat.value * progress).toFixed(stat.decimals ?? 0) + (stat.suffix ?? "")
                : stat.text;
            const finalValue =
              stat.value !== undefined ? stat.value.toFixed(stat.decimals ?? 0) + (stat.suffix ?? "") : stat.text;
            return (
              <li key={stat.label} className="maya-stat">
                <span className="maya-stat-icon" aria-hidden="true">
                  <i className={`fa-solid ${stat.icon}`}></i>
                </span>
                <span>
                  {/* Screen readers always get the final value, never the animating one */}
                  <span className="maya-stat-value" aria-hidden="true">{shown}</span>
                  <span className="sr-only">{finalValue}</span>
                  <span className="maya-stat-label">{stat.label}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
