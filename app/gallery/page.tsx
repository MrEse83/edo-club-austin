"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { galleryImages } from "@/content/gallery";
import { GalleryCategory } from "@/lib/types";

const categories: ("All" | GalleryCategory)[] = [
  "All",
  "Meetings",
  "Cultural Celebrations",
  "Conventions",
  "Community Gatherings",
];

export default function GalleryPage() {
  const [active, setActive] = useState<"All" | GalleryCategory>("All");

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionLabel>Gallery</SectionLabel>
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          Moments from the club
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-sm border px-4 py-2 text-sm font-medium transition-colors ${
                active === category
                  ? "border-coral bg-coral text-parchment"
                  : "border-bronze/30 text-ink/80 hover:border-bronze"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((image, i) => (
            <div
              key={`${image.src}-${i}`}
              className="relative aspect-square overflow-hidden border border-bronze/20"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-ink/60">No photos in this category yet.</p>
        )}
      </Container>
    </section>
  );
}
