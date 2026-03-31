"use client";
import { useEffect, useRef } from "react";
import CalendlyWidget from "./CalendlyWidget";
import { CALENDLY_URL } from "@/components/calendly";

export default function NobrainerOffer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="offer" ref={ref} className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="reveal flex items-center gap-3 mb-8">
              <span className="bg-blue-500 text-white font-unbounded font-bold text-4xl px-3 py-1 rounded">
                No-brainer
              </span>
              <span className="text-black font-unbounded font-bold text-4xl">
                offer
              </span>
            </h2>

            <p className="reveal stagger-1 font-poppins text-gray-800 text-lg leading-relaxed mb-4">
              Start with a 2-week paid trial where we:
            </p>

            <ul className="reveal stagger-2 space-y-3 mb-8 font-poppins text-gray-700 text-base">
              {["Build your new website or app from scratch", "Fix a specific problem you're facing", "Add a new feature to what you already have"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="reveal stagger-3 font-poppins text-black text-base">
              <strong>No guesswork.</strong> Try us first. If you love it, we keep going. Simple as that.
            </p>

            <div className="reveal stagger-4 mt-8 border-t border-gray-200 pt-6 space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-500 font-poppins">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                </svg>
                30 min
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 font-poppins">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 17v4" />
                </svg>
                Video call link provided after booking
              </div>
              <p className="text-sm text-gray-500 font-poppins">
                <span className="underline underline-offset-2">
                  7 out of 10 clients
                </span>{" "}
                who start with us are still working with us a year later.
              </p>
            </div>
          </div>

          {/* Right — Calendly */}
          <div id="book-call" className="reveal stagger-2 scroll-mt-28">
            <CalendlyWidget url={CALENDLY_URL} />
          </div>
        </div>
      </div>
    </section>
  );
}

