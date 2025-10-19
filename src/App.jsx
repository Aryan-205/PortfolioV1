import { useRef } from 'react';
import About from './components/About';
import ContactMe from './components/ContactMe';
import DesignSection from './components/DesignSection';
import DesignSection2 from './components/DesignSection2';
import LandingPage from './components/LandingPage';
import PreChoise from './components/PreChoise';
import ProjectsPage from './components/ProjectsPage';
import TechStack from './components/TechStack';

export default function App() {

  const aboutRef = useRef(null);
    const techStackRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null); // Assuming 'Let's Talk' goes to a Contact section

    // 2. Define a function to handle the scrolling
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Scrolls so the top of the element is at the top of the viewport
        });
    };

    // 3. Create props for LandingPage navigation
    const navProps = {
        scrollToAbout: () => scrollToSection(aboutRef),
        scrollToTechStack: () => scrollToSection(techStackRef),
        scrollToProjects: () => scrollToSection(projectsRef),
        scrollToContact: () => scrollToSection(contactRef),
    };

  return (
    <div className="w-full relative">
      <LandingPage {...navProps}/>
      <PreChoise/>
      <DesignSection/>
      <DesignSection2/>
      <div ref={projectsRef}>
        <ProjectsPage/>
      </div>
      <div ref={techStackRef}>
        <TechStack/>
      </div>
      <div ref={aboutRef}>
        <About/>
      </div>
      <div ref={contactRef}>
        <ContactMe/>
      </div>
    </div>
  )
}