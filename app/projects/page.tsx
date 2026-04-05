import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { createPageMetadata, siteConfig } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Projects",
  description:
    "Explore 2PixelCraft's portfolio of web design, e-commerce, and custom software projects. We've helped local businesses in India transform their digital presence with high-performance, conversion-focused websites.",
  path: "/projects",
  keywords: [
    "2PixelCraft portfolio",
    "2PixelCraft projects",
    "web design portfolio India",
    "e-commerce website design India",
    "luxury brand website Rajkot",
    "custom website development examples",
    "Next.js website portfolio",
    "Rajkot web design portfolio",
    "2PixelCraft work showcase",
    "website design case studies India",
  ],
});

const projects = [
  {
    name: "Luxe",
    category: "Luxury Brand",
    description:
      "A premium luxury brand website crafted for an elite clientele. High-end aesthetics, smooth motion design, and a conversion-focused layout that communicates exclusivity.",
    services: ["Web Design", "Development", "UI/UX"],
    imageSrc: "/project-screenshots/luxe.png",
    imageAlt: "Luxe luxury brand website designed and developed by 2PixelCraft",
    liveUrl: "https://luxe.2pixelcraft.com/" as `https://${string}`,
  },
  {
    name: "Radhika",
    category: "Business Website",
    description:
      "A modern, professional business website built to establish strong brand authority and drive meaningful customer engagement for a local business in India.",
    services: ["Web Design", "Development"],
    imageSrc: "/projects/radhika.png",
    imageAlt: "Radhika business website designed and developed by 2PixelCraft",
    liveUrl: undefined as `https://${string}` | undefined,
  },
  {
    name: "Timect Watches",
    category: "E-Commerce",
    description:
      "A performance-driven e-commerce platform for a premium watch brand — refined product showcase, optimised for conversions, fast page loads and seamless checkout.",
    services: ["E-Commerce", "Web Design", "Development"],
    imageSrc: "/project-screenshots/timect.png",
    imageAlt:
      "Timect Watches e-commerce website designed and developed by 2PixelCraft",
    liveUrl: "https://timectwatches.2pixelcraft.com/" as `https://${string}`,
  },
  {
    name: "Titan Fitness",
    category: "Fitness & Wellness",
    description:
      "A bold, high-energy gym website that captures the Titan brand's intensity and converts visitors into members with strategic CTAs and motivating visuals.",
    services: ["Web Design", "Development", "Branding"],
    imageSrc: "/project-screenshots/titan.png",
    imageAlt:
      "Titan Fitness gym website designed and developed by 2PixelCraft",
    liveUrl: "https://titan-fitness.2pixelcraft.com/" as `https://${string}`,
  },
  {
    name: "Wistoan",
    category: "Luxury E-Commerce",
    description:
      "A premium luxury watches e-commerce experience where every design detail communicates craftsmanship, exclusivity, and trust to drive high-value conversions.",
    services: ["E-Commerce", "UI/UX", "Web Design"],
    imageSrc: "/project-screenshots/wistoan.png",
    imageAlt:
      "Wistoan luxury watches website designed and developed by 2PixelCraft",
    liveUrl: "https://wistoanwatches.com/" as `https://${string}`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "2PixelCraft Portfolio — Web Design & Development Projects",
  description:
    "A curated portfolio of websites and digital products designed and developed by 2PixelCraft for businesses across India.",
  url: `${siteConfig.url}/projects`,
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.name,
      description: p.description,
      url: p.liveUrl ?? siteConfig.url,
      creator: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-[#0f0f0f] min-h-screen">
        {/* ── Hero ── */}
        <section className="pt-32 pb-16 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block font-poppins text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
              Portfolio
            </span>
            <h1 className="font-unbounded font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Work We&apos;re{" "}
              <span className="relative inline-block">
                Proud Of
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 rounded-full" />
              </span>
            </h1>
            <p className="mt-6 font-poppins text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Every project we ship is built for real business outcomes — fast,
              conversion-optimised, and crafted to make your brand stand out.
              Here&apos;s a selection of what we&apos;ve built for local
              businesses across India.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {[
                { value: "5+", label: "Projects Shipped" },
                { value: "100%", label: "On-Time Delivery" },
                { value: "4+", label: "Industries Served" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-unbounded font-bold text-3xl text-white">
                    {value}
                  </p>
                  <p className="font-poppins text-sm text-gray-500 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ScrollStack ── */}
        <section className="px-4 sm:px-6 lg:px-10 pb-24">
          <div className="max-w-5xl mx-auto">
            <ScrollStack
              useWindowScroll={true}
              itemDistance={150}
              itemScale={0.05}
              itemStackDistance={30}
              stackPosition="10%"
              scaleEndPosition="5%"
              baseScale={0.88}
            >
              {projects.map((project, i) => (
                <ScrollStackItem
                  key={project.name}
                  itemClassName="!h-[28rem] sm:!h-[32rem] !rounded-[24px] sm:!rounded-[32px] !border-0 !bg-transparent !p-0 overflow-hidden !shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
                >
                  <ProjectCard project={project} index={i} />
                </ScrollStackItem>
              ))}
              {/* Spacer — pushes scroll-stack-end further down so the last
                  card's pinEnd is far enough from Lenis's deceleration zone,
                  preventing the flicker at the end of the stack. */}
              <div className="h-[22rem]" aria-hidden="true" />
            </ScrollStack>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 lg:px-10 py-20 border-t border-white/[0.07]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-unbounded font-bold text-3xl sm:text-4xl text-white">
              Your project could be next.
            </h2>
            <p className="mt-4 font-poppins text-gray-400 text-base sm:text-lg">
              Let&apos;s build something that actually grows your business. Book
              a free strategy call — no obligation, just clarity.
            </p>
            <Link
              href="/#book-call"
              className="mt-8 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold font-poppins text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              Book a Free Call
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ── Card components ─────────────────────────────────────── */

type Project = (typeof projects)[number];

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block font-poppins text-[10px] uppercase tracking-[0.18em] text-blue-300 bg-blue-500/20 border border-blue-400/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
      {category}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="relative h-full w-full group overflow-hidden rounded-[24px] sm:rounded-[32px]">
      {/* Full-bleed screenshot */}
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        fill
        preload={index === 0}
        sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1280px) 90vw, 1024px"
        quality={90}
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      {/* Gradient overlay — darkens bottom for readable text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/5" />

      {/* Top-right project number */}
      <span className="absolute top-5 right-6 font-unbounded font-bold text-5xl sm:text-6xl text-white/[0.12] select-none leading-none pointer-events-none">
        {num}
      </span>

      {/* Content pinned to bottom */}
      <div className="absolute inset-x-0 bottom-0 px-6 sm:px-8 pb-6 sm:pb-8 pt-16">
        {/* Row: category badge + live link */}
        <div className="flex items-center justify-between mb-3">
          <CategoryBadge category={project.category} />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} live website`}
              className="inline-flex items-center gap-1.5 font-poppins text-xs font-medium text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 px-3 py-1.5 rounded-full backdrop-blur-sm transition-all duration-200"
            >
              Live Site
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Project name */}
        <h2 className="font-unbounded font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
          {project.name}
        </h2>

        {/* Description */}
        <p className="font-poppins text-sm sm:text-base text-white/60 mt-2 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Service tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.services.map((s) => (
            <span
              key={s}
              className="font-poppins text-[11px] text-white/50 bg-white/8 border border-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
