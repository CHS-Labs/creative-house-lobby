# Creative House Lobby — Vision Document
## The Master Entry Point for the Creative House Network

**Last Updated:** 2026-03-10
**Status:** Live — https://creative-house-studios-2.vercel.app
**GitHub:** https://github.com/CreativeHouseStudios/creative-house-lobby

---

## What This Is

The Creative House Lobby is the master navigation hub for the Creative House Studios network.

It is not a website. It is not a portfolio. It is a cinematic entry point — the front door through which visitors discover the movements, productions, and creators that Creative House stewards.

This lobby follows the same architectural pattern as the IDLW Lobby: five sections, a video hero arrival, glassmorphism door cards, a spotlight section, an SVG network constellation, and a footer.

---

## Architecture

### The 3 Doors

Visitors enter through one of three doors:

| Door | Route | Description |
|------|-------|-------------|
| Story Universes | `/movements` | The movements Creative House supports — IDLW, The Simple Plan, Advo-Cassie |
| Production Studio | `/studio` | Films, documentaries, and the production slate |
| Voices Network | `/voices` | Creators, researchers, and storytellers building with CHS |

> **Note:** A dedicated `/production` route is planned for Phase 2. Both the "Production Studio" door and footer link currently point to `/studio`.

---

## The 5-Section Structure (IDLW Pattern)

### Section 1 — Cinematic Arrival
Full-screen video hero (`00-Hero-cover.mp4`). Title, tagline, and "Enter the Lobby" CTA that smooth-scrolls to Section 2.

### Section 2 — Choose Your Path
Warm gold gradient band (`from-[#1C1410] via-[#2A1F14]`). Three glassmorphism door cards with ripple hover animation. Each card navigates to a primary route.

### Section 3 — Featured Spotlight
"NOW DEVELOPING" label + Creative House Productions spotlight. Links to `/studio` (Enter Production Studio) and `/movements` (View Current Projects).

### Section 4 — Proof in the Network
SVG world map with 3 pinging gold anchor points (IDLW, The Simple Plan, Advo-Cassie). Dashed connection lines between points. Each point navigates to `/movements/{slug}`.

**Phase 2:** Connect to Supabase Credibility Spine — same pattern as IDLW Lobby constellation (live data, real anchor points from DB).

### Section 5 — Footer
Mirrors IDLW footer structure. CHS branding, Film icon, gold accent `#C9972A`. Links: Movements / Production / Voices / Collaborate.

---

## Color System

| Token | Value | Adapted From |
|-------|-------|-------------|
| Primary gold | `#C9972A` | IDLW teal `#007C91` |
| Dark band | `#1C1410` / `#2A1F14` | IDLW dark sections |
| Near-black | `#0A0A0A` / `#050505` | Shared |
| Card glass | `bg-white/[0.08] backdrop-blur-md` | Shared |

---

## The Studio Sub-Section

`/studio` expands into a full sub-section with its own header navigation:

| Route | Page |
|-------|------|
| `/studio` | Landing page |
| `/studio/productions` | Blind Ambition, Blind Adventures, Thirst |
| `/studio/projects` | Links to the 3 movement universes |
| `/studio/systems` | 3-layer infrastructure explainer |
| `/studio/about` | Philosophy and mission |

---

## The Story Universes (Movement Pages)

Each story universe has a dedicated page at `/movements/{slug}` with:
- Full-screen video background
- Status badge (Active / In Development)
- Description and project copy from the original project pages
- External links (website, YouTube, app) where applicable

| Slug | Movement | Status |
|------|----------|--------|
| `idlw` | I Drink Living Water | Active — Evolving Platform |
| `simple-plan` | The Simple Plan | Active — Sponsored by the Misty Foundation |
| `advo-cassie` | Advo-Cassie | In Development — Seeking Aligned Sponsor |

---

## Tech Stack

- **Framework:** React + Vite + TypeScript
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS (arbitrary values)
- **Deployment:** Vercel (`shelly-chss-projects` scope)
- **Repository:** GitHub — `CreativeHouseStudios/creative-house-lobby`

---

## Phase 2 Roadmap

1. **Build `/production` route** — dedicated page separate from Studio sub-section
2. **Connect constellation to Supabase Credibility Spine** — live anchor points from DB (same pattern as IDLW)
3. **Rename Vercel project** to `creative-house-lobby` for clean URL
4. **Clean up `/src/components/lobby/`** — unused remnants from earlier iteration
5. **Add Voices Network pages** — currently a placeholder route
6. **Move remaining first-project content** into this shell (layer by layer)

---

## Infrastructure Relationship

```
creativehouse.app (this lobby)
├── /movements          → Story Universes index
│   ├── /idlw           → I Drink Living Water ──→ idrinklivingwater.com
│   ├── /simple-plan    → The Simple Plan ─────→ thesimpleplan.app
│   └── /advo-cassie    → Advo-Cassie ──────────→ advo-cassie.app (future)
├── /studio             → Production Studio sub-section
├── /voices             → Creator Network (placeholder)
└── /collaborate        → Work With Us
```

---

## The Credibility Spine (Phase 2)

The Credibility Spine is the data layer that powers all Creative House story universes.

It collects and organizes stories, sources, research, and creator contributions into a structured Supabase database. Stories are mapped geographically and categorized by theme, allowing movements to demonstrate reach and legitimacy.

**Phase 2 task:** Connect the CHS Lobby constellation (Section 4) to this spine — pulling live anchor points from Supabase, matching the IDLW Lobby pattern.

---

## Mission

Creative House exists to amplify stories that matter and build the infrastructure that helps them reach the world.

The lobby is the door. Everything else is the infrastructure behind it.
