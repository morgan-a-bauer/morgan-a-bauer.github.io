# Portfolio Design System & UI Specification: "Academic x Streetwear" (Simplified)

## 1. Design Philosophy & Vision

The core philosophy of this portfolio is **Elegance Through Simplicity**.

It bridges the precision of robotics and data science with the relaxed, understated authority of modern technical streetwear and academic heritage. The design intentionality comes entirely from **typography, generous white space, strong spatial layout, and high-contrast color accents**—without relying on background illustrations, schematics, icons, or decorative clutter.

### Key Principles:

- **Clean & Editorial:** Layouts feel like a premium print publication or high-end design journal.
- **Uncluttered & Purposeful:** Every element on the page serves a functional or structural role. Zero ambient graphics or background noise.
- **Subtle Energy:** Academic groundedness (rich greens, warm paper tones) balanced by athletic high-contrast accents (vintage burnt orange) used exclusively for key focus points.
- **Authentic Identity:** Showcases technical authority in robotics, sports analytics, and systems engineering through polished project presentation rather than visual gimmicks.

---

## 2. Color Palette & Utility System

The palette uses warm, natural neutrals for base surfaces to avoid clinical gray/white, grounded by deep academic green, with high-visibility accent tones inspired by vintage athletic apparel.

| Role                     | Color Name            | Hex Code  | Usage                                                         |
| :----------------------- | :-------------------- | :-------- | :------------------------------------------------------------ |
| **Primary Background**   | Cream / Vintage Paper | `#F9F7F1` | Main page background, subtle warm paper feel                  |
| **Secondary Background** | Pure Surface          | `#FFFFFF` | Project cards, code blocks, high-contrast containers          |
| **Primary Text**         | Deep Slate Ink        | `#1A211E` | Headings, body copy, high legibility primary content          |
| **Secondary Text**       | Muted Charcoal        | `#4A5550` | Subtitles, metadata, dates, secondary descriptions            |
| **Academic Brand**       | Deep Ivy Green        | `#1B4332` | Header background, main brand accents, major section titles   |
| **Athletic Accent**      | Burnt Orange (Rust)   | `#BF5700` | Hover states, active tabs, CTA buttons, key highlight metrics |
| **Border / Rule**        | Warm Sand Border      | `#E2DDD0` | Hairline dividers, card outlines, subtle grid borders         |

---

## 3. Typography & Hierarchy

A hybrid typographic pairing that combines bold, structural headline type with ultra-clean, modern geometric sans-serif body text.

### Font Families:

- **Display / Headings:** `Oswald` or `Cinzel` (Uppercase, strong vertical rhythm, structured athletic/heritage feel).
- **Body & Interface:** `Inter` or `Plus Jakarta Sans` (Clean, balanced, high legibility for technical writeups).
- **Code & Tech Stack:** `Fira Code` or `JetBrains Mono` (Monospaced, precise, used for metrics, tags, and code blocks).

### Scale & Hierarchy:

```css
h1 {
  font-family: "Oswald", sans-serif;
  font-size: 3.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #1a211e;
}

h2 {
  font-family: "Oswald", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #1b4332;
  border-bottom: 2px solid #1b4332;
  padding-bottom: 0.5rem;
}

h3 {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a211e;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: #4a5550;
}

.mono-tag {
  font-family: "Fira Code", monospace;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  color: #1b4332;
}
```

---

## 4. Structure & Layout Architecture

### Grid System

- **12-Column Responsive Grid** with generous margins (`padding: 4rem 8rem` on desktop).
- **Asymmetric Off-Center Headers:** Big left-aligned typography paired with wide right-aligned content areas to mirror editorial design layouts.
- **Strict Structural Whitespace:** Let margins create section breaks rather than horizontal line rules or visual background blocks.

### Component Styling Strategy

#### 1. Header / Navigation

- Fixed or sticky minimalist bar.
- Solid background (`#F9F7F1`) with a ultra-thin bottom border (`#E2DDD0`).
- Left: Monospace initials or clean text logo (`M. BAUER // ROBOTICS & ANALYTICS`).
- Right: Simple horizontal text nav (`PROJECTS`, `RESEARCH`, `ABOUT`, `CONTACT`) styled in `Oswald` with subtle burnt orange hover underlines.

#### 2. Hero Section

- Clean, high-impact text banner.
- Large typographic header stating domain expertise (e.g., _ROBOTICS RESEARCHER & SPORTS ANALYTICS ENGINEER_).
- 2–3 short paragraphs establishing technical depth (multi-robot systems, trajectory planning, front-office analytics) written with concise, direct language.

#### 3. Project Cards (Grid Layout)

- **Container:** High-contrast white background (`#FFFFFF`), 1px solid border (`#E2DDD0`), zero drop-shadows or soft glow effects. Hard, crisp edges.
- **Top Section:** Clean project thumbnail or interactive clean visual demo (no decorative overlay; real data rendering only).
- **Content Section:**
  - Title (`Oswald`, bold).
  - Domain Category Tag (`Fira Code`, uppercase, e.g., `[FOOTBALL ANALYTICS]`, `[ROBOTICS]`).
  - Executive Summary (2-3 sentences max).
  - Tech Stack Badges: Rectangular pill tags with `#F9F7F1` background, `#1B4332` border/text, sans-serif mono font.
- **Interaction:** On hover, the container border shifts to `#BF5700` (Athletic Burnt Orange) with a crisp 2px offset. No floating elevation animations.

#### 4. Research & Writing List (Minimalist Editorial Table)

- A clean, structured list view for academic papers, writeups, and technical documentation.
- **Columns:** `YEAR` | `TITLE & DOMAIN` | `ORGANIZATION / PLATFORM` | `LINK`
- Clean hairline top/bottom borders (`#E2DDD0`).
- High readability and instantaneous fast scanability.

---

## 5. Interaction Patterns & Micro-Interactions

- **Hover States:** Crisp color color swaps (e.g., green text to burnt orange accent text). Avoid soft web-like drop shadows or blur filters.
- **Transitions:** Fast, snappy CSS transitions (`transition: all 0.15s ease-in-out`).
- **Data Presentation:** Graphs and tracking figures should use high-contrast monochromatic lines (Deep Ivy Green, Charcoal, Burnt Orange) over clean white backgrounds to maintain the editorial standard.

---

## 6. Prompting Instructions for Claude UI Generation

When asking Claude to generate components or page templates based on this spec, provide the following prompt framing:

> "Build a [React/HTML/Tailwind] component for my portfolio following the **Academic x Streetwear (Simplified)** design specification. Use a warm paper background (`#F9F7F1`), deep ivy green (`#1B4332`), and energetic athletic burnt orange (`#BF5700`) accents. Focus entirely on strong typographic hierarchy (`Oswald` + `Inter` + `Fira Code`), sharp border structures, and ample white space. **Do NOT add background images, ambient graphics, schematics, icons, or soft box shadows.** The design must feel clean, editorial, and precise."
