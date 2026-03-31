import { createPageMetadata } from "@/app/seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyNotUs from "@/components/WhyNotUs";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import NobrainerOffer from "@/components/NobrainerOffer";
import Projects from "@/components/Projects";
import GoodVsGreat from "@/components/GoodVsGreat";
import Footer from "@/components/Footer";

export const metadata = createPageMetadata({
  description:
    "2PixelCraft builds websites, apps, and custom software for local businesses that want faster delivery, clear communication, and dependable execution.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <WhyNotUs />
        <BusinessOutcomes />
        <NobrainerOffer />
        <Projects />
        {/* <StatsSection /> */}
        <GoodVsGreat />
      </main>
      <Footer />
    </>
  );
}
