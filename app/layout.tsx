import type { Metadata } from "next";
import { Unbounded, Poppins } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechieButler — Your Technical Co-Founder",
  description:
    "We partner with founders and businesses to build great software, reliably and fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${poppins.variable}`}>
      <body className="bg-[#0f0f0f] text-white font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
