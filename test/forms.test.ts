import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import type { SupabaseClient } from "@supabase/supabase-js";
import { __setClientForTest } from "../src/lib/supabase.ts";
import {
  formsListSubmissions,
  formsGetSubmission,
  formsSubmit,
  formsExportCsv,
} from "../src/tools/forms.ts";

// ── mock query builder ────────────────────────────────────────────────────────

let _data: unknown = [];
let _error: { message: string } | null = null;
let _throwOnFrom = false;

function makeQueryBuilder() {
  const settle = () => Promise.resolve({ data: _data, error: _error });
  const b: Record<string, unknown> = {
    select: () => b,
    order: () => b,
    range: () => b,
    gte: () => b,
    lte: () => b,
    eq: () => b,
    insert: () => b,
    single: () => settle(),
  };
  // The real Supabase query builder is awaitable, so the mock must be too.
  // Attach `then` via assignment (not as an object-literal key) so the builder
  // stays thenable without tripping the no-thenable lint rule.
  (b as { then: PromiseLike<unknown>["then"] }).then = (
    resolve: (v: unknown) => unknown,
    reject?: (e: unknown) => unknown,
  ) => settle().then(resolve, reject);
  return b;
}

const mockClient = {
  from(_table: string) {
    if (_throwOnFrom) throw new Error("Connection refused");
    return makeQueryBuilder();
  },
} as unknown as SupabaseClient;

// inject once — all tests share the same mock client instance
__setClientForTest(mockClient);

// ── helpers ───────────────────────────────────────────────────────────────────

function text(result: { content: Array<{ text: string }> }): string {
  return result.content[0].text;
}

beforeEach(() => {
  _data = [];
  _error = null;
  _throwOnFrom = false;
});

// ── formsListSubmissions ──────────────────────────────────────────────────────

describe("formsListSubmissions", () => {
  it("returns submissions list", async () => {
    _data = [{ id: "1", name: "Alice", email: "a@b.com", company: "Acme", message: "hello", created_at: "2024-01-01" }];
    const result = await formsListSubmissions.handle({ limit: 10, offset: 0 });
    assert.equal(result.isError, undefined);
    const parsed = JSON.parse(text(result));
    assert.equal(parsed.count, 1);
    assert.equal(parsed.offset, 0);
    assert.equal(parsed.submissions[0].name, "Alice");
  });

  it("applies date_from and date_to filters without error", async () => {
    _data = [];
    const result = await formsListSubmissions.handle({
      limit: 50,
      offset: 5,
      date_from: "2024-01-01",
      date_to: "2024-12-31",
    });
    assert.equal(result.isError, undefined);
    const parsed = JSON.parse(text(result));
    assert.equal(parsed.offset, 5);
  });

  it("returns error message on supabase query error", async () => {
    _data = null;
    _error = { message: "DB connection lost" };
    const result = await formsListSubmissions.handle({ limit: 10, offset: 0 });
    assert.equal(result.isError, true);
    assert.ok(text(result).includes("DB connection lost"));
  });

  it("catches thrown exceptions", async () => {
    _throwOnFrom = true;
    const result = await formsListSubmissions.handle({ limit: 10, offset: 0 });
    assert.equal(result.isError, true);
    assert.ok(text(result).includes("Connection refused"));
  });
});

// ── formsGetSubmission ────────────────────────────────────────────────────────

describe("formsGetSubmission", () => {
  it("returns a single submission by id", async () => {
    _data = { id: "abc", name: "Bob", email: "b@c.com", message: "hi" };
    const result = await formsGetSubmission.handle({ id: "abc" });
    assert.equal(result.isError, undefined);
    const parsed = JSON.parse(text(result));
    assert.equal(parsed.id, "abc");
    assert.equal(parsed.name, "Bob");
  });

  it("returns error when submission is not found", async () => {
    _data = null;
    _error = { message: "No rows returned" };
    const result = await formsGetSubmission.handle({ id: "nonexistent" });
    assert.equal(result.isError, true);
    assert.ok(text(result).includes("No rows returned"));
  });

  it("catches thrown exceptions", async () => {
    _throwOnFrom = true;
    const result = await formsGetSubmission.handle({ id: "any" });
    assert.equal(result.isError, true);
    assert.ok(text(result).includes("Connection refused"));
  });
});

// ── formsSubmit ───────────────────────────────────────────────────────────────

