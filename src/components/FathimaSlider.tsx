"use client";

import React, { useState, useEffect } from "react";

interface SliderProps {
  onOpenAppointmentModal: () => void;
}

const SLIDES = [
  {
    bgImage: "/Maya Hospital Reception Lobby.png",
    title: "Centre of Excellence",
    bigText: "Maya Multispeciality Hospital",
    desc: "State-of-the-art healthcare facility with modern operation theatres, 24x7 emergency trauma care, and dedicated specialist doctors in Meerpur, Lakhimpur Kheri.",
    bullets: ["24x7 Emergency & Critical Care", "Best Surgeons • Best Experience", "Modular Theatres & In-House Pharmacy"]
  },
  {
    bgImage: "https://www.fathimahospital.com/wp-content/uploads/2024/12/gaynacology-banner.jpg",
    title: "Women's Health & Maternity",
    bigText: "Gynaecology & Obstetrics",
    desc: "Comprehensive maternity, painless normal delivery, Level-2 NICU, and advanced laparoscopic surgery in Meerpur.",
    bullets: ["24x7 Emergency Labour Room", "High-Risk Pregnancy Care", "Modular Operation Theatres"]
  },
  {
    bgImage: "https://www.fathimahospital.com/wp-content/uploads/2025/01/orthopedics-banner-1.jpg",
    title: "Orthopedic & Trauma Care",
    bigText: "Joint Replacement Surgery",
    desc: "Computerized total knee & hip replacement, accidental trauma resuscitation, fracture care, and arthroscopy.",
    bullets: ["Total Knee & Hip Replacement", "24x7 Road Accident Trauma", "Spine & Arthroscopic Surgery"]
  },
  {
    bgImage: "https://www.fathimahospital.com/wp-content/uploads/2025/01/general-medicine-banner.jpg",
    title: "Specialist Diagnostics",
    bigText: "General Medicine & ICU",
    desc: "Round-the-clock intensive care, digital X-Ray, 2D Echo, pathology lab, and comprehensive diabetes care.",
    bullets: ["Critical Care & 24x7 ICU", "Digital X-Ray & Ultrasound", "Fully Automated Pathology Lab"]
  }
];

export default function FathimaSlider({ onOpenAppointmentModal }: SliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[activeSlide];

  return (
    <div className="slider-wrap" style={{ margin: 0, padding: 0, width: "100%", overflow: "hidden" }}>
      <div id="transition-timer-carousel" className="carousel slide" style={{ margin: 0, padding: 0 }}>
        {/* Indicators */}
        <ol className="carousel-indicators" style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          zIndex: 10
        }}>
          {SLIDES.map((_, idx) => (
            <li
              key={idx}
              onClick={() => setActiveSlide(idx)}
              style={{
                width: idx === activeSlide ? "32px" : "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor: idx === activeSlide ? "var(--secondary-color)" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            />
          ))}
        </ol>

        {/* Carousel Inner Slide */}
        <div className="carousel-inner" style={{ position: "relative", width: "100%", height: "100%" }}>
          <div
            className="bgslide"
            style={{
              backgroundImage: `url('${slide.bgImage}')`,
              transition: "background-image 0.8s ease-in-out"
            }}
          >
            <div className="carousel-caption">
              <div className="container">
                <div className="caption-wrap">
                  <div className="caption-right">
                    <h2 className="fadeInLeft animated animset" style={{ color: "var(--secondary-color)", fontSize: "28px", textTransform: "uppercase", letterSpacing: "1px" }}>
                      {slide.title}
                    </h2>
                    <h2 className="bigtext fadeInLeft animated animset">
                      {slide.bigText}
                    </h2>
                    <p className="fadeInLeft animated animset2">
                      {slide.desc}
                    </p>
                    <ul className="checklist uppercase fadeInLeft animated animset2" style={{ padding: 0, margin: "0 0 25px 0", listStyle: "none" }}>
                      {slide.bullets.map((b, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
                          <i className="fa-solid fa-circle-check" style={{ color: "var(--secondary-color)", fontSize: "18px" }}></i>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                      <button
                        onClick={onOpenAppointmentModal}
                        className="btn-style"
                        style={{
                          border: "none",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          backgroundColor: "var(--secondary-color)",
                          color: "#1c140d"
                        }}
                      >
                        <span>Book Appointment</span>
                      </button>

                      <a
                        href="tel:+919839752108"
                        className="btn-style btn-style2"
                        style={{
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          backgroundColor: "#ffffff",
                          color: "var(--primary-color)"
                        }}
                      >
                        <i className="fa-solid fa-phone" style={{ color: "#d97706" }}></i>
                        <span>Emergency: 9839752108</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Controls */}
        <button
          onClick={() => setActiveSlide((activeSlide - 1 + SLIDES.length) % SLIDES.length)}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px"
          }}
          aria-label="Previous Slide"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={() => setActiveSlide((activeSlide + 1) % SLIDES.length)}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px"
          }}
          aria-label="Next Slide"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
