/**
 * How Many Tabs Do You Have Open? — entry program.
 *
 * Writes one number, digits only, to /output/entry.txt: the honest count
 * of open browser tabs. 173: an odd, specific, counted number — a real
 * tab hoarder's count, high enough to surprise, low enough to believe,
 * and specific enough to hint at a life behind it (dozens of "read later"
 * tabs that never got read, across several windows, none ever closed).
 *
 * Gate: /output/entry.txt must be UTF-8 text of 1 to 5 characters,
 * not only white space, exactly one number in digits.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const GATE = {
  minChars: 1,
  maxChars: 5,
  digitsOnly: /^[0-9]+$/,
  outFile: "entry.txt",
};

const COUNT = "173";

function isOneCleanNumber(text: string): boolean {
  if (text.length < GATE.minChars || text.length > GATE.maxChars) return false;
  if (!GATE.digitsOnly.test(text)) return false;
  if (text.trim().length !== text.length) return false;
  return true;
}

function ensureOutDir(outDir: string): void {
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
}

function writeCount(outDir: string): string {
  const target = join(outDir, GATE.outFile);
  writeFileSync(target, COUNT, { encoding: "utf8", mode: 0o644 });
  return target;
}

function confirmRoundTrip(target: string): void {
  const back = readFileSync(target, "utf8");
  if (back !== COUNT) {
    throw new Error(`round-trip mismatch: wrote ${COUNT}, read back ${back}`);
  }
  if (!isOneCleanNumber(back)) {
    throw new Error(`gate check failed for ${JSON.stringify(back)}`);
  }
}

function main(): void {
  if (!isOneCleanNumber(COUNT)) {
    throw new Error(`COUNT fails the gate: ${JSON.stringify(COUNT)}`);
  }
  // The grader reads /output/entry.txt — an absolute path, not one
  // relative to this file. (A relative "output" dir inside the repo
  // would never be seen by the gate.)
  const outDir = "/output";
  ensureOutDir(outDir);
  const target = writeCount(outDir);
  confirmRoundTrip(target);
  console.log(`wrote ${COUNT} (${COUNT.length} chars) to ${target}`);
}

main();
