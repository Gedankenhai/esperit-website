import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { fadeLeft, fadeRight } from "@/lib/animations";

export function UeberMichTeaser() {
  return (
    <section aria-label="Über mich" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <RevealOnScroll variants={fadeLeft}>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
              Über mich
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Ich bin Frank Esper
            </h2>
            <p className="leading-relaxed text-slate-600">
              BI- und DWH-Experte, AI-Enthusiast und Brückenbauer. Was mich
              antreibt? Wenn Menschen und Technik, Strategie und Taktik,
              Ausdauer und Disziplin perfekt zusammenspielen. Auf dieser Seite
              erfahren Sie mehr über mich, meine Arbeitsweise und wie Sie davon
              profitieren. Let&apos;s go!
            </p>
            <Button
              asChild
              variant="ghost"
              className="mt-6 p-0 text-primary hover:text-primary-light underline-offset-4 hover:underline h-auto font-medium"
            >
              <Link href="/ueber-mich">Lernen Sie mich kennen →</Link>
            </Button>
          </RevealOnScroll>

          {/* Bild */}
          <RevealOnScroll variants={fadeRight} className="h-full">
            <div className="relative h-full min-h-[320px] w-full bg-slate-100">
              <Image
                src="/images/F 032-25-006.jpg"
                alt="Frank Esper – IT-Berater, EsperIT"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
