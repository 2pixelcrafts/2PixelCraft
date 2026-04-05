import { siteConfig } from "@/app/seo";

export type TechFaq = { q: string; a: string };

export type Tech = {
  slug: string;
  name: string;
  abbr: string;
  color: string;
  categoryId: string;
  categoryLabel: string;
  /* Index page */
  description: string;
  /* Individual page */
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  headline: string;
  subheadline: string;
  body: string;
  useCases: string[];
  relatedSlugs: string[];
  faqs: TechFaq[];
};

export type Category = {
  id: string;
  index: string;
  label: string;
  tagline: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "frontend",
    index: "01",
    label: "Frontend Development",
    tagline: "We build interfaces that convert.",
    description:
      "Every website 2PixelCraft delivers is built with React and Next.js — giving clients fast load times, strong SEO, and a UI their customers actually enjoy using.",
  },
  {
    id: "backend",
    index: "02",
    label: "Backend Development",
    tagline: "APIs and server logic that hold up under real load.",
    description:
      "2PixelCraft builds backend systems with Node.js and Laravel — choosing the right tool based on whether the client needs a lightweight API or a full enterprise platform.",
  },
  {
    id: "mobile",
    index: "03",
    label: "Mobile App Development",
    tagline: "One codebase. iOS and Android. No compromise.",
    description:
      "2PixelCraft builds mobile apps primarily in Flutter — delivering native-quality performance on both platforms from a single codebase, which means faster development and a lower total cost.",
  },
  {
    id: "database",
    index: "04",
    label: "Databases & Storage",
    tagline: "The right database for the right data.",
    description:
      "2PixelCraft doesn't force every project into the same database. We match the storage solution to the data model — relational, document, or real-time — based on what will perform best in production.",
  },
  {
    id: "tools",
    index: "05",
    label: "Tools & Infrastructure",
    tagline: "The workflow that makes every project repeatable.",
    description:
      "2PixelCraft's delivery process is backed by the same tools the world's top engineering teams use — version control, containerisation, cloud infrastructure, and a design-first workflow.",
  },
];

