"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  ArrowRight, 
  Compass, 
  Workflow, 
  CheckSquare, 
  GraduationCap, 
  RefreshCw, 
  BarChart3, 
  ArrowUpRight 
} from "lucide-react";

export default function ManagementSolutions() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const capabilities = [
    { name: "Business Strategy", icon: Compass },
    { name: "HR Consulting", icon: Users },
    { name: "Process Optimization", icon: Workflow },
    { name: "Project Management", icon: CheckSquare },
    { name: "Corporate Training", icon: GraduationCap },
    { name: "Business Transformation", icon: RefreshCw },
  ];

  return (
    <div className="flex-1 bg-brand-bg font-sans pt-32 pb-24">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[600px]">
          <div className="md:col-span-6 flex flex-col justify-center space-y-6">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest">
              Management Solutions
            </span>
            <h1 className="font-plus-jakarta text-5xl md:text-6xl font-black text-black leading-tight tracking-tight uppercase">
              Navigating Complexity with Structural Precision.
            </h1>
            <p className="font-inter text-gray-600 text-base leading-relaxed max-w-lg">
              We deploy rigorous, architectural frameworks to dismantle operational bottlenecks, optimize human capital, and engineer sustainable organizational architecture for global enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-black hover:bg-brand-purple text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-none transition-colors border border-black hover:border-brand-purple text-center font-inter font-bold text-[10px] uppercase"
              >
                Optimize Your Organization
              </Link>
              <Link
                href="/process"
                className="bg-transparent hover:bg-black/5 text-black font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-none transition-colors border border-brand-border text-center font-inter font-bold text-[10px] uppercase"
              >
                Explore Methodology
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 h-[450px] relative">
            <div className="absolute inset-0 bg-white border border-brand-border overflow-hidden rounded-none">
              <img
                className="w-full h-full object-cover grayscale opacity-95 mix-blend-multiply pointer-events-none"
                alt="Executive board room team meeting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-ifF9DQwo4w9bTKAKTYt8_4bgkMB4-ubE7WuEuNVZm2pbdyWbF2DsZQSO8b_KQAySkuW2RXKefZQKBU7l7v8nHNAAr0hd2HX3fRBW9yUPiDw94mGxsdfcAMPZTqOvARmWjzJT-IUAw-PU2MxaRO9jSIEfQE0-f1r3uXYNNIXFd59R8Azeea8vAn8Hiui1oZof6jdFB4aiYM5qsg0U9mmuNFayY_324_uMReqXXwZ94t5JRGKEpLp-n1niG6V0VFlXh1bSF9azHd0"
              />
            </div>
            {/* Decorative architectural element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-brand-purple hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Capability Frameworks */}
      <section className="bg-brand-border-light/40 py-20 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase mb-4">
              Capability Frameworks
            </h2>
            <p className="font-inter text-gray-500 text-sm">
              Our modular service architecture allows for precise intervention across all operational vectors.
            </p>
          </div>
          <div className="hexagon-grid py-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={cap.name} 
                  className="hexagon group cursor-pointer"
                  title={cap.name}
                >
                  <Icon className="h-8 w-8 text-black mb-2 group-hover:text-brand-purple transition-colors" />
                  <span className="font-inter font-bold text-[10px] uppercase tracking-wider px-2 text-center text-gray-700 group-hover:text-white transition-colors">
                    {cap.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bento Grid: Operational Transparency */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest mb-2 block">
            Metrics & Insight
          </span>
          <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase">
            Operational Transparency
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Column 1 (md:col-span-8): Interactive Resource Allocation */}
          <div className="md:col-span-8 bg-white border border-brand-border p-8 flex flex-col justify-between relative overflow-hidden group rounded-none">
            <div>
              <h3 className="font-plus-jakarta text-xl font-bold uppercase text-black mb-6">
                Interactive Resource Allocation
              </h3>
              
              {/* Gantt Chart UI */}
              <div className="space-y-4 flex-grow font-inter text-xs">
                <div className="flex items-center font-bold text-gray-400 mb-4 border-b border-brand-border pb-2">
                  <div className="w-1/4">PHASE</div>
                  <div className="w-3/4 flex justify-between px-2">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>
                
                {/* Row 1 */}
                <div 
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => setActivePhase("Discovery")}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  <div className="w-1/4 font-bold text-black uppercase">Discovery</div>
                  <div className="w-3/4 relative h-8 bg-brand-border-light rounded-none">
                    <div 
                      className={`absolute left-0 top-1 bottom-1 bg-black rounded-none transition-all duration-300 ${
                        activePhase === "Discovery" ? "w-1/2" : "w-1/3"
                      }`}
                    ></div>
                  </div>
                </div>
                
                {/* Row 2 */}
                <div 
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => setActivePhase("Audit")}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  <div className="w-1/4 font-bold text-black uppercase">Structural Audit</div>
                  <div className="w-3/4 relative h-8 bg-brand-border-light rounded-none">
                    <div 
                      className={`absolute top-1 bottom-1 bg-brand-purple rounded-none transition-all duration-300 ${
                        activePhase === "Audit" ? "left-[20%] w-[55%]" : "left-1/4 w-1/3"
                      }`}
                    ></div>
                  </div>
                </div>
                
                {/* Row 3 */}
                <div 
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => setActivePhase("Implementation")}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  <div className="w-1/4 font-bold text-black uppercase">Implementation</div>
                  <div className="w-3/4 relative h-8 bg-brand-border-light rounded-none">
                    <div 
                      className={`absolute top-1 bottom-1 bg-gray-500 rounded-none transition-all duration-300 ${
                        activePhase === "Implementation" ? "left-[45%] w-[55%]" : "left-1/2 w-1/2"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-inter mt-6">
              * Hover over phases to simulate real-time resource adjustments.
            </p>
          </div>

          {/* Column 2 (md:col-span-4): Data-Driven Execution */}
          <div className="md:col-span-4 bg-black text-white p-8 border border-black flex flex-col justify-between rounded-none relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-purple to-transparent"></div>
            <div className="relative z-10">
              <BarChart3 className="h-10 w-10 text-brand-purple mb-6" />
              <h3 className="font-plus-jakarta text-xl font-bold uppercase mb-4">
                Data-Driven Execution
              </h3>
              <p className="font-inter text-gray-400 text-xs leading-relaxed">
                Leverage real-time analytics to monitor resource deployment and structural alignment across all global divisions.
              </p>
            </div>
            <Link 
              href="/engagement-models"
              className="relative z-10 mt-8 text-left font-inter font-bold text-[10px] text-brand-purple hover:text-white transition-colors uppercase flex items-center gap-1 group-hover:underline"
            >
              View Dashboards <ArrowUpRight className="h-4.5 w-4.5" />
            </Link>
          </div>

          {/* Column 3 (md:col-span-4): Case Study */}
          <div className="md:col-span-4 bg-white border border-brand-border p-8 flex flex-col justify-between rounded-none">
            <div>
              <span className="font-inter font-bold text-[10px] text-brand-purple uppercase mb-2 block">
                Case Study
              </span>
              <h3 className="font-plus-jakarta text-lg font-bold uppercase text-black mb-4">
                Global Merger Integration
              </h3>
              <p className="font-inter text-gray-500 text-xs leading-relaxed">
                Standardized operational procedures across 14 international offices within 90 days, reducing redundancy by 42%.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-brand-border-light flex justify-between items-center font-inter font-bold text-[10px] uppercase">
              <span className="text-gray-400">Industry: Finance</span>
              <Link href="/success-stories" className="text-brand-purple hover:underline">
                Read Full Study
              </Link>
            </div>
          </div>

          {/* Column 4 (md:col-span-8): Stat */}
          <div className="md:col-span-8 bg-brand-border-light/30 border border-brand-border p-8 flex items-center justify-center rounded-none text-center">
            <div>
              <div className="font-plus-jakarta text-7xl font-black text-black leading-none mb-2">
                85<span className="text-brand-purple">%</span>
              </div>
              <div className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
                Increase in Operational Efficiency
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vertical Workflow Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-brand-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-plus-jakarta text-3xl font-black text-black uppercase mb-4 sticky top-28">
              Intervention Methodology
            </h2>
            <p className="font-inter text-gray-600 text-sm leading-relaxed sticky top-48">
              Our structured approach ensures comprehensive alignment from executive vision to frontline execution, prioritizing deep stakeholder analysis.
            </p>
          </div>
          <div className="md:col-span-8 md:pl-12">
            <div className="relative">
              
              {/* Timeline Item 1 */}
              <div className="timeline-item relative pl-10 mb-12">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-none bg-black flex items-center justify-center z-10 border-2 border-brand-bg">
                  <span className="w-2 h-2 bg-white rounded-none"></span>
                </div>
                <h3 className="font-plus-jakarta text-lg font-bold text-black uppercase mb-2">
                  Phase 01: Stakeholder Interviews
                </h3>
                <p className="font-inter text-gray-600 text-xs leading-relaxed mb-4">
                  Rigorous qualitative analysis engaging C-suite executives and key departmental heads to identify systemic frictions and misalignments.
                </p>
                <div className="bg-white border border-brand-border p-4 rounded-none">
                  <span className="font-inter font-bold text-[10px] text-black uppercase block mb-1">
                    Key Deliverable
                  </span>
                  <span className="font-inter text-gray-500 text-xs">
                    Executive Alignment Diagnostic Report
                  </span>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="timeline-item relative pl-10 mb-12">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-none bg-brand-border-light border-2 border-brand-border flex items-center justify-center z-10">
                </div>
                <h3 className="font-plus-jakarta text-lg font-bold text-black uppercase mb-2">
                  Phase 02: Structural Audit
                </h3>
                <p className="font-inter text-gray-600 text-xs leading-relaxed mb-4">
                  Comprehensive mapping of current operational architectures, evaluating process efficiency against industry benchmarks and strategic objectives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-brand-border p-3 text-center font-inter font-bold text-[10px] text-black uppercase bg-white">
                    Process Mapping
                  </div>
                  <div className="border border-brand-border p-3 text-center font-inter font-bold text-[10px] text-black uppercase bg-white">
                    Resource Analysis
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="timeline-item relative pl-10 mb-12">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-none bg-brand-border-light border-2 border-brand-border flex items-center justify-center z-10">
                </div>
                <h3 className="font-plus-jakarta text-lg font-bold text-black uppercase mb-2">
                  Phase 03: Architectural Design
                </h3>
                <p className="font-inter text-gray-600 text-xs leading-relaxed">
                  Engineering the target operating model, defining new governance structures, and establishing clear accountability frameworks.
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div className="timeline-item relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-none bg-brand-purple flex items-center justify-center z-10 border-2 border-brand-bg">
                </div>
                <h3 className="font-plus-jakarta text-lg font-bold text-black uppercase mb-2">
                  Phase 04: Controlled Deployment
                </h3>
                <p className="font-inter text-gray-600 text-xs leading-relaxed">
                  Phased implementation of structural changes with continuous monitoring, feedback loops, and targeted change management initiatives.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-20 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-purple to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center relative z-10">
          <h2 className="font-plus-jakarta text-4xl md:text-5xl font-black mb-6 max-w-3xl uppercase leading-tight">
            Architect The Future Of Your Enterprise.
          </h2>
          <p className="font-inter text-gray-400 text-sm max-w-xl mb-8 leading-relaxed">
            Partner with Yorlex Management Solutions to transform complexity into sustained competitive advantage.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-brand-purple text-black hover:text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-none transition-colors border border-white hover:border-brand-purple font-inter font-bold text-[10px] uppercase"
          >
            Optimize Your Organization
          </Link>
        </div>
      </section>

    </div>
  );
}
