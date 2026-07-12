import SectionEyebrow from "./SectionEyebrow";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionEyebrow>About</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
            About Me
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-7xl">
            {profile.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
