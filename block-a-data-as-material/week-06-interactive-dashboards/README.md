# Block A · Week 6 — Interactive Dashboards

> **Block question:** *What does this data actually let me know, and what stories can I tell?*
> **This week's question:** *How do I turn a set of charts into an interactive dashboard an audience can actually use?*

---

A dashboard is where your charts stop being a report and become a tool someone else can steer. This week you add interactivity — hover, filters, sliders, dropdowns — to the views you built last week, then wrap them into a small dashboard. You choose your framework: **Gradio**, which runs inline in the notebook and shares with a link, or **Streamlit**, which gives you a standalone app with more layout control. Both do the same job here — pick the one that fits how you want to share your data story. The hard part isn't the framework or the widgets; it's the default view. A dashboard's default is your headline, and your transparency (honest axes, visible subgroups) has to survive every state a user can click into.

**Why this matters for designers**

A dashboard hands the reader the controls, which means it can mislead in states you never looked at. Designing the default view, the sensible ranges, and the guardrails is the real work — interactivity is easy to add and just as easy to make dishonest. The most useful dashboards say one clear thing on open and reward exploration without ever letting the user reach a misleading view.

The slides for this class will be available here after class.

**By the end of this week you can:**

- Add interactivity to charts with Plotly: hover, range sliders, buttons, dropdowns.
- Build a small dashboard in Gradio or Streamlit with a deliberate, defensible default view.
- Keep encodings honest across every interactive state a user can reach.
- Judge when interactivity helps the reader reason and when it just decorates.

## Preparation before class

**📖 Read: **

- ...

🧑🏻‍💻 **Practice:**

- [Introduction to Data Visualization with Plotly in Python](https://app.datacamp.com/learn/courses/introduction-to-data-visualization-with-plotly-in-python) — the interactivity that feeds both frameworks
- [If you pick Streamlit: Streamlit tutorial](https://www.datacamp.com/tutorial/streamlit) (Gradio is covered in class)

## In class

**👨🏻‍🏫 Slides:**

- ...

🧑🏻‍💻 **Practice:**

- ...

📤 **Submit workbook**

- ...

---

**Work here:** [`assignment.ipynb`](assignment.ipynb) · **Datasets:** [`data/`](data/) · **Exercises:** [`exercises/`](exercises/)

*Slides:* run `npm run dev -- block-a-data-as-material/week-06-interactive-dashboards/slides.md`  ·  *Source: Canvas week page.*
