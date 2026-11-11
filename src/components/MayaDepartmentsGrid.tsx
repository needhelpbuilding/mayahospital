"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DEPARTMENTS, getDoctorsByDepartment } from "@/data/hospitalData";

interface DepartmentsProps {
  onOpenAppointmentModal?: (deptName?: string) => void;
}

export default function MayaDepartmentsGrid({ onOpenAppointmentModal }: DepartmentsProps) {
  // Theme-consistent accordion state: open the first department by default
  const [activeAccordion, setActiveAccordion] = useState<string>("urology");

  const toggleAccordion = (slug: string) => {
    setActiveAccordion((prev) => (prev === slug ? "" : slug));
  };

  return (
    <section id="departments" style={{ padding: "90px 0", backgroundColor: "#ffffff", width: "100%" }}>
      <div style={{ width: "100%", maxWidth: "1600px", margin: "0 auto", padding: "0 28px", boxSizing: "border-box" }}>
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="subtitle">CENTRES OF CLINICAL EXCELLENCE</span>
          <h2 className="heading" style={{ marginBottom: "15px" }}>
            Specialised Clinical Departments
          </h2>
          <p style={{ maxWidth: "720px", margin: "0 auto", fontSize: "15px", color: "#666", lineHeight: "24px" }}>
            Explore our clinical specialities, certified consultant faculties, and advanced inpatient &amp; surgical services in Lakhimpur Kheri.
          </p>
        </div>

        {/* Theme-Consistent Smooth Accordion List */}
        <div style={{ width: "100%", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {DEPARTMENTS.map((dept) => {
            const isOpen = activeAccordion === dept.slug;
            const deptDocs = getDoctorsByDepartment(dept.slug);

            return (
              <div
                key={dept.id}
                style={{
                  backgroundColor: isOpen ? "#ffffff" : "rgba(124, 58, 237, 0.02)",
                  borderRadius: isOpen ? "32px" : "9999px",
                  border: isOpen ? "1.5px solid #245BFF" : "1px solid rgba(124, 58, 237, 0.15)",
                  boxShadow: isOpen ? "0 14px 35px rgba(124, 58, 237, 0.1)" : "0 4px 15px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  overflow: "hidden"
                }}
              >
                {/* Accordion Header / Clickable Bar */}
                <button
                  onClick={() => toggleAccordion(dept.slug)}
                  style={{
                    width: "100%",
                    padding: "20px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "20px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    {/* Circular Icon Background */}
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: isOpen ? "#245BFF" : "rgba(124, 58, 237, 0.08)",
                        color: isOpen ? "#ffffff" : "#245BFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        flexShrink: 0,
                        transition: "all 0.3s ease"
                      }}
                    >
                      <i className={dept.iconClass}></i>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: isOpen ? "#245BFF" : "var(--primary-color)",
                          margin: "0 0 4px 0",
                          transition: "color 0.25s ease"
                        }}
                      >
                        {dept.name}
                      </h3>
                      <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", lineHeight: "1.4" }}>
                        {dept.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Chevron Arrow */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "rgba(124, 58, 237, 0.12)" : "rgba(0, 0, 0, 0.04)",
                      color: isOpen ? "#245BFF" : "#9ca3af",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>

                {/* Accordion Expandable Content Body */}
                <div
                  style={{
                    maxHeight: isOpen ? "900px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
                    overflow: "hidden"
                  }}
                >
                  <div
                    style={{
                      padding: "0 34px 28px 34px",
                      borderTop: "1px solid #eff6ff",
                      marginTop: "6px"
                    }}
                  >
                    <p style={{ fontSize: "14px", lineHeight: "24px", color: "#4b5563", marginTop: "18px", marginBottom: "20px" }}>
                      {dept.fullDesc}
                    </p>

                    {/* Specialist Doctors in this Department (Clickable to doctor individual page) */}
                    <div style={{ marginBottom: "24px" }}>
                      <h4
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          color: "#245BFF",
                          margin: "0 0 12px 0"
                        }}
                      >
                        Specialist Doctors in this Department
                      </h4>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "12px"
                        }}
                      >
                        {deptDocs.map((doc) => (
                          <div
                            key={doc.id}
                            style={{
                              backgroundColor: "#faf8fc",
                              border: "1px solid #e9d5ff",
                              borderRadius: "14px",
                              padding: "12px 14px",
                              display: "flex",
                              alignItems: "center",
                              gap: "12px"
                            }}
                          >
                            <Link href={`/doctors/${doc.slug}`}>
                              <img
                                src={doc.image}
                                alt={doc.name}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "12px",
                                  objectFit: "cover",
                                  border: "2px solid #245BFF",
                                  flexShrink: 0
                                }}
                              />
                            </Link>

                            <div style={{ flex: "1 1 auto", overflow: "hidden" }}>
                              <h5 style={{ margin: "0 0 2px", fontSize: "14px", fontWeight: 800, color: "#0b1329" }}>
                                <Link href={`/doctors/${doc.slug}`} style={{ color: "#0b1329", textDecoration: "none" }}>
                                  {doc.name}
                                </Link>
                              </h5>
                              <div style={{ fontSize: "11px", color: "#245BFF", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {doc.shortDegrees || doc.degrees}
                              </div>
                              <div style={{ fontSize: "11px", color: "#6b7280" }}>
                                ⏰ {doc.availability}
                              </div>
                            </div>

                            <Link
                              href={`/doctors/${doc.slug}`}
                              style={{
                                padding: "6px 10px",
                                borderRadius: "6px",
                                backgroundColor: "#245BFF",
                                color: "#ffffff",
                                fontSize: "11px",
                                fontWeight: 700,
                                textDecoration: "none",
                                flexShrink: 0
                              }}
                            >
                              Profile →
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Department Key Clinical Capabilities */}
                    <div style={{ marginBottom: "22px" }}>
                      <h4
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          color: "#245BFF",
                          margin: "0 0 10px 0"
                        }}
                      >
                        Core Clinical Capabilities &amp; Services
                      </h4>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "8px 16px"
                        }}
                      >
                        {dept.services.map((feat, fi) => (
                          <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#374151" }}>
                            <span style={{ color: "#245BFF", fontSize: "11px", marginTop: "2px" }}>✔</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer with Two-Way Interconnection Links */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "12px",
                        paddingTop: "16px",
                        borderTop: "1px dashed #e9d5ff"
                      }}
                    >
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {dept.badges.map((b, bi) => (
                          <span
                            key={bi}
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              backgroundColor: "rgba(124, 58, 237, 0.08)",
                              color: "#1d4ed8",
                              padding: "4px 12px",
                              borderRadius: "20px"
                            }}
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                        {/* Direct Link to Dedicated Department Page */}
                        <Link
                          href={`/departments/${dept.slug}`}
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#245BFF",
                            border: "1.5px solid #245BFF",
                            padding: "9px 20px",
                            borderRadius: "9999px",
                            fontSize: "12px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            transition: "all 0.25s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f5f3ff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#ffffff";
                          }}
                        >
                          <span>Explore Full Department</span>
                          <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px" }}></i>
                        </Link>

                        <button
                          onClick={() => onOpenAppointmentModal && onOpenAppointmentModal(dept.name)}
                          style={{
                            backgroundColor: "#245BFF",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px 22px",
                            borderRadius: "9999px",
                            fontSize: "12.5px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "all 0.25s ease",
                            boxShadow: "0 4px 14px rgba(124, 58, 237, 0.25)"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#1e40af";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#245BFF";
                          }}
                        >
                          <span>Consult Specialist</span>
                          <i className="fa-solid fa-calendar-check" style={{ fontSize: "11px" }}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to View All Departments */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            href="/departments"
            style={{
              backgroundColor: "#0f172a",
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
              boxShadow: "0 10px 30px rgba(33, 9, 58, 0.2)",
              transition: "all 0.25s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#245BFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0f172a";
            }}
          >
            <i className="fa-solid fa-hospital-user" style={{ color: "#60a5fa" }}></i>
            <span>Browse All Clinical Departments</span>
            <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
