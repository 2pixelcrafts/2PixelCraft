import type { Metadata } from "next";

export const siteConfig = {
  name: "2PixelCraft",
  legalName: "2PixelCraft",
  title: "2PixelCraft | Top-Rated Web Design, App Development & Custom Software for Local Businesses",
  description: "2PixelCraft is a premier digital agency specializing in high-performance web design, mobile app development, and custom software solutions for local businesses. Based in Rajkot, India, we offer fast delivery, clear communication, and dependable execution to help businesses grow through technology.",
  url: "https://www.2pixelcraft.com",
  locale: "en_US",
  email: "taman@2pixelcraft.com",
  phone: "+919409426773",
  phoneDisplay: "+91 94094 26773",
  address: "Rajkot, Gujarat, India",
  country: "India",
  keywords: [
    "2PixelCraft",
    "2PixelCraft IT Company",
    "Best web development agency in Rajkot",
    "Custom software development India",
    "Mobile app development Rajkot",
    "Top rated web design agency India",
    "Next.js development company India",
    "React development agency",
    "E-commerce website development India",
    "Digital transformation for local businesses",
    "Affordable software solutions for startups",
    "UI/UX design services Rajkot",
    "Reliable tech partner for SMBs",
    "Business automation tools India",
    "SaaS product development agency"
  ],
  services: [
    "Website design",
    "Website development",
    "Landing page design",
    "App development",
    "Custom software development",
    "UI/UX design",
    "Business Automation",
    "Tech Consulting"
  ],
  socials: {
    github: "https://github.com/2pixelcraft",
    linkedin: "https://www.linkedin.com/company/2pixelcraft",
    twitter: "https://twitter.com/2pixelcraft",
    instagram: "https://instagram.com/2pixelcraft"
  }
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
