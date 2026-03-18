import React, { useState, useCallback, useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import NavSidebar from "./components/NavSidebar";
import GleanHome from "./components/GleanHome";
import GleanChat from "./components/GleanChat";
import IntroModal from "./components/IntroModal";
import PersonaSelect from "./components/PersonaSelect";
import { flows } from "./data/conversations";

const GLEAN_IMG = "https://app.glean.com/images";
const PASSWORD = "rrdGlean";
const SESSION_KEY = "rrd_glean_auth";

function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white font-inter px-4">
      <img
        src={`${GLEAN_IMG}/glean-logo2.svg`}
        alt="Glean"
        className="h-9 mb-8"
        draggable="false"
      />
      <div
        className={`w-full max-w-[340px] bg-white border border-glean-border rounded-2xl shadow-sm px-7 py-8 ${
          shake ? "animate-[shake_0.4s_ease-in-out]" : ""
        }`}
        style={shake ? { animation: "shake 0.4s ease-in-out" } : {}}
      >
        <h1 className="text-base font-semibold text-glean-text text-center mb-1">
          Enter password to continue
        </h1>
        <p className="text-xs text-glean-gray text-center mb-6">
          This demo is password-protected.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Password"
            className={`w-full border rounded-lg px-4 py-2.5 text-sm text-glean-text outline-none transition-colors ${
              error
                ? "border-red-400 bg-red-50 placeholder-red-300"
                : "border-glean-border focus:border-glean-blue"
            }`}
          />
          {error && (
            <p className="text-xs text-red-500 text-center -mt-1">
              Incorrect password — try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-glean-blue hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors"
          >
            Continue →
          </button>
        </form>
      </div>
      <p className="text-[11px] text-gray-400 mt-8">
        Prepared for RRD by the Glean team
      </p>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}

/** Map a URL pathname like "/sales" → flow index, or null for unknown/root */
function personaIdxFromPath(pathname) {
  const slug = pathname.replace(/^\//, "").toLowerCase();
  const idx = flows.findIndex((f) => f.id === slug);
  return idx >= 0 ? idx : null;
}

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === "1"
  );

  // Initialise from the URL so deep-links like /sales work directly
  const [selectedPersona, setSelectedPersona] = useState(() =>
    personaIdxFromPath(window.location.pathname)
  );
  const [view, setView] = useState("home"); // "home" | "chat"
  const [showIntro, setShowIntro] = useState(true);

  // Handle browser back/forward navigation
  useEffect(() => {
    const onPopState = () => {
      const idx = personaIdxFromPath(window.location.pathname);
      if (idx === null) {
        // Back to root — reset to persona selection
        setSelectedPersona(null);
        setView("home");
        setShowIntro(true);
      } else {
        setSelectedPersona(idx);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const handlePersonaSelect = useCallback((idx) => {
    setSelectedPersona(idx);
  }, []);

  const handleRun = useCallback(() => {
    setView("chat");
  }, []);

  const handleIntroDismiss = useCallback(() => {
    setShowIntro(false);
  }, []);

  const handleRestart = useCallback(() => {
    window.history.pushState({}, "", "/");
    setSelectedPersona(null);
    setView("home");
    setShowIntro(true);
  }, []);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  // Show persona selection page when no persona is chosen
  if (selectedPersona === null) {
    return (
      <>
        <PersonaSelect onSelect={handlePersonaSelect} />
        <Analytics />
      </>
    );
  }

  const activeFlow = flows[selectedPersona];

  return (
    <>
      <div className="h-screen w-screen flex font-inter overflow-hidden bg-white">
        {/* Left icon navigation — hidden on mobile */}
        <div className="hidden md:block">
          <NavSidebar activeView={view} />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {view === "home" ? (
            <div className="flex-1 flex flex-col h-full">
              <GleanHome
                onRun={handleRun}
                showGuide={!showIntro}
                greeting={activeFlow.greeting}
                userQuery={activeFlow.userQuery}
              />
              {/* Footer on homepage */}
              <p className="text-[11px] text-gray-400 text-center pb-3 flex-shrink-0">
                Prepared for RRD by the Glean team
              </p>
            </div>
          ) : (
            <GleanChat flow={activeFlow} onRestart={handleRestart} />
          )}
        </div>
      </div>

      {/* Intro modal — shows above everything */}
      {showIntro && <IntroModal onDismiss={handleIntroDismiss} />}
      <Analytics />
    </>
  );
}
