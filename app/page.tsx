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


export default function Home() {
  return (
    <>
      {/* FAQ JSON-LD is generated inside `FaqSection` to avoid duplication */}
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
