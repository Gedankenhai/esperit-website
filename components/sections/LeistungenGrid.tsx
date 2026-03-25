import Link from "next/link";
import { Database, BarChart2, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { servicesData } from "@/lib/services-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  BarChart2,
  Brain,
};

export function LeistungenGrid() {
  return (
    <section aria-label="Leistungen" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <RevealOnScroll>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Meine Leistungen
          </h2>
          <p className="mb-10 max-w-xl text-slate-600 leading-relaxed">
            Von der Datenarchitektur bis zur KI-Automatisierung –
            ganzheitliche IT-Beratung aus einer Hand.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Database;
            return (
              <RevealOnScroll key={service.slug} delay={i * 0.1}>
                <Card className="group h-full border border-slate-200 bg-white hover:border-primary/30 transition-colors rounded-none">
                  <CardHeader className="p-6 pb-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary-lighter text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {service.titel}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-sm text-slate-500 leading-relaxed mb-2">
                      {service.kurz}
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.beschreibung}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="mt-4 p-0 text-primary hover:text-primary-light group-hover:underline underline-offset-4 h-auto"
                    >
                      <Link href={`/leistungen/${service.slug}`}>
                        Mehr erfahren →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
