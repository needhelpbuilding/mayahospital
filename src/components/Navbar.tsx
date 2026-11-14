"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Stethoscope, 
  Calendar, 
  Menu, 
  X, 
  ChevronDown, 
  Heart, 
  ShieldCheck,
  Star
} from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS } from "@/data/hospitalData";

interface NavbarProps {
  onOpenAppointmentModal: () => void;
}

export default function Navbar({ onOpenAppointmentModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [depDropdownOpen, setDepDropdownOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      {/* Top Bar (Emergency, Hours, Quick Action) */}
      <div className="bg-[#092c57] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#005fad]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              <span>24x7 Emergency & Trauma Ready</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Aira Road, Meerpur, Lakhimpur Kheri</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-amber-300 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>Rated 5.0 (51+ Reviews)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-red-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>Emergency: <strong>{HOSPITAL_INFO.emergencyPhone}</strong></span>
            </a>
            <span className="text-slate-500">|</span>
            <a 
              href="#location" 
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{HOSPITAL_INFO.hours}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header (Branding & Action) */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Logo and Hospital Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-[#245BFF] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Heart className="w-7 h-7 text-white fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black tracking-tight text-[#092c57] leading-none">
              MAYA <span className="text-[#0076d7]">HOSPITAL</span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
              & Multi-Speciality Centre • Meerpur
            </span>
          </div>
        </Link>

        {/* Desktop Quick Header Info */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-3 border-r border-slate-200 pr-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0076d7] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">For OPD / Booking</div>
              <a href={`tel:${HOSPITAL_INFO.bookingPhone.replace(/\s+/g, '')}`} className="text-sm font-bold text-slate-800 hover:text-[#0076d7] transition-colors">
                {HOSPITAL_INFO.bookingPhone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-slate-200 pr-6">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Doctor Consultation</div>
              <a href="#doctors" className="text-sm font-bold text-slate-800 hover:text-[#0076d7] transition-colors">
                Find a Specialist
              </a>
            </div>
          </div>

          <button
            onClick={onOpenAppointmentModal}
            className="flex items-center gap-2 bg-[#0076d7] hover:bg-[#005fad] text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md shadow-sky-500/20 hover:shadow-lg transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenAppointmentModal}
            className="bg-[#0076d7] text-white px-3 py-1.5 rounded-md text-xs font-semibold"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0076d7] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#f8fafc] border-t border-slate-200/80 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <ul className="flex items-center gap-1 font-semibold text-sm text-slate-700">
            <li>
              <Link href="/" className="inline-block py-3 px-3 text-[#0076d7] hover:text-[#005fad] border-b-2 border-[#0076d7]">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="inline-block py-3 px-3 hover:text-[#0076d7] transition-colors">
                About Us
              </a>
            </li>
            <li className="relative group" onMouseEnter={() => setDepDropdownOpen(true)} onMouseLeave={() => setDepDropdownOpen(false)}>
              <button 
                className="flex items-center gap-1 py-3 px-3 hover:text-[#0076d7] transition-colors"
                onClick={() => setDepDropdownOpen(!depDropdownOpen)}
              >
                <span>Departments</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>

              {/* Mega Dropdown */}
              {depDropdownOpen && (
                <div className="absolute left-0 top-full w-[650px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 z-50 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  {DEPARTMENTS.map((dept) => (
                    <a
                      key={dept.id}
                      href={`#dept-${dept.slug}`}
                      className="group/item flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      onClick={() => setDepDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0076d7] flex items-center justify-center shrink-0 group-hover/item:bg-[#0076d7] group-hover/item:text-white transition-colors">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover/item:text-[#0076d7] transition-colors">
                          {dept.name}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">{dept.shortDesc}</div>
                      </div>
                    </a>
                  ))}
                  <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <ShieldCheck className="w-4 h-4" /> 24x7 Diagnostic & Operation Theatre Ready
                    </span>
                    <a href="#departments" className="text-[#0076d7] font-semibold hover:underline">
                      View all departments →
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="#specialities" className="inline-block py-3 px-3 hover:text-[#0076d7] transition-colors">
                Specialities
              </a>
            </li>
            <li>
              <a href="#doctors" className="inline-block py-3 px-3 hover:text-[#0076d7] transition-colors">
                Doctors
              </a>
            </li>
            <li>
              <a href="#packages" className="inline-block py-3 px-3 hover:text-[#0076d7] transition-colors">
                Health Packages
              </a>
            </li>
            <li>
              <a href="#reviews" className="inline-block py-3 px-3 hover:text-[#0076d7] transition-colors">
                Reviews
              </a>
            </li>
            <li>
              <a href="#location" className="inline-block py-3 px-3 hover:text-[#0076d7] transition-colors">
                Contact & Location
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              Emergency Ambulance Available
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <ul className="space-y-2 text-sm font-semibold text-slate-800">
            <li>
              <Link 
                href="/" 
                className="block py-2 px-3 bg-sky-50 text-[#0076d7] rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a 
                href="#about" 
                className="block py-2 px-3 hover:bg-slate-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#departments" 
                className="block py-2 px-3 hover:bg-slate-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Departments & Services
              </a>
            </li>
            <li>
              <a 
                href="#doctors" 
                className="block py-2 px-3 hover:bg-slate-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Specialist Doctors
              </a>
            </li>
            <li>
              <a 
                href="#packages" 
                className="block py-2 px-3 hover:bg-slate-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Health Checkup Packages
              </a>
            </li>
            <li>
              <a 
                href="#reviews" 
                className="block py-2 px-3 hover:bg-slate-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Patient Reviews
              </a>
            </li>
            <li>
              <a 
                href="#location" 
                className="block py-2 px-3 hover:bg-slate-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact & Address
              </a>
            </li>
          </ul>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full py-2.5 bg-[#0076d7] text-white text-center font-bold text-sm rounded-lg shadow"
            >
              Book an Appointment
            </button>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              className="w-full py-2 bg-red-600 text-white text-center font-bold text-sm rounded-lg"
            >
              Call Emergency Helpline ({HOSPITAL_INFO.emergencyPhone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
