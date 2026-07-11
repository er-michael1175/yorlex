"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, FileText, TrendingUp, ShieldCheck, CheckSquare, Send, Check, ArrowRight, Activity, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// Interactive Engagement Simulator for Hero Right Side
function HeroEngagementSimulator() {
  const [activeModel, setActiveModel] = useState<"t_m" | "fixed" | "success">("fixed");

  const modelSpecs = {
    t_m: {
      name: "Time & Materials",
      risk: "Shared Risk",
      flexibility: "100% Dynamic Scope",
      billing: "Monthly Sprint Iterations",
      sla: "Continuous Agile Delivery",
      color: "text-blue-400",
    },
    fixed: {
      name: "Fixed Price",
      risk: "Capped Client Risk",
      flexibility: "Strict Phase Parameters",
      billing: "Milestone-Based Gates",
      sla: "Guaranteed 45-Day Delivery",
      color: "text-brand-purple",
    },
    success: {
      name: "Success Fees",
      risk: "Venture Aligned",
      flexibility: "KPI Dependent Scope",
      billing: "Coordinated Revenue Shares",
      sla: "Performance Matched Metrics",
      color: "text-green-400",
    },
  };

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
          YORLEX // PARTNERSHIP_CONFIG
        </span>
      </div>

      {/* Selectors */}
      <div className="flex gap-1.5 border border-brand-border-light/5 bg-slate-900/40 p-1.5 mb-3 relative">
        {(["t_m", "fixed", "success"] as const).map((model) => (
          <button
            key={model}
            onClick={() => setActiveModel(model)}
            className="flex-1 py-1.5 text-[8px] font-bold transition-colors duration-150 rounded-full relative z-10 text-gray-555 hover:text-white"
          >
            <span className={activeModel === model ? "text-white" : ""}>
              {model === "t_m" ? "T&M" : model === "fixed" ? "Fixed" : "Success"}
            </span>
            {activeModel === model && (
              <motion.div
                layoutId="activeEngagementTab"
                className="absolute inset-0 bg-brand-purple -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Detail Block */}
      <div className="flex-1 flex flex-col gap-2.5 justify-center">
        <div className="text-[8px] text-gray-500 font-bold mb-1 flex justify-between">
          <span>// PIPELINE STAGES READY</span>
          <span className="text-green-500 animate-pulse">● CONFIG_ACTIVE</span>
        </div>

        <div className="bg-slate-900/40 border border-brand-border-light/5 p-3 flex flex-col gap-1.5 min-h-[110px] justify-center">
          <div className="text-white font-bold text-[10px]">
            {modelSpecs[activeModel].name} Model
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-400 mt-1 font-mono text-[8px] leading-relaxed">
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-550">FINANCIAL RISK</span>
              <span className={`font-bold mt-0.5 ${modelSpecs[activeModel].color}`}>{modelSpecs[activeModel].risk}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-550">SCOPE FLEXIBILITY</span>
              <span className="font-bold text-white mt-0.5">{modelSpecs[activeModel].flexibility}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-555">BILLING GATE</span>
              <span className="font-bold text-white mt-0.5">{modelSpecs[activeModel].billing}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-555">SLA COMMITMENT</span>
              <span className="font-bold text-white mt-0.5">{modelSpecs[activeModel].sla}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[7px] text-gray-450 border-t border-brand-border-light/10 pt-2">
        MUTUAL_IP_PROTECTION: ACTIVE // Zero-Downtime Guarantee
      </div>
    </div>
  );
}

const FOCUS_LABELS: Record<string, string> = {
  tech: "Technology Ecosystem Audit",
  finance: "Fiduciary & Tax Restructuring",
  marketing: "Brand Strategy & Pipeline Growth",
  management: "Lean Management & Talent Search",
};

export default function EngagementModels() {
  const [submitted, setSubmitted] = useState(false);
  const [briefingName, setBriefingName] = useState("");
  const [briefingEmail, setBriefingEmail] = useState("");
  const [briefingOrg, setBriefingOrg] = useState("");
  const [briefingFocus, setBriefingFocus] = useState("tech");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Hi Yorlex, I'd like to request a strategy briefing.",
      `Name: ${briefingName}`,
      `Corporate Email: ${briefingEmail}`,
      `Organization: ${briefingOrg}`,
      `Strategic Focus: ${FOCUS_LABELS[briefingFocus]}`,
    ].join("\n");
    const url = getWhatsAppUrl(message);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setSubmitted(true);
  };

  const models = [
    {
      name: "Model Alpha",
      title: "Time & Materials",
      icon: Clock,
      image: "/images/engagement/time-materials.jpg",
      desc: "Maximum flexibility for evolving architectures. Ideal for exploratory phases and dynamic R&D environments where scope requires continuous recalibration.",
      borderClass: "border-brand-border hover:border-brand-purple",
      bgClass: "bg-white text-black",
      badgeClass: "text-gray-400 border-brand-border-light",
      bullets: ["Dynamic sprints", "Continuous integration", "Agile scoping iterations"],
    },
    {
      name: "Model Beta",
      title: "Fixed Price",
      icon: FileText,
      image: "/images/engagement/fixed-price.jpg",
      desc: "Absolute financial predictability. Engineered for projects with strictly defined parameters, rigid compliance requirements, and unyielding deadlines.",
      borderClass: "border-slate-800 hover:border-brand-purple shadow-2xl",
      bgClass: "bg-slate-950 text-white",
      badgeClass: "text-gray-400 border-white/10",
      isHighContrast: true,
      bullets: ["Capped budget guarantee", "Strict delivery deadlines", "Clear milestone gates"],
    },
    {
      name: "Model Gamma",
      title: "Success Fees",
      icon: TrendingUp,
      image: "/images/engagement/success-fees.jpg",
      desc: "Venture-aligned partnerships. We tie a percentage of our compensation directly to measurable KPIs, revenue milestones, or cost-reduction metrics.",
      borderClass: "border-brand-border hover:border-brand-purple",
      bgClass: "bg-white text-black",
      badgeClass: "text-gray-400 border-brand-border-light",
      bullets: ["Venture-aligned risk", "SLA performance milestones", "Revenue/Cost KPI sharing"],
    },
  ];

  return (
    <div className="flex-grow bg-brand-bg font-sans pt-0 pb-0">
      {/* Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <CheckSquare className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555">
                Partnership Frameworks
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black tracking-tight">
              Strategic Engagements
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Transformative partnerships begin with absolute clarity. Yorlex does not operate on ambiguity. Discover our precision engagement models and initiate your enterprise transformation.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="#briefing"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Request Briefing
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
            <HeroEngagementSimulator />
          </div>
        </div>
      </SectionWrapper>

      {/* Digital Maturity Audit (Entry Point) */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-1.5 bg-brand-bg border border-brand-border px-3.5 py-1 text-black w-max font-mono text-[9px] font-bold">
              <Activity className="h-3.5 w-3.5 text-brand-purple shrink-0" /> Mandatory Baseline Entry Point
            </div>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black">
              The Digital Maturity Audit
            </h2>
            <p className="font-inter text-gray-650 text-xs md:text-sm leading-relaxed max-w-xl">
              Before committing to structural change, we must establish the baseline. Our proprietary Digital Maturity Audit is the mandatory first step for all high-level engagements, providing a ruthless, data-driven assessment of your current technological and operational architecture.
            </p>
            <div className="mt-2">
              <Link
                href="#briefing"
                className="inline-flex items-center gap-2 font-inter font-bold text-xs text-black border-b-2 border-black pb-1 hover:text-brand-purple hover:border-brand-purple transition-all"
              >
                Initiate Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative h-[280px] w-full bg-brand-bg border border-brand-border rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-300"
              alt="Analytical model visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCvWssENLIBkulyPyxN6ymGGMXbx1DX_a8VmX8tB-mPVOEvlU6nQCgQwFLILlf1Am7y6ELGAVIwxfA8bwRwbsZvtVHiJU5fU0bzh6uy35PuN3w2wLMcavb1DThfOCX8Hy9KQnuDO5QWjaTBM5i4XaE-9xtzdcfIfSNDxDh4DgNZufibMal3C2rBcqqV5lAcBywUJCce5zDodQJFnAa8bKuT9XuuHGDNJrwgD-uNzFGpsAHA70tEF7oOiN6DMOuGdY8TNV9i7JUWfQ"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Engagement Models (Grid) */}
      <SectionWrapper background="default" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// ENGAGEMENT FRAMEWORKS</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black">Engagement Models</h2>
            <p className="font-inter text-gray-500 text-xs mt-2">Tailored financial structures for enterprise integration.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.name}
                  className={`border flex flex-col justify-between rounded-2xl overflow-hidden hover:border-brand-purple transition-all duration-250 relative group shadow-sm ${
                    model.borderClass
                  } ${model.bgClass}`}
                >
                  {/* Top hover accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-purple transition-colors duration-250 z-10" />

                  <div className="relative h-28 overflow-hidden shrink-0">
                    <img src={model.image} alt="" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" />
                    <div className={`absolute inset-0 ${model.isHighContrast ? "bg-yorlex-green/60" : "bg-yorlex-navy/25"}`} />
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between min-h-[220px]">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-10 h-10 border flex items-center justify-center shrink-0 transition-colors duration-250 ${
                        model.isHighContrast
                          ? "bg-slate-900 border-white/10 text-white group-hover:bg-brand-purple group-hover:text-brand-text"
                          : "bg-brand-bg border-brand-border text-black group-hover:bg-brand-purple group-hover:text-brand-text"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`font-inter font-bold text-[8px] border px-2 py-0.5 ${model.badgeClass}`}>
                        {model.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-plus-jakarta text-lg font-bold mb-2">
                        {model.title}
                      </h3>
                      <p className={`font-inter text-xs leading-relaxed mb-6 ${model.isHighContrast ? "text-gray-400" : "text-gray-650"}`}>
                        {model.desc}
                      </p>

                      <ul className="space-y-2 border-t border-brand-border-light/40 pt-4">
                        {model.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2">
                            <Check className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                            <span className={`text-[10px] font-mono font-medium ${model.isHighContrast ? "text-gray-400" : "text-gray-500"}`}>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Minimalist Contact Form (Strategy Briefing) */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light" id="briefing" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-brand-bg border border-brand-border px-3.5 py-1 text-black w-max font-mono text-[9px] font-bold">
              <Calendar className="h-3.5 w-3.5 text-brand-purple shrink-0" /> Strategy Briefing
            </div>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black">
              Request a Briefing
            </h2>
            <p className="font-inter text-gray-650 text-xs md:text-sm leading-relaxed max-w-xl">
              Submit your enterprise parameters. Our qualification team will review your requirements and schedule a preliminary strategy briefing within 24 hours.
            </p>
            <div className="flex flex-col gap-3 font-inter text-[10px] font-bold text-gray-500 mt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-black" /> Secure &amp; Confidential Processing
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="h-4.5 w-4.5 text-black" /> For Enterprise Clients Only
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-bg p-8 border border-brand-border rounded-2xl shadow-xl">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-purple text-brand-text flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-black font-plus-jakarta mb-2">Sent to WhatsApp</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  We&apos;ve opened WhatsApp with your details pre-filled &mdash; just hit send and our team will respond right away.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="font-inter font-bold text-[10px] text-gray-500">Full Name</label>
                    <input
                      required
                      type="text"
                      value={briefingName}
                      onChange={(e) => setBriefingName(e.target.value)}
                      className="border-0 border-b border-brand-border bg-transparent px-0 py-2 focus:ring-0 focus:border-brand-purple font-inter text-sm text-black transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-inter font-bold text-[10px] text-gray-500">Corporate Email</label>
                    <input
                      required
                      type="email"
                      value={briefingEmail}
                      onChange={(e) => setBriefingEmail(e.target.value)}
                      className="border-0 border-b border-brand-border bg-transparent px-0 py-2 focus:ring-0 focus:border-brand-purple font-inter text-sm text-black transition-colors"
                      placeholder="jane@enterprise.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-inter font-bold text-[10px] text-gray-500">Organization</label>
                  <input
                    required
                    type="text"
                    value={briefingOrg}
                    onChange={(e) => setBriefingOrg(e.target.value)}
                    className="border-0 border-b border-brand-border bg-transparent px-0 py-2 focus:ring-0 focus:border-brand-purple font-inter text-sm text-black transition-colors"
                    placeholder="Company Name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-inter font-bold text-[10px] text-gray-500">Strategic Focus</label>
                  <select
                    value={briefingFocus}
                    onChange={(e) => setBriefingFocus(e.target.value)}
                    className="border-0 border-b border-brand-border bg-transparent px-0 py-2 focus:ring-0 focus:border-brand-purple font-inter text-sm text-black transition-colors"
                  >
                    <option value="tech">Technology Ecosystem Audit</option>
                    <option value="finance">Fiduciary &amp; Tax Restructuring</option>
                    <option value="marketing">Brand Strategy &amp; Pipeline Growth</option>
                    <option value="management">Lean Management &amp; Talent Search</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-brand-purple text-white hover:text-brand-text py-3.5 text-xs font-bold rounded-2xl transition-colors mt-4 flex items-center justify-center gap-2 border border-black hover:border-brand-purple"
                >
                  Submit Briefing <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
}
