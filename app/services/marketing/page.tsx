"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Landmark,
  Search,
  FileText,
  Share2,
  Award,
  TrendingUp,
  ArrowRight,
  Check,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  DollarSign,
  Percent,
  BarChart3,
  Users,
  Lock,
  Heart,
  ShoppingCart,
  GraduationCap,
  MapPin,
  Scale,
  Building2,
  Cpu,
  Globe,
  Play,
  Settings,
  MessageSquare,
  Mail,
  Zap,
} from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Interactive Ad-Spend & ROAS Calculator for the Hero Right Side
function HeroMarketingDashboard() {
  const [activeChannel, setActiveChannel] = useState<"search" | "social" | "video">("search");

  const channelMetrics = {
    search: {
      budget: "$12,500/mo",
      conversions: "1,420",
      cpa: "$8.80",
      roas: "4.8x",
      rate: "4.2%",
      color: "bg-brand-purple",
    },
    social: {
      budget: "$18,000/mo",
      conversions: "2,150",
      cpa: "$8.37",
      roas: "3.9x",
      rate: "3.8%",
      color: "bg-black",
    },
    video: {
      budget: "$25,000/mo",
      conversions: "2,840",
      cpa: "$8.80",
      roas: "5.2x",
      rate: "5.1%",
      color: "bg-brand-purple/40",
    },
  };

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
          YORLEX // PERFORMANCE_TRACKER
        </span>
      </div>

      {/* Main Metric Banner */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] uppercase tracking-wider font-bold">Avg ROAS</span>
          <span className="text-xs font-bold text-green-400 font-mono mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-green-450 shrink-0" /> {channelMetrics[activeChannel].roas}
          </span>
        </div>
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] uppercase tracking-wider font-bold">Conversions</span>
          <span className="text-xs font-bold text-white font-mono mt-1">{channelMetrics[activeChannel].conversions}</span>
        </div>
        <div className="bg-slate-900/60 border border-brand-border-light/5 p-3 flex flex-col justify-center">
          <span className="text-gray-500 text-[8px] uppercase tracking-wider font-bold">CPA Status</span>
          <span className="text-xs font-bold text-brand-purple font-mono mt-1">{channelMetrics[activeChannel].cpa}</span>
        </div>
      </div>

      {/* Channel Switchers */}
      <div className="flex gap-1.5 border border-brand-border-light/5 bg-slate-900/40 p-1.5 mb-3">
        {(["search", "social", "video"] as const).map((channel) => (
          <button
            key={channel}
            onClick={() => setActiveChannel(channel)}
            className={`flex-1 py-1.5 text-[8px] font-bold uppercase tracking-wider transition-colors duration-150 rounded-none ${
              activeChannel === channel ? "bg-brand-purple text-white" : "text-gray-550 hover:text-white"
            }`}
          >
            {channel}
          </button>
        ))}
      </div>

      {/* Conversion Rate Progression diagram */}
      <div className="flex-1 flex flex-col gap-2.5 justify-center">
        <div className="text-[8px] text-gray-500 uppercase tracking-widest font-bold mb-1">
          // CHANNEL CONVERSION RATE & ALLOCATION
        </div>
        <div className="h-6 w-full flex border border-brand-border-light/10 bg-slate-900/80 overflow-hidden relative items-center px-3">
          <div
            className={`absolute left-0 top-0 h-full ${channelMetrics[activeChannel].color} transition-all duration-300 opacity-20`}
            style={{ width: `${parseFloat(channelMetrics[activeChannel].rate) * 20}%` }}
          />
          <span className="text-white font-bold text-[9px] z-10 flex items-center gap-1.5">
            <Percent className="h-3 w-3 text-brand-purple shrink-0" />
            Conversion Rate: {channelMetrics[activeChannel].rate}
          </span>
        </div>
        <div className="flex justify-between items-center text-[8px] text-gray-400">
          <span className="flex items-center gap-1">
            <DollarSign className="h-3 w-3 text-brand-purple shrink-0" /> Allocated Budget: {channelMetrics[activeChannel].budget}
          </span>
          <span className="text-brand-purple">// v1.12.0</span>
        </div>
      </div>
    </div>
  );
}

