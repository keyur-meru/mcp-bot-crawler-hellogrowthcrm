import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  parseRobotsTxt,
  rulesFor,
  isDisallowed,
  parseSitemap,
  parseSitemapIndex,
} from "../src/core/robots-parser.ts";

// ── parseRobotsTxt ────────────────────────────────────────────────────────────

const SAMPLE_ROBOTS = `
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /public/

User-agent: Googlebot
Allow: /
Crawl-delay: 1

Sitemap: https://example.com/sitemap.xml
Sitemap: https://example.com/sitemap-blog.xml
`;

describe("parseRobotsTxt", () => {
  it("parses multiple user-agent groups", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    assert.ok(robots.groups.length >= 2);
  });

  it("captures sitemap declarations", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    assert.equal(robots.sitemaps.length, 2);
    assert.ok(robots.sitemaps.includes("https://example.com/sitemap.xml"));
  });

  it("parses disallow rules for wildcard agent", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    const wildcardGroup = robots.groups.find((g) => g.userAgents.includes("*"));
    assert.ok(wildcardGroup);
    assert.ok(wildcardGroup.disallow.includes("/admin/"));
    assert.ok(wildcardGroup.disallow.includes("/private/"));
  });

  it("parses allow rules for wildcard agent", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    const wildcardGroup = robots.groups.find((g) => g.userAgents.includes("*"));
    assert.ok(wildcardGroup);
    assert.ok(wildcardGroup.allow.includes("/public/"));
  });

  it("parses crawl-delay for Googlebot group", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    const gbGroup = robots.groups.find((g) => g.userAgents.includes("Googlebot"));
    assert.ok(gbGroup);
    assert.equal(gbGroup.crawlDelaySeconds, 1);
  });

  it("ignores comment lines", () => {
    const txt = `
# This is a comment
User-agent: *
# Another comment
Disallow: /secret/
`;
    const robots = parseRobotsTxt(txt);
    assert.equal(robots.groups.length, 1);
    assert.ok(robots.groups[0].disallow.includes("/secret/"));
  });

  it("handles an empty Disallow (allow-all) by not adding empty rule", () => {
    const txt = "User-agent: *\nDisallow:\n";
    const robots = parseRobotsTxt(txt);
    assert.equal(robots.groups[0].disallow.length, 0);
  });

  it("handles multiple user-agent lines in one group", () => {
    const txt = `
User-agent: Bingbot
User-agent: BingPreview
Disallow: /temp/
`;
    const robots = parseRobotsTxt(txt);
    assert.equal(robots.groups.length, 1);
    assert.ok(robots.groups[0].userAgents.includes("Bingbot"));
    assert.ok(robots.groups[0].userAgents.includes("BingPreview"));
  });
});

// ── rulesFor ──────────────────────────────────────────────────────────────────

describe("rulesFor", () => {
  it("returns specific rules when agent matches a named group", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    const rules = rulesFor(robots, "Googlebot/2.1");
    assert.ok(rules !== null);
    assert.ok(rules.userAgents.some((u) => u.toLowerCase() === "googlebot"));
  });

  it("falls back to wildcard when no specific match", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    const rules = rulesFor(robots, "SomeUnknownBot/1.0");
    assert.ok(rules !== null);
    assert.ok(rules.userAgents.includes("*"));
  });

  it("returns null when robots.txt has no groups", () => {
    const robots = parseRobotsTxt("Sitemap: https://example.com/sitemap.xml");
    const rules = rulesFor(robots, "Googlebot");
    assert.equal(rules, null);
  });

  it("prefers more specific agent over wildcard (longer match wins)", () => {
    const txt = `
User-agent: *
Disallow: /all/

User-agent: GPTBot
Disallow: /ai-only/
`;
    const robots = parseRobotsTxt(txt);
    const rules = rulesFor(robots, "GPTBot/1.0");
    assert.ok(rules !== null);
    assert.ok(rules.disallow.includes("/ai-only/"));
    assert.ok(!rules.disallow.includes("/all/"));
  });
});

