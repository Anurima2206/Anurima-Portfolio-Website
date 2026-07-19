import { ExternalLink, Star } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 100}>
      <div className="group bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-accent/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/5">
        <div className="relative aspect-video bg-bg overflow-hidden border-b border-border">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center dot-grid">
              <span className="font-display font-bold text-2xl text-muted/40">
                {project.title}
              </span>
            </div>
          )}
          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-bg/90 border border-accent/40 text-accent text-xs font-mono px-2.5 py-1 rounded-full">
              <Star size={12} fill="currentColor" />
              Featured
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-xl text-white mb-1">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-accent mb-3">{project.subtitle}</p>

          <p className="text-muted text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {project.features && (
            <ul className="mb-4 space-y-1.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="text-accent mt-1 text-xs">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-bg font-semibold text-sm px-4 py-2.5 rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-accentLight"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-border text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-transform duration-200 hover:scale-105 hover:border-accent hover:text-accent"
            >
              <SiGithub size={15} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
