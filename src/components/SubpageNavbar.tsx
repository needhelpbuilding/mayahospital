"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HOSPITAL_INFO, DEPARTMENTS, DOCTORS } from "@/data/hospitalData";

interface SubpageNavbarProps {
  onOpenAppointmentModal?: (initialDocOrDept?: string) => void;
}

export default function SubpageNavbar({ onOpenAppointmentModal }: SubpageNavbarProps) {
  const [openMenu, setOpenMenu] = useState<"departments" | "doctors" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<"departments" | "doctors" | null>(null);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100%",
        backgroundColor: "rgba(22, 6, 36, 0.98)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(124, 58, 237, 0.25)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.45)",
        padding: "14px 0"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1680px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 50px)",
          boxSizing: "border-box"
        }}
      >
        {/* Logo Left */}
        <div style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none"
            }}
          >
            <img
              src="/White Caduceus Laurel Monogram.png"
              alt="Maya Hospital Crest"
              style={{
                height: "46px",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))"
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                  fontSize: "19px",
                  fontWeight: 800,
                  letterSpacing: "-0.015em",
                  color: "#ffffff",
                  lineHeight: "1.1"
                }}
              >
                MAYA HOSPITAL
              </span>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#FF8A00",
                  fontWeight: 600
                }}
              >
                Multi-speciality Centre
              </span>
            </div>
          </Link>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <div
          className="subpage-nav-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "1 1 auto",
            margin: "0 20px"
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px"
            }}
          >
            <Link
              href="/"
              className="maya-nav-link"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                transition: "color 0.2s ease"
              }}
            >
              HOME
            </Link>

            {/* DEPARTMENTS DROPDOWN */}
            <div
              className="maya-dropdown-wrap"
              style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
              onMouseEnter={() => setOpenMenu("departments")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href="/departments"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>DEPARTMENTS</span>
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    fontSize: "9px",
                    transform: openMenu === "departments" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease"
                  }}
                />
              </Link>

              {openMenu === "departments" && (
                <div
                  className="dropdown-slow-fade"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "-80px",
                    width: "560px",
                    backgroundColor: "#0E36B4",
                    borderRadius: "16px",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
                    border: "1px solid rgba(36, 91, 255, 0.3)",
                    padding: "20px 24px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    zIndex: 2000,
                    backdropFilter: "blur(20px)"
                  }}
                >
                  {DEPARTMENTS.map((dept) => (
                    <Link
                      key={dept.id}
                      href={`/departments/${dept.slug}`}
                      onClick={() => setOpenMenu(null)}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        textDecoration: "none",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(168, 85, 247, 0.16)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.transform = "translateX(0px)";
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "rgba(36, 91, 255, 0.2)",
                          color: "#FF8A00",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          flexShrink: 0
                        }}
                      >
                        <i className={dept.iconClass}></i>
                      </div>
                      <div>
                        <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: 700, marginBottom: "3px" }}>
                          {dept.name}
                        </div>
                        <div style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "11px", lineHeight: "1.3" }}>
                          {dept.shortDesc.slice(0, 55)}...
                        </div>
                      </div>
                    </Link>
                  ))}

                  <div style={{ gridColumn: "1 / -1", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <Link
                      href="/departments"
                      onClick={() => setOpenMenu(null)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "10px",
                        borderRadius: "8px",
                        backgroundColor: "#245BFF",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}
                    >
                      <span>Explore All Departments</span>
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* DOCTORS DROPDOWN */}
            <div
              className="maya-dropdown-wrap"
              style={{ position: "relative", display: "inline-flex", alignItems: "center" }}
              onMouseEnter={() => setOpenMenu("doctors")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href="/doctors"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>DOCTORS</span>
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    fontSize: "9px",
                    transform: openMenu === "doctors" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease"
                  }}
                />
              </Link>

              {openMenu === "doctors" && (
                <div
                  className="dropdown-slow-fade"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "-120px",
                    width: "600px",
                    backgroundColor: "#0E36B4",
                    borderRadius: "16px",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.85)",
                    border: "1px solid rgba(36, 91, 255, 0.3)",
                    padding: "20px 24px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    zIndex: 2000,
                    backdropFilter: "blur(20px)"
                  }}
                >
                  {DOCTORS.map((doc) => (
                    <Link
                      key={doc.id}
                      href={`/doctors/${doc.slug}`}
                      onClick={() => setOpenMenu(null)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        textDecoration: "none",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(168, 85, 247, 0.16)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.transform = "translateX(0px)";
                      }}
                    >
                      <img
                        src={doc.image}
                        alt={doc.name}
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "1.5px solid #245BFF",
                          flexShrink: 0
                        }}
                      />
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ color: "#ffffff", fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {doc.name}
                        </div>
                        <div style={{ color: "#FF8A00", fontSize: "11px", fontWeight: 600 }}>
                          {doc.department}
                        </div>
                      </div>
                    </Link>
                  ))}

                  <div style={{ gridColumn: "1 / -1", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <Link
                      href="/doctors"
                      onClick={() => setOpenMenu(null)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "10px",
                        borderRadius: "8px",
                        backgroundColor: "#245BFF",
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}
                    >
                      <span>View All Specialist Doctors</span>
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/consultancy"
              style={{
                color: "#FF8A00",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                transition: "color 0.2s ease"
              }}
            >
              CONSULTANCY
            </Link>
          </nav>
        </div>

        {/* Right Action CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "0 0 auto" }}>
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
            className="subpage-emergency-btn"
            style={{
              backgroundColor: "rgba(220, 38, 38, 0.15)",
              color: "#ffffff",
              border: "1.5px solid #ef4444",
              borderRadius: "9999px",
              padding: "9px 18px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              transition: "all 0.25s ease"
            }}
          >
            <i className="fa-solid fa-phone" style={{ color: "#f87171", fontSize: "11px" }}></i>
            <span>24x7: {HOSPITAL_INFO.emergencyPhone}</span>
          </a>

          {onOpenAppointmentModal && (
            <button
              onClick={() => onOpenAppointmentModal()}
              className="subpage-book-btn"
              style={{
                backgroundColor: "#245BFF",
                color: "#ffffff",
                border: "none",
                borderRadius: "9999px",
                padding: "9px 20px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 4px 15px rgba(36, 91, 255, 0.35)",
                transition: "all 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0E36B4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#245BFF";
              }}
            >
              <i className="fa-regular fa-calendar-check" style={{ fontSize: "12px" }}></i>
              <span>Book OPD</span>
            </button>
          )}

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="subpage-mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#ffffff",
              fontSize: "22px",
              cursor: "pointer",
              padding: "6px 8px"
            }}
          >
            <i className={mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="subpage-mobile-drawer"
          style={{
            backgroundColor: "#0E36B4",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "20px 24px 30px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: 700 }}
          >
            HOME
          </Link>

          <div>
            <div
              onClick={() => setMobileSubmenu(mobileSubmenu === "departments" ? null : "departments")}
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <span>DEPARTMENTS</span>
              <i className={`fa-solid fa-chevron-${mobileSubmenu === "departments" ? "up" : "down"}`} style={{ fontSize: "11px" }}></i>
            </div>
            {mobileSubmenu === "departments" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "12px", paddingLeft: "14px", borderLeft: "2px solid #245BFF" }}>
                <Link
                  href="/departments"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: "#FF8A00", textDecoration: "none", fontSize: "13px", fontWeight: 700 }}
                >
                  All Departments Overview →
                </Link>
                {DEPARTMENTS.map((dept) => (
                  <Link
                    key={dept.id}
                    href={`/departments/${dept.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px" }}
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <div
              onClick={() => setMobileSubmenu(mobileSubmenu === "doctors" ? null : "doctors")}
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <span>DOCTORS</span>
              <i className={`fa-solid fa-chevron-${mobileSubmenu === "doctors" ? "up" : "down"}`} style={{ fontSize: "11px" }}></i>
            </div>
            {mobileSubmenu === "doctors" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "12px", paddingLeft: "14px", borderLeft: "2px solid #245BFF" }}>
                <Link
                  href="/doctors"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: "#FF8A00", textDecoration: "none", fontSize: "13px", fontWeight: 700 }}
                >
                  All Specialists Directory →
                </Link>
                {DOCTORS.map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/doctors/${doc.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px" }}
                  >
                    {doc.name} ({doc.department})
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/consultancy"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "#FF8A00", textDecoration: "none", fontSize: "14px", fontWeight: 700 }}
          >
            ONLINE CONSULTANCY
          </Link>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "12px" }}>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              style={{
                backgroundColor: "rgba(220, 38, 38, 0.2)",
                color: "#ffffff",
                border: "1px solid #ef4444",
                borderRadius: "8px",
                padding: "12px",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center"
              }}
            >
              🚨 Call Emergency: {HOSPITAL_INFO.emergencyPhone}
            </a>

            {onOpenAppointmentModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                style={{
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  cursor: "pointer"
                }}
              >
                Book Appointment
              </button>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 991px) {
          .subpage-nav-center {
            display: none !important;
          }
          .subpage-emergency-btn span {
            display: none;
          }
          .subpage-emergency-btn {
            padding: 8px 12px !important;
          }
          .subpage-book-btn {
            display: none !important;
          }
          .subpage-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
