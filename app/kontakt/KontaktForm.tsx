"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/lib/config";

const kontaktSchema = z.object({
  anrede: z.string().optional(),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  telefon: z.string().min(5, "Bitte geben Sie Ihre Telefonnummer ein."),
  email: z.string().email("Bitte gültige E-Mail eingeben."),
  betreff: z.string().min(1, "Bitte wählen Sie einen Betreff."),
  nachricht: z.string().optional(),
  datenschutz: z
    .boolean()
    .refine((v) => v === true, "Bitte stimmen Sie der Datenschutzerklärung zu."),
  website: z.string().max(0),
});

type KontaktFormValues = z.infer<typeof kontaktSchema>;

const betreffOptionen = [
  "DataWarehouse",
  "Business Intelligence",
  "Künstliche Intelligenz",
  "KI-Schulung",
  "KI-Assistent",
  "Consulting / Workshop",
  "Sonstiges",
];

export function KontaktForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const form = useForm<KontaktFormValues>({
    resolver: zodResolver(kontaktSchema),
    defaultValues: {
      anrede: "",
      name: "",
      telefon: "",
      email: "",
      betreff: "",
      nachricht: "",
      datenschutz: false,
      website: "",
    },
  });

  async function onSubmit(values: KontaktFormValues) {
    if (values.website) return; // honeypot
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-slate-200 bg-slate-50 p-8 text-center">
        <p className="text-slate-900 font-medium text-lg mb-2">
          Vielen Dank!
        </p>
        <p className="text-slate-600">
          Ich melde mich innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        aria-label="Kontaktformular"
      >
        {/* Honeypot – für Screen-Reader und Bots unsichtbar */}
        <div style={{ display: "none" }} aria-hidden="true">
          <label htmlFor="website">Website (nicht ausfüllen)</label>
          <input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...form.register("website")}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Anrede */}
          <FormField
            control={form.control}
            name="anrede"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anrede</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger aria-label="Anrede auswählen">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Herr">Herr</SelectItem>
                    <SelectItem value="Frau">Frau</SelectItem>
                    <SelectItem value="Divers">Divers</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Vor- und Nachname <span aria-hidden="true">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Max Mustermann"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Telefon */}
          <FormField
            control={form.control}
            name="telefon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Telefon <span aria-hidden="true">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+49 123 456789"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* E-Mail */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  E-Mail <span aria-hidden="true">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="ihre@email.de"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Betreff */}
          <FormField
            control={form.control}
            name="betreff"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>
                  Betreff <span aria-hidden="true">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger aria-label="Betreff auswählen">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {betreffOptionen.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nachricht */}
          <FormField
            control={form.control}
            name="nachricht"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Nachricht</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Beschreiben Sie kurz Ihr Anliegen …"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Datenschutz */}
          <FormField
            control={form.control}
            name="datenschutz"
            render={({ field }) => (
              <FormItem className="sm:col-span-2 flex flex-row items-start gap-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-required="true"
                  />
                </FormControl>
                <div className="leading-snug">
                  <FormLabel className="font-normal text-sm text-slate-600 cursor-pointer">
                    Ich habe die{" "}
                    <a
                      href="/datenschutz"
                      className="underline underline-offset-4 hover:text-slate-900"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                    <span aria-hidden="true">*</span>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        {/* Fehlerhinweis */}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-600" role="alert">
            Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen
            Sie es erneut oder rufen Sie direkt an:{" "}
            <a
              href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.company.phone}
            </a>
          </p>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="mt-6 rounded-md bg-primary px-8 py-3 font-medium text-white hover:bg-primary-light disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Wird gesendet …
            </>
          ) : (
            "Nachricht senden"
          )}
        </Button>

        <p className="mt-3 text-xs text-slate-400">
          <span aria-hidden="true">*</span> Pflichtfelder
        </p>
      </form>
    </Form>
  );
}
