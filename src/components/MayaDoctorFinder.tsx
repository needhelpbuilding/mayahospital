"use client";

import React, { useId, useMemo, useState } from "react";
import { DOCTORS, DEPARTMENTS, HOSPITAL_INFO, telHref } from "@/data/hospitalData";

interface DoctorFinderProps {
  onOpenAppointmentModal: (doctorName?: string) => void;
}

const ALL = "all";

/**
 * Find-a-Doctor: filter specialists by department and name / condition, then book directly.
 * Pattern inspired by large hospital portals (speciality dropdown + search), in Maya's design system.
 */
export default function MayaDoctorFinder({ onOpenAppointmentModal }: DoctorFinderProps) {
  const [department, setDepartment] = useState(ALL);
  const [query, setQuery] = useState("");
  const searchId = useId();

  // Only offer departments that actually have a doctor listed
  const departmentOptions = useMemo(
    () => DEPARTMENTS.filter((d) => DOCTORS.some((doc) => doc.department === d.name)),
    []
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DOCTORS.filter((doc) => {
      if (department !== ALL && doc.department !== department) return false;
      if (!q) return true;
      return [doc.name, doc.designation, doc.department, doc.degrees, ...doc.specialties]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [department, query]);

  const hasFilters = department !== ALL || query.trim() !== "";
  const clearFilters = () => {
    setDepartment(ALL);
    setQuery("");
  };

  return (
    <section id="find-doctor" className="maya-finder-section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span className="subtitle">FIND A DOCTOR</span>
          <h2 className="heading" style={{ marginBottom: "14px" }}>
            Find the Right Specialist
          </h2>
          <p style={{ maxWidth: "640px", margin: "0 auto", fontSize: "15px", color: "#6b5e7a", lineHeight: "24px" }}>
            Choose a department or search by doctor, treatment or condition to see OPD timings and book a consultation.
          </p>
        </div>

        {/* Filter bar */}
        <form className="maya-finder-bar" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="maya-finder-field">
            <span className="maya-finder-label">Department</span>
            <span className="maya-finder-control">
              <i className="fa-solid fa-hospital-user" aria-hidden="true"></i>
              <select id="finder-department" value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value={ALL}>All Departments</option>
                {departmentOptions.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </span>
          </label>

          <label className="maya-finder-field maya-finder-field-grow" htmlFor={searchId}>
            <span className="maya-finder-label">Doctor, treatment or condition</span>
            <span className="maya-finder-control">
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. pregnancy, knee, Dr. Sharma"
                autoComplete="off"
              />
            </span>
          </label>

          {hasFilters && (
            <button type="button" className="maya-finder-clear" onClick={clearFilters}>
              <i className="fa-solid fa-xmark" aria-hidden="true"></i> Clear
            </button>
          )}
        </form>

        <p className="maya-finder-count" aria-live="polite">
          {results.length === 1 ? "1 specialist found" : `${results.length} specialists found`}
        </p>

        {results.length > 0 ? (
          <ul className="maya-finder-grid">
            {results.map((doc) => (
              <li key={doc.id} className="maya-doctor-card">
                <div className="maya-doctor-photo">
                  <img src={doc.image} alt={`Portrait of ${doc.name}`} loading="lazy" />
                  <span className="maya-doctor-exp">{doc.experience.replace(" Experience", "")}</span>
                </div>
                <div className="maya-doctor-body">
                  <span className="maya-doctor-dept">{doc.department}</span>
                  <h3 className="maya-doctor-name">{doc.name}</h3>
                  <p className="maya-doctor-degrees">{doc.degrees}</p>
                  <p className="maya-doctor-designation">{doc.designation}</p>
                  <p className="maya-doctor-opd">
                    <i className="fa-regular fa-clock" aria-hidden="true"></i>
                    <span>
                      <span className="sr-only">OPD timings: </span>
                      {doc.availability}
                    </span>
                  </p>
                  <button
                    type="button"
                    className="maya-doctor-book"
                    onClick={() => onOpenAppointmentModal(doc.name)}
                    aria-label={`Book an appointment with ${doc.name}`}
                  >
                    Book Appointment
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="maya-finder-empty">
            <i className="fa-solid fa-user-doctor" aria-hidden="true"></i>
            <p>No specialist matches that search yet.</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button type="button" className="maya-doctor-book" onClick={clearFilters}>
                Clear filters
              </button>
              <a className="maya-finder-call" href={telHref(HOSPITAL_INFO.bookingPhone)}>
                <i className="fa-solid fa-headset" aria-hidden="true"></i> Ask the helpline
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
