export interface Metric {
  label: string;
  value: string;
  change: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  clientType: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  metrics: Metric[];
  tags: string[];
  timeline: string;
  year: string;
  liveUrl?: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  badge: string;
  shortDesc: string;
  idealFor: string;
  deliverables: string[];
  timeline: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceINR: string;
  priceUSD: string;
  popular?: boolean;
  audience: string;
  timeline: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatarText: string;
  rating: number;
  projectSlug?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "pricing" | "process" | "tech" | "support";
}

export const SITE_CONFIG = {
  company: {
    name: "YADU-ENTERPRISES",
    legalName: "Yadu Enterprises Digital Solutions",
    tagline: "We build high-impact websites and web apps that grow your empire.",
    refinedTagline: "Engineered for Conversion. Architected for Scale.",
    subtext:
      "From high-converting landing pages and modern e-commerce stores to scalable SaaS platforms and custom web applications — built with zero bloat and delivered 2x faster.",
    location: "Chandigarh, India",
    address: "IT Park / Sector 17, Chandigarh, India 160017",
    email: "aditya43775@gmail.com",
    phone: "+91 8898725000",
    phoneDisplay: "+91 88987 25000",
    alternatePhone: "+91 8898725000",
    whatsappNumber: "918898725000",
    whatsappUrl:
      "https://wa.me/918898725000?text=Hello%20Yadu%20Enterprises!%20I%20would%20like%20to%20discuss%20a%20new%20website%20/%20web%20app%20project.",
    operatingHours: "Mon – Sat: 9:00 AM – 8:00 PM IST",
    responseTime: "Guaranteed response within 2 business hours",
    url: "https://yadu-enterprises.com",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      whatsapp: "https://wa.me/918898725000",
    },
  },

  stats: [
    { label: "Successful Projects Launched", value: "38+", suffix: "" },
    { label: "Average Performance Score", value: "98/100", suffix: "" },
    { label: "Average Conversion Boost", value: "2.4x", suffix: "" },
    { label: "Client Satisfaction Rating", value: "4.9/5", suffix: "" },
  ],

  trustIndicators: [
    "100% Full Code Ownership",
    "Zero Template Bloat",
    "Lighthouse 90+ Guaranteed",
    "Post-Launch Hypercare Included",
  ],

  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Selected Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      id: "business-websites",
      slug: "business-websites",
      title: "High-Converting Business Websites",
      iconName: "Globe",
      badge: "Most Popular",
      shortDesc:
        "Bespoke multi-page corporate websites engineered to establish authority, rank on Google, and convert visitors into qualified paying clients.",
      idealFor:
        "Service firms, consultancies, B2B companies, clinics, and expanding regional businesses.",
      deliverables: [
        "Custom brand-aligned UI/UX design (Figma to Code)",
        "Mobile-first responsive architecture",
        "Sub-second load speeds with Core Web Vitals 95+",
        "Lead capture funnels, CRM forms & analytics tracking",
        "Structured SEO schema and local metadata",
      ],
      timeline: "7–14 Days",
    },
    {
      id: "web-apps",
      slug: "web-apps",
      title: "Custom Web Apps & SaaS MVPs",
      iconName: "Code2",
      badge: "High Impact",
      shortDesc:
        "Robust, reactive web applications, customer portals, internal management dashboards, and SaaS minimum viable products.",
      idealFor:
        "Founders launching new tech ventures, businesses automating internal spreadsheets, and operations teams.",
      deliverables: [
        "Full-stack Next.js / React with TypeScript architecture",
        "Secure database modeling & REST/GraphQL API integration",
        "Authentication, user roles & automated email triggers",
        "Payment gateway billing & subscription webhooks",
        "Production-grade Vercel/AWS automated CI/CD pipeline",
      ],
      timeline: "3–6 Weeks",
    },
    {
      id: "ecommerce",
      slug: "ecommerce",
      title: "Modern High-Speed E-Commerce",
      iconName: "ShoppingBag",
      badge: "Revenue Booster",
      shortDesc:
        "Fast, frictionless online storefronts engineered to maximize average order value, reduce cart abandonment, and streamline inventory.",
      idealFor:
        "Direct-to-Consumer (D2C) brands, boutique manufacturers, and retail shops looking to scale online sales.",
      deliverables: [
        "Friction-free 1-page checkout flow",
        "UPI, Credit Card, Netbanking, Stripe & Razorpay integration",
        "Catalog management, variants & real-time stock sync",
        "Automated WhatsApp order confirmation & tracking notifications",
        "Instant search, filtering, and cross-sell modules",
      ],
      timeline: "2–4 Weeks",
    },
    {
      id: "redesign-modernization",
      slug: "redesign-modernization",
      title: "Website Redesign & Modernization",
      iconName: "Sparkles",
      badge: "Transformation",
      shortDesc:
        "Transform an outdated, sluggish, or clunky legacy site into a crisp, modern digital flagship that outshines your competitors.",
      idealFor:
        "Established companies losing customers to outdated interfaces, high bounce rates, or broken mobile navigation.",
      deliverables: [
        "Comprehensive UI/UX heuristic audit & funnel analysis",
        "Migration from bloated builders (Wix, old WordPress) to Next.js",
        "Zero-downtime DNS & content migration preserving SEO ranking",
        "Dramatic reduction in bounce rate and page weight",
        "Modern dark/light UI tokens and polished micro-interactions",
      ],
      timeline: "1–3 Weeks",
    },
    {
      id: "landing-pages",
      slug: "landing-pages",
      title: "High-Performance Landing Pages",
      iconName: "Zap",
      badge: "Rapid Launch",
      shortDesc:
        "Laser-focused, single-page sales funnels crafted to maximize ROI on paid ad campaigns, product waitlists, and promotional launches.",
      idealFor:
        "Creators launching courses, startups validating new offers, and marketers running Google/Meta ad funnels.",
      deliverables: [
        "Psychology-driven conversion copy hierarchy",
        "A/B test ready layout with tracking pixels (Meta, Google, LinkedIn)",
        "Instant lead notification to your email and WhatsApp",
        "Lighthouse 100/100 speed optimization for lower cost-per-click",
      ],
      timeline: "3–5 Days",
    },
    {
      id: "maintenance-seo",
      slug: "maintenance-seo",
      title: "Maintenance, Security & Core Web Vitals",
      iconName: "ShieldCheck",
      badge: "Peace of Mind",
      shortDesc:
        "Proactive monthly upkeep, uptime monitoring, security patching, and technical SEO enhancements so your site never skips a beat.",
      idealFor:
        "Busy business owners who want reliable ongoing engineering support without the overhead of an in-house developer.",
      deliverables: [
        "24/7 automated uptime and SSL certificate monitoring",
        "Monthly security audits, dependency updates & backups",
        "Core Web Vitals monitoring and continuous performance tuning",
        "Dedicated priority developer response for content updates",
        "Monthly health report with traffic and speed insights",
      ],
      timeline: "Monthly Retainer",
    },
  ],

  projects: [
    {
      slug: "nexus-health",
      title: "NexusHealth – Telehealth & Patient Intake Portal",
      client: "Nexus Medical Care",
      clientType: "Healthcare / Telemedicine",
      category: "Custom Web App",
      summary:
        "Architected a HIPAA-compliant patient intake and automated appointment booking web app that slashed scheduling drop-off by 64% and doubled digital consultations.",
      problem:
        "The clinic was losing over 40% of potential appointments due to a convoluted 8-step phone and legacy portal workflow with 6-second mobile load times and heavy administrative friction.",
      solution:
        "Engineered an ultra-fast 2-step booking workflow with real-time doctor availability calendars, automated WhatsApp reminders, and secure patient intake forms.",
      keyFeatures: [
        "Real-time slot locking preventing double-bookings",
        "Automated WhatsApp notification pipeline via Twilio/Meta API",
        "Zero-knowledge encrypted health questionnaire",
        "Sub-second load times on mobile 4G networks",
      ],
      metrics: [
        { label: "Booking Conversion Rate", value: "+184%", change: "From 3.2% to 9.1%" },
        { label: "Mobile Page Load Speed", value: "0.68s", change: "Down from 5.9s" },
        { label: "Patient No-Show Rate", value: "-48%", change: "Via automated WhatsApp alerts" },
        { label: "Admin Scheduling Hours", value: "22 hrs/wk saved", change: "Fully automated sync" },
      ],
      tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "PostgreSQL", "WhatsApp API"],
      timeline: "4 Weeks",
      year: "2026",
      testimonial: {
        quote:
          "YADU-ENTERPRISES transformed our entire digital patient pipeline. Our clinic staff saves over 20 hours a week and patient bookings doubled in the first month alone.",
        author: "Dr. Rohit Singhania",
        role: "Chief Medical Officer",
        company: "Nexus Medical Care",
      },
    },
    {
      slug: "apex-fintech",
      title: "Apex Capital – Wealth Advisory & Portfolio Platform",
      client: "Apex Capital Partners",
      clientType: "FinTech & Wealth Management",
      category: "Corporate Platform",
      summary:
        "Designed and developed an executive wealth advisory platform and client analytics portal managing over $14M in advised client assets.",
      problem:
        "An outdated WordPress template with zero interactive tooling failed to inspire confidence among high-net-worth investors and family office principals.",
      solution:
        "Engineered a bespoke web platform featuring real-time compound interest projections, dynamic risk profile assessments, and private client portal access.",
      keyFeatures: [
        "Interactive investment growth and compounding calculator",
        "Gated client document vault with bank-grade encryption",
        "Real-time market indices ticker integration",
        "Instant consultation scheduling synced with calendar",
      ],
      metrics: [
        { label: "Inbound Qualified Inquiries", value: "+210%", change: "Within first 90 days" },
        { label: "Average Session Duration", value: "4m 12s", change: "Up from 48 seconds" },
        { label: "Lighthouse Performance", value: "99/100", change: "Zero bloated scripts" },
        { label: "High-Net-Worth Pipeline", value: "$4.2M+", change: "Directly attributed to web portal" },
      ],
      tags: ["Next.js", "React", "Tailwind CSS", "Chart.js", "Financial APIs"],
      timeline: "3 Weeks",
      year: "2026",
      testimonial: {
        quote:
          "The level of engineering craft and attention to detail from Yadu Enterprises is unmatched. We regularly receive praise from high-ticket clients on how sleek and reassuring our portal feels.",
        author: "Manish Agarwal",
        role: "Managing Partner",
        company: "Apex Capital Partners",
      },
    },
    {
      slug: "luxe-living",
      title: "LuxeLiving – Premium D2C Modular Interior Store",
      client: "LuxeLiving Studio",
      clientType: "Retail & D2C E-Commerce",
      category: "E-Commerce",
      summary:
        "Engineered a headless Next.js e-commerce storefront with a custom 360 room visualizer and 1-click checkout that boosted average order value by 38%.",
      problem:
        "A bloated Shopify theme suffered from 72% mobile cart abandonment and sluggish 5-second image loads, failing to convey the luxury craftsmanship of handcrafted modular furniture.",
      solution:
        "Constructed a high-velocity headless commerce frontend with instant client-side filtering, custom room dimension configuration, and integrated UPI/Stripe payments.",
      keyFeatures: [
        "Instant room dimension and fabric texture switcher",
        "Sub-second checkout flow with express payment methods",
        "Direct-to-designer WhatsApp concierge inquiry button",
        "Automated inventory management & shipping status webhooks",
      ],
      metrics: [
        { label: "Cart Abandonment Drop", value: "-35%", change: "Down to 37%" },
        { label: "Average Order Value (AOV)", value: "+38%", change: "From ₹18,500 to ₹25,530" },
        { label: "Mobile Checkout Speed", value: "1.2s", change: "3.4x faster checkout" },
        { label: "First Month Revenue", value: "₹38.5L", change: "+114% YoY growth" },
      ],
      tags: ["Headless E-Commerce", "Next.js", "Tailwind CSS", "Razorpay / Stripe", "WebP/AVIF"],
      timeline: "3.5 Weeks",
      year: "2026",
      testimonial: {
        quote:
          "Working with YADU-ENTERPRISES was hands down the best investment we made this year. The store looks and feels like an international luxury house, and our mobile orders skyrocketed.",
        author: "Pooja Verma",
        role: "Founder & Creative Director",
        company: "LuxeLiving Studio",
      },
    },
    {
      slug: "pulse-metrics",
      title: "PulseMetrics – Cloud Observability & Telemetry SaaS",
      client: "PulseMetrics Inc.",
      clientType: "B2B SaaS / Developer Tools",
      category: "SaaS Platform",
      summary:
        "Built a high-converting developer marketing site and real-time telemetry dashboard that drove 4,500+ developer signups in the first 60 days.",
      problem:
        "A technically powerful monitoring tool had a dense, jargon-laden website with a 1.8% conversion rate and low trial activation among engineering leads.",
      solution:
        "Created an interactive live-latency sandbox right on the hero section allowing visitors to test live server pings before signing up, backed by a polished dark-mode dashboard UI.",
      keyFeatures: [
        "Live interactive server ping test in hero banner",
        "Interactive pricing calculator based on data ingestion volume",
        "Comprehensive documentation portal with syntax highlighting",
        "One-click GitHub & Google OAuth signup flow",
      ],
      metrics: [
        { label: "Free Trial Signups", value: "+320%", change: "4,500+ developers joined" },
        { label: "Homepage Conversion Rate", value: "14.2%", change: "Industry benchmark is ~3.5%" },
        { label: "Time to First 'Aha' Moment", value: "30s", change: "Via interactive sandbox" },
        { label: "Enterprise Inbound Deals", value: "38 Leads", change: "Pipeline in 60 days" },
      ],
      tags: ["Next.js App Router", "Tailwind CSS", "WebSockets", "Vercel", "TypeScript"],
      timeline: "4 Weeks",
      year: "2026",
      testimonial: {
        quote:
          "They understand both serious engineering and ruthless conversion design. The interactive demo they built on our hero section literally sells our software for us.",
        author: "Vikram Sethi",
        role: "Head of Product",
        company: "PulseMetrics",
      },
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Strategic Blueprint",
      duration: "Days 1 – 3",
      tagline: "We clarify the mission before writing a single line of code.",
      description:
        "We analyze your business model, target audience, competitive landscape, and revenue goals. You receive a clear technical architecture, sitemap, and feature scope with fixed timelines.",
      deliverables: ["Product specification", "Sitemap & wireframe outline", "Fixed quote & milestone schedule"],
    },
    {
      step: "02",
      title: "UI/UX Prototype & Craft",
      duration: "Days 4 – 7",
      tagline: "Design that looks world-class and converts on instinct.",
      description:
        "We craft pixel-perfect, high-fidelity responsive mockups tailored to your brand identity. You review interactive prototypes and give feedback before development starts.",
      deliverables: ["High-fidelity Figma prototypes", "Design system & typography scale", "Interactive click-through preview"],
    },
    {
      step: "03",
      title: "High-Velocity Production Build",
      duration: "Weeks 2 – 3",
      tagline: "Clean Next.js code, zero bloat, and sub-second performance.",
      description:
        "We build your application using modern Next.js App Router, Tailwind CSS, and strict TypeScript. We wire up live forms, payment gateways, databases, and dynamic content.",
      deliverables: ["Private staging URL for review", "Full-stack code implementation", "Cross-browser & mobile testing"],
    },
    {
      step: "04",
      title: "Rigorous QA, Launch & Hypercare",
      duration: "Week 4+",
      tagline: "Flawless deployment with 30-day post-launch support.",
      description:
        "We test accessibility (WCAG AA), Core Web Vitals (Lighthouse 90+), SEO schemas, and SSL. Once approved, we push to your custom domain and provide 30 days of free priority support.",
      deliverables: ["Production domain deployment", "100% full source code transfer", "30-Day dedicated bug-free warranty"],
    },
  ],

  pricingTiers: [
    {
      id: "starter",
      name: "Starter Launch",
      tagline: "Ideal for freelancers, solo creators & small local shops.",
      priceINR: "₹19,999",
      priceUSD: "$299",
      popular: false,
      audience: "Individuals & Creators",
      timeline: "5 – 7 Days Delivery",
      features: [
        "Modern 1 to 3 page responsive website",
        "Mobile-first design optimized for all screens",
        "Working contact form with email notifications",
        "Direct WhatsApp click-to-chat integration",
        "Basic SEO setup (meta tags, sitemap, favicon)",
        "Lightning-fast hosting deployment (Vercel/Netlify)",
        "14 days of complimentary post-launch support",
        "100% source code ownership",
      ],
      notIncluded: ["Custom database/backend", "User accounts/portals"],
      ctaText: "Select Starter Tier",
    },
    {
      id: "business",
      name: "Business Growth",
      tagline: "Our most popular package for established businesses & agencies.",
      priceINR: "₹44,999",
      priceUSD: "$649",
      popular: true,
      audience: "Growing Companies & SMBs",
      timeline: "10 – 14 Days Delivery",
      features: [
        "Up to 7 custom pages tailored to your brand",
        "Conversion-focused copywriting & visual hierarchy",
        "Dynamic CMS / blog integration for easy content editing",
        "Advanced interactive components & micro-animations",
        "Lead capture funnels with CRM / Google Sheets sync",
        "Guaranteed 95+ Google Lighthouse speed score",
        "Full technical SEO (schema markup, OpenGraph, robots)",
        "30 days of dedicated priority support",
        "Complete source code & Figma assets handed over",
      ],
      ctaText: "Select Business Tier",
    },
    {
      id: "custom",
      name: "Scale & Web App",
      tagline: "For SaaS startups, customer portals & high-volume e-commerce.",
      priceINR: "₹99,999+",
      priceUSD: "$1,499+",
      popular: false,
      audience: "Startups & Enterprises",
      timeline: "3 – 6 Weeks Delivery",
      features: [
        "Full-stack custom web application or SaaS platform",
        "User authentication, role-based access & profile dashboards",
        "Secure database integration (PostgreSQL, Supabase, MongoDB)",
        "Payment gateway & automated billing (Stripe, Razorpay)",
        "Third-party API integrations & custom webhooks",
        "Dedicated staging & production CI/CD environments",
        "Comprehensive QA & automated testing coverage",
        "60 days of hypercare warranty & developer training",
        "Full commercial intellectual property assignment",
      ],
      ctaText: "Discuss Custom Scope",
    },
  ],

  whyUs: {
    heading: "Why Fast-Growing Businesses Choose Yadu Enterprises",
    subheading:
      "We bridge the gap between expensive, slow-moving agencies and unreliable freelance marketplaces.",
    pillars: [
      {
        iconName: "Zap",
        title: "2x Faster Delivery",
        description:
          "No endless layers of account managers. You work directly with senior full-stack engineers who turn requirements into working software in days, not months.",
      },
      {
        iconName: "Sparkles",
        title: "Craftsmanship & 95+ Speed",
        description:
          "We never use bloated WordPress themes or slow drag-and-drop builders. Every project is custom-coded in Next.js for sub-second speeds and maximum Google rankings.",
      },
      {
        iconName: "Lock",
        title: "100% IP & Code Ownership",
        description:
          "No vendor lock-in, no hidden monthly hosting markups. You own every line of code, your repository, your domain, and your design assets from day one.",
      },
      {
        iconName: "PhoneCall",
        title: "Direct Founder & Dev Access",
        description:
          "Direct communication via WhatsApp, Slack, or Google Meet. We speak fluent business and fluent code without confusing technical jargon.",
      },
    ],
    comparison: [
      {
        feature: "Development Speed",
        yadu: "7 – 21 Days (Rapid sprints)",
        agencies: "2 – 4 Months (Slow bureaucracy)",
        freelancers: "Unpredictable (Frequent ghosting)",
      },
      {
        feature: "Tech Stack",
        yadu: "Modern Next.js 16 + React 19 + Tailwind",
        agencies: "Heavy custom frameworks / older stacks",
        freelancers: "Bloated Elementor / WP templates",
      },
      {
        feature: "Performance & SEO",
        yadu: "Lighthouse 95+ Guaranteed",
        agencies: "Often 60–80 due to script bloat",
        freelancers: "Rarely tested or optimized",
      },
      {
        feature: "Direct Developer Contact",
        yadu: "Yes, direct phone & WhatsApp access",
        agencies: "Account manager intermediary only",
        freelancers: "Inconsistent communication",
      },
      {
        feature: "Post-Launch Warranty",
        yadu: "30–60 Days Hypercare included",
        agencies: "Expensive hourly retainers",
        freelancers: "None after final payment",
      },
    ],
  },

  testimonials: [
    {
      id: "1",
      quote:
        "YADU-ENTERPRISES completely changed how our company acquires clients. Our new web platform looks like an enterprise product and loads instantly on mobile. Patient inquiries doubled in our very first month.",
      author: "Dr. Rohit Singhania",
      role: "Chief Medical Officer",
      company: "Nexus Medical Care",
      location: "Chandigarh / Delhi NCR",
      avatarText: "RS",
      rating: 5,
      projectSlug: "nexus-health",
    },
    {
      id: "2",
      quote:
        "The responsiveness and direct communication were a breath of fresh air. They built our wealth advisory portal in 3 weeks flat, and our high-ticket investor leads went up by over 200%. True engineering craftsmen.",
      author: "Manish Agarwal",
      role: "Managing Partner",
      company: "Apex Capital Partners",
      location: "Mumbai, India",
      avatarText: "MA",
      rating: 5,
      projectSlug: "apex-fintech",
    },
    {
      id: "3",
      quote:
        "As an interior brand, aesthetics and speed are everything. Yadu Enterprises built a bespoke e-commerce site with an interactive visualizer that crushed our cart abandonment rate. Best tech investment we've made.",
      author: "Pooja Verma",
      role: "Founder & Creative Director",
      company: "LuxeLiving Studio",
      location: "Bengaluru, India",
      avatarText: "PV",
      rating: 5,
      projectSlug: "luxe-living",
    },
  ],

  faqs: [
    {
      question: "How much does a new website or web application cost?",
      answer:
        "We believe in transparent, value-driven pricing without hidden surprises. Our Starter Launch begins at ₹19,999 ($299) for creators and small shops. Our full Business Growth package is ₹44,999 ($649) for expanding companies. Custom web applications and SaaS platforms start at ₹99,999 ($1,499) depending on features. Every quote is fixed before we begin.",
      category: "pricing",
    },
    {
      question: "How long will my project take from start to finish?",
      answer:
        "A standard landing page or starter site is delivered in 5 to 7 days. A comprehensive multi-page business website takes 10 to 14 days. Custom full-stack web applications and SaaS platforms typically take 3 to 6 weeks. We work in rapid, transparent milestones so you can test features as they are built.",
      category: "process",
    },
    {
      question: "Do I actually own the website, code, and design?",
      answer:
        "100% yes. Once the final payment is cleared, you own full commercial rights to all source code, Figma design files, assets, and database schemas. We transfer everything to your GitHub/repository. We never hold your assets hostage.",
      category: "process",
    },
    {
      question: "Where is the website hosted, and what are the ongoing fees?",
      answer:
        "We deploy modern sites on world-class, ultra-reliable infrastructure like Vercel, AWS, or Netlify with automatic SSL certificates. For most business sites, baseline hosting costs $0 to $20/month. We help you set up your own account so you have direct billing control.",
      category: "tech",
    },
    {
      question: "Why do you use Next.js and custom code instead of WordPress or Wix?",
      answer:
        "Pre-built site builders (Wix, Elementor, old WordPress) come packed with hundreds of unused scripts, plugin vulnerabilities, and slow mobile loading speeds that hurt your Google SEO rankings and conversions. Next.js delivers sub-second load times, bank-grade security, and unlimited flexibility to scale your business.",
      category: "tech",
    },
    {
      question: "What is your revision and approval policy?",
      answer:
        "We collaborate closely at every phase. We first present the design prototype for your feedback before writing code. We include 2 rounds of structural design revisions and unlimited polish adjustments during the staging review to ensure you are 100% satisfied.",
      category: "process",
    },
    {
      question: "What happens after the website is launched?",
      answer:
        "Every project includes 14 to 60 days of complimentary post-launch Hypercare. During this window, we fix any bugs, fine-tune responsiveness, and assist with any launch adjustments at zero extra cost. We also offer affordable monthly maintenance retainers for continuous peace of mind.",
      category: "support",
    },
    {
      question: "How do we get started, and how do payments work?",
      answer:
        "Getting started is simple: click 'Get a Free Quote' or message us on WhatsApp (+91 8898725000). We schedule a 15-minute discovery chat, provide a tailored proposal, and begin upon an initial deposit (typically 50% upfront, 50% upon final staging sign-off).",
      category: "pricing",
    },
  ],

  contactFormOptions: {
    projectTypes: [
      "High-Converting Business Website",
      "Custom Web App / SaaS MVP",
      "Modern E-Commerce Store",
      "Website Redesign & Modernization",
      "High-Performance Landing Page",
      "Ongoing Maintenance & Retainer",
    ],
    budgetRanges: [
      "Under ₹25,000 / $350",
      "₹25,000 – ₹50,000 / $350 – $750",
      "₹50,000 – ₹1,20,000 / $750 – $1,700",
      "₹1,20,000+ / $1,700+",
    ],
    timelineOptions: [
      "Immediately (Within 1 week)",
      "Within 2–4 weeks",
      "Next 1–2 months",
      "Just exploring / Gathering quotes",
    ],
  },
};
