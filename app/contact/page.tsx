import type { Metadata } from "next";
import ContactPage from "@/components/Contact";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact 2PixelCraft",
  description:
    "Talk to 2PixelCraft about web design, website development, app development, or custom software for your business.",
  path: "/contact",
  keywords: [
    "contact web design agency",
    "contact app development agency",
    "contact custom software agency",
  ],
});

export default function Contact() {
  return <ContactPage />;
}
