"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroReveal, stagger, fadeUp } from "@/lib/animations";
import { siteConfig } from "@/lib/config";

const badges = [
  "Seit 2001 aktiv",
  "Zertifizierter IT-Experte",
  "Deutschlandweit remote",
  "PLZ-Bereich 2* in Präsenz",
];

export function HeroSection() {
  const phoneHref = `tel:${siteConfig.company.phone.replace(/\s/g, "")}`;

  return (
    <section
      className="bg-primary text-white"
      aria-label="Hero"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col-reverse items-center gap-8 py-16 md:flex-row md:items-end md:gap-12 md:py-0">

          {/* Linke Spalte: Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start w-full md:w-1/2 pb-0 md:py-20"
          >
            <motion.h1
              variants={heroReveal}
              className="text-4xl font-bold tracking-tight leading-[1.1] md:text-5xl"
            >
              Sie möchten Prozesse in Ihrem Unternehmen automatisieren?
            </motion.h1>

            <motion.p
              variants={heroReveal}
              className="mt-6 text-lg leading-relaxed text-white/80"
            >
              Ich unterstütze Sie dabei, Ihre Unternehmensprozesse zu
              analysieren, Automatisierungsvorschläge zu erarbeiten und zu
              implementieren.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                className="rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-accent-light"
              >
                <Link href="/kontakt">Beratungstermin anfragen</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-md border-2 border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-primary"
              >
                <a href={phoneHref} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Jetzt anrufen
                </a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={stagger}
              className="mt-10 flex flex-wrap gap-3"
            >
              {badges.map((badge) => (
                <motion.div key={badge} variants={fadeUp}>
                  <Badge className="rounded-full bg-white/15 px-4 py-1.5 text-sm text-white border-white/20 hover:bg-white/20">
                    {badge}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Rechte Spalte: Foto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full shrink-0 md:w-auto"
          >
            <div className="relative mx-auto w-64 md:w-[380px] lg:w-[440px]">
              <Image
                src="/images/frank-esper.jpg"
                alt="Frank Esper – IT-Berater für BI, DWH und KI"
                width={440}
                height={580}
                className="h-auto w-full object-cover object-top"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 380px, 440px"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
