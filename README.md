# Data & AI

Course materials for the **Data & AI track** of the Master Data-driven Design (Hogeschool Utrecht). Weekly assignments, datasets, and presentation slides live here. Pull this repo each week to get the latest material.

The track runs across three blocks:

| Block | Folder | Theme |
|-------|--------|-------|
| A | [`block-a-data-as-material/`](block-a-data-as-material/) | Data as Design Material — sourcing, shaping and reading data |
| B | [`block-b-reading-systems/`](block-b-reading-systems/) | Reading the Systems That Learn — ML literacy |
| C | [`block-c-building-with-ai/`](block-c-building-with-ai/) | Building With AI — LLMs, agents and paradigms |

## How each week is organised

Every taught week is a self-contained folder:

```
week-0X-topic/
├─ README.md          the weekly brief: question, goals, prep, in-class work, deliverable
├─ slides.md          the Slidev presentation for the week
├─ assignment.ipynb   starter notebook you work in
├─ data/              small datasets used that week
├─ exercises/         extra practice exercises
└─ assets/            images used in the slides
```

Start each week by reading the week's `README.md`, then open `assignment.ipynb`.

## Presentations (Slidev)

All slides are built with [Slidev](https://sli.dev) and **published online** — students just open a link, nothing to install or compile:

**https://hekman.github.io/data-ai/** ← landing page linking every week's deck

The site rebuilds automatically: every push that touches a `slides.md` triggers the
[Deploy slides](.github/workflows/deploy-slides.yml) GitHub Action, which builds all decks and publishes them to GitHub Pages.

### Editing a deck (authors only)

You only need `npm` if you are *writing* slides. There is one shared install at the repo root — nothing per week.

```bash
npm install                                            # one-time
npm run dev -- block-a-data-as-material/week-01-data-science-and-dataframes/slides.md
```

Opens the deck at http://localhost:3030 with live reload. Press `f` fullscreen, `o` overview, `p` presenter mode. Commit and push — Pages updates within a minute or two.

### Build the whole site locally (optional)

```bash
npm run build:site      # builds every deck into dist/ with a landing page (same as CI)
```

### One-time Pages setup

In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**. After the first successful run the site is live at the URL above.

## Datasets

Datasets are committed as plain small files (CSV, typically < 10–20 MB) inside each week's `data/` folder. Large or raw data is fetched via a script or linked from the brief rather than stored here (`data/**/raw/` and archives are gitignored).

## For instructors

Worked solutions are **never committed to this repo**. `.gitignore` excludes any `solutions/` folder and any `*.solution.ipynb` file, so you can keep answer keys next to each week locally without exposing them to students. Keep the canonical solution set in a separate private repo or branch.

## AI-use policy

This track is AI-aware. See the track overview for the full policy on how AI tools may be used in assignments and assessment.
