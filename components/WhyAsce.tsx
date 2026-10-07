const advantages = [
  {
    number: "01",
    label: "Design",
    title: "Good design gets attention.",
    description:
      "Clear visual direction helps a business become recognizable, credible and memorable.",
  },
  {
    number: "02",
    label: "Development",
    title: "Good development turns attention into an experience.",
    description:
      "Fast, responsive and purposeful technology gives people a reason to stay and engage.",
  },
  {
    number: "03",
    label: "Marketing",
    title: "Good marketing gets that experience seen.",
    description:
      "Strategy and distribution put the right message in front of the right audience.",
  },
];

export default function WhyAsce() {
  return (
    <section className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* SECTION HEADING */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Why ASCE
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your brand, website and marketing shouldn&apos;t feel like
              <span className="text-zinc-500">
                {" "}three different projects.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500 lg:justify-self-end">
            We connect creative direction, technology and growth strategy so
            every part of your digital presence works toward the same goal.
          </p>
        </div>

        {/* ADVANTAGE CARDS */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <article
              key={advantage.number}
              className="group bg-black p-7 transition duration-300 hover:bg-zinc-950 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">
                  {advantage.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  {advantage.label}
                </span>
              </div>

              <div className="mt-16">
                <h3 className="max-w-sm text-xl font-medium leading-7 tracking-[-0.02em]">
                  {advantage.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
                  {advantage.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CONCLUSION */}
        <div className="mt-px grid overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 lg:grid-cols-[1fr_auto]">
          <div className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
              The result
            </p>

            <h3 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              One direction from first impression
              <span className="text-zinc-500">
                {" "}to final conversion.
              </span>
            </h3>
          </div>

          <div className="flex items-center border-t border-white/10 p-8 lg:border-l lg:border-t-0 lg:p-10">
            <p className="max-w-xs text-xl font-medium leading-7">
              ASCE brings all three
              <br />
              together.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
