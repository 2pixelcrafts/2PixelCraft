import type { Metadata } from "next";

export const siteConfig = {
  name: "2PixelCraft",
  legalName: "2PixelCraft",
  title:
    "Web Design, App Development, and Custom Software for Local Businesses | 2PixelCraft",
  description:
    "2PixelCraft helps local businesses launch better websites, build apps, and develop custom software with fast delivery, clear communication, and dependable execution.",
  url: "https://www.2pixelcraft.com",
  locale: "en_US",
  email: "taman@2pixelcraft.com",
  phone: "+919409426773",
  phoneDisplay: "+91 94094 26773",
  country: "India",
  keywords: [
    "2PixelCraft",
    "web design agency",
    "website development agency",
    "app development agency",
    "custom software development",
    "custom software agency",
    "web design for local businesses",
    "website development for local businesses",
    "web app development",
    "small business website development",
    "business website agency",
    "software development for local businesses",
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

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

const sharedOpenGraphImage = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} social preview`,
};

const sharedTwitterImage = {
  url: absoluteUrl("/twitter-image"),
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} Twitter preview`,
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
  return {
    title,
    description,
    keywords: Array.from(new Set([...siteConfig.keywords, ...keywords])),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: title ?? siteConfig.title,
      description,
      locale: siteConfig.locale,
      images: [sharedOpenGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.title,
      description,
      images: [sharedTwitterImage],
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

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  logo: absoluteUrl("/logo.png"),
  image: absoluteUrl("/opengraph-image"),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: siteConfig.country,
      availableLanguage: ["English"],
    },
  ],
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  image: absoluteUrl("/opengraph-image"),
  logo: absoluteUrl("/logo.png"),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: siteConfig.country,
  availableLanguage: ["English"],
  serviceType: [...siteConfig.services],
  knowsAbout: [...siteConfig.services],
};
