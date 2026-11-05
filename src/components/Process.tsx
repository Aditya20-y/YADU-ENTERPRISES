"use client";

import React from "react";
import { CheckCircle2, Clock, FileCode, Rocket, Compass, Layout } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

const stepIcons = [Compass, Layout, FileCode, Rocket];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 uppercase tracking-wider mb-4">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Clear milestones. Zero surprises.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A streamlined 4-step engineering roadmap designed to take your idea from concept to a production-grade live deployment.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.process.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm flex flex-col justify-between hover:border-blue-500/40 transition-colors"
              >
                <div>
                  {/* Top Step Number + Duration */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
                    <span className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                      {step.step}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <Clock className="w-3 h-3 text-blue-500" />
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {step.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/20">
          <div>
            <h4 className="text-base sm:text-lg font-bold">
              Need custom timeline requirements or an urgent launch?
            </h4>
            <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
              We offer accelerated sprint delivery for time-critical marketing launches and MVPs.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-semibold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow shrink-0"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
