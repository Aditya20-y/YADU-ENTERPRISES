"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 uppercase tracking-wider mb-4">
            Client Voices
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Trusted by founders who demand results.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Hear directly from the businesses and teams we've helped launch, redesign, and scale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-100 dark:text-slate-800" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Project info */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow">
                      {item.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>

                  {item.projectSlug && (
                    <Link
                      href={`/work/${item.projectSlug}`}
                      aria-label={`View ${item.company} case study`}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
