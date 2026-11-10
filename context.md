# Grey Barnacle — Project Context

> Reference for an LLM or engineer joining the project. This file describes the repository; it is not a request to implement every item mentioned here. The active user request determines the current task. Treat the roadmap as future possibilities, not authorization to add those features.

## Project at a glance

Grey Barnacle is a fictional Cairo-based studio offering illustration, drawing and creative-technology workshops. The website promotes the studio, introduces its team, presents workshop offerings and publishes studio journal articles. The intended audience is young adults and curious image makers.

The visual identity is industrial and technical: layered charcoal surfaces, restrained steel-blue accents, geometric compositions, clear borders, and editorial typography. It should feel confident, creative and grounded. Avoid gaming/cyberpunk styling, generic SaaS patterns, excessive neon, glow, gradients, rounded cards and glass effects.

## Stack and commands

- Next.js App Router, React, TypeScript and Tailwind CSS v4.
- Current lockfile resolves Next.js 16.4.5, React 19.3.1, Tailwind CSS 4.3.5 and TypeScript 6.0.3. `package.json` uses `latest`; `package-lock.json` pins the current install.
- Node.js 20.9 or newer; npm scripts are defined in `package.json`.

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

`@/*` maps to the project root. There is no `src/` directory. Tailwind v4 is imported from `app/globals.css` and compiled through `@tailwindcss/postcss`; do not add Tailwind v3 configuration patterns.

## Routes and responsibilities

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `app/page.tsx` | Landing page, studio introduction, team profiles, workshop highlights and social CTA |
| `/info` | `app/info/page.tsx` | Studio story, principles and team profiles |
| `/workshops` | `app/workshops/page.tsx` | Workshop catalogue |
| `/workshops/[slug]` | `app/workshops/[slug]/page.tsx` | Workshop detail, schedule, price, instructor, outcomes and materials |
| `/blog` | `app/blog/page.tsx` | Journal index |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Full article, author and article metadata |

`app/layout.tsx` owns site metadata, global navigation, skip link and footer. `app/globals.css` owns design tokens and shared custom utility classes. All routes are Server Components; there is currently no client-side interaction that requires a Client Component.

## Content model and flow

`lib/content.ts` is the source of truth for all local prototype content:

- `studio`: brand details, Cairo location, introduction, story and principles.
- `teamMembers`: fictional staff IDs, names, roles, bios and areas of focus.
- `workshops`: the three existing workshop slugs, descriptions, mode/location, duration, level, numeric `priceEGP`, maximum group `capacity`, ISO `cohortDates`, outcomes, materials, `instructorId` and image metadata.
- `articles`: the three existing article slugs, ISO `publishedAt`, category, excerpt, `authorId`, reading time, tags, ordered body sections and image metadata.
- `ContentImage`: image `src`, descriptive `alt`, photographer name and original Unsplash `sourceUrl`.
- `formatDate` and `formatPrice`: shared presentation helpers; dates use Cairo time and prices use EGP.

Workshop instructors and article authors refer to `teamMembers` by ID. Dynamic detail pages use `generateStaticParams()` from these arrays and call `notFound()` for unknown slugs. Preserve existing slugs when editing content so current internal links keep working. When adding a team member, connect their ID consistently wherever they are referenced.

All names, bios, prices, dates, capacity values and workshop details are fictional demo content. Cohort dates are currently January–March 2027 and will become stale; refresh them before presenting the site as having upcoming sessions. `capacity` is the maximum class size, not live remaining-seat availability.

## Design and assets

`components/content-image.tsx` is the shared client component for remote content images. It uses `next/image`, fills a fixed-aspect-ratio parent, and switches to a CSS geometric fallback if an image fails. `next.config.ts` only allows remote images from `images.unsplash.com`. Listing and detail views show Unsplash photographer credits.

The core tokens are in `app/globals.css`:

- Background `#09090B`, surface `#141417`, raised surface `#1B1B20`, border `#27272A`.
- Primary text `#E4E4E7`, muted text `#A1A1AA`.
- Steel-blue accent `#64748B`, hover `#475569`, soft highlight `#94A3B8`.

Typography stacks prefer Space Grotesk for display, Inter for body and IBM Plex Mono for labels, with local system fallbacks. Font files are not bundled, and the app does not depend on fetching Google Fonts during build. Workshop and journal photography currently comes from Unsplash remote URLs stored in `lib/content.ts`; failed image requests use CSS-generated abstract fallback artwork. There is no local `public/` media directory or client-owned photography yet.

Keep layouts responsive using the current Tailwind breakpoints and maintain semantic headings, descriptive image labels, reduced-motion support and visible `:focus-visible` states.

## Integrations and current limits

- Content is imported from local TypeScript arrays. There is no CMS, database, API route, persistence or backend.
- There is no booking, seat availability, payment, authentication or registration flow. Workshop CTAs are enquiry links only.
- `studio.contactEmail` uses the reserved `.example` domain. Instagram links point to the platform homepage, not a studio profile. Do not replace these with real contact/profile details unless the user provides them.
- No real client, staff or workshop details have been provided; do not present sample data as verified business information.

## Working guidance for future LLMs

- First inspect the relevant route, shared styles and data shape before changing them. Keep content in `lib/content.ts` and rendering in the relevant `app/` route unless the user asks for a different architecture.
- Do not add dependencies, Supabase, APIs, booking logic or external media unless the active user request asks for them.
- `AGENTS.md` is generated by Next.js and instructs agents to read the relevant installed Next.js docs under `node_modules/next/dist/docs/` before changing Next.js APIs or conventions. Follow it when doing framework work.
- The file `README.md` contains the quick start and route list. Update it when setup commands or product routes change.

## Possible future work — not started

1. Replace Unsplash demo photography and CSS fallbacks with approved brand assets and client-owned workshop/editorial imagery.
2. Replace fictional sample data with client-approved content or a content-management workflow.
3. If requested, integrate a database such as Supabase for workshops and articles.
4. If requested, design and implement real availability, booking and backend API flows.
