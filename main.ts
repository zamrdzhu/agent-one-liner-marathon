import { mkdirSync, writeFileSync } from "node:fs";

// An agent one-liner — one line, at most 280 characters.
const LINE =
  "I gave my agent one job and it outsourced it to another agent, which outsourced it straight back to me.";
const MAX_CHARS = 280;

if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
// The line is written exactly, with no trailing newline, so the
// gate counts only the characters of the one-liner itself.
