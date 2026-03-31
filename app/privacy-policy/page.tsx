import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn about how 2PixelCraft collects, uses, and protects your personal information in our Privacy Policy.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "1. Information We Collect",
    items: [
      { label: "Personal Information", text: "Name, email address, phone number, and any details you provide via our contact forms." },
      { label: "Usage Data", text: "Information about how you use our website, including IP address, browser type, and visited pages." },
    ],
  },
  {
    title: "2. How We Use Your Information",
    items: [
      { text: "To respond to your inquiries." },
      { text: "To improve our website and services." },
      { text: "To send important updates about our services." },
    ],
  },
  {
    title: "3. Data Security",
    body: "We use appropriate technical and organizational measures to protect your personal information from unauthorized access.",
  },
  {
    title: "4. Sharing of Information",
    body: "We do not sell or rent your personal data. We may share information only when legally required or to protect our rights.",
  },
  {
    title: "5. Your Rights",
    body: "You may request access, correction, or deletion of your personal data by contacting us.",
  },
  {
    title: "6. Refund Policy",
    body: "At 2PixelCraft, we do not offer automatic refunds. Refunds may be considered only through mutual agreement if there are genuine concerns with service delivery. Once a project milestone is approved and payment is made, it is considered final unless otherwise agreed.",
  },
];

export default function PrivacyPolicy() {
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
          <h1 className="font-unbounded text-3xl lg:text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last Updated: Aug 8, 2025</p>
        </div>

        <p className="text-gray-300 mb-10 leading-relaxed">
          At 2PixelCraft, we respect your privacy and are committed to protecting your personal information.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-unbounded text-lg font-semibold mb-4 text-white">{section.title}</h2>

              {section.body && (
                <p className="text-gray-300 leading-relaxed">{section.body}</p>
              )}

              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed">
                      {"label" in item ? (
                        <>
                          <span className="text-white font-medium">{item.label}:</span>{" "}
                          {item.text}
                        </>
                      ) : (
                        <span className="flex gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {item.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 border-t border-white/[0.08] pt-10">
          <h2 className="font-unbounded text-lg font-semibold mb-5 text-white">Contact for Privacy Queries</h2>
          <div className="flex flex-col gap-3 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors duration-200">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors duration-200">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
