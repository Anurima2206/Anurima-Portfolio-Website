import { CheckCircle2 } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import Reveal from "./Reveal";
import { skillHighlights } from "../data";

export default function SkillHighlights() {
  return (
    <section className="py-24 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionEyebrow>Capabilities</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-12">
            What I Can Do
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillHighlights.map((skill, i) => (
            <Reveal key={skill} delay={i * 60}>
              <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 h-full transition-all duration-200 hover:border-accent/50 hover:-translate-y-1">
                <CheckCircle2 size={20} className="text-accent shrink-0" />
                <span className="text-white/90 text-sm font-medium">{skill}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
