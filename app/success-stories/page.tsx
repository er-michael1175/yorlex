"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, CheckCircle2, Award, X, Cpu, Landmark, Zap, Layers, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function SuccessStories() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const whatsappUrl = getWhatsAppUrl("Hi Yorlex, I'd like to talk about a strategy briefing.");
  const contactHref = whatsappUrl ?? "/contact";

  const stories = [
    {
      id: 1,
      category: "operations",
      title: "Revenue Optimization & Digital Overhaul",
      client: "Apex Manufacturing Solutions",
      metric: "+148% EBITDA",
      desc: "Adapted a traditional legacy manufacturer into an automated digital-first powerhouse, coordinating custom CRM platforms, automated accounting compliance, and organic B2B acquisition models.",
      impact: [
        { label: "Revenue Increase", value: "+40%" },
        { label: "Operational Overhead", value: "-25%" },
        { label: "Automation Ratio", value: "85%" },
      ],
      details: {
        challenge: "Apex was burdened by manual order logs, delayed monthly tax compliance, and zero digital presence, resulting in high CAC from offline sales reps.",
        actions: [
          { area: "Technology", act: "Deployed a custom order tracking web panel integrated with Salesforce." },
          { area: "Finance", act: "Automated billing reconciliation and tax compliance logs." },
          { area: "Marketing", act: "Designed visual brand elements and launched B2B search PPC targeting supply leads." },
          { area: "Management", act: "Restructured administrative roles, shifting personnel to support customer success." },
        ],
        results: "After 6 months of joint implementation, Apex reported record high profit margins, with 85% of processes fully automated.",
      },
    },
    {
      id: 2,
      category: "finance",
      title: "Series B Growth Acceleration",
      client: "HealthSync Platforms",
      metric: "$45M Series B Raised",
      desc: "Configured clean data compliance, resolved bookkeeping logs, and optimized performance campaigns to secure health-tech investment rounds.",
      impact: [
        { label: "Capital Raised", value: "$45M" },
        { label: "LTV to CAC Ratio", value: "4.8x" },
        { label: "User Growth Rate", value: "110% YoY" },
      ],
      details: {
        challenge: "HealthSync needed a clean financial auditing record and high LTV/CAC ratios to satisfy lead institutional VCs for their Series B.",
        actions: [
          { area: "Finance", act: "Re-engineered cost audit models and constructed 5-year runway scenarios." },
          { area: "Marketing", act: "Launched localized SEO guides securing #1 rank for high-intent medical software terms." },
          { area: "Technology", act: "Engineered strict HIPAA-compliant database protocols." },
        ],
        results: "HealthSync closed their funding round in under 6 weeks with a 20% higher valuation than initial parameters.",
      },
    },
    {
      id: 3,
      category: "technology",
      title: "Back-Office Operational Scale",
      client: "TechFlow Systems",
      metric: "99.9% Support SLA Met",
      desc: "Deployed dedicated omnichannel customer success desks and data verification cleanrooms to maintain extreme quality parameters.",
      impact: [
        { label: "Response Time", value: "<12 Min" },
        { label: "Data Quality", value: "99.9%" },
        { label: "SLA Retention", value: "100%" },
      ],
      details: {
        challenge: "TechFlow experienced extreme customer support backlogs, causing client churn rates to double.",
        actions: [
          { area: "Support", act: "Setup 24/7 helpdesk support squads using unified ticketing channels." },
          { area: "Management", act: "Established strict SLA metrics and response tracking dashboards." },
        ],
        results: "Customer churn fell to absolute zero within 30 days of outsourcing back-office admin to our Chennai desk.",
      },
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "technology", label: "Technology" },
    { id: "finance", label: "Finance" },
    { id: "operations", label: "Operations" },
  ];

  const filteredStories = useMemo(() => {
    if (activeFilter === "all") return stories;
    return stories.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="flex-grow bg-brand-bg font-sans pt-0 pb-0">
      {/* Hero Section */}
      <SectionWrapper
        background="grid"
        spacing="none"
        className="relative overflow-hidden lg:min-h-[calc(100vh-80px)] flex flex-col justify-center [&>div]:w-full pt-4 md:pt-6 pb-6 md:pb-8"
        animate
      >
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-3/4 opacity-90 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 42%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 42%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/success-stories/success-stories-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute inset-0 bg-brand-bg opacity-20 pointer-events-none" />

        <div className="lg:hidden absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/success-stories/success-stories-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
        </div>

        <div className="relative flex flex-col gap-3 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
            <Award className="h-4 w-4 text-brand-purple shrink-0" />
            <span className="font-inter font-bold text-[10px] text-gray-555">
              Illustrative Scenarios
            </span>
          </div>
          <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black max-lg:text-white tracking-tight">
            Success Stories
          </h1>
          <p className="font-inter text-gray-650 max-lg:text-white/90 text-sm leading-relaxed max-w-xl">
            Illustrative outcomes based on typical engagement patterns across our technology, finance, and marketing services &mdash; not verified client results.
          </p>
          <div className="flex flex-wrap gap-4 mt-1">
            <PremiumButton
              variant="gradient"
              size="md"
              href={contactHref}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Schedule Strategy Briefing
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="md"
              href="#stories-grid"
              className="max-lg:text-white max-lg:border-white/30"
            >
              Request Case Studies
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>

      {/* Filter Chips & Cases Grid */}
      <SectionWrapper id="stories-grid" background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          
          {/* Dynamic Filter Chips */}
          <div className="flex flex-wrap gap-2 justify-center pb-2 relative">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setActiveFilter(f.id);
                  setSelectedCase(null);
                }}
                className="px-4 py-2 text-[9px] font-bold border rounded-2xl transition-colors duration-150 relative"
                style={{
                  borderColor: activeFilter === f.id ? "black" : "rgba(0,0,0,0.06)",
                }}
              >
                <span className={`relative z-10 ${activeFilter === f.id ? "text-white" : "text-gray-555 hover:text-black"}`}>
                  {f.label}
                </span>
                {activeFilter === f.id && (
                  <motion.div
                    layoutId="activeStoryFilter"
                    className="absolute inset-0 bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story) => (
                <motion.div
                  key={story.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-brand-border p-8 flex flex-col justify-between h-full hover:border-brand-purple transition-all duration-300 group relative rounded-2xl shadow-sm"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-purple transition-colors duration-300" />

                  <div>
                    <span className="inline-flex items-center bg-brand-bg border border-brand-border-light text-gray-450 text-[7px] font-bold font-inter uppercase tracking-wide px-2 py-1 rounded-full mb-4">
                      Illustrative Example
                    </span>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-brand-purple text-[8px] font-mono font-bold">
                        // {story.client}
                      </span>
                      <span className="text-[7px] font-mono text-gray-400">// {story.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3 font-plus-jakarta tracking-wide group-hover:text-brand-purple transition-colors leading-tight">
                      {story.title}
                    </h3>
                    
                    <div className="text-2xl font-black text-black my-4 font-plus-jakarta">
                      {story.metric}
                    </div>

                    <p className="text-xs text-gray-550 font-inter leading-relaxed mb-6">
                      {story.desc}
                    </p>

                    {/* Impact Grid */}
                    <div className="grid grid-cols-3 gap-2 border-t border-brand-border-light/60 pt-6 mt-6">
                      {story.impact.map((imp) => (
                        <div key={imp.label} className="text-center">
                          <div className="text-sm font-bold text-black font-plus-jakarta">{imp.value}</div>
                          <div className="text-[8px] text-gray-400 font-bold mt-1 font-inter">
                            {imp.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCase(story.id)}
                    className="w-full mt-8 bg-black hover:bg-brand-purple text-white hover:text-brand-text py-3.5 rounded-2xl transition-all text-xs flex items-center justify-center gap-2 border border-black hover:border-brand-purple font-inter font-bold text-[9px]"
                  >
                    Read Case Analysis <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </SectionWrapper>

      {/* Case Study Modal Details */}
      <AnimatePresence>
        {selectedCase !== null && (() => {
          const story = stories.find((s) => s.id === selectedCase);
          if (!story) return null;
          return (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-brand-border p-8 md:p-12 rounded-2xl max-w-2xl w-full relative my-10 max-h-[85vh] overflow-y-auto scrollbar-thin shadow-2xl"
              >
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute right-6 top-6 w-10 h-10 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <span className="inline-flex items-center bg-brand-bg border border-brand-border-light text-gray-450 text-[7px] font-bold font-inter uppercase tracking-wide px-2 py-1 rounded-full mb-3">
                  Illustrative Example
                </span>
                <span className="text-brand-purple text-[8px] font-mono font-bold block mb-3">
                  // {story.client} • Case Analysis
                </span>
                <h3 className="text-2xl font-bold text-black mb-6 font-plus-jakarta tracking-wide leading-tight border-b border-brand-border pb-4">
                  {story.title}
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-black mb-2 font-mono">// The Challenge</h4>
                    <p className="text-xs md:text-sm text-gray-655 leading-relaxed font-inter">
                      {story.details.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-black mb-4 font-mono">// Implemented Partner Actions</h4>
                    <div className="space-y-3">
                      {story.details.actions.map((act) => (
                        <div key={act.area} className="flex gap-3 items-start bg-brand-bg border border-brand-border-light p-4 rounded-2xl">
                          <CheckCircle2 className="h-4.5 w-4.5 text-brand-purple shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-brand-purple text-[8px] font-mono block mb-0.5 font-bold">
                              {act.area} Pillar
                            </strong>
                            <span className="text-xs text-gray-655 leading-relaxed font-inter">{act.act}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-brand-border-light/60 pt-6">
                    <h4 className="text-xs font-bold text-black mb-2 font-mono">// Expected Outcome</h4>
                    <p className="text-xs md:text-sm text-gray-655 leading-relaxed font-inter">
                      {story.details.results}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      {/* Final Conversion Action */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-4">// ADVISORY PIPELINE</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Build Your Success Story?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Our multi-disciplinary consultants will align technology architecture, financial audits, and performance marketing to scale your enterprise EBITDA.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href={contactHref}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Book Strategy Audit Briefing
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href={contactHref}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Talk to an Advisor
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
