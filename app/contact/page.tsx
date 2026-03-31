import type { Metadata } from "next";
import ContactPage from "@/components/Contact";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with 2PixelCraft for web design, app development, and custom software solutions. We help local businesses grow with dependable execution.",
  path: "/contact",
});

export default function Contact() {
  return <ContactPage />;
}
