"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "The execution was fast, communication was very good and overall it's easy to work with you guys",
    name: "Tuomas Lehtovirta",
    role: "CEO at Nordic Gulf Partners",
    style: "top-[5%] left-[2%] rotate-[-4deg]",
    stars: 5,
  },
  {
    quote:
      "I read the approach about Athena to retrieve data from SES and it's amazingly explained.",
    name: "Bill Palter",
    role: "Senior Software Engineer",
    style: "top-[5%] right-[3%] rotate-[3deg]",
    stars: 5,
  },
  {
    quote: "As soon we had the call my mind was going crazy with ideas",
    name: "Harry Latos",
    role: "Founder of Acquired",
    style: "top-[38%] left-[1%] rotate-[2deg]",
    stars: 5,
  },
  {
    quote:
      "I was in urgent need and the module was delivered within 2 hours, exceptional quality of work.",
    name: "Michael Cole",
    role: "Client",
    style: "top-[35%] right-[1%] rotate-[-3deg]",
    stars: 5,
  },
  {
    quote:
      "Sometimes you need a reality check, and you gave it solidly — harsh but necessary",
    name: "Shachi Mall",
    role: "100k+ Subscribers",
    style: "bottom-[8%] left-[5%] rotate-[3deg]",
    stars: 5,
  },
  {
    quote:
      "Wow! you guys are moving so fast that we're behind testing/deploy. Crazy stuff",
    name: "Marc Ruskin",
    role: "Project Manager, NAHL",
    style: "bottom-[5%] right-[4%] rotate-[-2deg]",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  className,
}: {
  t: (typeof testimonials)[0];
  className?: string;
}) {
  return (
    <div
      className={`bg-[#1a1a1a]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:-translate-y-1 ${className ?? ""}`}
    >
      <Stars count={t.stars} />
      <p className="text-white text-sm font-poppins leading-relaxed mb-3">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div>
        <p className="text-white font-semibold text-xs">{t.name}</p>
        <p className="text-white/50 text-xs">{t.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#c96400] overflow-hidden"
      style={{ minHeight: "680px" }}
    >
      {/* Subtle dark overlay vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/30" />

      {/* Center text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-24 pb-20">
        <p className="reveal font-poppins text-white/70 text-base tracking-widest uppercase mb-2">
          low-key
        </p>
        <h2 className="reveal stagger-1 font-unbounded font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
          our fav section
        </h2>
      </div>

      {/* Scattered cards — hidden on mobile, shown on lg */}
      <div className="hidden lg:block absolute inset-0">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            t={t}
            className={`absolute w-65 ${t.style}`}
          />
        ))}
      </div>

      {/* Mobile: horizontal scroll cards */}
      <div className="lg:hidden flex gap-4 overflow-x-auto px-6 pb-10 snap-x snap-mandatory">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            t={t}
            className="shrink-0 w-65 snap-start"
          />
        ))}
      </div>
    </section>
  );
}
