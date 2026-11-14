"use client";

import React, { useState } from "react";
import { 
  DEPARTMENTS, 
  Department 
} from "@/data/hospitalData";
import { 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Bone, 
  Activity, 
  ActivitySquare, 
  ShieldAlert, 
  Headphones, 
  Scan, 
  ArrowRight, 
  CheckCircle,
  Calendar
} from "lucide-react";

interface DepartmentsSectionProps {
  onOpenAppointmentModal: (deptName?: string) => void;
}

export default function DepartmentsSection({ onOpenAppointmentModal }: DepartmentsSectionProps) {
  const [selectedDept, setSelectedDept] = useState<Department>(DEPARTMENTS[0]);

  // Icon mapping helper
  const getIcon = (name: string) => {
    switch (name) {
      case "Stethoscope": return <Stethoscope className="w-6 h-6" />;
      case "HeartPulse": return <HeartPulse className="w-6 h-6" />;
      case "Baby": return <Baby className="w-6 h-6" />;
      case "Bone": return <Bone className="w-6 h-6" />;
      case "Activity": return <Activity className="w-6 h-6" />;
      case "ActivitySquare": return <ActivitySquare className="w-6 h-6" />;
      case "ShieldAlert": return <ShieldAlert className="w-6 h-6" />;
      case "Headphones": return <Headphones className="w-6 h-6" />;
      case "Scan": return <Scan className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section id="departments" className="py-20 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header (Fathima Hospital Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#0076d7] font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Centres of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#092c57]">
            Our Clinical Departments
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Discover excellence in healthcare through our specialized departments designed to meet every medical need of families in Meerpur & Lakhimpur Kheri.
          </p>
        </div>

        {/* Interactive Department Grid & Details View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Department List Tabs */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {DEPARTMENTS.map((dept) => {
              const isSelected = selectedDept.id === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? "bg-white border-[#0076d7] shadow-lg shadow-sky-500/10 scale-[1.01]"
                      : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#0076d7] text-white shadow-md shadow-sky-500/20"
                          : "bg-blue-50 text-[#0076d7]"
                      }`}
                    >
                      {getIcon(dept.iconName)}
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-bold ${
                          isSelected ? "text-[#0076d7]" : "text-slate-800"
                        }`}
                      >
                        {dept.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {dept.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-[#0076d7] translate-x-1" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Selected Department Detailed Showcase Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 sticky top-28">
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 shadow-inner">
              <img
                src={selectedDept.image}
                alt={selectedDept.name}
                className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#092c57]/70" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Specialized Unit
                </span>
                <h3 className="text-2xl font-black">{selectedDept.name}</h3>
                {selectedDept.headDoctor && (
                  <p className="text-xs text-slate-200 mt-1">Lead: {selectedDept.headDoctor}</p>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Overview & Clinical Scope
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedDept.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#092c57] mb-3">
                  Key Treatments & Specialized Facilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDept.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onOpenAppointmentModal(selectedDept.name)}
                  className="px-6 py-3 rounded-xl bg-[#0076d7] hover:bg-[#005fad] text-white font-bold text-sm flex items-center gap-2 shadow-md shadow-sky-500/20 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation in {selectedDept.name}</span>
                </button>

                <a
                  href="#doctors"
                  className="text-xs sm:text-sm font-bold text-[#092c57] hover:text-[#0076d7] flex items-center gap-1 transition-colors"
                >
                  <span>View Doctors In This Department</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
