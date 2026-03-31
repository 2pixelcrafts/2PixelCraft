import type { Metadata } from "next";

export const siteConfig = {
  name: "2PixelCraft",
  legalName: "2PixelCraft",
  title: "2PixelCraft | Web Design, App Development & Custom Software for Local Businesses",
  description: "2PixelCraft builds websites, apps, and custom software for local businesses. Fast delivery, clear communication, dependable execution. Based in India.",
  url: "https://www.2pixelcraft.com",
  locale: "en_US",
  email: "taman@2pixelcraft.com",
  phone: "+919409426773",
  phoneDisplay: "+91 94094 26773",
  country: "India",
  keywords: [
    "2PixelCraft",
    "web development agency",
    "app development India",
    "custom software local businesses",
    "website design agency India",
    "Next.js development agency",
    "web design Rajkot",
    "software company Gujarat"
  ],
  services: [
    "Website design",
    "Website development",
    "Landing page design",
    "App development",
    "Custom software development",
    "UI/UX design",
  ],
} as const;

export const absoluteUrl = (path = "/") => {
  if (path === "/") return siteConfig.url;
  const url = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${url}`;
};

type PageMetadataOptions = {
  title?: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: readonly string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  return {
    title: pageTitle,
    description,
    keywords: Array.from(new Set([...siteConfig.keywords, ...keywords])),
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      locale: siteConfig.locale,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/og-image.png"],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
