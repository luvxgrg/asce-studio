import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function CaseStudySection({ id, number, title, children, fullWidth = false }: { id: string; number: string; title: string; children: ReactNode; fullWidth?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="mb-5 text-xs tracking-[0.2em] text-zinc-500">{number} /</p>
            <h2 id={`${id}-heading`} className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">{title}</h2>
          </Reveal>
          <div className={`min-w-0 space-y-8 text-base leading-7 text-zinc-400 ${fullWidth ? "lg:col-span-2" : ""}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}
