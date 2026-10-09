import Link from "next/link";
import type { Project } from "@/content/projects";
import ProjectActions from "./ProjectActions";
import ProjectScreenshot from "./ProjectScreenshot";

export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
      <Link href="/#work" className="inline-flex min-h-11 items-center text-xs text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">← Selected Work</Link>
      <div className="mb-12 mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.2em] text-zinc-400">{project.projectType}</p>
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-semibold leading-none tracking-[-0.06em]">{project.name}</h1>
          <p className="mt-5 text-xl tracking-tight text-zinc-300 sm:text-2xl">{project.subtitle}</p>
        </div>
        <div>
          <p className="max-w-xl text-base leading-7 text-zinc-400">{project.summary}</p>
          <ul aria-label="Project services" className="my-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400">{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
          <ProjectActions project={project} />
        </div>
      </div>
      <ProjectScreenshot image={project.coverImage} />
    </section>
  );
}
