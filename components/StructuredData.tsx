import React from 'react';
import { siteConfig } from '@/app/seo';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
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
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/og-image.png`,
    "image": `${siteConfig.url}/og-image.png`,
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
    "name": siteConfig.name,
    "url": siteConfig.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
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
    </>
  );
};

export default StructuredData;
