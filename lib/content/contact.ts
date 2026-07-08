export type ContactOffice = {
  city: string;
  addr: string;
  phone: string;
  email: string;
};

export type ContactContent = {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  officesHeading: string;
  offices: ContactOffice[];
};

export const contactDefaultContent: ContactContent = {
  heroBadge: "Global Engagement",
  heroHeading: "Engage Excellence",
  heroSubheading:
    "Direct access to Yorlex Enterprise's global authorities. Select your engagement path for guaranteed precision routing and our industry-leading 4-hour SLA response.",
  officesHeading: "Our Office",
  offices: [
    {
      city: "Gorakhpur (Headquarters)",
      addr: "First Floor, Golghar, Gorakhpur - 273001, Uttar Pradesh, India",
      phone: "+91 92702 92704",
      email: "contact@yorlex.com",
    },
  ],
};
