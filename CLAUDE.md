# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Júlio Alves, a Full Stack Developer focused on application security. Built with Next.js 16 (App Router) and deployed on Vercel.

## External Context

- Always consult the Claude Workflow vault before making project changes when more context is needed about current state, prior decisions, open cleanup items, or user preferences.
- The local vault is named `Claude-Workflow`.
- Portfolio-specific notes are in the vault's `Portfolio` folder.
- Start with the vault-level `CLAUDE.md` for workflow guidance, then read `Portfolio/README.md` and the relevant files in the Portfolio folder for this project.

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Start dev server with --turbo (http://localhost:3000)
pnpm build       # Production build
pnpm start       # Start production server
pnpm lint        # Run ESLint
```

## Architecture

### Layout

- `app/layout.tsx` — Root layout wrapping the app with `ThemeProvider` and `LoadProvider`
- `app/page.tsx` — Main page using `"use client"` directive. Renders `MainFrame` containing all portfolio sections

### Component Structure

- **`components/main-frame.tsx`** — Orchestrates portfolio sections in order: TopBar → Welcome → Stacks → Projects → About → Contact → Footer
- **`components/ui/`** — shadcn/ui components (auto-generated, generally don't need manual edits)

### Contexts

- **`contexts/theme-context.tsx`** — Light/dark theme management
- **`contexts/load-context.tsx`** — Page load/entry animation state management

### Styling

- **Tailwind CSS v3** with shadcn/ui theme tokens (CSS variables in `app/globals.css`)
- Dark mode via `class` strategy (`dark:` prefix)
- Path alias: `@/*` maps to project root
- Custom cards should follow the existing project palette in both modes: light cards use `border-slate-200`, `bg-slate-100/80`, `text-slate-900/90`; dark cards use `border-white/10`, `bg-white/5`, `text-gray-300/90`, with subtle hover states.
- Avoid raw brand colors for stack/card icons unless there is a specific design reason. Prefer `currentColor` plus slate/gray foreground classes so icons remain visible in both light and dark mode.

### Key Dependencies

- Next.js 16, React 19, TypeScript
- shadcn/ui (Radix UI primitives)
- next-themes (theme toggling)
- lucide-react (icons)

## Current State Notes

- The former 3D laptop feature has been fully removed. Do not reintroduce `components/laptop-scene.tsx`, `components/laptop-model.tsx`, `spinning-laptop-component.zip`, Three.js, React Three Fiber, or Drei unless explicitly requested.
- Removed dependencies: `three`, `@types/three`, `@react-three/fiber`, and `@react-three/drei`. The lockfile has been refreshed after removal.
- `app/page.tsx` now directly renders `MainFrame`; there is no dynamic laptop import or 3D loading fallback.
- `next.config.js` no longer includes Three package optimization or a custom webpack cache hook.
- The TypeScript context issues have been fixed:
  - `LoadContext` now exposes `{ isLoaded, setIsLoaded }` with explicit types.
  - `ThemeContext` now uses a typed `Theme = "dark" | "light"` value instead of runtime union syntax.
- The empty `app/endpoint/page.tsx` route was deleted because Next's generated validator treated it as a non-module.
- `pnpm exec tsc --noEmit` passes after clearing stale `.next` generated files.
- The app uses local system font stacks configured in `app/globals.css` and `tailwind.config.ts`, avoiding remote font fetching during builds.
- Tailwind is currently v3. `@tailwindcss/postcss` remains in dependencies as a v4-era leftover, but the active `postcss.config.mjs` uses the Tailwind v3 plugin shape.
- The project uses a single global stylesheet: `app/globals.css`.
