---
theme: default
title: Data Science & Dataframes as Design Material
info: Block A · Week 1 · Master Data-driven Design
class: text-center
highlighter: shiki
transition: slide-left
mdc: true
colorSchema: light
routerMode: hash
---

# Data Science & Dataframes
## as Design Material

<div class="text-sm opacity-60 tracking-widest mt-4">
BLOCK A · WEEK 1 · MASTER DATA-DRIVEN DESIGN
</div>

<div class="abs-bl m-6 text-sm opacity-70">
<span class="italic">This week: what is data science, and how do I shape a table to answer a question?</span>
</div>

<!--
Presenter note: this is the fast week. Front-load the toolkit so every later week builds on it.
-->

---
layout: quote
---

## The block question

> What does this data actually let me know,<br>and what stories can I tell?

This block treats **data as a designer's material** — something you can source, question, shape, and compose with. Not just consume.

---
layout: default
---

## Why this matters for designers

Most people consume dashboards as *finished objects*.

Your job starts one step earlier — at the **raw material**.

<v-clicks>

- Every chosen **column** is an editorial choice
- Every **filter** decides which cases count
- Every **aggregation** shapes what someone can know

</v-clicks>

<div v-click class="mt-6 px-4 py-2 border-l-4 border-red-500 bg-red-50 text-sm">
Aggregation is where the interesting decisions hide: <b>what you choose to group by determines the story the data can tell.</b>
</div>

---
layout: center
class: text-center
---

## The data science workflow

<div class="text-2xl font-mono mt-6 tracking-wide">
source → clean → explore → analyse → communicate
</div>

<div class="mt-6 opacity-70">
Iterative, not linear. Design judgment lives in the <b>choices</b> at each step — not in the code.
</div>

---
layout: section
---

# Data is *made*, not found

---

## Datafication

Turning life into data is never a neutral recording. It's a choice about *what counts* as worth measuring, in what units, by whom.

Before a single row exists, the world has already been **translated** into something countable — and some things resist translation, or get left out.

<div class="mt-8 text-sm opacity-60">
Reading — Beaulieu &amp; Leonelli (2021), "Data in Society"
</div>

---

## Split–apply–combine

`groupby` splits the table into groups, applies a function, and combines the result.

```python {all|2|all}
# average rent per neighbourhood
df.groupby("neighbourhood")["rent"].mean()
```

<div v-click class="mt-4">
Choosing the <b>grouping key</b> is the central design move.
</div>

---
layout: center
class: text-center
---

## Every summary hides something

Aggregation throws information away — that's the point, *and* the risk.

<div class="text-2xl italic mt-8 text-red-600">
What did this summary make invisible?
</div>

<div class="mt-4 opacity-70">An average can quietly mask a bimodal split.</div>

---

## By the end of this week you can…

<v-clicks>

- Name the steps of the workflow and explain each one's *purpose*
- Open, run, and edit a notebook; load data into a **DataFrame**
- Articulate what a dataset *does and does not* contain
- Select, filter, sort, and slice to isolate what a question needs
- Use `groupby` + aggregation at a chosen granularity
- Spot an aggregation that **misleads** — and say why

</v-clicks>

<div class="mt-6 text-sm opacity-60">Toward PLO 5 — Advanced Beginner</div>

---
layout: two-cols
layoutClass: gap-8
---

## This week

**Before class (~4–5h)**
DataCamp: *Intro to Data Science in Python* + *Data Manipulation with pandas* (Ch. 1–2). Heaviest prep week of the block.

**In class**
`W1_data_science_and_dataframes.ipynb` — environment check, first DataFrame, three escalating questions on a real municipal dataset, then *find an aggregation that misleads*.

::right::

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
layout: center
class: text-center
---

# Next: Cleaning & Shaping Data

<div class="mt-4 opacity-70 text-sm">
Start a running shortlist of datasets and audiences — you commit by Week 3.
</div>
