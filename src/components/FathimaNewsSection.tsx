import React from "react";

export default function FathimaNewsSection() {
  const newsItems = [
    {
      date: "28 December 2024",
      title: "Most economical delivery package in Lakhimpur Kheri",
      desc: "Discover excellence in maternal healthcare through our specialized packages designed for normal delivery and painless childbirth."
    },
    {
      date: "30 December 2024",
      title: "Maya Hospital Enhances Neonatal & Paediatric Care with Advanced Facilities",
      desc: "Our Paediatrics & Neonatology department now offers state-of-the-art Level-2 NICU care, expert management of neonatal conditions, and pediatric emergency backup."
    },
    {
      date: "30 December 2024",
      title: "Strengthening Critical Care with Advanced Modular OTs & 24/7 Specialist Support",
      desc: "Our full-fledged Emergency & Trauma Centre is equipped with advanced diagnostics, digital X-Ray, and 24/7 specialist support on Aira Road Meerpur."
    }
  ];

  return (
    <section id="events" className="pt-100 pb-100 bg1 jarallax text-white section-news" style={{ backgroundColor: "#1e0733", padding: "90px 0", color: "#ffffff", scrollMarginTop: "90px" }}>
      <div className="container">
        {/* Header Row */}
        <div className="row-flex space-between align-center pt-30 pb-30" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "35px" }}>
          <div className="smd30">
            <span className="subtitle text-white" style={{ color: "#c084fc" }}>insights</span>
            <h2 className="heading text-white" style={{ color: "#ffffff", margin: 0 }}>News & Events</h2>
          </div>

          <span className="link">
            <a href="#news" style={{ textDecoration: "none" }}>
              <span>Read all news</span>
            </a>
          </span>
        </div>

        {/* 3 News Cards in Row */}
        <div className="row-flex space-between pt-30 pb-30" style={{ display: "flex", justifyContent: "space-between", gap: "25px", flexWrap: "wrap" }}>
          {newsItems.map((item, idx) => (
            <div key={idx} className="news-single curved" style={{ flex: "1 1 30%", minWidth: "280px" }}>
              <span className="date text-white">
                <i className="fa-regular fa-clock" style={{ marginRight: "10px" }}></i>
                {item.date}
              </span>
              <h4 className="subhead text-white uppercase">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
