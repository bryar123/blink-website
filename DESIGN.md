# BLINK — film studio

## Direction

The footage is the opening statement. A full-viewport film stage opens with JAUNT, with selectable character and automotive previews. A clear work action leads into the portfolio. Neutral gallery surfaces give the actual work its color. Orange is reserved for interaction emphasis and contact actions.

The previous page design is restored. Only the “Step inside” curved exhibition is retained from the immersive experiment. It sits before Selected Work and shows six real portfolio projects. Scroll vertically through it, swipe horizontally on a touchscreen, or drag with a mouse. The original hero, navigation, Haji character chapter, gallery and contact section retain their previous design.

## Reference decisions

- [Impeccable](https://github.com/pbakaus/impeccable): distill repeated presentation into a shorter path from watching work to making contact. Keep existing behavior intact.
- [Awesome DESIGN.md](https://github.com/voltagent/awesome-design-md): its Runway reference informed media-led hierarchy and readable viewing/reading surfaces. This is inspiration, not an implementation of Runway's identity.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill): the existing-project redesign guidance informed clearer interaction states, responsive proportions, active navigation, and removal of repetitive sections.
- [Microsoft Playwright CLI](https://github.com/microsoft/playwright-cli): used for browser interaction checks, mobile sizing, screenshots, and playback verification.
- The installed frontend-design skill informed a single characteristic opening moment, quieter labels, and removal of decorative project numbering.

## Tokens and layout

- Film ink `#181a19`; gallery white `#f4f4f1`; studio gray `#e6e8e1`; orange `#ed643d`; body gray `#5b615b`.
- Archivo display and Space Grotesk body. Noto Kufi Arabic for Arabic and Kurdish. Fonts are self-hosted in `assets/fonts`, with their licenses; there are no third-party font requests. Body copy stays comfortably under 65 characters per line.
- Controls: 5–6 px corners, artwork: 8 px, form surface: 10 px. Circular project-open and viewer controls signify viewing actions.
- Header: 76 px desktop, 72 px mobile, with active-location indication. Dark over footage; light over content.
- Two featured landscape films introduce the gallery. The remaining work keeps its intrinsic proportions, including complete, uncropped posters. Quiet format and duration labels distinguish films from artwork.
- Filters cover all work, films, posters, products, VFX, and characters. The initial selection shows 12 works; subsequent fixed batches keep all 40 accessible without moving earlier columns. The viewer navigates the entire selected category. A nearby control pauses or resumes previews.
- Capability tabs consolidate four repeated sections into one accessible chapter.
- The exhibition camera follows scrolling and horizontal dragging. Swipes snap to a project; vertical gestures remain native page scrolling. Gesture direction follows the page language. Reduced-motion and data-saving preferences start with ordinary image links that also support native horizontal swiping on touch devices.

## Behavior to preserve

Muted viewport previews, independent pause/resume, eased wheel scrolling, native touch momentum, modal viewing with sound, keyboard dismissal and restored focus, category filters, three languages, and both phone numbers. Reduced-motion and data-saving preferences start with still posters and an explicit play option.

Project inquiries retain the chosen project's title and let visitors remove that reference. Changing a reference or form field invalidates any older draft. The form prepares an email draft for review; it does not send messages or claim a submission was made. Viewer loading failures explain recovery and offer a retry. Dialog focus stays inside the viewer; Escape restores the triggering link. Language and studio controls support keyboard navigation in both reading directions.

## Verification

Check desktop, tablet, phone, all three languages, hero scene switching, pause/resume, studio keyboard tabs, filter states, viewer navigation/error states, inquiry context, and overflow. Keep all interactive targets at least 44 px high.

## Portfolio media

`assets/portfolio.json` is the catalog: original source, editorial title, categories, verified dimensions, duration, thumbnail, preview, and full viewer file. It contains 40 works: 25 films and 15 still artworks. The October additions comprise 15 films and 9 artworks; no original source files were changed.

`python scripts/build-gallery.py` renders the catalog into the marked gallery region in `index.html`. The delivered page remains a standalone static site, with no runtime catalog request or server framework dependency. Ordinary media links remain usable when JavaScript is unavailable.

## Exhibition implementation

Run `npm ci` and `npm run build` after changing `src/experience.js`. The checked-in bundle in `assets/experience/experience.js` includes Three.js and GSAP; serving the site requires no package installation or CDN. Styling lives in `assets/experience/experience.css`. `selection.json` chooses six existing catalog projects; rebuild after changing it.

The single WebGL exhibition renders only near the viewport. Background tabs and an open media viewer suspend rendering. Device pixel ratio is capped, one exhibition video preview plays at a time, and full films remain on demand. Context loss and unsupported WebGL expose ordinary links. Reduced-motion visitors start without a WebGL context. A control inside the exhibition enables or reduces its motion independently.

Pointer gestures work independently of viewport width, including tablets and touch laptops. Horizontal gestures capture the pointer after determining its direction; vertical gestures remain browser-controlled. Tap and drag are distinguished to prevent a swipe from opening a project. The eye portal, scroll-film sequence, generated landscape and Roj are no longer part of the page or runtime.

`scripts/prepare-media.py` creates derivatives with Pillow and FFmpeg; pass `--ffmpeg` when the executable is not on PATH. Its default encoder is libx264; `--encoder h264_nvenc` supports NVIDIA builds. Full films use H.264/AAC, yuv420p and MP4 fast-start. Card previews are separate silent five-second clips; full films load only in the viewer. WebP thumbnails preserve source proportions, and poster viewers load the original artwork. A separate eight-second hero excerpt avoids end-card typography behind the page headline. Rebuild existing outputs only with `--force`.

Source inspection corrected four older landscape films that had been marked as portrait. The former “Baking Film” is CLEAR home care, and the Toyota source is 1880 × 1080, so its gallery title no longer claims 4K.

Local verification on October 3, 2026: every gallery film was played in Chrome; all 40 viewer sources, category counts, pagination, focus restoration, inquiry drafts, hero scenes, and studio keyboard tabs were checked. Layouts were exercised at 320, 390, 768, 1024, 1440, and 1920 pixels in English, Kurdish, and Arabic. Reduced-motion browsing fetched no video until explicit playback. Local checks do not publish the site.

The removed `cinema.mp4` film and its derived reel are excluded from the page and media catalog. Its hero preview, watch action, and studio tab were removed together; the 40 gallery works are unaffected. Source and derivative files remain on disk.

Optimized interface and section imagery lives in `assets/site`; the originals remain untouched. Off-screen images load lazily. Gallery video cards have an explicit still image and intrinsic dimensions before a preview loads. Capability links lead directly to matching gallery filters.

The restored page and retained exhibition were checked with the full portfolio regression and dedicated touch-input tests. See `VALIDATION.md` for current results and verification scope.
