"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "esperit_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept(all: boolean) {
    localStorage.setItem(COOKIE_KEY, all ? "all" : "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-4 shadow-md md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-md md:border"
    >
      <p className="mb-4 text-sm text-slate-700 leading-relaxed">
        Diese Website verwendet ausschließlich technisch notwendige Cookies.
        Es werden keine Tracking- oder Analyse-Cookies eingesetzt.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          onClick={() => accept(false)}
          variant="outline"
          className="flex-1 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white"
        >
          Nur notwendige
        </Button>
        <Button
          onClick={() => accept(true)}
          className="flex-1 rounded-md bg-accent text-white hover:bg-accent-light"
        >
          Alle akzeptieren
        </Button>
      </div>
    </div>
  );
}
