"use client";

import React, { useState } from "react";
import { 
  X, 
  HelpCircle, 
  FileText, 
  Send, 
  CheckCircle2, 
  Download, 
  Search,
  Phone,
  MessageCircle
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface SupportModalsProps {
  isQuestionOpen: boolean;
  onCloseQuestion: () => void;
  isReportOpen: boolean;
  onCloseReport: () => void;
}

export default function SupportModals({
  isQuestionOpen,
  onCloseQuestion,
  isReportOpen,
  onCloseReport,
}: SupportModalsProps) {
  // Question state
  const [qName, setQName] = useState("");
  const [qPhone, setQPhone] = useState("");
  const [qQuery, setQQuery] = useState("");
  const [qSubmitted, setQSubmitted] = useState(false);

  // Lab Report state
  const [billNumber, setBillNumber] = useState("");
  const [patientMobile, setPatientMobile] = useState("");
  const [reportStatus, setReportStatus] = useState<string | null>(null);

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQSubmitted(true);
  };

  const handleReportSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setReportStatus("found");
  };

  return (
    <>
      {/* Ask A Question Modal */}
      {isQuestionOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-[#240b3b] text-white p-6 relative border-b border-purple-500/20">
              <button
                onClick={onCloseQuestion}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-[#c084fc] text-xs font-bold uppercase tracking-wider mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>Patient Health Assistance</span>
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif" }}>Ask A Doctor or Clinical Inquiry</h3>
              <p className="text-xs text-purple-200/80 mt-1">Get fast guidance on treatments, doctor availability, and diagnostic tests.</p>
            </div>

            <div className="p-6">
              {qSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#092c57]">Question Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    A duty medical officer or care coordinator from Maya Hospital will respond to <strong>{qPhone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setQSubmitted(false);
                      onCloseQuestion();
                    }}
                    className="px-5 py-2 bg-[#0076d7] text-white rounded-xl text-xs font-bold mt-2"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuestionSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Kumar"
                      value={qName}
                      onChange={(e) => setQName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0076d7]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit phone"
                      value={qPhone}
                      onChange={(e) => setQPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0076d7]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">What is your question or concern?</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Type your medical query, symptoms, or inquiry regarding surgery, beds, or package..."
                      value={qQuery}
                      onChange={(e) => setQQuery(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border border-stone-200 text-sm focus:outline-none focus:border-[#cda250]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#cda250] to-[#b38634] hover:from-[#b38634] hover:to-[#966d24] text-[#170c06] font-bold text-sm shadow flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Hospital Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lab Report Download Modal */}
      {isReportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden">
            <div className="bg-[#240b3b] text-white p-6 relative border-b border-purple-500/20">
              <button
                onClick={onCloseReport}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-[#c084fc] text-xs font-bold uppercase tracking-wider mb-1">
                <FileText className="w-4 h-4" />
                <span>Diagnostic Pathology & Radiology Portal</span>
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--heading-font), 'Plus Jakarta Sans', sans-serif" }}>Download Lab Test Reports</h3>
              <p className="text-xs text-purple-200/80 mt-1">Access blood test, digital X-Ray, ultrasound, and pathology findings.</p>
            </div>

            <div className="p-6 space-y-4">
              <form onSubmit={handleReportSearch} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">UHID / Lab Registration No. / Bill No.</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. MH-2026-8942"
                    value={billNumber}
                    onChange={(e) => setBillNumber(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full border border-stone-200 text-sm focus:outline-none focus:border-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Registered Patient Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile number given during billing"
                    value={patientMobile}
                    onChange={(e) => setPatientMobile(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full border border-stone-200 text-sm focus:outline-none focus:border-[#7c3aed]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] hover:from-[#6d28d9] hover:to-[#5b21b6] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 uppercase tracking-wider transition-all"
                >
                  <Search className="w-4 h-4" />
                  <span>Fetch Diagnostic Report</span>
                </button>
              </form>

              {reportStatus === "found" && (
                <div className="p-4 rounded-2xl bg-[#faf6fd] border border-purple-500/20 space-y-3 mt-4 animate-in fade-in">
                  <div className="flex items-center justify-between text-xs text-stone-800 font-bold">
                    <span>Patient: Verified Patient Record</span>
                    <span className="text-white bg-[#7c3aed] px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider">Ready</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Your digital investigation reports are ready for download or direct dispatch.
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert(`Report for ${billNumber || "record"} is dispatched to ${patientMobile} via SMS.`)}
                      className="flex-1 py-2.5 rounded-full bg-[#240b3b] hover:bg-[#3b1261] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-[#c084fc]" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="text-[11px] text-stone-500 text-center pt-2 border-t border-stone-100">
                Facing difficulty fetching your report? Contact the Diagnostic Reception at <strong>{HOSPITAL_INFO.bookingPhone}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
