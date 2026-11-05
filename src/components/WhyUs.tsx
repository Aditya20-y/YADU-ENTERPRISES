"use client";

import React from "react";
import { Zap, Sparkles, Lock, PhoneCall, Check, X, ShieldAlert } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

const pillarIcons: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-blue-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-indigo-500" />,
  Lock: <Lock className="w-6 h-6 text-emerald-500" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-sky-500" />,
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 uppercase tracking-wider mb-4">
            The Competitive Edge
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {SITE_CONFIG.whyUs.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {SITE_CONFIG.whyUs.subheading}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.whyUs.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:border-blue-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center mb-5">
                {pillarIcons[pillar.iconName] || <Zap className="w-6 h-6 text-blue-500" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Comparison Table */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Direct Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Why business owners trust our modern agile approach over legacy models.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/70 dark:bg-slate-950/50 border-b border-slate-200/60 dark:border-slate-800">
                  <th className="py-4 px-6 font-bold text-slate-600 dark:text-slate-300">Feature</th>
                  <th className="py-4 px-6 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30">
                    YADU-ENTERPRISES
                  </th>
                  <th className="py-4 px-6 font-medium text-slate-500 dark:text-slate-400">Traditional Agency</th>
                  <th className="py-4 px-6 font-medium text-slate-500 dark:text-slate-400">Freelancer Marketplace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {SITE_CONFIG.whyUs.comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-bold text-blue-700 dark:text-blue-300 bg-blue-50/30 dark:bg-blue-950/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{row.yadu}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      {row.agencies}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
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
