import React from "react";
import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  const solutions = [
    { name: "Technology", href: "/services/technology" },
    { name: "Finance", href: "/services/finance" },
    { name: "Marketing", href: "/services/marketing" },
    { name: "Management", href: "/services/management" },
  ];

  const resources = [
    { name: "Support", href: "/services/support" },
    { name: "Case Stories", href: "/success-stories" },
    { name: "Whitepapers", href: "#" },
    { name: "API Docs", href: "#" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Industries", href: "/industries" },
    { name: "Engagement", href: "/engagement-models" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "#" },
    { name: "Accessibility", href: "#" },
  ];

  return (
    <footer className="w-full flex flex-col mt-auto font-sans">
      {/* Main Dark Footer */}
      <div className="w-full bg-black text-white pt-16 pb-12 px-6 flex flex-col items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 pb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-plus-jakarta text-xl font-extrabold tracking-tight text-white uppercase">
              YORLEX
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs font-inter">
              Global Authority in Multi-Disciplinary Enterprise Excellence. Architecting the future since 2024.
            </p>
            <div className="flex items-center gap-3.5 pt-2 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                <Globe className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-plus-jakarta">
              SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-plus-jakarta">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-plus-jakarta">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-plus-jakarta">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright & link bar */}
        <div className="w-full max-w-7xl pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © 2024 Yorlex Enterprise. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Global Offices
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Security Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
