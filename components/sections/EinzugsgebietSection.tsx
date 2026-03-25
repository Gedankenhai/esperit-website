import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const orte = [
  "PLZ-Bereich 2* (in Präsenz)",
  "Deutschlandweit (remote)",
];

export function EinzugsgebietSection() {
  return (
    <section aria-label="Einzugsgebiet" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <RevealOnScroll>
          <MapPin
            className="mx-auto mb-4 h-8 w-8 text-accent"
            aria-hidden="true"
          />
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Mein Einzugsgebiet
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {orte.map((ort) => (
              <Badge
                key={ort}
                className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary-light"
              >
                {ort}
              </Badge>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
