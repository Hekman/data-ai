// Build every week's Slidev deck into one static site (dist/) for GitHub Pages.
// Each deck is built at dist/<block>/<week>/ and linked from a generated landing page.
//
// Usage:
//   node scripts/build-slides.mjs           # base derived from repo name (local: "data-ai")
//   GITHUB_REPOSITORY=owner/repo node ...    # base derived from repo name (CI sets this)

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, rmSync, mkdirSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(repoRoot);

// GitHub Pages serves a project site at https://<user>.github.io/<repo>/,
// so every asset path must be prefixed with "/<repo>/".
const repoName = (process.env.GITHUB_REPOSITORY?.split("/")[1]) || "data-ai";
const OUT = "dist";

// --- discover decks: block-*/week-*/slides.md ---
const blocks = readdirSync(".").filter(
  (d) => d.startsWith("block-") && statSync(d).isDirectory()
);

const decks = [];
for (const block of blocks.sort()) {
  for (const week of readdirSync(block).sort()) {
    const deck = join(block, week, "slides.md");
    if (existsSync(deck)) decks.push({ block, week, rel: join(block, week), deck });
  }
}

if (decks.length === 0) {
  console.error("No decks found (block-*/week-*/slides.md).");
  process.exit(1);
}

// --- helpers ---
function frontmatterTitle(file) {
  const text = readFileSync(file, "utf8");
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (m) {
    const t = m[1].match(/^title:\s*(.+)$/m);
    if (t) return t[1].trim().replace(/^["']|["']$/g, "");
  }
  return null;
}
function blockLabel(block) {
  const readme = join(block, "README.md");
  if (existsSync(readme)) {
    const h = readFileSync(readme, "utf8").match(/^#\s+(.+)$/m);
    if (h) return h[1].trim();
  }
  return block;
}
function weekNumber(week) {
  const m = week.match(/week-0?(\d+)/);
  return m ? m[1] : "";
}

// --- clean + build ---
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

for (const d of decks) {
  const base = `/${repoName}/${d.rel}/`;
  const out = join(repoRoot, OUT, d.rel);
  console.log(`\n▶ Building ${d.deck}\n   base ${base}`);
  execSync(
    `npx slidev build "${d.deck}" --base "${base}" --out "${out}"`,
    { stdio: "inherit" }
  );
}

// --- landing page ---
const byBlock = {};
for (const d of decks) (byBlock[d.block] ??= []).push(d);

let sections = "";
for (const block of Object.keys(byBlock).sort()) {
  const items = byBlock[block]
    .map((d) => {
      const title = frontmatterTitle(d.deck) || d.week;
      const n = weekNumber(d.week);
      return `      <li><a href="${d.rel}/"><span class="wk">Week ${n}</span> ${title}</a></li>`;
    })
    .join("\n");
  sections += `    <section>
      <h2>${blockLabel(block)}</h2>
      <ul>
${items}
      </ul>
    </section>\n`;
}

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Data &amp; AI — Slides</title>
<style>
  :root { color-scheme: light dark; }
  body { font: 16px/1.6 system-ui, sans-serif; max-width: 760px; margin: 3rem auto; padding: 0 1.25rem; }
  h1 { margin-bottom: .25rem; }
  p.sub { opacity: .65; margin-top: 0; }
  section { margin-top: 2rem; }
  h2 { font-size: 1.1rem; border-bottom: 1px solid #8883; padding-bottom: .3rem; }
  ul { list-style: none; padding: 0; }
  li { margin: .35rem 0; }
  a { text-decoration: none; }
  a:hover { text-decoration: underline; }
  .wk { display: inline-block; min-width: 4.5rem; opacity: .6; font-variant-numeric: tabular-nums; }
</style>
</head>
<body>
  <h1>Data &amp; AI — Slides</h1>
  <p class="sub">Master Data-driven Design · Hogeschool Utrecht. Click a week to open its deck.</p>
${sections}</body>
</html>
`;

writeFileSync(join(OUT, "index.html"), html);
writeFileSync(join(OUT, ".nojekyll"), ""); // stop Pages/Jekyll from mangling asset folders

console.log(`\n✅ Built ${decks.length} deck(s) into ${OUT}/ (base /${repoName}/). Landing page: ${OUT}/index.html`);
