import Reveal from "@/components/Reveal";
const services = [
  {
    number: "01",
    title: "Design",
    description:
      "We create visual systems that make businesses recognizable, consistent and professional.",
    items: [
      "Brand Identity",
      "Graphic Design",
      "Social Media Creatives",
      "Ad Creatives",
      "Marketing Collateral",
      "UI/UX Design",
    ],
  },
  {
    number: "02",
    title: "Development",
    description:
      "Fast, responsive and purposeful digital experiences built around what the business actually needs.",
    items: [
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "E-commerce",
      "Custom Web Development",
      "Website Maintenance",
    ],
  },
  {
    number: "03",
    title: "Growth",
    description:
      "We help businesses turn their digital presence into something people actually discover and engage with.",
    items: [
      "Digital Strategy",
      "Social Media Marketing",
      "SEO",
      "Content Strategy",
      "Paid Advertising",
      "Campaign Management",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_2.2fr]">

          {/* LEFT SIDE */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              What We Do
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              One studio.
              <br />
              <span className="text-zinc-500">
                Multiple disciplines.
              </span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-6 text-zinc-500">
              We combine creative thinking, technology and marketing so
              businesses don&apos;t have to coordinate different people for
              every part of their digital presence.
            </p>
          </div>

          {/* SERVICES */}
          <div className="grid gap-10 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.1}>
                <article className="border-t border-white/10 pt-6">
                  {/* NUMBER + TITLE */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-400">
                      {service.number}
                    </span>

                    <span className="text-xs text-zinc-400">/</span>

                    <h3 className="text-lg font-medium">
                      {service.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-sm leading-6 text-zinc-500">
                    {service.description}
                  </p>

                  {/* SERVICE LIST */}
                  <ul className="mt-7 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-zinc-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-zinc-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
