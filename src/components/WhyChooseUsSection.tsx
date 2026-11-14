import React from "react";
import { 
  ShieldAlert, 
  Heart, 
  Sparkles, 
  Award, 
  Clock, 
  Activity, 
  ShieldCheck, 
  PhoneCall,
  CheckCircle2
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function WhyChooseUsSection() {
  const pillars = [
    {
      title: "Service to Humanity",
      desc: "Maya Hospital brings modern medical technology and senior clinical specialists within reach of the common man in Lakhimpur Kheri and surrounding rural belts.",
      icon: Heart,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Passion & Medical Ethics",
      desc: "Our longstanding tradition of transparent, empathetic care guarantees patients and families receive honest counseling without unnecessary investigations.",
      icon: Award,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Towards a Healthier Tomorrow",
      desc: "From advanced digital radiology to modular laminar airflow theatres and modern neonatal incubators, we invest in the highest standards of clinical hygiene.",
      icon: Sparkles,
      color: "text-sky-600",
      bg: "bg-sky-50"
    },
    {
      title: "Rapid Emergency Response",
      desc: "Instant clinical triage, round-the-clock emergency doctors, stocked pharmacy, and rapid testing turnaround to direct patients to proper intensive units quickly.",
      icon: Activity,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section className="py-20 bg-[#0E36B4] text-white relative overflow-hidden">
      {/* Background Accent Flat Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sky-300 font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              Caring Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Entrust your health in safe and capable hands.
            </h2>
            <p className="text-base text-slate-200 leading-relaxed font-normal">
              Dignity, empathy, and a patient-centric approach for an utmost caring hospital experience. Serving Meerpur, Lakhimpur, and surrounding districts with pride and clinical dedication.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>24x7 Doctor on Duty & Immediate Trauma Management</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Transparent Medical Billing & Ayushman Bharat Support</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>In-House Testing, Ultrasound & 24hr Emergency Medicine</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-xl transition-all"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                <span>Call Emergency Triage: {HOSPITAL_INFO.emergencyPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Feature Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/95 text-slate-800 rounded-3xl p-6 shadow-xl border border-white/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#092c57] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
