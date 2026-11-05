"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-amber-50/30 dark:bg-[#0f0b07]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 uppercase tracking-wider mb-4">
            Client Voices
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            Trusted by founders who demand results.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 dark:text-amber-100/90">
            Hear directly from the businesses and teams we've helped launch, redesign, and scale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-7 sm:p-8 bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-200/60 dark:text-amber-900/40" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-stone-700 dark:text-amber-100/90 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Project info */}
              <div className="mt-8 pt-5 border-t border-amber-100 dark:border-amber-900/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-600 text-white font-bold text-xs flex items-center justify-center shadow">
                      {item.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-white leading-tight">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-amber-300/70">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>

                  {item.projectSlug && (
                    <Link
                      href={`/work/${item.projectSlug}`}
                      aria-label={`View ${item.company} case study`}
                      className="p-1.5 rounded-lg text-amber-600 dark:text-amber-400 hover:bg-amber-100/60 dark:hover:bg-amber-950/60 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}