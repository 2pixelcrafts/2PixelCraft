"use client";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/seo";
import { usePathname } from "next/navigation";
import { featuredCities } from "@/app/locations/data";
import { techs } from "@/app/technologies/data";

const footerLinks = {
  company: [
    { label: "Featured Projects", href: "/projects" },
    { label: "Why 2PixelCraft", href: "/#about" },
    { label: "Our Tech Stack", href: "/technologies" },
    { label: "Service Areas", href: "/locations" },
    { label: "Contact Us", href: "/contact" },
  ],
  technologies: techs.slice(0, 5).map(t => ({ label: `${t.name} Dev`, href: `/technologies/${t.slug}` })),
  locations: featuredCities.slice(0, 6).map(c => ({ label: `IT in ${c.name}`, href: `/locations/${c.slug}` })),
};

const contactLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}`, path: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
  { label: "Call", href: `tel:${siteConfig.phone}`, path: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.05] pt-20 pb-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-15">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/transparent website logo.png"
                alt="2PixelCraft Logo"
                width={180}
                height={45}
                className="h-auto w-[150px] brightness-110"
              />
            </Link>
            <p className="text-gray-500 font-poppins text-sm leading-relaxed max-w-sm mb-6">
              Building high-performance digital products for local businesses
              and global startups. From Rajkot to the world, we engineering
              excellence into every pixel.
            </p>
            {/* NAP — Name / Address / Phone (Local SEO signal) */}
            <address className="not-italic mb-8 space-y-1">
              <p className="font-poppins text-xs text-gray-600">
                <span className="font-semibold text-gray-500">2PixelCraft</span>
              </p>
              <p className="font-poppins text-xs text-gray-600">Rajkot, Gujarat 360001, India</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-poppins text-xs text-gray-600 hover:text-blue-400 transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </address>
            <div className="flex gap-4">
              {contactLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-unbounded font-bold text-xs uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 hover:text-blue-400 text-sm font-poppins transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-unbounded font-bold text-xs uppercase tracking-widest text-white mb-6">Expertise</h4>
            <ul className="grid grid-cols-1 gap-4">
              {footerLinks.technologies.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 hover:text-blue-400 text-sm font-poppins transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/technologies" className="text-blue-400 text-xs font-bold font-poppins hover:underline tracking-tight">View All Tech →</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-unbounded font-bold text-xs uppercase tracking-widest text-white mb-6">Service Areas</h4>
            <ul className="grid grid-cols-1 gap-4">
              {footerLinks.locations.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 hover:text-blue-400 text-sm font-poppins transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-blue-400 text-xs font-bold font-poppins hover:underline tracking-tight">View All Cities →</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-poppins text-center md:text-left">
            &copy; {new Date().getFullYear()} 2PixelCraft. All rights reserved. Registered in Rajkot, Gujarat.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-white text-xs font-poppins">Privacy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-white text-xs font-poppins">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
