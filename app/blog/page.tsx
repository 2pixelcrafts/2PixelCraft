import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/app/seo";

export const metadata = createPageMetadata({
  title: "Blog — Web Design, Development & Tech Tips",
  description:
    "Expert insights on web design, app development, custom software, and digital growth strategies for local businesses — from the 2PixelCraft team in Rajkot, India.",
  path: "/blog",
  keywords: [
    "web design tips India",
    "app development blog",
    "Next.js tutorials",
    "digital growth for local businesses",
    "website development guide",
    "2PixelCraft blog",
    "software development insights Rajkot",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "2PixelCraft Blog",
  description:
    "Expert insights on web design, app development, and digital growth for local businesses.",
  url: `${siteConfig.url}/blog`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="min-h-screen bg-[#0f0f0f]">
        {/* Hero */}
        <section className="relative pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-poppins text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-400">Blog</span>
            </nav>

            <span className="font-poppins text-xs uppercase tracking-[0.2em] text-blue-400">
              Insights &amp; Guides
            </span>
            <h1 className="font-unbounded font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mt-2">
              The 2PixelCraft Blog
            </h1>
            <p className="mt-5 font-poppins text-lg text-gray-400 max-w-2xl leading-relaxed">
              Practical guides on web design, app development, and digital
              growth — written for local businesses and ambitious founders.
            </p>
          </div>
        </section>

        {/* Coming soon / placeholder */}
        <section className="px-6 lg:px-10 pb-32 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto pt-20 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-poppins text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              Coming Soon
            </div>
            <h2 className="font-unbounded font-bold text-2xl sm:text-3xl text-white mb-4">
              Articles dropping soon
            </h2>
            <p className="font-poppins text-gray-500 text-base max-w-md mx-auto leading-relaxed mb-10">
              We&apos;re writing in-depth guides on everything from Next.js
              performance to converting visitors into clients. Check back soon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/technologies"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold font-poppins text-sm px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              >
                Browse Our Tech Stack
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-poppins text-sm border border-white/20 hover:border-white/50 px-7 py-3 rounded-full transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
