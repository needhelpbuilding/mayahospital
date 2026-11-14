"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

export default function FathimaHeader({ onOpenAppointmentModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Mini Strip with Welcome note, OPD & Emergency alert, Portal Login */}
      <div style={{
        backgroundColor: "#071c22",
        color: "#ffffff",
        fontSize: "12px",
        padding: "7px 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
      }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span>
              <i className="fa-solid fa-bell" style={{ color: "#00b8ae", marginRight: "6px" }}></i>
              Welcome to <strong>Maya Hospital And Multi-speciality Centre</strong>, Meerpur
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
            <span style={{ color: "#00b8ae", fontWeight: 600 }}>
              <i className="fa-regular fa-clock" style={{ marginRight: "5px" }}></i>
              OPD: 9:00 AM - 9:00 PM • Emergency: 24x7
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <a
              href="#location"
              style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}
            >
              <i className="fa-solid fa-map-pin" style={{ color: "#ff0000" }}></i>
              <span>Near Children&apos;s Academy, Meerpur</span>
            </a>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="#" style={{ color: "rgba(255,255,255,0.7)" }} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" style={{ color: "rgba(255,255,255,0.7)" }} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" style={{ color: "rgba(255,255,255,0.7)" }} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" style={{ color: "rgba(255,255,255,0.7)" }} aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Top Header Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header">
            {/* Logo */}
            <div className="logo">
              <Link href="/" className="flex items-center gap-3 no-underline">
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <img
                    src="/White Caduceus Laurel Monogram.png"
                    alt="Maya Hospital Monogram Logo"
                    style={{
                      height: "64px",
                      width: "auto",
                      objectFit: "contain",
                      filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.3))"
                    }}
                  />
                  <div>
                    <h1 style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: "0.2px",
                      margin: 0,
                      lineHeight: "26px",
                      fontFamily: "var(--heading-font)"
                    }}>
                      MAYA <span style={{ color: "var(--secondary-color)" }}>HOSPITAL</span>
                    </h1>
                    <span style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.85)",
                      textTransform: "uppercase",
                      letterSpacing: "1.4px",
                      display: "block",
                      marginTop: "3px"
                    }}>
                      & Multispeciality Center • Meerpur
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Information Widgets */}
            <div className="header-right">
              {/* Phone Booking */}
              <div className="inline">
                <i className="fa fa-phone phone-icon"></i>
                <div className="widget_text header-links">
                  <div className="textwidget custom-html-widget">
                    <span>For Booking & Emergency</span>
                    <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}>
                      {HOSPITAL_INFO.emergencyPhone}
                    </a>
                    <br />
                    <a href={`tel:${HOSPITAL_INFO.bookingPhone.replace(/\s+/g, '')}`}>
                      {HOSPITAL_INFO.bookingPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Find a Doctor */}
              <div className="inline" style={{ display: "inline-block" }}>
                <span className="material-symbols-outlined t-icon">
                  stethoscope
                </span>
                <span>What is the Problem?</span>
                <a href="#doctors">Find a Doctor</a>
              </div>

              {/* Book an Appointment Button */}
              <div className="widget_text header-links">
                <div className="textwidget custom-html-widget">
                  <button 
                    onClick={onOpenAppointmentModal} 
                    className="book-btn"
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    Book an Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dark Greenish-Navy Navigation Menu Bar */}
      <div className="row menu-wrap" style={{ width: "100%", backgroundColor: "var(--tertiary-color)", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="container">
          <div className="navigation" style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            flexWrap: "nowrap"
          }}>
            <nav className="vg-nav vg-nav-lg" style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <ul style={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
                margin: 0,
                padding: 0,
                listStyle: "none",
                width: "100%"
              }}>
                <li className="active"><Link href="/" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>Home</Link></li>
                <li><a href="#about" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>About us</a></li>
                <li><a href="#departments" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>Departments</a></li>
                <li><a href="#doctors" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>Doctors</a></li>
                <li><a href="#services-facilities" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>Services</a></li>
                <li><a href="#packages" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>Health Packages</a></li>
                <li><a href="#insurance" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>Insurance & TPA</a></li>
                <li><a href="#news" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>News & Events</a></li>
                <li><a href="#location" style={{ padding: "16px 18px", fontSize: "14px", fontWeight: 600 }}>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
