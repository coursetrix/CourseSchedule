#!/usr/bin/env python3
"""Bundles index.html, styles.css, app.js, and the logo into a single
self-contained dist/index.html for handoff to the webmaster. CDN <script>
tags are left untouched (sortablejs, jspdf, jspdf-autotable, jszip, umami).

Run from anywhere: python3 bundle.py
"""
import base64
import re
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(ROOT, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()

with open(os.path.join(ROOT, "styles.css"), "r", encoding="utf-8") as f:
    css = f.read()

with open(os.path.join(ROOT, "app.js"), "r", encoding="utf-8") as f:
    js = f.read()

with open(os.path.join(ROOT, "Coursetrix logo.png"), "rb") as f:
    logo_b64 = base64.b64encode(f.read()).decode("ascii")

# Inline the stylesheet link
html, n = re.subn(
    r'<link rel="stylesheet" href="styles\.css(\?v=[^"]*)?">',
    lambda m: f"<style>\n{css}\n    </style>",
    html,
    count=1,
)
assert n == 1, "styles.css link not found/replaced"

# Inline the logo image as a base64 data URI
html, n = re.subn(
    r'src="Coursetrix logo\.png"',
    lambda m: f'src="data:image/png;base64,{logo_b64}"',
    html,
    count=1,
)
assert n == 1, "logo src not found/replaced"

# Inline app.js
html, n = re.subn(
    r'<script src="app\.js(\?v=[^"]*)?"></script>',
    lambda m: f"<script>\n{js}\n</script>",
    html,
    count=1,
)
assert n == 1, "app.js script tag not found/replaced"

out_path = os.path.join(ROOT, "dist", "index.html")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(html)

print(f"Wrote {out_path} ({len(html)} chars)")
