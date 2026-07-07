"use client";

import React from "react";
import { Database, TrendingUp, Quote, CheckCircle } from "lucide-react";

export default function RevenueOptimizationCaseStudy() {
  const servicesList = ["Revenue Architecture", "Data Infrastructure", "Change Management"];
  
  return (
    <div className="flex-1 bg-brand-bg pt-32 pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-4xl">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-4">
            Case Study // Management
          </span>
          <h1 className="font-plus-jakarta text-4xl md:text-6xl font-black text-black mb-6 leading-tight tracking-tight">
            Omni-Channel Revenue Optimization Protocol
          </h1>
          <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-3xl">
            Architecting a unified, data-driven revenue infrastructure for a global enterprise, resulting in unprecedented efficiency and market capture.
          </p>
        </div>

        {/* Quantifiable Results Banner */}
        <div className="bg-black text-white mt-12 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t-4 border-brand-purple rounded-2xl">
          <div className="border-b md:border-b-0 md:border-r border-brand-border/20 pb-6 md:pb-0 md:pr-6">
            <div className="font-plus-jakarta text-4xl md:text-5xl font-black text-brand-purple mb-2">142%</div>
            <div className="font-inter font-bold text-[10px] text-gray-400">
              Increase in Operational Efficiency
            </div>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-brand-border/20 pb-6 md:pb-0 md:pr-6">
            <div className="font-plus-jakarta text-4xl md:text-5xl font-black text-brand-purple mb-2">$45M</div>
            <div className="font-inter font-bold text-[10px] text-gray-400">
              Recovered Revenue Stream
            </div>
          </div>
          <div>
            <div className="font-plus-jakarta text-4xl md:text-5xl font-black text-brand-purple mb-2">8.5x</div>
            <div className="font-inter font-bold text-[10px] text-gray-400">
              ROI Within First 3 Quarters
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 w-full h-[350px] md:h-[500px] border border-brand-border overflow-hidden rounded-2xl relative">
          <img
            className="w-full h-full object-cover grayscale opacity-95 mix-blend-multiply pointer-events-none"
            alt="Digital installation art representing data optimization"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDv6mt1eCTz6LhtHsKEpL5n_8PmoxqxQV9rHnXP7OUJrYm0krNI_tewNuwHYQq-UPOMGY1RnDCnr33B6dA6JIkxOAqnJ4OunwfJgb49pNY0ZA44CQgOIdAPmeaC6lVkp9XJ0rHGJrjq-luFE_OnvJpe3BIeRbbfiFjACJ4kgl5OjD83BY98hnKQ_xL3cm2Fgk0j6PUehA3xDnmt6Vgu0BOHMj5knUleqV91TaDISntlYTNraaWbMWd3Vxqe0DWCHbLcSVA1OdXWZw"
          />
        </div>
      </section>

      {/* Content Structure */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Sidebar Metadata */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 self-start mb-8 lg:mb-0">
            <div className="bg-white border border-brand-border p-6 space-y-6 rounded-2xl">
              <div>
                <h4 className="font-inter font-bold text-[10px] text-gray-400 mb-1">
                  Client
                </h4>
                <p className="font-plus-jakarta font-bold text-sm text-black">
                  Nexus Global Retail
                </p>
              </div>
              <div className="w-full h-px bg-brand-border-light"></div>
              <div>
                <h4 className="font-inter font-bold text-[10px] text-gray-400 mb-1">
                  Industry
                </h4>
                <p className="font-inter text-xs text-gray-600 font-semibold">
                  Enterprise Retail &amp; E-Commerce
                </p>
              </div>
              <div className="w-full h-px bg-brand-border-light"></div>
              <div>
                <h4 className="font-inter font-bold text-[10px] text-gray-400 mb-2">
                  Services Deployed
                </h4>
                <ul className="font-inter text-xs text-gray-600 font-semibold space-y-1">
                  {servicesList.map((svc) => (
                    <li key={svc} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-brand-purple rounded-full shrink-0" />
                      {svc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-px bg-brand-border-light"></div>
              <div>
                <h4 className="font-inter font-bold text-[10px] text-gray-400 mb-1">
                  Timeline
                </h4>
                <p className="font-inter text-xs text-gray-600 font-semibold">
                  14 Months
                </p>
              </div>
            </div>
          </aside>

          {/* Main Narrative */}
          <article className="w-full lg:w-3/4 space-y-16">
            
            {/* The Challenge */}
            <div>
              <h2 className="font-plus-jakarta text-2xl font-black text-black mb-6 border-l-4 border-brand-purple pl-4">
                The Challenge
              </h2>
              <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                Nexus Global Retail possessed vast amounts of transaction data spread across disconnected legacy systems. Their digital and physical retail channels operated in silos, leading to severe inefficiencies in inventory allocation, disjointed customer experiences, and significant revenue leakage.
              </p>
              <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed">
                The mandate was to design an architectural solution that unified these channels, establishing a single source of truth for revenue streams without disrupting ongoing global operations.
              </p>
            </div>

            {/* The Approach */}
            <div>
              <h2 className="font-plus-jakarta text-2xl font-black text-black mb-6 border-l-4 border-brand-purple pl-4">
                The Approach
              </h2>
              <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                We deployed our proprietary Omni-Channel Revenue Optimization Protocol, a multi-phased engineering and management framework. This involved a complete overhaul of their data infrastructure, moving away from disparate monolithic databases to a decentralized, event-driven architecture.
              </p>

              {/* Diagram / Technical Visualization */}
              <div className="w-full h-[350px] md:h-[450px] bg-black relative my-8 border border-brand-border flex items-center justify-center overflow-hidden rounded-2xl">
                <img
                  className="object-cover w-full h-full opacity-80 mix-blend-screen pointer-events-none"
                  alt="Decentralized data architecture wireframe blueprint"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa2eXm6hwOPyrbnYYkz5QZk0azVMyS1odse_dGKvXa2psEfxHIp6vnuLRvfBiQj4P4w7cZTxEZ9mvvtuiJLiPvwFttX1LzEoiXVVoTvwRzUv0iV0dBZGha0G1ixnxN4GZJWaQTheLnyLvgq4q9_sTStmKJX1CRHoOJgQC2twLaAodEZeVXNVF8NQk8cL9CAm_zzPohQ-R238DJe0htYAAGDXk3ApAWaiTkVhcreUZOSx6fn9BhwVDGSUxtXR85HmcZxAiR7LpYbyM"
                />
                <div className="absolute bottom-4 left-4 bg-white p-2 border border-brand-border rounded-2xl font-inter font-bold text-[10px] text-black">
                  Fig 1. Event-Driven Architecture
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border border-brand-border rounded-2xl">
                  <Database className="text-brand-purple h-8 w-8 mb-4" />
                  <h3 className="font-plus-jakarta text-base font-bold text-black mb-2">
                    Infrastructure Unification
                  </h3>
                  <p className="font-inter text-gray-500 text-xs leading-relaxed">
                    Migrated 40+ legacy databases into a cohesive, highly available data lake environment, ensuring real-time consistency across all global touchpoints.
                  </p>
                </div>
                <div className="bg-white p-6 border border-brand-border rounded-2xl">
                  <TrendingUp className="text-brand-purple h-8 w-8 mb-4" />
                  <h3 className="font-plus-jakarta text-base font-bold text-black mb-2">
                    Predictive Allocation
                  </h3>
                  <p className="font-inter text-gray-500 text-xs leading-relaxed">
                    Implemented advanced machine learning models to forecast demand and automatically route inventory to channels with the highest probability of conversion.
                  </p>
                </div>
              </div>
            </div>

            {/* The Outcome */}
            <div>
              <h2 className="font-plus-jakarta text-2xl font-black text-black mb-6 border-l-4 border-brand-purple pl-4">
                The Outcome
              </h2>
              <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                The implemented protocol did not merely optimize existing processes; it fundamentally redefined how Nexus Global Retail captures and realizes value. The unified infrastructure allowed for agile responses to market shifts, directly contributing to the top line.
              </p>

              {/* Quote Block */}
              <div className="bg-black text-white p-8 md:p-10 border-l-4 border-brand-purple rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
                <Quote className="h-10 w-10 text-brand-purple mb-6 opacity-30" />
                <blockquote className="relative z-10 font-plus-jakarta text-lg md:text-xl italic mb-8 text-gray-200">
                  "Yorlex didn't just provide a strategy; they re-architected our operational reality. Their precision and rigorous methodology delivered results that exceeded our most aggressive forecasts."
                </blockquote>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-200 border border-gray-800">
                    <img
                      className="object-cover w-full h-full grayscale pointer-events-none"
                      alt="Sarah Jenkins professional portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC9HHAtYMF70NjI1C6fjPn50GHlF2dHKGPaqFgUXJ7c7-Knq6UgborMSgbY-_BcfxEp11TjhiBb_GH6h0oBplAb5-7PJnuMIo7Tu6ka8B4iXomHLUDArrA9yidB_6Xhag4Nf-8pc_9pINrykoztVR3M5EY74KE9f20FmrwbgFeLZgHKXqEPLDPXOMO5OEzFWk2IxsiS342FLjvzWKs52t88uGn2aol5RC0Sw77scXp7Mpa-Gn0WVpl0WSmU7CB4JT8OqJ03kt5jzk"
                    />
                  </div>
                  <div>
                    <div className="font-plus-jakarta font-bold text-xs tracking-wide text-white">
                      Sarah Jenkins
                    </div>
                    <div className="font-inter text-[10px] text-brand-purple font-bold mt-0.5">
                      Chief Operations Officer, Nexus Global
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>

    </div>
  );
}
