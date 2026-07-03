"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Eye, Shield, Bolt, Users, ArrowRight } from "lucide-react";
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
      <div className="flex justify-between text-[9px] font-mono text-gray-400 border-b border-slate-100 pb-1">
        <span>OPERATIONAL_CONVERGENCE</span>
        <span className="text-brand-purple">● RIGID</span>
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

          <circle cx="95" cy="55" r="18" fill="#000" stroke="#a100ff" strokeWidth="1.5" />
          <text x="95" y="58" fill="#fff" fontSize="6" textAnchor="middle" fontWeight="bold">YORLEX</text>

          <line x1="60" y1="20" x2="80" y2="42" stroke="#cfc4c5" strokeWidth="1" markerEnd="url(#arrow)" />
          <line x1="60" y1="90" x2="80" y2="68" stroke="#cfc4c5" strokeWidth="1" markerEnd="url(#arrow)" />
          <line x1="140" y1="55" x2="118" y2="55" stroke="#cfc4c5" strokeWidth="1" markerEnd="url(#arrow)" />
        </svg>
      </div>
      <div className="flex justify-between text-[7px] font-mono text-gray-400 border-t border-slate-100 pt-1">
        <span>METHOD: holism_v2</span>
        <span>INTEGRITY_CHECK: 100% OK</span>
      </div>
    </div>
  );

  const missionChart = (
    <div className="h-36 w-full bg-[#161618] border border-white/10 p-4 font-mono text-[8px] text-white/50 flex flex-col justify-between select-none">
      <div className="flex justify-between items-center border-b border-white/5 pb-1 text-[7px]">
        <span>FRICTION_VS_VELOCITY</span>
        <span className="text-brand-purple">CALCULATION ACTIVE</span>
      </div>
      <div className="relative flex-grow h-16 my-2">
        <svg className="w-full h-full" viewBox="0 0 200 80">
          <path d="M 10,10 Q 70,70 190,70" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.8" />
          <path d="M 10,70 Q 70,70 190,10" fill="none" stroke="#a100ff" strokeWidth="1.5" />
          <circle cx="85" cy="52" r="3" fill="#007aff" />
          <text x="92" y="55" fill="#fff" fontSize="6" fontFamily="monospace">OPTIMAL_CROSS [85, 52]</text>
        </svg>
      </div>
      <div className="flex justify-between text-[6px] border-t border-white/5 pt-1 text-white/30">
        <span>FRICTION: -74%</span>
        <span>VELOCITY: +248%</span>
      </div>
    </div>
  );

  const offices = [
    { region: "North America", count: "12 Nodes" },
    { region: "Europe & Middle East", count: "18 Nodes" },
    { region: "Asia Pacific", count: "14 Nodes" },
  ];

  const leaders = [
    {
      name: "Sarah Jenkins",
      role: "Chief Executive Officer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIU8-ISzYnUTsIKVlq7Ysd8PZfNCo_CtBEWHNMx0ZCSEaZSFibWr_mS1r-B6QV3RgRfAapuxBntPOn7gB27-jVmat9drdNxGTgcH2ub760G6OCHBC1jlKpWdnvRQ7GDU2e1Sash_pbqKGwBB6H_lGYK9eWbup1bSj-EbqV8Hqdqeq0aa96PpeOFmnNjfP-8knGv2X2mar3rcRnol0NZBl7gyYpqXYtKZY4sVjozcwPgFDkLpyRsXVD19GHsOdHmcZvOD31SB1TO6U",
    },
    {
      name: "Marcus Vance",
      role: "Chief Operating Officer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChEcfRtsjFIqQu2Ys37wpxOc9VIU6l2DYhfSjDhGxdikWNt4d-FctplcH8BbMTT3IzjRbv7-ypd1DLm8BJiI4IcpClTTQjO8Sor2NmYskdaNDUYdbHY1mj09i84bpQ9QkkeYSTrRMU_-JqozAMq2V4TtI3q6_9sLm_8_vG-gWQVJn0Kv73bEwviBp-egYY5NXM3vBl99aVnIkLVaJV8QF79j0eFYRxaAxtm_8vQZ01hlSe8xPwqjbEgh7kwKKpa0rF539AXkyUIxY",
    },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans">

      {/* Hero Section */}
      <header className="relative w-full pt-28 md:pt-32 pb-6 md:pb-8 flex items-center bg-gray-250 border-b border-brand-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full mix-blend-multiply opacity-15 grayscale"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzGVaFWO8xTsLPEAGL8g2sk2z_Aud0srPIALl-wfG_2bgMxuBcgyudZ9WcEXnoHnUMmp55vdDCB18m6mJSovBJaVFCJc_Txrhv10omuRrMpVuklI9yOzjjhk3yJahq9syLT3xCzcftJgFgJRpb93RytMnqAu63v-BUp68bGOUttcyfjDU3lih8sPhDltkY71ip2Z7xrwPxpjm7gjXwV59aGzsljwOp6dJ-_TOBeoYI6nRWWY4r0lPys6GjD6F0SihrtA8IYejfOaY')",
            }}
          />
          {/* Architectural Technical Grid overlay */}
          <div className="absolute inset-0 crosshair-grid opacity-30" />

          {/* Dynamic blueprints design vector */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <line x1="0" y1="35%" x2="100%" y2="35%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            
            {/* Focal blueprint vector in top-right */}
            <circle cx="85%" cy="35%" r="40" fill="none" stroke="rgba(161, 0, 255, 0.12)" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="85%" cy="35%" r="60" fill="none" stroke="rgba(161, 0, 255, 0.06)" strokeWidth="0.5" />
            <line x1="85%" y1="15%" x2="85%" y2="55%" stroke="rgba(161, 0, 255, 0.1)" strokeWidth="0.5" />
            <line x1="75%" y1="35%" x2="95%" y2="35%" stroke="rgba(161, 0, 255, 0.1)" strokeWidth="0.5" />
          </svg>

          {/* Telemetry metadata overlay */}
          <div className="absolute top-28 right-8 font-mono text-[8px] text-gray-400 select-none tracking-widest hidden md:block">
            GRID_SCALE: 1:1.024 // CH_SYS_ACTIVE
          </div>
          <div className="absolute bottom-6 left-8 font-mono text-[8px] text-gray-400 select-none tracking-widest hidden md:block">
            REF_BLUEPRINT: [YORLEX_CORP_HEADQUARTERS]
          </div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 md:col-start-1">
            <p className="font-inter font-bold text-xs uppercase tracking-widest text-black mb-4">About Us</p>
            <AnimatedHeading level={1} className="text-black mb-6">
              Architecting Global Excellence.
            </AnimatedHeading>
            <p className="font-inter text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
              Yorlex is a multi-disciplinary powerhouse engineered to solve the most complex challenges across technology, finance, and enterprise management.
            </p>
          </div>
        </div>
      </header>

      {/* The Power Bar — Stats Counter Row */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatsCounter value={40} suffix="+" label="Global Offices" dark />
          <StatsCounter value={2} prefix="$" suffix="B+" label="Assets Managed" dark />
          <StatsCounter value={15} suffix="k+" label="Enterprise Clients" dark />
          <StatsCounter value={99.9} suffix="%" label="System Reliability" dark />
        </div>
      </SectionWrapper>

      {/* Our Story Section */}
      <SectionWrapper background="default" spacing="default" animate>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <AnimatedHeading level={2} className="text-black mb-4">
                Our Origin.
              </AnimatedHeading>
              <p className="font-inter font-bold text-xs uppercase text-brand-purple tracking-widest">The Genesis of Precision</p>
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
      <SectionWrapper background="white" spacing="generous" animate>
        <div className="text-center mb-16">
          <AnimatedHeading level={2} className="text-black">
            Core Directives.
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Mission */}
          <div className="md:col-span-8">
            <GradientCard variant="dark" hover="glow" className="flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                <div className="flex-1 space-y-4">
                  <Rocket className="h-10 w-10 text-brand-purple" />
                  <h3 className="font-plus-jakarta text-xl font-bold text-white uppercase">The Mission</h3>
                  <p className="font-inter text-gray-300 text-sm md:text-base leading-relaxed">
                    To engineer uncompromising solutions that eliminate operational friction and accelerate institutional growth across global markets.
                  </p>
                </div>
                <div className="w-full md:w-[260px] shrink-0 mt-4 md:mt-0">
                  {missionChart}
                </div>
              </div>
            </GradientCard>
          </div>

          {/* Vision */}
          <div className="md:col-span-4">
            <GradientCard variant="default" hover="lift" className="flex flex-col justify-between min-h-[300px]">
              <div className="mb-8">
                <Eye className="h-10 w-10 text-black" />
              </div>
              <div>
                <h3 className="font-plus-jakarta text-xl font-bold text-black mb-2 uppercase">The Vision</h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  To be the undisputed architectural standard for multi-disciplinary enterprise management worldwide.
                </p>
              </div>
            </GradientCard>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GradientCard variant="default" hover="border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-5 w-5 text-black shrink-0" />
              <h4 className="font-inter font-bold text-xs text-black uppercase tracking-wider">Structural Integrity</h4>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              We build systems designed to endure stress, scale without fracture, and perform with absolute precision.
            </p>
          </GradientCard>

          <GradientCard variant="default" hover="border">
            <div className="flex items-center gap-3 mb-4">
              <Bolt className="h-5 w-5 text-black shrink-0" />
              <h4 className="font-inter font-bold text-xs text-black uppercase tracking-wider">Calculated Velocity</h4>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Speed is useless without direction. We combine aggressive innovation with rigorous analytical constraints.
            </p>
          </GradientCard>

          <GradientCard variant="default" hover="border">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-black shrink-0" />
              <h4 className="font-inter font-bold text-xs text-black uppercase tracking-wider">Absolute Accountability</h4>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              We own the outcomes of our architectures. Trust is not requested; it is structurally guaranteed.
            </p>
          </GradientCard>
        </div>
      </SectionWrapper>

      {/* Global Impact Section */}
      <SectionWrapper background="default" spacing="default" animate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedHeading level={2} className="text-black mb-6">
              Global Authority.
            </AnimatedHeading>
            <p className="font-inter text-gray-600 text-sm leading-relaxed mb-8">
              Operating from strategic hubs across key economic theaters, Yorlex exerts influence and delivers localized precision on a global scale. Our network is a tightly integrated nervous system of elite professionals.
            </p>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.region} className="flex justify-between items-center border-b border-brand-border pb-2">
                  <span className="font-inter font-bold text-xs uppercase text-black tracking-wider">{office.region}</span>
                  <span className="text-xs text-gray-500 font-semibold">{office.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[380px] bg-black border border-brand-border rounded-none relative overflow-hidden p-6 flex flex-col justify-between crosshair-grid select-none">
            {/* Dynamic Telemetry Panel */}
            <div className="flex justify-between items-center text-white/50 text-[9px] font-mono border-b border-white/10 pb-2">
              <span>SYSTEM: NODE_NETWORK_TELEMETRY</span>
              <span className="text-brand-purple animate-pulse flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-brand-purple rounded-full inline-block"></span> SIGNAL ACTIVE
              </span>
            </div>
            
            {/* World grid & connections */}
            <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
              <svg viewBox="0 0 400 200" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal & Vertical grid lines */}
                <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="300" y1="0" x2="300" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />

                {/* Connection links */}
                <path d="M 60,85 Q 120,40 180,65" fill="none" stroke="rgba(161, 0, 255, 0.4)" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 180,65 Q 230,110 280,120" fill="none" stroke="rgba(161, 0, 255, 0.4)" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 60,85 Q 170,170 280,120" fill="none" stroke="rgba(0, 122, 255, 0.3)" strokeWidth="1" strokeDasharray="4,4" />

                {/* Nodes */}
                {/* SF Node */}
                <circle cx="60" cy="85" r="4" fill="#a100ff" />
                <circle cx="60" cy="85" r="8" fill="none" stroke="#a100ff" strokeWidth="1" className="animate-ping-slow origin-center" style={{ transformOrigin: '60px 85px' }} />
                
                {/* London Node */}
                <circle cx="180" cy="65" r="4" fill="#a100ff" />
                <circle cx="180" cy="65" r="8" fill="none" stroke="#a100ff" strokeWidth="1" className="animate-ping-slow origin-center" style={{ transformOrigin: '180px 65px' }} />

                {/* Chennai Node */}
                <circle cx="280" cy="120" r="4" fill="#a100ff" />
                <circle cx="280" cy="120" r="8" fill="none" stroke="#007aff" strokeWidth="1" className="animate-ping-slow origin-center" style={{ transformOrigin: '280px 120px' }} />

                {/* Node labels */}
                <text x="65" y="81" fill="#fff" fontSize="7" fontFamily="monospace" opacity="0.8">SF_NODE.US</text>
                <text x="185" y="61" fill="#fff" fontSize="7" fontFamily="monospace" opacity="0.8">LON_NODE.UK</text>
                <text x="285" y="116" fill="#fff" fontSize="7" fontFamily="monospace" opacity="0.8">MAA_NODE.IN</text>
              </svg>
            </div>

            {/* Bottom telemetry detail */}
            <div className="flex justify-between items-end text-[8px] font-mono text-white/40 border-t border-white/10 pt-2">
              <div className="space-y-0.5">
                <div>GRID_STATUS: 100% OPERATIONAL</div>
                <div>SECURE_TUNNEL: AES_256_ACTIVE</div>
              </div>
              <div className="text-right">
                LATENCY: 42MS // PKT_LOSS: 0.00%
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership Board */}
      <SectionWrapper background="white" spacing="generous" animate>
        <div className="text-center">
          <p className="font-inter font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">The Architects</p>
          <AnimatedHeading level={2} className="text-black mb-16">
            Command &amp; Control.
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <GradientCard key={leader.name} variant="default" hover="lift" className="text-left flex flex-col justify-between">
                <div>
                  <div className="w-full aspect-4/5 bg-gray-200 mb-6 overflow-hidden border border-brand-border">
                    <img
                      alt={leader.name}
                      src={leader.image}
                      className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-300"
                    />
                  </div>
                  <h4 className="font-plus-jakarta text-xl font-bold text-black uppercase">{leader.name}</h4>
                  <p className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-wider mt-1">{leader.role}</p>
                </div>
              </GradientCard>
            ))}

            {/* CTA Card */}
            <GradientCard variant="dark" hover="glow" className="flex flex-col items-center justify-center">
              <Users className="h-10 w-10 text-brand-purple mb-4" />
              <h4 className="font-plus-jakarta text-lg font-bold mb-2 uppercase text-center text-white">View Entire Board</h4>
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
