"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  ArrowRight,
  ShieldCheck,
  Check,
  Layers,
  Code,
  Settings,
  Smartphone,
  Server,
  Palette,
  BarChart3,
  ShieldAlert,
  GitBranch,
  Terminal,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  MapPin,
  Building2,
  Lock,
  Zap,
  Globe,
  Database,
  LineChart,
} from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Services Grid Data
const servicesList = [
  {
    title: "Web Development",
    description: "High-performance enterprise web interfaces engineered for modern speed and SEO supremacy.",
    icon: Code,
    bullets: ["Corporate Websites", "Business Portals", "Landing Pages", "CMS Development"],
  },
  {
    title: "Mobile App Development",
    description: "Responsive native and multi-platform applications engineered for flawless user engagement.",
    icon: Smartphone,
    bullets: ["Android Apps", "iOS Apps", "Flutter Deployment", "React Native Architecture"],
  },
  {
    title: "Custom Software Development",
    description: "Bespoke digital software blueprints crafted to integrate with your specific business parameters.",
    icon: Settings,
    bullets: ["ERP Software", "CRM Systems", "Internal Operations Tools", "SaaS Architectures"],
  },
  {
    title: "AI & Automation",
    description: "Accelerate business output through custom generative AI, workflows, and machine learning models.",
    icon: Cpu,
    bullets: ["AI Chatbots", "Workflow Automation", "Generative AI Integration", "AI Virtual Assistants"],
  },
  {
    title: "Cloud Solutions",
    description: "High-scale, secure cloud deployments utilizing top architectural cloud parameters.",
    icon: Server,
    bullets: ["AWS Infrastructure", "Azure Deployments", "Google Cloud setups", "Cloud Migrations"],
  },
  {
    title: "UI/UX Design",
    description: "Sleek, brand-aligned interfaces crafted for user-retention and conversion optimization.",
    icon: Palette,
    bullets: ["Product Design Layouts", "High-Fi Wireframes", "Interactive Prototypes", "Custom Design Systems"],
  },
  {
    title: "Data & Analytics",
    description: "Convert telemetry and corporate numbers into real-time business growth insights.",
    icon: BarChart3,
    bullets: ["Business Intelligence", "Custom Dashboards", "Reporting Sprints", "Data Engineering Pipelines"],
  },
  {
    title: "Cybersecurity",
    description: "Protect your intellectual property and data pipelines through SOC-compliant audits.",
    icon: ShieldAlert,
    bullets: ["Security Audits", "Penetration Testing", "Regional Compliance Audits", "Risk Assessment Blueprinting"],
  },
  {
    title: "DevOps",
    description: "Configure continuous integration pipelines that run with zero downtime deployment metrics.",
    icon: GitBranch,
    bullets: ["CI/CD Build Pipelines", "Docker Containers", "Kubernetes Orchestration", "Infrastructure as Code"],
  },
];


// Industries List
const industries = [
  { name: "Healthcare", icon: Heart },
  { name: "Finance", icon: Landmark },
  { name: "Retail", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: MapPin },
  { name: "Manufacturing", icon: Building2 },
  { name: "Real Estate", icon: Building2 },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "SaaS", icon: Cpu },
];

// Process Timeline List
const processSteps = [
  { title: "Discovery", desc: "Defining project scopes, KPIs, and deliverables." },
  { title: "Planning", desc: "Systems architecture design, sprint plans, and tech selection." },
  { title: "UI/UX Design", desc: "High-fidelity wireframes, interactive prototypes, and guidelines." },
  { title: "Development", desc: "Agile sprints, clean version-controlled code, and daily standups." },
  { title: "Testing", desc: "Continuous automated audits, unit tests, and QA approvals." },
  { title: "Deployment", desc: "Zero-downtime CI/CD orchestration and monitoring setup." },
  { title: "Maintenance", desc: "SLA responsiveness, system optimization, and dependency checks." },
];

