"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface ReviewItem {
  id: string;
  name: string;
  time: string;
  rating: number;
  text: string;
  location: string;
}

const ALL_REVIEWS: ReviewItem[] = [
  {
    id: "1",
    name: "Akash Dwivedi",
    time: "3 months ago",
    rating: 5,
    location: "Meerpur, Lakhimpur Kheri",
    text: "The hospital environment is very clean, organized, and well managed. The staff is polite, cooperative, and supportive throughout our stay. Doctors listen to patients very patiently and provide proper guidance and treatment with complete transparency. Special thanks to Dr. Apoorva and the whole nursing faculty for their heartfelt attention."
  },
  {
    id: "2",
    name: "Armaan computers and Insurance",
    time: "4 months ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "The staff is always attentive, caring, and ready to assist round the clock. The doctors are highly knowledgeable and compassionate. All facilities are modern, hygienic, and well-maintained, and doctors and ward coordinators interact with immense politeness."
  },
  {
    id: "3",
    name: "VINAY KUMAR",
    time: "5 months ago",
    rating: 5,
    location: "Kheri District",
    text: "Best Hospital in our area. Nice staff, prompt reception, clean admission rooms, and the doctor is very friendly and polite. Felt completely secure and well-treated from arrival to discharge."
  },
  {
    id: "4",
    name: "Mohit Verma",
    time: "5 months ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Best facility ever experienced in Lakhimpur Kheri. The entire hospital premise is neat and clean, medical hygiene is maintained everywhere, and the doctor's humble and simple behavior made us feel completely reassured."
  },
  {
    id: "5",
    name: "Kushagra Jaiswal",
    time: "a year ago",
    rating: 5,
    location: "Meerpur",
    text: "The staff is always attentive and caring at every hour. The doctors are knowledgeable, patient-centric, and compassionate. The inpatient facilities, triage ward, and emergency units are clean and modern."
  },
  {
    id: "6",
    name: "Vineet Kumar Pandey",
    time: "4 months ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Very good hospital with high standards of clinical care. All staff members are polite, medicine availability is prompt, and doctors explain every diagnosis thoroughly."
  },
  {
    id: "7",
    name: "Ragini Shukla",
    time: "a year ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Hospital facility is very good and well equipped. All doctors and nursing sisters behave with utmost kindness and care. Highly recommended for family healthcare."
  },
  {
    id: "8",
    name: "TAUFEEQ ALI",
    time: "a year ago",
    rating: 5,
    location: "Local Guide",
    text: "Very clean and properly sanitised hospital. Fast patient admissions, round-the-clock doctor availability, and proper hygiene maintained in all wards and corridors."
  },
  {
    id: "9",
    name: "HariPrasad Verma",
    time: "a year ago",
    rating: 5,
    location: "Meerpur, Lakhimpur Kheri",
    text: "Doctor behavior is very good, clinical treatment is accurate, and hospital management is caring, polite, and cooperative with patient families."
  },
  {
    id: "10",
    name: "Dr. Raviraj Singh Bisht",
    time: "a year ago",
    rating: 5,
    location: "Medical Professional",
    text: "Supportive staff and good clinical experience. Great infrastructure, modern operation theatres, and dedicated intensive care equipment."
  },
  {
    id: "11",
    name: "Brijendra Verma",
    time: "4 months ago",
    rating: 5,
    location: "Local Guide",
    text: "Availability of specialist doctors and nursing services is very dependable. Clean premise, transparent communication, and quick attention in emergencies."
  },
  {
    id: "12",
    name: "Ateek Shaikh",
    time: "a year ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Hospital facility is excellent. Doctors listened carefully to our medical history and the recovery response was very fast and smooth."
  },
  {
    id: "13",
    name: "Mr. Ayush Tiwari",
    time: "5 months ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Remarkable experience with the OPD doctor consultations. The administrative team and reception were very helpful and prompt with appointments."
  },
  {
    id: "14",
    name: "Lalit Singh",
    time: "10 months ago",
    rating: 5,
    location: "Meerpur",
    text: "Great hospital in Meerpur. Dedicated doctors who prioritize patient recovery and welfare with compassionate nursing support."
  },
  {
    id: "15",
    name: "Abhinav Patel (Abhii)",
    time: "4 months ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Hospitality is very good, the staff is very sweet and helpful, and doctor behavior is exceptionally gentle and caring throughout the treatment."
  },
  {
    id: "16",
    name: "Atharv Verma",
    time: "a year ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Very nice healthcare setup with polite nursing staff, modern diagnostics, prompt medicine dispensary, and spotless patient rooms."
  },
  {
    id: "17",
    name: "Pooja Verma",
    time: "a year ago",
    rating: 5,
    location: "Kheri District",
    text: "Great experience during delivery and postnatal care. The doctors made us feel safe, comfortable, and well looked after at every single step."
  },
  {
    id: "18",
    name: "Vibha Verma",
    time: "a year ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Good facilities and clean wards. Doctors and nurses are very attentive, polite, and ensure patients receive timely medications without delay."
  },
  {
    id: "19",
    name: "Rupali Maurya",
    time: "a year ago",
    rating: 5,
    location: "Lakhimpur Kheri",
    text: "Good facility, prompt doctor availability, cooperative nursing sisters, and clean atmosphere that aids quick healing and recovery."
  },
  {
    id: "20",
    name: "Satendra Kumar",
    time: "a year ago",
    rating: 5,
    location: "Meerpur",
    text: "Good facility and treatment is very dependable. Clean OPD consultation cabins, reasonable charges, and genuinely caring healthcare professionals."
  }
];

