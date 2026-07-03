"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, FileText, TrendingUp, ShieldCheck, CheckSquare, Send, Check, ArrowRight } from "lucide-react";

export default function EngagementModels() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const models = [
    {
      name: "Model Alpha",
      title: "Time & Materials",
      icon: Clock,
      desc: "Maximum flexibility for evolving architectures. Ideal for exploratory phases and dynamic R&D environments where scope requires continuous recalibration.",
      borderClass: "border-brand-border hover:border-brand-purple",
      bgClass: "bg-white text-black",
      badgeClass: "text-gray-400 border-gray-200",
    },
    {
      name: "Model Beta",
      title: "Fixed Price",
      icon: FileText,
      desc: "Absolute financial predictability. Engineered for projects with strictly defined parameters, rigid compliance requirements, and unyielding deadlines.",
      borderClass: "border-black shadow-2xl",
      bgClass: "bg-black text-white",
      badgeClass: "text-gray-400 border-gray-800",
      isHighContrast: true,
    },
    {
      name: "Model Gamma",
      title: "Success Fees",
      icon: TrendingUp,
      desc: "Venture-aligned partnerships. We tie a percentage of our compensation directly to measurable KPIs, revenue milestones, or cost-reduction metrics.",
      borderClass: "border-brand-border hover:border-brand-purple",
      bgClass: "bg-white text-black",
      badgeClass: "text-gray-400 border-gray-200",
    },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSbOCKJ0LBVIRNOyjG8PYlYV7ShUNUZ-yY4AF99Xof9EsoVKg6Y3uGZhSEot8aDCYeKpocStPAWxI6EP5AUjMXN1Jq58hQqH2R7n-FSaaotTgBkk6RPdkqYkxO3ibWrcAjPYi-PJmdwo0Fp6oVebuwCxuRwVM4bWtab4VFFQDpq4YzvplHiJosVnur2g25KOXvklbBNVKnN8vWRrMrpY7KZN1IqJDiRVngZg8I2YWLDK1shfZyevp1cnVcglPSKM81Jh1c7KCDpQk')",
          }}
        />
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h1 className="font-plus-jakarta text-5xl md:text-7xl font-black text-white uppercase leading-tight">
              Strategic <br />
              Engagements.
            </h1>
            <p className="font-inter text-gray-400 text-lg max-w-2xl mt-4">
              Transformative partnerships begin with absolute clarity. Yorlex does not operate on ambiguity. Discover our precision engagement models and initiate your enterprise transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Maturity Audit (Entry Point) */}
      <section className="py-24 px-6 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-4">
            <div className="font-inter font-bold text-xs text-brand-purple uppercase tracking-widest">Entry Point</div>
            <h2 className="font-plus-jakarta text-4xl font-black text-black uppercase">The Digital Maturity Audit</h2>
            <p className="font-inter text-gray-600 text-sm leading-relaxed">
              Before committing to structural change, we must establish the baseline. Our proprietary Digital Maturity Audit is the mandatory first step for all high-level engagements, providing a ruthless, data-driven assessment of your current technological and operational architecture.
            </p>
            <div className="mt-4">
              <a
                href="#briefing"
                className="inline-flex items-center gap-2 font-inter font-bold text-xs uppercase text-black border-b-2 border-black pb-1 hover:text-brand-purple hover:border-brand-purple transition-all"
              >
                Initiate Audit <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="relative h-[380px] w-full bg-brand-bg border border-brand-border rounded-none overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale"
              alt="Analytical model visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCvWssENLIBkulyPyxN6ymGGMXbx1DX_a8VmX8tB-mPVOEvlU6nQCgQwFLILlf1Am7y6ELGAVIwxfA8bwRwbsZvtVHiJU5fU0bzh6uy35PuN3w2wLMcavb1DThfOCX8Hy9KQnuDO5QWjaTBM5i4XaE-9xtzdcfIfSNDxDh4DgNZufibMal3C2rBcqqV5lAcBywUJCce5zDodQJFnAa8bKuT9XuuHGDNJrwgD-uNzFGpsAHA70tEF7oOiN6DMOuGdY8TNV9i7JUWfQ"
            />
          </div>
        </div>
      </section>

      {/* Engagement Models (Bento Grid) */}
      <section className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-plus-jakarta text-4xl font-black text-black uppercase">Engagement Models</h2>
            <p className="font-inter text-gray-500 text-xs mt-2 uppercase tracking-wider">Tailored financial structures for enterprise integration.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.name}
                  className={`border p-8 flex flex-col justify-between min-h-[300px] rounded-none ${
                    model.borderClass
                  } ${model.bgClass}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <Icon className={`h-8 w-8 ${model.isHighContrast ? "text-brand-purple" : "text-black"}`} />
                    <span className={`font-inter font-bold text-[10px] uppercase border px-2 py-0.5 ${model.badgeClass}`}>
                      {model.name}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-plus-jakarta text-xl font-bold uppercase mb-2">
                      {model.title}
                    </h3>
                    <p className={`font-inter text-xs leading-relaxed ${model.isHighContrast ? "text-gray-400" : "text-gray-500"}`}>
                      {model.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minimalist Contact Form (Strategy Briefing) */}
      <section className="py-24 px-6 bg-white border-t border-brand-border" id="briefing">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-plus-jakarta text-4xl font-black text-black uppercase mb-4">Request a Briefing.</h2>
            <p className="font-inter text-gray-600 text-sm leading-relaxed mb-8">
              Submit your enterprise parameters. Our qualification team will review your requirements and schedule a preliminary strategy briefing within 24 hours.
            </p>
            <div className="flex flex-col gap-4 font-inter text-xs font-bold uppercase tracking-wider text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-black" /> Secure &amp; Confidential Processing
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-black" /> For Enterprise Clients Only
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-bg p-8 border border-brand-border rounded-none">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-none bg-brand-purple text-white flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-black font-plus-jakarta uppercase mb-2">Briefing Saved</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Thank you. Our audit specialists will contact you within 24 hours to schedule the briefing session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="font-inter font-bold text-[10px] text-gray-500 uppercase">Full Name</label>
                    <input
                      required
                      type="text"
                      className="border-0 border-b border-brand-border bg-transparent px-0 py-2 focus:ring-0 focus:border-brand-purple font-inter text-sm text-black transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-inter font-bold text-[10px] text-gray-500 uppercase">Corporate Email</label>
                    <input
                      required
                      type="email"
                      className="border-0 border-b border-brand-border bg-transparent px-0 py-2 focus:ring-0 focus:border-brand-purple font-inter text-sm text-black transition-colors"
                      placeholder="jane@enterprise.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="font-inter font-bold text-[10px] text-gray-500 uppercase">Organization</label>
                  <input
                    required
                    type="text"
                    className="border-0 border-b border-brand-border bg-transparent px-0 py-2 focus:ring-0 focus:border-brand-purple font-inter text-sm text-black transition-colors"
                    placeholder="Company Name"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-inter font-bold text-[10px] text-gray-500 uppercase">Strategic Focus</label>
                  <select className="border-0 border-b border-brand-border bg-transparent px-0 py-2 focus:ring-0 focus:border-brand-purple font-inter text-sm text-black transition-colors">
                    <option value="tech">Technology Ecosystem Audit</option>
                    <option value="finance">Fiduciary &amp; Tax Restructuring</option>
                    <option value="marketing">Brand Strategy &amp; Pipeline Growth</option>
                    <option value="management">Lean Management &amp; Talent Search</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-brand-purple py-3.5 text-xs font-bold uppercase tracking-widest rounded-none transition-colors mt-4 flex items-center justify-center gap-2"
                >
                  Submit Briefing <Send className="h-4.5 w-4.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
