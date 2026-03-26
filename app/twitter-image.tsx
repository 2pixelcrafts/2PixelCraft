import { ImageResponse } from "next/og";
import { siteConfig } from "@/app/seo";

export const alt = `${siteConfig.name} Twitter preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #050816 0%, #0f172a 55%, #1d4ed8 100%)",
          color: "#ffffff",
          padding: "64px",
          fontFamily:
            "Arial, Helvetica, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "9999px",
              background: "#3b82f6",
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)",
            }}
          />
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "940px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.08,
              fontWeight: 800,
            }}
          >
            Websites, apps, and custom software that help businesses grow.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(255, 255, 255, 0.82)",
            }}
          >
            Fast delivery. Clear communication. Dependable execution.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.74)",
          }}
        >
          <div>2-week trial engagement available</div>
          <div>www.2pixelcraft.com</div>
        </div>
      </div>
    ),
    size
  );
}
