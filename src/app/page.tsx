"use client";

import React, { useState, useEffect } from "react";
import MayaHeroSection from "@/components/MayaHeroSection";
import FathimaTopLinks from "@/components/FathimaTopLinks";
import MayaAboutSection from "@/components/MayaAboutSection";
import MayaFounderSection from "@/components/MayaFounderSection";
import MayaDepartmentsGrid from "@/components/MayaDepartmentsGrid";
import MayaFacilitiesGrid from "@/components/MayaFacilitiesGrid";
import FathimaDoctors from "@/components/FathimaDoctors";
import FathimaServiceSection from "@/components/FathimaServiceSection";
import FathimaTestimonialsSection from "@/components/FathimaTestimonialsSection";
import FathimaFooter from "@/components/FathimaFooter";
import AppointmentModal from "@/components/AppointmentModal";
import SupportModals from "@/components/SupportModals";
import SchemaMarkup from "@/components/SchemaMarkup";
import SuchiChatbot from "@/components/SuchiChatbot";
import MayaPageLoader from "@/components/MayaPageLoader";
import EnquiryModal from "@/components/EnquiryModal";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function Home() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  // Scroll-on-Reveal Animation IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
      {/* Theme Consistent Purple Page Loader */}
      <MayaPageLoader />

      {/* Schema.org Structured Data */}
      <SchemaMarkup />

      <main>
        {/* Full Cinematic Hero Section with Sticky Integrated Navbar and Whitescale Logo */}
        <MayaHeroSection 
          onOpenAppointmentModal={() => handleOpenAppointment()} 
          onOpenEnquiryModal={() => setEnquiryModalOpen(true)}
        />

        {/* Top 5 Service Links */}
        <div className="reveal-on-scroll">
          <FathimaTopLinks
            onOpenAppointmentModal={() => handleOpenAppointment()}
            onOpenQuestionModal={() => setQuestionModalOpen(true)}
            onOpenReportModal={() => setReportModalOpen(true)}
          />
        </div>

        {/* About Maya Hospital */}
        <div className="reveal-on-scroll">
          <MayaAboutSection onOpenAppointmentModal={() => handleOpenAppointment()} />
        </div>

        {/* Founder's Testimony: Rooted in Lakhimpur Kheri */}
        <div className="reveal-on-scroll">
          <MayaFounderSection />
        </div>

        {/* Specialized Clinical Departments */}
        <div className="reveal-on-scroll">
          <MayaDepartmentsGrid onOpenAppointmentModal={handleOpenAppointment} />
        </div>

        {/* Dedicated Doctors Carousel */}
        <div className="reveal-on-scroll">
          <FathimaDoctors onOpenAppointmentModal={handleOpenAppointment} />
        </div>

        {/* 24x7 Services & Facilities Grid */}
        <div className="reveal-on-scroll">
          <MayaFacilitiesGrid onOpenAppointmentModal={() => handleOpenAppointment()} />
        </div>

        {/* Entrust your health in safe hands */}
        <div className="reveal-on-scroll">
          <FathimaServiceSection />
        </div>

        {/* Patient Testimonials */}
        <div className="reveal-on-scroll">
          <FathimaTestimonialsSection />
        </div>

        {/* Hospital Location Section (Google Map & Justdial Link) */}
        <section id="location" className="reveal-on-scroll" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div className="container">
            <div className="row text-center pb-50" style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="subtitle">HOSPITAL LOCATION</span>
              <h2 className="heading">Visit Maya Hospital Meerpur</h2>
              <p style={{ maxWidth: "700px", margin: "0 auto", color: "#666", fontSize: "15px" }}>
                Conveniently located on Aira Road Near Children&apos;s Academy School, Meerpur, Lakhimpur Kheri with 24x7 emergency entry and ambulance pickup.
              </p>
            </div>

            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                gap: "0px", 
                alignItems: "stretch",
                boxShadow: "0 20px 50px rgba(33, 9, 58, 0.22)",
                borderRadius: "28px",
                overflow: "hidden"
              }}
            >
              {/* Left Blue Card: Left corners rounded, right corners squared off to join the map */}
              <div 
                style={{
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  padding: "44px 40px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRight: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 800, marginBottom: "24px" }}>
                    {HOSPITAL_INFO.name}
                  </h3>
                  
                  <div style={{ marginBottom: "22px", display: "flex", gap: "15px", alignItems: "flex-start" }}>
                    <i className="fa-solid fa-location-dot" style={{ color: "#FF8A00", fontSize: "20px", marginTop: "4px" }}></i>
                    <div>
                      <strong style={{ display: "block", color: "#ffffff", marginBottom: "4px" }}>Address:</strong>
                      <span style={{ color: "rgba(255,255,255,0.88)", fontSize: "14px", lineHeight: "22px" }}>
                        {HOSPITAL_INFO.fullAddress}
                      </span>
                    </div>
                  </div>

                  <div style={{ marginBottom: "22px", display: "flex", gap: "15px", alignItems: "flex-start" }}>
                    <i className="fa-solid fa-phone" style={{ color: "#FF8A00", fontSize: "20px", marginTop: "4px" }}></i>
                    <div>
                      <strong style={{ display: "block", color: "#ffffff", marginBottom: "4px" }}>24x7 Emergency (अस्पताल हेल्पलाइन):</strong>
                      <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} style={{ color: "#ffffff", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
                        {HOSPITAL_INFO.emergencyPhone}
                      </a>
                      <div style={{ marginTop: "4px", fontSize: "13px", color: "rgba(255,255,255,0.85)" }}>
                        <span>OPD / Reception: </span>
                        <a href="tel:+919161103325" style={{ color: "#FFEDD5", textDecoration: "none", fontWeight: 600 }}>+91 9161103325</a>
                        <span style={{ margin: "0 6px" }}>•</span>
                        <a href="tel:+917897576583" style={{ color: "#FFEDD5", textDecoration: "none", fontWeight: 600 }}>+91 7897576583</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "32px", flexWrap: "wrap", alignItems: "center" }}>
                  <a
                    href={HOSPITAL_INFO.justdialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      margin: 0,
                      textDecoration: "none",
                      backgroundColor: "#ffffff",
                      color: "#245BFF",
                      border: "none",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      padding: "13px 24px",
                      borderRadius: "9999px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "none",
                      transition: "all 0.25s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFF7ED";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                    }}
                  >
                    Justdial Profile (5.0 ★)
                  </a>

                  <a
                    href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                    style={{
                      margin: 0,
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      border: "1.5px solid #ffffff",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      padding: "12px 24px",
                      borderRadius: "9999px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "none",
                      transition: "all 0.25s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Right Map Embed: Right corners rounded, left corners squared off to join the card */}
              <div 
                style={{ 
                  border: "1px solid rgba(36, 91, 255, 0.25)",
                  borderLeft: "none",
                  overflow: "hidden", 
                  minHeight: "420px" 
                }}
              >
                <iframe
                  title="Maya Hospital Map"
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

      {/* Footer */}
      <FathimaFooter />

      {/* Theme-Consistent Suchi Care Chatbot (replacing WhatsApp button) */}
      <SuchiChatbot onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialDoctor={selectedDoctor}
      />

      {/* Dedicated Hospital Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />

      {/* Support Modals: Ask a Question & Download Lab Report */}
      <SupportModals
        isQuestionOpen={questionModalOpen}
        onCloseQuestion={() => setQuestionModalOpen(false)}
        isReportOpen={reportModalOpen}
        onCloseReport={() => setReportModalOpen(false)}
      />
    </>
  );
}
