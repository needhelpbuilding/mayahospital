import React from "react";
import { 
  HeartPulse, 
  Package, 
  HelpCircle, 
  FileText, 
  Shield, 
  CalendarClock,
  PhoneForwarded,
  Ambulance
} from "lucide-react";

interface QuickActionLinksProps {
  onOpenAppointment: () => void;
  onOpenQuestion: () => void;
  onOpenReportModal: () => void;
}

export default function QuickActionLinks({
  onOpenAppointment,
  onOpenQuestion,
  onOpenReportModal,
}: QuickActionLinksProps) {
  const links = [
    {
      title: "Doctor Appointment",
      desc: "Instant OPD Confirmation",
      icon: CalendarClock,
      action: onOpenAppointment,
      color: "from-blue-600 to-indigo-600",
      bgHover: "hover:border-blue-500",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    },
    {
      title: "Health Checkup",
      desc: "Full Body Packages",
      icon: HeartPulse,
      href: "#packages",
      color: "from-emerald-600 to-teal-600",
      bgHover: "hover:border-emerald-500",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50"
    },
    {
      title: "Ask A Doctor",
      desc: "Consultation Guidance",
      icon: HelpCircle,
      action: onOpenQuestion,
      color: "from-amber-600 to-orange-600",
      bgHover: "hover:border-amber-500",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50"
    },
    {
      title: "Lab Test Reports",
      desc: "Online & WhatsApp",
      icon: FileText,
      action: onOpenReportModal,
      color: "from-purple-600 to-violet-600",
      bgHover: "hover:border-purple-500",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50"
    },
    {
      title: "Ayushman / Insurance",
      desc: "Cashless TPA Support",
      icon: Shield,
      href: "#insurance",
      color: "from-sky-600 to-cyan-600",
      bgHover: "hover:border-sky-500",
      iconColor: "text-sky-600",
      iconBg: "bg-sky-50"
    },
    {
      title: "24x7 Ambulance",
      desc: "Rapid Patient Pickup",
      icon: Ambulance,
      href: "tel:108",
      color: "from-red-600 to-rose-600",
      bgHover: "hover:border-red-500",
      iconColor: "text-red-600",
      iconBg: "bg-red-50"
    }
  ];

  return (
    <section className="relative z-30 -mt-10 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {links.map((item, idx) => {
          const Icon = item.icon;
          const Content = (
            <div className={`h-full bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex flex-col items-center text-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 ${item.bgHover}`}>
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-3 shadow-sm`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm leading-snug mb-1">
                {item.title}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                {item.desc}
              </p>
            </div>
          );

          if (item.action) {
            return (
              <div key={idx} onClick={item.action}>
                {Content}
              </div>
            );
          }

          return (
            <a key={idx} href={item.href}>
              {Content}
            </a>
          );
        })}
      </div>
    </section>
  );
}
