"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import ContactMe from "@/components/ContactMe";
import Intro from "@/components/Intro";
import LandingPage from "@/components/heroSection/LandingPage";
import PreChoise from "@/components/Experience";
import ProofOfWork from "@/components/ProofOfWork";
import TechStack from "@/components/TechStack";
import Navbar from "@/components/Navbar";

const INTRO_DISPLAY_MS = 2000;
const INTRO_STORAGE_KEY = "portfolio-intro-seen";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [introAnimates, setIntroAnimates] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(INTRO_STORAGE_KEY);
    if (hasSeenIntro) return;

    sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    setIntroAnimates(true);
    setShowIntro(true);

    const timer = setTimeout(() => setShowIntro(false), INTRO_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  return (
    <>
      <div className="landing-grid-bg relative w-full overflow-x-hidden px-10">
        <Navbar />
        <LandingPage />
        <TechStack />
        <PreChoise />
        <ProofOfWork />
        <ContactMe />
      </div>

      <AnimatePresence>
        {showIntro && <Intro key="intro" animate={introAnimates} />}
      </AnimatePresence>
    </>
  );
}
