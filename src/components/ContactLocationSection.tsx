import React from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Navigation,
  Share2,
  Calendar
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function ContactLocationSection() {
  const mapUrl = `https://maps.google.com/maps?q=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}&hl=en&z=15&output=embed`;

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#0076d7] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Visit & Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#092c57]">
            Hospital Location & Directions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Conveniently situated on Aira Road Near Children&apos;s Academy School, Meerpur, Lakhimpur Kheri with round-the-clock emergency entrance and ambulance access.
          </p>
        </div>

        {/* Location & Details Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#092c57] text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                  Main Hospital Campus
                </span>
                <h3 className="text-2xl font-black mt-1">
                  Maya Hospital And Multi-speciality Centre
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-sm">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-sky-400 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sky-200 text-xs uppercase">Postal Address</h4>
                  <p className="text-slate-200 mt-1 leading-relaxed">
                    {HOSPITAL_INFO.fullAddress}
                  </p>
                </div>
              </div>

              {/* Emergency & OPD Phones */}
              <div className="flex items-start gap-3.5 text-sm">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-red-400 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sky-200 text-xs uppercase">Direct Contacts</h4>
                  <p className="text-slate-200">
                    Emergency: <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} className="font-bold text-white hover:underline">{HOSPITAL_INFO.emergencyPhone}</a>
                  </p>
                  <p className="text-slate-200">
                    OPD / Booking: <a href={`tel:${HOSPITAL_INFO.bookingPhone.replace(/\s+/g, '')}`} className="font-bold text-white hover:underline">{HOSPITAL_INFO.bookingPhone}</a>
                  </p>
                  <p className="text-slate-200">
                    Patient Care: <a href="tel:+917897576583" className="font-bold text-white hover:underline">+91 7897576583</a>
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 text-sm">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sky-200 text-xs uppercase">Visiting & Emergency Hours</h4>
                  <p className="text-slate-200 font-bold mt-1">{HOSPITAL_INFO.hours}</p>
                  <p className="text-xs text-slate-300">OPD Clinics: Mon - Sun (10:00 AM - 08:00 PM)</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href={HOSPITAL_INFO.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white text-[#092c57] hover:bg-sky-50 font-bold text-xs flex items-center gap-1.5 transition-colors shadow"
              >
                <span>View On Justdial Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[420px] relative">
            <iframe
              title="Maya Hospital And Multi-speciality Centre Map"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "440px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-200 text-xs max-w-xs hidden sm:block">
              <p className="font-bold text-[#092c57]">Landmark Guidance:</p>
              <p className="text-slate-600 mt-0.5">Opposite/Near Children&apos;s Academy School, Meerpur on the Aira Road route.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
