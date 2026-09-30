# BLINK — film studio

## Direction

The footage is the opening statement. A full-viewport film stage uses a single left-aligned headline, a showreel action, three selectable previews, and a pause control. Neutral gallery surfaces give the actual work its color. Orange is reserved for interaction emphasis and contact actions.

## Reference decisions

- [Impeccable](https://github.com/pbakaus/impeccable): distill repeated presentation into a shorter path from watching work to making contact. Keep existing behavior intact.
- [Awesome DESIGN.md](https://github.com/voltagent/awesome-design-md): its Runway reference informed media-led hierarchy and readable viewing/reading surfaces. This is inspiration, not an implementation of Runway's identity.
- [Taste Skill](https://github.com/Leonxlnx/taste-skill): the existing-project redesign guidance informed clearer interaction states, responsive proportions, active navigation, and removal of repetitive sections.
- [Microsoft Playwright CLI](https://github.com/microsoft/playwright-cli): used for browser interaction checks, mobile sizing, screenshots, and playback verification.
- The installed frontend-design skill informed a single characteristic opening moment, quieter labels, and removal of decorative project numbering.

## Tokens and layout

- Film ink `#181a19`; gallery white `#f4f4f1`; studio gray `#e6e8e1`; orange `#ed643d`; body gray `#5b615b`.
- Archivo display and Space Grotesk body. Noto Kufi Arabic for Arabic and Kurdish. Body copy stays comfortably under 65 characters per line.
- Controls: 5–6 px corners, artwork: 8 px, form surface: 10 px. Circular project-open and viewer controls signify viewing actions.
- Header: 76 px desktop, 72 px mobile, with active-location indication. Dark over footage; light over content.
- Gallery keeps intrinsic media proportions. Capability tabs consolidate five repeated sections into one accessible chapter.
- One entrance animation on the opening title; user-triggered feedback elsewhere. Reduced-motion preferences disable decorative motion.

## Behavior to preserve

Muted viewport autoplay, independent pause/resume, eased wheel scrolling, native touch momentum, modal viewing with sound, keyboard dismissal and restored focus, category filters, three languages, and both phone numbers.

Project inquiries retain the chosen project's title. The form prepares an email draft for review; it does not send messages or claim a submission was made. Viewer loading failures explain recovery without exposing implementation details.

## Verification

Check desktop, tablet, phone, all three languages, hero scene switching, pause/resume, studio keyboard tabs, filter states, viewer navigation/error states, inquiry context, and overflow. Keep all interactive targets at least 44 px high.
