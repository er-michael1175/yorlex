"use client";

import React, { useState, useEffect } from "react";
import { Shield, Eye, Edit, Trash2, Ban, Mail, ArrowRight, FileText, Check, Lock, ShieldCheck, Globe, Phone, MapPin } from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// Plain-language summary of our real privacy commitments for the hero
function PrivacyCommitments() {
  const commitments = [
    { icon: Ban, text: "We never sell or rent your data to third parties" },
    { icon: Eye, text: "You can request a copy of your data at any time" },
    { icon: Trash2, text: "You can request deletion of your data at any time" },
    { icon: Mail, text: "Privacy requests are answered within 5 business days" },
  ];

  return (
    <div className="w-full bg-yorlex-navy rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
        Our Commitments
      </span>
      <div className="mt-5 space-y-4">
        {commitments.map((c) => (
          <div key={c.text} className="flex items-start gap-3">
            <c.icon className="h-4.5 w-4.5 text-yorlex-green shrink-0 mt-0.5" />
            <span className="text-sm text-white/80 leading-relaxed">{c.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("section-1");

  const whatsappUrl = getWhatsAppUrl("Hi Yorlex, I have a question about your Privacy Policy.");
  const contactHref = whatsappUrl ?? "/contact";

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
            src="/images/privacy/privacy-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute inset-0 bg-brand-bg opacity-20 pointer-events-none" />

        <div className="lg:hidden absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/privacy/privacy-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <FileText className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555">
                Compliance &amp; Legal
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black max-lg:text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="font-inter text-gray-650 max-lg:text-white/90 text-sm leading-relaxed max-w-xl">
              At Yorlex, we value your privacy and are committed to protecting your personal and business information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our website or use our services.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <PremiumButton
                variant="gradient"
                size="md"
                href={contactHref}
                target={whatsappUrl ? "_blank" : undefined}
                rel={whatsappUrl ? "noopener noreferrer" : undefined}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Contact Us
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="mailto:contact@yorlex.com"
                className="max-lg:text-white max-lg:border-white/30"
              >
                Email Our Privacy Team
              </PremiumButton>
            </div>
            <div className="font-mono text-[9px] text-gray-400 max-lg:text-white/70 mt-2">
              Last Updated: June 2026
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <PrivacyCommitments />
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Document Content & TOC Grid */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="md:col-span-3 sticky top-28 hidden md:block">
            <div className="bg-white p-6 border border-brand-border rounded-2xl shadow-sm">
              <h3 className="font-inter font-bold text-[10px] text-black mb-4 border-b border-brand-border-light pb-2">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-2">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left font-plus-jakarta text-xs font-bold py-2 pl-3 border-l-2 transition-all duration-300 ${
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
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  1. Introduction
                </h2>
                <p>
                  Yorlex is committed to maintaining the confidentiality, integrity, and security of the information entrusted to us. By accessing our website or using our services, you agree to the practices described in this Privacy Policy.
                </p>
                <div className="bg-brand-bg p-5 border border-brand-border rounded-2xl flex items-start gap-4 shadow-sm mt-3">
                  <ShieldCheck className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-500 font-inter leading-relaxed">
                    All data processing pipelines operate under a strict zero-trust operational model, compartmentalizing information flows across Tech, Finance, Marketing, and Operations.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  2. Information We Collect
                </h2>
                <p>
                  We may collect the following types of information necessary for corporate audit engagements and service deliveries:
                </p>
                
                <div className="space-y-4 mt-4">
                  <div className="bg-brand-bg border border-brand-border p-5 rounded-2xl">
                    <strong className="text-black text-[11px] block mb-2 font-mono">// Personal Information</strong>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-500 font-mono">
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Full Name</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Email Address</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Phone Number</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Company Name &amp; Job Title</li>
                    </ul>
                  </div>

                  <div className="bg-brand-bg border border-brand-border p-5 rounded-2xl">
                    <strong className="text-black text-[11px] block mb-2 font-mono">// Business Information</strong>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-500 font-mono">
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Project Requirements</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Business Objectives</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Service Preferences</li>
                      <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand-purple" /> Shared financial/operational logs</li>
                    </ul>
                  </div>

                  <div className="bg-brand-bg border border-brand-border p-5 rounded-2xl">
                    <strong className="text-black text-[11px] block mb-2 font-mono">// Technical Information</strong>
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
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
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
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
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
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
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
                    <div key={idx} className="flex items-center gap-2 p-3 bg-brand-bg border border-brand-border-light rounded-2xl">
                      <Lock className="h-4 w-4 text-brand-purple shrink-0" />
                      <span className="font-mono text-[9px] text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
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
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
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
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  8. Your Rights
                </h2>
                <p>
                  Depending on applicable data privacy laws — including India's Digital Personal Data Protection Act, 2023, and international frameworks such as GDPR or CCPA where relevant — you may have the right to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div className="flex items-center gap-3 p-4 border border-brand-border bg-white rounded-2xl">
                    <Eye className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                    <span className="font-mono text-[9px] text-black font-bold">Access personal data</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border bg-white rounded-2xl">
                    <Edit className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                    <span className="font-mono text-[9px] text-black font-bold">Correct inaccurate info</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border bg-white rounded-2xl">
                    <Trash2 className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                    <span className="font-mono text-[9px] text-black font-bold">Request data erasure</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border bg-white rounded-2xl">
                    <Ban className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                    <span className="font-mono text-[9px] text-black font-bold">Object to processing</span>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
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
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  10. Children's Privacy
                </h2>
                <p>
                  Our services are intended for businesses and individuals aged 18 years or older. We do not knowingly collect personal information from children.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  11. Updates to This Policy
                </h2>
                <p>
                  This Privacy Policy may be updated periodically to reflect changes in our business practices, legal requirements, or services. The updated version will be posted on this page with the revised "Last Updated" date.
                </p>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  12. Contact Us
                </h2>
                <p>
                  If you have any questions regarding this Privacy Policy or how your information is handled, please contact us.
                </p>
                
                <div className="bg-brand-bg border border-brand-border p-6 rounded-2xl space-y-3 font-mono text-xs text-gray-550 mt-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Yorlex</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Email: contact@yorlex.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Phone: +91 92702 92704</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Address: First Floor, GDA Tower, Golghar, Gorakhpur - 273001, Uttar Pradesh, India</span>
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
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-4">// COMPLIANCE SUPPORT</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Questions About Your Privacy?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We're committed to transparency and protecting your information. If you have any concerns or requests regarding your data, our team is here to help.
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
              Contact Us
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="mailto:contact@yorlex.com"
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
