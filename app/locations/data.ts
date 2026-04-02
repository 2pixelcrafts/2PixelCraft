export type CityFaq = { q: string; a: string };

export type CityData = {
  slug: string;
  name: string;
  state: string;
  country: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  headline: string;
  subheadline: string;
  body: string;
  services: string[];
  faqs: CityFaq[];
};

// 1. HIGH-VALUE FEATURED CITIES (Custom Content)
export const featuredCities: CityData[] = [
  {
    slug: "rajkot",
    name: "Rajkot",
    state: "Gujarat",
    country: "India",
    metaTitle: "Top-Rated IT Company in Rajkot | #1 Web & App Dev | 2PixelCraft",
    metaDescription: "2PixelCraft is the leading IT company in Rajkot, Gujarat. We deliver top-rated web design, mobile app development, and custom software for local businesses.",
    metaKeywords: ["IT company in Rajkot", "best web development Rajkot", "top app development Rajkot"],
    headline: "#1 IT Company in Rajkot",
    subheadline: "Empowering Rajkot's fastest-growing businesses with world-class engineering.",
    body: "Based in Rajkot, 2PixelCraft is the trusted tech partner for local enterprises and global startups. We specialize in transforming businesses with high-performance Next.js websites and native-quality Flutter apps.",
    services: ["Custom Web Development in Rajkot", "Mobile App Development", "E-commerce Solutions", "Business Automation"],
    faqs: [
      { q: "Why choose 2PixelCraft in Rajkot?", a: "We combine local market understanding with global engineering standards." }
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    metaTitle: "Best Web Development Agency in Ahmedabad | 2PixelCraft",
    metaDescription: "Looking for a premium IT partner in Ahmedabad? 2PixelCraft provides world-class web development and mobile app services to businesses across Ahmedabad and Gandhinagar.",
    metaKeywords: ["web development agency Ahmedabad", "IT company Ahmedabad", "app development Ahmedabad"],
    headline: "Premium IT Services in Ahmedabad",
    subheadline: "Scaling Ahmedabad's digital footprint with expert software engineering.",
    body: "Ahmedabad is a global hub of innovation, and 2PixelCraft supports its growing business ecosystem with high-scale Next.js applications and robust Flutter mobile apps.",
    services: ["Enterprise Web Solutions Ahmedabad", "Flutter App Development", "SaaS Product Engineering"],
    faqs: [{ q: "Does 2PixelCraft serve Gandhinagar?", a: "Yes, we serve the entire Ahmedabad-Gandhinagar tech corridor." }],
  }
];

// 2. MASSIVE VALID CITY LIST (For Programmatic SEO)
// Adding major hubs to create a large crawlable network
export const validCitiesList = [
  // Gujarat
  "Surat", "Vadodara", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Morbi", "Anand", "Vapi", "Navsari",
  // Maharashtra
  "Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati", "Navi Mumbai", "Kolhapur",
  // Karnataka
  "Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Bellary",
  // Telangana & AP
  "Hyderabad", "Warangal", "Nizamabad", "Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Tirupati",
  // Tamil Nadu
  "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Vellore",
  // North India
  "Delhi", "New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", "Chandigarh", "Ludhiana", "Amritsar", "Jalandhar",
  "Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Prayagraj",
  "Dehradun", "Shimla", "Srinagar",
  // East & Central
  "Kolkata", "Howrah", "Patna", "Gaya", "Ranchi", "Jamshedpur", "Bhubaneswar", "Cuttack", "Guwahati", "Imphal",
  "Bhopal", "Indore", "Jabalpur", "Gwalior", "Raipur", "Bhilai",
  // Global Hubs
  "Las Vegas", "New York", "London", "Dubai", "Singapore", "Sydney", "Toronto", "San Francisco", "Austin", "Berlin"
];

// Helper to check if a slug is a valid city
export function isValidCity(slug: string): boolean {
  const cityName = slug.replace(/-/g, " ");
  return (
    featuredCities.some((c) => c.slug === slug) ||
    validCitiesList.some((c) => c.toLowerCase() === cityName.toLowerCase())
  );
}

// PROGRAMMATIC SEO GENERATOR
export function getCityBySlug(slug: string): CityData | null {
  // Check featured first
  const featured = featuredCities.find((c) => c.slug === slug);
  if (featured) return featured;

  // Check if valid
  const cityName = validCitiesList.find(c => c.toLowerCase() === slug.replace(/-/g, " ").toLowerCase());
  if (!cityName) return null;

  return {
    slug: slug,
    name: cityName,
    state: "India", 
    country: "India",
    metaTitle: `Best IT Company in ${cityName} | Web & App Development | 2PixelCraft`,
    metaDescription: `2PixelCraft is a top-rated IT company serving ${cityName}. We build high-performance websites, mobile apps, and custom software solutions for businesses in ${cityName}.`,
    metaKeywords: [`IT company in ${cityName}`, `web development ${cityName}`, `app development ${cityName}`, `software agency ${cityName}`],
    headline: `Top-Rated IT Company in ${cityName}`,
    subheadline: `Scale your ${cityName} business with world-class software engineering and modern tech stacks.`,
    body: `In ${cityName}, businesses are rapidly digitalizing to stay competitive. 2PixelCraft provides the technical expertise needed to win, offering custom Next.js web applications and Flutter mobile apps tailored for the ${cityName} market. Our remote-first delivery model ensures that clients in ${cityName} get premium quality with daily transparency.`,
    services: [`Custom Web Development in ${cityName}`, `Mobile App Development ${cityName}`, `Business Automation ${cityName}`, `E-commerce Solutions ${cityName}`],
    faqs: [
      { q: `Does 2PixelCraft work with clients in ${cityName}?`, a: `Yes, we have a robust remote collaboration framework designed specifically to serve clients in ${cityName} with zero friction.` }
    ]
  };
}

export const allCitySlugs = [
  ...featuredCities.map((c) => c.slug),
  ...validCitiesList.map((c) => c.toLowerCase().replace(/\s+/g, "-"))
];
