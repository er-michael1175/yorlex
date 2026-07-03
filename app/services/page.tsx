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

// Category type definition
type Category = "all" | "advisory" | "engineering";

// Custom Illustration Components for Bento Cards

function TechnologyIllustration() {
  return (
    <div className="w-full h-full min-h-[160px] bg-[#0d0d0e] border border-brand-border-light/10 p-4 font-mono text-[9px] text-brand-purple relative overflow-hidden flex flex-col justify-between select-none">
      {/* Top Panel Controls */}
      <div className="flex items-center justify-between border-b border-brand-border-light/10 pb-2 mb-2">
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">LON.04 // NODE_SYS</span>
      </div>
      
      {/* Main Body */}
      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Terminal logs */}
        <div className="flex-1 flex flex-col gap-1 text-gray-400">
          <div className="text-[8px] text-brand-purple font-bold">// SECURE SESSION STARTED</div>
          <div className="flex items-center gap-1">
            <span className="text-green-500">&gt;</span>
            <span className="animate-pulse">STITCHING DATABASE_01...</span>
          </div>
          <div className="text-gray-500">SYS_HEALTH: 100% OK</div>
          <div className="text-gray-500">ZERO_TRUST: VALIDATED</div>
          <div className="text-brand-purple/80">LATENCY: 4.83ms</div>
        </div>
        
        {/* Servers graphic */}
        <div className="w-16 flex flex-col gap-1.5 justify-center border-l border-brand-border-light/10 pl-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between w-full h-2 bg-black border border-gray-800 px-1">
              <div className="w-1.5 h-1.5 bg-brand-purple animate-pulse rounded-full" />
              <div className="flex gap-0.5">
                <span className={`w-0.5 h-0.5 rounded-full ${i % 2 === 0 ? "bg-green-400" : "bg-brand-blue"}`} />
                <span className="w-0.5 h-0.5 rounded-full bg-green-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Uptime Footer */}
      <div className="mt-2 border-t border-brand-border-light/10 pt-2 flex items-center justify-between text-[8px] text-gray-500">
        <span>Uptime: 99.998%</span>
        <span className="animate-pulse flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" /> Live
        </span>
      </div>
    </div>
  );
}

function FinanceIllustration() {
  return (
    <div className="w-full h-28 border border-brand-border-light/30 p-3 bg-brand-bg relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Risk Model</span>
        <span className="text-[9px] font-mono font-bold text-green-600 bg-green-600/10 px-1.5 py-0.5">+14.2% YIELD</span>
      </div>
      
      {/* SVG Chart */}
      <div className="flex-1 relative mt-1">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
          <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
          
          <path
            d="M0,40 L0,30 L20,28 L40,32 L60,18 L80,10 L100,5 L100,40 Z"
            fill="url(#financeGradient)"
            opacity="0.15"
          />
          <path
            d="M0,30 L20,28 L40,32 L60,18 L80,10 L100,5"
            fill="none"
            stroke="#a100ff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="100" cy="5" r="2" fill="#a100ff" className="animate-ping" />
          <circle cx="100" cy="5" r="1.5" fill="#a100ff" />
          
          <defs>
            <linearGradient id="financeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a100ff" />
              <stop offset="100%" stopColor="#a100ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="text-[8px] text-gray-400 font-mono flex justify-between mt-2 border-t border-brand-border-light pt-1.5">
        <span>Q1-Q4 Projections</span>
        <span>Sovereign Cap</span>
      </div>
    </div>
  );
}

function MarketingIllustration() {
  return (
    <div className="w-full h-28 border border-brand-border-light/30 p-3 bg-brand-bg relative overflow-hidden flex items-center justify-between">
      <div className="flex flex-col gap-1 max-w-[55%]">
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Brand Authority</span>
        <span className="text-xs font-bold text-black uppercase leading-tight font-plus-jakarta">Mindshare Domination</span>
        <p className="text-[9px] text-gray-500 leading-tight">Data-driven global GTM visibility metrics.</p>
      </div>
      
      {/* Circular Progress Gauge */}
      <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#e2e2e2"
            strokeWidth="2.5"
          />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#a100ff"
            strokeWidth="2.5"
            strokeDasharray="94, 100"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs font-bold font-mono text-black">94%</span>
          <span className="text-[6px] text-gray-450 font-bold uppercase tracking-widest">INDEX</span>
        </div>
      </div>
    </div>
  );
}

