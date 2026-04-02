import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/app/seo";
import { featuredCities, allCitySlugs, getCityBySlug } from "@/app/locations/data";

export const metadata = createPageMetadata({
  title: "Areas We Serve — IT Company Global & Local Locations",
  description: "2PixelCraft provides world-class IT services across 100+ cities globally. Explore our locations directory to find a reliable tech partner in your city.",
  path: "/locations",
  keywords: ["IT company locations", "web development agency directory", "2PixelCraft service areas"],
});

export default function LocationsPage() {
  // Sort ALL cities by alphabet for a clean directory
  const sortedCities = allCitySlugs
    .map((slug) => getCityBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => a!.name.localeCompare(b!.name));

  // Group by first letter for the A-Z list
  const groups: Record<string, any[]> = {};
  sortedCities.forEach((city) => {
    const letter = city!.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(city);
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <Navbar />
      <main className="bg-[#0f0f0f] min-h-screen">
        
        {/* Hero */}
        <section className="relative pt-36 pb-20 px-6 lg:px-10 overflow-hidden text-center">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
               style={{ backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)" }} />
          <div className="relative max-w-4xl mx-auto">
            <span className="inline-block font-poppins text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
              Worldwide Service
            </span>
            <h1 className="font-unbounded font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight">
              Locations Directory
            </h1>
            <p className="mt-6 font-poppins text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              2PixelCraft partners with ambitious businesses across the globe. 
              Find your city below to see how we deliver high-performance tech 
              locally, no matter where you are.
            </p>
          </div>
        </section>

        {/* Featured Cities Section (Top Priority) */}
        <section className="px-6 lg:px-10 py-16 border-b border-white/5">
           <div className="max-w-6xl mx-auto">
              <h2 className="font-unbounded font-bold text-xl text-white mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-blue-500" /> Primary Hubs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCities.map((city) => (
                   <Link 
                     key={city.slug} 
                     href={`/locations/${city.slug}`}
                     className="group bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/50 p-8 rounded-3xl transition-all duration-300"
                   >
                     <h3 className="font-unbounded font-bold text-xl text-white mb-2 group-hover:text-blue-400">{city.name}</h3>
                     <p className="font-poppins text-sm text-gray-500">Premium IT & app development services for {city.name}.</p>
                     <div className="mt-6 text-[10px] font-unbounded text-blue-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                        View Details →
                     </div>
                   </Link>
                ))}
              </div>
           </div>
        </section>

        {/* A-Z Sitemap Section (The Link Cloud) */}
        <section className="px-6 lg:px-10 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-unbounded font-bold text-xl text-white mb-12 flex items-center gap-4">
               <span className="w-8 h-px bg-white/20" /> Browse All Locations
            </h2>

            {/* Alphabet Nav (Internal linking boost) */}
            <div className="flex flex-wrap gap-2 mb-20 pb-8 border-b border-white/5">
               {alphabet.map((letter) => (
                 <a 
                   key={letter} 
                   href={`#city-${letter}`}
                   className={`w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-xs font-unbounded transition-all ${groups[letter] ? "text-white hover:bg-white hover:text-black cursor-pointer" : "text-gray-700 pointer-events-none"}`}
                 >
                   {letter}
                 </a>
               ))}
            </div>

            {/* The Directory Grid */}
            <div className="space-y-24">
              {alphabet.map((letter) => {
                const citiesInGroup = groups[letter];
                if (!citiesInGroup) return null;

                return (
                  <div key={letter} id={`city-${letter}`} className="scroll-mt-32">
                    <div className="flex items-start gap-12">
                       <span className="font-unbounded font-bold text-5xl text-white/5 leading-none select-none">{letter}</span>
                       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-6 w-full pt-2">
                          {citiesInGroup.map((city) => (
                            <Link 
                              key={city.slug} 
                              href={`/locations/${city.slug}`}
                              className="text-gray-500 hover:text-blue-400 text-sm font-poppins transition-colors flex items-center gap-2 group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-500 transition-colors" />
                              {city.name}
                            </Link>
                          ))}
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Catch-all */}
        <section className="px-6 lg:px-10 py-32 bg-white/[0.01] border-t border-white/5 text-center">
            <h2 className="font-unbounded font-bold text-3xl text-white mb-6">Need a quote for your city?</h2>
            <p className="font-poppins text-gray-400 mb-10 max-w-xl mx-auto">Our 100% transparent remote workflow allows us to deliver world-class software to any city, regardless of the time zone.</p>
            <Link href="/contact" className="bg-blue-500 text-white font-unbounded font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:bg-blue-400 transition-all">Start Your Project</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
