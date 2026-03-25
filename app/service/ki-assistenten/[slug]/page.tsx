import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { assistantsData, getAssistantBySlug } from "@/lib/assistants-data";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export function generateStaticParams() {
  return assistantsData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const assistant = getAssistantBySlug(slug);
  if (!assistant) return {};
  return {
    title: `${assistant.name} | KI-Assistenten | EsperIT`,
    description: assistant.zweck,
    alternates: { canonical: `/service/ki-assistenten/${slug}` },
  };
}

export default async function KiAssistentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const assistant = getAssistantBySlug(slug);
  if (!assistant) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
      { "@type": "ListItem", position: 2, name: "Service", item: "https://www.esperit.net/service" },
      { "@type": "ListItem", position: 3, name: "KI-Assistenten", item: "https://www.esperit.net/service/ki-assistenten" },
      { "@type": "ListItem", position: 4, name: assistant.name, item: `https://www.esperit.net/service/ki-assistenten/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Mini-Hero */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service/ki-assistenten" className="hover:text-white">KI-Assistenten</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{assistant.name}</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {assistant.name}
          </h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            {assistant.zweck}
          </p>
        </div>
      </section>

      {/* Inhalt */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 space-y-12">

          {/* Beschreibung */}
          <RevealOnScroll>
            <p className="text-slate-600 leading-relaxed text-base">
              {assistant.beschreibung}
            </p>
          </RevealOnScroll>

          {/* Erforderlicher Input */}
          <RevealOnScroll>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Erforderlicher Input
              </h2>
              <ul className="space-y-2">
                {assistant.erforderlicherInput.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Kontext-Wissen */}
          {assistant.kontextWissen.length > 0 && (
            <RevealOnScroll>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Kontext-Wissen (optional)
                </h2>
                <ul className="space-y-2">
                  {assistant.kontextWissen.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          )}

          {/* Tools */}
          {assistant.tools && assistant.tools.length > 0 && (
            <RevealOnScroll>
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Benötigte Tools
                </h2>
                <ul className="space-y-2">
                  {assistant.tools.map((tool) => (
                    <li key={tool} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span className="text-slate-600">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          )}

          {/* Systemprompt */}
          <RevealOnScroll>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Systemprompt
              </h2>
              <pre className="overflow-x-auto rounded-none border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-mono">
                {assistant.systemprompt}
              </pre>
            </div>
          </RevealOnScroll>

          {/* Navigation */}
          <RevealOnScroll>
            <Link
              href="/service/ki-assistenten"
              className="text-sm text-accent hover:text-accent-light hover:underline underline-offset-4"
            >
              ← Zurück zur Übersicht
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
