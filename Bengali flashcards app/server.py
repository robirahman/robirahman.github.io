#!/usr/bin/env python3
"""
Bengali learning app — local server.

Run:  python3 server.py
Then open http://localhost:8000 in your browser.

Progress is saved per-user in users/<name>.json.
Legacy progress.json is auto-migrated on first use.
"""

import http.server
import json
import os
import re
import webbrowser
from urllib.parse import urlparse, parse_qs

PORT = 8000
DIR = os.path.dirname(os.path.abspath(__file__))
PROGRESS_FILE = os.path.join(DIR, "progress.json")
USERS_DIR = os.path.join(DIR, "users")
os.makedirs(USERS_DIR, exist_ok=True)

# Only allow safe profile names: letters, digits, spaces, hyphens, underscores, Unicode word chars
_SAFE_NAME = re.compile(r'^[\w\s\-]+$', re.UNICODE)
_EMPTY_PROGRESS = '{"mastery":{},"xp":0,"streak":0,"lastDate":null,"quizHistory":{}}'


def _sanitize_user(name):
    """Return sanitized name or None if invalid."""
    if not name or not _SAFE_NAME.match(name):
        return None
    # Block path traversal
    if '..' in name or '/' in name or '\\' in name:
        return None
    return name.strip()


def _user_file(name):
    return os.path.join(USERS_DIR, name + ".json")


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def _parse(self):
        parsed = urlparse(self.path)
        params = parse_qs(parsed.query)
        return parsed.path, params

    def do_GET(self):
        path, params = self._parse()
        if path == "/api/progress":
            self._send_progress(params)
        elif path == "/api/users":
            self._list_users()
        else:
            super().do_GET()

    def do_POST(self):
        path, params = self._parse()
        if path == "/api/progress":
            self._save_progress(params)
        elif path == "/api/migrate":
            self._migrate_legacy()
        else:
            self.send_error(404)

    def do_DELETE(self):
        path, params = self._parse()
        if path == "/api/users":
            self._delete_user(params)
        else:
            self.send_error(404)

    # ── List users ──
    def _list_users(self):
        users = []
        for fname in sorted(os.listdir(USERS_DIR)):
            if fname.endswith(".json"):
                name = fname[:-5]
                # Read summary info
                try:
                    with open(os.path.join(USERS_DIR, fname), "r", encoding="utf-8") as f:
                        data = json.load(f)
                    users.append({
                        "name": name,
                        "xp": data.get("xp", 0),
                        "streak": data.get("streak", 0),
                    })
                except (json.JSONDecodeError, OSError):
                    users.append({"name": name, "xp": 0, "streak": 0})

        migrate = os.path.exists(PROGRESS_FILE) and len(users) == 0
        self._json_response({"users": users, "migrate": migrate})

    # ── Read progress ──
    def _send_progress(self, params):
        user = params.get("user", [None])[0]
        if user:
            user = _sanitize_user(user)
            if not user:
                self.send_error(400, "Invalid user name")
                return
            fpath = _user_file(user)
        else:
            fpath = PROGRESS_FILE

        try:
            with open(fpath, "r", encoding="utf-8") as f:
                data = f.read()
        except FileNotFoundError:
            data = _EMPTY_PROGRESS
        self._json_response_raw(data)

    # ── Write progress ──
    def _save_progress(self, params):
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        try:
            json.loads(body)
        except json.JSONDecodeError:
            self.send_error(400, "Invalid JSON")
            return

        user = params.get("user", [None])[0]
        if user:
            user = _sanitize_user(user)
            if not user:
                self.send_error(400, "Invalid user name")
                return
            fpath = _user_file(user)
        else:
            fpath = PROGRESS_FILE

        with open(fpath, "w", encoding="utf-8") as f:
            f.write(body.decode("utf-8"))
        self._json_response({"ok": True})

    # ── Delete user ──
    def _delete_user(self, params):
        user = params.get("user", [None])[0]
        if not user:
            self.send_error(400, "Missing user param")
            return
        user = _sanitize_user(user)
        if not user:
            self.send_error(400, "Invalid user name")
            return
        fpath = _user_file(user)
        try:
            os.remove(fpath)
        except FileNotFoundError:
            pass
        self._json_response({"ok": True})

    # ── Migrate legacy progress.json → users/Default.json ──
    def _migrate_legacy(self):
        if os.path.exists(PROGRESS_FILE):
            dest = _user_file("Default")
            os.rename(PROGRESS_FILE, dest)
            self._json_response({"ok": True, "name": "Default"})
        else:
            self._json_response({"ok": False})

    # ── Helpers ──
    def _json_response(self, obj):
        data = json.dumps(obj).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(data)

    def _json_response_raw(self, text):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(text.encode("utf-8"))

    def log_message(self, format, *args):
        if args and "/api/" in str(args[0]):
            return
        super().log_message(format, *args)


if __name__ == "__main__":
    print(f"Starting Bengali learning app on http://localhost:{PORT}")
    print(f"User profiles in: {USERS_DIR}")
    print("Press Ctrl+C to stop.\n")
    webbrowser.open(f"http://localhost:{PORT}")
    with http.server.HTTPServer(("", PORT), Handler) as srv:
        try:
            srv.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
