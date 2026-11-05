import type { Metadata, Viewport } from "next";
import Image from "next/image";
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
        url: "/images/bg-krishna.jpg",
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
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfbf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0a06" },
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
    logo: `${SITE_CONFIG.company.url}/images/logo.jpg`,
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
      <body className="antialiased bg-[#fdfbf7] dark:bg-[#0d0a06] text-[#1c1409] dark:text-[#fcf8f0] min-h-screen relative selection:bg-amber-500 selection:text-white">
        {/* Subtle, High-End Ambient Background from Lord Krishna Art */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Background image container */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.11] dark:opacity-[0.16] transition-opacity duration-500"
            style={{
              backgroundImage: `url('/images/bg-krishna.jpg')`,
              backgroundAttachment: "fixed",
            }}
          />
          {/* Subtle warm radiant gradient mesh overlay to blend with foreground */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/85 via-[#fdfbf7]/60 to-[#fdfbf7]/90 dark:from-[#0d0a06]/90 dark:via-[#0d0a06]/75 dark:to-[#0d0a06]/95" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-10 w-[600px] h-[600px] bg-amber-600/5 dark:bg-amber-600/10 rounded-full blur-3xl" />
        </div>

        {children}
      </body>
    </html>
  );
}