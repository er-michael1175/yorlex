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
  heroBadge: "Get In Touch",
  heroHeading: "Let's Talk",
  heroSubheading:
    "Reach us directly by phone, WhatsApp, or the form below — whether you're exploring a partnership or just have a question.",
  officesHeading: "Our Office",
  offices: [
    {
      city: "Gorakhpur (Headquarters)",
      addr: "First Floor, GDA Tower, Golghar, Gorakhpur - 273001, Uttar Pradesh, India",
      phone: "+91 92702 92704",
      email: "contact@yorlex.com",
    },
  ],
};
