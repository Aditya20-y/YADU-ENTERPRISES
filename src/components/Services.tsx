"use client";

import React from "react";
import { 
  Globe, 
  Code2, 
  ShoppingBag, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Clock 
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 uppercase tracking-wider mb-4">
            Our Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            Engineered to solve business bottlenecks.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 dark:text-amber-100/90">
            Whether you need a high-converting marketing site or an intricate SaaS application, we provide end-to-end design, engineering, and continuous deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-6 sm:p-7 bg-white/90 dark:bg-[#16110a]/90 border border-amber-200/80 dark:border-amber-900/60 hover:border-amber-500/60 dark:hover:border-amber-500/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {iconMap[service.iconName] || <Code2 className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-amber-100/60 dark:bg-[#241a0d] text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-stone-600 dark:text-amber-100/80 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Ideal For Box */}
                <div className="mt-4 p-3 rounded-xl bg-amber-50/60 dark:bg-[#1e150b]/80 border border-amber-200/60 dark:border-amber-900/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                    Ideal For:
                  </span>
                  <p className="text-xs text-stone-800 dark:text-amber-100 font-medium">
                    {service.idealFor}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="mt-5 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-amber-400/60">
                    What You Get:
                  </span>
                  <ul className="space-y-1.5 mt-1">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-700 dark:text-amber-200/90">
                        <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Row: Timeline & CTA */}
              <div className="mt-6 pt-4 border-t border-amber-100 dark:border-amber-900/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-amber-300/70">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{service.timeline}</span>
                </div>
                <a
                  href={`#contact`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}