# Personal Archive Website (`misy_webdev`)

A static, zero-dependency personal portfolio, writings archive, and curriculum vitae website built with semantic **HTML5**, modern **CSS3**, **Vanilla JavaScript**, and **Google Fonts** (`Host Grotesk` & `EB Garamond`).

---

## 1. Project Overview

This site serves as an all-in-one personal hub showcasing **selected projects**, a **personal note**, **essays & field notes**, a **printable curriculum vitae**, and **contact channels**—authored without build tools, bundlers, or frontend frameworks.

### Approved Technical & Creative Decisions

- **Tech Stack:** HTML5 + CSS3 + lightweight Vanilla JavaScript + Google Fonts (no build step, no external JS dependencies).
- **Color Direction:** *Light Gallery + Deep Forest Contrast* — warm stone-gray canvas (`#ECEAE3`) with Deep Forest (`#1B3A2E`) inverted bands and rationed Voltage Lime (`#E2FF70`) interactive accents.
- **Structure:** Single-page personal hub split cleanly across `index.html`, `styles.css`, and `script.js`.
- **Content & Visuals:** Custom Swiss risograph-style editorial illustrations (`assets/*.png`) paired with realistic placeholder copy (`Deniz Kaya`) marked for easy personalization.

---

## 2. Design Synthesis (Combining Three Design Prompts)

The visual system harmonizes three distinct design references into a single cohesive identity while avoiding clashing typefaces, competing palettes, or inconsistent surface depth:

| Source Prompt | Core Aesthetic | Elements Adopted |
| :--- | :--- | :--- |
| **Prompt 1 — Deep Forest Editorial** | Quiet, structured editorial landing page (`#1B3A2E`, `Host Grotesk` + `EB Garamond`) | Deep Forest inverted bands (Marquee, About pane, Contact/Footer), two-font pairing (`Host Grotesk` + `EB Garamond`), roomy section pacing, mixed-height 4-project gallery, 6-icon stack strip, 3-cell contact grid + compact message form, and full-width oversized footer wordmark. |
| **Prompt 2 — Bold Retro-Modernism** | High-impact brutalist editorial layout, tight display type, solid offset shadows | Tight negative-tracked uppercase display headlines, sharp `0px` corners with solid offset shadows (`10px`–`12px`, zero blurred drop shadows), grayscale-to-color image hover reveals (`450ms`), two-pane editorial split (`About`), subtle background watermarks (`ARCHIVE`, `02`), and infinite scrolling marquee. |
| **Prompt 3 — Twomuch.Studio** | Light gallery-plate canvas (`#ECEAE3`), floating pill UI, rationed Voltage Lime | Warm gallery-plate canvas & chalk surfaces, floating pill navigation bar with status pip & expandable drawer, `9999px` pill shape grammar strictly for interactive controls/tags, hairline studio index rows for Writings, ghost-link lime hover flashes, and strict rationing of `#E2FF70`. |

---

## 3. Design System & Tokens

All tokens are defined in `:root` at the top of [styles.css](styles.css).

### Color Palette

| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Canvas** | `--ground-light` | `#ECEAE3` | Page background and light sections |
| **Elevated Surface** | `--surface-chalk` | `#F6F5F0` | Nav pill, tags, filter buttons, reader modal, right About pane |
| **Pure Highlight** | `--surface-paper` | `#FFFFFF` | Primary button hover fill |
| **Muted Surface** | `--surface-concrete` | `#DFDDD5` | Neutral pill hover/pressed state |
| **Primary Ink** | `--ink-primary` | `#141414` | Headings, primary copy, borders, solid offset shadows |
| **Secondary Ink** | `--ink-secondary` | `#4E4D49` | Descriptions, metadata, eyebrows, years |
| **Light Hairline** | `--hairline-light` | `#CFCBC2` | 1px dividers between index/CV rows |
| **Inverted Ground** | `--ground-forest` | `#1B3A2E` | Marquee, nav drawer, left About pane, Contact & Footer |
| **Inverted Surface** | `--surface-forest` | `#224134` | Contact cells and form inputs on Deep Forest |
| **Inverted Hairline** | `--hairline-forest` | `#345347` | 1px dividers inside Deep Forest bands |
| **Inverted Ink** | `--ink-on-forest` | `#FAF9F5` | Primary text on Deep Forest |
| **Muted Inverted Ink** | `--ink-muted-forest` | `#D6DED9` | Secondary copy and labels on Deep Forest |
| **Rationed Accent** | `--accent-lime` | `#E2FF70` | Primary pill buttons, active filters, status pips, hover flashes, dark-band labels |