export const techs: Tech[] = [
  /* ── Frontend ─────────────────────────────────── */
  {
    slug: "react-js",
    name: "React.js",
    abbr: "Re",
    color: "#61DAFB",
    categoryId: "frontend",
    categoryLabel: "Frontend Development",
    description:
      "2PixelCraft builds all web UIs in React — its component model and ecosystem let us ship complex interfaces fast without sacrificing quality or performance.",
    metaTitle: "React.js Development Agency in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft builds high-performance React.js web applications for businesses in India. Custom React development, component libraries, and SPAs — delivered fast and built to scale.",
    metaKeywords: [
      "React.js development agency India",
      "React.js developer Rajkot",
      "hire React developer India",
      "custom React.js web app India",
      "React.js SPA development",
      "React component library India",
      "2PixelCraft React development",
      "React.js agency Rajkot Gujarat",
    ],
    headline: "React.js Development",
    subheadline: "Fast, component-driven UIs built to perform.",
    body: "React.js is at the core of every web application 2PixelCraft builds. Its component-based architecture lets us build reusable, maintainable UI systems that scale as your product grows. We've used React to deliver everything from marketing websites to complex dashboards and SaaS platforms — always pairing it with TypeScript for type safety and long-term maintainability. When you work with 2PixelCraft on a React project, you get a production-ready codebase, not just something that looks good in a browser.",
    useCases: [
      "Business websites and landing pages",
      "Single-page applications (SPAs)",
      "Admin dashboards and analytics platforms",
      "E-commerce frontends",
      "SaaS product UIs",
      "Component libraries and design systems",
    ],
    relatedSlugs: ["next-js", "typescript", "tailwind-css", "node-js"],
    faqs: [
      {
        q: "Does 2PixelCraft build websites using React.js?",
        a: "Yes — React.js is 2PixelCraft's primary frontend technology. We've built dozens of React-based projects ranging from business websites to full SaaS platforms for clients across India.",
      },
      {
        q: "Do you use React with TypeScript?",
        a: "Always. Every React project at 2PixelCraft is written in TypeScript. It eliminates an entire class of runtime bugs, speeds up development as the project grows, and makes the codebase significantly easier to maintain.",
      },
      {
        q: "Can 2PixelCraft build a React SPA or dashboard?",
        a: "Yes. We build single-page applications, admin dashboards, real-time data dashboards, and complex multi-step workflows using React — often paired with Node.js or Laravel on the backend.",
      },
    ],
  },
  {
    slug: "next-js",
    name: "Next.js",
    abbr: "Nx",
    color: "#ffffff",
    categoryId: "frontend",
    categoryLabel: "Frontend Development",
    description:
      "Our default framework for production websites. Next.js gives clients server-side rendering, fast page loads, and a strong SEO foundation right out of the box.",
    metaTitle: "Next.js Development Agency in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft specialises in Next.js web development for businesses in India. SSR, SSG, App Router — we build fast, SEO-optimised Next.js websites that rank and convert.",
    metaKeywords: [
      "Next.js development agency India",
      "Next.js developer Rajkot",
      "Next.js website development India",
      "hire Next.js developer India",
      "Next.js App Router development",
      "SEO-friendly Next.js website India",
      "2PixelCraft Next.js development",
      "Next.js agency Rajkot Gujarat",
    ],
    headline: "Next.js Development",
    subheadline: "Production-grade websites with built-in SEO and speed.",
    body: "Next.js is 2PixelCraft's default framework for every production website. It gives us server-side rendering, static site generation, and edge-ready routing right out of the box — meaning every site we deliver loads fast, ranks well on Google, and stays maintainable as it grows. We've built everything from content-heavy business websites to full-stack Next.js applications using the App Router, TypeScript, and Tailwind CSS. If you need a website that performs and gets found — Next.js with 2PixelCraft is the answer.",
    useCases: [
      "Business and corporate websites",
      "Marketing and landing pages with strong SEO",
      "E-commerce storefronts",
      "Full-stack Next.js web applications",
      "Portfolio and showcase websites",
      "High-traffic content websites",
    ],
    relatedSlugs: ["react-js", "typescript", "tailwind-css", "vercel"],
    faqs: [
      {
        q: "Why does 2PixelCraft use Next.js for websites?",
        a: "Next.js gives every site we build server-side rendering, automatic code splitting, and built-in image optimisation — which means faster page loads, better Core Web Vitals scores, and stronger organic search rankings for clients.",
      },
      {
        q: "Does 2PixelCraft use the Next.js App Router?",
        a: "Yes. All new projects at 2PixelCraft use the Next.js App Router with React Server Components — it gives us better performance, more granular caching control, and a cleaner architecture for complex applications.",
      },
      {
        q: "Can 2PixelCraft build a full-stack app with Next.js?",
        a: "Yes. We build full-stack Next.js applications using API Routes or Route Handlers for the backend, Prisma or Drizzle for the database layer, and server actions for data mutations — a complete, unified TypeScript stack.",
      },
    ],
  },
  {
    slug: "typescript",
    name: "TypeScript",
    abbr: "TS",
    color: "#3178C6",
    categoryId: "frontend",
    categoryLabel: "Frontend Development",
    description:
      "We write TypeScript on every project — it eliminates a whole class of runtime bugs, makes codebases easier to maintain, and speeds up development as projects scale.",
    metaTitle: "TypeScript Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft writes TypeScript on every project — frontend, backend, and full-stack. Type-safe code that's faster to build, easier to maintain, and less prone to production bugs.",
    metaKeywords: [
      "TypeScript development India",
      "TypeScript developer Rajkot",
      "TypeScript React Next.js agency India",
      "type-safe web development India",
      "2PixelCraft TypeScript",
      "full-stack TypeScript agency India",
    ],
    headline: "TypeScript Development",
    subheadline: "Every project we ship is TypeScript-first.",
    body: "TypeScript is not optional at 2PixelCraft — it's the default on every project we build. Writing TypeScript across the full stack (Next.js frontends, Node.js backends, Prisma schemas) means we catch errors at compile time rather than runtime, write code that's self-documenting, and deliver projects that are dramatically easier to extend and maintain months after launch. For clients, this translates directly into fewer bugs in production, faster iterations, and a codebase that doesn't become a liability as your business grows.",
    useCases: [
      "Type-safe React and Next.js frontends",
      "TypeScript Node.js backends and APIs",
      "Full-stack TypeScript monorepos",
      "Type-safe database access with Prisma",
      "Shared type definitions across frontend and backend",
    ],
    relatedSlugs: ["react-js", "next-js", "node-js", "prisma"],
    faqs: [
      {
        q: "Does 2PixelCraft use TypeScript for all projects?",
        a: "Yes — TypeScript is the default at 2PixelCraft. Both frontend (React/Next.js) and backend (Node.js/Express) codebases are written in TypeScript unless a client's existing stack requires otherwise.",
      },
      {
        q: "What are the benefits of TypeScript for my project?",
        a: "TypeScript catches a significant portion of bugs at build time before they reach production. It also makes refactoring safer, auto-completes APIs correctly in the IDE, and helps new developers understand the codebase much faster.",
      },
    ],
  },
  {
    slug: "tailwind-css",
    name: "Tailwind CSS",
    abbr: "TW",
    color: "#38BDF8",
    categoryId: "frontend",
    categoryLabel: "Frontend Development",
    description:
      "Tailwind lets 2PixelCraft build precise, fully responsive layouts faster than traditional CSS — meaning less time styling, more time shipping.",
    metaTitle: "Tailwind CSS Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft uses Tailwind CSS to build fast, responsive, and pixel-perfect UIs for websites and apps in India. Faster delivery, consistent styling, and zero CSS bloat.",
    metaKeywords: [
      "Tailwind CSS development India",
      "Tailwind CSS developer Rajkot",
      "Next.js Tailwind CSS agency India",
      "responsive UI design India",
      "2PixelCraft Tailwind CSS",
    ],
    headline: "Tailwind CSS Development",
    subheadline: "Pixel-perfect, responsive UIs built fast.",
    body: "Tailwind CSS is how 2PixelCraft builds UIs at speed without sacrificing precision. Its utility-first approach means we can prototype layouts in minutes, implement complex responsive behaviour without context-switching between files, and deliver consistent, design-system-aligned styles across large projects. Combined with Next.js and React, Tailwind gives us the full toolkit to ship beautiful, responsive web interfaces that match client designs exactly — in less time than traditional CSS frameworks allow.",
    useCases: [
      "Responsive business websites",
      "Custom UI component libraries",
      "Marketing and landing pages",
      "Admin dashboards",
      "E-commerce product pages",
    ],
    relatedSlugs: ["react-js", "next-js", "typescript"],
    faqs: [
      {
        q: "Does 2PixelCraft use Tailwind CSS for all websites?",
        a: "Yes. Tailwind CSS is 2PixelCraft's default for all styling. It lets us maintain design consistency, build responsive layouts rapidly, and ship smaller CSS bundles compared to component frameworks like Bootstrap or Material UI.",
      },
    ],
  },


  /* ── Backend ───────────────────────────────────── */
  {
    slug: "node-js",
    name: "Node.js",
    abbr: "No",
    color: "#5FA04E",
    categoryId: "backend",
    categoryLabel: "Backend Development",
    description:
      "We use Node.js for API-heavy and real-time projects — its non-blocking architecture handles high concurrency well, making it ideal for dashboards and data-intensive apps.",
    metaTitle: "Node.js Development Agency in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft builds scalable Node.js backends and REST APIs for businesses in India. Fast delivery, TypeScript-first, and built for production from day one.",
    metaKeywords: [
      "Node.js development agency India",
      "Node.js developer Rajkot",
      "Node.js REST API development India",
      "hire Node.js developer India",
      "Node.js backend development India",
      "2PixelCraft Node.js",
      "Node.js Express agency India",
    ],
    headline: "Node.js Development",
    subheadline: "Fast, scalable backends built for real production load.",
    body: "Node.js is 2PixelCraft's go-to for building backend systems and REST APIs, especially for projects that need to handle high concurrency or real-time features. Its event-driven, non-blocking architecture makes it well-suited for dashboards, notification systems, live data feeds, and API gateways. We always use Node.js with TypeScript and pair it with Express.js for API routing — giving us a clean, maintainable server codebase that can be extended by any developer, not just the original author.",
    useCases: [
      "REST API development for web and mobile apps",
      "Real-time applications with WebSockets",
      "Backend for Next.js full-stack apps",
      "Microservices and API gateways",
      "Admin panel backends",
      "Notification and event-driven systems",
    ],
    relatedSlugs: ["express-js", "typescript", "postgresql", "mongodb", "prisma"],
    faqs: [
      {
        q: "Does 2PixelCraft build Node.js backends?",
        a: "Yes. Node.js is one of 2PixelCraft's primary backend technologies. We use it with TypeScript and Express.js to build REST APIs for web apps, mobile apps, and internal tools.",
      },
      {
        q: "Can 2PixelCraft build a real-time application with Node.js?",
        a: "Yes. Node.js's event-driven architecture is well-suited for real-time features. We've built notification systems, live dashboards, and WebSocket-powered chat using Node.js with Socket.io.",
      },
      {
        q: "Does 2PixelCraft use Node.js with TypeScript?",
        a: "Always. Every Node.js project at 2PixelCraft is written in TypeScript. This gives us type-safe API handlers, auto-complete across the full stack, and a backend codebase that stays maintainable as it grows.",
      },
    ],
  },
  {
    slug: "express-js",
    name: "Express.js",
    abbr: "Ex",
    color: "#ffffff",
    categoryId: "backend",
    categoryLabel: "Backend Development",
    description:
      "Express is 2PixelCraft's go-to for building clean REST APIs on top of Node — minimal, fast, and flexible enough to fit any project's architecture.",
    metaTitle: "Express.js API Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft builds clean, production-ready REST APIs with Express.js and Node.js for businesses across India. TypeScript-first, well-documented, and built to scale.",
    metaKeywords: [
      "Express.js development India",
      "Express.js REST API India",
      "Node.js Express developer Rajkot",
      "2PixelCraft Express.js",
      "Express API development India",
    ],
    headline: "Express.js Development",
    subheadline: "Clean, minimal REST APIs that do exactly what they need to.",
    body: "Express.js is the lightweight backbone of every Node.js backend 2PixelCraft ships. We use it to build well-structured REST APIs with clean routing, middleware chains for auth and validation, and a predictable response format that mobile and web clients can depend on. Express doesn't impose opinions — which means we can structure the API around your business logic rather than the framework's conventions. Every Express project is written in TypeScript with proper error handling, input validation, and API documentation.",
    useCases: [
      "REST API backends for web and mobile",
      "Authentication and authorisation middleware",
      "File upload and processing services",
      "Webhook handlers and integration endpoints",
      "Lightweight microservices",
    ],
    relatedSlugs: ["node-js", "typescript", "postgresql", "mongodb"],
    faqs: [
      {
        q: "Does 2PixelCraft use Express.js for API development?",
        a: "Yes. Express.js is 2PixelCraft's primary framework for building REST APIs with Node.js — always written in TypeScript with structured error handling, validation middleware, and consistent response formats.",
      },
    ],
  },
  {
    slug: "laravel",
    name: "Laravel",
    abbr: "La",
    color: "#FF2D20",
    categoryId: "backend",
    categoryLabel: "Backend Development",
    description:
      "For complex business applications, 2PixelCraft uses Laravel — its auth, queuing, and ORM systems let us deliver enterprise-level features without reinventing the wheel.",
    metaTitle: "Laravel Development Agency in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft builds enterprise-grade Laravel applications for businesses in India. Custom CRM, e-commerce backends, admin panels, and REST APIs — delivered on time.",
    metaKeywords: [
      "Laravel development agency India",
      "Laravel developer Rajkot",
      "Laravel PHP development India",
      "hire Laravel developer India",
      "Laravel REST API India",
      "Laravel e-commerce development India",
      "2PixelCraft Laravel development",
      "Laravel agency Rajkot Gujarat",
      "custom Laravel application India",
    ],
    headline: "Laravel Development",
    subheadline: "Enterprise-grade PHP applications, built elegantly.",
    body: "Laravel is 2PixelCraft's framework of choice for complex, enterprise-grade web applications. Its built-in authentication, Eloquent ORM, job queuing, and robust API development tools let us deliver feature-rich applications faster than building from scratch — without cutting corners on security or architecture. We use Laravel for client projects that need complex business logic, custom admin panels, multi-role user systems, or deep integrations with third-party services. If your project needs a backend that can grow with your business for years, Laravel is the right choice.",
    useCases: [
      "Custom CRM and business management systems",
      "E-commerce backends and admin panels",
      "Multi-role SaaS applications",
      "REST APIs for mobile applications",
      "Inventory and logistics management systems",
      "Booking and appointment platforms",
    ],
    relatedSlugs: ["php", "mysql", "postgresql", "rest-apis"],
    faqs: [
      {
        q: "Does 2PixelCraft build Laravel applications?",
        a: "Yes. Laravel is one of 2PixelCraft's primary backend frameworks. We've built custom business systems, e-commerce backends, CRM tools, and REST APIs for clients across India using Laravel.",
      },
      {
        q: "Can 2PixelCraft build a Laravel admin panel?",
        a: "Yes. We build custom admin panels in Laravel with full CRUD operations, role-based access control, dashboard analytics, and data export features — tailored exactly to your business workflows.",
      },
      {
        q: "Does 2PixelCraft build REST APIs with Laravel?",
        a: "Yes. We build versioned, well-documented REST APIs with Laravel for mobile apps, third-party integrations, and frontend SPAs. Every API includes authentication, input validation, and structured error responses.",
      },
    ],
  },
  {
    slug: "php",
    name: "PHP",
    abbr: "Ph",
    color: "#7A86B8",
    categoryId: "backend",
    categoryLabel: "Backend Development",
    description:
      "Underpinning Laravel and many client systems — 2PixelCraft's PHP expertise means we can build for, integrate with, or extend existing PHP-based infrastructure.",
    metaTitle: "PHP Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft offers PHP web development services for businesses in India — custom PHP applications, Laravel projects, WordPress integrations, and legacy PHP maintenance.",
    metaKeywords: [
      "PHP development India",
      "PHP developer Rajkot",
      "custom PHP application India",
      "PHP Laravel developer India",
      "2PixelCraft PHP development",
      "PHP web development Rajkot Gujarat",
    ],
    headline: "PHP Development",
    subheadline: "The language powering a large part of the web — done properly.",
    body: "PHP powers a significant share of the modern web, and 2PixelCraft has deep experience writing clean, well-structured PHP — primarily through Laravel. Whether it's building a new Laravel application, integrating with an existing PHP-based system, extending a custom PHP platform, or maintaining legacy code for a client, our PHP experience means we can work with your stack rather than asking you to change it. We focus on secure, well-tested PHP code that follows modern standards.",
    useCases: [
      "Laravel web applications",
      "Custom PHP scripts and utilities",
      "API integration with PHP-based services",
      "Legacy PHP application maintenance",
      "WordPress customisation and plugin development",
    ],
    relatedSlugs: ["laravel", "mysql", "rest-apis"],
    faqs: [
      {
        q: "Does 2PixelCraft do PHP development?",
        a: "Yes. 2PixelCraft has extensive PHP experience — primarily through Laravel. We also work with existing custom PHP applications, legacy systems, and WordPress backends when clients require it.",
      },
    ],
  },
  {
    slug: "rest-apis",
    name: "REST APIs",
    abbr: "AP",
    color: "#10B981",
    categoryId: "backend",
    categoryLabel: "Backend Development",
    description:
      "Every product 2PixelCraft ships has a well-structured REST API — clean versioning, consistent response formats, and proper documentation for long-term maintainability.",
    metaTitle: "REST API Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft builds clean, versioned REST APIs for web and mobile applications across India. Consistent response formats, authentication, and full documentation included.",
    metaKeywords: [
      "REST API development India",
      "API development agency India",
      "REST API developer Rajkot",
      "custom API development India",
      "2PixelCraft REST API",
      "mobile app API development India",
    ],
    headline: "REST API Development",
    subheadline: "The connective tissue between your product's layers.",
    body: "Every application 2PixelCraft builds has a well-structured REST API at its core — whether it's the API a React frontend consumes, the backend a Flutter mobile app talks to, or an integration layer between two third-party services. We design APIs with versioning, consistent response envelopes, proper HTTP status codes, and thorough authentication. Every API we deliver comes with documentation so your team (and future developers) always knows exactly how to use it.",
    useCases: [
      "Mobile app backend APIs (Flutter, React Native)",
      "Frontend-backend separation for SPAs",
      "Third-party integrations and webhooks",
      "Microservice communication",
      "Partner APIs for external developers",
    ],
    relatedSlugs: ["node-js", "express-js", "laravel", "flutter"],
    faqs: [
      {
        q: "Does 2PixelCraft build REST APIs for mobile apps?",
        a: "Yes. Every mobile app 2PixelCraft builds has a corresponding REST API backend — typically in Node.js/Express or Laravel. The API handles authentication, data persistence, push notifications, and third-party integrations.",
      },
    ],
  },

  /* ── Mobile ────────────────────────────────────── */
  {
    slug: "flutter",
    name: "Flutter",
    abbr: "Fl",
    color: "#54C5F8",
    categoryId: "mobile",
    categoryLabel: "Mobile App Development",
    description:
      "2PixelCraft's primary mobile framework. Flutter lets us build beautiful, performant iOS and Android apps from one codebase — cutting delivery time significantly compared to native development.",
    metaTitle: "Flutter App Development Agency in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft builds cross-platform iOS and Android apps using Flutter for businesses in India. Beautiful UI, native performance, single codebase — delivered faster and at lower cost.",
    metaKeywords: [
      "Flutter app development India",
      "Flutter developer Rajkot",
      "Flutter app development agency India",
      "cross-platform app development India",
      "iOS Android app development India",
      "hire Flutter developer India",
      "2PixelCraft Flutter development",
      "Flutter agency Rajkot Gujarat",
      "Flutter app development cost India",
    ],
    headline: "Flutter App Development",
    subheadline: "iOS and Android. One codebase. Native performance.",
    body: "Flutter is 2PixelCraft's primary choice for mobile app development. Google's cross-platform SDK lets us build a single codebase that compiles to truly native iOS and Android apps — no WebView, no compromise on performance or UI quality. Flutter's widget system gives us precise control over every pixel, and its hot-reload capability means we can iterate and refine at speed. For clients, choosing Flutter over separate native builds typically cuts both development cost and time to market by a significant margin, without sacrificing the quality your users expect.",
    useCases: [
      "Business and consumer mobile apps for iOS & Android",
      "E-commerce mobile applications",
      "On-demand delivery and logistics apps",
      "Booking and appointment apps",
      "Fitness, health, and lifestyle apps",
      "Mobile dashboards and analytics apps",
    ],
    relatedSlugs: ["dart", "react-native", "rest-apis", "firebase"],
    faqs: [
      {
        q: "Does 2PixelCraft develop Flutter apps for iOS and Android?",
        a: "Yes. Flutter is 2PixelCraft's primary mobile framework. We build a single Flutter codebase that runs natively on both iOS and Android — saving clients the cost and time of building two separate native apps.",
      },
      {
        q: "How long does it take 2PixelCraft to build a Flutter app?",
        a: "It depends on the complexity, but a standard business app with 5-8 screens, authentication, and a backend API typically takes 6-10 weeks from design to App Store submission. Contact us for a specific estimate for your project.",
      },
      {
        q: "Is Flutter better than React Native for my app?",
        a: "Flutter generally gives better UI consistency and performance out of the box, especially for custom designs. React Native is a better fit when your team already has JavaScript/React expertise or you need to share significant code with a web app. 2PixelCraft can advise on the right choice after understanding your specific requirements.",
      },
      {
        q: "Can 2PixelCraft publish my Flutter app to the App Store and Play Store?",
        a: "Yes. App Store and Google Play submission is included in every Flutter project 2PixelCraft delivers — including generating certificates, configuring signing, writing store descriptions, and handling the review process.",
      },
    ],
  },
  {
    slug: "react-native",
    name: "React Native",
    abbr: "RN",
    color: "#61DAFB",
    categoryId: "mobile",
    categoryLabel: "Mobile App Development",
    description:
      "For clients who already have a React web app, 2PixelCraft can extend it into a React Native mobile app — sharing business logic and reducing overall development effort.",
    metaTitle: "React Native App Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft builds cross-platform mobile apps with React Native for businesses in India. Share code with your web app, reduce development cost, and ship on iOS and Android.",
    metaKeywords: [
      "React Native development India",
      "React Native developer Rajkot",
      "React Native app development agency India",
      "cross-platform React Native India",
      "hire React Native developer India",
      "2PixelCraft React Native",
      "React Native iOS Android India",
    ],
    headline: "React Native Development",
    subheadline: "Build mobile with React — and share code with your web app.",
    body: "React Native is 2PixelCraft's choice when a client already has a React web codebase and wants to extend it into mobile. Because React Native uses the same JavaScript/TypeScript as the web, we can share business logic, type definitions, and API client code between the web and mobile apps — reducing total development effort significantly. We've built React Native apps for iOS and Android that integrate with existing Node.js and Next.js backends, and we handle the full process from design to App Store submission.",
    useCases: [
      "Mobile companion apps for existing web platforms",
      "Cross-platform apps sharing web app logic",
      "Business and productivity apps",
      "Social and community applications",
    ],
    relatedSlugs: ["flutter", "react-js", "node-js", "rest-apis"],
    faqs: [
      {
        q: "Does 2PixelCraft build apps with React Native?",
        a: "Yes. We build React Native apps for iOS and Android — particularly for clients who already have a React.js or Next.js web application and want to share code between web and mobile.",
      },
      {
        q: "When should I choose React Native over Flutter?",
        a: "Choose React Native if you already have a web app in React and want to maximise code reuse, or if your team has strong JavaScript expertise. Choose Flutter if you want the best possible UI consistency and performance for a brand-new mobile app. 2PixelCraft can advise based on your specific situation.",
      },
    ],
  },
  {
    slug: "dart",
    name: "Dart",
    abbr: "Da",
    color: "#0175C2",
    categoryId: "mobile",
    categoryLabel: "Mobile App Development",
    description:
      "Dart is the language behind Flutter. 2PixelCraft's Dart expertise lets us write highly optimised, maintainable mobile app code that compiles directly to native ARM.",
    metaTitle: "Dart & Flutter Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft's Flutter developers write production-quality Dart code for iOS and Android apps across India. Null-safe, performant, and built to last.",
    metaKeywords: [
      "Dart Flutter development India",
      "Dart developer India",
      "Flutter Dart agency Rajkot",
      "2PixelCraft Dart Flutter",
    ],
    headline: "Dart Development",
    subheadline: "The language behind Flutter — written the right way.",
    body: "Dart is the programming language that powers Flutter, and 2PixelCraft's deep Dart expertise is what makes our Flutter apps fast, maintainable, and scalable. We write null-safe, strongly-typed Dart with clean architecture patterns — separating UI, business logic, and data layers clearly. This makes Flutter apps built by 2PixelCraft easy to test, easy to extend, and easy for other developers to pick up if the project grows.",
    useCases: [
      "Flutter iOS and Android applications",
      "Dart CLI tools and utilities",
      "Dart backend services (Dart Shelf)",
    ],
    relatedSlugs: ["flutter", "react-native"],
    faqs: [
      {
        q: "Does 2PixelCraft write Dart code for Flutter apps?",
        a: "Yes. All Flutter projects at 2PixelCraft are written in Dart with null safety enabled, clean architecture patterns, and a clear separation of concerns — making the codebase maintainable and testable.",
      },
    ],
  },

  /* ── Databases ─────────────────────────────────── */
  {
    slug: "mysql",
    name: "MySQL",
    abbr: "My",
    color: "#00758F",
    categoryId: "database",
    categoryLabel: "Databases & Storage",
    description:
      "2PixelCraft uses MySQL for projects that need a stable, well-supported relational database — particularly alongside Laravel, where MySQL's ecosystem is deepest.",
    metaTitle: "MySQL Database Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft designs and builds MySQL databases for web applications and APIs across India. Optimised schemas, relationships, indexing, and migrations — built for production.",
    metaKeywords: [
      "MySQL development India",
      "MySQL database developer Rajkot",
      "MySQL Laravel development India",
      "2PixelCraft MySQL database",
      "MySQL web application India",
    ],
    headline: "MySQL Development",
    subheadline: "Reliable relational storage for data-driven applications.",
    body: "MySQL is 2PixelCraft's go-to relational database for Laravel-backed applications. Its maturity, wide hosting support, and deep integration with Laravel's Eloquent ORM make it the pragmatic choice for projects where stability and ecosystem compatibility matter most. We design properly normalised schemas, set up appropriate indexes for query performance, write clean migrations for schema versioning, and configure replication for high-availability setups when project requirements demand it.",
    useCases: [
      "Laravel application databases",
      "E-commerce product and order databases",
      "CRM and business data storage",
      "Reporting and analytics databases",
    ],
    relatedSlugs: ["postgresql", "laravel", "prisma"],
    faqs: [
      {
        q: "Does 2PixelCraft use MySQL for database design?",
        a: "Yes — MySQL is 2PixelCraft's primary relational database for Laravel projects. We design normalised schemas, set up indexes for performance, and write versioned migrations so database changes are always tracked.",
      },
    ],
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    abbr: "Pg",
    color: "#336791",
    categoryId: "database",
    categoryLabel: "Databases & Storage",
    description:
      "Our preferred relational database for complex data models — PostgreSQL's advanced querying, JSONB support, and reliability make it the default for larger Node.js and Next.js projects.",
    metaTitle: "PostgreSQL Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft uses PostgreSQL for complex, high-scale web applications in India. Advanced querying, JSONB, Prisma ORM integration, and production-grade database design.",
    metaKeywords: [
      "PostgreSQL development India",
      "PostgreSQL developer Rajkot",
      "PostgreSQL Node.js development India",
      "Postgres Prisma development India",
      "2PixelCraft PostgreSQL",
    ],
    headline: "PostgreSQL Development",
    subheadline: "Advanced relational storage for complex, growing applications.",
    body: "PostgreSQL is 2PixelCraft's preferred relational database for complex applications built on Node.js or Next.js. Its support for JSONB, full-text search, advanced indexing, and row-level security gives us flexibility that MySQL doesn't match. We use PostgreSQL with Prisma ORM for type-safe, migration-tracked database access — meaning your data layer is as maintainable and reliable as the rest of the codebase. For applications that handle significant data complexity or need to scale, PostgreSQL is almost always the right choice.",
    useCases: [
      "Complex SaaS application databases",
      "Financial and transactional data storage",
      "Full-text search within applications",
      "Multi-tenant application data isolation",
      "Analytics and reporting databases",
    ],
    relatedSlugs: ["mysql", "prisma", "node-js", "next-js"],
    faqs: [
      {
        q: "Does 2PixelCraft use PostgreSQL for web applications?",
        a: "Yes. PostgreSQL is 2PixelCraft's preferred database for Node.js and Next.js projects. We use it with Prisma ORM for type-safe access, automatic migrations, and a clean schema definition.",
      },
    ],
  },
  {
    slug: "mongodb",
    name: "MongoDB",
    abbr: "Mg",
    color: "#47A248",
    categoryId: "database",
    categoryLabel: "Databases & Storage",
    description:
      "When a project's data is flexible or rapidly evolving, 2PixelCraft reaches for MongoDB — its document model removes schema friction during early-stage development.",
    metaTitle: "MongoDB Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft uses MongoDB for flexible, document-based applications and APIs in India. NoSQL database design, Mongoose integration, and production-ready data modelling.",
    metaKeywords: [
      "MongoDB development India",
      "MongoDB developer Rajkot",
      "MongoDB Node.js development India",
      "NoSQL database development India",
      "2PixelCraft MongoDB",
    ],
    headline: "MongoDB Development",
    subheadline: "Flexible, schema-free storage for evolving data structures.",
    body: "MongoDB is 2PixelCraft's choice when a project's data structure is flexible, hierarchical, or likely to change significantly during early development. Its document model lets us store nested, varied data without wrestling with migrations at every schema change — which is valuable during rapid iteration. We use MongoDB with Mongoose for schema validation in Node.js projects, and we model documents carefully to avoid the N+1 query problems that poor MongoDB schemas can cause at scale.",
    useCases: [
      "Content management systems",
      "Product catalogues with variable attributes",
      "User activity and event logs",
      "Real-time data feeds",
      "Rapid prototyping and MVPs",
    ],
    relatedSlugs: ["node-js", "express-js", "postgresql"],
    faqs: [
      {
        q: "Does 2PixelCraft use MongoDB for web applications?",
        a: "Yes — for projects where the data structure is flexible or rapidly evolving, MongoDB is a pragmatic choice. 2PixelCraft uses it with Mongoose for schema validation and careful document modelling.",
      },
    ],
  },
  {
    slug: "firebase",
    name: "Firebase",
    abbr: "Fb",
    color: "#FFCA28",
    categoryId: "database",
    categoryLabel: "Databases & Storage",
    description:
      "For mobile apps and prototypes that need real-time data, 2PixelCraft uses Firebase — its realtime sync and built-in auth dramatically accelerate the initial build.",
    metaTitle: "Firebase App Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft builds Firebase-powered mobile and web apps for businesses in India. Realtime database, authentication, push notifications, and Cloud Functions — fully integrated.",
    metaKeywords: [
      "Firebase development India",
      "Firebase app development Rajkot",
      "Firebase Flutter app India",
      "Firebase realtime database India",
      "2PixelCraft Firebase development",
      "Firebase authentication India",
    ],
    headline: "Firebase Development",
    subheadline: "Real-time data, auth, and backend — without the server setup.",
    body: "Firebase is 2PixelCraft's platform of choice for mobile apps and prototypes that need real-time data synchronisation, instant authentication, and push notifications without the overhead of managing a custom backend. We integrate Firebase with both Flutter and React Native apps — using Firestore for data, Firebase Auth for user management, Cloud Messaging for push notifications, and Cloud Functions for server-side logic. Firebase is especially effective for getting an MVP in front of users quickly, and we can migrate to a custom backend later if scale demands it.",
    useCases: [
      "Real-time chat and messaging features",
      "Mobile app authentication and user management",
      "Push notification systems",
      "MVPs and rapid prototypes",
      "Live data synchronisation features",
    ],
    relatedSlugs: ["flutter", "react-native", "mongodb"],
    faqs: [
      {
        q: "Does 2PixelCraft use Firebase for mobile apps?",
        a: "Yes. Firebase is 2PixelCraft's go-to for Flutter and React Native apps that need real-time data, authentication, and push notifications — particularly for MVPs and projects that need to launch quickly.",
      },
    ],
  },
  {
    slug: "prisma",
    name: "Prisma",
    abbr: "Pr",
    color: "#5A67D8",
    categoryId: "database",
    categoryLabel: "Databases & Storage",
    description:
      "2PixelCraft uses Prisma on all TypeScript backend projects — type-safe queries, automatic migrations, and a clean schema language that keeps the data layer maintainable.",
    metaTitle: "Prisma ORM Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft uses Prisma ORM with PostgreSQL and MySQL on all TypeScript backend projects in India. Type-safe database access, auto-migrations, and clean schema management.",
    metaKeywords: [
      "Prisma ORM development India",
      "Prisma PostgreSQL TypeScript India",
      "Prisma Node.js development India",
      "2PixelCraft Prisma ORM",
      "type-safe database India",
    ],
    headline: "Prisma ORM",
    subheadline: "Type-safe database access for TypeScript backends.",
    body: "Prisma is how 2PixelCraft manages the database layer on all TypeScript backend projects. Its schema-first approach gives us a single source of truth for the data model, automatic migration generation, and fully type-safe query builders that eliminate entire categories of database bugs. We use Prisma with both PostgreSQL and MySQL — and because it integrates seamlessly with TypeScript's type system, the types flow automatically from the database schema all the way up to the API response, without any manual type duplication.",
    useCases: [
      "Type-safe database access in Node.js/TypeScript backends",
      "Database schema management and versioned migrations",
      "Multi-database support (PostgreSQL, MySQL, SQLite)",
      "ORM for full-stack Next.js applications",
    ],
    relatedSlugs: ["postgresql", "mysql", "node-js", "typescript"],
    faqs: [
      {
        q: "Does 2PixelCraft use Prisma ORM for database access?",
        a: "Yes — Prisma is the ORM of choice at 2PixelCraft for all TypeScript backend projects. It provides type-safe queries, automatic migration generation, and a clean schema definition that serves as the single source of truth for the data model.",
      },
    ],
  },

  /* ── Tools ─────────────────────────────────────── */
  {
    slug: "git-github",
    name: "Git & GitHub",
    abbr: "Gh",
    color: "#F05032",
    categoryId: "tools",
    categoryLabel: "Tools & Infrastructure",
    description:
      "Every 2PixelCraft project is version-controlled on GitHub from day one — full history, protected branches, and a clean commit trail so clients always know what changed and when.",
    metaTitle: "Git & GitHub Workflow | 2PixelCraft India",
    metaDescription:
      "Every project 2PixelCraft delivers is fully version-controlled on GitHub — branch protection, pull request workflows, and a complete commit history from day one.",
    metaKeywords: [
      "Git GitHub development workflow India",
      "version control web development India",
      "2PixelCraft Git workflow",
      "GitHub project management India",
    ],
    headline: "Git & GitHub",
    subheadline: "Every change tracked. Every project recoverable.",
    body: "Every project 2PixelCraft starts goes into a GitHub repository on day one. We use branch-based workflows with pull request reviews, protected main branches, and conventional commit messages — so the project history is always clean, readable, and useful. Clients have full access to their repository throughout the project and retain complete ownership of the codebase after delivery. No black-box development — you always know exactly what's been built and when.",
    useCases: [
      "Source code version control",
      "Collaborative development workflows",
      "CI/CD pipeline triggers",
      "Code review and quality gates",
    ],
    relatedSlugs: ["docker", "vercel", "aws"],
    faqs: [
      {
        q: "Does 2PixelCraft use GitHub for project development?",
        a: "Yes. Every project at 2PixelCraft is hosted on GitHub with branch protection, pull request workflows, and a clean commit history. Clients receive full repository access and retain ownership of the code.",
      },
    ],
  },
  {
    slug: "docker",
    name: "Docker",
    abbr: "Do",
    color: "#2496ED",
    categoryId: "tools",
    categoryLabel: "Tools & Infrastructure",
    description:
      "We containerise projects with Docker to eliminate environment drift — development, staging, and production all run identically, meaning fewer surprises on launch day.",
    metaTitle: "Docker & Containerisation | 2PixelCraft India",
    metaDescription:
      "2PixelCraft uses Docker for containerised deployments — consistent environments across development, staging, and production, reducing launch-day surprises for clients.",
    metaKeywords: [
      "Docker containerisation India",
      "Docker deployment India",
      "Docker development agency Rajkot",
      "2PixelCraft Docker",
      "containerised web application India",
    ],
    headline: "Docker",
    subheadline: "Consistent environments from development to production.",
    body: "2PixelCraft uses Docker to containerise backend services and full-stack applications, ensuring that the code runs identically on every developer's machine, in the staging environment, and in production. This eliminates the classic 'works on my machine' problem and means that what we test locally is exactly what gets deployed. Docker also makes it straightforward to run complex multi-service applications (Node.js API + PostgreSQL + Redis, for example) locally with a single command.",
    useCases: [
      "Containerised Node.js and Laravel backends",
      "Multi-service local development environments",
      "Consistent CI/CD deployment pipelines",
      "AWS ECS and EC2 deployments",
    ],
    relatedSlugs: ["aws", "git-github", "node-js"],
    faqs: [
      {
        q: "Does 2PixelCraft use Docker for deployments?",
        a: "Yes — for backend projects that need consistent deployments across environments, 2PixelCraft uses Docker to containerise services. This ensures development, staging, and production all run identical environments.",
      },
    ],
  },
  {
    slug: "vercel",
    name: "Vercel",
    abbr: "Ve",
    color: "#ffffff",
    categoryId: "tools",
    categoryLabel: "Tools & Infrastructure",
    description:
      "2PixelCraft deploys Next.js projects on Vercel for instant global rollouts, automatic preview deployments on every PR, and edge-optimised performance worldwide.",
    metaTitle: "Vercel Deployment & Hosting | 2PixelCraft India",
    metaDescription:
      "2PixelCraft deploys Next.js websites on Vercel for edge-optimised performance, instant deployments, and automatic preview URLs for every pull request.",
    metaKeywords: [
      "Vercel deployment India",
      "Vercel Next.js hosting India",
      "Vercel deployment agency Rajkot",
      "2PixelCraft Vercel hosting",
      "Next.js deployment India",
    ],
    headline: "Vercel",
    subheadline: "The fastest way to get a Next.js site in front of the world.",
    body: "Vercel is 2PixelCraft's deployment platform of choice for all Next.js projects. Its global edge network ensures fast load times worldwide, zero-config deployments mean going live is a single command, and automatic preview deployments for every pull request give clients a live URL to review before any change is merged to production. Vercel's analytics, Core Web Vitals monitoring, and ISR support also give us the observability and performance tools we need to ensure every site we launch continues to perform well after go-live.",
    useCases: [
      "Next.js website hosting and deployment",
      "Preview deployments for client review",
      "Edge-optimised global content delivery",
      "Serverless API functions",
    ],
    relatedSlugs: ["next-js", "aws", "git-github"],
    faqs: [
      {
        q: "Does 2PixelCraft host websites on Vercel?",
        a: "Yes. Vercel is 2PixelCraft's preferred platform for Next.js websites. Every project gets automatic preview deployments per pull request, edge CDN delivery, and performance monitoring built in.",
      },
    ],
  },
  {
    slug: "aws",
    name: "AWS",
    abbr: "AW",
    color: "#FF9900",
    categoryId: "tools",
    categoryLabel: "Tools & Infrastructure",
    description:
      "For projects that outgrow shared hosting, 2PixelCraft provisions infrastructure on AWS — EC2, S3, RDS, Lambda, and CloudFront depending on the project's scale and architecture.",
    metaTitle: "AWS Cloud Infrastructure | 2PixelCraft India",
    metaDescription:
      "2PixelCraft provisions and manages AWS infrastructure for web applications and APIs in India — EC2, S3, RDS, Lambda, CloudFront, and auto-scaling setups.",
    metaKeywords: [
      "AWS cloud infrastructure India",
      "AWS deployment agency India",
      "AWS EC2 S3 RDS India",
      "cloud hosting agency Rajkot",
      "2PixelCraft AWS infrastructure",
      "AWS web application India",
    ],
    headline: "AWS Cloud Infrastructure",
    subheadline: "Enterprise-grade cloud infrastructure for projects that need to scale.",
    body: "For applications that need dedicated infrastructure, 2PixelCraft provisions and manages AWS environments — EC2 instances for compute, RDS for managed databases, S3 for object storage, Lambda for serverless functions, and CloudFront for global content delivery. We set up auto-scaling, load balancing, VPC networking, and IAM permissions following AWS best practices, and we document everything so your team can manage it independently after handover.",
    useCases: [
      "Scalable backend API hosting on EC2",
      "Managed PostgreSQL/MySQL on RDS",
      "File and media storage on S3",
      "Serverless functions on Lambda",
      "CDN and asset delivery via CloudFront",
    ],
    relatedSlugs: ["docker", "node-js", "laravel", "vercel"],
    faqs: [
      {
        q: "Does 2PixelCraft deploy applications on AWS?",
        a: "Yes. For backend-heavy or high-scale applications, 2PixelCraft provisions AWS infrastructure — EC2, RDS, S3, Lambda, and CloudFront — configured with security best practices and documented for client handover.",
      },
    ],
  },
  {
    slug: "figma",
    name: "Figma",
    abbr: "Fi",
    color: "#F24E1E",
    categoryId: "tools",
    categoryLabel: "Tools & Infrastructure",
    description:
      "Every 2PixelCraft project starts in Figma — wireframes, interactive prototypes, component libraries, and production-ready designs before a single line of code is written.",
    metaTitle: "Figma UI/UX Design Services in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft designs all projects in Figma — wireframes, interactive prototypes, design systems, and pixel-perfect UI handoffs for web and mobile applications in India.",
    metaKeywords: [
      "Figma UI UX design India",
      "Figma web design agency Rajkot",
      "Figma prototype design India",
      "UI UX design agency India",
      "2PixelCraft Figma design",
      "web design Figma India",
      "mobile app UI design India",
    ],
    headline: "Figma Design",
    subheadline: "Where every 2PixelCraft project begins — before a line of code.",
    body: "Every project 2PixelCraft delivers starts in Figma. Before writing a single line of code, we design wireframes, interactive prototypes, and production-ready UI screens — giving clients a complete visual picture of the final product to review, provide feedback on, and approve. This design-first approach eliminates surprises during development, ensures the final product matches expectations exactly, and dramatically reduces the number of revisions needed after coding begins. Clients receive the Figma files as part of delivery, giving them a living design system they can extend independently.",
    useCases: [
      "Website UI design and prototyping",
      "Mobile app UI/UX design",
      "Design systems and component libraries",
      "Wireframing and information architecture",
      "Client design approval and review",
    ],
    relatedSlugs: ["react-js", "next-js", "flutter", "tailwind-css"],
    faqs: [
      {
        q: "Does 2PixelCraft design in Figma before development?",
        a: "Yes — every project starts with Figma design. We deliver wireframes and high-fidelity UI designs for client approval before writing any code, ensuring the final product matches expectations and reducing revision cycles.",
      },
      {
        q: "Will I receive the Figma files after the project?",
        a: "Yes. Figma files are included in every project delivery from 2PixelCraft — full ownership, all frames, components, and styles, so your team can extend the design independently in the future.",
      },
    ],
  },



    {
    slug: "html-css",
    name: "HTML & CSS",
    abbr: "HC",
  color: "#E34F26",
    categoryId: "frontend",
    categoryLabel: "Frontend Development",
    description:
      "Every 2PixelCraft project is built on semantic, accessible HTML and clean CSS — the foundation that ensures performance, accessibility, and search engine visibility.",
    metaTitle: "HTML & CSS Web Development in India | 2PixelCraft",
    metaDescription:
      "2PixelCraft writes semantic, accessible HTML and clean CSS on every project — the foundation for fast-loading, SEO-friendly, and accessible websites across India.",
    metaKeywords: [
      "HTML CSS web development India",
      "semantic HTML website India",
      "accessible web design India",
      "2PixelCraft HTML CSS",
      "web development Rajkot India",
    ],
    headline: "HTML & CSS",
    subheadline: "Semantic, accessible, and built to last.",
    body: "Solid HTML and CSS is the foundation of everything 2PixelCraft builds. We write semantic HTML to ensure proper document structure, screen reader accessibility, and maximum crawlability for search engines. Clean, well-organised CSS (or Tailwind utilities) ensures layouts are responsive, consistent across browsers, and performant. It might seem basic, but getting the fundamentals right is what separates websites that rank and convert from those that don't.",
    useCases: [
      "Semantic page structure for SEO",
      "Accessible UI for all users",
      "Cross-browser compatible layouts",
      "Email templates",
      "Static landing pages",
    ],
    relatedSlugs: ["react-js", "next-js", "tailwind-css"],
    faqs: [
      {
        q: "Does 2PixelCraft write semantic HTML for SEO?",
        a: "Yes. Semantic HTML — proper heading hierarchy, landmark elements, structured data, and meaningful alt text — is a core part of 2PixelCraft's development process. It improves both search engine crawlability and accessibility.",
      },
    ],
  },
];

export function getTechBySlug(slug: string): Tech | undefined {
  return techs.find((t) => t.slug === slug);
}

export function getTechsByCategory(categoryId: string): Tech[] {
  return techs.filter((t) => t.categoryId === categoryId);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export const allSlugs = techs.map((t) => t.slug);

export const techsUrl = (slug: string) => `${siteConfig.url}/technologies/${slug}`;
