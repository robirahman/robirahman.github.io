# Common Phrases Module — Implementation Plan

## Code Review Summary

Before diving into the plan, here are the key observations from reviewing the existing codebase:

### Architecture Overview
- **Monolithic index.html** (~6700 lines, ~290 KB): Contains all UI, styles, screen logic, and module-specific code
- **Data files**: `vocab.js` and `grammar.js` are loaded separately and extend global scope
- **No build system**: Vanilla JS, no transpilation, no bundler — keep it that way
- **Progress**: Single `progress` object in localStorage keyed by username; all mastery stored as `{ [itemKey]: { level, lastSeen } }`
- **Wave unlock**: Each module gates content behind mastery thresholds (alphabet: 60% at level ≥2; vocab: 50% at level ≥2)
- **Quiz engine**: Shared patterns — urgency-weighted question selection, `addMastery()` / `addXP()` for scoring

### Existing "phrases" Category
`vocab.js` already contains a `phrases` category among its 26 vocabulary categories. The new module is distinct: it teaches **situational conversation** rather than isolated vocabulary lemmas. The two can cross-reference each other but serve different learning goals.

### Potential Issues Noted
1. `index.html` is already very large — the phrases module should follow the grammar.js pattern (data in separate file, rendering logic added to index.html)
2. Several magic numbers (wave size, unlock thresholds) are hardcoded — use named constants like the other modules
3. Browser TTS quality varies; phrase-length audio is more natural than single-word TTS, so listening questions will work well here

---

## Plan: Common Phrases Module

### Goals
1. Add a fourth top-level module alongside Alphabet, Vocabulary, and Grammar
2. Teach ~150–200 high-utility conversational phrases organized by real-world situation
3. Reuse all existing infrastructure: mastery system, XP, wave unlock, TTS, progress persistence
4. Introduce one new question type suited to conversation: **dialogue response** (choose the natural reply)

---

### Step 1 — Create `phrases.js` (Data File)

**File**: `bengali/phrases.js`

Model closely after `grammar.js`. Export a single global `PHRASES_DATA` array.

#### Phrase object schema:
```js
{
  id: 'greet-hello',             // unique kebab-case ID (used as mastery key)
  situation: 'greetings',        // category slug (for grouping)
  bengali: 'আপনি কেমন আছেন?',   // Bengali script
  roman: 'apni kemon achen?',    // romanization
  english: 'How are you? (formal)', // English with register note if needed
  notes: 'Use আপনি for strangers/elders; তুমি for friends (তুমি কেমন আছ?)', // optional
  reply: {                       // optional: expected/natural reply phrase
    bengali: 'ভালো আছি, ধন্যবাদ।',
    roman: 'bhalo achi, dhônnôbad.',
    english: 'I am well, thank you.'
  }
}
```

#### Situations (12 planned, ~12–18 phrases each ≈ 150–200 total):

| # | Slug | Title | Sample phrases |
|---|------|--------|----------------|
| 1 | `greetings` | Greetings & Farewells | Hello, Good morning, Goodbye, See you later |
| 2 | `introductions` | Introductions | My name is…, Where are you from?, Nice to meet you |
| 3 | `politeness` | Politeness & Requests | Please, Thank you, Sorry, Excuse me, You're welcome |
| 4 | `questions` | Asking Questions | What is this?, How much?, Where is…?, Do you speak English? |
| 5 | `directions` | Directions & Places | Turn left/right, How far?, Is it nearby?, At the traffic light |
| 6 | `transport` | Transport | I want to go to…, Stop here, How much to…?, Bus/rickshaw |
| 7 | `food` | At a Restaurant | I'd like to order…, The bill please, Is this spicy?, I'm vegetarian |
| 8 | `shopping` | Shopping & Bargaining | How much does this cost?, Too expensive, I'll take it, Do you have…? |
| 9 | `time` | Time & Scheduling | What time is it?, When?, Today/tomorrow/yesterday, Wait a moment |
| 10 | `health` | Health & Emergencies | I need a doctor, Call the police, I feel sick, Where is the hospital? |
| 11 | `social` | Social Conversation | How old are you?, Are you married?, What do you do?, I like Bengali food |
| 12 | `numbers` | Numbers in Context | 1–10, counting, prices, ages, phone numbers in conversation |

#### Wave curriculum:
Phrases unlock in waves of 10, ordered by situation priority:
- Wave 1: greetings (10 phrases)
- Wave 2: politeness (10 phrases)
- Wave 3: questions (10 phrases)
- Wave 4: introductions (10 phrases)
- Wave 5: food (10 phrases)
- Wave 6: transport + directions (10 phrases)
- … and so on

Unlock threshold: **≥60% of current wave at mastery ≥2** (same as alphabet module).

---

