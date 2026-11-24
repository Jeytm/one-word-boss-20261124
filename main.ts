// One Word for the Boss — entry: a single word describing the boss.
// The boss hovers over every tiny detail and trusts no one to do it right.
// Writes exactly one word to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const word = "Micromanager";

// Runtime guard: the entry must be exactly one word (1-30 chars,
// letters only, no spaces, hyphens or punctuation) or the run fails
// loudly before writing anything.
if (!/^\p{L}{1,30}$/u.test(word)) {
  throw new Error(`Invalid entry: ${JSON.stringify(word)} — must be exactly one word`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(word);
