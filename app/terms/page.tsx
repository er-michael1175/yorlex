"use client";

import React, { useState, useEffect } from "react";
import { Gavel, CheckCircle, ArrowRight, FileText, Download, ShieldAlert } from "lucide-react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<string>("section-1");
  const [acknowledged, setAcknowledged] = useState<boolean>(false);

  const sections = [
    { id: "section-1", name: "1. Acceptance of Terms" },
    { id: "section-2", name: "2. Enterprise Service Agreements" },
    { id: "section-3", name: "3. Intellectual Property Rights" },
    { id: "section-4", name: "4. Confidentiality Obligations" },
    { id: "section-5", name: "5. Jurisdictional Authority" },
    { id: "section-6", name: "6. Limitation of Liability" },
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
    <div className="flex-1 bg-brand-bg pt-32 pb-24 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-16 border-b border-brand-border pb-8 flex flex-col gap-4 md:flex-row md:items-end justify-between">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <Gavel className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-widest">
                Corporate Governance
              </span>
            </div>
            <h1 className="font-plus-jakarta text-4xl md:text-6xl font-black text-black uppercase leading-tight tracking-tight">
              Terms & Conditions
            </h1>
          </div>
          <div className="text-gray-500 font-inter text-xs md:text-sm max-w-md md:text-right space-y-1">
            <p className="font-bold text-black uppercase tracking-wider">Effective Date: October 15, 2024</p>
            <div className="flex flex-wrap gap-2 md:justify-end text-[10px] text-gray-400 font-mono">
              <span>VERSION: 4.2.1 ENTERPRISE</span>
              <span>•</span>
              <span>DOC ID: YRX-TC-24-A</span>
            </div>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="md:col-span-3 sticky top-28 hidden md:flex flex-col gap-6">
            <div className="bg-white p-6 border border-brand-border rounded-none shadow-sm">
              <h3 className="font-inter font-bold text-[10px] text-black uppercase tracking-wider mb-4 border-b border-brand-border-light pb-2">
                Document Index
              </h3>
              <nav className="flex flex-col gap-2">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left font-plus-jakarta text-xs font-bold uppercase py-2 pl-3 border-l-2 transition-all duration-300 ${
                      activeSection === sec.id
                        ? "border-brand-purple text-brand-purple bg-brand-purple/5"
                        : "border-brand-border-light text-gray-400 hover:text-black hover:border-black"
                    }`}
                  >
                    {sec.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-black text-white p-6 border border-black rounded-none shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <h4 className="font-plus-jakarta font-bold text-xs uppercase mb-2">Legal Inquiries</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
                For specific contractual questions regarding these terms or custom enterprise master services agreements.
              </p>
              <a
                href="mailto:legal@yorlex.com"
                className="inline-flex items-center gap-1.5 font-inter font-bold text-[10px] uppercase tracking-wider text-brand-purple hover:text-white transition-colors group/link"
              >
                Contact Legal
                <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </aside>

          {/* Main Document Body */}
          <article className="md:col-span-9 max-w-3xl bg-white border border-brand-border p-8 md:p-12 rounded-none shadow-sm">
            <div className="prose prose-slate max-w-none text-gray-600 font-inter text-sm md:text-base leading-relaxed space-y-12">
              
              <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed italic border-l-4 border-brand-purple pl-4 mb-8">
                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the services operated by Yorlex Enterprise ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>

              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2 flex items-baseline gap-2">
                  <span className="text-brand-purple/40 text-sm">1.0</span> Acceptance of Terms
                </h2>
                <div className="space-y-3">
                  <p>
                    By accessing or using the Service, engaging our multi-disciplinary consultancy services, or implementing Yorlex Enterprise technologies, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Yorlex Enterprise, concerning your access to and use of our platforms, consultancy services, and associated technologies.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2 flex items-baseline gap-2">
                  <span className="text-brand-purple/40 text-sm">2.0</span> Enterprise Service Agreements
                </h2>
                <p>
                  For clients engaging in specific consultancy or technological deployments, these Terms operate in conjunction with the Master Services Agreement (MSA) or specific Statements of Work (SOW) executed between your organization and Yorlex Enterprise.
                </p>
                
                <div className="space-y-4 pl-4 border-l-2 border-brand-purple/20 my-6">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-black font-semibold text-xs uppercase tracking-wider block mb-1">2.1 Conflict Resolution</strong>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        In the event of a conflict between these Terms and an executed MSA, the provisions of the executed MSA shall take precedence.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-black font-semibold text-xs uppercase tracking-wider block mb-1">2.2 Scope of Delivery</strong>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        All deliverables provided under enterprise agreements remain subject to the quality assurance protocols outlined in Section 4 of the Standard MSA.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2 flex items-baseline gap-2">
                  <span className="text-brand-purple/40 text-sm">3.0</span> Intellectual Property Rights
                </h2>
                <p>
                  The Service and its original content, features, functionalities, proprietary methodologies, frameworks, and technological architectures are and will remain the exclusive property of Yorlex Enterprise and its licensors.
                </p>
                <p>
                  The Service is protected by copyright, trademark, and other laws of both the domestic and foreign jurisdictions. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Yorlex Enterprise.
                </p>

                <div className="bg-brand-bg p-6 border border-brand-border rounded-none shadow-inner">
                  <h5 className="font-plus-jakarta font-bold text-xs uppercase text-black mb-2 tracking-wider">License to Use</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Subject to your ongoing compliance with these Terms, Yorlex grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service strictly for your internal business operations as defined in your service tier.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2 flex items-baseline gap-2">
                  <span className="text-brand-purple/40 text-sm">4.0</span> Confidentiality Obligations
                </h2>
                <p>
                  "Confidential Information" means all non-public information disclosed by a party to the other party, whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.
                </p>
                <p>
                  Each party agrees to protect the other's Confidential Information from unauthorized dissemination and use with the same degree of care that such party uses to protect its own like information, but in no event less than a reasonable degree of care.
                </p>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2 flex items-baseline gap-2">
                  <span className="text-brand-purple/40 text-sm">5.0</span> Jurisdictional Authority
                </h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32 space-y-4">
                <h2 className="font-plus-jakarta text-xl md:text-2xl font-black text-black uppercase border-b border-brand-border pb-2 flex items-baseline gap-2">
                  <span className="text-brand-purple/40 text-sm">6.0</span> Limitation of Liability
                </h2>
                <p>
                  In no event shall Yorlex Enterprise, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or data.
                </p>
              </section>

              {/* Document Actions Footer */}
              <div className="mt-16 pt-8 border-t border-brand-border text-center space-y-6">
                <p className="text-xs text-gray-500 font-inter">
                  By continuing to access our services, you acknowledge that you have read and understood these Terms.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {acknowledged ? (
                    <div className="bg-brand-purple/10 border border-brand-purple text-brand-purple font-inter font-bold text-[10px] uppercase tracking-wider px-8 py-3.5 flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Terms Acknowledged
                    </div>
                  ) : (
                    <button
                      onClick={() => setAcknowledged(true)}
                      className="bg-black text-white font-inter font-bold text-[10px] uppercase tracking-widest px-8 py-3.5 hover:bg-brand-purple transition-colors rounded-none border border-black hover:border-brand-purple"
                    >
                      Acknowledge
                    </button>
                  )}
                  
                  <button
                    onClick={() => alert("Downloading PDF summary...")}
                    className="bg-white text-black font-inter font-bold text-[10px] uppercase tracking-widest px-8 py-3.5 border border-brand-border hover:bg-brand-bg transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4 text-brand-purple" />
                    Download PDF
                  </button>
                </div>
              </div>

            </div>
          </article>

        </div>

      </div>
    </div>
  );
}