### Step 2 — Add Module Rendering to `index.html`

Add a new `<div id="screen-phrases">` section following the pattern of `screen-grammar`. This includes:

#### 2a. Navigation entry
Add "Phrases" to the main module navigation grid (the card buttons on the home screen). Use a speech bubble or conversation icon.

#### 2b. Phrases hub screen (`screen-phrases`)
- Progress bar showing unlocked waves vs. total
- Grid of situation cards (like grammar lesson cards), color-coded by mastery
- "Start Practice" button → launches a mixed session across unlocked situations
- Individual situation cards → drill a specific situation

#### 2c. Situation detail screen (`screen-phrases-detail`)
- Shows all phrases in a situation with Bengali, romanization, English
- Optional notes shown below each phrase
- "Practice this situation" button → quiz just these phrases
- Flip-card interaction to self-assess before the formal quiz

#### 2d. Phrase quiz screen (`screen-phrases-quiz`)
Reuse the existing quiz scaffold. Question types:

| Type | Description | Points |
|------|-------------|--------|
| `phrases-mc` | Hear/see Bengali phrase → choose English meaning (4 options) | 10 XP |
| `phrases-mc-reverse` | See English situation → choose correct Bengali phrase | 10 XP |
| `phrases-fib` | Hear Bengali phrase → type romanization or Bengali | 15 XP |
| `phrases-dialogue` | See conversation prompt → choose natural next phrase (NEW) | 15 XP |
| `phrases-listening` | Hear phrase via TTS → choose English meaning | 10 XP |

**New question type — `phrases-dialogue`:**
```
Context: "Someone says: 'আপনার নাম কী?' (What is your name?)"
Choose the natural reply:
  A) ভালো আছি। (I am well.)
  B) আমার নাম রাহুল। (My name is Rahul.)  ← correct
  C) ধন্যবাদ। (Thank you.)
  D) না, আমি যাব না। (No, I won't go.)
```
This question type uses the `reply` field on phrase objects and requires pairing two related phrases. Implement via a `dialoguePairs` array in `phrases.js`.

---

### Step 3 — Progress & Persistence

No schema migration needed. Progress key format will be:
```
progress.mastery['phrase:greet-hello'] = { level: 2, lastSeen: 1708000000000 }
```
The `'phrase:'` prefix namespaces phrase keys away from vocab/alphabet keys. The existing `getMastery()` and `addMastery()` functions accept arbitrary string keys, so they work as-is.

Wave unlock logic (`getPhraseUnlockedCount()`): copy the pattern from `getMixedUnlockedCount()` using `PHRASES_WAVE_SIZE = 10` and threshold 60%/level 2.

---

### Step 4 — Service Worker Update

In `sw.js`:
1. Bump cache version: `"bengali-v3"`
2. Add `'./phrases.js'` to `PRECACHE_URLS`

---

### Step 5 — Guide Update (`guide.html`)

Add a "Common Phrases" section to the learner guide explaining:
- What situations are covered
- How dialogue questions work
- Tips for using phrases in real conversation

---

## File Change Summary

| File | Change |
|------|--------|
| `bengali/phrases.js` | **New file** — all phrase data + curriculum order |
| `bengali/index.html` | Add Phrases navigation card, hub screen, detail screen, quiz screen, JS functions (~400–600 lines) |
| `bengali/sw.js` | Bump cache version to `v3`, add `phrases.js` to precache list |
| `bengali/guide.html` | Add Phrases section |

---

## Sequence of Work

1. **Draft phrase data** in `phrases.js` (situations 1–4 first, enough for a playable prototype)
2. **Add nav card** and hub screen to `index.html` (UI skeleton, no quiz yet)
3. **Wire up situation detail screen** with phrase display and TTS playback
4. **Implement quiz question types** one at a time: `phrases-mc` → `phrases-mc-reverse` → `phrases-listening` → `phrases-fib` → `phrases-dialogue`
5. **Connect wave unlock** and progress tracking
6. **Add remaining phrase data** (situations 5–12)
7. **Update service worker** and guide
8. **QA**: test offline mode, test with multiple profiles, verify mastery tracking

---

## Open Questions

- Should the phrases module have its own XP track or share the global XP pool? (Current leaning: share, consistent with other modules)
- Should we surface phrases that overlap with the existing `phrases` vocab category as "already partially known" based on vocab mastery? This would be a nice cross-module integration but adds complexity.
- Audio: Some phrases will be long enough that TTS sounds unnatural at slow speed (0.5x). Consider clamping minimum speed to 0.65x for phrase-length audio.
- Should `phrases.js` be further split into `phrases-pack-1.json` etc. like vocab, for lazy loading? At ~150–200 phrases the file will be small (~50 KB), so a single file is fine for now.