export default function FathimaTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ALL_REVIEWS.length);
      setAnimating(false);
    }, 200);
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + ALL_REVIEWS.length) % ALL_REVIEWS.length);
      setAnimating(false);
    }, 200);
  };

  const current = ALL_REVIEWS[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="pt-100 pb-100 section-testimonials" 
      style={{ padding: "90px 0", backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <div 
          className="row-flex" 
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}
        >
          {/* Left Column: Heading and Sliding Testimonial Box */}
          <div className="smd60 pr-50" style={{ flex: "0 0 58%", paddingRight: "40px", boxSizing: "border-box" }}>
            <div className="row">
              <span className="subtitle" style={{ color: "#7c3aed" }}>Patient testimonials</span>
              <h2 className="heading" style={{ color: "#240b3b" }}>
                What our patients <br /> have to say.
              </h2>
            </div>

            <div className="row pt-50" style={{ marginTop: "30px" }}>
              {/* Sliding Testimonial Box exactly matching the reference card design */}
              <div className="testimonial-box">
                <div 
                  style={{
                    backgroundColor: "#faf7fe",
                    borderRadius: "20px",
                    border: "none",
                    boxShadow: "0 10px 35px rgba(36, 11, 59, 0.04)",
                    padding: "44px 44px 36px 44px",
                    position: "relative",
                    minHeight: "220px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "28px",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                    opacity: animating ? 0.3 : 1,
                    transform: animating ? "translateX(8px)" : "translateX(0)"
                  }}
                >
                  {/* Left Column: Bold Purple Solid Quotation Marks */}
                  <div style={{ flexShrink: 0, paddingTop: "2px" }}>
                    <svg 
                      width="42" 
                      height="38" 
                      viewBox="0 0 24 24" 
                      fill="#7c3aed" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.324 1.433-4.524 3.737-4.524 5.378 0 .543.143.992.428 1.348.647-.48 1.442-.767 2.308-.767 2.016 0 3.651 1.635 3.651 3.651 0 2.016-1.635 3.651-3.651 3.651-1.393 0-2.613-.787-3.238-1.944L4.583 17.321zm10.584 0c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.324 1.433-4.524 3.737-4.524 5.378 0 .543.143.992.428 1.348.647-.48 1.442-.767 2.308-.767 2.016 0 3.651 1.635 3.651 3.651 0 2.016-1.635 3.651-3.651 3.651-1.393 0-2.613-.787-3.238-1.944l-.314-.199z"/>
                    </svg>
                  </div>

                  {/* Right Content: Quote Paragraph, Thin Divider Line, and Name + Location */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <p 
                      style={{ 
                        fontSize: "15px", 
                        lineHeight: "1.7", 
                        color: "#334155", 
                        fontStyle: "normal",
                        margin: 0,
                        fontWeight: 500
                      }}
                    >
                      {current.text}
                    </p>

                    {/* Thin Separator Line */}
                    <div 
                      style={{ 
                        marginTop: "24px", 
                        paddingTop: "16px", 
                        borderTop: "1px solid #ede9fe",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px"
                      }}
                    >
                      <span 
                        style={{ 
                          fontSize: "16px", 
                          fontWeight: 800, 
                          color: "#240b3b",
                          fontFamily: "var(--heading-font), sans-serif"
                        }}
                      >
                        {current.name}
                      </span>

                      <p style={{ margin: "2px 0 0", fontSize: "13px", color: "#64748b", fontWeight: 600 }}>
                        {current.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exact Scroll Graphics: Purple Rounded Pills & Dots (Replacing arrows & counters) */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "24px" }}>
                {ALL_REVIEWS.map((_, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setAnimating(true);
                        setTimeout(() => {
                          setCurrentIndex(idx);
                          setAnimating(false);
                        }, 200);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        width: isActive ? "26px" : "10px",
                        height: "10px",
                        borderRadius: "5px",
                        backgroundColor: isActive ? "#7c3aed" : "#cbd5e1",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        padding: 0
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Amar Ujala Best of My City Award Felicitation */}
          <div 
            className="smd40" 
            style={{ 
              flex: "0 0 40%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              marginTop: "20px"
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 22px 50px rgba(36, 11, 59, 0.22)",
                border: "2px solid rgba(124, 58, 237, 0.22)",
                backgroundColor: "#240b3b"
              }}
            >
              <img
                src="/maya-award-felicitation.jpg"
                alt="Dr. Brijendra Verma receiving Amar Ujala Best of My City Felicitation from Hon. Deputy CM Uttar Pradesh"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "460px",
                  objectFit: "cover",
                  display: "block"
                }}
              />
              {/* Prestigious Recognition Pill Overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(to top, rgba(23, 5, 38, 0.95) 0%, rgba(23, 5, 38, 0.8) 65%, transparent 100%)",
                  padding: "24px 18px 14px 18px",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(124, 58, 237, 0.55)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#f59e0b"
                  }}
                >
                  <i className="fa-solid fa-trophy" style={{ fontSize: "16px" }}></i>
                </div>
                <div>
                  <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.2px" }}>
                    Amar Ujala &ldquo;Best of My City&rdquo; Award
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.75)" }}>
                    Felicitation by Hon. Deputy CM, Uttar Pradesh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
