## High-level product feedback

### What's working well

- **Scope is well-chosen**: concepts + ML + stats is a practical triad for DS learners.
- **The ML cards are strong** in structure: `shortDef`, `fullDef`, `whenToUse`, `tradeoffs`, `codeExample` — "mental model + decision-making" framing people need.
- **Stats lessons** (15 total) are coherent and progressively structured: descriptives → probability → Bayes → distributions → CLT → testing → CIs → correlation → regression → A/B → bootstrapping → ANOVA → nonparametric → multiple comparisons → causal inference.
- **ML card search** (text + category filter) makes the algorithm catalogue navigable as it grows. ✅ Done 2026-02
- **Python syntax highlighting** via Prism.js makes code examples much more readable. ✅ Done 2026-02
- **KaTeX math rendering** in stats lesson formula panels — typeset LaTeX in `$...$` delimiters. ✅ Done 2026-02
- **Content validation script** (`node data_science/validate.js`) enforces schema at build-time. ✅ Done 2026-02
- **PWA / offline support** via service worker + manifest — app loads from cache when offline. ✅ Done 2026-02

### Biggest opportunity

Right now it reads like a **great content deck** wrapped in a lightweight UI. The next step is making it feel like a _learning system_:

- personalization (weak areas, review scheduling transparency),
- more interactive checks (not just MC/TF),
- better "why this matters" and "common failure modes" scaffolding,
- and a tighter content pipeline (so you can expand without `index.html` becoming a monolith).

---

## Missing lessons / topics to add next (highest ROI)

### Data science workflow fundamentals

- **Data cleaning & leakage**: train/test splits, leakage examples, target leakage patterns
- **Feature engineering**: encoding, scaling, interaction terms, leakage-safe transforms
- **Model selection**: baselines, error analysis loops, when to stop iterating
- **Pipelines** (conceptual): fit/transform discipline, reproducible preprocessing

### Core ML topics not yet covered

- **Regularization extension**: early stopping, dropout as regularization (current card covers L1/L2/ElasticNet; add deep learning angle)
- **Ensemble methods deep dive**: stacking/blending beyond bagging/boosting

### "Modern DS" missing module ideas

- **SQL essentials** (joins, window functions, aggregation pitfalls)
- **Experimentation in practice** (guardrails, novelty effects — build on the existing A/B content)
- **MLOps basics** (model drift, monitoring, retraining triggers)

---

## Feature requests / UX improvements

### Learning experience improvements (big impact)

- **"Why am I seeing this today?" transparency**: show the due logic (new / due / lapsed) and next review estimate.
- **User feedback buttons** per card/question:
  - "Too easy / too hard"
  - "Confusing wording"
  - "Report mistake"
- **Interleaving modes**: mix ML + stats + concepts for better retention, or "focus mode" by topic.
- **Progress dashboard**: a _coverage & mastery_ chart would be more motivating than streaks alone.

### Quiz design upgrades

- Add question types beyond MC/TF:
  - numeric entry (compute SE, interpret CI)
  - ordering ("put the steps of hypothesis testing in order")
  - short free response with "compare against key phrases"
- Add **explanations for wrong options** ("why the distractor is wrong"). Explanations currently explain the correct answer well but rarely address why the distractors are wrong.

### Platform niceties

- Optional **export/import progress** so users can move devices without losing scheduling.
- **App icon** (192×192 PNG) for the PWA manifest — currently no icon is served.

---

## Code / architecture notes

### 1) File organization: index.html is doing too much

The `data_science/` folder is essentially `{ index.html, ml.js, stats.js, validate.js, sw.js, manifest.json }` with app logic, UI, styles, and concept content all concentrated in one large HTML file.

**Recommendation**

- Break out:
  - `app.js` (state machine, scheduling, persistence)
  - `ui.js` (rendering / components)
  - `storage.js` (localStorage schema + migrations)
  - `concepts.js` (or JSON) for the core DS modules deck
- Keep `ml.js` / `stats.js` as content modules with shared schema enforced by `validate.js`.

### 2) Content schema is validated but not typed

`validate.js` enforces structure at run-time. For better DX, add JSDoc typedefs for ML cards and stats lessons so editors give autocomplete.

### 3) Populate stats lesson icons consistently

All 15 stats lessons now have icon fields. Verify they are all visually distinct and not reused across lessons.

### 4) KaTeX coverage

Only `examples[].formula` fields use LaTeX. If explanation body text ever needs inline math, switch those strings to `$...$` notation — `renderMathInElement` already runs on the full lesson container.

---

## Upcoming priorities

### Next up

- Progress dashboard + "why this is due" transparency.
- Data cleaning & leakage lesson (stats or concepts module).
- App icon PNG for PWA manifest.
- Add explanations for wrong answer distractors in quizzes.

### Stretch goals

- More interactive question types (numeric entry, ordering).
- MLOps / SQL essentials module.
- Cross-device progress export/import.
- Break `index.html` into separate `app.js` / `ui.js` / `storage.js` files.
