"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DOCTORS, DEPARTMENTS, HOSPITAL_INFO } from "@/data/hospitalData";
import SubpageNavbar from "@/components/SubpageNavbar";
import FathimaFooter from "@/components/FathimaFooter";
import SuchiChatbot from "@/components/SuchiChatbot";
import AppointmentModal from "@/components/AppointmentModal";

export default function DoctorsIndexPage() {
  const [selectedDeptFilter, setSelectedDeptFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleBook = (docName?: string) => {
    setSelectedDoctor(docName || "");
    setAppointmentModalOpen(true);
  };

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDeptFilter === "all" || doc.departmentSlug === selectedDeptFilter;
    const matchesSearch =
      searchTerm === "" ||
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.degrees.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDept && matchesSearch;
  });

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
            <span style={{ color: "#ffffff", fontWeight: 600 }}>Specialist Doctors</span>
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
                display: "inline-block",
                marginBottom: "16px"
              }}
            >
              Medical &amp; Surgical Faculties
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
              Our Specialist Doctors &amp; Surgeons
            </h1>

            <p style={{ fontSize: "16px", lineHeight: "28px", color: "rgba(255, 255, 255, 0.85)", marginBottom: "30px" }}>
              Meet our team of credentialed medical practitioners, urologists, neurosurgeons, gynecologists, anorectal surgeons, and general trauma specialists serving Lakhimpur Kheri with distinction.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
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
                  gap: "8px"
                }}
              >
                <i className="fa-regular fa-calendar-check"></i>
                <span>Book Doctor Appointment</span>
              </button>

              <Link
                href="/departments"
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
                <i className="fa-solid fa-hospital-user" style={{ color: "#60a5fa" }}></i>
                <span>Browse Clinical Departments</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Highlight Bar */}
      <section style={{ backgroundColor: "#0f172a", color: "#ffffff", padding: "14px 0", borderBottom: "1px solid rgba(124, 58, 237, 0.25)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px", fontSize: "13px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fa-solid fa-phone" style={{ color: "#34d399" }}></i>
              <strong>OPD Desk: {HOSPITAL_INFO.bookingPhone}</strong>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fa-solid fa-truck-medical" style={{ color: "#f87171" }}></i>
              <strong>24x7 Emergency: {HOSPITAL_INFO.emergencyPhone}</strong>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="fa-solid fa-ambulance" style={{ color: "#60a5fa" }}></i>
              <strong>Free Ambulance (फ्री एम्बुलेंस)</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Main Doctors Directory */}
      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "50px 24px 80px", width: "100%", boxSizing: "border-box" }}>
        
        {/* Search & Department Filter Tabs */}
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "20px"
            }}
          >
            {/* Filter Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <button
                onClick={() => setSelectedDeptFilter("all")}
                style={{
                  backgroundColor: selectedDeptFilter === "all" ? "#245BFF" : "#ffffff",
                  color: selectedDeptFilter === "all" ? "#ffffff" : "#4b5563",
                  border: selectedDeptFilter === "all" ? "1.5px solid #245BFF" : "1px solid #e5e7eb",
                  padding: "8px 16px",
                  borderRadius: "9999px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                All Doctors ({DOCTORS.length})
              </button>

              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept.slug}
                  onClick={() => setSelectedDeptFilter(dept.slug)}
                  style={{
                    backgroundColor: selectedDeptFilter === dept.slug ? "#245BFF" : "#ffffff",
                    color: selectedDeptFilter === dept.slug ? "#ffffff" : "#4b5563",
                    border: selectedDeptFilter === dept.slug ? "1.5px solid #245BFF" : "1px solid #e5e7eb",
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {dept.shortName}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: "relative", minWidth: "260px" }}>
              <input
                type="text"
                placeholder="Search by doctor or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 16px 10px 38px",
                  borderRadius: "9999px",
                  border: "1.5px solid #d8b4fe",
                  backgroundColor: "#ffffff",
                  fontSize: "13px",
                  outline: "none",
                  boxSizing: "border-box"
                }}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#245BFF", fontSize: "13px" }}
              />
            </div>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px"
          }}
        >
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                border: "1px solid rgba(124, 58, 237, 0.16)",
                boxShadow: "0 10px 30px rgba(22, 6, 36, 0.05)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease"
              }}
            >
              {/* Doctor Card Top Banner */}
              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  padding: "24px",
                  borderBottom: "1px solid #eff6ff",
                  alignItems: "flex-start",
                  backgroundColor: "#ffffff"
                }}
              >
                <Link href={`/doctors/${doc.slug}`} style={{ flexShrink: 0 }}>
                  <div
                    style={{
                      width: "108px",
                      height: "108px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      border: "3px solid #245BFF",
                      backgroundColor: "#f5f3ff",
                      boxShadow: "0 6px 16px rgba(124, 58, 237, 0.2)"
                    }}
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </Link>

                <div style={{ flex: "1 1 auto", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                    <span
                      style={{
                        backgroundColor: "#eff6ff",
                        color: "#1d4ed8",
                        fontSize: "10.5px",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: "9999px"
                      }}
                    >
                      {doc.experience}
                    </span>
                  </div>

                  <h3 style={{ margin: "0 0 4px", fontSize: "18px", fontWeight: 800, color: "#0b1329" }}>
                    <Link href={`/doctors/${doc.slug}`} style={{ color: "#0b1329", textDecoration: "none" }}>
                      {doc.name}
                    </Link>
                  </h3>

                  <p style={{ margin: "0 0 6px", fontSize: "12px", color: "#245BFF", fontWeight: 700, lineHeight: "1.4" }}>
                    {doc.degrees}
                  </p>

                  {/* Interconnected Department Link */}
                  <Link
                    href={`/departments/${doc.departmentSlug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "11.5px",
                      fontWeight: 700,
                      color: "#1d4ed8",
                      textDecoration: "none",
                      backgroundColor: "rgba(124, 58, 237, 0.08)",
                      padding: "3px 10px",
                      borderRadius: "6px"
                    }}
                  >
                    <i className="fa-solid fa-hospital"></i>
                    <span>{doc.department}</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: "9px" }}></i>
                  </Link>
                </div>
              </div>

              {/* Doctor Details Body */}
              <div style={{ padding: "20px 24px", flex: "1 1 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div
                  style={{
                    backgroundColor: "#faf8fc",
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
                    <div style={{ fontSize: "10.5px", textTransform: "uppercase", fontWeight: 700, color: "#1d4ed8" }}>
                      Availability
                    </div>
                    <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#0b1329" }}>
                      {doc.availability}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: "13px", lineHeight: "20px", color: "#4b5563", margin: 0 }}>
                  {doc.about.slice(0, 140)}...
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                  {doc.specialties.slice(0, 3).map((sp, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: "#f5f3ff",
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

              {/* Action Buttons */}
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
                    gap: "6px"
                  }}
                >
                  <span>Doctor Profile</span>
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
                    gap: "6px"
                  }}
                >
                  <i className="fa-regular fa-calendar-check"></i>
                  <span>Book Slot</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <FathimaFooter />

      {/* Chatbot */}
      <SuchiChatbot onOpenAppointment={() => handleBook()} />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctor={selectedDoctor}
      />
    </div>
  );
}
