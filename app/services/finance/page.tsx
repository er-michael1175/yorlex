"use client";

import React from "react";
import Link from "next/link";
import { Landmark, ArrowRight, ShieldCheck, Check, BarChart3 } from "lucide-react";

export default function FinanceSolutions() {
  const ledgerData = [
    { jurisdiction: "North America", volume: "$450M / Quarter", compliance: "SOC 1 Type II, GAAP", status: "Active", color: "bg-[#10B981]" },
    { jurisdiction: "EMEA", volume: "€320M / Quarter", compliance: "GDPR, IFRS", status: "Active", color: "bg-[#10B981]" },
    { jurisdiction: "APAC", volume: "¥800M / Quarter", compliance: "Local Statutory", status: "Audit", color: "bg-[#F59E0B]" },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans pt-32 pb-24">
      
      {/* Hero Section */}
      <header className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-brand-border">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
            <Landmark className="h-4 w-4 text-brand-purple shrink-0" />
            <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">Enterprise Finance Solutions</span>
          </div>
          <h1 className="font-plus-jakarta text-5xl md:text-6xl font-black text-black leading-tight tracking-tight uppercase">
            Fiduciary Excellence for the Global Scale.
          </h1>
          <p className="font-inter text-gray-600 text-base leading-relaxed max-w-lg">
            Rigorous financial architecture designed for multinational resilience. We deploy advanced capital strategy, precision accounting, and strict compliance frameworks to secure your corporate trajectory.
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              href="/contact"
              className="bg-black text-white hover:bg-brand-purple font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-none transition-colors"
            >
              Secure Your Financial Future
            </Link>
            <Link
              href="/process"
              className="bg-white text-black border border-brand-border hover:bg-gray-50 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-none transition-all"
            >
              View Methodology
            </Link>
          </div>
        </div>
        <div className="relative h-[450px] w-full rounded-none overflow-hidden border border-brand-border bg-gray-200">
          <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale pointer-events-none"
            alt="Corporate skyscraper abstract rendering"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARL4WAeP0d1O_zIEUwN9TobXVJneuO27dD5bcSxmCTTaVCWcjkWtkLPXeDTOXblmXron2tpIqwqVkJZQoqLsR8ywcqhLW9PA1Nge40TV1E3tjIGU8MoMrcYXiNm6EXwqhp0ALGGhjIs4qepgPYPWwR3-CrDuITV-AQA21hZwfvA0i_OeQjiJCvdcEgYFxH0TpHPerKvJGoIRF1SwomMeX8kDvFGduWWVProykJM6rcx0i-DGDe0wkA-jSAgJkIKgOIaZclNL1wnDE"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-transparent"></div>
        </div>
      </header>

      {/* Core Services Bento Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12 flex flex-col gap-2">
          <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase">Core Financial Architecture</h2>
          <p className="font-inter text-gray-500 text-sm">Modular, scalable financial services tailored for institutional demands.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: True Black High Impact */}
          <div className="md:col-span-2 bg-black text-white p-8 flex flex-col justify-between border border-black relative overflow-hidden group rounded-none">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-purple to-transparent"></div>
            <div className="relative z-10 flex flex-col gap-4">
              <Landmark className="h-10 w-10 text-brand-purple" />
              <h3 className="font-plus-jakarta text-2xl font-bold uppercase">Corporate Accounting &amp; Auditing</h3>
              <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-lg">
                Comprehensive ledger management, real-time forensic auditing, and consolidated global reporting. We maintain absolute transparency across all jurisdictional boundaries.
              </p>
            </div>
            <div className="relative z-10 mt-12 border-t border-gray-800 pt-4 flex justify-between items-center">
              <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-wider">View Auditing Protocols</span>
              <ArrowRight className="h-5 w-5 text-brand-purple group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Card 2: Financial Planning */}
          <div className="bg-white text-black border border-brand-border p-8 flex flex-col justify-between hover:border-brand-purple transition-all rounded-none">
            <div className="flex flex-col gap-3">
              <BarChart3 className="h-8 w-8 text-black" />
              <h3 className="font-plus-jakarta text-xl font-bold uppercase">Financial Planning</h3>
              <p className="font-inter text-gray-500 text-xs leading-relaxed">
                Algorithmic cash flow projection and scenario modeling to optimize capital allocation.
              </p>
            </div>
            <div className="h-32 w-full mt-6 bg-brand-bg border border-brand-border rounded-none flex items-end p-4 gap-2">
              <div className="w-1/4 bg-black/10 h-1/3"></div>
              <div className="w-1/4 bg-black/20 h-1/2"></div>
              <div className="w-1/4 bg-black/40 h-3/4"></div>
              <div className="w-1/4 bg-brand-purple h-full"></div>
            </div>
          </div>

          {/* Card 3: Tax Strategy */}
          <div className="bg-white text-black border border-brand-border p-8 flex flex-col justify-between hover:border-brand-purple transition-all rounded-none">
            <div className="flex flex-col gap-3">
              <Landmark className="h-8 w-8 text-black" />
              <h3 className="font-plus-jakarta text-xl font-bold uppercase">Global Tax Strategy</h3>
              <p className="font-inter text-gray-500 text-xs leading-relaxed">
                Navigating complex international tax codes to minimize liability while ensuring rigorous adherence to local regulations.
              </p>
            </div>
            <button className="text-left font-inter font-bold text-[10px] text-black border-b border-black w-max pb-1 mt-6 hover:text-brand-purple hover:border-brand-purple transition-colors uppercase">
              Explore Tax Services
            </button>
          </div>

          {/* Card 4: Detailed Ledger View */}
          <div className="md:col-span-2 bg-white text-black border border-brand-border p-8 flex flex-col gap-6 rounded-none">
            <div className="flex justify-between items-center border-b border-brand-border pb-4">
              <h3 className="font-plus-jakarta text-xl font-bold uppercase">Payroll &amp; Compliance Ledger</h3>
              <ShieldCheck className="h-5 w-5 text-black" />
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left font-inter text-xs border-collapse">
                <thead>
                  <tr className="border-b border-brand-border text-gray-400 font-bold uppercase tracking-wider">
                    <th className="py-3 pr-4">Jurisdiction</th>
                    <th className="py-3 px-4">Processing Volume</th>
                    <th className="py-3 px-4">Compliance Standard</th>
                    <th className="py-3 pl-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-black font-medium">
                  {ledgerData.map((row) => (
                    <tr key={row.jurisdiction} className="border-b border-brand-border-light last:border-0">
                      <td className="py-4 pr-4 font-bold">{row.jurisdiction}</td>
                      <td className="py-4 px-4 text-gray-500">{row.volume}</td>
                      <td className="py-4 px-4 text-gray-500">{row.compliance}</td>
                      <td className="py-4 pl-4 text-right flex items-center justify-end gap-1.5 mt-2 md:mt-0">
                        <span className={`inline-block w-2 h-2 rounded-none ${row.color}`}></span>
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
