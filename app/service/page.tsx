import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Bot, Briefcase } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export const metadata: Metadata = {
  title: "Service | EsperIT",
  description:
    "KI-Schulungen, spezialisierte KI-Assistenten und Consulting & Workshops von EsperIT – Frank Esper.",
  alternates: { canonical: "/service" },
};

const angebote = [
  {
    icon: GraduationCap,
    titel: "KI-Schulungen",
    text: "Maßgeschneiderte Schulungen für Ihr Team – praxisnah, auf Ihre Anforderungen zugeschnitten und direkt anwendbar.",
    href: "/service/ki-schulungen",
  },
  {
    icon: Bot,
    titel: "KI-Assistenten",
    text: "9 spezialisierte KI-Assistenten für typische Unternehmensaufgaben – transparent, nachvollziehbar, ohne versteckte Logik.",
    href: "/service/ki-assistenten",
  },
  {
    icon: Briefcase,
    titel: "Consulting & Workshops",
    text: "Flexible Beratung als PoC oder Machbarkeitsanalyse sowie praxisnahe Workshops mit Ihrem Team (1–2 Tage).",
    href: "/service/consulting-workshops",
  },
];

export default function ServicePage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Service</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Service</h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Schulungen, KI-Assistenten und Beratung – praxisnah und auf Ihr
            Unternehmen zugeschnitten.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {angebote.map((a, i) => (
              <RevealOnScroll key={a.href} delay={i * 0.1}>
                <Link
                  href={a.href}
                  className="group block border border-slate-200 p-8 hover:border-primary/40 hover:bg-slate-50 transition-colors"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary-lighter text-primary">
                    <a.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {a.titel}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {a.text}
                  </p>
                  <span className="text-sm font-medium text-accent group-hover:underline underline-offset-4">
                    Mehr erfahren →
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
