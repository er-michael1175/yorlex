"use client";

import React, { useState } from "react";
import { ArrowRight, Coins, HeartPulse, Factory, Store, Truck, Cpu, Building2, ShieldAlert, Video, Scale, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Interactive Sector Console for Hero Right Side
function HeroIndustryConsole() {
  const [activeSector, setActiveSector] = useState<number>(0);

  const metrics = [
    { name: "Financial Services", metric: "+34.2% CAGR", benchmark: "2.4x Assets", color: "text-green-400" },
    { name: "Healthcare & MedTech", metric: "-18% Friction", benchmark: "SLA Audited", color: "text-blue-400" },
    { name: "Technology & SaaS", metric: "99.99% Uptime", benchmark: "DevOps Coordinated", color: "text-brand-purple" },
    { name: "Retail & E-commerce", metric: "2.4x ROAS", benchmark: "Logistics Optimized", color: "text-white" },
    { name: "Logistics & Supply", metric: "-22% Lead Time", benchmark: "Dynamic Routing", color: "text-green-400" },
  ];

  return (
    <div className="w-full bg-slate-950 border border-brand-border-light/10 p-6 font-mono text-[10px] text-brand-purple relative overflow-hidden select-none shadow-2xl h-[320px] flex flex-col justify-between">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-brand-border-light/10 pb-3 mb-3">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
          YORLEX // SECTOR_OPTIMIZER
        </span>
      </div>

      {/* Selectors */}
      <div className="flex flex-wrap gap-1 border border-brand-border-light/5 bg-slate-900/40 p-1 mb-3 relative">
        {metrics.map((sec, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSector(idx)}
            className="flex-1 min-w-[50px] py-1.5 text-[7px] font-bold uppercase tracking-wider transition-colors duration-150 rounded-none relative z-10 text-gray-555 hover:text-white"
          >
            <span className={activeSector === idx ? "text-white" : ""}>0{idx + 1}</span>
            {activeSector === idx && (
              <motion.div
                layoutId="activeSectorTab"
                className="absolute inset-0 bg-brand-purple -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col gap-2.5 justify-center">
        <div className="text-[8px] text-gray-500 uppercase tracking-widest font-bold mb-1 flex justify-between">
          <span>// SECTOR PROFILE 0{activeSector + 1} ACTIVE</span>
          <span className="text-green-500">SYS_OK</span>
        </div>

        <div className="bg-slate-900/40 border border-brand-border-light/5 p-3 flex flex-col gap-2 min-h-[100px] justify-center">
          <div className="text-white font-bold text-[10px] uppercase">
            {metrics[activeSector].name}
          </div>
          <div className="grid grid-cols-2 gap-2 font-mono text-[9px] text-gray-400 mt-1">
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-500">GROWTH BENCHMARK</span>
              <span className={`font-bold mt-0.5 ${metrics[activeSector].color}`}>{metrics[activeSector].metric}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-500">OPERATIONAL SCALE</span>
              <span className="font-bold text-white mt-0.5">{metrics[activeSector].benchmark}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[7px] text-gray-450 mt-1">
          <span>SLA_STATUS: COMPLIANT</span>
          <span>COMPLIANCE: 100% OK</span>
        </div>
      </div>
    </div>
  );
}

export default function Industries() {
  const sectors = [
    {
      name: "Financial Services",
      desc: "Capital allocation strategies, regulatory audit automation, and Virtual CFO alignment.",
      icon: Coins,
      metric: "+34.2% CAGR",
      spanClass: "md:col-span-8 row-span-2 bg-slate-950 text-white border-white/10",
      type: "dark",
      bullets: ["Portfolio allocation modeling", "GST/Audit readiness reports", "Cash flow forecasting"],
    },
    {
      name: "Healthcare & MedTech",
      desc: "SLA-driven development, patient data protection, and legacy software modernizations.",
      icon: HeartPulse,
      metric: "99.98% Accuracy",
      spanClass: "md:col-span-4 row-span-1 bg-white text-black border-brand-border",
      type: "light",
      bullets: ["HIPAA compliance systems", "Scheduling optimization"],
    },
    {
      name: "Technology & SaaS",
      desc: "Architecting cloud-native web portals, SaaS platforms, and DevOps automation.",
      icon: Cpu,
      metric: "99.99% Uptime",
      spanClass: "md:col-span-4 row-span-1 bg-white text-black border-brand-border",
      type: "light",
      bullets: ["React/Next.js architectures", "Kubernetes cluster setups"],
    },
    {
      name: "Retail & E-commerce",
      desc: "ROAS campaign tracking, headless commerce architectures, and supply chain scaling.",
      icon: Store,
      metric: "2.4x ROAS Improvement",
      spanClass: "md:col-span-6 row-span-1 bg-white text-black border-brand-border",
      type: "light",
      bullets: ["Headless checkout setups", "Customer data portals"],
    },
    {
      name: "Logistics & Supply",
      desc: "Predictive freight analytics, automated supply routing, and lead-time reductions.",
      icon: Truck,
      metric: "-22% Lead-Time Variance",
      spanClass: "md:col-span-6 row-span-1 bg-slate-950 text-white border-white/10",
      type: "dark",
      bullets: ["Dispatch routing mapping", "Warehouse sorting indexes"],
    },
    {
      name: "Manufacturing",
      desc: "Optimizing manufacturing floor systems, supply-chain monitoring, and operations scaling.",
      icon: Factory,
      metric: "-18% Friction Reduction",
      spanClass: "md:col-span-4 row-span-1 bg-white text-black border-brand-border",
      type: "light",
      bullets: ["Floor routing tracking", "Active resource allocations"],
    },
    {
      name: "Real Estate & Dev",
      desc: "Asset valuations, building compliance systems, and investment mapping models.",
      icon: Building2,
      metric: "100% Audit Readiness",
      spanClass: "md:col-span-4 row-span-1 bg-white text-black border-brand-border",
      type: "light",
      bullets: ["Asset valuation ledgers", "Real estate CRM scaling"],
    },
    {
      name: "Professional Services",
      desc: "Advisory program scheduling, timesheet automation, and task reporting setups.",
      icon: Scale,
      metric: "+15% Client Margins",
      spanClass: "md:col-span-4 row-span-1 bg-white text-black border-brand-border",
      type: "light",
      bullets: ["Consultant capacity reports", "Automated timesheet audits"],
    },
    {
      name: "Government & Public",
      desc: "Information siloing audits, SOC-2 verified cloud structures, and public compliance portals.",
      icon: ShieldAlert,
      metric: "SOC-2 Audited Security",
      spanClass: "md:col-span-6 row-span-1 bg-white text-black border-brand-border",
      type: "light",
      bullets: ["Zero-trust system silos", "Public compliance portals"],
    },
    {
      name: "Media & Entertainment",
      desc: "High-throughput content delivery networks, DRM licensing setups, and streaming scaling.",
      icon: Video,
      metric: "-42ms Latency Reduction",
      spanClass: "md:col-span-6 row-span-1 bg-slate-950 text-white border-white/10",
      type: "dark",
      bullets: ["DRM licensing pipelines", "CDN caching configurations"],
    },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans">
      {/* Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="min-h-[calc(100vh-64px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Factory className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555 uppercase tracking-widest">
                Market Sectors
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black uppercase tracking-tight">
              Industries We Serve
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Transforming global ecosystems through rigorous analysis, architectural precision, and uncompromising technological excellence. We engineer solutions for complex enterprise challenges.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule Industry Consultation
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="/services"
              >
                View Case Studies
              </PremiumButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroIndustryConsole />
          </div>
        </div>
      </SectionWrapper>

      {/* Bento Grid Canvas */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {sectors.map((sector, idx) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={idx}
                className={`group relative overflow-hidden flex flex-col justify-between p-8 border hover:border-brand-purple transition-all duration-300 rounded-none shadow-sm ${sector.spanClass}`}
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-purple transition-colors duration-300" />
                
                {/* Header info */}
                <div className="relative z-10 flex justify-between items-start w-full">
                  <div className="space-y-1">
                    <span className={`font-mono text-[8px] uppercase tracking-widest ${sector.type === "dark" ? "text-gray-400" : "text-gray-400"}`}>
                      // SECTOR 0{idx + 1}
                    </span>
                    <h2 className="font-plus-jakarta text-lg md:text-xl font-bold uppercase tracking-wide leading-tight">
                      {sector.name}
                    </h2>
                  </div>
                  <div className={`w-8 h-8 rounded-none border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    sector.type === "dark" 
                      ? "bg-slate-900 border-white/10 text-white group-hover:bg-brand-purple group-hover:text-white" 
                      : "bg-brand-bg border-brand-border text-black group-hover:bg-brand-purple group-hover:text-white"
                  }`}>
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>
                </div>

                {/* Body Details */}
                <div className="relative z-10 my-4 flex-1 flex flex-col justify-center">
                  <p className={`font-inter text-xs leading-relaxed max-w-sm ${sector.type === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    {sector.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                    {sector.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-brand-purple shrink-0" />
                        <span className="text-[9px] uppercase font-mono tracking-wide text-gray-500">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="relative z-10 w-full flex items-center justify-between border-t pt-4 mt-auto border-brand-border-light/40">
                  <span className="font-mono text-[9px] font-bold text-brand-purple uppercase tracking-wider">
                    {sector.metric}
                  </span>
                  <span className={`group-hover:translate-x-2 transition-transform duration-300 ${sector.type === "dark" ? "text-white" : "text-black"}`}>
                    <ArrowRight className="h-4.5 w-4.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Final Call to Action */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-4">// SECTOR PARTNERSHIP</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Ready to Optimize Your Industry Operations?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Our multi-disciplinary consultants will align technology, capital allocation, and branding strategy specifically for your sector parameters.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Request Sector Consult
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Talk to an Industry Advisor
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