// Success Metrics Stats Grid
const stats = [
  { value: "500+", label: "Marketing Campaigns" },
  { value: "50M+", label: "Impressions Generated" },
  { value: "2M+", label: "Leads Generated" },
  { value: "300%", label: "Average ROI" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "45+", label: "Industries Served" },
];

// Marketing Services Grid Data
const marketingServices = [
  {
    title: "Digital Marketing",
    description: "Align channels, structure campaign budgets, and build custom digital growth frameworks.",
    icon: Megaphone,
    bullets: ["Corporate Growth Strategy", "Online Multi-Channel Campaigns", "Digital Transformation", "Marketing Automation setups"],
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Technical architectures and content engines structured to dominate non-branded organic searches.",
    icon: Search,
    bullets: ["Technical SEO & Audits", "On-Page Semantic Optimization", "Off-Page Authority links", "Local SEO & Citations"],
  },
  {
    title: "Performance Marketing",
    description: "Hyper-targeted paid advertisements configured across major ad networks to maximize customer acquisition.",
    icon: TrendingUp,
    bullets: ["Google Search Ads", "Meta Campaign management", "LinkedIn B2B Campaigns", "YouTube Display Optimization"],
  },
  {
    title: "Social Media Marketing",
    description: "Build robust community infrastructures, craft content plans, and run paid social campaigns.",
    icon: Share2,
    bullets: ["Audience Content Strategy", "Community Management Sprints", "Paid Social Amplification", "Brand Authority Engagement"],
  },
  {
    title: "Branding & Creative Design",
    description: "Rigorous identity systems and visual blueprints crafted to command premium pricing standards.",
    icon: Award,
    bullets: ["Brand Architecture & Identity", "Visual Guidelines & Logos", "Responsive UI Design systems", "Corporate Marketing Collaterals"],
  },
  {
    title: "Content Marketing",
    description: "Authoritative whitepapers, blog copywriting, and high-impact email nurturing campaigns.",
    icon: FileText,
    bullets: ["Blog & Thought Leadership", "Website Copywriting", "Email Nurturing Campaigns", "Case Studies & Whitepapers"],
  },
  {
    title: "Lead Generation",
    description: "Construct B2B sales funnels, configure CRM parameters, and design cold email outlays.",
    icon: Users,
    bullets: ["B2B Lead Generation", "Conversion Funnel Strategy", "CRM Integrations", "Sales Email Outreach pipelines"],
  },
  {
    title: "Marketing Analytics",
    description: "Track attributed revenue channels, compile ROI telemetry, and structure visual dashboards.",
    icon: BarChart3,
    bullets: ["Visual KPI Dashboards", "Campaign Attribution Logs", "Customer Buying Insights", "ROI Telemetry Tracking"],
  },
];

// Marketing Channels
const channelsList = [
  { name: "Google Search", icon: Search },
  { name: "Meta Ads", icon: Megaphone },
  { name: "LinkedIn", icon: Users },
  { name: "Instagram", icon: Share2 },
  { name: "YouTube", icon: Play },
  { name: "TikTok", icon: Play },
  { name: "Email Marketing", icon: Mail },
  { name: "WhatsApp", icon: MessageSquare },
  { name: "Content", icon: FileText },
  { name: "SEO Optimization", icon: Globe },
  { name: "Display Ads", icon: BarChart3 },
  { name: "Affiliate marketing", icon: Zap },
];

// Industries Served
const industries = [
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: Landmark },
  { name: "Real Estate", icon: Building2 },
  { name: "Retail", icon: ShoppingCart },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Manufacturing", icon: Building2 },
  { name: "Technology", icon: Cpu },
  { name: "Professional Services", icon: Scale },
  { name: "Hospitality", icon: MapPin },
];

// Timeline Process Steps
const processSteps = [
  { title: "Research", desc: "Auditing target audience habits and vertical telemetry." },
  { title: "Market Analysis", desc: "Detecting semantic content gaps and competitor ad spend indices." },
  { title: "Strategy", desc: "Structuring omnichannel blueprints, CPA budgets, and ROAS targets." },
  { title: "Creative Production", desc: "Generating high-performance visual cards and ad copywriting setups." },
  { title: "Campaign Launch", desc: "Deploying programmatic campaigns with multi-variate tracking tags." },
  { title: "Optimization", desc: "A/B testing copies and fine-tuning audience filters daily." },
  { title: "Reporting", desc: "Delivering unified performance dashboards and attributed metrics." },
  { title: "Scale", desc: "Expanding budgets and rolling campaigns into adjacent verticals." },
];