// Why Choose Yorlex Cards
const whyChooseUs = [
  { title: "Experienced Engineers", desc: "All team members hold senior certifications and degrees with years of scale execution." },
  { title: "Agile Development", desc: "We operate on clear, weekly sprint schedules with visible milestone telemetry." },
  { title: "Scalable Architecture", desc: "We build layouts and databases ready to accommodate millions of API queries." },
  { title: "Secure Applications", desc: "Security is verified through regular automated audits and penetration reviews." },
  { title: "Transparent Communication", desc: "You have direct access to shared Slack channels, Figma files, and Git branches." },
  { title: "Dedicated Project Manager", desc: "One expert manager bridges the gap between requirements and final delivery." },
];

// Case Studies Data
const caseStudies = [
  {
    title: "Enterprise CRM Platform",
    industry: "Finance & Operations",
    image: "/images/services/case-study-crm.jpg",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    desc: "Restructured CRM operations for a global quantitative trading group, migrating legacy architectures to microservices.",
    outcome: "+38% Operational Efficiency Boost",
  },
  {
    title: "AI Customer Support Chatbot",
    industry: "E-commerce & Retail",
    image: "/images/services/case-study-support.jpg",
    tech: ["OpenAI API", "LangChain", "Python", "Next.js"],
    desc: "Designed and trained generative AI agents to resolve Level-1 support requests with human-like comprehension.",
    outcome: "-45% Support Ticket Volume",
  },
  {
    title: "E-commerce Marketplace",
    industry: "Retail & Sales",
    image: "/images/services/case-study-marketplace.jpg",
    tech: ["React", "Next.js", "Node.js", "Kubernetes"],
    desc: "Re-engineered high-volume transactional pipelines, optimizing database querying for peak trading seasons.",
    outcome: "99.99% Core Transactional Uptime",
  },
];

// FAQ items
const faqItems = [
  {
    q: "How long does a website take to build?",
    a: "A typical corporate website takes between 4-6 weeks from discovery to deployment. More complex portals, marketplace platforms, or customized SaaS tools typically require 10-16 weeks depending on custom feature requirements.",
  },
  {
    q: "Which technologies do you use?",
    a: "We choose technology parameters that align with your scalability requirements. We specialize in JS/TS stacks (React, Next.js, Node.js, NestJS), multi-platform mobile engines (Flutter, React Native), major clouds (AWS, GCP, Azure), and LLM frameworks (OpenAI, Gemini, LangChain).",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes, we provide custom SLA maintenance packages that cover regular security scans, dependency updates, speed optimization, and developer support hours for new feature adjustments.",
  },
  {
    q: "Can you modernize existing software?",
    a: "Yes. We frequently consult on legacy modernization. We use containerization (Docker/Kubernetes) and API wrapping to split old monolithic software into modern, highly-scalable cloud architectures with zero downtime.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolute client IP safety is our corporate rule. We sign standard Non-Disclosure Agreements (NDAs) and intellectual property assignment agreements before analyzing your specific system specifications.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes, we routinely partner with funded startups to launch initial high-fidelity MVPs or scale current architectures ahead of Series A/B funding rounds.",
  },
];

