"use client";
import { useEffect, useRef } from "react";

export default function GoodVsGreat() {
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
    <section id="about" ref={ref} className="bg-[#0f0f0f] px-6 lg:px-10 pt-10 pb-24">
      <div className="max-w-4xl mx-auto space-y-10">
        <p className="reveal font-unbounded font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Writing{" "}
          <span className="border-b-2 border-orange-500 pb-1">code?</span>{" "}
          That&apos;s no longer the hard part.
        </p>
        <p className="reveal stagger-1 font-unbounded font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
          But writing{" "}
          <span className="border-b-2 border-orange-500 pb-1">quality code?</span>{" "}
          That&apos;s a different story.
        </p>

        <p className="reveal stagger-2 font-poppins text-gray-400 text-xl sm:text-2xl leading-relaxed">
          The real challenge today is building software that&apos;s well-designed,
          scalable, and easy to maintain.
        </p>

        <p className="reveal stagger-3 font-poppins text-gray-500 text-xl sm:text-2xl leading-relaxed">
          Think of it like building a house.{" "}
          <span className="text-white font-semibold border-b border-orange-500">
            Anyone can put up walls,
          </span>{" "}
          but it takes real expertise to design something that{" "}
          <span className="text-white font-semibold border-b border-orange-500">
            stands the test of time.
          </span>
        </p>

        <p className="reveal stagger-4 font-poppins text-gray-400 text-xl sm:text-2xl leading-relaxed">
          Good software is everywhere now. But the difference between{" "}
          <span className="text-white font-bold">good</span> and{" "}
          <span className="text-white font-bold">great?</span> That&apos;s where
          TechieButler comes in.
        </p>
      </div>
    </section>
  );
}
