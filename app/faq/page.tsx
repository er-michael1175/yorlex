"use client";

import React, { useState, useMemo } from "react";
import { HelpCircle, Search, ArrowRight, Cpu, Landmark, Zap, Layers, Compass, Scale, Shield, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, AnimatedHeading, PremiumButton } from "@/components/ui";

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Technology FAQs
  {
    category: "technology",
    q: "What technology services does Yorlex provide?",
    a: "We offer web development, mobile app development, AI solutions, cloud services, SaaS development, custom software, UI/UX design, DevOps, cybersecurity, and IT consulting.",
  },
  {
    category: "technology",
    q: "Do you build custom software?",
    a: "Yes. Every solution is designed based on your business requirements, workflows, and future scalability.",
  },
  {
    category: "technology",
    q: "Which technologies do you use?",
    a: "React, Next.js, Node.js, Express, Laravel, Python, Flutter, AWS, Azure, MongoDB, PostgreSQL, MySQL, Docker, Kubernetes, OpenAI, and Google Cloud.",
  },
  {
    category: "technology",
    q: "Do you provide maintenance after project delivery?",
    a: "Yes. We offer ongoing maintenance, feature enhancements, monitoring, security updates, and technical support.",
  },
  // Finance FAQs
  {
    category: "finance",
    q: "Can Yorlex manage our accounting?",
    a: "Yes. We provide bookkeeping, financial reporting, payroll management, tax planning, GST compliance, and virtual CFO services.",
  },
  {
    category: "finance",
    q: "Do you assist startups with financial planning?",
    a: "Absolutely. We help startups with budgeting, cash flow forecasting, funding preparation, and financial strategy.",
  },
  {
    category: "finance",
    q: "Can you handle payroll processing?",
    a: "Yes. We manage salary processing, payslips, tax deductions, and statutory compliance.",
  },
  // Marketing FAQs
  {
    category: "marketing",
    q: "Do you provide SEO services?",
    a: "Yes. Our SEO services include technical SEO, on-page optimization, content strategy, local SEO, and performance monitoring.",
  },
  {
    category: "marketing",
    q: "Which advertising platforms do you manage?",
    a: "Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, and other digital marketing platforms.",
  },
  {
    category: "marketing",
    q: "How do you measure campaign success?",
    a: "Using KPIs such as website traffic, lead generation, conversion rates, customer acquisition cost (CAC), return on investment (ROI), and engagement metrics.",
  },
  // Management FAQs
  {
    category: "management",
    q: "What management consulting services do you provide?",
    a: "We help businesses with strategic planning, operational optimization, HR consulting, leadership development, project management, and business transformation.",
  },
  {
    category: "management",
    q: "Can Yorlex help improve operational efficiency?",
    a: "Yes. We analyze workflows, identify bottlenecks, optimize processes, and implement scalable management systems.",
  },
  // Projects FAQs
  {
    category: "projects",
    q: "What is your project delivery process?",
    a: "Our delivery process follows 8 clear stages: (1) Discovery & Audit, (2) Requirement Analysis, (3) Planning & Roadmap, (4) Design & Architecture, (5) Agile Development Sprints, (6) Comprehensive Testing, (7) Deployment & Launch, and (8) Ongoing Support.",
  },
  {
    category: "projects",
    q: "How long does a project take?",
    a: "Depending on complexity: Website takes 2–6 weeks, Mobile App takes 6–16 weeks, and custom Enterprise Software takes 3–9 months.",
  },
  {
    category: "projects",
    q: "Do you sign NDAs?",
    a: "Yes. We are happy to sign Non-Disclosure Agreements (NDAs) to protect your proprietary business data, workflows, and IP before any diagnostic audit begins.",
  },
  // Pricing FAQs
  {
    category: "pricing",
    q: "How much do your services cost?",
    a: "Pricing depends on project scope, complexity, timelines, and service requirements. Contact us for a customized proposal.",
  },
  {
    category: "pricing",
    q: "Do you offer fixed-price projects?",
    a: "Yes. We offer fixed-price, milestone-based, and dedicated team engagement models.",
  },
  {
    category: "pricing",
    q: "Can startups work with Yorlex?",
    a: "Yes. We have flexible engagement models designed specifically for startups and growing businesses.",
  },
  // Security FAQs
  {
    category: "security",
    q: "How do you protect client data?",
    a: "We follow industry best practices, including secure cloud infrastructure, encrypted communications, role-based access control, and regular security audits.",
  },
  {
    category: "security",
    q: "Who owns the project after completion?",
    a: "You retain full ownership of the source code, designs, documentation, and intellectual property upon project completion, unless otherwise agreed in the contract.",
  },
  // Support FAQs
  {
    category: "support",
    q: "Do you provide post-launch support?",
    a: "Yes. We offer maintenance plans, performance monitoring, feature updates, security patches, and dedicated technical support.",
  },
  {
    category: "support",
    q: "How can I contact Yorlex?",
    a: "You can reach us through our Contact page, email, phone, or by scheduling a consultation directly from the website.",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "technology", label: "Technology" },
  { id: "finance", label: "Finance" },
  { id: "marketing", label: "Marketing" },
  { id: "management", label: "Management" },
  { id: "pricing", label: "Pricing" },
  { id: "projects", label: "Projects" },
  { id: "security", label: "Security" },
  { id: "support", label: "Support" },
];

