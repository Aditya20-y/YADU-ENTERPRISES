"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function Pricing() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const handleSelectPlan = (planName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("select-pricing-tier", { detail: { plan: planName } }));
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-amber-50/30 dark:bg-[#0f0b07]/50 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 uppercase tracking-wider mb-4">
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            Clear, honest pricing. Zero hidden fees.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 dark:text-amber-100/90">
            Fixed scope, predictable budgets, and complete source code ownership. No surprise hourly overages.
          </p>

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-white/90 dark:bg-[#1a1209]/90 border border-amber-200 dark:border-amber-900/60 shadow-sm">
            <button
              onClick={() => setCurrency("INR")}
              type="button"
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "INR"
                  ? "bg-amber-600 text-white shadow"
                  : "text-stone-600 dark:text-amber-300/80 hover:text-stone-900 dark:hover:text-white"
              }`}
            >
              INR (₹) Domestic
            </button>
            <button
              onClick={() => setCurrency("USD")}
              type="button"
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-amber-600 text-white shadow"
                  : "text-stone-600 dark:text-amber-300/80 hover:text-stone-900 dark:hover:text-white"
              }`}
            >
              USD ($) Global
            </button>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SITE_CONFIG.pricingTiers.map((tier) => {
            const price = currency === "INR" ? tier.priceINR : tier.priceUSD;
            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-white dark:bg-[#16110a] border-2 border-amber-500 shadow-xl shadow-amber-500/15 scale-100 lg:-translate-y-2"
                    : "bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Audience */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black text-stone-900 dark:text-white">
                        {tier.name}
                      </h3>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        {tier.audience}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-100/60 dark:bg-[#241a0d] px-2.5 py-1 rounded-md">
                      <Clock className="w-3 h-3 text-amber-500" />
                      {tier.timeline}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-amber-100/80">
                    {tier.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-amber-100 dark:border-amber-900/60">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs text-stone-500 dark:text-amber-300/70 font-medium">
                        / one-time fixed
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-amber-400/60">
                      What's Included:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-amber-200/90">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-6 border-t border-amber-100 dark:border-amber-900/60">
                  <button
                    onClick={() => handleSelectPlan(tier.name)}
                    type="button"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all shadow-sm ${
                      tier.popular
                        ? "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white shadow-amber-500/25"
                        : "bg-stone-900 dark:bg-[#241a0d] hover:bg-amber-600 dark:hover:bg-amber-600 text-white"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="mt-2.5 text-center text-[11px] text-stone-400 dark:text-amber-400/70 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Includes full IP transfer & warranty</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}