> **Contrast Rule:** `--accent-lime` (`#E2FF70`) is **never** used as text on light grounds. On light surfaces it is only used as a fill paired with `--ink-primary` (`#141414`).

### Typography

- **Display, UI & Metadata (`--font-sans`):** `Host Grotesk` (weights `400`, `500`, `600`, `700`, `800`) with tight negative tracking (`-0.02em` to `-0.055em`) and `tabular-nums` for dates, counters, and clocks.
- **Editorial Prose (`--font-serif`):** `EB Garamond` (weights `400`–`500`, regular & italic) reserved for the hero italic accent, bio/personal note, project summaries, CV outcomes, and long-form modal reading.

### Shape, Depth & Accessibility

- **Shape Discipline:** `0px` sharp corners (`--radius-sharp`) for structural frames, split panes, inputs, and modal shells; `9999px` full pills (`--radius-pill`) strictly for interactive controls, status pips, counter badges, and category tags.
- **No Blurred Shadows:** Elevation is expressed exclusively through 1px–2px crisp borders and solid offset shadows (`10px 10px 0` / `12px 12px 0`).
- **Responsive Breakpoints:** `1024px` (stack strip 6→3 cols), `860px` (mobile nav drawer only, single-column hero/gallery/about/CV/contact), and `600px` (compact offset shadows, 2-col stack strip, stacked form/footer).
- **Accessibility & Print:** Includes a keyboard skip link, `:focus-visible` outlines adapted for light and dark grounds, `prefers-reduced-motion: reduce` support (pauses marquee and transitions), and a dedicated `@media print` stylesheet for clean CV export.

---

## 4. Directory Structure

```text
misy_webdev/
├── index.html          # Main semantic HTML5 page (8 sections + <dialog> reader)
├── styles.css            # Design tokens, layout, components, responsive & print CSS
├── script.js             # ARCHIVE_ITEMS data store & interactive behaviors
├── README.md             # Project documentation (this file)
├── assets/               # Custom Swiss risograph editorial illustrations
│   ├── hero-editorial.png    # 896×1200  (3:4 portrait — Hero plate)
│   ├── mascot-fox.png        # 512×512   (1:1 square — Minimal fox mascot & browser favicon)
│   ├── project-01.png        # 1264×848  (3:2 landscape — Meridian Spatial Atlas)
│   ├── project-02.png        # 896×1200  (3:4 portrait — Monograph 04 Type System)
│   ├── project-03.png        # 1024×1024 (1:1 square — Forma Tactile Synth)
│   └── project-04.png        # 1376×768  (16:9 landscape — Kinetik Transit Observatory)
├── a.html                # Standalone HTML/CSS practice file (untouched)
└── b.html                # Standalone CSS Flexbox centering practice file (untouched)
```

---

## 5. Page Architecture & Interactive Features

### Sections in `index.html`

1. **Floating Pill Navigation & Drawer (`.site-nav-wrap`)** — Fixed top pill with wordmark, desktop section links, and lime `Menu +` toggle that reveals a Deep Forest drawer with section index, availability indicator, live local clock, and one-click email copy.
2. **Hero (`#top`)** — Full-screen height (`100dvh`) 12-column editorial split with `ARCHIVE` background watermark, display headline with italic serif accent, bio lead, dual pill CTAs, location caption, and `3:4` framed hero plate.
3. **Infinite Marquee (`.marquee-band`)** — Deep Forest ticker with lime dot separators (`38s` linear loop; pauses on hover and stops under `prefers-reduced-motion`).
4. **Selected Projects (`#projects`)** — Asymmetric 12-column mixed-height gallery (4 projects) with category filter pills (`All`, `Engineering`, `Editorial`, `Visual`) and grayscale-to-color hover transitions.
5. **Personal Note / About (`#about`)** — Two-pane split (`38fr / 62fr`) pairing a Deep Forest quote, framed minimal fox mascot emblem (`assets/mascot-fox.png`, also used as the page favicon), and circular arrow CTA on the left with a three-sentence personal bio, `02` watermark, and 3-column stats on the right.
6. **Writings & Essays (`#writings`)** — Hairline-separated studio index rows (5 essays) with topic filter pills (`All`, `Essay`, `Engineering`, `Design`) and lime hover `Read →` badges.
7. **Curriculum Vitae & Core Instruments (`#cv`)** — Sticky left summary with `Print / Save CV` trigger, chronological Experience and Education ledgers, and a 6-item inline SVG instruments strip.
8. **Contact & Architectural Footer (`#contact`)** — Deep Forest band with a 3-cell contact grid (direct email + copy button, clickable GitHub/LinkedIn/Instagram/Read.cv links, location/status), validated message form, 3-column footer directory, full-width `DENIZ KAYA` wordmark, and back-to-top pill.
9. **Editorial Reader Modal (`<dialog id="reader-modal">`)** — Native HTML `<dialog>` rendering full project case studies (image, specs ledger, narrative, pullquote) and full essays.

