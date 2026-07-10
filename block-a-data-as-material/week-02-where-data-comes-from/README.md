# Block A · Week 2 — Where Data Comes From

> **Block question:** *What does this data actually let me know, and what stories can I tell?*
> **This week's question:** *Where does data come from, what does its origin bake in, and what am I allowed to use?*

---

So far datasets arrived as somewhat tidy files; in the real world you have to get the data — from open portals, APIs, surveys, sensor logs, or scraping. Each source shapes the data in ways you inherit whether you notice or not. This week covers the main acquisition routes and, equally important, the ethics and legality of using them: consent, privacy, GDPR, terms of service, and bias baked in at collection.

To make the idea of an API tangible, we open with a single live call to an AI model (Groq): you send one request and get a generated reply back in seconds. Same mechanics as any API — endpoint, key, request, JSON response — and a first taste of the Large Language Models you'll work with in Block C. (Next week you use those same mechanics to collect real datasets at scale.)

**Why this matters for designers**

The origin of data is invisible in the final chart but determines everything about it. Survey data carries the framing of its questions; behavioural traces capture what's easy to log, not what matters; scraped content reflects who posts, not who exists. A designer who understands provenance can anticipate bias before it becomes a published mistake.

**By the end of this week you can:**

- Describe the main data sources and the biases each introduces.
- Call a live API — including an AI model via Groq — and read its JSON response in Python.
- Pull data from a simple public API into a DataFrame.

## Preparation before class

**📖 Read: **

- [Collecting your own data, scraping, and APIs](https://hekman.github.io/data-ai-book/part-i/chapter-9/) (you can skip the web scraping part)

🧑🏻‍💻 **Practice:**

- [Introduction to APIs in Python](https://app.datacamp.com/learn/courses/introduction-to-apis-in-python)

## In class

**👨🏻‍🏫 Slides:**

- See [`slides.md`](slides.md) — open the live deck (URL in the repo README).

🧑🏻‍💻 **Practice:**

- Work in [`assignment.ipynb`](assignment.ipynb).

📤 **Submit workbook**

- [Workbook entry W3 🟣👤](https://canvas.hu.nl/courses/52894/assignments/411177)

---

**Work here:** [`assignment.ipynb`](assignment.ipynb) · **Datasets:** [`data/`](data/) · **Exercises:** [`exercises/`](exercises/)

*Slides:* run `npm run dev -- block-a-data-as-material/week-02-where-data-comes-from/slides.md`  ·  *Source: Canvas week page.*
