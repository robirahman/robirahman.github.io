#!/usr/bin/env node
// validate.js — Content validation for Data Science Learning App
// Usage: node data_science/validate.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DIR = __dirname;
const failures = [];

function fail(msg) {
  failures.push(msg);
}

// ── Load a JS file that sets globals via assignments ────────────────────────
// `const`/`let` declarations in vm context are local to the script and not
// visible on the sandbox object. Strip them so assignments land on the context.
function loadFile(filename) {
  let src = fs.readFileSync(path.join(DIR, filename), 'utf8');
  // Convert top-level `const X =` / `let X =` → `X =` so they attach to ctx
  src = src.replace(/^\s*(const|let)\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=/gm, '$2 =');
  const ctx = vm.createContext({});
  try {
    new vm.Script(src).runInContext(ctx);
  } catch (e) {
    fail(`[${filename}] Failed to parse/execute: ${e.message}`);
  }
  return ctx;
}

// ── Validate stats.js ────────────────────────────────────────────────────────
function validateStats(ctx) {
  const lessons = ctx.STATS_LESSONS;
  if (!Array.isArray(lessons)) {
    fail('[stats.js] STATS_LESSONS is not defined or not an array');
    return;
  }

  const REQUIRED = ['id', 'title', 'description', 'icon', 'concepts', 'explanation', 'quizzes'];
  const seenIds = new Set();

  lessons.forEach((lesson, i) => {
    const tag = `[stats.js] Lesson[${i}]`;

    // Required fields present
    REQUIRED.forEach(f => {
      if (lesson[f] === undefined || lesson[f] === null) {
        fail(`${tag} missing required field: "${f}"`);
      }
    });

    // IDs unique and sequential from 1
    if (typeof lesson.id !== 'number') {
      fail(`${tag} id must be a number, got: ${typeof lesson.id}`);
    } else {
      if (lesson.id !== i + 1) {
        fail(`${tag} expected id ${i + 1}, got ${lesson.id}`);
      }
      if (seenIds.has(lesson.id)) {
        fail(`${tag} duplicate id: ${lesson.id}`);
      }
      seenIds.add(lesson.id);
    }

    // No empty strings in key string fields
    ['title', 'description', 'icon', 'explanation'].forEach(f => {
      if (typeof lesson[f] === 'string' && lesson[f].trim() === '') {
        fail(`${tag} field "${f}" is empty string`);
      }
    });

    // concepts must be non-empty array
    if (!Array.isArray(lesson.concepts) || lesson.concepts.length === 0) {
      fail(`${tag} concepts must be a non-empty array`);
    }

    // quizzes
    if (!Array.isArray(lesson.quizzes) || lesson.quizzes.length === 0) {
      fail(`${tag} quizzes must be a non-empty array`);
    } else {
      lesson.quizzes.forEach((q, qi) => {
        const qtag = `${tag} quiz[${qi}]`;
        if (!q.type) { fail(`${qtag} missing type`); return; }
        if (!q.question || q.question.trim() === '') fail(`${qtag} missing/empty question`);
        if (!q.explanation || q.explanation.trim() === '') fail(`${qtag} missing/empty explanation`);

        if (q.type === 'mc') {
          if (!Array.isArray(q.options) || q.options.length < 2) {
            fail(`${qtag} mc quiz must have at least 2 options`);
          } else if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
            fail(`${qtag} mc answer index ${q.answer} is out of bounds (options.length=${q.options.length})`);
          }
        } else if (q.type === 'tf') {
          if (typeof q.answer !== 'boolean') {
            fail(`${qtag} tf quiz answer must be a boolean, got: ${typeof q.answer}`);
          }
        } else {
          fail(`${qtag} unknown quiz type: "${q.type}"`);
        }
      });
    }

    // examples (optional)
    if (lesson.examples !== undefined) {
      if (!Array.isArray(lesson.examples)) {
        fail(`${tag} examples must be an array`);
      } else {
        lesson.examples.forEach((ex, ei) => {
          const etag = `${tag} example[${ei}]`;
          if (!ex.label || ex.label.trim() === '') fail(`${etag} missing/empty label`);
          if (!ex.formula || ex.formula.trim() === '') fail(`${etag} missing/empty formula`);
          if (!ex.explanation || ex.explanation.trim() === '') fail(`${etag} missing/empty explanation`);
        });
      }
    }
  });
}

// ── Validate ml.js ───────────────────────────────────────────────────────────
function validateML(ctx) {
  const cards = ctx.ALGORITHM_DATA;
  if (!Array.isArray(cards)) {
    fail('[ml.js] ALGORITHM_DATA is not defined or not an array');
    return;
  }

  const VALID_CATEGORIES = new Set(['supervised', 'unsupervised', 'evaluation', 'deep']);
  const REQUIRED = ['id', 'term', 'category', 'shortDef', 'fullDef', 'whenToUse', 'tradeoffs', 'codeExample', 'tags'];
  const seenIds = new Set();

  cards.forEach((card, i) => {
    const tag = `[ml.js] Card[${i}] (id="${card.id}")`;

    // IDs unique
    if (!card.id || typeof card.id !== 'string') {
      fail(`[ml.js] Card[${i}] id must be a non-empty string`);
    } else {
      if (seenIds.has(card.id)) {
        fail(`[ml.js] duplicate id: "${card.id}"`);
      }
      seenIds.add(card.id);
    }

    // Required fields present
    REQUIRED.forEach(f => {
      if (card[f] === undefined || card[f] === null) {
        fail(`${tag} missing required field: "${f}"`);
      }
    });

    // Category valid
    if (!VALID_CATEGORIES.has(card.category)) {
      fail(`${tag} invalid category: "${card.category}". Must be one of: ${[...VALID_CATEGORIES].join(', ')}`);
    }

    // No empty strings in required string fields
    ['term', 'shortDef', 'fullDef', 'whenToUse', 'tradeoffs', 'codeExample'].forEach(f => {
      if (typeof card[f] === 'string' && card[f].trim() === '') {
        fail(`${tag} field "${f}" is empty string`);
      }
    });

    // tags must be non-empty array
    if (!Array.isArray(card.tags) || card.tags.length === 0) {
      fail(`${tag} tags must be a non-empty array`);
    }
  });
}

// ── Run ──────────────────────────────────────────────────────────────────────
console.log('Validating stats.js...');
const statsCtx = loadFile('stats.js');
validateStats(statsCtx);

console.log('Validating ml.js...');
const mlCtx = loadFile('ml.js');
validateML(mlCtx);

if (failures.length > 0) {
  console.error(`\n❌ ${failures.length} validation error(s):\n`);
  failures.forEach(f => console.error('  •', f));
  process.exit(1);
} else {
  console.log('\nAll checks passed ✓');
  process.exit(0);
}
