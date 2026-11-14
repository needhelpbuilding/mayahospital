"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Phone, Calendar, Clock, Stethoscope, ChevronRight } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

interface Message {
  id: string;
  sender: "suchi" | "user";
  text: string;
  time: string;
  quickReplies?: string[];
}

interface SuchiChatbotProps {
  onOpenAppointment: () => void;
}

export default function SuchiChatbot({ onOpenAppointment }: SuchiChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "suchi",
      text: "Namaste! 🙏 I'm Nurse Suchi, your virtual healthcare assistant at Maya Hospital, Lakhimpur Kheri. How can I care for you today?",
      time: "Just now",
      quickReplies: [
        "Book Doctor OPD",
        "24x7 Emergency Help",
        "Hospital Location & Timings",
        "Maternity & Delivery Care",
        "Speak to Reception"
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "";
      let replies: string[] | undefined;

      const lower = userText.toLowerCase();

      if (lower.includes("book") || lower.includes("appointment") || lower.includes("opd") || lower.includes("doctor")) {
        replyText = "I'd be glad to arrange that for you! Our expert consultants (Gynecology, General Surgery, Pediatrics, Orthopedics, Cardiology) are available Monday to Sunday from 10:00 AM. Would you like me to open the online OPD booking form?";
        replies = ["Open Booking Form", "Call Hospital directly"];
      } else if (lower.includes("emergency") || lower.includes("ambulance") || lower.includes("icu") || lower.includes("urgent")) {
        replyText = `🚨 Our Trauma Care & Emergency Casualty is OPEN 24 HOURS, 7 DAYS A WEEK on Aira Road Meerpur. For immediate dispatch or ambulance, call our 24x7 line: ${HOSPITAL_INFO.emergencyPhone}`;
        replies = ["Call Emergency Now", "Get Location"];
      } else if (lower.includes("location") || lower.includes("address") || lower.includes("where") || lower.includes("timing")) {
        replyText = `📍 Maya Hospital is centrally located at ${HOSPITAL_INFO.shortAddress}. OPD runs 10:00 AM – 08:00 PM, and Emergency / ICU / Pharmacy are open 24x7.`;
        replies = ["Book Doctor OPD", "Call Reception"];
      } else if (lower.includes("maternity") || lower.includes("delivery") || lower.includes("baby") || lower.includes("pregnancy")) {
        replyText = "👶 We have comprehensive maternity suites, high-risk pregnancy management, painless normal delivery facilities, and 24x7 NICU support. Dr. and our nursing team provide round-the-clock maternal attention.";
        replies = ["Book Maternity Consult", "Call Reception"];
      } else if (lower.includes("open booking") || lower.includes("form")) {
        onOpenAppointment();
        replyText = "Opening the Appointment Request modal for you right now! Please fill in your preferred specialist and time slot.";
      } else if (lower.includes("reception") || lower.includes("call")) {
        replyText = `📞 You can speak directly with our reception desk at ${HOSPITAL_INFO.bookingPhone} or emergency team at ${HOSPITAL_INFO.emergencyPhone}.`;
      } else {
        replyText = `Thank you for sharing. Maya Hospital offers 24x7 Emergency, Specialist OPDs, Diagnostics, Cashless Mediclaim, and Surgery. Would you like to book an appointment or speak with our hospital staff?`;
        replies = ["Book Doctor OPD", "24x7 Emergency Help", "Speak to Reception"];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "suchi",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          quickReplies: replies
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Avatar Trigger Button */}
      {!isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer"
          }}
          onClick={() => setIsOpen(true)}
        >
          {/* Friendly Theme-Consistent Speech Bubble (Pill shape, vertically centered with avatar, NO triangular pointer, NO border) */}
          <div
            style={{
              backgroundColor: "#2e0c4f",
              backgroundImage: "linear-gradient(135deg, #3b0764 0%, #2e0c4f 100%)",
              color: "#ffffff",
              padding: "10px 18px",
              borderRadius: "9999px",
              boxShadow: "0 8px 24px rgba(46, 12, 79, 0.4)",
              border: "none",
              fontSize: "13px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              letterSpacing: "0.2px",
              marginBottom: "0px",
              position: "relative"
            }}
          >
            <span>Hi, Suchi this side, how can I help you?</span>
          </div>

          {/* Animated Avatar Circle (Seamless purple ring) */}
          <div
            style={{
              position: "relative",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              padding: "0",
              boxShadow: "0 8px 25px rgba(36, 11, 59, 0.45)",
              transition: "transform 0.25s ease",
              overflow: "hidden",
              border: "2.5px solid #7c3aed",
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/suchi_avatar.png"
              alt="Nurse Suchi - Maya Hospital Assistant"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
        </div>
      )}

      {/* Expanded Suchi Chat Window as a Side Section Drawer */}
      {isOpen && (
        <div
          className="suchi-drawer-backdrop"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="suchi-side-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Chat Window Header */}
            <div
              style={{
                backgroundColor: "#2e0c4f",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
                background: "linear-gradient(135deg, #2e0c4f 0%, #4c1d95 100%)",
                flexShrink: 0
              }}
            >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  position: "relative",
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  padding: "0",
                  overflow: "hidden",
                  border: "2px solid #a855f7"
                }}
              >
                <img
                  src="/suchi_avatar.png"
                  alt="Nurse Suchi"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block"
                  }}
                />
              </div>

              <div>
                <h4 style={{ margin: 0, color: "#ffffff", fontSize: "15px", fontWeight: 700, letterSpacing: "0.5px" }}>
                  Nurse Suchi
                </h4>
                <p style={{ margin: "2px 0 0", color: "rgba(255, 255, 255, 0.7)", fontSize: "11px" }}>
                  Maya Hospital Virtual Nurse • Online
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                border: "none",
                color: "#ffffff",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat Messages Body with hidden scrollbar */}
          <div
            className="suchi-messages-container"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              backgroundColor: "#faf7f4",
              display: "flex",
              flexDirection: "column",
              gap: "14px"
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: m.sender === "user" ? "flex-end" : "flex-start"
                }}
              >
                <div
                  style={{
                    maxWidth: "85%",
                    padding: "12px 16px",
                    borderRadius: m.sender === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                    backgroundColor: m.sender === "user" ? "#3b1261" : "#ffffff",
                    color: m.sender === "user" ? "#ffffff" : "#261633",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
                    border: m.sender === "user" ? "none" : "1px solid #e9d5ff",
                    fontSize: "13px",
                    lineHeight: "1.5"
                  }}
                >
                  {m.text}
                </div>
                <span style={{ fontSize: "10px", color: "#9ca3af", marginTop: "4px", padding: "0 4px" }}>
                  {m.time}
                </span>

                {/* Quick reply chips if available */}
                {m.quickReplies && m.quickReplies.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginTop: "10px",
                      maxWidth: "92%"
                    }}
                  >
                    {m.quickReplies.map((qr, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (qr === "Book Doctor OPD" || qr === "Open Booking Form") {
                            onOpenAppointment();
                          } else if (qr === "24x7 Emergency Help" || qr === "Call Emergency Now") {
                            window.location.href = `tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`;
                          } else {
                            handleSend(qr);
                          }
                        }}
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #7c3aed",
                          color: "#3b1261",
                          padding: "6px 14px",
                          borderRadius: "18px",
                          fontSize: "11.5px",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#7c3aed";
                          e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff";
                          e.currentTarget.style.color = "#3b1261";
                        }}
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 12px", backgroundColor: "#fff", borderRadius: "16px", alignSelf: "flex-start", border: "1px solid #e9d5ff" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7c3aed", animation: "bounce 1s infinite" }}></span>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7c3aed", animation: "bounce 1s infinite 0.2s" }}></span>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#7c3aed", animation: "bounce 1s infinite 0.4s" }}></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: "12px 14px",
              backgroundColor: "#ffffff",
              borderTop: "1px solid #ede9fe",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <input
              type="text"
              placeholder="Ask Nurse Suchi anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                border: "1px solid #e9d5ff",
                borderRadius: "24px",
                padding: "10px 16px",
                fontSize: "13px",
                outline: "none",
                backgroundColor: "#fbf8fe",
                color: "#261633"
              }}
            />
            <button
              type="submit"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#3b1261",
                border: "none",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#7c3aed";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3b1261";
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    )}
  </>
);
}
