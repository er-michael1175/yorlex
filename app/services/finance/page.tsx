"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  ArrowRight,
  ShieldCheck,
  Check,
  BarChart3,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  FileSpreadsheet,
  Scale,
  Users,
  Lock,
  Heart,
  ShoppingCart,
  GraduationCap,
  MapPin,
  Building2,
  Cpu,
  Coins,
  Receipt,
  FileText,
} from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Interactive Capital Allocation/CFO Dashboard for the Hero Right Side
function HeroFinanceDashboard() {
  const [allocationTier, setAllocationTier] = useState<"growth" | "conservative" | "balanced">("balanced");

  const allocations = {
    growth: [
      { name: "Expansion & CapEx", pct: 50, color: "bg-brand-purple" },
      { name: "Operating Reserve", pct: 30, color: "bg-black" },
      { name: "Tax & Compliance Fund", pct: 20, color: "bg-brand-purple/40" },
    ],
    conservative: [
      { name: "Expansion & CapEx", pct: 15, color: "bg-brand-purple" },
      { name: "Operating Reserve", pct: 60, color: "bg-black" },
      { name: "Tax & Compliance Fund", pct: 25, color: "bg-brand-purple/40" },
    ],
    balanced: [
      { name: "Expansion & CapEx", pct: 35, color: "bg-brand-purple" },
      { name: "Operating Reserve", pct: 45, color: "bg-black" },
      { name: "Tax & Compliance Fund", pct: 20, color: "bg-brand-purple/40" },
    ],
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
          YORLEX // FINANCIAL_ALLOCATOR
        </span>
      </div>

      {/* Main Metric Banner */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] font-bold">Cash Runway</span>
          <span className="text-xs font-bold text-green-400 font-mono mt-1">24.5 Months</span>
        </div>
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] font-bold">Burn Rate</span>
          <span className="text-xs font-bold text-white font-mono mt-1">$42,500/mo</span>
        </div>
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] font-bold">Audit Status</span>
          <span className="text-xs font-bold text-brand-purple font-mono mt-1">100% READY</span>
        </div>
      </div>

      {/* Interactive Selectors */}
      <div className="flex gap-1.5 border border-brand-border-light/5 bg-slate-900/40 p-1.5 mb-3 relative">
        {(["growth", "balanced", "conservative"] as const).map((tier) => (
          <button
            key={tier}
            onClick={() => setAllocationTier(tier)}
            className="flex-1 py-1.5 text-[8px] font-bold transition-colors duration-150 rounded-full relative z-10 text-gray-555 hover:text-white"
          >
            <span className={allocationTier === tier ? "text-white" : ""}>{tier}</span>
            {allocationTier === tier && (
              <motion.div
                layoutId="activeAllocationTab"
                className="absolute inset-0 bg-brand-purple -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Output Diagram */}
      <div className="flex-1 flex flex-col gap-2.5 justify-center">
        <div className="text-[8px] text-gray-500 font-bold mb-1">
          // CAPITAL ALLOCATION DISTRIBUTION
        </div>
        <div className="h-6 w-full flex border border-brand-border-light/10 bg-slate-900/80 overflow-hidden">
          {allocations[allocationTier].map((slice, idx) => (
            <div
              key={idx}
              className={`${slice.color} h-full transition-all duration-300`}
              style={{ width: `${slice.pct}%` }}
              title={`${slice.name}: ${slice.pct}%`}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 text-[8px] leading-tight text-gray-400">
          {allocations[allocationTier].map((slice, idx) => (
            <div key={idx} className="flex flex-col gap-0.5">
              <span className="font-bold flex items-center gap-1">
                <span className={`w-1.5 h-1.5 shrink-0 ${slice.color}`} />
                {slice.pct}%
              </span>
              <span className="text-[7px] text-gray-550 truncate">{slice.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Interactive KPI Dashboard Section Component
function LiveFinanceDashboardSection() {
  const [activeTab, setActiveTab] = useState<"kpi" | "chart" | "expenses">("kpi");

  return (
    <div className="bg-slate-950 border border-brand-border-light/10 p-8 font-mono text-xs text-white max-w-4xl mx-auto shadow-2xl relative">
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-brand-purple animate-pulse" />
          <span className="font-bold text-[10px] text-brand-purple">
            Yorlex Finance Command Center // v2.10
          </span>
        </div>
        <div className="flex gap-2 relative">
          {(["kpi", "chart", "expenses"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-3 py-1.5 text-[9px] font-bold border transition-all duration-200 relative overflow-hidden"
              style={{
                borderColor: activeTab === tab ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)"
              }}
            >
              <span className={`relative z-10 ${activeTab === tab ? "text-black" : "text-gray-450"}`}>
                {tab}
              </span>
              {activeTab === tab && (
                <motion.div
                  layoutId="activeLiveFinanceTab"
                  className="absolute inset-0 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "kpi" && (
          <motion.div
            key="kpi"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { label: "Annual Revenue Growth", value: "+34.2%", desc: "CAGR metrics verified", color: "text-green-400" },
              { label: "Net Profit Margin", value: "28.4%", desc: "Forensic ledger optimized", color: "text-brand-blue" },
              { label: "Tax Compliance Status", value: "100% FILED", desc: "No liability warnings", color: "text-green-500" },
              { label: "Monthly Cash Flow", value: "OPTIMIZED", desc: "Accounts receivable balanced", color: "text-brand-purple" },
              { label: "Payroll Accuracy", value: "99.98%", desc: "SOC-2 audited metrics", color: "text-green-400" },
              { label: "Operating Leverage", value: "3.24x", desc: "Scale resilience benchmark", color: "text-white" },
            ].map((metric, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-white/5 p-5 flex flex-col gap-2">
                <span className="text-gray-500 text-[8px] font-bold">
                  {metric.label}
                </span>
                <span className={`text-xl font-bold font-mono ${metric.color}`}>
                  {metric.value}
                </span>
                <span className="text-[8px] text-gray-550 tracking-wide">// {metric.desc}</span>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === "chart" && (
          <motion.div
            key="chart"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="text-[9px] text-gray-500 font-bold">// CUMULATIVE REVENUE TREND</div>
            <div className="h-44 w-full border border-white/5 bg-slate-900/30 p-4 flex items-end justify-between gap-3 relative">
              {/* Grid overlay */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                <div className="border-b border-white w-full" />
                <div className="border-b border-white w-full" />
                <div className="border-b border-white w-full" />
              </div>
              
              {[
                { label: "Q1", height: "30%", val: "$2.1M" },
                { label: "Q2", height: "45%", val: "$3.3M" },
                { label: "Q3", height: "70%", val: "$5.1M" },
                { label: "Q4", height: "100%", val: "$7.4M" },
              ].map((bar, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group z-10">
                  <span className="text-[7px] text-gray-500 font-bold font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    {bar.val}
                  </span>
                  <div
                    style={{ height: bar.height }}
                    className="w-full bg-brand-purple border border-brand-purple/40 hover:bg-white hover:border-white transition-all duration-300"
                  />
                  <span className="text-[8px] text-gray-400 font-bold">{bar.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "expenses" && (
          <motion.div
            key="expenses"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="text-[9px] text-gray-500 font-bold">// OPERATIONAL COST ANALYSIS</div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Product & Engineering", pct: 40, color: "bg-white" },
                { label: "Sales & Client Management", pct: 30, color: "bg-brand-purple" },
                { label: "Operations & HR Admin", pct: 20, color: "bg-brand-purple/60" },
                { label: "Tax & Advisory Audits", pct: 10, color: "bg-brand-purple/20" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-[9px] font-bold text-gray-400">
                    <span className="">{item.label}</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 border border-white/5 overflow-hidden">
                    <div className={`${item.color} h-full`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Financial Services Grid Data
const financialServices = [
  {
    title: "Accounting & Bookkeeping",
    description: "Daily bookkeeping and ledger management engineered for absolute visibility and error-free compliance.",
    icon: FileSpreadsheet,
    bullets: ["Daily Ledger Updates", "Financial Statements", "Accounts Payable", "Accounts Receivable", "General Ledger Setup"],
  },
  {
    title: "Tax & GST Compliance",
    description: "Navigate complex tax frameworks cleanly, ensuring on-time tax filings and optimal corporate restructures.",
    icon: Receipt,
    bullets: ["GST Registrations", "Monthly GST Filing", "Income Tax Returns", "Strategic Tax Planning", "Statutory Compliance Audits"],
  },
  {
    title: "Payroll Management",
    description: "Automate salary disbursements and benefits processing while maintaining tight regulatory alignments.",
    icon: Users,
    bullets: ["Salary Processing", "Payslip Distribution", "Employee Benefits", "PF & ESI Management", "Payroll Compliance Checks"],
  },
  {
    title: "Virtual CFO Services",
    description: "Leverage seasoned financial advisors to model cash flows, forecast runway, and direct investor reporting.",
    icon: BarChart3,
    bullets: ["Growth Financial Strategy", "Budget Planning", "Cash Flow Engineering", "Financial Forecasting", "Board & Investor Reports"],
  },
  {
    title: "Audit & Compliance",
    description: "Protect operations through regular internal inspections, forensically audited statements, and risk reviews.",
    icon: ShieldCheck,
    bullets: ["Internal Audit Operations", "Audit Support blueprints", "Regulatory Compliances", "Vulnerability Assessment", "Statutory Documentation"],
  },
  {
    title: "Business Advisory",
    description: "Formulate business valuations, optimize operational costs, and construct capital funding blueprints.",
    icon: Briefcase,
    bullets: ["SaaS & Startup Modeling", "Capital Funding Strategy", "Business Valuations", "Cost Optimization Reviews", "Profitability Analytics"],
  },
];

// Industries Supported Data
const industries = [
  { name: "Startups", icon: Cpu },
  { name: "Healthcare", icon: Heart },
  { name: "Manufacturing", icon: Building2 },
  { name: "Retail", icon: ShoppingCart },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: MapPin },
  { name: "Hospitality", icon: Landmark },
  { name: "Professional Services", icon: Scale },
];

// Timeline Process Data
const timelineSteps = [
  { title: "Business Assessment", desc: "Thorough auditing of current assets, cash runways, and liabilities." },
  { title: "Financial Planning", desc: "Drafting scalable cash flow models, budgets, and tax optimization goals." },
  { title: "Accounting Setup", desc: "Deploying automated cloud ledgers, payroll engines, and bookkeeping channels." },
  { title: "Compliance & Tax", desc: "Executing statutory filings, tax compliance plans, and regional compliance audits." },
  { title: "Reporting & Analytics", desc: "Generating real-time financial command portals and investor-grade statements." },
  { title: "Continuous Advisory", desc: "Providing regular CFO strategic reviews, funding strategies, and cost-reduction audits." },
];

// Why Choose Us Data
const featuresList = [
  { title: "Accurate Financial Reporting", desc: "Reliable, audit-ready statements compiled to support corporate decisions." },
  { title: "Regulatory Compliance", desc: "Absolute compliance alignment with regional tax codes and financial authorities." },
  { title: "Dedicated Finance Experts", desc: "Experienced chartered accountants and CFO consultants assigned to your business." },
  { title: "Data Security", desc: "Military-grade data protection parameters securing your proprietary records." },
  { title: "Scalable Services", desc: "Modular configurations that adapt seamlessly as your enterprise scales." },
  { title: "Transparent Pricing", desc: "Standard, flat-rate pricing schemas with zero hidden fees." },
];

// Case Studies Data
const caseStudies = [
  {
    title: "Startup Accounting Transformation",
    metric: "Reduced Bookkeeping Overhead by 70%",
    desc: "Re-engineered a Series A SaaS company's legacy accounting stacks, migrating manual spreadsheets to automated cloud ledgers.",
    label: "SaaS & Scale",
  },
  {
    title: "Payroll Automation Engine",
    metric: "100% Payroll Processing Accuracy",
    desc: "Consolidated multi-state salary compliance, benefits distribution, and tax filings for 500+ employees.",
    label: "HR & Compliance",
  },
  {
    title: "Strategic Tax Optimization",
    metric: "22% Liability Reduction Year-over-Year",
    desc: "Conducted tax structuring reviews for a manufacturing group, optimizing statutory exemptions and corporate liabilities.",
    label: "Tax & Advisory",
  },
];

// FAQs Data
const faqItems = [
  {
    q: "Do you work with startups?",
    a: "Yes, we routinely partner with seed to pre-IPO startups. We set up initial clean ledgers, model cash runways, structure compliance foundations, and advise on venture capital funding frameworks.",
  },
  {
    q: "Can you manage monthly bookkeeping?",
    a: "Yes, our team runs daily and monthly bookkeeping processes, producing fully reconciled bank statements, profit and loss statements (P&Ls), and cash flow logs.",
  },
  {
    q: "Do you provide GST filing?",
    a: "Yes, we handle end-to-end GST registrations, continuous transactional reconciliations, and regular monthly or quarterly tax filings under strict regulatory oversight.",
  },
  {
    q: "Can Yorlex handle payroll?",
    a: "Yes. We operate payroll disbursements, handle payslip generation, configure employee benefits, execute statutory PF/ESI compliance, and handle payroll tax filings.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We specialize in high-growth startups, healthcare facilities, manufacturing corporations, retail and e-commerce platforms, logistics businesses, and professional firms.",
  },
  {
    q: "Do you provide Virtual CFO services?",
    a: "Yes, our Virtual CFO solutions deliver advanced financial forecasting, cost optimization metrics, investor-grade reporting sheets, and direct board advisory support.",
  },
];

export default function FinanceSolutions() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="flex-1 font-sans bg-brand-bg">
      {/* 1. Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Landmark className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555">
                Finance Pillar
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black tracking-tight">
              Financial Solutions That Drive Business Growth
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Manage your finances with confidence. From accounting and tax compliance to payroll, virtual CFO services, and financial planning, Yorlex helps businesses stay compliant, profitable, and future-ready.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule Financial Consultation
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="/contact"
              >
                Request a Quote
              </PremiumButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroFinanceDashboard />
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Overview Section */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light relative z-10" animate>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-4">
          <div className="max-w-md">
            <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// ADVISORY OVERVIEW</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black">
              Strategic Financial Services
            </h2>
          </div>
          <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
            Whether you're a startup, SME, or enterprise, Yorlex provides comprehensive financial solutions that improve cash flow, reduce compliance risks, and support long-term business growth.
          </p>
        </div>
      </SectionWrapper>

      {/* 3. Our Financial Services Grid */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financialServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative block bg-white border border-brand-border-light p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand-purple hover:shadow-[0_10px_30px_rgba(92,122,52,0.05)]"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-purple origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 border border-brand-border-light bg-brand-bg transition-colors duration-300 group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5">
                    <Icon className="w-5 h-5 text-black group-hover:text-brand-purple transition-colors" />
                  </div>
                  
                  <h3 className="font-plus-jakarta text-base font-bold tracking-tight text-black">
                    {service.title}
                  </h3>
                  
                  <p className="font-inter text-xs leading-relaxed text-gray-550">
                    {service.description}
                  </p>

                  <div className="border-t border-brand-border-light/60 my-2 pt-3">
                    <div className="grid grid-cols-1 gap-y-2">
                      {service.bullets.map((bullet, bulletIdx) => (
                        <div key={bulletIdx} className="flex items-center gap-1.5">
                          <Check className="h-3 w-3 text-brand-purple shrink-0" />
                          <span className="text-[10px] text-gray-500 font-mono" title={bullet}>
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 4. Industries We Support */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// TARGET VERTICALS</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Industries We Support
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Structuring regulatory blueprints and custom ledger management schemas across multiple business sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-brand-border-light p-4 flex flex-col items-center justify-center text-center gap-3 transition-colors hover:border-brand-purple"
              >
                <div className="w-8 h-8 rounded-2xl bg-brand-bg flex items-center justify-center text-black">
                  <Icon className="w-4 h-4 text-brand-purple" />
                </div>
                <span className="text-[10px] font-plus-jakarta font-bold text-black">
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 5. Financial Process Timeline */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// ENGAGEMENT METHODOLOGY</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Our Financial Process
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            A systematic lifecycle designed to transition from ledger setup to strategic CFO planning.
          </p>
        </div>

        {/* Steps Pipeline */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between items-start">
          {/* Connector line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-[4%] right-[4%] h-[2px] bg-brand-border-light/60 z-0" />
          
          {timelineSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-row lg:flex-col items-start gap-4 lg:gap-3 lg:w-[15%]">
              {/* Step indicator */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-black text-white text-xs font-mono font-bold border-2 border-brand-purple/20 hover:border-brand-purple transition-all duration-300">
                0{idx + 1}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-plus-jakarta text-sm font-bold tracking-tight text-black">
                  {step.title}
                </h3>
                <p className="font-inter text-[11px] leading-relaxed text-gray-550">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. Why Choose Yorlex */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// FIDUCIARY ADVANTAGE</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Why Choose Yorlex
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Rigorous compliance protocols, dedicated experts, and absolute data protection guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border-light p-8 flex gap-4 transition-colors hover:border-brand-purple"
            >
              <div className="w-8 h-8 rounded-2xl border border-brand-border bg-brand-bg flex items-center justify-center text-green-500 shrink-0">
                <Check className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-plus-jakarta text-sm font-bold tracking-tight text-black">
                  {feature.title}
                </h3>
                <p className="font-inter text-xs leading-relaxed text-gray-500">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 7. Live Financial Dashboard Section */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// REAL-TIME DATA TELEMETRY</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Financial Dashboard
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Interactive visualization of critical growth indicators, tax statuses, and capital runway metrics.
          </p>
        </div>
        
        <LiveFinanceDashboardSection />
      </SectionWrapper>

      {/* 8. Recent Case Studies */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// AUDITED OUTCOMES</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Recent Case Studies
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Audit-ready reviews detailing financial transformations, cost optimizations, and automation metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border-light hover:border-brand-purple transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual mockup top bar */}
              <div className="bg-[#0d0d0e] border-b border-brand-border-light/10 p-6 font-mono text-[9px] text-brand-purple min-h-[140px] flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-[8px] text-gray-500 font-bold">{project.label}</span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center my-3 text-center gap-1">
                  <span className="text-white text-xs font-plus-jakarta font-bold">
                    {project.title}
                  </span>
                </div>
                <div className="border-t border-white/5 pt-2 flex justify-between text-brand-purple/90 font-bold text-[9px]">
                  <span>METRIC:</span>
                  <span>{project.metric}</span>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-6">
                <p className="font-inter text-xs leading-relaxed text-gray-550">
                  {project.desc}
                </p>
                <div className="border-t border-brand-border-light/60 pt-4 flex flex-col gap-1">
                  <span className="text-[8px] font-bold text-gray-400">Business Impact</span>
                  <span className="font-mono text-xs font-bold text-green-600">
                    {project.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 9. FAQs Section */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <HelpCircle className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-550">
                Support Q&A
              </span>
            </div>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-black text-black leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-md">
              Review our compliance workflows, Virtual CFO consultation frameworks, bookkeeping guidelines, and audit processes.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-brand-border rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
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

      {/* 10. Call to Action */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-4">// CAPITAL STABILIZATION</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Let's Build a Strong Financial Foundation
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Focus on growing your business while Yorlex manages your financial operations with precision, compliance, and strategic insight.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Book Financial Consultation
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Speak with a Finance Expert
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
