# Image folders

Drop real photos into the matching folder, then point to them from the
files in `/content` (e.g. `content/leadership.ts`, `content/events.ts`,
`content/gallery.ts`).

- `leadership/` — headshots for each executive member
- `events/` — flyer images for specific events
- `gallery/meetings/`
- `gallery/cultural-celebrations/`
- `gallery/conventions/`
- `gallery/community-gatherings/`

Recommended size: at least 1200px on the longer side, JPEG, under 500KB
where possible. Next.js will optimize/resize them automatically — you don't
need to pre-resize for different screen sizes.

For v1, photos can live directly in this folder. Once the gallery grows
large, move them to Cloudinary (or similar) and update the `src` values in
`/content` to the hosted URLs — `next.config.mjs` already allows
`res.cloudinary.com` as a remote image source.
