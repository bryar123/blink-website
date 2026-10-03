"""Render the static gallery from assets/portfolio.json. Standard library only.

Run after updating the catalog and preparing its media files:
    python scripts/build-gallery.py
The site itself needs no build tool, package install, or runtime fetch.
"""
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
catalog = json.loads((ROOT / 'assets/portfolio.json').read_text(encoding='utf-8'))
projects = catalog['projects']
assert len({p['id'] for p in projects}) == len(projects), 'Duplicate project IDs'
assert len({p['source'] for p in projects}) == len(projects), 'Duplicate sources'

def esc(value):
    return html.escape(str(value), quote=True)

def card(project):
    p = project
    for key in ('source', 'thumbnail', 'full') + (('preview',) if p['video'] else ()):
        assert (ROOT / p[key]).is_file(), f'Missing {p[key]}'
    ratio = f"{p['width']}/{p['height']}"
    alt = p['title'] + ' — ' + p['category']
    if p['video']:
        media = f'<img class="preview-poster" src="{esc(p["thumbnail"])}" width="{p["width"]}" height="{p["height"]}" alt="" loading="lazy" decoding="async"><video class="cover" width="{p["width"]}" height="{p["height"]}" aria-hidden="true" data-poster="{esc(p["thumbnail"])}" data-src="{esc(p["preview"])}" data-full="{esc(p["full"])}" muted playsinline preload="none"></video>'
        seconds = round(p['duration'])
        duration = f'{seconds // 60}:{seconds % 60:02}'
        format_label = f'<span data-i18n="media.film">Film</span><span aria-hidden="true"> · </span><span>{duration}</span>'
        icon = '<path d="m9 5 11 7-11 7Z"/>'
    else:
        media = f'<img class="cover" src="{esc(p["thumbnail"])}" data-full="{esc(p["full"])}" width="{p["width"]}" height="{p["height"]}" alt="{esc(alt)}" loading="lazy" decoding="async">'
        format_label = '<span data-i18n="media.poster">Poster</span>'
        icon = '<path d="M7 17 17 7M7 7h10v10"/>'
    return f'''      <figure class="cell" data-project="{esc(p['id'])}" data-category="{esc(' '.join(p['categories']))}" style="--asset-ratio:{ratio}">
        <div class="project-media">{media}<span class="media-label">{format_label}</span></div>
        <figcaption class="cap"><i dir="auto">{esc(p['category'])}</i><b dir="auto">{esc(p['title'])}</b></figcaption>
        <a class="project-open" href="{esc(p['full'])}" aria-label="{esc(p['title'])}"><span class="open-mark"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true">{icon}</svg></span></a>
      </figure>'''

markup = '<!-- PORTFOLIO:START -->\n    <div class="featured-work">\n'
markup += '\n'.join(card(p) for p in projects[:2])
markup += '\n    </div>\n    <div class="work-batches" id="workGrid">\n'
# Fixed batches prevent earlier columns from rebalancing when more work appears.
groups = [projects[2:12]] + [projects[i:i+12] for i in range(12, len(projects), 12)]
for group in groups:
    markup += '      <div class="grid work-batch">\n'
    markup += '\n'.join(card(p) for p in group)
    markup += '\n      </div>\n'
markup += '\n    </div>\n    <!-- PORTFOLIO:END -->'
page = ROOT / 'index.html'
text = page.read_text(encoding='utf-8')
assert '<!-- PORTFOLIO:START -->' in text, 'Gallery markers not found'
text = re.sub(r'<!-- PORTFOLIO:START -->.*?<!-- PORTFOLIO:END -->', lambda _: markup, text, flags=re.S)
text = re.sub(r'(<span id="workCount">)\d+', lambda m: m[1]+str(len(projects)), text)
for kind, label, count in [('all', 'All work', len(projects)), ('film', 'Films', sum(p['video'] for p in projects)), ('poster', 'Posters', sum(not p['video'] for p in projects))]:
    text = re.sub(r'(<button[^>]*data-exhibit-filter="' + kind + r'"[^>]*>)[^<]+', lambda m: m[1] + f'{label} {count}', text)
text = re.sub(r'(<span id="exhibitPosition"[^>]*>)1 / \d+', lambda m: m[1] + f'1 / {len(projects)}', text)
# Keep the no-JavaScript exhibition complete and in the same order as the 3D gallery.
featured = json.loads((ROOT / 'assets/experience/selection.json').read_text(encoding='utf-8'))
ids = {p['id'] for p in featured}
ordered = [next(p for p in projects if p['id'] == f['id']) for f in featured]
ordered += [p for p in projects if p['id'] not in ids]
fallback = '\n'.join(f'<a class="exhibit-item" href="{esc(p["full"])}" data-exhibit="{esc(p["id"])}"><img src="{esc(p["thumbnail"])}" alt="" width="{p["width"]}" height="{p["height"]}" loading="lazy" decoding="async"><span dir="auto">{esc(p["title"])}</span></a>' for p in ordered)
text = re.sub(r'(<div class="exhibit-fallback">).*?(</div>)', lambda m: m[1]+fallback+m[2], text, count=1, flags=re.S)
page.write_text(text, encoding='utf-8')
print(f'Rendered {len(projects)} projects ({sum(p["video"] for p in projects)} films).')
