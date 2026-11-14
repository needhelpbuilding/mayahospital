"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DOCTORS } from "@/data/hospitalData";

interface DoctorsProps {
  onOpenAppointmentModal: (docName?: string) => void;
}

export default function FathimaDoctors({ onOpenAppointmentModal }: DoctorsProps) {
  // Mobile active doctor card state (for tap-to-inspect credentials)
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  // 6 Certified Doctors arranged in 2 interlocking honeycomb rows (3 per row)
  // Row 1: Urology, Neurosurgery, Gynecology & Obstetrics
  // Row 2: Gynecology & Obstetrics, Anorectal Surgery, General Surgery
  const row1 = DOCTORS.slice(0, 3);
  const row2 = DOCTORS.slice(3, 6);

  // Subtle organic disorder offsets (slight vertical shifts for natural honeycomb feel)
  const subtleDisorderOffsets = ["0px", "5px", "-3px", "6px", "-2px", "4px"];

  const handleCardClick = (docSlug: string, docName: string) => {
    if (activeMobileCard === docSlug) {
      onOpenAppointmentModal(docName);
    } else {
      setActiveMobileCard(docSlug);
    }
  };

  const renderDoctorHexagon = (doc: typeof DOCTORS[0], idx: number) => {
    const isActive = activeMobileCard === doc.slug;
    return (
      <div
        key={doc.id}
        className={`hex-card ${isActive ? "is-active-mobile" : ""}`}
        style={{
          transform: `translateY(${subtleDisorderOffsets[idx % subtleDisorderOffsets.length]})`
        }}
        onClick={() => handleCardClick(doc.slug, doc.name)}
      >
        <div className="hex-content">
          {/* Default State: Doctor Image Fully Filling Borderless Hexagon */}
          <div className="hex-image-holder">
            <img src={doc.image} alt={doc.name} className="hex-img" />
          </div>

          {/* Hover / Tap State: Pure White Card with Centered Details & Action Links */}
          <div className="hex-hover-panel">
            <div className="hex-text-inner">
              <h4 className="hex-doc-name">{doc.name}</h4>
              <p className="hex-doc-edu">{doc.shortDegrees || doc.degrees}</p>
              <p className="hex-doc-spec">{doc.department}</p>

              {doc.availability && (
                <div className="hex-doc-timing" title={doc.availability}>
                  <i className="fa-regular fa-clock" style={{ marginRight: "4px" }}></i>
                  <span>{doc.availability.slice(0, 24)}...</span>
                </div>
              )}

              <div className="hex-actions">
                <Link
                  href={`/doctors/${doc.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="hex-btn-profile"
                >
                  <span>Profile</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "9px" }}></i>
                </Link>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenAppointmentModal(doc.name);
                  }}
                  className="hex-btn-book"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="doctors"
      style={{
        paddingTop: "90px",
        paddingBottom: "110px",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        scrollMarginTop: "90px"
      }}
    >
      <div style={{ width: "100%", maxWidth: "1600px", margin: "0 auto", padding: "0 16px", boxSizing: "border-box" }}>
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="subtitle">MEET OUR SURGICAL &amp; MEDICAL TEAM</span>
          <h2 className="heading" style={{ marginBottom: "15px" }}>
            Our Dedicated Doctors &amp; Surgeons
          </h2>
          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "15px",
              color: "#6b5e7a",
              lineHeight: "24px"
            }}
          >
            Hover or tap on any doctor to view their credentials, clinical availability, and department. Click &apos;Profile&apos; for their background or book an instant consultation.
          </p>

          {/* Mobile swipe hint */}
          <div className="mobile-swipe-hint">
            <i className="fa-solid fa-arrows-left-right" style={{ marginRight: "6px" }}></i>
            Swipe horizontally or tap cards to view credentials
          </div>
        </div>

        {/* Honeycomb Interlocking Canvas: 2 Staggered Rows of 3 Large Borderless Hexagons */}
        <div className="honeycomb-scroll-wrapper">
          <div className="honeycomb-container">
            {/* Row 1: 3 Doctors (Stagger Left) */}
            <div className="honeycomb-row honeycomb-row-stagger-1">
              {row1.map((doc, idx) => renderDoctorHexagon(doc, idx))}
            </div>

            {/* Row 2: 3 Doctors (Stagger Right to Interlock Naturally) */}
            <div className="honeycomb-row honeycomb-row-stagger-2">
              {row2.map((doc, idx) => renderDoctorHexagon(doc, idx + 3))}
            </div>
          </div>
        </div>

        {/* Bottom Directory Link CTA */}
        <div style={{ textAlign: "center", marginTop: "45px" }}>
          <Link
            href="/doctors"
            style={{
              backgroundColor: "#245BFF",
              color: "#ffffff",
              padding: "13px 32px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 10px 30px rgba(36, 91, 255, 0.2)",
              transition: "all 0.25s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1A45C8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#245BFF";
            }}
          >
            <i className="fa-solid fa-user-doctor" style={{ color: "#FF8A00" }}></i>
            <span>View All Doctors Directory &amp; Full Profiles</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
