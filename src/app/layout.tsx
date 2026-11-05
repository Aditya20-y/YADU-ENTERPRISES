import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.company.url),
  title: {
    default: `${SITE_CONFIG.company.name} | We Build Websites & Web Apps That Grow Your Empire`,
    template: `%s | ${SITE_CONFIG.company.name}`,
  },
  description: SITE_CONFIG.company.subtext,
  keywords: [
    "web development agency",
    "custom web apps",
    "Next.js web developer",
    "high converting landing pages",
    "modern ecommerce website",
    "SaaS MVP development",
    "website redesign",
    "web development Chandigarh India",
    "YADU ENTERPRISES",
  ],
  authors: [{ name: SITE_CONFIG.company.name, url: SITE_CONFIG.company.url }],
  creator: SITE_CONFIG.company.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.company.url,
    title: `${SITE_CONFIG.company.name} | We Build Websites & Web Apps That Grow Your Empire`,
    description: SITE_CONFIG.company.subtext,
    siteName: SITE_CONFIG.company.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.company.name} - Web Applications & High-Converting Websites`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.company.name} | We Build Websites & Web Apps`,
    description: SITE_CONFIG.company.subtext,
    creator: "@yaduenterprises",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.company.name,
    legalName: SITE_CONFIG.company.legalName,
    url: SITE_CONFIG.company.url,
    logo: `${SITE_CONFIG.company.url}/favicon.svg`,
    description: SITE_CONFIG.company.subtext,
    telephone: SITE_CONFIG.company.phone,
    email: SITE_CONFIG.company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.company.address,
      addressLocality: "Chandigarh",
      addressRegion: "Chandigarh",
      postalCode: "160017",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.7333",
      longitude: "76.7794",
    },
    priceRange: "₹₹ - ₹₹₹₹",
    openingHours: "Mo-Sa 09:00-20:00",
    sameAs: [
      SITE_CONFIG.company.socialLinks.linkedin,
      SITE_CONFIG.company.socialLinks.github,
      SITE_CONFIG.company.socialLinks.twitter,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('yadu_theme');
                if (saved === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
