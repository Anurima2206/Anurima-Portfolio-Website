import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import SectionEyebrow from "./SectionEyebrow";
import Reveal from "./Reveal";
import { techStack } from "../data";
import { FaC } from "react-icons/fa6";

const iconMap = {
  Java: { icon: FaJava, color: "#f89820" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Python: { icon: SiPython, color: "#3776AB" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  React: { icon: SiReact, color: "#61DAFB" },
  Tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
  Vite: { icon: SiVite, color: "#B073FF" },
  "Node.js": { icon: SiNodedotjs, color: "#3C873A" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  C: {icon: FaC, color:"#1572B6" }
};

function Badge({ name }) {
  const entry = iconMap[name];
  const Icon = entry?.icon;

  return (
    <div className="group flex items-center gap-2.5 bg-bg border border-border rounded-lg px-4 py-2.5 transition-all duration-200 hover:border-accent hover:-translate-y-1">
      {Icon && <Icon size={18} style={{ color: entry.color }} />}
      <span className="text-sm text-white/90 font-medium">{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="py-12 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionEyebrow>Tech-stack</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-12">
            Tech Stack
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-200 hover:border-accent/50">
                <h3 className="font-mono text-accent text-sm mb-4 tracking-wide">
                  // {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <Badge key={item} name={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
