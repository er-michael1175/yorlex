"use client";

import React from "react";
import Link from "next/link";
import { Cpu, ArrowRight, ShieldCheck, Check, Layers, Code, Settings } from "lucide-react";

export default function TechnologySolutions() {
  const capabilities = [
    {
      title: "Enterprise Web Systems",
      desc: "Architecting accessible, fast, and SEO-compliant Next.js/React architectures for C-suite operations.",
      icon: Code,
    },
    {
      title: "Data Pipelines & AI Integration",
      desc: "Deploying secure LLM fine-tuning, automated processing steps, and data cleanrooms.",
      icon: Layers,
    },
    {
      title: "Cloud Infrastructure",
      desc: "Multi-region cloud redundancy setup, Docker containerization, and zero-downtime CI/CD deployment.",
      icon: Settings,
    },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative min-h-[500px] flex items-center border-b border-brand-border pb-16">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale pointer-events-none"
            alt="Abstract code nodes"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4l9fFE3rZ9c_JfcJNnFBZoZeYC9nhLzDnIKNAridBKf9zF5XXTk22uJFpbtxkqhVD_t3JRFoA9ndTjvpbLERJmI6hRge1khHRTmrf3pxrV_30_Chp4fNHt_CYedwWcMEmI9JPyj1XUhb1WSQW7bnB5I96V3kshYQJb5KGsOesdKQLeUdoZvpWyOaSWvcpuKdOmUBdeYps2iqY3XSvo6S-3O4Ea_vw3aNKoapO7V6_xw8y5VVo2OeG0wzzpXpft2L_h0r2oBraDU"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max mb-6">
            <Cpu className="h-4 w-4 text-brand-purple shrink-0" />
            <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">Technology Solutions</span>
          </div>
          <h1 className="font-plus-jakarta text-5xl md:text-6xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
            Strategic Architects of Digital Transformation.
          </h1>
          <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            We engineer high-performance technology ecosystems that drive enterprise scale, operational precision, and market dominance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black hover:bg-brand-purple text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-none transition-colors"
          >
            Engineer Your Transformation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="font-plus-jakarta text-3xl font-black text-black mb-12 uppercase">
          Technology Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.title} className="sharp-card p-8 flex flex-col justify-between hover:border-brand-purple transition-all">
                <div>
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-plus-jakarta text-lg font-bold uppercase text-black mb-3">{cap.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">{cap.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Security & Audit Parameters */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 md:p-12 bg-white border border-brand-border grid grid-cols-1 md:grid-cols-2 gap-12 rounded-none">
          <div className="flex flex-col justify-center">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest mb-2">Security Standard</span>
            <h3 className="font-plus-jakarta text-3xl font-black uppercase text-black mb-6">SOC 2 Type II Certified Stack</h3>
            <p className="font-inter text-gray-600 text-sm leading-relaxed mb-6">
              Our engineering pipelines operate under strict compliance rules. All client data repositories are isolated, audited continuously, and backed by automated security scans to guarantee absolute protection.
            </p>
            <div className="flex flex-col gap-3 font-inter text-xs text-gray-500 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-black" /> Continuous Database Encryption
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-black" /> Isolated Multi-Region Deployment Logs
              </div>
            </div>
          </div>
          <div className="bg-brand-bg border border-brand-border h-64 md:h-auto flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-6xl text-gray-300">🛡️</div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-4">Security Environment Active</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
