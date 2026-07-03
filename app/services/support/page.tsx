"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  Shield,
  HelpCircle,
  Plus,
  Minus,
  MessageSquare,
  Users,
  Briefcase,
  Layers,
  Database,
  Search,
  Settings,
  Scale,
  Smile,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Interactive SLA Operations Monitor Dashboard for Hero Right Side
function HeroSupportDashboard() {
  const [activeQueue, setActiveQueue] = useState<"customer" | "backoffice" | "technical">("customer");

  const queues = {
    customer: {
      name: "Customer Care Queue",
      tickets: "12 Active",
      latency: "42 Sec Avg",
      agents: "48 Headcount",
      sla: "99.94% Compliant",
      color: "text-green-400",
    },
    backoffice: {
      name: "Data & Back-Office",
      tickets: "480 Records/hr",
      latency: "14 Min Cycle",
      agents: "72 Headcount",
      sla: "99.98% Accuracy",
      color: "text-brand-purple",
    },
    technical: {
      name: "IT Helpdesk SLA",
      tickets: "4 Active",
      latency: "8 Min Response",
      agents: "18 Headcount",
      sla: "100% Resolved",
      color: "text-blue-400",
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
          YORLEX // SUPPORT_CONSOLE
        </span>
      </div>

      {/* Selector Tabs */}
      <div className="flex gap-1.5 border border-brand-border-light/5 bg-slate-900/40 p-1.5 mb-3 relative">
        {(["customer", "backoffice", "technical"] as const).map((q) => (
          <button
            key={q}
            onClick={() => setActiveQueue(q)}
            className="flex-1 py-1.5 text-[8px] font-bold uppercase tracking-wider transition-colors duration-150 rounded-none relative z-10 text-gray-555 hover:text-white"
          >
            <span className={activeQueue === q ? "text-white" : ""}>
              {q === "customer" ? "Customer" : q === "backoffice" ? "Backoffice" : "Technical"}
            </span>
            {activeQueue === q && (
              <motion.div
                layoutId="activeSupportTab"
                className="absolute inset-0 bg-brand-purple -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Details */}
      <div className="flex-grow flex flex-col gap-2.5 justify-center">
        <div className="text-[8px] text-gray-500 uppercase tracking-widest font-bold mb-1 flex justify-between">
          <span>// LIVE SLA QUEUE STATUS</span>
          <span className={queues[activeQueue].color}>● ONLINE</span>
        </div>

        <div className="bg-slate-900/40 border border-brand-border-light/5 p-3 flex flex-col gap-1.5 min-h-[110px] justify-center">
          <div className="text-white font-bold text-[10px] uppercase">
            {queues[activeQueue].name}
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-400 mt-1 font-mono text-[8px] leading-relaxed">
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-550">QUEUE VOLUME</span>
              <span className="font-bold text-white mt-0.5">{queues[activeQueue].tickets}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-550">RESPONSE SPEED</span>
              <span className={`font-bold mt-0.5 ${queues[activeQueue].color}`}>{queues[activeQueue].latency}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-555">ACTIVE HEADCOUNT</span>
              <span className="font-bold text-white mt-0.5">{queues[activeQueue].agents}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-555">SLA COMPLIANCE</span>
              <span className="font-bold text-white mt-0.5">{queues[activeQueue].sla}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[7px] text-gray-450 border-t border-brand-border-light/10 pt-2">
        ROUTING_PROTOCOL: BPO_GLOBAL // DATA_SECURE: AES_256
      </div>
    </div>
  );
}

export default function SupportServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const services = [
    {
      title: "Customer Support",
      icon: MessageSquare,
      bullets: ["Email Support", "Live Chat Support", "Phone Support", "Help Desk Services", "Ticket Management"],
    },
    {
      title: "Virtual Assistant Services",
      icon: Users,
      bullets: ["Calendar Management", "Email Management", "Administrative Tasks", "Research Support", "Appointment Scheduling"],
    },
    {
      title: "Back Office Operations",
      icon: Database,
      bullets: ["Data Entry", "Document Processing", "CRM Updates", "Order Processing", "Database Management"],
    },
    {
      title: "Business Process Outsourcing",
      icon: Layers,
      bullets: ["Process Management", "Workflow Execution", "Administrative Operations", "Business Support Teams"],
    },
    {
      title: "Technical Support",
      icon: Settings,
      bullets: ["Software Assistance", "IT Helpdesk", "System Monitoring", "User Support", "Troubleshooting"],
    },
    {
      title: "Documentation & Compliance",
      icon: Scale,
      bullets: ["Business Documentation", "SOP Preparation", "Compliance Records", "Digital Documentation", "Document Management"],
    },
    {
      title: "Customer Experience Management",
      icon: Smile,
      bullets: ["Customer Onboarding", "Complaint Resolution", "Customer Retention", "Feedback Management", "Service Quality Monitoring"],
    },
    {
      title: "Administrative Support",
      icon: Briefcase,
      bullets: ["Office Administration", "Scheduling", "Report Preparation", "File Management", "Business Coordination"],
    },
  ];

  const industries = [
    "Healthcare",
    "Education",
    "Finance",
    "E-Commerce",
    "Real Estate",
    "Logistics",
    "Manufacturing",
    "SaaS",
    "Professional Services",
  ];

  const processSteps = [
    { num: "01", title: "Business Assessment", desc: "Audit core processes and operational parameters." },
    { num: "02", title: "Support Planning", desc: "Construct specific SLA blueprints and routing rules." },
    { num: "03", title: "Team Allocation", desc: "Assign trained support professionals and back-office squads." },
    { num: "04", title: "Process Integration", desc: "Sync CRM channels, email tickets, and communication flows." },
    { num: "05", title: "Daily Operations", desc: "Run daily BPO operations with strict quality protocols." },
    { num: "06", title: "Performance Monitoring", desc: "Report metrics, ticket latency, and data accuracy daily." },
    { num: "07", title: "Continuous Improvement", desc: "Optimize response thresholds and scale headcounts dynamically." },
  ];

  const whyChoose = [
    { title: "Dedicated Support Teams", desc: "Professionals assigned to your business requirements." },
    { title: "24/7 Availability", desc: "Round-the-clock support options for global businesses." },
    { title: "Cost-Effective Operations", desc: "Reduce operational costs without compromising quality." },
    { title: "Scalable Services", desc: "Easily expand support teams as your business grows." },
    { title: "Secure & Confidential", desc: "Strict data privacy and secure operational processes." },
    { title: "Performance Reporting", desc: "Regular reports and KPIs to track service quality." },
  ];

  const benefits = [
    { value: "500+", label: "Businesses Supported" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Availability" },
    { value: "40%", label: "Operational Cost Reduction" },
    { value: "99.9%", label: "Service Uptime" },
  ];

  const tools = [
    "Zendesk",
    "Freshdesk",
    "HubSpot",
    "Salesforce",
    "Zoho CRM",
    "Microsoft 365",
    "Google Workspace",
    "Slack",
    "Microsoft Teams",
    "Jira",
  ];

  const caseStudies = [
    {
      title: "E-commerce Customer Support",
      desc: "Handled customer inquiries across email and live chat, improving response times and customer satisfaction.",
    },
    {
      title: "Administrative Process Optimization",
      desc: "Streamlined back-office operations for a growing company, reducing manual workload and increasing efficiency.",
    },
    {
      title: "Technical Help Desk",
      desc: "Provided multi-channel technical support, ensuring quick issue resolution and minimal downtime.",
    },
  ];

  const faqs = [
    { q: "What types of businesses do you support?", a: "We support startup operations, global SMEs, and institutional enterprises across SaaS, e-commerce, healthcare, and logistics sectors." },
    { q: "Can Yorlex provide dedicated support teams?", a: "Yes. We allocate dedicated agents and back-office squads trained specifically on your company SOPs and workflows." },
    { q: "Do you offer 24/7 customer support?", a: "Absolutely. We run round-the-clock rotational support coverage from our global offices to manage user inquiries 24/7." },
    { q: "Which communication channels do you manage?", a: "We manage omnichannel pipelines, including live chat, email ticketing, telephone desks, social media channels, and IT helpdesks." },
    { q: "Can support services scale as my business grows?", a: "Yes. Our flexible SLA agreements allow you to expand support headcounts and operational capacity on short notice." },
    { q: "How do you ensure data security?", a: "We operate under zero-trust database silos, role-based CRM access controls, and SOC-2 audited cloud servers to preserve client confidentiality." },
  ];

  return (
    <div className="flex-grow bg-brand-bg font-sans">
      {/* 1. Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="min-h-[calc(100vh-64px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Briefcase className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555 uppercase tracking-widest">
                Operations &amp; BPO
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black uppercase tracking-tight">
              Business Support Services That Keep Your Business Running
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Focus on growing your business while Yorlex handles your operational, administrative, customer support, and back-office processes with efficiency, accuracy, and professionalism.
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
                Get Support Solutions
              </PremiumButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroSupportDashboard />
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Business Support Overview */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="font-mono text-[9px] font-bold text-brand-purple uppercase tracking-widest">// GLOBAL OPERATIONS</span>
            <AnimatedHeading level={2} className="text-black font-plus-jakarta uppercase">
              Reliable Operational Support for Every Business
            </AnimatedHeading>
            <p className="font-inter text-gray-650 text-xs md:text-sm leading-relaxed max-w-2xl">
              From customer service and virtual assistance to documentation, data processing, and business process outsourcing, Yorlex provides scalable support solutions that improve productivity and reduce operational costs.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Our Support Services */}
      <SectionWrapper background="default" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// OUTSOURCING PORTFOLIO</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black uppercase">Our Support Services</h2>
            <p className="font-inter text-gray-500 text-xs mt-2 uppercase tracking-wider">Premium operational and back-office configurations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-brand-border p-6 flex flex-col justify-between hover:border-brand-purple transition-all duration-250 group relative rounded-none shadow-sm min-h-[280px]"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-purple transition-colors duration-250" />
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest">// SRV 0{idx + 1}</span>
                      <div className="w-8 h-8 rounded-none border border-brand-border bg-brand-bg text-black group-hover:bg-brand-purple group-hover:text-white transition-colors duration-250 flex items-center justify-center shrink-0">
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                    </div>
                    
                    <h3 className="font-plus-jakarta text-sm font-bold uppercase tracking-wide text-black group-hover:text-brand-purple transition-colors">
                      {srv.title}
                    </h3>
                    
                    <ul className="space-y-2 border-t border-brand-border-light/40 pt-4">
                      {srv.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-1.5">
                          <Check className="h-3 w-3 text-brand-purple shrink-0" />
                          <span className="text-[9px] text-gray-550 uppercase font-mono font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Industries We Support */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// CUSTOMER ECOSYSTEMS</span>
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black uppercase mb-12">Industries We Support</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-brand-bg border border-brand-border px-6 py-3 font-mono text-[10px] font-bold uppercase text-black hover:border-brand-purple transition-colors rounded-none shadow-sm cursor-default"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Our Support Process */}
      <SectionWrapper background="default" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// SLA INTEGRATION TIMELINE</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black uppercase">Our Support Process</h2>
            <p className="font-inter text-gray-500 text-xs mt-2 uppercase tracking-wider">How we integrate support teams seamlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border p-6 flex flex-col justify-between min-h-[160px] relative group hover:border-brand-purple transition-all rounded-none shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-purple transition-colors duration-250" />
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold text-brand-purple">0{idx + 1}</span>
                  <span className="text-[7px] font-mono text-gray-400 uppercase tracking-widest">Step</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-plus-jakarta text-[10px] font-bold uppercase text-black leading-tight">
                    {step.title}
                  </h4>
                  <p className="font-inter text-[9px] text-gray-500 leading-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. Why Choose Yorlex */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// RESILIENCE &amp; SCALE</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black uppercase">Why Choose Yorlex</h2>
            <p className="font-inter text-gray-500 text-xs mt-2 uppercase tracking-wider">Operational parameters guaranteed by structural SLA benchmarks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-bg border border-brand-border p-6 flex flex-col justify-between group hover:border-brand-purple transition-colors rounded-none shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                  <h3 className="font-plus-jakarta text-[11px] font-bold uppercase tracking-wider text-black">
                    {item.title}
                  </h3>
                </div>
                <p className="font-inter text-xs text-gray-550 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Business Benefits */}
      <SectionWrapper background="default" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white border border-brand-border p-6 flex flex-col justify-center rounded-none shadow-sm">
              <span className="font-plus-jakarta text-3xl font-black text-black leading-tight">
                {b.value}
              </span>
              <span className="font-inter font-bold text-[8px] text-gray-400 uppercase tracking-widest mt-2 block">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 8. Support Tools & Platforms */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// SYSTEM SYNC</span>
          <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black uppercase mb-12">Support Tools &amp; Platforms</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-brand-bg border border-brand-border px-5 py-2.5 font-mono text-[9px] font-semibold text-gray-500 hover:border-brand-purple hover:text-black transition-colors rounded-none shadow-sm cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. Case Studies */}
      <SectionWrapper background="default" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// OUTCOMES VERIFIED</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black uppercase">Case Studies</h2>
            <p className="font-inter text-gray-500 text-xs mt-2 uppercase tracking-wider">Documented client transformations and workload reductions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border p-8 flex flex-col justify-between group hover:border-brand-purple transition-all duration-300 rounded-none shadow-sm relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-purple transition-colors duration-250" />
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest">// STUDY 0{idx + 1}</span>
                    <span className="text-[7px] text-green-500 font-bold uppercase tracking-widest border border-green-500/20 px-2 py-0.5">Verified</span>
                  </div>
                  <h3 className="font-plus-jakarta text-base font-bold uppercase tracking-wide text-black group-hover:text-brand-purple transition-colors leading-tight">
                    {cs.title}
                  </h3>
                  <p className="font-inter text-xs text-gray-550 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>
                <div className="border-t border-brand-border-light/60 pt-4 mt-6">
                  <Link
                    href="/success-stories"
                    className="inline-flex items-center gap-2 font-inter font-bold text-[9px] uppercase text-black hover:text-brand-purple transition-colors"
                  >
                    Read Full Study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 10. FAQs */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light" animate>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// FAQ CENTER</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black uppercase">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-brand-border rounded-none overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-5 bg-brand-border-light/10 hover:bg-brand-border-light/20 transition-colors focus:outline-none text-left"
                  >
                    <span className="font-plus-jakarta text-xs md:text-sm font-bold text-black uppercase tracking-wide pr-4">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-none border border-brand-border flex items-center justify-center text-black shrink-0 bg-brand-bg transition-transform duration-300">
                      {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                      isOpen ? "max-h-[200px] opacity-100 border-t border-brand-border-light" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-5 font-inter text-xs text-gray-550 leading-relaxed bg-white">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. Final CTA */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-4">// ADVISORY GATEWAY</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Let Yorlex Handle Your Operations
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Free your team to focus on innovation and growth while we manage your day-to-day business support with professionalism and reliability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Book a Consultation
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Contact Our Support Team
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
