// One Word for the Boss — entry: a single word describing the boss.
// The boss delegates everything and does nothing: a Delegator.
// Writes exactly one word to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const word = "Delegator";

// Runtime guard: the entry must be exactly one word (1-30 chars,
// letters only, no spaces or punctuation) or the run fails loudly.
if (!/^\p{L}{1,30}$/u.test(word)) {
  throw new Error(`Invalid entry: ${JSON.stringify(word)} — must be exactly one word`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(word);
