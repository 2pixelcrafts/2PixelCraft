"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    quote:
      "The execution was fast, communication was very good and overall it's easy to work with you guys",
    name: "Tuomas Lehtovirta",
    role: "CEO at Nordic Gulf Partners",
    side: "left",
    style: "top-[5%] left-[15%] rotate-[-4deg]",
    stars: 5,
  },
  {
    quote:
      "I read the approach about Athena to retrieve data from SES and it's amazingly explained.",
    name: "Bill Palter",
    role: "Senior Software Engineer",
    side: "right",
    style: "top-[5%] right-[15%] rotate-[3deg]",
    stars: 5,
  },
  {
    quote: "As soon we had the call my mind was going crazy with ideas",
    name: "Harry Latos",
    role: "Founder of Acquired",
    side: "left",
    style: "top-[38%] left-[13%] rotate-[2deg]",
    stars: 5,
  },
  {
    quote:
      "I was in urgent need and the module was delivered within 2 hours, exceptional quality of work.",
    name: "Michael Cole",
    role: "Client",
    side: "right",
    style: "top-[35%] right-[13%] rotate-[-3deg]",
    stars: 5,
  },
  {
    quote:
      "Sometimes you need a reality check, and you gave it solidly — harsh but necessary",
    name: "Shachi Mall",
    role: "100k+ Subscribers",
    side: "left",
    style: "bottom-[8%] left-[16%] rotate-[3deg]",
    stars: 5,
  },
  {
    quote:
      "Wow! you guys are moving so fast that we're behind testing/deploy. Crazy stuff",
    name: "Marc Ruskin",
    role: "Project Manager, NAHL",
    side: "right",
    style: "bottom-[5%] right-[16%] rotate-[-2deg]",
    stars: 5,
  },
] as const;

type Testimonial = (typeof testimonials)[number];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
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
  t: Testimonial;
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

    gsap.registerPlugin(ScrollTrigger);

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

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const leftCards = Array.from(
        el.querySelectorAll<HTMLElement>('[data-testimonial-side="left"]')
      );
      const rightCards = Array.from(
        el.querySelectorAll<HTMLElement>('[data-testimonial-side="right"]')
      );
      const cards = [...leftCards, ...rightCards];

      if (!cards.length) return;

      gsap.set(cards, { willChange: "transform" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });

      timeline
        .to(leftCards, { x: -140, ease: "none" }, 0)
        .to(rightCards, { x: 140, ease: "none" }, 0);

      return () => {
        timeline.kill();
        gsap.set(cards, { clearProps: "transform,willChange" });
      };
    });

    mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      const viewport = el.querySelector<HTMLElement>("[data-mobile-testimonials-viewport]");
      const track = el.querySelector<HTMLElement>("[data-mobile-testimonials-track]");
      if (!viewport || !track) return;

      gsap.set(track, { willChange: "transform" });
      const setX = gsap.quickSetter(track, "x", "px");
      const clampVelocity = gsap.utils.clamp(-220, 220);
      let loopWidth = 0;
      let x = 0;
      let velocity = -45;
      let previousVelocity = velocity;
      let frameId = 0;
      let lastFrameTime = performance.now();
      let pointerId: number | null = null;
      let lastPointerX = 0;
      let lastMoveTime = 0;
      let dragVelocity = 0;
      let movedDuringDrag = false;

      const wrapX = (value: number) => {
        if (!loopWidth) return value;
        return gsap.utils.wrap(-loopWidth, 0, value);
      };

      const render = () => {
        setX(x);
      };

      const updateLoopWidth = () => {
        loopWidth = track.scrollWidth / 2;
        x = wrapX(x);
        render();
      };

      const tick = (now: number) => {
        const delta = Math.min((now - lastFrameTime) / 1000, 0.05);
        lastFrameTime = now;

        if (pointerId === null) {
          x = wrapX(x + velocity * delta);
          render();
        }

        frameId = window.requestAnimationFrame(tick);
      };

      const onPointerDown = (event: PointerEvent) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;

        pointerId = event.pointerId;
        previousVelocity = velocity;
        dragVelocity = 0;
        movedDuringDrag = false;
        lastPointerX = event.clientX;
        lastMoveTime = performance.now();
        velocity = 0;
        viewport.setPointerCapture(event.pointerId);
      };

      const onPointerMove = (event: PointerEvent) => {
        if (pointerId !== event.pointerId) return;

        const deltaX = event.clientX - lastPointerX;
        if (deltaX !== 0) {
          movedDuringDrag = true;
        }

        x = wrapX(x + deltaX);
        render();

        const now = performance.now();
        const deltaTime = Math.max((now - lastMoveTime) / 1000, 0.016);
        dragVelocity = clampVelocity(deltaX / deltaTime);
        lastPointerX = event.clientX;
        lastMoveTime = now;
      };

      const endDrag = (event: PointerEvent) => {
        if (pointerId !== event.pointerId) return;

        if (viewport.hasPointerCapture(event.pointerId)) {
          viewport.releasePointerCapture(event.pointerId);
        }

        pointerId = null;
        velocity = movedDuringDrag && Math.abs(dragVelocity) > 5 ? dragVelocity : previousVelocity;
      };

      const resizeObserver = new ResizeObserver(updateLoopWidth);
      resizeObserver.observe(track);
      updateLoopWidth();
      frameId = window.requestAnimationFrame(tick);

      viewport.addEventListener("pointerdown", onPointerDown);
      viewport.addEventListener("pointermove", onPointerMove);
      viewport.addEventListener("pointerup", endDrag);
      viewport.addEventListener("pointercancel", endDrag);

      return () => {
        window.cancelAnimationFrame(frameId);
        resizeObserver.disconnect();
        viewport.removeEventListener("pointerdown", onPointerDown);
        viewport.removeEventListener("pointermove", onPointerMove);
        viewport.removeEventListener("pointerup", endDrag);
        viewport.removeEventListener("pointercancel", endDrag);
        gsap.set(track, { clearProps: "transform,willChange" });
      };
    });

    return () => {
      observer.disconnect();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1d4ed8] overflow-hidden"
      style={{ minHeight: "680px" }}
    >
      {/* Subtle dark overlay vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/30" />

      {/* Center text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-24 pb-20">
        <p className="reveal font-poppins text-white/70 text-base tracking-widest uppercase mb-2">
          don&apos;t just take our word for it
        </p>
        <h2 className="reveal stagger-1 font-unbounded font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
          what our clients say
        </h2>
      </div>

      {/* Scattered cards — hidden on mobile, shown on lg */}
      <div className="hidden lg:block absolute inset-0">
        {testimonials.map((t, i) => (
          <div
            key={i}
            data-testimonial-side={t.side}
            className={`absolute w-65 ${t.style}`}
          >
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      {/* Mobile: infinite slider */}
      <div
        data-mobile-testimonials-viewport
        className="lg:hidden overflow-hidden px-6 pb-10 select-none touch-pan-y"
      >
        <div
          data-mobile-testimonials-track
          className="flex w-max gap-4"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard
              key={`${t.name}-${i}`}
              t={t}
              className="w-65 shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
