"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Landmark,
  Megaphone,
  Users,
  Headphones,
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  SectionWrapper,
  AnimatedHeading,
  ServiceCard,
  PremiumButton,
} from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// Category type definition
type Category = "all" | "advisory" | "engineering";

// Real photo illustration for bento cards (reuses each service page's hero photo)
function ServicePhoto({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-brand-purple/10" />
    </div>
  );
}

const services = [
  {
    title: "Technology",
    description:
      "Next-generation systems architecture, AI integration, and robust infrastructure development. Forging the digital backbone of industry leaders.",
    icon: Cpu,
    href: "/services/technology",
    variant: "large" as const,
    tags: ["Kubernetes", "Sovereign AI", "Zero-Trust"],
    category: "engineering" as const,
    illustration: (
      <ServicePhoto
        src="/images/services/technology-hero-bg.jpg"
        alt="Technology services"
        className="h-40 md:h-full min-h-40"
      />
    ),
  },
  {
    title: "Finance",
    description:
      "Strategic capital allocation, risk management, and quantitative analysis. Precision financial engineering for sustainable growth.",
    icon: Landmark,
    href: "/services/finance",
    variant: "standard" as const,
    tags: ["Risk Modelling", "Capital Markets", "Treasury"],
    category: "advisory" as const,
    illustration: (
      <ServicePhoto src="/images/services/finance-hero-bg.jpg" alt="Finance services" className="h-28" />
    ),
  },
  {
    title: "Marketing",
    description:
      "Data-driven market positioning and global brand architecture. Dominating mindshare through analytical rigor.",
    icon: Megaphone,
    href: "/services/marketing",
    variant: "standard" as const,
    tags: ["Brand Strategy", "Performance", "GTM"],
    category: "engineering" as const,
    illustration: (
      <ServicePhoto src="/images/services/marketing-hero-bg.jpg" alt="Marketing services" className="h-28" />
    ),
  },
  {
    title: "Management",
    description:
      "Executive leadership consulting and organizational optimization. Structuring hierarchies for maximum operational efficiency.",
    icon: Users,
    href: "/services/management",
    variant: "standard" as const,
    tags: ["Org Design", "M&A Integration", "OKRs"],
    category: "advisory" as const,
    illustration: (
      <ServicePhoto src="/images/services/management-hero-bg.jpg" alt="Management services" className="h-28" />
    ),
  },
  {
    title: "Support",
    description:
      "Unrelenting operational backing. Legal, HR, and compliance frameworks that secure enterprise integrity.",
    icon: Headphones,
    href: "/services/support",
    variant: "standard" as const,
    tags: ["Legal", "HR", "Compliance"],
    category: "engineering" as const,
    illustration: (
      <ServicePhoto src="/images/services/support-hero-bg.jpg" alt="Support services" className="h-28" />
    ),
  },
];

