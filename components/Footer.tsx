const navLinks = ["Our Work", "Free Trial", "About Us", "Careers"];
const legalLinks = ["Privacy", "Terms", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10 px-6 lg:px-10 pt-10 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
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
            ].map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                </svg>
              </a>
            ))}
          </div>

          {/* Logo center */}
          <a href="#" className="flex flex-col items-center leading-tight">
            <div className="flex items-center gap-1">
              <span className="font-unbounded font-bold text-white text-sm tracking-widest uppercase">Tech</span>
              <span className="inline-grid grid-cols-3 gap-[2px] mx-0.5">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1 h-1 bg-orange-500 rounded-[1px]" />
                ))}
              </span>
              <span className="font-unbounded font-bold text-white text-sm tracking-widest uppercase">Butler</span>
            </div>
          </a>

          {/* Nav links right */}
          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {navLinks.map((l) => (
              <a key={l} href="#" className="text-gray-400 hover:text-white text-sm font-poppins transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm font-poppins">
            © TechieButler Limited {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((l) => (
              <a key={l} href="#" className="text-gray-600 hover:text-white text-sm font-poppins transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
