import React from "react";

export default function MayaFounderSection() {
  return (
    <section 
      id="founder" 
      style={{ 
        position: "relative",
        padding: "60px 0 80px 0", 
        backgroundColor: "#160526",
        color: "#f7f3ec",
        overflow: "hidden"
      }}
    >
      <div 
        style={{ 
          maxWidth: "1240px", 
          margin: "0 auto", 
          padding: "0 24px" 
        }}
      >
        {/* Outer Card with 2-column grid to ensure perfect scaling and prevent text truncation */}
        <div className="founder-grid-card">
          {/* Founder Image Column: Pure white background matching image, fills height cleanly */}
          <div className="founder-image-container">
            <img
              src="/mayahospital.jpeg"
              alt="Dr. Brijendra Verma - Founder, Maya Hospital"
              className="founder-portrait-img"
            />
          </div>

          {/* Quote Content Column: Ample width, responsive typography, no overflow */}
          <div className="founder-content-container">
            <div>
              <blockquote className="founder-quote-text">
                &ldquo;When we laid the foundation of Maya Hospital right here in Lakhimpur Kheri, our vision was anchored in a single, non-negotiable principle: advanced surgical expertise and emergency critical care should never be a distant privilege reserved only for metro cities. We engineered this institution from the ground up with direct patient-first care, 24x7 critical response, and 100% dignity for every family in our region.&rdquo;
              </blockquote>
            </div>

            {/* Founder Signoff Below Quote */}
            <div className="founder-signoff">
              <h4 className="founder-name">
                Dr. Brijendra Verma
              </h4>
              <p className="founder-title">
                Founder &amp; Managing Director, Maya Hospital &amp; Multi-speciality Centre
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .founder-grid-card {
          position: relative;
          border-radius: 24px;
          background-color: #10031d;
          border: 1px solid rgba(124, 58, 237, 0.35);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          display: grid;
          grid-template-columns: 360px 1fr;
          align-items: stretch;
          padding: 0;
        }

        .founder-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 420px;
          background-color: #ffffff;
          display: flex;
          align-items: stretch;
          justifyContent: center;
          overflow: hidden;
          padding: 0;
          margin: 0;
        }

        .founder-portrait-img {
          width: 100%;
          height: 100%;
          min-height: 100%;
          object-fit: cover;
          object-position: center 10%;
          display: block;
          margin: 0;
          padding: 0;
        }

        .founder-content-container {
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: 48px 52px;
          border-left: 1px solid rgba(124, 58, 237, 0.25);
          box-sizing: border-box;
          min-width: 0;
        }

        .founder-quote-text {
          font-family: var(--heading-font), 'Plus Jakarta Sans', Georgia, serif;
          font-size: clamp(17px, 1.6vw, 21px);
          line-height: 1.7;
          color: #f7f3ec;
          font-weight: 300;
          font-style: italic;
          margin: 0;
          padding: 0;
          letter-spacing: -0.01em;
          word-break: normal;
          overflow-wrap: break-word;
        }

        .founder-signoff {
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid rgba(124, 58, 237, 0.35);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .founder-name {
          font-family: var(--heading-font), 'Plus Jakarta Sans', sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: #f7f3ec;
          letter-spacing: 0.02em;
          margin: 0;
        }

        .founder-title {
          font-size: 14px;
          color: #d4af37;
          font-family: var(--body-font), 'Inter', sans-serif;
          letter-spacing: 0.02em;
          font-weight: 500;
          margin: 0;
        }

        @media (max-width: 900px) {
          .founder-grid-card {
            grid-template-columns: 1fr;
          }
          .founder-image-container {
            height: 380px;
            min-height: 340px;
          }
          .founder-content-container {
            padding: 32px 24px;
            border-left: none;
            border-top: 1px solid rgba(124, 58, 237, 0.25);
          }
        }
      `}</style>
    </section>
  );
}
