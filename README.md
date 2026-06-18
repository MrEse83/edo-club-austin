# Edo Club of Austin — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Built as a skeleton
first: real content can be dropped in incrementally without touching layout
code.

## Design direction

Palette and type choices are documented as CSS-level tokens in
`tailwind.config.ts` (colors) and `app/layout.tsx` (fonts), not hardcoded
inline, so the look can be adjusted from two files. Quick summary:

- **Parchment** background, **ink** (warm near-black) text — not a generic
  pale-cream template.
- **Bronze** as the primary brand color, **coral** as the CTA/accent color
  (a nod to the coral beads worn in Edo regalia), **gold** used sparingly.
- One dark contrast section (`History`) — the only section that breaks the
  light parchment background, used for the club's origin story.
- A repeating "bead divider" (`components/ui/BeadDivider.tsx`) is the one
  signature visual motif, used between sections instead of a plain line.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content (no code changes required)

Everything a non-developer would want to update lives in `/content`:

- `content/site.ts` — club name, tagline, mission/vision text, contact
  info, founding year
- `content/leadership.ts` — executive list (name, title, photo path)
- `content/events.ts` — events shown on the homepage and Events page
- `content/gallery.ts` — gallery photos and their category

Photos go in `/public/images/...` — see `public/images/README.md` for the
expected folder layout.

## Contact form setup

The form posts to `/app/api/contact/route.ts`, which uses
[Resend](https://resend.com) to deliver the inquiry to the club and send the
visitor an automatic acknowledgment.

1. Create a free Resend account and verify the sending domain (or use their
   shared `onboarding@resend.dev` sender while testing).
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and
   `CLUB_CONTACT_EMAIL`.
3. Once the real domain is live, update the `from` addresses in
   `lib/resend.ts` to use it.

## Deploying

1. Push this repo to GitHub.
2. Import it on [Vercel](https://vercel.com) — it auto-detects Next.js.
3. Add the same environment variables from `.env.local` in the Vercel
   project settings.
4. Point the custom domain at the Vercel project once it's registered.

## Future expansion (not built yet, but the structure supports it)

- **Admin dashboard / CMS** — content currently lives in typed TypeScript
  files under `/content`. Each file maps cleanly to a future database table
  or CMS collection (events, leadership, gallery), so swapping a file's
  internals for a database query later doesn't require touching any
  component — components only import from `/content`, never read raw data
  directly.
- **Event management** — `lib/types.ts` already defines the `ClubEvent`
  shape used everywhere; a future form/dashboard just needs to write to
  whatever replaces `content/events.ts`.
- **Member portal** — would slot in as a new `/app/members` route group with
  its own auth, without touching the public pages.

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Home
  events/page.tsx
  gallery/page.tsx
  contact/page.tsx
  api/contact/route.ts
components/
  layout/              Navbar, Footer
  sections/            Homepage sections (Hero, About, History, ...)
  forms/               ContactForm
  ui/                  Small reusable pieces (Button, Container, ...)
content/               Editable content — the "database" for v1
lib/                   Types + the Resend email helper
```
