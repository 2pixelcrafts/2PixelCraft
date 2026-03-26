import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/seo";

const lastModified = new Date("2026-03-27T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
