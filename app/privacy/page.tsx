"use client";

import React, { useState, useEffect } from "react";
import { Shield, Eye, Edit, Trash2, Ban, Mail, ArrowRight, FileText, Check, Lock, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Interactive Data Security Simulator for Hero Right Side
function HeroSecuritySimulator() {
  const [activeTab, setActiveTab] = useState<"encryption" | "compliance" | "silos">("encryption");

  const specs = {
    encryption: {
      name: "AES-256 Data Encryption",
      status: "SECURELY ENCRYPTED",
      protocol: "SSL/TLS v1.3 Handshake",
      keys: "Ephemeral HSM Keys",
      color: "text-green-400",
    },
    compliance: {
      name: "Regulatory Frameworks",
      status: "GDPR & CCPA COMPLIANT",
      protocol: "Standard Contract Clauses",
      keys: "Sovereign Silos Active",
      color: "text-brand-purple",
    },
    silos: {
      name: "Database siloing",
      status: "COMPARTMENTALIZED",
      protocol: "Zero-Trust Authorization",
      keys: "Multi-Signature Gateway",
      color: "text-blue-400",
    },
  };

  return (
    <div className="w-full bg-slate-950 border border-brand-border-light/10 p-6 font-mono text-[10px] text-brand-purple relative overflow-hidden select-none shadow-2xl min-h-80 flex flex-col justify-between">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-brand-border-light/10 pb-3 mb-3">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[9px] text-gray-550 font-bold uppercase tracking-widest">
          YORLEX // SECURE_PORTAL
        </span>
      </div>

      {/* Selectors */}
      <div className="flex gap-1.5 border border-brand-border-light/5 bg-slate-900/40 p-1.5 mb-3 relative">
        {(["encryption", "compliance", "silos"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-1.5 text-[8px] font-bold uppercase tracking-wider transition-colors duration-150 rounded-none relative z-10 text-gray-555 hover:text-white"
          >
            <span className={activeTab === tab ? "text-white" : ""}>{tab}</span>
            {activeTab === tab && (
              <motion.div
                layoutId="activeSecurityTab"
                className="absolute inset-0 bg-brand-purple -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col gap-2.5 justify-center">
        <div className="text-[8px] text-gray-500 uppercase tracking-widest font-bold mb-1 flex justify-between">
          <span>// CRYPTOGRAPHIC TUNNEL ACTIVE</span>
          <span className={specs[activeTab].color}>● SIGNAL_OK</span>
        </div>

        <div className="bg-slate-900/40 border border-brand-border-light/5 p-3 flex flex-col gap-1.5 min-h-[110px] justify-center">
          <div className="text-white font-bold text-[10px] uppercase">
            {specs[activeTab].name}
          </div>
          <div className="grid grid-cols-2 gap-2 text-gray-400 mt-1 font-mono text-[8px] leading-relaxed">
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-550">TUNNEL STATUS</span>
              <span className={`font-bold mt-0.5 ${specs[activeTab].color}`}>{specs[activeTab].status}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-550">SECURITY PROTOCOL</span>
              <span className="font-bold text-white mt-0.5">{specs[activeTab].protocol}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[7px] text-gray-555">GATEWAY KEYING</span>
              <span className="font-bold text-white mt-0.5">{specs[activeTab].keys}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[7px] text-gray-450 border-t border-brand-border-light/10 pt-2">
        DATA_OWNERSHIP: CLIENT_RETAINED // SLA_RETENTION: STRICT
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("section-1");

  const sections = [
    { id: "section-1", name: "1. Introduction" },
    { id: "section-2", name: "2. Information We Collect" },
    { id: "section-3", name: "3. How We Use Information" },
    { id: "section-4", name: "4. Cookies & Analytics" },
    { id: "section-5", name: "5. Data Protection" },
    { id: "section-6", name: "6. Information Sharing" },
    { id: "section-7", name: "7. Data Retention" },
    { id: "section-8", name: "8. Your Rights" },
    { id: "section-9", name: "9. Third-Party Services" },
    { id: "section-10", name: "10. Children's Privacy" },
    { id: "section-11", name: "11. Policy Updates" },
    { id: "section-12", name: "12. Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex-1 bg-brand-bg font-sans">
      {/* 1. Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="min-h-[calc(100vh-64px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <FileText className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555 uppercase tracking-widest">
                Compliance &amp; Legal
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black uppercase tracking-tight">
              Privacy Policy
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              At Yorlex, we value your privacy and are committed to protecting your personal and business information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our website or use our services.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Contact Us
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="mailto:support@yorlex.com"
              >
                Email Our Privacy Team
              </PremiumButton>
            </div>
            <div className="font-mono text-[9px] text-gray-400 mt-2">
              Last Updated: June 2026
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroSecuritySimulator />
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Document Content & TOC Grid */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="md:col-span-3 sticky top-28 hidden md:block">
            <div className="bg-white p-6 border border-brand-border rounded-none shadow-sm">
              <h3 className="font-inter font-bold text-[10px] text-black uppercase tracking-wider mb-4 border-b border-brand-border-light pb-2">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-2">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left font-plus-jakarta text-xs font-bold uppercase py-2 pl-3 border-l-2 transition-all duration-300 ${
                      activeSection === sec.id
                        ? "border-brand-purple text-brand-purple bg-brand-purple/5"
                        : "border-brand-border-light text-gray-405 hover:text-black hover:border-black"
                    }`}
                  >
                    {sec.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Document Body */}
          <article className="md:col-span-9 max-w-3xl">
            <div className="prose prose-slate max-w-none text-gray-600 font-inter text-xs md:text-sm leading-relaxed space-y-12">
              
              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  1. Introduction
                </h2>
                <p>
                  Yorlex is committed to maintaining the confidentiality, integrity, and security of the information entrusted to us. By accessing our website or using our services, you agree to the practices described in this Privacy Policy.
                </p>
                <div className="bg-brand-bg p-5 border border-brand-border rounded-none flex items-start gap-4 shadow-sm mt-3">
                  <ShieldCheck className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-500 font-inter leading-relaxed">
                    All data processing pipelines operate under a strict zero-trust operational model, compartmentalizing information flows across Tech, Finance, Marketing, and Operations.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  2. Information We Collect
                </h2>
                <p>
                  We may collect the following types of information necessary for corporate audit engagements and service deliveries:
                </p>
                
                <div className="space-y-4 mt-4">
                  <div className="bg-brand-bg border border-brand-border p-5 rounded-none">
                    <strong className="text-black text-[11px] uppercase tracking-wider block mb-2 font-mono">// Personal Information</strong>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-500 font-mono">
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Full Name</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Email Address</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Phone Number</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Company Name &amp; Job Title</li>
                    </ul>
                  </div>

                  <div className="bg-brand-bg border border-brand-border p-5 rounded-none">
                    <strong className="text-black text-[11px] uppercase tracking-wider block mb-2 font-mono">// Business Information</strong>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-500 font-mono">
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Project Requirements</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Business Objectives</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Service Preferences</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Shared financial/operational logs</li>
                    </ul>
                  </div>

                  <div className="bg-brand-bg border border-brand-border p-5 rounded-none">
                    <strong className="text-black text-[11px] uppercase tracking-wider block mb-2 font-mono">// Technical Information</strong>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-500 font-mono">
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> IP Address &amp; Device Info</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Browser Type &amp; Operating System</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Website Usage telemetry data</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Cookies and Session indicators</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  3. How We Use Your Information
                </h2>
                <p>
                  Your information is utilized strictly to coordinate proposals, deliver outsourced solutions, and fulfill legal requirements:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-500">
                  <li>Respond to project inquiries, brief requests, and support tickets</li>
                  <li>Deliver requested development, bookkeeping, and consulting services</li>
                  <li>Prepare scope proposals, quotation reports, and service SLAs</li>
                  <li>Improve our website performance, core web vitals, and tools</li>
                  <li>Communicate scheduled project milestones and release updates</li>
                  <li>Maintain web security frameworks and prevent DDoS or unauthorized actions</li>
                  <li>Meet local corporate registry and fiduciary obligations</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  4. Cookies &amp; Analytics
                </h2>
                <p>
                  Our website may use cookies and analytics tools to improve website performance, understand visitor behavior, remember user preferences, and measure marketing effectiveness.
                </p>
                <p>
                  Users can disable cookies through their browser settings, although some website features may not function properly.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  5. Data Protection
                </h2>
                <p>
                  Yorlex implements appropriate technical and organizational measures to protect your information, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  {[
                    "Secure cloud servers & databases",
                    "SSL/TLS data transit encryption",
                    "Role-based CRM access controls",
                    "Database siloing & compartmentalization",
                    "Regular external security audits",
                    "Strict employee NDA compliance",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-brand-bg border border-brand-border-light rounded-none">
                      <Lock className="h-4 w-4 text-brand-purple shrink-0" />
                      <span className="font-mono text-[9px] uppercase text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  6. Information Sharing
                </h2>
                <p>
                  We do not sell, rent, or lease your personal or business data to third-party brokers.
                </p>
                <p>
                  Information may be shared only with:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-500">
                  <li>Authorized partners and consultants bound by strict data protection agreements</li>
                  <li>Trusted third-party service providers necessary to host architectures or process transactions</li>
                  <li>Government or regulatory authorities when compelled by applicable jurisdiction laws</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  7. Data Retention
                </h2>
                <p>
                  We retain personal and business information only for as long as necessary to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-500">
                  <li>Provide requested services and support configurations</li>
                  <li>Fulfill mutual contractual milestones and agreements</li>
                  <li>Meet fiduciary, tax, and auditing regulatory records requirements</li>
                  <li>Resolve business disputes and maintain compliance logs</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  8. Your Rights
                </h2>
                <p>
                  Depending on applicable data privacy laws (such as GDPR or CCPA), you may have the right to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div className="flex items-center gap-3 p-4 border border-brand-border bg-white rounded-none">
                    <Eye className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                    <span className="font-mono text-[9px] uppercase text-black font-bold">Access personal data</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border bg-white rounded-none">
                    <Edit className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                    <span className="font-mono text-[9px] uppercase text-black font-bold">Correct inaccurate info</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border bg-white rounded-none">
                    <Trash2 className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                    <span className="font-mono text-[9px] uppercase text-black font-bold">Request data erasure</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border bg-white rounded-none">
                    <Ban className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                    <span className="font-mono text-[9px] uppercase text-black font-bold">Object to processing</span>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  9. Third-Party Services
                </h2>
                <p>
                  Our website may include links to third-party websites or integrate third-party services such as analytics, payment processors, cloud hosting, or communication platforms.
                </p>
                <p>
                  Yorlex is not responsible for the privacy practices of external websites or services.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  10. Children's Privacy
                </h2>
                <p>
                  Our services are intended for businesses and individuals aged 18 years or older. We do not knowingly collect personal information from children.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  11. Updates to This Policy
                </h2>
                <p>
                  This Privacy Policy may be updated periodically to reflect changes in our business practices, legal requirements, or services. The updated version will be posted on this page with the revised "Last Updated" date.
                </p>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black uppercase border-b border-brand-border pb-2">
                  12. Contact Us
                </h2>
                <p>
                  If you have any questions regarding this Privacy Policy or how your information is handled, please contact us.
                </p>
                
                <div className="bg-brand-bg border border-brand-border p-6 rounded-none space-y-3 font-mono text-xs text-gray-550 mt-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Yorlex Enterprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Email: support@yorlex.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Address: Yorlex Legal Towers, Financial District, SF &amp; London</span>
                  </div>
                </div>
              </section>

            </div>
          </article>

        </div>
      </SectionWrapper>

      {/* 3. Still Have Questions CTA */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-4">// COMPLIANCE SUPPORT</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Questions About Your Privacy?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We're committed to transparency and protecting your information. If you have any concerns or requests regarding your data, our team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Contact Us
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="mailto:support@yorlex.com"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Email Our Privacy Team
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
