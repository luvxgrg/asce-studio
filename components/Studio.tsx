export default function Studio() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              The Studio
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Small team.
              <br />
              Broad capabilities.
              <br />
              <span className="text-zinc-500">
                One direction.
              </span>
            </h2>

            <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
              <p className="text-sm leading-7 text-zinc-400">
                ASCE Studio is a multidisciplinary digital studio working
                across design, technology and marketing. We approach projects
                as complete business problems rather than isolated creative
                tasks.
              </p>

              <p className="text-sm leading-7 text-zinc-500">
                Our capabilities across graphic design, web development and
                digital marketing allow us to create experiences where the
                brand, product and strategy move in the same direction.
              </p>
            </div>

            {/* CAPABILITIES */}
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">

              <div className="bg-black p-6">
                <span className="text-xs text-zinc-400">01</span>
                <p className="mt-8 text-sm font-medium">
                  Strategy
                </p>
              </div>

              <div className="bg-black p-6">
                <span className="text-xs text-zinc-400">02</span>
                <p className="mt-8 text-sm font-medium">
                  Design
                </p>
              </div>

              <div className="bg-black p-6">
                <span className="text-xs text-zinc-400">03</span>
                <p className="mt-8 text-sm font-medium">
                  Development
                </p>
              </div>

              <div className="bg-black p-6">
                <span className="text-xs text-zinc-400">04</span>
                <p className="mt-8 text-sm font-medium">
                  Growth
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* DECORATIVE TEXT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[18vw] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]"
      >
        ASCE
      </div>
    </section>
  );
}
