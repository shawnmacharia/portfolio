import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { XMLParser } from "fast-xml-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const snapshotPath = path.join(repoRoot, "src", "generated", "articles.json");
const feeds = [
  { source: "medium", url: "https://medium.com/feed/@shawnmacharia9" },
  { source: "blogspot", url: "https://www.blogger.com/feeds/3410518966050500386/posts/default?alt=json&max-results=50" },
];
const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@", textNodeName: "#text" });

const record = (value) => (value && typeof value === "object" ? value : {});
const array = (value) => (value === undefined || value === null ? [] : Array.isArray(value) ? value : [value]);
const getText = (value) => {
  if (typeof value === "string" || typeof value === "number") return String(value);
  const nested = record(value)["#text"];
  return typeof nested === "string" ? nested : "";
};
const cleanExcerpt = (value) => getText(value)
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]*>/g, " ")
  .replace(/&nbsp;|&#160;/gi, " ")
  .replace(/&amp;/gi, "&")
  .replace(/&quot;/gi, '"')
  .replace(/&#39;|&apos;/gi, "'")
  .replace(/&lt;/gi, "<")
  .replace(/&gt;/gi, ">")
  .replace(/\s+/g, " ")
  .trim()
  .slice(0, 220);

function normalize(titleValue, urlValue, excerptValue, dateValue, source, idValue) {
  const title = getText(titleValue).replace(/\s+/g, " ").trim();
  const date = new Date(getText(dateValue));
  let url;
  try {
    const parsed = new URL(getText(urlValue));
    if (parsed.protocol === "https:" || parsed.protocol === "http:") url = parsed.toString();
  } catch {
    return null;
  }
  if (!title || !url || Number.isNaN(date.valueOf())) return null;
  return {
    id: `${source}:${getText(idValue) || url}`,
    title,
    url,
    excerpt: cleanExcerpt(excerptValue),
    publishedAt: date.toISOString(),
    source,
  };
}

function parseMedium(xml) {
  const channel = record(record(record(parser.parse(xml)).rss).channel);
  return array(channel.item)
    .map((value) => {
      const item = record(value);
      return normalize(item.title, item.link, item["content:encoded"] ?? item.description, item.pubDate, "medium", item.guid);
    })
    .filter(Boolean);
}

function parseBlogger(json) {
  const feed = record(record(json).feed);
  return array(feed.entry)
    .map((value) => {
      const entry = record(value);
      const alternate = array(entry.link).map(record).find((link) => link.rel === "alternate" && link.type === "text/html");
      return normalize(
        record(entry.title).$t,
        alternate?.href,
        record(entry.summary).$t ?? record(entry.content).$t,
        record(entry.published).$t,
        "blogspot",
        record(entry.id).$t,
      );
    })
    .filter(Boolean);
}

let existing = [];
try {
  existing = JSON.parse(await fs.readFile(snapshotPath, "utf8"));
  if (!Array.isArray(existing)) throw new Error("Article snapshot must be a JSON array.");
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}

const refreshed = [];
for (const feed of feeds) {
  try {
    const response = await fetch(feed.url, {
      headers: { accept: feed.source === "medium" ? "application/rss+xml, application/xml" : "application/json" },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`${feed.source} feed returned HTTP ${response.status}`);
    const articles = feed.source === "medium" ? parseMedium(await response.text()) : parseBlogger(await response.json());
    if (!articles.length) throw new Error(`${feed.source} feed returned no parseable articles`);
    refreshed.push(...articles);
  } catch (error) {
    console.warn(`Unable to refresh ${feed.source}; preserving its existing snapshot entries.`, error);
    refreshed.push(...existing.filter((article) => article.source === feed.source));
  }
}

if (!refreshed.length) {
  throw new Error("No article feeds were available and the snapshot has no saved articles.");
}

const unique = new Map(refreshed.map((article) => [article.url, article]));
const articles = [...unique.values()].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
await fs.mkdir(path.dirname(snapshotPath), { recursive: true });
await fs.writeFile(snapshotPath, `${JSON.stringify(articles, null, 2)}\n`, "utf8");
console.log(`Saved ${articles.length} articles to src/generated/articles.json.`);
