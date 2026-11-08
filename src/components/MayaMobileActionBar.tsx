"use client";

import React from "react";
import { HOSPITAL_INFO, MAPS_DIRECTIONS_URL, telHref } from "@/data/hospitalData";

interface MobileActionBarProps {
  onOpenAppointmentModal: () => void;
}

/**
 * Sticky bottom action bar for phones (hidden on desktop via CSS):
 * emergency, helpline, booking and directions are always one tap away.
 */
export default function MayaMobileActionBar({ onOpenAppointmentModal }: MobileActionBarProps) {
  return (
    <nav className="maya-mobile-bar" aria-label="Quick contact">
      <a href={telHref(HOSPITAL_INFO.emergencyPhone)} className="maya-mobile-bar-item is-emergency">
        <i className="fa-solid fa-truck-medical" aria-hidden="true"></i>
        <span>Call {HOSPITAL_INFO.emergencyPhone}</span>
      </a>
      <a href={telHref(HOSPITAL_INFO.bookingPhone)} className="maya-mobile-bar-item">
        <i className="fa-solid fa-headset" aria-hidden="true"></i>
        <span>Helpline</span>
      </a>
      <button type="button" onClick={onOpenAppointmentModal} className="maya-mobile-bar-item is-primary">
        <i className="fa-solid fa-calendar-check" aria-hidden="true"></i>
        <span>Book</span>
      </button>
      <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="maya-mobile-bar-item">
        <i className="fa-solid fa-diamond-turn-right" aria-hidden="true"></i>
        <span>Directions</span>
      </a>
    </nav>
  );
}
