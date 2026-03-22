# BeagleHub Architecture

## Overview

BeagleHub is a Next.js 14 application using the App Router, TypeScript, Tailwind CSS, and MDX. It is a community hub for beagle lovers.

---

## Routing Structure

All routes live under `app/` and use the Next.js 14 App Router file-system conventions.

```
app/
├── layout.tsx          # Root layout — sets metadata, global CSS, font vars
├── page.tsx            # Home page (/)
├── globals.css         # Tailwind base + custom CSS vars
└── mdx-components.tsx  # MDX component overrides (used by @next/mdx)
```

Future route segments should follow this pattern:

| Segment            | Path                  | Purpose                       |
| ------------------ | --------------------- | ----------------------------- |
| `app/(marketing)/` | `/`, `/about`         | Public marketing pages        |
| `app/(content)/`   | `/blog`, `/guides`    | MDX-driven content            |
| `app/(community)/` | `/forum`, `/profiles` | Community features (Phase 3+) |

### Route Group Conventions

- Wrap feature areas in `(group)/` folders to share layouts without adding URL segments.
- Collocate `loading.tsx`, `error.tsx`, and `not-found.tsx` inside each segment that needs them.

---

## Component Hierarchy

```
components/
├── ui/              # Primitive, design-system UI components (Button, Card, Badge…)
├── layout/          # Header, Footer, Nav, Sidebar
├── content/         # MDX-aware wrappers (ArticleLayout, Prose, TableOfContents)
└── shared/          # Cross-cutting components (SEO, Analytics, ThemeProvider)
```

**Rules:**

- Components in `ui/` must be pure UI — no data fetching, no business logic.
- Server Components are the default. Add `"use client"` only when interactivity or browser APIs are required.
- Export a single default component per file; co-locate sub-components in the same file unless they are reused.

---

## Design System Tokens

All tokens are defined in `tailwind.config.ts` under `theme.extend`.

### Color Palette

| Token                | Value     | Usage                            |
| -------------------- | --------- | -------------------------------- |
| `beagle-cream`       | `#FDF6EC` | Page background                  |
| `beagle-cream-dark`  | `#F5E8D3` | Section backgrounds, code blocks |
| `beagle-tan`         | `#D4A96A` | Dividers, accents                |
| `beagle-tan-light`   | `#E8C99A` | Hover states                     |
| `beagle-tan-dark`    | `#B8863A` | Borders                          |
| `beagle-brown`       | `#7B4F2E` | Body text, secondary headings    |
| `beagle-brown-light` | `#A06B3F` | Links (hover)                    |
| `beagle-brown-dark`  | `#4E2E12` | Primary headings                 |
| `beagle-espresso`    | `#2C1A0E` | High-contrast text               |
| `beagle-amber`       | `#E8A030` | CTA, highlights                  |
| `beagle-amber-light` | `#F5C060` | Link underlines                  |

### Typography Scale

Uses Tailwind's default type scale, extended with tighter leading on display sizes (`5xl`, `6xl`). Font families are exposed as CSS vars (`--font-sans`, `--font-serif`, `--font-mono`) in `layout.tsx`.

### Spacing Tokens

Extended half-step tokens: `18`, `22`, `26`, `30`, `34`, `38`, `42`, `46`, `50` (each = N × 0.25rem).

### Shadows

| Token            | Usage                     |
| ---------------- | ------------------------- |
| `shadow-warm`    | Cards, panels             |
| `shadow-warm-lg` | Modals, elevated surfaces |

---

## MDX Configuration

MDX is handled via `@next/mdx` with `remark-gfm` for GitHub Flavored Markdown support.

- **Config file:** `next.config.mjs` — registers `.md` and `.mdx` as page extensions.
- **Component overrides:** `app/mdx-components.tsx` — maps HTML elements to styled components.
- **Content location:** `content/` — plain `.mdx` files that can be imported as React components or mapped to routes.

### Content Pipeline (Phase 2+)

```
content/
├── blog/
│   └── *.mdx          # Blog posts with frontmatter
├── guides/
│   └── *.mdx          # How-to guides
└── pages/
    └── about.mdx      # Static content pages
```

Frontmatter will be parsed via `gray-matter` when content routing is added in Phase 2.

---

## Data Flow

```
Server Components (default)
  └─ fetch() directly in components / async server components
       └─ Pass data as props to Client Components where needed

Client Components ("use client")
  └─ Local state only (form inputs, UI toggles)
  └─ No direct data fetching unless using SWR / React Query (Phase 3+)
```

---

## Git Workflow

| Branch                | Purpose                                               |
| --------------------- | ----------------------------------------------------- |
| `main`                | Production-ready code. Direct pushes via agents only. |
| `phase-N/<feature>`   | Phase-scoped feature branches                         |
| `fix/<description>`   | Bug fixes                                             |
| `chore/<description>` | Tooling, config, dependency updates                   |

**Commit conventions:** Use conventional commits — `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`.

**Pre-commit hooks (Husky + lint-staged):**

- ESLint (auto-fix) on `*.{js,jsx,ts,tsx}`
- Prettier on all supported files

---

## Key Files Reference

| File                     | Purpose                              |
| ------------------------ | ------------------------------------ |
| `app/layout.tsx`         | Root layout, metadata                |
| `app/page.tsx`           | Home page                            |
| `app/globals.css`        | Global styles, CSS vars              |
| `app/mdx-components.tsx` | MDX element overrides                |
| `tailwind.config.ts`     | Design tokens                        |
| `next.config.mjs`        | Next.js + MDX config                 |
| `tsconfig.json`          | TypeScript config (`@/*` path alias) |
| `.eslintrc.json`         | ESLint config (Next.js rules)        |
| `.prettierrc`            | Prettier config                      |
| `.husky/pre-commit`      | Pre-commit hook                      |
| `ARCHITECTURE.md`        | This file                            |
