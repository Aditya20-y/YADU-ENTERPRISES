"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function SelectedWork() {
  return (
    <section id="work" className="py-20 md:py-28 bg-amber-50/30 dark:bg-[#0f0b07]/50 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 uppercase tracking-wider mb-4">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
              Selected Work & Proven Impact.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-700 dark:text-amber-100/90">
              Real projects engineered for real client growth. Each case study below highlights the business problem, our engineering solution, and verified metrics.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-amber-700 dark:text-amber-300 bg-amber-100/60 dark:bg-amber-950/50 border border-amber-300/80 dark:border-amber-800 hover:bg-amber-200/60 dark:hover:bg-amber-900/60 transition-colors"
            >
              <span>Have a project in mind?</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 space-y-10 sm:space-y-12">
          {SITE_CONFIG.projects.map((project) => (
            <div
              key={project.slug}
              className="group rounded-3xl bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Preview Half */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#1c140a] via-[#150f08] to-[#24170a] p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden border-b lg:border-b-0 lg:border-r border-amber-950">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar inside mockup */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-amber-200/60 pb-4 border-b border-amber-900/60">
                      <span className="font-mono uppercase tracking-wider">{project.category}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30">
                        {project.timeline}
                      </span>
                    </div>

                    <div className="mt-8">
                      <div className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-1">
                        Client Case Study
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-amber-100/80 leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Device / Metric Pill Showcase */}
                  <div className="mt-8 pt-6 border-t border-amber-900/60">
                    <div className="text-xs font-semibold text-amber-200/60 mb-2">Key Metric Highlights</div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-[#120d07] border border-amber-900/70">
                          <div className="text-lg font-black text-amber-400">{m.value}</div>
                          <div className="text-[11px] text-amber-100/80 truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Details Half */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Problem / Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                          The Challenge:
                        </span>
                        <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                          Our Engineered Solution:
                        </span>
                        <p className="text-xs sm:text-sm text-stone-800 dark:text-amber-100 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Metrics Row */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-amber-400/60 mb-3">
                        Measurable Impact:
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {project.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-amber-50/50 dark:bg-[#1a1208] border border-amber-200/70 dark:border-amber-900/50"
                          >
                            <div className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-medium text-stone-600 dark:text-amber-200/70 leading-tight mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-amber-100/60 dark:bg-[#22180c] text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / View Case Study */}
                  <div className="mt-8 pt-5 border-t border-amber-100 dark:border-amber-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-xs text-stone-600 dark:text-amber-200/70 italic">
                      "{project.testimonial.quote.slice(0, 95)}..."
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-stone-900 hover:bg-amber-600 dark:bg-[#261c10] dark:hover:bg-amber-600 transition-colors shadow-sm shrink-0"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}