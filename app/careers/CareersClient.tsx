"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin, X, Briefcase } from "lucide-react";
import { ICON_MAP } from "@/lib/content/iconMap";
import type { CareersContent } from "@/lib/content/careers";
import { SectionWrapper, PremiumButton } from "@/components/ui";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function CareersClient({ content }: { content: CareersContent }) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantResume, setApplicantResume] = useState("");

  const whatsappUrl = getWhatsAppUrl("Hi Yorlex, I'd like to talk to your team about career opportunities.");
  const contactHref = whatsappUrl ?? "/contact";

  const { perks, jobs } = content;

  const filteredJobs =
    activeFilter === "All"
      ? jobs
      : jobs.filter((job) => job.dept.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="flex-1 bg-brand-bg font-sans">
      {/* Hero Section */}
      <SectionWrapper
        background="grid"
        spacing="none"
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center [&>div]:w-full"
        animate
      >
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-3/4 opacity-90 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 42%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 42%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={content.heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="hidden lg:block absolute inset-0 bg-brand-bg opacity-20 pointer-events-none" />

        <div className="relative">
          <div className="lg:hidden -mx-6 -mt-32 md:-mt-40 mb-6 relative h-64 sm:h-80 overflow-hidden rounded-b-4xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={content.heroImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-bg to-transparent" />
          </div>

          <div className="flex flex-col items-start gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Briefcase className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-500">
                {content.heroBadge}
              </span>
            </div>
            <h1 className="font-plus-jakarta text-5xl md:text-7xl font-black text-black leading-none">
              {content.heroHeading}
            </h1>
            <p className="font-inter text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              {content.heroSubheading}
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#positions"
                className="inline-flex items-center justify-center gap-2 font-inter font-bold text-xs bg-black text-white hover:bg-brand-purple hover:text-brand-text px-8 py-4 rounded-2xl transition-colors border border-black hover:border-brand-purple"
              >
                Explore Opportunities
                <ArrowRight className="h-4 w-4" />
              </a>
              <PremiumButton
                variant="secondary"
                size="md"
                href={contactHref}
                target={whatsappUrl ? "_blank" : undefined}
                rel={whatsappUrl ? "noopener noreferrer" : undefined}
                className="rounded-2xl"
              >
                Talk to Our Team
              </PremiumButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Employee Value Proposition (Bento Grid) */}
      <section className="bg-brand-border-light/40 py-20 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-plus-jakarta text-3xl font-black text-black mb-4">
              {content.perksHeading}
            </h2>
            <p className="font-inter text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              {content.perksSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">
            {perks.map((perk) => {
              const Icon = ICON_MAP[perk.icon] ?? ICON_MAP.Globe;
              const spanClass = perk.featured ? "md:col-span-8" : "md:col-span-4";
              const colorClass = perk.featured
                ? "bg-black text-white border-black"
                : "bg-white text-black border-brand-border hover:border-black";
              return (
                <div
                  key={perk.title}
                  className={`flex flex-col justify-between border rounded-2xl overflow-hidden group transition-all duration-300 ${spanClass} ${colorClass}`}
                >
                  <div className="relative h-32 overflow-hidden shrink-0">
                    <img src={perk.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className={`absolute inset-0 ${perk.featured ? "bg-yorlex-green/25" : "bg-yorlex-navy/15"}`} />
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className={`w-12 h-12 flex items-center justify-center mb-6 rounded-2xl ${
                        perk.featured ? "bg-brand-purple text-brand-text" : "bg-brand-bg text-black border border-brand-border group-hover:border-black"
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-plus-jakarta text-lg font-bold mb-3">
                        {perk.title}
                      </h3>
                      <p className={`font-inter text-xs leading-relaxed ${
                        perk.featured ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Career Path Tile */}
            <div className="md:col-span-8 border border-black bg-black text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div>
                <h3 className="font-plus-jakarta text-lg font-bold mb-2">Clear Growth Ladder</h3>
                <p className="font-inter text-xs text-gray-400 max-w-xl leading-relaxed">
                  Structured progression with transparent milestones, from your first engagement to executive leadership.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="border border-white/10 p-4 bg-white/5 rounded-xl relative group hover:border-brand-purple transition-colors">
                  <span className="absolute top-3 right-3 font-mono text-[8px] text-brand-purple">01</span>
                  <h4 className="font-plus-jakarta font-bold text-xs mb-1">Associate</h4>
                  <p className="font-inter text-[10px] text-gray-400 leading-normal">Collaborative engineering, technical compliance, risk auditing, B2B campaigns.</p>
                </div>
                <div className="border border-white/10 p-4 bg-white/5 rounded-xl relative group hover:border-brand-purple transition-colors">
                  <span className="absolute top-3 right-3 font-mono text-[8px] text-brand-purple">02</span>
                  <h4 className="font-plus-jakarta font-bold text-xs mb-1">Director</h4>
                  <p className="font-inter text-[10px] text-gray-400 leading-normal">Systems architecture, regulatory frameworks, regional P&L, resource orchestration.</p>
                </div>
                <div className="border border-white/10 p-4 bg-white/5 rounded-xl relative group hover:border-brand-purple transition-colors">
                  <span className="absolute top-3 right-3 font-mono text-[8px] text-brand-purple">03</span>
                  <h4 className="font-plus-jakarta font-bold text-xs mb-1">Managing Partner</h4>
                  <p className="font-inter text-[10px] text-gray-400 leading-normal">Equity allocation, succession strategy, regional leadership, C-level governance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Job Portal UI */}
      <section className="max-w-7xl mx-auto px-6 py-24" id="positions">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border pb-6">
          <div>
            <h2 className="font-plus-jakarta text-3xl font-black text-black mb-2">
              Open Positions
            </h2>
            <p className="font-inter text-gray-500 text-xs font-semibold">
              Filter by discipline to find your next architectural role.
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 font-inter font-bold text-[10px]">
            {["All", "Technology", "Finance", "Management"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2.5 min-h-11 border transition-all whitespace-nowrap rounded-2xl ${
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

        <div className="flex flex-col gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.title}
                onClick={() => setSelectedRole(job.title)}
                className="border border-brand-border bg-white hover:bg-brand-bg transition-colors p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer rounded-2xl"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-brand-border-light text-black font-inter font-bold text-[9px] px-2 py-0.5 border border-brand-border">
                      {job.dept}
                    </span>
                    <span className="text-gray-400 font-inter text-xs flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-purple shrink-0" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="font-plus-jakarta text-xl font-bold text-black tracking-wide group-hover:text-brand-purple transition-colors">
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
          <div className="bg-white border border-brand-border p-8 md:p-10 rounded-2xl max-w-lg w-full relative">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute right-6 top-6 w-10 h-10 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-black text-black mb-2 font-plus-jakarta">
              Apply for Role
            </h3>
            <p className="text-[10px] text-brand-purple font-bold mb-6">
              {selectedRole}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const message = [
                  `Hi Yorlex, I'd like to apply for the ${selectedRole} role.`,
                  `Name: ${applicantName}`,
                  `Email: ${applicantEmail}`,
                  `Resume / LinkedIn: ${applicantResume}`,
                ].join("\n");
                const url = getWhatsAppUrl(message);
                if (url) {
                  window.open(url, "_blank", "noopener,noreferrer");
                }
                setSelectedRole(null);
                setApplicantName("");
                setApplicantEmail("");
                setApplicantResume("");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[10px] font-bold text-gray-400 mb-2 font-inter">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full bg-white border border-brand-border rounded-2xl px-4 py-3 text-black text-sm focus:outline-none focus:border-brand-purple font-inter"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 mb-2 font-inter">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full bg-white border border-brand-border rounded-2xl px-4 py-3 text-black text-sm focus:outline-none focus:border-brand-purple font-inter"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 mb-2 font-inter">
                  Resume / LinkedIn Link
                </label>
                <input
                  required
                  type="url"
                  placeholder="https://..."
                  value={applicantResume}
                  onChange={(e) => setApplicantResume(e.target.value)}
                  className="w-full bg-white border border-brand-border rounded-2xl px-4 py-3 text-black text-sm focus:outline-none focus:border-brand-purple font-inter"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-brand-purple hover:text-brand-text font-bold text-xs py-3.5 rounded-2xl transition-colors border border-black hover:border-brand-purple font-inter font-bold text-[10px]"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="w-full bg-white text-black border border-brand-border hover:bg-gray-50 font-bold text-xs py-3.5 rounded-2xl transition-colors font-inter"
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
