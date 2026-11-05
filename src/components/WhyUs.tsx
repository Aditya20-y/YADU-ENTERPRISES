"use client";

import React from "react";
import { Zap, Sparkles, Lock, PhoneCall, Check, X } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

const pillarIcons: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-amber-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
  Lock: <Lock className="w-6 h-6 text-emerald-500" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-amber-600" />,
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 uppercase tracking-wider mb-4">
            The Competitive Edge
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            {SITE_CONFIG.whyUs.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 dark:text-amber-100/90">
            {SITE_CONFIG.whyUs.subheading}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.whyUs.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 shadow-sm hover:border-amber-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-[#22180d] border border-amber-200/80 dark:border-amber-800/60 flex items-center justify-center mb-5">
                {pillarIcons[pillar.iconName] || <Zap className="w-6 h-6 text-amber-500" />}
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-stone-600 dark:text-amber-100/80 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Comparison Table */}
        <div className="mt-16 bg-white/95 dark:bg-[#16110a]/95 rounded-3xl border border-amber-200/80 dark:border-amber-900/60 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 border-b border-amber-100 dark:border-amber-900/60">
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white">
              Direct Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-amber-300/70 mt-1">
              Why business owners trust our modern agile approach over legacy models.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-amber-50/60 dark:bg-[#120d07] border-b border-amber-200/70 dark:border-amber-900/60">
                  <th className="py-4 px-6 font-bold text-stone-700 dark:text-amber-200">Feature</th>
                  <th className="py-4 px-6 font-bold text-amber-800 dark:text-amber-300 bg-amber-100/60 dark:bg-amber-950/40">
                    YADU-ENTERPRISES
                  </th>
                  <th className="py-4 px-6 font-medium text-stone-500 dark:text-amber-400/60">Traditional Agency</th>
                  <th className="py-4 px-6 font-medium text-stone-500 dark:text-amber-400/60">Freelancer Marketplace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 dark:divide-amber-900/60">
                {SITE_CONFIG.whyUs.comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 dark:hover:bg-[#1f150b]/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-stone-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-bold text-amber-800 dark:text-amber-300 bg-amber-100/40 dark:bg-amber-950/30">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{row.yadu}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-stone-600 dark:text-stone-400">
                      {row.agencies}
                    </td>
                    <td className="py-4 px-6 text-stone-600 dark:text-stone-400">
                      {row.freelancers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}