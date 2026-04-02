"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Featured Projects", href: "/projects" },
  { label: "Why 2PixelCraft", href: "/#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative flex h-16 items-center justify-center md:justify-between">
          <Link
            href="/"
            onClick={handleLogoClick}
            aria-label="2PixelCraft home"
            className="inline-flex items-center"
          >
            <Image
              src="/transparent website logo.png"
              alt="2PixelCraft - Web Design & App Development Agency logo"
              width={2547}
              height={600}
              priority
              className="h-auto w-[140px] sm:w-[170px] md:w-[200px]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-gray-400 hover:text-white text-sm font-poppins transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/#book-call"
              className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold font-poppins px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              Book a Call
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="absolute right-0 text-gray-400 hover:text-white transition-colors p-1 md:hidden"
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

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#111111] px-6 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white font-poppins text-sm transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#book-call"
            onClick={() => setOpen(false)}
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold font-poppins px-5 py-2.5 rounded-full text-center transition-colors duration-200"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
