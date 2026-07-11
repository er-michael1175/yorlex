import { SITE } from "@/lib/seo";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Yorlex",
    url: SITE.baseUrl,
    logo: `${SITE.baseUrl}/images/brand/logo-mark.png`,
    image: `${SITE.baseUrl}/images/brand/logo-mark.png`,
    description: SITE.defaultDescription,
    email: "contact@yorlex.com",
    telephone: "+91-92702-92704",
    address: {
      "@type": "PostalAddress",
      streetAddress: "First Floor, GDA Tower, Golghar",
      addressLocality: "Gorakhpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "273001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-92702-92704",
      email: "contact@yorlex.com",
      contactType: "customer service",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
