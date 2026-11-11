"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HOSPITAL_INFO, DEPARTMENTS } from "@/data/hospitalData";

interface CleanNavbarProps {
  onOpenAppointmentModal: () => void;
}

export default function CleanNavbar({ onOpenAppointmentModal }: CleanNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: "100%",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: "0 2px 12px rgba(15, 23, 42, 0.05)",
          padding: "16px 0",
          fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            boxSizing: "border-box"
          }}
        >
          {/* Logo Brand Left */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none"
            }}
          >
            {/* Minimalist Geometric V / Cross Mark */}
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
                fontWeight: 800,
                boxShadow: "0 4px 12px rgba(36, 91, 255, 0.3)"
              }}
            >
              M
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#0f172a",
                  lineHeight: "1.1"
                }}
              >
                MAYA HOSPITAL
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#245BFF"
                }}
              >
                Multi-Speciality Centre
              </span>
            </div>
          </Link>

          {/* Center Navigation Links - Clean text matching screenshot */}
          <nav
            className="clean-desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px"
            }}
          >
            <Link
              href="/"
              style={{
                color: "#0f172a",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#245BFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}
            >
              Home
            </Link>
            <Link
              href="#departments"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#245BFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Specialities
            </Link>
            <Link
              href="/departments"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#245BFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Services
            </Link>
            <Link
              href="/doctors"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#245BFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Our Doctors
            </Link>
            <Link
              href="#about"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#245BFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              About Us
            </Link>
            <Link
              href="/consultancy"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#245BFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              Patient Journey
            </Link>
          </nav>

          {/* Right Action: Pill Book Now Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={onOpenAppointmentModal}
              style={{
                backgroundColor: "#245BFF",
                color: "#ffffff",
                border: "none",
                borderRadius: "9999px",
                padding: "10px 22px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 14px rgba(36, 91, 255, 0.35)",
                transition: "all 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1b46cc";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#245BFF";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>Book Now</span>
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "9px"
                }}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="clean-mobile-toggle"
              aria-label="Toggle Menu"
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                padding: "8px",
                cursor: "pointer",
                color: "#0f172a",
                fontSize: "20px"
              }}
            >
              <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: "rgba(15, 23, 42, 0.4)",
            backdropFilter: "blur(4px)"
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "280px",
              height: "100%",
              backgroundColor: "#ffffff",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.15)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 800, fontSize: "16px", color: "#0f172a" }}>Maya Hospital</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: "none", border: "none", fontSize: "18px", cursor: "pointer", color: "#64748b" }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: "#0f172a", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
              Home
            </Link>
            <Link href="#departments" onClick={() => setMobileMenuOpen(false)} style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "15px" }}>
              Specialities
            </Link>
            <Link href="/departments" onClick={() => setMobileMenuOpen(false)} style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "15px" }}>
              Services
            </Link>
            <Link href="/doctors" onClick={() => setMobileMenuOpen(false)} style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "15px" }}>
              Our Doctors
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "15px" }}>
              About Us
            </Link>
            <Link href="/consultancy" onClick={() => setMobileMenuOpen(false)} style={{ color: "#475569", textDecoration: "none", fontWeight: 500, fontSize: "15px" }}>
              Patient Journey
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              style={{
                marginTop: "12px",
                backgroundColor: "#245BFF",
                color: "#ffffff",
                border: "none",
                borderRadius: "9999px",
                padding: "12px 20px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer"
              }}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
}
