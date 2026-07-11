export type CareersPerk = {
  title: string;
  desc: string;
  icon: string;
  image: string;
  featured: boolean;
};

export type CareersJob = {
  title: string;
  dept: string;
  location: string;
  desc: string;
};

export type CareersContent = {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  perksHeading: string;
  perksSubheading: string;
  perks: CareersPerk[];
  jobs: CareersJob[];
};

export const careersDefaultContent: CareersContent = {
  heroBadge: "Careers",
  heroHeading: "Architect Your Future.",
  heroSubheading:
    "Join Yorlex Enterprise, a global authority in multi-disciplinary excellence. We seek elite minds to drive innovation across technology, finance, and strategic management.",
  heroImage: "/images/careers/careers-hero-bg.jpg",
  perksHeading: "The Yorlex Advantage",
  perksSubheading:
    "Uncompromising standards require unparalleled support. Discover our commitment to global talent.",
  perks: [
    {
      title: "Global Mobility Network",
      desc: "Seamless transition across our 40+ international offices. We facilitate international assignments to accelerate executive development and cross-market expertise.",
      icon: "Globe",
      image: "/images/careers/global-mobility.jpg",
      featured: true,
    },
    {
      title: "Continuous Upskilling",
      desc: "Access exclusive executive education programs, advanced technical certifications, and bespoke leadership coaching tailored for high-trajectory careers.",
      icon: "TrendingUp",
      image: "/images/careers/upskilling.jpg",
      featured: false,
    },
    {
      title: "Architectural Impact",
      desc: "Lead initiatives that reshape industries. At Yorlex, you don't just execute strategy; you design the blueprints for global enterprise transformation.",
      icon: "Compass",
      image: "/images/careers/architectural-impact.jpg",
      featured: false,
    },
  ],
  jobs: [
    {
      title: "Senior Tech Architect",
      dept: "Technology",
      location: "Global (Remote Optional)",
      desc: "Design and implement scalable enterprise systems for Fortune 500 clients. Requires deep expertise in cloud-native infrastructure and distributed systems.",
    },
    {
      title: "Finance Director - EMEA",
      dept: "Finance",
      location: "London, UK",
      desc: "Oversee regional financial operations, driving M&A strategy and capital allocation for the European market sector.",
    },
    {
      title: "Management Partner",
      dept: "Management",
      location: "New York, USA",
      desc: "Lead organizational restructure plans and drive strategy briefing initiatives for key corporate accounts.",
    },
  ],
};
