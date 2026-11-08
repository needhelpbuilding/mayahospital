import React from "react";
import Link from "next/link";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface FooterProps {
  // Optional so pages without these modals keep working (links then fall back to their anchors)
  onOpenAppointmentModal?: () => void;
  onOpenEnquiryModal?: () => void;
}

export default function FathimaFooter({ onOpenAppointmentModal, onOpenEnquiryModal }: FooterProps = {}) {
  return (
    <footer
      style={{
        backgroundColor: "#120320",
        backgroundImage: "linear-gradient(180deg, #1b072c 0%, #0d0216 100%)",
        color: "#ffffff",
        paddingTop: "60px",
        borderTop: "1px solid rgba(124, 58, 237, 0.25)"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "36px",
            paddingBottom: "50px"
          }}
        >
          {/* Column 1: Hospital Identity & Contact */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <img
                src="/White Caduceus Laurel Monogram.png"
                alt="Maya Hospital Crest"
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
              />
              <div>
                <h4
                  style={{
                    fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                    color: "#ffffff",
                    fontSize: "19px",
                    fontWeight: 700,
                    margin: 0,
                    letterSpacing: "-0.01em",
                    lineHeight: "1.2"
                  }}
                >
                  MAYA HOSPITAL
                </h4>
                <span
                  style={{
                    color: "#c084fc",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    fontWeight: 600
                  }}
                >
                  Multi-speciality Centre
                </span>
              </div>
            </div>

            <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: "13.5px", lineHeight: "21px", margin: "0 0 18px 0" }}>
              24x7 Emergency, surgical, maternity, and critical care institution in Lakhimpur Kheri.
            </p>

            <div style={{ fontSize: "13px", lineHeight: "20px", color: "rgba(255, 255, 255, 0.8)", marginBottom: "12px" }}>
              <span style={{ color: "#ffffff", fontWeight: 600, display: "block", marginBottom: "2px" }}>Location</span>
              Near Children&apos;s Academy School, Aira Road, Meerpur, Lakhimpur Kheri, UP 262701
            </div>

            <div style={{ fontSize: "13px", lineHeight: "20px", color: "rgba(255, 255, 255, 0.8)" }}>
              <span style={{ color: "#ffffff", fontWeight: 600, display: "block", marginBottom: "2px" }}>24x7 Helpline</span>
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                style={{ color: "#c084fc", fontWeight: 600, textDecoration: "none" }}
              >
                {HOSPITAL_INFO.emergencyPhone}
              </a>
              <span style={{ margin: "0 6px", opacity: 0.4 }}>•</span>
              <a
                href={`tel:${HOSPITAL_INFO.bookingPhone.replace(/\s+/g, '')}`}
                style={{ color: "rgba(255, 255, 255, 0.85)", textDecoration: "none" }}
              >
                {HOSPITAL_INFO.bookingPhone}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              style={{
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: "16px",
                paddingBottom: "8px",
                borderBottom: "1.5px solid rgba(124, 58, 237, 0.4)"
              }}
            >
              Explore
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { name: "About Maya Hospital", href: "#about" },
                { name: "Specialist Doctors", href: "#doctors" },
                { name: "Clinical Departments", href: "#departments" },
                { name: "24x7 Emergency & ICU", href: "#services-facilities" },
                { name: "Cashless Mediclaim", href: "#insurance" },
                { name: "Hospital Directions", href: "#location" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.72)",
                      fontSize: "13.5px",
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c084fc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.72)";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Medical Specialities (High-intent keywords) */}
          <div>
            <h3
              style={{
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: "16px",
                paddingBottom: "8px",
                borderBottom: "1.5px solid rgba(124, 58, 237, 0.4)"
              }}
            >
              Specialities
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Obstetrics & Gynaecology",
                "Orthopaedics & Joint Surgery",
                "General & Laparoscopic Surgery",
                "General Medicine & Critical Care",
                "Paediatrics & Neonatology (NICU)",
                "Diagnostic Pathology & X-Ray"
              ].map((spec, idx) => (
                <li key={idx}>
                  <a
                    href="#departments"
                    style={{
                      color: "rgba(255, 255, 255, 0.72)",
                      fontSize: "13.5px",
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c084fc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.72)";
                    }}
                  >
                    {spec}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Patient Services (Actionable, relevant keyword links) */}
          <div>
            <h3
              style={{
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: "16px",
                paddingBottom: "8px",
                borderBottom: "1.5px solid rgba(124, 58, 237, 0.4)"
              }}
            >
              Patient Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {([
                { name: "Book OPD Consultation", href: "#location", onClick: onOpenAppointmentModal },
                { name: "24x7 Ambulance Request (108)", href: `tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}` },
                { name: "TPA & Insurance Desk", href: "#insurance" },
                { name: "Clinical Inquiry / Enquiry", href: "#location", onClick: onOpenEnquiryModal },
                { name: "View on Google Maps", href: `https://www.google.com/maps/search/?api=1&query=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}`, external: true }
              ] as { name: string; href: string; external?: boolean; onClick?: () => void }[]).map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    target={service.external ? "_blank" : undefined}
                    rel={service.external ? "noopener noreferrer" : undefined}
                    onClick={
                      service.onClick
                        ? (e) => {
                            e.preventDefault();
                            service.onClick?.();
                          }
                        : undefined
                    }
                    style={{
                      color: "rgba(255, 255, 255, 0.72)",
                      fontSize: "13.5px",
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c084fc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.72)";
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Simplified, Clean Bottom Bar */}
      <div
        style={{
          backgroundColor: "#0d0216",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "18px 0"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "12.5px",
            color: "rgba(255, 255, 255, 0.65)"
          }}
        >
          <span>
            © 2026 Maya Hospital And Multi-speciality Centre. All rights reserved.
          </span>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <span>Aira Road, Meerpur, Lakhimpur Kheri</span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(255, 255, 255, 0.85)" }}>
              <i className="fa-solid fa-certificate" style={{ color: "#c084fc", fontSize: "11px" }}></i>
              <span>Accreditations &amp; Clinical Quality Standards</span>
            </span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span>
              Built with care by{" "}
              <a
                href="https://needhelpbuilding.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#c084fc",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#c084fc";
                }}
              >
                NeedHelpBuilding Team
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
