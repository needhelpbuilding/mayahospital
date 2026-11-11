"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface VitalScanStoryProps {
  onOpenAppointmentModal: () => void;
}

export default function VitalScanStory({ onOpenAppointmentModal }: VitalScanStoryProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly can I book a specialist doctor appointment or diagnostic test?",
      a: "You can book directly online or by calling our hospital line (+91 9161103325). Slots are available for same-day walk-in consultation, and emergency cases are triaged immediately 24x7."
    },
    {
      q: "Do I need a doctor's referral to get admitted or tested at Maya Hospital?",
      a: "No referral is needed. Our senior consultant physicians and surgeons can examine you directly upon arrival and order all required diagnostic investigations on the spot."
    },
    {
      q: "Are emergency and maternity services available 24 hours a day?",
      a: "Yes. Our emergency casualty department, labor delivery suites, Level-2 NICU, operation theatres, and in-house pharmacy operate 24 hours a day, 365 days a year."
    },
    {
      q: "Do you support cashless health insurance (TPA) & Ayushman Bharat?",
      a: "Yes. We support major health insurance TPAs and cashless medical claim facilities with prompt pre-authorization support from our front desk desk."
    },
    {
      q: "How do I receive my laboratory and diagnostic reports?",
      a: "Reports are handed over in hard-copy format at our diagnostics counter and can also be dispatched directly to your mobile phone via WhatsApp or email."
    }
  ];

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* =========================================================================
          SECTION 1: 3T MRI & Advanced Imaging (Alternating Layout 1)
          ========================================================================= */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
            {/* Left Text */}
            <div>
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
                ADVANCED CLINICAL IMAGING
              </span>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.2vw, 38px)",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0 0 16px 0",
                  letterSpacing: "-0.02em"
                }}
              >
                High-Resolution Diagnostic Imaging &amp; Scans
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "26px", color: "#475569", marginBottom: "16px" }}>
                At Maya Hospital, accurate and high-definition clinical imaging forms the foundation of precision surgery and effective medical therapy. Our diagnostic wing features modern Digital X-Ray, high-resolution 2D Echocardiography, and Color Doppler Ultrasound.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "26px", color: "#475569", marginBottom: "24px" }}>
                Engineered for patient comfort with wide bore apertures, rapid acquisition sequences, and reduced examination times, our imaging suites minimize patient discomfort while capturing minute anatomical details.
              </p>
              <button
                onClick={onOpenAppointmentModal}
                style={{
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "12px 28px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 14px rgba(36, 91, 255, 0.3)"
                }}
              >
                <span>Book Diagnostic Scan</span>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
              </button>
            </div>

            {/* Right Image: Modern Medical Scanner */}
            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)" }}>
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                alt="Modern Medical Scanner & Diagnostics at Maya Hospital"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: Convenient Location & Campus Exterior (Alternating Layout 2)
          ========================================================================= */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
            {/* Left Image: Hospital Exterior */}
            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)", order: 2 }}>
              <img
                src="/mayahospital.jpeg"
                alt="Maya Hospital Building Campus in Meerpur"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Right Text */}
            <div style={{ order: 1 }}>
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
                CENTRAL CONVENIENCE
              </span>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.2vw, 38px)",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0 0 16px 0",
                  letterSpacing: "-0.02em"
                }}
              >
                Convenient Location in Meerpur, Lakhimpur Kheri
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "26px", color: "#475569", marginBottom: "16px" }}>
                Maya Hospital is strategically situated on Aira Road Near Children&apos;s Academy School, Meerpur, Lakhimpur Kheri. With wide approach roads, dedicated patient drop-off bays, and 24x7 emergency ramp access, reaching medical care is quick and effortless.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "26px", color: "#475569", marginBottom: "24px" }}>
                Equipped with round-the-clock emergency casualty, uninterrupted generator backups, and on-call specialist surgeons, we serve the entire region with compassionate care.
              </p>
              <a
                href="#location"
                style={{
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "9999px",
                  padding: "12px 28px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 14px rgba(36, 91, 255, 0.3)"
                }}
              >
                <span>Get Directions &amp; View Map</span>
                <i className="fa-solid fa-location-dot" style={{ fontSize: "11px" }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Modern Patient Reception & Lobby (Alternating Layout 3)
          ========================================================================= */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
            {/* Left Text */}
            <div>
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
                HEALING ENVIRONMENT
              </span>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.2vw, 38px)",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0 0 16px 0",
                  letterSpacing: "-0.02em"
                }}
              >
                Welcoming Reception &amp; Patient Waiting Suites
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "26px", color: "#475569", marginBottom: "16px" }}>
                Healthcare starts with warmth, prompt attention, and reassurance. Our modern reception lobby is staffed with helpful patient coordinators who streamline doctor registration, OPD scheduling, and admission paperwork with minimal wait times.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "26px", color: "#475569", marginBottom: "24px" }}>
                Comfortable air-conditioned waiting suites, sanitized drinking water, wheelchair assistance, and immediate clinical triage ensure that every patient feels cared for from the minute they enter.
              </p>
              <button
                onClick={onOpenAppointmentModal}
                style={{
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "12px 28px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 14px rgba(36, 91, 255, 0.3)"
                }}
              >
                <span>Plan Your Visit</span>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
              </button>
            </div>

            {/* Right Image: Hospital Reception */}
            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)" }}>
              <img
                src="/hero-lobby.png"
                alt="Maya Hospital Reception & Patient Care Lobby"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: Insurance & TPA Strip (Matching screenshot cyan bar -> flat blue)
          ========================================================================= */}
      <section style={{ padding: "48px 0", backgroundColor: "#245BFF", color: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box", textAlign: "center" }}>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 800,
              margin: "0 0 10px 0",
              letterSpacing: "-0.01em"
            }}
          >
            Cashless Insurance &amp; Flexible Payment Facilities
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255, 255, 255, 0.88)",
              maxWidth: "680px",
              margin: "0 auto 28px auto",
              lineHeight: "22px"
            }}
          >
            We accept all major health insurances, cashless TPA policies, UPI / QR payments, and Ayushman Bharat coverage.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap"
            }}
          >
            {["Ayushman Bharat", "Star Health", "HDFC ERGO", "ICICI Lombard", "Bajaj Allianz", "Care Health", "SBI General", "New India"].map((name, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Quick Booking Form Card (Matching form card in screenshot)
          ========================================================================= */}
      <section id="appointment-form-section" style={{ padding: "80px 0", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              border: "1px solid #e2e8f0",
              padding: "40px 36px",
              boxShadow: "0 15px 35px rgba(15, 23, 42, 0.08)"
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#245BFF" }}>
                FAST DIRECT BOOKING
              </span>
              <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#0f172a", margin: "6px 0 8px 0" }}>
                Request an Appointment
              </h3>
              <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0 }}>
                Fill your details below. Our OPD desk will call you to confirm your slot.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onOpenAppointmentModal();
              }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1.5px solid #cbd5e1",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    outline: "none"
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#245BFF")}
                  onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1.5px solid #cbd5e1",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    outline: "none"
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#245BFF")}
                  onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "6px", textTransform: "uppercase" }}>
                  Select Speciality / Treatment
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1.5px solid #cbd5e1",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                    outline: "none"
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#245BFF")}
                  onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
                >
                  <option value="General Surgery">General Surgery (Dr. Brijendra Verma)</option>
                  <option value="Urology">Urology &amp; Kidney Stones (Dr. Krishna Kumar Bhandari)</option>
                  <option value="Neurosurgery">Neurosurgery &amp; Spine (Dr. Shiv Narayan Pandey)</option>
                  <option value="Gynecology">Gynecology &amp; Maternity (Dr. Apoorva Shrivastava)</option>
                  <option value="Proctology">Anorectal &amp; Piles Surgery (Dr. Raviraj Singh)</option>
                  <option value="Diagnostics">Laboratory / Diagnostics Scan</option>
                </select>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "8px",
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "14px 20px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 6px 18px rgba(36, 91, 255, 0.35)",
                  transition: "all 0.2s ease"
                }}
              >
                <span>Proceed to Book Appointment</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>

              <div style={{ textAlign: "center", fontSize: "12px", color: "#64748b", marginTop: "4px" }}>
                Or call directly: <a href="tel:+919161103325" style={{ color: "#245BFF", fontWeight: 700, textDecoration: "none" }}>+91 9161103325</a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: Frequently Asked Questions (Accordion)
          ========================================================================= */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#245BFF" }}>
              PATIENT QUESTIONS
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", margin: "6px 0 0 0" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    overflow: "hidden",
                    backgroundColor: isOpen ? "#f8fafc" : "#ffffff",
                    transition: "all 0.2s ease"
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      padding: "18px 22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "16px"
                    }}
                  >
                    <span style={{ fontSize: "15px", fontWeight: 700, color: isOpen ? "#245BFF" : "#0f172a" }}>
                      {faq.q}
                    </span>
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: isOpen ? "#245BFF" : "#f1f5f9",
                        color: isOpen ? "#ffffff" : "#64748b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "all 0.25s ease"
                      }}
                    >
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 22px 20px 22px", fontSize: "14px", lineHeight: "24px", color: "#475569" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: Patient Testimonials Strip (Matching screenshot)
          ========================================================================= */}
      <section style={{ padding: "80px 0", backgroundColor: "#f8fafc", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#245BFF" }}>
              VERIFIED EXPERIENCES
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", margin: "6px 0 0 0" }}>
              Patient Testimonials
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px"
            }}
          >
            {[
              {
                name: "Ramesh Srivastava",
                loc: "Lakhimpur Kheri",
                rating: 5,
                text: "Dr. Brijendra Verma's surgery team provided fantastic treatment for my father's hernia operation. Rapid recovery and exceptionally transparent billing."
              },
              {
                name: "SB Maurya",
                loc: "Meerpur",
                rating: 5,
                text: "Best multi-speciality hospital on Aira Road Meerpur. Dr. Krishna Kumar Bhandari took care of my kidney stones through PCNL endoscopy without any painful cut."
              },
              {
                name: "Pooja Verma",
                loc: "Kheri District",
                rating: 5,
                text: "Dr. Apoorva Shrivastava delivered my baby safely. The maternity suite, NICU care, and round-the-clock nursing staff gave us total confidence."
              },
              {
                name: "Mohammad Tariq",
                loc: "Aira",
                rating: 5,
                text: "Late night emergency response was instant. Emergency doctor arrived within 2 minutes and stabilized the patient immediately. God bless the team."
              }
            ].map((rev, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 15px rgba(15, 23, 42, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: "4px", color: "#f59e0b", marginBottom: "12px", fontSize: "13px" }}>
                    {[...Array(rev.rating)].map((_, r) => (
                      <i key={r} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p style={{ fontSize: "13.5px", lineHeight: "22px", color: "#475569", margin: "0 0 16px 0", fontStyle: "italic" }}>
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "12px" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>{rev.name}</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>{rev.loc} • Verified Patient</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
