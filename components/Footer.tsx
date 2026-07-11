"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const [email, setEmail] = useState("");

  const solutions = [
    { name: "Technology", href: "/services/technology" },
    { name: "Finance", href: "/services/finance" },
    { name: "Marketing", href: "/services/marketing" },
    { name: "Management", href: "/services/management" },
  ];

  const resources = [
    { name: "Support", href: "/services/support" },
    { name: "Case Stories", href: "/success-stories" },
    { name: "FAQ", href: "/faq" },
    { name: "Process", href: "/process" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const url = getWhatsAppUrl(`Hi Yorlex, I'd like to get in touch. My email: ${email}`);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setEmail("");
  }

  return (
    <footer className="w-full flex flex-col mt-auto">
      <div className="w-full bg-yorlex-navy text-white pt-10 pb-6 px-6 flex flex-col items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start pb-6">
          {/* Brand */}
          <div className="space-y-3">
            <Logo variant="light" />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Advancing global productivity through technology, finance, marketing, and management expertise.
            </p>
            <div className="space-y-1.5 text-sm text-white/70">
              <a
                href="mailto:contact@yorlex.com"
                className="flex items-center gap-2 hover:text-yorlex-green transition-colors"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                contact@yorlex.com
              </a>
              <a
                href="tel:+919270292704"
                className="flex items-center gap-2 hover:text-yorlex-green transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                +91 92702 92704
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span className="max-w-55">
                  First Floor, GDA Tower, Golghar, Gorakhpur - 273001, Uttar Pradesh
                </span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-yorlex-green transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-yorlex-green transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-yorlex-green transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-1 text-center">
              <p className="text-xs font-semibold text-white/80 mb-2">Chat with us on WhatsApp</p>
              <form onSubmit={handleSubscribe} className="flex items-center justify-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full min-w-0 bg-white/10 rounded-full border border-white/15 text-white text-sm py-2 px-4 placeholder:text-white/40 focus:outline-none focus:border-yorlex-green transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Continue on WhatsApp"
                  className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-yorlex-green hover:bg-yorlex-green-dark transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full max-w-7xl pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-3">
          <div>© 2024 Yorlex. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Our Office
            </Link>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
