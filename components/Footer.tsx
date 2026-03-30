import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Featured Projects", href: "/#projects" },
  { label: "No Brain Call", href: "/#offer" },
  { label: "Good vs We", href: "/#about" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Instagram",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a2 2 0 002-2v-11a2 2 0 00-2-2h-11a2 2 0 00-2 2v11a2 2 0 002 2z",
  },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-7a2 2 0 110 4 2 2 0 010-4z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/[0.07] px-6 lg:px-10 pt-10 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center justify-center gap-3 sm:flex-1 sm:basis-0 sm:justify-start">
            {socials.map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 bg-white/8 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
              >
                <svg
                  className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                </svg>
              </a>
            ))}
          </div>

          <Link
            href="/"
            aria-label="Tech Butler home"
            className="inline-flex shrink-0 items-center justify-center self-center sm:-ml-22"
          >
            <Image
              src="/transparent website logo.png"
              alt="Tech Butler"
              width={2547}
              height={631}
              loading="eager"
              className="h-auto w-[130px] sm:w-[170px]"
            />
          </Link>

          <div className="flex justify-center sm:flex-1 sm:basis-0 sm:justify-end">
            <nav className="flex flex-wrap items-center justify-center gap-5 text-center sm:justify-end">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-gray-400 hover:text-white text-sm font-poppins transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-gray-600 text-sm font-poppins">
            &copy; 2PixelCraft {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-white text-sm font-poppins transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
