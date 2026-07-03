"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Coins, HeartPulse, Factory, Store, Truck } from "lucide-react";

export default function Industries() {
  const sectors = [
    {
      name: "Financial Services",
      type: "big",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-EWzji4eT2RZRX0lNDQLOggG7LWE3xAvgWhPWonGpIjwkCubEm5jLCjG4gYt9TA6gZjjagutVgAmF_Qb-80qpTWI4t9OS4TB_pVNI-_CuoGJ-08Va3oPuBZ3PyY9lz8ie-Zi3Ro4VQuUXPg3MRjWP5rAC82h9ughhIs_6syBv3PoUHZtzDzNmvgHnb7odvkVSO5FCja9yI_qXwAD9mZprodw8mCyU5dmxRCw1TYWtlZhHykEIg5zrq9tbuk7wDR1OP50jArlvKRU",
      desc: "Capital allocation and regulatory framework audits.",
      icon: Coins,
      spanClass: "md:col-span-8 row-span-2 bg-black text-white",
      textClass: "text-white opacity-80",
      titleClass: "text-white font-plus-jakarta",
      arrowClass: "text-white",
    },
    {
      name: "Healthcare",
      type: "small",
      icon: HeartPulse,
      spanClass: "md:col-span-4 row-span-1 bg-brand-bg text-black",
      textClass: "text-black",
      titleClass: "text-black font-plus-jakarta",
      arrowClass: "text-black",
    },
    {
      name: "Manufacturing",
      type: "image",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfuWjj0j2yiZwZZ87GvsojmGN8JTiCfNk-j0pBTqDxfjHFfxLBw0AsgnzGWHtvl6SLg7nHgdLwY2vrsrgHjuhOyfZR3TaLh8RERQK4mhXFpwySsDW2a0et1GMvqw9vJmA1TINjWYuCswy7z0wnRXq1IinAnWAuMCqZL6PQ2IRZQ2hM8lfjPQlLbgbOmExmfIwquJwIM78BRJPLLLHP6iLhzfyyuh3z2mW_n0Vw67_1sApCoyBZfh9eo9emFcmkj8FegQS8nuoKGBQ",
      icon: Factory,
      spanClass: "md:col-span-4 row-span-1 bg-gray-200 text-black",
      textClass: "text-black bg-white/90 px-2.5 py-1 backdrop-blur-sm",
      titleClass: "text-black font-plus-jakarta",
      arrowClass: "text-black bg-white/90 p-1.5 backdrop-blur-sm",
      hasOverlayText: true,
    },
    {
      name: "Retail",
      type: "data",
      icon: Store,
      desc: "Optimizing supply chain resilience and customer experience through advanced analytics.",
      spanClass: "md:col-span-6 row-span-1 bg-white text-black",
      textClass: "text-gray-500",
      titleClass: "text-black font-plus-jakarta",
      arrowClass: "text-brand-purple",
      hasDetails: true,
    },
    {
      name: "Logistics",
      type: "image-dark",
      bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0AyezMsZHSznriXOHvtg4k6hQukKgrnC2RKfvztm-axXY7M7KnLYR0kNNVTz_SBdmO_nbpUo5Xu_Y3-ztNMWx-Tk6cchzOfexST3yJ81BmTDsuql_HswnLHzkD5244sUTVggkG9NZZKBh_oye-8Ev_7NiNWM9uRZt_UMC_w18tBm8MVFNnyLKvgQWYukPKJMgOsABOsdnc9u1LLMWPyid8oZDLzYKcMWCGQQmDDwhpGeuLeAcbxacXCQcuzL4KP-PacfRfME_LSQ",
      icon: Truck,
      spanClass: "md:col-span-6 row-span-1 bg-black text-white",
      textClass: "text-white/60",
      titleClass: "text-white font-plus-jakarta",
      arrowClass: "text-white",
    },
  ];

  return (
    <div className="flex-grow bg-brand-bg pt-32 pb-24 font-sans">
      
      {/* Hero Section */}
      <header className="w-full max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-4xl">
          <h1 className="font-plus-jakarta text-5xl md:text-6xl font-black text-black mb-6 uppercase">
            Industries We Serve
          </h1>
          <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl">
            Transforming global ecosystems through rigorous analysis, architectural precision, and uncompromising technological excellence. We engineer solutions for complex enterprise challenges.
          </p>
        </div>
      </header>

      {/* Bento Grid Canvas */}
      <main className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className={`group relative overflow-hidden flex flex-col justify-between p-8 border border-brand-border rounded-none ${sector.spanClass}`}
              >
                {/* Background Image for Image Cards */}
                {sector.bgImage && (
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-40 grayscale group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    style={{ backgroundImage: `url('${sector.bgImage}')` }}
                  />
                )}

                {/* Card Top */}
                <div className="relative z-10 flex justify-between items-start w-full">
                  {sector.hasDetails ? (
                    <h2 className="font-plus-jakarta text-2xl font-bold uppercase">{sector.name}</h2>
                  ) : sector.hasOverlayText ? (
                    <h2 className="font-plus-jakarta text-2xl font-bold uppercase bg-white/90 px-3 py-1 text-black backdrop-blur-sm">
                      {sector.name}
                    </h2>
                  ) : (
                    <div>
                      <span className={`block font-inter font-bold text-[10px] uppercase tracking-widest mb-1 ${sector.textClass}`}>
                        Sector
                      </span>
                      <h2 className="font-plus-jakarta text-3xl font-black uppercase">{sector.name}</h2>
                    </div>
                  )}
                  <Icon className={`h-6 w-6 opacity-60 ${sector.type === "big" ? "text-white" : "text-black"}`} />
                </div>

                {/* Card Bottom */}
                <div className="relative z-10 w-full flex items-end justify-between mt-auto">
                  {sector.hasDetails && (
                    <p className="text-xs text-gray-500 max-w-xs pr-4">{sector.desc}</p>
                  )}
                  
                  {sector.hasOverlayText ? (
                    <span className="p-2 bg-white/90 text-black backdrop-blur-sm group-hover:translate-x-2 transition-transform duration-300">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  ) : (
                    <span className={`group-hover:translate-x-2 transition-transform duration-300 ${sector.arrowClass} ml-auto`}>
                      <ArrowRight className="h-6 w-6" />
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </main>

    </div>
  );
}
