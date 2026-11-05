# YADU-ENTERPRISES — Official Startup Portfolio Website

> **"We build websites and web apps that help you grow your empire."**  
> High-converting landing pages, modern e-commerce stores, and scalable custom web applications engineered with zero bloat and delivered 2x faster.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, Strict TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom tokens & glassmorphism
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: Light Mode by default with persistent dark mode toggle (`localStorage` + CSS variables)
- **Contact API**: Native Next.js App Router route (`/api/contact`) supporting Resend, Web3Forms, or Formspree with instant WhatsApp fallback
- **SEO & Accessibility**: WCAG AA compliant contrast, dynamic XML sitemaps, automated robots.txt, OpenGraph tags, and JSON-LD `ProfessionalService` schema

---

## 📁 Project Directory Structure

```
yadu-enterprises/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # Working contact API handler
│   │   ├── privacy/
│   │   │   └── page.tsx             # Privacy Policy (WCAG AA & GDPR friendly)
│   │   ├── terms/
│   │   │   └── page.tsx             # Terms of Service & Commercial Engagement
│   │   ├── work/
│   │   │   └── [slug]/
│   │   │       └── page.tsx         # Dynamic Case Study detail pages
│   │   ├── globals.css              # Tailwind v4 styles, light/dark themes
│   │   ├── layout.tsx               # Root layout, metadata, theme script, JSON-LD schema
│   │   ├── page.tsx                 # Single-page agency showcase (Hero -> Contact)
│   │   ├── robots.ts                # Auto-generated robots.txt
│   │   └── sitemap.ts               # Auto-generated XML sitemap
│   ├── components/
│   │   ├── CaseStudyView.tsx        # In-depth case study layout component
│   │   ├── ContactSection.tsx       # Interactive quote request form + WhatsApp/Email
│   │   ├── FAQ.tsx                  # Accessible accordion addressing client hesitations
│   │   ├── Footer.tsx               # Agency footer with navigation and legal links
│   │   ├── Hero.tsx                 # High-impact headline, CTAs, trust metrics, preview
│   │   ├── Navbar.tsx               # Sticky header, mobile drawer & theme switcher
│   │   ├── Pricing.tsx              # 3 transparent pricing tiers with one-click quote selection
│   │   ├── Process.tsx              # 4-stage transparent roadmap with time estimates
│   │   ├── SelectedWork.tsx         # Realistic project showcase cards with verified ROI
│   │   ├── Services.tsx             # 6 core agency service cards with target audiences
│   │   ├── Testimonials.tsx         # Realistic client reviews with company badges
│   │   ├── ThemeToggle.tsx          # Smooth Light / Dark mode toggle button
│   │   └── WhyUs.tsx                # Speed, quality, ownership, direct developer access
│   └── data/
│       └── site-config.ts           # ⭐ SINGLE SOURCE OF TRUTH (Edit all text here!)
├── public/
│   ├── favicon.svg                  # Brand SVG favicon
│   └── og-image.svg                 # OpenGraph social share card
├── .env.example                     # Environment variables template
├── next.config.ts                   # Next.js configuration
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js**: v18.17.0+ (Tested on Node.js v26 LTS)
- **Package Manager**: npm, pnpm, or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Content (Single File Setup)

All text, prices, projects, phone numbers, email addresses, and FAQs are centralized in:

📂 `src/data/site-config.ts`

To customize your website:
1. **Company Information**: Edit `company.name`, `company.tagline`, `company.phone`, `company.email`, `company.address`, and `company.whatsappNumber`.
2. **Services**: Add, remove, or modify services under `services`.
3. **Projects & Case Studies**: Edit project names, challenges, solutions, and metrics under `projects`. New case study pages are generated automatically!
4. **Pricing Tiers**: Adjust prices (INR & USD) and features under `pricingTiers`.
5. **Testimonials**: Update client quotes and names under `testimonials`.
6. **FAQs**: Add or update answers under `faqs`.

---

## 📧 Contact Form Setup & Environment Keys

The contact form is pre-wired to work right out of the box with `/api/contact`. You have 3 easy options:

### Option A: Web3Forms (Simplest, Zero Backend Setup)
1. Get a free key at [web3forms.com](https://web3forms.com).
2. Create `.env.local` in the project root:
   ```env
   WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

### Option B: Resend (Professional Transactional Email)
1. Get an API key at [resend.com](https://resend.com).
2. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_NOTIFICATION_EMAIL=aditya43775@gmail.com
   ```

### Option C: Direct WhatsApp & Phone (Always Active)
Even without third-party email keys, every inquiry is logged to the server console and the visitor can click one button to instantly send their scope directly to your WhatsApp (`+91 8898725000`).

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Set Framework Preset: **Next.js**.
5. In the **Environment Variables** section, paste any keys from `.env.example` (e.g. `CONTACT_NOTIFICATION_EMAIL`, `WEB3FORMS_ACCESS_KEY` or `RESEND_API_KEY`).
6. Click **Deploy**. Your site will be live on an ultra-fast global edge network in under 2 minutes.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add your environment variables in Netlify site settings.

---

## ✅ Pre-Launch Checklist

Before you announce your website to paying clients, review this quick checklist:

- [ ] **Brand Name & Tagline**: Confirm `SITE_CONFIG.company.name` and tagline in `src/data/site-config.ts`.
- [ ] **Contact Info**: Verify your phone (`8898725000`), email (`aditya43775@gmail.com`), and Chandigarh office address.
- [ ] **WhatsApp Number**: Ensure `whatsappNumber` in `site-config.ts` matches your live business WhatsApp.
- [ ] **Email Provider**: Add your `WEB3FORMS_ACCESS_KEY` or `RESEND_API_KEY` into production environment variables.
- [ ] **Domain**: Set your production domain in `site-config.ts` (`company.url = "https://yourdomain.com"`).
- [ ] **Projects & Case Studies**: Replace placeholder projects in `site-config.ts` with your actual client portfolio once completed.
- [ ] **Favicon / Logo**: Replace `/public/favicon.svg` with your custom brand logo if desired.
- [ ] **Social Media Links**: Update LinkedIn, GitHub, and Twitter URLs in `site-config.ts`.
