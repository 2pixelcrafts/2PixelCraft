import { professionalServiceJsonLd, websiteJsonLd } from "@/app/seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyNotUs from "@/components/WhyNotUs";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import NobrainerOffer from "@/components/NobrainerOffer";
import Projects from "@/components/Projects";
import GoodVsGreat from "@/components/GoodVsGreat";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = [websiteJsonLd, professionalServiceJsonLd];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
