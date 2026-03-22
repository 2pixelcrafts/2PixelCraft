"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Our Work", href: "#projects" },
  { label: "Free Trial", href: "#offer" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.07] shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight group">
            <div className="flex items-center gap-1">
              <span className="font-unbounded font-bold text-white text-sm tracking-widest uppercase">
                Tech
              </span>
              <span className="inline-grid grid-cols-3 gap-0.5 mx-0.5 transition-transform duration-500 group-hover:rotate-90">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1 h-1 bg-orange-500 rounded-[1px]" />
                ))}
              </span>
              <span className="font-unbounded font-bold text-white text-sm tracking-widest uppercase">
                Butler
              </span>
            </div>
            <span className="text-[9px] text-gray-500 tracking-widest uppercase font-poppins">
              your technical co-founder
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-gray-400 hover:text-white text-sm font-poppins transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#offer"
              className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold font-poppins px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile toggle — animated to X */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] bg-current origin-center transition-all duration-300 ${
                  open ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-200 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current origin-center transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111111] border-t border-white/[0.07] px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white font-poppins text-sm transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#offer"
            onClick={() => setOpen(false)}
            className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold font-poppins px-5 py-2.5 rounded-full text-center transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
