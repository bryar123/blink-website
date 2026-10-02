# BLINK restoration and swipe validation

Checked locally on October 3, 2026. The previous page was restored from `.codex-review/immersive/index-before.html`, retaining only the Step inside exhibition from the rejected redesign. Nothing was published.

## Results

| Coverage | Result |
| --- | ---: |
| Full portfolio regression | 238 passed |
| Restoration, 3D exhibition and native touch input | 75 passed |
| Short and landscape viewport controls | 6 passed |
| Exact restoration comparison | 9 passed |
| Asset integrity | 508 passed |

The original hero, work, character and contact markup, main stylesheet and navigation match the saved previous version exactly. The exhibition and its isolated integration events are the only retained additions. The eye portal, Roj, generated landscape and scroll-film sequence were removed from the page and runtime. Rejected source and generated assets remain recoverable in `.codex-review/rejected-immersive/`.

## Touch and exhibition checks

Horizontal input was tested with Chromium touch events on emulated 390-, 1024- and 1440-pixel touch devices, independently of screen-width detection. In English, Kurdish and Arabic, swiping advances and reverses the exhibition, snaps to a project, clamps at both ends, and does not open the viewer accidentally. Vertical swipes remain native page scrolling. Right-to-left languages reverse the exhibition arrangement and horizontal gesture direction.

Desktop scroll selection, mouse dragging, opening a project, Escape and focus restoration passed. Reduced-motion visitors receive six ordinary links in a natively swipeable strip. Explicitly enabling and reducing exhibition motion works. WebGL failure exposes the ordinary links.

A real touch-input test found that moving capture from the canvas to its container ended the gesture early. Ignoring the canvas's bubbled capture-loss event fixed it. Compact layouts at 586×678, 844×390 and 1024×600 keep controls inside the viewport; the next button advances exactly one project without scrolling itself into view first.

## Preserved behavior

All 40 gallery sources loaded; all 25 films played. Filters, pagination, inquiries, keyboard interaction, media retry, navigation anchors and six responsive widths passed the existing regression suite. The final tested states had no unexpected browser exceptions, failed HTTP responses or automated axe violations. Automated checks are not a complete accessibility certification.

Both phone numbers remain intact. The exact Kurdish phrase `ئەوەی تری بۆئێمە جێبهێڵە` is preserved. `cinema.mp4` and `studio-reel` remain excluded. Original user media was not changed or moved.

`npm run build` and `git diff --check` passed. Asset integrity was rerun after archiving rejected assets.

## Evidence and limits

Current evidence is in `.codex-review/restored-exhibition/` and `.codex-review/immersive/restored-regression/`. Asset results are in `.codex-review/asset-checks.json`. Previous immersive audit reports describe the rejected version and are historical only.

Tests cover local Chrome, emulated touch devices and the in-app preview. Physical devices, Safari and production hosting remain unverified. `DESIGN.md` and `assets/experience/ASSETS.md` document the retained implementation.
