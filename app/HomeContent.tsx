"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThreeBg from "../components/ThreeBg";
import { Server, Landmark, Megaphone, Building, Headphones, ArrowRight } from "lucide-react";
import {
  SectionWrapper,
  AnimatedHeading,
  PremiumButton,
  StatsCounter,
  ServiceCard,
} from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animation-variants";
import { useScrollReveal } from "@/components/hooks";

export default function HomeContent() {
  const partnerLogos = [
    { name: "Tech Enterprise", icon: Server, label: "CLOUDMESH" },
    { name: "Financial Institution", icon: Landmark, label: "FINTEX" },
    { name: "Manufacturing Corp", icon: Building, label: "APEX_MFG" },
    { name: "Communication Desk", icon: Megaphone, label: "VOX_MEDIA" },
    { name: "Global Operations", icon: Server, label: "SYS_CORP" },
    { name: "Client Desk", icon: Headphones, label: "PRO_SUPPORT" },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans min-h-screen">

      {/* ═══ Hero Section — dark bg with ThreeBg, upgraded heading + CTA ═══ */}
      <section className="relative flex flex-col items-center justify-start overflow-hidden border-b border-brand-border bg-surface-dark text-white pt-4 pb-8 md:pt-6 md:pb-14">
        <ThreeBg />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center py-4 md:py-6">
          <div className="md:w-2/3 pr-0 md:pr-12 space-y-8">
            <AnimatedHeading level={1} className="text-white">
              Orchestrating <br className="hidden md:block" />
              <span className="text-brand-purple">Digital</span> and <br className="hidden md:block" />
              Operational Excellence.
            </AnimatedHeading>

            <motion.p
              className="font-inter text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              For the Global Enterprise. We architect resilient systems and strategic frameworks that drive exponential growth and unmatched operational precision in complex environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <PremiumButton
                variant="gradient"
                size="lg"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Schedule a Strategy Briefing
              </PremiumButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Social Proof + Marquee — white bg with architectural grid ═══ */}
      <SectionWrapper background="grid" spacing="compact" animate>
        <div className="space-y-16">
          <div className="space-y-6">
            <motion.p
              variants={staggerItem}
              className="font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest text-center"
            >
              Trusted by Global Enterprises
            </motion.p>

            {/* Infinite Marquee Container */}
            <motion.div variants={staggerItem} className="relative w-full overflow-hidden py-4">
              <div className="flex gap-16 animate-marquee whitespace-nowrap">
                {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => {
                  const Icon = logo.icon;
                  return (
                    <div key={idx} className="shrink-0 flex items-center gap-2 text-gray-400 hover:text-brand-purple transition-all duration-300 cursor-pointer font-plus-jakarta font-bold uppercase tracking-widest text-xs select-none">
                      <Icon className="h-5 w-5 text-gray-400" />
                      <span>{logo.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ═══ Stats Counter Section — dark background ═══ */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <motion.div variants={staggerItem}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatsCounter value={250} suffix="+" label="Projects Completed" dark />
            <StatsCounter value={40} suffix="+" label="Enterprise Clients" dark />
            <StatsCounter value={25} suffix="+" label="Countries Reached" dark />
            <StatsCounter value={99} suffix="%" label="System Reliability" dark />
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ═══ Bento Grid Services Section — gradient background ═══ */}
      <BentoServicesSection />

    </div>
  );
}

/**
 * Bento grid services section using ServiceCard components
 * with stagger-reveal animations and the bento grid layout.
 */
function BentoServicesSection() {
  const { ref, isInView } = useScrollReveal();

  const techIllustration = (
    <div className="h-44 w-full bg-slate-950 border border-slate-800 p-4 font-mono text-[9px] text-white/50 flex flex-col justify-between select-none">
      <div className="flex justify-between items-center border-b border-white/10 pb-1 text-[8px]">
        <span>K8S_CLUSTER_STATUS</span>
        <span className="text-green-400">● RUNNING</span>
      </div>
      <div className="space-y-1.5 py-2">
        <div className="flex justify-between items-center">
          <span>node-01 (master)</span>
          <span className="text-white bg-brand-purple/20 px-1 font-bold text-[7px] border border-brand-purple/30">CPU: 42%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>node-02 (worker)</span>
          <span className="text-white bg-brand-purple/20 px-1 font-bold text-[7px] border border-brand-purple/30">CPU: 65%</span>
        </div>
        <div className="flex justify-between items-center">
          <span>node-03 (worker)</span>
          <span className="text-white bg-[#007aff]/20 px-1 font-bold text-[7px] border border-[#007aff]/30">CPU: 18%</span>
        </div>
      </div>
      <div className="flex justify-between text-[7px] border-t border-white/10 pt-1 text-white/30">
        <span>PODS: 14/14 ACTIVE</span>
        <span>REPLICAS: [3/3] [OK]</span>
      </div>
    </div>
  );

  const financeIllustration = (
    <div className="h-28 w-full bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between select-none mt-2">
      <div className="flex justify-between text-[9px] font-mono text-gray-400">
        <span>RUNWAY FORECAST</span>
        <span className="text-black font-bold">+18.4 Mo</span>
      </div>
      <div className="flex items-end justify-between h-14 pt-2 gap-1.5">
        <div className="bg-slate-200 w-full h-[30%] hover:bg-brand-purple transition-all duration-300"></div>
        <div className="bg-slate-200 w-full h-[50%] hover:bg-brand-purple transition-all duration-300"></div>
        <div className="bg-slate-200 w-full h-[45%] hover:bg-brand-purple transition-all duration-300"></div>
        <div className="bg-slate-200 w-full h-[75%] hover:bg-brand-purple transition-all duration-300"></div>
        <div className="bg-black w-full h-[95%]"></div>
      </div>
      <div className="flex justify-between text-[7px] font-mono text-gray-400 border-t border-slate-100 pt-1">
        <span>Q1_26</span>
        <span>Q2_26</span>
        <span>Q3_26</span>
        <span>Q4_26</span>
        <span>FY_26 (ACT)</span>
      </div>
    </div>
  );

  const marketingIllustration = (
    <div className="h-28 w-full bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between select-none mt-2">
      <div className="flex justify-between text-[9px] font-mono text-gray-400">
        <span>CONVERSION FUNNEL</span>
        <span className="text-brand-purple font-bold">4.8% CR</span>
      </div>
      <div className="flex flex-col gap-1.5 py-1">
        <div className="bg-black text-white text-[7px] font-mono py-1 px-2 flex justify-between">
          <span>TRAFFIC</span>
          <span>100K (100%)</span>
        </div>
        <div className="bg-slate-300 text-black text-[7px] font-mono py-0.5 px-2 flex justify-between w-[60%]">
          <span>LEADS</span>
          <span>18K (18%)</span>
        </div>
        <div className="bg-brand-purple text-white text-[7px] font-mono py-0.5 px-2 flex justify-between w-[35%]">
          <span>SALES</span>
          <span>4.8K (4.8%)</span>
        </div>
      </div>
      <div className="text-[7px] font-mono text-gray-400 text-center border-t border-slate-100 pt-1">
        LTV/CAC RATIO: 4.8x [OUTPERFORM]
      </div>
    </div>
  );

  const managementIllustration = (
    <div className="h-28 w-full bg-slate-50 border border-slate-200 p-3 flex flex-col justify-between select-none mt-2">
      <div className="flex justify-between text-[9px] font-mono text-gray-400">
        <span>BOARD GOVERNANCE</span>
        <span className="text-black font-bold">3 CORE PODS</span>
      </div>
      <div className="flex justify-around items-center h-14 relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#e2e2e2" strokeWidth="1" />
          <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="#e2e2e2" strokeWidth="1" />
        </svg>
        <div className="border border-brand-border bg-white text-black font-mono text-[7px] font-bold p-1 z-10 hover:border-brand-purple">CEO</div>
        <div className="border border-brand-border bg-white text-black font-mono text-[7px] font-bold p-1 z-10 hover:border-brand-purple">COO</div>
        <div className="border border-brand-border bg-white text-black font-mono text-[7px] font-bold p-1 z-10 hover:border-brand-purple">CFO</div>
      </div>
      <div className="text-[7px] font-mono text-gray-400 text-center border-t border-slate-100 pt-1">
        RESTRUCTURING BLUEPRINT: OK
      </div>
    </div>
  );

  const supportIllustration = (
    <div className="h-28 w-full border border-white/20 p-3 flex flex-col justify-between select-none mt-2 text-white bg-white/5">
      <div className="flex justify-between text-[9px] font-mono text-white/60">
        <span>SLA MONITOR</span>
        <span className="text-white font-bold">&lt; 12 MIN TR</span>
      </div>
      <div className="space-y-1.5 py-1.5">
        <div className="flex justify-between text-[7px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 items-center">
          <span>TICKET #4298</span>
          <span className="text-[6px] text-green-400 border border-green-400/30 px-1 font-bold">RESOLVED</span>
        </div>
        <div className="flex justify-between text-[7px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 items-center">
          <span>TICKET #4299</span>
          <span className="text-[6px] text-orange-400 border border-orange-400/30 px-1 font-bold animate-pulse">PROCESSING</span>
        </div>
      </div>
      <div className="text-[7px] font-mono text-white/40 text-center border-t border-white/10 pt-1">
        RESPONSE RATIO: 100% SLA RETENTION
      </div>
    </div>
  );

  return (
    <SectionWrapper background="gradient" spacing="default" animate>
      <div className="space-y-16">
        <div className="text-center md:text-left space-y-4">
          <AnimatedHeading level={2}>
            Architectural Solutions
          </AnimatedHeading>
          <motion.p
            variants={staggerItem}
            className="font-inter text-text-secondary text-sm md:text-base max-w-xl"
          >
            Precision-engineered frameworks designed to elevate every pillar of the modern enterprise.
          </motion.p>
        </div>

        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <ServiceCard
            title="Technology"
            description="Robust infrastructure and advanced cloud orchestration for seamless global operations."
            icon={Server}
            href="/services/technology"
            variant="large"
            tags={["Kubernetes Orchestration", "Sovereign AI Models", "Zero-Trust Mesh"]}
            status={{ label: "Mirroring Active [LON.04]", active: true }}
            illustration={techIllustration}
          />

          <ServiceCard
            title="Finance"
            description="Strategic capital allocation, risk modeling, and high-frequency data analysis frameworks."
            icon={Landmark}
            href="/services/finance"
            variant="standard"
            tags={["LBO Modeling", "Virtual CFO", "Tax Compliance"]}
            illustration={financeIllustration}
          />

          <ServiceCard
            title="Marketing"
            description="Data-driven global brand positioning."
            icon={Megaphone}
            href="/services/marketing"
            variant="standard"
            tags={["Global SEO", "Growth Funnels", "Brand Auditing"]}
            illustration={marketingIllustration}
          />

          <ServiceCard
            title="Management"
            description="Agile organizational design and leadership."
            icon={Building}
            href="/services/management"
            variant="standard"
            tags={["Lean Process Ops", "HR Recruitment", "Board Governance"]}
            illustration={managementIllustration}
          />

          <ServiceCard
            title="Support"
            description="24/7 global resolution centers and technical enablement."
            icon={Headphones}
            href="/services/support"
            variant="featured"
            tags={["SLA 4-Hour Response", "Sovereign Tier Desks", "Incident Audits"]}
            illustration={supportIllustration}
          />
        </motion.div>

        {/* CTA below services grid */}
        <motion.div variants={staggerItem} className="flex justify-center pt-8">
          <PremiumButton
            variant="secondary"
            size="md"
            href="/services"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Explore All Services
          </PremiumButton>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
