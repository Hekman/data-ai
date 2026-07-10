# Block A · Week 7 — Scraping & APIs

> **Block question:** *What does this data actually let me know, and what stories can I tell?*
> **This week's question:** *What do I do when the data I need has no API — how do I scrape it, and when am I allowed to?*

---

Back in week 2 you collected data the polite way, through APIs. This week is the fallback for when there is no API and the data only exists inside a web page: reading HTML structure, selecting the elements you want, and crawling across pages into a clean table. Scraping is more fragile and more legally loaded than an API call — pages change without warning, terms of service restrict use, and `robots.txt` and rate limits are boundaries, not suggestions. The skill this week is getting the data *and* knowing when you shouldn't.

**Why this matters for designers**

Scraping is where acquisition meets ethics most sharply. Data being visible in a browser does not make it yours to take at scale. A designer who scrapes responsibly — respecting consent, terms of service, rate limits, and personal data — avoids building work on a foundation that is fragile, unfair, or simply illegal. Knowing when *not* to scrape is as much a part of the craft as the code.

The slides for this class will be available here after class.

**By the end of this week you can:**

- Read HTML structure and select elements with CSS or XPath selectors.
- Scrape a multi-page site into a clean DataFrame with BeautifulSoup / Scrapy.
- Judge what is legal and ethical to scrape (robots.txt, ToS, rate limits, personal data).
- Choose deliberately between an API and scraping for a given data need.

## Preparation before class

**📖 Read: **

- [Collecting your own data, scraping, and APIs](https://hekman.github.io/data-ai-book/part-i/chapter-9/) (the web scraping part you skipped in week 2)

🧑🏻‍💻 **Practice:**

- [Web Scraping in Python](https://app.datacamp.com/learn/courses/web-scraping-with-python)

## In class

**👨🏻‍🏫 Slides:**

- ...

🧑🏻‍💻 **Practice:**

- ...

📤 **Submit workbook**

- ...

---

**Work here:** [`assignment.ipynb`](assignment.ipynb) · **Datasets:** [`data/`](data/) · **Exercises:** [`exercises/`](exercises/)

*Slides:* run `npm run dev -- block-a-data-as-material/week-07-scraping-and-apis/slides.md`  ·  *Source: Canvas week page.*
