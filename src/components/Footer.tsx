"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Heart, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-base shadow-sm">
                Y
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                YADU<span className="text-blue-500">.</span>ENTERPRISES
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {SITE_CONFIG.company.tagline} We engineer high-converting web applications and websites with sub-second speeds, zero bloat, and guaranteed results.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{SITE_CONFIG.company.location} ({SITE_CONFIG.company.address})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.company.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.company.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.company.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SITE_CONFIG.services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Case Studies
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
              {SITE_CONFIG.projects.map((proj) => (
                <li key={proj.slug}>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{proj.client}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
              Legal & Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