### JavaScript Modules in `script.js`

| Function | Responsibility |
| :--- | :--- |
| `ARCHIVE_ITEMS` | Central content object holding 4 project case studies (`project-01`..`04`) and 5 essays (`writing-01`..`05`). |
| `initNavDrawer()` | Toggles `#nav-drawer` (`hidden` & `aria-expanded`), updates button label/icon, closes on link click / outside click / `Escape`, and ticks `#drawer-clock` every second (`en-GB` 24-hour format). |
| `initScrollSpy()` | Uses `IntersectionObserver` (`rootMargin: '-35% 0px -55% 0px'`) to highlight the active desktop nav link. |
| `initFilters()` | Powers project and writing category filters (`aria-pressed`, `hidden`, and `.is-filtered` 2-column grid reflow on projects). |
| `initReaderModal()` | Handles `[data-open-item]` clicks via event delegation, builds modal DOM safely with `textContent`, opens native `<dialog>`, supports backdrop click & `Escape`, and restores focus to the trigger element. |
| `initContact()` | Implements `[data-copy-email]` with `navigator.clipboard` + textarea fallback, client-side form validation (`aria-invalid`), and generates a pre-filled `mailto:` link on submit (no backend required). |
| `initPrintCV()` | Binds `#print-cv` to `window.print()`. |
| `initFoxRunner()` | Animates the detailed geometric SVG fox from left to right strictly across the `#projects` → `#about` scroll range (with no page-length progress bar), flipping left when scrolling up and exiting cleanly off the right edge after `02 Personal Note`. |
| `initFoxPetting()` | Enables silent, visual-only hover/stroke/tap petting on all `[data-pettable-fox]` elements (Personal Note emblem, footer colophon stamp, and running fox) with wiggle/happy-eye feedback and floating geometric lime/cream particles. |

---

## 6. Customization Guide

1. **Personal Identity, Bio, CV & Links:**
   - Search for `<!-- EDIT:` comments in [index.html](index.html) to replace the placeholder `Deniz Kaya` name, page `<title>` / `<meta description>`, hero headline & bio, location, Personal Note prose, CV roles/education, social URLs, and footer wordmark.
   - Update the email address in **both** [index.html](index.html) (drawer, contact cell, footer link) **and** `EMAIL_ADDRESS` in [script.js](script.js) (line 522) so the Copy Email button and form `mailto:` handoff use your real address.
2. **Projects & Writings:**
   - Update card/row previews in [index.html](index.html) (`data-category` and `data-open-item="project-XX"` / `"writing-XX"`).
   - Update or add matching entries inside `ARCHIVE_ITEMS` at the top of [script.js](script.js).
3. **Illustrations / Images:**
   - Replace files in `assets/` while preserving the target aspect ratios (`3:4` for hero & project-02, `3:2` for project-01, `1:1` for project-03, `16:9` for project-04), or adjust the `.project-frame--*` modifier classes in [index.html](index.html).

---

## 7. Local Preview

Open directly in a browser by double-clicking [index.html](index.html), or serve locally from this directory:

```bash
python3 -m http.server 8765
```

Then visit `http://localhost:8765/`.

---

## 8. Project Status & Notes

- **Placeholder Content:** Currently populated with placeholder identity (`Deniz Kaya`) and sample projects/essays ready to be swapped for your own work.
- **Static Checks Passed:** JavaScript syntax (`node --check`), balanced CSS braces, unique HTML IDs, asset file presence, and 1:1 `data-open-item` to `ARCHIVE_ITEMS` mapping were verified during build.
- **Recommended Next Step:** Preview in a desktop (`1440×900`) and mobile (`390×844`) browser viewport to inspect Google Fonts rendering, test modal/filter/drawer interactions, and verify the `@media print` CV output.
