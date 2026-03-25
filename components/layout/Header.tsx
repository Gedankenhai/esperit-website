"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneHref = `tel:${siteConfig.company.phone.replace(/\s/g, "")}`;

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-md backdrop-blur-sm"
          : "bg-white"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/firmenlogo.png"
            alt="EsperIT Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
          {siteConfig.navigation
            .filter((item) => !item.cta)
            .map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <button
                    className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="absolute left-0 top-full z-50 hidden group-hover:block group-focus-within:block">
                    <ul className="mt-1 w-56 border border-slate-200 bg-white p-2 shadow-md">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-sm px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:outline-none"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-sm px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors focus:outline-none"
                >
                  {item.label}
                </Link>
              )
            )}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Sprachschalter (deaktiviert) */}
          {false && (
            <span
              title="English version coming soon"
              className="cursor-not-allowed text-xs text-slate-300 select-none"
            >
              DE | EN
            </span>
          )}

          <a
            href={phoneHref}
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
            {siteConfig.company.phone}
          </a>

          <Button
            asChild
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-light"
          >
            <Link href="/kontakt">Kontakt</Link>
          </Button>

          <Link
            href="/impressum"
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            Impressum
          </Link>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </motion.header>
  );
}
