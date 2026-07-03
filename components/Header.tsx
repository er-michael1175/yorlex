"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Cpu, Landmark, Megaphone, Users, Search, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(false);
  }, [pathname]);

  // Ctrl + K listener for Search Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "FAQ", href: "/faq" },
    { name: "Stories", href: "/success-stories" },
    { name: "Industries", href: "/industries" },
    { name: "Engagement", href: "/engagement-models" },
  ];

  const services = [
    { name: "Technology", slug: "technology", desc: "Enterprise Cloud, AI, and Web Apps", icon: Cpu },
    { name: "Finance", slug: "finance", desc: "Accounting, Payroll, CFO Services", icon: Landmark },
    { name: "Marketing", slug: "marketing", desc: "SEO, Social Media, Growth Funnels", icon: Megaphone },
    { name: "Management", slug: "management", desc: "Agile Ops, Recruiting, Board Governance", icon: Users },
  ];

  const industriesList = [
    { name: "Startups & SaaS", href: "/industries#startups" },
    { name: "Healthcare & Biotech", href: "/industries#healthcare" },
    { name: "Ecommerce & Retail", href: "/industries#ecommerce" },
    { name: "Logistics & Supply Chain", href: "/industries#logistics" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 flex flex-col">

      {/* Main Navbar (Sticky Solid Light Glass - 64px height) */}
      <div 
        className="w-full h-16 flex justify-center items-center px-6 border-b border-slate-200/50 bg-white/95 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative"
      >
        {/* Subtle Purple Glow Bottom Border Divider */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a100ff]/20 to-transparent" />

        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Logo (Always Black for visual separation) */}
          <Link 
            href="/" 
            className="font-plus-jakarta text-2xl font-black tracking-tighter text-black"
          >
            YORLEX
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-4 relative">
            {/* Capabilities Dropdown (Mega dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button 
                className="font-bold uppercase tracking-wider text-xs flex items-center gap-1 py-2.5 px-3 cursor-pointer text-slate-650 hover:text-black transition-colors"
              >
                Capabilities 
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown ? "rotate-180" : ""}`} />
              </button>

              {/* Full Width Dropdown */}
              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-[-240px] top-full mt-2 w-[760px] p-8 shadow-2xl border z-50 grid grid-cols-12 gap-8 rounded-none bg-white/95 backdrop-blur-md border-slate-200 text-slate-800"
                  >
                    {/* Column 1: Solutions */}
                    <div className="col-span-5 space-y-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        Solutions
                      </p>
                      <div className="space-y-1">
                        {services.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-none hover:bg-slate-50 text-slate-700 transition-all duration-250 group/item"
                          >
                            <div className="p-2 rounded-none bg-slate-100 text-slate-600 group-hover/item:bg-brand-purple/10 group-hover/item:text-brand-purple border border-transparent group-hover/item:border-brand-purple/10 transition-colors">
                              <svc.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold uppercase tracking-wider group-hover/item:text-brand-purple transition-colors">
                                {svc.name}
                              </div>
                              <div className="text-[10px] mt-0.5 leading-normal text-slate-400">
                                {svc.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Industries */}
                    <div className="col-span-3 space-y-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        Industries
                      </p>
                      <div className="space-y-1">
                        {industriesList.map((ind) => (
                          <Link
                            key={ind.name}
                            href={ind.href}
                            className="block p-2 rounded-none text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-brand-purple transition-all hover:translate-x-1"
                          >
                            {ind.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Featured Insight */}
                    <div className="col-span-4 space-y-4">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                        Featured Insight
                      </p>
                      <Link 
                        href="/success-stories/revenue-optimization"
                        className="block p-4 rounded-none border bg-slate-50 border-slate-200/60 hover:border-brand-purple/40 hover:bg-slate-100/50 transition-all duration-300 group/feat"
                      >
                        <div className="flex items-center gap-1 text-[9px] font-bold text-brand-purple uppercase tracking-widest mb-2">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Case Study</span>
                        </div>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider mb-1 text-black">
                          Revenue Optimization
                        </h4>
                        <p className="text-[10px] leading-relaxed mb-4 text-slate-450">
                          How we accelerated capital allocation for a fintech ecosystem.
                        </p>
                        <span className="text-[10px] font-bold text-brand-purple group-hover/feat:underline flex items-center gap-1">
                          Read Case Study <ArrowRight className="h-3 w-3 transition-transform group-hover/feat:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* General Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10"
                style={{
                  color: pathname === link.href ? "#a100ff" : "#475569"
                }}
              >
                {link.name}
                
                {/* Hover capsule */}
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 bg-brand-purple/10 rounded-none z-[-1] shadow-[0_0_15px_rgba(161,0,255,0.15)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
                
                {/* Active link dot */}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-purple rounded-full shadow-[0_0_8px_#a100ff]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Section: Search & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Shrunk Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 border text-[10px] font-bold uppercase tracking-wider rounded-none bg-white border-brand-border-light text-slate-650 hover:border-black transition-all"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="truncate max-w-[55px]">Search...</span>
              <kbd className="ml-1 px-1 py-0.5 text-[8px] font-semibold border rounded-none bg-brand-bg border-brand-border-light text-slate-400">
                Ctrl K
              </kbd>
            </button>

            {/* Premium CTA Button */}
            <Link
              href="/contact"
              className="relative overflow-hidden inline-flex items-center gap-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-none border border-black hover:bg-brand-purple hover:border-brand-purple transition-all duration-300 group"
            >
              Talk to an Expert
              <span className="inline-block transition-transform group-hover:translate-x-1 duration-200">
                →
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-black transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-brand-bg border-t border-brand-border z-40 p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-1">
                Services
              </p>
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-brand-purple"
                >
                  {svc.name} Solutions
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-1">
                Company
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold uppercase tracking-wider text-gray-700 hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <Link
              href="/contact"
              className="w-full bg-black text-center text-white py-3.5 rounded-none font-bold uppercase tracking-wider text-xs block"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-lg bg-[#0d0d0e] border border-white/10 text-white shadow-2xl p-6 overflow-hidden rounded-none"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                <Search className="h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Type to search solutions..." 
                  className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-gray-500"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-xs text-gray-400 hover:text-white"
                >
                  ESC
                </button>
              </div>
              <div className="space-y-2 text-xs text-gray-400">
                <p className="font-semibold text-gray-500 uppercase tracking-wider text-[9px]">Suggested Pages</p>
                <Link href="/services/technology" onClick={() => setIsSearchOpen(false)} className="block p-2 hover:bg-white/5 hover:text-white rounded-none">
                  Technology Solutions
                </Link>
                <Link href="/services/finance" onClick={() => setIsSearchOpen(false)} className="block p-2 hover:bg-white/5 hover:text-white rounded-none">
                  Finance Solutions
                </Link>
                <Link href="/services/marketing" onClick={() => setIsSearchOpen(false)} className="block p-2 hover:bg-white/5 hover:text-white rounded-none">
                  Marketing Solutions
                </Link>
                <Link href="/services/management" onClick={() => setIsSearchOpen(false)} className="block p-2 hover:bg-white/5 hover:text-white rounded-none">
                  Management Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
