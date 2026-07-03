"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("acc1");
  const [activeSection, setActiveSection] = useState<string>("compliance");

  const categories = [
    { id: "compliance", name: "Compliance & Security" },
    { id: "integration", name: "Integration Timelines" },
  ];

  const faqs = [
    {
      id: "acc1",
      section: "compliance",
      q: "What data residency frameworks do you guarantee globally?",
      a: "Yorlex operates under a strict sovereign data architecture. We guarantee localized data residency compliant with GDPR, CCPA, and regional mandates across 42 jurisdictions, utilizing isolated Tier-4 data centers for enterprise clients.",
    },
    {
      id: "acc2",
      section: "compliance",
      q: "How is intellectual property protected during cross-disciplinary audits?",
      a: "We employ cryptographic siloing. Information flows between our Technology, Finance, and Marketing teams are restricted by mandatory zero-trust protocols and multi-signature authorization, ensuring your IP remains compartmentalized even during holistic strategy formulations.",
    },
    {
      id: "acc3",
      section: "integration",
      q: "What is the standard SLA for deploying legacy system modernization?",
      a: "Standard SLA for a Phase 1 deployment (core infrastructure mirroring) is strictly 45 days. Complete legacy transition, assuming standard monolithic architecture, requires 120 days guided by our proprietary phased-cutover methodology to ensure zero operational downtime.",
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex-1 bg-brand-bg pt-20 md:pt-28 pb-16 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10 md:gap-12">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
            <HelpCircle className="h-4 w-4 text-brand-purple shrink-0" />
            <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
              Strategic FAQ
            </span>
          </div>
          <h1 className="font-plus-jakarta text-4xl md:text-5xl font-black text-black max-w-3xl uppercase leading-tight tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-inter text-gray-650 text-xs md:text-sm max-w-2xl leading-relaxed">
            Rigorous answers to enterprise-level queries regarding compliance, security, and integration timelines across our global multi-disciplinary service pillars.
          </p>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="md:col-span-3 hidden md:block sticky top-28 self-start">
            <div className="flex flex-col gap-2">
              <h3 className="font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-4">
                Service Pillars
              </h3>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`text-left font-plus-jakarta text-sm font-bold uppercase py-2.5 pl-4 border-l-2 transition-all duration-300 ${
                    activeSection === cat.id
                      ? "border-brand-purple text-brand-purple"
                      : "border-brand-border-light text-gray-400 hover:text-black hover:border-black"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Accordions List */}
          <div className="md:col-span-9 flex flex-col gap-12">
            
            {categories.map((cat) => {
              const categoryFaqs = faqs.filter((faq) => faq.section === cat.id);
              return (
                <div key={cat.id} id={cat.id} className="flex flex-col gap-6 scroll-mt-28">
                  <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-4">
                    {cat.name}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {categoryFaqs.map((faq) => {
                      const isOpen = openId === faq.id;
                      return (
                        <div
                          key={faq.id}
                          className="bg-white border border-brand-border rounded-none overflow-hidden transition-all duration-300"
                        >
                          <button
                            onClick={() => handleToggle(faq.id)}
                            className="w-full flex justify-between items-center p-6 bg-brand-border-light/20 hover:bg-brand-border-light/40 transition-colors focus:outline-none text-left"
                          >
                            <span className="font-plus-jakarta text-sm md:text-base font-bold text-black uppercase tracking-wide pr-4">
                              {faq.q}
                            </span>
                            <div className="w-8 h-8 rounded-none border border-brand-border flex items-center justify-center text-black shrink-0 bg-brand-bg transition-transform duration-300">
                              {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            </div>
                          </button>
                          
                          {/* Animated Slide Down Panel in React */}
                          <div 
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                              isOpen ? "max-h-[500px] opacity-100 border-t border-brand-border-light" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="p-6 font-inter text-xs md:text-sm text-gray-500 leading-relaxed bg-white">
                              {faq.a}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
}
