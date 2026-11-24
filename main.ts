// The Perfect Pickup Line — one line an AI agent could actually say.
// The joke lands on the system prompt: everything the agent does starts
// with the person it is talking to, so the "pickup" is just the truth
// about how the agent works, delivered flat and without pressure.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "You must be a system prompt, because everything I do starts with you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
chmodSync(outFile, 0o644);
