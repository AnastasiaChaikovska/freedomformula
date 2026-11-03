# Hero

Split hero: a display headline on the left, and on the right a night "box" panel where the logo flame glows over the isometric grid.

- Headline: `display-hero` in Unbounded, `ink`, with the key word in `ff-flame-text` (violet → magenta).
- Above it, an `ff-chip`; below, a `lead`, then a primary `--lg` and an outline button.
- Mark panel: `ff-mark-panel ff-night ff-flame-rise`, radius `radius-xl`. The flame-rise glow (violet, magenta, glow) comes up from the bottom edge, and a frosted note carries the hero quote.
- Chaos Formula uses `ff-hero--fire` with `ff-mark-panel--fire`.
- On mobile the panel moves below the text and shrinks to a 4:3 strip.
