# Calmer gallery gestures, hover comparison and two new films — October 3, 2026

Latest targeted validation: **29 interaction/playback checks passed** against the production build, plus **171 media-aspect checks** against original files. The build contains 214 files and 45 works (30 films, 15 artworks); the largest deployed asset remains 22.88 MiB.

- Small wheel noise leaves the current work centered. A normal notch, a large delta and an extended momentum burst each settle on exactly one next work. Sampled snap positions move monotonically without overshoot.
- New gestures, immediate reversals, horizontal scrolling in English/Kurdish/Arabic, both gallery exits, and skip navigation interrupting a snap pass.
- Skip advances to the immediately following section and restores its focus. The grid shortcut remains separate.
- Hover reveal works without pressing the mouse, preserves keyboard focus, follows both directions, holds position on exit and cycles only behind the fully visible before image. Keyboard and native touch drag still pass.
- Emulated mobile horizontal swipe and vertical native scrolling remain usable and settle cleanly.
- Both new full films play at 720x1280 in desktop and phone contexts. The supplied originals were verified by SHA-256 and left intact. Representative frames were inspected before naming and selecting thumbnails.
- The refreshed in-app browser was also checked: a deliberate scroll advanced from 1/45 to 2/45; Next section opened the comparison; BLINK — Masala Film played at 720x1280.

Run `node scripts/verify-gallery-motion.cjs` with Playwright installed (or `PLAYWRIGHT_PATH` set to its package path). `BLINK_URL` can override the default local production preview. Evidence: `.codex-review/calm-gallery/checks.json` and `final-preview.png`. Physical phones and Safari remain unverified. No deployment was requested.

The following sections describe preceding validation rounds.

# Source fidelity, interactive concepts and themes — October 3, 2026

Local Chrome verification: **347 integration checks + 32 accessibility and touch checks passed**. A further **181 production-package and no-JavaScript checks passed**, alongside the 28 media checks below. The production build contains 204 files; its largest file is 22.88 MiB. Physical iPhone/Android devices and Safari are not verified.

- Screen sizes: 320x740, 390x844, 768x1024, 1024x768, 1440x1000, 1920x1080, and 844x390; English, Kurdish and Arabic; light and dark themes. No horizontal overflow or overlapping header controls.
- Muted inline mobile/desktop hero playback; simulated autoplay denial and recovery through the visible play control.
- Three after variants cycle only while fully hidden. Mouse drag, native touch input, Home/End keyboard control, explicit reset, decoded image loading and range values pass.
- Exhibition WebGL rendering, color-derived backdrop updates, next/previous navigation, native horizontal swipe, skip arrow and restored focus; motion-off fallback exposes all 43 works and persists after reload.
- Grid density, column clamping, theme persistence, category counts, full video viewer playback and restored focus.
- Automated WCAG 2 A/AA and 2.1 AA axe checks across exhibition, comparison, work, studio and contact at desktop and phone sizes in both themes: zero violations. This is automated coverage, not a complete accessibility certification.
- 28 new exhibition clips verified as H.264, yuv420p, silent and preserving display aspect ratios. High fidelity stills and previews were created from unchanged originals; nothing was upscaled beyond the source dimensions.
- Visual review includes desktop/mobile gallery, comparison directions and both themes. The local preview server serves SVG/font MIME types correctly.

Repeat the browser checks with `node scripts/verify-refinements.cjs`. It requires Playwright with an installed Chrome channel; set `PLAYWRIGHT_PATH` to the package if it is supplied by a bundled runtime, and `BLINK_URL` for a different local server. Build production output with `npm run build:pages`.

Evidence: `.codex-review/refinements/checks.json`, `extras.json`, `media.json`, and responsive screenshots. The images are concept demonstrations, not client outcomes. Exact generation/edit prompts are recorded in `assets/site/citrus-prompts.json`; the built-in image tool's underlying model name is not exposed.

The entries below are historical validation rounds.

# Expanded scrolling portfolio validation

## Interface and branding refinement — October 3, 2026

The current interface uses quiet white and pearl surfaces, fewer visible controls, and original outlined logo artwork exported from the supplied Illustrator file. The brand orange is #FF6B00; small text uses a darker orange for contrast. Header, footer, loading mark and favicon use the new assets.

Browser checks covered desktop, tablet, narrow phone and landscape layouts, including English, Kurdish and Arabic. No horizontal overflow was found. Header controls remain usable at 320 pixels, including a compact symbol on narrow RTL layouts. Navigation, exhibition controls, project video playback, viewer closing and language switching passed.

Motion starts on for new visitors. The settings menu retains an explicit pause preference across reloads. Changing that preference preserves section position. Show more reveals all 43 works in batches of 12 without changing the scroll position or moving existing cards; new cards fade in and keyboard focus stays on the button. Desktop and phone expansion checks measured zero scroll displacement.

The production build contains 141 files; its largest file is 22.88 MiB. JavaScript syntax checks and `git diff --check` passed. The new SVG logos contain outlined paths, without embedded fonts or raster artwork. Physical devices and Safari remain unverified. Earlier sections below describe historical validation rounds and their then-current content counts and controls.

## Desktop zoom and magnetic scrolling — latest validation

