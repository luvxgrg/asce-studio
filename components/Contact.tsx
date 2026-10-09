import { projectEnquiryLinkProps } from "@/config/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">

        {/* LABEL */}
        <div className="flex items-center gap-4">
          <span className="h-2 w-2 rounded-full bg-white" />

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            Start a Project
          </p>
        </div>

        {/* MAIN CTA */}
        <div className="mt-12">
          <p className="text-xl text-zinc-500 sm:text-2xl">
            Have something in mind?
          </p>

          <h2 className="mt-2 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[7rem]">
            Let&apos;s build it.
          </h2>
        </div>

        {/* LOWER CONTENT */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-2 lg:items-end">

          <p className="max-w-lg text-sm leading-7 text-zinc-500">
            Tell us what you&apos;re working on, what isn&apos;t working or
            simply where you want your business to go next. We&apos;ll figure
            out what ASCE can do to help.
          </p>

          <div className="flex lg:justify-end">
            <a
              {...projectEnquiryLinkProps}
              className="group inline-flex items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a Project

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
