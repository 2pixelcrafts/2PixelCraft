"use client";

import { useEffect, useRef, useState } from "react";
import { getCalendlyEmbedUrl } from "@/components/calendly";

interface CalendlyWidgetProps {
  url: string;
}

function CalendlySkeleton() {
  return (
    <div className="absolute inset-0 bg-white p-5 sm:p-6">
      <div className="h-full rounded-2xl border border-gray-100 bg-[#fbfbfb] p-4 sm:p-5">
        <div className="animate-pulse space-y-4">
          <div className="h-7 w-40 rounded-full bg-gray-200" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-24 rounded-2xl bg-gray-200" />
            <div className="h-24 rounded-2xl bg-gray-200" />
            <div className="h-24 rounded-2xl bg-gray-200" />
            <div className="h-24 rounded-2xl bg-gray-200" />
          </div>
          <div className="space-y-3 pt-2">
            <div className="h-4 w-full rounded-full bg-gray-200" />
            <div className="h-4 w-5/6 rounded-full bg-gray-200" />
            <div className="h-4 w-2/3 rounded-full bg-gray-200" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-4">
            <div className="h-10 rounded-xl bg-gray-200" />
            <div className="h-10 rounded-xl bg-gray-200" />
            <div className="h-10 rounded-xl bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  const [loaded, setLoaded] = useState(false);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const embedUrl = getCalendlyEmbedUrl(url);

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-[700px] overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/10">
      {!loaded && <CalendlySkeleton />}
      <iframe
        src={embedUrl}
        title="2PixelCraft booking calendar"
        loading="eager"
        width="100%"
        height="700"
        frameBorder="0"
        onLoad={() => {
          if (revealTimeoutRef.current) {
            clearTimeout(revealTimeoutRef.current);
          }
          revealTimeoutRef.current = setTimeout(() => {
            setLoaded(true);
          }, 1200);
        }}
        className={`block h-[700px] w-full transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
