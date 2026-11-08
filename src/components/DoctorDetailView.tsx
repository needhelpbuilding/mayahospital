"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Doctor, Department, HOSPITAL_INFO, DOCTORS, getDepartmentBySlug } from "@/data/hospitalData";
import SubpageNavbar from "@/components/SubpageNavbar";
import FathimaFooter from "@/components/FathimaFooter";
import SuchiChatbot from "@/components/SuchiChatbot";
import AppointmentModal from "@/components/AppointmentModal";

interface DoctorDetailViewProps {
  doctor: Doctor;
  department?: Department;
}

export default function DoctorDetailView({ doctor, department }: DoctorDetailViewProps) {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);

  const handleBook = () => {
    setAppointmentModalOpen(true);
  };

  const currentDept = department || getDepartmentBySlug(doctor.departmentSlug);
  const otherDoctors = DOCTORS.filter((d) => d.slug !== doctor.slug);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf8fc", display: "flex", flexDirection: "column" }}>
      {/* Sticky Theme-Consistent Navbar */}
      <SubpageNavbar onOpenAppointmentModal={() => handleBook()} />

      {/* Breadcrumbs */}
      <div style={{ backgroundColor: "#1e0734", borderBottom: "1px solid rgba(124, 58, 237, 0.2)", padding: "12px 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
            <Link href="/" style={{ color: "#c084fc", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/doctors" style={{ color: "#c084fc", textDecoration: "none" }}>Doctors</Link>
            <span>/</span>
            {currentDept && (
              <>
                <Link href={`/departments/${currentDept.slug}`} style={{ color: "#c084fc", textDecoration: "none" }}>
                  {currentDept.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span style={{ color: "#ffffff", fontWeight: 600 }}>{doctor.name}</span>
          </nav>
        </div>
      </div>

      {/* Doctor Hero Profile Header */}
      <section
        style={{
          backgroundColor: "#160526",
          backgroundImage: "linear-gradient(135deg, #1b072c 0%, #0d0216 100%)",
          color: "#ffffff",
          padding: "50px 0 60px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              alignItems: "center"
            }}
          >
            {/* Left: Doctor Large Portrait Photo */}
            <div style={{ maxWidth: "340px", width: "100%", margin: "0 auto" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "28px",
                  overflow: "hidden",
                  border: "4px solid #7c3aed",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                  backgroundColor: "#21093a"
                }}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "4/5",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(22, 6, 36, 0.95) 0%, transparent 100%)",
                    padding: "24px 20px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end"
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#7c3aed",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {doctor.experience}
                  </span>
                  <span
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid #10b981",
                      color: "#34d399",
                      fontSize: "10.5px",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: "9999px"
                    }}
                  >
                    Verified Specialist
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Doctor Credentials & Actions */}
            <div>
              {/* Linked Department Badge (Clickable back to Department page) */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
                <Link
                  href={`/departments/${doctor.departmentSlug}`}
                  style={{
                    backgroundColor: "rgba(124, 58, 237, 0.3)",
                    color: "#c084fc",
                    border: "1px solid rgba(124, 58, 237, 0.5)",
                    padding: "6px 16px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.5)";
                    e.currentTarget.style.borderColor = "#c084fc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)";
                  }}
                >
                  <i className="fa-solid fa-hospital-user"></i>
                  <span>Department: {doctor.department}</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px" }}></i>
                </Link>

                <span
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: 600
                  }}
                >
                  Maya Hospital, Meerpur
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  margin: "0 0 10px",
                  lineHeight: 1.15
                }}
              >
                {doctor.name}
              </h1>

              <p
                style={{
                  color: "#d8b4fe",
                  fontSize: "16px",
                  fontWeight: 700,
                  margin: "0 0 8px",
                  lineHeight: "1.4"
                }}
              >
                {doctor.degrees}
              </p>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "14px",
                  margin: "0 0 24px"
                }}
              >
                {doctor.designation}
              </p>

              {/* Availability Banner */}
              <div
                style={{
                  backgroundColor: "rgba(124, 58, 237, 0.2)",
                  border: "1px solid rgba(124, 58, 237, 0.4)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  marginBottom: "28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  flexWrap: "wrap"
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#7c3aed",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    flexShrink: 0
                  }}
                >
                  <i className="fa-regular fa-calendar-days"></i>
                </div>
                <div>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#c084fc", letterSpacing: "1px" }}>
                    OPD Consultation Schedule
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: "#ffffff", marginTop: "2px" }}>
                    {doctor.availability}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <button
                  onClick={() => handleBook()}
                  style={{
                    backgroundColor: "#7c3aed",
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
                    boxShadow: "0 6px 20px rgba(124, 58, 237, 0.45)",
                    transition: "all 0.25s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#6d28d9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#7c3aed";
                  }}
                >
                  <i className="fa-regular fa-calendar-check"></i>
                  <span>Book OPD Consultation</span>
                </button>

                <a
                  href={`tel:${HOSPITAL_INFO.bookingPhone.replace(/\s+/g, '')}`}
                  style={{
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    border: "1.5px solid rgba(255, 255, 255, 0.6)",
                    padding: "12px 22px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <i className="fa-solid fa-phone" style={{ color: "#34d399" }}></i>
                  <span>OPD Desk: {HOSPITAL_INFO.bookingPhone}</span>
                </a>

                <a
                  href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                  style={{
                    backgroundColor: "rgba(220, 38, 38, 0.2)",
                    color: "#ffffff",
                    border: "1.5px solid #ef4444",
                    padding: "12px 20px",
                    borderRadius: "9999px",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <i className="fa-solid fa-truck-medical" style={{ color: "#f87171" }}></i>
                  <span>24x7 Emergency</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 24px 80px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "start" }}>
          
          {/* Left Column: Doctor Profile, Services & Qualifications */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            
            {/* About Doctor */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                boxShadow: "0 8px 25px rgba(22, 6, 36, 0.04)",
                padding: "36px"
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#160526",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <i className="fa-solid fa-user-doctor" style={{ color: "#7c3aed" }}></i>
                <span>About {doctor.name}</span>
              </h2>

              <p style={{ fontSize: "15px", lineHeight: "26px", color: "#4b5563", marginBottom: "20px" }}>
                {doctor.about}
              </p>

              <div>
                <h4 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700, color: "#7c3aed", marginBottom: "12px" }}>
                  Core Areas of Specialization
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {doctor.specialties.map((spec, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: "#f5f3ff",
                        border: "1px solid #e9d5ff",
                        color: "#6d28d9",
                        fontSize: "12px",
                        fontWeight: 600,
                        padding: "6px 12px",
                        borderRadius: "8px"
                      }}
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Provided by this Doctor (Exact from details.txt) */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                boxShadow: "0 8px 25px rgba(22, 6, 36, 0.04)",
                padding: "36px"
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                  CLINICAL CAPABILITIES
                </span>
                <h2
                  style={{
                    fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#160526",
                    margin: "4px 0 0"
                  }}
                >
                  Services Provided by {doctor.name}
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {doctor.services.map((srv, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      padding: "14px 16px",
                      backgroundColor: "#faf8fc",
                      borderRadius: "12px",
                      border: "1px solid #f3e8ff"
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "#7c3aed",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                        marginTop: "2px"
                      }}
                    >
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span style={{ fontSize: "14px", lineHeight: "22px", color: "#374151", fontWeight: 500 }}>
                      {srv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications & Education Breakdown */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                boxShadow: "0 8px 25px rgba(22, 6, 36, 0.04)",
                padding: "36px"
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#160526",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <i className="fa-solid fa-graduation-cap" style={{ color: "#7c3aed" }}></i>
                <span>Educational Pedigree &amp; Qualifications</span>
              </h2>

              <div
                style={{
                  backgroundColor: "#faf5ff",
                  borderLeft: "4px solid #7c3aed",
                  borderRadius: "8px",
                  padding: "18px 20px"
                }}
              >
                <p style={{ margin: "0 0 6px", fontSize: "15px", fontWeight: 700, color: "#160526" }}>
                  {doctor.degrees}
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", lineHeight: "20px" }}>
                  Registered specialist with state &amp; national medical councils. Committed to evidence-based protocol care and continuous surgical training.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Department Spotlight & Other Specialists */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            
            {/* DEPARTMENT SPOTLIGHT CARD (Seamless two-way link to Department) */}
            {currentDept && (
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  border: "2px solid #7c3aed",
                  boxShadow: "0 12px 35px rgba(124, 58, 237, 0.1)",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <span
                  style={{
                    backgroundColor: "#7c3aed",
                    color: "#ffffff",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "1.2px",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    display: "inline-block",
                    marginBottom: "12px"
                  }}
                >
                  Associated Department
                </span>

                <h3
                  style={{
                    fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#160526",
                    margin: "0 0 8px"
                  }}
                >
                  {currentDept.name}
                </h3>

                <p style={{ fontSize: "13.5px", lineHeight: "22px", color: "#4b5563", marginBottom: "20px" }}>
                  {currentDept.shortDesc}
                </p>

                <div style={{ marginBottom: "22px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#6d28d9", marginBottom: "8px" }}>
                    Department Facilities
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {currentDept.badges.map((b, bi) => (
                      <span
                        key={bi}
                        style={{
                          backgroundColor: "#f3e8ff",
                          color: "#7c3aed",
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "3px 10px",
                          borderRadius: "20px"
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/departments/${currentDept.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "#21093a",
                    color: "#ffffff",
                    textDecoration: "none",
                    padding: "12px 20px",
                    borderRadius: "9999px",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    transition: "all 0.25s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#7c3aed";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#21093a";
                  }}
                >
                  <span>Explore {currentDept.shortName}</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
                </Link>
              </div>
            )}

            {/* Quick OPD Appointment Card */}
            <div
              style={{
                backgroundColor: "#21093a",
                backgroundImage: "linear-gradient(135deg, #2b0b4a 0%, #150324 100%)",
                borderRadius: "24px",
                color: "#ffffff",
                padding: "32px",
                boxShadow: "0 15px 40px rgba(33, 9, 58, 0.25)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <i className="fa-regular fa-clock" style={{ color: "#c084fc", fontSize: "18px" }}></i>
                <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700, color: "#d8b4fe" }}>
                  Direct OPD Registration
                </span>
              </div>

              <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "0 0 8px" }}>
                Book with {doctor.name}
              </h3>

              <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.8)", lineHeight: "20px", marginBottom: "20px" }}>
                Schedule your consultation slot or reach out for specialized second surgical opinions.
              </p>

              <button
                onClick={() => handleBook()}
                style={{
                  width: "100%",
                  backgroundColor: "#7c3aed",
                  color: "#ffffff",
                  border: "none",
                  padding: "13px 20px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: "12px"
                }}
              >
                <i className="fa-regular fa-calendar-check"></i>
                <span>Confirm Appointment</span>
              </button>

              <div style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
                Or call OPD reception at <strong style={{ color: "#ffffff" }}>{HOSPITAL_INFO.bookingPhone}</strong>
              </div>
            </div>

            {/* OTHER SPECIALIST DOCTORS (Interconnection between doctors) */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                border: "1px solid rgba(124, 58, 237, 0.15)",
                padding: "28px",
                boxShadow: "0 8px 25px rgba(22, 6, 36, 0.04)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                <h4
                  style={{
                    fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#160526",
                    margin: 0
                  }}
                >
                  Other Specialists at Maya
                </h4>
                <Link
                  href="/doctors"
                  style={{ color: "#7c3aed", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}
                >
                  View All →
                </Link>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {otherDoctors.map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/doctors/${doc.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px",
                      borderRadius: "12px",
                      backgroundColor: "#faf8fc",
                      border: "1px solid #f3e8ff",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f5f3ff";
                      e.currentTarget.style.borderColor = "#d8b4fe";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#faf8fc";
                      e.currentTarget.style.borderColor = "#f3e8ff";
                    }}
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        objectFit: "cover",
                        flexShrink: 0
                      }}
                    />
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ color: "#160526", fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {doc.name}
                      </div>
                      <div style={{ color: "#7c3aed", fontSize: "11px", fontWeight: 600 }}>
                        {doc.department}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FathimaFooter />

      {/* Chatbot */}
      <SuchiChatbot onOpenAppointment={() => handleBook()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctor={doctor.name}
        initialDepartment={doctor.department}
      />
    </div>
  );
}
