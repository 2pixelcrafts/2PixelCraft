import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms and Conditions",
  description:
    "Review the terms and conditions for using 2PixelCraft's website and services.",
  path: "/terms",
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By using our website, you confirm that you are at least 18 years of age or using the site under the supervision of a parent or legal guardian.",
  },
  {
    title: "2. Services",
    body: "2PixelCraft works closely with startup founders and CTOs to build and ship products efficiently. All services are subject to mutual agreement and are delivered according to agreed timelines and deliverables.",
  },
  {
    title: "3. Payment Terms",
    items: [
      "All payments must be made in full as per the agreed terms before or during the provision of services.",
      "We accept payments via secure channels and other approved methods.",
      "Prices are subject to change without notice.",
    ],
  },
  {
    title: "4. Intellectual Property",
    body: "All designs, code, content, and materials developed by 2PixelCraft remain our intellectual property unless otherwise agreed in writing.",
  },
  {
    title: "5. Limitation of Liability",
    body: "We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
  },
  {
    title: "6. Governing Law",
    body: "These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in Ahmedabad, Gujarat.",
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 mb-12 group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-unbounded text-3xl lg:text-4xl font-bold mb-3">Terms and Conditions</h1>
          <p className="text-gray-400 text-sm">Last Updated: Aug 8, 2025</p>
        </div>

        <p className="text-gray-300 mb-10 leading-relaxed">
          Welcome to 2PixelCraft. By accessing or using our website (https://www.2pixelcraft.com/), you agree to comply
          with and be bound by the following terms and conditions. If you do not agree, please discontinue using our
          site.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-unbounded text-lg font-semibold mb-4 text-white">{section.title}</h2>

              {"body" in section && section.body && (
                <p className="text-gray-300 leading-relaxed">{section.body}</p>
              )}

              {"items" in section && section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
