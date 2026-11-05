"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: SITE_CONFIG.contactFormOptions.projectTypes[0],
    budget: SITE_CONFIG.contactFormOptions.budgetRanges[1],
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Listen for pricing tier selection event from Pricing.tsx
  useEffect(() => {
    const handleSelectPricing = (e: any) => {
      const plan = e.detail?.plan;
      if (plan) {
        if (plan.includes("Starter")) {
          setFormData((prev) => ({
            ...prev,
            projectType: "High-Performance Landing Page",
            budget: SITE_CONFIG.contactFormOptions.budgetRanges[0],
          }));
        } else if (plan.includes("Business")) {
          setFormData((prev) => ({
            ...prev,
            projectType: "High-Converting Business Website",
            budget: SITE_CONFIG.contactFormOptions.budgetRanges[1],
          }));
        } else if (plan.includes("Custom") || plan.includes("Scale")) {
          setFormData((prev) => ({
            ...prev,
            projectType: "Custom Web App / SaaS MVP",
            budget: SITE_CONFIG.contactFormOptions.budgetRanges[3],
          }));
        }
      }
    };

    window.addEventListener("select-pricing-tier", handleSelectPricing);
    return () => window.removeEventListener("select-pricing-tier", handleSelectPricing);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again or WhatsApp us directly.");
      }

      setStatus("success");
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#d97706", "#f59e0b", "#fbbf24", "#ffffff"],
        });
      } catch (err) {}
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us via WhatsApp.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-16 bg-amber-50/30 dark:bg-[#0f0b07]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Value Statement */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 uppercase tracking-wider mb-4">
                Let's Build Together
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
                Ready to grow your digital empire?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-stone-700 dark:text-amber-100/90 leading-relaxed">
                Fill out the project scope on the right, or contact us directly on WhatsApp for an immediate response. We provide a transparent project roadmap within 24 hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {/* WhatsApp direct */}
              <a
                href={SITE_CONFIG.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300/80 dark:border-emerald-800/60 hover:border-emerald-500 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                      Fastest Response
                    </div>
                    <div className="text-sm font-black text-stone-900 dark:text-white">
                      Chat on WhatsApp (+91 88987 25000)
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${SITE_CONFIG.company.email}?subject=Project%20Inquiry%20-%20Yadu%20Enterprises`}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 hover:border-amber-500 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-[#241a0d] text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 dark:text-amber-300/70">Direct Founder Email</div>
                    <div className="text-sm font-bold text-stone-900 dark:text-white">
                      {SITE_CONFIG.company.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Direct Phone */}
              <a
                href={`tel:${SITE_CONFIG.company.phone}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 hover:border-amber-500 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/60 dark:bg-[#241a0d] text-amber-800 dark:text-amber-300 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 dark:text-amber-300/70">Call Us Direct</div>
                    <div className="text-sm font-bold text-stone-900 dark:text-white">
                      {SITE_CONFIG.company.phoneDisplay}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Location & Guarantee Notice */}
            <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-stone-700 dark:text-amber-200/90">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{SITE_CONFIG.company.location} ({SITE_CONFIG.company.address})</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-700 dark:text-amber-200/90">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{SITE_CONFIG.company.responseTime}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Working Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white/95 dark:bg-[#16110a]/95 border border-amber-200/80 dark:border-amber-900/60 shadow-xl">
              {status === "success" ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-stone-900 dark:text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 dark:text-amber-100/90 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900 dark:text-white">{formData.name}</strong>. We have received your project details and will review your scope within 2 business hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={SITE_CONFIG.company.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed up via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-4 py-2.5 rounded-xl border border-amber-200 dark:border-amber-800 text-xs sm:text-sm font-semibold text-stone-700 dark:text-amber-200 hover:bg-amber-50 dark:hover:bg-amber-950/60 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white">
                      Request a Fixed-Price Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-amber-300/70 mt-1">
                      Tell us about your goals. We'll reply with a detailed proposal and timeline.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs sm:text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-amber-200 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/30 dark:bg-[#1a1208] text-stone-900 dark:text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-amber-200 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/30 dark:bg-[#1a1208] text-stone-900 dark:text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-amber-200 mb-1.5">
                      Phone / WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/30 dark:bg-[#1a1208] text-stone-900 dark:text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Project Type Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-amber-200 mb-2">
                      What are you looking to build? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SITE_CONFIG.contactFormOptions.projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                            formData.projectType === type
                              ? "bg-amber-100/80 dark:bg-amber-950/70 border-amber-600 text-amber-900 dark:text-amber-200 shadow-sm"
                              : "bg-amber-50/30 dark:bg-[#1a1208] border-amber-200/80 dark:border-amber-900/50 text-stone-600 dark:text-amber-300/80 hover:border-amber-400"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-amber-200 mb-2">
                      Estimated Project Budget *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {SITE_CONFIG.contactFormOptions.budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`px-3 py-2 rounded-xl text-[11px] font-black text-center transition-all border ${
                            formData.budget === range
                              ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white border-amber-600 shadow"
                              : "bg-amber-50/30 dark:bg-[#1a1208] border-amber-200/80 dark:border-amber-900/50 text-stone-600 dark:text-amber-300/80 hover:border-amber-400"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-amber-200 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your business, timeline, key features required, or any existing website links..."
                      className="w-full px-4 py-3 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/30 dark:bg-[#1a1208] text-stone-900 dark:text-white placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:to-amber-600 active:scale-95 disabled:opacity-60 transition-all shadow-md shadow-amber-500/25"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Your Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-stone-500 dark:text-amber-300/70">
                    No spam, guaranteed. We respect your confidentiality and sign NDAs upon request.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}