"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Quote, 
  Clock, 
  Calendar 
} from "lucide-react";
import { CaseStudy } from "@/data/site-config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function CaseStudyView({ project, otherProjects }: { project: CaseStudy; otherProjects: CaseStudy[] }) {
  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#0d0a06] text-stone-900 dark:text-amber-50 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link & Breadcrumb */}
          <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-500 dark:text-amber-300/70 mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 hover:text-amber-600 dark:hover:text-amber-400 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Work</span>
            </Link>
            <span>/</span>
            <span className="text-stone-700 dark:text-amber-100 truncate">{project.title}</span>
          </div>

          {/* Hero Header */}
          <div className="border-b border-amber-200/80 dark:border-amber-900/60 pb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/60 dark:bg-[#22180c] text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80">
                {project.clientType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-stone-700 dark:text-amber-100/90 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {/* Quick Metadata Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60">
              <div>
                <div className="text-[11px] uppercase font-bold text-stone-400 dark:text-amber-400/60">Client</div>
                <div className="text-sm font-bold text-stone-900 dark:text-white mt-0.5">{project.client}</div>
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold text-stone-400 dark:text-amber-400/60">Timeline</div>
                <div className="text-sm font-bold text-stone-900 dark:text-white mt-0.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  {project.timeline}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold text-stone-400 dark:text-amber-400/60">Year</div>
                <div className="text-sm font-bold text-stone-900 dark:text-white mt-0.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  {project.year}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold text-stone-400 dark:text-amber-400/60">Role</div>
                <div className="text-sm font-bold text-stone-900 dark:text-white mt-0.5">End-to-End Build</div>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="py-12 border-b border-amber-200/80 dark:border-amber-900/60">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-amber-400/60 mb-6">
              Verified Business Outcomes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-stone-900 dark:text-white mt-1">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-amber-300/70 mt-0.5">
                    {m.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep-Dive Narrative: Challenge vs Solution */}
          <div className="py-12 space-y-10 border-b border-amber-200/80 dark:border-amber-900/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-2">
                  The Problem & Bottlenecks
                </span>
                <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-2">
                  Our Engineering Solution
                </span>
                <p className="text-sm sm:text-base text-stone-700 dark:text-amber-100 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Architectural Highlights */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60">
              <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-4">
                Key Architectural Highlights & Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-amber-100/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Used */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-amber-400/60 mb-3">
                Technologies & Frameworks Employed
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-amber-100/60 dark:bg-[#22180c] text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="py-12 border-b border-amber-200/80 dark:border-amber-900/60">
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-tr from-[#1c140a] to-[#26190a] text-white relative shadow-xl border border-amber-900/60">
              <Quote className="w-10 h-10 text-amber-500/40 mb-3" />
              <p className="text-base sm:text-lg italic leading-relaxed text-amber-100">
                "{project.testimonial.quote}"
              </p>
              <div className="mt-5 pt-4 border-t border-amber-900/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{project.testimonial.author}</div>
                  <div className="text-xs text-amber-300/70">{project.testimonial.role}, {project.testimonial.company}</div>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="py-12 text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white">
              Want similar results for your business?
            </h3>
            <p className="text-sm sm:text-base text-stone-600 dark:text-amber-100/80 max-w-lg mx-auto">
              We can engineer a customized web solution tailored to your operational bottlenecks and revenue goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 transition-all shadow-lg shadow-amber-500/25"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-stone-700 dark:text-amber-200 bg-white/90 dark:bg-[#16110a]/90 border border-amber-200 dark:border-amber-800/80 hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-colors"
              >
                <span>View More Case Studies</span>
              </Link>
            </div>
          </div>

          {/* Related Projects */}
          {otherProjects.length > 0 && (
            <div className="pt-8 border-t border-amber-200/80 dark:border-amber-900/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-amber-400/60 mb-6">
                Explore Other Case Studies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/work/${p.slug}`}
                    className="p-5 rounded-2xl bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 hover:border-amber-500 transition-all group"
                  >
                    <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 block mb-1">
                      {p.category}
                    </span>
                    <h5 className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {p.title}
                    </h5>
                    <p className="mt-1 text-xs text-stone-500 dark:text-amber-200/70 line-clamp-2">
                      {p.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}