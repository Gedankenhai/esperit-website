import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import {
  client,
  postBySlugQuery,
  postSlugsQuery,
  urlFor,
} from "@/lib/sanity";
import type { SanityPost } from "@/lib/sanity";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(postSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await client.fetch<SanityPost | null>(postBySlugQuery, {
      slug,
    });
    if (!post) return {};
    return {
      title: `${post.title} | EsperIT`,
      description: post.excerpt ?? "",
      alternates: { canonical: `/news/${slug}` },
      openGraph: post.mainImage
        ? {
            images: [
              { url: urlFor(post.mainImage).width(1200).height(630).url() },
            ],
          }
        : undefined,
    };
  } catch {
    return {};
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed text-slate-600">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold text-slate-900">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-8 mb-3 text-xl font-bold text-slate-900">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-accent pl-4 text-slate-500 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-4 ml-4 list-disc space-y-1 text-slate-600">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-4 ml-4 list-decimal space-y-1 text-slate-600">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href?: string };
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-4 hover:text-accent-light"
      >
        {children}
      </a>
    ),
  },
};

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: SanityPost | null = null;

  try {
    post = await client.fetch<SanityPost | null>(postBySlugQuery, {
      slug,
    });
  } catch {
    notFound();
  }

  if (!post) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
      { "@type": "ListItem", position: 2, name: "News & Insights", item: "https://www.esperit.net/news" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.esperit.net/news/${slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt ?? "",
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: "Frank Esper" },
    publisher: { "@type": "Organization", name: "EsperIT" },
    ...(post.mainImage && {
      image: urlFor(post.mainImage).width(1200).height(630).url(),
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article>
        {/* Hero */}
        <header className="bg-primary py-16 text-white">
          <div className="mx-auto max-w-3xl px-4">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/news" className="hover:text-white">News & Insights</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80 line-clamp-1">{post.title}</span>
            </nav>
            <p className="text-xs font-mono text-white/50 mb-3">
              {formatDate(post.publishedAt)}
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl leading-snug">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-white/70 leading-relaxed max-w-xl">
                {post.excerpt}
              </p>
            )}
          </div>
        </header>

        {/* Titelbild */}
        {post.mainImage && (
          <div className="relative h-64 w-full overflow-hidden bg-slate-100 md:h-96">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={
                (post.mainImage as { alt?: string })?.alt ?? post.title
              }
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        )}

        {/* Inhalt */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4">
            {post.body && (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <PortableText value={post.body as any} components={portableTextComponents} />
            )}

            <div className="mt-12 border-t border-slate-200 pt-8">
              <Link
                href="/news"
                className="text-sm text-accent hover:text-accent-light hover:underline underline-offset-4"
              >
                ← Zurück zur Übersicht
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
