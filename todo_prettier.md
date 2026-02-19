# Fix Prettier CI failures

The GitHub Actions "Prettier code formatter" check is failing because recently added files in `data_science/` and `bengali/` are not formatted to Prettier's style.

## Steps

**1. Update `.prettierignore`** — add these generated/large data files that should never be auto-formatted:

```
bengali/vocab-pack-*.json
bengali/Vocabulary corpus/
```

**2. Run Prettier locally to auto-format all remaining files:**

```bash
npx prettier --write .
```

This will reformat `data_science/index.html`, `data_science/ml.js`, `data_science/stats.js`, `bengali/guide.html`, `bengali/sw.js`, `bengali/manifest.json`, and any other non-ignored files.

**3. Verify locally before committing:**

```bash
npx prettier . --check
```

Should exit with code 0 (no output = all files pass).

**4. Commit the changes:**

```bash
git add .prettierignore bengali/ data_science/
git commit -m "Fix Prettier formatting failures in CI"
```

After pushing, the Actions check at `.github/workflows/prettier.yml` should pass.
