import { Award } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import Reveal from "./Reveal";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section className="py-12 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionEyebrow>Achievements</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-12">
            Achievements
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <Reveal key={item} delay={i * 100}>
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-200 hover:border-accent/50 hover:-translate-y-1">
                <Award size={22} className="text-accent mb-4" />
                <p className="text-white/90 text-sm leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

