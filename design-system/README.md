# Freedom Formula

> This folder is the design system as code. The live site uses it through `assets/ff.css` and `assets/ff.js`. Open any `components/<Name>/preview.html` in a browser to see the component. Logos are the repository's own `logo.png` and `favicon.png`.

**Формула свободи / Freedom Formula** is a Ukrainian non-profit that creates educational, career and social projects for women. Its first project, **Chaos Formula**, offers free business-profession training for women who need a fresh start.

The identity grows out of the logo: **a violet flame rising from an open box**. Violet is the brand, deep indigo "night" is the box the flame glows in, and a small ember-red spark carries the fire. Chaos Formula is the same system in fire colours.

> Version 2. Version 1 mirrored the site's Stripe-derived styles (Stripe's #635bff purple, navy #0a2540, slate greys, the skewed violet-to-orange mesh wave and pill buttons). This version keeps the structure and copy and replaces the look with one drawn from the logo. Orange and yellow are gone.

## See it on the site

The **Pages** group shows the system applied to the real site with its real Ukrainian copy: **HomePage** (desktop, 1280px), **HomeMobile** (390px) and **ChaosPage** (the fire mode). Start there.

## Symbols: Elements of freedom

The brand's own visual language, and the answer to "what goes in the empty space".

**The idea.** The organisation is called a *formula*, and the site already says it: there is no universal formula for a good life, and every woman finds her own. So freedom gets a periodic table. **Свобода** is the sum, and the elements are **Знання, Практика, Наставництво, Спільнота, Дохід, Воля, Старт** and **Вибір**. "Для когось свобода — це дохід. Для когось — старт і воля." There are no letter abbreviations: each element is its glyph plus its full name.

**The glyphs.** Each element is the logo's open isometric box with its own symbol rising out of it: flame, stacked plates, a cube, steps to a spark, linked dots, a coin stack, an arrow, a sprout, a fork. They share one geometry (64×80 grid, stroke 3, the box in violet and the symbol in magenta, with an ember spark here and there). They live in `assets/Symbols/`, and `.ff-glyph` styles their inline versions.

**The box story.** Four stages of the same box (**closed → the lid lifts → a spark → the flame**) tell any process, from a programme's steps to a woman's path from doubt to choice (`BoxSequence`).

**Where they go:**
1. **Hero:** a 3×3 periodic block of glyph tiles with Свобода glowing in the centre.
2. **Formula band:** a thin night strip between sections: the Свобода glyph, `=`, then the eight element glyphs joined by `+`, with no words.
3. **Cards:** each direction gets its element glyph in place of a number.
4. **Builder:** "Склади свою формулу", an interactive toggle grid with a shareable result. It is the centre of the night section.
5. **Empty corners:** one oversized faint glyph or operator (`+`, `=`) per section, bleeding off the edge (`Watermark`).
6. **Process:** the box sequence.

**Rules.** Свобода is always on the left of "=", never one of the parts. One watermark per section. Symbols are geometry, never faces, mascots or letter codes: the brand speaks to adults ("Ми не рятуємо жінок"). Names follow the page language (Знання / Knowledge).

## Voice

Bilingual: Ukrainian first, English as a full translation of the same page.

- **Plain, adult, respectful.** Short declaratives: "Ми не рятуємо жінок." / "We do not 'rescue' women."
- **Choice, not instruction.** "Жінка сама знає, як хоче жити."
- **One CTA verb:** *Долучитися / Join us*. Secondary: *Дізнатися більше / Learn more*, *Надіслати / Send*.
- Fragments with full stops for rhythm: "Порадою. Контактом. Рекомендацією."
- «…» quotes and the ʼ apostrophe in Ukrainian; “…” in English. No emoji.

## Colour

| Role | Tokens | Rule |
| --- | --- | --- |
| Brand | `violet`, `violet-hover`, `violet-tint`, `violet-200` | Every action, link, number and focus ring. White on violet is 7.2:1. |
| Flame | `magenta`, `glow`, `violet-bright` | Only in gradients: the flame-text word in a headline, the flame-rise glow, quote rules, the check bullet. |
| Night | `night`, `night-raised`, `on-night`, `on-night-muted`, `night-line` | One or two night sections per page (the Formula manifesto, the join block), the footer, the hero mark panel and toasts. |
| Text | `ink` headings, `text` body, `muted` secondary | All pass AA on white and `surface-soft`. |
| Surfaces | `surface`, `surface-soft`, `border`, `border-strong` | White page; lavender-white cards and bands. |
| Spark | `ember` | Tiny doses: live dots and the "new project" chip. |
| Chaos Formula | `fire-red`, `fire-deep`, `fire-ruby`, `fire-night`, `fire-tint`, `fire-border` | They replace violet on project pages. On the main site they appear only on the project banner and nav link. |

