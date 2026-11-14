"use client";

import React, { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Modern Reception & Triage Lobby",
    category: "Infrastructure",
    imageUrl: "/Maya Hospital Reception Lobby.png",
    description: "Spacious, welcoming admission lounge equipped with digital records and 24x7 help desk."
  },
  {
    id: "2",
    title: "Advanced Modular Operation Theatre",
    category: "OT & Surgery",
    imageUrl: "/Focused Surgical Team in a Modern Operating Room.png",
    description: "HEPA-filtered sterile laminar airflow modular OT for general & laparoscopic procedures."
  },
  {
    id: "3",
    title: "Specialist Inpatient Private Care",
    category: "Inpatient",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    description: "Hygienic, comfortable private recovery rooms with continuous vital monitoring."
  },
  {
    id: "4",
    title: "Neonatal & Paediatric Critical Unit",
    category: "Maternity & NICU",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    description: "Specialized Level-2 phototherapy, radiant warmers and dedicated newborn support."
  },
  {
    id: "5",
    title: "24x7 Automated Diagnostic Pathology",
    category: "Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
    description: "High-precision biochemistry, haematology and emergency blood testing systems."
  },
  {
    id: "6",
    title: "Round-the-Clock Emergency Entry",
    category: "Emergency",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    description: "Direct ambulance bay ramp with crash-cart resuscitation and rapid casualty admission."
  }
];

export default function MayaGallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const categories = ["All", "Infrastructure", "OT & Surgery", "Maternity & NICU", "Diagnostics"];

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="reveal-on-scroll"
      style={{
        padding: "90px 0",
        backgroundColor: "#160526",
        color: "#ffffff",
        scrollMarginTop: "90px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <span
            style={{
              color: "#c084fc",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px"
            }}
          >
            HOSPITAL INFRASTRUCTURE
          </span>
          <h2
            style={{
              fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "14px",
              letterSpacing: "-0.02em"
            }}
          >
            Maya Hospital Gallery & Campus
          </h2>
          <p style={{ maxWidth: "680px", margin: "0 auto", color: "rgba(255, 255, 255, 0.72)", fontSize: "15px", lineHeight: "1.6" }}>
            Explore our advanced clinical infrastructure, sterile surgical suites, modern patient recovery wards, and comprehensive 24x7 emergency facilities in Meerpur, Lakhimpur Kheri.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "28px"
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  backgroundColor: activeFilter === cat ? "#7c3aed" : "rgba(255, 255, 255, 0.08)",
                  color: "#ffffff",
                  border: activeFilter === cat ? "1px solid #a855f7" : "1px solid rgba(255, 255, 255, 0.15)",
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px"
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(124, 58, 237, 0.22)",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
                transition: "transform 0.3s ease, border-color 0.3s ease",
                display: "flex",
                flexDirection: "column"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(192, 132, 252, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.22)";
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "230px", overflow: "hidden" }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease"
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    backgroundColor: "rgba(22, 6, 36, 0.85)",
                    backdropFilter: "blur(8px)",
                    color: "#c084fc",
                    border: "1px solid rgba(192, 132, 252, 0.3)",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px"
                  }}
                >
                  {item.category}
                </span>
              </div>
              <div style={{ padding: "22px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "8px"
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.68)",
                      fontSize: "13px",
                      lineHeight: "1.55",
                      margin: 0
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
