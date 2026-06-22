import React, { useState } from "react";
import rrdLogo from "../rrd_logo.svg";

const GLEAN_IMG = "https://app.glean.com/images";

const MaskedIcon = ({ src, size = 20, color = "#1C5BE0" }) => (
  <div
    style={{
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
      maskSize: "contain",
      WebkitMaskSize: "contain",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskPosition: "center",
      background: color,
      width: size,
      height: size,
      minWidth: size,
    }}
  />
);

const bullets = [
  {
    icon: `${GLEAN_IMG}/feather/search.svg`,
    title: "End the content hunt",
    text: "The right deck, battlecard, or proposal from Salesforce, Drive, and 14+ microsites — in seconds, not tabs.",
  },
  {
    icon: `${GLEAN_IMG}/lightbulb-3.svg`,
    title: "Ramp sellers faster",
    text: "A persona-aware assistant that complements RRD's Gemini and Salesforce investments.",
  },
  {
    icon: `${GLEAN_IMG}/feather/lock.svg`,
    title: "Secure by permission",
    text: "Every seller sees only what they're allowed to — with full citations and auditable reasoning.",
  },
];

export default function IntroModal({ onDismiss }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onDismiss, 250);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 ${
        closing ? "modal-backdrop-out" : "modal-backdrop"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-[480px] px-5 sm:px-8 py-6 sm:py-8 ${
          closing ? "modal-card-out" : "modal-card"
        }`}
      >
        {/* Prepared for label */}
        <p className="text-xs text-glean-gray text-center mb-5 tracking-wide">
          Prepared for RRD by the Glean team
        </p>

        {/* Logos — Glean × RRD */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
          <img
            src={`${GLEAN_IMG}/glean-logo2.svg`}
            alt="Glean"
            className="h-9 sm:h-10"
            draggable="false"
          />
          <span className="text-gray-300 text-lg font-light select-none">×</span>
          <img
            src={rrdLogo}
            alt="RR Donnelley"
            className="h-7 sm:h-8"
            draggable="false"
          />
        </div>

        {/* Headline */}
        <h1 className="text-lg sm:text-xl font-semibold text-glean-text text-center mb-6 leading-snug">
          See what Glean could look like
          <br />
          for RRD
        </h1>

        {/* Bullet points */}
        <div className="flex flex-col gap-4 mb-8">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <MaskedIcon src={b.icon} size={17} color="#1C5BE0" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-glean-text leading-snug">
                  {b.title}
                </p>
                <p className="text-[13px] text-glean-gray leading-snug mt-0.5">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={handleClose}
          className="w-full bg-glean-blue hover:bg-blue-700 text-white font-medium text-[15px] py-3 rounded-lg transition-colors"
        >
          Show me how it works →
        </button>

        {/* Sub-text */}
        <p className="text-xs text-glean-gray text-center mt-4">
          This is a personalized demo — no login required
        </p>
      </div>
    </div>
  );
}
