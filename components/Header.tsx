"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Landmark,
  Megaphone,
  Users,
  Headphones,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl("Hi Yorlex, I'd like to get in touch.");
  const contactHref = whatsappUrl ?? "/contact";

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Platform", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Company", href: "/about" },
  ];

  const services = [
    { name: "Technology", slug: "technology", desc: "Enterprise cloud, AI, and web platforms", icon: Cpu, image: "/images/services/technology.jpg" },
    { name: "Finance", slug: "finance", desc: "Accounting, payroll, virtual CFO services", icon: Landmark, image: "/images/services/finance.jpg" },
    { name: "Marketing", slug: "marketing", desc: "SEO, social, and growth funnels", icon: Megaphone, image: "/images/services/marketing.jpg" },
    { name: "Management", slug: "management", desc: "Agile ops, recruiting, governance", icon: Users, image: "/images/services/management.jpg" },
    { name: "Support", slug: "support", desc: "24/7 global resolution centers", icon: Headphones, image: "/images/services/support.jpg" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 w-full z-50">
      <div className="w-full h-20 flex justify-center items-center px-6 bg-yorlex-canvas/95 backdrop-blur-lg border-b border-yorlex-border">
        <div className="w-full max-w-7xl flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="relative px-4 py-2.5 text-sm font-medium rounded-full transition-colors"
              style={{
                color: isActive("/") ? "var(--color-yorlex-ink)" : "var(--color-yorlex-body)",
              }}
            >
              Platform
              {isActive("/") && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-yorlex-green"
                />
              )}
            </Link>

            {/* Solutions mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button
                className="relative flex items-center gap-1 px-4 py-2.5 text-sm font-medium rounded-full transition-colors"
                style={{
                  color: isActive("/services") ? "var(--color-yorlex-ink)" : "var(--color-yorlex-body)",
                }}
              >
                Solutions
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown ? "rotate-180" : ""}`} />
                {isActive("/services") && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-yorlex-green"
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] p-3 grid grid-cols-2 gap-2 bg-white rounded-2xl border border-yorlex-border shadow-[0_20px_50px_rgba(15,27,44,0.12)]"
                  >
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-yorlex-canvas-alt transition-colors group/item"
                      >
                        <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={svc.image}
                            alt=""
                            className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover/item:scale-110"
                          />
                          <div className="absolute inset-0 bg-yorlex-navy/25" />
                          <div className="absolute -bottom-1 -right-1 p-1 rounded-md bg-white text-yorlex-green-dark shadow-sm">
                            <svc.icon className="h-3 w-3" />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-yorlex-ink">
                            {svc.name}
                          </div>
                          <div className="text-xs mt-0.5 leading-snug text-yorlex-muted">
                            {svc.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="flex items-center justify-between p-3 rounded-xl bg-yorlex-canvas-alt text-sm font-semibold text-yorlex-ink hover:bg-yorlex-green-soft transition-colors"
                    >
                      View all solutions
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2.5 text-sm font-medium rounded-full transition-colors"
                style={{
                  color: isActive(link.href) ? "var(--color-yorlex-ink)" : "var(--color-yorlex-body)",
                }}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-yorlex-green"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right section */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={contactHref}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
              className="yorlex-btn-primary flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-yorlex-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-y-auto max-h-[calc(100vh-5rem)] bg-yorlex-canvas border-b border-yorlex-border"
          >
            <div className="p-6 flex flex-col gap-1">
              <Link href="/" className="py-3 text-base font-semibold text-yorlex-ink">
                Platform
              </Link>

              <button
                className="flex items-center justify-between py-3 text-base font-semibold text-yorlex-ink"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 flex flex-col gap-1 overflow-hidden"
                  >
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="py-2 text-sm font-medium text-yorlex-body"
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-3 text-base font-semibold text-yorlex-ink"
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-yorlex-border flex flex-col gap-3">
                <Link
                  href={contactHref}
                  target={whatsappUrl ? "_blank" : undefined}
                  rel={whatsappUrl ? "noopener noreferrer" : undefined}
                  className="yorlex-btn-primary w-full py-3 text-sm text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
