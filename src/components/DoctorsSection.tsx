"use client";

import React, { useState } from "react";
import { DOCTORS } from "@/data/hospitalData";
import { 
  Calendar, 
  Clock, 
  Award, 
  Search, 
  Filter, 
  CheckCircle,
  GraduationCap
} from "lucide-react";

interface DoctorsSectionProps {
  onOpenAppointmentModal: (doctorName?: string) => void;
}

export default function DoctorsSection({ onOpenAppointmentModal }: DoctorsSectionProps) {
  const [filterDept, setFilterDept] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const departments = ["All", ...Array.from(new Set(DOCTORS.map((d) => d.department)))];

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = filterDept === "All" || doc.department === filterDept;
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.degrees.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#0076d7] font-bold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Meet Our Medical Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#092c57]">
            Our Dedicated Doctors & Surgeons
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Experienced consultants and caring medical professionals available for outpatient clinic consultations, surgical procedures, and round-the-clock emergency care.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          {/* Department pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setFilterDept(dept)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  filterDept === dept
                    ? "bg-[#0076d7] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search doctor or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none focus:border-[#0076d7] bg-white"
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Doctor Photo & Department Tag */}
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#0076d7] text-xs font-bold rounded-full shadow-sm">
                    {doc.department}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-sky-200 font-medium">
                    <Award className="w-3.5 h-3.5" />
                    <span>{doc.experience}</span>
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#092c57] group-hover:text-[#0076d7] transition-colors">
                    {doc.name}
                  </h3>
                  <div className="flex items-start gap-1.5 text-xs text-slate-600 font-medium">
                    <GraduationCap className="w-4 h-4 text-[#0076d7] shrink-0 mt-0.5" />
                    <span>{doc.degrees}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500">
                    {doc.designation}
                  </p>
                </div>

                {/* Specialties tags */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase text-slate-400">
                    Key Clinical Focus:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md border border-slate-100 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability & Booking Action */}
                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#0076d7]" />
                    <span>{doc.availability}</span>
                  </div>

                  <button
                    onClick={() => onOpenAppointmentModal(doc.name)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#0076d7] text-[#092c57] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment with {doc.name.split(" ")[1] || doc.name}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
