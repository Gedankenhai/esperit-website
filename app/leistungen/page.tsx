import type { Metadata } from "next";
import Link from "next/link";
import { Database, BarChart2, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "DataWarehouse, Business Intelligence und KI-Automatisierung – IT-Beratung von Frank Esper / EsperIT.",
  alternates: { canonical: "/leistungen" },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  BarChart2,
  Brain,
};

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Leistungen</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Leistungen</h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {servicesData.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Database;
              return (
                <RevealOnScroll key={service.slug} delay={i * 0.1}>
                  <Link href={`/leistungen/${service.slug}`} className="group block h-full">
                    <Card className="h-full border border-slate-200 bg-white hover:border-primary/30 transition-colors rounded-none">
                      <CardHeader className="p-6 pb-4">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary-lighter text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {service.titel}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-6 pb-6">
                        <p className="text-sm text-slate-500 leading-relaxed mb-2">{service.kurz}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{service.beschreibung}</p>
                        <p className="mt-4 text-sm font-medium text-primary">
                          Mehr erfahren →
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
