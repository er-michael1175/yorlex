"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  TrendingDown,
  Users,
  Unplug,
  Cpu,
  FileWarning,
  Expand,
} from "lucide-react";
import { StatsCounter } from "@/components/ui";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animation-variants";
import { useScrollReveal } from "@/components/hooks";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HomeContent() {
  const partnerLogos = [
    { label: "Cloudmesh" },
    { label: "Fintex" },
    { label: "Apex Manufacturing" },
    { label: "Vox Media" },
    { label: "Syscorp" },
    { label: "ProSupport" },
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
            <div className="flex gap-14 animate-marquee whitespace-nowrap">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center gap-2.5 text-yorlex-muted hover:text-yorlex-ink transition-colors duration-300 select-none"
                >
                  <span className="w-7 h-7 rounded-md bg-yorlex-green-soft flex items-center justify-center text-yorlex-green-dark font-bold text-xs shrink-0">
                    {logo.label.charAt(0)}
                  </span>
                  <span className="font-semibold tracking-wide text-sm uppercase">
                    {logo.label}
                  </span>
                </div>
              ))}
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

      <ChallengesSection />
      <ServicesBento />
      <QuoteSection />
      <FinalCta />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f2f6ea_0%,var(--color-yorlex-canvas)_55%)]">
      <div
        className="absolute inset-y-0 right-0 w-full md:w-3/4 opacity-50 md:opacity-80 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 55%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 55%)",
        }}
      >
        <img
          src="/images/home/hero-skyline.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f2f6ea_0%,var(--color-yorlex-canvas)_55%)] opacity-60 md:opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-5 md:space-y-7"
        >
          <motion.span variants={staggerItem} className="yorlex-badge">
            Strategic Partnerships
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="text-3xl md:text-6xl font-bold tracking-tight leading-[1.08] text-yorlex-ink"
          >
            Run Your Business.
            <br />
            <span className="text-yorlex-green">We&apos;ll Run the Rest.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-base md:text-lg leading-relaxed max-w-xl text-yorlex-body"
          >
            Technology, finance, marketing, and management — delivered by one
            partner embedded in your operations, trusted across 25 countries to
            move at enterprise speed.
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

          <motion.div variants={staggerItem} className="flex items-center gap-3 pt-1 md:pt-3">
            <div className="flex -space-x-2.5">
              {["A", "B", "C", "D"].map((letter) => (
                <div
                  key={letter}
                  className="w-8 h-8 rounded-full bg-yorlex-green-soft border-2 border-yorlex-canvas flex items-center justify-center text-yorlex-green-dark font-bold text-xs"
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-sm text-yorlex-muted">
              <span className="font-semibold text-yorlex-ink">2,000+ enterprises</span> already trust Yorlex
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block relative"
        >
          <div className="yorlex-card p-6 md:p-8 pb-14 md:pb-16 shadow-[0_30px_60px_-15px_rgba(15,27,44,0.3)]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-yorlex-muted">
                Operational Dashboard
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-yorlex-green">
                <span className="w-1.5 h-1.5 rounded-full bg-yorlex-green animate-pulse" />
                Live
              </span>
            </div>
            <div className="flex items-end gap-3 h-32">
              {[45, 65, 78, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-yorlex-green-soft"
                  style={{ height: `${h}%` }}
                >
                  <div
                    className="w-full h-full rounded-t-md bg-yorlex-green/80"
                    style={{ opacity: 0.4 + i * 0.2 }}
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

function ChallengesSection() {
  const { ref, isInView } = useScrollReveal();

  const challenges = [
    {
      title: "Rising Operational Costs",
      description: "Manual processes and fragmented vendors quietly inflate overhead every quarter.",
      icon: TrendingDown,
    },
    {
      title: "Hiring & Retaining Talent",
      description: "Building an in-house team across tech, finance, and marketing takes months you don't have.",
      icon: Users,
    },
    {
      title: "Disconnected Systems",
      description: "Your CRM, accounting, and marketing tools don't talk to each other, so nothing adds up.",
      icon: Unplug,
    },
    {
      title: "Slow Technology Adoption",
      description: "Legacy workflows and manual reporting slow down decisions that should take minutes.",
      icon: Cpu,
    },
    {
      title: "Compliance & Governance",
      description: "Tax, data, and regulatory requirements shift constantly, and gaps are expensive to fix.",
      icon: FileWarning,
    },
    {
      title: "Scaling Operations",
      description: "What works with 10 clients breaks at 100 without the right processes in place.",
      icon: Expand,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-yorlex-canvas-alt border-b border-yorlex-border">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-yorlex-ink">
            Every Growing Business Faces These Challenges
          </h2>
          <p className="text-base text-yorlex-body">
            The problems don&apos;t announce themselves until they&apos;re expensive. We&apos;ve built Yorlex to close these gaps before they slow you down.
          </p>
        </motion.div>

        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {challenges.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={staggerItem}
                className="bg-white rounded-2xl border border-yorlex-border p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-yorlex-green-soft flex items-center justify-center text-yorlex-green-dark shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-yorlex-ink">{c.title}</h3>
                <p className="text-sm text-yorlex-body leading-relaxed">{c.description}</p>
              </motion.div>
            );
          })}
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
      image: "/images/services/technology-hero-bg.jpg",
    },
    {
      title: "Finance",
      description: "Virtual CFO services, LBO modeling, and tax compliance.",
      icon: Landmark,
      href: "/services/finance",
      size: "standard",
      image: "/images/services/finance.jpg",
    },
    {
      title: "Marketing",
      description: "Global SEO, growth funnels, and brand positioning.",
      icon: Megaphone,
      href: "/services/marketing",
      size: "half",
      image: "/images/services/marketing.jpg",
    },
    {
      title: "Management",
      description: "Agile organizational design and board governance.",
      icon: Building,
      href: "/services/management",
      size: "half",
      image: "/images/services/management.jpg",
    },
    {
      title: "Support",
      description: "24/7 global resolution centers and technical enablement.",
      icon: Headphones,
      href: "/services/support",
      size: "featured",
      image: "/images/services/support.jpg",
    },
  ];

  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-yorlex-ink">
            Five Disciplines. One Accountable Partner.
          </h2>
          <p className="text-base text-yorlex-body">
            Each discipline is staffed by specialists, measured against your KPIs,
            and delivered under a single service agreement.
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
              svc.size === "large"
                ? "md:col-span-8"
                : svc.size === "featured"
                  ? "md:col-span-12"
                  : svc.size === "half"
                    ? "md:col-span-6"
                    : "md:col-span-4";
            const isFeatured = svc.size === "featured";

            return (
              <motion.div key={svc.title} variants={staggerItem} className={gridSpan}>
                <Link
                  href={svc.href}
                  className={`group block h-full overflow-hidden transition-all duration-300 ${
                    isFeatured ? "yorlex-card-green" : "yorlex-card"
                  }`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={svc.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isFeatured ? "bg-yorlex-green/70" : "bg-yorlex-navy/25"
                      }`}
                    />
                  </div>

                  <div className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                        isFeatured ? "bg-white/15" : "bg-yorlex-green-soft"
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isFeatured ? "text-yorlex-ink" : "text-yorlex-green-dark"}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-yorlex-ink">
                      {svc.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isFeatured ? "text-yorlex-ink/70" : "text-yorlex-body"}`}>
                      {svc.description}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-sm font-semibold mt-5 ${
                        isFeatured ? "text-yorlex-ink" : "text-yorlex-green"
                      }`}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
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
  const testimonials = [
    {
      quote:
        "We went from twelve vendors to one, and cut incident response time in half — inside a single quarter.",
      initials: "SC",
      name: "Sarah Chen",
      role: "CTO, Global Logistics Corp",
    },
    {
      quote:
        "Yorlex closed our books four days faster and caught a compliance gap our previous auditor had missed for two years.",
      initials: "MW",
      name: "Marcus Webb",
      role: "VP of Finance, Fintex",
    },
    {
      quote:
        "We scaled from three regional plants to twelve without adding a single person to our ops team.",
      initials: "PN",
      name: "Priya Nair",
      role: "Head of Operations, Apex Manufacturing",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[active];

  return (
    <section className="bg-yorlex-navy py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-5xl font-bold text-yorlex-green leading-none">&ldquo;</span>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-5 mt-5"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug min-h-16 md:min-h-20 flex items-center justify-center">
              {current.quote}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yorlex-green-soft flex items-center justify-center text-yorlex-green-dark font-bold text-sm shrink-0">
                {current.initials}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">{current.name}</p>
                <p className="text-xs text-white/50">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setActive(idx)}
              aria-label={`Show testimonial from ${t.name}`}
              className="p-2.5 -m-2.5 flex items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  idx === active ? "w-6 bg-yorlex-green" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const points = [
    { icon: Gauge, label: "45% faster operational cycles" },
    { icon: ShieldCheck, label: "NDA-backed data confidentiality" },
    { icon: Layers, label: "Scales from 50 to 50,000 seats" },
  ];

  const whatsappUrl = getWhatsAppUrl("Hi Yorlex, I'd like to talk to sales.");
  const salesHref = whatsappUrl ?? "/contact";

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[28px] bg-yorlex-navy px-8 py-10 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Upgrade Your Enterprise?
            </h2>
            <p className="text-white/60 max-w-md">
              2,000+ enterprises already run their technology, finance, and
              operations through Yorlex — see what changes when yours does too.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="yorlex-btn-primary px-7 py-3.5 text-sm">
                Start Free Consultation
              </Link>
              <Link
                href={salesHref}
                target={whatsappUrl ? "_blank" : undefined}
                rel={whatsappUrl ? "noopener noreferrer" : undefined}
                className="yorlex-btn-outline-dark px-7 py-3.5 text-sm"
              >
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="grid gap-3">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5">
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
