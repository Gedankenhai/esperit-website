"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { fadeUp } from "@/lib/animations";

const schema = z.object({
  email: z.string().email("Bitte gültige E-Mail-Adresse eingeben"),
  consent: z.boolean().refine((v) => v === true, {
    message: "Bitte stimmen Sie der Datenspeicherung zu.",
  }),
});

type FormData = z.infer<typeof schema>;

export function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const consent = watch("consent");

  function onSubmit() {
    // Download starten
    const link = document.createElement("a");
    link.href = "/downloads/DSGVO_Compliance_Check.pdf";
    link.download = "DSGVO_Compliance_Check.pdf";
    link.click();
    setSubmitted(true);
  }

  return (
    <section aria-label="Lead Magnet" className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center text-white">
        <RevealOnScroll variants={fadeUp}>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white/60">
            Kostenloser Download
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            DSGVO Compliance Checklist
          </h2>
          <p className="mb-2 text-white/80 leading-relaxed">
            20 Fragen, die Ihnen sagen, ob es in Ihrem Unternehmen
            Handlungsbedarf gibt.
          </p>
          <p className="mb-8 text-sm text-white/60">
            Finden Sie in 5 Minuten heraus, ob die Prozesse in Ihrem
            Unternehmen DSGVO-konform sind.
          </p>

          {submitted ? (
            <div className="rounded-md bg-white/10 px-6 py-8">
              <p className="text-lg font-medium text-white">
                Download wurde gestartet. Vielen Dank!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  aria-label="E-Mail-Adresse"
                  className="rounded-md border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white focus:ring-white"
                />
                {errors.email && (
                  <p className="mt-1 text-left text-sm text-red-300">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3 text-left">
                <Checkbox
                  id="lead-consent"
                  checked={consent}
                  onCheckedChange={(v) =>
                    setValue("consent", v === true, { shouldValidate: true })
                  }
                  className="mt-0.5 border-white/40 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                />
                <label
                  htmlFor="lead-consent"
                  className="text-sm text-white/70 leading-relaxed cursor-pointer"
                >
                  Ich bin einverstanden, dass meine E-Mail-Adresse gespeichert
                  wird.
                </label>
              </div>
              {errors.consent && (
                <p className="text-left text-sm text-red-300">
                  {errors.consent.message}
                </p>
              )}

              <Button
                type="submit"
                className="w-full rounded-md bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light"
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Checkliste herunterladen
              </Button>
            </form>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
