# Grey Barnacle

Next.js App Router starter for Grey Barnacle, an illustration workshop studio.

## Start locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — landing page, team introduction and social call to action
- `/info` — studio information
- `/workshops` — workshop catalogue
- `/workshops/[slug]` — individual workshop detail pages
- `/blog` — journal index
- `/blog/[slug]` — individual journal posts

The fictional studio, team, workshop and journal content lives in `lib/content.ts`. Workshop dates and EGP prices are sample values. The enquiry email uses the reserved `.example` domain; replace it and connect a real booking flow before launch. Instagram links currently point to the platform homepage rather than a studio profile.
