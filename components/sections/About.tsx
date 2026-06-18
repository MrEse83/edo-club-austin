import { SectionLabel } from "@/components/ui/SectionLabel";
import { BeadDivider } from "@/components/ui/BeadDivider";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <Reveal>
          <div className="grid gap-12 sm:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionLabel>About the club</SectionLabel>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Who we are
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-ink/80">
              {site.aboutSummary}
            </p>
          </div>
        </Reveal>
        <BeadDivider className="mt-16 text-bronze/40" />
      </div>
    </section>
  );
}
