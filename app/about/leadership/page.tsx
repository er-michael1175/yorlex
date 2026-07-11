"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Scale, ShieldCheck } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ExecutiveLeadership() {
  const leaders = [
    {
      name: "Sarah Jenkins",
      role: "Chief Executive Officer",
      bio: "Sarah Jenkins brings over two decades of transformative leadership in global operations and strategic growth. She is the architect behind Yorlex's high-contrast approach to multi-disciplinary expansion, ensuring unapologetic adherence to elite standards and absolute authority in every market segment.",
      image: "/images/about/leader-ceo.jpg",
      linkedin: "#",
    },
    {
      name: "Marcus Vance",
      role: "Chief Operating Officer",
      bio: "Tasked with operationalizing the firm's overarching vision, Marcus Vance champions paper-white precision in data-heavy enterprise workflows. His rigorous, systemic approach guarantees transparency and rock-solid stability for our global partners, cementing Yorlex as an immovable force.",
      image: "/images/about/leader-coo.jpg",
      linkedin: "#",
    },
  ];

  return (
    <div className="flex-1 bg-brand-bg pt-32 pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16 pb-12 border-b border-black">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="max-w-[700px]">
            <p className="font-inter font-bold text-[10px] text-brand-purple tracking-[0.15em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-purple block"></span>
              Executive Authority
            </p>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-black text-black leading-tight">
              Architects of<br />Global Stability.
            </h1>
          </div>
          <div className="max-w-[400px]">
            <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed">
              The Yorlex leadership team relies on paper-white precision and data-driven rigour. We project absolute authority, guiding multi-disciplinary excellence across global sectors.
            </p>
          </div>
        </div>
        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden">
          <img
            src="/images/about/leadership-hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-yorlex-navy/25" />
        </div>
      </section>

      {/* Leadership Bento Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {leaders.map((leader) => (
            <article 
              key={leader.name} 
              className="col-span-1 md:col-span-6 flex flex-col bg-white border border-brand-border group hover:border-brand-purple transition-colors duration-300 rounded-2xl"
            >
              <div className="relative w-full h-[450px] overflow-hidden bg-brand-bg border-b border-brand-border">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out pointer-events-none"
                  alt={`Portrait of ${leader.name}`}
                  src={leader.image}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-plus-jakarta text-2xl font-bold text-black mb-1">
                      {leader.name}
                    </h2>
                    <p className="font-inter font-bold text-[10px] text-brand-purple">
                      {leader.role}
                    </p>
                  </div>
                  <a
                    href={leader.linkedin}
                    aria-label={`${leader.name} LinkedIn Profile`}
                    className="w-10 h-10 border border-brand-border rounded-2xl flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-all"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
                <p className="font-inter text-xs md:text-sm text-gray-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </article>
          ))}

          {/* Governance Bento Tiles */}
          
          {/* Tile 1 (col-span-4, bg-black, text-white) */}
          <div className="col-span-1 md:col-span-4 bg-black text-white p-8 flex flex-col justify-between min-h-[300px] border border-black relative overflow-hidden group rounded-2xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-purple to-transparent pointer-events-none"></div>
            <div className="w-12 h-12 bg-brand-purple text-brand-text flex items-center justify-center mb-8 relative z-10">
              <Scale className="h-6 w-6" />
            </div>
            <div className="relative z-10">
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-white">
                Rigorous Governance
              </h3>
              <p className="font-inter text-gray-400 text-xs leading-relaxed">
                Our executive board operates outside of friendly consumer tropes, prioritizing strict adherence to architectural, systemic governance models.
              </p>
            </div>
          </div>

          {/* Tile 2 (col-span-8, bg-white, text-black, border) */}
          <div className="col-span-1 md:col-span-8 bg-white border border-brand-border p-8 flex flex-col justify-between min-h-[300px] rounded-2xl hover:border-brand-purple transition-all duration-300 group">
            <div className="w-12 h-12 bg-brand-bg border border-brand-border text-brand-purple flex items-center justify-center mb-8">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-plus-jakarta text-lg font-bold mb-3 text-black">
                Verified Success
              </h3>
              <p className="font-inter text-gray-500 text-xs leading-relaxed mb-6 max-w-xl">
                Our operations are constantly benchmarked against global standards. 100% of our clients receive third-party audited efficiency diagnostics to ensure absolute stability and compliance.
              </p>
              <Link 
                href="/success-stories"
                className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-purple font-inter border-b border-brand-purple pb-0.5 hover:text-black hover:border-black transition-colors"
              >
                Read Success Stories <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
