"use client";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/seo";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Book a Call", href: "/#book-call" },
  { label: "Why 2PixelCraft", href: "/#about" },
];

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    path: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    label: "Call",
    href: `tel:${siteConfig.phone}`,
    path: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Contact",
    href: "/contact",
    path: "M8.25 12h7.5m-7.5 3h4.5m-7.125 4.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H5.625a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25z",
  },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0f0f0f] border-t border-white/[0.07] px-6 lg:px-10 pt-10 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center justify-center gap-3 sm:flex-1 sm:basis-0 sm:justify-start">
            {contactLinks.map(({ label, href, path }) => {
              const isInternal = href.startsWith("/");
              const className =
                "w-9 h-9 bg-white/8 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group";
              const icon = (
                <svg
                  className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                </svg>
              );

              if (isInternal) {
                return (
                  <Link key={label} href={href} aria-label={label} className={className}>
                    {icon}
                  </Link>
                );
              }

              return (
                <a key={label} href={href} aria-label={label} className={className}>
                  {icon}
                </a>
              );
            })}
          </div>

          <Link
            href="/"
            onClick={handleLogoClick}
            aria-label="2PixelCraft home"
            className="inline-flex shrink-0 items-center justify-center self-center sm:-ml-22"
          >
            <Image
              src="/transparent website logo.png"
              alt="2PixelCraft logo - Web Design and App Development Agency"
              width={2547}
              height={631}
              loading="lazy"
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
