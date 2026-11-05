"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="bg-[#0c0905] text-stone-300 border-t border-amber-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info with New Divine Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white p-0.5 border border-amber-400/80 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-all">
                <Image
                  src="/images/logo.jpg"
                  alt="YADU-ENTERPRISES Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                YADU<span className="text-amber-500">.</span>ENTERPRISES
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              {SITE_CONFIG.company.tagline} We engineer high-converting web applications and websites with sub-second speeds, zero bloat, and guaranteed results.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{SITE_CONFIG.company.location} ({SITE_CONFIG.company.address})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.company.email}`} className="hover:text-amber-300 transition-colors">
                  {SITE_CONFIG.company.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`tel:${SITE_CONFIG.company.phone}`} className="hover:text-amber-300 transition-colors">
                  {SITE_CONFIG.company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SITE_CONFIG.services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="text-stone-400 hover:text-amber-300 transition-colors"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Case Studies
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
              {SITE_CONFIG.projects.map((proj) => (
                <li key={proj.slug}>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="text-stone-400 hover:text-amber-300 transition-colors flex items-center gap-1 group"
                  >
                    <span>{proj.client}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-stone-400 hover:text-amber-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-amber-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; 2026 {SITE_CONFIG.company.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </span>
            <span>•</span>
            <span>Proudly Built in Chandigarh, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}