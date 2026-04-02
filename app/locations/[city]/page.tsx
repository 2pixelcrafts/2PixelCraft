import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/app/seo";
import { getCityBySlug, allCitySlugs, featuredCities } from "@/app/locations/data";

/* ─── Static generation ───────────────────────────────────── */
// Pre-render our featured cities, but allow dynamic pages for ALL others
export async function generateStaticParams() {
  return allCitySlugs.map((city) => ({ city }));
}

// CRITICAL: This pre-renders ALL 100+ cities at build time for max SEO
export const dynamicParams = false;

/* ─── Metadata ────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) return {};

  return createPageMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/locations/${citySlug}`,
    keywords: city.metaKeywords,
  });
}

/* ─── Page ────────────────────────────────────────────────── */
export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  
  // getCityBySlug now returns dynamic data even if it's not in the hardcoded list
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  // For the "Other Cities" section, we show a mix of featured cities
  const otherCities = featuredCities.filter((c) => c.slug !== city.slug).slice(0, 5);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: `${siteConfig.url}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: city.name,
          item: `${siteConfig.url}/locations/${city.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `${siteConfig.name} - IT Company in ${city.name}`,
      description: city.metaDescription,
      url: `${siteConfig.url}/locations/${city.slug}`,
      telephone: siteConfig.phone,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: city.state,
        addressCountry: city.country === "USA" ? "US" : "IN",
      },
      geo: {
        "@type": "GeoCircle",
        itemOffered: {
          "@type": "Service",
          name: "Web & App Development",
        },
      },
      areaServed: {
        "@type": "City",
        name: city.name
      },
      image: `${siteConfig.url}/logo.png`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: city.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
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
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[260px] rounded-full blur-[100px] opacity-20 pointer-events-none bg-blue-600"
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 font-poppins text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-gray-400 transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-gray-400">IT Company in {city.name}</span>
            </nav>

            <div className="flex items-start gap-5 mb-6">
              <div>
                <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                  Global Expertise, Local Focus in {city.name}
                </span>
                <h1 className="font-unbounded font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mt-1">
                  {city.headline}
                </h1>
              </div>
            </div>

            <p className="font-poppins text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              {city.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#book-call"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold font-poppins text-sm px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Start Your {city.name} Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
                2PixelCraft in {city.name}
              </span>
              <h2 className="font-unbounded font-bold text-xl sm:text-2xl text-white mt-2 mb-5 leading-snug">
                Your Strategic Technology Partner
              </h2>
              <p className="font-poppins text-base text-gray-400 leading-[1.85]">
                {city.body}
              </p>
            </div>

            {/* Services for city */}
            <div className="lg:col-span-5">
              <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
                Service Offerings
              </span>
              <h2 className="font-unbounded font-bold text-xl text-white mt-2 mb-5 leading-snug">
                Services in {city.name}
              </h2>
              <ul className="space-y-3">
                {city.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500" />
                    <span className="font-poppins text-sm text-gray-400 leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── City FAQ ── */}
        <section className="px-6 lg:px-10 py-20 border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-unbounded font-bold text-2xl text-white mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {city.faqs.map((faq, i) => (
                 <div key={i} className="bg-[#141414] border border-white/[0.07] rounded-2xl p-6">
                    <h3 className="font-poppins font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="font-poppins text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 lg:px-10 py-24 border-t border-white/[0.07]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-unbounded font-bold text-3xl sm:text-4xl text-white">
              Ready to grow your {city.name} business?
            </h2>
            <p className="mt-4 font-poppins text-gray-400 text-base sm:text-lg leading-relaxed">
              2PixelCraft is helping businesses in {city.name} build better digital products.
              Book a free call today and let&apos;s discuss your vision.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
