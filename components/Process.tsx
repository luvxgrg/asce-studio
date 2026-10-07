const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and current challenges.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We determine what needs to be built, redesigned or marketed and create a clear direction.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We develop the visual identity and experience around that strategy.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We turn the approved direction into a fast, responsive and functional digital product.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Once it is live, we help put it in front of the right audience and continuously improve it.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* SECTION HEADING */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Our Process
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              From an idea to something
              <span className="text-zinc-500">
                {" "}people can actually experience.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500 lg:justify-self-end">
            A clear process keeps projects focused, reduces unnecessary
            back-and-forth and gives every decision a purpose.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <div className="mt-20 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative border-b border-white/10 py-7 md:px-6 lg:border-b-0 lg:border-r lg:py-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              {/* NUMBER */}
              <span className="text-sm text-zinc-400">
                {step.number}
              </span>

              {/* TITLE */}
              <div className="mt-4 flex items-center justify-between gap-4 lg:mt-8">
                <h3 className="text-lg font-medium">
                  {step.title}
                </h3>

                {index < steps.length - 1 && (
                  <span className="hidden text-zinc-400 transition duration-300 group-hover:translate-x-1 lg:block">
                    →
                  </span>
                )}
              </div>

              {/* DESCRIPTION */}
              <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500 lg:mt-4">
                {step.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
} 
