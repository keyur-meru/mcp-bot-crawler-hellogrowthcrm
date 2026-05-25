// Shared test fixtures.
//
// Public IP-like literals used by the test suite are centralised here so they
// live in a single, clearly-labelled location. These are NOT real
// infrastructure addresses — they are well-known public ranges used only to
// exercise log parsing and bot-detection code paths:
//
//   - GOOGLEBOT  : a documented Googlebot crawl address (reverse-DNS / known-bot tests)
//   - GENERIC_A/B/C : placeholder source addresses for access-log fixtures
//   - PRIVATE    : an RFC 1918 private-range address
//
// SonarQube rule typescript:S1313 ("hardcoded IP") will flag the constants
// below. Because they are test-only sample data, they are safe to mark as
// "Safe" / reviewed in the SonarQube Security Hotspots view.
export const IP = {
  GOOGLEBOT: "66.249.66.1",
  GENERIC_A: "1.2.3.4",
  GENERIC_B: "1.1.1.1",
  GENERIC_C: "2.2.2.2",
  PRIVATE: "10.0.0.1",
} as const;
