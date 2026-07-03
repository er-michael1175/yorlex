"use client";

import React from "react";
import Link from "next/link";
import { Megaphone, Search, FileText, Share2, Award, TrendingUp, TrendingDown, ArrowRight, Check, Eye } from "lucide-react";

export default function MarketingSolutions() {
  const metrics = [
    { title: "Qualified Lead Gen", value: "12,450", change: "+14.2% MoM", isUp: true },
    { title: "Customer Acq. Cost", value: "$42.80", change: "-8.5% MoM", isUp: false },
    { title: "Attributed Revenue", value: "$2.4M", change: "+22.1% MoM", isUp: true },
  ];

  return (
    <div className="flex-grow bg-brand-bg font-sans pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-b border-brand-border">
        <div className="md:col-span-8 flex flex-col gap-6">
          <h1 className="font-plus-jakarta text-5xl md:text-7xl font-black text-black uppercase leading-tight tracking-tight">
            Engineering Brand <br />
            <span className="text-brand-purple">Velocity</span> and Market Dominance.
          </h1>
          <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-xl">
            We deploy data-driven precision to accelerate your market share. From algorithmic SEO to high-conversion performance marketing, we engineer pathways from traffic to undeniable revenue.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-black hover:bg-brand-purple text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-none transition-colors"
            >
              Dominate Your Market
            </Link>
            <Link
              href="#metrics"
              className="bg-white text-black border border-brand-border hover:bg-gray-50 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-none transition-colors"
            >
              View ROI Metrics
            </Link>
          </div>
        </div>

        {/* Live Velocity Card */}
        <div className="md:col-span-4 bg-white border border-brand-border p-8 rounded-none relative overflow-hidden flex flex-col justify-between min-h-[380px]">
          <div className="z-10">
            <span className="font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest block mb-2">Live Velocity Index</span>
            <div className="font-plus-jakarta text-4xl font-black text-black">+214.8%</div>
          </div>
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="h-32 bg-brand-bg border border-brand-border rounded-none flex items-end p-4 gap-2 z-10">
            <div className="w-full bg-black h-[20%]"></div>
            <div className="w-full bg-black h-[35%]"></div>
            <div className="w-full bg-black h-[50%]"></div>
            <div className="w-full bg-brand-purple h-[85%]"></div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 border-b border-brand-border pb-4">
          <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase">Tactical Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Performance Marketing (Large Impact) */}
          <div className="col-span-12 md:col-span-8 bg-black text-white p-8 flex flex-col justify-between min-h-[300px] rounded-none">
            <div>
              <Megaphone className="h-10 w-10 text-brand-purple mb-6" />
              <h3 className="font-plus-jakarta text-2xl font-bold uppercase text-white mb-3">Performance Marketing</h3>
              <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-lg">
                Hyper-targeted campaigns designed for immediate ROI. We optimize across channels in real-time, leveraging machine learning to decrease CPA while aggressively scaling acquisition.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <span className="inline-flex items-center gap-2 font-inter font-bold text-[10px] uppercase bg-gray-900 px-3.5 py-1.5 rounded-none text-brand-purple border border-gray-800">
                <TrendingUp className="h-4.5 w-4.5" /> Lower CPA
              </span>
              <span className="inline-flex items-center gap-2 font-inter font-bold text-[10px] uppercase bg-gray-900 px-3.5 py-1.5 rounded-none text-brand-purple border border-gray-800">
                <ArrowRight className="h-4.5 w-4.5" /> Fast Scaling
              </span>
            </div>
          </div>

          {/* SEO (Vertical) */}
          <div className="col-span-12 md:col-span-4 bg-white border border-brand-border p-8 flex flex-col rounded-none justify-between">
            <div>
              <Search className="h-10 w-10 text-black mb-6" />
              <h3 className="font-plus-jakarta text-2xl font-bold uppercase text-black mb-3">Algorithmic SEO</h3>
              <p className="font-inter text-gray-500 text-xs leading-relaxed">
                Technical architecture optimization, semantic content strategies, and high-authority link building to dominate non-branded search verticals.
              </p>
            </div>
            <div className="mt-6 border border-brand-border p-4 bg-brand-bg text-center rounded-none">
              <span className="font-inter font-bold text-[10px] text-gray-500 uppercase block mb-1">Organic Traffic Growth</span>
              <span className="font-plus-jakarta text-2xl font-black text-brand-purple">3x YoY</span>
            </div>
          </div>

          {/* Content & Social (Split) */}
          <div className="col-span-12 md:col-span-6 bg-white border border-brand-border p-8 rounded-none">
            <FileText className="h-8 w-8 text-black mb-4" />
            <h3 className="font-plus-jakarta text-xl font-bold uppercase text-black mb-2">Content Engine</h3>
            <p className="font-inter text-gray-500 text-xs leading-relaxed">
              High-value, authoritative content that positions your brand as the definitive industry leader while driving long-tail intent capture.
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-6 bg-white border border-brand-border p-8 rounded-none">
            <Share2 className="h-8 w-8 text-black mb-4" />
            <h3 className="font-plus-jakarta text-xl font-bold uppercase text-black mb-2">Social Dominance</h3>
            <p className="font-inter text-gray-500 text-xs leading-relaxed">
              Strategic amplification and community engineering. We don't just participate in conversations; we architect them.
            </p>
          </div>

          {/* Branding (Full Width Graphic) */}
          <div className="col-span-12 bg-white border border-brand-border overflow-hidden flex flex-col md:flex-row rounded-none">
            <div className="p-10 md:w-1/2 flex flex-col justify-center">
              <Award className="h-10 w-10 text-black mb-6" />
              <h3 className="font-plus-jakarta text-2xl font-bold uppercase text-black mb-3">Brand Architecture</h3>
              <p className="font-inter text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                Rigorous identity systems and positioning frameworks. We build robust brand architectures that command premium pricing and withstand market volatility.
              </p>
              <Link
                href="#"
                className="font-inter font-bold text-xs uppercase text-black border-b border-black self-start hover:text-brand-purple hover:border-brand-purple transition-all pb-1"
              >
                Explore Brand Books
              </Link>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative bg-gray-200">
              <img
                className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80 pointer-events-none"
                alt="Brand mockups layout"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD1sCUesK1uACAIICOtSszWFchmXU0QOeDTtodV0DcyO7hmRhoVJySy3faO05_VeBLm0MgAvzdJmvGOhY5NvbQjnqiTYza07nmljDOF1T-n2PigQOuBcYUzZv7g6M0PNfKpUivh25d8FS8YVn-zWm0gcy41QVc4MQLRrbxSLHw6JgvvLQuuZeO_pNtOuuMUTyITgOAHkJasJ1XUxAvYj7JOiQV6kt-P914U8x0e73fomj-3hAaiK4up6pRlac7nj99BUHO8ud76j8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traffic to Revenue Section */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="metrics">
        <div className="mb-12 flex justify-between items-end border-b border-brand-border pb-4">
          <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase">Traffic to Revenue</h2>
          <span className="hidden md:block font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest">
            Live Analytics Architecture
          </span>
        </div>

        <div className="bg-white border border-brand-border p-8 rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {metrics.map((m) => (
              <div key={m.title} className="bg-brand-bg border border-brand-border p-6 rounded-none">
                <div className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-wider mb-1">{m.title}</div>
                <div className="font-plus-jakarta text-3xl font-black text-black">{m.value}</div>
                <div className={`text-xs font-bold mt-1 ${m.isUp ? "text-brand-purple" : "text-emerald-600"}`}>
                  {m.change}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-64 bg-brand-bg border border-brand-border rounded-none relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#000_0,#000_1px,transparent_0,transparent_50%)] [background-size:10px_10px]" />
            <span className="font-inter font-bold text-xs uppercase text-gray-500 bg-white border border-brand-border px-4 py-2 rounded-none z-10">
              Holistic Multi-Channel Attribution Visualization
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-24 border-t border-brand-border max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase mb-4">
              Performance-Based Growth Models
            </h2>
            <p className="font-inter text-gray-600 text-sm leading-relaxed mb-8">
              We align our success with yours. Choose from structured velocity retainers or pure performance-based models tied directly to revenue targets.
            </p>
            <Link
              href="/contact"
              className="bg-black hover:bg-brand-purple text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-none transition-colors w-max"
            >
              Dominate Your Market
            </Link>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-brand-border p-8 rounded-none flex flex-col justify-between">
              <div>
                <span className="font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Tier 01</span>
                <h3 className="font-plus-jakarta text-xl font-bold uppercase text-black mb-3">Velocity Retainer</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Fixed predictable investment for comprehensive multi-channel management and execution.
                </p>
                <ul className="space-y-3 text-xs text-gray-600 font-medium">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-purple shrink-0" /> Dedicated Growth Team</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-purple shrink-0" /> Weekly Optimization Sprints</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-brand-border p-8 rounded-none flex flex-col justify-between">
              <div>
                <span className="font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Tier 02</span>
                <h3 className="font-plus-jakarta text-xl font-bold uppercase text-black mb-3">Performance Share</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Aligned incentives linked directly to revenue growth, client acquisition volume, or EBITDA gains.
                </p>
                <ul className="space-y-3 text-xs text-gray-600 font-medium">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-purple shrink-0" /> Shared Revenue Risks</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-purple shrink-0" /> Unlimited Scale Potential</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