// Why Choose Us
const featuresList = [
  { title: "ROI-Focused Campaigns", desc: "Every strategy is built around measurable business outcomes." },
  { title: "Certified Marketing Experts", desc: "Experienced professionals across SEO, PPC, branding, and digital strategy." },
  { title: "Data-Driven Decisions", desc: "We optimize campaigns using real-time analytics and customer insights." },
  { title: "Omnichannel Marketing", desc: "Integrated campaigns across search, social, email, and paid media." },
  { title: "Transparent Reporting", desc: "Easy-to-understand reports with actionable insights." },
  { title: "Scalable Growth", desc: "Marketing strategies designed to grow with your business." },
];

// Case Studies
const caseStudies = [
  {
    title: "E-commerce Growth",
    metric: "+220% Online Revenue Boost",
    desc: "Re-engineered SEO structures and paid ad campaigns for an apparel marketplace, decreasing overall CPA by 34%.",
    label: "Retail & PPC",
  },
  {
    title: "Healthcare Brand",
    metric: "12,000+ Patient Leads Generated",
    desc: "Designed and executed a local search optimization blueprint and Google Search Ads campaign for a medical group.",
    label: "Healthcare & SEO",
  },
  {
    title: "B2B Technology Company",
    metric: "+180% Lead Conversion rate",
    desc: "Deployed targeted B2B content marketing and LinkedIn outreach strategies, maximizing sales team pipeline velocity.",
    label: "SaaS & B2B",
  },
];

// Tools list
const marketingTools = [
  "Google Analytics",
  "Google Ads",
  "Meta Ads Manager",
  "LinkedIn Campaign Manager",
  "HubSpot",
  "Mailchimp",
  "SEMrush",
  "Ahrefs",
  "Canva",
  "Adobe Creative Cloud",
];

// FAQ items
const faqItems = [
  {
    q: "How long does SEO take?",
    a: "SEO is a compounding growth engine. Most sites witness indexing optimizations and initial keyword ranking improvements within 4-6 weeks, with high-authority organic lead scaling happening over 3-6 months.",
  },
  {
    q: "Which platforms do you advertise on?",
    a: "We run certified programmatic campaigns across Google Search, Meta (Facebook & Instagram), LinkedIn, YouTube, TikTok, and targeted B2B ad networks.",
  },
  {
    q: "Do you manage social media accounts?",
    a: "Yes, we handle content scheduling, design templates, community management, and paid amplification social strategies tailored to build brand authority.",
  },
  {
    q: "Can you improve our Google rankings?",
    a: "Yes. We perform core web vital updates, execute search intent analyses, write optimized copy, and manage authority backlink campaigns.",
  },
  {
    q: "Do you provide monthly reports?",
    a: "Yes, we configure real-time visual dashboards and deliver detailed monthly reports highlighting ad spend, CTRs, lead volumes, CPAs, and attributed revenue ROI.",
  },
  {
    q: "How do you measure campaign success?",
    a: "We track clear operational indicators: Customer Acquisition Cost (CAC), conversion rates, return-on-ad-spend (ROAS), and final business profit margins.",
  },
];

