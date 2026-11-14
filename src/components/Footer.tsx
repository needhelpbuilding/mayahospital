import React from "react";
import Link from "next/link";
import { 
  Heart, 
  MapPin, 
  Phone, 
  Globe, 
  ExternalLink, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { HOSPITAL_INFO, DEPARTMENTS } from "@/data/hospitalData";

export default function Footer() {
  return (
    <footer className="bg-[#001a36] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Hospital Identity & Address */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0076d7] to-[#005fad] flex items-center justify-center text-white shadow-md">
                <Heart className="w-6 h-6 fill-white/20" />
              </div>
              <div>
                <h3 className="font-black text-xl tracking-tight text-white leading-tight">
                  MAYA HOSPITAL
                </h3>
                <p className="text-[11px] text-sky-400 font-bold uppercase tracking-wider">
                  & Multi-speciality Centre • Meerpur
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Providing holistic, patient-centered healthcare with dedicated 24x7 trauma, Level-2 NICU, modular laparoscopic operation theatres, and advanced diagnostics in Meerpur, Lakhimpur Kheri.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Emergency: <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} className="font-bold text-white hover:underline">{HOSPITAL_INFO.emergencyPhone}</a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{HOSPITAL_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-sky-500/40 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>About Maya Hospital</span>
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Centres of Excellence</span>
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Our Specialist Doctors</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Health Packages</span>
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Ayushman & Insurance TPA</span>
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Patient Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Contact & Map Directions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Departments Column 1 */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-sky-500/40 pb-2 inline-block">
              Clinical Departments
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {DEPARTMENTS.slice(0, 5).map((dept) => (
                <li key={dept.id}>
                  <a href="#departments" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{dept.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Departments Column 2 & External */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-sky-500/40 pb-2 inline-block">
              Emergency & Diagnostic
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {DEPARTMENTS.slice(5).map((dept) => (
                <li key={dept.id}>
                  <a href="#departments" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{dept.name}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={HOSPITAL_INFO.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0076d7]/30 border border-[#0076d7]/60 rounded-lg text-sky-300 hover:text-white hover:bg-[#0076d7] text-xs font-bold transition-all"
                >
                  <span>Verified Justdial Profile (5.0 ★)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Copyright & Landmark) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 {HOSPITAL_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>Landmark: Near Children&apos;s Academy School, Meerpur</span>
            <span>•</span>
            <span>Lakhimpur Kheri, UP - 262701</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Accredited &amp; Open 24 Hours
            </span>
            <span>•</span>
            <span>
              Built with care by{" "}
              <a
                href="https://needhelpbuilding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 font-semibold hover:underline"
              >
                NeedHelpBuilding Team
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
