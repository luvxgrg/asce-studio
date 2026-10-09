import { projects } from "@/content/projects";
import FeaturedProject from "@/components/work/FeaturedProject";

export default function Work() {
  const featuredProjects = projects.filter((project) => project.published && project.featured);
  return (
    <section id="work" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">Selected Work</p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Work we&apos;re proud<br />to put our name on.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-400 lg:justify-self-end lg:text-right">Selected digital work across brand, product and commerce. A space for client collaborations and independent concepts.</p>
        </div>
        <div className="mt-16 space-y-20">
          {featuredProjects.map((project, index) => <FeaturedProject key={project.slug} project={project} number={String(index + 1).padStart(2, "0")} />)}
        </div>
      </div>
    </section>
  );
}
