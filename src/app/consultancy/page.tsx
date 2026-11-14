"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Heart, 
  Stethoscope, 
  FileText, 
  CheckCircle2, 
  ArrowLeft,
  ShieldCheck,
  Building2,
  AlertCircle,
  Activity,
  Award
} from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS, DOCTORS } from "@/data/hospitalData";
import FathimaFooter from "@/components/FathimaFooter";

export default function ConsultancyPage() {
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Prefer not to say");
  const [department, setDepartment] = useState(DEPARTMENTS[0].name);
  const [doctor, setDoctor] = useState("");
  const [consultType, setConsultType] = useState<"opd" | "second-opinion" | "surgical" | "maternity">("opd");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Morning (10:00 AM - 01:00 PM)");
  const [symptoms, setSymptoms] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 700);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#faf8fc", display: "flex", flexDirection: "column" }}>
      {/* Header Bar */}
      <header
        style={{
          backgroundColor: "#160526",
          backgroundImage: "linear-gradient(135deg, #1b072c 0%, #0d0216 100%)",
          color: "#ffffff",
          padding: "16px 0",
          borderBottom: "1px solid rgba(124, 58, 237, 0.25)",
          position: "sticky",
          top: 0,
          zIndex: 100
        }}
      >
        <div 
          style={{ 
            maxWidth: "1400px", 
            margin: "0 auto", 
            padding: "0 24px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between" 
          }}
        >
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
              style={{ width: "42px", height: "42px", objectFit: "contain" }} 
            />
            <div>
              <span 
                style={{ 
                  color: "#ffffff", 
                  fontFamily: "var(--heading-font), sans-serif", 
                  fontSize: "19px", 
                  fontWeight: 700, 
                  letterSpacing: "-0.01em",
                  display: "block",
                  lineHeight: 1.1
                }}
              >
                MAYA HOSPITAL
              </span>
              <span style={{ color: "#c084fc", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600 }}>
                Specialist Consultancy Desk
              </span>
            </div>
          </Link>

          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255, 255, 255, 0.85)",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 600,
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              transition: "all 0.2s ease"
            }}
          >
            <ArrowLeft size={15} />
            <span>Back to Hospital Website</span>
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <main style={{ flex: 1, padding: "50px 20px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          
          {submitted ? (
            /* Confirmation Success State */
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "28px",
                padding: "50px 36px",
                border: "1px solid #ede9fe",
                boxShadow: "0 20px 50px rgba(36, 11, 59, 0.08)",
                textAlign: "center"
              }}
            >
              <div 
                style={{ 
                  width: "72px", 
                  height: "72px", 
                  borderRadius: "50%", 
                  backgroundColor: "#f3e8ff", 
                  color: "#7c3aed",
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  margin: "0 auto 20px" 
                }}
              >
                <CheckCircle2 size={42} />
              </div>

              <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#240b3b", marginBottom: "12px" }}>
                Consultation Request Registered!
              </h2>

              <p style={{ color: "#64748b", fontSize: "15px", maxWidth: "560px", margin: "0 auto 28px", lineHeight: "1.6" }}>
                Thank you <strong style={{ color: "#240b3b" }}>{patientName}</strong>. Your medical consultation request has been routed directly to our chief medical coordinator. We will call you at <strong style={{ color: "#240b3b" }}>{phoneNumber}</strong> within 15 minutes to confirm your consultant doctor and appointment slot.
              </p>

              {/* Summary Card */}
              <div 
                style={{ 
                  backgroundColor: "#faf5ff", 
                  border: "1.5px solid #ede9fe", 
                  borderRadius: "20px", 
                  padding: "24px 28px", 
                  textAlign: "left", 
                  maxWidth: "520px", 
                  margin: "0 auto 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px" }}>
                  <span style={{ color: "#64748b" }}>Consultation Type:</span>
                  <strong style={{ color: "#240b3b", textTransform: "capitalize" }}>{consultType.replace("-", " ")}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px" }}>
                  <span style={{ color: "#64748b" }}>Selected Speciality:</span>
                  <strong style={{ color: "#240b3b" }}>{department}</strong>
                </div>
                {doctor && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px" }}>
                    <span style={{ color: "#64748b" }}>Preferred Doctor:</span>
                    <strong style={{ color: "#240b3b" }}>{doctor}</strong>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px" }}>
                  <span style={{ color: "#64748b" }}>Scheduled Date & Slot:</span>
                  <strong style={{ color: "#240b3b" }}>{date || "Earliest Available"} • {timeSlot}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px" }}>
                  <span style={{ color: "#64748b" }}>Facility Location:</span>
                  <strong style={{ color: "#240b3b" }}>Aira Road, Meerpur</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13.5px", borderTop: "1px solid #ede9fe", paddingTop: "10px" }}>
                  <span style={{ color: "#64748b" }}>OPD Direct Helpline:</span>
                  <strong style={{ color: "#7c3aed" }}>{HOSPITAL_INFO.bookingPhone}</strong>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/"
                  className="maya-dialog-submit-btn"
                  style={{ textDecoration: "none", width: "auto", padding: "14px 34px" }}
                >
                  Return to Homepage
                </Link>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setPatientName("");
                    setPhoneNumber("");
                    setSymptoms("");
                  }}
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#240b3b",
                    border: "1.5px solid #ede9fe",
                    borderRadius: "9999px",
                    padding: "14px 30px",
                    fontWeight: 700,
                    fontSize: "13px",
                    cursor: "pointer"
                  }}
                >
                  Book Another Patient
                </button>
              </div>
            </div>
          ) : (
            /* Consultation Form */
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "32px",
                border: "1px solid #ede9fe",
                boxShadow: "0 25px 60px rgba(36, 11, 59, 0.06)",
                overflow: "hidden"
              }}
            >
              {/* Form Hero Header Banner */}
              <div
                style={{
                  backgroundColor: "#240b3b",
                  backgroundImage: "linear-gradient(135deg, #240b3b 0%, #4a1575 100%)",
                  color: "#ffffff",
                  padding: "40px 36px 36px"
                }}
              >
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(255, 255, 255, 0.12)", padding: "5px 14px", borderRadius: "9999px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px", color: "#e9d5ff" }}>
                  <Activity size={13} style={{ color: "#c084fc" }} />
                  <span>Maya Hospital Patient OPD Desk</span>
                </div>

                <h1 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 800, margin: "0 0 10px", lineHeight: 1.2 }}>
                  Book a Doctor Consultation
                </h1>
                <p style={{ color: "rgba(237, 233, 254, 0.85)", fontSize: "14.5px", margin: 0, maxWidth: "600px", lineHeight: "1.5" }}>
                  Please fill in the patient details below. Our clinical front desk will prepare your electronic OPD token and coordinate your visit with the specialist.
                </p>
              </div>

              {/* Form Body */}
              <div style={{ padding: "36px clamp(20px, 4vw, 42px)" }}>
                <form onSubmit={handleSubmit} className="maya-dialog-form">
                  
                  {/* Consultation Mode Selection */}
                  <div className="form-section">
                    <div className="form-section-header">
                      <span className="form-section-badge">1</span>
                      <span className="form-section-title">Select Consultation Type</span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
                      {[
                        { id: "opd", label: "Specialist OPD Visit", icon: "fa-stethoscope", desc: "Routine checkup or symptoms" },
                        { id: "second-opinion", label: "Second Opinion", icon: "fa-clipboard-check", desc: "Report review by senior faculty" },
                        { id: "maternity", label: "Maternity / Prenatal", icon: "fa-baby", desc: "Mother care & pregnancy" },
                        { id: "surgical", label: "Surgical Consultation", icon: "fa-syringe", desc: "Pre-op & procedure advice" }
                      ].map((item) => {
                        const isSelected = consultType === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => setConsultType(item.id as any)}
                            style={{
                              padding: "14px 16px",
                              borderRadius: "14px",
                              border: isSelected ? "2px solid #7c3aed" : "1.5px solid #ede9fe",
                              backgroundColor: isSelected ? "#faf5ff" : "#ffffff",
                              cursor: "pointer",
                              transition: "all 0.2s ease"
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                              <i className={`fa-solid ${item.icon}`} style={{ color: isSelected ? "#7c3aed" : "#94a3b8", fontSize: "14px" }}></i>
                              <span style={{ fontSize: "13px", fontWeight: 700, color: isSelected ? "#240b3b" : "#334155" }}>
                                {item.label}
                              </span>
                            </div>
                            <span style={{ fontSize: "11px", color: "#64748b", display: "block" }}>
                              {item.desc}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Patient Personal Information */}
                  <div className="form-section">
                    <div className="form-section-header">
                      <span className="form-section-badge">2</span>
                      <span className="form-section-title">Patient Information</span>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">
                          <User size={14} className="form-label-icon" />
                          <span>Patient Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Chandra Verma"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          <Phone size={14} className="form-label-icon" />
                          <span>Phone / WhatsApp Number *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">
                          <Clock size={14} className="form-label-icon" />
                          <span>Patient Age & Gender</span>
                        </label>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                          <input
                            type="number"
                            placeholder="Age (Yrs)"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="form-input"
                          />
                          <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="form-select"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Prefer not to say">Select Gender</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          <Mail size={14} className="form-label-icon" />
                          <span>Email Address (Optional)</span>
                        </label>
                        <input
                          type="email"
                          placeholder="patient@example.com (for appointment copy)"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Speciality & Doctor Selection */}
                  <div className="form-section">
                    <div className="form-section-header">
                      <span className="form-section-badge">3</span>
                      <span className="form-section-title">Speciality & Doctor Selection</span>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">
                          <Heart size={14} className="form-label-icon" />
                          <span>Department / Speciality *</span>
                        </label>
                        <select
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="form-select"
                        >
                          {DEPARTMENTS.map((dept) => (
                            <option key={dept.id} value={dept.name}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          <Stethoscope size={14} className="form-label-icon" />
                          <span>Preferred Specialist (Optional)</span>
                        </label>
                        <select
                          value={doctor}
                          onChange={(e) => setDoctor(e.target.value)}
                          className="form-select"
                        >
                          <option value="">Any Available Specialist</option>
                          {DOCTORS.map((doc) => (
                            <option key={doc.id} value={doc.name}>
                              {doc.name} ({doc.department.split(" ")[0]})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Schedule & Slot */}
                  <div className="form-section">
                    <div className="form-section-header">
                      <span className="form-section-badge">4</span>
                      <span className="form-section-title">Preferred Date & Time Slot</span>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">
                          <Calendar size={14} className="form-label-icon" />
                          <span>Preferred Consultation Date</span>
                        </label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          <Clock size={14} className="form-label-icon" />
                          <span>Preferred OPD Slot</span>
                        </label>
                        <select
                          value={timeSlot}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          className="form-select"
                        >
                          <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                          <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                          <option value="Evening (05:00 PM - 08:30 PM)">Evening (05:00 PM - 08:30 PM)</option>
                          <option value="Emergency / Immediate Triage">Immediate / Emergency Triage</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Symptoms & Medical History */}
                  <div className="form-section">
                    <div className="form-section-header">
                      <span className="form-section-badge">5</span>
                      <span className="form-section-title">Symptoms & Reason for Consultation</span>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <FileText size={14} className="form-label-icon" />
                        <span>Brief Symptoms or Medical History</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Experiencing fever for 3 days, acute knee pain while walking, routine prenatal ultrasound follow-up, second opinion on gallbladder surgery..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        className="form-textarea"
                      />
                    </div>
                  </div>

                  {/* 24x7 Emergency Advisory */}
                  <div className="maya-dialog-emergency-notice">
                    <ShieldCheck size={20} style={{ color: "#7c3aed", flexShrink: 0 }} />
                    <span>
                      <strong>For immediate emergency care:</strong> Severe chest pain, head trauma, acute bleeding, or active labor should proceed directly to our Emergency Department on Aira Road Meerpur or call <strong>{HOSPITAL_INFO.emergencyPhone}</strong>.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div style={{ paddingTop: "8px" }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="maya-dialog-submit-btn"
                      style={{ padding: "16px 28px", fontSize: "14px" }}
                    >
                      <Calendar size={17} />
                      <span>{isSubmitting ? "Submitting Request..." : "Confirm & Book Doctor Consultation"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <FathimaFooter />
    </div>
  );
}
