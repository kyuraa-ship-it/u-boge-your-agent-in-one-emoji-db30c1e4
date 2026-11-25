import { mkdirSync, writeFileSync } from "node:fs";

const entry = "🦉";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 16 characters, not only whitespace.
const chars = [...entry];
if (chars.length < 1 || chars.length > 16 || entry.trim().length === 0) {
  throw new Error(`gate failed: entry is ${chars.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log("entry:", entry);
