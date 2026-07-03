"use client";

import React, { useState, useEffect } from "react";
import { Shield, Eye, Edit, Trash2, Ban, Mail, ArrowRight, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("section-1");

  const sections = [
    { id: "section-1", name: "1. Introduction & Scope" },
    { id: "section-2", name: "2. Data Collection Protocols" },
    { id: "section-3", name: "3. Use of Information" },
    { id: "section-4", name: "4. Global Data Transfers" },
    { id: "section-5", name: "5. Your Privacy Rights" },
    { id: "section-6", name: "6. Contact & DPO" },
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
    <div className="flex-1 bg-brand-bg pt-32 pb-24 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-16 border-b border-brand-border pb-8 flex flex-col gap-4 md:flex-row md:items-end justify-between">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <FileText className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
                Legal Operations
              </span>
            </div>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-black text-black uppercase leading-tight tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <div className="text-gray-500 font-inter text-xs md:text-sm max-w-sm md:text-right">
            <p className="font-bold text-black uppercase tracking-wider">Effective Date: October 24, 2024</p>
            <p className="text-[10px] mt-1 text-gray-400">Yorlex Enterprise Global Data Protection Framework</p>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Sidebar Navigation */}
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
                        : "border-brand-border-light text-gray-400 hover:text-black hover:border-black"
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
            <div className="prose prose-slate max-w-none text-gray-600 font-inter text-sm md:text-base leading-relaxed space-y-12">
              
              <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed italic border-l-4 border-brand-purple pl-4">
                At Yorlex Enterprise, we are committed to maintaining the highest standards of data privacy and security. This Privacy Policy outlines our comprehensive approach to safeguarding the personal information entrusted to us by our clients, partners, and stakeholders across our global operations. We rigorously adhere to international data protection frameworks, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              </p>

              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2">
                  1. Introduction & Scope
                </h2>
                <p>
                  This Privacy Policy applies to all personal data collected, processed, and stored by Yorlex Enterprise and its global subsidiaries. It encompasses data gathered through our digital platforms, enterprise software solutions, client engagements, and operational processes. By interacting with Yorlex, you acknowledge the terms of this authoritative framework.
                </p>
                
                <div className="bg-white p-6 border border-brand-border rounded-none flex items-start gap-4 shadow-sm">
                  <div className="p-3 bg-brand-purple/5 border border-brand-purple text-brand-purple shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-plus-jakarta font-bold text-sm text-black uppercase mb-1">
                      Zero-Trust Security Model
                    </h4>
                    <p className="text-xs text-gray-500">
                      All data processing environments operate under a zero-trust architecture, ensuring continuous verification and minimal exposure.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2">
                  2. Data Collection Protocols
                </h2>
                <p>
                  We employ precise and transparent data collection methodologies. Information is categorized strictly by operational necessity:
                </p>
                
                <ul className="list-none space-y-3 pl-0">
                  <li className="flex gap-3 items-start border-b border-brand-border-light pb-2">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-none mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-black font-semibold">Identity Data:</strong> Legal names, corporate affiliations, and verifiable identifiers.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start border-b border-brand-border-light pb-2">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-none mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-black font-semibold">Contact Data:</strong> Secure communication channels, encrypted email addresses, and physical locations.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start border-b border-brand-border-light pb-2">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-none mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-black font-semibold">Technical Data:</strong> Network telemetry, access logs, cryptographic handshakes, and platform interaction metrics.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start border-b border-brand-border-light pb-2">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-none mt-2 shrink-0"></span>
                    <span>
                      <strong className="text-black font-semibold">Financial Data:</strong> Transaction ledgers and encrypted payment tokens necessary for corporate engagements.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2">
                  3. Use of Information
                </h2>
                <p>
                  Yorlex strictly limits the utilization of personal data to explicit, legitimate business purposes. We do not engage in unauthorized secondary processing or the commercialization of client data.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 border border-brand-border bg-white rounded-none shadow-sm">
                    <h4 className="font-plus-jakarta font-bold text-sm text-black uppercase mb-2">
                      Service Execution
                    </h4>
                    <p className="text-xs text-gray-500">
                      To deliver our enterprise solutions, manage client portfolios, and execute contractual obligations with uncompromising precision.
                    </p>
                  </div>
                  <div className="p-6 border border-brand-border bg-white rounded-none shadow-sm">
                    <h4 className="font-plus-jakarta font-bold text-sm text-black uppercase mb-2">
                      Risk Management
                    </h4>
                    <p className="text-xs text-gray-500">
                      To conduct rigorous security audits, fraud prevention analysis, and ensure compliance with international regulatory standards.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2">
                  4. Global Data Transfers
                </h2>
                <p>
                  As a global entity, Yorlex operates infrastructure across multiple jurisdictions. Any cross-border transfer of personal data is executed under stringent legal mechanisms, specifically relying on Standard Contractual Clauses (SCCs) and binding corporate rules to guarantee uniform protection regardless of geographic location.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2">
                  5. Your Privacy Rights
                </h2>
                <p>
                  Under applicable privacy frameworks (including GDPR), you retain sovereign control over your personal data. You have the absolute right to:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 border border-brand-border-light bg-white rounded-none">
                    <Eye className="h-5 w-5 text-brand-purple shrink-0" />
                    <span className="text-xs font-semibold text-black uppercase tracking-wider">Access Processed Data</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border-light bg-white rounded-none">
                    <Edit className="h-5 w-5 text-brand-purple shrink-0" />
                    <span className="text-xs font-semibold text-black uppercase tracking-wider">Demand Rectification</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border-light bg-white rounded-none">
                    <Trash2 className="h-5 w-5 text-brand-purple shrink-0" />
                    <span className="text-xs font-semibold text-black uppercase tracking-wider">Request Data Erasure</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 border border-brand-border-light bg-white rounded-none">
                    <Ban className="h-5 w-5 text-brand-purple shrink-0" />
                    <span className="text-xs font-semibold text-black uppercase tracking-wider">Object to Processing</span>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2">
                  6. Contact & DPO
                </h2>
                <p>
                  For all inquiries regarding this policy or to exercise your privacy rights, please contact our Global Data Protection Officer (DPO).
                </p>

                <div className="bg-black text-white p-8 border border-black rounded-none flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <div>
                    <h4 className="font-plus-jakarta font-bold text-lg uppercase mb-1">Office of the DPO</h4>
                    <p className="text-xs text-gray-400 font-inter">Yorlex Enterprise Global Headquarters</p>
                  </div>
                  <a
                    href="mailto:privacy@yorlex.com"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-inter font-bold text-[10px] uppercase tracking-wider hover:bg-brand-purple hover:text-white transition-colors duration-200 rounded-none border border-white hover:border-brand-purple group/btn"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    Contact Privacy Team
                    <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </section>

            </div>
          </article>

        </div>

      </div>
    </div>
  );
}