const categoryIcons: Record<string, React.ComponentType<any>> = {
  technology: Cpu,
  finance: Landmark,
  marketing: Zap,
  management: Layers,
  projects: Compass,
  pricing: Scale,
  security: Shield,
  support: MessageSquare,
};

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter FAQs based on category AND search input
  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex-1 bg-brand-bg font-sans">
      {/* 1. Hero Section */}
      <SectionWrapper background="grid" spacing="none" className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center pt-4 md:pt-6 pb-6 md:pb-8" animate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border border-brand-border w-max">
              <HelpCircle className="h-4 w-4 text-brand-purple shrink-0" />
              <span className="font-inter font-bold text-[10px] text-gray-555">
                Strategic FAQ
              </span>
            </div>
            <h1 className="font-plus-jakarta text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.1] font-black text-black tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="font-inter text-gray-650 text-sm leading-relaxed max-w-xl">
              Find answers to the most common questions about Yorlex's business solutions, consulting services, project delivery, pricing, and support.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              <PremiumButton
                variant="gradient"
                size="md"
                href="/contact"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Contact Our Team
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                size="md"
                href="/contact"
              >
                Schedule Free Consultation
              </PremiumButton>
            </div>
          </div>

          {/* Right side decoration */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="h-[280px] bg-slate-950 border border-brand-border-light/10 p-6 font-mono text-[10px] text-brand-purple relative overflow-hidden select-none shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-brand-border-light/10 pb-3">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[9px] text-gray-500 font-bold">
                  YORLEX // FAQ_ROUTER
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center gap-3">
                <div className="text-[8px] text-gray-500 font-bold">
                  // GLOBAL INDEX DATA
                </div>
                <div className="bg-slate-900/40 border border-brand-border-light/5 p-3 flex flex-col gap-1.5 text-gray-400">
                  <div className="flex justify-between items-center text-[9px] text-white">
                    <span>&gt; TECHNOLOGY INDEX:</span>
                    <span className="text-green-500 font-bold">ONLINE</span>
                  </div>
                  <div className="flex justify-between items-center text-[9px] text-white">
                    <span>&gt; COMPLIANCE MAPPING:</span>
                    <span className="text-green-500 font-bold">100% READY</span>
                  </div>
                  <div className="flex justify-between items-center text-[9px] text-white">
                    <span>&gt; MULTI-PILLAR ROUTING:</span>
                    <span className="text-brand-purple">ACTIVE</span>
                  </div>
                </div>
              </div>
              <div className="text-[7px] text-gray-455 border-t border-brand-border-light/10 pt-2">
                RESOLVED_PILLARS: 8 // CORE_DB: OK
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. FAQ Hub & Filter section */}
      <SectionWrapper background="white" spacing="compact" className="border-t border-brand-border-light relative z-10" animate>
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          
          {/* Large Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search for your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-bg border border-brand-border pl-12 pr-4 py-4 font-inter text-xs text-black placeholder-gray-455 rounded-2xl focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all shadow-sm"
            />
          </div>

          {/* FAQ Category Chips */}
          <div className="flex flex-wrap gap-2 justify-center pb-2 relative">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="px-4 py-2 text-[9px] font-bold border rounded-2xl transition-colors duration-150 relative"
                style={{
                  borderColor: selectedCategory === cat.id ? "black" : "rgba(0,0,0,0.06)",
                }}
              >
                <span className={`relative z-10 ${selectedCategory === cat.id ? "text-white" : "text-gray-500 hover:text-black"}`}>
                  {cat.label}
                </span>
                {selectedCategory === cat.id && (
                  <motion.div
                    layoutId="activeFaqCategory"
                    className="absolute inset-0 bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid list of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px] mt-4">
            <AnimatePresence mode="popLayout">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, idx) => {
                  const IconComponent = categoryIcons[faq.category] || HelpCircle;
                  const isOrphanedLastCard =
                    idx === filteredFAQs.length - 1 && filteredFAQs.length % 2 !== 0;
                  return (
                    <motion.div
                      key={faq.q}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`bg-white border border-brand-border p-6 flex flex-col justify-between transition-colors duration-250 group relative rounded-2xl shadow-sm ${
                        isOrphanedLastCard ? "md:col-span-2" : ""
                      }`}
                    >
                      {/* Top border accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-purple transition-colors duration-250" />
                      
                      <div className="flex flex-col gap-4">
                        {/* Header with category icon */}
                        <div className="flex justify-between items-start gap-4">
                          <span className="font-mono text-[8px] text-gray-400">// {faq.category}</span>
                          <div className="w-7 h-7 bg-brand-bg text-black group-hover:bg-brand-purple group-hover:text-white transition-colors duration-250 flex items-center justify-center shrink-0 border border-brand-border">
                            <IconComponent className="h-4 w-4" />
                          </div>
                        </div>

                        {/* Question */}
                        <h3 className="font-plus-jakarta text-xs md:text-sm font-bold text-black tracking-wide leading-snug">
                          {faq.q}
                        </h3>

                        {/* Answer */}
                        <p className="font-inter text-xs text-gray-550 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-1 md:col-span-2 text-center py-16 border border-brand-border-light/60 bg-brand-bg/40 flex flex-col items-center gap-3">
                  <HelpCircle className="h-8 w-8 text-gray-400" />
                  <span className="font-plus-jakarta font-bold text-xs text-gray-500">
                    No FAQs Found Matching "{searchQuery}"
                  </span>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </SectionWrapper>

      {/* 3. Still Have Questions CTA */}
      <SectionWrapper background="dark" spacing="compact" animate>
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter font-bold text-[10px] text-brand-purple block mb-4">// CONVERSION GATEWAY</span>
          <h2 className="font-plus-jakarta text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Still Have Questions?
          </h2>
          <p className="font-inter text-text-on-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Can't find the answer you're looking for? Our experts are ready to help you with personalized guidance and business solutions.
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
              Book a Free Consultation
            </PremiumButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
