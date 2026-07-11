"use client";

import React from "react";
import { Search, Compass, Cpu, Layers, TrendingUp, ArrowRight, Check } from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/whatsapp";

function StepPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-48 w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export default function Process() {
  const whatsappUrl = getWhatsAppUrl("Hi Yorlex, I'd like to schedule a system audit.");
  const contactHref = whatsappUrl ?? "/contact";

  const auditIllustration = (
    <StepPhoto src="/images/services/finance-hero-bg.jpg" alt="Discovery and system audit" />
  );

  const roadmapIllustration = (
    <StepPhoto src="/images/services/management-overview.jpg" alt="Strategic roadmap planning" />
  );

  const agileIllustration = (
    <StepPhoto src="/images/services/case-study-crm.jpg" alt="Agile implementation sprint" />
  );

  const optimizationIllustration = (
    <StepPhoto src="/images/services/support-overview.jpg" alt="Operational optimization review" />
  );

  const scaleIllustration = (
    <StepPhoto src="/images/services/marketing-case-ecommerce.jpg" alt="Scale and expansion" />
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
      bullets: ["Parallel developer sprints", "Code review on every merge", "Daily progress dashboard"],
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
      <SectionWrapper background="grid" spacing="none" className="relative overflow-hidden lg:min-h-[calc(100vh-80px)] flex flex-col justify-center [&>div]:w-full pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-3/4 opacity-90 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 42%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 42%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/management-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute inset-0 bg-brand-bg opacity-20 pointer-events-none" />

        <div className="relative">
          <div className="lg:hidden -mx-6 -mt-4 md:-mt-6 mb-6 relative h-52 sm:h-64 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/management-hero-bg.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/5 to-transparent" />
          </div>

          <div className="flex flex-col gap-3 max-w-xl">
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
                href={contactHref}
                target={whatsappUrl ? "_blank" : undefined}
                rel={whatsappUrl ? "noopener noreferrer" : undefined}
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
      <SectionWrapper background="dark" spacing="compact" className="relative overflow-hidden" animate>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/finance-case-tax.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-yorlex-navy/75 pointer-events-none" />

        <div className="relative text-center max-w-3xl mx-auto">
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
              href={contactHref}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Schedule Free Strategy Audit
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href={contactHref}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
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
