export interface NavItem {
  label: string;
  href: string;
  cta?: boolean;
  children?: Array<{ label: string; href: string }>;
}

export interface SiteConfig {
  company: {
    name: string;
    owner: string;
    legalForm: string;
    foundedYear: number;
    phone: string;
    email: string;
    website: string;
    address: { street: string; zip: string; city: string };
    openingHours: { weekdays: string };
    social: { xing?: string; linkedin?: string };
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    accentLight: string;
  };
  seo: { title: string; description: string; keywords: string[] };
  features: {
    xingButton: boolean;
    linkedinButton: boolean;
    whatsappButton: boolean;
    googleMaps: boolean;
    analytics: boolean;
    cookieConsent: boolean;
    bewertungen: boolean;
    notdienstBanner: boolean;
    floatingCta: boolean;
    blog: boolean;
    leadMagnet: boolean;
  };
  socialProof: { yearsExperience: number; completedProjects: number };
  referenzLogos: Array<{ name: string; src: string; alt: string }>;
  terminbuchungUrl: string;
  i18n: boolean;
  navigation: NavItem[];
}

export const siteConfig: SiteConfig = {
  company: {
    name: "EsperIT",
    owner: "Frank Esper",
    legalForm: "Einzelunternehmer",
    foundedYear: 2001,
    phone: "+49 177 2578260",
    email: "info@esperit.net",
    website: "www.esperit.net",
    address: {
      street: "Kastanienstrasse 8",
      zip: "28844",
      city: "Weyhe",
    },
    openingHours: {
      weekdays: "Mo–Fr: 09:00–19:00 Uhr",
    },
    social: {
      xing: "https://www.xing.com/profile/Frank_Esper",
      linkedin: "https://www.linkedin.com/in/frank-esper/",
    },
  },
  colors: {
    primary: "#132947",
    primaryLight: "#2b5ea7",
    primaryLighter: "#e8f0fe",
    accent: "#5F94D6",
    accentLight: "#7aaee0",
  },
  seo: {
    title: "EsperIT – Frank Esper | BI, DWH & KI-Beratung",
    description:
      "Ihr Experte für Data Warehouse, Business Intelligence und KI-Automatisierung. Deutschlandweit remote, PLZ-Bereich 2* in Präsenz.",
    keywords: [
      "Data Warehouse",
      "Data Warehouse Beratung",
      "Business Intelligence",
      "Business Intelligence Freelancer",
      "KI-Beratung",
      "KI Beratung",
      "Datenmodellierung",
      "Automatisierung",
      "Frank Esper",
      "EsperIT",
      "MicroStrategy Berater",
      "Power BI Consultant",
      "AI",
      "MicroStrategy",
      "Künstliche Intelligenz",
      "Artificial Intelligence",
      "Mittelstand",
      "Schulung",
      "PowerBI",
      "DataScience",
      "Analyse",
      "Bedarfsanalyse",
      "Use Case",
      "Optimierung",
      "Performance Optimierung",
      "Dokumentation",
      "Entwicklung",
      "Administration",
    ],
  },
  features: {
    xingButton: true,
    linkedinButton: true,
    whatsappButton: false,
    googleMaps: false,
    analytics: false,
    cookieConsent: true,
    bewertungen: false,
    notdienstBanner: false,
    floatingCta: true,
    blog: true,
    leadMagnet: true,
  },
  socialProof: {
    yearsExperience: 24,
    completedProjects: 15,
  },
  referenzLogos: [
    { name: "REWE Group", src: "/images/logos/REWE_Group-Logo.wine.png", alt: "REWE Group Logo" },
    { name: "HDI", src: "/images/logos/hdi.svg", alt: "HDI Logo" },
    {
      name: "HannoverRück",
      src: "/images/logos/hannover-re-vector-logo.png",
      alt: "HannoverRück Logo",
    },
    { name: "TMM", src: "/images/logos/TMM-ca-logo.webp", alt: "TMM Logo" },
    { name: "KfW", src: "/images/logos/kfw.svg", alt: "KfW Bank Logo" },
    { name: "O2", src: "/images/logos/O2-Logo.png", alt: "O2 Logo" },
    {
      name: "CBR Fashion",
      src: "/images/logos/cbr-fashion.png",
      alt: "CBR Fashion Logo",
    },
    { name: "DEB", src: "/images/logos/DEB-Logo_1200x630px.jpg", alt: "DEB Logo" },
    {
      name: "Lufthansa Systems",
      src: "/images/logos/lh-lufthansa-systems-1lin-blue-cmyk.png",
      alt: "Lufthansa Systems Logo",
    },
  ],
  terminbuchungUrl: "https://cal.eu/frank-esper",
  i18n: false,
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Über mich",
      href: "/ueber-mich",
      children: [
        {
          label: "Qualifikationen & Know-how",
          href: "/ueber-mich/qualifikationen",
        },
        { label: "Rollen & Aufgaben", href: "/ueber-mich/rollen" },
        { label: "Stationen & Projekte", href: "/ueber-mich/stationen" },
      ],
    },
    {
      label: "Leistungen",
      href: "/leistungen",
      children: [
        { label: "DataWarehouse", href: "/leistungen/datawarehouse" },
        {
          label: "Business Intelligence",
          href: "/leistungen/business-intelligence",
        },
        { label: "Künstliche Intelligenz", href: "/leistungen/ki" },
      ],
    },
    {
      label: "Service",
      href: "/service",
      children: [
        { label: "KI-Schulungen", href: "/service/ki-schulungen" },
        { label: "KI-Assistenten", href: "/service/ki-assistenten" },
        {
          label: "Consulting & Workshops",
          href: "/service/consulting-workshops",
        },
      ],
    },
    {
      label: "Marketplace",
      href: "/marketplace",
      children: [
        { label: "AI Tools Katalog", href: "/marketplace/ai-tools-katalog" },
        { label: "AI Use Cases", href: "/marketplace/ai-use-cases" },
      ],
    },
    { label: "News & Insights", href: "/news" },
    { label: "Kontakt", href: "/kontakt", cta: true },
  ],
};
