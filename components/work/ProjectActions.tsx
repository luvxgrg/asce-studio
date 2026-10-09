import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectActions({ project, caseStudy = false }: { project: Project; caseStudy?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      {caseStudy && <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center gap-4 border-b border-white/40 py-2 text-xs font-medium tracking-[0.12em] transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">VIEW CASE STUDY <span aria-hidden="true">→</span></Link>}
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-4 border-b border-white/20 py-2 text-xs font-medium tracking-[0.12em] text-zinc-300 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
        LIVE SITE <span aria-hidden="true">↗</span><span className="sr-only"> — {project.name}, opens in a new tab</span>
      </a>
    </div>
  );
}
