import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/app/seo";
import {
  techs,
  getTechBySlug,
  getTechsByCategory,
  getCategoryById,
  techsUrl,
  allSlugs,
} from "@/app/technologies/data";

/* ─── Static generation ───────────────────────────────────── */

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

/* ─── Metadata ────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tech = getTechBySlug(slug);
  if (!tech) return {};

  return createPageMetadata({
    title: tech.metaTitle,
    description: tech.metaDescription,
    path: `/technologies/${slug}`,
    keywords: tech.metaKeywords,
  });
}

/* ─── Page ────────────────────────────────────────────────── */

export default async function TechPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tech = getTechBySlug(slug);
  if (!tech) notFound();

  const category = getCategoryById(tech.categoryId);
  const relatedTechs = tech.relatedSlugs
    .map((s) => techs.find((t) => t.slug === s))
    .filter(Boolean) as typeof techs;

  const categoryTechs = getTechsByCategory(tech.categoryId).filter(
    (t) => t.slug !== tech.slug
  );

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
        {
          "@type": "ListItem",
          position: 3,
          name: tech.name,
          item: techsUrl(tech.slug),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${tech.name} Development by 2PixelCraft`,
      description: tech.metaDescription,
      url: techsUrl(tech.slug),
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rajkot",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
      areaServed: "India",
      serviceType: `${tech.name} Development`,
    },
    ...(tech.faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tech.faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
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
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[260px] rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{ backgroundColor: tech.color }}
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 font-poppins text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/technologies" className="hover:text-gray-400 transition-colors">Technologies</Link>
              <span>/</span>
              <span className="text-gray-400">{tech.name}</span>
            </nav>

            <div className="flex items-start gap-5 mb-6">
              {/* Color badge */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-unbounded font-bold text-lg mt-1"
                style={{
                  backgroundColor: `${tech.color}18`,
                  color: tech.color,
                  border: `1px solid ${tech.color}35`,
                }}
              >
                {tech.abbr}
              </div>
              <div>
                <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                  {tech.categoryLabel}
                </span>
                <h1 className="font-unbounded font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mt-1">
                  {tech.headline}
                </h1>
              </div>
            </div>

            <p className="font-poppins text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              {tech.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#book-call"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold font-poppins text-sm px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Start a {tech.name} Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-poppins text-sm border border-white/20 hover:border-white/50 px-7 py-3 rounded-full transition-all duration-200"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* ── Body content ── */}
        <section className="px-6 lg:px-10 py-16 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-12 lg:gap-16">

            {/* Main body */}
            <div className="lg:col-span-7 mb-14 lg:mb-0">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                How We Use It
              </span>
              <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-white mt-2 mb-5 leading-snug">
                {tech.name} at 2PixelCraft
              </h2>
              <p className="font-poppins text-base text-gray-400 leading-[1.85]">
                {tech.body}
              </p>
            </div>

            {/* Use cases */}
            <div className="lg:col-span-5">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                What We Build With It
              </span>
              <h2 className="font-unbounded font-bold text-xl text-white mt-2 mb-5 leading-snug">
                Use Cases
              </h2>
              <ul className="space-y-3">
                {tech.useCases.map((uc) => (
                  <li key={uc} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="font-poppins text-sm text-gray-400 leading-relaxed">
                      {uc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        {tech.faqs.length > 0 && (
          <section className="px-6 lg:px-10 py-16 border-t border-white/[0.06]">
            <div className="max-w-3xl mx-auto">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                FAQ
              </span>
              <h2 className="font-unbounded font-bold text-2xl sm:text-3xl text-white mt-2 mb-8 leading-snug">
                Common questions about {tech.name}
              </h2>
              <div className="space-y-4">
                {tech.faqs.map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="bg-[#141414] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-colors duration-200"
                  >
                    <h3 className="font-poppins font-semibold text-white text-base leading-snug">
                      {q}
                    </h3>
                    <p className="mt-3 font-poppins text-sm text-gray-500 leading-relaxed">
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Related technologies ── */}
        {relatedTechs.length > 0 && (
          <section className="px-6 lg:px-10 py-16 border-t border-white/[0.06]">
            <div className="max-w-4xl mx-auto">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                Often Used Together
              </span>
              <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-white mt-2 mb-8 leading-snug">
                Related Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {relatedTechs.map((rt) => (
                  <Link
                    key={rt.slug}
                    href={`/technologies/${rt.slug}`}
                    className="group flex items-center gap-3 bg-[#141414] border border-white/[0.07] hover:border-white/[0.18] rounded-xl p-3.5 transition-all duration-200"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center font-unbounded font-bold text-[10px] flex-shrink-0"
                      style={{
                        backgroundColor: `${rt.color}18`,
                        color: rt.color,
                        border: `1px solid ${rt.color}28`,
                      }}
                    >
                      {rt.abbr}
                    </div>
                    <span className="font-poppins text-sm text-gray-400 group-hover:text-white transition-colors duration-200 leading-tight">
                      {rt.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── More in this category ── */}
        {categoryTechs.length > 0 && (
          <section className="px-6 lg:px-10 py-16 border-t border-white/[0.06]">
            <div className="max-w-4xl mx-auto">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                {category?.label}
              </span>
              <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-white mt-2 mb-8 leading-snug">
                More {category?.label} Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {categoryTechs.map((ct) => (
                  <Link
                    key={ct.slug}
                    href={`/technologies/${ct.slug}`}
                    className="group flex items-center gap-3 bg-[#141414] border border-white/[0.07] hover:border-white/[0.18] rounded-xl p-3.5 transition-all duration-200"
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center font-unbounded font-bold text-[10px] flex-shrink-0"
                      style={{
                        backgroundColor: `${ct.color}18`,
                        color: ct.color,
                        border: `1px solid ${ct.color}28`,
                      }}
                    >
                      {ct.abbr}
                    </div>
                    <span className="font-poppins text-sm text-gray-400 group-hover:text-white transition-colors duration-200 leading-tight">
                      {ct.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="px-6 lg:px-10 py-24 border-t border-white/[0.07]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-unbounded font-bold text-3xl sm:text-4xl text-white">
              Need a {tech.name} project built?
            </h2>
            <p className="mt-4 font-poppins text-gray-400 text-base sm:text-lg leading-relaxed">
              2PixelCraft has delivered production {tech.name} projects for
              businesses across India. Book a free call and let&apos;s talk
              about what you need to build.
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
                href="/technologies"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-poppins text-sm border border-white/20 hover:border-white/50 px-8 py-3.5 rounded-full transition-all duration-200"
              >
                View All Technologies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
