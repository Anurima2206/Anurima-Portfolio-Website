import { Mail, ArrowRight, Download } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "../data";
import TypingEffect from "./TypingEffect";
import CodeCard from "./CodeCard";

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-10 pb-5 dot-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div>
          
          <p className="text-muted font-mono text-base mb-2">Hi, I'm</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white mb-4">
            {profile.name}
          </h1>

          <div className="font-mono text-lg sm:text-xl text-accent mb-2 min-h-[2rem]">
            <TypingEffect phrases={[profile.role, "MERN Developer",profile.subrole]} />
          </div>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg mt-5 mb-8">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-3 rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-accentLight"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-border text-white font-semibold px-6 py-3 rounded-lg transition-transform duration-200 hover:scale-105 hover:border-accent hover:text-accent"
            >
              <Download size={18} />
              Download Resume
            </a>

            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-transform duration-200 hover:scale-105 hover:text-accent"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:text-accent hover:border-accent hover:-translate-y-0.5"
            >
              <SiGithub size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:text-accent hover:border-accent hover:-translate-y-0.5"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:text-accent hover:border-accent hover:-translate-y-0.5"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

<div className="flex justify-center items-center">
  {profile.photoUrl ? (
    <div className="relative animate-floatSlow">
      {/* Background Glow */}
      <div
        className="absolute inset-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl scale-110"
        aria-hidden="true"
      />

      {/* Profile Image */}
      <img
        src={profile.photoUrl}
        alt={profile.name}
        className="relative w-80 h-80 rounded-full object-cover object-top border-4 border-border shadow-2xl shadow-black/40"
      />
    </div>
  ) : (
    <CodeCard />
  )}
</div>

      </div>
    </section>
  );
}
