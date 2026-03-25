import Link from "next/link";
import { Linkedin, Rss } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  const phoneHref = `tel:${siteConfig.company.phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Spalte 1: Firma + Social */}
          <div>
            <p className="mb-1 font-bold text-white">{siteConfig.company.name}</p>
            <p className="text-sm text-slate-400">{siteConfig.company.owner}</p>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              {siteConfig.company.address.street}
              <br />
              {siteConfig.company.address.zip} {siteConfig.company.address.city}
            </p>
            <div className="mt-4 flex items-center gap-3">
              {siteConfig.features.linkedinButton &&
                siteConfig.company.social.linkedin && (
                  <a
                    href={siteConfig.company.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profil"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                )}
              {siteConfig.features.xingButton &&
                siteConfig.company.social.xing && (
                  <a
                    href={siteConfig.company.social.xing}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Xing Profil"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.643-.962-.643H3.648z" />
                    </svg>
                  </a>
                )}
            </div>
          </div>

          {/* Spalte 2: Leistungen */}
          <div>
            <p className="mb-3 font-medium text-white">Leistungen</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/leistungen/datawarehouse"
                  className="hover:text-white transition-colors"
                >
                  DataWarehouse
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/business-intelligence"
                  className="hover:text-white transition-colors"
                >
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/ki"
                  className="hover:text-white transition-colors"
                >
                  Künstliche Intelligenz
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ki-schulungen"
                  className="hover:text-white transition-colors"
                >
                  KI-Schulungen
                </Link>
              </li>
              <li>
                <Link
                  href="/service/consulting-workshops"
                  className="hover:text-white transition-colors"
                >
                  Consulting & Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Kontakt */}
          <div>
            <p className="mb-3 font-medium text-white">Kontakt</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {siteConfig.company.address.street}
                <br />
                {siteConfig.company.address.zip}{" "}
                {siteConfig.company.address.city}
              </li>
              <li className="pt-1">{siteConfig.company.openingHours.weekdays}</li>
            </ul>
          </div>

          {/* Spalte 4: Rechtliches */}
          <div>
            <p className="mb-3 font-medium text-white">Rechtliches</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-white transition-colors"
                >
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="hover:text-white transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-700 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {siteConfig.company.name} – {siteConfig.company.owner}.
            Alle Rechte vorbehalten.
          </p>
          <a
            href="/feed.xml"
            aria-label="RSS Feed"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Rss className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
