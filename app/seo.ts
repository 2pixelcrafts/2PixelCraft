export const siteConfig = {
  name: "2PixelCraft",
  title: "2PixelCraft | Websites, Apps, and Custom Software for Local Businesses",
  description:
    "2PixelCraft builds websites, apps, and custom software for local businesses with fast delivery, clear communication, and dependable execution.",
  url: "https://www.2pixelcraft.com",
  locale: "en_US",
  keywords: [
    "2PixelCraft",
    "web design agency",
    "website development",
    "app development",
    "custom software development",
    "local business website",
    "business website agency",
  ],
  services: [
    "Website design",
    "Website development",
    "App development",
    "Custom software development",
    "UI/UX design",
  ],
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  image: `${siteConfig.url}/opengraph-image`,
  logo: `${siteConfig.url}/favicon.ico`,
  serviceType: [...siteConfig.services],
};
