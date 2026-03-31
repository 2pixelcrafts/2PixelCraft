import React from 'react';

const StructuredData = () => {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "2PixelCraft",
    "url": "https://www.2pixelcraft.com",
    "logo": "https://www.2pixelcraft.com/og-image.png",
    "image": "https://www.2pixelcraft.com/og-image.png",
    "description": "Web design, website development, app development, and custom software agency helping local businesses launch faster and grow with dependable execution.",
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
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Custom website design and development for local businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Development",
            "description": "Mobile and web application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions for business needs"
          }
        }
      ]
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
    "name": "2PixelCraft",
    "url": "https://www.2pixelcraft.com"
  };

  return (
    <>
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
