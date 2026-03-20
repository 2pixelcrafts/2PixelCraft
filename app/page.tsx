import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyNotUs from "@/components/WhyNotUs";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import NobrainerOffer from "@/components/NobrainerOffer";
import Projects from "@/components/Projects";
import StatsSection from "@/components/StatsSection";
import GoodVsGreat from "@/components/GoodVsGreat";
import Footer from "@/components/Footer";

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
        <StatsSection />
        <GoodVsGreat />
      </main>
      <Footer />
    </>
  );
}