Twenty-two wheel checks passed with system reduced motion on and off: individual forward/reverse notches, small trackpad bursts, immediate direction changes, scrollbar settling, both page exits, navigation interrupting a pending snap, and Kurdish/Arabic vertical scrolling. Additional checks cover separated mouse notches, horizontal wheel direction in all three languages, and a 1366x768 laptop viewport. Six short-viewport checks passed. The exhibition keeps continuous movement during input and eases to the selected work when input stops.

Desktop controls are more compact to give the enlarged artwork actual space. Full artwork remains visible within its corrected aspect ratio. Evidence: `.codex-review/magnetic-gallery/`.

## Center-focus refinement — preceding validation

The centered work grows within safe stage bounds; side works smoothly shrink, dim and blur with distance. Eighteen rendered states covering landscape video, portrait artwork, corrected portrait films and the final item were checked at 1440x1000, 390x844 and 844x390. No JavaScript or WebGL shader errors occurred. Screenshots are in `.codex-review/focus-gallery/`. Source media, aspect metadata, and interactions are unchanged.

## Aspect-ratio correction — preceding validation

Saffron, Vista, CLEAR and Automotive detail are 9:16 display-format videos stored as 1920x1080 pixels with an 81:256 sample aspect ratio. Studio motion uses 2304x2160 pixels with a 135:256 sample aspect ratio. The previous conversion incorrectly discarded those ratios, stretching all five derivatives. Full films, previews and thumbnails were regenerated from untouched originals with square pixels and the correct 9:16 display ratio. Catalog dimensions, gallery markup and the bundled exhibition metadata now match.

Current checks: 151 comparisons of catalog/full/preview/thumbnail display ratios against original media, 576 asset and original-file integrity checks, the full 238-check portfolio regression, and 16 browser checks of affected previews and full films on desktop and phone. All passed. Corrected thumbnails and rendered galleries were visually inspected. `scripts/verify-media-aspects.py` provides a repeatable check that includes sample aspect ratio and rotation; it also checks the hero media.

Evidence: `.codex-review/aspect-fix/`, `.codex-review/aspect-audit.json`, `.codex-review/asset-checks.json`, and `.codex-review/immersive/aspect-regression/`. The expansion checks below are the preceding validation round; motion, swipe and rendering interaction code were unchanged by this media correction.

## Prior expansion validation

Checked on October 3, 2026. The restored page design remains intact; the Step inside exhibition now covers all 40 works (25 films and 15 posters/artworks). Primary Work links enter the exhibition; the original gallery remains one click away.

## Current checks

| Coverage | Result |
| --- | ---: |
| Full portfolio and media regression | 238 passed |
| Complete scroll selection, restoration and native touch input | 109 passed |
| Motion defaults, persistence, filtering, work selection, texture allocation, responsive accessibility and fallbacks | 100 passed |
| Short and landscape viewport controls | 6 passed |
| Preserved sections, base stylesheet and navigation styling | 6 comparisons passed |
| Cloudflare production package | 128 files; largest 22.88 MiB |

The 238-check regression opened all 40 media sources and played all 25 films. Filters, pagination, inquiry drafts, media retry, viewer keyboard focus, hero scenes, studio tabs and layouts at six widths in English, Kurdish and Arabic passed. The ordinary hero/gallery still respect system reduced motion; the no-video test explicitly pauses the exhibition.

Native Chromium touch input verified horizontal swiping, reverse swiping, boundaries and native vertical scrolling at 390-, 1024- and 1440-pixel widths in all three languages. Mouse dragging and keyboard project navigation also passed. These are emulated device tests, not physical-device testing.

Fresh visitors start with exhibition motion enabled, including when system reduced motion is requested. Explicit off/on choices survive reload. All 40 projects are reachable through scrolling and the native selector; filters expose 25 films and 15 posters. Static links cover every work when motion, JavaScript or WebGL is unavailable. Data-saving mode keeps 3D active without fetching preview videos.

Seven recycled screens avoid overlaps around a forty-item circle. GPU texture allocation stayed bounded while visiting every project. Portraits are fitted between the controls. Responsive checks caught and fixed Kurdish filter overflow at 320 pixels. Compact views at 586x678, 844x390 and 1024x600 retain usable controls. Final tested states had no unexpected browser exceptions, broken assets or automated axe violations. Automated accessibility checks are not certification.

The exact Kurdish contact correction, both phone numbers and the exclusion of cinema.mp4/studio-reel remain intact. No user source media changed. The hero, original work grid, studio, character and contact content, base stylesheet and navigation styling were compared against the restored version; only the intended primary Work destinations differ.

## Evidence

Current receipts and screenshots: `.codex-review/expanded-exhibition/` and `.codex-review/immersive/expanded-regression/`. Short-viewport receipts: `.codex-review/restored-exhibition/short-viewport.json`. Prior restoration and immersive reports describe earlier versions.

`npm run build:pages` and `git diff --check` passed. The deployment target remains exactly https://blink-website-1qs.pages.dev/. Physical devices and Safari are not verified.

The 109-check exhibition and native-touch suite also passed after the focus refinement, including all 40 scroll positions and English/Kurdish/Arabic touch navigation.

The 109-check gallery/touch suite passed with magnetic scrolling enabled, retaining all 40 scroll positions and native swipes on phones, tablets and touch laptops.
