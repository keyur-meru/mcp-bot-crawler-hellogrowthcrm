import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  detectByUserAgent,
  scoreRisk,
  recommendAction,
  classifyEntry,
} from "../src/core/bot-detector.ts";
import type { BehaviorSignals } from "../src/core/bot-detector.ts";
import type { LogEntry } from "../src/utils/types.ts";
import { IP } from "./fixtures.ts";

// ── detectByUserAgent ─────────────────────────────────────────────────────────

describe("detectByUserAgent", () => {
  it("matches Googlebot by User-Agent", () => {
    const result = detectByUserAgent("Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");
    assert.equal(result.matched, true);
    assert.equal(result.bot?.name, "Googlebot");
    assert.equal(result.inferredCategory, "search");
  });

  it("matches GPTBot by User-Agent", () => {
    const result = detectByUserAgent("GPTBot/1.0");
    assert.equal(result.matched, true);
    assert.equal(result.bot?.name, "GPTBot");
    assert.equal(result.inferredCategory, "ai");
  });

  it("matches ClaudeBot by User-Agent", () => {
    const result = detectByUserAgent("Mozilla/5.0 AppleWebKit/537.36 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)");
    assert.equal(result.matched, true);
    assert.equal(result.inferredCategory, "ai");
  });

  it("detects generic scraper via automation hint", () => {
    const result = detectByUserAgent("python-requests/2.28.0");
    assert.equal(result.matched, true);
    assert.equal(result.inferredCategory, "unknown");
  });

  it("detects generic scraper via 'spider' hint", () => {
    const result = detectByUserAgent("CustomSpider/1.0");
    assert.equal(result.matched, true);
    assert.equal(result.inferredCategory, "unknown");
  });

  it("returns not-matched for a regular browser UA", () => {
    const result = detectByUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    );
    assert.equal(result.matched, false);
    assert.equal(result.inferredCategory, "unknown");
  });

  it("flags empty UA as scraper", () => {
    const result = detectByUserAgent("");
    assert.equal(result.matched, true);
    assert.equal(result.inferredCategory, "scraper");
  });

  it("flags placeholder '-' UA as scraper", () => {
    const result = detectByUserAgent("-");
    assert.equal(result.matched, true);
    assert.equal(result.inferredCategory, "scraper");
  });

  it("includes a reason in every detection result", () => {
    const result = detectByUserAgent("Googlebot/2.1");
    assert.ok(result.reasons.length > 0);
    assert.ok(result.reasons[0].length > 0);
  });
});

// ── scoreRisk ─────────────────────────────────────────────────────────────────

const neutral: BehaviorSignals = {
  hits: 100,
  uniquePaths: 50,
  errorRate: 0.05,
  hoursObserved: 1,
  ignoresRobots: false,
};

