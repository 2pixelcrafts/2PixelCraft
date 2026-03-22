'use client';

import { useEffect, useRef, ReactNode } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({
  children,
  itemClassName = '',
}: {
  children: ReactNode;
  itemClassName?: string;
}) => <div className={`ss-card ${itemClassName}`.trim()}>{children}</div>;

export default function ScrollStack({
  children,
  itemDistance = 300,
  topOffset = 80,
  stackGap = 16,
  scaleStep = 0.05,
}: {
  children: ReactNode;
  itemDistance?: number;
  topOffset?: number;
  stackGap?: number;
  scaleStep?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cards: HTMLElement[] = [];
    let naturalTops: number[] = [];
    let stickyTops: number[] = [];
    let raf: number | null = null;

    function init() {
      cards = Array.from(el!.querySelectorAll<HTMLElement>('.ss-card'));
      if (!cards.length) return;

      // Reset all inline styles
      cards.forEach(c => { c.style.cssText = ''; });
      el!.style.paddingBottom = '';

      // Step 1: apply margins only (no sticky yet, so measurement is accurate)
      cards.forEach((card, i) => {
        card.style.transformOrigin = 'top center';
        card.style.willChange = 'transform';
        if (i < cards.length - 1) {
          card.style.marginBottom = `${itemDistance}px`;
        }
      });

      // Step 2: measure natural document-top of each card
      naturalTops = cards.map(c => c.getBoundingClientRect().top + window.scrollY);

      // Step 3: apply sticky positioning
      stickyTops = cards.map((_, i) => topOffset + i * stackGap);
      cards.forEach((card, i) => {
        card.style.position = 'sticky';
        card.style.top = `${stickyTops[i]}px`;
        card.style.zIndex = String(i + 1);
      });

      // Small padding so the last card has a brief moment to settle before
      // the section ends — 100px instead of a full itemDistance to avoid
      // the large dead-scroll gap after the final card.
      el!.style.paddingBottom = '100px';
    }

    function update() {
      if (!cards.length) return;

      cards.forEach((card, i) => {
        // Last card never shrinks
        if (i === cards.length - 1) {
          card.style.transform = '';
          return;
        }

        let scale = 1;

        for (let j = i + 1; j < cards.length; j++) {
          const travel = naturalTops[j] - stickyTops[j];
          if (travel <= 0) continue;

          // How far card[j] still has to go before it's fully stuck (0 = fully stuck)
          const distLeft = Math.max(0, cards[j].getBoundingClientRect().top - stickyTops[j]);
          const progress = Math.max(0, Math.min(1, 1 - distLeft / travel));

          scale -= progress * scaleStep;
        }

        card.style.transform = `scale(${Math.max(0.65, scale).toFixed(4)})`;
      });
    }

    function onScroll() {
      if (raf !== null) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    function onResize() {
      init();
      update();
    }

    init();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf !== null) cancelAnimationFrame(raf);
      cards.forEach(c => { c.style.cssText = ''; });
      if (el) el.style.paddingBottom = '';
    };
  }, [itemDistance, topOffset, stackGap, scaleStep]);

  return <div ref={ref} className="ss-container">{children}</div>;
}