export default function MarketingSolutions() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="flex-grow bg-brand-bg font-sans">
      {/* 1. Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="min-h-[calc(100vh-64px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Megaphone className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555 uppercase tracking-widest">
                Marketing Pillar
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black uppercase tracking-tight">
              Marketing Solutions That Accelerate Business Growth
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Drive measurable growth with data-driven marketing strategies, powerful branding, SEO, paid advertising, social media management, and performance campaigns that generate real business results.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule Marketing Consultation
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="/contact"
              >
                Get Free Marketing Audit
              </PremiumButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroMarketingDashboard />
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Introduction Section */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light relative z-10" animate>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-4">
          <div className="max-w-md">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// GROWTH METHODOLOGY</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black uppercase text-black">
              Data-Driven Marketing
            </h2>
          </div>
          <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
            At Yorlex, we don't just create campaigns—we build growth engines. Our marketing experts combine strategy, creativity, analytics, and technology to increase visibility, generate qualified leads, and maximize ROI.
          </p>
        </div>
      </SectionWrapper>

      {/* 3. Our Marketing Services Grid */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative block bg-white border border-brand-border-light p-6 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand-purple hover:shadow-[0_10px_30px_rgba(161,0,255,0.05)]"
              >
                {/* Top border reveal on hover */}
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

      {/* 4. Marketing Channels */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// OMNICHANNEL LANDSCAPE</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Marketing Channels We Drive
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Integrated strategies across paid media, search engines, messaging pipelines, and authority content networks.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {channelsList.map((chan, idx) => {
            const Icon = chan.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-brand-border-light p-4 flex flex-col items-center justify-center text-center gap-2.5 transition-colors hover:border-brand-purple"
              >
                <div className="w-8 h-8 bg-brand-bg flex items-center justify-center text-black">
                  <Icon className="w-4 h-4 text-brand-purple" />
                </div>
                <span className="text-[9px] font-plus-jakarta font-bold uppercase tracking-wider text-black">
                  {chan.name}
                </span>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 5. Industries We Serve */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// EXPERIENCE VERTICALS</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Industries We Serve
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Formulating custom customer acquisition funnels and messaging strategies across ten diverse sectors.
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

      {/* 6. Our Marketing Process Timeline */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// ACCELERATION TIMELINE</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Our Marketing Process
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            A pipeline structured to convert intelligence, research, and ad creation into compounding revenue scale.
          </p>
        </div>

        {/* Steps Pipeline */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between items-start">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-[4%] right-[4%] h-[2px] bg-brand-border-light/60 z-0" />
          
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-row lg:flex-col items-start gap-4 lg:gap-3 lg:w-[11%]">
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

      {/* 7. Why Businesses Choose Yorlex */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// ADVANTAGE</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Why Businesses Choose Yorlex
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Measurable, outcome-driven campaigns designed and scaled by certified experts.
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

      {/* 8. Success Metrics Section */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// VERIFIED PERFORMANCE</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Success Metrics
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Consolidated telemetry indicating lead velocity and campaign ROIs across our portfolio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-brand-bg border border-brand-border-light p-6 text-center hover:border-brand-purple transition-all duration-300"
            >
              <div className="font-plus-jakarta text-3xl md:text-4xl font-black text-black tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 9. Featured Success Stories */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// CAMPAIGN OUTCOMES</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Featured Success Stories
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Detailed case studies mapping organic optimizations and B2B LinkedIn outreach sprints.
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
                  <span>OUTCOME:</span>
                  <span>{project.metric}</span>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-6">
                <p className="font-inter text-xs leading-relaxed text-gray-550">
                  {project.desc}
                </p>
                <div className="border-t border-brand-border-light/60 pt-4 flex flex-col gap-1">
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Business Result</span>
                  <span className="font-mono text-xs font-bold text-green-600 uppercase">
                    {project.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 10. Marketing Tools We Use */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// STACK INTEGRATIONS</span>
          <h2 className="font-plus-jakarta text-3xl font-black uppercase text-black">
            Marketing Tools We Use
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Integrated technology stacks that drive analytics tracking and automated workflows.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {marketingTools.map((tool) => (
            <div
              key={tool}
              className="px-6 py-3 border border-brand-border-light bg-brand-bg hover:border-brand-purple text-xs font-mono font-bold uppercase text-black transition-colors duration-200"
            >
              {tool}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 11. FAQs Section */}
      <SectionWrapper background="default" spacing="compact" animate>
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
              Review answers regarding campaign audits, SEO indexing timelines, WhatsApp integrations, and reporting frequencies.
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

      {/* 12. Final Call to Action */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-4">// CONVERSION GATEWAY</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Ready to Grow Your Brand?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Partner with Yorlex to build powerful marketing strategies that attract customers, increase conversions, and drive long-term business growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Book Marketing Consultation
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Request a Free Marketing Audit
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
