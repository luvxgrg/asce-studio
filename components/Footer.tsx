const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Studio", href: "#about" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: null },
      { label: "LinkedIn", href: null },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">

        {/* TOP */}
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">

          {/* BRAND */}
          <div>
            <a
              href="#"
              className="text-xl font-semibold tracking-[0.2em]"
            >
              ASCE
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
              A multidisciplinary digital studio working across design,
              development and growth.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  {group.title}
                </p>

                <div className="mt-5 flex flex-col items-start gap-3">
                  {group.links.map((link) => link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className="text-sm text-zinc-400">
                      {link.label}
                      <span className="sr-only"> — profile unavailable</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} ASCE Studio.
          </p>

          <p>
            Design · Development · Growth
          </p>

        </div>
      </div>
    </footer>
  );
}