describe("scoreRisk", () => {
  it("uses bot baseline risk as starting score", () => {
    const { score } = scoreRisk({ baselineRisk: 10 } as Parameters<typeof scoreRisk>[0], neutral);
    assert.equal(score, 10);
  });

  it("defaults to 50 when no bot signature provided", () => {
    const { score } = scoreRisk(null, neutral);
    assert.equal(score, 50);
  });

  it("adds +20 for ignoring robots.txt", () => {
    const { score, notes } = scoreRisk({ baselineRisk: 10 } as Parameters<typeof scoreRisk>[0], {
      ...neutral,
      ignoresRobots: true,
    });
    assert.equal(score, 30);
    assert.ok(notes.some((n) => n.includes("robots.txt")));
  });

  it("adds +25 for very high request rate (>1000 req/hr)", () => {
    const { score, notes } = scoreRisk({ baselineRisk: 10 } as Parameters<typeof scoreRisk>[0], {
      ...neutral,
      hits: 2000,
      hoursObserved: 1,
    });
    assert.equal(score, 35);
    assert.ok(notes.some((n) => n.includes("Very high")));
  });

  it("adds +10 for elevated request rate (>300 req/hr)", () => {
    const { score, notes } = scoreRisk({ baselineRisk: 10 } as Parameters<typeof scoreRisk>[0], {
      ...neutral,
      hits: 400,
      hoursObserved: 1,
    });
    assert.equal(score, 20);
    assert.ok(notes.some((n) => n.includes("Elevated")));
  });

  it("adds +15 for high error rate (>50%)", () => {
    const { score, notes } = scoreRisk({ baselineRisk: 10 } as Parameters<typeof scoreRisk>[0], {
      ...neutral,
      errorRate: 0.6,
    });
    assert.equal(score, 25);
    assert.ok(notes.some((n) => n.includes("Error rate")));
  });

  it("adds +10 for large path fan-out (>5000 unique paths)", () => {
    const { score, notes } = scoreRisk({ baselineRisk: 10 } as Parameters<typeof scoreRisk>[0], {
      ...neutral,
      uniquePaths: 6000,
    });
    assert.equal(score, 20);
    assert.ok(notes.some((n) => n.includes("unique paths")));
  });

  it("clamps score to 100", () => {
    const { score } = scoreRisk({ baselineRisk: 90 } as Parameters<typeof scoreRisk>[0], {
      hits: 5000,
      uniquePaths: 10000,
      errorRate: 0.9,
      hoursObserved: 1,
      ignoresRobots: true,
    });
    assert.equal(score, 100);
  });

  it("clamps score to 0 minimum", () => {
    const { score } = scoreRisk({ baselineRisk: 0 } as Parameters<typeof scoreRisk>[0], neutral);
    assert.equal(score, 0);
  });
});

// ── recommendAction ───────────────────────────────────────────────────────────

describe("recommendAction", () => {
  it("allows trusted search engine (score ≤25)", () => {
    const r = recommendAction(10, "search");
    assert.equal(r.action, "allow");
    assert.equal(r.status, "allowed");
  });

  it("allows social bot with score ≤30", () => {
    const r = recommendAction(25, "social");
    assert.equal(r.action, "allow");
    assert.equal(r.status, "allowed");
  });

  it("monitors AI crawler with score ≤40", () => {
    const r = recommendAction(35, "ai");
    assert.equal(r.action, "monitor");
    assert.equal(r.status, "allowed");
  });

  it("blocks bot with score ≥70", () => {
    const r = recommendAction(80, "scraper");
    assert.equal(r.action, "block");
    assert.equal(r.status, "blocked");
  });

  it("rate-limits bot with score ≥45", () => {
    const r = recommendAction(50, "seo");
    assert.equal(r.action, "rate-limit");
    assert.equal(r.status, "rate-limited");
  });

  it("asks for identity verification for unknown category bots", () => {
    const r = recommendAction(30, "unknown");
    assert.equal(r.action, "verify-identity");
    assert.equal(r.status, "unknown");
  });

  it("monitors moderate-risk non-search bots by default", () => {
    const r = recommendAction(20, "seo");
    assert.equal(r.action, "monitor");
  });
});

// ── classifyEntry ─────────────────────────────────────────────────────────────

describe("classifyEntry", () => {
  it("classifies a log entry with a known bot UA", () => {
    const entry: LogEntry = {
      ip: IP.GOOGLEBOT,
      timestamp: "10/Oct/2025:10:00:00 +0000",
      method: "GET",
      path: "/",
      status: 200,
      bytes: 1024,
      referer: "",
      userAgent: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      raw: "",
    };
    const result = classifyEntry(entry);
    assert.equal(result.matched, true);
    assert.equal(result.bot?.name, "Googlebot");
  });

  it("classifies a log entry with a human UA as not-matched", () => {
    const entry: LogEntry = {
      ip: IP.GENERIC_A,
      timestamp: "10/Oct/2025:10:00:00 +0000",
      method: "GET",
      path: "/pricing",
      status: 200,
      bytes: 512,
      referer: "https://google.com",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120",
      raw: "",
    };
    const result = classifyEntry(entry);
    assert.equal(result.matched, false);
  });
});
