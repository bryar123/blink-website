# Cloudflare Pages

Production must stay at **https://blink-website-1qs.pages.dev/**. Printed business-card QR codes use this address. Keep the existing `blink-website` Pages project and its production branch, `main`.

Cloudflare build settings:

- Build command: `npm run build:pages`
- Build output directory: `dist`
- Root directory: repository root

`build:pages` bundles the exhibition and copies only website assets into `dist`. All 43 works remain available. The original media stays in the repository, outside the generated deployment directory. The build fails with an actionable error if a served file exceeds Cloudflare's 25 MiB limit.

The served Toyota derivative retains 1880×1080 resolution, its complete 78.4-second duration and audio, at 23,986,577 bytes. Its original `assets/Toyota_web.mp4` remains untouched. Never point the deployment output at the whole repository: unused source videos can exceed the Pages limit.

To check locally, run `npm ci` followed by `npm run build:pages`. The `dist` directory is generated and ignored by Git. Push reviewed source changes to `main` to update the existing production URL.

Files in `public/` (404 page, privacy page, `robots.txt`, `sitemap.xml`, `_headers`, `_redirects`) are copied to the root of `dist`. The build also writes `dist/ku/index.html` and `dist/ar/index.html` so each language has its own address; `_redirects` serves `/ku/assets/*` and `/ar/assets/*` from `/assets`.

Visit statistics: in the Cloudflare dashboard open the `blink-website` Pages project, then Metrics, and enable Web Analytics. No code change is needed, and the Content-Security-Policy in `public/_headers` already allows its script.
