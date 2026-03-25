import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ReferenzenLogos } from "@/components/sections/ReferenzenLogos";
import { LeistungenGrid } from "@/components/sections/LeistungenGrid";
import { UeberMichTeaser } from "@/components/sections/UeberMichTeaser";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { EinzugsgebietSection } from "@/components/sections/EinzugsgebietSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist der EU AI Act und betrifft er mein Unternehmen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der EU AI Act ist die weltweit erste umfassende KI-Regulierung und gilt ab 2026 für alle Unternehmen, die KI-Systeme in der EU einsetzen oder anbieten.",
      },
    },
    {
      "@type": "Question",
      name: "Welche KI-Tools sind für mein Unternehmen geeignet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das hängt von Ihren konkreten Anforderungen, Ihrer IT-Infrastruktur und Ihrem Budget ab. Im Rahmen eines Workshops oder einer Beratung analysiere ich Ihre Prozesse und empfehle passende, DSGVO-konforme Lösungen.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <ReferenzenLogos />
      <LeistungenGrid />
      <UeberMichTeaser />
      <LeadMagnet />
      <EinzugsgebietSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
