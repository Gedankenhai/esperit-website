"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Menü öffnen"
          className="md:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 p-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
            <span className="font-bold text-primary">EsperIT</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="space-y-1">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpanded(
                            expanded === item.href ? null : item.href
                          )
                        }
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${expanded === item.href ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      {expanded === item.href && (
                        <ul className="ml-3 mt-1 space-y-1 border-l border-slate-200 pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : item.cta ? (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md bg-accent px-3 py-2 text-center text-sm font-medium text-white hover:bg-accent-light"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-slate-200 px-4 py-4">
            <a
              href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
              className="block text-center text-sm font-medium text-primary hover:text-primary-light"
            >
              ☎ {siteConfig.company.phone}
            </a>
            <Link
              href="/impressum"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center text-xs text-slate-400 hover:text-slate-600"
            >
              Impressum
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
