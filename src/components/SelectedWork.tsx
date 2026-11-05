"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function SelectedWork() {
  return (
    <section id="work" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-950/40 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 uppercase tracking-wider mb-4">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Selected Work & Proven Impact.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Real projects engineered for real client growth. Each case study below highlights the business problem, our engineering solution, and verified metrics.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
            >
              <span>Have a project in mind?</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 space-y-10 sm:space-y-12">
          {SITE_CONFIG.projects.map((project, index) => (
            <div
              key={project.slug}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Preview Half */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Bar inside mockup */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-slate-800">
                      <span className="font-mono uppercase tracking-wider">{project.category}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium">
                        {project.timeline}
                      </span>
                    </div>

                    <div className="mt-8">
                      <div className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-1">
                        Client Case Study
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Device / Metric Pill Showcase */}
                  <div className="mt-8 pt-6 border-t border-slate-800/80">
                    <div className="text-xs font-semibold text-slate-400 mb-2">Key Metric Highlights</div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                          <div className="text-lg font-extrabold text-emerald-400">{m.value}</div>
                          <div className="text-[11px] text-slate-300 truncate">{m.label}</div>
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
                      <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                          The Challenge:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                          Our Engineered Solution:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Metrics Row */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                        Measurable Impact:
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {project.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800/60"
                          >
                            <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
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
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / View Case Study */}
                  <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                      "{project.testimonial.quote.slice(0, 95)}..."
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 transition-colors shadow-sm shrink-0"
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
