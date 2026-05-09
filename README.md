# YachtWorx — Master Demo (v3.0.0)

> **Yacht management on easy mode.**
> A full-stack SaaS platform connecting yacht owners with elite marine service professionals.
>
> **This is the public demo build.** It runs entirely on mock data — no backend, no signup, no real data. For the live-mode source, see [`yachtworx_v2.0`](https://github.com/bharatsbhat20/yachtworx_v2.0).

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite) ![Demo](https://img.shields.io/badge/Mode-Demo--Only-orange) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss)

---

## What's in the demo

- **Boat Owner Dashboard** — Fleet overview, vessel health scores, maintenance tracking
- **Boat Profile System** — Full vessel spec management with AI autofill (cached in `localStorage`)
- **Component Tracker** — Per-component health scoring with service interval tracking
- **Document Vault** — Maintenance record storage UI (mock files)
- **Marketplace** — Browse verified marine service providers
- **Service Requests** — End-to-end maintenance job flow
- **Provider Dashboard** — Separate view for service professionals
- **Marina Dashboard** — Slip-management view for marina operators
- **Insurance & Warranty** — Module 6 wallet view

All state lives in memory + `localStorage`. Refreshing keeps your changes; clearing site data resets to seed.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Vite 8 |
| Styling | Tailwind CSS (custom navy/ocean/teal palette) |
| State | Zustand |
| Routing | React Router v7 |
| Animations | Framer Motion |
| Charts | Recharts |
| Icons | Lucide React |

> Supabase types and SQL schema are kept in the tree for reference but the client is hardcoded to `null` in [`src/lib/supabase.ts`](src/lib/supabase.ts) — this build cannot connect to a backend.

---

## Quick Start

```bash
git clone https://github.com/bharatsbhat20/yachtworx_demo_v3.0.0.git
cd yachtworx_demo_v3.0.0
npm install --legacy-peer-deps
npm run dev
```

The app starts at `http://localhost:5173` with mock data pre-loaded.

**Demo credentials:**

| Role | Email | Password |
|------|-------|----------|
| Boat Owner | `james@yachtworx.io` | `Password1` |
| Service Provider | `marcus@pacificmarine.com` | `Password1` |

---

## Health Score System (TRD §4.6)

Components are scored based on days until/since their last service:

| Status | Score | Band |
|--------|-------|------|
| > 30 days until due | 100 | Good |
| 15–30 days until due | 70 | Good |
| 0–14 days until due | 40 | Fair |
| 1–30 days overdue | 20 | Needs Attention |
| > 30 days overdue | 0 | Needs Attention |

Vessel health = average of all component scores. Bands: **Good (80–100)**, **Fair (50–79)**, **Needs Attention (0–49)**.

---

## Available Scripts

```bash
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript project-references build
```

---

## Deployment

This repo is wired for Vercel out of the box via [`vercel.json`](vercel.json). Just import the repo in the Vercel dashboard — no env vars required.

---

## License

MIT — free to use, fork, and build on.