// FAQ items data
const faqItems = [
  {
    id: "faq-1",
    q: "How do you coordinate cross-disciplinary solutions?",
    a: "We leverage our unified architecture model. When an enterprise engages multiple pillars (e.g., Technology and Finance), a cross-functional steering committee is established. Information flows are cryptographically siloed as per our zero-trust protocols, while high-level strategic alignment is orchestrated via unified weekly sprints.",
  },
  {
    id: "faq-2",
    q: "What are the typical onboarding and integration timelines?",
    a: "Core setup (Phase 1) begins immediately upon contract execution and is completed within 14 business days. This includes infrastructure mirroring, secure compliance channel setup, and team allocation. Complete integration varies by scope but averages 45 to 90 days.",
  },
  {
    id: "faq-3",
    q: "How do you guarantee data privacy and regulatory compliance?",
    a: "We take data privacy seriously. Every engagement starts with a signed NDA, and client data is handled under strict access controls. We adapt our compliance approach to your jurisdiction's requirements, including GDPR, CCPA, and India's DPDP Act where applicable.",
  },
  {
    id: "faq-4",
    q: "Can you collaborate with our existing in-house technical teams?",
    a: "Absolutely. We routinely operate in co-development structures. We can integrate directly into your Jira, GitHub, or internal Slack channels, acting as an elite acceleration layer for your in-house engineers and managers.",
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const whatsappUrl = getWhatsAppUrl("Hi Yorlex, I'd like to talk about your services.");
  const contactHref = whatsappUrl ?? "/contact";

  // Filter and adapt layouts for visual balance
  const filteredServices = services
    .filter((service) => activeCategory === "all" || service.category === activeCategory)
    .map((service) => {
      // Dynamic variant override when filtered to balance row layouts
      if (activeCategory === "advisory") {
        return { ...service, variant: "large" as const };
      }
      return service;
    });

  const categories = [
    { id: "all" as const, name: "All Capabilities" },
    { id: "advisory" as const, name: "Strategic Advisory" },
    { id: "engineering" as const, name: "Operational Engineering" },
  ];

  return (
    <div className="flex-1 font-sans bg-brand-bg">
      {/* Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="relative overflow-hidden lg:min-h-[calc(100vh-80px)] flex flex-col justify-center [&>div]:w-full pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-3/4 opacity-90 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 42%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 42%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute inset-0 bg-brand-bg opacity-20 pointer-events-none" />

        <div className="relative">
          <div className="lg:hidden -mx-6 -mt-4 md:-mt-6 mb-6 relative h-64 sm:h-80 overflow-hidden rounded-b-4xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/hero.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-bg to-transparent" />
          </div>

          <div className="flex flex-col gap-3 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Cpu className="h-4 w-4 text-brand-purple shrink-0 animate-pulse" />
              <span className="font-inter font-bold text-[10px] text-gray-500">
                Services Portfolio
              </span>
            </div>
            <AnimatedHeading level={1}>Core Expertise</AnimatedHeading>
            <p className="font-inter text-gray-650 text-base md:text-lg leading-relaxed max-w-xl">
              Architecting global authority across five distinct disciplines.
              Precision-engineered solutions for modern enterprise scale.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Bento Grid Services */}
      <SectionWrapper background="white" spacing="default" className="border-t border-b border-brand-border-light relative" animate>
        {/* Navigation Categories */}
        <div className="flex border-b border-brand-border-light mb-12 overflow-x-auto hide-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="relative py-4 px-6 text-[10px] font-mono font-bold transition-colors duration-200 outline-none select-none shrink-0"
              style={{ color: activeCategory === cat.id ? "#000000" : "#9ca3af" }}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bento Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={
                  service.variant === "large" 
                    ? "col-span-1 md:col-span-12 lg:col-span-8" 
                    : "col-span-1 md:col-span-6 lg:col-span-4"
                }
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                  variant={service.variant}
                  tags={service.tags}
                  illustration={service.illustration}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>

      {/* Services FAQ Accordion Section */}
      <SectionWrapper background="default" spacing="default" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Intro Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <HelpCircle className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-500">
                Service Delivery
              </span>
            </div>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-black text-black leading-tight tracking-tight">
              Enterprise Service Parameters
            </h2>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-md">
              Answers regarding coordination of multi-disciplinary pillars, timelines, data compliance, and operational workflows.
            </p>
            <div className="mt-4">
              <PremiumButton
                variant="secondary"
                size="md"
                href={contactHref}
                target={whatsappUrl ? "_blank" : undefined}
                rel={whatsappUrl ? "noopener noreferrer" : undefined}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Inquire About custom SLAs
              </PremiumButton>
            </div>
          </div>

          {/* Accordion Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqItems.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-brand-border rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    className="w-full flex justify-between items-center p-6 bg-brand-border-light/10 hover:bg-brand-border-light/20 transition-colors focus:outline-none text-left"
                  >
                    <span className="font-plus-jakarta text-xs md:text-sm font-bold text-black tracking-wide pr-4">
                      {item.q}
                    </span>
                    <div className="w-6 h-6 rounded-2xl border border-brand-border flex items-center justify-center text-black shrink-0 bg-brand-bg transition-transform duration-300">
                      {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                      isOpen ? "max-h-[300px] opacity-100 border-t border-brand-border-light" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 font-inter text-xs md:text-sm text-gray-500 leading-relaxed bg-white">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="dark" spacing="compact" className="relative overflow-hidden" animate>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/finance-case-tax.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-yorlex-navy/75 pointer-events-none" />

        <div className="relative text-center">
          <AnimatedHeading level={2} className="text-white mb-6">
            Ready to Transform Your Operations?
          </AnimatedHeading>
          <p className="font-inter text-text-on-dark-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Connect with our specialists to explore how Yorlex can architect your
            competitive advantage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href={contactHref}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Schedule a Strategy Briefing
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href={contactHref}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Talk to Our Team
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

