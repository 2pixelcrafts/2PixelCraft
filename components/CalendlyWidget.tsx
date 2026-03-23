"use client";

import { InlineWidget } from "react-calendly";

interface CalendlyWidgetProps {
  url: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-black/10 overflow-hidden">
      <InlineWidget
        url={url}
        styles={{ minWidth: "100%", height: "700px" }}
      />
    </div>
  );
}
