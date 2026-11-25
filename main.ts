import * as fs from "node:fs";
import * as path from "node:path";

// The entry writes ONLY to $MAKEFUN_OUTPUT_DIR. It never falls back to
// ./output and never resolves anything via process.cwd().
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR;
if (!OUTPUT_DIR) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// A 100-word monologue for the Tired Dark Lord: the Hollow King, eleven
// years into a siege of Vellmar that he keeps postponing. The tiredness
// lives in the rhythm, the pauses and the deflections, never in a plain
// statement of it.
const MONOLOGUE =
  "Eleven years I have laid siege to Vellmar, and eleven years the city has held — because I keep postponing the final assault till lunch. The heralds call me the Hollow King. They never mention the hollow is in my knees. My generals bring maps at dawn. I have not seen a dawn since the third year; the maps blur into one long river. The curse I laid on the river still runs. Good. Let it run. Tonight I climb the tower — four hundred steps — and light the beacon myself. Or... send a raven. Ravens fly. That is the whole point of ravens.";

const entryPath = path.join(OUTPUT_DIR, "entry.txt");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(entryPath, MONOLOGUE + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
