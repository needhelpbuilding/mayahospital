"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  Phone, 
  User, 
  Mail, 
  Building2, 
  MessageSquare,
  Clock,
  Sparkles,
  ShieldCheck,
  Stethoscope
} from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS } from "@/data/hospitalData";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ENQUIRY_TOPICS = [
  { id: "opd", label: "Doctor OPD Consultation", icon: "fa-user-doctor" },
  { id: "surgery", label: "Surgery / Laparoscopy Cost", icon: "fa-syringe" },
  { id: "maternity", label: "Delivery & Maternity Care", icon: "fa-person-breastfeeding" },
  { id: "icu", label: "24x7 Emergency / ICU Beds", icon: "fa-bed-pulse" },
  { id: "insurance", label: "Cashless Mediclaim & Ayushman", icon: "fa-file-shield" },
  { id: "lab", label: "Pathology & Health Packages", icon: "fa-flask-vial" }
];

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Doctor OPD Consultation");
  const [department, setDepartment] = useState("General Medicine & Diabetology");
  const [preferredTime, setPreferredTime] = useState("Immediate / As soon as possible");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on ESC key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div 
      className="maya-dialog-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-dialog-title"
    >
      <div 
        className="maya-dialog-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header: Theme-Consistent Imperial Royal Velvet Plum */}
        <div className="maya-dialog-header">
          <button
            onClick={onClose}
            className="maya-dialog-close-btn"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
          
          <div className="maya-dialog-header-inner">
            <img
              src="/White Caduceus Laurel Monogram.png"
              alt="Maya Hospital Crest"
              className="maya-dialog-logo"
            />
            <div>
              <div className="maya-dialog-badge">
                <Sparkles size={12} style={{ color: "#c084fc" }} />
                <span>Patient Helpdesk & Medical Enquiries</span>
              </div>
              <h3 
                id="enquiry-dialog-title"
                className="maya-dialog-title"
              >
                Hospital Enquiry & Consultation
              </h3>
              <p className="maya-dialog-subtitle">
                Maya Hospital & Multi-speciality Centre • Meerpur, Lakhimpur Kheri
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="maya-dialog-body">
          {submitted ? (
            <div className="maya-dialog-success">
              <div className="maya-dialog-success-icon-wrap">
                <CheckCircle2 size={44} className="maya-success-checkmark" />
              </div>
              <h4 className="maya-dialog-success-title">
                Enquiry Successfully Registered!
              </h4>
              <p className="maya-dialog-success-desc">
                Thank you, <strong style={{ color: "#240b3b" }}>{fullName}</strong>. Your enquiry regarding <strong style={{ color: "#7c3aed" }}>{selectedTopic}</strong> has been assigned to our front desk team. We will call you at <strong style={{ color: "#240b3b" }}>{phone}</strong> promptly.
              </p>

              <div className="maya-dialog-summary-card">
                <div className="summary-row">
                  <span className="summary-label">Topic:</span>
                  <span className="summary-val">{selectedTopic}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Department:</span>
                  <span className="summary-val">{department}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Preferred Time:</span>
                  <span className="summary-val">{preferredTime}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">24x7 Helpline:</span>
                  <span className="summary-val" style={{ color: "#7c3aed", fontWeight: 700 }}>
                    {HOSPITAL_INFO.bookingPhone}
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: "10px" }}>
                <button
                  onClick={handleReset}
                  className="maya-dialog-submit-btn"
                  style={{ maxWidth: "260px", margin: "0 auto" }}
                >
                  Done & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="maya-dialog-form">
              {/* Question 1: What would you like to enquire about? */}
              <div className="form-group">
                <label className="form-label">
                  <HelpCircle size={14} className="form-label-icon" />
                  <span>1. What are you enquiring about today? *</span>
                </label>
                <div className="enquiry-topic-grid">
                  {ENQUIRY_TOPICS.map((topic) => {
                    const isSelected = selectedTopic === topic.label;
                    return (
                      <button
                        type="button"
                        key={topic.id}
                        className={`enquiry-topic-chip ${isSelected ? "is-selected" : ""}`}
                        onClick={() => setSelectedTopic(topic.label)}
                      >
                        <i className={`fa-solid ${topic.icon} topic-icon`}></i>
                        <span>{topic.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Patient Details: Full Name & Mobile */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <User size={14} className="form-label-icon" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra Verma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Department & Preferred Callback Time */}
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">
                    <Building2 size={14} className="form-label-icon" />
                    <span>Concerned Department</span>
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="form-select"
                  >
                    <option value="General Medicine & Diabetology">General Medicine & Diabetology</option>
                    <option value="Gynaecology & Maternity">Gynaecology & Maternity</option>
                    <option value="Orthopaedics & Joint Surgery">Orthopaedics & Joint Surgery</option>
                    <option value="General & Laparoscopic Surgery">General & Laparoscopic Surgery</option>
                    <option value="Paediatrics & Neonatology">Paediatrics & Neonatology</option>
                    <option value="24x7 ICU & Critical Care">24x7 ICU & Critical Care</option>
                    <option value="Radiology & Pathology">Radiology & Pathology</option>
                    <option value="General Hospital Administration">General Hospital Administration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Clock size={14} className="form-label-icon" />
                    <span>Preferred Callback Time</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="form-select"
                  >
                    <option value="Immediate / As soon as possible">Immediate / As soon as possible</option>
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="Evening (04:00 PM - 08:30 PM)">Evening (04:00 PM - 08:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Email (Optional) */}
              <div className="form-group">
                <label className="form-label">
                  <Mail size={14} className="form-label-icon" />
                  <span>Email Address (Optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com (optional for confirmation copy)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Message / Medical Questions */}
              <div className="form-group">
                <label className="form-label">
                  <MessageSquare size={14} className="form-label-icon" />
                  <span>Specific Questions / Symptoms / Details *</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Please describe your health query, doctor preference, surgical package questions, or requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-textarea"
                />
              </div>

              {/* Direct 24x7 Emergency Help Notice */}
              <div className="maya-dialog-emergency-notice">
                <ShieldCheck size={18} style={{ color: "#7c3aed", flexShrink: 0 }} />
                <span>
                  <strong>Need immediate emergency care?</strong> Call our 24x7 Casualty & Ambulance directly at <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} style={{ color: "#7c3aed", fontWeight: 700, textDecoration: "underline" }}>{HOSPITAL_INFO.emergencyPhone}</a>.
                </span>
              </div>

              {/* Submit Button */}
              <div style={{ paddingTop: "8px" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="maya-dialog-submit-btn"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? "Submitting Enquiry..." : "Submit Hospital Enquiry"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
