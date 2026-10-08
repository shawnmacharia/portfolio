import "server-only";
import { XMLParser } from "fast-xml-parser";
import articleSnapshot from "@/generated/articles.json";
import { siteConfig } from "@/config/site";
import type { CraftItem } from "@/content/craft";

type ArticleSource = "medium" | "blogspot";

type ArticleRecord = {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  publishedAt: string;
  source: ArticleSource;
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@",
  textNodeName: "#text",
});

function asRecord(value: unknown): Record<string, unknown> {
  return value !== null && typeof value === "object" ? (value as Record<string, unknown>) : {};
}

function asArray(value: unknown): unknown[] {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function text(value: unknown): string {
  if (typeof value === "string" || typeof value === "number") return String(value);
  const record = asRecord(value);
  return typeof record["#text"] === "string" ? record["#text"] : "";
}

function cleanExcerpt(value: unknown): string {
  const html = text(value)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ");
  const plain = html
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > 220 ? `${plain.slice(0, 217).trimEnd()}…` : plain;
}

function safeArticleUrl(value: unknown): string | null {
  const candidate = text(value);
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : null;
  } catch {
    return null;
  }
}

function article(
  titleValue: unknown,
  urlValue: unknown,
  excerptValue: unknown,
  dateValue: unknown,
  source: ArticleSource,
  idValue?: unknown,
): ArticleRecord | null {
  const title = text(titleValue).replace(/\s+/g, " ").trim();
  const url = safeArticleUrl(urlValue);
  const date = new Date(text(dateValue));
  if (!title || !url || Number.isNaN(date.valueOf())) return null;

  return {
    id: `${source}:${text(idValue) || url}`,
    title,
    url,
    excerpt: cleanExcerpt(excerptValue),
    publishedAt: date.toISOString(),
    source,
  };
}

function parseMedium(xml: string): ArticleRecord[] {
  const document = asRecord(parser.parse(xml));
  const rss = asRecord(document.rss);
  const channel = asRecord(rss.channel);
  return asArray(channel.item)
    .map((value) => {
      const item = asRecord(value);
      return article(
        item.title,
        item.link,
        item["content:encoded"] ?? item.description,
        item.pubDate,
        "medium",
        item.guid,
      );
    })
    .filter((value): value is ArticleRecord => value !== null);
}

function parseBlogger(json: unknown): ArticleRecord[] {
  const feed = asRecord(asRecord(json).feed);
  return asArray(feed.entry)
    .map((value) => {
      const entry = asRecord(value);
      const links = asArray(entry.link).map(asRecord);
      const link = links.find((candidate) => candidate.rel === "alternate" && candidate.type === "text/html");
      return article(
        asRecord(entry.title).$t,
        link?.href,
        asRecord(entry.summary).$t ?? asRecord(entry.content).$t,
        asRecord(entry.published).$t,
        "blogspot",
        asRecord(entry.id).$t,
      );
    })
    .filter((value): value is ArticleRecord => value !== null);
}

async function fetchFeed(url: string, source: ArticleSource): Promise<ArticleRecord[]> {
  const response = await fetch(url, {
    headers: { accept: source === "medium" ? "application/rss+xml, application/xml" : "application/json" },
    signal: AbortSignal.timeout(10_000),
    next: { revalidate: siteConfig.articles.revalidateSeconds },
  });
  if (!response.ok) {
    throw new Error(`${source} feed returned HTTP ${response.status}`);
  }

  return source === "medium" ? parseMedium(await response.text()) : parseBlogger(await response.json());
}

function snapshotFor(source: ArticleSource): ArticleRecord[] {
  return (articleSnapshot as ArticleRecord[]).filter((value) => value.source === source);
}

export async function getArticleCraftItems(): Promise<CraftItem[]> {
  const sources = [
    { source: "medium" as const, url: siteConfig.articles.medium.feedUrl },
    { source: "blogspot" as const, url: siteConfig.articles.blogger.feedUrl },
  ];

  const results = await Promise.all(
    sources.map(async ({ source, url }) => {
      try {
        const liveArticles = await fetchFeed(url, source);
        return liveArticles.length ? liveArticles : snapshotFor(source);
      } catch (error) {
        console.warn(`Unable to refresh ${source} articles; using the checked-in snapshot.`, error);
        return snapshotFor(source);
      }
    }),
  );

  const uniqueArticles = new Map<string, ArticleRecord>();
  for (const value of results.flat()) {
    uniqueArticles.set(value.url, value);
  }

  return [...uniqueArticles.values()]
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .map((value) => ({
      id: value.id,
      title: value.title,
      description: value.excerpt,
      kind: value.source,
      category: "articles",
      href: value.url,
      accent: value.source === "medium" ? "#E8E2DA" : "#DDE7F3",
      note: `${new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(value.publishedAt))} · read article ↗`,
      publishedAt: value.publishedAt,
    }));
}
