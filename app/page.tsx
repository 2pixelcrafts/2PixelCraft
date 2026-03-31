import { createPageMetadata, siteConfig } from "@/app/seo";
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
  description: siteConfig.description,
  path: "/",
  keywords: ["best web design agency in Rajkot", "2PixelCraft app development", "custom software solutions India"],
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
