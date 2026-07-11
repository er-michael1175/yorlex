"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Eye, Shield, Bolt, Users, ArrowRight, Check, MapPin, Cpu, Landmark, Scale } from "lucide-react";
import {
  SectionWrapper,
  AnimatedHeading,
  GradientCard,
  PremiumButton,
  StatsCounter,
} from "@/components/ui";

export default function About() {
  const originChart = (
    <div className="h-full w-full bg-slate-50 border border-brand-border p-4 flex flex-col justify-between select-none min-h-[220px]">
      <div className="text-[9px] font-inter font-bold text-gray-400 border-b border-slate-100 pb-2">
        How our disciplines connect
      </div>
      <div className="flex-grow flex items-center justify-center my-2">
        <svg viewBox="0 0 200 120" className="w-full h-full max-h-[105px]">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#cfc4c5" />
            </marker>
          </defs>

          <rect x="10" y="10" width="50" height="20" fill="#fff" stroke="#cfc4c5" strokeWidth="1" />
          <text x="35" y="22" fill="#000" fontSize="7" textAnchor="middle" fontWeight="bold">TECH</text>

          <rect x="10" y="80" width="50" height="20" fill="#fff" stroke="#cfc4c5" strokeWidth="1" />
          <text x="35" y="92" fill="#000" fontSize="7" textAnchor="middle" fontWeight="bold">FINANCE</text>

          <rect x="140" y="45" width="50" height="20" fill="#fff" stroke="#cfc4c5" strokeWidth="1" />
          <text x="165" y="57" fill="#000" fontSize="7" textAnchor="middle" fontWeight="bold">MARKETING</text>

          <circle cx="95" cy="55" r="18" fill="#000" stroke="#99bb2b" strokeWidth="1.5" />
          <text x="95" y="58" fill="#fff" fontSize="6" textAnchor="middle" fontWeight="bold">YORLEX</text>

          <line x1="60" y1="20" x2="80" y2="42" stroke="#cfc4c5" strokeWidth="1" markerEnd="url(#arrow)" />
          <line x1="60" y1="90" x2="80" y2="68" stroke="#cfc4c5" strokeWidth="1" markerEnd="url(#arrow)" />
          <line x1="140" y1="55" x2="118" y2="55" stroke="#cfc4c5" strokeWidth="1" markerEnd="url(#arrow)" />
        </svg>
      </div>
      <div className="text-[9px] font-inter text-gray-400 border-t border-slate-100 pt-2">
        One team, three disciplines, a single point of accountability.
      </div>
    </div>
  );

  const leaders = [
    {
      name: "Sarah Jenkins",
      role: "Chief Executive Officer",
      image: "/images/about/leader-ceo.jpg",
    },
    {
      name: "Marcus Vance",
      role: "Chief Operating Officer",
      image: "/images/about/leader-coo.jpg",
    },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans">
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
            src="/images/about/about-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute inset-0 bg-brand-bg opacity-20 pointer-events-none" />

        <div className="relative">
          <div className="lg:hidden -mx-6 -mt-4 md:-mt-6 mb-6 relative h-52 sm:h-64 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/about-hero-bg.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/5 to-transparent" />
          </div>

          <div className="flex flex-col gap-3 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Rocket className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555">
                Corporate Identity
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black tracking-tight">
              Architecting Global Excellence
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Yorlex is a multi-disciplinary powerhouse engineered to solve the most complex challenges across technology, finance, and enterprise management.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/services"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explore Capabilities
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="/about/leadership"
              >
                Meet Leadership
              </PremiumButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* The Power Bar — Stats Counter Row */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatsCounter value={40} suffix="+" label="Global Offices" dark />
          <StatsCounter value={2} prefix="$" suffix="B+" label="Assets Managed" dark />
          <StatsCounter value={15} suffix="k+" label="Enterprise Clients" dark />
          <StatsCounter value={99.9} suffix="%" label="System Reliability" dark />
        </div>
      </SectionWrapper>

      {/* Our Origin Section */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// BRAND GENESIS</span>
              <AnimatedHeading level={2} className="text-black mb-4">
                Our Origin
              </AnimatedHeading>
              <p className="font-inter font-bold text-xs text-gray-550">The Genesis of Precision</p>
            </div>
          </div>
          <div className="md:col-span-8">
            <GradientCard variant="default" hover="lift">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                  <p className="font-inter text-gray-700 text-sm leading-relaxed mb-6">
                    Founded on the principle that fragmented solutions lead to compromised outcomes, Yorlex was established to unify disparate enterprise disciplines under a single, rigorous methodology.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We don&apos;t just consult; we construct robust frameworks that withstand the volatility of global markets. Our approach is deeply rooted in architectural thinking—every strategy, system, and process is built to bear weight and scale infinitely.
                  </p>
                </div>
                <div className="w-full">
                  {originChart}
                </div>
              </div>
            </GradientCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission / Vision / Values Bento Grid */}
      <SectionWrapper background="white" spacing="compact" animate>
        <div className="text-center mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// DIRECTIVES</span>
          <AnimatedHeading level={2} className="text-black">
            Core Directives
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Mission */}
          <div className="md:col-span-8">
            <GradientCard variant="dark" hover="glow" className="flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                <div className="flex-1 space-y-4">
                  <Rocket className="h-10 w-10 text-brand-purple" />
                  <h3 className="font-plus-jakarta text-xl font-bold text-white">The Mission</h3>
                  <p className="font-inter text-gray-300 text-sm md:text-base leading-relaxed">
                    To engineer uncompromising solutions that eliminate operational friction and accelerate institutional growth across global markets.
                  </p>
                </div>
                <div className="w-full md:w-[260px] shrink-0 mt-4 md:mt-0 space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
                  {[
                    "Single point of accountability",
                    "Cross-disciplinary delivery teams",
                    "Outcomes measured against your goals",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                      <span className="font-inter text-xs text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GradientCard>
          </div>

          {/* Vision */}
          <div className="md:col-span-4">
            <div className="yorlex-card overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden shrink-0">
                <img src="/images/about/vision.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-yorlex-navy/25" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-1">
                <div className="mb-8">
                  <Eye className="h-10 w-10 text-black" />
                </div>
                <div>
                  <h3 className="font-plus-jakarta text-xl font-bold text-black mb-2">The Vision</h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">
                    To be the undisputed architectural standard for multi-disciplinary enterprise management worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="yorlex-card overflow-hidden">
            <div className="relative h-40 overflow-hidden">
              <img src="/images/about/structural-integrity.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-yorlex-navy/25" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-5 w-5 text-black shrink-0" />
                <h4 className="font-inter font-bold text-xs text-black">Structural Integrity</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                We build systems designed to endure stress, scale without fracture, and perform with absolute precision.
              </p>
            </div>
          </div>

          <div className="yorlex-card overflow-hidden">
            <div className="relative h-40 overflow-hidden">
              <img src="/images/about/calculated-velocity.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-yorlex-navy/25" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bolt className="h-5 w-5 text-black shrink-0" />
                <h4 className="font-inter font-bold text-xs text-black">Calculated Velocity</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Speed is useless without direction. We combine aggressive innovation with rigorous analytical constraints.
              </p>
            </div>
          </div>

          <div className="yorlex-card overflow-hidden">
            <div className="relative h-40 overflow-hidden">
              <img src="/images/about/accountability.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-yorlex-navy/25" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-black shrink-0" />
                <h4 className="font-inter font-bold text-xs text-black">Absolute Accountability</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                We own the outcomes of our architectures. Trust is not requested; it is structurally guaranteed.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Global Impact Section */}
      <SectionWrapper background="default" spacing="compact" animate>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// GLOBAL NODE NETWORK</span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black">
            Global Authority
          </h2>
          <p className="font-inter text-xs md:text-sm text-gray-550 leading-relaxed mt-2">
            Operating from strategic hubs across key economic theaters, Yorlex delivers localized precision and M&A consulting on a global scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              region: "North America",
              count: "12 Nodes",
              functions: ["Technology Strategy", "M&A Advisory", "Venture Building"],
              city: "San Francisco, CA"
            },
            {
              region: "Europe & Middle East",
              count: "18 Nodes",
              functions: ["Sovereign Wealth Consulting", "Operations Design", "Regulatory Compliance"],
              city: "London, UK"
            },
            {
              region: "Asia Pacific",
              count: "14 Nodes",
              functions: ["Product Engineering", "Process PMO Delivery", "Operations Scaling"],
              city: "Chennai, IN"
            }
          ].map((office, idx) => (
            <div key={idx} className="bg-white border border-brand-border-light p-8 transition-colors hover:border-brand-purple">
              <span className="font-mono text-[9px] text-brand-purple block mb-2">// {office.city}</span>
              <h3 className="font-plus-jakarta text-lg font-bold text-black mb-1">{office.region}</h3>
              <div className="font-mono text-xs font-bold text-gray-400 mb-6">{office.count}</div>
              
              <ul className="space-y-2 border-t border-brand-border-light/60 pt-4">
                {office.functions.map((func, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                    <span className="text-[10px] text-gray-555 font-mono font-medium">{func}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership Board */}
      <SectionWrapper background="white" spacing="compact" animate>
        <div className="text-center">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// THE ARCHITECTS</span>
          <AnimatedHeading level={2} className="text-black mb-12">
            Command &amp; Control
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <GradientCard key={leader.name} variant="default" hover="lift" className="text-left flex flex-col justify-between">
                <div>
                  <div className="w-full aspect-4/5 bg-gray-255 mb-6 overflow-hidden border border-brand-border-light">
                    <img
                      alt={leader.name}
                      src={leader.image}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h4 className="font-plus-jakarta text-xl font-bold text-black">{leader.name}</h4>
                  <p className="font-inter font-bold text-[10px] text-brand-purple mt-1">{leader.role}</p>
                </div>
              </GradientCard>
            ))}

            {/* CTA Card */}
            <GradientCard variant="dark" hover="glow" className="flex flex-col items-center justify-center p-8">
              <Users className="h-10 w-10 text-brand-purple mb-4" />
              <h4 className="font-plus-jakarta text-lg font-bold mb-2 text-center text-white">View Entire Board</h4>
              <p className="text-[10px] text-gray-400 text-center mb-6">45+ Elite multi-disciplinary partners worldwide.</p>
              <PremiumButton variant="ghost" href="/about/leadership" icon={<ArrowRight className="h-4 w-4" />} className="text-white hover:text-brand-purple">
                Explore Leadership
              </PremiumButton>
            </GradientCard>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
