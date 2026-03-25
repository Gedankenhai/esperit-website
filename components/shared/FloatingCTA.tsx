"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function FloatingCTA() {
  if (!siteConfig.features.floatingCta) return null;

  const phoneHref = `tel:${siteConfig.company.phone.replace(/\s/g, "")}`;

  return (
    <a
      href={phoneHref}
      aria-label="Jetzt anrufen"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-md bg-accent px-4 py-3 text-white shadow-lg transition-colors hover:bg-accent-light md:hidden"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      <span className="font-medium text-sm">Jetzt anrufen</span>
    </a>
  );
}
