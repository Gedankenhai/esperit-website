import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white py-20">
      <div className="mx-auto max-w-lg px-4 text-center">
        <p className="font-mono text-5xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          Die gesuchte Seite existiert leider nicht. Möglicherweise wurde sie
          verschoben oder gelöscht.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary-light">
            <Link href="/">Zur Startseite</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-md px-6 py-3 font-medium">
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
