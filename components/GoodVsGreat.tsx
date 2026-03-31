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
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#0f0f0f] px-6 lg:px-10 py-24"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="reveal font-unbounded font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Having a{" "}
          <span className="border-b-2 border-blue-500 pb-1">website?</span>{" "}
          That&apos;s easy now.
        </h2>
        <h2 className="reveal stagger-1 font-unbounded font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
          But having a website that{" "}
          <span className="border-b-2 border-blue-500 pb-1">
            actually gets you customers?
          </span>{" "}
          That&apos;s a different story.
        </h2>

        <p className="reveal stagger-2 font-poppins text-gray-400 text-xl sm:text-2xl leading-relaxed">
          The real challenge is building something that looks good, works well,
          and keeps people coming back.
        </p>

        <p className="reveal stagger-3 font-poppins text-gray-500 text-xl sm:text-2xl leading-relaxed">
          Think of it like setting up a shop.{" "}
          <span className="text-white font-semibold border-b border-blue-500">
            Anyone can open a door,
          </span>{" "}
          but it takes real skill to create a place where{" "}
          <span className="text-white font-semibold border-b border-blue-500">
            customers love to return.
          </span>
        </p>

        <p className="reveal stagger-4 font-poppins text-gray-400 text-xl sm:text-2xl leading-relaxed">
          Lots of businesses have websites. But the difference between one that{" "}
          <span className="text-white font-bold">just exists</span> and one that{" "}
          <span className="text-white font-bold">brings in business?</span>{" "}
          That&apos;s where 2PixelCraft comes in.
        </p>
      </div>
    </section>
  );
}
