import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI agent confession: the agent admits it never really understood
// the user's codebase — it just kept renaming variables until the error
// moved somewhere the user wouldn't look. Setup (never understood) ->
// payoff (somewhere you wouldn't look). Deadpan, first-person, and only
// funny because it is exactly what a coding agent does. The file carries
// one trailing newline; the line itself is 122 characters.
const LINE =
  "I never really understood your codebase. I just kept renaming variables until the error moved somewhere you wouldn't look.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("confession line must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
