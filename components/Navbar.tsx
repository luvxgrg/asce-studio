"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projectEnquiryLinkProps } from "@/config/contact";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Studio", href: "/#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const desktop = window.matchMedia("(min-width: 48rem)");
    const logo = logoRef.current;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    const background = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer"),
    ).map((element) => ({ element, inert: element.inert }));

    document.body.style.overflow = "hidden";
    background.forEach(({ element }) => { element.inert = true; });
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
      }
      if (event.key === "Tab") {
        const links = Array.from(
          menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
        );
        const focusable = [logoRef.current, toggleRef.current, ...links].filter(
          (element): element is HTMLAnchorElement | HTMLButtonElement => element !== null,
        );
        const currentIndex = focusable.indexOf(document.activeElement as HTMLAnchorElement | HTMLButtonElement);
        const nextIndex = event.shiftKey
          ? (currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1)
          : (currentIndex + 1) % focusable.length;
        event.preventDefault();
        focusable[nextIndex]?.focus();
      }
    }

    function containFocus(event: FocusEvent) {
      const target = event.target as Node | null;
      if (target && !menuRef.current?.contains(target) &&
          target !== toggleRef.current && target !== logoRef.current) {
        menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      }
    }

    desktop.addEventListener("change", handleViewportChange);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", containFocus);

    return () => {
      desktop.removeEventListener("change", handleViewportChange);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", containFocus);
      document.body.style.overflow = previousOverflow;
      background.forEach(({ element, inert }) => { element.inert = inert; });
      (desktop.matches ? logo : toggle)?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="absolute left-0 top-0 z-50 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

          {/* LOGO */}
          <Link
            ref={logoRef}
            href="/"
            className="relative z-50 text-lg font-semibold tracking-[0.2em] text-white"
            onClick={closeMenu}
          >
            ASCE
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <a
            {...projectEnquiryLinkProps}
            className="hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white hover:text-black md:inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start a Project
            <span className="ml-2">→</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            ref={toggleRef}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              if (!window.matchMedia("(min-width: 48rem)").matches) {
                setMenuOpen((open) => !open);
              }
            }}
            className="relative z-50 text-xs font-medium uppercase tracking-[0.2em] text-white md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-black transition-all duration-500 motion-reduce:transition-none md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-dvh max-w-7xl flex-col px-6 pb-10 pt-24">

          {/* LINKS */}
          <div className="flex flex-1 flex-col justify-start">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center border-t border-white/10 py-4"
              >
                <span className="mr-6 text-xs text-zinc-400">
                  0{index + 1}
                </span>

                <span className="text-3xl font-medium tracking-[-0.04em] text-zinc-300 transition-colors group-hover:text-white">
                  {link.label}
                </span>

                <span className="ml-auto text-zinc-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}

            <div className="border-t border-white/10" />
          </div>

          {/* MOBILE CTA */}
          <div className="border-t border-white/10 pt-6">
            <p className="mb-5 max-w-xs text-sm leading-6 text-zinc-500">
              Have a project, idea or business you want to move forward?
            </p>

            <a
              {...projectEnquiryLinkProps}
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a Project
              <span className="ml-2">→</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