function ManagementIllustration() {
  return (
    <div className="w-full h-28 border border-brand-border-light/30 p-3 bg-brand-bg relative overflow-hidden flex flex-col justify-between">
      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Structure & OKRs</span>
      
      {/* Tree Map Nodes */}
      <div className="flex-1 flex flex-col justify-between items-center relative py-1">
        <div className="z-10 bg-black text-white text-[8px] font-bold font-mono px-2 py-0.5 border border-brand-purple/20 uppercase">
          ROOT_STRATEGY: 100%
        </div>
        
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 40">
            <path d="M50,10 L50,22 L15,22 L15,30 M50,22 L85,22 L85,30" fill="none" stroke="#a100ff" strokeWidth="0.75" strokeDasharray="2, 2" />
            <line x1="50" y1="10" x2="50" y2="30" stroke="#a100ff" strokeWidth="0.75" />
          </svg>
        </div>
        
        <div className="w-full flex justify-between px-1 z-10">
          <div className="bg-white border border-brand-border text-[7px] font-bold text-gray-650 px-1.5 py-0.5 uppercase">
            OPS: 92%
          </div>
          <div className="bg-white border border-brand-border text-[7px] font-bold text-gray-650 px-1.5 py-0.5 uppercase">
            M&A: 100%
          </div>
          <div className="bg-white border border-brand-border text-[7px] font-bold text-gray-650 px-1.5 py-0.5 uppercase">
            GROWTH: 89%
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportIllustration() {
  return (
    <div className="w-full h-28 border border-brand-border-light/30 p-3 bg-brand-bg relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-brand-border-light pb-1.5">
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">SLA Audit</span>
        <span className="flex items-center gap-1 text-[8px] font-bold text-green-600 bg-green-600/10 px-1.5 py-0.5">
          <span className="w-1 h-1 bg-green-500 rounded-full inline-block" /> COMPLIANT
        </span>
      </div>
      
      {/* Support Grid */}
      <div className="flex-1 grid grid-cols-2 gap-2 mt-2">
        <div className="bg-white border border-brand-border-light p-1.5 flex flex-col justify-center">
          <span className="text-[7px] text-gray-400 font-bold uppercase">Response SLA</span>
          <span className="text-sm font-bold text-black font-mono tracking-tight mt-0.5">8ms avg</span>
        </div>
        <div className="bg-white border border-brand-border-light p-1.5 flex flex-col justify-center">
          <span className="text-[7px] text-gray-400 font-bold uppercase">Sovereignty</span>
          <span className="text-[9px] font-bold text-brand-purple font-mono uppercase mt-0.5">100% GDPR</span>
        </div>
      </div>
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
    status: { label: "Mirroring Active [LON.04]", active: true },
    category: "engineering" as const,
    illustration: <TechnologyIllustration />,
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
    illustration: <FinanceIllustration />,
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
    illustration: <MarketingIllustration />,
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
    illustration: <ManagementIllustration />,
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
    illustration: <SupportIllustration />,
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
    a: "All systems operate under SOC 2 Type II controls. Data is housed in isolated Tier-4 cloud instances with multi-region replication. We sign strict NDAs and BAs, and comply fully with regional GDPR, CCPA, and specialized financial/healthcare sovereignty mandates.",
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
      <SectionWrapper background="grid" spacing="default" animate>
        <div className="pt-24 md:pt-32 pb-8 relative">
          {/* Subtle architectural coordinates */}
          <div className="absolute right-0 top-16 hidden lg:block font-mono text-[9px] text-gray-400 select-none pointer-events-none text-right leading-relaxed">
            <span>SYS_LOC // 0x48FA</span>
            <br />
            <span>GRID_SEC // SERV_V3</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max mb-6">
            <Cpu className="h-4 w-4 text-brand-purple shrink-0 animate-pulse" />
            <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
              Services Portfolio
            </span>
          </div>
          <AnimatedHeading level={1}>Core Expertise</AnimatedHeading>
          <p className="font-inter text-gray-650 text-base md:text-lg leading-relaxed max-w-3xl mt-4">
            Architecting global authority across five distinct disciplines.
            Precision-engineered solutions for modern enterprise scale.
          </p>
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
              className="relative py-4 px-6 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors duration-200 outline-none select-none shrink-0"
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
                  status={service.status}
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
              <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
                Service Delivery
              </span>
            </div>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-black text-black uppercase leading-tight tracking-tight">
              Enterprise Service Parameters
            </h2>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-md">
              Answers regarding coordination of multi-disciplinary pillars, timelines, data compliance, and operational workflows.
            </p>
            <div className="mt-4">
              <PremiumButton
                variant="secondary"
                size="md"
                href="/contact"
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
                  className="bg-white border border-brand-border rounded-none overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    className="w-full flex justify-between items-center p-6 bg-brand-border-light/10 hover:bg-brand-border-light/20 transition-colors focus:outline-none text-left"
                  >
                    <span className="font-plus-jakarta text-xs md:text-sm font-bold text-black uppercase tracking-wide pr-4">
                      {item.q}
                    </span>
                    <div className="w-6 h-6 rounded-none border border-brand-border flex items-center justify-center text-black shrink-0 bg-brand-bg transition-transform duration-300">
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
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center">
          <AnimatedHeading level={2} className="text-white mb-6">
            Ready to Transform Your Operations?
          </AnimatedHeading>
          <p className="font-inter text-text-on-dark-muted text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Connect with our specialists to explore how Yorlex can architect your
            competitive advantage.
          </p>
          <PremiumButton
            variant="gradient"
            size="lg"
            href="/contact"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Schedule a Strategy Briefing
          </PremiumButton>
        </div>
      </SectionWrapper>
    </div>
  );
}

