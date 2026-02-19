#!/usr/bin/env python3
"""
Fetch posts from Substack and cache them in _data/substack_posts.yml.

Idempotent: merges newly fetched posts with previously cached ones so posts
remain available even if a future network fetch fails.
"""

import os
import sys

try:
    import requests
except ImportError:
    print("Error: requests not installed. Run: pip3 install requests")
    sys.exit(1)

try:
    import yaml
except ImportError:
    print("Error: pyyaml not installed. Run: pip3 install pyyaml")
    sys.exit(1)

SUBSTACK_URL = "https://robirahman.substack.com"
REPO_ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), ".."))
DATA_FILE = os.path.join(REPO_ROOT, "_data", "substack_posts.yml")
LIMIT = 50


def fetch_all_posts():
    """Fetch all posts from the Substack API, handling pagination."""
    posts = []
    offset = 0
    while True:
        url = f"{SUBSTACK_URL}/api/v1/posts?limit={LIMIT}&offset={offset}"
        resp = requests.get(url, timeout=15, headers={"User-Agent": "Mozilla/5.0"})
        resp.raise_for_status()
        batch = resp.json()
        if not batch:
            break
        posts.extend(batch)
        if len(batch) < LIMIT:
            break
        offset += LIMIT
    return posts


def normalize(post):
    """Extract and normalize relevant fields from a Substack API post object."""
    return {
        "id": post["id"],
        "title": (post.get("title") or "").strip(),
        "subtitle": (post.get("subtitle") or "").strip(),
        "url": post.get("canonical_url", ""),
        # Store as a plain string so PyYAML doesn't auto-parse it as a date type
        "date": str(post.get("post_date") or ""),
        "description": (post.get("description") or post.get("subtitle") or "").strip(),
        "audience": post.get("audience", "everyone"),
    }


def load_cache():
    """Load existing cached posts from YAML, keyed by post ID."""
    if not os.path.exists(DATA_FILE):
        return {}
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f)
    if not data:
        return {}
    # Normalize date to string in case PyYAML parsed it as a date object
    result = {}
    for p in data:
        p["date"] = str(p.get("date") or "")
        result[p["id"]] = p
    return result


def save_cache(posts_by_id):
    """Write posts to the cache file, sorted newest-first."""
    posts = sorted(
        posts_by_id.values(),
        key=lambda p: p.get("date") or "",
        reverse=True,
    )
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        yaml.dump(posts, f, allow_unicode=True, default_flow_style=False, sort_keys=False)


def main():
    cache = load_cache()

    try:
        fetched = fetch_all_posts()
        new_count = sum(1 for p in fetched if normalize(p)["id"] not in cache)
        for post in fetched:
            normalized = normalize(post)
            cache[normalized["id"]] = normalized
        print(f"Fetched {len(fetched)} posts ({new_count} new). Total cached: {len(cache)}.")
    except Exception as exc:
        print(f"Warning: Substack fetch failed: {exc}")
        print(f"Falling back to {len(cache)} previously cached posts.")
        if not cache:
            print("No cached posts available; writing empty data file.")

    save_cache(cache)


if __name__ == "__main__":
    main()
