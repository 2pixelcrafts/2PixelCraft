import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | 2PixelCraft",
  description: "The page you're looking for doesn't exist. Head back to 2PixelCraft's homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-6 text-center">
      <div className="relative">
        <span className="font-unbounded font-bold text-[10rem] sm:text-[14rem] leading-none text-white/[0.04] select-none pointer-events-none">
          404
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <p className="font-poppins text-xs uppercase tracking-[0.25em] text-blue-400">
            Page not found
          </p>
          <h1 className="font-unbounded font-bold text-2xl sm:text-3xl text-white leading-tight max-w-sm">
            This page doesn&apos;t exist
          </h1>
          <p className="font-poppins text-sm text-gray-500 max-w-xs leading-relaxed">
            It may have been moved, deleted, or you may have mistyped the URL.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold font-poppins text-sm px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            >
              Back to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-poppins text-sm border border-white/20 hover:border-white/50 px-7 py-3 rounded-full transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
