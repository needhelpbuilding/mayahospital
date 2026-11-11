import React from "react";
import Link from "next/link";

interface AboutProps {
  onOpenAppointmentModal?: () => void;
}

export default function MayaAboutSection({ onOpenAppointmentModal }: AboutProps) {
  return (
    <section id="about" style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Main 2-column About Row matching mayahospital.in structure */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "40px", marginBottom: "60px" }}>
          {/* Left Text */}
          <div style={{ flex: "1 1 540px" }}>
            <span className="subtitle">ABOUT MAYA HOSPITAL</span>
            <h2 className="heading" style={{ marginBottom: "20px" }}>
              Welcome to <span style={{ color: "#245BFF" }}>Maya Hospital</span> & Multi-speciality Centre
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "26px", color: "#4b5563", marginBottom: "18px" }}>
              We, at <strong>Maya Multispeciality Hospital</strong>, offer excellence in in-patient and out-patient facilities, focusing on the comfort and safety of our patients and their loved ones. Our modern infrastructure and facilities that match rigorous quality standards make us one of the premier healthcare providers in Lakhimpur Kheri and Uttar Pradesh.
            </p>
            <p style={{ fontSize: "15px", lineHeight: "26px", color: "#4b5563", marginBottom: "30px" }}>
              The hospital is defined by its multi-disciplinary approach to provide holistic healthcare. Maya Hospital has a dedicated team of experienced doctors, certified surgeons, and compassionate nursing staff offering 24x7 emergency medical attention, laparoscopic surgeries, obstetrics & gynecology, and critical intensive care.
            </p>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--fadeblue)", padding: "14px 20px", borderRadius: "12px", borderLeft: "3px solid var(--secondary-color)" }}>
                <i className="fa-solid fa-clock-rotate-left" style={{ fontSize: "22px", color: "var(--secondary-color)" }}></i>
                <div>
                  <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: 600, textTransform: "uppercase" }}>OPD Hours</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--primary-color)" }}>9:00 AM - 9:00 PM Daily</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "var(--fadeblue)", padding: "14px 20px", borderRadius: "12px", borderLeft: "3px solid #ff0000" }}>
                <i className="fa-solid fa-truck-medical" style={{ fontSize: "22px", color: "#ff0000" }}></i>
                <div>
                  <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: 600, textTransform: "uppercase" }}>Emergency & Trauma</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--primary-color)" }}>24x7 Round the Clock</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Feature with Experience Card */}
          <div style={{ flex: "1 1 450px", position: "relative" }}>
            <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 60px rgba(36, 20, 10, 0.16)" }}>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                alt="Maya Hospital Healthcare Facility"
                style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Floating Experience Badge */}
            <div id="awards" style={{
              scrollMarginTop: "100px",
              position: "absolute",
              bottom: "-25px",
              left: "25px",
              backgroundColor: "var(--primary-color)",
              color: "#ffffff",
              padding: "20px 28px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              border: "1px solid rgba(0, 184, 174, 0.3)"
            }}>
              <i className="fa-solid fa-award" style={{ fontSize: "36px", color: "var(--secondary-color)" }}></i>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 800, lineHeight: "1" }}>5.0 ★ Rated</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "1px" }}>Justdial Verified Care</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars (Mission, Vision, Motto, Quality Policy) styled with clean purple top borders and tints */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px", marginTop: "40px" }}>
          {/* Mission */}
          <div style={{
            backgroundColor: "rgba(124, 58, 237, 0.04)",
            padding: "32px 26px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(124, 58, 237, 0.06)",
            border: "1px solid rgba(124, 58, 237, 0.12)",
            borderTop: "4px solid #245BFF",
            transition: "all 0.3s ease",
            position: "relative"
          }}>
            <div style={{
              color: "#245BFF",
              marginBottom: "16px",
              fontSize: "28px"
            }}>
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--primary-color)", marginBottom: "10px" }}>Our Mission</h3>
            <p style={{ fontSize: "13.5px", lineHeight: "22px", color: "#555", margin: 0 }}>
              Health for our Patients. We believe our work is our worship because we just treat and the healing comes from the heart.
            </p>
          </div>

          {/* Vision */}
          <div id="vision" style={{
            scrollMarginTop: "100px",
            backgroundColor: "rgba(124, 58, 237, 0.04)",
            padding: "32px 26px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(124, 58, 237, 0.06)",
            border: "1px solid rgba(124, 58, 237, 0.12)",
            borderTop: "4px solid #245BFF",
            transition: "all 0.3s ease",
            position: "relative"
          }}>
            <div style={{
              color: "#245BFF",
              marginBottom: "16px",
              fontSize: "28px"
            }}>
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--primary-color)", marginBottom: "10px" }}>Our Vision</h3>
            <p style={{ fontSize: "13.5px", lineHeight: "22px", color: "#555", margin: 0 }}>
              We are constantly driven towards consistency, continuous betterment, medical precision and healthcare excellence.
            </p>
          </div>

          {/* Motto */}
          <div style={{
            backgroundColor: "rgba(124, 58, 237, 0.04)",
            padding: "32px 26px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(124, 58, 237, 0.06)",
            border: "1px solid rgba(124, 58, 237, 0.12)",
            borderTop: "4px solid #245BFF",
            transition: "all 0.3s ease",
            position: "relative"
          }}>
            <div style={{
              color: "#245BFF",
              marginBottom: "16px",
              fontSize: "28px"
            }}>
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--primary-color)", marginBottom: "10px" }}>Hospital Motto</h3>
            <p style={{ fontSize: "13.5px", lineHeight: "22px", color: "#555", margin: 0 }}>
              Caring for your health <strong>Emotionally, Medically and Economically</strong> with full transparency.
            </p>
          </div>

          {/* Quality Policy */}
          <div style={{
            backgroundColor: "rgba(124, 58, 237, 0.04)",
            padding: "32px 26px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(124, 58, 237, 0.06)",
            border: "1px solid rgba(124, 58, 237, 0.12)",
            borderTop: "4px solid #245BFF",
            transition: "all 0.3s ease",
            position: "relative"
          }}>
            <div style={{
              color: "#245BFF",
              marginBottom: "16px",
              fontSize: "28px"
            }}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--primary-color)", marginBottom: "10px" }}>Quality Policy</h3>
            <p style={{ fontSize: "13.5px", lineHeight: "22px", color: "#555", margin: 0 }}>
              Safe environment, strict clinical guidelines, respecting patient dignity, and complete transparency in all treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
