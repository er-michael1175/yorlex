"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Check, Handshake, ArrowRight, Globe } from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

export default function Contact() {
  const [clientSubmitted, setClientSubmitted] = useState(false);
  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const offices = [
    {
      city: "San Francisco (North America HQ)",
      addr: "Suite 400, 101 California St, San Francisco, CA, USA",
      phone: "+1 415 890 2000",
      email: "sf@yorlex.com",
    },
    {
      city: "London (Europe HQ)",
      addr: "30 St Mary Axe, London EC3A 8BF, United Kingdom",
      phone: "+44 20 7902 4000",
      email: "ldn@yorlex.com",
    },
    {
      city: "Chennai (APAC HQ)",
      addr: "Tidel Park, Taramani, Chennai, TN, India",
      phone: "+91 44 2254 0900",
      email: "maa@yorlex.com",
    },
  ];

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClientSubmitted(true);
  };

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralSubmitted(true);
  };

  return (
    <div className="flex-grow bg-brand-bg font-sans pt-0 pb-0">
      {/* Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="min-h-[calc(100vh-64px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Globe className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555 uppercase tracking-widest">
                Global Engagement
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black uppercase tracking-tight">
              Engage Excellence
            </h1>
            <p className="font-inter text-gray-655 text-sm leading-relaxed max-w-xl">
              Direct access to Yorlex Enterprise's global authorities. Select your engagement path for guaranteed precision routing and our industry-leading 4-hour SLA response.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="#forms-section"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Request Strategy Consultation
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="#offices-section"
              >
                View Offices
              </PremiumButton>
            </div>
          </div>
          
          {/* Map Visual (interactive dots matching SF, London, Chennai) */}
          <div className="lg:col-span-5 relative min-h-80 w-full bg-slate-950 border border-brand-border-light/10 overflow-hidden rounded-none select-none shadow-2xl">
            <div className="absolute inset-0 z-0 opacity-20 grayscale">
              <img 
                className="w-full h-full object-cover mix-blend-luminosity" 
                alt="Minimalist digital world map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Pk-SOUaMX24GEvA17CbSHN-EYpVH7W4dwDCtIj2IyTqy3xaCeCPDCVsxbAbGRaRL4HImAjlnKOe7cuhQMLC82xHJbRUfH-VMdh6uumW_Y8mfCK4LAvIJB3fFbGPSoJnaUVCYMAGnM9VtOWBjAzrQd8-Zl3bY74rN8-k-Z8PBfz3-7IapdWu79gn4Kmx7PgdK6E0asyMJDszqAepLfojXyGUT7GEhPYcqWxMaj6c3pNOWdkV3F9WJeZo_ERqFZrit4pEHio211JI"
              />
            </div>
            
            {/* Ambient grid overlay */}
            <div className="absolute inset-0 bg-size-[20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] z-0"></div>

            <div className="absolute top-4 left-4 z-10 text-[8px] font-mono text-white/50">
              GLOBAL_ROUTING_GRID: ACTIVE
            </div>

            <div className="absolute top-4 right-4 z-10 text-[8px] font-mono text-brand-purple animate-pulse flex items-center gap-1">
              <span className="w-1 h-1 bg-brand-purple rounded-full inline-block"></span> 3 ACTIVE NODES
            </div>

            {/* Connection Vectors */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 400 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 80,100 Q 180,60 220,110" fill="none" stroke="rgba(161,0,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
              <path d="M 220,110 Q 280,160 380,210" fill="none" stroke="rgba(161,0,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
              <path d="M 80,100 Q 200,230 380,210" fill="none" stroke="rgba(0,122,255,0.2)" strokeWidth="1.5" />
            </svg>

            {/* SF Node (Top Left) */}
            <div 
              className="absolute flex flex-col items-center group cursor-pointer z-20"
              onMouseEnter={() => setHoveredNode("sf")}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ transform: "translate(-50%, -50%)", top: "35%", left: "20%" }}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-purple rounded-none shadow-[0_0_10px_#a100ff] group-hover:scale-125 transition-transform z-10"></div>
                <div className="absolute inset-0 bg-brand-purple/35 rounded-none animate-ping-slow"></div>
              </div>
              {hoveredNode === "sf" && (
                <div className="absolute top-6 font-mono text-[7px] text-white bg-black border border-white/20 px-2 py-0.5 uppercase rounded-none whitespace-nowrap shadow-lg">
                  SF_HQ: 14ms Latency
                </div>
              )}
            </div>

            {/* LON Node (Top Middle) */}
            <div 
              className="absolute flex flex-col items-center group cursor-pointer z-20"
              onMouseEnter={() => setHoveredNode("lon")}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ transform: "translate(-50%, -50%)", top: "38%", left: "55%" }}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-purple rounded-none shadow-[0_0_10px_#a100ff] group-hover:scale-125 transition-transform z-10"></div>
                <div className="absolute inset-0 bg-brand-purple/35 rounded-none animate-ping-slow"></div>
              </div>
              {hoveredNode === "lon" && (
                <div className="absolute top-6 font-mono text-[7px] text-white bg-black border border-white/20 px-2 py-0.5 uppercase rounded-none whitespace-nowrap shadow-lg">
                  LON_HQ: 38ms Latency
                </div>
              )}
            </div>

            {/* Chennai Node (Bottom Right) */}
            <div 
              className="absolute flex flex-col items-center group cursor-pointer z-20"
              onMouseEnter={() => setHoveredNode("maa")}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ transform: "translate(-50%, -50%)", top: "68%", left: "82%" }}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-brand-purple rounded-none shadow-[0_0_10px_#a100ff] group-hover:scale-125 transition-transform z-10"></div>
                <div className="absolute inset-0 bg-brand-purple/35 rounded-none animate-ping-slow"></div>
              </div>
              {hoveredNode === "maa" && (
                <div className="absolute top-6 font-mono text-[7px] text-white bg-black border border-white/20 px-2 py-0.5 uppercase rounded-none whitespace-nowrap shadow-lg">
                  MAA_HUB: 72ms Latency
                </div>
              )}
            </div>

            {/* Bottom Telemetry Details */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-center text-[7px] font-mono text-white/30 border-t border-white/10 pt-2">
              <span>SATELLITE_TUNNEL_ESTABLISHED: TRUE</span>
              <span>GEO_ZONE: GLOBAL_EAST_WEST</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Forms Section */}
      <SectionWrapper id="forms-section" background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Client Engagement Form */}
          <div className="bg-black text-white p-8 md:p-10 border border-black relative overflow-hidden group rounded-none shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h2 className="font-plus-jakarta text-2xl font-bold uppercase mb-1">Become a Client</h2>
                <p className="font-inter text-gray-450 text-xs">For organizations seeking strategic partnership.</p>
              </div>
              <Handshake className="h-9 w-9 text-brand-purple" />
            </div>

            {clientSubmitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-none bg-brand-purple/10 border border-brand-purple text-brand-purple flex items-center justify-center mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-plus-jakarta uppercase">Briefing Registered</h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed font-inter">
                  Our strategic partners will review your objectives and contact you within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleClientSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter font-bold text-[9px] text-gray-400 uppercase tracking-widest mb-1">First Name</label>
                    <input required type="text" className="w-full bg-transparent rounded-none border border-brand-border text-white py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block font-inter font-bold text-[9px] text-gray-400 uppercase tracking-widest mb-1">Last Name</label>
                    <input required type="text" className="w-full bg-transparent rounded-none border border-brand-border text-white py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block font-inter font-bold text-[9px] text-gray-400 uppercase tracking-widest mb-1">Corporate Email</label>
                  <input required type="email" className="w-full bg-transparent rounded-none border border-brand-border text-white py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="email@company.com" />
                </div>
                <div>
                  <label className="block font-inter font-bold text-[9px] text-gray-400 uppercase tracking-widest mb-1">Area of Interest</label>
                  <div className="relative">
                    <select required className="w-full bg-transparent rounded-none border border-brand-border text-white py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs cursor-pointer appearance-none">
                      <option className="bg-black text-white" value="tech">Technology Architecture &amp; Outsourcing</option>
                      <option className="bg-black text-white" value="fin">Fiduciary &amp; Tax Solutions</option>
                      <option className="bg-black text-white" value="mkt">Marketing Brand &amp; ROI Campaigns</option>
                      <option className="bg-black text-white" value="mgt">Management &amp; Operational Consulting</option>
                      <option className="bg-black text-white" value="spt">Business Support &amp; Back-Office/BPO</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-white hover:bg-brand-purple text-black hover:text-white py-4 text-xs font-bold uppercase tracking-widest rounded-none transition-colors mt-4 flex items-center justify-center gap-2 border border-white hover:border-brand-purple">
                  <span>Initiate Engagement</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* General Inquiries Form */}
          <div className="bg-white p-8 md:p-10 border border-brand-border relative overflow-hidden group hover:border-brand-purple transition-colors rounded-none shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-plus-jakarta text-2xl font-bold uppercase mb-1">General Inquiries</h2>
                <p className="font-inter text-gray-550 text-xs">For media, careers, or general queries.</p>
              </div>
              <Mail className="h-9 w-9 text-black animate-none" />
            </div>

            {generalSubmitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-none bg-brand-purple/10 border border-brand-purple text-brand-purple flex items-center justify-center mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-black mb-2 font-plus-jakarta uppercase">Inquiry Received</h4>
                <p className="text-xs text-gray-550 max-w-sm mx-auto leading-relaxed font-inter">
                  Thank you. Our communications team will establish contact within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleGeneralSubmit} className="space-y-6">
                <div>
                  <label className="block font-inter font-bold text-[9px] text-gray-500 uppercase tracking-widest mb-1">Full Name</label>
                  <input required type="text" className="w-full bg-transparent rounded-none border border-brand-border text-black py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block font-inter font-bold text-[9px] text-gray-500 uppercase tracking-widest mb-1">Email Address</label>
                  <input required type="email" className="w-full bg-transparent rounded-none border border-brand-border text-black py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="jane@doe.com" />
                </div>
                <div>
                  <label className="block font-inter font-bold text-[9px] text-gray-500 uppercase tracking-widest mb-1">Message</label>
                  <textarea required rows={3} className="w-full bg-transparent rounded-none border border-brand-border text-black py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors resize-none font-inter text-xs" placeholder="How can we assist you?" />
                </div>
                <button type="submit" className="w-full bg-black hover:bg-brand-purple text-white py-4 text-xs font-bold uppercase tracking-widest rounded-none transition-colors mt-4 flex items-center justify-center gap-2 border border-black hover:border-brand-purple">
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </SectionWrapper>

      {/* Global Offices */}
      <SectionWrapper id="offices-section" background="default" spacing="compact" className="border-t border-brand-border-light" animate>
        <div>
          <div className="text-center mb-12">
            <span className="font-inter font-bold text-[10px] text-brand-purple uppercase tracking-widest block mb-2">// CORPORATE SITES</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black uppercase">Global Offices</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div
                key={office.city}
                className="bg-white border border-brand-border p-8 flex flex-col justify-between group hover:border-brand-purple transition-all duration-300 rounded-none shadow-sm relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-purple transition-colors duration-250" />
                
                <div>
                  <h4 className="font-bold text-black text-base font-plus-jakarta uppercase tracking-wide flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-none" />
                    {office.city}
                  </h4>
                  <div className="space-y-4 text-xs text-gray-550 font-inter">
                    <div className="flex gap-2.5 items-start">
                      <MapPin className="h-4.5 w-4.5 text-brand-purple shrink-0 mt-0.5" />
                      <span>{office.addr}</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <Phone className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                      <span className="font-mono font-semibold">{office.phone}</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <Mail className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-brand-purple transition-colors font-semibold">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
