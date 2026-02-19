## Concrete issues that need to be fixed (with exact files)

### 1) Romanization data has lots of “Unicode confusables” + unsupported diacritics

I ran your content QA script (`bengali/scripts/lint_content.py`) against the zip’s content, and it reports **109 issues**. The big one: many `roman` strings contain characters your normalizer doesn’t expect—often **Cyrillic letters that look like Latin** (e.g., `е`, `т`, `р`, `а`, `к`, `и`, `і`) and also combining marks / accented vowels (`é`, combining macron `̄`, etc.).

**Where:**

- `bengali/Vocabulary corpus/enriched_new_words.json` (many entries)

**Examples the linter flagged (representative):**

- lemma **গড়ে** roman `gorе̄` (contains Cyrillic `е` and combining macron)
- lemma **প্রতিযোগিতায়** roman `pratijogiтay` (contains Cyrillic `т`)
- lemma **বিদেশে** roman `bideshе` (contains Cyrillic `е`)

**Why it matters:** this will cause inconsistent display, search mismatches, quiz answer mismatches, and “why is my typing not matching?” learner frustration.

**Fix direction (high-leverage):**

- In your build/enrichment pipeline (likely `scripts/enrich_vocab.py` or wherever you generate `enriched_new_words.json`), add a sanitization pass:
  - Unicode normalize (NFKC)
  - Map common confusables to ASCII (`е→e`, `т→t`, `р→p` or `r` depending, `а→a`, `к→k`, `и→u/i` but likely `i`, etc.)
  - Replace accented vowels (`é→e`) unless you _intend_ to support them as a standard
  - Drop combining marks you don’t use

If you want, I can propose a small `sanitize_roman()` function + a one-time fixer that rewrites `enriched_new_words.json` deterministically.

---

### 2) Duplicate lemmas in `vocab.js` (likely causing collisions in scheduling / stats)

Your linter also flags duplicates like:

- `না` (2×), `কিছু` (2×), `তারা` (2×), `সব` (2×), `অনেক` (2×), `কাছে` (2×), `কাজ` (2×), `ছবি` (3×), `আগে` (3×), `পরে` (2×), `কারণ` (2×), `তখন` (2×)

**Where:**

- `bengali/vocab.js`

**Why it matters:** if you key progress by lemma alone (very common), duplicates can:

- overwrite mastery state,
- cause review scheduling weirdness,
- make search results confusing.

**Fix direction:**

- Make the internal ID unique (e.g., `lemma|pos|sense|category|freqRank`) and _display_ lemma as usual.
- If duplicates are intentional (different senses/parts of speech), disambiguate in UI: show POS + a short gloss label.

## Missing features that would move the app up a tier

If you build only a few, I’d prioritize these:

1. **Pronunciation feedback (speech recognition)**

- Even a lightweight “did the browser recognize what you said?” loop is huge for motivation.
- Keep it optional; browsers differ a lot on Bengali ASR quality.

2. **Better answer tolerance**

- Accept common spelling variants / conjunct variations (where appropriate).
- For romanized input: accept multiple valid spellings if you keep romanization mode (e.g., `sh` vs `s` choices depending on your scheme).

3. **Minimal-pair listening drills**

- Bengali contrasts learners struggle with: dental/retroflex (ত/ট), aspirated/unaspirated (ক/খ), etc.
- You already have listening mode; minimal-pairs make it feel “language-lab” serious.

4. **Sentence-mode / “build a sentence” from vocab**

- Take words the learner knows and generate constrained sentence templates (SOV, postpositions, tense markers).
- This bridges vocab → grammar → production.

5. **Offline/PWA support**

- Your app is a great fit for “use it on the subway.”
- Cache lessons + audio (if you add audio assets later).

## A PR-style checklist you can apply directly

### Content QA / Data integrity

- [ ] **Fix romanization confusables** in `bengali/Vocabulary corpus/enriched_new_words.json` (and ideally at the source generator).
- [ ] Add a `sanitize_roman()` step in the pipeline (scripts) and run it before building `vocab-pack-*.json`.
- [ ] Add a test that fails CI if any unexpected roman chars appear (you already have the linter—wire it into a check).

### Progress correctness

- [ ] Replace “lemma-only” keys with a unique ID (`lemma|pos|sense|freqRank`) so duplicates in `bengali/vocab.js` don’t collide.
- [ ] Update search/results display to show POS/sense when lemma repeats.

### UX polish

- [ ] Add a “Voice selection / test” panel (Web Speech voices vary wildly for Bengali).
