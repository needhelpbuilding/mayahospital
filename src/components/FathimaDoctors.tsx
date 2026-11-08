"use client";

import React, { useState } from "react";

interface DoctorsProps {
  onOpenAppointmentModal: (docName?: string) => void;
}

// 16 Doctors & Clinical Specialists spanning Maya Hospital's departments
// PLACEHOLDER ROSTER: names and stock photos are illustrative only. Replace with Maya Hospital's real
// doctors, qualifications and photos (stored locally in /public) before going live.
const DOCTOR_LIST = [
  {
    name: "Dr. Maya Verma",
    degrees: "MBBS, MS (Obs & Gynae), FMAS",
    speciality: "Obstetrics & Gynaecology",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. R. K. Sharma",
    degrees: "MD, DM (Cardio), FACC",
    speciality: "Cardiology & Critical Care",
    image: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. S. K. Singh",
    degrees: "MBBS, MS Ortho, FIJR",
    speciality: "Orthopaedics & Joint Surgery",
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Alok Srivastava",
    degrees: "MBBS, MD (Paediatrics)",
    speciality: "Paediatrics & Neonatology",
    image: "https://images.unsplash.com/photo-1612276529731-4b21494e6d71?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. A. P. Mishra",
    degrees: "MBBS, MS (General Surgery), FIAGES",
    speciality: "Laparoscopic & General Surgery",
    image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Shalini Gupta",
    degrees: "MBBS, MD (General Medicine)",
    speciality: "General Medicine & Diabetology",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Ritu Awasthi",
    degrees: "MBBS, MS (ENT), DNB",
    speciality: "ENT, Head & Neck Surgery",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Deepak Bajpai",
    degrees: "MS, MCh (Uro)",
    speciality: "Urology & Andrology",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Priya Pandey",
    degrees: "MBBS, DMRD (Radiology)",
    speciality: "Radiology & Ultrasonography",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Arvind Kashyap",
    degrees: "MBBS, MD (Anaesthesiology)",
    speciality: "Critical Care & ICU",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Neha Saxena",
    degrees: "MBBS, DCH, DNB",
    speciality: "Neonatal Intensive Care (NICU)",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Manoj Tripathi",
    degrees: "BPT, MPT (Neuro-Ortho)",
    speciality: "Physiotherapy & Rehabilitation",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Vikram Sethi",
    degrees: "MBBS, MS (Ophthalmology)",
    speciality: "Ophthalmology & Eye Surgery",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Sunita Agarwal",
    degrees: "MD (Pathology), DCP",
    speciality: "Clinical Pathology & Hematology",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Rajeshwar Dayal",
    degrees: "MBBS, DNB (Respiratory Med)",
    speciality: "Pulmonology & Chest Medicine",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dr. Ananya Sen",
    degrees: "MBBS, MD (Dermatology)",
    speciality: "Dermatology & Skin Care",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=600"
  }
];

// Aesthetic lighter-shade filler hexagon component to fill empty spaces around doctors
const FillerHexagon: React.FC<{
  icon?: string;
  label?: string;
  extraClass?: string;
  onClick?: () => void;
}> = ({ icon = "fa-heart-pulse", label = "Maya Healthcare", extraClass = "", onClick }) => {
  return (
    <div
      className={`hex-card hex-filler-card ${extraClass}`}
      onClick={onClick}
      onKeyDown={(e) => activateOnKey(e, onClick)}
      role="button"
      tabIndex={0}
      aria-label={`${label} – book an appointment`}
      title={label}
    >
      <div className="hex-content hex-filler-content">
        <div className="hex-filler-inner">
          <i className={`fa-solid ${icon} hex-filler-icon`} aria-hidden="true"></i>
          <span className="hex-filler-label">{label}</span>
        </div>
      </div>
    </div>
  );
};

// Keyboard support for hexagon "buttons" (Enter / Space)
function activateOnKey(e: React.KeyboardEvent, action?: () => void) {
  if (!action) return;
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    action();
  }
}

type DoctorItem = (typeof DOCTOR_LIST)[number];

// Single doctor hexagon: photo by default, white credentials panel on hover / focus / tap
const DoctorHex: React.FC<{
  doc: DoctorItem;
  offset: string;
  isActive: boolean;
  onActivate: (name: string) => void;
  onBook: (name: string) => void;
}> = ({ doc, offset, isActive, onActivate, onBook }) => (
  <div
    className={`hex-card ${isActive ? "is-active-mobile" : ""}`}
    style={{ transform: `translateY(${offset})` }}
    onClick={() => onActivate(doc.name)}
    onKeyDown={(e) => activateOnKey(e, () => onBook(doc.name))}
    role="button"
    tabIndex={0}
    aria-label={`${doc.name}, ${doc.speciality}, ${doc.degrees}. Book an appointment`}
  >
    <div className="hex-content">
      {/* Default State: Doctor Image against solid theme-consistent purple */}
      <div className="hex-image-holder">
        <img src={doc.image} alt="" className="hex-img" loading="lazy" />
      </div>

      {/* Hover / Focus State: pure WHITE panel with centered Name, Education & Speciality */}
      <div className="hex-hover-panel" aria-hidden="true">
        <div className="hex-text-inner">
          <h4 className="hex-doc-name">{doc.name}</h4>
          <p className="hex-doc-edu">{doc.degrees}</p>
          <p className="hex-doc-spec">{doc.speciality}</p>
          <span className="hex-book-badge">Book Appointment</span>
        </div>
      </div>
    </div>
  </div>
);

