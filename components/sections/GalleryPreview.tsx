import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages } from "@/content/gallery";

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 4);

  return (
    <section className="bg-parchment-soft py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Moments</SectionLabel>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                From our gatherings
              </h2>
            </div>
            <Button href="/gallery" variant="secondary">
              View full gallery
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {preview.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/5] overflow-hidden border border-bronze/20"
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
        </Reveal>
      </div>
    </section>
  );
}
