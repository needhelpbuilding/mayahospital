import React from "react";
import Link from "next/link";

interface FacilitiesProps {
  onOpenAppointmentModal?: () => void;
}

const MAYA_SERVICES = [
  {
    icon: "fa-solid fa-prescription",
    title: "24x7 Pharmacy",
    desc: "Complete stock of authentic medicines, life-saving drugs, surgical disposables, and pediatric formulations available day and night."
  },
  {
    icon: "fa-solid fa-bed-pulse",
    title: "24x7 ICU & Critical Care",
    desc: "High-dependency unit equipped with multi-para monitors, ventilators, central oxygen delivery, and specialized intensivist care."
  },
  {
    icon: "fa-solid fa-flask-vial",
    title: "Pathology & Diagnostics",
    desc: "Fully automated biochemistry, hematology, clinical microbiology, hormone assays, and rapid diagnostic screening tests."
  },
  {
    icon: "fa-solid fa-truck-medical",
    title: "24x7 Ambulance Service",
    desc: "Emergency trauma ambulance fleet with life-support equipment providing fast patient transfer across Lakhimpur Kheri district."
  },
  {
    icon: "fa-solid fa-person-walking-with-cane",
    title: "Physiotherapy & Rehab",
    desc: "Comprehensive rehabilitation for orthopedic surgeries, stroke recovery, joint stiffness, spinal conditions, and post-fracture healing."
  },
  {
    icon: "fa-solid fa-file-shield",
    title: "Insurance & Cashless TPA",
    desc: "Hassle-free tie-ups with leading health insurance providers and government health schemes for cashless hospital admission."
  }
];

export default function MayaFacilitiesGrid({ onOpenAppointmentModal }: FacilitiesProps) {
  return (
    <section id="services-facilities" style={{ padding: "90px 0", backgroundColor: "#fcfaf4" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="subtitle">SERVICES & CLINICAL FACILITIES</span>
          <h2 className="heading" style={{ marginBottom: "15px" }}>
            24x7 Healthcare Services at Maya Hospital
          </h2>
          <p style={{ maxWidth: "750px", margin: "0 auto", fontSize: "15px", color: "#666", lineHeight: "24px" }}>
            Maya Hospital relies on continuous innovation, modern medical technology, and empathy to ensure compassionate inpatient and outpatient treatment for all families.
          </p>
        </div>

        {/* 6 Grid Service Boxes */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
          marginBottom: "40px"
        }}>
          {MAYA_SERVICES.map((serv, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#F8FAFC",
                padding: "36px 30px",
                borderRadius: "22px",
                boxShadow: "0 12px 35px rgba(36, 91, 255, 0.05)",
                border: "1px solid #E2E8F0",
                borderTop: "4px solid #245BFF",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Clean Icon without bulky box container */}
              <div style={{
                color: "#FF8A00",
                fontSize: "32px",
                marginBottom: "20px"
              }}>
                <i className={serv.icon}></i>
              </div>

              <h3 style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--primary-color)",
                marginBottom: "12px",
                lineHeight: "26px"
              }}>
                {serv.title}
              </h3>

              <p style={{
                fontSize: "13.8px",
                lineHeight: "22px",
                color: "#555",
                margin: 0
              }}>
                {serv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <div style={{
          backgroundColor: "var(--primary-color)",
          borderRadius: "20px",
          padding: "35px 45px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          boxShadow: "0 15px 35px rgba(16, 58, 70, 0.2)"
        }}>
          <div>
            <h3 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, margin: "0 0 6px 0" }}>
              Require Immediate Medical Assistance or Ambulance?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", margin: 0 }}>
              Our emergency casualty desk and ambulance team are on alert 24 hours a day, 7 days a week.
            </p>
          </div>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a
              href="tel:+919839752108"
              style={{
                backgroundColor: "#ff0000",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <i className="fa-solid fa-phone"></i>
              <span>Call 24x7: +91 9839752108</span>
            </a>

            <button
              onClick={onOpenAppointmentModal}
              style={{
                backgroundColor: "#FF8A00",
                color: "#ffffff",
                border: "1.5px solid rgba(255, 255, 255, 0.4)",
                padding: "12px 28px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#245BFF";
                e.currentTarget.style.borderColor = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FF8A00";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              }}
            >
              Book OPD Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