export default function FathimaDoctors({ onOpenAppointmentModal }: DoctorsProps) {
  // Mobile active doctor card state (for tap-to-inspect credentials)
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  // 16 Doctors arranged in 3 organic honeycomb rows with subtle natural disorder
  // Row 1: 5 Doctors (framed with lighter shade hexagons on left and right)
  // Row 2: 6 Doctors (offset to interlock, framed with lighter shade hexagons)
  // Row 3: 5 Doctors (framed with lighter shade hexagons on left and right)
  const row1 = DOCTOR_LIST.slice(0, 5);
  const row2 = DOCTOR_LIST.slice(5, 11);
  const row3 = DOCTOR_LIST.slice(11, 16);

  // Subtle organic disorder offsets (slight vertical shifts for natural honeycomb texture)
  const subtleDisorderOffsets = ["0px", "6px", "-4px", "8px", "-2px", "5px"];

  const handleCardClick = (docName: string) => {
    // If mobile card is already active, open appointment modal; otherwise activate it
    if (activeMobileCard === docName) {
      onOpenAppointmentModal(docName);
    } else {
      setActiveMobileCard(docName);
    }
  };

  return (
    <section
      id="doctors"
      style={{
        paddingTop: "90px",
        paddingBottom: "110px",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
        width: "100%"
      }}
    >
      <div style={{ width: "100%", maxWidth: "1800px", margin: "0 auto", padding: "0 16px", boxSizing: "border-box" }}>
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <span className="subtitle">MEET OUR TEAM</span>
          <h2 className="heading" style={{ marginBottom: "15px" }}>
            Our Dedicated Doctors
          </h2>
          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "15px",
              color: "#6b5e7a",
              lineHeight: "24px"
            }}
          >
            Hover, tap or tab to any specialist to view their clinical expertise, qualifications, and consultation scope.
          </p>

          {/* Mobile swipe hint visible only on touch/mobile */}
          <div className="mobile-swipe-hint">
            <i className="fa-solid fa-arrows-left-right" style={{ marginRight: "6px" }}></i>
            Swipe horizontally to explore all 16 specialists
          </div>
        </div>

        {/* Honeycomb Interlocking Canvas across full page width */}
        <div className="honeycomb-scroll-wrapper">
          <div className="honeycomb-container">
            {/* =============================================================
                Row 1: Flanked by lighter shade hexagons on left and right
                ============================================================= */}
            <div className="honeycomb-row">
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-hospital"
                label="Maya Hospital"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Left Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-notes-medical"
                label="Clinical Care"
                onClick={() => onOpenAppointmentModal()}
              />

              {row1.map((doc, idx) => (
                <DoctorHex
                  key={doc.name}
                  doc={doc}
                  offset={subtleDisorderOffsets[idx % subtleDisorderOffsets.length]}
                  isActive={activeMobileCard === doc.name}
                  onActivate={handleCardClick}
                  onBook={onOpenAppointmentModal}
                />
              ))}

              {/* Right Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-stethoscope"
                label="Expert Doctors"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-heart-pulse"
                label="24x7 Emergency"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
            </div>

            {/* =============================================================
                Row 2: 6 Hexagons (Staggered to interlock naturally)
                Flanked by lighter shade hexagons on both ends
                ============================================================= */}
            <div className="honeycomb-row offset-row">
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-shield-halved"
                label="Quality Care"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Left Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-user-doctor"
                label="Specialist OPD"
                onClick={() => onOpenAppointmentModal()}
              />

              {row2.map((doc, idx) => (
                <DoctorHex
                  key={doc.name}
                  doc={doc}
                  offset={subtleDisorderOffsets[(idx + 2) % subtleDisorderOffsets.length]}
                  isActive={activeMobileCard === doc.name}
                  onActivate={handleCardClick}
                  onBook={onOpenAppointmentModal}
                />
              ))}

              {/* Right Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-syringe"
                label="Safe Surgery"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-bed-pulse"
                label="Modern ICU"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
            </div>

            {/* =============================================================
                Row 3: Flanked by lighter shade hexagons on left and right
                ============================================================= */}
            <div className="honeycomb-row">
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-mortar-pestle"
                label="24x7 Pharmacy"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Left Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-truck-medical"
                label="Ambulance Care"
                onClick={() => onOpenAppointmentModal()}
              />

              {row3.map((doc, idx) => (
                <DoctorHex
                  key={doc.name}
                  doc={doc}
                  offset={subtleDisorderOffsets[(idx + 4) % subtleDisorderOffsets.length]}
                  isActive={activeMobileCard === doc.name}
                  onActivate={handleCardClick}
                  onBook={onOpenAppointmentModal}
                />
              ))}

              {/* Right Filler Hexagon (Lighter Shade) */}
              <FillerHexagon
                icon="fa-award"
                label="NABH Standards"
                onClick={() => onOpenAppointmentModal()}
              />
              {/* Extra filler on wide screens */}
              <FillerHexagon
                icon="fa-hand-holding-medical"
                label="Compassionate"
                extraClass="hex-filler-ultrawide"
                onClick={() => onOpenAppointmentModal()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
