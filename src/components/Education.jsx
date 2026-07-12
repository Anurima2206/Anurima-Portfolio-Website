import { GraduationCap } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import Reveal from "./Reveal";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionEyebrow>Education Details</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-12">
            Education
          </h2>
        </Reveal>

        <div className="max-w-2xl space-y-5">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 100}>
              <div className="flex gap-4 bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-accent/50">
                <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-muted text-sm mt-1">{edu.institute}</p>
                  {edu.period && (
                    <p className="font-mono text-xs text-accent mt-1">{edu.period}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
