import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { parseLine, parseAccessLog, clfToIso } from "../src/core/log-parser.ts";

// ── parseLine ─────────────────────────────────────────────────────────────────

const COMBINED_LINE =
  '66.249.66.1 - - [10/Oct/2025:13:55:36 +0000] "GET /index.html HTTP/1.1" 200 2326 "-" "Mozilla/5.0 (compatible; Googlebot/2.1)"';

describe("parseLine", () => {
  it("parses a standard Combined Log Format line", () => {
    const entry = parseLine(COMBINED_LINE);
    assert.ok(entry !== null);
    assert.equal(entry.ip, "66.249.66.1");
    assert.equal(entry.method, "GET");
    assert.equal(entry.path, "/index.html");
    assert.equal(entry.status, 200);
    assert.equal(entry.bytes, 2326);
    assert.equal(entry.referer, "");
    assert.ok(entry.userAgent.includes("Googlebot"));
  });

  it("parses referer when present", () => {
    const line =
      '1.2.3.4 - - [10/Oct/2025:14:00:00 +0000] "GET /page HTTP/1.1" 200 512 "https://google.com" "SomeBot/1.0"';
    const entry = parseLine(line);
    assert.ok(entry !== null);
    assert.equal(entry.referer, "https://google.com");
  });

  it("maps bytes field '-' to 0", () => {
    const line =
      '1.2.3.4 - - [10/Oct/2025:14:00:00 +0000] "GET /page HTTP/1.1" 304 - "-" "SomeBot/1.0"';
    const entry = parseLine(line);
    assert.ok(entry !== null);
    assert.equal(entry.bytes, 0);
  });

  it("returns null for blank line", () => {
    assert.equal(parseLine(""), null);
    assert.equal(parseLine("   "), null);
  });

  it("returns null for comment line", () => {
    assert.equal(parseLine("# This is a comment"), null);
  });

  it("returns null for unrecognisable content", () => {
    assert.equal(parseLine("not a log line at all"), null);
  });

  it("sets raw to the trimmed input", () => {
    const entry = parseLine(COMBINED_LINE);
    assert.ok(entry !== null);
    assert.equal(entry.raw, COMBINED_LINE.trim());
  });

  it("parses POST method correctly", () => {
    const line =
      '10.0.0.1 - - [01/Jan/2025:00:00:00 +0000] "POST /api/submit HTTP/2.0" 201 100 "-" "curl/7.88"';
    const entry = parseLine(line);
    assert.ok(entry !== null);
    assert.equal(entry.method, "POST");
    assert.equal(entry.path, "/api/submit");
    assert.equal(entry.status, 201);
  });
});

// ── parseAccessLog ────────────────────────────────────────────────────────────

describe("parseAccessLog", () => {
  it("parses multiple valid lines", () => {
    const text = [
      '1.1.1.1 - - [10/Oct/2025:10:00:00 +0000] "GET / HTTP/1.1" 200 1000 "-" "BotA/1.0"',
      '2.2.2.2 - - [10/Oct/2025:10:01:00 +0000] "GET /about HTTP/1.1" 200 800 "-" "BotB/2.0"',
    ].join("\n");
    const { entries, skipped } = parseAccessLog(text);
    assert.equal(entries.length, 2);
    assert.equal(skipped, 0);
  });

  it("counts unparseable lines as skipped", () => {
    const text = [
      '1.1.1.1 - - [10/Oct/2025:10:00:00 +0000] "GET / HTTP/1.1" 200 1000 "-" "BotA/1.0"',
      "this is not a valid log line",
      "",
    ].join("\n");
    const { entries, skipped } = parseAccessLog(text);
    assert.equal(entries.length, 1);
    assert.equal(skipped, 1);
  });

  it("handles empty input", () => {
    const { entries, skipped } = parseAccessLog("");
    assert.equal(entries.length, 0);
    assert.equal(skipped, 0);
  });

  it("handles CRLF line endings", () => {
    const line = '1.1.1.1 - - [10/Oct/2025:10:00:00 +0000] "GET / HTTP/1.1" 200 1000 "-" "Bot/1.0"';
    const { entries } = parseAccessLog(`${line}\r\n${line}`);
    assert.equal(entries.length, 2);
  });

  it("counts comment lines as skipped (non-empty but unparseable)", () => {
    const text = [
      "# Software: nginx",
      '1.1.1.1 - - [10/Oct/2025:10:00:00 +0000] "GET / HTTP/1.1" 200 100 "-" "Bot/1.0"',
    ].join("\n");
    const { entries, skipped } = parseAccessLog(text);
    assert.equal(entries.length, 1);
    assert.equal(skipped, 1);
  });
});

// ── clfToIso ──────────────────────────────────────────────────────────────────

describe("clfToIso", () => {
  it("converts a CLF timestamp to ISO 8601", () => {
    const iso = clfToIso("10/Oct/2025:13:55:36 +0000");
    assert.equal(iso, "2025-10-10T13:55:36+00:00");
  });

  it("preserves non-UTC timezone offset", () => {
    const iso = clfToIso("01/Jan/2025:00:00:00 +0530");
    assert.equal(iso, "2025-01-01T00:00:00+05:30");
  });

  it("handles all twelve months", () => {
    const months = [
      ["Jan", "01"], ["Feb", "02"], ["Mar", "03"], ["Apr", "04"],
      ["May", "05"], ["Jun", "06"], ["Jul", "07"], ["Aug", "08"],
      ["Sep", "09"], ["Oct", "10"], ["Nov", "11"], ["Dec", "12"],
    ];
    for (const [abbr, num] of months) {
      const iso = clfToIso(`15/${abbr}/2025:12:00:00 +0000`);
      assert.ok(iso.includes(`-${num}-`), `Month ${abbr} should map to ${num}`);
    }
  });

  it("returns input unchanged for unparseable timestamps", () => {
    const raw = "not-a-timestamp";
    assert.equal(clfToIso(raw), raw);
  });
});
