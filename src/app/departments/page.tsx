"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO, getDoctorsByDepartment } from "@/data/hospitalData";
import SubpageNavbar from "@/components/SubpageNavbar";
import FathimaFooter from "@/components/FathimaFooter";
import SuchiChatbot from "@/components/SuchiChatbot";
import AppointmentModal from "@/components/AppointmentModal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbNode, graph, listNode } from "@/lib/seo";

export default function DepartmentsIndexPage() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("");

  const handleOpenAppointment = (deptName?: string) => {
    setSelectedDept(deptName || "");
    setAppointmentModalOpen(true);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf8fc", display: "flex", flexDirection: "column" }}>
      <JsonLd
        data={graph(
          breadcrumbNode([["Home", "/"], ["Clinical Departments", "/departments"]]),
          listNode("/departments", DEPARTMENTS.map((x) => [x.name, `/departments/${x.slug}`])),
        )}
      />

      {/* Sticky Theme-Consistent Navbar */}
      <SubpageNavbar onOpenAppointmentModal={handleOpenAppointment} />

      {/* Breadcrumbs */}
      <div style={{ backgroundColor: "#1A45C8", borderBottom: "1px solid rgba(255, 255, 255, 0.15)", padding: "12px 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
            <Link href="/" style={{ color: "#FF8A00", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#ffffff", fontWeight: 600 }}>Clinical Departments</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: "#0E36B4",
          color: "#ffffff",
          padding: "60px 0 70px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "840px" }}>
            <span
              style={{
                backgroundColor: "rgba(255, 138, 0, 0.2)",
                color: "#FF8A00",
                border: "1px solid rgba(255, 138, 0, 0.4)",
                padding: "5px 14px",
                borderRadius: "9999px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                display: "inline-block",
                marginBottom: "16px"
              }}
            >
              Centres of Clinical Excellence
            </span>

            <h1
              style={{
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 800,
                lineHeight: "1.2",
                marginBottom: "20px",
                color: "#ffffff"
              }}
            >
              Specialised Medical &amp; Surgical Departments
            </h1>

            <p style={{ fontSize: "16px", lineHeight: "28px", color: "rgba(255, 255, 255, 0.85)", marginBottom: "30px" }}>
              At Maya Hospital &amp; Multi Speciality Centre, our dedicated clinical departments are led by accomplished surgeons and physicians equipped with modular operation theatres, modern diagnostic endoscopy, and 24x7 critical care backup.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <button
                onClick={() => handleOpenAppointment()}
                style={{
                  backgroundColor: "#FF8A00",
                  color: "#ffffff",
                  border: "none",
                  padding: "13px 26px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <i className="fa-regular fa-calendar-check"></i>
                <span>Book OPD Consultation</span>
              </button>

              <Link
                href="/doctors"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  border: "1.5px solid rgba(255, 255, 255, 0.4)",
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <i className="fa-solid fa-user-doctor" style={{ color: "#FF8A00" }}></i>
                <span>Meet Specialist Doctors</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Highlight Bar */}
      <section style={{ backgroundColor: "#0E36B4", color: "#ffffff", padding: "14px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.15)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px", fontSize: "13px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fa-solid fa-truck-medical" style={{ color: "#f87171" }}></i>
              <strong>24x7 Emergency &amp; Trauma</strong>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fa-solid fa-bed-pulse" style={{ color: "#FF8A00" }}></i>
              <strong>ICU &amp; Level-2 NICU Facilities</strong>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fa-solid fa-ambulance" style={{ color: "#34d399" }}></i>
              <strong>Free Ambulance: {HOSPITAL_INFO.ambulancePhone}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Department Cards Grid */}
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 24px 80px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {DEPARTMENTS.map((dept, index) => {
            const deptDocs = getDoctorsByDepartment(dept.slug);

            return (
              <div
                key={dept.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "28px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 10px 30px rgba(36, 91, 255, 0.04)",
                  padding: "36px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "36px",
                  alignItems: "center"
                }}
              >
                {/* Left: Department Details & Procedures */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "16px",
                        backgroundColor: "#245BFF",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        flexShrink: 0
                      }}
                    >
                      <i className={dept.iconClass}></i>
                    </div>

                    <div>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#FF8A00", textTransform: "uppercase", letterSpacing: "1px" }}>
                        Department 0{index + 1}
                      </span>
                      <h2 style={{ margin: "2px 0 0", fontSize: "24px", fontWeight: 800, color: "#0E36B4" }}>
                        <Link href={`/departments/${dept.slug}`} style={{ color: "#0E36B4", textDecoration: "none" }}>
                          {dept.name}
                        </Link>
                      </h2>
                    </div>
                  </div>

                  <p style={{ fontSize: "14.5px", lineHeight: "24px", color: "#4b5563", marginBottom: "18px" }}>
                    {dept.fullDesc}
                  </p>

                  {/* Services List Preview */}
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ fontSize: "11.5px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700, color: "#FF8A00", marginBottom: "8px" }}>
                      Key Treatments &amp; Endoscopic Surgeries:
                    </h4>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "6px" }}>
                      {dept.services.slice(0, 3).map((srv, sIdx) => (
                        <div key={sIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#374151" }}>
                          <span style={{ color: "#FF8A00", fontSize: "12px", marginTop: "2px" }}>✔</span>
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", paddingTop: "12px", borderTop: "1px solid #E2E8F0" }}>
                    <Link
                      href={`/departments/${dept.slug}`}
                      style={{
                        backgroundColor: "#245BFF",
                        color: "#ffffff",
                        padding: "10px 22px",
                        borderRadius: "9999px",
                        fontSize: "12.5px",
                        fontWeight: 700,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <span>Explore Department</span>
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px" }}></i>
                    </Link>

                    <button
                      onClick={() => handleOpenAppointment(dept.name)}
                      style={{
                        backgroundColor: "transparent",
                        color: "#FF8A00",
                        border: "1.5px solid #FF8A00",
                        padding: "9px 20px",
                        borderRadius: "9999px",
                        fontSize: "12.5px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <span>Book Slot</span>
                    </button>
                  </div>
                </div>

                {/* Right: Specialists in this Department */}
                <div
                  style={{
                    backgroundColor: "#F8FAFC",
                    borderRadius: "20px",
                    border: "1px solid #E2E8F0",
                    padding: "24px"
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#245BFF", marginBottom: "14px" }}>
                    Specialist Doctors Assigned
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {deptDocs.map((doc) => (
                      <div
                        key={doc.id}
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "16px",
                          border: "1px solid #E2E8F0",
                          padding: "14px 16px",
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          boxShadow: "0 4px 12px rgba(36, 91, 255, 0.05)"
                        }}
                      >
                        <Link href={`/doctors/${doc.slug}`}>
                          <img
                            src={doc.image}
                            alt={doc.name}
                            style={{
                              width: "56px",
                              height: "56px",
                              borderRadius: "14px",
                              objectFit: "cover",
                              border: "2px solid #245BFF",
                              flexShrink: 0
                            }}
                          />
                        </Link>

                        <div style={{ flex: "1 1 auto", overflow: "hidden" }}>
                          <h4 style={{ margin: "0 0 2px", fontSize: "15px", fontWeight: 800, color: "#0E36B4" }}>
                            <Link href={`/doctors/${doc.slug}`} style={{ color: "#0E36B4", textDecoration: "none" }}>
                              {doc.name}
                            </Link>
                          </h4>
                          <div style={{ fontSize: "11px", color: "#FF8A00", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {doc.shortDegrees || doc.degrees}
                          </div>
                          <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "2px" }}>
                            ⏰ {doc.availability}
                          </div>
                        </div>

                        <Link
                          href={`/doctors/${doc.slug}`}
                          style={{
                            padding: "8px 12px",
                            borderRadius: "8px",
                            backgroundColor: "#FFF7ED",
                            color: "#FF8A00",
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

                  <div style={{ marginTop: "16px", fontSize: "11.5px", color: "#6b7280", display: "flex", alignItems: "center", gap: "6px" }}>
                    <i className="fa-regular fa-clock" style={{ color: "#FF8A00" }}></i>
                    <span>Department OPD: <strong>{dept.timing}</strong></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <FathimaFooter />

      {/* Chatbot */}
      <SuchiChatbot onOpenAppointment={() => handleOpenAppointment()} />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDepartment={selectedDept}
      />
    </div>
  );
}