// ── isDisallowed ──────────────────────────────────────────────────────────────

describe("isDisallowed", () => {
  it("returns true for a disallowed path", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    assert.equal(isDisallowed(robots, "SomeBot", "/admin/dashboard"), true);
  });

  it("returns false for an allowed path", () => {
    const robots = parseRobotsTxt(SAMPLE_ROBOTS);
    assert.equal(isDisallowed(robots, "SomeBot", "/blog/post-1"), false);
  });

  it("returns false when no rules apply", () => {
    const robots = parseRobotsTxt("Sitemap: https://example.com/sitemap.xml");
    assert.equal(isDisallowed(robots, "AnyBot", "/anything"), false);
  });

  it("Allow overrides Disallow when Allow is longer (more specific)", () => {
    const txt = `
User-agent: *
Disallow: /private/
Allow: /private/public-page/
`;
    const robots = parseRobotsTxt(txt);
    assert.equal(isDisallowed(robots, "AnyBot", "/private/public-page/"), false);
    assert.equal(isDisallowed(robots, "AnyBot", "/private/secret"), true);
  });

  it("handles wildcard '*' in patterns", () => {
    const txt = `
User-agent: *
Disallow: /search?*
`;
    const robots = parseRobotsTxt(txt);
    assert.equal(isDisallowed(robots, "AnyBot", "/search?q=test"), true);
    assert.equal(isDisallowed(robots, "AnyBot", "/search"), false);
  });

  it("handles '$' end-of-path anchor", () => {
    const txt = `
User-agent: *
Disallow: /trap$
`;
    const robots = parseRobotsTxt(txt);
    assert.equal(isDisallowed(robots, "AnyBot", "/trap"), true);
    assert.equal(isDisallowed(robots, "AnyBot", "/trap/extra"), false);
  });
});

// ── parseSitemap ──────────────────────────────────────────────────────────────

const SAMPLE_SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/blog/post-1</loc>
    <lastmod>2025-02-15</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/about</loc>
  </url>
</urlset>`;

describe("parseSitemap", () => {
  it("parses all URL entries", () => {
    const entries = parseSitemap(SAMPLE_SITEMAP);
    assert.equal(entries.length, 3);
  });

  it("extracts loc, lastmod, changefreq, priority", () => {
    const entries = parseSitemap(SAMPLE_SITEMAP);
    const home = entries[0];
    assert.equal(home.loc, "https://example.com/");
    assert.equal(home.lastmod, "2025-01-01");
    assert.equal(home.changefreq, "weekly");
    assert.equal(home.priority, 1);
  });

  it("handles entries missing optional fields", () => {
    const entries = parseSitemap(SAMPLE_SITEMAP);
    const about = entries[2];
    assert.equal(about.loc, "https://example.com/about");
    assert.equal(about.lastmod, undefined);
    assert.equal(about.priority, undefined);
  });

  it("returns empty array for malformed XML", () => {
    const entries = parseSitemap("<not>valid</urlset>");
    assert.equal(entries.length, 0);
  });
});

// ── parseSitemapIndex ─────────────────────────────────────────────────────────

const SAMPLE_SITEMAP_INDEX = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-blog.xml</loc>
  </sitemap>
</sitemapindex>`;

describe("parseSitemapIndex", () => {
  it("returns child sitemap URLs", () => {
    const urls = parseSitemapIndex(SAMPLE_SITEMAP_INDEX);
    assert.equal(urls.length, 2);
    assert.ok(urls.includes("https://example.com/sitemap-pages.xml"));
    assert.ok(urls.includes("https://example.com/sitemap-blog.xml"));
  });

  it("returns empty array when no child sitemaps", () => {
    const urls = parseSitemapIndex("<sitemapindex></sitemapindex>");
    assert.equal(urls.length, 0);
  });
});
