import About from './components/About';
import ContactMe from './components/ContactMe';
import DesignSection from './components/DesignSection';
import DesignSection2 from './components/DesignSection2';
import LandingPage from './components/LandingPage';
import PreChoise from './components/PreChoise';
import ProjectsPage from './components/ProjectsPage';
import TechStack from './components/TechStack';

export default function App() {

  return (
    <div className="w-full relative">
      <LandingPage/>
      <PreChoise/>
      <DesignSection/>
      <DesignSection2/>
      <ProjectsPage/>
      <TechStack/>
      <About/>
      <ContactMe/>
    </div>
  )
}