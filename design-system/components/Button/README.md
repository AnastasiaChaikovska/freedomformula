# Button

A rounded box, not a pill (`radius-md`, 14px, an echo of the logo's box), filled with `violet`, with a violet glow on hover.

| Class | Use |
| --- | --- |
| `ff-btn ff-btn--lg` | The hero CTA "Долучитися / Join us". Glows at rest (`shadow-glow`). |
| `ff-btn` | Header and section CTAs. |
| `ff-btn ff-btn--outline` | The secondary action beside a primary one. |
| `ff-btn ff-btn--sm` | Compact contexts (footer). |
| `ff-btn ff-btn--on-night` | White button with violet text, for night sections and the project banner. |
| `ff-btn ff-btn--fire` | Chaos Formula pages only (`fire-deep`, `shadow-ember` on hover). |
| `ff-btn ff-btn--ghost` | "← Головна" back link on project pages. |
| `ff-link` | Inline text action with an up-right arrow that nudges diagonally on hover. |

- At most one `--lg` per screen. Forward actions carry `arrow-right`; links that leave the section carry `arrow-up-right`.
- Focus: a 3px `violet-200` outline, 2px offset.
- White on `violet` is 7.2:1, so any weight works; keep 600.
