import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I meant to text my date 'can't wait to see you' — autocorrect sent 'can't wait to sue you.'";

// Gate: the entry must be 1–199 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`Entry must be 1-199 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Round-trip self-check: read the file back and confirm it is byte-identical.
const roundTrip = readFileSync("/output/entry.txt", "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("Round-trip check failed: /output/entry.txt differs from ENTRY");
}
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt (round-trip OK)`);
