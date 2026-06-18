import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function History() {
  return (
    <section className="bg-deep py-20 text-parchment sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
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
