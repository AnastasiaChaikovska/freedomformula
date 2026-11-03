# Modal

The "Долучитися" contact dialog: a white card with a 4px violet → magenta flame strip along the top, over a night scrim.

- Scrim: `overlay` (night at 62%) with an 8px blur. Card: max `modal-width`, `radius-lg`, padding 36px, `shadow-modal`.
- Header: a chip, a display title, a one-line description. Close: a 40px soft square, top right.
- Needs `role="dialog"`, `aria-modal`, Escape to close and focus moved inside.
