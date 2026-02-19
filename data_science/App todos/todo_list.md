## High-level product feedback

### What's working well

* **Scope is well-chosen**: concepts + ML + stats is a practical triad for DS learners.
* **The ML cards are strong** in structure: `shortDef`, `fullDef`, `whenToUse`, `tradeoffs`, plus optional `codeExample` is exactly the kind of "mental model + decision-making" framing people need.
* **Stats lessons** are coherent and progressively structured (descriptives → probability → Bayes → distributions → CLT → testing → CIs → correlation → regression → A/B).
* **ML card search** (text + category filter) makes the algorithm catalogue navigable as it grows. ✅ Done 2026-02
* **Python syntax highlighting** via Prism.js makes code examples much more readable. ✅ Done 2026-02

### Biggest opportunity

Right now it reads like a **great content deck** wrapped in a lightweight UI. The next step is making it feel like a *learning system*:

* personalization (weak areas, review scheduling transparency),
* more interactive checks (not just MC/TF),
* better "why this matters" and "common failure modes" scaffolding,
* and a tighter content pipeline (so you can expand without `index.html` becoming a monolith).

---

## Missing lessons / topics to add next (highest ROI)

### Data science workflow fundamentals

* **Data cleaning & leakage**: train/test splits, leakage examples, target leakage patterns
* **Feature engineering**: encoding, scaling, interaction terms, leakage-safe transforms
* **Model selection**: baselines, error analysis loops, when to stop iterating
* **Pipelines** (conceptual): fit/transform discipline, reproducible preprocessing

### Core ML topics not yet in the ML deck (or only implied)

* **Bias–variance tradeoff**
* **Regularization deep dive** (L1/L2, elastic net, early stopping, dropout as regularization)
* **Hyperparameter tuning** (grid/random/Bayesian, nested CV) — nested CV is mentioned briefly; a dedicated card/lesson would help
* **Calibration** (reliability curves, Platt scaling, isotonic regression) — referenced in log loss / NB; make it explicit
* **Class imbalance** beyond metrics: resampling, class weights, thresholding, PR curves

### Statistics topics that would complement existing lessons

* **Bootstrapping** (bootstrap CI is mentioned; expand into "bootstrap intuition + when it fails")
* **ANOVA** (mentioned in passing; a full lesson would help)
* **Nonparametric tests** (Mann–Whitney, KS, permutation tests)
* **Multiple comparisons / FDR** deeper (Bonferroni & BH are mentioned; add a lesson with worked examples)
* **Causal inference basics** (DAGs, confounding, selection bias) — especially relevant given the A/B testing lesson

### "Modern DS" missing module ideas

* **SQL essentials** (joins, window functions, aggregation pitfalls)
* **Experimentation in practice** (guardrails, novelty effects — build on the existing A/B content)
* **MLOps basics** (model drift, monitoring, retraining triggers)

---

## Feature requests / UX improvements

### Learning experience improvements (big impact)

* **"Why am I seeing this today?" transparency**: show the due logic (new / due / lapsed) and next review estimate.
* **User feedback buttons** per card/question:
  * "Too easy / too hard"
  * "Confusing wording"
  * "Report mistake"
* **Interleaving modes**: mix ML + stats + concepts for better retention, or "focus mode" by topic.
* **Progress dashboard**: a *coverage & mastery* chart would be more motivating than streaks alone.

### Quiz design upgrades

* Add question types beyond MC/TF:
  * numeric entry (compute SE, interpret CI)
  * ordering ("put the steps of hypothesis testing in order")
  * short free response with "compare against key phrases"
* Add **explanations for wrong options** ("why the distractor is wrong"). Explanations currently explain the correct answer well but rarely address why the distractors are wrong.

### Content UX improvements

* **Math rendering**: Unicode subscripts/symbols (β₀, σ², etc.) are functional but not ideal.
  Consider KaTeX/MathJax so formulas are consistent, copyable, and accessible.

### Platform niceties

* **Offline/PWA support** (service worker + caching) — very aligned with "daily practice."
* Optional **export/import progress** so users can move devices without losing scheduling.

---

## Code / architecture notes

### 1) File organization: index.html is doing too much

The `data_science/` folder is essentially `{ index.html, ml.js, stats.js }` with app logic, UI, styles, and concept content all concentrated in one large HTML file.

**Recommendation**

* Break out:
  * `app.js` (state machine, scheduling, persistence)
  * `ui.js` (rendering / components)
  * `storage.js` (localStorage schema + migrations)
  * `concepts.js` (or JSON) for the core DS modules deck
* Keep `ml.js` / `stats.js` as content modules, but consider a shared schema.

### 2) Add a content schema + validation

Both `ml.js` and `stats.js` have consistent shapes, but nothing enforces them at build-time.

**Recommendation**

* Define a simple schema (even JSDoc typedefs) for:
  * ML cards (`id`, `term`, `category`, `shortDef`, `fullDef`, `whenToUse`, `tradeoffs`, `tags`, optional `codeExample`)
  * Stats lessons (`id`, `title`, `concepts`, `explanation`, `examples`, `quizzes`)
* Add a tiny test script to validate:
  * unique IDs
  * each MCQ `answer` index is within `options`
  * no empty strings where UI expects text
  * no duplicated terms, etc.

### 3) Populate stats lesson icons consistently

Stats lessons have an `icon` field but most are empty while CLT has one. Either remove the field or populate consistently.

---

## Upcoming priorities

### Next up

* Content validation script + basic schema.
* Progress dashboard + "why this is due" transparency.
* Add 1–2 new stats/ML lessons: **bias–variance**, **regularization**, **calibration**, **bootstrapping**.

### Stretch goals

* PWA offline mode + cross-device progress export/import.
* More interactive question types + error-analysis style quizzes.
* KaTeX for math rendering.
