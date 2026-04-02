import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/app/seo";
import { categories, techs, getTechsByCategory } from "@/app/technologies/data";

export const metadata = createPageMetadata({
  title: "Technologies We Use — React, Next.js, Laravel, Flutter & More",
  description:
    "2PixelCraft builds websites, apps, and software using React.js, Next.js, Node.js, Laravel, Flutter, and more. Explore our full tech stack and see how we deliver fast, scalable digital products for businesses in India.",
  path: "/technologies",
  keywords: [
    "2PixelCraft tech stack",
    "React.js development agency Rajkot",
    "Next.js development company India",
    "Node.js backend development India",
    "Laravel development agency Rajkot",
    "Flutter app development India",
    "React Native app development agency",
    "TypeScript development India",
    "full stack web development Rajkot",
    "custom software development India",
    "web development technologies used",
    "best web development tech stack India",
    "mobile app development Flutter India",
    "PHP Laravel agency India",
    "MongoDB PostgreSQL MySQL development",
    "Tailwind CSS Next.js agency",
    "2PixelCraft React development",
    "2PixelCraft Flutter development",
    "2PixelCraft Laravel projects",
    "agency tech stack India 2025",
  ],
});

const faqItems = [
  {
    q: "Does 2PixelCraft build websites using React.js and Next.js?",
    a: "Yes. React.js and Next.js are at the core of every website and web app 2PixelCraft builds. We use Next.js for its performance advantages — server-side rendering, static generation, and edge-ready routing — ensuring every site we deliver is fast, SEO-friendly, and production-grade.",
  },
  {
    q: "Can 2PixelCraft develop a mobile app using Flutter?",
    a: "Absolutely. 2PixelCraft builds cross-platform mobile applications using Flutter and Dart. Flutter allows us to deliver native-quality iOS and Android apps from a single codebase, which means faster delivery and lower cost without compromising on performance or design.",
  },
  {
    q: "Does 2PixelCraft work with Laravel and PHP?",
    a: "Yes. Laravel is 2PixelCraft's primary choice for complex backend systems and enterprise-grade web applications. We use it for projects that require robust authentication, queuing, API development, and database management — particularly for local businesses across India.",
  },
  {
    q: "What backend technology does 2PixelCraft use for Node.js projects?",
    a: "2PixelCraft uses Node.js with Express.js to build scalable REST APIs and server-side applications. Node's event-driven architecture makes it ideal for real-time features, high-concurrency systems, and projects where the frontend and backend share JavaScript or TypeScript.",
  },
  {
    q: "Which databases does 2PixelCraft use?",
    a: "2PixelCraft works with MySQL, PostgreSQL, MongoDB, and Firebase depending on the project's data requirements. For relational data we prefer PostgreSQL; for document-based or real-time needs we use MongoDB or Firebase. We use Prisma as our ORM on TypeScript projects for type-safe database access.",
  },
  {
    q: "Is 2PixelCraft a full-stack development agency?",
    a: "Yes. 2PixelCraft is a full-stack digital agency based in Rajkot, India. We handle the complete product lifecycle — from UI/UX design in Figma, to frontend development in React/Next.js, backend in Node.js or Laravel, mobile in Flutter, and deployment on Vercel or AWS.",
  },
  {
    q: "Does 2PixelCraft use TypeScript for development?",
    a: "Yes, TypeScript is our default for all JavaScript projects. Using TypeScript across the stack — from Next.js frontends to Node.js backends — lets us catch errors at build time, write self-documenting code, and deliver software that's easier to maintain long-term.",
  },
  {
    q: "What tools does 2PixelCraft use for UI/UX design?",
    a: "2PixelCraft uses Figma for all UI/UX design work — wireframes, interactive prototypes, design systems, and final production-ready handoffs. Every project starts in Figma before a single line of code is written, ensuring the final product matches the design precisely.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Technologies",
        item: `${siteConfig.url}/technologies`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Technologies 2PixelCraft Uses — React, Next.js, Laravel, Flutter & More",
    description:
      "Explore the complete technology stack 2PixelCraft uses to build websites, mobile apps, and custom software for businesses across India.",
    url: `${siteConfig.url}/technologies`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technologies Used by 2PixelCraft",
    description:
      "The full stack of programming languages, frameworks, and platforms used by 2PixelCraft to build digital products.",
    url: `${siteConfig.url}/technologies`,
    numberOfItems: techs.length,
    itemListElement: techs.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${siteConfig.url}/technologies/${t.slug}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

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

      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Navbar />

      <main className="bg-[#0f0f0f] min-h-screen">

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)",
            }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block font-poppins text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
              2PixelCraft Tech Stack
            </span>
            <h1 className="font-unbounded font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Technologies We{" "}
              <span className="relative inline-block">
                Build With
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 rounded-full" />
              </span>
            </h1>
            <p className="mt-6 font-poppins text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              From React and Next.js to Laravel, Flutter, and Node.js —
              2PixelCraft uses a proven, production-tested stack to build
              websites, mobile apps, and custom software for businesses across
              India. Every technology we use is chosen for performance,
              reliability, and long-term maintainability.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-10">
              {[
                { value: `${techs.length}+`, label: "Technologies" },
                { value: `${categories.length}`, label: "Disciplines" },
                { value: "100%", label: "Production-Tested" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-unbounded font-bold text-3xl text-white">{value}</p>
                  <p className="font-poppins text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marquee Strip ── */}
        <div className="relative border-y border-white/[0.06] py-4 overflow-hidden bg-[#0a0a0a]">
          <div className="marquee-track select-none" aria-hidden="true">
            {[...techs, ...techs].map((tech, i) => (
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
            {categories.map((cat) => {
              const catTechs = getTechsByCategory(cat.id);
              return (
                <div
                  key={cat.id}
                  className="border-b border-white/[0.06] last:border-b-0 py-20 lg:grid lg:grid-cols-12 lg:gap-16"
                >
                  {/* Left: sticky category info */}
                  <div className="lg:col-span-4 mb-14 lg:mb-0">
                    <div className="lg:sticky lg:top-28">
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
                          style={{ backgroundColor: catTechs[0]?.color }}
                        />
                        {catTechs.length} technologies
                      </div>
                    </div>
                  </div>

                  {/* Right: tech rows */}
                  <div className="lg:col-span-8">
                    <div className="space-y-1">
                      {catTechs.map((tech, ti) => (
                        <TechRow key={tech.slug} tech={tech} index={ti} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="px-6 lg:px-10 py-20 border-t border-white/[0.07]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block font-poppins text-xs uppercase tracking-[0.2em] text-blue-400 mb-3">
                Common Questions
              </span>
              <h2 className="font-unbounded font-bold text-3xl sm:text-4xl text-white leading-tight">
                Your stack questions, answered.
              </h2>
              <p className="mt-4 font-poppins text-gray-500 text-base leading-relaxed">
                Everything clients ask before working with 2PixelCraft on a new project.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map(({ q, a }, i) => (
                <div
                  key={i}
                  className="bg-[#141414] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-colors duration-200"
                >
                  <h3 className="font-poppins font-semibold text-white text-base leading-snug">{q}</h3>
                  <p className="mt-3 font-poppins text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 lg:px-10 py-24 border-t border-white/[0.07]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-unbounded font-bold text-3xl sm:text-4xl text-white">
              Ready to build something?
            </h2>
            <p className="mt-4 font-poppins text-gray-400 text-base sm:text-lg leading-relaxed">
              Whether it&apos;s a React website, a Flutter app, or a Laravel
              backend — 2PixelCraft has the stack and the experience to deliver
              it. Book a free call and let&apos;s talk about your project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#book-call"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold font-poppins text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Book a Free Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-poppins font-medium text-sm border border-white/20 hover:border-white/50 px-8 py-3.5 rounded-full transition-all duration-200"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ─── Tech Row ────────────────────────────────────────────── */

type TechType = (typeof techs)[number];

function TechRow({ tech, index }: { tech: TechType; index: number }) {
  return (
    <Link
      href={`/technologies/${tech.slug}`}
      className="group/row relative flex items-start gap-5 px-5 py-5 rounded-2xl hover:bg-white/[0.03] transition-colors duration-200"
    >
      <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-0.5">
        <span className="font-poppins text-[10px] text-white/20 tabular-nums w-4 text-center">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="w-2 h-2 rounded-full transition-all duration-300 group-hover/row:scale-125"
          style={{ backgroundColor: tech.color }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-unbounded font-semibold text-[15px] text-white leading-tight">
          {tech.name}
        </h3>
        <p className="mt-1.5 font-poppins text-sm text-gray-500 leading-relaxed">
          {tech.description}
        </p>
      </div>

      {/* Arrow — appears on hover */}
      <div className="flex-shrink-0 self-center opacity-0 group-hover/row:opacity-100 transition-all duration-200 translate-x-2 group-hover/row:translate-x-0">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div
        className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: tech.color }}
      />
    </Link>
  );
}
