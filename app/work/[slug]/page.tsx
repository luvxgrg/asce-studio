import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedProject, projects } from "@/content/projects";
import CaseStudyHero from "@/components/work/CaseStudyHero";
import CaseStudySection from "@/components/work/CaseStudySection";
import ProjectScreenshot from "@/components/work/ProjectScreenshot";
import ProjectActions from "@/components/work/ProjectActions";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((project) => project.published).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getPublishedProject((await params).slug);
  if (!project) notFound();
  const title = `${project.name} — ${project.subtitle} | ASCE Studio`;
  const description = `${project.projectType} by ASCE Studio. ${project.summary}`;
  return { title, description, openGraph: { title, description, type: "website" } };
}

export default async function CaseStudyPage({ params }: Props) {
  const project = getPublishedProject((await params).slug);
  if (!project) notFound();
  const content = project.caseStudy;
  return (
    <>
      <CaseStudyHero project={project} />
      <CaseStudySection id="overview" number="01" title="An independent exploration.">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Overview</p><p>{content.overview}</p>
      </CaseStudySection>
      <CaseStudySection id="design-direction" number="02" title="Form over noise.">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Design direction</p><p>{content.designDirection}</p>
      </CaseStudySection>
      <CaseStudySection id="interfaces" number="03" title="Selected interfaces." fullWidth>
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-2">
          {content.interfaces.map((view) => (
            <figure key={view.title} className="min-w-0">
              <ProjectScreenshot image={view.image} sizes="(min-width: 1280px) 596px, (min-width: 1024px) calc((100vw - 88px) / 2), calc(100vw - 48px)" />
              <figcaption className="mt-5">
                <h3 className="text-base font-medium text-white">{view.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-6">{view.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </CaseStudySection>
      <CaseStudySection id="commerce" number="04" title="Discovery into detail.">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Commerce experience</p>
        <ul className="grid gap-x-8 sm:grid-cols-2">{content.commerceFeatures.map((feature) => <li key={feature} className="border-t border-white/10 py-4 text-sm text-zinc-300">{feature}</li>)}</ul>
        <p className="text-sm leading-7">{content.commerceNote}</p>
      </CaseStudySection>
      <section id="responsive" aria-labelledby="responsive-heading" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-start gap-16 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:gap-12">
            <Reveal className="min-w-0">
              <p className="mb-5 text-xs tracking-[0.2em] text-zinc-500">05 /</p>
              <h2 id="responsive-heading" className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">Across screen sizes.</h2>
              <p className="mb-6 mt-8 text-xs uppercase tracking-[0.2em] text-zinc-500">Responsive experience</p>
              <p className="max-w-xl text-base leading-7 text-zinc-400">{content.responsive}</p>
            </Reveal>
            <div className="grid min-w-0 items-start gap-x-8 gap-y-16 md:grid-cols-2">
              {content.mobileViews.map((view, index) => (
                <figure key={view.image.src} className={`mx-auto w-full min-w-0 max-w-[373px] ${index === 1 ? "md:mt-12" : ""}`}>
                  <ProjectScreenshot image={view.image} sizes="(min-width: 1280px) 323px, (min-width: 858px) 373px, (min-width: 768px) calc((100vw - 80px) / 2), (min-width: 421px) 373px, calc(100vw - 48px)" />
                  <figcaption className="mt-5 text-xs tracking-wide text-zinc-400">{view.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CaseStudySection id="build" number="06" title="Built for the browser.">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Build</p>
        <ul aria-label="Technologies" className="flex flex-wrap gap-3">{content.technologies.map((technology) => <li key={technology} className="rounded-full border border-white/20 px-4 py-2 text-xs text-zinc-300">{technology}</li>)}</ul>
        <p>{content.build}</p>
      </CaseStudySection>
      <section aria-labelledby="explore-heading" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-24 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div><p className="mb-5 text-xs uppercase tracking-[0.2em] text-zinc-500">{project.projectType}</p><h2 id="explore-heading" className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Explore {project.name}.</h2></div>
          <ProjectActions project={project} />
        </div>
      </section>
      <Contact />
    </>
  );
}
