"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Check,
  BarChart3,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  TrendingUp,
  Users,
  Settings,
  Shield,
  Award,
  Heart,
  ShoppingCart,
  GraduationCap,
  MapPin,
  Building2,
  Cpu,
  Landmark,
  Scale,
  Activity,
  Globe,
  FileText,
  Workflow,
} from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Interactive Boardroom Strategy Selector for the Hero Right Side
function HeroManagementDashboard() {
  const [activeStrategy, setActiveStrategy] = useState<"expansion" | "optimization" | "governance">("expansion");

  const strategyOutputs = {
    expansion: {
      velocity: "+38% Growth Velocity",
      risk: "Risk Mitigated: 84%",
      leverage: "Operating Leverage: 2.8x",
      headline: "GLOBAL MARKET EXPANSION PLAN",
      color: "bg-brand-purple",
    },
    optimization: {
      velocity: "+35% Operational Speed",
      risk: "Cost Reduced: 24%",
      leverage: "Process Efficiency: 92%",
      headline: "LEAN OPERATIONS RUNBOOK",
      color: "bg-black",
    },
    governance: {
      velocity: "100% Policy Alignment",
      risk: "Audit Readiness: SOC-2 READY",
      leverage: "Fiduciary Assurance: 98%",
      headline: "ENTERPRISE RISK GOVERNANCE",
      color: "bg-brand-purple/40",
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
        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">
          YORLEX // STRATEGY_SIMULATOR
        </span>
      </div>

      {/* Main Metric Banner */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] uppercase tracking-wider font-bold">Strategy Metric</span>
          <span className="text-xs font-bold text-green-400 font-mono mt-1">
            {strategyOutputs[activeStrategy].velocity.split(" ")[0]}
          </span>
        </div>
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] uppercase tracking-wider font-bold">Assurance Index</span>
          <span className="text-xs font-bold text-white font-mono mt-1">96.8%</span>
        </div>
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] uppercase tracking-wider font-bold">Consultant Sync</span>
          <span className="text-xs font-bold text-brand-purple font-mono mt-1">LIVE</span>
        </div>
      </div>

      {/* Strategy Switchers */}
      <div className="flex gap-1.5 border border-brand-border-light/5 bg-slate-900/40 p-1.5 mb-3 relative">
        {(["expansion", "optimization", "governance"] as const).map((strategy) => (
          <button
            key={strategy}
            onClick={() => setActiveStrategy(strategy)}
            className="flex-1 py-1.5 text-[8px] font-bold uppercase tracking-wider transition-colors duration-150 rounded-none relative z-10 text-gray-555 hover:text-white"
          >
            <span className={activeStrategy === strategy ? "text-white" : ""}>{strategy}</span>
            {activeStrategy === strategy && (
              <motion.div
                layoutId="activeStrategyTab"
                className="absolute inset-0 bg-brand-purple -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Projection Graphic */}
      <div className="flex-1 flex flex-col gap-2 justify-center">
        <div className="text-[8px] text-gray-500 uppercase tracking-widest font-bold mb-1">
          // {strategyOutputs[activeStrategy].headline}
        </div>
        <div className="bg-slate-900/40 border border-brand-border-light/5 p-2.5 text-gray-400 flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[9px] text-white font-bold">
            <span>&gt; {strategyOutputs[activeStrategy].velocity}</span>
            <span className="text-green-500">VERIFIED</span>
          </div>
          <div className="flex justify-between items-center text-[9px]">
            <span>&gt; {strategyOutputs[activeStrategy].risk}</span>
          </div>
          <div className="flex justify-between items-center text-[9px]">
            <span>&gt; {strategyOutputs[activeStrategy].leverage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Circular Management Framework Diagram
function CircularFramework() {
  const [activeNode, setActiveNode] = useState<string>("Strategy");

  const nodes = [
    { name: "Strategy", desc: "Formulating corporate roadmaps, market entry models, and transformation frameworks." },
    { name: "People", desc: "Onboarding setups, talent mapping, executive workshops, and organizational training." },
    { name: "Operations", desc: "Lean optimizations, PMO setups, process mapping, and workflow automations." },
    { name: "Technology", desc: "Aligning software, enterprise integrations, and compliance architectures." },
    { name: "Performance", desc: "Attributing KPIs, auditing reports, and reviewing cost reductions." },
    { name: "Innovation", desc: "Pioneering new business models, change management structures, and workshops." },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-4xl mx-auto py-8">
      {/* Visual Circle Block */}
      <div className="relative w-[min(78vw,340px)] h-[min(78vw,340px)] rounded-full border border-brand-border-light/20 flex items-center justify-center bg-slate-950/5 shrink-0 select-none">
        {/* Connection lines from center to outer circles (percentage-based so the diagram scales fluidly) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
          {nodes.map((node, i) => {
            const angle = -Math.PI / 2 + (i * Math.PI) / 3;
            // Center is (50, 50) in the 0-100 viewBox, radius ~33.8% of the container
            const x2 = 50 + Math.cos(angle) * 33.8;
            const y2 = 50 + Math.sin(angle) * 33.8;
            return (
              <line
                key={i}
                x1={50}
                y1={50}
                x2={x2}
                y2={y2}
                vectorEffect="non-scaling-stroke"
                className={`stroke-[1.5px] ${
                  activeNode === node.name ? "stroke-brand-purple" : "stroke-brand-border-light/30"
                } transition-colors duration-300`}
              />
            );
          })}
        </svg>

        {/* Decorative inner circular lines */}
        <div className="absolute w-[67.6%] h-[67.6%] rounded-full border border-dashed border-brand-purple/10 animate-[spin_120s_linear_infinite] z-0" />

        {/* Center Node */}
        <div className="w-[32%] h-[32%] rounded-full bg-black text-white flex flex-col items-center justify-center text-center p-2 sm:p-3 z-10 border border-brand-purple/40 shadow-xl">
          <span className="font-plus-jakarta font-bold text-[7px] sm:text-[8px] uppercase tracking-widest text-brand-purple">Center</span>
          <span className="font-plus-jakarta font-black text-[8px] sm:text-[9px] uppercase leading-tight mt-1">
            Business Excellence
          </span>
        </div>

        {/* Outer Circular Nodes (positioned via percentage + centering transform, so they track the fluid container size) */}
        {nodes.map((node, i) => {
          const angle = -Math.PI / 2 + (i * Math.PI) / 3;
          const leftPct = 50 + Math.cos(angle) * 33.8;
          const topPct = 50 + Math.sin(angle) * 33.8;

          return (
            <button
              key={node.name}
              onClick={() => setActiveNode(node.name)}
              style={{ left: `${leftPct}%`, top: `${topPct}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border flex items-center justify-center text-center p-1.5 sm:p-2 font-mono text-[8px] sm:text-[9px] uppercase font-bold tracking-wider transition-all duration-300 z-20 ${
                activeNode === node.name
                  ? "bg-brand-purple text-white border-brand-purple shadow-[0_0_15px_rgba(161,0,255,0.3)] scale-110"
                  : "bg-white text-black border-brand-border-light hover:border-brand-purple hover:scale-105"
              }`}
            >
              {node.name}
            </button>
          );
        })}
      </div>

      {/* Description Panel */}
      <div className="flex-1 w-full bg-white border border-brand-border p-8 min-h-45 flex flex-col justify-center gap-4">
        <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block">// FRAMEWORK NODE DETAIL</span>
        <h3 className="font-plus-jakarta text-2xl font-black uppercase text-black">
          {activeNode} Pillar
        </h3>
        <p className="font-inter text-xs leading-relaxed text-gray-550">
          {nodes.find((n) => n.name === activeNode)?.desc}
        </p>
      </div>
    </div>
  );
}

// Success Metrics (Business Impact)
const impactMetrics = [
  { value: "35%", label: "Operational Cost Reduction" },
  { value: "40%", label: "Productivity Improvement" },
  { value: "500+", label: "Business Processes Optimized" },
  { value: "95%", label: "Client Retention" },
  { value: "200+", label: "Leadership Workshops Delivered" },
];

// Management Services List
const managementServices = [
  {
    title: "Business Strategy",
    description: "Align expansions, execute business planning, run competitive analysis, and model growth strategies.",
    icon: Briefcase,
    bullets: ["Growth Business Planning", "Market Expansion strategies", "Competitive Analysis blueprints", "Corporate Strategy & Transformation"],
  },
  {
    title: "Operations Management",
    description: "Lean process optimization, workflow adjustments, SOP creations, and productivity enhancement.",
    icon: Workflow,
    bullets: ["Process Mapping & SOPs", "Workflow Optimization", "Lean Cost Reduction review", "Productivity Enhancement sprints"],
  },
  {
    title: "Project Management",
    description: "Set up PMO setups, run risk mitigation blueprints, plan resources, and run Agile deliveries.",
    icon: Settings,
    bullets: ["Agile Project Delivery", "Corporate PMO Setup", "Risk Management audits", "Resource Planning models"],
  },
  {
    title: "HR & Talent Management",
    description: "Structure employee onboarding, compensation metrics, recruitment flows, and HR policies.",
    icon: Users,
    bullets: ["Scale Recruitment pathways", "Employee Onboarding setups", "Performance Review matrices", "Talent Development handbooks"],
  },
  {
    title: "Leadership Consulting",
    description: "Provide executive coaching, organize leadership development, and guide change management.",
    icon: Award,
    bullets: ["Executive Consulting & Coaching", "Organizational Development", "Leadership Development workshops", "Change Management structures"],
  },
  {
    title: "Business Process Optimization",
    description: "Map existing workflows, execute Lean checks, and configure automation strategies.",
    icon: Cpu,
    bullets: ["Operational Process Mapping", "Lean & Quality Management", "Corporate Automation Strategy", "Process Re-Engineering"],
  },
  {
    title: "Corporate Training",
    description: "Conduct leadership development, soft-skill courses, and technical employee upskilling workshops.",
    icon: GraduationCap,
    bullets: ["Leadership Development Workshops", "Technical Upskilling courses", "Team Building frameworks", "Corporate Training modules"],
  },
  {
    title: "Compliance & Governance",
    description: "Structure corporate policies, run risk assessments, and configure internal control parameters.",
    icon: Shield,
    bullets: ["Statutory Business Policies", "Risk Assessment & Mitigation", "Internal Controls setup", "Corporate Governance guidelines"],
  },
];

// Industries Supported List
const industries = [
  { name: "Healthcare", icon: Heart },
  { name: "Finance", icon: Landmark },
  { name: "Manufacturing", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: MapPin },
  { name: "Retail", icon: ShoppingCart },
  { name: "Real Estate", icon: Building2 },
  { name: "Technology", icon: Cpu },
  { name: "Government", icon: Landmark },
  { name: "Professional Services", icon: Scale },
];

// Timeline process steps
const consultingProcess = [
  { title: "Business Assessment", desc: "Comprehensive review of current assets, leadership alignment, and resource bottlenecks." },
  { title: "Research & Analysis", desc: "Studying competitor positions, keyword search trajectories, and cash leaks." },
  { title: "Strategy Development", desc: "Formulating Lean SOP models, growth architectures, and operational goals." },
  { title: "Execution Planning", desc: "Setting up PMO structures, sprint timelines, and risk mitigation setups." },
  { title: "Implementation", desc: "Deploying workflows, automations, executive trainings, and HR policies." },
  { title: "Performance Monitoring", desc: "Tracking metrics, balance sheets, and operational speeds daily." },
  { title: "Continuous Improvement", desc: "Conducting regular audits, Lean updates, and corporate reviews." },
];

// Why Choose Us
const featuresList = [
  { title: "Experienced Consultants", desc: "Industry experts with practical business experience." },
  { title: "Tailored Strategies", desc: "Solutions customized to your business goals." },
  { title: "Operational Excellence", desc: "Improve productivity while reducing costs." },
  { title: "Scalable Frameworks", desc: "Management systems built for future growth." },
  { title: "Transparent Collaboration", desc: "Clear communication throughout every engagement." },
  { title: "Measurable Results", desc: "KPIs and performance tracking for every project." },
];

// Case Studies
const caseStudies = [
  {
    title: "Manufacturing Company",
    metric: "-30% Production Delays",
    desc: "Optimized floor operations, mapped supply-chain logistics, and implemented Lean performance standards.",
    label: "Operations & Logistics",
  },
  {
    title: "Technology Startup",
    metric: "3x Scale PMO Integration",
    desc: "Designed scalable business processes, onboarding timelines, and HR compliance frameworks for rapid expansion.",
    label: "SaaS & PMO",
  },
  {
    title: "Retail Chain",
    metric: "+24% Workforce Productivity Boost",
    desc: "Re-engineered workforce scheduling, structured onboarding flows, and launched incentive programs.",
    label: "HR & Strategy",
  },
];

// FAQs List
const faqItems = [
  {
    q: "What industries do you consult for?",
    a: "We provide strategic consulting for healthcare groups, financial institutions, manufacturing companies, education networks, retail chains, and technology startups.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We help high-growth startups model their early-stage operations, design scalable HR handbooks, set up PMO sprints, and prepare for institutional funding rounds.",
  },
  {
    q: "Can Yorlex improve existing business processes?",
    a: "Yes, we map existing processes, isolate workflow bottlenecks, eliminate redundant overheads, and design Lean automation runbooks.",
  },
  {
    q: "Do you provide HR consulting?",
    a: "Yes, we structure recruitment pipelines, employee onboarding setups, performance review frameworks, and local statutory HR compliance policies.",
  },
  {
    q: "How long do consulting projects take?",
    a: "Strategy sprints typically take 6-12 weeks, whereas full operational rollouts or PMO setups can span 3-6 months based on client requirements.",
  },
  {
    q: "Do you offer leadership training?",
    a: "Yes, we design customized leadership development workshops, change management modules, team-building courses, and executive coaching programs.",
  },
];

export default function ManagementSolutions() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="flex-1 font-sans bg-brand-bg">
      {/* 1. Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="min-h-[calc(100vh-64px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Briefcase className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555 uppercase tracking-widest">
                Management Pillar
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black uppercase tracking-tight">
              Management Solutions for Sustainable Business Growth
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Transform your business with strategic management consulting, operational excellence, leadership advisory, HR solutions, and performance optimization designed to improve efficiency and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule Strategy Consultation
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="/contact"
              >
                Talk to a Business Consultant
              </PremiumButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroManagementDashboard />
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Introduction Section */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light relative z-10" animate>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-4">
          <div className="max-w-md">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// ADVISORY OVERVIEW</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black uppercase text-black">
              Strategic Management Consulting
            </h2>
          </div>
          <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
            Yorlex partners with startups, SMEs, and enterprises to solve complex business challenges, improve operational efficiency, strengthen leadership, and create scalable management systems that drive long-term success.
          </p>
        </div>
      </SectionWrapper>

      {/* 3. Our Management Services Grid */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative block bg-white border border-brand-border-light p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand-purple hover:shadow-[0_10px_30px_rgba(161,0,255,0.05)]"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-purple origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 border border-brand-border-light bg-brand-bg transition-colors duration-300 group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5">
                    <Icon className="w-4 h-4 text-black group-hover:text-brand-purple transition-colors" />
                  </div>
                  
                  <h3 className="font-plus-jakarta text-sm font-bold uppercase tracking-tight text-black">
                    {service.title}
                  </h3>
                  
                  <p className="font-inter text-[11px] leading-relaxed text-gray-550">
                    {service.description}
                  </p>

                  <div className="border-t border-brand-border-light/60 my-1 pt-3">
                    <div className="grid grid-cols-1 gap-y-1.5">
                      {service.bullets.map((bullet, bulletIdx) => (
                        <div key={bulletIdx} className="flex items-center gap-1.5">
                          <Check className="h-3 w-3 text-brand-purple shrink-0" />
                          <span className="text-[9px] text-gray-500 font-mono truncate" title={bullet}>
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
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// EXPERIENCE VERTICALS</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Industries We Support
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Providing custom operational frameworks and change management strategies across ten diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-brand-border-light p-4 flex flex-col items-center justify-center text-center gap-3 transition-colors hover:border-brand-purple"
              >
                <div className="w-8 h-8 bg-brand-bg flex items-center justify-center text-black">
                  <Icon className="w-4 h-4 text-brand-purple" />
                </div>
                <span className="text-[9px] font-plus-jakarta font-bold uppercase tracking-wider text-black">
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 5. Consulting Process Timeline */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// ADVISORY STAGES</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Our Consulting Process
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            A structured consulting timeline designed to transition from research analysis to execution improvements.
          </p>
        </div>

        {/* Steps Pipeline */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between items-start">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-[4%] right-[4%] h-[2px] bg-brand-border-light/60 z-0" />
          
          {consultingProcess.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-row lg:flex-col items-start gap-4 lg:gap-3 lg:w-[13%]">
              {/* Step indicator */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-black text-white text-xs font-mono font-bold border-2 border-brand-purple/20 hover:border-brand-purple transition-all duration-300">
                0{idx + 1}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-plus-jakarta text-xs font-bold uppercase tracking-tight text-black">
                  {step.title}
                </h3>
                <p className="font-inter text-[10px] leading-relaxed text-gray-550">
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
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// QUALITY ASSURANCE</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Why Choose Yorlex
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Industry experts executing tailored frameworks designed to support long-term productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((f, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border-light p-8 flex gap-4 transition-colors hover:border-brand-purple"
            >
              <div className="w-8 h-8 border border-brand-border bg-brand-bg flex items-center justify-center text-green-500 shrink-0">
                <Check className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-plus-jakarta text-sm font-bold uppercase tracking-tight text-black">
                  {f.title}
                </h3>
                <p className="font-inter text-xs leading-relaxed text-gray-500">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 7. Business Impact Section (Metrics) */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// ADVISORY METRICS</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Business Impact
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Consolidated operational cost reductions and leadership training metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border-light p-6 text-center hover:border-brand-purple transition-all duration-300"
            >
              <div className="font-plus-jakarta text-3xl font-black text-black tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="font-inter font-bold text-[9px] text-gray-550 uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 8. Recent Case Studies */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// ADVISORY OUTCOMES</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Featured Case Studies
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Audited reviews detailing operational process mapping and organizational transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border-light hover:border-brand-purple transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual mockup top */}
              <div className="bg-[#0d0d0e] border-b border-brand-border-light/10 p-6 font-mono text-[9px] text-brand-purple min-h-[140px] flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">{project.label}</span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="flex-1 flex items-center justify-center my-3 text-center">
                  <span className="text-white text-xs uppercase tracking-widest font-plus-jakarta font-bold">
                    {project.title}
                  </span>
                </div>
                <div className="border-t border-white/5 pt-2 flex justify-between font-bold text-[9px] text-brand-purple">
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
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Business Impact</span>
                  <span className="font-mono text-xs font-bold text-green-600 uppercase">
                    {project.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 9. Management Framework Section */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// METHODOLOGICAL LAYOUT</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Management Framework
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Hover over the outer framework components to explore our Business Excellence metrics.
          </p>
        </div>

        <CircularFramework />
      </SectionWrapper>

      {/* 10. FAQs Section */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <HelpCircle className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-550 uppercase tracking-widest">
                Support Q&A
              </span>
            </div>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-black text-black uppercase leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-md">
              Review answers regarding HR consulting handbooks, corporate upskilling programs, PMO setup durations, and regulatory alignments.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-brand-border rounded-none overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
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
                    <div className="p-6 font-inter text-xs md:text-sm text-gray-550 leading-relaxed bg-white">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. Final Call to Action */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-4">// CONVERSION GATEWAY</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Build a Stronger, Smarter Business
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're scaling operations, improving leadership, or transforming business processes, Yorlex helps you achieve sustainable growth with expert management consulting.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Book Strategy Session
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Speak with a Consultant
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
