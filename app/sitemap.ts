import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/seo";

const lastModified = new Date("2026-03-30T00:00:00.000Z");

type SitemapRoute = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
  images?: string[];
};

const staticRoutes: SitemapRoute[] = [
  {
    path: "",
    changeFrequency: "weekly" as const,
    priority: 1,
    images: [
      `${siteConfig.url}/logo.png`,
      `${siteConfig.url}/transparent%20website%20logo.png`,
      `${siteConfig.url}/projects/lux.png`,
      `${siteConfig.url}/projects/timect.png`,
      `${siteConfig.url}/projects/titan-fitness.png`,
      `${siteConfig.url}/projects/wistoan.png`,
    ],
  },
  {
    path: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/terms",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images ? { images: route.images } : {}),
  }));
}
