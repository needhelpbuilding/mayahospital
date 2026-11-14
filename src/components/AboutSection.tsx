import React from "react";
import { 
  Building2, 
  Award, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles,
  PhoneCall
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visuals & Experience Pill */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1000"
                alt="Maya Hospital And Multi-speciality Centre Exterior & Facility"
                className="w-full h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#092c57]/70" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Licensed Healthcare Centre</span>
                </div>
                <h4 className="text-lg font-bold">Maya Hospital & Multispeciality Center</h4>
                <p className="text-xs text-slate-200">Near Children&apos;s Academy School, Aira Road, Meerpur</p>
              </div>
            </div>

            {/* Experience & Rating Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-2xl shadow-md">
                5.0
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  ★★★★★
                </div>
                <p className="text-xs font-bold text-slate-800">51+ Verified Reviews</p>
                <p className="text-[11px] text-slate-500">Top-rated hospital on Justdial in Lakhimpur Kheri</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Hospital Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0076d7] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to Maya Hospital Meerpur</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092c57] leading-tight">
              Modern Multi-Speciality Medical Care in Lakhimpur Kheri
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Located on <strong>Aira Road, Meerpur</strong> (near Children&apos;s Academy School), <strong>Maya Hospital And Multi-speciality Centre</strong> is built upon the foundation of compassionate healing, medical ethics, and clinical precision. We offer accessible, patient-first super-speciality and general healthcare services under one roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0076d7] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">24x7 Continuous Care</h4>
                  <p className="text-xs text-slate-500">Round-the-clock emergency, pharmacy, pathology, and trauma triage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Modular Operation Theatres</h4>
                  <p className="text-xs text-slate-500">Equipped for laparoscopic, orthopedic, and emergency deliveries.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Level-2 Neonatal ICU</h4>
                  <p className="text-xs text-slate-500">Advanced phototherapy, warmers, and critical care for newborns.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Affordable & Ethical</h4>
                  <p className="text-xs text-slate-500">Transparent packages, cashless insurance, and patient welfare schemes.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#departments"
                className="px-6 py-3 rounded-xl bg-[#0076d7] hover:bg-[#005fad] text-white font-bold text-sm shadow-md transition-colors"
              >
                Explore Departments
              </a>
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#0076d7]" />
                <span>Call {HOSPITAL_INFO.emergencyPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
