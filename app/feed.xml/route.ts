import { serverClient, postsQuery } from "@/lib/sanity";
import type { SanityPost } from "@/lib/sanity";

export const revalidate = 3600;

const BASE_URL = "https://www.esperit.net";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  let posts: SanityPost[] = [];
  try {
    posts = await serverClient.fetch<SanityPost[]>(postsQuery);
  } catch {
    // Leeres Feed bei Sanity-Fehler
  }

  const items = posts
    .map((post) => {
      const url = `${BASE_URL}/news/${post.slug.current}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      const description = post.excerpt ? escapeXml(post.excerpt) : "";
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>EsperIT – News &amp; Insights</title>
    <link>${BASE_URL}</link>
    <description>Beiträge zu Data Warehouse, Business Intelligence und KI-Automatisierung von Frank Esper.</description>
    <language>de</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
