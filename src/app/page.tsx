"use client";

import React, { useState, useEffect } from "react";
import CleanNavbar from "@/components/CleanNavbar";
import VitalScanHero from "@/components/VitalScanHero";
import VitalScanDepartments from "@/components/VitalScanDepartments";
import VitalScanStory from "@/components/VitalScanStory";
import CleanFooter from "@/components/CleanFooter";
import AppointmentModal from "@/components/AppointmentModal";
import SchemaMarkup from "@/components/SchemaMarkup";
import SuchiChatbot from "@/components/SuchiChatbot";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function Home() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleOpenAppointment = (docOrDeptName?: string) => {
    if (docOrDeptName) {
      setSelectedDoctor(docOrDeptName);
    } else {
      setSelectedDoctor("");
    }
    setAppointmentModalOpen(true);
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <SchemaMarkup />

      {/* Clean White Top Navbar matching VitalScan reference */}
      <CleanNavbar onOpenAppointmentModal={() => handleOpenAppointment()} />

      <main style={{ backgroundColor: "#ffffff" }}>
        {/* VitalScan Hero Section: Circular Scanner aperture visual, bullet badges, 4 key value props */}
        <VitalScanHero onOpenAppointmentModal={() => handleOpenAppointment()} />

        {/* VitalScan Departments Showcase: Flat blue (#245BFF) pill grid + detailed department explorer */}
        <VitalScanDepartments onOpenAppointmentModal={handleOpenAppointment} />

        {/* VitalScan Alternating Story Sections: High-res Imaging, Campus Exterior, Lobby Waiting, Insurance Strip, Booking Form, FAQs & Testimonials */}
        <VitalScanStory onOpenAppointmentModal={() => handleOpenAppointment()} />

        {/* Hospital Location Section (Map Embed) */}
        <section id="location" style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#245BFF" }}>
                HOSPITAL LOCATION &amp; ACCESS
              </span>
              <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", margin: "6px 0 10px 0" }}>
                Visit Maya Hospital in Meerpur
              </h2>
              <p style={{ maxWidth: "680px", margin: "0 auto", color: "#64748b", fontSize: "14.5px" }}>
                Conveniently located on Aira Road Near Children&apos;s Academy School, Meerpur, Lakhimpur Kheri with 24x7 emergency ramp entry and ample patient parking.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "0px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1.5px solid #e2e8f0",
                boxShadow: "0 15px 35px rgba(15, 23, 42, 0.06)"
              }}
            >
              {/* Left Info Card */}
              <div
                style={{
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  padding: "44px 36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px", color: "#ffffff" }}>
                    {HOSPITAL_INFO.name}
                  </h3>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "20px" }}>
                    <i className="fa-solid fa-location-dot" style={{ color: "#245BFF", fontSize: "18px", marginTop: "3px" }}></i>
                    <div>
                      <strong style={{ display: "block", color: "#e2e8f0", fontSize: "13px", marginBottom: "3px" }}>Address:</strong>
                      <span style={{ color: "#94a3b8", fontSize: "13.5px", lineHeight: "22px" }}>
                        {HOSPITAL_INFO.fullAddress}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "20px" }}>
                    <i className="fa-solid fa-phone" style={{ color: "#245BFF", fontSize: "18px", marginTop: "3px" }}></i>
                    <div>
                      <strong style={{ display: "block", color: "#e2e8f0", fontSize: "13px", marginBottom: "3px" }}>24x7 Emergency Hotline:</strong>
                      <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} style={{ color: "#ffffff", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
                        {HOSPITAL_INFO.emergencyPhone}
                      </a>
                      <div style={{ marginTop: "4px", fontSize: "13px", color: "#94a3b8" }}>
                        OPD / Reception: <a href="tel:+919161103325" style={{ color: "#245BFF", textDecoration: "none" }}>+91 9161103325</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
                  <a
                    href={HOSPITAL_INFO.justdialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#245BFF",
                      color: "#ffffff",
                      textDecoration: "none",
                      padding: "11px 22px",
                      borderRadius: "9999px",
                      fontSize: "13px",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <span>Justdial 5.0 ★</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "11px" }}></i>
                  </a>

                  <a
                    href={`https://maps.google.com/maps?daddr=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      border: "1.5px solid #475569",
                      textDecoration: "none",
                      padding: "11px 22px",
                      borderRadius: "9999px",
                      fontSize: "13px",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <span>Get Directions</span>
                    <i className="fa-solid fa-location-arrow" style={{ fontSize: "11px" }}></i>
                  </a>
                </div>
              </div>

              {/* Right Map */}
              <div style={{ minHeight: "420px" }}>
                <iframe
                  title="Maya Hospital Map Location"
                  src={`https://maps.google.com/maps?q=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}&hl=en&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", width: "100%", height: "100%", minHeight: "420px" }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Dark Footer */}
      <CleanFooter />

      {/* AI Nurse Suchi Chatbot Styled in Flat Blue */}
      <SuchiChatbot onOpenAppointment={() => handleOpenAppointment()} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctor={selectedDoctor}
      />
    </>
  );
}
