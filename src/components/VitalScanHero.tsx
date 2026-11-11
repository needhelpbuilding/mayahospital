"use client";

import React from "react";
import Link from "next/link";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface VitalScanHeroProps {
  onOpenAppointmentModal: () => void;
}

export default function VitalScanHero({ onOpenAppointmentModal }: VitalScanHeroProps) {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "48px 0 0 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          boxSizing: "border-box"
        }}
      >
        {/* Main 2-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "48px",
            alignItems: "center"
          }}
        >
          {/* Left Text Column */}
          <div style={{ maxWidth: "560px" }}>
            <h1
              style={{
                fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(34px, 4.4vw, 54px)",
                fontWeight: 800,
                lineHeight: "1.15",
                color: "#0f172a",
                margin: "0 0 18px 0",
                letterSpacing: "-0.025em"
              }}
            >
              Book your own <br />
              <span style={{ color: "#245BFF" }}>private healthcare scan &amp; consultation</span>
            </h1>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "26px",
                color: "#475569",
                margin: "0 0 28px 0",
                fontFamily: "var(--body-font), Inter, sans-serif"
              }}
            >
              No referral needed. Consult our team of certified specialists and super-specialist surgeons who supervise your care from start to finish. Book online in minutes.
            </p>

            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", marginBottom: "32px" }}>
              <button
                onClick={onOpenAppointmentModal}
                style={{
                  backgroundColor: "#245BFF",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "14px 30px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 6px 20px rgba(36, 91, 255, 0.35)",
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
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px"
                  }}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                style={{
                  color: "#0f172a",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: "14px 22px",
                  borderRadius: "9999px",
                  border: "1.5px solid #e2e8f0",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#245BFF";
                  e.currentTarget.style.color = "#245BFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.color = "#0f172a";
                }}
              >
                <i className="fa-solid fa-phone" style={{ color: "#245BFF" }}></i>
                <span>24x7: {HOSPITAL_INFO.emergencyPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Circular MRI Frame Visual Column */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0"
            }}
          >
            {/* Outermost clean concentric ring representing the MRI Gantry */}
            <div
              style={{
                width: "min(460px, 90vw)",
                height: "min(460px, 90vw)",
                borderRadius: "50%",
                background: "radial-gradient(circle, #f8fafc 45%, #e2e8f0 70%, #cbd5e1 90%, #94a3b8 100%)",
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.15), inset 0 2px 8px rgba(255, 255, 255, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: "24px",
                boxSizing: "border-box"
              }}
            >
              {/* Inner ring */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "4px solid #ffffff",
                  boxShadow: "inset 0 4px 14px rgba(15, 23, 42, 0.15)",
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor with patient inside modern medical scanner room"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 30%"
                  }}
                />
                {/* Subtle soft gradient reflection overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at 75% 25%, rgba(255,255,255,0.25) 0%, transparent 60%)",
                    pointerEvents: "none"
                  }}
                />
              </div>

              {/* Status Floating Pill */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  backgroundColor: "#ffffff",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0f172a",
                  border: "1px solid #f1f5f9"
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    display: "inline-block"
                  }}
                />
                <span>Walk-in Diagnostics &amp; Emergency Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Badges Strip (Cyan/Teal -> Flat Blue) */}
        <div
          style={{
            marginTop: "56px",
            backgroundColor: "#245BFF",
            borderRadius: "16px",
            padding: "18px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            color: "#ffffff"
          }}
        >
          {[
            { text: "Average turnaround under 2 hours" },
            { text: "Easy online & telephone booking" },
            { text: "Over 6 Specialised Departments" },
            { text: "Receive your reports directly via WhatsApp" }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "-0.01em"
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  flexShrink: 0
                }}
              >
                <i className="fa-solid fa-check"></i>
              </div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* 4 Value Proposition Cards Row matching screenshot */}
        <div
          style={{
            marginTop: "48px",
            marginBottom: "56px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "28px"
          }}
        >
          {[
            {
              icon: "fa-solid fa-user-doctor",
              title: "No Doctor Referral Required",
              desc: "Our group of verified clinical experts manage your treatment, emergency stabilisation and surgery from start to finish."
            },
            {
              icon: "fa-solid fa-heart-pulse",
              title: "Peace of Mind & Accurate Diagnosis",
              desc: "Avoid the anxiety of diagnostic delays. Transparent reporting, modern diagnostics, and experienced senior consultants."
            },
            {
              icon: "fa-solid fa-calendar-check",
              title: "Seamless Follow-up Consultations",
              desc: "Get digital copies of all your investigations and a comprehensive subsequent review meeting with your specialist surgeon."
            },
            {
              icon: "fa-solid fa-hospital-user",
              title: "Zero Waiting Times",
              desc: "Avoid endless waiting queues. An early and accurate diagnosis ensures timely surgery, optimal recovery, and lower healthcare costs."
            }
          ].map((card, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "8px 4px"
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(36, 91, 255, 0.08)",
                  color: "#245BFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px"
                }}
              >
                <i className={card.icon}></i>
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0f172a",
                  margin: 0,
                  lineHeight: "1.3"
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: "22px",
                  color: "#475569",
                  margin: 0
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
