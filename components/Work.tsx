const projects = [
  {
    number: "01",
    category: "Brand Identity · Web Design · Development",
    title: "Brand Identity & Website",
    description: "A modern digital presence built around a clear brand system.",
  },
  {
    number: "02",
    category: "Creative Direction · Social Media · Marketing",
    title: "Social Media & Marketing",
    description: "Consistent visuals, content and campaigns designed for growth.",
  },
  {
    number: "03",
    category: "Web Development · Digital Experience",
    title: "Custom Web Experience",
    description: "A fast, modern and responsive experience built for the web.",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* SECTION INTRO */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Work we&apos;re proud
              <br />
              to put our name on.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <p className="max-w-md text-sm leading-6 text-zinc-400 lg:text-right">
              A growing collection of brands, websites and digital experiences
              created to solve real business problems.
            </p>

            <a
              href="#projects"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm transition duration-300 hover:border-white/50 hover:bg-white/[0.05]"
            >
              View All Work
              <span className="ml-2">→</span>
            </a>
          </div>

        </div>

        {/* PROJECT GRID */}
        <div
          id="projects"
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
            >

              {/* PROJECT IMAGE PLACEHOLDER */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">

                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black transition duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    Project Visual
                  </span>
                </div>

              </div>

              {/* PROJECT INFORMATION */}
              <div className="p-6">

                <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                  <span>{project.number}</span>

                  <span className="h-px w-5 bg-zinc-700" />

                  <span>{project.category}</span>
                </div>

                <h3 className="text-xl font-medium tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                <span
                  className="mt-6 inline-flex items-center text-sm text-zinc-300"
                >
                  Case study coming soon
                </span>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
