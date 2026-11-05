"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 uppercase tracking-wider mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            Everything you need to know.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 dark:text-amber-100/90">
            Straight answers to the most common questions about pricing, timelines, technology, and ownership.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-white/90 dark:bg-[#16110a]/90 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900 dark:text-amber-50 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-amber-50 dark:bg-[#241a0d] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300" : "text-stone-500 dark:text-amber-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-stone-600 dark:text-amber-100/80 leading-relaxed border-t border-amber-100 dark:border-amber-900/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-amber-50/70 dark:bg-[#1a1209] border border-amber-200/80 dark:border-amber-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-stone-900 dark:text-white">
              Have a specific question not answered here?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-amber-300/70">
              We're available on WhatsApp and phone for immediate answers.
            </p>
          </div>
          <a
            href={SITE_CONFIG.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}