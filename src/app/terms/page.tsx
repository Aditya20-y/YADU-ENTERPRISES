import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/site-config";

export const metadata = {
  title: "Terms of Service | YADU-ENTERPRISES",
  description: "Terms of service and commercial engagement policies for Yadu Enterprises.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col justify-between">
      <Navbar />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800/90 shadow-sm space-y-8">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Terms of Service & Engagement
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Last Updated: March 2026 • Governing Law: Jurisdiction of Chandigarh, India
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Scope of Engagement</h2>
              <p>
                These terms govern all custom web design, software development, e-commerce engineering, and maintenance services delivered by <strong>{SITE_CONFIG.company.legalName}</strong> (&quot;YADU-ENTERPRISES&quot;). Each client engagement operates under a specific statement of work (SOW) defining milestones, deliverables, and fixed fees.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Payment Milestones</h2>
              <p>
                Unless explicitly agreed upon in a customized enterprise contract:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>A 50% mobilization deposit is required to initiate design prototypes and schedule sprint capacity.</li>
                <li>The remaining 50% balance is invoiced upon final staging sign-off, immediately prior to production domain transfer or source code handoff.</li>
                <li>Monthly maintenance retainers are invoiced at the commencement of each billing cycle.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Intellectual Property Transfer</h2>
              <p>
                Upon settlement of all contracted project invoices, full commercial ownership, copyright, and intellectual property rights in custom code, templates, and Figma assets created exclusively for the client are irrevocably assigned to the client. Third-party open-source libraries (e.g., Next.js, React, Tailwind) remain governed by their respective MIT/Apache licenses.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">4. Revisions & Approvals</h2>
              <p>
                All fixed-price packages include two (2) comprehensive rounds of feedback during the design prototype phase and unlimited bug-fixing adjustments during staging deployment. Scope additions requested after final architecture approval will be quoted separately as change orders.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">5. Warranty & Hypercare Support</h2>
              <p>
                Every deployment includes 14 to 60 days of complimentary post-launch Hypercare (based on selected tier). During this period, any technical defects, cross-browser anomalies, or responsiveness bugs are resolved with zero additional cost.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">6. Direct Contact</h2>
              <p>
                For questions regarding commercial contracts or ongoing agreements:
              </p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                Email: {SITE_CONFIG.company.email}<br />
                WhatsApp / Call: {SITE_CONFIG.company.phoneDisplay}<br />
                Headquarters: {SITE_CONFIG.company.location} ({SITE_CONFIG.company.address})
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
