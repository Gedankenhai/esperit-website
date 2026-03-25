import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client, postsQuery, urlFor } from "@/lib/sanity";
import type { SanityPost } from "@/lib/sanity";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "News & Insights | EsperIT",
  description:
    "Aktuelle Beiträge zu Data Warehouse, Business Intelligence und KI-Automatisierung von Frank Esper.",
  alternates: { canonical: "/news" },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function NewsPage() {
  let posts: SanityPost[] = [];
  try {
    posts = await client.fetch<SanityPost[]>(postsQuery);
  } catch {
    // Bei Fehlern leere Liste – kein App-Crash
  }

  return (
    <>
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">News & Insights</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            News & Insights
          </h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Beiträge zu Data Warehouse, Business Intelligence und
            KI-Automatisierung.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {posts.length === 0 ? (
            <p className="text-slate-400 text-sm">
              Bald verfügbar – die ersten Beiträge sind in Vorbereitung.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/news/${post.slug.current}`}
                  className="group block border border-slate-200 hover:border-primary/40 transition-colors"
                >
                  {post.mainImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={
                          (post.mainImage as { alt?: string })?.alt ??
                          post.title
                        }
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs text-slate-400 mb-2 font-mono">
                      {formatDate(post.publishedAt)}
                    </p>
                    <h2 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <p className="mt-4 text-xs font-medium text-accent group-hover:underline underline-offset-4">
                      Weiterlesen →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
