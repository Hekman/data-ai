# Block A · Week 1 — Data Science & Dataframes as Design Material

> **Block question:** *What does this data actually let me know, and what stories can I tell?*
> **This week's question:** *What is data science, and how do I shape a table to answer a question?*

## Overview

Welcome to the Data & AI track. This block is about treating **data as a designer's material** — something you can source, question, shape, and compose with, not just consume. This first week moves fast on purpose: a shared map of the data science workflow, a working notebook environment, and straight into the core material of the block — the **DataFrame** and the moves that shape it (select, filter, sort, group, aggregate).

The skill isn't memorising pandas syntax; it's learning to translate a question ("which neighbourhoods changed most?") into a sequence of table operations — and to read what a dataset does and does not contain before you trust it.

## Why this matters for designers

Most people consume dashboards and charts as finished objects. As a data-driven designer your job starts one step earlier: at the raw material. Every chosen column, every filter, every aggregation is a **design decision** that shapes what someone can know. Aggregation is where most of the interesting decisions hide: *what you choose to group by determines the story the data can tell.*

## Learning goals (toward PLO 5 — Advanced Beginner)

By the end of this week you can:

- Name the steps of the data science workflow (source → clean → explore → analyse → communicate) and explain the *purpose* of each.
- Open, run, and edit a Jupyter notebook, and load a dataset into a pandas DataFrame.
- Articulate what a dataset *does and does not* contain — its granularity, its provenance, and its silences.
- Select, filter, sort, and slice a DataFrame to isolate the rows and columns a question needs.
- Use `groupby` + aggregation to summarise data at a chosen granularity, and explain why that granularity fits the question.
- Recognise when an aggregation hides something important (e.g. an average that masks a bimodal split).

## Key concepts

**The data science workflow.** Sourcing, cleaning/shaping, exploring, analysing, communicating. Iterative, not linear. Design judgment lives in the *choices* at each step, not in the code.

**Data as material.** Paper resists certain folds; data resists certain questions. "Treating data as material" means developing a feel for what a given dataset will and won't let you do.

**Datafication.** Turning aspects of life into data is never a neutral recording — it is a choice about what counts as worth measuring, in what units, by whom. Before a single row exists, the world has already been *translated* into something countable, and some things resist translation (or get left out entirely).

**Notebooks.** Jupyter notebooks interleave code, output, and prose — a sketchbook for data. We use a hosted environment (see the track README) so nobody loses time to installation.

**Granularity & provenance.** *Granularity* = what one row represents. *Provenance* = where the data came from and how it was produced. Both determine what claims are honest.

**Split–apply–combine.** `groupby` splits the table into groups, applies a function (mean, count, sum), and combines the result. Choosing the grouping key is the central design move.

**Aggregation hides.** Every summary throws information away — that's the point, but also the risk. Always ask: *what did this summary make invisible?*

## Before class — DataCamp prep (~4–5h)

- [Introduction to Data Science in Python](https://www.datacamp.com/courses/introduction-to-data-science-in-python) — full course.
- [Data Manipulation with pandas](https://www.datacamp.com/courses/data-manipulation-with-pandas) — Chapters 1–2 (subsetting, aggregating).
- *(If new to Python:)* skim [Introduction to Python](https://www.datacamp.com/courses/intro-to-python-for-data-science) first.

This is the heaviest prep week of the block — it front-loads the toolkit so every later week can build on it.

## Critical reading (~20 min)

This track runs a thin but constant *critical data studies* thread alongside the technical work. The first reading sets the frame for everything else.

- Beaulieu, A., & Leonelli, S. (2021). "Data in Society." In *Data and Society: A Critical Introduction* (Ch. 1, pp. 1–20). SAGE.

Read it asking one question: *what had to happen to the world before any of my DataFrames could exist?* Bring one example of something in your own field that is routinely datafied, and one thing that is hard or impossible to datafy.

## In class

Notebook: **`assignment.ipynb`** — environment check, your first DataFrame and a "first reading" of an open dataset, then three escalating questions on a real municipal dataset, each requiring a different shape of the table. Last task: find an aggregation that *misleads* and explain why.

## After class / practice

Pick any open dataset that interests you (a starting point: [data.overheid.nl](https://data.overheid.nl)). Write a five-line "first reading": what is one row, where did it come from, what's missing, what question could it answer, and what could it *not* answer. Then write down three questions and, for each, the table operations you'd need.

**Datafication check (5 min):** add one line to your first reading — name one thing about this topic that *could never be captured* in this table, and why.

## Feeds the project

Your Block A project is a data-informed story for a real audience. Start a running shortlist of datasets and audiences that interest you — you'll commit to one by Week 3. The "aggregation that misleads" exercise is exactly the kind of honesty your final story will be judged on.
