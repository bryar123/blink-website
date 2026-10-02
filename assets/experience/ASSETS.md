# Step inside exhibition assets

The exhibition uses six existing portfolio works from `selection.json`. It does not add generated artwork or replace any of the 40 gallery projects. The curved screens display existing thumbnails; only the focused film uses a video preview. Opening a project uses the original full media viewer.

The rejected eye portal, Roj, landscape and scroll-film sequence are no longer loaded. Their generated assets, frame sequence, prior source and provenance were preserved under the ignored `.codex-review/rejected-immersive/` recovery directory. Original user media was not moved or changed.

Three.js 0.186.1 and GSAP 3.15.0 are bundled locally into `experience.js`; no CDN is required. `experience.js.LEGAL.txt` preserves bundled notices. `THREE-LICENSE.txt` contains the Three.js license. GSAP's standard license is linked from its bundled notices and at https://gsap.com/standard-license. Exact versions are in the root package lock.

Edit `src/experience.js` or `selection.json`, then run `npm run build`. The checked-in bundle can be served as a static file. Styles are scoped to the exhibition in `experience.css`.
