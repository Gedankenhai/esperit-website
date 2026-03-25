"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app/error]", error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white py-20">
      <div className="mx-auto max-w-lg px-4 text-center">
        <p className="font-mono text-5xl font-bold text-primary mb-4">500</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Ein Fehler ist aufgetreten
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          Leider ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder
          nehmen Sie direkt Kontakt auf.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={reset}
            className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary-light"
          >
            Erneut versuchen
          </Button>
          <Button asChild variant="outline" className="rounded-md px-6 py-3 font-medium">
            <Link href="/">Zur Startseite</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
