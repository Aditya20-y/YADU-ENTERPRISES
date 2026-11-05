import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata = {
  title: "Privacy Policy | YADU-ENTERPRISES",
  description: "Privacy policy and client data protection standards at Yadu Enterprises.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#0d0a06] text-stone-900 dark:text-amber-50 flex flex-col justify-between">
      <Navbar />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white/95 dark:bg-[#16110a]/95 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-amber-900/60 shadow-sm space-y-8">
          <div className="border-b border-amber-100 dark:border-amber-900/60 pb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-[#241a0d] text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-black text-stone-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-stone-500 dark:text-amber-300/70 mt-2">
              Last Updated: March 2026 • Effective Date: January 2026
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-stone-600 dark:text-amber-100/80 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-stone-900 dark:text-white mb-2">1. Overview</h2>
              <p>
                At <strong>{SITE_CONFIG.company.legalName}</strong> (&quot;Yadu Enterprises&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect your privacy and are committed to safeguarding personal and proprietary business information submitted through our website and inquiry channels.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-stone-900 dark:text-white mb-2">2. Information We Collect</h2>
              <p>
                We only collect information directly provided by you when requesting a project quote, filling out contact forms, or communicating with our team via email or WhatsApp:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Your name, business email, and phone/WhatsApp number.</li>
                <li>Project requirements, estimated budgets, and technical scope notes.</li>
                <li>Technical server analytics (anonymized IP addresses and browser types for security and spam prevention).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-stone-900 dark:text-white mb-2">3. How We Use Your Information</h2>
              <p>
                Your data is exclusively used to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Evaluate project feasibility and furnish fixed-price proposals.</li>
                <li>Execute project deliverables under contractual agreement.</li>
                <li>Communicate milestone updates and provide ongoing support.</li>
              </ul>
              <p className="mt-2 font-medium text-stone-900 dark:text-white">
                We never sell, rent, or monetize your contact or project data to third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-stone-900 dark:text-white mb-2">4. Non-Disclosure & Intellectual Property</h2>
              <p>
                We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to reviewing proprietary software concepts, databases, or trade secrets. All project intellectual property developed for paying clients is fully transferred upon final settlement.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-stone-900 dark:text-white mb-2">5. Contact Information</h2>
              <p>
                For privacy inquiries or data removal requests, contact our compliance officer at:
              </p>
              <p className="mt-1 font-semibold text-stone-900 dark:text-white">
                Email: {SITE_CONFIG.company.email}<br />
                Location: {SITE_CONFIG.company.location} ({SITE_CONFIG.company.address})<br />
                Phone: {SITE_CONFIG.company.phoneDisplay}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}