Don't use orange, yellow, cyan or navy, and don't use more than one gradient per component.

## Typography

- **Unbounded** (display): wide, geometric and round, with full Cyrillic. Used for H1, H2, card titles, numbers and the wordmark. Weights 600 and 700, light negative tracking.
- **Montserrat** (text), 400 to 700: body, UI and labels.
- One word of the H1 can take `ff-flame-text` (violet → magenta). No two-colour split headlines (that was the Stripe pattern); put the explanation in a `lead` paragraph under the title.
- Sizes: H1 34 → 44 → 52 → 60px; H2 28 → 40px; lead 17 → 19px; body 16px.

## Shape and the box motif

- **Rounded boxes, not pills.** Buttons and inputs use `radius-md` (14px), cards `radius-lg` (24px), big panels `radius-xl` (36px). Pills (`radius-full`) are only for chips and dots.
- **Isometric grid.** Night surfaces carry a faint 30° and 150° line grid (`night-line`), the box's own geometry.
- **Flame rise.** `ff-flame-rise` adds a violet → magenta → glow light rising from the bottom edge of a night block, like the flame from the box.
- **Rotated square bullet.** List bullets are the box turned on its corner, in the flame gradient.

## Depth and motion

- Cards rest flat on `surface-soft`. On hover they turn white with a `violet-200` edge and a violet-tinted `shadow-card-hover`, lifting 3px.
- Primary buttons glow violet (`shadow-glow`), never with a grey drop shadow. Fire buttons glow red (`shadow-ember`).
- Motion is short (150 to 200ms). Live sparks pulse. Everything stops under `prefers-reduced-motion`.

## Iconography and imagery

- **Logo:** the flame-in-box PNG, alone or with a two-line Unbounded wordmark ("Формула / свободи"). On white it is used at 40px; in the hero it sits large inside the night mark panel, where it glows. The logo's small sparks are orange: that is the mark itself, and it is left as is (see "Open questions").
- **Icons:** outline, 24px, round caps, stroke 2.2 (`arrow-right`, `arrow-up-right`, `arrow-left`, `menu`, `close`). Forward actions use `arrow-right`; links that go elsewhere use `arrow-up-right`.
- **Illustration:** `flame-fibers`, lines fanning up from one root with a violet → magenta gradient and an ember spark at the top. It sits under the manifesto line. `radiating-fibers-fire` is the Chaos Formula version.
- No stock photos and no people illustrations.

## Components

There is no JavaScript bundle; `components/bundle.css` holds `ff-*` classes over these tokens. Wrap a page in `class="ff"`. Patterns: Button, LanguageSwitch, Chip, Header, Hero, DirectionCard, ProjectBanner, ChecklistItem, FeatureTile, Quote (quote, callout, pillar), FormField, Modal and Toast; symbols: ElementTile, Formula, FormulaBuilder, BoxSequence and Watermark; plus the layout helpers `ff-container`, `ff-section`, `ff-grid--2/3/4`, `ff-night` and `ff-flame-rise`. Fonts load from Google Fonts at the top of `bundle.css`.

## Language URLs

`/english` is not a file: the language switch rewrites the address bar. The site therefore needs `english.html` (redirect to `/?lang=en`) and `404.html` (catch-all for `*/english`), or GitHub Pages returns a 404 on reload and on shared links. Both were added in the repository on branch `claude/design-system-extraction-0fpkh2`.

## Open questions

- The logo's sparks are orange. If orange is to go everywhere, the mark needs a redraw with ember or magenta sparks.
- There is no SVG logo yet. An SVG of the flame-in-box would sharpen the small header size.

## Provenance

- Source: `AnastasiaChaikovska/freedomformula` at `main@d2b04ad`. Copy and structure come from index.html and chaos_formula.html; the palette was sampled from logo.png; the fire reds come from chaos_formula.html.
- Not carried over: the about page's definition-table layout and the mobile menu dropdown.
- There is no dark theme. Night is a section treatment, not a theme.
