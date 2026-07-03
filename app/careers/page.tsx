"use client";

import React, { useState } from "react";
import { ArrowRight, Globe, TrendingUp, Compass, MapPin, X, HelpCircle, Check, Briefcase } from "lucide-react";

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const perks = [
    {
      title: "Global Mobility Network",
      desc: "Seamless transition across our 40+ international offices. We facilitate international assignments to accelerate executive development and cross-market expertise.",
      icon: Globe,
      spanClass: "md:col-span-8 bg-black text-white border-black",
      isDark: true,
    },
    {
      title: "Continuous Upskilling",
      desc: "Access exclusive executive education programs, advanced technical certifications, and bespoke leadership coaching tailored for high-trajectory careers.",
      icon: TrendingUp,
      spanClass: "md:col-span-4 bg-white text-black border-brand-border hover:border-black",
    },
    {
      title: "Architectural Impact",
      desc: "Lead initiatives that reshape industries. At Yorlex, you don't just execute strategy; you design the blueprints for global enterprise transformation.",
      icon: Compass,
      spanClass: "md:col-span-4 bg-white text-black border-brand-border hover:border-black",
    },
  ];

  const jobs = [
    {
      title: "Senior Tech Architect",
      dept: "Technology",
      location: "Global (Remote Optional)",
      desc: "Design and implement scalable enterprise systems for Fortune 500 clients. Requires deep expertise in cloud-native infrastructure and distributed systems.",
    },
    {
      title: "Finance Director - EMEA",
      dept: "Finance",
      location: "London, UK",
      desc: "Oversee regional financial operations, driving M&A strategy and capital allocation for the European market sector.",
    },
    {
      title: "Management Partner",
      dept: "Management",
      location: "New York, USA",
      desc: "Lead organizational restructure plans and drive strategy briefing initiatives for key corporate accounts.",
    },
  ];

  const filteredJobs = activeFilter === "All" 
    ? jobs 
    : jobs.filter((job) => job.dept.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="flex-1 bg-brand-bg pt-32 pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
            <Briefcase className="h-4 w-4 text-brand-purple shrink-0" />
            <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
              Careers
            </span>
          </div>
          <h1 className="font-plus-jakarta text-5xl md:text-7xl font-black text-black leading-none uppercase">
            Architect Your Future.
          </h1>
          <p className="font-inter text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Join Yorlex Enterprise, a global authority in multi-disciplinary excellence. We seek elite minds to drive innovation across technology, finance, and strategic management.
          </p>
          <a
            href="#positions"
            className="inline-flex items-center justify-center font-inter font-bold text-xs uppercase bg-black text-white hover:bg-brand-purple px-8 py-4 rounded-none transition-colors border border-black hover:border-brand-purple mt-2"
          >
            Explore Opportunities
          </a>
        </div>
        <div className="md:col-span-4 h-64 md:h-[350px] w-full border border-brand-border bg-gray-100 overflow-hidden relative">
          <div 
            className="bg-cover bg-center w-full h-full grayscale mix-blend-multiply opacity-90"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_opwp7Ejy2le3wK5pqApFPdhjIdv22l8ILZdl0Fnf1t-NmaTOz4M_ZS_rDlyBMoh4g-qxvZbC2ZyIuIpOEF0d7QVpcFZo4-mMam9N7ezSIUx9sPekumZrKXVtoepkxxW_qK0Yzt1AB9Chh6tcAcItJJd2FlcCT4kLhd-JCqSCW0sotkEaes0SK82bwzeTpcbDVVmw4JrlznbIV81t_-rrh6Gc4T1B7WZt7rHmKXduFf6TciTsrU4tuiajfJvaOZHtOTzDUOtUxOQ')` }}
          />
        </div>
      </section>

      {/* Employee Value Proposition (Bento Grid) */}
      <section className="bg-brand-border-light/40 py-20 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase mb-4">
              The Yorlex Advantage
            </h2>
            <p className="font-inter text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Uncompromising standards require unparalleled support. Discover our commitment to global talent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div 
                  key={perk.title} 
                  className={`p-8 flex flex-col justify-between border rounded-none group transition-all duration-300 ${perk.spanClass}`}
                >
                  <div>
                    <div className={`w-12 h-12 flex items-center justify-center mb-6 rounded-none ${
                      perk.isDark ? "bg-brand-purple text-white" : "bg-brand-bg text-black border border-brand-border group-hover:border-black"
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-plus-jakarta text-lg font-bold uppercase mb-3">
                      {perk.title}
                    </h3>
                    <p className={`font-inter text-xs leading-relaxed ${
                      perk.isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
            
            {/* Telemetry Matrix Tile (col-span-8) */}
            <div className="md:col-span-8 border border-brand-border bg-black text-white p-8 rounded-none relative overflow-hidden flex flex-col justify-between crosshair-grid select-none min-h-[280px]">
              <div className="flex justify-between items-center text-[9px] font-mono text-white/50 border-b border-white/10 pb-2">
                <span>TALENT_INFRASTRUCTURE: CAREER_TRACK_MATRIX</span>
                <span className="text-[#007aff] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#007aff] rounded-full inline-block animate-pulse"></span> SYSTEM STABLE
                </span>
              </div>

              {/* Matrix Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 relative z-10">
                <div className="border border-white/10 p-4 bg-white/5 relative group hover:border-brand-purple transition-colors">
                  <span className="absolute top-2 right-2 font-mono text-[8px] text-brand-purple">LEVEL_01</span>
                  <h4 className="font-plus-jakarta font-bold text-xs uppercase mb-1">Associate</h4>
                  <p className="font-inter text-[10px] text-gray-400 leading-normal">Collaborative engineering, technical compliance, risk auditing, B2B campaigns.</p>
                </div>
                <div className="border border-white/10 p-4 bg-white/5 relative group hover:border-brand-purple transition-colors">
                  <span className="absolute top-2 right-2 font-mono text-[8px] text-brand-purple">LEVEL_02</span>
                  <h4 className="font-plus-jakarta font-bold text-xs uppercase mb-1">Director</h4>
                  <p className="font-inter text-[10px] text-gray-400 leading-normal">Systems architecture, regulatory frameworks, regional P&L, resource orchestration.</p>
                </div>
                <div className="border border-white/10 p-4 bg-white/5 relative group hover:border-brand-purple transition-colors">
                  <span className="absolute top-2 right-2 font-mono text-[8px] text-brand-purple">LEVEL_03</span>
                  <h4 className="font-plus-jakarta font-bold text-xs uppercase mb-1">Managing Partner</h4>
                  <p className="font-inter text-[10px] text-gray-400 leading-normal">Equity allocation, succession strategy, global node command, C-level governance.</p>
                </div>
              </div>

              <div className="flex justify-between text-[7px] font-mono text-white/30 border-t border-white/10 pt-2">
                <span>Succession Ratio: 1:3.4</span>
                <span>Active Candidates Track: 142</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Job Portal UI */}
      <section className="max-w-7xl mx-auto px-6 py-24" id="positions">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border pb-6">
          <div>
            <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase mb-2">
              Open Positions
            </h2>
            <p className="font-inter text-gray-500 text-xs uppercase tracking-wider font-semibold">
              Filter by discipline to find your next architectural role.
            </p>
          </div>
          
          {/* Filter Controls */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 font-inter font-bold text-[10px] uppercase tracking-wider">
            {["All", "Technology", "Finance", "Management"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border transition-all whitespace-nowrap rounded-none ${
                  activeFilter === filter
                    ? "bg-black border-black text-white"
                    : "bg-white border-brand-border text-black hover:border-black"
                }`}
              >
                {filter === "All" ? "All Roles" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Job List */}
        <div className="flex flex-col gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.title}
                onClick={() => setSelectedRole(job.title)}
                className="border border-brand-border bg-white hover:bg-brand-bg transition-colors p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer rounded-none"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-brand-border-light text-black font-inter font-bold text-[9px] px-2 py-0.5 uppercase border border-brand-border">
                      {job.dept}
                    </span>
                    <span className="text-gray-400 font-inter text-xs flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="font-plus-jakarta text-xl font-bold text-black uppercase tracking-wide group-hover:text-brand-purple transition-colors">
                    {job.title}
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-gray-500 mt-2 max-w-4xl leading-relaxed">
                    {job.desc}
                  </p>
                </div>
                <div className="shrink-0 flex items-center">
                  <ArrowRight className="h-5 w-5 text-black group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-400 font-inter text-sm border border-brand-border border-dashed bg-white">
              No active listings found under this discipline.
            </div>
          )}
        </div>
      </section>

      {/* Application Modal Overlay */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white border border-brand-border p-8 md:p-10 rounded-none max-w-lg w-full relative">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute right-6 top-6 w-10 h-10 rounded-none bg-brand-bg border border-brand-border flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-black text-black mb-2 font-plus-jakarta uppercase">
              Apply for Role
            </h3>
            <p className="text-[10px] text-brand-purple font-bold uppercase tracking-widest mb-6">
              {selectedRole}
            </p>
            
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert("Application registered successfully. Our talent partner will reach out in 48 hours."); 
                setSelectedRole(null); 
              }} 
              className="space-y-4"
            >
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-inter">
                  Full Name
                </label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-white border border-brand-border rounded-none px-4 py-3 text-black text-sm focus:outline-none focus:border-brand-purple font-inter" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-inter">
                  Email Address
                </label>
                <input 
                  required 
                  type="email" 
                  className="w-full bg-white border border-brand-border rounded-none px-4 py-3 text-black text-sm focus:outline-none focus:border-brand-purple font-inter" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-inter">
                  Resume / LinkedIn Link
                </label>
                <input 
                  required 
                  type="url" 
                  placeholder="https://..." 
                  className="w-full bg-white border border-brand-border rounded-none px-4 py-3 text-black text-sm focus:outline-none focus:border-brand-purple font-inter" 
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-brand-purple font-bold text-xs uppercase tracking-wider py-3.5 rounded-none transition-colors border border-black hover:border-brand-purple font-inter font-bold text-[10px] uppercase"
                >
                  Submit Application
                </button>
                <button 
                  type="button" 
                  onClick={() => setSelectedRole(null)} 
                  className="w-full bg-white text-black border border-brand-border hover:bg-gray-50 font-bold text-xs uppercase tracking-wider py-3.5 rounded-none transition-colors font-inter"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
