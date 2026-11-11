import React from "react";
import Link from "next/link";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function CleanFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        paddingTop: "60px",
        borderTop: "3px solid #245BFF",
        fontFamily: "var(--body-font), Inter, sans-serif"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px 48px 24px",
          boxSizing: "border-box"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px"
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#245BFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: 800
                }}
              >
                M
              </div>
              <h3 style={{ margin: 0, fontSize: "19px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.01em" }}>
                MAYA HOSPITAL
              </h3>
            </div>

            <p style={{ fontSize: "13.5px", lineHeight: "22px", color: "#94a3b8", marginBottom: "20px" }}>
              {HOSPITAL_INFO.subtagline}
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={HOSPITAL_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  textDecoration: "none"
                }}
              >
                <i className="fa-solid fa-star" style={{ color: "#f59e0b" }}></i>
                <span>5.0 Rating on Justdial</span>
              </a>
            </div>
          </div>

          {/* Col 2: Clinical Departments */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                marginBottom: "16px"
              }}
            >
              Departments
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px" }}>
              <Link href="/departments/urology" style={{ color: "#94a3b8", textDecoration: "none" }}>Urology &amp; Kidney Stones</Link>
              <Link href="/departments/neurosurgery" style={{ color: "#94a3b8", textDecoration: "none" }}>Neurosurgery &amp; Spine</Link>
              <Link href="/departments/gynecology-obstetrics" style={{ color: "#94a3b8", textDecoration: "none" }}>Obstetrics &amp; Gynecology</Link>
              <Link href="/departments/anorectal-surgery" style={{ color: "#94a3b8", textDecoration: "none" }}>Anorectal &amp; Piles Surgery</Link>
              <Link href="/departments/general-surgery" style={{ color: "#94a3b8", textDecoration: "none" }}>General &amp; Laparoscopic Surgery</Link>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                marginBottom: "16px"
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px" }}>
              <Link href="/" style={{ color: "#94a3b8", textDecoration: "none" }}>Home Page</Link>
              <Link href="/doctors" style={{ color: "#94a3b8", textDecoration: "none" }}>Consultant Doctors Roster</Link>
              <Link href="/departments" style={{ color: "#94a3b8", textDecoration: "none" }}>Medical Departments</Link>
              <Link href="/consultancy" style={{ color: "#94a3b8", textDecoration: "none" }}>Book Online Consultation</Link>
              <Link href="#location" style={{ color: "#94a3b8", textDecoration: "none" }}>Hospital Directions</Link>
            </div>
          </div>

          {/* Col 4: 24x7 Emergency Contact */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                marginBottom: "16px"
              }}
            >
              24x7 Emergency
            </h4>
            <p style={{ fontSize: "13px", color: "#94a3b8", margin: "0 0 12px 0" }}>
              Emergency trauma, casualty beds and ambulance dispatch are active 24 hours daily.
            </p>
            <div style={{ marginBottom: "14px" }}>
              <div style={{ fontSize: "11px", textTransform: "uppercase", color: "#245BFF", fontWeight: 700 }}>
                Emergency Hotline:
              </div>
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "2px"
                }}
              >
                {HOSPITAL_INFO.emergencyPhone}
              </a>
            </div>

            <div>
              <div style={{ fontSize: "11px", textTransform: "uppercase", color: "#64748b", fontWeight: 700 }}>
                OPD &amp; Reception:
              </div>
              <a
                href="tel:+919161103325"
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#cbd5e1",
                  textDecoration: "none"
                }}
              >
                +91 9161103325
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        style={{
          borderTop: "1px solid #1e293b",
          padding: "20px 24px",
          textAlign: "center",
          fontSize: "12.5px",
          color: "#64748b"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <span>© 2026 Maya Hospital And Multi-speciality Centre. All rights reserved.</span>
          <span>Aira Road Near Children&apos;s Academy, Meerpur, Lakhimpur Kheri, UP - 262701</span>
        </div>
      </div>
    </footer>
  );
}
