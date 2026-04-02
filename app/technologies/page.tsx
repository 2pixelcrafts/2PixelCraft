import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/app/seo";

export const metadata = createPageMetadata({
  title: "Technologies We Build With",
  description:
    "From React and Next.js to Laravel, Flutter, and Node.js — explore the full stack of technologies 2PixelCraft uses to build fast, scalable, and production-ready digital products.",
  path: "/technologies",
  keywords: [
    "React.js development agency India",
    "Next.js web development Rajkot",
    "Node.js backend development",
    "Laravel development India",
    "Flutter app development agency",
    "full stack development agency India",
    "TypeScript development agency",
    "React Native app development",
    "custom software stack India",
    "2PixelCraft tech stack",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Technologies We Build With | 2PixelCraft",
  description:
    "The complete technology stack used by 2PixelCraft — React, Next.js, Node.js, Laravel, Flutter, and more.",
  url: `${siteConfig.url}/technologies`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

type Tech = {
  name: string;
  abbr: string;
  description: string;
  color: string;
};

type Category = {
  id: string;
  index: string;
  label: string;
  tagline: string;
  description: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    id: "frontend",
    index: "01",
    label: "Frontend",
    tagline: "Interfaces that feel as good as they look.",
    description:
      "We craft fast, accessible UIs that convert — using the best tools the modern web has to offer.",
    techs: [
      {
        name: "React.js",
        abbr: "Re",
        description:
          "Component-driven UIs with a rich ecosystem and blazing-fast rendering — the backbone of every modern web app we build.",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        abbr: "Nx",
        description:
          "Full-stack React framework with SSR, SSG, and edge-ready routing. Our default choice for production websites.",
        color: "#ffffff",
      },
      {
        name: "TypeScript",
        abbr: "TS",
        description:
          "Typed JavaScript that catches bugs at build time, not in production. Every project we ship is TypeScript-first.",
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        abbr: "TW",
        description:
          "Utility-first CSS that lets us build pixel-precise, fully responsive designs without leaving the markup.",
        color: "#38BDF8",
      },
      {
        name: "HTML & CSS",
        abbr: "HC",
        description:
          "Semantic, accessible markup paired with clean, modern CSS — the foundation everything else is built on.",
        color: "#E34F26",
      },
    ],
  },
  {
    id: "backend",
    index: "02",
    label: "Backend",
    tagline: "Reliable APIs and server logic that scale.",
    description:
      "From lightweight REST APIs to complex enterprise systems — we choose the right server stack for your use case.",
    techs: [
      {
        name: "Node.js",
        abbr: "No",
        description:
          "Event-driven JavaScript runtime built for fast, scalable server-side applications and real-time systems.",
        color: "#5FA04E",
      },
      {
        name: "Express.js",
        abbr: "Ex",
        description:
          "Minimal, unopinionated Node.js framework — our go-to for building clean, well-structured REST APIs.",
        color: "#ffffff",
      },
      {
        name: "Laravel",
        abbr: "La",
        description:
          "Elegant PHP framework with a powerful toolset for building enterprise-grade applications with speed.",
        color: "#FF2D20",
      },
      {
        name: "PHP",
        abbr: "Ph",
        description:
          "Battle-tested, server-side scripting language — powering a significant portion of the modern web.",
        color: "#7A86B8",
      },
      {
        name: "REST APIs",
        abbr: "AP",
        description:
          "Clean, versioned API design — the connective tissue between your frontend, mobile app, and third-party services.",
        color: "#10B981",
      },
    ],
  },
  {
    id: "mobile",
    index: "03",
    label: "Mobile",
    tagline: "Native-quality apps for iOS & Android.",
    description:
      "One codebase, two platforms, zero compromise on performance or user experience.",
    techs: [
      {
        name: "Flutter",
        abbr: "Fl",
        description:
          "Google's cross-platform SDK — delivers truly native performance on both iOS and Android from a single codebase.",
        color: "#54C5F8",
      },
      {
        name: "React Native",
        abbr: "RN",
        description:
          "Build native mobile apps using React — leverage existing web expertise to ship mobile products faster.",
        color: "#61DAFB",
      },
      {
        name: "Dart",
        abbr: "Da",
        description:
          "Optimised, strongly-typed language that powers Flutter's performance — compiles to native ARM code.",
        color: "#0175C2",
      },
    ],
  },
  {
    id: "database",
    index: "04",
    label: "Databases",
    tagline: "Data stored, structured, and retrieved with precision.",
    description:
      "We match the database to the data — not the other way around.",
    techs: [
      {
        name: "MySQL",
        abbr: "My",
        description:
          "The world's most popular open-source relational database — reliable, well-supported, and battle-hardened.",
        color: "#00758F",
      },
      {
        name: "PostgreSQL",
        abbr: "Pg",
        description:
          "Advanced open-source relational database with powerful querying, JSON support, and high reliability.",
        color: "#336791",
      },
      {
        name: "MongoDB",
        abbr: "Mg",
        description:
          "Document-oriented NoSQL for flexible, schema-less data modelling — ideal for rapidly evolving data structures.",
        color: "#47A248",
      },
      {
        name: "Firebase",
        abbr: "Fb",
        description:
          "Google's realtime database and backend-as-a-service platform — perfect for rapid mobile and web development.",
        color: "#FFCA28",
      },
      {
        name: "Prisma",
        abbr: "Pr",
        description:
          "Next-gen ORM for Node.js and TypeScript — type-safe database access that eliminates an entire class of runtime errors.",
        color: "#5A67D8",
      },
    ],
  },
  {
    id: "tools",
    index: "05",
    label: "Tools & Platforms",
    tagline: "The infrastructure behind every delivery.",
    description:
      "The tools we use to build, ship, iterate, and maintain — reliably, every single time.",
    techs: [
      {
        name: "Git & GitHub",
        abbr: "Gh",
        description:
          "Version control and collaborative code management — every project is tracked, every change is recoverable.",
        color: "#F05032",
      },
      {
        name: "Docker",
        abbr: "Do",
        description:
          "Containerised environments for consistent, reproducible builds — dev, staging, and production all stay in sync.",
        color: "#2496ED",
      },
      {
        name: "Vercel",
        abbr: "Ve",
        description:
          "Zero-config deployment platform built for Next.js — instant rollouts, edge caching, and preview deployments.",
        color: "#ffffff",
      },
      {
        name: "AWS",
        abbr: "AW",
        description:
          "Cloud infrastructure for hosting, storage, serverless functions, and the scale that enterprise projects demand.",
        color: "#FF9900",
      },
      {
        name: "Figma",
        abbr: "Fi",
        description:
          "Collaborative design tool for wireframes, prototypes, and production-ready UI handoffs — where every project begins.",
        color: "#F24E1E",
      },
    ],
  },
];

const allTechs = categories.flatMap((c) => c.techs);

export default function TechnologiesPage() {
  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-left 40s linear infinite;
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-[#0f0f0f] min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
          {/* Diagonal stripe texture (matches site's own Hero) */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)",
            }}
          />
          {/* Blue glow blob */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block font-poppins text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
              Our Tech Stack
            </span>
            <h1 className="font-unbounded font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Built With the{" "}
              <span className="relative inline-block">
                Right Tools
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 rounded-full" />
              </span>
            </h1>
            <p className="mt-6 font-poppins text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t chase trends — we choose proven technologies that
              deliver. Every tool in our stack is selected for performance,
              reliability, and long-term maintainability.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-10">
              {[
                { value: `${allTechs.length}+`, label: "Technologies" },
                { value: `${categories.length}`, label: "Disciplines" },
                { value: "1", label: "Goal — Your Growth" },
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

        {/* ── Marquee Strip ── */}
        <div className="relative border-y border-white/[0.06] py-4 overflow-hidden bg-[#0a0a0a]">
          <div className="marquee-track select-none">
            {/* Two full copies for a seamless loop */}
            {[...allTechs, ...allTechs].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 mx-6 font-unbounded text-sm font-medium whitespace-nowrap"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-white/40">{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Category Sections ── */}
        <section className="px-6 lg:px-10 py-8">
          <div className="max-w-6xl mx-auto">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group/cat border-b border-white/[0.06] last:border-b-0 py-20 lg:grid lg:grid-cols-12 lg:gap-16"
              >
                {/* ── Left: sticky category info ── */}
                <div className="lg:col-span-4 mb-14 lg:mb-0">
                  <div className="lg:sticky lg:top-28">
                    {/* Large faded index */}
                    <span className="font-unbounded font-bold text-[clamp(5rem,10vw,8rem)] leading-none text-white/[0.04] select-none block -ml-1 -mt-4 mb-2">
                      {cat.index}
                    </span>

                    <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                      {cat.label}
                    </span>
                    <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-white mt-2 leading-snug">
                      {cat.tagline}
                    </h2>
                    <p className="mt-3 font-poppins text-sm text-gray-500 leading-relaxed max-w-xs">
                      {cat.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 font-poppins text-xs text-gray-600 border border-white/[0.07] rounded-full px-3 py-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: cat.techs[0].color }}
                      />
                      {cat.techs.length} technologies
                    </div>
                  </div>
                </div>

                {/* ── Right: tech rows ── */}
                <div className="lg:col-span-8">
                  <div className="space-y-1">
                    {cat.techs.map((tech, ti) => (
                      <TechRow key={tech.name} tech={tech} index={ti} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 lg:px-10 py-24 border-t border-white/[0.07]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-unbounded font-bold text-3xl sm:text-4xl text-white">
              Don&apos;t see your stack?
            </h2>
            <p className="mt-4 font-poppins text-gray-400 text-base sm:text-lg leading-relaxed">
              We adapt to your existing infrastructure. If you have a specific
              technology requirement, let&apos;s talk — we&apos;ll find the
              right solution together.
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

/* ─── Tech Row ───────────────────────────────────────────── */

function TechRow({ tech, index }: { tech: Tech; index: number }) {
  return (
    <div className="group/row relative flex items-start gap-5 px-5 py-5 rounded-2xl hover:bg-white/[0.03] transition-colors duration-200 cursor-default">
      {/* Left: index + color dot */}
      <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-0.5">
        <span className="font-poppins text-[10px] text-white/20 tabular-nums w-4 text-center">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="w-2 h-2 rounded-full transition-all duration-300 group-hover/row:scale-125 group-hover/row:shadow-[0_0_10px_currentColor]"
          style={{ backgroundColor: tech.color, color: tech.color }}
        />
      </div>

      {/* Center: name + description */}
      <div className="flex-1 min-w-0">
        <h3 className="font-unbounded font-semibold text-[15px] text-white leading-tight">
          {tech.name}
        </h3>
        <p className="mt-1.5 font-poppins text-sm text-gray-500 leading-relaxed">
          {tech.description}
        </p>
      </div>

      {/* Right: abbr badge — appears on hover */}
      <div
        className="flex-shrink-0 self-center w-9 h-9 rounded-xl flex items-center justify-center font-unbounded font-bold text-xs opacity-0 group-hover/row:opacity-100 transition-all duration-200 translate-x-2 group-hover/row:translate-x-0"
        style={{
          backgroundColor: `${tech.color}14`,
          color: tech.color,
          border: `1px solid ${tech.color}28`,
        }}
      >
        {tech.abbr}
      </div>

      {/* Subtle left glow line on hover */}
      <div
        className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: tech.color }}
      />
    </div>
  );
}
