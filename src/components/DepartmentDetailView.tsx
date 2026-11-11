"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Department, Doctor, HOSPITAL_INFO, DEPARTMENTS } from "@/data/hospitalData";
import SubpageNavbar from "@/components/SubpageNavbar";
import FathimaFooter from "@/components/FathimaFooter";
import SuchiChatbot from "@/components/SuchiChatbot";
import AppointmentModal from "@/components/AppointmentModal";

interface DepartmentDetailViewProps {
  department: Department;
  doctors: Doctor[];
}

export default function DepartmentDetailView({ department, doctors }: DepartmentDetailViewProps) {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleBook = (docName?: string) => {
    setSelectedDoctor(docName || "");
    setAppointmentModalOpen(true);
  };

  const otherDepartments = DEPARTMENTS.filter((d) => d.slug !== department.slug);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf8fc", display: "flex", flexDirection: "column" }}>
      {/* Sticky Theme-Consistent Navbar */}
      <SubpageNavbar onOpenAppointmentModal={() => handleBook()} />

      {/* Breadcrumbs */}
      <div style={{ backgroundColor: "#1e0734", borderBottom: "1px solid rgba(124, 58, 237, 0.2)", padding: "12px 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
            <Link href="/" style={{ color: "#60a5fa", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/departments" style={{ color: "#60a5fa", textDecoration: "none" }}>Departments</Link>
            <span>/</span>
            <span style={{ color: "#ffffff", fontWeight: 600 }}>{department.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: "#0b1329",
          backgroundImage: "linear-gradient(135deg, #1b072c 0%, #0d0216 100%)",
          color: "#ffffff",
          padding: "60px 0 70px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "860px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span
                style={{
                  backgroundColor: "rgba(124, 58, 237, 0.25)",
                  color: "#60a5fa",
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <i className={department.iconClass}></i>
                <span>Centre of Excellence</span>
              </span>

              <span
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "#34d399",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.5px"
                }}
              >
                ⚡ 24x7 Emergency &amp; Free Ambulance Available
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(30px, 4.5vw, 48px)",
                fontWeight: 800,
                lineHeight: "1.2",
                marginBottom: "20px",
                color: "#ffffff"
              }}
            >
              {department.name}
            </h1>

            <p style={{ fontSize: "16px", lineHeight: "28px", color: "rgba(255, 255, 255, 0.85)", marginBottom: "32px" }}>
              {department.fullDesc}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
              <button
                onClick={() => handleBook()}
                style={{
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  border: "none",
                  padding: "13px 28px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1d4ed8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#245BFF";
                }}
              >
                <i className="fa-regular fa-calendar-check"></i>
                <span>Book Department Consultation</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  border: "1.5px solid rgba(255, 255, 255, 0.4)",
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.25s ease"
                }}
              >
                <i className="fa-solid fa-phone" style={{ color: "#f87171" }}></i>
                <span>Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
              </a>

              <Link
                href="/doctors"
                style={{
                  color: "#60a5fa",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "12px 16px"
                }}
              >
                <span>View All Hospital Doctors</span>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none"
          }}
        />
      </section>

      {/* Quick Hospital Highlights Strip */}
      <section style={{ backgroundColor: "#0f172a", color: "#ffffff", padding: "16px 0", borderBottom: "1px solid rgba(124, 58, 237, 0.25)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-solid fa-clock-rotate-left" style={{ color: "#60a5fa", fontSize: "18px" }}></i>
              <div>
                <div style={{ fontSize: "11px", color: "#d8b4fe", textTransform: "uppercase", fontWeight: 700 }}>Department Hours</div>
                <div style={{ fontSize: "13px", fontWeight: 600 }}>{department.timing}</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-solid fa-truck-medical" style={{ color: "#f87171", fontSize: "18px" }}></i>
              <div>
                <div style={{ fontSize: "11px", color: "#fca5a5", textTransform: "uppercase", fontWeight: 700 }}>24 Hours Emergency</div>
                <div style={{ fontSize: "13px", fontWeight: 600 }}>Emergency Triage &amp; ICU Always Open</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-solid fa-ambulance" style={{ color: "#34d399", fontSize: "18px" }}></i>
              <div>
                <div style={{ fontSize: "11px", color: "#6ee7b7", textTransform: "uppercase", fontWeight: 700 }}>Free Ambulance Service</div>
                <div style={{ fontSize: "13px", fontWeight: 600 }}>Call {HOSPITAL_INFO.ambulancePhone} (फ्री एम्बुलेंस)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 24px 80px", width: "100%", boxSizing: "border-box" }}>
        
        {/* DOCTORS IN THIS DEPARTMENT (Prominent Showcase) */}
        <section style={{ marginBottom: "60px" }}>
          <div style={{ marginBottom: "30px", borderBottom: "2px solid #eff6ff", paddingBottom: "16px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#245BFF", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              CLINICAL SPECIALISTS
            </span>
            <h2
              style={{
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                fontSize: "28px",
                fontWeight: 800,
                color: "#0b1329",
                margin: "6px 0 0"
              }}
            >
              Specialist Doctors in {department.name}
            </h2>
            <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "6px" }}>
              Consult our certified surgeons and specialists dedicated to {department.shortName}.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "28px"
            }}
          >
            {doctors.map((doc) => (
              <div
                key={doc.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  border: "1px solid rgba(124, 58, 237, 0.18)",
                  boxShadow: "0 10px 30px rgba(22, 6, 36, 0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease"
                }}
              >
                {/* Top Header: Image & Badges */}
                <div style={{ display: "flex", gap: "20px", padding: "24px 24px 18px", borderBottom: "1px solid #eff6ff", alignItems: "flex-start" }}>
                  <Link href={`/doctors/${doc.slug}`} style={{ textDecoration: "none", flexShrink: 0 }}>
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        border: "3px solid #245BFF",
                        backgroundColor: "#f5f3ff",
                        boxShadow: "0 4px 12px rgba(124, 58, 237, 0.2)"
                      }}
                    >
                      <img
                        src={doc.image}
                        alt={doc.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  </Link>

                  <div style={{ flex: "1 1 auto" }}>
                    <span
                      style={{
                        backgroundColor: "rgba(124, 58, 237, 0.1)",
                        color: "#1d4ed8",
                        fontSize: "10.5px",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "9999px",
                        display: "inline-block",
                        marginBottom: "6px"
                      }}
                    >
                      {doc.experience}
                    </span>

                    <h3 style={{ margin: "0 0 4px", fontSize: "19px", fontWeight: 800, color: "#0b1329" }}>
                      <Link href={`/doctors/${doc.slug}`} style={{ color: "#0b1329", textDecoration: "none" }}>
                        {doc.name}
                      </Link>
                    </h3>

                    <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#245BFF", fontWeight: 700, lineHeight: "1.4" }}>
                      {doc.degrees}
                    </p>

                    <p style={{ margin: 0, fontSize: "12px", color: "#6b7280" }}>
                      {doc.designation}
                    </p>
                  </div>
                </div>

                {/* Body: Availability & Scope */}
                <div style={{ padding: "18px 24px", flex: "1 1 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div
                    style={{
                      backgroundColor: "#faf5ff",
                      border: "1px dashed #d8b4fe",
                      borderRadius: "12px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <i className="fa-regular fa-clock" style={{ color: "#245BFF", fontSize: "15px" }}></i>
                    <div>
                      <div style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: 700, color: "#1d4ed8" }}>
                        Consultation Availability
                      </div>
                      <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#0b1329" }}>
                        {doc.availability}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: "13px", lineHeight: "20px", color: "#4b5563", margin: 0 }}>
                    {doc.about.slice(0, 150)}...
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                    {doc.specialties.slice(0, 3).map((sp, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: "#eff6ff",
                          color: "#1d4ed8",
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: "6px"
                        }}
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons: View Profile + Book Consultation */}
                <div
                  style={{
                    padding: "16px 24px",
                    backgroundColor: "#faf8fc",
                    borderTop: "1px solid #eff6ff",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center"
                  }}
                >
                  <Link
                    href={`/doctors/${doc.slug}`}
                    style={{
                      flex: "1 1 50%",
                      textAlign: "center",
                      backgroundColor: "#ffffff",
                      color: "#245BFF",
                      border: "1.5px solid #245BFF",
                      padding: "10px 14px",
                      borderRadius: "9999px",
                      fontSize: "12px",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <span>View Profile</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px" }}></i>
                  </Link>

                  <button
                    onClick={() => handleBook(doc.name)}
                    style={{
                      flex: "1 1 50%",
                      textAlign: "center",
                      backgroundColor: "#245BFF",
                      color: "#ffffff",
                      border: "none",
                      padding: "11px 14px",
                      borderRadius: "9999px",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1d4ed8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#245BFF";
                    }}
                  >
                    <i className="fa-regular fa-calendar-check"></i>
                    <span>Book OPD</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLINICAL SERVICES & PROCEDURES PROVIDED (Exact from details.txt) */}
        <section
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "28px",
            border: "1px solid rgba(124, 58, 237, 0.16)",
            boxShadow: "0 10px 30px rgba(22, 6, 36, 0.04)",
            padding: "40px",
            marginBottom: "60px"
          }}
        >
          <div style={{ marginBottom: "26px" }}>
            <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#245BFF", textTransform: "uppercase", letterSpacing: "1.5px" }}>
              TREATMENTS &amp; PROCEDURES
            </span>
            <h2
              style={{
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                fontSize: "26px",
                fontWeight: 800,
                color: "#0b1329",
                marginTop: "6px"
              }}
            >
              Services Provided in {department.name}
            </h2>
            <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "4px" }}>
              Our department is fully equipped for clinical consultations, advanced laparoscopic interventions, and emergency inpatient treatments.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "16px"
            }}
          >
            {department.services.map((service, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#faf8fc",
                  border: "1px solid #eff6ff",
                  borderRadius: "16px",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  transition: "transform 0.2s ease"
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#245BFF",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    flexShrink: 0,
                    marginTop: "2px"
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: 700, color: "#0b1329" }}>
                    {service}
                  </h4>
                  <span style={{ fontSize: "11.5px", color: "#6b7280" }}>
                    In-house diagnostic profiling &amp; personalized recovery protocols
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPLORE OTHER CLINICAL DEPARTMENTS (All-ways interconnected) */}
        <section style={{ marginBottom: "60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "26px", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <span style={{ fontSize: "11.5px", fontWeight: 700, color: "#245BFF", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                INTERCONNECTED DEPARTMENTS
              </span>
              <h2
                style={{
                  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#0b1329",
                  margin: "6px 0 0"
                }}
              >
                Explore Other Specialized Departments
              </h2>
            </div>

            <Link
              href="/departments"
              style={{
                color: "#245BFF",
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <span>View All Departments</span>
              <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px"
            }}
          >
            {otherDepartments.map((dept) => (
              <Link
                key={dept.id}
                href={`/departments/${dept.slug}`}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  border: "1px solid rgba(124, 58, 237, 0.15)",
                  padding: "24px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "0 6px 20px rgba(22, 6, 36, 0.04)",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#245BFF";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.15)";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    backgroundColor: "rgba(124, 58, 237, 0.1)",
                    color: "#245BFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px"
                  }}
                >
                  <i className={dept.iconClass}></i>
                </div>

                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: "17px", fontWeight: 700, color: "#0b1329" }}>
                    {dept.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#6b7280", lineHeight: "1.4" }}>
                    {dept.shortDesc.slice(0, 75)}...
                  </p>
                </div>

                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "6px", color: "#245BFF", fontSize: "12px", fontWeight: 700 }}>
                  <span>Department Details</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px" }}></i>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Action Banner */}
        <section
          style={{
            backgroundColor: "#0f172a",
            backgroundImage: "linear-gradient(135deg, #2b0b4a 0%, #150324 100%)",
            color: "#ffffff",
            borderRadius: "28px",
            padding: "44px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            boxShadow: "0 20px 50px rgba(33, 9, 58, 0.3)"
          }}
        >
          <div>
            <span
              style={{
                backgroundColor: "rgba(192, 132, 252, 0.2)",
                color: "#e9d5ff",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "9999px",
                letterSpacing: "1px"
              }}
            >
              Need Medical Guidance?
            </span>
            <h3 style={{ margin: "10px 0 6px", fontSize: "24px", fontWeight: 800 }}>
              Consult our Specialists at Maya Hospital
            </h3>
            <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.8)", fontSize: "14px" }}>
              Book an OPD appointment or reach our 24x7 Emergency Casualty on Aira Road Meerpur, Lakhimpur Kheri.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={() => handleBook()}
              style={{
                backgroundColor: "#ffffff",
                color: "#0f172a",
                border: "none",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                padding: "13px 26px",
                borderRadius: "9999px",
                cursor: "pointer"
              }}
            >
              Book OPD Slot
            </button>

            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "1.5px solid #ffffff",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                padding: "12px 24px",
                borderRadius: "9999px",
                textDecoration: "none"
              }}
            >
              Call {HOSPITAL_INFO.emergencyPhone}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FathimaFooter />

      {/* Chatbot */}
      <SuchiChatbot onOpenAppointment={() => handleBook()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctor={selectedDoctor}
        initialDepartment={department.name}
      />
    </div>
  );
}
