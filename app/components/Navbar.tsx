"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import LogoMark from "./LogoMark";

const links = [
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-charcoal shadow-lg shadow-black/20" : "bg-charcoal/0"
      }`}
    >
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        } bg-gradient-to-b from-charcoal-deep/80 to-transparent`}
      />
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <LogoMark className="h-10 w-10" />
          <span className="text-offwhite font-bold tracking-tight text-lg leading-none">
            DIAMOND
            <span className="block text-marigold text-[13px] font-medium tracking-tight">
              Manufacturing Industry
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-offwhite/90 hover:text-marigold text-[15px] font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="tel:08082512513"
          className="hidden lg:inline-flex items-center gap-2 bg-rope-green hover:bg-rope-green-dark text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
        >
          <Phone size={16} strokeWidth={2.5} />
          080825 12513
        </a>

        <button
          className="lg:hidden text-offwhite p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-charcoal border-t border-white/10 px-5 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-offwhite/90 text-base font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:08082512513"
            className="inline-flex items-center justify-center gap-2 bg-rope-green text-white font-bold text-sm px-5 py-3 rounded-full mt-1"
          >
            <Phone size={16} strokeWidth={2.5} />
            Call 080825 12513
          </a>
        </div>
      )}
    </header>
  );
}
