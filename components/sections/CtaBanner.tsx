import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { siteConfig } from "@/lib/config";

export function CtaBanner() {
  const phoneHref = `tel:${siteConfig.company.phone.replace(/\s/g, "")}`;

  return (
    <section aria-label="Call to Action" className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <RevealOnScroll>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            Bereit für Ihr Projekt?
          </h2>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
                {siteConfig.company.phone}
              </a>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
