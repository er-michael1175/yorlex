"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Check, Handshake, ArrowRight, Globe, MessageCircle } from "lucide-react";
import { SectionWrapper, PremiumButton } from "@/components/ui";
import type { ContactContent } from "@/lib/content/contact";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AREA_OF_INTEREST_LABELS: Record<string, string> = {
  tech: "Technology Architecture & Outsourcing",
  fin: "Fiduciary & Tax Solutions",
  mkt: "Marketing Brand & ROI Campaigns",
  mgt: "Management & Operational Consulting",
  spt: "Business Support & Back-Office/BPO",
};

function openWhatsAppWith(message: string) {
  const url = getWhatsAppUrl(message);
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export default function ContactClient({ content }: { content: ContactContent }) {
  const [clientSubmitted, setClientSubmitted] = useState(false);
  const [generalSubmitted, setGeneralSubmitted] = useState(false);
  const [clientError, setClientError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [clientSubmitting, setClientSubmitting] = useState(false);
  const [generalSubmitting, setGeneralSubmitting] = useState(false);

  const { offices } = content;
  const primaryOffice = offices[0];
  const whatsappUrl = getWhatsAppUrl("Hi Yorlex, I'd like to get in touch.");

  const handleClientSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClientError(null);
    setClientSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const areaOfInterest = String(formData.get("areaOfInterest") ?? "");

    if (!EMAIL_REGEX.test(email)) {
      setClientError("Please enter a valid email address.");
      setClientSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "client",
          name: `${firstName} ${lastName}`.trim(),
          email,
          areaOfInterest,
          message: `Area of interest: ${areaOfInterest}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again or email us directly.");
      }
      setClientSubmitted(true);
      const areaLabel = AREA_OF_INTEREST_LABELS[areaOfInterest] ?? areaOfInterest;
      openWhatsAppWith(
        `Hi Yorlex, I'm ${firstName} ${lastName} (${email}). I'd like to discuss ${areaLabel}.`
      );
    } catch (err) {
      setClientError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly.");
    } finally {
      setClientSubmitting(false);
    }
  };

  const handleGeneralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralError(null);
    setGeneralSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!EMAIL_REGEX.test(email)) {
      setGeneralError("Please enter a valid email address.");
      setGeneralSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "general", name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again or email us directly.");
      }
      setGeneralSubmitted(true);
      openWhatsAppWith(`Hi Yorlex, I'm ${name} (${email}). ${message}`);
    } catch (err) {
      setGeneralError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly.");
    } finally {
      setGeneralSubmitting(false);
    }
  };

  return (
    <div className="flex-grow bg-brand-bg font-sans pt-0 pb-0">
      {/* Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="relative overflow-hidden lg:min-h-[calc(100vh-80px)] flex flex-col justify-center [&>div]:w-full py-16 md:py-20" animate>
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-3/4 opacity-90 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 45%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 45%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/contact/contact-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute inset-0 bg-brand-bg opacity-20 pointer-events-none" />

        <div className="lg:hidden -mx-6 -mt-16 md:-mt-20 mb-6 relative h-64 sm:h-80 overflow-hidden rounded-b-4xl shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/contact/contact-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-bg to-transparent" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Globe className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555">
                {content.heroBadge}
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black tracking-tight">
              {content.heroHeading}
            </h1>
            <p className="font-inter text-gray-655 text-sm leading-relaxed max-w-xl">
              {content.heroSubheading}
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
                View Our Office
              </PremiumButton>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <div className="flex -space-x-2.5">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    key={letter}
                    className="w-8 h-8 rounded-full bg-yorlex-green-soft border-2 border-brand-bg flex items-center justify-center text-yorlex-green-dark font-bold text-xs"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="font-inter text-sm text-gray-555">
                <span className="font-semibold text-black">2,000+ enterprises</span> already trust Yorlex
              </p>
            </div>
          </div>

          {/* Direct Contact Card */}
          <div className="lg:col-span-5 relative">
            <div className="yorlex-card-dark p-6 md:p-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Direct Line
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-yorlex-green">
                  <span className="w-1.5 h-1.5 rounded-full bg-yorlex-green animate-pulse" />
                  Available Now
                </span>
              </div>

              <div className="space-y-3">
                {primaryOffice && (
                  <a
                    href={`tel:${primaryOffice.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 hover:border-yorlex-green/40 transition-colors"
                  >
                    <Phone className="h-4.5 w-4.5 text-yorlex-green shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-white/40">Call</div>
                      <div className="text-sm font-semibold text-white">{primaryOffice.phone}</div>
                    </div>
                  </a>
                )}

                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 hover:border-yorlex-green/40 transition-colors"
                  >
                    <MessageCircle className="h-4.5 w-4.5 text-yorlex-green shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-white/40">Chat</div>
                      <div className="text-sm font-semibold text-white">WhatsApp</div>
                    </div>
                  </a>
                )}

                {primaryOffice && (
                  <a
                    href={`mailto:${primaryOffice.email}`}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 hover:border-yorlex-green/40 transition-colors"
                  >
                    <Mail className="h-4.5 w-4.5 text-yorlex-green shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-white/40">Email</div>
                      <div className="text-sm font-semibold text-white">{primaryOffice.email}</div>
                    </div>
                  </a>
                )}
              </div>

              {primaryOffice && (
                <div className="flex items-center gap-2 text-xs text-white/40 mt-5 pt-5 border-t border-white/10">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {primaryOffice.city}
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Forms Section */}
      <SectionWrapper id="forms-section" background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Client Engagement Form */}
          <div className="bg-black text-white p-8 md:p-10 border border-black relative overflow-hidden group rounded-2xl shadow-xl flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h2 className="font-plus-jakarta text-2xl font-bold mb-1">Become a Client</h2>
                <p className="font-inter text-gray-450 text-xs">For organizations seeking strategic partnership.</p>
              </div>
              <Handshake className="h-9 w-9 text-brand-purple" />
            </div>

            {clientSubmitted ? (
              <div className="flex-1 text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 border border-brand-purple text-brand-purple flex items-center justify-center mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-plus-jakarta">Briefing Registered</h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed font-inter">
                  We&apos;ve opened WhatsApp in a new tab so we can continue the conversation directly. Our strategic partners will also review your objectives and contact you within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleClientSubmit} className="flex-1 flex flex-col relative z-10">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter font-bold text-[9px] text-gray-400 mb-1">First Name</label>
                      <input name="firstName" required type="text" className="w-full bg-transparent rounded-lg border border-brand-border text-white py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block font-inter font-bold text-[9px] text-gray-400 mb-1">Last Name</label>
                      <input name="lastName" required type="text" className="w-full bg-transparent rounded-lg border border-brand-border text-white py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-inter font-bold text-[9px] text-gray-400 mb-1">Corporate Email</label>
                    <input name="email" required type="email" className="w-full bg-transparent rounded-lg border border-brand-border text-white py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="email@company.com" />
                  </div>
                  <div>
                    <label className="block font-inter font-bold text-[9px] text-gray-400 mb-1">Area of Interest</label>
                    <div className="relative">
                      <select name="areaOfInterest" required defaultValue="tech" className="w-full bg-transparent rounded-lg border border-brand-border text-white py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs cursor-pointer appearance-none">
                        <option className="bg-black text-white" value="tech">Technology Architecture &amp; Outsourcing</option>
                        <option className="bg-black text-white" value="fin">Fiduciary &amp; Tax Solutions</option>
                        <option className="bg-black text-white" value="mkt">Marketing Brand &amp; ROI Campaigns</option>
                        <option className="bg-black text-white" value="mgt">Management &amp; Operational Consulting</option>
                        <option className="bg-black text-white" value="spt">Business Support &amp; Back-Office/BPO</option>
                      </select>
                    </div>
                  </div>
                  {clientError && (
                    <p className="font-inter text-xs text-red-400">{clientError}</p>
                  )}
                </div>
                <button type="submit" disabled={clientSubmitting} className="w-full bg-white hover:bg-brand-purple text-black py-4 text-xs font-bold rounded-full transition-colors mt-auto pt-4 flex items-center justify-center gap-2 border border-white hover:border-brand-purple disabled:opacity-60">
                  <span>{clientSubmitting ? "Submitting…" : "Initiate Engagement"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* General Inquiries Form */}
          <div className="bg-white p-8 md:p-10 border border-brand-border relative overflow-hidden group hover:border-brand-purple transition-colors rounded-2xl shadow-sm flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-plus-jakarta text-2xl font-bold mb-1">General Inquiries</h2>
                <p className="font-inter text-gray-550 text-xs">For media, careers, or general queries.</p>
              </div>
              <Mail className="h-9 w-9 text-black animate-none" />
            </div>

            {generalSubmitted ? (
              <div className="flex-1 text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 border border-brand-purple text-brand-purple flex items-center justify-center mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-black mb-2 font-plus-jakarta">Inquiry Received</h4>
                <p className="text-xs text-gray-550 max-w-sm mx-auto leading-relaxed font-inter">
                  We&apos;ve opened WhatsApp in a new tab so we can continue the conversation directly. Thank you — we&apos;ll also follow up by email within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleGeneralSubmit} className="flex-1 flex flex-col">
                <div className="space-y-6">
                  <div>
                    <label className="block font-inter font-bold text-[9px] text-gray-500 mb-1">Full Name</label>
                    <input name="name" required type="text" className="w-full bg-transparent rounded-lg border border-brand-border text-black py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block font-inter font-bold text-[9px] text-gray-500 mb-1">Email Address</label>
                    <input name="email" required type="email" className="w-full bg-transparent rounded-lg border border-brand-border text-black py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors font-inter text-xs" placeholder="jane@doe.com" />
                  </div>
                  <div>
                    <label className="block font-inter font-bold text-[9px] text-gray-500 mb-1">Message</label>
                    <textarea name="message" required rows={3} className="w-full bg-transparent rounded-lg border border-brand-border text-black py-2.5 px-3 focus:border-brand-purple focus:outline-none transition-colors resize-none font-inter text-xs" placeholder="How can we assist you?" />
                  </div>
                  {generalError && (
                    <p className="font-inter text-xs text-red-500">{generalError}</p>
                  )}
                </div>
                <button type="submit" disabled={generalSubmitting} className="w-full bg-black hover:bg-brand-purple text-white hover:text-brand-text py-4 text-xs font-bold rounded-full transition-colors mt-auto pt-4 flex items-center justify-center gap-2 border border-black hover:border-brand-purple disabled:opacity-60">
                  <span>{generalSubmitting ? "Submitting…" : "Submit Inquiry"}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </SectionWrapper>

      {/* Office */}
      <SectionWrapper id="offices-section" background="default" spacing="compact" className="border-t border-brand-border-light" animate>
        <div>
          <div className="text-center mb-12">
            <span className="font-inter font-bold text-[10px] text-brand-purple block mb-2">// GET IN TOUCH</span>
            <h2 className="font-plus-jakarta text-2xl md:text-3xl font-black text-black">{content.officesHeading}</h2>
          </div>

          <div className="flex flex-col items-center gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs md:text-sm font-inter text-gray-650"
              >
                <span className="flex items-center gap-2 font-bold text-black font-plus-jakarta text-base tracking-wide">
                  <span className="w-1.5 h-1.5 bg-brand-purple rounded-full shrink-0" />
                  {office.city}
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-brand-border" />
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-purple shrink-0" />
                  {office.addr}
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-brand-border" />
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 font-mono font-semibold hover:text-brand-purple transition-colors py-2 -my-2"
                >
                  <Phone className="h-4 w-4 text-brand-purple shrink-0" />
                  {office.phone}
                </a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-brand-border" />
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 font-semibold hover:text-brand-purple transition-colors py-2 -my-2"
                >
                  <Mail className="h-4 w-4 text-brand-purple shrink-0" />
                  {office.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
