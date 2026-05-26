import { siteConfig } from "./config";

const companyUrl = `https://${siteConfig.company.website}`;
const companyId = `${companyUrl}/#esperit`;
const personId = `${companyUrl}/#frank-esper`;
const websiteId = `${companyUrl}/#website`;
const sameAs = [siteConfig.company.social.xing, siteConfig.company.social.linkedin].filter(Boolean);

export const siteProfileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": companyId,
      name: siteConfig.company.name,
      legalName: siteConfig.company.name,
      description: siteConfig.seo.description,
      url: companyUrl,
      telephone: siteConfig.company.phone,
      email: siteConfig.company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.company.address.street,
        postalCode: siteConfig.company.address.zip,
        addressLocality: siteConfig.company.address.city,
        addressCountry: "DE",
      },
      areaServed: ["Germany", "Austria", "Switzerland"],
      foundingDate: siteConfig.company.foundedYear.toString(),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      sameAs,
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.company.owner,
      jobTitle: "BI- und DWH-Experte, KI-Berater",
      url: companyUrl,
      worksFor: {
        "@id": companyId,
      },
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: companyUrl,
      name: siteConfig.company.name,
      description: siteConfig.seo.description,
      publisher: {
        "@id": companyId,
      },
    },
  ],
};

export function getBlogPostingJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  imageUrl,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  slug: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.esperit.net/news/${slug}`,
    },
    author: {
      "@type": "Person",
      name: siteConfig.company.owner,
      url: companyUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": companyId,
      name: siteConfig.company.name,
      url: companyUrl,
    },
    ...(imageUrl ? { image: imageUrl } : {}),
  };
}

export function getServiceJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    serviceType: title,
    provider: {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": companyId,
      name: siteConfig.company.name,
      url: companyUrl,
    },
    url,
    areaServed: ["Germany", "Austria", "Switzerland"],
  };
}
