"use client";

import React, { useState } from "react";
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  Stethoscope,
  Heart
} from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS, DOCTORS } from "@/data/hospitalData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  initialDepartment?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialDoctor = "",
  initialDepartment = "",
}: AppointmentModalProps) {
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDept, setSelectedDept] = useState(initialDepartment || DEPARTMENTS[0].name);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor || "");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Morning (10:00 AM - 01:00 PM)");
  const [symptoms, setSymptoms] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="maya-dialog-backdrop" onClick={onClose}>
      <div 
        className="maya-dialog-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="maya-dialog-header">
          <button
            onClick={onClose}
            className="maya-dialog-close-btn"
          >
            <X size={18} />
          </button>
          <div className="maya-dialog-header-inner">
            <img
              src="/White Caduceus Laurel Monogram.png"
              alt="Maya Hospital Monogram"
              className="maya-dialog-logo"
            />
            <div>
              <div className="maya-dialog-badge">
                <Calendar size={13} style={{ color: "#c084fc" }} />
                <span>Online OPD Registration</span>
              </div>
              <h3 className="maya-dialog-title">
                Book a Doctor Appointment
              </h3>
              <p className="maya-dialog-subtitle">
                Maya Hospital And Multi-speciality Centre • Meerpur, Lakhimpur Kheri
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
                Appointment Request Confirmed!
              </h4>
              <p className="maya-dialog-success-desc">
                Thank you <strong style={{ color: "#240b3b" }}>{patientName}</strong>. Our OPD front desk will contact you at <strong style={{ color: "#240b3b" }}>{phoneNumber}</strong> within 15 minutes to confirm your token and time slot.
              </p>

              <div className="maya-dialog-summary-card">
                <div className="summary-row">
                  <span className="summary-label">Hospital:</span>
                  <span className="summary-val">{HOSPITAL_INFO.name}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Location:</span>
                  <span className="summary-val">Aira Road, Meerpur</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Selected Unit:</span>
                  <span className="summary-val">{selectedDept}</span>
                </div>
                {selectedDoctor && (
                  <div className="summary-row">
                    <span className="summary-label">Consultant:</span>
                    <span className="summary-val">{selectedDoctor}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span className="summary-label">Timing:</span>
                  <span className="summary-val">{date || "Earliest Available"} • {timeSlot}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">OPD Desk Support:</span>
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
                  Done & Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="maya-dialog-form">
              {/* Section 1: Patient Information */}
              <div className="form-section">
                <div className="form-section-header">
                  <span className="form-section-badge">1</span>
                  <span className="form-section-title">Patient Contact Details</span>
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
                      placeholder="e.g. Rahul Verma"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Phone size={14} className="form-label-icon" />
                      <span>Contact (WhatsApp/Call) *</span>
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
              </div>

              {/* Section 2: Department & Doctor */}
              <div className="form-section">
                <div className="form-section-header">
                  <span className="form-section-badge">2</span>
                  <span className="form-section-title">Department & Specialist</span>
                </div>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">
                      <Heart size={14} className="form-label-icon" />
                      <span>Department / Speciality</span>
                    </label>
                    <select
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
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
                      <span>Preferred Doctor (Optional)</span>
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
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

              {/* Section 3: Schedule & Slot */}
              <div className="form-section">
                <div className="form-section-header">
                  <span className="form-section-badge">3</span>
                  <span className="form-section-title">Preferred Schedule & Slot</span>
                </div>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">
                      <Calendar size={14} className="form-label-icon" />
                      <span>Preferred Date</span>
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
                      <span>Preferred Slot</span>
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="form-select"
                    >
                      <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                      <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                      <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM - 08:00 PM)</option>
                      <option value="Emergency / Immediate">Immediate Triage (Emergency)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 4: Symptoms / Medical Notes */}
              <div className="form-section">
                <div className="form-section-header">
                  <span className="form-section-badge">4</span>
                  <span className="form-section-title">Symptoms / Medical Reason</span>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <FileText size={14} className="form-label-icon" />
                    <span>Brief Symptoms or Medical History (Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Fever for 3 days, joint pain, prenatal routine visit, ultrasound inquiry..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="form-textarea"
                  />
                </div>
              </div>

              {/* Direct Emergency Warning */}
              <div className="maya-dialog-emergency-notice">
                ℹ️ For emergency injuries, chest pain, or acute labor pain, please head straight to our Emergency Unit on Aira Road Meerpur or call <strong>{HOSPITAL_INFO.emergencyPhone}</strong>.
              </div>

              {/* Submit Button */}
              <div style={{ paddingTop: "4px" }}>
                <button
                  type="submit"
                  className="maya-dialog-submit-btn"
                >
                  <Calendar size={15} />
                  <span>Confirm Appointment Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
