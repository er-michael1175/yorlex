"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, Mail, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
    { name: "Engagement Models", href: "/engagement-models" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ];

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="w-full flex flex-col mt-auto">
      <div className="w-full bg-yorlex-navy text-white pt-16 pb-10 px-6 flex flex-col items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-start pb-14">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Advancing global productivity through technology, finance, marketing, and management expertise.
            </p>
            <div className="flex items-center gap-4 pt-1 text-white/60">
              <Link href="#" className="hover:text-yorlex-green transition-colors">
                <Globe className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="hover:text-yorlex-green transition-colors">
                <Mail className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="hover:text-yorlex-green transition-colors">
                <Phone className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
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
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-yorlex-green transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-yorlex-green transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-yorlex-green transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubscribe} className="pt-2">
              <p className="text-xs font-semibold text-white/80 mb-2">Get insights in your inbox</p>
              {subscribed ? (
                <p className="text-sm text-yorlex-green font-medium">Thanks — you&apos;re subscribed.</p>
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full min-w-0 bg-white/10 rounded-full border border-white/15 text-white text-sm py-2 px-4 placeholder:text-white/40 focus:outline-none focus:border-yorlex-green transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-yorlex-green hover:bg-yorlex-green-dark transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full max-w-7xl pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <div>© 2024 Yorlex. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Global Offices
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
