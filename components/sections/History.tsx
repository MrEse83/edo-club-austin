import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function History() {
  return (
    <section className="relative bg-deep py-20 text-parchment sm:py-28 overflow-hidden">
      {/* Ivory mask faded into the background */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/cultural-celebrations/ivory-mask.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
        />
      </div>

      {/* Content sits on top */}
      <div className="relative z-10 mx-auto max-w-content px-6 sm:px-8">
        <Reveal>
          <SectionLabel tone="parchment">Our history</SectionLabel>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Over 30 years in Central Texas
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/80">
            {site.historyText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}