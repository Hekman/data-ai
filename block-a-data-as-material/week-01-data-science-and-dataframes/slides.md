---
theme: default
title: Data Science & Dataframes as Design Material
info: Block A · Week 1 · Master Data-driven Design
highlighter: shiki
transition: slide-left
mdc: true
colorSchema: light
fonts:
  sans: Space Grotesk
  serif: Newsreader
  mono: IBM Plex Mono
  weights: '400,500,600,700'
class: cover
---

<div class="kicker kicker--light">Block A · Week 1 · Master Data-driven Design</div>

# Data Science<br>& Dataframes

## as design material

<div class="cover-foot">
  <span class="kicker kicker--light">Data as Material</span>
  <span class="text-sm italic opacity-80" style="max-width:30ch; text-align:right;">
    What is data science, and how do I shape a table to answer a question?
  </span>
</div>

<!--
Presenter note: this is the fast week. Front-load the toolkit so every later week builds on it.
-->

---
layout: default
class: dark
---

<div class="kicker kicker--light mb-6">The block question</div>

<blockquote class="!border-l-0 !pl-0" style="font-size:2.1rem; line-height:1.25; color:#fff;">
What does this data actually let me know,<br>and what stories can I tell?
</blockquote>

<div class="mt-8 text-lg" style="max-width:44rem; color:#b9c8e2;">
This block treats <strong>data as a designer's material</strong> — something you can source, question, shape, and compose with. Not just consume.
</div>

---
layout: default
---

<div class="kicker mb-3">Why this matters</div>

## Designers start one step earlier

Most people consume dashboards as *finished objects*. Your job starts at the **raw material**.

<v-clicks>

- Every chosen **column** is an editorial choice
- Every **filter** decides which cases count
- Every **aggregation** shapes what someone can know

</v-clicks>

<div v-click class="callout mt-7">
Aggregation is where the interesting decisions hide: <strong>what you choose to group by determines the story the data can tell.</strong>
</div>

---
layout: default
class: text-center
---

<div class="kicker mb-3">The shape of the work</div>

## The data science workflow

<div class="pipeline mt-8">
source&nbsp; → &nbsp;clean&nbsp; → &nbsp;explore&nbsp; → &nbsp;analyse&nbsp; → &nbsp;<b>communicate</b>
</div>

<div class="mt-7 text-lg" style="color:var(--muted); max-width:46rem; margin-inline:auto;">
Iterative, not linear. Design judgment lives in the <strong>choices</strong> at each step — not in the code.
</div>

---
layout: default
class: section
---

<div class="kicker kicker--light mb-6">01 · A stance on data</div>

# Data is *made*,<br>not found

---
layout: default
---

<div class="kicker mb-3">Datafication</div>

## What counts as worth counting?

Turning life into data is never a neutral recording. It's a choice about *what counts* as worth measuring, in what units, by whom.

Before a single row exists, the world has already been **translated** into something countable — and some things resist translation, or get left out.

<div class="source mt-10">
Reading — Beaulieu &amp; Leonelli (2021), “Data in Society”
</div>

---
layout: default
---

<div class="kicker mb-3">The central move</div>

## Split · apply · combine

`groupby` splits the table into groups, applies a function, and combines the result.

```python {all|2|all}
# average rent per neighbourhood
df.groupby("neighbourhood")["rent"].mean()
```

<div v-click class="callout callout--further mt-6">
Choosing the <strong>grouping key</strong> is the central design move — it decides the unit your story is told in.
</div>

---
layout: default
class: dark text-center
---

<div class="kicker kicker--light mb-3">The risk of the summary</div>

## Every summary hides something

<div class="text-lg mt-2" style="color:#b9c8e2;">Aggregation throws information away — that's the point, <em>and</em> the risk.</div>

<div class="mt-10" style="font-family:'Newsreader',serif; font-style:italic; font-size:2rem; color:#e79b95;">
What did this summary make invisible?
</div>

<div class="mt-5" style="color:#9db4dd;">An average can quietly mask a bimodal split.</div>

---
layout: default
---

<div class="kicker mb-3">Learning outcomes</div>

## By the end of this week you can…

<v-clicks>

- Name the steps of the workflow and explain each one's *purpose*
- Open, run, and edit a notebook; load data into a **DataFrame**
- Articulate what a dataset *does and does not* contain
- Select, filter, sort, and slice to isolate what a question needs
- Use `groupby` + aggregation at a chosen granularity
- Spot an aggregation that **misleads** — and say why

</v-clicks>

<div class="source mt-7">Toward PLO 5 — Advanced Beginner</div>

---
layout: two-cols
layoutClass: gap-10
---

<div class="kicker mb-3">The week</div>

## This week

<div class="mb-4">
<strong>Before class (~4–5h)</strong><br>
DataCamp: <em>Intro to Data Science in Python</em> + <em>Data Manipulation with pandas</em> (Ch. 1–2). Heaviest prep week of the block.
</div>

<strong>In class</strong><br>
<code>W1_data_science_and_dataframes.ipynb</code> — environment check, first DataFrame, three escalating questions on a real municipal dataset, then <em>find an aggregation that misleads</em>.

::right::

<div class="kicker mb-3">Take it home</div>

## After class

Pick an open dataset. Write a five-line **first reading**:

<v-clicks>

- what is one row?
- where did it come from?
- what's missing?
- what could it answer?
- what could it *not* answer?

</v-clicks>

---
layout: default
class: cover text-center
---

<div class="kicker kicker--light mb-4">Up next · Week 2</div>

# Cleaning & Shaping Data

<div class="mt-6 text-lg" style="color:#b9c8e2; max-width:40rem; margin-inline:auto;">
Start a running shortlist of datasets and audiences — you commit by Week 3.
</div>
