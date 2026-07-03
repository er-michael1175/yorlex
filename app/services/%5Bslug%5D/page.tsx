"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Cpu, Landmark, Megaphone, Users, Headphones, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const servicesData: Record<
  string,
  {
    title: string;
    tagline: string;
    desc: string;
    icon: React.ComponentType<any>;
    pillars: string[];
    features: { title: string; desc: string }[];
  }
> = {
  technology: {
    title: "Technology Solutions",
    tagline: "Engineering Scale & Intelligent Systems",
    desc: "Build next-generation digital products, robust cloud architectures, and fine-tuned AI workflows designed for corporate scale.",
    icon: Cpu,
    pillars: ["AI & Machine Learning", "Web App Development", "Mobile Architectures", "Cloud Engineering & DevOps"],
    features: [
      { title: "Agentic AI & LLMs", desc: "Integrate specialized AI assistants and data automations directly into corporate workflows." },
      { title: "Next.js Web Platforms", desc: "Build blazing-fast, SEO-optimized, highly accessible, and visually stunning web systems." },
      { title: "Scalable Cloud Hosting", desc: "Implement AWS/GCP multi-region setups with zero-downtime CI/CD pipelines." },
      { title: "Native Mobile Solutions", desc: "Premium iOS & Android applications tailored for field operations or consumer scale." },
    ],
  },
  finance: {
    title: "Finance Solutions",
    tagline: "Strategic Financial Orchestration & Stewardship",
    desc: "Navigate complex tax codes, optimize capital allocation, prepare detailed cash-flow models, and access expert Virtual CFO guidance.",
    icon: Landmark,
    pillars: ["Tax Advisory", "Virtual CFO", "Financial Modeling", "Corporate Compliance"],
    features: [
      { title: "Dynamic Valuation Models", desc: "Construct multi-scenario forecasts and capital budget models for funding or strategic planning." },
      { title: "Tax Compliance & Filing", desc: "Streamline annual tax filings and implement proactive tax efficiency schemes." },
      { title: "Virtual CFO Advisory", desc: "Part-time C-suite guidance covering cash runway optimization, mergers, and cost audits." },
      { title: "Bookkeeping & QA", desc: "Set up automated ledger workflows to maintain clean, audit-ready financial statements." },
    ],
  },
  marketing: {
    title: "Marketing Solutions",
    tagline: "Data-Driven Growth Engines",
    desc: "Accelerate revenue pipelines using analytical growth strategies, premium corporate branding systems, and conversion-focused SEO.",
    icon: Megaphone,
    pillars: ["Authority SEO", "Visual Branding", "Performance Ad Funnels", "Conversion Optimization"],
    features: [
      { title: "Authority SEO Campaigns", desc: "Secure first-page search positions for key commercial terms via editorial content engines." },
      { title: "Brand Identity Design", desc: "Forge elite logos, typography, visual guidelines, and digital asset templates." },
      { title: "PPC Funnel Management", desc: "Construct high-converting landing pages backed by high-efficiency Google/Meta campaigns." },
      { title: "Data-Cleanroom Analytics", desc: "Track users securely across multi-channel paths to ensure absolute marketing ROI transparency." },
    ],
  },
  management: {
    title: "Management Solutions",
    tagline: "Operational Rigor & Structural Efficiency",
    desc: "Refine corporate reporting hierarchies, deploy agile operations frameworks, and headhunt elite C-suite talents.",
    icon: Users,
    pillars: ["Corporate Structure", "HR Advisory & Headhunting", "Lean Process Optimization", "Governance"],
    features: [
      { title: "Lean Process Auditing", desc: "Evaluate operational friction and execute restructuring blueprints that optimize cost ratios." },
      { title: "Executive Headhunting", desc: "Recruit industry-grade executives, tech architects, and finance controllers." },
      { title: "Agile Transition Plans", desc: "Shift traditional hierarchies into highly responsive cross-functional team pods." },
      { title: "Internal Compliance Audits", desc: "Establish transparent reporting mechanisms and robust corporate governance guidelines." },
    ],
  },
  support: {
    title: "Business Support",
    tagline: "24/7 Back-Office Operations",
    desc: "Deploy dedicated customer success desks, manage complex back-office administrative tasks, and implement SLA-compliant helpdesks.",
    icon: Headphones,
    pillars: ["Omnichannel Support", "Back-Office Administration", "Helpdesk Operations", "Data Cleanroom QA"],
    features: [
      { title: "24/7 Omnichannel Helpdesks", desc: "Set up voice, email, chat, and ticket support operations with instant response times." },
      { title: "Back-Office QA & Admin", desc: "Manage document verification, invoice matching, database hygiene, and routine workflows." },
      { title: "Executive Assistance", desc: "Dedicating virtual assistants to oversee calendar orchestration and C-level administration." },
      { title: "SLA Metric Tracking", desc: "Maintain constant monitoring on response times, client retention, and ticket resolution quality." },
    ],
  },
};

export default function ServicePage({ params }: PageProps) {
  const { slug } = use(params);
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <div className="flex-1 bg-brand-bg pt-20 md:pt-28 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 font-inter">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span className="text-brand-purple">{data.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16 pb-12 border-b border-brand-border">
          <div>
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6">
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-black mb-4 font-plus-jakarta uppercase tracking-wide leading-tight">
              {data.title}
            </h1>
            <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-4 font-inter">
              {data.tagline}
            </p>
            <p className="text-gray-600 leading-relaxed text-sm max-w-xl font-inter">
              {data.desc}
            </p>
          </div>

          <div className="sharp-card p-8 flex flex-col gap-4">
            <p className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-2 font-inter">
              Core Capabilities
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.pillars.map((pillar) => (
                <div key={pillar} className="flex items-center gap-3 p-4 bg-brand-bg border border-brand-border rounded-none">
                  <CheckCircle2 className="h-5 w-5 text-brand-purple shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-black font-inter">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Features */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-12 font-plus-jakarta uppercase tracking-wider text-center">
            Service Highlights & Engagements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.map((feat) => (
              <div key={feat.title} className="sharp-card p-8 hover:border-brand-purple transition-all duration-300">
                <h3 className="text-base font-bold text-black mb-3 font-plus-jakarta uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-purple rounded-none" />
                  {feat.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-inter leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Prompt */}
        <div className="bg-black text-white p-10 md:p-16 border border-black text-center relative overflow-hidden rounded-none">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-purple to-transparent pointer-events-none" />
          <h2 className="text-3xl font-bold font-plus-jakarta uppercase mb-4">
            Need Expert Consulting in {data.title}?
          </h2>
          <p className="text-gray-400 font-inter text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Connect directly with Marcus Vance or our respective domain partners for a tailored feasibility study.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-brand-purple text-black hover:text-white font-bold px-8 py-4 rounded-none transition-colors border border-white hover:border-brand-purple font-inter font-bold text-[10px] uppercase"
          >
            Start Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
