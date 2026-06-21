import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import ContactMe from "./components/ContactMe";
import Intro from "./components/Intro";
import LandingPage from "./components/heroSection/LandingPage";
import PreChoise from "./components/Experience";
import ProjectsPage from "./components/ProjectsPage";
import Others from "./components/ProofOfWork";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";

const INTRO_DISPLAY_MS = 2000;

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null); // Assuming 'Let's Talk' goes to a Contact section

  // 2. Define a function to handle the scrolling
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start", // Scrolls so the top of the element is at the top of the viewport
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), INTRO_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  // 3. Create props for LandingPage navigation
  const navProps = {
    scrollToAbout: () => scrollToSection(aboutRef),
    scrollToTechStack: () => scrollToSection(techStackRef),
    scrollToProjects: () => scrollToSection(projectsRef),
    scrollToContact: () => scrollToSection(contactRef),
  };

  return (
    <>
      <div className="w-full relative landing-grid-bg px-10 overflow-x-hidden">
        <Navbar
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
        <LandingPage {...navProps} />
        <div ref={techStackRef}>
          <TechStack />
        </div>
        <PreChoise />
        <div ref={projectsRef}>
          <ProjectsPage />
        </div>
        <Others />
        <div ref={contactRef}>
          <ContactMe />
        </div>
      </div>

      <AnimatePresence>{showIntro && <Intro key="intro" />}</AnimatePresence>
    </>
  );
}
