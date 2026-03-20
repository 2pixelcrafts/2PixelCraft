"use client";
import { useState } from "react";

const links = [
  { label: "Our Work", href: "#projects" },
  { label: "Free Trial", href: "#offer" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-tight">
            <div className="flex items-center gap-1">
              <span className="font-unbounded font-bold text-white text-sm tracking-widest uppercase">
                Tech
              </span>
              <span className="inline-grid grid-cols-3 gap-[2px] mx-0.5">
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
                className="text-gray-400 hover:text-white text-sm font-poppins transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#offer"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold font-poppins px-5 py-2 rounded-full transition-colors"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#141414] border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-gray-300 font-poppins">
              {l.label}
            </a>
          ))}
          <a
            href="#offer"
            onClick={() => setOpen(false)}
            className="bg-orange-500 text-white text-sm font-semibold font-poppins px-5 py-2 rounded-full text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
