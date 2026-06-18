import { GalleryImage } from "@/lib/types";

// Drop real photos into /public/images/gallery/<category>/ and list them here.
// The Gallery page and homepage preview both read from this single array.
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/meetings/placeholder.jpg",
    alt: "Members at a monthly meeting",
    category: "Meetings",
  },
  {
    src: "/images/gallery/cultural-celebrations/placeholder.jpg",
    alt: "Cultural celebration with traditional attire",
    category: "Cultural Celebrations",
  },
  {
    src: "/images/gallery/conventions/placeholder.jpg",
    alt: "Delegates at the national convention",
    category: "Conventions",
  },
  {
    src: "/images/gallery/community-gatherings/placeholder.jpg",
    alt: "Community gathering in Austin",
    category: "Community Gatherings",
  },
];
