import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import type { BotSummary } from "../utils/types.js";

export type ReportFormat = "json" | "markdown" | "csv";

interface ReportMeta {
  targetUrl?: string;
  source?: string;
}

interface JsonReport {
  generatedAt: string;
  targetUrl: string | null;
  source: string | null;
  totalBots: number;
  bots: BotSummary[];
}

export function renderReport(
  summaries: BotSummary[],
  format: ReportFormat,
  meta: ReportMeta = {},
): string {
  switch (format) {
    case "json":
      return renderJson(summaries, meta);
    case "csv":
      return renderCsv(summaries);
    case "markdown":
    default:
      return renderMarkdown(summaries, meta);
  }
}

export async function writeReport(
  body: string,
  format: ReportFormat,
  filename?: string,
): Promise<string> {
  const outputDir = path.resolve(process.env.REPORT_OUTPUT_DIR ?? "./reports");
  await mkdir(outputDir, { recursive: true });

  const targetFilename = filename?.trim() || defaultFilename(format);
  const destination = path.join(outputDir, targetFilename);

  await writeFile(destination, body, "utf8");
  return destination;
}

function renderJson(summaries: BotSummary[], meta: ReportMeta): string {
  const payload: JsonReport = {
    generatedAt: new Date().toISOString(),
    targetUrl: meta.targetUrl ?? null,
    source: meta.source ?? null,
    totalBots: summaries.length,
    bots: summaries,
  };

  return JSON.stringify(payload, null, 2);
}

function renderMarkdown(summaries: BotSummary[], meta: ReportMeta): string {
  const lines: string[] = [
    "# Bot Activity Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Target URL: ${meta.targetUrl ?? "n/a"}`,
    `Source: ${meta.source ?? "n/a"}`,
    `Bots found: ${summaries.length}`,
    "",
  ];

  if (summaries.length === 0) {
    lines.push("No bot activity matched the known signatures or heuristics.");
    return lines.join("\n");
  }

  lines.push(
    "| Bot | Category | Hits | Risk | Allow Status | Recommended Action | Notes |",
    "| --- | --- | ---: | ---: | --- | --- | --- |",
  );

  for (const summary of summaries) {
    lines.push(
      [
        summary.name,
        summary.category,
        String(summary.hits),
        String(summary.riskScore),
        summary.allowStatus,
        summary.recommendedAction,
        summary.notes.length > 0 ? summary.notes.join("; ") : "-",
      ]
        .map(escapeMarkdownCell)
        .map((value) => `| ${value} `)
        .join("") + "|",
    );
  }

  lines.push("", "## Details", "");

  for (const summary of summaries) {
    lines.push(
      `### ${summary.name}`,
      `- Operator: ${summary.operator}`,
      `- Category: ${summary.category}`,
      `- Hits: ${summary.hits}`,
      `- Unique IPs: ${summary.uniqueIps}`,
      `- Unique Paths: ${summary.uniquePaths}`,
      `- First Seen: ${summary.firstSeen || "n/a"}`,
      `- Last Seen: ${summary.lastSeen || "n/a"}`,
      `- Error Rate: ${summary.errorRate}`,
      `- Avg/Hour: ${summary.averagePerHour}`,
      `- Allow Status: ${summary.allowStatus}`,
      `- Risk Score: ${summary.riskScore}`,
      `- Recommended Action: ${summary.recommendedAction}`,
      `- Notes: ${summary.notes.length > 0 ? summary.notes.join("; ") : "None"}`,
      "",
    );
  }

  return lines.join("\n");
}

function renderCsv(summaries: BotSummary[]): string {
  const rows = [
    [
      "name",
      "category",
      "operator",
      "hits",
      "uniqueIps",
      "uniquePaths",
      "firstSeen",
      "lastSeen",
      "errorRate",
      "averagePerHour",
      "allowStatus",
      "riskScore",
      "recommendedAction",
      "notes",
    ],
    ...summaries.map((summary) => [
      summary.name,
      summary.category,
      summary.operator,
      String(summary.hits),
      String(summary.uniqueIps),
      String(summary.uniquePaths),
      summary.firstSeen,
      summary.lastSeen,
      String(summary.errorRate),
      String(summary.averagePerHour),
      summary.allowStatus,
      String(summary.riskScore),
      summary.recommendedAction,
      summary.notes.join("; "),
    ]),
  ];

  return rows.map((row) => row.map(escapeCsvCell).join(",")).join("\n");
}

function defaultFilename(format: ReportFormat): string {
  const stamp = new Date().toISOString().replaceAll(/[:.]/g, "-");
  return `bot-report-${stamp}.${extensionFor(format)}`;
}

function extensionFor(format: ReportFormat): string {
  switch (format) {
    case "json":
      return "json";
    case "csv":
      return "csv";
    case "markdown":
    default:
      return "md";
  }
}

function escapeCsvCell(value: string): string {
  const normalized = value.replaceAll(/\r?\n/g, " ");
  if (!/[",]/.test(normalized)) return normalized;
  return `"${normalized.replaceAll('"', '""')}"`;
}

function escapeMarkdownCell(value: string): string {
  return value.replaceAll(/\|/g, String.raw`\|`).replaceAll(/\r?\n/g, "<br>");
}
