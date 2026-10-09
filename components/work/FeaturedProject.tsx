import type { Project } from "@/content/projects";
import ProjectScreenshot from "./ProjectScreenshot";
import ProjectActions from "./ProjectActions";

export default function FeaturedProject({ project, number }: { project: Project; number: string }) {
  return (
    <article className="min-w-0 border-t border-white/20 pt-6">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-zinc-400">{number} / Featured</p>
          <h3 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">{project.name}</h3>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">{project.subtitle}</p>
        </div>
        <p className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-zinc-300">{project.projectType}</p>
      </div>
      <ProjectScreenshot image={project.coverImage} />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <p className="max-w-xl text-base leading-7 text-zinc-400">{project.summary}</p>
        <div className="min-w-0 lg:justify-self-end">
          <ul aria-label="Project services" className="mb-7 flex max-w-md flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400">{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
          <ProjectActions project={project} caseStudy />
        </div>
      </div>
    </article>
  );
}
