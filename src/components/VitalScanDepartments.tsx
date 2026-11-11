"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DEPARTMENTS, getDoctorsByDepartment } from "@/data/hospitalData";

interface VitalScanDepartmentsProps {
  onOpenAppointmentModal?: (deptName?: string) => void;
}

export default function VitalScanDepartments({ onOpenAppointmentModal }: VitalScanDepartmentsProps) {
  const [activeSlug, setActiveSlug] = useState<string>("urology");

  return (
    <section id="departments" style={{ padding: "70px 0 80px 0", backgroundColor: "#f8fafc" }}>
      <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "#245BFF",
              display: "block",
              marginBottom: "8px"
            }}
          >
            CENTRES OF CLINICAL EXCELLENCE
          </span>
          <h2
            style={{
              fontSize: "clamp(26px, 3.2vw, 38px)",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 12px 0",
              letterSpacing: "-0.02em"
            }}
          >
            All Specialised Departments &amp; Services
          </h2>
          <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "14.5px", color: "#64748b", lineHeight: "22px" }}>
            Explore our state-of-the-art medical services, advanced inpatient operations, and certified consultant doctors at Maya Hospital, Lakhimpur Kheri.
          </p>
        </div>

        {/* 2-Column Grid of Flat Blue Service Pill Cards (Matching screenshot style) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "14px",
            marginBottom: "36px"
          }}
        >
          {DEPARTMENTS.map((dept) => {
            const isSelected = activeSlug === dept.slug;
            return (
              <button
                key={dept.id}
                onClick={() => {
                  setActiveSlug(dept.slug);
                  // Scroll smoothly to detail block if on mobile
                  const el = document.getElementById("department-details-showcase");
                  if (el && window.innerWidth < 768) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  border: isSelected ? "2.5px solid #0f172a" : "2px solid #245BFF",
                  borderRadius: "16px",
                  padding: "16px 22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  textAlign: "left",
                  boxShadow: isSelected
                    ? "0 10px 24px rgba(36, 91, 255, 0.4), inset 0 0 0 1px rgba(255,255,255,0.3)"
                    : "0 4px 14px rgba(36, 91, 255, 0.2)",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isSelected ? "scale(1.01)" : "scale(1)"
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "#1c4cd4";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "#245BFF";
                    e.currentTarget.style.transform = "scale(1)";
                  }
                }}
              >
                {/* Left side: Icon + Title + Subtitle */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", overflow: "hidden" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "19px",
                      color: "#ffffff",
                      flexShrink: 0
                    }}
                  >
                    <i className={dept.iconClass}></i>
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: "0 0 3px 0",
                        fontSize: "15.5px",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-0.01em",
                        lineHeight: "1.2"
                      }}
                    >
                      {dept.name}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.85)",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {dept.shortName} • {dept.timing}
                    </p>
                  </div>
                </div>

                {/* Right side: Right chevron icon */}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.18)",
                    color: isSelected ? "#245BFF" : "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    flexShrink: 0,
                    marginLeft: "12px",
                    transition: "all 0.2s ease"
                  }}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </button>
            );
          })}
        </div>

        {/* Can't find what you are looking for Banner (Matching bottom banner in screenshot) */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1.5px solid #e2e8f0",
            borderRadius: "16px",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)",
            marginBottom: "50px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "rgba(36, 91, 255, 0.08)",
                color: "#245BFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px"
              }}
            >
              <i className="fa-solid fa-circle-question"></i>
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>
                Can&apos;t find what you are looking for?
              </div>
              <div style={{ fontSize: "12.5px", color: "#64748b" }}>
                Speak with our 24x7 clinical triage team to find the exact doctor or treatment needed.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="tel:+919161103325"
              style={{
                backgroundColor: "#245BFF",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 12px rgba(36, 91, 255, 0.25)"
              }}
            >
              <i className="fa-solid fa-phone" style={{ fontSize: "11px" }}></i>
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

        {/* Selected Department Showcase Card (Detail view) */}
        {(() => {
          const selected = DEPARTMENTS.find((d) => d.slug === activeSlug) || DEPARTMENTS[0];
          const doctors = getDoctorsByDepartment(selected.slug);

          return (
            <div
              id="department-details-showcase"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
                padding: "36px",
                boxSizing: "border-box"
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "40px",
                  alignItems: "flex-start"
                }}
              >
                {/* Left Description and Services */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <span
                      style={{
                        backgroundColor: "rgba(36, 91, 255, 0.1)",
                        color: "#245BFF",
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase"
                      }}
                    >
                      {selected.shortName}
                    </span>
                    {selected.emergencySupport && (
                      <span
                        style={{
                          backgroundColor: "#fef2f2",
                          color: "#ef4444",
                          padding: "4px 12px",
                          borderRadius: "9999px",
                          fontSize: "12px",
                          fontWeight: 700
                        }}
                      >
                        24x7 Emergency Ready
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "#0f172a",
                      margin: "0 0 16px 0",
                      lineHeight: "1.2"
                    }}
                  >
                    {selected.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: "24px",
                      color: "#475569",
                      marginBottom: "24px"
                    }}
                  >
                    {selected.fullDesc}
                  </p>

                  <h4
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#0f172a",
                      margin: "0 0 14px 0"
                    }}
                  >
                    Treatments &amp; Clinical Procedures:
                  </h4>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "10px",
                      marginBottom: "28px"
                    }}
                  >
                    {selected.services.map((srv, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "13px",
                          color: "#334155"
                        }}
                      >
                        <i className="fa-solid fa-circle-check" style={{ color: "#245BFF", fontSize: "14px", marginTop: "3px" }}></i>
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => onOpenAppointmentModal && onOpenAppointmentModal(selected.name)}
                      style={{
                        backgroundColor: "#245BFF",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "9999px",
                        padding: "12px 26px",
                        fontSize: "13px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 14px rgba(36, 91, 255, 0.3)"
                      }}
                    >
                      <span>Book Consultation in {selected.shortName}</span>
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
                    </button>

                    <Link
                      href={`/departments/${selected.slug}`}
                      style={{
                        color: "#0f172a",
                        textDecoration: "none",
                        border: "1.5px solid #cbd5e1",
                        borderRadius: "9999px",
                        padding: "11px 22px",
                        fontSize: "13px",
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center"
                      }}
                    >
                      View Department Page
                    </Link>
                  </div>
                </div>

                {/* Right Doctors and Visual Card */}
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "18px",
                    border: "1px solid #e2e8f0",
                    padding: "24px"
                  }}
                >
                  <h4
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "#64748b",
                      margin: "0 0 16px 0"
                    }}
                  >
                    Faculty Specialists ({doctors.length})
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {doctors.map((doc) => (
                      <div
                        key={doc.id}
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "14px",
                          border: "1px solid #e2e8f0",
                          padding: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: "14px"
                        }}
                      >
                        <img
                          src={doc.image}
                          alt={doc.name}
                          style={{
                            width: "56px",
                            height: "56px",
                            borderRadius: "12px",
                            objectFit: "cover",
                            border: "1.5px solid #245BFF"
                          }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h5
                            style={{
                              margin: "0 0 2px 0",
                              fontSize: "14.5px",
                              fontWeight: 700,
                              color: "#0f172a"
                            }}
                          >
                            {doc.name}
                          </h5>
                          <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#64748b" }}>
                            {doc.designation}
                          </p>
                          <div style={{ fontSize: "11px", color: "#245BFF", fontWeight: 600 }}>
                            <i className="fa-regular fa-clock" style={{ marginRight: "4px" }}></i>
                            {doc.opdTimings}
                          </div>
                        </div>

                        <Link
                          href={`/doctors/${doc.slug}`}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(36, 91, 255, 0.08)",
                            color: "#245BFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            textDecoration: "none"
                          }}
                          aria-label={`View profile of ${doc.name}`}
                        >
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "16px",
                      borderTop: "1px solid #e2e8f0",
                      fontSize: "12px",
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <i className="fa-solid fa-shield-halved" style={{ color: "#245BFF" }}></i>
                    <span>Consultation fee fixed &amp; transparent: ₹350 - ₹600</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
