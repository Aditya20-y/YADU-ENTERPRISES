"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { SITE_CONFIG } from "@/data/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdfbf7]/90 dark:bg-[#0d0a06]/90 backdrop-blur-md shadow-sm border-b border-amber-200/60 dark:border-amber-900/40 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Divine Emblem (Image 2) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5 border border-amber-300/80 dark:border-amber-600/70 shadow-md shadow-amber-500/15 group-hover:scale-105 group-hover:border-amber-500 transition-all">
              <Image
                src="/images/logo.jpg"
                alt="YADU-ENTERPRISES Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-amber-50 leading-none">
                YADU<span className="text-amber-500 font-black">.</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-700 dark:text-amber-400/90">
                ENTERPRISES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-amber-50/80 dark:bg-[#1a130a]/80 p-1.5 rounded-full border border-amber-200/70 dark:border-amber-900/60 shadow-inner">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-stone-700 dark:text-amber-100/90 hover:text-amber-700 dark:hover:text-amber-300 rounded-full hover:bg-white dark:hover:bg-amber-950/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={`tel:${SITE_CONFIG.company.phone}`}
              aria-label="Direct Phone Call"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-amber-200 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{SITE_CONFIG.company.phoneDisplay}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-700 hover:to-amber-600 active:scale-95 transition-all shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/35 hover:-translate-y-0.5"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg border border-amber-200 dark:border-amber-800 bg-white/90 dark:bg-[#1a130a]/90 text-stone-800 dark:text-amber-200 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border border-amber-200/80 dark:border-amber-900/60 bg-[#fdfbf7] dark:bg-[#120d07] rounded-2xl shadow-xl px-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-1 py-2">
              {SITE_CONFIG.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-stone-800 dark:text-amber-100 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-amber-200/60 dark:border-amber-900/60 flex flex-col gap-2.5">
              <a
                href={SITE_CONFIG.company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-center shadow-md shadow-amber-500/25"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}