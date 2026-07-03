"use client";

import React from "react";
import { Search, Compass, Cpu, Layers, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & System Audit",
      icon: Search,
      subtitle: "Deep-dive diagnostic phase",
      desc: "Before drafting any proposal, we perform exhaustive checks on your active software stack, marketing channel CAC, and corporate bookkeeping. We identify resource bottlenecks and document structural leaks.",
      timeline: "Duration: 1–2 Weeks",
    },
    {
      num: "02",
      title: "Strategic Roadmap",
      icon: Compass,
      subtitle: "Integrated operational alignment",
      desc: "Our partners align. Tech architecture transitions, financial forecasting models, and brand assets are coordinated under a single strategic charter. We align priorities directly with your cash flows.",
      timeline: "Duration: 2 Weeks",
    },
    {
      num: "03",
      title: "Agile Implementation",
      icon: Cpu,
      subtitle: "Engineering & development sprint",
      desc: "Our dedicated developers, branding designers, and accountants start execution in parallel. We work under strict SLA metrics, updating your internal dashboard with transparent progress indicators daily.",
      timeline: "Duration: Ongoing Sprint",
    },
    {
      num: "04",
      title: "Operational Optimization",
      icon: Layers,
      subtitle: "Review, refine & audit",
      desc: "We verify system speed, SEO domain authority, accounting ledger hygiene, and support ticket response times. We refine active parameters weekly to ensure optimal resource performance.",
      timeline: "Duration: Continuous Audit",
    },
    {
      num: "05",
      title: "Scale & Expansion",
      icon: TrendingUp,
      subtitle: "Aggressive market scaling",
      desc: "With a stable operational baseline established, we launch performance PPC campaigns, structure executive succession plans, and scale support capacity, accelerating market growth safely.",
      timeline: "Duration: Long-term Partnership",
    },
  ];

  const auditIllustration = (
    <div className="h-28 w-full bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between select-none">
      <div className="flex justify-between text-[8px] font-mono text-gray-400 border-b border-slate-100 pb-1">
        <span>DIAGNOSTIC_CORE</span>
        <span className="text-brand-purple">RUNNING_SCAN</span>
      </div>
      <div className="space-y-1 py-1 font-mono text-[7px] text-gray-600">
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
    <div className="h-28 w-full bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between select-none">
      <div className="flex justify-between text-[8px] font-mono text-gray-400 border-b border-slate-100 pb-1">
        <span>ALIGNMENT_ROADMAP</span>
        <span className="text-black font-bold">STABLE</span>
      </div>
      <div className="flex-grow flex items-center justify-center my-1">
        <svg viewBox="0 0 100 40" className="w-full h-8">
          <line x1="10" y1="20" x2="90" y2="20" stroke="#cfc4c5" strokeWidth="1" strokeDasharray="2,2" />
          <circle cx="15" cy="20" r="4" fill="#a100ff" />
          <circle cx="50" cy="20" r="4" fill="#000" />
          <circle cx="85" cy="20" r="4" fill="#007aff" />
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
    <div className="h-28 w-full bg-slate-950 border border-slate-800 p-3 flex flex-col justify-between select-none text-white/50 font-mono text-[8px]">
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
    <div className="h-28 w-full bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between select-none">
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
    <div className="h-28 w-full bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between select-none">
      <div className="flex justify-between text-[8px] font-mono text-gray-400 border-b border-slate-100 pb-1">
        <span>GROWTH_MULTIPLIER</span>
        <span className="text-brand-purple font-bold">4.2x LTV</span>
      </div>
      <div className="relative flex-grow h-10 my-1.5">
        <svg className="w-full h-full" viewBox="0 0 150 40">
          <path d="M 10,35 Q 80,35 140,5" fill="none" stroke="#a100ff" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex justify-between text-[7px] font-mono text-gray-400 border-t border-slate-100 pt-1">
        <span>PPC_ROI: 480%</span>
        <span>EXPANSION: ACTIVE</span>
      </div>
    </div>
  );

  const illustrations = [
    auditIllustration,
    roadmapIllustration,
    agileIllustration,
    optimizationIllustration,
    scaleIllustration,
  ];

  return (
    <div className="flex-1 bg-brand-bg pt-16 md:pt-20 pb-12 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max mb-4">
            <Compass className="h-4 w-4 text-brand-purple shrink-0" />
            <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
              How We Work
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-black mb-3 font-plus-jakarta uppercase leading-tight">
            Our Process
          </h1>
          <p className="text-gray-650 font-inter text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            We follow a rigorous, step-by-step systems framework to guarantee predictable growth and structural reliability.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative border-l border-brand-border pl-6 md:pl-12 ml-4 md:ml-8 space-y-4 md:space-y-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const currentIllustration = illustrations[idx];
            return (
              <div key={step.num} className="relative group">
                
                {/* Timeline Dot/Icon */}
                <div className="absolute -left-[46px] md:-left-[70px] top-0 w-10 h-10 rounded-none bg-white border border-brand-border flex items-center justify-center text-black font-inter font-bold text-xs transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white group-hover:border-brand-purple shadow-sm">
                  {step.num}
                </div>

                <div className="sharp-card p-6 group-hover:border-brand-purple transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch">
                    {/* Left content block */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-black font-plus-jakarta uppercase tracking-wide">
                                {step.title}
                              </h3>
                              <p className="text-[10px] text-brand-purple font-bold font-inter uppercase tracking-wider mt-0.5">
                                {step.subtitle}
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-brand-border-light/40 border border-brand-border px-3.5 py-1.5 rounded-none inline-block shrink-0">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 font-inter leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right illustration block */}
                    {currentIllustration && (
                      <div className="w-full md:w-[260px] shrink-0 mt-4 md:mt-0 relative z-10 flex flex-col justify-center">
                        {currentIllustration}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Consultation Call Action (Obsidian-black section matching plan guidelines) */}
        <div className="bg-black text-white p-10 md:p-16 border border-black text-center relative overflow-hidden mt-12 rounded-none">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-purple to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-plus-jakarta uppercase mb-4">
              Ready to initiate Step 01?
            </h2>
            <p className="text-gray-400 font-inter text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              Book your strategy audit briefing now to diagnose bottleneck issues in your systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-brand-purple text-black hover:text-white font-bold px-8 py-4 rounded-none transition-colors border border-white hover:border-brand-purple font-inter font-bold text-[10px] uppercase"
            >
              Schedule Free Strategy Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
