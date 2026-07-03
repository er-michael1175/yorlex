"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Check, Handshake, ArrowRight, Globe } from "lucide-react";
import { SectionWrapper, AnimatedHeading, GradientCard } from "@/components/ui";

export default function Contact() {
  const [clientSubmitted, setClientSubmitted] = useState(false);
  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const offices = [
    {
      city: "Gurugram (India HQ)",
      addr: "DLF Cybercity, Phase 3, Gurugram, HR, India",
      phone: "+91 124 4920 100",
      email: "in.hq@yorlex.com",
    },
    {
      city: "Chennai (South India Hub)",
      addr: "Tidel Park, Taramani, Chennai, TN, India",
      phone: "+91 44 2254 0900",
      email: "tn.hub@yorlex.com",
    },
    {
      city: "San Francisco (USA Branch)",
      addr: "Suite 400, 101 California St, San Francisco, CA, USA",
      phone: "+1 415 890 2000",
      email: "sf.branch@yorlex.com",
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
    <div className="flex-1 bg-brand-bg font-sans">
      {/* Hero Section */}
      <SectionWrapper spacing="generous" animate>
        <div className="pt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Globe className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
                Global Engagement
              </span>
            </div>
            <AnimatedHeading level={1}>
              Engage<br />Excellence.
            </AnimatedHeading>
            <p className="font-inter text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
              Direct access to Yorlex Enterprise&apos;s global authorities. Select your engagement path for guaranteed precision routing and our industry-leading 4-hour SLA response.
            </p>
          </div>
          
          {/* Map Visual (interactive dots) */}
          <div className="relative h-[350px] w-full bg-black border border-brand-border overflow-hidden rounded-none crosshair-grid select-none">
            <div className="absolute inset-0 z-0 opacity-30 grayscale">
              <img 
                className="w-full h-full object-cover mix-blend-luminosity" 
                alt="Minimalist digital world map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Pk-SOUaMX24GEvA17CbSHN-EYpVH7W4dwDCtIj2IyTqy3xaCeCPDCVsxbAbGRaRL4HImAjlnKOe7cuhQMLC82xHJbRUfH-VMdh6uumW_Y8mfCK4LAvIJB3fFbGPSoJnaUVCYMAGnM9VtOWBjAzrQd8-Zl3bY74rN8-k-Z8PBfz3-7IapdWu79gn4Kmx7PgdK6E0asyMJDszqAepLfojXyGUT7GEhPYcqWxMaj6c3pNOWdkV3F9WJeZo_ERqFZrit4pEHio211JI"
              />
            </div>
            
            {/* Ambient grid overlay */}
            <div className="absolute inset-0 bg-size-[20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] z-0"></div>

            <div className="absolute top-4 left-4 z-10 text-[9px] font-mono text-white/50">
              GLOBAL_ROUTING_GRID: ACTIVE
            </div>

            <div className="absolute top-4 right-4 z-10 text-[9px] font-mono text-brand-purple animate-pulse flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-brand-purple rounded-full inline-block"></span> 3 SITES RESPONDING
            </div>

            {/* Connection Vectors */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 87,87 Q 150,30 200,116" fill="none" stroke="rgba(161,0,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
              <path d="M 200,116 Q 260,140 312,175" fill="none" stroke="rgba(161,0,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
              <path d="M 87,87 Q 200,210 312,175" fill="none" stroke="rgba(0,122,255,0.2)" strokeWidth="1.5" />
            </svg>

            {/* NY Location Dot */}
            <div 
              className="absolute top-1/4 left-1/4 flex flex-col items-center group cursor-pointer z-20"
              onMouseEnter={() => setHoveredNode("New York (NY)")}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ transform: 'translate(-50%, -50%)', top: '25%', left: '25%' }}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-brand-purple rounded-none shadow-[0_0_10px_#a100ff] group-hover:scale-125 transition-transform z-10"></div>
                <div className="absolute inset-0 bg-brand-purple/35 rounded-none animate-ping-slow"></div>
              </div>
              {hoveredNode === "New York (NY)" && (
                <div className="absolute top-6 font-mono text-[8px] text-white bg-black border border-white/20 px-2 py-0.5 uppercase rounded-none whitespace-nowrap shadow-lg">
                  NY_HUB: 12ms ping
                </div>
              )}
            </div>

            {/* LON Location Dot */}
            <div 
              className="absolute top-1/3 left-[48%] flex flex-col items-center group cursor-pointer z-20"
              onMouseEnter={() => setHoveredNode("London (LON)")}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ transform: 'translate(-50%, -50%)', top: '33%', left: '48%' }}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-brand-purple rounded-none shadow-[0_0_10px_#a100ff] group-hover:scale-125 transition-transform z-10"></div>
                <div className="absolute inset-0 bg-brand-purple/35 rounded-none animate-ping-slow"></div>
              </div>
              {hoveredNode === "London (LON)" && (
                <div className="absolute top-6 font-mono text-[8px] text-white bg-black border border-white/20 px-2 py-0.5 uppercase rounded-none whitespace-nowrap shadow-lg">
                  LON_HUB: 34ms ping
                </div>
              )}
            </div>

            {/* SIN Location Dot */}
            <div 
              className="absolute top-1/2 left-[78%] flex flex-col items-center group cursor-pointer z-20"
              onMouseEnter={() => setHoveredNode("Singapore (SIN)")}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '78%' }}
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-brand-purple rounded-none shadow-[0_0_10px_#a100ff] group-hover:scale-125 transition-transform z-10"></div>
                <div className="absolute inset-0 bg-brand-purple/35 rounded-none animate-ping-slow"></div>
              </div>
              {hoveredNode === "Singapore (SIN)" && (
                <div className="absolute top-6 font-mono text-[8px] text-white bg-black border border-white/20 px-2 py-0.5 uppercase rounded-none whitespace-nowrap shadow-lg">
                  SIN_HUB: 78ms ping
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

      {/* Double-Column Forms */}
      <SectionWrapper spacing="default" animate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Client Engagement Form */}
          <div className="bg-black text-white p-8 md:p-10 border border-black relative overflow-hidden group rounded-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h2 className="font-plus-jakarta text-2xl font-bold uppercase mb-1">Become a Client</h2>
                <p className="font-inter text-gray-400 text-xs">For organizations seeking strategic partnership.</p>
              </div>
              <Handshake className="h-10 w-10 text-brand-purple" />
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-1">First Name</label>
                    <input required type="text" className="w-full bg-transparent rounded-none border border-brand-border text-white py-2 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-sm" placeholder="Enter name" />
                  </div>
                  <div>
                    <label className="block font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-1">Last Name</label>
                    <input required type="text" className="w-full bg-transparent rounded-none border border-brand-border text-white py-2 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-sm" placeholder="Enter surname" />
                  </div>
                </div>
                <div>
                  <label className="block font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-1">Corporate Email</label>
                  <input required type="email" className="w-full bg-transparent rounded-none border border-brand-border text-white py-2 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-sm" placeholder="email@company.com" />
                </div>
                <div>
                  <label className="block font-inter font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-1">Area of Interest</label>
                  <select required className="w-full bg-transparent rounded-none border border-brand-border text-gray-300 py-2 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-sm cursor-pointer appearance-none">
                    <option className="bg-black text-white" value="tech">Technology Architecture</option>
                    <option className="bg-black text-white" value="fin">Financial Strategy</option>
                    <option className="bg-black text-white" value="mgt">Executive Management</option>
                  </select>
                </div>
                <button type="submit" className="group w-full inline-flex items-center justify-center rounded-none uppercase tracking-wider font-bold font-inter min-h-[44px] min-w-[44px] transition-all duration-300 cursor-pointer bg-linear-to-r from-brand-purple to-brand-blue text-white bg-size-[200%_100%] hover:bg-position-[100%_0] px-8 py-4 text-base">
                  <span>Initiate Engagement</span>
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* General Inquiries Form */}
          <div className="bg-white p-8 md:p-10 border border-brand-border relative overflow-hidden group hover:border-black transition-colors rounded-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-plus-jakarta text-2xl font-bold uppercase mb-1">General Inquiries</h2>
                <p className="font-inter text-gray-500 text-xs">For media, careers, or general queries.</p>
              </div>
              <Mail className="h-10 w-10 text-black" />
            </div>

            {generalSubmitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-none bg-brand-purple/10 border border-brand-purple text-brand-purple flex items-center justify-center mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-black mb-2 font-plus-jakarta uppercase">Inquiry Received</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed font-inter">
                  Thank you. Our communications team will establish contact within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleGeneralSubmit} className="space-y-6">
                <div>
                  <label className="block font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-1">Full Name</label>
                  <input required type="text" className="w-full bg-transparent rounded-none border border-brand-border text-black py-2 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-sm" placeholder="Enter full name" />
                </div>
                <div>
                  <label className="block font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email Address</label>
                  <input required type="email" className="w-full bg-transparent rounded-none border border-brand-border text-black py-2 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-sm" placeholder="Enter email address" />
                </div>
                <div>
                  <label className="block font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-1">Message</label>
                  <textarea required rows={3} className="w-full bg-transparent rounded-none border border-brand-border text-black py-2 px-3 focus:border-brand-purple focus:outline-none transition-colors resize-none font-inter text-sm" placeholder="How can we assist you?" />
                </div>
                <button type="submit" className="group w-full inline-flex items-center justify-center rounded-none uppercase tracking-wider font-bold font-inter min-h-[44px] min-w-[44px] transition-all duration-300 cursor-pointer bg-transparent border border-brand-border text-brand-text hover:bg-black hover:text-white hover:border-black px-8 py-4 text-base">
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </SectionWrapper>

      {/* Global Offices */}
      <SectionWrapper spacing="default" animate>
        <div className="border-t border-brand-border pt-16">
          <AnimatedHeading level={2} className="text-center mb-12">
            Global Offices
          </AnimatedHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <GradientCard key={office.city} variant="default" hover="lift">
                <h4 className="font-bold text-black text-lg font-plus-jakarta uppercase tracking-wide flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-brand-purple rounded-none" />
                  {office.city}
                </h4>
                <div className="space-y-2.5 text-xs md:text-sm text-gray-500 font-inter">
                  <div className="flex gap-2">
                    <MapPin className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span>{office.addr}</span>
                  </div>
                  <div className="flex gap-2">
                    <Phone className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="font-mono">{office.phone}</span>
                  </div>
                  <div className="flex gap-2">
                    <Mail className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <a href={`mailto:${office.email}`} className="hover:text-brand-purple transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
