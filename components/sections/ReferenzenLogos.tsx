import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function ReferenzenLogos() {
  if (siteConfig.referenzLogos.length === 0) return null;

  return (
    <section aria-label="Referenzen" className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {siteConfig.referenzLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.alt}
              height={40}
              width={200}
              className="h-10 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              sizes="200px"
            />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-400">
          Aus meiner Projekthistorie
        </p>
        <p className="mt-1 text-center text-xs text-slate-300">
          Alle genannten Marken sind Eigentum der jeweiligen Unternehmen.
        </p>
      </div>
    </section>
  );
}
