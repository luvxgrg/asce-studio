import Image from "next/image";
import { projectEnquiryLinkProps } from "@/config/contact";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/Hero.png"
          alt="ASCE Studio creative environment"
          fill
          sizes="100vw"
          preload
          className="object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* LEFT GRADIENT FOR TEXT READABILITY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        {/* BOTTOM GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-32 lg:px-8">
        <div className="max-w-[760px]">

          {/* SMALL INTRO TEXT */}
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.32em] text-zinc-400">
            Design. Develop. Grow.
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            We build digital
            <br />
            experiences that
            <br />

            <span className="text-zinc-400">
              move businesses
              <br />
              forward.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">
            ASCE Studio brings design, development and marketing together
            to help businesses build a stronger presence, reach the right
            people and turn ideas into digital experiences that work.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              {...projectEnquiryLinkProps}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a Project
              <span className="ml-2">→</span>
            </a>

            <a
              href="#work"
              className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:border-white/50 hover:bg-white/[0.05]"
            >
              Explore Our Work
            </a>
          </div>

        </div>
      </div>

      {/* CAPABILITIES BAR */}
      <div className="absolute bottom-0 left-0 z-20 w-full border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-hidden px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-zinc-400 lg:px-8">

          <span className="whitespace-nowrap">Design</span>
          <span>✦</span>

          <span className="whitespace-nowrap">
            Web Development
          </span>
          <span>✦</span>

          <span className="whitespace-nowrap">Branding</span>
          <span>✦</span>

          <span className="whitespace-nowrap">
            Digital Marketing
          </span>
          <span>✦</span>

          <span className="whitespace-nowrap">SEO</span>
          <span>✦</span>

          <span className="whitespace-nowrap">Creative</span>

        </div>
      </div>

    </section>
  );
}
