"use client";

import React, { useState, useEffect } from "react";
import { Gavel, CheckCircle, ArrowRight, FileText, Download, ShieldAlert, Check, Lock, Globe, Mail, ShieldCheck, Phone, MapPin } from "lucide-react";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

// Plain-language summary of the key contract terms for the hero
function TermsHighlights() {
  const highlights = [
    { icon: FileText, text: "Work begins only after you approve a written scope and quote" },
    { icon: ShieldCheck, text: "You own the final deliverables once your invoice is paid" },
    { icon: Lock, text: "Your business information is kept confidential" },
    { icon: Gavel, text: "Governed by Indian law, courts in Gorakhpur, Uttar Pradesh" },
  ];

  return (
    <div className="w-full bg-yorlex-navy rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
        Key Terms At a Glance
      </span>
      <div className="mt-5 space-y-4">
        {highlights.map((h) => (
          <div key={h.text} className="flex items-start gap-3">
            <h.icon className="h-4.5 w-4.5 text-yorlex-green shrink-0 mt-0.5" />
            <span className="text-sm text-white/80 leading-relaxed">{h.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<string>("section-1");
  const [acknowledged, setAcknowledged] = useState<boolean>(false);

  const sections = [
    { id: "section-1", name: "1. Acceptance of Terms" },
    { id: "section-2", name: "2. About Yorlex" },
    { id: "section-3", name: "3. Use of Website" },
    { id: "section-4", name: "4. Service Engagement" },
    { id: "section-5", name: "5. Client Responsibilities" },
    { id: "section-6", name: "6. Payments & Billing" },
    { id: "section-7", name: "7. Intellectual Property" },
    { id: "section-8", name: "8. Confidentiality" },
    { id: "section-9", name: "9. Limitation of Liability" },
    { id: "section-10", name: "10. Third-Party Services" },
    { id: "section-11", name: "11. Warranties" },
    { id: "section-12", name: "12. Termination" },
    { id: "section-13", name: "13. Changes to Terms" },
    { id: "section-14", name: "14. Governing Law" },
    { id: "section-15", name: "15. Contact Information" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex-grow bg-brand-bg font-sans">
      {/* 1. Hero Section */}
      <SectionWrapper
        background="grid"
        spacing="none"
        className="relative overflow-hidden lg:min-h-[calc(100vh-80px)] flex flex-col justify-center [&>div]:w-full pt-4 md:pt-6 pb-6 md:pb-8"
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
          <img
            src="/images/terms/terms-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute inset-0 bg-brand-bg opacity-20 pointer-events-none" />

        <div className="lg:hidden -mx-6 -mt-4 md:-mt-6 mb-6 relative h-52 sm:h-64 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/terms/terms-hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/5 to-transparent" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Gavel className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555">
                Governance &amp; MSA
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Please read these Terms &amp; Conditions carefully before using Yorlex's website or engaging our services. By accessing our website or working with us, you agree to these terms.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Contact Us
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="/contact"
              >
                Request a Consultation
              </PremiumButton>
            </div>
            <div className="font-mono text-[9px] text-gray-400 mt-2">
              Last Updated: June 2026
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <TermsHighlights />
          </div>
        </div>
      </SectionWrapper>

      {/* 2. Document Content & TOC Grid */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="md:col-span-3 sticky top-28 hidden md:block">
            <div className="bg-white p-6 border border-brand-border rounded-2xl shadow-sm">
              <h3 className="font-inter font-bold text-[10px] text-black mb-4 border-b border-brand-border-light pb-2">
                Document Index
              </h3>
              <nav className="flex flex-col gap-2">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left font-plus-jakarta text-xs font-bold py-2 pl-3 border-l-2 transition-all duration-300 ${
                      activeSection === sec.id
                        ? "border-brand-purple text-brand-purple bg-brand-purple/5"
                        : "border-brand-border-light text-gray-405 hover:text-black hover:border-black"
                    }`}
                  >
                    {sec.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Document Body */}
          <article className="md:col-span-9 max-w-3xl">
            <div className="prose prose-slate max-w-none text-gray-600 font-inter text-xs md:text-sm leading-relaxed space-y-12">
              
              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing this website or using any services provided by Yorlex, you agree to comply with these Terms &amp; Conditions. If you do not agree with these terms, please refrain from using our website or services.
                </p>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  2. About Yorlex
                </h2>
                <p>
                  Yorlex is a business solutions company providing professional services in:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {[
                    "Technology Solutions",
                    "Finance Solutions",
                    "Marketing Solutions",
                    "Management Consulting",
                    "Business Support Services",
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-brand-bg border border-brand-border-light rounded-2xl">
                      <CheckCircle className="h-4.5 w-4.5 text-brand-purple shrink-0" />
                      <span className="font-mono text-[9px] text-gray-500 font-bold">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  Our services are designed for startups, small and medium-sized businesses, and enterprises.
                </p>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  3. Use of Website
                </h2>
                <p>
                  You agree to use this website only for lawful purposes. You must not:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-550">
                  <li>Attempt to gain unauthorized access to our secure servers or database systems.</li>
                  <li>Distribute malicious software, spyware, or harmful code packages.</li>
                  <li>Copy, scraping, or reproducing website UI layouts and copy content without explicit written permission.</li>
                  <li>Misrepresent your corporate identity, organization size, or provide false email addresses.</li>
                  <li>Use the website in any way that disrupts normal browsing operations or performance benchmarks.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  4. Service Engagement
                </h2>
                <p>
                  Projects and consulting services begin only after:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-550">
                  <li>Mutual agreement on the project scope of work.</li>
                  <li>Acceptance of an official proposal or Statement of Work SOW quotation.</li>
                  <li>Execution of required corporate contracts and Mutual Non-Disclosure Agreements NDAs.</li>
                  <li>Receipt of any agreed deposit or advance billing payments, where applicable.</li>
                </ul>
                <p>
                  Project timelines and delivery calendars may vary depending on project scope changes, client feedback delays, and regulatory approvals.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  5. Client Responsibilities
                </h2>
                <p>
                  Clients are responsible for providing accurate project requirements, sharing necessary database credentials and audit logs, reviewing deliverables promptly, providing design/code feedback within agreed timelines, and making payments according to the agreed schedule.
                </p>
                <p>
                  Delays in providing information, credentials, or milestone approvals may directly affect project timelines and delivery dates.
                </p>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  6. Payments &amp; Billing
                </h2>
                <p>
                  Payment terms are defined in the project proposal or Master Service Agreement. Unless otherwise agreed, invoices must be paid within the specified due date. Late payments may delay project progress or support services. Additional work outside the agreed scope may require a separate Statement of Work quotation.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  7. Intellectual Property
                </h2>
                <p>
                  Unless otherwise stated in the project agreement:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-550">
                  <li>Clients receive ownership of the final approved custom deliverables after full invoice payment.</li>
                  <li>Yorlex retains ownership of its proprietary frameworks, methodologies, templates, tools, reusable code snippets, and intellectual property developed independently of the client's project.</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  8. Confidentiality
                </h2>
                <p>
                  Yorlex treats client information as confidential and uses reasonable measures to protect sensitive business information. Both parties agree not to disclose confidential information unless required by law or expressly authorized.
                </p>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  9. Limitation of Liability
                </h2>
                <p>
                  While Yorlex strives to provide high-quality services, we are not liable for:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-550">
                  <li>Indirect, incidental, or consequential damages.</li>
                  <li>Loss of profits, revenue, or business opportunities.</li>
                  <li>Delays caused by third-party APIs or hosting providers.</li>
                  <li>Client-side dashboard configuration or database errors.</li>
                  <li>Events beyond reasonable control, including natural disasters or internet outages.</li>
                </ul>
                <p>
                  Our total liability shall not exceed the fees paid by the client for the specific service giving rise to the claim, unless otherwise required by law.
                </p>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  10. Third-Party Services
                </h2>
                <p>
                  Some solutions may integrate third-party software, APIs, cloud providers, payment gateways, or other services. Yorlex is not responsible for the availability, performance, or policies of third-party platforms.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  11. Warranties
                </h2>
                <p>
                  Services are provided using commercially reasonable skill and care. Except where expressly stated in a written agreement, Yorlex does not guarantee:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-550">
                  <li>Specific business outcomes or EBITDA margins.</li>
                  <li>Search engine rankings or SEO performance.</li>
                  <li>Direct sales increases or marketing lead capture rates.</li>
                  <li>Investment returns or fiduciary risk elimination.</li>
                  <li>Continuous website availability without interruption.</li>
                </ul>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  12. Termination
                </h2>
                <p>
                  Either party may terminate a service agreement in accordance with the terms of the applicable contract. Upon termination, outstanding invoices remain payable, completed work delivered before termination remains subject to payment terms, and access to ongoing services or support desks may be suspended.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  13. Changes to These Terms
                </h2>
                <p>
                  Yorlex may update these Terms &amp; Conditions from time to time. Updated versions will be published on this page with a revised "Last Updated" date. Continued use of the website after changes indicates acceptance of the revised terms.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  14. Governing Law
                </h2>
                <p>
                  These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Gorakhpur, Uttar Pradesh.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-lg md:text-xl font-bold text-black border-b border-brand-border pb-2">
                  15. Contact Information
                </h2>
                <p>
                  If you have questions about these Terms &amp; Conditions, please contact us.
                </p>
                <div className="bg-brand-bg border border-brand-border p-6 rounded-2xl space-y-3 font-mono text-xs text-gray-555 mt-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Yorlex</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Email: contact@yorlex.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Phone: +91 92702 92704</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-purple shrink-0" />
                    <span>Address: First Floor, GDA Tower, Golghar, Gorakhpur - 273001, Uttar Pradesh, India</span>
                  </div>
                </div>
              </section>

              {/* Document Actions Footer */}
              <div className="mt-16 pt-8 border-t border-brand-border text-center space-y-6">
                <p className="text-xs text-gray-550 font-inter">
                  By continuing to access our services, you acknowledge that you have read and understood these Terms.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {acknowledged ? (
                    <div className="bg-brand-purple/10 border border-brand-purple text-brand-purple font-inter font-bold text-[10px] px-8 py-3.5 flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Terms Acknowledged
                    </div>
                  ) : (
                    <button
                      onClick={() => setAcknowledged(true)}
                      className="bg-black hover:bg-brand-purple text-white hover:text-brand-text font-inter font-bold text-[10px] px-8 py-3.5 transition-colors rounded-2xl border border-black hover:border-brand-purple"
                    >
                      Acknowledge
                    </button>
                  )}
                  
                  <button
                    onClick={() => window.print()}
                    className="bg-white hover:bg-brand-bg text-black font-inter font-bold text-[10px] px-8 py-3.5 border border-brand-border transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4 text-brand-purple" />
                    Print / Save as PDF
                  </button>
                </div>
              </div>

            </div>
          </article>

        </div>
      </SectionWrapper>

      {/* 3. Still Have Questions CTA */}
      <SectionWrapper background="dark" spacing="none" className="relative overflow-hidden py-12 md:py-14" animate>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/terms/terms-cta-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-yorlex-navy/90 pointer-events-none" />

        <div className="relative text-center max-w-2xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-3">// CONTRACT SUPPORT</span>
          <h2 className="font-plus-jakarta text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
            Need More Information?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-8">
            If you have questions about our terms, service agreements, or project engagement process, our team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton
              variant="gradient"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Contact Us
            </PremiumButton>
            <PremiumButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Request a Consultation
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
