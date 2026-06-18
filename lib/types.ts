export interface LeaderProfile {
  name: string;
  title: string;
  photo: string; // path under /public/images/leadership
}

export interface ClubEvent {
  slug: string;
  title: string;
  date: string; // ISO format, e.g. "2026-08-15"
  time?: string; // e.g. "12:00 PM – 5:00 PM"
  location: string;
  description: string;
  flyer?: string; // path under /public/images/events
  isConvention?: boolean;
}

export type GalleryCategory =
  | "Meetings"
  | "Cultural Celebrations"
  | "Conventions"
  | "Community Gatherings";

export interface GalleryImage {
  src: string; // path under /public/images/gallery/<category-slug>
  alt: string;
  category: GalleryCategory;
}
