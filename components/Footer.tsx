const navLinks = [
  { label: "Our Work", href: "#projects" },
  { label: "Free Trial", href: "#offer" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
];
const legalLinks = ["Privacy", "Terms", "Contact"];

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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Social icons */}
          <div className="flex items-center gap-3">
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

          {/* Logo center */}
          <a href="#" className="flex flex-col items-center leading-tight group">
            <div className="flex items-center gap-1">
              <span className="font-unbounded font-bold text-white text-sm tracking-widest uppercase">
                Tech
              </span>
              <span className="inline-grid grid-cols-3 gap-0.5 mx-0.5 transition-transform duration-500 group-hover:rotate-90">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1 h-1 bg-blue-500 rounded-[1px]" />
                ))}
              </span>
              <span className="font-unbounded font-bold text-white text-sm tracking-widest uppercase">
                Butler
              </span>
            </div>
          </a>

          {/* Nav links right */}
          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-gray-400 hover:text-white text-sm font-poppins transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm font-poppins">
            © TechieButler Limited {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="text-gray-600 hover:text-white text-sm font-poppins transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
