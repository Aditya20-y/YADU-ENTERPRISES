"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, Sparkles, TrendingUp, Code2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] hero-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Accepting 3 New Client Projects for Q2/Q3</span>
            <span className="text-blue-400 dark:text-blue-600">•</span>
            <span className="hidden sm:inline">Chandigarh & Global</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            We build websites and web apps that{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              grow your empire.
            </span>
          </h1>

          {/* Refined Subheadline */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            High-converting landing pages, modern e-commerce stores, and scalable custom web applications — engineered with zero bloat and delivered 2x faster.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all shadow-sm"
            >
              <span>View Selected Work</span>
            </a>
          </div>

          {/* Social Proof Line */}
          <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-[10px] font-bold text-white border-2 border-white dark:border-slate-900">
                  RS
                </span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-[10px] font-bold text-white border-2 border-white dark:border-slate-900">
                  MA
                </span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-[10px] font-bold text-white border-2 border-white dark:border-slate-900">
                  PV
                </span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900 dark:text-slate-200 text-xs">
                  Trusted by 35+ clients & founders
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% On-Time Delivery</span>
            </div>

            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Full Code & IP Ownership</span>
            </div>
          </div>
        </div>

        {/* Visual Device / Interactive Showcase Mockup */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-slate-200/80 to-slate-300/40 dark:from-slate-800 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl">
            {/* Window bar */}
            <div className="bg-slate-900 text-white rounded-xl overflow-hidden border border-slate-800">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-slate-400 hidden sm:inline">
                    https://app.yadu-enterprises.com
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Lighthouse 99/100
                  </span>
                  <span className="hidden md:inline bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    Next.js App Router
                  </span>
                </div>
              </div>

              {/* Showcase interior */}
              <div className="p-4 sm:p-8 bg-slate-950 text-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Sub-second Speed</div>
                      <div className="text-xl font-bold text-white mt-0.5">0.68s Avg Load</div>
                      <div className="text-[11px] text-emerald-400 mt-1">Core Web Vitals Pass</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Client Revenue Impact</div>
                      <div className="text-xl font-bold text-white mt-0.5">+184% Growth</div>
                      <div className="text-[11px] text-blue-400 mt-1">Verified case results</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Code Architecture</div>
                      <div className="text-xl font-bold text-white mt-0.5">Zero Tech Debt</div>
                      <div className="text-[11px] text-slate-300 mt-1">Clean TypeScript + Next.js</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h2 className="text-base font-semibold text-white">
                      Need a project built with this level of precision?
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fast 15-minute consultation. Fixed pricing proposals delivered within 24 hours.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="#contact"
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow"
                    >
                      Request Free Estimate
                    </a>
                    <a
                      href={SITE_CONFIG.company.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-semibold transition-colors border border-slate-700"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Key Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
