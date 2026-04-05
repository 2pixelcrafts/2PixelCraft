import React from 'react';
import { siteConfig } from '@/app/seo';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "alternateName": ["2pixelcraft", "2pixel craft", "2 PixelCraft", "Two Pixel Craft"],
    "legalName": siteConfig.legalName,
    "url": siteConfig.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/logo.png`,
      "width": 512,
      "height": 512
    },
    "description": siteConfig.description,
    "email": siteConfig.email,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360001",
      "addressCountry": "IN"
    },
    "sameAs": [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
      siteConfig.socials.instagram
    ]
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professionalservice`,
    "name": siteConfig.name,
    "alternateName": ["2pixelcraft", "2pixel craft"],
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "image": `${siteConfig.url}/logo.png`,
    "description": siteConfig.description,
    "email": siteConfig.email,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.3039,
      "longitude": 70.8022
    },
    "priceRange": "$$",
    "openingHours": "Mo-Sa 10:00-19:00",
    "sameAs": [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
      siteConfig.socials.instagram
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Professional ${service.toLowerCase()} services by 2PixelCraft.`
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "6"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "name": siteConfig.name,
    "alternateName": ["2pixelcraft", "2pixel craft"],
    "url": siteConfig.url,
    "description": siteConfig.description,
    "inLanguage": "en-US",
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    }
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Main Navigation",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": siteConfig.url
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Projects",
        "url": `${siteConfig.url}/projects`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Technologies",
        "url": `${siteConfig.url}/technologies`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Locations",
        "url": `${siteConfig.url}/locations`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Contact",
        "url": `${siteConfig.url}/contact`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
    </>
  );
};

export default StructuredData;
