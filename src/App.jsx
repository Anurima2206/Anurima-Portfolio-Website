import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import SkillHighlights from "./components/SkillHighlights";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg min-h-screen font-body text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <SkillHighlights />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
