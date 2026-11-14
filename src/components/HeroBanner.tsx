"use client";

import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Award,
  Users
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface HeroBannerProps {
  onOpenAppointmentModal: () => void;
}

const SLIDES = [
  {
    id: 1,
    tag: "Centre of Excellence",
    title: "Maternity & Advanced Gynaecology Care",
    subtitle: "Safe Normal Delivery, Modular C-Section Theatres & Laparoscopy",
    desc: "Compassionate maternal care with dedicated neonatal intensive support (NICU), experienced lady obstetricians, and state-of-the-art labor suites.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
    features: ["24x7 Normal & High-Risk Deliveries", "Level-2 NICU Baby Care", "Minimally Invasive Laparoscopy"],
    badge: "5.0 Rating • Trusted Maternity Centre"
  },
  {
    id: 2,
    tag: "24 Hours Emergency Care",
    title: "Trauma, Critical Care & General Medicine",
    subtitle: "Immediate Resuscitation, Digital X-Ray & Comprehensive ICU",
    desc: "Equipped with advanced diagnostic labs, life-support monitors, and emergency physicians ready 24/7 on Aira Road Meerpur, Lakhimpur Kheri.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600",
    features: ["Emergency Trauma Stabilization", "Accidental Injury Treatment", "Critical Care & Internal Medicine"],
    badge: "24x7 Ambulance & Emergency Unit"
  },
  {
    id: 3,
    tag: "Modern Surgical Excellence",
    title: "Orthopedics & Laparoscopic Surgeries",
    subtitle: "Joint Replacement, Complex Fractures & Keyhole Operations",
    desc: "Ultra-clean laminar airflow operation theatres for joint replacements, arthroscopy, gallbladder stone keyhole surgery, and hernia repairs.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1600",
    features: ["Total Knee & Hip Replacements", "Laparoscopic Gallbladder & Hernia", "Accident & Fracture Care"],
    badge: "State-of-the-Art Modular OTs"
  }
];

export default function HeroBanner({ onOpenAppointmentModal }: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Background Image with Flat Solid Overlay */}
      {SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center filter brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-[#001a36]/80" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-sky-200">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{slide.badge}</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <span className="block text-sky-400 font-bold uppercase tracking-widest text-xs sm:text-sm">
              {slide.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-200">
              {slide.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {slide.desc}
          </p>

          {/* Feature Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {slide.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium bg-black/25 px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenAppointmentModal}
              className="px-7 py-3.5 rounded-xl bg-[#0076d7] hover:bg-[#005fad] text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-600/30 hover:shadow-sky-600/50 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Doctor Appointment</span>
            </button>

            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-700/30 flex items-center gap-2.5 transition-all"
            >
              <PhoneCall className="w-5 h-5 animate-pulse" />
              <span>Emergency 24x7</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Govt. Registered Healthcare Facility</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>24 Hours Pharmacy & Testing</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>5000+ Happy Patients Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-[#0076d7] text-white items-center justify-center backdrop-blur-sm border border-white/20 transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-[#0076d7] text-white items-center justify-center backdrop-blur-sm border border-white/20 transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide ? "w-8 h-2.5 bg-[#0076d7]" : "w-2.5 h-2.5 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
