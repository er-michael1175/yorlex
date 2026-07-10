"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Cpu, Layers, TrendingUp, ArrowRight, Check, Zap, Play } from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Interactive Process Simulator for the Hero Right Side
function HeroProcessSimulator() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepsList = [
    { title: "Discovery", status: "DIAGNOSING", desc: "Scan active codebase, finance ledgers, and ad accounts." },
    { title: "Roadmap", status: "PLANNING", desc: "Model tech architectures and marketing cash flows." },
    { title: "Sprint", status: "BUILDING", desc: "Parallel development under strict SLA benchmarks." },
    { title: "Optimize", status: "REFINDING", desc: "Audit indexing speeds, response times, and ledger balance." },
    { title: "Scale", status: "EXPANDING", desc: "Launch paid ad campaigns and expand vertical footprints." },
  ];

  return (
    <div className="w-full bg-slate-950 border border-brand-border-light/10 p-6 font-mono text-[10px] text-brand-purple relative overflow-hidden select-none shadow-2xl min-h-80 flex flex-col justify-between">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-brand-border-light/10 pb-3 mb-3">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[9px] text-gray-500 font-bold">
          YORLEX // PROCESS_MONITOR
        </span>
      </div>

      {/* Simulator Switchers */}
      <div className="flex flex-wrap gap-1 border border-brand-border-light/5 bg-slate-900/40 p-1 mb-3 relative">
        {stepsList.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className="flex-1 min-w-[50px] py-1.5 text-[7px] font-bold transition-colors duration-150 rounded-full relative z-10 text-gray-555 hover:text-white"
          >
            <span className={activeStep === idx ? "text-white" : ""}>0{idx + 1}</span>
            {activeStep === idx && (
              <motion.div
                layoutId="activeProcessTab"
                className="absolute inset-0 bg-brand-purple -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* active details */}
      <div className="flex-1 flex flex-col gap-2.5 justify-center">
        <div className="text-[8px] text-gray-500 font-bold mb-1 flex justify-between">
          <span>// PIPELINE STEP 0{activeStep + 1} ACTIVE</span>
          <span className="text-brand-purple animate-pulse">● {stepsList[activeStep].status}</span>
        </div>
        
        <div className="bg-slate-900/40 border border-brand-border-light/5 p-3 flex flex-col gap-2 min-h-[100px] justify-center">
          <div className="text-white font-bold text-[10px]">
            {stepsList[activeStep].title} Phase
          </div>
          <p className="text-gray-400 text-[9px] leading-relaxed font-inter">
            {stepsList[activeStep].desc}
          </p>
        </div>

        <div className="flex justify-between items-center text-[7px] text-gray-450 mt-1">
          <span>SYSTEM_ALIGN: 100% OK</span>
          <span>LATENCY: 0MS</span>
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  const auditIllustration = (
    <div className="h-32 w-full bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between select-none">
      <div className="flex justify-between text-[8px] font-mono text-gray-400 border-b border-slate-100 pb-1">
        <span>DIAGNOSTIC_CORE</span>
        <span className="text-brand-purple">RUNNING_SCAN</span>
      </div>
      <div className="space-y-1.5 py-1 font-mono text-[7px] text-gray-600">
        <div className="flex justify-between">
          <span>[SYS] CODEBASE_LEAKS:</span>
          <span className="text-red-500 font-bold">14 FOUND</span>
        </div>
        <div className="flex justify-between">
          <span>[FIN] LEDGER_MISALIGN:</span>
          <span className="text-red-500 font-bold">4 FOUND</span>
        </div>
        <div className="flex justify-between">
          <span>[MKT] CAC_INEFFICIENCY:</span>
          <span className="text-red-500 font-bold">18% REALLOC</span>
        </div>
      </div>
      <div className="text-[7px] font-mono text-gray-400 border-t border-slate-100 pt-1 text-center">
        STATUS: RED_ZONE_DIAGNOSED
      </div>
    </div>
  );

  const roadmapIllustration = (
    <div className="h-32 w-full bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between select-none">
      <div className="flex justify-between text-[8px] font-mono text-gray-400 border-b border-slate-100 pb-1">
        <span>ALIGNMENT_ROADMAP</span>
        <span className="text-black font-bold">STABLE</span>
      </div>
      <div className="flex-grow flex items-center justify-center my-1">
        <svg viewBox="0 0 100 40" className="w-full h-8">
          <line x1="10" y1="20" x2="90" y2="20" stroke="#cfc4c5" strokeWidth="1" strokeDasharray="2,2" />
          <circle cx="15" cy="20" r="4" fill="#9fc628" />
          <circle cx="50" cy="20" r="4" fill="#000" />
          <circle cx="85" cy="20" r="4" fill="#77951e" />
        </svg>
      </div>
      <div className="flex justify-between text-[7px] font-mono text-gray-400 border-t border-slate-100 pt-1">
        <span>MILESTONE_01</span>
        <span>MILESTONE_02</span>
        <span>MILESTONE_03</span>
      </div>
    </div>
  );

  const agileIllustration = (
    <div className="h-32 w-full bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between select-none text-white/50 font-mono text-[8px]">
      <div className="flex justify-between items-center border-b border-white/10 pb-1 text-[7px]">
        <span>SPRINT_PROGRESSION</span>
        <span className="text-green-400">● ACTIVE</span>
      </div>
      <div className="relative flex-grow h-10 my-1.5">
        <svg className="w-full h-full" viewBox="0 0 150 40">
          <path d="M 10,5 Q 60,35 140,35" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 10,5 L 140,35" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      </div>
      <div className="flex justify-between text-[6px] border-t border-white/10 pt-1 text-white/30">
        <span>VELOCITY: 42 PTS</span>
        <span>EFFICIENCY: 98.4%</span>
      </div>
    </div>
  );

  const optimizationIllustration = (
    <div className="h-32 w-full bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between select-none">
      <div className="flex justify-between text-[8px] font-mono text-gray-400 border-b border-slate-100 pb-1">
        <span>PERFORMANCE_AUDIT</span>
        <span className="text-green-500 font-bold">99/100</span>
      </div>
      <div className="space-y-1 py-1 font-mono text-[7px] text-gray-600">
        <div className="flex justify-between">
          <span>RESPONSE_TIME:</span>
          <span className="text-black font-bold">120ms</span>
        </div>
        <div className="flex justify-between">
          <span>DOMAIN_AUTHORITY:</span>
          <span className="text-black font-bold">PR8</span>
        </div>
        <div className="flex justify-between">
          <span>LEDGER_DISCREPANCY:</span>
          <span className="text-black font-bold">0.00%</span>
        </div>
      </div>
      <div className="text-[7px] font-mono text-gray-400 border-t border-slate-100 pt-1 text-center">
        STATUS: FULLY_OPTIMIZED
      </div>
    </div>
  );

  const scaleIllustration = (
    <div className="h-32 w-full bg-slate-50 border border-slate-200 p-4 flex flex-col justify-between select-none">
      <div className="flex justify-between text-[8px] font-mono text-gray-400 border-b border-slate-100 pb-1">
        <span>GROWTH_MULTIPLIER</span>
        <span className="text-brand-purple font-bold">4.2x LTV</span>
      </div>
      <div className="relative flex-grow h-10 my-1.5">
        <svg className="w-full h-full" viewBox="0 0 150 40">
          <path d="M 10,35 Q 80,35 140,5" fill="none" stroke="#9fc628" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex justify-between text-[7px] font-mono text-gray-400 border-t border-slate-100 pt-1">
        <span>PPC_ROI: 480%</span>
        <span>EXPANSION: ACTIVE</span>
      </div>
    </div>
  );

  const steps = [
    {
      num: "01",
      title: "Discovery & System Audit",
      icon: Search,
      subtitle: "Deep-dive diagnostic phase",
      desc: "Before drafting any proposal, we perform exhaustive checks on your active software stack, marketing channel CAC, and corporate bookkeeping. We identify resource bottlenecks and document structural leaks.",
      timeline: "Duration: 1–2 Weeks",
      bg: "white" as const,
      illustration: auditIllustration,
      bullets: ["Codebase Leak analysis", "Ledger misalignment checks", "Marketing CAC re-allocations"],
    },
    {
      num: "02",
      title: "Strategic Roadmap",
      icon: Compass,
      subtitle: "Integrated operational alignment",
      desc: "Our partners align. Tech architecture transitions, financial forecasting models, and brand assets are coordinated under a single strategic charter. We align priorities directly with your cash flows.",
      timeline: "Duration: 2 Weeks",
      bg: "default" as const,
      illustration: roadmapIllustration,
      bullets: ["Unified corporate blueprint", "M&A transition modeling", "Priority cash flow mapping"],
    },
    {
      num: "03",
      title: "Agile Implementation",
      icon: Cpu,
      subtitle: "Engineering & development sprint",
      desc: "Our dedicated developers, branding designers, and accountants start execution in parallel. We work under strict SLA metrics, updating your internal dashboard with transparent progress indicators daily.",
      timeline: "Duration: Ongoing Sprint",
      bg: "white" as const,
      illustration: agileIllustration,
      bullets: ["Parallel developer sprints", "SOC-2 audited coding setups", "Daily progress dashboard"],
    },
    {
      num: "04",
      title: "Operational Optimization",
      icon: Layers,
      subtitle: "Review, refine & audit",
      desc: "We verify system speed, SEO domain authority, accounting ledger hygiene, and support ticket response times. We refine active parameters weekly to ensure optimal resource performance.",
      timeline: "Duration: Continuous Audit",
      bg: "default" as const,
      illustration: optimizationIllustration,
      bullets: ["Web core vitals tuning", "SEO domain authority reviews", "Continuous compliance checks"],
    },
    {
      num: "05",
      title: "Scale & Expansion",
      icon: TrendingUp,
      subtitle: "Aggressive market scaling",
      desc: "With a stable operational baseline established, we launch performance PPC campaigns, structure executive succession plans, and scale support capacity, accelerating market growth safely.",
      timeline: "Duration: Long-term Partnership",
      bg: "white" as const,
      illustration: scaleIllustration,
      bullets: ["Programmatic PPC scaling", "Executive succession modeling", "Long-term partnership roadmaps"],
    },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans">
      {/* Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Compass className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555">
                How We Work
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black tracking-tight">
              Our Process Framework
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              We follow a rigorous, step-by-step systems framework to guarantee predictable growth and structural reliability.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule System Audit
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="/services"
              >
                Explore Services
              </PremiumButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroProcessSimulator />
          </div>
        </div>
      </SectionWrapper>

      {/* Alternating Process Steps */}
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <SectionWrapper
            key={idx}
            background={step.bg}
            spacing="compact"
            className={idx === 0 ? "border-t border-brand-border-light relative z-10" : "border-t border-brand-border-light"}
            animate
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left text column */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-black text-white text-xs font-mono font-bold border-2 border-brand-purple/20">
                    {step.num}
                  </div>
                  <div>
                    <h2 className="font-plus-jakarta text-xl font-bold text-black leading-tight">
                      {step.title}
                    </h2>
                    <p className="font-inter text-[10px] font-bold text-brand-purple mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <p className="font-inter text-xs md:text-sm text-gray-650 leading-relaxed max-w-xl">
                  {step.desc}
                </p>

                <div className="border-t border-brand-border-light/60 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                    {step.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-1.5">
                        <Check className="h-3 w-3 text-brand-purple shrink-0" />
                        <span className="text-[10px] text-gray-500 font-mono font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-gray-400 bg-brand-bg border border-brand-border-light px-3.5 py-1.5">
                    {step.timeline}
                  </span>
                </div>
              </div>

              {/* Right visual column */}
              <div className="lg:col-span-5 relative flex flex-col justify-center">
                <div className="shadow-xl border border-brand-border bg-white p-2">
                  {step.illustration}
                </div>
              </div>
            </div>
          </SectionWrapper>
        );
      })}

      {/* Consultation Call Action */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-4">// CONVERSION GATEWAY</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Initiate Step 01?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book your strategy audit briefing now to diagnose bottleneck issues in your software, ledgers, and marketing spend channels.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Schedule Free Strategy Audit
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Talk to an Expert
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
