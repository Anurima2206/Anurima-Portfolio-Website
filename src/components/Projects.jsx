import SectionEyebrow from "./SectionEyebrow";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionEyebrow>My Projects</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-muted max-w-xl mb-12">
            A few projects I'm proud of — built end-to-end, from idea to deployment.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
