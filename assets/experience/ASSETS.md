# Step inside exhibition assets

The exhibition presents all 40 approved portfolio works: 25 films and 15 posters/artworks. `selection.json` defines the six opening works; `assets/portfolio.json` supplies current metadata and every remaining work. It adds no generated artwork. Opening a project uses the existing full media viewer.

The camera-relative curved arrangement reuses seven screens. Only nine nearby poster textures are cached, with obsolete loads disposed. A single focused video uses its silent preview; full films load on demand. Data-saving mode uses still textures. Portraits fit the space between the controls without cropping.

Motion starts on, including for a system reduced-motion preference, at the owner's explicit request. The motion control saves a visitor's deliberate choice in `blink-exhibition-motion`. Turning it off restores ordinary links to all works, with native horizontal swiping on touch devices. Unsupported WebGL and disabled JavaScript retain those links. The static markup is maintained by `scripts/build-gallery.py`.

All / Films / Posters filters, a native work selector, previous/next buttons, horizontal swiping, mouse dragging, and vertical scrolling browse the collection. Controls are localized in English, Kurdish and Arabic. Horizontal input and screen arrangement follow the page's reading direction.

The rejected eye portal, Roj, landscape and scroll-film sequence are not loaded. Their recovery files remain in the ignored `.codex-review/rejected-immersive/` directory. `cinema.mp4` and its derivatives remain excluded.

Build with `npm run build`; package the public website with `npm run build:pages`. The production address remains exactly https://blink-website-1qs.pages.dev/.
