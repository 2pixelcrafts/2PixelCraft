import type { Metadata } from "next";
import ContactPage from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | 2PixelCraft",
  description: "Get in touch with the 2PixelCraft team. We respond within one business day.",
};

export default function Contact() {
  return <ContactPage />;
}
