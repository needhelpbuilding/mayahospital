"use client";

import React, { useState } from "react";
import { HEALTH_PACKAGES } from "@/data/hospitalData";
import { 
  CheckCircle, 
  Package, 
  Sparkles, 
  ArrowRight, 
  Calendar,
  HelpCircle,
  ShieldCheck
} from "lucide-react";

interface HealthPackagesSectionProps {
  onOpenAppointmentModal: (pkgName?: string) => void;
}

export default function HealthPackagesSection({ onOpenAppointmentModal }: HealthPackagesSectionProps) {
  return (
    <section id="packages" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#0076d7] font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Preventive Healthcare
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#092c57]">
            Comprehensive Health Checkup Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Early detection saves lives. Choose customized, affordable preventive screening packages for you and your family at Maya Hospital Meerpur.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HEALTH_PACKAGES.map((pkg, idx) => {
            const isPopular = idx === 1; // Highlight second card
            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl p-6 flex flex-col justify-between border transition-all duration-300 relative ${
                  isPopular
                    ? "border-[#0076d7] shadow-xl shadow-sky-500/10 ring-2 ring-[#0076d7]/20 -translate-y-1"
                    : "border-slate-200 shadow-md hover:shadow-lg"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0076d7] text-white text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                    Most Recommended
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#092c57]">{pkg.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Badge */}
                  <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-black text-[#0076d7]">{pkg.price}</span>
                      {pkg.discountedPrice && (
                        <span className="text-xs text-slate-400 line-through ml-2 font-medium">
                          {pkg.discountedPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {pkg.testsCount}+ Tests
                    </span>
                  </div>

                  {/* Tests Included */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-bold uppercase text-slate-400">
                      Package Includes:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer details & Action */}
                <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] text-slate-500 font-medium">
                    <span className="font-bold text-slate-700">Suitable For: </span>
                    {pkg.recommendedFor}
                  </div>

                  <button
                    onClick={() => onOpenAppointmentModal(`Package: ${pkg.name}`)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isPopular
                        ? "bg-[#0076d7] hover:bg-[#005fad] text-white shadow-md shadow-sky-500/20"
                        : "bg-slate-100 hover:bg-[#0076d7] text-slate-700 hover:text-white"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Health Package</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate & Family Health Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0076d7] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#092c57]">Need Custom Family or Corporate Health Screening?</h4>
              <p className="text-xs text-slate-500">We offer specialized corporate checkups, pre-employment testing, and school student health camps in Meerpur & Lakhimpur Kheri.</p>
            </div>
          </div>

          <a
            href="tel:+919161103325"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs whitespace-nowrap"
          >
            Inquire Checkup Support
          </a>
        </div>
      </div>
    </section>
  );
}