describe("formsSubmit", () => {
  it("records a submission and returns confirmation", async () => {
    _data = { id: "xyz", email: "c@d.com", created_at: "2024-06-01T00:00:00Z" };
    const result = await formsSubmit.handle({
      name: "Charlie",
      email: "c@d.com",
      message: "Hello, this is a test message.",
    });
    assert.equal(result.isError, undefined);
    const parsed = JSON.parse(text(result));
    assert.equal(parsed.message, "Submission recorded.");
    assert.equal(parsed.submission.id, "xyz");
  });

  it("accepts all optional fields", async () => {
    _data = { id: "w", email: "d@e.com", created_at: "2024-07-01T00:00:00Z" };
    const result = await formsSubmit.handle({
      name: "Diana",
      email: "d@e.com",
      company: "Corp",
      phone: "555-1234",
      message: "Message with optional fields.",
      source: "landing-page",
    });
    assert.equal(result.isError, undefined);
  });

  it("returns error on insert failure", async () => {
    _data = null;
    _error = { message: "Unique constraint violation" };
    const result = await formsSubmit.handle({
      name: "Eve",
      email: "e@f.com",
      message: "This should fail on insert.",
    });
    assert.equal(result.isError, true);
    assert.ok(text(result).includes("Unique constraint violation"));
  });

  it("catches thrown exceptions", async () => {
    _throwOnFrom = true;
    const result = await formsSubmit.handle({
      name: "Frank",
      email: "f@g.com",
      message: "This should throw.",
    });
    assert.equal(result.isError, true);
    assert.ok(text(result).includes("Connection refused"));
  });
});

// ── formsExportCsv ────────────────────────────────────────────────────────────

describe("formsExportCsv", () => {
  it("exports rows as CSV with correct header row", async () => {
    _data = [
      {
        id: "1",
        name: "Alice",
        email: "a@b.com",
        company: "Acme",
        phone: "123",
        message: "hi there",
        source: "web",
        created_at: "2024-01-01",
      },
    ];
    const result = await formsExportCsv.handle({});
    assert.equal(result.isError, undefined);
    const csv = text(result);
    assert.ok(csv.startsWith("id,name,email,company,phone,message,source,created_at"));
    assert.ok(csv.includes("Alice"));
    assert.ok(csv.includes("a@b.com"));
  });

  it("escapes null fields as empty quoted strings", async () => {
    _data = [
      {
        id: "2",
        name: "Bob",
        email: "b@c.com",
        company: null,
        phone: null,
        message: "hello",
        source: null,
        created_at: "2024-02-01",
      },
    ];
    const result = await formsExportCsv.handle({});
    assert.equal(result.isError, undefined);
    assert.ok(text(result).includes('""'));
  });

  it("escapes object values using JSON.stringify", async () => {
    _data = [
      {
        id: "3",
        name: "Carol",
        email: "c@d.com",
        company: { name: "NestedCo", tier: 2 },
        phone: null,
        message: "test",
        source: null,
        created_at: "2024-03-01",
      },
    ];
    const result = await formsExportCsv.handle({});
    assert.equal(result.isError, undefined);
    assert.ok(text(result).includes("NestedCo"));
  });

  it("doubles up double quotes inside field values", async () => {
    _data = [
      {
        id: "4",
        name: 'Dave "The Man"',
        email: "d@e.com",
        company: null,
        phone: null,
        message: 'He said "hello"',
        source: null,
        created_at: "2024-04-01",
      },
    ];
    const result = await formsExportCsv.handle({});
    assert.equal(result.isError, undefined);
    const csv = text(result);
    assert.ok(csv.includes('""The Man""'));
    assert.ok(csv.includes('""hello""'));
  });

  it("converts numeric values via String()", async () => {
    _data = [
      {
        id: 5,
        name: "Eve",
        email: "e@f.com",
        company: null,
        phone: null,
        message: "numeric id row",
        source: null,
        created_at: "2024-05-01",
      },
    ];
    const result = await formsExportCsv.handle({});
    assert.equal(result.isError, undefined);
    assert.ok(text(result).includes('"5"'));
  });

  it("returns message when result set is empty", async () => {
    _data = [];
    const result = await formsExportCsv.handle({});
    assert.equal(result.isError, undefined);
    assert.equal(text(result), "No submissions found for the given date range.");
  });

  it("applies date_from and date_to filters without error", async () => {
    _data = [];
    const result = await formsExportCsv.handle({
      date_from: "2024-01-01",
      date_to: "2024-06-30",
    });
    assert.equal(result.isError, undefined);
  });

  it("returns error on supabase query error", async () => {
    _data = null;
    _error = { message: "Export query failed" };
    const result = await formsExportCsv.handle({});
    assert.equal(result.isError, true);
    assert.ok(text(result).includes("Export query failed"));
  });

  it("catches thrown exceptions", async () => {
    _throwOnFrom = true;
    const result = await formsExportCsv.handle({});
    assert.equal(result.isError, true);
    assert.ok(text(result).includes("Connection refused"));
  });
});
