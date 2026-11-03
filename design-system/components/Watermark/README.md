# Watermark

**This is what goes in the empty space.** Fill an empty corner with one oversized, near-invisible symbol: an element glyph (`ff-wm`, 300px, in `violet-tint`, or 9% violet on night) or a formula operator (`ff-op-wm`: a 280px Unbounded `+`, `=` or `×`).

- One per section, bleeding off an edge (right or left), behind the content (`z-index: 0`).
- Match it to the section: Зн behind "Що ми робимо", Сп behind "Для кого", Ст behind "Цінності", `=` behind the formula section, the lifting box behind "Долучитися".
- Never on cards and never behind body text that it would cross at more than 1.1:1 contrast. It is texture, not a picture.
