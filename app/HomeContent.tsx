"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Server,
  Landmark,
  Megaphone,
  Building,
  Headphones,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Layers,
} from "lucide-react";
import { StatsCounter } from "@/components/ui";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animation-variants";
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
    <div className="flex-1 bg-yorlex-canvas font-sans min-h-screen">
      <HeroSection />

      {/* Trusted-by marquee */}
      <section className="py-14 border-b border-yorlex-border">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-yorlex-muted">
            Trusted by global enterprises
          </p>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => {
                const Icon = logo.icon;
                return (
                  <div
                    key={idx}
                    className="shrink-0 flex items-center gap-2 text-yorlex-muted hover:text-yorlex-green transition-colors duration-300 font-semibold tracking-wide text-sm select-none"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{logo.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-yorlex-navy py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatsCounter value={250} suffix="+" label="Projects Completed" dark />
            <StatsCounter value={40} suffix="+" label="Enterprise Clients" dark />
            <StatsCounter value={25} suffix="+" label="Countries Reached" dark />
            <StatsCounter value={99} suffix="%" label="System Reliability" dark />
          </div>
        </div>
      </section>

      <ServicesBento />
      <QuoteSection />
      <FinalCta />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f2f6ea_0%,var(--color-yorlex-canvas)_55%)]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-7"
        >
          <motion.span variants={staggerItem} className="yorlex-badge">
            Strategic Partnerships
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] text-yorlex-ink"
          >
            Orchestrating <span className="text-yorlex-green">Digital</span> and
            Operational Excellence
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-base md:text-lg leading-relaxed max-w-xl text-yorlex-body"
          >
            For the global enterprise. We architect resilient systems and strategic
            frameworks that drive exponential growth and unmatched operational
            precision in complex environments.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact" className="yorlex-btn-primary px-7 py-3.5 text-sm">
              Schedule a Strategy Briefing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="yorlex-btn-secondary px-7 py-3.5 text-sm">
              Explore Solutions
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="yorlex-card p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-yorlex-muted">
                Operational Dashboard
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-yorlex-green">
                <span className="w-1.5 h-1.5 rounded-full bg-yorlex-green animate-pulse" />
                Live
              </span>
            </div>
            <div className="flex items-end gap-2 h-32">
              {[35, 55, 40, 70, 60, 85, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-yorlex-green-soft"
                  style={{ height: `${h}%` }}
                >
                  <div
                    className="w-full h-full rounded-t-md bg-yorlex-green/80"
                    style={{ opacity: 0.15 + i * 0.12 }}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-yorlex-border text-sm">
              <span className="text-yorlex-muted">Q1</span>
              <span className="text-yorlex-muted">Q2</span>
              <span className="text-yorlex-muted">Q3</span>
              <span className="text-yorlex-muted">Q4</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -left-4 -bottom-6 bg-white rounded-2xl shadow-[0_20px_40px_rgba(15,27,44,0.12)] border border-yorlex-border px-4 py-3"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-yorlex-muted">
              Operational Efficiency
            </p>
            <p className="text-2xl font-bold text-yorlex-green">98.4%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesBento() {
  const { ref, isInView } = useScrollReveal();

  const services = [
    {
      title: "Technology",
      description: "Enterprise cloud, AI orchestration, and zero-trust infrastructure.",
      icon: Server,
      href: "/services/technology",
      size: "large",
    },
    {
      title: "Finance",
      description: "Virtual CFO services, LBO modeling, and tax compliance.",
      icon: Landmark,
      href: "/services/finance",
      size: "standard",
    },
    {
      title: "Marketing",
      description: "Global SEO, growth funnels, and brand positioning.",
      icon: Megaphone,
      href: "/services/marketing",
      size: "standard",
    },
    {
      title: "Management",
      description: "Agile organizational design and board governance.",
      icon: Building,
      href: "/services/management",
      size: "standard",
    },
    {
      title: "Support",
      description: "24/7 global resolution centers and technical enablement.",
      icon: Headphones,
      href: "/services/support",
      size: "featured",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-yorlex-ink">
            Architectural Solutions
          </h2>
          <p className="text-base text-yorlex-body">
            Precision-engineered frameworks designed to elevate every pillar of the
            modern enterprise.
          </p>
        </motion.div>

        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            const gridSpan =
              svc.size === "large" ? "md:col-span-8" : svc.size === "featured" ? "md:col-span-12" : "md:col-span-4";
            const isFeatured = svc.size === "featured";

            return (
              <motion.div key={svc.title} variants={staggerItem} className={gridSpan}>
                <Link
                  href={svc.href}
                  className={`group block h-full p-8 transition-all duration-300 ${
                    isFeatured ? "yorlex-card-green" : "yorlex-card"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                      isFeatured ? "bg-white/15" : "bg-yorlex-green-soft"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isFeatured ? "text-white" : "text-yorlex-green-dark"}`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isFeatured ? "text-white" : "text-yorlex-ink"}`}>
                    {svc.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isFeatured ? "text-white/80" : "text-yorlex-body"}`}>
                    {svc.description}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 text-sm font-semibold mt-5 ${
                      isFeatured ? "text-white" : "text-yorlex-green"
                    }`}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={staggerItem} className="flex justify-center pt-4">
          <Link href="/services" className="yorlex-btn-secondary px-7 py-3.5 text-sm">
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="bg-yorlex-navy py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
        <span className="text-6xl font-bold text-yorlex-green leading-none">&ldquo;</span>
        <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
          Yorlex hasn&apos;t just improved our efficiency. It&apos;s fundamentally
          transformed how we perceive business value.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yorlex-green-soft flex items-center justify-center text-yorlex-green-dark font-bold text-sm">
            SC
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">Sarah Chen</p>
            <p className="text-xs text-white/50">CTO, Global Logistics Corp</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const points = [
    { icon: Gauge, label: "45% faster operational cycles" },
    { icon: ShieldCheck, label: "Military-grade compliance" },
    { icon: Layers, label: "Scales from 50 to 50,000 seats" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[28px] bg-yorlex-navy px-8 py-14 md:p-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Upgrade Your Enterprise?
            </h2>
            <p className="text-white/60 max-w-md">
              Join 2,000+ leading enterprises that have already migrated their core
              operations to Yorlex.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="yorlex-btn-primary px-7 py-3.5 text-sm">
                Start Free Consultation
              </Link>
              <Link href="/contact" className="yorlex-btn-outline-dark px-7 py-3.5 text-sm">
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                  <Icon className="h-5 w-5 text-yorlex-green shrink-0" />
                  <span className="text-sm text-white/85">{p.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