export default function TechnologySolutions() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="flex-1 font-sans bg-brand-bg">
      {/* 1. Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="relative overflow-hidden lg:min-h-[calc(100vh-80px)] flex flex-col justify-center [&>div]:w-full pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div
          className="absolute inset-y-0 right-0 w-full md:w-4/5 lg:w-3/4 opacity-90 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 42%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 42%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/technology-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-bg opacity-50 md:opacity-20 pointer-events-none" />

        <div className="relative flex flex-col gap-3 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
            <Cpu className="h-4 w-4 text-brand-purple shrink-0 animate-pulse" />
            <span className="font-inter font-bold text-[10px] text-gray-555">
              Technology Pillar
            </span>
          </div>
          <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black tracking-tight">
            Technology Solutions That Power Modern Businesses
          </h1>
          <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
            We help startups, SMEs, and enterprises build scalable digital products, automate operations, modernize legacy systems, and accelerate business growth through innovative technology.
          </p>
          <div className="flex flex-wrap gap-4 mt-1">
            <PremiumButton
              variant="gradient"
              size="md"
              href="/contact"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Schedule Consultation
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="md"
              href="/contact"
            >
              Get a Free Quote
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. What We Do Section */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <span className="font-inter font-bold text-[10px] text-brand-purple block">// CAPABILITY SCOPE</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black">
              End-to-End Technology Services
            </h2>
            <p className="font-inter text-gray-600 text-sm leading-relaxed max-w-xl">
              Yorlex delivers end-to-end technology solutions that help businesses innovate faster, improve operational efficiency, and stay ahead in the digital era.
            </p>
          </div>
          <div className="lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/what-we-do.jpg"
              alt="Yorlex team collaborating on a technology delivery"
              className="w-full h-48 md:h-56 object-cover border border-brand-border-light"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Technology Services Grid */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative block bg-white border border-brand-border-light p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand-purple hover:shadow-[0_10px_30px_rgba(153,187,43,0.05)]"
              >
                {/* Top border reveal on hover */}
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
                    <div className="grid grid-cols-2 gap-y-2 gap-x-2">
                      {service.bullets.map((bullet, bulletIdx) => (
                        <div key={bulletIdx} className="flex items-center gap-1.5">
                          <Check className="h-3 w-3 text-brand-purple shrink-0" />
                          <span className="text-[10px] text-gray-500 truncate" title={bullet}>
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


      {/* 5. Industries We Serve */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// TARGET VERTICALS</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Industries We Serve
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Implementing custom data protocols and regulatory compliance parameters across multiple sectors.
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

      {/* 6. Our Development Process */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// DEPLOYMENT TIMELINE</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Our Development Process
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            An architectural pipeline designed to minimize friction from design to rollout.
          </p>
        </div>

        {/* Steps Pipeline */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between items-start">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-[4%] right-[4%] h-[2px] bg-brand-border-light/60 z-0" />
          
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-row lg:flex-col items-start gap-4 lg:gap-3 lg:w-[13%]">
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

      {/* 7. Why Choose Yorlex */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// ADVANTAGE</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Why Choose Yorlex
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Rigorous engineering standards and direct communication pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((w, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border-light p-8 flex gap-4 transition-colors hover:border-brand-purple"
            >
              <div className="w-8 h-8 rounded-2xl border border-brand-border bg-brand-bg flex items-center justify-center text-green-500 shrink-0">
                <Check className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-plus-jakarta text-sm font-bold tracking-tight text-black">
                  {w.title}
                </h3>
                <p className="font-inter text-xs leading-relaxed text-gray-500">
                  {w.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 8. Recent Projects Section */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// CASE STUDIES</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Recent Projects
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            A review of recent tech-architected engagements and their operational business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-border-light hover:border-brand-purple transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual top */}
              <div className="relative min-h-[160px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative h-full min-h-[160px] p-6 flex flex-col justify-between">
                  <span className="text-[9px] font-bold text-white/80 tracking-wide">{project.industry}</span>
                  <div>
                    <span className="text-white text-sm font-plus-jakarta font-bold block mb-2">
                      {project.title}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[8px] border border-white/25 px-1.5 py-0.5 text-white/90 bg-black/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-6">
                <p className="font-inter text-xs leading-relaxed text-gray-550">
                  {project.desc}
                </p>
                <div className="border-t border-brand-border-light/60 pt-4 flex flex-col gap-1">
                  <span className="text-[8px] font-bold text-gray-400">Business Outcome</span>
                  <span className="font-mono text-xs font-bold text-green-600">
                    {project.outcome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 9. FAQs Section */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-b border-brand-border-light" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <HelpCircle className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-500">
                Support QA
              </span>
            </div>
            <h2 className="font-plus-jakarta text-3xl md:text-4xl font-black text-black leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-md">
              Review answers regarding development sprints, intellectual property protections, SLAs, and integration processes.
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
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-4">// CONVERSION GATEWAY</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're launching a startup, modernizing enterprise software, or building an AI-powered platform, Yorlex is your trusted technology partner.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Book Free Consultation
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Contact Our Experts
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
